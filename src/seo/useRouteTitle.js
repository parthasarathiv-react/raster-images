/*
 * Keeps document.title correct across client-side navigation.
 *
 * scripts/prerender.mjs bakes the right <title> into each route's initial HTML,
 * which is what crawlers and social scrapers read. But a pushState navigation
 * does not reload the document, so without this hook the tab would keep showing
 * whichever page the visitor happened to land on first.
 *
 * Titles come from route-titles.json, extracted from the legacy PHP site — the
 * same source the prerender uses, so the two can't drift.
 */
import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import routeTitles from './route-titles.json'

export const titleForPath = (pathname) => routeTitles[String(pathname).replace(/^\/+|\/+$/g, '')]

export const useRouteTitle = () => {
  const { pathname } = useLocation()
  useEffect(() => {
    const title = titleForPath(pathname)
    // Unknown path (404-ish): leave whatever the server sent rather than
    // blanking the tab or asserting a title for a page that doesn't exist.
    if (title) document.title = title
  }, [pathname])
}
