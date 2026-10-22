'use client';

import React, { useRef, useMemo, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float } from '@react-three/drei';
import * as THREE from 'three';

/**
 * Tracks normalized pointer coordinates globally (-1 to +1)
 * Ensures 3D particles and geometry respond even when canvas is placed behind page content
 */
function useGlobalPointer() {
  const pointerRef = useRef<{ x: number; y: number }>({ x: 0, y: 0 });

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const handlePointerMove = (e: MouseEvent | PointerEvent) => {
      pointerRef.current.x = (e.clientX / window.innerWidth) * 2 - 1;
      pointerRef.current.y = -(e.clientY / window.innerHeight) * 2 + 1;
    };

    window.addEventListener('pointermove', handlePointerMove, { passive: true });
    return () => window.removeEventListener('pointermove', handlePointerMove);
  }, []);

  return pointerRef;
}

/**
 * Tracks normalized vertical scroll progress (0 to 1) for subtle global parallax
 */
function useGlobalScroll() {
  const scrollRef = useRef<number>(0);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const handleScroll = () => {
      const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
      scrollRef.current = maxScroll > 0 ? Math.min(1, Math.max(0, window.scrollY / maxScroll)) : 0;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return scrollRef;
}

/**
 * Interactive Global Particle Matrix Wave
 * Simulates a high-performance distributed telemetry field responding to cursor coordinates and scroll
 */
function ParticleMatrixField({
  count = 850,
  globalPointer,
  globalScroll,
}: {
  count?: number;
  globalPointer: React.RefObject<{ x: number; y: number }>;
  globalScroll: React.RefObject<number>;
}) {
  const pointsRef = useRef<THREE.Points>(null!);

  const [positions, colors] = useMemo(() => {
    const pos = new Float32Array(count * 3);
    const col = new Float32Array(count * 3);

    const cyan = new THREE.Color('#00ffcc');
    const blue = new THREE.Color('#0070f3');
    const vermilion = new THREE.Color('#e5533d');

    for (let i = 0; i < count; i++) {
      const i3 = i * 3;
      pos[i3] = (Math.random() - 0.5) * 16;
      pos[i3 + 1] = (Math.random() - 0.5) * 12;
      pos[i3 + 2] = (Math.random() - 0.5) * 9;

      const mixed = Math.random();
      const chosenColor = mixed < 0.55 ? cyan : mixed < 0.88 ? blue : vermilion;
      col[i3] = chosenColor.r;
      col[i3 + 1] = chosenColor.g;
      col[i3 + 2] = chosenColor.b;
    }

    return [pos, col];
  }, [count]);

  useFrame((state) => {
    if (!pointsRef.current) return;
    const time = state.clock.getElapsedTime();
    const pointer = globalPointer.current || { x: 0, y: 0 };
    const scroll = globalScroll.current || 0;

    pointsRef.current.rotation.y = time * 0.035 + pointer.x * 0.12 + scroll * 0.4;
    pointsRef.current.rotation.x = Math.sin(time * 0.04) * 0.08 - pointer.y * 0.1;

    // Gentle wave disturbance across matrix nodes
    const posAttr = pointsRef.current.geometry.attributes.position as THREE.BufferAttribute;
    const arr = posAttr.array as Float32Array;
    for (let i = 0; i < count; i += 4) {
      const i3 = i * 3;
      arr[i3 + 1] += Math.sin(time * 1.4 + arr[i3] * 0.7) * 0.0025;
    }
    posAttr.needsUpdate = true;
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
        <bufferAttribute attach="attributes-color" args={[colors, 3]} />
      </bufferGeometry>
      <pointsMaterial
        size={0.042}
        vertexColors
        transparent
        opacity={0.55}
        blending={THREE.AdditiveBlending}
        depthWrite={false}
      />
    </points>
  );
}

/**
 * Satellite Cloud Pods & Dynamic Vector Interconnects
 */
function InterconnectedCloudCluster({
  globalPointer,
  globalScroll,
}: {
  globalPointer: React.RefObject<{ x: number; y: number }>;
  globalScroll: React.RefObject<number>;
}) {
  const clusterGroup = useRef<THREE.Group>(null!);
  const linesGeometryRef = useRef<THREE.BufferGeometry>(null!);

  const nodes = useMemo(
    () => [
      { id: 'gateway', pos: [0, 0, 0], color: '#00ffcc', size: 0.48 },
      { id: 'auth', pos: [-2.2, 1.4, -0.6], color: '#0070f3', size: 0.28 },
      { id: 'api-core', pos: [2.3, 1.1, 0.4], color: '#00ffcc', size: 0.32 },
      { id: 'database', pos: [-1.8, -1.6, 0.8], color: '#0070f3', size: 0.34 },
      { id: 'cache', pos: [1.9, -1.4, -0.9], color: '#00ffcc', size: 0.26 },
      { id: 'telemetry', pos: [0, 2.3, -1.2], color: '#e5533d', size: 0.25 },
      { id: 'worker', pos: [0, -2.4, 0.5], color: '#00ffcc', size: 0.24 },
    ],
    []
  );

  const linePositions = useMemo(() => {
    const points: number[] = [];
    const center = nodes[0].pos;

    for (let i = 1; i < nodes.length; i++) {
      points.push(center[0], center[1], center[2]);
      points.push(nodes[i].pos[0], nodes[i].pos[1], nodes[i].pos[2]);

      const nextIdx = i === nodes.length - 1 ? 1 : i + 1;
      points.push(nodes[i].pos[0], nodes[i].pos[1], nodes[i].pos[2]);
      points.push(nodes[nextIdx].pos[0], nodes[nextIdx].pos[1], nodes[nextIdx].pos[2]);
    }

    return new Float32Array(points);
  }, [nodes]);

  useFrame((state) => {
    if (!clusterGroup.current) return;
    const time = state.clock.getElapsedTime();
    const pointer = globalPointer.current || { x: 0, y: 0 };
    const scroll = globalScroll.current || 0;

    // Smooth cursor-driven rotation with spring-like dampening + subtle scroll progression
    clusterGroup.current.rotation.y = THREE.MathUtils.lerp(
      clusterGroup.current.rotation.y,
      pointer.x * 0.42 + time * 0.06 + scroll * 0.8,
      0.04
    );
    clusterGroup.current.rotation.x = THREE.MathUtils.lerp(
      clusterGroup.current.rotation.x,
      -pointer.y * 0.32 + Math.sin(time * 0.28) * 0.07 - scroll * 0.3,
      0.04
    );

    // Subtle drift with scroll
    clusterGroup.current.position.y = THREE.MathUtils.lerp(
      clusterGroup.current.position.y,
      (scroll - 0.2) * 1.2,
      0.04
    );
  });

  return (
    <group ref={clusterGroup}>
      {/* Central High-Dimensional Polyhedron */}
      <Float speed={2.2} rotationIntensity={0.7} floatIntensity={0.8}>
        <mesh position={[0, 0, 0]}>
          <icosahedronGeometry args={[0.9, 1]} />
          <meshStandardMaterial
            color="#00ffcc"
            wireframe
            transparent
            opacity={0.38}
            emissive="#004444"
            emissiveIntensity={0.35}
          />
        </mesh>

        <mesh position={[0, 0, 0]}>
          <octahedronGeometry args={[0.42, 0]} />
          <meshStandardMaterial
            color="#0070f3"
            emissive="#0070f3"
            emissiveIntensity={1.1}
            roughness={0.2}
            metalness={0.8}
          />
        </mesh>
      </Float>

      {/* Orbiting Service Pods */}
      {nodes.map((node, i) => (
        <Float key={node.id} speed={1.5 + (i % 3) * 0.4} rotationIntensity={0.5} floatIntensity={0.6}>
          <group position={node.pos as [number, number, number]}>
            <mesh>
              <boxGeometry args={[node.size, node.size, node.size]} />
              <meshStandardMaterial
                color={node.color}
                wireframe
                transparent
                opacity={0.48}
                emissive={node.color}
                emissiveIntensity={0.25}
              />
            </mesh>
            <mesh>
              <sphereGeometry args={[node.size * 0.35, 12, 12]} />
              <meshBasicMaterial color={node.color} />
            </mesh>
          </group>
        </Float>
      ))}

      {/* Interconnecting Wireframe Bus Lines */}
      <lineSegments>
        <bufferGeometry ref={linesGeometryRef}>
          <bufferAttribute attach="attributes-position" args={[linePositions, 3]} />
        </bufferGeometry>
        <lineBasicMaterial
          color="#00ffcc"
          transparent
          opacity={0.18}
          blending={THREE.AdditiveBlending}
        />
      </lineSegments>
    </group>
  );
}

function GlobalSceneContents() {
  const globalPointer = useGlobalPointer();
  const globalScroll = useGlobalScroll();

  return (
    <>
      <ambientLight color="#050a18" intensity={1.6} />
      <pointLight position={[-4.5, 3, 2.5]} color="#00ffcc" intensity={20} distance={15} />
      <pointLight position={[4.5, -2.8, 2.5]} color="#0070f3" intensity={24} distance={16} />
      <pointLight position={[0, 4.2, -1.5]} color="#e5533d" intensity={12} distance={11} />
      <directionalLight position={[2, 4, 3]} color="#ffffff" intensity={0.35} />

      <InterconnectedCloudCluster globalPointer={globalPointer} globalScroll={globalScroll} />
      <ParticleMatrixField count={800} globalPointer={globalPointer} globalScroll={globalScroll} />
    </>
  );
}

/**
 * Global 3D Background Scene
 * Fixed persistent canvas across all routes with zero blocking of DOM events.
 */
export default function HeroScene() {
  return (
    <div className="fixed inset-0 w-full h-full pointer-events-none select-none overflow-hidden -z-10">
      <Canvas
        camera={{ position: [0, 0, 6.8], fov: 46 }}
        dpr={[1, 1.5]}
        gl={{
          antialias: true,
          alpha: true,
          powerPreference: 'high-performance',
        }}
        className="w-full h-full pointer-events-none"
      >
        <GlobalSceneContents />
      </Canvas>
    </div>
  );
}
