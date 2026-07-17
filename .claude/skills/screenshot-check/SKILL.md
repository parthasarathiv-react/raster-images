---
name: screenshot-check
description: >-
  Run this project's Vite dev server and capture headless-Chrome screenshots of one
  or more routes at desktop/tablet/mobile widths, then look at them. Use whenever you
  need to see how a page actually renders — after a CSS/layout/motion change, to check
  mobile responsiveness, or to confirm a redesign landed. Args: route path(s) to shoot,
  e.g. "/", "/pacs", "/contact-us".
---

# Screenshot check

Visually verify pages of this React + Vite site (it uses three.js / WebGL, so the
Chrome GL flags below matter).

## Steps

1. **Start Vite** (background, fixed port so repeat runs are stable):
   ```
   npx vite --port 5199
   ```
   Wait until it responds:
   ```
   curl -s -o /dev/null -w "%{http_code}\n" http://localhost:5199/
   ```
   (expect `200`). Reuse the server if it's already up.

2. **Capture each route** at three breakpoints. Save PNGs to the scratchpad dir, not
   the repo. WebGL + `--virtual-time-budget` lets three/GSAP/framer-motion settle before
   the frame is grabbed:
   ```
   google-chrome --headless=new --use-gl=angle --use-angle=swiftshader --enable-webgl \
     --ignore-gpu-blocklist --hide-scrollbars --window-size=<W>,<H> \
     --virtual-time-budget=9000 --screenshot=<scratch>/<name>-<bp>.png \
     "http://localhost:5199/<route>"
   ```
   Breakpoints:
   | Label   | window-size |
   |---------|-------------|
   | desktop | `1900,1050` |
   | tablet  | `780,1550`  |
   | mobile  | `430,1600`  |

3. **Read every PNG back** with the Read tool and actually inspect it.

## What to look for
- Horizontal overflow / content past the viewport edge (watch mobile).
- Broken Bootstrap grid: misaligned/overlapping `col-*`, collapsed sections.
- Missing `/img/...` images (broken image = real bug).
- Legibility: contrast, truncation, cramped spacing, colliding headings.
- Header mega-menu, `ProductSidebar` indicator, footer, custom cursor look right.
- Whether the change you set out to verify is actually visible.

## Notes
- Scroll-reveal blocks (`REVEAL_SELECTORS` in `src/components/Layout.jsx`) only appear
  after scrolling — a top-of-page shot won't show them.
- For a deeper pass or to offload the work, delegate to the `visual-qa` agent instead.
