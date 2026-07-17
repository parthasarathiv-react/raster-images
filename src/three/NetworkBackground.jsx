import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';

/*
 * NetworkBackground
 * A lightweight animated "constellation" of medical-IoT nodes rendered with
 * three.js (via react-three-fiber). Floating points drift slowly and connect
 * with glowing lines whenever they come close — echoing the IoMT hub graphic.
 * Rendered as a fixed, non-interactive layer behind all page content.
 */

const COUNT = 110;       // number of nodes
const BOUND = 9;         // half-size of the drifting volume (x/y)
const LINK_DIST = 2.5;   // distance under which two nodes get linked

function Constellation() {
    const pointsRef = useRef();
    const linesRef = useRef();
    const groupRef = useRef();

    // Node positions + velocities (created once, mutated in place each frame).
    const { positions, velocities } = useMemo(() => {
        const positions = new Float32Array(COUNT * 3);
        const velocities = new Float32Array(COUNT * 3);
        for (let i = 0; i < COUNT; i++) {
            positions[i * 3 + 0] = (Math.random() - 0.5) * BOUND * 2;
            positions[i * 3 + 1] = (Math.random() - 0.5) * BOUND * 2;
            positions[i * 3 + 2] = (Math.random() - 0.5) * BOUND * 1.1;
            velocities[i * 3 + 0] = (Math.random() - 0.5) * 0.012;
            velocities[i * 3 + 1] = (Math.random() - 0.5) * 0.012;
            velocities[i * 3 + 2] = (Math.random() - 0.5) * 0.012;
        }
        return { positions, velocities };
    }, []);

    // Pre-allocated buffer big enough for every possible link.
    const maxLineVerts = COUNT * COUNT;
    const linePositions = useMemo(() => new Float32Array(maxLineVerts * 3), [maxLineVerts]);

    useFrame((state) => {
        const t = state.clock.elapsedTime;

        // Drift nodes and bounce them softly off the volume walls.
        for (let i = 0; i < COUNT; i++) {
            for (let a = 0; a < 3; a++) {
                const idx = i * 3 + a;
                positions[idx] += velocities[idx];
                const limit = a === 2 ? BOUND * 0.55 : BOUND;
                if (positions[idx] > limit || positions[idx] < -limit) velocities[idx] *= -1;
            }
        }
        if (pointsRef.current) {
            pointsRef.current.geometry.attributes.position.needsUpdate = true;
        }

        // Rebuild the link segments for this frame.
        let ptr = 0;
        for (let i = 0; i < COUNT; i++) {
            for (let j = i + 1; j < COUNT; j++) {
                const dx = positions[i * 3] - positions[j * 3];
                const dy = positions[i * 3 + 1] - positions[j * 3 + 1];
                const dz = positions[i * 3 + 2] - positions[j * 3 + 2];
                const dist = Math.sqrt(dx * dx + dy * dy + dz * dz);
                if (dist < LINK_DIST) {
                    linePositions[ptr++] = positions[i * 3];
                    linePositions[ptr++] = positions[i * 3 + 1];
                    linePositions[ptr++] = positions[i * 3 + 2];
                    linePositions[ptr++] = positions[j * 3];
                    linePositions[ptr++] = positions[j * 3 + 1];
                    linePositions[ptr++] = positions[j * 3 + 2];
                }
            }
        }
        if (linesRef.current) {
            const geo = linesRef.current.geometry;
            geo.setDrawRange(0, ptr / 3);
            geo.attributes.position.needsUpdate = true;
        }

        // Gentle parallax sway of the whole field.
        if (groupRef.current) {
            groupRef.current.rotation.y = Math.sin(t * 0.05) * 0.3;
            groupRef.current.rotation.x = Math.cos(t * 0.04) * 0.14;
        }
    });

    return (
        <group ref={groupRef}>
            <points ref={pointsRef}>
                <bufferGeometry>
                    <bufferAttribute
                        attach="attributes-position"
                        count={COUNT}
                        array={positions}
                        itemSize={3}
                    />
                </bufferGeometry>
                <pointsMaterial
                    size={0.16}
                    color="#74b3ff"
                    transparent
                    opacity={0.95}
                    sizeAttenuation
                    depthWrite={false}
                    blending={THREE.AdditiveBlending}
                />
            </points>
            <lineSegments ref={linesRef}>
                <bufferGeometry>
                    <bufferAttribute
                        attach="attributes-position"
                        count={maxLineVerts}
                        array={linePositions}
                        itemSize={3}
                    />
                </bufferGeometry>
                <lineBasicMaterial
                    color="#3b82f6"
                    transparent
                    opacity={0.24}
                    depthWrite={false}
                    blending={THREE.AdditiveBlending}
                />
            </lineSegments>
        </group>
    );
}

const NetworkBackground = () => {
    return (
        <div className="three-bg" aria-hidden="true">
            <Canvas
                camera={{ position: [0, 0, 14], fov: 60 }}
                dpr={[1, 1.8]}
                gl={{ antialias: true, alpha: true, powerPreference: 'high-performance' }}
            >
                <Constellation />
            </Canvas>
        </div>
    );
};

export default NetworkBackground;
