import { useEffect, useRef } from 'react';
import './CustomCursor.css';

/*
 * CustomCursor
 * An awwwards-style two-part cursor: a crisp dot that tracks the pointer 1:1
 * and a larger ring that trails with easing. The ring grows and the dot hides
 * when hovering interactive elements (links, buttons, inputs, [data-cursor]).
 * Disabled on touch / coarse pointers, where a custom cursor makes no sense.
 */
const CustomCursor = () => {
    const dotRef = useRef(null);
    const ringRef = useRef(null);

    useEffect(() => {
        if (window.matchMedia('(pointer: coarse)').matches) return;

        const dot = dotRef.current;
        const ring = ringRef.current;
        if (!dot || !ring) return;

        document.body.classList.add('has-custom-cursor');

        let mx = window.innerWidth / 2;
        let my = window.innerHeight / 2;
        let rx = mx;
        let ry = my;
        let visible = false;

        const onMove = (e) => {
            mx = e.clientX;
            my = e.clientY;
            dot.style.transform = `translate3d(${mx}px, ${my}px, 0)`;
            if (!visible) {
                visible = true;
                dot.classList.add('is-visible');
                ring.classList.add('is-visible');
            }
        };

        const onOver = (e) => {
            const t = e.target.closest('a, button, [role="button"], input, textarea, select, label, [data-cursor="hover"]');
            ring.classList.toggle('is-hover', !!t);
            dot.classList.toggle('is-hover', !!t);
        };

        const onDown = () => ring.classList.add('is-down');
        const onUp = () => ring.classList.remove('is-down');
        const onLeave = () => {
            visible = false;
            dot.classList.remove('is-visible');
            ring.classList.remove('is-visible');
        };

        let rafId;
        const tick = () => {
            rx += (mx - rx) * 0.16;
            ry += (my - ry) * 0.16;
            ring.style.transform = `translate3d(${rx}px, ${ry}px, 0)`;
            rafId = requestAnimationFrame(tick);
        };
        rafId = requestAnimationFrame(tick);

        window.addEventListener('mousemove', onMove, { passive: true });
        window.addEventListener('mouseover', onOver, { passive: true });
        window.addEventListener('mousedown', onDown);
        window.addEventListener('mouseup', onUp);
        document.addEventListener('mouseleave', onLeave);

        return () => {
            cancelAnimationFrame(rafId);
            window.removeEventListener('mousemove', onMove);
            window.removeEventListener('mouseover', onOver);
            window.removeEventListener('mousedown', onDown);
            window.removeEventListener('mouseup', onUp);
            document.removeEventListener('mouseleave', onLeave);
            document.body.classList.remove('has-custom-cursor');
        };
    }, []);

    return (
        <>
            <div ref={ringRef} className="cursor-ring" aria-hidden="true" />
            <div ref={dotRef} className="cursor-dot" aria-hidden="true" />
        </>
    );
};

export default CustomCursor;
