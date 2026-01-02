import React, { Suspense, useRef, useState, useEffect } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { PerspectiveCamera, Stars, Float, Text, MeshDistortMaterial, Environment, Billboard } from '@react-three/drei';
import { Physics, useBox, useSphere } from '@react-three/cannon';
import * as THREE from 'three';

const FloatingCube = ({ position, color, text, ...props }) => {
    const [ref, api] = useBox(() => ({
        mass: 1,
        position,
        args: [1, 1, 1],
        linearDamping: 0.95,
        angularDamping: 0.95,
        ...props
    }));

    const [hovered, setHover] = useState(false);

    useFrame((state) => {
        // Gentle mouse interaction
        const mouse = state.mouse;
        if (hovered) {
            api.applyForce([mouse.x * 2, mouse.y * 2, 0], [0, 0, 0]);
        }
    });

    return (
        <group ref={ref} onPointerOver={() => setHover(true)} onPointerOut={() => setHover(false)}>
            <mesh castShadow>
                <boxGeometry args={[1, 1, 1]} />
                <meshPhysicalMaterial
                    color={hovered ? "#00f3ff" : color}
                    transmission={0.8}
                    thickness={0.5}
                    roughness={0.1}
                    metalness={0.2}
                    transparent
                    opacity={0.6}
                />
            </mesh>
            <Billboard position={[0, 0.8, 0]}>
                <Text
                    fontSize={0.2}
                    color="#00f3ff"
                    font="https://fonts.gstatic.com/s/sharetechmono/v15/J7aUxT8pS9kqMNhBA-Q7Srnf18W9.woff0"
                >
                    {text}
                </Text>
            </Billboard>
        </group>
    );
};

const ArcReactor = () => {
    const meshRef = useRef();
    useFrame((state) => {
        meshRef.current.rotation.z += 0.01;
    });

    return (
        <group position={[0, 0, -5]}>
            <mesh ref={meshRef}>
                <torusGeometry args={[2, 0.05, 16, 100]} />
                <meshBasicMaterial color="#00f3ff" wireframe />
            </mesh>
            <mesh rotation={[0, 0, Math.PI / 4]} ref={meshRef}>
                <torusGeometry args={[1.8, 0.02, 16, 100]} />
                <meshBasicMaterial color="#00f3ff" wireframe opacity={0.5} transparent />
            </mesh>
            <pointLight intensity={2} color="#00f3ff" />
        </group>
    );
}

const MouseInfluence = () => {
    const { viewport, mouse } = useThree();
    const [ref, api] = useSphere(() => ({ type: 'Kinematic', args: [2], position: [0, 0, 0] }));

    useFrame(() => {
        api.position.set((mouse.x * viewport.width) / 2, (mouse.y * viewport.height) / 2, 0);
    });

    return (
        <mesh ref={ref}>
            <sphereGeometry args={[2, 32, 32]} />
            <meshBasicMaterial wireframe transparent opacity={0} />
        </mesh>
    );
};

const AntiGravityScene = () => {
    return (
        <div className="w-screen h-screen bg-black">
            <Canvas shadows dpr={[1, 2]}>
                <PerspectiveCamera makeDefault position={[0, 0, 10]} />
                <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />
                <ambientLight intensity={0.2} />
                <pointLight position={[10, 10, 10]} intensity={1} color="#00f3ff" />

                <Suspense fallback={null}>
                    <Physics gravity={[0, 0, 0]}>
                        <MouseInfluence />
                        {/* CORE SKILLS */}
                        <FloatingCube position={[-5, 3, 0]} color="#00f3ff" text="PYTHON" />
                        <FloatingCube position={[5, 3, 0]} color="#00f3ff" text="JAVASCRIPT" />
                        <FloatingCube position={[-3, 0, 0]} color="#00f3ff" text="MACHINE_LEARNING" />
                        <FloatingCube position={[3, 0, 0]} color="#00f3ff" text="RAG_SYSTEMS" />
                        <FloatingCube position={[-5, -3, 0]} color="#00f3ff" text="STREAMLIT" />
                        <FloatingCube position={[5, -3, 0]} color="#00f3ff" text="FIREBASE" />
                        <FloatingCube position={[0, 5, 0]} color="#00f3ff" text="AI_AGRICULTURE" />
                        <FloatingCube position={[0, -5, 0]} color="#00f3ff" text="HEALTHCARE_AI" />
                    </Physics>
                    <ArcReactor />
                    <Environment preset="city" />
                </Suspense>
            </Canvas>
        </div>
    );
};

export default AntiGravityScene;
