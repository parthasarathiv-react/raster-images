/*
 * Google Ads gtag (AW-334660420) — SPA page_view bridge.
 *
 * The tag itself is loaded in index.html, ported from the live raster.in <head>.
 * That snippet fires exactly once, on hard load. The legacy site was one full
 * page load per page so that was enough; this is a client-side router, where
 * every subsequent navigation is a pushState with no reload. Without the hook
 * below the account would record one page_view per SESSION instead of one per
 * page, quietly starving conversion attribution and remarketing audiences.
 *
 * Guarded on window.gtag existing: an ad blocker or a failed CDN fetch must not
 * take the app down.
 */
import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

export const GA_ID = 'AW-334660420'

export const pageView = (path) => {
  if (typeof window === 'undefined' || typeof window.gtag !== 'function') return
  window.gtag('event', 'page_view', {
    page_path: path,
    page_location: window.location.href,
    page_title: document.title,
  })
}

/**
 * Fires a page_view on every client-side navigation. The initial load is
 * already covered by the gtag('config', ...) call in index.html, so skip it
 * here to avoid double-counting the landing page.
 */
export const usePageViews = () => {
  const { pathname, search } = useLocation()
  useEffect(() => {
    // Skip the very first render: index.html's gtag('config') already sent it.
    if (window.__rasterFirstPageView === undefined) {
      window.__rasterFirstPageView = true
      return
    }
    pageView(pathname + search)
  }, [pathname, search])
}
