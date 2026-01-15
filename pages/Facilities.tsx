
import React from 'react';
import SectionHeader from '../components/SectionHeader';
import { FACILITIES } from '../constants';

const Facilities: React.FC = () => {
  return (
    <div className="pt-24 min-h-screen bg-[#FAF8F5]">
      <div className="bg-[#800000] py-20 text-white mb-20 relative overflow-hidden">
        <div className="absolute inset-0 ikat-overlay opacity-10"></div>
        <div className="max-w-7xl mx-auto px-4 text-center relative z-10">
          <SectionHeader title="Campus Facilities" light centered />
          <p className="text-xl text-[#FFF8E7] max-w-3xl mx-auto">
            Modern infrastructure inspired by excellence.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 pb-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {FACILITIES.map((facility) => (
            <div 
              key={facility.id} 
              className="bg-white rounded-3xl overflow-hidden shadow-ikat border border-[#FFF8E7] hover:-translate-y-2 transition-all duration-300 flex flex-col group"
            >
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={facility.image} 
                  alt={facility.title} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute top-4 left-4 p-3 bg-white/95 backdrop-blur rounded-2xl text-[#B71C1C] shadow-md border border-[#FFF8E7]">
                  {facility.icon}
                </div>
              </div>
              <div className="p-8 flex-grow">
                <h3 className="text-2xl font-black text-[#800000] mb-4">{facility.title}</h3>
                <p className="text-[#333333] opacity-70 leading-relaxed mb-6 font-medium">
                  {facility.description}
                </p>
                <div className="pt-6 border-t border-[#FFF8E7] flex items-center text-[#FF9800] font-black text-xs uppercase tracking-widest cursor-pointer hover:underline">
                  Learn More
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Facilities;
