import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Lenis from 'lenis';
import 'lenis/dist/lenis.css';

/*
 * SmoothScroll
 * App-wide buttery inertia scrolling (awwwards-style) powered by Lenis.
 * Lenis smooths the real window scroll, so position:sticky / fixed and the
 * IntersectionObserver reveals keep working. It also exposes the instance on
 * window.__lenis so anchor links / scroll-to-top can drive it.
 */
const SmoothScroll = ({ children }) => {
    const location = useLocation();

    useEffect(() => {
        const lenis = new Lenis({
            duration: 1.1,
            easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // expo-out
            smoothWheel: true,
            wheelMultiplier: 1,
            touchMultiplier: 1.5,
        });
        window.__lenis = lenis;

        let rafId;
        const raf = (time) => {
            lenis.raf(time);
            rafId = requestAnimationFrame(raf);
        };
        rafId = requestAnimationFrame(raf);

        // Smooth-scroll for in-page hash anchors (e.g. the ".smooth" links).
        const onAnchorClick = (e) => {
            const a = e.target.closest('a[href^="#"]');
            if (!a) return;
            const id = a.getAttribute('href');
            if (id.length < 2) return;
            const target = document.querySelector(id);
            if (!target) return;
            e.preventDefault();
            lenis.scrollTo(target, { offset: -90 });
        };
        document.addEventListener('click', onAnchorClick);

        return () => {
            document.removeEventListener('click', onAnchorClick);
            cancelAnimationFrame(rafId);
            lenis.destroy();
            window.__lenis = null;
        };
    }, []);

    // Jump to top instantly on route change (SPA keeps scroll otherwise).
    useEffect(() => {
        if (window.__lenis) window.__lenis.scrollTo(0, { immediate: true });
        else window.scrollTo(0, 0);
    }, [location.pathname]);

    return children;
};

export default SmoothScroll;
