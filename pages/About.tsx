
import React, { useState, useEffect } from 'react';
import { Eye, Zap, CheckCircle2, Quote, GraduationCap, Microscope, ClipboardList, Flag, Star, Trophy, Award } from 'lucide-react';
import { FOUNDER_NAME } from '../constants';
import { DataService } from '../services/DataService';

const About: React.FC = () => {
  const [imgError, setImgError] = useState(false);
  const [founderImg, setFounderImg] = useState<string>(DataService.getFounderImage());

  useEffect(() => {
    // Keep founder image in sync if changed in admin
    const syncInterval = setInterval(() => {
      setFounderImg(DataService.getFounderImage());
    }, 2000);
    return () => clearInterval(syncInterval);
  }, []);

  const milestones = [
    { year: '2001', title: 'Humble Beginnings', desc: 'Founded with a vision to bridge the gap in state board education.', icon: <Flag size={20} /> },
    { year: '2008', title: 'Academic Excellence', desc: 'Achieved 100% pass percentage in SSC for the first time.', icon: <Star size={20} /> },
    { year: '2015', title: 'Techno Integration', desc: 'Introduced smart classrooms and digital science modules.', icon: <Zap size={20} /> },
    { year: '2021', title: 'Two-Decade Milestone', desc: 'Celebrated 20 years of nurturing future leaders.', icon: <Trophy size={20} /> },
    { year: '2025', title: 'Expanding Horizons', desc: 'Implementing AI-driven learning tools and modern infra upgrades.', icon: <Award size={20} /> },
  ];

  return (
    <div className="pt-24 min-h-screen bg-[#FAF8F5]">
      {/* 1. Page Header */}
      <section className="bg-[#800000] py-24 text-white relative overflow-hidden">
        <div className="absolute inset-0 ikat-overlay opacity-10"></div>
        <div className="max-w-7xl mx-auto px-4 text-center relative z-10">
          <h1 className="text-5xl md:text-7xl font-black mb-6 tracking-tight text-[#FFF8E7]">About Our Institution</h1>
          <p className="text-xl md:text-2xl text-[#FFF8E7] max-w-3xl mx-auto font-medium opacity-90">
            Building Strong Foundations for Brighter Futures since 2001.
          </p>
        </div>
      </section>

      {/* 2. Founder Message Section */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="bg-[#FAF8F5] rounded-[3rem] p-10 md:p-20 shadow-ikat border border-[#FFF8E7] relative">
            <Quote className="absolute top-10 right-10 w-24 h-24 text-[#800000] opacity-5" />
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              <div className="lg:col-span-4">
                <div className="relative">
                  <div className="w-full aspect-[4/5] bg-slate-100 rounded-3xl overflow-hidden shadow-xl border-4 border-white flex items-center justify-center">
                    {!imgError ? (
                      <img 
                        src={founderImg} 
                        alt="Founder" 
                        className="w-full h-full object-cover transition-all duration-700"
                        onError={() => setImgError(true)}
                      />
                    ) : (
                      <div className="w-full h-full bg-[#800000] flex flex-col items-center justify-center text-white text-center p-8">
                        <span className="text-5xl font-black mb-2">PNR</span>
                        <p className="text-[10px] uppercase font-bold opacity-50">{FOUNDER_NAME}</p>
                      </div>
                    )}
                  </div>
                  <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-[#FFC107] rounded-full -z-10 opacity-20"></div>
                </div>
              </div>
              <div className="lg:col-span-8">
                <span className="inline-block px-4 py-1 bg-[#FFF8E7] text-[#B71C1C] rounded-full text-[10px] font-black mb-6 uppercase tracking-widest border border-[#B71C1C]/10">
                  Leadership Message
                </span>
                <h3 className="text-3xl font-black text-[#800000] mb-8">Message from our Founder</h3>
                <p className="text-2xl font-serif italic text-[#333333] leading-relaxed mb-8 opacity-90">
                  "Education is the most powerful weapon which you can use to change the world. At PNREDDY, we don't just teach subjects; we cultivate character. Our 'Strong Foundations' are built on discipline, conceptual clarity, and traditional values, ensuring our students achieve 'Brighter Futures' in an ever-competitive world."
                </p>
                <div>
                  <h4 className="text-xl font-black text-[#800000]">{FOUNDER_NAME}</h4>
                  <p className="text-[#FF9800] font-bold uppercase text-sm tracking-widest">Founder & Chairman</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. School Journey / Evolution Roadmap */}
      <section className="py-24 max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 bg-[#FFF8E7] text-[#B71C1C] rounded-full text-[10px] font-black mb-4 uppercase tracking-widest border border-[#B71C1C]/10">
            Our Evolution
          </span>
          <h2 className="text-4xl md:text-6xl font-black text-[#800000] mb-4">A Journey of Academic Rigor</h2>
          <p className="text-lg font-medium opacity-60 max-w-2xl mx-auto">From a single classroom to a recognized Techno School, here is how we grew over two decades.</p>
        </div>

        <div className="relative">
          {/* Horizontal Line for Desktop */}
          <div className="hidden lg:block absolute top-1/2 left-0 w-full h-1 bg-[#FFC107]/20 -translate-y-1/2"></div>
          
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
            {milestones.map((item, idx) => (
              <div key={idx} className="relative group">
                {/* Connector for Mobile */}
                <div className="lg:hidden absolute left-8 top-12 bottom-0 w-1 bg-[#FFC107]/20 -z-10"></div>
                
                <div className="bg-white p-8 rounded-[2rem] shadow-ikat border border-[#FFF8E7] group-hover:-translate-y-2 transition-transform duration-300 relative z-10">
                  <div className="w-16 h-16 bg-[#FFF8E7] rounded-2xl flex items-center justify-center text-[#B71C1C] mb-6 shadow-sm group-hover:bg-[#FFC107] group-hover:text-[#800000] transition-colors">
                    {item.icon}
                  </div>
                  <div className="text-3xl font-black text-[#800000] mb-2">{item.year}</div>
                  <h4 className="text-lg font-black text-[#333333] mb-3">{item.title}</h4>
                  <p className="text-sm font-medium text-slate-500 leading-relaxed">{item.desc}</p>
                </div>

                {/* Vertical Indicator Line for Desktop */}
                <div className="hidden lg:block absolute top-1/2 left-1/2 -translate-x-1/2 w-4 h-4 bg-[#FFC107] rounded-full border-4 border-white shadow-md z-20"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Vision, Mission & Values */}
      <section className="py-24 max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-[#800000] p-12 rounded-[2.5rem] text-white shadow-xl flex flex-col items-center text-center transform hover:-translate-y-2 transition-transform duration-300">
            <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center mb-8 border border-white/20">
              <Eye size={32} className="text-[#FFC107]" />
            </div>
            <h3 className="text-3xl font-black mb-6">Our Vision</h3>
            <p className="font-medium opacity-80 leading-relaxed">
              To be a premier institution that creates innovative thinkers and compassionate leaders through a unique blend of technological excellence and ethical values.
            </p>
          </div>

          <div className="bg-[#FFC107] p-12 rounded-[2.5rem] text-[#800000] shadow-xl flex flex-col items-center text-center transform hover:-translate-y-2 transition-transform duration-300">
            <div className="w-16 h-16 bg-[#800000]/10 rounded-2xl flex items-center justify-center mb-8 border border-[#800000]/10">
              <Zap size={32} className="text-[#800000]" />
            </div>
            <h3 className="text-3xl font-black mb-6">Our Mission</h3>
            <p className="font-bold leading-relaxed">
              To provide a stimulating learning environment that inspires a love for learning, encourages critical thinking, and ensures excellence in the SSC curriculum.
            </p>
          </div>

          <div className="bg-white p-12 rounded-[2.5rem] text-[#333333] shadow-ikat border border-[#FFF8E7] flex flex-col items-center transform hover:-translate-y-2 transition-transform duration-300">
            <div className="w-16 h-16 bg-[#FFF8E7] rounded-2xl flex items-center justify-center mb-8 border border-[#FFC107]/20">
              <CheckCircle2 size={32} className="text-[#800000]" />
            </div>
            <h3 className="text-3xl font-black text-[#800000] mb-6">Core Values</h3>
            <ul className="space-y-4 font-bold text-left w-full">
              {['Integrity & Respect', 'Scientific Temper', 'Holistic Discipline', 'Social Responsibility'].map((v, i) => (
                <li key={i} className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-[#FFC107]"></div>
                  {v}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* 5. Academic Philosophy */}
      <section className="py-24 bg-[#800000] relative overflow-hidden">
        <div className="absolute inset-0 ikat-overlay opacity-5 pointer-events-none"></div>
        <div className="max-w-7xl mx-auto px-4 relative z-10 text-center text-white">
          <h2 className="text-4xl md:text-6xl font-black mb-8 tracking-tight">SSC-Focused Academic Philosophy</h2>
          <p className="max-w-3xl mx-auto text-lg md:text-xl font-medium opacity-80 mb-16 leading-relaxed">
            Our academic framework is meticulously aligned with the Secondary School Certificate (SSC) standards, enhanced by our proprietary "Techno-Integration" model. We believe in strengthening the core concepts before advancing to complex applications.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              { title: "Concept Mapping", icon: <GraduationCap />, desc: "Breaking down the SSC syllabus into digestible concept modules for better retention." },
              { title: "Techno-Enabled Labs", icon: <Microscope />, desc: "Bridging the gap between textbook theory and practical scientific inquiry." },
              { title: "Continuous Evaluation", icon: <ClipboardList />, desc: "Regular feedback loops to ensure no child is left behind in the academic race." }
            ].map((p, i) => (
              <div key={i} className="bg-white/5 backdrop-blur-sm border border-white/10 p-10 rounded-[2rem] text-left hover:bg-white/10 transition-colors">
                <div className="mb-6 text-[#FFC107]">{React.cloneElement(p.icon as React.ReactElement<any>, { size: 32 })}</div>
                <h4 className="text-xl font-black mb-4">{p.title}</h4>
                <p className="text-sm font-medium opacity-70 leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
