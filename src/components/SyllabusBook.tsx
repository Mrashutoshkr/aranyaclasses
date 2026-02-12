
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, MapPin, Calendar, CheckCircle2 } from 'lucide-react';
import { SYLLABUS_DATA } from '../constants';

const SyllabusBook: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const totalPages = SYLLABUS_DATA.length;

  const next = () => setCurrentPage((p) => Math.min(p + 1, totalPages - 1));
  const prev = () => setCurrentPage((p) => Math.max(p - 1, 0));

  const data = SYLLABUS_DATA[currentPage];

  return (
    <div className="flex flex-col items-center py-12 px-4 bg-orange-50 min-h-screen">
      <div className="max-w-4xl w-full text-center mb-10">
        <h2 className="text-3xl md:text-5xl font-cinzel text-[#4B281B] mb-4">Course Syllabus</h2>
        <p className="text-gray-600">Flip through the milestones of our academic journey.</p>
      </div>

      <div className="relative w-full max-w-3xl aspect-[3/4] md:aspect-[4/3] bg-[#4B281B] rounded-lg shadow-2xl overflow-hidden group perspective-1000">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentPage}
            initial={{ rotateY: -90, opacity: 0 }}
            animate={{ rotateY: 0, opacity: 1 }}
            exit={{ rotateY: 90, opacity: 0 }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
            className="w-full h-full bg-white p-6 md:p-12 flex flex-col preserve-3d"
          >
            {/* Page Header */}
            <div className="border-b-2 border-orange-200 pb-4 mb-6 flex justify-between items-end">
              <div>
                <span className="text-sm font-bold text-orange-500 uppercase tracking-widest">{data.class}</span>
                <h3 className="text-2xl md:text-4xl font-cinzel text-[#4B281B]">{data.title}</h3>
              </div>
              <div className="text-right hidden sm:block">
                <p className="text-xs text-gray-400">Page {currentPage + 1} of {totalPages}</p>
              </div>
            </div>

            {/* Page Content */}
            <div className="flex-1 overflow-y-auto pr-2 custom-scrollbar">
              <p className="text-gray-700 italic mb-8 border-l-4 border-orange-400 pl-4">{data.overview}</p>

              <div className="space-y-8">
                {data.milestones.map((milestone, idx) => (
                  <div key={idx} className="relative">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 rounded-full bg-orange-100 flex items-center justify-center text-orange-600 border border-orange-200">
                        <Calendar size={20} />
                      </div>
                      <div>
                        <h4 className="font-bold text-[#4B281B] text-lg leading-none">{milestone.term}</h4>
                        <span className="text-xs text-orange-600 font-medium">{milestone.period}</span>
                      </div>
                    </div>

                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 ml-12">
                      {milestone.details.map((detail, dIdx) => (
                        <li key={dIdx} className="flex items-start gap-2 text-sm text-gray-600">
                          <CheckCircle2 size={16} className="text-green-500 mt-0.5 shrink-0" />
                          <span>{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            {/* Book Corner Decoration */}
            <div className="absolute bottom-4 right-4 opacity-20 pointer-events-none">
              <img src="https://images.unsplash.com/photo-1594608661623-aa0bd3a69d98?auto=format&fit=crop&q=80&w=60&h=60" alt="logo" className="grayscale w-10 h-10" />
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Controls */}
        <button
          onClick={prev}
          disabled={currentPage === 0}
          className={`absolute left-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/80 shadow-lg text-[#4B281B] transition-all hover:bg-orange-500 hover:text-white disabled:opacity-0 ${currentPage === 0 ? 'cursor-default' : 'cursor-pointer'}`}
        >
          <ChevronLeft size={24} />
        </button>
        <button
          onClick={next}
          disabled={currentPage === totalPages - 1}
          className={`absolute right-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/80 shadow-lg text-[#4B281B] transition-all hover:bg-orange-500 hover:text-white disabled:opacity-0 ${currentPage === totalPages - 1 ? 'cursor-default' : 'cursor-pointer'}`}
        >
          <ChevronRight size={24} />
        </button>
      </div>

      <div className="mt-8 flex gap-2">
        {SYLLABUS_DATA.map((_, i) => (
          <div
            key={i}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${i === currentPage ? 'bg-orange-500 w-8' : 'bg-orange-200'}`}
          />
        ))}
      </div>
    </div>
  );
};

export default SyllabusBook;
