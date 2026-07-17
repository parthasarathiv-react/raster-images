import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';

/*
 * SceneStripCanvas — the heavy half of <SceneStrip/>.
 *
 * Everything that pulls in three.js / @react-three/fiber lives here, and here
 * ONLY, so SceneStrip can `lazy()` this module and keep ~500KB of WebGL off the
 * critical path. Nothing should import this directly — go through SceneStrip,
 * which mounts it once the strip nears the viewport.
 */

const SHELL_COUNT = 260;

function Globe({ active }) {
    const group = useRef();
    const wire = useRef();
    const shell = useRef();

    // Fibonacci-sphere point cloud for an even shell of nodes.
    const positions = useMemo(() => {
        const arr = new Float32Array(SHELL_COUNT * 3);
        const golden = Math.PI * (3 - Math.sqrt(5));
        for (let i = 0; i < SHELL_COUNT; i++) {
            const y = 1 - (i / (SHELL_COUNT - 1)) * 2;
            const r = Math.sqrt(1 - y * y);
            const theta = golden * i;
            arr[i * 3] = Math.cos(theta) * r * 2.1;
            arr[i * 3 + 1] = y * 2.1;
            arr[i * 3 + 2] = Math.sin(theta) * r * 2.1;
        }
        return arr;
    }, []);

    useFrame((state, delta) => {
        if (!active) return;               // idle while off-screen
        const t = state.clock.elapsedTime;
        if (group.current) {
            group.current.rotation.y += delta * 0.18;
            group.current.rotation.x = Math.sin(t * 0.2) * 0.12;
        }
        if (wire.current) wire.current.rotation.y -= delta * 0.06;
        if (shell.current) {
            const s = 1 + Math.sin(t * 0.9) * 0.03;
            shell.current.scale.setScalar(s);
        }
    });

    return (
        <group ref={group}>
            <mesh ref={wire}>
                <icosahedronGeometry args={[2.0, 2]} />
                <meshBasicMaterial color="#3b82f6" wireframe transparent opacity={0.35} />
            </mesh>
            <mesh>
                <sphereGeometry args={[0.55, 24, 24]} />
                <meshBasicMaterial color="#9cc5ff" transparent opacity={0.9} />
            </mesh>
            <points ref={shell}>
                <bufferGeometry>
                    <bufferAttribute attach="attributes-position" count={SHELL_COUNT} array={positions} itemSize={3} />
                </bufferGeometry>
                <pointsMaterial
                    size={0.055}
                    color="#74b3ff"
                    transparent
                    opacity={0.95}
                    sizeAttenuation
                    depthWrite={false}
                    blending={THREE.AdditiveBlending}
                />
            </points>
        </group>
    );
}

const SceneStripCanvas = ({ active }) => (
    <Canvas
        camera={{ position: [0, 0, 6.4], fov: 55 }}
        dpr={[1, 1.8]}
        frameloop={active ? 'always' : 'demand'}
        gl={{ alpha: true, antialias: true, powerPreference: 'high-performance' }}
    >
        <Globe active={active} />
    </Canvas>
);

export default SceneStripCanvas;
