import React, { useRef, useMemo, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, MeshTransmissionMaterial, PerspectiveCamera, Environment, Stars, ContactShadows, Text } from '@react-three/drei';
import * as THREE from 'three';
import { Page } from '../types';
import { gsap } from 'gsap';

interface EducationalElementProps {
  position: [number, number, number];
  color: string;
  speed: number;
  parallaxFactor: number;
  scrollY: React.MutableRefObject<number>;
}

const FlyingFormula: React.FC<EducationalElementProps & { text: string; fontSize?: number }> = ({ text, position, color, speed, parallaxFactor, scrollY, fontSize = 0.4 }) => {
  const ref = useRef<THREE.Group>(null);
  const initialPos = useMemo(() => new THREE.Vector3(...position), [position]);

  useFrame((state) => {
    if (ref.current) {
      // Zoom effect
      ref.current.position.z += speed;
      if (ref.current.position.z > 8) ref.current.position.z = -25;

      // Parallax effect: Shift based on scroll
      const targetY = initialPos.y + (scrollY.current * parallaxFactor * 10);
      ref.current.position.y = THREE.MathUtils.lerp(ref.current.position.y, targetY, 0.05);

      // Gentle idle rotation
      ref.current.rotation.y = Math.sin(state.clock.getElapsedTime() * 0.5 + initialPos.x) * 0.1;
    }
  });

  return (
    <group ref={ref} position={position}>
      <Text
        fontSize={fontSize}
        color={color}
        font="https://fonts.gstatic.com/s/cinzel/v11/nKue3Pee9i-uJ8FzNV6P.woff"
        anchorX="center"
        anchorY="middle"
      >
        {text}
        <meshStandardMaterial emissive={color} emissiveIntensity={4} toneMapped={false} />
      </Text>
    </group>
  );
};

const FlyingBenzene: React.FC<EducationalElementProps> = ({ position, color, speed, parallaxFactor, scrollY }) => {
  const ref = useRef<THREE.Group>(null);
  const initialPos = useMemo(() => new THREE.Vector3(...position), [position]);

  useFrame(() => {
    if (ref.current) {
      ref.current.position.z += speed;
      if (ref.current.position.z > 8) ref.current.position.z = -25;

      const targetY = initialPos.y + (scrollY.current * parallaxFactor * 10);
      ref.current.position.y = THREE.MathUtils.lerp(ref.current.position.y, targetY, 0.05);

      ref.current.rotation.y += 0.01;
      ref.current.rotation.x += 0.005;
    }
  });

  return (
    <group ref={ref} position={position} scale={0.3}>
      {[0, 1, 2, 3, 4, 5].map((i) => (
        <mesh key={i} rotation={[0, 0, (i * Math.PI) / 3]} position={[Math.cos((i * Math.PI) / 3), Math.sin((i * Math.PI) / 3), 0]}>
          <boxGeometry args={[1, 0.04, 0.04]} />
          <meshStandardMaterial color={color} emissive={color} emissiveIntensity={2} />
        </mesh>
      ))}
      <mesh>
        <torusGeometry args={[0.7, 0.02, 16, 100]} />
        <meshStandardMaterial color={color} emissive={color} emissiveIntensity={1} transparent opacity={0.5} />
      </mesh>
    </group>
  );
};

const FlyingDNA: React.FC<EducationalElementProps> = ({ position, color, speed, parallaxFactor, scrollY }) => {
  const ref = useRef<THREE.Group>(null);
  const initialPos = useMemo(() => new THREE.Vector3(...position), [position]);

  useFrame(() => {
    if (ref.current) {
      ref.current.position.z += speed;
      if (ref.current.position.z > 8) ref.current.position.z = -25;

      const targetY = initialPos.y + (scrollY.current * parallaxFactor * 10);
      ref.current.position.y = THREE.MathUtils.lerp(ref.current.position.y, targetY, 0.05);

      ref.current.rotation.y += 0.02;
    }
  });

  return (
    <group ref={ref} position={position} scale={0.25}>
      {[...Array(10)].map((_, i) => (
        <group key={i} position={[0, i * 0.4 - 2, 0]}>
          <mesh position={[Math.sin(i * 0.8), 0, Math.cos(i * 0.8)]}>
            <sphereGeometry args={[0.1, 16, 16]} />
            <meshStandardMaterial color={color} emissive={color} emissiveIntensity={2} />
          </mesh>
          <mesh position={[-Math.sin(i * 0.8), 0, -Math.cos(i * 0.8)]}>
            <sphereGeometry args={[0.1, 16, 16]} />
            <meshStandardMaterial color={color} emissive={color} emissiveIntensity={2} />
          </mesh>
          <mesh rotation={[0, 0, Math.PI / 2]}>
            <cylinderGeometry args={[0.015, 0.015, Math.abs(Math.sin(i * 0.8)) * 2]} />
            <meshStandardMaterial color="white" opacity={0.3} transparent />
          </mesh>
        </group>
      ))}
    </group>
  );
};

const ScienceTunnel = ({ currentPage, scrollY }: { currentPage: Page; scrollY: React.MutableRefObject<number> }) => {
  const colors = {
    home: '#F49D1A',
    about: '#22d3ee',
    courses: '#818cf8',
    syllabus: '#4ade80',
    contact: '#f87171',
  };
  const activeColor = colors[currentPage] || colors.home;

  const elements = useMemo(() => [
    // Math
    { type: 'formula', text: 'a² + b² = c²', pos: [-6, 4, -15], speed: 0.03, pFactor: 0.2 },
    { type: 'formula', text: 'sin²θ + cos²θ = 1', pos: [5, -4, -10], speed: 0.04, pFactor: 0.35 },
    { type: 'formula', text: 'πr²', pos: [7, 2, -22], speed: 0.025, pFactor: 0.15 },
    // Physics
    { type: 'formula', text: 'V = IR', pos: [-4, 5, -8], speed: 0.045, pFactor: 0.5 },
    { type: 'formula', text: 'F = ma', pos: [3, 6, -18], speed: 0.03, pFactor: 0.1 },
    { type: 'formula', text: 'E = mc²', pos: [-7, -3, -12], speed: 0.035, pFactor: 0.4 },
    // Chemistry
    { type: 'benzene', pos: [6, -2, -14], speed: 0.032, pFactor: 0.25 },
    { type: 'formula', text: 'H₂O', pos: [-5, -5, -6], speed: 0.05, pFactor: 0.6 },
    { type: 'formula', text: 'NaCl', pos: [2, -6, -20], speed: 0.022, pFactor: 0.3 },
    // Biology
    { type: 'dna', pos: [-5, 1, -10], speed: 0.028, pFactor: 0.45 },
    { type: 'dna', pos: [8, -5, -25], speed: 0.02, pFactor: 0.1 },
    // Extra symbols
    { type: 'formula', text: 'Σx', pos: [0, 8, -12], speed: 0.03, pFactor: 0.15 },
    { type: 'formula', text: '∫f(x)', pos: [-2, -8, -15], speed: 0.04, pFactor: 0.2 },
  ], []);

  return (
    <group>
      {elements.map((el, i) => {
        const props = {
          position: el.pos as [number, number, number],
          color: activeColor,
          speed: el.speed,
          parallaxFactor: el.pFactor,
          scrollY
        };
        if (el.type === 'formula') return <FlyingFormula key={i} text={el.text!} {...props} />;
        if (el.type === 'benzene') return <FlyingBenzene key={i} {...props} />;
        if (el.type === 'dna') return <FlyingDNA key={i} {...props} />;
        return null;
      })}
    </group>
  );
};

const KnowledgeBook = ({ scrollY }: { scrollY: React.MutableRefObject<number> }) => {
  const meshRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = Math.sin(state.clock.getElapsedTime() * 0.5) * 0.15;
      meshRef.current.rotation.x = Math.cos(state.clock.getElapsedTime() * 0.3) * 0.05;

      const targetY = scrollY.current * 1.5;
      meshRef.current.position.y = THREE.MathUtils.lerp(meshRef.current.position.y, targetY, 0.05);
    }
  });

  return (
    <Float speed={2} rotationIntensity={0.2} floatIntensity={0.3}>
      <group ref={meshRef}>
        <mesh castShadow>
          <boxGeometry args={[2.4, 3.4, 0.15]} />
          <MeshTransmissionMaterial
            backside
            samples={12}
            thickness={0.5}
            chromaticAberration={0.05}
            anisotropy={0.1}
            distortion={0.1}
            color="#ffffff"
            transmission={0.95}
            roughness={0.05}
          />
        </mesh>
        <mesh position={[-1.2, 0, 0]}>
          <boxGeometry args={[0.2, 3.4, 0.2]} />
          <meshStandardMaterial color="#F49D1A" metalness={0.9} roughness={0.1} />
        </mesh>
      </group>
    </Float>
  );
};

const BackgroundGradient = ({ currentPage }: { currentPage: Page }) => {
  const meshRef = useRef<THREE.Mesh>(null);

  const colors = useMemo(() => ({
    home: new THREE.Color('#120a06'),
    about: new THREE.Color('#061211'),
    courses: new THREE.Color('#060812'),
    syllabus: new THREE.Color('#0a1206'),
    contact: new THREE.Color('#120606'),
  }), []);

  useEffect(() => {
    if (meshRef.current) {
      const targetColor = colors[currentPage] || colors.home;
      gsap.to((meshRef.current.material as THREE.MeshStandardMaterial).color, {
        r: targetColor.r,
        g: targetColor.g,
        b: targetColor.b,
        duration: 1.5,
        ease: 'power2.inOut',
      });
    }
  }, [currentPage, colors]);

  return (
    <mesh ref={meshRef} scale={100} position={[0, 0, -30]}>
      <sphereGeometry args={[1, 32, 32]} />
      <meshStandardMaterial side={THREE.BackSide} roughness={1} metalness={0} />
    </mesh>
  );
};

interface Scene3DProps {
  currentPage: Page;
}

const Scene3D: React.FC<Scene3DProps> = ({ currentPage }) => {
  const scrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const h = document.documentElement, st = 'scrollTop', sh = 'scrollHeight';
      scrollY.current = (h[st] || document.body[st]) / ((h[sh] || document.body[sh]) - h.clientHeight);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="fixed inset-0 z-0 bg-black">
      <Canvas shadows dpr={[1, 2]}>
        <PerspectiveCamera makeDefault position={[0, 0, 8]} fov={45} />
        <ambientLight intensity={0.2} />
        <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={5} color="#F49D1A" castShadow />
        <pointLight position={[-10, -10, -10]} intensity={1} color="#4B281B" />

        <KnowledgeBook scrollY={scrollY} />
        <ScienceTunnel currentPage={currentPage} scrollY={scrollY} />
        <BackgroundGradient currentPage={currentPage} />

        <Stars radius={150} depth={50} count={4000} factor={4} saturation={0} fade speed={1} />
        <ContactShadows position={[0, -3.5, 0]} opacity={0.3} scale={12} blur={3} far={4} />
        <Environment preset="night" />
      </Canvas>
    </div>
  );
};

export default Scene3D;