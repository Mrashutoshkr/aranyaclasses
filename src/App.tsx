
import React, { useState, useEffect } from 'react';
import Scene3D from './components/Scene3D';
import Navigation from './components/Navigation';
import SyllabusMilestones from './components/SyllabusMilestones';
import { Page } from './types';
import { SMART_FEATURES } from './constants';
import * as Icons from 'lucide-react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { AranyaLogo } from './components/Logo';
import studentImg from './Aranya_classes_student.jpg';

gsap.registerPlugin(ScrollTrigger);

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<Page>('home');

  useEffect(() => {
    // Page transition animation
    gsap.fromTo(".page-content",
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 1, ease: "power3.out" }
    );

    // Scroll-driven animation for features if on home page
    if (currentPage === 'home') {
      const trigger = ScrollTrigger.create({
        trigger: ".feature-card-container",
        start: "top 85%",
        onEnter: () => {
          gsap.fromTo(".feature-card",
            { opacity: 0, y: 50 },
            {
              opacity: 1,
              y: 0,
              stagger: 0.15,
              duration: 1,
              ease: "power4.out",
              overwrite: 'auto'
            }
          );
        },
        once: true
      });

      return () => {
        trigger.kill();
      };
    }
  }, [currentPage]);

  const renderContent = () => {
    switch (currentPage) {
      case 'home':
        return (
          <div className="page-content max-w-7xl mx-auto px-6 pt-40 pb-20 grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-white">
              <div className="flex items-center gap-6 mb-8">
                <div className="p-1 bg-white rounded-full shadow-[0_0_20px_rgba(255,255,255,0.2)]">
                  <AranyaLogo className="w-16 h-16 md:w-20 md:h-20" />
                </div>
                <div>
                  <h2 className="text-orange-500 font-bold tracking-[0.4em] uppercase text-xs">Aranya Classes Ara</h2>
                  <p className="text-gray-400 text-[10px] tracking-widest mt-1">PERSONALIZED TUITION FOR EVERY SUBJECT</p>
                </div>
              </div>
              <h1 className="text-6xl md:text-8xl font-cinzel leading-tight mb-8">
                Learn <br />
                <span className="text-orange-500">Better!.</span>
              </h1>
              <p className="text-lg text-gray-300 mb-10 max-w-md leading-relaxed">
                Empowering the youth of Bihar with global educational standards and local cultural integrity. Join the most trusted tuition provider in Ara.
              </p>
              <div className="flex gap-4">
                <button
                  onClick={() => setCurrentPage('courses')}
                  className="bg-orange-500 text-white px-10 py-4 rounded-full font-bold hover:shadow-[0_0_30px_rgba(244,157,26,0.5)] transition-all flex items-center gap-3 group"
                >
                  Join Aranya Mission <Icons.ArrowRight size={20} className="group-hover:translate-x-2 transition-transform" />
                </button>
              </div>
            </div>

            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-orange-500 to-brown-900 rounded-3xl blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>
              <div className="relative overflow-hidden rounded-3xl border border-white/10 glass">
                <img
                  src={studentImg}
                  className="w-full object-cover h-[550px] transform group-hover:scale-105 transition-transform duration-1000"
                  alt="Academic Excellence"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#000000]/60 to-transparent"></div>
                <div className="absolute bottom-10 left-10 right-10 flex justify-between items-end">
                  <div>
                    <p className="text-white font-bold text-3xl font-cinzel mb-1 tracking-widest">BIHARI ROOTS</p>
                    <p className="text-orange-500 text-xs uppercase tracking-widest font-bold">Global Standards</p>
                  </div>
                  <div className="glass px-4 py-2 rounded-xl border border-white/20">
                    <p className="text-white font-bold text-xs">EST. 2016</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-2 mt-32">
              <div className="text-center mb-16">
                <h2 className="text-orange-500 font-bold tracking-[0.3em] uppercase text-xs mb-3">Smart Features</h2>
                <h3 className="text-white text-5xl font-cinzel">Excellence Guaranteed</h3>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 feature-card-container">
                {SMART_FEATURES.map((f) => {
                  const Icon = (Icons as any)[f.icon];
                  return (
                    <div key={f.id} className="feature-card glass p-10 rounded-[2.5rem] border-t border-white/10 hover:border-orange-500/50 transition-all group opacity-0 cursor-default">
                      <div className="w-14 h-14 rounded-2xl bg-orange-500/10 flex items-center justify-center text-orange-500 mb-6 group-hover:bg-orange-500 group-hover:text-white transition-all shadow-inner"><Icon size={28} /></div>
                      <h3 className="text-white font-bold text-2xl mb-3 font-cinzel">{f.title}</h3>
                      <p className="text-gray-400 text-sm leading-relaxed">{f.description}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        );

      case 'syllabus':
        return <SyllabusMilestones />;

      case 'about':
        return (
          <div className="page-content max-w-5xl mx-auto px-6 pt-40 pb-20">
            <div className="glass p-12 rounded-[3rem] border border-white/10 shadow-2xl">
              <div className="flex flex-col md:flex-row items-center gap-10 mb-12 border-b border-orange-500/20 pb-10">
                <div className="p-2 bg-white rounded-full shadow-2xl transform hover:rotate-6 transition-transform">
                  <AranyaLogo className="w-24 h-24 md:w-32 md:h-32 lg:w-40 lg:h-40" />
                </div>
                <div className="text-center md:text-left">
                  <h2 className="text-5xl font-cinzel text-white mb-2">The Aranya Legacy</h2>
                  <p className="text-orange-500 font-bold tracking-widest text-sm uppercase">Nurturing Minds in the Heart of Ara</p>
                </div>
              </div>
              <div className="grid md:grid-cols-2 gap-12 text-gray-300 leading-relaxed text-lg">
                <p>Aranya Classes is more than just a tuition center; it is a holistic learning ecosystem. Founded on the principle that knowledge should be as vast as a forest (Aranya), we offer personalized attention to students from Class 3 to 12.</p>
                <p>We take pride in our "Bihar Local" curriculum integration, where we teach history, geography, and civic responsibility through the lens of our rich local heritage, combined with world-class science and math preparation.</p>
              </div>
              <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8">
                {[
                  { label: 'Experience', val: '9+ Years' },
                  { label: 'Success', val: '1500+ Students' },
                  { label: 'Ratio', val: '1:12 Elite' },
                  { label: 'Support', val: '24/7 Digital' }
                ].map((stat, i) => (
                  <div key={i} className="text-center group p-6 glass rounded-2xl border border-white/5 hover:border-orange-500/30 transition-all">
                    <div className="text-orange-500 font-bold text-3xl mb-1 group-hover:scale-110 transition-transform font-cinzel">{stat.val}</div>
                    <div className="text-gray-500 text-[10px] uppercase tracking-[0.2em] font-bold">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        );

      case 'courses':
        return (
          <div className="page-content max-w-7xl mx-auto px-6 pt-40 pb-20">
            <div className="text-center mb-16">
              <h1 className="text-6xl font-cinzel text-white mb-4">Learning Paths</h1>
              <p className="text-orange-500 font-bold tracking-widest uppercase text-sm">Find the perfect class for your growth</p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                { title: 'Primary Wings', range: 'Class 3-5', color: 'border-green-500', icon: 'Sun' },
                { title: 'Middle School', range: 'Class 6-8', color: 'border-orange-500', icon: 'Mountain' },
                { title: 'Secondary Elite', range: 'Class 9-12', color: 'border-blue-500', icon: 'Compass' }
              ].map((c, i) => {
                const Icon = (Icons as any)[c.icon];
                return (
                  <div key={i} className={`glass p-12 rounded-[3rem] border-l-[12px] ${c.color} hover:scale-105 transition-all duration-500 cursor-pointer group relative overflow-hidden`}>
                    <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity">
                      <Icon size={120} className="text-white" />
                    </div>
                    <h3 className="text-white text-4xl font-cinzel mb-2 group-hover:text-orange-400 transition-colors">{c.title}</h3>
                    <p className="text-orange-500 font-bold mb-8 text-lg">{c.range}</p>
                    <ul className="space-y-5 text-gray-400 mb-12">
                      <li className="flex items-center gap-3"><Icons.CheckCircle size={20} className="text-orange-500" /> NCERT Integrated</li>
                      <li className="flex items-center gap-3"><Icons.CheckCircle size={20} className="text-orange-500" /> Weekly Assessments</li>
                      <li className="flex items-center gap-3"><Icons.CheckCircle size={20} className="text-orange-500" /> Olympiad Coaching</li>
                      <li className="flex items-center gap-3"><Icons.CheckCircle size={20} className="text-orange-500" /> Bilingual Support</li>
                    </ul>
                    <button className="w-full py-5 rounded-full bg-white/5 text-white font-bold hover:bg-orange-500 hover:shadow-2xl transition-all border border-white/10 text-lg">Inquire Enrollment</button>
                  </div>
                );
              })}
            </div>
          </div>
        );

      case 'contact':
        return (
          <div className="page-content max-w-7xl mx-auto px-6 pt-40 pb-20">
            <div className="grid lg:grid-cols-2 gap-16">
              <div className="glass p-12 rounded-[3rem] shadow-2xl">
                <h2 className="text-5xl font-cinzel text-white mb-10">Connect With Us</h2>
                <div className="space-y-10">
                  <div className="flex items-center gap-8 group">
                    <div className="w-16 h-16 rounded-2xl bg-orange-500/20 flex items-center justify-center text-orange-500 group-hover:bg-orange-500 group-hover:text-white transition-all shadow-lg"><Icons.MapPin size={30} /></div>
                    <div>
                      <p className="text-gray-500 text-xs uppercase tracking-widest font-bold mb-1">Our Location</p>
                      <p className="text-white text-xl">Nala Road, Ara, Bihar 802301</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-8 group">
                    <div className="w-16 h-16 rounded-2xl bg-orange-500/20 flex items-center justify-center text-orange-500 group-hover:bg-orange-500 group-hover:text-white transition-all shadow-lg"><Icons.Phone size={30} /></div>
                    <div>
                      <p className="text-gray-500 text-xs uppercase tracking-widest font-bold mb-1">Call Us</p>
                      <p className="text-white text-xl">+91 91223 34455</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-8 group">
                    <div className="w-16 h-16 rounded-2xl bg-orange-500/20 flex items-center justify-center text-orange-500 group-hover:bg-orange-500 group-hover:text-white transition-all shadow-lg"><Icons.Mail size={30} /></div>
                    <div>
                      <p className="text-gray-500 text-xs uppercase tracking-widest font-bold mb-1">Email Us</p>
                      <p className="text-white text-xl">hello@aranyaclasses.com</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="glass p-12 rounded-[3rem] shadow-2xl border border-white/5">
                <form className="space-y-8">
                  <div className="space-y-2">
                    <label className="text-gray-500 text-xs uppercase tracking-widest font-bold ml-1">Full Name</label>
                    <input className="w-full bg-white/5 border border-white/10 rounded-2xl p-5 text-white focus:ring-2 focus:ring-orange-500 outline-none transition-all placeholder:text-gray-600" placeholder="John Doe" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-gray-500 text-xs uppercase tracking-widest font-bold ml-1">Class / Grade</label>
                    <input className="w-full bg-white/5 border border-white/10 rounded-2xl p-5 text-white focus:ring-2 focus:ring-orange-500 outline-none transition-all placeholder:text-gray-600" placeholder="Class 10th" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-gray-500 text-xs uppercase tracking-widest font-bold ml-1">Your Query</label>
                    <textarea className="w-full bg-white/5 border border-white/10 rounded-2xl p-5 text-white focus:ring-2 focus:ring-orange-500 outline-none h-32 transition-all placeholder:text-gray-600" placeholder="Tell us how we can help..."></textarea>
                  </div>
                  <button className="w-full py-6 rounded-2xl bg-orange-500 text-white font-bold text-2xl hover:shadow-[0_0_50px_rgba(244,157,26,0.6)] transition-all transform hover:-translate-y-1">Send Message</button>
                </form>
              </div>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="relative min-h-screen">
      <Scene3D currentPage={currentPage} />
      <Navigation currentPage={currentPage} onPageChange={setCurrentPage} />
      <div className="relative z-10">
        {renderContent()}
      </div>

      {/* Footer Branding */}
      <footer className="relative z-10 py-20 px-6 border-t border-white/5 bg-black/60 backdrop-blur-2xl">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-10 mb-12">
            <div className="flex items-center gap-6">
              <div className="p-1 bg-white rounded-full">
                <AranyaLogo className="w-12 h-12 md:w-16 md:h-16" />
              </div>
              <div>
                <h3 className="font-cinzel text-white text-2xl tracking-[0.2em] uppercase">ARANYA CLASSES</h3>
                <p className="text-orange-500 text-[10px] tracking-[0.4em] font-bold">EDUCATION REDEFINED</p>
              </div>
            </div>
            <div className="flex gap-10 text-gray-500 text-sm font-bold tracking-widest">
              <a href="#" className="hover:text-orange-500 transition-colors uppercase">Privacy</a>
              <a href="#" className="hover:text-orange-500 transition-colors uppercase">Terms</a>
              <a href="#" className="hover:text-orange-500 transition-colors uppercase">Career</a>
            </div>
          </div>
          <div className="flex flex-col md:flex-row justify-between items-center pt-10 border-t border-white/10 gap-4">
            <p className="text-gray-600 text-xs">
              © 2025 Aranya Classes. Built for the future of Bihar.
            </p>
            <div className="flex gap-4">
              <div className="w-8 h-8 rounded-full glass flex items-center justify-center text-gray-400 hover:text-orange-500 cursor-pointer transition-colors"><Icons.Facebook size={14} /></div>
              <div className="w-8 h-8 rounded-full glass flex items-center justify-center text-gray-400 hover:text-orange-500 cursor-pointer transition-colors"><Icons.Instagram size={14} /></div>
              <div className="w-8 h-8 rounded-full glass flex items-center justify-center text-gray-400 hover:text-orange-500 cursor-pointer transition-colors"><Icons.Twitter size={14} /></div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
