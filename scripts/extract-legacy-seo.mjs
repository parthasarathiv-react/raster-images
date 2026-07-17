/*
 * One-shot extractor: legacy PHP <head> -> src/seo/route-meta.json
 *
 * The old site (https://www.raster.in/) is still live and still ranking, and it
 * carried hand-written per-page metadata: 27 unique <title>s across 36 pages.
 * This React app serves ONE index.html for every route, so without this map each
 * route would inherit the homepage's title/description and /pacs would lose its
 * "Picture Archiving & Communication System" title — the strongest on-page
 * signal it currently ranks on.
 *
 * The legacy source is a frozen snapshot, so this runs on demand (not in the
 * build) and its output is committed. Re-run only if the legacy copy changes:
 *   node scripts/extract-legacy-seo.mjs
 *
 * Legacy filenames map 1:1 onto the route keys in src/routes.js (index.php -> '').
 */
import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

// import.meta.dirname needs Node >=20.11; this project runs Node 18.
const HERE = path.dirname(fileURLToPath(import.meta.url))

const LEGACY_DIR = '/home/raster/sarathi/raster (copy).in'
// Full metadata: build-time only, consumed by scripts/prerender.mjs. Never
// imported by the app — it is ~17KB of descriptions the client has no use for,
// since the prerendered HTML already carries the right one per route.
const OUT = path.resolve(HERE, '../src/seo/route-meta.json')
// Titles only (~2.5KB): this one IS shipped, so the tab title updates on
// client-side navigation instead of keeping the landing page's title.
const OUT_TITLES = path.resolve(HERE, '../src/seo/route-titles.json')
const ROUTES = path.resolve(HERE, '../src/routes.js')

// PHP files that are includes/handlers, not pages.
const NOT_PAGES = new Set(['header', 'footer', 'product-list', 'contact-mail', 'req-demo-mail'])

const decode = (s) =>
  s
    .replace(/&amp;/g, '&')
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&nbsp;/g, ' ')
    .replace(/\s+/g, ' ')
    .trim()

const grab = (html, re) => {
  const m = html.match(re)
  return m ? decode(m[1]) : null
}

const routeKeys = new Set(
  [...fs.readFileSync(ROUTES, 'utf8').matchAll(/^\s*'([^']*)':\s*\(\)\s*=>/gm)].map((m) => m[1]),
)

const meta = {}
const warnings = []

for (const file of fs.readdirSync(LEGACY_DIR).filter((f) => f.endsWith('.php')).sort()) {
  const slug = file.replace(/\.php$/, '')
  if (NOT_PAGES.has(slug)) continue

  const key = slug === 'index' ? '' : slug
  if (!routeKeys.has(key)) {
    warnings.push(`legacy ${file} has no route key '${key}' — skipped`)
    continue
  }

  const html = fs.readFileSync(path.join(LEGACY_DIR, file), 'utf8')
  const head = html.slice(0, html.search(/<\/head>/i) + 1)

  const title = grab(head, /<title>([\s\S]*?)<\/title>/i)
  const description = grab(head, /<meta[^>]+name=["']description["'][^>]+content=["']([^"']*)["']/i)
  const keywords = grab(head, /<meta[^>]+name=["']keywords["'][^>]+content=["']([^"']*)["']/i)
  const ogTitle = grab(head, /<meta[^>]+og:title["'][^>]+content=["']([^"']*)["']/i)
  const ogDescription = grab(head, /<meta[^>]+og:description["'][^>]+content=["']([^"']*)["']/i)
  const ogImage = grab(head, /<meta[^>]+og:image["'][^>]+content=["']([^"']*)["']/i)

  if (!title) warnings.push(`${file}: no <title>`)
  if (!description) warnings.push(`${file}: no meta description`)
  // Record og:* only when it diverges from title/description, so the JSON stays
  // small and the common case (they are identical) is obvious at a glance.
  const entry = { title, description }
  if (keywords) entry.keywords = keywords
  if (ogTitle && ogTitle !== title) entry.ogTitle = ogTitle
  if (ogDescription && ogDescription !== description) entry.ogDescription = ogDescription
  if (ogImage && ogImage !== 'https://raster.in/img/raster-og.jpg') entry.ogImage = ogImage

  meta[key] = entry
}

const ordered = Object.fromEntries(Object.keys(meta).sort().map((k) => [k, meta[k]]))
fs.mkdirSync(path.dirname(OUT), { recursive: true })
fs.writeFileSync(OUT, JSON.stringify(ordered, null, 2) + '\n')

const titles = Object.fromEntries(Object.entries(ordered).map(([k, m]) => [k, m.title]))
fs.writeFileSync(OUT_TITLES, JSON.stringify(titles, null, 2) + '\n')

const uniqTitles = new Set(Object.values(ordered).map((m) => m.title)).size
console.log(`wrote ${OUT}`)
console.log(`wrote ${OUT_TITLES}`)
console.log(`${Object.keys(ordered).length} routes, ${uniqTitles} unique titles`)
const missing = [...routeKeys].filter((k) => !(k in ordered))
if (missing.length) console.log(`routes with NO legacy metadata: ${missing.map((m) => m || '(index)').join(', ')}`)
for (const w of warnings) console.log(`WARN ${w}`)
