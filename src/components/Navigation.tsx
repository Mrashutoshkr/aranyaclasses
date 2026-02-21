
import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Page } from '../types';
import { AranyaLogo } from './Logo';

interface NavigationProps {
  currentPage: Page;
  onPageChange: (page: Page) => void;
}

const Navigation: React.FC<NavigationProps> = ({ currentPage, onPageChange }) => {
  const [isOpen, setIsOpen] = useState(false);

  const items: { label: string; value: Page }[] = [
    { label: 'Home', value: 'home' },
    { label: 'About', value: 'about' },
    { label: 'Courses', value: 'courses' },
    { label: 'Syllabus', value: 'syllabus' },
    { label: 'Contact', value: 'contact' },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 p-6">
      <div className="max-w-7xl mx-auto glass rounded-full px-8 py-3 flex justify-between items-center border border-white/10">
        <div
          className="flex items-center gap-4 cursor-pointer group"
          onClick={() => onPageChange('home')}
        >
          <AranyaLogo className="w-10 h-10 md:w-12 md:h-12 group-hover:rotate-[360deg] transition-transform duration-1000 ease-in-out" />
          <div className="hidden sm:block">
            <h1 className="text-white font-cinzel font-bold leading-none tracking-widest text-lg">ARANYA</h1>
            <p className="text-[10px] text-orange-500 uppercase tracking-[0.3em]">Classes Ara</p>
          </div>
        </div>

        {/* Desktop */}
        <div className="hidden md:flex gap-8">
          {items.map(item => (
            <button
              key={item.value}
              onClick={() => onPageChange(item.value)}
              className={`text-xs font-bold uppercase tracking-[0.2em] transition-all relative py-2 ${currentPage === item.value ? 'text-orange-500' : 'text-gray-400 hover:text-white'
                }`}
            >
              {item.label}
              {currentPage === item.value && (
                <div className="absolute bottom-0 left-0 w-full h-0.5 bg-orange-500 rounded-full" />
              )}
            </button>
          ))}
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden text-white" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="absolute top-24 left-6 right-6 glass rounded-3xl p-8 md:hidden border border-white/10 shadow-2xl">
          <div className="flex flex-col gap-6">
            {items.map(item => (
              <button
                key={item.value}
                onClick={() => {
                  onPageChange(item.value);
                  setIsOpen(false);
                }}
                className={`text-xl font-cinzel tracking-widest text-left flex items-center justify-between ${currentPage === item.value ? 'text-orange-500' : 'text-white'
                  }`}
              >
                {item.label}
                {currentPage === item.value && <div className="w-2 h-2 rounded-full bg-orange-500" />}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
