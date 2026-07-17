import React from 'react';

/*
 * Safe3D
 * Error boundary for WebGL / react-three-fiber canvases. If the browser can't
 * create a WebGL context (disabled, blocklisted, headless, or a lost context),
 * the 3D subtree throws — without a boundary that would unmount the WHOLE page.
 * Here we swallow it and render an optional CSS fallback instead, so the rest
 * of the page (all the real content) always stays up.
 */
class Safe3D extends React.Component {
    constructor(props) {
        super(props);
        this.state = { failed: false };
    }

    static getDerivedStateFromError() {
        return { failed: true };
    }

    componentDidCatch(error) {
        // Non-fatal: the page works fine without the decorative 3D layer.
        if (import.meta.env.DEV) console.warn('[Safe3D] 3D disabled:', error?.message);
    }

    render() {
        if (this.state.failed) return this.props.fallback ?? null;
        return this.props.children;
    }
}

export default Safe3D;
