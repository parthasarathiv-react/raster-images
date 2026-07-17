# Deploying this site over raster.in

This app replaces the **live, currently-ranking** PHP site at <https://www.raster.in/>.
The hard requirement is that the migration must not move existing search rankings.

Two things in this repo protect that, and **both depend on host configuration**.
Read this before the first deploy.

---

## 1. Required: 301 the legacy `.php` URLs — do this in the same deploy as cutover

Every URL Google currently has indexed ends in `.php` (`about.php`, `pacs.php`,
`lis.php`, `emr.php`, `ris.php`, …). The new routes are extensionless (`/about`,
`/pacs`, `/lis`). **Nothing in this repo can fix that** — redirects are host-level.

Without this map, on cutover day every ranking URL either 404s or serves a blank
SPA shell (a soft 404). Either way the accumulated authority on ~36 URLs is lost,
and the metadata port below buys you nothing, because the URLs it is attached to
no longer exist.

Required rules:

| From | To | Type |
| --- | --- | --- |
| `/index.php` | `/` | 301 |
| `/<name>.php` | `/<name>` | 301 |
| anything not a real file | `/index.html` | 200 rewrite (SPA fallback) |

`lis-and-interfacing.php` appears in the legacy nav but already 404s on the live
site, so it needs no redirect. If you add one anyway, point it at `/lis`.

### Apache / cPanel (likely, since the current site is PHP)

```apache
RewriteEngine On

# Legacy .php URLs -> extensionless. Must come before the SPA fallback.
RewriteRule ^index\.php$ / [R=301,L]
RewriteCond %{REQUEST_FILENAME} !-f
RewriteRule ^(.+)\.php$ /$1 [R=301,L]

# SPA fallback: only when no real file/dir matches, so the prerendered
# per-route directories below still win.
RewriteCond %{REQUEST_FILENAME} !-f
RewriteCond %{REQUEST_FILENAME} !-d
RewriteRule ^ index.html [L]
```

Note: Apache's `mod_dir` will 301 `/pacs` → `/pacs/` (trailing slash) because
`dist/pacs/` is a real directory. That is harmless but means the served URL gains
a trailing slash while the canonical says `/pacs`. To avoid the mismatch either
set `DirectorySlash Off` plus an explicit rewrite, or change `ORIGIN` handling in
`scripts/prerender.mjs` to emit trailing-slash canonicals. Decide before launch.

### Netlify

`public/_redirects` (order matters — the SPA fallback must be last):

```
/index.php   /         301!
/*.php       /:splat   301!
/*           /index.html   200
```

### Vercel

`vercel.json`:

```json
{
  "redirects": [
    { "source": "/index.php", "destination": "/", "permanent": true },
    { "source": "/:path*.php", "destination": "/:path*", "permanent": true }
  ]
}
```

Vercel checks the filesystem before rewrites, so the prerendered routes are served
without extra config.

---

## 2. Required: the host must serve real files *before* the SPA fallback

`npm run build` runs `scripts/prerender.mjs`, which writes **one `index.html` per
route** (36 of them) with that route's real `<title>`/`description`/`og`/`canonical`
baked into the raw HTML:

```
dist/index.html                 -> Revolutionizing Digital Healthcare
dist/pacs/index.html            -> Picture Archiving & Communication System
dist/lis/index.html             -> Integrated Laboratory Information System
...
```

This exists because the legacy site has **27 distinct page titles**, and a stock
Vite build would serve the homepage's title on all 36 routes — a real ranking
regression on every inner page. Social scrapers (WhatsApp/Slack/LinkedIn/X) never
run JS, so this cannot be solved with a client-side head manager alone.

**The catch:** a blanket `/* -> /index.html` rewrite evaluated *before* file lookup
silently defeats the whole step — every route would serve the homepage's head and
nothing would visibly break. Every mainstream static host (Netlify, Vercel,
Cloudflare Pages, nginx `try_files`, Apache) does file-first by default, so this
works out of the box. Just don't "fix" routing by forcing the fallback first.

### Verifying it works

`vite preview` is **not** a valid check here. Its `sirv --single` fallback answers
`/pacs` with the homepage shell even though `dist/pacs/index.html` exists — a
preview-server quirk, not a production one. Verify with a filesystem-first server:

```bash
npm run build
npx serve dist -l 4192
curl -s http://localhost:4192/pacs | grep -o '<title>[^<]*</title>'
# expect: <title>Picture Archiving &amp; Communication System</title>
# NOT:    <title>Revolutionizing Digital Healthcare</title>
```

After deploying, spot-check the same way against the real host before flipping DNS.

---

## 3. Where the SEO metadata comes from

- `src/seo/route-meta.json` — full per-route title/description/keywords. Build-time
  only, consumed by `scripts/prerender.mjs`. Never imported by the app.
- `src/seo/route-titles.json` — titles only (~2.5KB). Shipped, so the tab title
  updates on client-side navigation (`src/seo/useRouteTitle.js`).

Both are generated from the legacy PHP source by:

```bash
npm run seo:extract   # reads /home/raster/sarathi/raster (copy).in/*.php
```

**Do not hand-edit the wording to "improve" it.** Those titles and descriptions are
what currently rank. Change `route-meta.json` deliberately, then re-run the build.

Two legacy pages (`asset-management`, `our-team`) genuinely ship no meta description.
That is preserved rather than invented — the prerender omits the tag for them.

---

## 4. Analytics

Google Ads gtag (`AW-334660420`) is in `index.html`, ported from the live site's
head. The raw snippet only fires on hard load, so `src/lib/gtag.js` also sends a
`page_view` on each client-side route change; without it the account would record
one pageview per session instead of one per page.

---

## 5. Recommended, not done

- **`sitemap.xml`** — the live site has none (`/sitemap.xml` 404s). At a URL
  migration a sitemap meaningfully speeds Google's re-discovery of the new
  extensionless URLs. It can be generated from `src/routes.js` in the prerender
  step; ask if you want it, and add a `Sitemap:` line to `public/robots.txt`.
- **Search Console** — submit a Change of Address / re-crawl after cutover, and
  watch Coverage for a `.php` 404 spike, which would mean the 301 map in §1 is
  missing or wrong.
