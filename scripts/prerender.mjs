/*
 * Post-build: emit one dist/<route>/index.html per route with that route's real
 * <head> metadata baked into the initial HTML.
 *
 * WHY THIS EXISTS
 * Vite emits a single index.html. Served for all 36 routes, every page would
 * claim the homepage's title ("Revolutionizing Digital Healthcare"). The legacy
 * PHP site that this replaces is still live and still ranking with 27 distinct
 * per-page titles, so shipping one title for everything is a real SEO
 * regression — /pacs would lose the "Picture Archiving & Communication System"
 * title it currently ranks on.
 *
 * WHY NOT A CLIENT-SIDE HEAD MANAGER (react-helmet et al)
 * Google executes JS and would eventually see a client-set title, but social
 * scrapers (WhatsApp/Slack/LinkedIn/X) do not — they read the raw HTML. Baking
 * the tags in at build time fixes both, and costs no runtime bytes.
 *
 * WHY METADATA ONLY, NOT A FULL DOM SNAPSHOT
 * A puppeteer-style prerender would serialise the rendered DOM. This app opens
 * with framer-motion reveals at `initial={{ opacity: 0 }}` and WebGL canvases,
 * so a snapshot would bake opacity:0 into the markup and ship content that is
 * invisible without JS — strictly worse than what we have. The body is left as
 * the SPA shell and React hydrates it exactly as before; only the <head> is
 * specialised. Titles/descriptions/og are the part scrapers need in raw HTML.
 *
 * SERVING REQUIREMENT (see DEPLOY.md)
 * The host must try a real file before the SPA catch-all, so /pacs resolves to
 * dist/pacs/index.html rather than falling through to dist/index.html. Every
 * mainstream static host does this by default; a blanket `/* -> /index.html`
 * rewrite placed ahead of file lookup would silently defeat this whole step.
 */
import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const HERE = path.dirname(fileURLToPath(import.meta.url))
const DIST = path.resolve(HERE, '../dist')
const META = path.resolve(HERE, '../src/seo/route-meta.json')

const ORIGIN = 'https://www.raster.in'
const OG_IMAGE = `${ORIGIN}/img/raster-og.jpg`
const START = '<!--seo:start-->'
const END = '<!--seo:end-->'

/** Escape for use inside an HTML double-quoted attribute. */
const attr = (s) =>
  String(s)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')

/** Escape for use as HTML text (e.g. inside <title>). */
const text = (s) => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')

const headFor = (routeKey, m) => {
  const url = routeKey === '' ? `${ORIGIN}/` : `${ORIGIN}/${routeKey}`
  const ogTitle = m.ogTitle || m.title
  const ogDescription = m.ogDescription || m.description
  const ogImage = m.ogImage || OG_IMAGE

  const lines = [START, `    <title>${text(m.title)}</title>`]
  // The legacy site genuinely ships no description on a couple of pages
  // (asset-management, our-team). Preserve that rather than invent one.
  if (m.description) lines.push(`    <meta name="description" content="${attr(m.description)}" />`)
  if (m.keywords) lines.push(`    <meta name="keywords" content="${attr(m.keywords)}" />`)
  lines.push(`    <link rel="canonical" href="${attr(url)}" />`)
  lines.push('')
  lines.push(`    <meta property="og:type" content="website" />`)
  lines.push(`    <meta property="og:url" content="${attr(url)}" />`)
  lines.push(`    <meta property="og:title" content="${attr(ogTitle)}" />`)
  if (ogDescription) lines.push(`    <meta property="og:description" content="${attr(ogDescription)}" />`)
  lines.push(`    <meta property="og:image" content="${attr(ogImage)}" />`)
  lines.push('')
  lines.push(`    <meta property="twitter:card" content="summary_large_image" />`)
  lines.push(`    <meta property="twitter:url" content="${attr(url)}" />`)
  lines.push(`    <meta property="twitter:title" content="${attr(ogTitle)}" />`)
  if (ogDescription) lines.push(`    <meta property="twitter:description" content="${attr(ogDescription)}" />`)
  lines.push(`    <meta property="twitter:image" content="${attr(ogImage)}" />`)
  lines.push(`    ${END}`)
  return lines.join('\n')
}

const shell = fs.readFileSync(path.join(DIST, 'index.html'), 'utf8')
const meta = JSON.parse(fs.readFileSync(META, 'utf8'))

const s = shell.indexOf(START)
const e = shell.indexOf(END)
if (s === -1 || e === -1) {
  // Fail loudly: silently skipping would ship 36 routes with the homepage title
  // and nobody would notice until rankings moved.
  console.error(`prerender: markers ${START} / ${END} not found in dist/index.html — did index.html change?`)
  process.exit(1)
}

let written = 0
for (const [routeKey, m] of Object.entries(meta)) {
  if (!m.title) {
    console.error(`prerender: route '${routeKey}' has no title in route-meta.json`)
    process.exit(1)
  }
  const html = shell.slice(0, s) + headFor(routeKey, m) + shell.slice(e + END.length)
  const outDir = routeKey === '' ? DIST : path.join(DIST, routeKey)
  fs.mkdirSync(outDir, { recursive: true })
  fs.writeFileSync(path.join(outDir, 'index.html'), html)
  written++
}

console.log(`prerender: wrote ${written} route shells (${new Set(Object.values(meta).map((m) => m.title)).size} unique titles)`)
