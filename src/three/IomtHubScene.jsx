import { useRef, useMemo, useEffect } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import * as THREE from 'three';

/*
 * IomtHubScene — the heavy half of <IomtHub/>.
 *
 * All three.js / fiber imports live here and nowhere else, so IomtHub can
 * lazy() this module. Nothing should import it directly: go through IomtHub,
 * which mounts it once the browser is idle.
 *
 * Why that matters: this sits in the hero, so it used to be reachable from the
 * eagerly-imported Home page, which pulled all of three.js into the ENTRY chunk
 * (1.3MB, ~10s of parse+exec on a throttled phone) — in front of the hero the
 * user is actually waiting to read.
 */

// Shared, window-level normalized pointer (-1..1). Tracked once so the hero
// hub can parallax toward the cursor even though its canvas is pointer-events:none.
const pointer = { x: 0, y: 0 };
let pointerBound = false;
function bindPointer() {
    if (pointerBound || typeof window === 'undefined') return;
    pointerBound = true;
    window.addEventListener(
        'pointermove',
        (e) => {
            pointer.x = (e.clientX / window.innerWidth) * 2 - 1;
            pointer.y = (e.clientY / window.innerHeight) * 2 - 1;
        },
        { passive: true }
    );
}

const NODE_COUNT = 7;

function HubScene() {
    const group = useRef();
    const hub = useRef();
    const ring = useRef();
    const outerRing = useRef();
    const nodeRefs = useRef([]);
    const spokeRef = useRef();
    const rimRef = useRef();

    const nodes = useMemo(() => {
        return Array.from({ length: NODE_COUNT }, (_, i) => {
            const a = (i / NODE_COUNT) * Math.PI * 2;
            const r = 3.0 + (i % 2 ? 0.55 : 0);
            return {
                x: Math.cos(a) * r,
                y: Math.sin(a) * r * 0.82,
                z: (i % 3 - 1) * 0.7,
                phase: i * 0.9,
                speed: 0.5 + (i % 3) * 0.16,
            };
        });
    }, []);

    // hub -> node spokes
    const spokePos = useMemo(() => new Float32Array(NODE_COUNT * 2 * 3), []);
    // ring around adjacent nodes
    const rimPos = useMemo(() => new Float32Array(NODE_COUNT * 2 * 3), []);

    // Fit the node ring to whatever box we're mounted in. The camera is fixed,
    // so in a narrow container (the hero gutter is ~210px) the outer nodes would
    // otherwise fall outside the frustum and clip off. viewport is world units
    // at z=0; NODE_EXTENT_* is the ring's reach plus node radius and bob.
    const { viewport } = useThree();
    const fitScale = useMemo(() => {
        const NODE_EXTENT_X = 3.95;
        const NODE_EXTENT_Y = 3.5;
        return Math.min(
            viewport.width / 2 / NODE_EXTENT_X,
            viewport.height / 2 / NODE_EXTENT_Y,
            1.15 // don't blow it up past its designed size in a roomy box
        );
    }, [viewport.width, viewport.height]);

    useEffect(() => { bindPointer(); }, []);

    useFrame((state) => {
        const t = state.clock.elapsedTime;

        if (group.current) {
            // ambient drift + damped parallax toward the pointer (interactive)
            const targetY = Math.sin(t * 0.15) * 0.28 + pointer.x * 0.6;
            const targetX = Math.cos(t * 0.12) * 0.12 + pointer.y * 0.4;
            group.current.rotation.y += (targetY - group.current.rotation.y) * 0.06;
            group.current.rotation.x += (targetX - group.current.rotation.x) * 0.06;
            const targetScale = 1 + Math.abs(pointer.x) * 0.04;
            group.current.scale.setScalar(
                group.current.scale.x + (targetScale - group.current.scale.x) * 0.05
            );
        }
        if (hub.current) hub.current.rotation.y = t * 0.4;
        if (ring.current) ring.current.rotation.z = t * 0.55;
        if (outerRing.current) outerRing.current.rotation.z = -t * 0.32;

        const pts = [];
        let s = 0;
        nodes.forEach((n, i) => {
            const bob = Math.sin(t * n.speed + n.phase) * 0.22;
            const y = n.y + bob;
            const z = n.z + Math.cos(t * n.speed + n.phase) * 0.18;
            const m = nodeRefs.current[i];
            if (m) {
                m.position.set(n.x, y, z);
                const ps = 1 + Math.sin(t * 2 + n.phase) * 0.18;
                m.scale.setScalar(ps);
            }
            pts.push(new THREE.Vector3(n.x, y, z));
            // spoke from centre to node
            spokePos[s++] = 0; spokePos[s++] = 0; spokePos[s++] = 0;
            spokePos[s++] = n.x; spokePos[s++] = y; spokePos[s++] = z;
        });

        // rim: connect each node to the next around the ring
        let r = 0;
        for (let i = 0; i < NODE_COUNT; i++) {
            const a = pts[i];
            const b = pts[(i + 1) % NODE_COUNT];
            rimPos[r++] = a.x; rimPos[r++] = a.y; rimPos[r++] = a.z;
            rimPos[r++] = b.x; rimPos[r++] = b.y; rimPos[r++] = b.z;
        }

        if (spokeRef.current) spokeRef.current.geometry.attributes.position.needsUpdate = true;
        if (rimRef.current) rimRef.current.geometry.attributes.position.needsUpdate = true;
    });

    return (
        // outer group owns the fit; the inner one keeps its pointer-driven scale
        <group scale={fitScale}>
            <group ref={group}>
                {/* spokes: hub -> nodes */}
                <lineSegments ref={spokeRef}>
                    <bufferGeometry>
                        <bufferAttribute attach="attributes-position" count={NODE_COUNT * 2} array={spokePos} itemSize={3} />
                    </bufferGeometry>
                    <lineBasicMaterial color="#3b82f6" transparent opacity={0.5} blending={THREE.AdditiveBlending} depthWrite={false} />
                </lineSegments>

                {/* rim: node -> node */}
                <lineSegments ref={rimRef}>
                    <bufferGeometry>
                        <bufferAttribute attach="attributes-position" count={NODE_COUNT * 2} array={rimPos} itemSize={3} />
                    </bufferGeometry>
                    <lineBasicMaterial color="#3b82f6" transparent opacity={0.28} blending={THREE.AdditiveBlending} depthWrite={false} />
                </lineSegments>

                {/* central hub: wireframe shell + bright core + spinning rings */}
                <mesh ref={hub}>
                    <icosahedronGeometry args={[0.66, 1]} />
                    <meshBasicMaterial color="#74b3ff" wireframe transparent opacity={0.85} />
                </mesh>
                <mesh>
                    <sphereGeometry args={[0.34, 24, 24]} />
                    <meshBasicMaterial color="#9cc5ff" />
                </mesh>
                <mesh ref={ring} rotation={[Math.PI / 2.1, 0, 0]}>
                    <torusGeometry args={[1.0, 0.02, 12, 64]} />
                    <meshBasicMaterial color="#5fa6ff" transparent opacity={0.7} blending={THREE.AdditiveBlending} />
                </mesh>
                <mesh ref={outerRing} rotation={[Math.PI / 1.8, 0.4, 0]}>
                    <torusGeometry args={[1.35, 0.012, 12, 64]} />
                    <meshBasicMaterial color="#5fa6ff" transparent opacity={0.45} blending={THREE.AdditiveBlending} />
                </mesh>

                {/* orbiting device nodes */}
                {nodes.map((n, i) => (
                    <mesh key={i} ref={(el) => (nodeRefs.current[i] = el)} position={[n.x, n.y, n.z]}>
                        <sphereGeometry args={[0.17, 20, 20]} />
                        <meshBasicMaterial color="#74b3ff" />
                    </mesh>
                ))}
            </group>
        </group>
    );
}

const IomtHubScene = () => (
    <Canvas
        camera={{ position: [0, 0, 8], fov: 55 }}
        dpr={[1, 2]}
        gl={{ alpha: true, antialias: true, powerPreference: 'high-performance' }}
    >
        <HubScene />
    </Canvas>
);

export default IomtHubScene;
