import React, { useEffect, Suspense } from 'react';
import Header from './Header';
import Footer from './Footer';
import SmoothScroll from './motion/SmoothScroll';
import CustomCursor from './motion/CustomCursor';
import { Outlet, useLocation } from 'react-router-dom';
import { prefetchRoute } from '../routes';
import { useRouteTitle } from '../seo/useRouteTitle';
import { usePageViews } from '../lib/gtag';

// Lightweight scroll-in reveal for legacy (not-yet-migrated) markup. Uses a
// gentle rise + fade only — no blur/opacity:0 that could leave content stuck
// invisible if the observer misfires. Migrated sections animate via framer's
// <Reveal/> instead, so this only enhances the long-tail class-based blocks.
const REVEAL_SELECTORS = [
    '.news-block',
    '.customer-logos',
    '.team-card',
    '.tech-card',
    '.downloads-card',
    '.timeline-box',
    '.divided-left',
    '.divided-right',
    '.scene-strip',
];

const Layout = () => {
    const location = useLocation();

    // Per-route <title> (prerender covers the initial load; this covers pushState)
    // and the Google Ads page_view that the hard-load-only gtag snippet misses.
    useRouteTitle();
    usePageViews();

    useEffect(() => {
        // Ensure any previously-scrolled page starts at the top on navigation.
        window.scrollTo(0, 0);

        const nodes = document.querySelectorAll(REVEAL_SELECTORS.join(','));
        if (!nodes.length) return;

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('rd-in');
                        observer.unobserve(entry.target);
                    }
                });
            },
            { threshold: 0, rootMargin: '0px 0px -6% 0px' }
        );

        nodes.forEach((node, i) => {
            node.classList.add('rd-reveal');
            node.style.transitionDelay = `${Math.min(i % 6, 5) * 60}ms`;
            observer.observe(node);
        });

        // Safety net: never leave a block hidden if the observer misfires.
        const failsafe = setTimeout(() => {
            nodes.forEach((n) => n.classList.add('rd-in'));
        }, 1400);

        return () => {
            clearTimeout(failsafe);
            observer.disconnect();
        };
    }, [location.pathname]);

    // Warm a route's chunk on hover/focus, before the click. Delegated from the
    // document so links anywhere (header, footer, in-page) benefit without each
    // one wiring up a handler. Pages are code-split, and this is what stops that
    // from ever showing a loading state on navigation.
    useEffect(() => {
        const warm = (e) => {
            const a = e.target?.closest?.('a[href]');
            if (!a) return;
            let url;
            try {
                url = new URL(a.getAttribute('href'), window.location.origin);
            } catch {
                return;
            }
            if (url.origin !== window.location.origin) return;   // external link
            prefetchRoute(url.pathname);
        };
        document.addEventListener('pointerover', warm, { passive: true });
        document.addEventListener('focusin', warm, { passive: true });
        return () => {
            document.removeEventListener('pointerover', warm);
            document.removeEventListener('focusin', warm);
        };
    }, []);

    return (
        <SmoothScroll>
            {/* <CustomCursor /> */}
            <Header />
            {/* Reserve height so a not-yet-prefetched chunk can't bounce the footer. */}
            <Suspense fallback={<div style={{ minHeight: '70vh' }} />}>
                <Outlet />
            </Suspense>
            <Footer />
        </SmoothScroll>
    );
};

export default Layout;
