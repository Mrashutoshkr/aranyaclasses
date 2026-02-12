
import React from 'react';
import * as Icons from 'lucide-react';
import { SMART_FEATURES } from '../constants';

const Features: React.FC = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-16">
        <h2 className="text-orange-500 font-bold tracking-widest uppercase mb-2">Smart Features</h2>
        <h3 className="text-3xl md:text-5xl font-cinzel text-[#4B281B]">Excellence Beyond Textbooks</h3>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SMART_FEATURES.map((feature) => {
            const Icon = (Icons as any)[feature.icon];
            return (
              <div
                key={feature.id}
                className="p-8 rounded-2xl bg-gray-50 border border-gray-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group"
              >
                <div className="w-14 h-14 bg-white rounded-xl shadow-sm flex items-center justify-center text-orange-500 mb-6 group-hover:bg-orange-500 group-hover:text-white transition-colors">
                  <Icon size={28} />
                </div>
                <h4 className="text-xl font-bold text-[#4B281B] mb-3">{feature.title}</h4>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Features;
