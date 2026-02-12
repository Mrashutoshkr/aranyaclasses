
import React, { useState, useRef, useEffect } from 'react';
import { Canvas } from '@react-three/fiber';
import { Float, Text, ContactShadows, PresentationControls, Html } from '@react-three/drei';
import { SYLLABUS_DATA } from '../constants';
import { ChevronLeft, ChevronRight, CheckCircle } from 'lucide-react';
import { gsap } from 'gsap';

const BookPage = ({ data, active }: { data: any, active: boolean }) => {
  return (
    <Html transform distanceFactor={1.5} position={[0, 0, 0.01]} portal={undefined}>
      <div className={`w-[400px] h-[550px] p-8 glass rounded-lg text-white select-none transition-all duration-700 ${active ? 'opacity-100 scale-100' : 'opacity-0 scale-95 pointer-events-none'}`}>
        <div className="border-b border-orange-500/30 pb-4 mb-6">
          <span className="text-orange-400 font-bold tracking-widest text-xs uppercase">{data.class} Milestone</span>
          <h3 className="text-3xl font-cinzel">{data.title}</h3>
        </div>
        <div className="space-y-6 overflow-y-auto max-h-[380px] pr-2 custom-scrollbar">
          <p className="text-gray-400 text-sm italic mb-4">{data.overview}</p>
          {data.milestones.map((m: any, idx: number) => (
            <div key={idx} className="bg-white/5 p-4 rounded-xl border border-white/10 hover:bg-white/10 transition-colors">
              <div className="flex items-center justify-between mb-3">
                <h4 className="text-orange-400 font-bold text-sm">{m.term}</h4>
                <span className="text-[10px] text-gray-500 uppercase font-bold">{m.period}</span>
              </div>
              <ul className="space-y-2">
                {m.details.map((d: string, di: number) => (
                  <li key={di} className="flex items-start gap-2 text-xs text-gray-300">
                    <CheckCircle size={10} className="text-orange-500 mt-0.5 shrink-0" />
                    <span>{d}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </Html>
  );
};

const SyllabusBook3D: React.FC = () => {
  const [index, setIndex] = useState(0);
  const meshRef = useRef<any>(null);

  // Animate the "flip" rotation whenever the index changes
  useEffect(() => {
    if (meshRef.current) {
      gsap.fromTo(meshRef.current.rotation,
        { y: -0.5 },
        { y: 0.1, duration: 0.8, ease: "back.out(1.7)" }
      );
    }
  }, [index]);

  return (
    <div className="w-full h-[90vh] relative pt-20">
      <div className="absolute top-32 left-1/2 -translate-x-1/2 text-center z-20 pointer-events-none">
        <h2 className="text-orange-500 font-bold tracking-[0.3em] uppercase text-xs mb-2">Academic Roadmap</h2>
        <h1 className="text-white text-4xl font-cinzel">Interactive Syllabus</h1>
      </div>

      <Canvas camera={{ position: [0, 0, 5], fov: 40 }}>
        <ambientLight intensity={1.5} />
        <pointLight position={[10, 10, 10]} intensity={2} />
        <spotLight position={[-10, 10, 10]} angle={0.3} penumbra={1} intensity={1} castShadow />

        <PresentationControls
          global
          config={{ mass: 2, tension: 500 }}
          snap={{ mass: 4, tension: 1500 }}
          rotation={[0, 0.1, 0]}
          polar={[-Math.PI / 4, Math.PI / 4]}
          azimuth={[-Math.PI / 2, Math.PI / 2]}
        >
          <Float rotationIntensity={0.2} floatIntensity={0.5} speed={1.5}>
            <mesh ref={meshRef} castShadow receiveShadow>
              <boxGeometry args={[3.4, 4.4, 0.15]} />
              <meshStandardMaterial color="#4B281B" roughness={0.3} metalness={0.2} />

              {/* Gold Binding Detail */}
              <mesh position={[-1.65, 0, 0]}>
                <boxGeometry args={[0.1, 4.4, 0.16]} />
                <meshStandardMaterial color="#F49D1A" metalness={0.8} roughness={0.2} />
              </mesh>

              <BookPage data={SYLLABUS_DATA[index]} active={true} />
            </mesh>
          </Float>
        </PresentationControls>

        <ContactShadows position={[0, -2.5, 0]} opacity={0.6} scale={12} blur={2} far={4} />
      </Canvas>

      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex items-center gap-10 z-20">
        <button
          onClick={() => setIndex(i => Math.max(0, i - 1))}
          className="w-14 h-14 rounded-full glass text-white flex items-center justify-center hover:bg-orange-500 hover:scale-110 transition-all disabled:opacity-20 disabled:scale-100"
          disabled={index === 0}
        >
          <ChevronLeft />
        </button>

        <div className="text-center">
          <p className="text-gray-500 text-[10px] uppercase font-bold tracking-widest mb-1">Page</p>
          <span className="text-white font-cinzel text-2xl tracking-[0.2em] font-bold">
            {index + 1} <span className="text-orange-500 text-sm">/</span> {SYLLABUS_DATA.length}
          </span>
        </div>

        <button
          onClick={() => setIndex(i => Math.min(SYLLABUS_DATA.length - 1, i + 1))}
          className="w-14 h-14 rounded-full glass text-white flex items-center justify-center hover:bg-orange-500 hover:scale-110 transition-all disabled:opacity-20 disabled:scale-100"
          disabled={index === SYLLABUS_DATA.length - 1}
        >
          <ChevronRight />
        </button>
      </div>
    </div>
  );
};

export default SyllabusBook3D;
