
import React from 'react';
import SectionHeader from '../components/SectionHeader';
import { Target, Compass, Sparkles } from 'lucide-react';

const Vision: React.FC = () => {
  return (
    <div className="pt-24 min-h-screen">
      <div className="bg-blue-900 py-20 text-white mb-20">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <SectionHeader title="Vision & Mission" light centered />
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Guiding our every step towards a brighter tomorrow for every child.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
          <div className="bg-white p-12 rounded-[40px] shadow-xl border border-blue-50 relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-12 text-blue-50 opacity-10 transform translate-x-1/4 -translate-y-1/4 group-hover:scale-125 transition-transform duration-700">
              <Target size={240} />
            </div>
            <div className="relative z-10">
              <div className="w-20 h-20 bg-blue-100 rounded-3xl flex items-center justify-center text-blue-600 mb-8">
                <Target size={40} />
              </div>
              <h2 className="text-3xl font-bold text-blue-900 mb-6">Our Vision</h2>
              <p className="text-xl text-gray-600 leading-relaxed italic">
                "To be a global center of learning that produces intellectually sharp, emotionally balanced, and culturally rooted citizens who contribute positively to humanity."
              </p>
            </div>
          </div>

          <div className="bg-white p-12 rounded-[40px] shadow-xl border border-orange-50 relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-12 text-orange-50 opacity-10 transform translate-x-1/4 -translate-y-1/4 group-hover:scale-125 transition-transform duration-700">
              <Compass size={240} />
            </div>
            <div className="relative z-10">
              <div className="w-20 h-20 bg-orange-100 rounded-3xl flex items-center justify-center text-orange-600 mb-8">
                <Compass size={40} />
              </div>
              <h2 className="text-3xl font-bold text-blue-900 mb-6">Our Mission</h2>
              <ul className="space-y-4 text-gray-600 text-lg">
                <li className="flex items-start">
                  <span className="w-2 h-2 rounded-full bg-orange-600 mt-2 mr-3 flex-shrink-0"></span>
                  To provide a technology-integrated curriculum that meets future challenges.
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 rounded-full bg-orange-600 mt-2 mr-3 flex-shrink-0"></span>
                  To cultivate a sense of discipline and integrity in every student.
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 rounded-full bg-orange-600 mt-2 mr-3 flex-shrink-0"></span>
                  To nurture individual talents through sports, arts, and innovation.
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="bg-telangana-pattern p-12 md:p-20 rounded-[40px] text-center">
          <SectionHeader title="Our Core Philosophy" subtitle="Inspired by the ancient Indian 'Gurukul' values and empowered by modern technology." />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { icon: <Sparkles className="mx-auto mb-4 text-blue-600" size={48} />, title: "Discipline", desc: "Instilling the habit of self-regulation and punctuality." },
              { icon: <Sparkles className="mx-auto mb-4 text-orange-600" size={48} />, title: "Dedication", desc: "Committing 100% effort to academic and personal pursuits." },
              { icon: <Sparkles className="mx-auto mb-4 text-green-600" size={48} />, title: "Dynamism", desc: "Adapting quickly to the changing technological landscape." }
            ].map((phil, idx) => (
              <div key={idx} className="bg-white p-8 rounded-3xl shadow-md">
                {phil.icon}
                <h4 className="text-xl font-bold text-blue-900 mb-3">{phil.title}</h4>
                <p className="text-gray-600">{phil.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Vision;
