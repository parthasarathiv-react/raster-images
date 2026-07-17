import React, { useRef, useEffect, useState, useMemo, Suspense } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { Line, Text, Billboard, useTexture } from '@react-three/drei';
import * as THREE from 'three';
import './product-scroll.css';
import { ICONS, ServerHub, ACCENT, ACCENT_HOT } from './scrollIcons';

/*
 * ProductScrollExperience
 * The generic engine behind every product "schematic build" diagram (PACS,
 * RIS, Teleradiology, ...). Takes a `stack` config (see scrollStacks.js) and
 * renders a scroll-pinned R3F hub-and-spoke network: a central server, node
 * icons that appear stage-by-stage as you scroll, animated dashed connectors
 * with flowing data dots, a bottom-left content panel that swaps copy per
 * stage, a right-side stage rail, progress bar and scroll hint. Driven by
 * the page's Lenis / window scroll (no drei ScrollControls) so it composes
 * with the site's smooth scrolling and lives inside the product column
 * beside the sidebar.
 *
 * This must stay behaviour-identical to the original PacsScrollExperience —
 * only the data (stages/nodes/edges/camera) varies per stack.
 */

const CENTER = [0, 0, 0];

const clamp = (v, a, b) => Math.min(b, Math.max(a, v));
const lerp = (a, b, t) => a + (b - a) * t;
const smooth = (t) => t * t * (3 - 2 * t);

/* ---------------- animated connector with flowing data dots ---------------- */
function Edge({ from, to, activeRef, appearStage }) {
    const { posOf } = useProductStack();
    const a = useMemo(() => new THREE.Vector3(...posOf(from)), [from, posOf]);
    const b = useMemo(() => new THREE.Vector3(...posOf(to)), [to, posOf]);
    const lineRef = useRef();
    const dots = useRef([]);
    const nDots = 3;
    useFrame((s) => {
        const ap = activeRef.current[appearStage] ?? 0;
        if (lineRef.current) lineRef.current.material.opacity = 0.12 + 0.35 * ap;
        const t = s.clock.elapsedTime;
        dots.current.forEach((d, i) => {
            if (!d) return;
            const f = (t * 0.35 + i / nDots) % 1;
            d.position.lerpVectors(a, b, f);
            d.material.opacity = ap;
            d.visible = ap > 0.05;
            const sc = 0.6 + Math.sin((f - 0.5) * Math.PI) * 0.4;
            d.scale.setScalar(sc * ap);
        });
    });
    return (
        <group>
            <Line ref={lineRef} points={[a, b]} color={ACCENT} lineWidth={1.3} dashed dashSize={0.16} gapSize={0.12} transparent opacity={0.1} />
            {Array.from({ length: nDots }).map((_, i) => (
                <mesh key={i} ref={(el) => (dots.current[i] = el)}>
                    <sphereGeometry args={[0.075, 12, 12]} />
                    <meshBasicMaterial color={ACCENT_HOT} transparent opacity={0} toneMapped={false} />
                </mesh>
            ))}
        </group>
    );
}

/* ---------------- one node (icon + label), scale/appear driven ---------------- */
function Node({ node, tex, progressRef, activeStageRef, stagesCount }) {
    const ref = useRef();
    const labelRef = useRef();
    const Icon = ICONS[node.icon];
    const needsTex = node.tex && tex ? tex[node.tex] : null;
    const appearOf = useMemo(() => makeAppearOf(stagesCount), [stagesCount]);
    useFrame(() => {
        if (!ref.current) return;
        const p = progressRef.current;
        const ap = appearOf(p, node.stage);
        const isActive = activeStageRef.current === node.stage && ap > 0.4;
        const target = ap * (isActive ? 1.2 : 0.82);
        const s = lerp(ref.current.scale.x, target, 0.14);
        ref.current.scale.setScalar(s);
        ref.current.visible = ap > 0.02;
        // labels only for the active stage — keeps the diagram uncluttered
        if (labelRef.current) labelRef.current.visible = isActive;
    });
    // labels extend away from the bottom-left content panel: rightward for most
    // nodes, leftward only for the far-right ones so they clear the canvas edge
    const side = node.pos[0] > 5 ? 'right' : 'left';
    const lx = side === 'right' ? -0.2 : 0.2;
    return (
        <group ref={ref} position={node.pos} scale={0.001}>
            {needsTex ? <Icon tex={needsTex} /> : <Icon />}
            <Billboard ref={labelRef} position={[lx, -0.88, 0]} visible={false}>
                <Text fontSize={0.3} color="#eaf2ff" anchorX={side} anchorY="top" outlineWidth={0.012} outlineColor="#02112b" maxWidth={5}>
                    {node.label}
                </Text>
            </Billboard>
        </group>
    );
}

/* stage helpers — shared by Scene + Node via a tiny context so both read the
   same stack config without threading every prop through every layer */
const StackContext = React.createContext(null);
const useProductStack = () => React.useContext(StackContext);

const makeAppearOf = (stagesCount) => {
    const stageStart = (s) => s / stagesCount;
    /* per-item appear factor: ramps 0->1 just after its stage begins */
    return (p, stage) => smooth(clamp((p - stageStart(stage)) / 0.14, 0, 1));
};

/* ---------------- the scene ---------------- */
function Scene({ stack, progressRef }) {
    const { stages: STAGES, nodes: NODES, edges: EDGES, centerLabel, textures: texMap, camera: camConfig } = stack;
    const hasTextures = !!texMap;
    const textures = hasTextures ? useTexture(texMap) : null;
    useEffect(() => {
        if (!textures) return;
        Object.values(textures).forEach((t) => {
            t.colorSpace = THREE.SRGBColorSpace;
            t.needsUpdate = true;
        });
    }, [textures]);

    const { camera } = useThree();
    const activeStageRef = useRef(0);
    const appearRef = useRef(STAGES.map(() => 0));
    const accentLight = useRef();
    const tmp = useMemo(() => new THREE.Vector3(), []);
    const appearOf = useMemo(() => makeAppearOf(STAGES.length), [STAGES.length]);

    const posOf = useMemo(
        () => (key) => (key === 'center' ? CENTER : NODES.find((n) => n.key === key).pos),
        [NODES]
    );
    const stageOf = useMemo(
        () => (key) => (key === 'center' ? undefined : NODES.find((n) => n.key === key)?.stage),
        [NODES]
    );

    useFrame((_, delta) => {
        const p = progressRef.current;
        const n = STAGES.length;
        const active = clamp(Math.floor(p * n - 1e-4), 0, n - 1);
        activeStageRef.current = active;
        for (let s = 0; s < n; s++) appearRef.current[s] = appearOf(p, s);

        const damp = 1 - Math.pow(0.0018, delta);

        // camera: gentle orbit + slight zoom as the network builds. Framed
        // so the bottom-left content panel stays clear (per-stack lookAt).
        const zoom = lerp(camConfig.zoomRange[0], camConfig.zoomRange[1], smooth(p));
        const az = camConfig.azimuth.base + Math.sin(p * Math.PI) * camConfig.azimuth.swing;
        const el = lerp(camConfig.elevationRange[0], camConfig.elevationRange[1], smooth(p));
        camera.position.lerp(tmp.set(camConfig.xOffset + Math.sin(az) * zoom, el, Math.cos(az) * zoom), damp);
        camera.lookAt(...camConfig.lookAt);

        // move accent light toward the active cluster centroid
        const stageNodes = NODES.filter((nd) => nd.stage === active);
        const cx = stageNodes.reduce((s, nd) => s + nd.pos[0], 0) / (stageNodes.length || 1);
        const cy = stageNodes.reduce((s, nd) => s + nd.pos[1], 0) / (stageNodes.length || 1);
        if (accentLight.current) accentLight.current.position.lerp(tmp.set(cx, cy + 1.5, 3), damp);
    });

    return (
        <StackContext.Provider value={{ posOf, stageOf }}>
            <ambientLight intensity={0.6} />
            <directionalLight position={[5, 8, 6]} intensity={1.05} />
            <directionalLight position={[-6, 2, -4]} intensity={0.4} color={ACCENT} />
            <pointLight ref={accentLight} intensity={22} distance={9} decay={2} color={ACCENT} />

            {EDGES.map(([from, to], i) => (
                <Edge key={i} from={from} to={to} activeRef={appearRef} appearStage={stageOf(to) ?? stageOf(from) ?? 0} />
            ))}

            {/* central hub server */}
            <group>
                <ServerHub />
                <Billboard position={[0, 1.15, 0]}>
                    <Text fontSize={0.34} color="#f2f8fb" anchorX="center" anchorY="bottom" outlineWidth={0.012} outlineColor="#02132b" fontWeight="bold">
                        {centerLabel}
                    </Text>
                </Billboard>
            </group>

            {NODES.map((node) => (
                <Node key={node.key} node={node} tex={textures} progressRef={progressRef} activeStageRef={activeStageRef} stagesCount={STAGES.length} />
            ))}
        </StackContext.Provider>
    );
}

/* ---------------- exported section (overlay + scroll driver) ---------------- */
const ProductScrollExperience = ({ stack }) => {
    const STAGES = stack.stages;
    const wrapRef = useRef();
    const progressRef = useRef(0);
    const panelRefs = useRef([]);
    const dotRefs = useRef([]);
    const hintRef = useRef();
    const barRef = useRef();
    const [inView, setInView] = useState(true);

    useEffect(() => {
        const el = wrapRef.current;
        if (!el || typeof IntersectionObserver === 'undefined') return undefined;
        const obs = new IntersectionObserver(([entry]) => setInView(entry.isIntersecting), { rootMargin: '10% 0px' });
        obs.observe(el);
        return () => obs.disconnect();
    }, []);

    useEffect(() => {
        let raf;
        const tick = () => {
            const el = wrapRef.current;
            if (el) {
                const rect = el.getBoundingClientRect();
                const vh = window.innerHeight;
                const total = rect.height - vh;
                const p = total > 0 ? clamp(-rect.top / total, 0, 1) : 0;
                progressRef.current = p;
                const n = STAGES.length;
                const active = Math.min(n - 1, Math.max(0, Math.floor(p * n - 1e-4)));
                panelRefs.current.forEach((pnl, i) => {
                    if (!pnl) return;
                    const on = i === active;
                    pnl.style.opacity = on ? '1' : '0';
                    pnl.style.transform = on ? 'translateY(0)' : 'translateY(16px)';
                });
                dotRefs.current.forEach((d, i) => {
                    if (d) d.dataset.on = i === active ? '1' : '0';
                });
                if (hintRef.current) hintRef.current.style.opacity = p > 0.02 ? '0' : '';
                if (barRef.current) barRef.current.style.transform = `scaleX(${p})`;
            }
            raf = requestAnimationFrame(tick);
        };
        raf = requestAnimationFrame(tick);
        return () => cancelAnimationFrame(raf);
    }, [STAGES.length]);

    return (
        <section ref={wrapRef} className="product-scroll" style={{ height: `${STAGES.length * 100}vh` }}>
            <div className="product-scroll__sticky">
                <Canvas
                    className="product-scroll__canvas"
                    dpr={[1, 1.75]}
                    frameloop={inView ? 'always' : 'never'}
                    camera={{ position: stack.camera.initialPosition, fov: stack.camera.fov }}
                    gl={{ antialias: true, alpha: true }}
                >
                    <Suspense fallback={null}>
                        <Scene stack={stack} progressRef={progressRef} />
                    </Suspense>
                </Canvas>

                <div className="product-scroll__overlay">
                    <div className="product-scroll__eyebrow">{stack.eyebrow}</div>

                    <div className="product-scroll__panels">
                        {STAGES.map((s, i) => (
                            <article
                                key={s.key}
                                ref={(el) => (panelRefs.current[i] = el)}
                                className="product-scroll__panel"
                                style={{ opacity: i === 0 ? 1 : 0 }}
                            >
                                <span className="product-scroll__tag">{s.tag}</span>
                                <h3 className="product-scroll__title">{s.title}</h3>
                                <p className="product-scroll__desc">{s.desc}</p>
                            </article>
                        ))}
                    </div>

                    <div className="product-scroll__rail" aria-hidden="true">
                        {STAGES.map((s, i) => (
                            <span key={s.key} ref={(el) => (dotRefs.current[i] = el)} className="product-scroll__dot" data-on={i === 0 ? '1' : '0'} />
                        ))}
                    </div>

                    <div ref={hintRef} className="product-scroll__hint" aria-hidden="true">
                        <span className="product-scroll__mouse" />
                        Scroll
                    </div>
                </div>

                <div className="product-scroll__progress"><span ref={barRef} /></div>
            </div>
        </section>
    );
};

export default ProductScrollExperience;
