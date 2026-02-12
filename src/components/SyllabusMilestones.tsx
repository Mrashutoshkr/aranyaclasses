import React, { useEffect, useRef, useState } from 'react';
import { SYLLABUS_DATA } from '../constants';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Calendar, CheckCircle, GraduationCap, ChevronRight, BookOpen } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const SyllabusMilestones: React.FC = () => {
  const [activeClassIdx, setActiveClassIdx] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  const currentClassData = SYLLABUS_DATA[activeClassIdx];

  useEffect(() => {
    // Clear previous triggers
    ScrollTrigger.getAll().forEach(t => t.kill());

    const ctx = gsap.context(() => {
      // Animate entry for the current class view
      gsap.fromTo(".class-header",
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" }
      );

      const milestoneCards = gsap.utils.toArray('.milestone-card');

      milestoneCards.forEach((card: any, i) => {
        gsap.fromTo(card,
          {
            opacity: 0,
            x: i % 2 === 0 ? -40 : 40,
            filter: 'blur(10px)'
          },
          {
            opacity: 1,
            x: 0,
            filter: 'blur(0px)',
            duration: 1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: card,
              start: "top 85%",
              toggleActions: "play none none reverse",
            }
          }
        );
      });

      // Timeline vertical line growth
      gsap.fromTo(".timeline-line-inner",
        { scaleY: 0 },
        {
          scaleY: 1,
          ease: "none",
          scrollTrigger: {
            trigger: ".milestone-container",
            start: "top 70%",
            end: "bottom 30%",
            scrub: 0.5
          }
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, [activeClassIdx]);

  return (
    <div ref={containerRef} className="page-content max-w-5xl mx-auto px-6 pt-40 pb-40 relative z-10">
      <div className="text-center mb-24">
        <h2 className="text-orange-500 font-bold tracking-[0.4em] uppercase text-xs mb-3">Academic Roadmap</h2>
        <h1 className="text-white text-6xl font-cinzel mb-8">Learning Milestones</h1>

        {/* Class Selector Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mt-12 bg-white/5 p-2 rounded-full border border-white/10 w-fit mx-auto">
          {SYLLABUS_DATA.map((data, idx) => (
            <button
              key={idx}
              onClick={() => setActiveClassIdx(idx)}
              className={`px-10 py-4 rounded-full font-bold transition-all flex items-center gap-3 ${activeClassIdx === idx
                ? 'bg-orange-500 text-white shadow-[0_0_25px_rgba(244,157,26,0.4)]'
                : 'text-gray-400 hover:text-white hover:bg-white/5'
                }`}
            >
              <GraduationCap size={20} />
              {data.class}
            </button>
          ))}
        </div>
      </div>

      <div className="class-header glass p-10 rounded-[2.5rem] mb-20 border border-white/10 flex flex-col md:flex-row items-center gap-10">
        <div className="w-24 h-24 rounded-3xl bg-orange-500/20 flex items-center justify-center text-orange-500 shrink-0">
          <BookOpen size={48} />
        </div>
        <div>
          <h3 className="text-white text-3xl font-cinzel mb-3">{currentClassData.title} Overview</h3>
          <p className="text-gray-400 leading-relaxed text-lg italic border-l-2 border-orange-500/50 pl-6">
            "{currentClassData.overview}"
          </p>
        </div>
      </div>

      <div className="relative milestone-container">
        {/* The Timeline Line */}
        <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-1 bg-white/5 rounded-full hidden md:block">
          <div className="timeline-line-inner absolute top-0 left-0 w-full h-full bg-gradient-to-b from-orange-500 via-orange-400 to-orange-600 origin-top scale-y-0 rounded-full shadow-[0_0_15px_rgba(244,157,26,0.5)]" />
        </div>

        <div className="space-y-20 relative">
          {currentClassData.milestones.map((m, idx) => (
            <div
              key={idx}
              className={`flex flex-col md:flex-row items-center gap-8 md:gap-0 ${idx % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
            >
              {/* Content Card */}
              <div className="w-full md:w-[45%] milestone-card">
                <div className="glass p-8 rounded-[2rem] border-t border-white/10 relative group hover:border-orange-500/30 transition-all">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 rounded-xl bg-orange-500/10 flex items-center justify-center text-orange-500">
                      <Calendar size={24} />
                    </div>
                    <div>
                      <h4 className="text-white font-bold text-xl">{m.term}</h4>
                      <p className="text-orange-500/80 text-xs font-bold uppercase tracking-widest">{m.period}</p>
                    </div>
                  </div>
                  <ul className="grid gap-3">
                    {m.details.map((detail, di) => (
                      <li key={di} className="flex items-start gap-3 text-gray-300 group-hover:text-white transition-colors">
                        <CheckCircle size={16} className="text-orange-500 mt-1 shrink-0" />
                        <span className="text-sm">{detail}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Decorative indicator for mobile */}
                  <div className="absolute -left-3 top-1/2 -translate-y-1/2 w-1.5 h-12 bg-orange-500 rounded-full md:hidden" />
                </div>
              </div>

              {/* Central Marker */}
              <div className="relative z-10 w-12 h-12 rounded-full glass border-2 border-orange-500 flex items-center justify-center text-orange-500 shadow-[0_0_20px_rgba(244,157,26,0.2)] bg-black/50 hidden md:flex">
                <div className="w-4 h-4 bg-orange-500 rounded-full animate-pulse shadow-[0_0_10px_rgba(244,157,26,1)]" />
              </div>

              {/* Empty space for layout balance */}
              <div className="hidden md:block w-[45%]" />
            </div>
          ))}
        </div>
      </div>

      <div className="mt-40 text-center">
        <button className="glass px-12 py-5 rounded-full text-white font-bold hover:bg-orange-500 hover:shadow-[0_0_40px_rgba(244,157,26,0.4)] transition-all flex items-center gap-3 mx-auto">
          Download Full Curriculum <ChevronRight size={20} />
        </button>
      </div>
    </div>
  );
};

export default SyllabusMilestones;