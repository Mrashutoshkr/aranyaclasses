import React, { useEffect, useState } from 'react';

const SketchBackground: React.FC = () => {
    const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
    const [scrollY, setScrollY] = useState(0);

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            setMousePos({
                x: (e.clientX / window.innerWidth - 0.5) * 20, // max 10px shift
                y: (e.clientY / window.innerHeight - 0.5) * 20
            });
        };

        const handleTouchMove = (e: TouchEvent) => {
            if (e.touches.length > 0) {
                setMousePos({
                    x: (e.touches[0].clientX / window.innerWidth - 0.5) * 20,
                    y: (e.touches[0].clientY / window.innerHeight - 0.5) * 20
                });
            }
        };

        const handleScroll = () => {
            setScrollY(window.scrollY);
        };

        window.addEventListener('mousemove', handleMouseMove);
        window.addEventListener('touchmove', handleTouchMove);
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
            window.removeEventListener('touchmove', handleTouchMove);
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    // Helper to calculate dynamic style for each sketch
    const getInteractiveStyle = (index: number) => {
        // Different elements react slightly differently to create a sense of depth
        const factor = (index % 3) + 1; // 1, 2, or 3
        const scrollOffset = scrollY * (0.1 * factor);

        return {
            transform: `translate(${mousePos.x * factor}px, calc(${mousePos.y * factor}px - ${scrollOffset}px)) scale(${1 + Math.abs(mousePos.x * 0.005)})`,
            transition: 'transform 0.1s ease-out',
        };
    };

    // A collection of sketch-style SVG elements for Physics, Math, Chemistry
    return (
        <div className="fixed inset-0 z-[1] overflow-hidden pointer-events-none opacity-[0.2]">
            {/* Container with a grid to ensure even, non-messy spacing */}
            <div className="w-full h-full grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-16 p-10 auto-rows-max items-center justify-items-center">

                {/* Sketch 1: Pendulum (Physics) */}
                <div className="w-32 h-32 text-white hover:text-orange-400 hover:scale-125 hover:drop-shadow-[0_0_15px_rgba(244,157,26,0.8)] transition-all duration-300 pointer-events-auto cursor-crosshair" style={getInteractiveStyle(1)}>
                    <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full opacity-80" style={{ filter: 'drop-shadow(0px 0px 2px rgba(255,255,255,0.5))' }}>
                        <line x1="20" y1="10" x2="80" y2="10" strokeDasharray="4 4" />
                        <line x1="50" y1="10" x2="30" y2="70" />
                        <circle cx="30" cy="75" r="8" />
                        <path d="M 50 40 A 30 30 0 0 0 40 35" strokeDasharray="2 2" />
                        <text x="55" y="45" fill="currentColor" stroke="none" fontSize="10" style={{ fontFamily: 'cursive' }}>θ</text>
                        <text x="15" y="85" fill="currentColor" stroke="none" fontSize="8" style={{ fontFamily: 'cursive' }}>mg sin(θ)</text>
                    </svg>
                </div>

                {/* Sketch 2: Integration Formula (Maths) */}
                <div className="w-32 h-32 text-white flex items-center justify-center hover:text-green-400 hover:scale-125 hover:drop-shadow-[0_0_15px_rgba(74,222,128,0.8)] transition-all duration-300 pointer-events-auto cursor-crosshair" style={getInteractiveStyle(2)}>
                    <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full opacity-80" style={{ filter: 'drop-shadow(0px 0px 2px rgba(255,255,255,0.5))' }}>
                        <path d="M 30 80 Q 20 80 25 50 T 40 20" />
                        <text x="10" y="25" fill="currentColor" stroke="none" fontSize="10" style={{ fontFamily: 'cursive' }}>b</text>
                        <text x="25" y="90" fill="currentColor" stroke="none" fontSize="10" style={{ fontFamily: 'cursive' }}>a</text>
                        <text x="45" y="55" fill="currentColor" stroke="none" fontSize="14" style={{ fontFamily: 'cursive' }}>f(x) dx</text>
                        <text x="80" y="55" fill="currentColor" stroke="none" fontSize="14" style={{ fontFamily: 'cursive' }}>= F(b) - F(a)</text>
                    </svg>
                </div>

                {/* Sketch 3: Benzene Ring (Chemistry) */}
                <div className="w-32 h-32 text-white hover:text-blue-400 hover:scale-125 hover:drop-shadow-[0_0_15px_rgba(96,165,250,0.8)] transition-all duration-300 pointer-events-auto cursor-crosshair" style={getInteractiveStyle(3)}>
                    <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full opacity-80" style={{ filter: 'drop-shadow(0px 0px 2px rgba(255,255,255,0.5))' }}>
                        <polygon points="50,20 80,35 80,65 50,80 20,65 20,35" className="hover:rotate-180 transition-transform duration-1000 origin-center" />
                        <circle cx="50" cy="50" r="18" className="hover:scale-150 transition-transform duration-500 origin-center" />
                        <line x1="80" y1="35" x2="95" y2="25" />
                        <text x="90" y="20" fill="currentColor" stroke="none" fontSize="12" style={{ fontFamily: 'cursive' }}>OH</text>
                    </svg>
                </div>

                {/* Sketch 4: Prism Refraction (Physics) */}
                <div className="w-32 h-32 text-white hover:text-purple-400 hover:scale-125 hover:drop-shadow-[0_0_15px_rgba(192,132,252,0.8)] transition-all duration-300 pointer-events-auto cursor-crosshair" style={getInteractiveStyle(4)}>
                    <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full opacity-80" style={{ filter: 'drop-shadow(0px 0px 2px rgba(255,255,255,0.5))' }}>
                        <polygon points="50,20 20,80 80,80" className="hover:fill-white/10 transition-colors duration-300" />
                        <line x1="10" y1="60" x2="35" y2="50" />
                        <line x1="35" y1="50" x2="65" y2="55" className="stroke-white hover:stroke-yellow-400 transition-colors" />
                        <line x1="65" y1="55" x2="90" y2="45" strokeDasharray="2 2" className="hover:stroke-red-400" />
                        <line x1="65" y1="55" x2="95" y2="60" strokeDasharray="2 2" className="hover:stroke-green-400" />
                        <line x1="65" y1="55" x2="85" y2="75" strokeDasharray="2 2" className="hover:stroke-blue-400" />
                    </svg>
                </div>

                {/* Sketch 5: Quadratic Formula (Maths) */}
                <div className="w-40 h-32 text-white flex items-center justify-center hover:text-cyan-400 hover:scale-125 hover:drop-shadow-[0_0_15px_rgba(34,211,238,0.8)] transition-all duration-300 pointer-events-auto cursor-crosshair" style={getInteractiveStyle(5)}>
                    <svg viewBox="0 0 120 100" fill="currentColor" stroke="none" className="w-full h-full opacity-80" style={{ filter: 'drop-shadow(0px 0px 2px rgba(255,255,255,0.5))' }}>
                        <text x="10" y="50" fontSize="14" style={{ fontFamily: 'cursive' }}>x =</text>
                        <text x="35" y="45" fontSize="14" style={{ fontFamily: 'cursive' }} className="hover:fill-yellow-400 transition-colors">-b ± √b² - 4ac</text>
                        <line x1="32" y1="52" x2="110" y2="52" stroke="currentColor" strokeWidth="2" />
                        <text x="65" y="70" fontSize="14" style={{ fontFamily: 'cursive' }} className="hover:fill-pink-400 transition-colors">2a</text>
                    </svg>
                </div>

                {/* Sketch 6: Bohr Model Atom (Physics/Chem) */}
                <div className="w-32 h-32 text-white hover:text-yellow-400 hover:scale-125 hover:drop-shadow-[0_0_15px_rgba(250,204,21,0.8)] transition-all duration-300 pointer-events-auto cursor-crosshair" style={getInteractiveStyle(6)}>
                    <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full opacity-80" style={{ filter: 'drop-shadow(0px 0px 2px rgba(255,255,255,0.5))' }}>
                        <ellipse cx="50" cy="50" rx="40" ry="15" transform="rotate(30 50 50)" className="hover:animate-[spin_2s_linear_infinite] origin-center" />
                        <ellipse cx="50" cy="50" rx="40" ry="15" transform="rotate(90 50 50)" className="hover:animate-[spin_3s_linear_infinite_reverse] origin-center" />
                        <ellipse cx="50" cy="50" rx="40" ry="15" transform="rotate(150 50 50)" className="hover:animate-[spin_4s_linear_infinite] origin-center" />
                        <circle cx="50" cy="50" r="4" fill="currentColor" className="hover:scale-[3] transition-transform" />
                        <circle cx="20" cy="30" r="2" fill="currentColor" />
                        <circle cx="80" cy="70" r="2" fill="currentColor" />
                    </svg>
                </div>

                {/* Sketch 7: Chemical Equation (Chemistry) */}
                <div className="w-40 h-32 text-white flex items-center justify-center -rotate-6 hover:rotate-0 hover:text-red-400 hover:scale-125 hover:drop-shadow-[0_0_15px_rgba(248,113,113,0.8)] transition-all duration-300 pointer-events-auto cursor-crosshair" style={getInteractiveStyle(7)}>
                    <svg viewBox="0 0 120 100" fill="currentColor" stroke="none" className="w-full h-full opacity-80" style={{ filter: 'drop-shadow(0px 0px 2px rgba(255,255,255,0.5))' }}>
                        <text x="10" y="50" fontSize="12" style={{ fontFamily: 'cursive' }}>2H₂ + O₂ → 2H₂O</text>
                        <text x="30" y="65" fontSize="10" style={{ fontFamily: 'cursive' }}>(g)   (g)    (l)</text>
                    </svg>
                </div>

                {/* Sketch 8: Parabola Graph (Maths) */}
                <div className="w-32 h-32 text-white hover:text-indigo-400 hover:scale-125 hover:drop-shadow-[0_0_15px_rgba(129,140,248,0.8)] transition-all duration-300 pointer-events-auto cursor-crosshair" style={getInteractiveStyle(8)}>
                    <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full opacity-80" style={{ filter: 'drop-shadow(0px 0px 2px rgba(255,255,255,0.5))' }}>
                        <line x1="10" y1="80" x2="90" y2="80" />
                        <line x1="50" y1="10" x2="50" y2="90" />
                        <path d="M 20 20 Q 50 120 80 20" className="hover:stroke-[4px] transition-all" />
                        <text x="60" y="30" fill="currentColor" stroke="none" fontSize="10" style={{ fontFamily: 'cursive' }}>y = x²</text>
                    </svg>
                </div>

                {/* Sketch 9: Maxwell's Equation (Physics) */}
                <div className="w-40 h-32 text-white flex items-center justify-center rotate-3 hover:-rotate-3 hover:text-teal-400 hover:scale-125 hover:drop-shadow-[0_0_15px_rgba(45,212,191,0.8)] transition-all duration-300 pointer-events-auto cursor-crosshair" style={getInteractiveStyle(9)}>
                    <svg viewBox="0 0 120 100" fill="currentColor" stroke="none" className="w-full h-full opacity-80" style={{ filter: 'drop-shadow(0px 0px 2px rgba(255,255,255,0.5))' }}>
                        <text x="10" y="50" fontSize="14" style={{ fontFamily: 'cursive' }}>∇ × E = - ∂B / ∂t</text>
                    </svg>
                </div>

                {/* Sketch 10: Geometry/Trigonometry (Maths) */}
                <div className="w-32 h-32 text-white hover:text-emerald-400 hover:scale-125 hover:drop-shadow-[0_0_15px_rgba(52,211,153,0.8)] transition-all duration-300 pointer-events-auto cursor-crosshair" style={getInteractiveStyle(10)}>
                    <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full opacity-80" style={{ filter: 'drop-shadow(0px 0px 2px rgba(255,255,255,0.5))' }}>
                        <polygon points="20,80 80,80 20,20" className="hover:fill-white/10 transition-colors" />
                        <rect x="20" y="70" width="10" height="10" />
                        <path d="M 60 80 A 20 20 0 0 0 65 65" strokeDasharray="2 2" />
                        <text x="70" y="75" fill="currentColor" stroke="none" fontSize="10" style={{ fontFamily: 'cursive' }}>θ</text>
                        <text x="10" y="50" fill="currentColor" stroke="none" fontSize="12" style={{ fontFamily: 'cursive' }}>a</text>
                        <text x="50" y="95" fill="currentColor" stroke="none" fontSize="12" style={{ fontFamily: 'cursive' }}>b</text>
                        <text x="55" y="45" fill="currentColor" stroke="none" fontSize="12" style={{ fontFamily: 'cursive' }}>c</text>
                    </svg>
                </div>

                {/* Sketch 11: Electric Circuit (Physics) */}
                <div className="w-32 h-32 text-white hover:text-amber-400 hover:scale-125 hover:drop-shadow-[0_0_15px_rgba(251,191,36,0.8)] transition-all duration-300 pointer-events-auto cursor-crosshair" style={getInteractiveStyle(11)}>
                    <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full opacity-80" style={{ filter: 'drop-shadow(0px 0px 2px rgba(255,255,255,0.5))' }}>
                        <line x1="20" y1="20" x2="80" y2="20" />
                        <line x1="80" y1="20" x2="80" y2="80" />
                        <line x1="80" y1="80" x2="55" y2="80" />
                        <line x1="45" y1="75" x2="45" y2="85" strokeWidth="4" className="hover:stroke-blue-500 transition-colors" />
                        <line x1="35" y1="70" x2="35" y2="90" strokeWidth="2" className="hover:stroke-blue-500 transition-colors" />
                        <line x1="35" y1="80" x2="20" y2="80" />
                        <line x1="20" y1="80" x2="20" y2="20" />
                        <path d="M 40 20 l 5 -10 l 10 20 l 10 -20 l 10 20 l 5 -10" className="hover:stroke-[4px] hover:stroke-red-500 transition-all" />
                        <text x="40" y="95" fill="currentColor" stroke="none" fontSize="10" style={{ fontFamily: 'cursive' }}>V</text>
                        <text x="50" y="10" fill="currentColor" stroke="none" fontSize="10" style={{ fontFamily: 'cursive' }}>R</text>
                    </svg>
                </div>

                {/* Sketch 12: E=mc^2 (Physics) */}
                <div className="w-40 h-32 text-white flex items-center justify-center -rotate-3 hover:rotate-12 hover:text-orange-500 hover:scale-150 hover:drop-shadow-[0_0_20px_rgba(249,115,22,0.9)] transition-all duration-300 pointer-events-auto cursor-crosshair" style={getInteractiveStyle(12)}>
                    <svg viewBox="0 0 120 100" fill="currentColor" stroke="none" className="w-full h-full opacity-80" style={{ filter: 'drop-shadow(0px 0px 2px rgba(255,255,255,0.5))' }}>
                        <text x="20" y="60" fontSize="24" style={{ fontFamily: 'cursive', letterSpacing: '2px' }}>E=mc²</text>
                    </svg>
                </div>
            </div>
        </div>
    );
};

export default SketchBackground;
