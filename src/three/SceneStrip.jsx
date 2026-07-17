import React, { useRef, useState, useEffect, Suspense, lazy } from 'react';
import Safe3D from './Safe3D';

/*
 * SceneStrip
 * A reusable, scroll-revealed three.js banner: a slowly rotating wireframe
 * globe wrapped in a drifting point-cloud shell, echoing the connected-devices
 * theme used across the site. Drop it into any page section — optional heading
 * / copy overlay via props.
 *
 * This module stays deliberately three.js-free. The WebGL half lives in
 * SceneStripCanvas and is `lazy()`-imported only once the strip nears the
 * viewport, for two reasons:
 *   - three.js + fiber is ~500KB of parse/exec. On a throttled phone that was
 *     the single biggest contributor to blocking time, and SceneStrip sits
 *     below the fold on every page that uses it (Home included) — so it has no
 *     business being in the critical path.
 *   - pages that never scroll to a strip never pay for it at all.
 * The copy renders immediately either way; only the canvas waits.
 */

const SceneStripCanvas = lazy(() => import('./SceneStripCanvas'));

const SceneStrip = ({ heading, subheading, height = 340 }) => {
    const hostRef = useRef(null);
    const [visible, setVisible] = useState(false);
    // Once mounted the canvas stays mounted — tearing down a WebGL context just
    // to rebuild it on the next scroll-by is far more expensive than idling it.
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        const el = hostRef.current;
        if (!el) return;
        const io = new IntersectionObserver(
            ([entry]) => {
                setVisible(entry.isIntersecting);
                if (entry.isIntersecting) setMounted(true);
            },
            { rootMargin: '300px 0px' }   // start fetching just before it's needed
        );
        io.observe(el);
        return () => io.disconnect();
    }, []);

    const hasCopy = heading || subheading;

    return (
        <div
            ref={hostRef}
            className="scene-strip relative overflow-hidden rounded-3xl bg-[#101d2b]/45 shadow-card backdrop-blur-xl"
        >
            {/* soft glow */}
            <div
                aria-hidden
                className="pointer-events-none absolute -right-24 top-1/2 h-[420px] w-[420px] -translate-y-1/2 rounded-full bg-primary/10 blur-[110px]"
            />
            <div className={`relative grid items-center gap-4 ${hasCopy ? 'md:grid-cols-2' : ''}`}>
                {hasCopy && (
                    <div className="order-2 px-7 py-8 md:order-1 lg:px-12 lg:py-14">
                        {subheading && (
                            <span className="mb-3 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.28em] text-primary">
                                <span className="h-px w-6 bg-gradient-to-r from-teal-bright to-cyan" />
                                {subheading}
                            </span>
                        )}
                        {heading && (
                            <h3 className="text-balance text-2xl font-extrabold leading-[1.1] tracking-tight text-foreground sm:text-3xl lg:text-4xl">
                                {heading}
                            </h3>
                        )}
                    </div>
                )}
                {/* fixed height reserved up front, so the late canvas costs no layout shift */}
                <div
                    className={`relative order-1 md:order-2 ${hasCopy ? '' : 'w-full'}`}
                    style={{ height }}
                >
                    <Safe3D>
                        {mounted && (
                            <Suspense fallback={null}>
                                <SceneStripCanvas active={visible} />
                            </Suspense>
                        )}
                    </Safe3D>
                </div>
            </div>
        </div>
    );
};

export default SceneStrip;
