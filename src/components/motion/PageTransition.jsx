import { useRef, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import './PageTransition.css';

/*
 * PageTransition
 * On every route change a set of vertical panels covers the viewport and then
 * lifts away in a staggered sweep, revealing the new page — the classic
 * award-site "curtain" transition. Keyed on pathname so it replays each nav.
 * pointer-events are off so it never blocks the page it's revealing.
 */
const COLS = 5;
const ease = [0.76, 0, 0.24, 1];

const PageTransition = () => {
    const location = useLocation();
    // PageTransition lives in Layout and never unmounts, so this ref persists
    // across route changes: false only during the very first render.
    const mounted = useRef(false);
    useEffect(() => {
        mounted.current = true;
    }, []);

    // On first load the columns start already lifted (never cover the page);
    // on every later navigation they cover, then sweep away to reveal.
    const cover = mounted.current;

    return (
        <AnimatePresence mode="wait">
            <div key={location.pathname} className="pt-overlay" aria-hidden="true">
                {Array.from({ length: COLS }).map((_, i) => (
                    <motion.div
                        key={i}
                        className="pt-col"
                        initial={{ scaleY: cover ? 1 : 0 }}
                        animate={{ scaleY: 0 }}
                        transition={{
                            duration: 0.7,
                            ease,
                            delay: cover ? 0.05 * (COLS - i) : 0,
                        }}
                    />
                ))}
            </div>
        </AnimatePresence>
    );
};

export default PageTransition;
