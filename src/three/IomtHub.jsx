import React, { useState, useEffect, Suspense, lazy } from 'react';
import Safe3D from './Safe3D';

/*
 * IomtHub
 * A placed (foreground) three.js visual for the hero: a central pulsing
 * "IoMT hub" wired to a ring of orbiting device nodes — echoing the connected
 * medical-devices graphic in the reference design. Interactive-free and
 * responsive; sits inside its own sized container.
 *
 * This module stays three.js-free; the scene is lazy()'d from IomtHubScene and
 * mounted only once the browser goes idle *after* load.
 *
 * Why idle rather than the IntersectionObserver trick SceneStrip uses: this
 * lives in the hero, so it is on screen immediately and a viewport check would
 * fire instantly — putting ~1MB of three.js and a rAF loop directly in front of
 * the hero copy and the LCP image. It's decorative and aria-hidden, so nothing
 * is lost by letting the page paint and settle first.
 */

const IomtHubScene = lazy(() => import('./IomtHubScene'));

const IomtHub = () => {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        let handle;
        const idle = window.requestIdleCallback || ((cb) => setTimeout(cb, 300));
        // timeout caps the wait so a busy thread can't starve it forever
        const start = () => { handle = idle(() => setMounted(true), { timeout: 2500 }); };

        // Wait for load, so the scene never competes with the hero's own paint.
        if (document.readyState === 'complete') start();
        else window.addEventListener('load', start, { once: true });

        return () => {
            window.removeEventListener('load', start);
            if (handle && window.cancelIdleCallback) window.cancelIdleCallback(handle);
        };
    }, []);

    return (
        <div className="iomt-hub" aria-hidden="true">
            <Safe3D>
                {mounted && (
                    <Suspense fallback={null}>
                        <IomtHubScene />
                    </Suspense>
                )}
            </Safe3D>
        </div>
    );
};

export default IomtHub;
