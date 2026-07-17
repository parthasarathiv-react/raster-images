import React, { useRef, useMemo, useState, useEffect, Suspense, useCallback } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { useTexture } from '@react-three/drei';
import * as THREE from 'three';
import Safe3D from './Safe3D';
import './hardware-grid.css';

/*
 * HardwareGrid
 * A WebGL product grid. The layout lives in the DOM (a plain CSS grid of empty
 * placeholder frames + captions) and the imagery lives in a single three.js
 * canvas stretched behind it. Each placeholder's measured rect drives one
 * textured plane, so responsiveness/labels stay in CSS while the pixels get a
 * shader: a cursor ripple, a hover un-dim, and a scroll reveal.
 *
 * Why one canvas + DOM layout (rather than 16 canvases, or a pure-WebGL layout):
 *   - 16 WebGL contexts would blow past the browser's context limit;
 *   - DOM hit-testing on the placeholders beats raycasting (canvas stays
 *     pointer-events:none), and the caption text stays real, selectable text;
 *   - the rects are static relative to the wrapper, so they only need
 *     re-measuring on resize — no per-frame scroll sync against Lenis.
 *
 * Product shots are supplied on white and must not be cropped, so the shader
 * contain-fits each texture on a white rounded tile (matching the old CSS).
 */

const PAD = 0.11;        // inner padding, fraction of the tile
const RADIUS = 18;       // px, matches --rd-radius
const LIFT = 26;         // px the tile rises through during its reveal

const vertexShader = /* glsl */ `
  varying vec2 vUv;
  void main() {
    vUv = uv;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`;

const fragmentShader = /* glsl */ `
  uniform sampler2D uTex;
  uniform vec2  uSize;        // tile size in px
  uniform vec2  uMouse;       // cursor in tile uv space
  uniform float uHover;       // 0..1 eased
  uniform float uTime;
  uniform float uReveal;      // 0..1 eased
  uniform float uImgAspect;
  uniform float uRipple;      // 0 when reduced-motion
  varying vec2 vUv;

  // signed distance to a rounded box, used for the tile mask
  float roundedBox(vec2 p, vec2 b, float r) {
    vec2 q = abs(p) - b + r;
    return min(max(q.x, q.y), 0.0) + length(max(q, 0.0)) - r;
  }

  void main() {
    float planeAspect = uSize.x / uSize.y;
    vec2 uv = vUv;

    // --- cursor ripple: rings travelling out from the pointer, fading with distance
    vec2 diff = uv - uMouse;
    float d = length(diff * vec2(planeAspect, 1.0));
    vec2 dir = d > 0.0001 ? diff / max(length(diff), 0.0001) : vec2(0.0);
    float wave = sin(d * 24.0 - uTime * 5.0) * exp(-d * 5.0) * 0.02 * uHover * uRipple;
    uv += dir * wave;

    // --- contain-fit the texture inside the padded tile
    vec2 p = (uv - 0.5) / (1.0 - PAD_CONST);
    vec2 fit = uImgAspect > planeAspect
      ? vec2(1.0, planeAspect / uImgAspect)
      : vec2(uImgAspect / planeAspect, 1.0);
    vec2 iuv = p / fit + 0.5;

    vec3 col = vec3(1.0);   // tiles are white cards; logos/shots sit on white
    if (all(greaterThanEqual(iuv, vec2(0.0))) && all(lessThanEqual(iuv, vec2(1.0)))) {
      vec4 t = texture2D(uTex, iuv);
      col = mix(vec3(1.0), t.rgb, t.a);   // composite PNG alpha over the card
    }

    // --- resting tiles sit desaturated + dimmed; hover brings them back
    float lum = dot(col, vec3(0.299, 0.587, 0.114));
    vec3 dim = mix(vec3(lum), col, 0.4) * 0.84;
    col = mix(dim, col, uHover);

    // --- rounded mask from the UNdistorted uv so the ripple can't chew the edges
    float dist = roundedBox((vUv - 0.5) * uSize, uSize * 0.5, RADIUS_CONST);
    float alpha = (1.0 - smoothstep(-1.0, 1.0, dist)) * uReveal;

    gl_FragColor = vec4(col, alpha);
  }
`
  .replace(/PAD_CONST/g, PAD.toFixed(3))
  .replace(/RADIUS_CONST/g, RADIUS.toFixed(1));

function Tile({ texture, layout, state, index }) {
  const mesh = useRef();
  const { gl } = useThree();

  const uniforms = useMemo(
    () => ({
      uTex: { value: texture },
      uSize: { value: new THREE.Vector2(1, 1) },
      uMouse: { value: new THREE.Vector2(0.5, 0.5) },
      uHover: { value: 0 },
      uTime: { value: 0 },
      uReveal: { value: 0 },
      uImgAspect: { value: 1 },
      uRipple: { value: state.current[index]?.ripple ?? 1 },
    }),
    [texture, state, index]
  );

  useEffect(() => {
    texture.colorSpace = THREE.SRGBColorSpace;
    texture.anisotropy = gl.capabilities.getMaxAnisotropy();
    texture.needsUpdate = true;
    const img = texture.image;
    if (img?.width && img?.height) uniforms.uImgAspect.value = img.width / img.height;
  }, [texture, gl, uniforms]);

  useFrame((st, delta) => {
    const s = state.current[index];
    if (!s || !mesh.current) return;

    s.hover = THREE.MathUtils.damp(s.hover, s.hoverTarget, 9, delta);
    s.reveal = THREE.MathUtils.damp(s.reveal, s.revealTarget, 4, delta);

    uniforms.uHover.value = s.hover;
    uniforms.uReveal.value = s.reveal;
    uniforms.uTime.value = st.clock.elapsedTime;
    uniforms.uMouse.value.set(s.mx, s.my);
    uniforms.uSize.value.set(layout.w, layout.h);
    uniforms.uRipple.value = s.ripple;

    const grow = 1 + s.hover * 0.025;
    mesh.current.scale.set(layout.w * grow, layout.h * grow, 1);
    mesh.current.position.set(layout.x, layout.y - (1 - s.reveal) * LIFT, 0);
  });

  return (
    <mesh ref={mesh}>
      <planeGeometry args={[1, 1]} />
      <shaderMaterial
        vertexShader={vertexShader}
        fragmentShader={fragmentShader}
        uniforms={uniforms}
        transparent
        depthWrite={false}
      />
    </mesh>
  );
}

function Tiles({ items, layouts, state }) {
  const textures = useTexture(items.map((i) => i.img));
  return (
    <>
      {layouts.map((layout, i) =>
        layout ? (
          <Tile key={items[i].title} texture={textures[i]} layout={layout} state={state} index={i} />
        ) : null
      )}
    </>
  );
}

// Plain-DOM rendering of the same grid — used when WebGL is unavailable and as
// the Safe3D fallback if a context is lost at runtime.
function FallbackGrid({ items }) {
  return (
    <div className="hw-scene__grid hw-scene__grid--plain">
      {items.map((p) => (
        <figure className="hw-tile" key={p.title}>
          <div className="hw-tile__frame">
            <img src={p.img} alt={p.title} loading="lazy" />
          </div>
          <figcaption className="hw-tile__label">{p.title}</figcaption>
        </figure>
      ))}
    </div>
  );
}

function hasWebGL() {
  try {
    const c = document.createElement('canvas');
    return !!(window.WebGLRenderingContext && (c.getContext('webgl') || c.getContext('experimental-webgl')));
  } catch {
    return false;
  }
}

const HardwareGrid = ({ items }) => {
  const wrapRef = useRef(null);
  const frameRefs = useRef([]);
  const [layouts, setLayouts] = useState([]);
  const [visible, setVisible] = useState(false);
  const [webgl] = useState(hasWebGL);
  const reduced = typeof window !== 'undefined'
    && window.matchMedia?.('(prefers-reduced-motion: reduce)').matches;

  // per-tile animation state, mutated outside React so hover never re-renders
  const state = useRef(
    items.map(() => ({
      hover: 0, hoverTarget: 0,
      reveal: reduced ? 1 : 0, revealTarget: reduced ? 1 : 0,
      mx: 0.5, my: 0.5,
      ripple: reduced ? 0 : 1,
    }))
  );

  // Measure every placeholder against the wrapper. Rects are static relative to
  // the wrapper, so this only needs to run on resize — not on scroll.
  const measure = useCallback(() => {
    const wrap = wrapRef.current;
    if (!wrap) return;
    const wr = wrap.getBoundingClientRect();
    setLayouts(
      frameRefs.current.map((el) => {
        if (!el) return null;
        const r = el.getBoundingClientRect();
        return {
          w: r.width,
          h: r.height,
          x: r.left - wr.left + r.width / 2 - wr.width / 2,
          y: -(r.top - wr.top + r.height / 2 - wr.height / 2),
        };
      })
    );
  }, []);

  useEffect(() => {
    if (!webgl) return;
    measure();
    const ro = new ResizeObserver(measure);
    if (wrapRef.current) ro.observe(wrapRef.current);
    window.addEventListener('resize', measure);
    return () => {
      ro.disconnect();
      window.removeEventListener('resize', measure);
    };
  }, [measure, webgl]);

  // Run the render loop only while the grid is near the viewport.
  useEffect(() => {
    if (!webgl) return;
    const el = wrapRef.current;
    if (!el) return;
    const io = new IntersectionObserver(([e]) => setVisible(e.isIntersecting), {
      rootMargin: '200px 0px',
    });
    io.observe(el);
    return () => io.disconnect();
  }, [webgl]);

  // Stagger each tile's reveal as it scrolls in.
  useEffect(() => {
    if (!webgl || reduced) return;
    const observers = frameRefs.current.map((el, i) => {
      if (!el) return null;
      const io = new IntersectionObserver(
        ([e]) => {
          if (e.isIntersecting && state.current[i]) state.current[i].revealTarget = 1;
        },
        { rootMargin: '0px 0px -8% 0px' }
      );
      io.observe(el);
      return io;
    });
    return () => observers.forEach((io) => io?.disconnect());
  }, [webgl, reduced, layouts.length]);

  const onMove = (i) => (e) => {
    const s = state.current[i];
    const el = frameRefs.current[i];
    if (!s || !el) return;
    const r = el.getBoundingClientRect();
    s.mx = (e.clientX - r.left) / r.width;
    s.my = 1 - (e.clientY - r.top) / r.height;   // uv origin is bottom-left
  };

  if (!webgl) return <FallbackGrid items={items} />;

  return (
    <Safe3D fallback={<FallbackGrid items={items} />}>
      <div className="hw-scene" ref={wrapRef}>
        <div className="hw-scene__canvas">
          <Canvas
            orthographic
            camera={{ position: [0, 0, 100], zoom: 1 }}
            dpr={[1, 2]}
            frameloop={visible ? 'always' : 'demand'}
            gl={{ alpha: true, antialias: true, powerPreference: 'high-performance' }}
          >
            <Suspense fallback={null}>
              <Tiles items={items} layouts={layouts} state={state} />
            </Suspense>
          </Canvas>
        </div>

        <div className="hw-scene__grid">
          {items.map((p, i) => (
            <figure
              className="hw-tile"
              key={p.title}
              onPointerEnter={() => { state.current[i].hoverTarget = 1; }}
              onPointerLeave={() => { state.current[i].hoverTarget = 0; }}
              onPointerMove={onMove(i)}
            >
              <div className="hw-tile__frame" ref={(el) => { frameRefs.current[i] = el; }} />
              <figcaption className="hw-tile__label">{p.title}</figcaption>
            </figure>
          ))}
        </div>
      </div>
    </Safe3D>
  );
};

export default HardwareGrid;
