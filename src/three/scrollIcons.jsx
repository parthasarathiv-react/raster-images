import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { RoundedBox } from '@react-three/drei';
import * as THREE from 'three';

/*
 * scrollIcons
 * Stylised, low-poly node icons shared by every ProductScrollExperience
 * "schematic build" diagram (PACS / RIS / Teleradiology / any future stack).
 * Kept 1:1 with the icons originally authored for PacsScrollExperience —
 * moved here so all stacks can reuse them via the ICONS registry below.
 */

export const ACCENT = '#5fa6ff';
export const ACCENT_HOT = '#9cc5ff';

const M_BODY = { color: '#16345c', metalness: 0.45, roughness: 0.4 };
const M_DARK = { color: '#0d2242', metalness: 0.4, roughness: 0.5 };

export function ServerHub() {
    const ref = useRef();
    useFrame((s) => {
        if (ref.current) ref.current.rotation.y = Math.sin(s.clock.elapsedTime * 0.4) * 0.18;
    });
    const towers = [-0.42, 0, 0.42];
    return (
        <group ref={ref}>
            {towers.map((x, i) => (
                <group key={i} position={[x, 0, 0]}>
                    <RoundedBox args={[0.34, 1.25, 0.55]} radius={0.03} smoothness={3}>
                        <meshStandardMaterial {...M_DARK} />
                    </RoundedBox>
                    {[0.42, 0.26, 0.1].map((y, j) => (
                        <mesh key={j} position={[0, y, 0.28]}>
                            <boxGeometry args={[0.24, 0.05, 0.02]} />
                            <meshStandardMaterial color="#0a1830" emissive={ACCENT} emissiveIntensity={1.3} toneMapped={false} />
                        </mesh>
                    ))}
                    <mesh position={[0, -0.2, 0.28]}>
                        <circleGeometry args={[0.05, 16]} />
                        <meshStandardMaterial color={ACCENT_HOT} emissive={ACCENT_HOT} emissiveIntensity={1.6} toneMapped={false} />
                    </mesh>
                </group>
            ))}
        </group>
    );
}

export function ModalitiesIcon() {
    return (
        <group>
            {/* CT gantry */}
            <mesh rotation={[Math.PI / 2, 0, 0]} position={[-0.35, 0, 0]}>
                <torusGeometry args={[0.5, 0.16, 16, 32]} />
                <meshStandardMaterial {...M_BODY} />
            </mesh>
            <mesh rotation={[Math.PI / 2, 0, 0]} position={[-0.35, 0, 0]}>
                <torusGeometry args={[0.32, 0.05, 12, 32]} />
                <meshStandardMaterial color={ACCENT} emissive={ACCENT} emissiveIntensity={1.2} toneMapped={false} />
            </mesh>
            {/* MRI bore box */}
            <group position={[0.55, 0, 0]}>
                <RoundedBox args={[0.6, 0.7, 0.6]} radius={0.08} smoothness={3}>
                    <meshStandardMaterial {...M_BODY} />
                </RoundedBox>
                <mesh position={[0, 0, 0.31]}>
                    <ringGeometry args={[0.12, 0.22, 24]} />
                    <meshStandardMaterial color={ACCENT} emissive={ACCENT} emissiveIntensity={1.1} side={THREE.DoubleSide} toneMapped={false} />
                </mesh>
            </group>
        </group>
    );
}

export function WorkstationIcon({ tex }) {
    return (
        <group>
            <group position={[0, 0.12, 0]}>
                <RoundedBox args={[0.98, 0.66, 0.05]} radius={0.03} smoothness={3}>
                    <meshStandardMaterial {...M_DARK} />
                </RoundedBox>
                {tex ? (
                    <mesh position={[0, 0, 0.032]}>
                        <planeGeometry args={[0.88, 0.56]} />
                        <meshBasicMaterial map={tex} toneMapped={false} />
                    </mesh>
                ) : (
                    <mesh position={[0, 0, 0.032]}>
                        <planeGeometry args={[0.88, 0.56]} />
                        <meshStandardMaterial color="#0a1830" emissive={ACCENT} emissiveIntensity={0.5} toneMapped={false} />
                    </mesh>
                )}
            </group>
            <mesh position={[0, -0.32, 0]}>
                <boxGeometry args={[0.28, 0.12, 0.14]} />
                <meshStandardMaterial {...M_BODY} />
            </mesh>
        </group>
    );
}

export function DiscIcon() {
    return (
        <group rotation={[Math.PI / 2.3, 0, 0]}>
            <mesh>
                <cylinderGeometry args={[0.5, 0.5, 0.04, 40]} />
                <meshStandardMaterial color="#1b3a63" metalness={0.9} roughness={0.15} emissive={ACCENT} emissiveIntensity={0.35} />
            </mesh>
            <mesh position={[0, 0.03, 0]}>
                <cylinderGeometry args={[0.12, 0.12, 0.06, 24]} />
                <meshStandardMaterial color="#0a1830" />
            </mesh>
        </group>
    );
}

export function PrinterIcon() {
    return (
        <group>
            <RoundedBox args={[0.85, 0.5, 0.6]} radius={0.06} smoothness={3}>
                <meshStandardMaterial {...M_BODY} />
            </RoundedBox>
            <mesh position={[0, 0.32, 0.05]} rotation={[-0.35, 0, 0]}>
                <boxGeometry args={[0.5, 0.36, 0.01]} />
                <meshStandardMaterial color="#dbe8ff" emissive={ACCENT} emissiveIntensity={0.15} />
            </mesh>
            <mesh position={[0, -0.02, 0.31]}>
                <boxGeometry args={[0.55, 0.05, 0.02]} />
                <meshStandardMaterial color="#0a1830" emissive={ACCENT} emissiveIntensity={1} toneMapped={false} />
            </mesh>
        </group>
    );
}

export function DiskStackIcon() {
    return (
        <group>
            {[0, 1, 2, 3].map((i) => (
                <mesh key={i} position={[0, i * 0.19 - 0.28, 0]}>
                    <cylinderGeometry args={[0.42, 0.42, 0.14, 32]} />
                    <meshStandardMaterial color="#16345c" metalness={0.55} roughness={0.35} emissive={ACCENT} emissiveIntensity={i === 3 ? 0.5 : 0.15} />
                </mesh>
            ))}
        </group>
    );
}

export function FirewallIcon() {
    const ref = useRef();
    useFrame((s) => {
        if (ref.current) ref.current.scale.y = 1 + Math.sin(s.clock.elapsedTime * 4) * 0.06;
    });
    return (
        <group>
            <mesh ref={ref}>
                <coneGeometry args={[0.4, 0.95, 5]} />
                <meshStandardMaterial color="#ff8a4c" emissive="#ff5a1f" emissiveIntensity={1.4} toneMapped={false} />
            </mesh>
            <mesh position={[0, -0.05, 0]} scale={[0.55, 0.7, 0.55]}>
                <coneGeometry args={[0.4, 0.95, 5]} />
                <meshStandardMaterial color="#ffd08a" emissive="#ffbe6b" emissiveIntensity={1.6} toneMapped={false} />
            </mesh>
        </group>
    );
}

export function CloudIcon() {
    const parts = [
        [0, 0, 0, 0.42],
        [-0.42, -0.06, 0, 0.3],
        [0.42, -0.06, 0, 0.32],
        [0.16, 0.2, 0, 0.28],
    ];
    return (
        <group>
            {parts.map((p, i) => (
                <mesh key={i} position={[p[0], p[1], p[2]]}>
                    <sphereGeometry args={[p[3], 20, 20]} />
                    <meshStandardMaterial color="#20456f" metalness={0.2} roughness={0.6} emissive={ACCENT} emissiveIntensity={0.25} />
                </mesh>
            ))}
        </group>
    );
}

export function RouterIcon() {
    return (
        <group>
            <RoundedBox args={[0.8, 0.16, 0.5]} radius={0.05} smoothness={3}>
                <meshStandardMaterial {...M_BODY} />
            </RoundedBox>
            {[-0.25, 0, 0.25].map((x, i) => (
                <mesh key={i} position={[x, 0.05, 0.24]}>
                    <sphereGeometry args={[0.04, 12, 12]} />
                    <meshStandardMaterial color={ACCENT_HOT} emissive={ACCENT_HOT} emissiveIntensity={1.4} toneMapped={false} />
                </mesh>
            ))}
            {[-0.28, 0.28].map((x, i) => (
                <mesh key={i} position={[x, 0.3, 0]} rotation={[0, 0, x < 0 ? 0.3 : -0.3]}>
                    <cylinderGeometry args={[0.015, 0.015, 0.4, 8]} />
                    <meshStandardMaterial color="#9db6dc" />
                </mesh>
            ))}
        </group>
    );
}

export function HouseIcon() {
    return (
        <group>
            <RoundedBox args={[0.7, 0.55, 0.55]} radius={0.03} position={[0, -0.1, 0]}>
                <meshStandardMaterial {...M_BODY} />
            </RoundedBox>
            <mesh position={[0, 0.28, 0]} rotation={[0, Math.PI / 4, 0]}>
                <coneGeometry args={[0.55, 0.4, 4]} />
                <meshStandardMaterial color="#20456f" emissive={ACCENT} emissiveIntensity={0.3} />
            </mesh>
            <mesh position={[0, -0.12, 0.28]}>
                <boxGeometry args={[0.16, 0.26, 0.02]} />
                <meshStandardMaterial color={ACCENT} emissive={ACCENT} emissiveIntensity={0.9} toneMapped={false} />
            </mesh>
        </group>
    );
}

/* node icon registry — a stack's node entries reference one of these keys
   via `icon`, decoupling the visual from the node's own key/label. */
export const ICONS = {
    modalities: ModalitiesIcon,
    workstation: WorkstationIcon,
    disc: DiscIcon,
    printer: PrinterIcon,
    diskStack: DiskStackIcon,
    firewall: FirewallIcon,
    cloud: CloudIcon,
    router: RouterIcon,
    house: HouseIcon,
};
