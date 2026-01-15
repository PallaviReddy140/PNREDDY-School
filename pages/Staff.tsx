
import React, { useState, useEffect } from 'react';
import SectionHeader from '../components/SectionHeader';
import { Users, BookOpen, Award, GraduationCap, Heart, Star, Target, Shield, Zap, Briefcase, ChevronRight } from 'lucide-react';
import { LEADERSHIP_TEAM } from '../constants';
import { DataService } from '../services/DataService';

const LeadershipCard = ({ lead }: { lead: any }) => {
  const [imgError, setImgError] = useState(false);
  const [photo, setPhoto] = useState<string>(DataService.getStaffPhoto(lead.id, lead.defaultImg));
  
  // Periodically check for updates from dashboard
  useEffect(() => {
    const i = setInterval(() => {
      setPhoto(DataService.getStaffPhoto(lead.id, lead.defaultImg));
    }, 2000);
    return () => clearInterval(i);
  }, [lead.id, lead.defaultImg]);

  return (
    <div className="bg-white rounded-[3rem] p-10 shadow-ikat border border-[#FFF8E7] flex flex-col md:flex-row gap-10 items-center group hover:shadow-2xl transition-all duration-500 relative overflow-hidden">
      <div className="absolute top-0 right-0 p-8 text-[#800000] opacity-[0.03] group-hover:opacity-[0.07] transition-opacity">
        {React.cloneElement(lead.icon, { size: 160 })}
      </div>
      
      <div className="w-56 h-64 rounded-[2.5rem] overflow-hidden flex-shrink-0 shadow-lg border-4 border-white bg-slate-100 flex items-center justify-center relative z-10">
        {!imgError ? (
          <img 
            src={photo} 
            alt={lead.name} 
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
            onError={() => setImgError(true)}
          />
        ) : (
          <div className="w-full h-full bg-[#800000] flex items-center justify-center text-white text-4xl font-black">
            {lead.name.split(' ').map((n: string) => n[0]).join('')}
          </div>
        )}
      </div>

      <div className="relative z-10 flex-grow">
        <div className="flex items-center gap-3 mb-3">
          <div className="w-10 h-10 bg-[#FFF8E7] rounded-xl flex items-center justify-center text-[#B71C1C]">
            {lead.icon}
          </div>
          <div>
            <h3 className="text-3xl font-black text-[#800000]">{lead.name}</h3>
            <p className="text-[#FF9800] font-black uppercase text-[10px] tracking-widest">{lead.role}</p>
          </div>
        </div>
        
        <div className="inline-block px-3 py-1 bg-slate-100 text-[#800000] rounded-lg text-[9px] font-black uppercase tracking-widest mb-6">
          Focus: {lead.focus}
        </div>
        
        <p className="text-base font-medium text-[#333333] opacity-70 leading-relaxed max-w-xl italic">
          "{lead.bio}"
        </p>
      </div>
    </div>
  );
};

const Staff: React.FC = () => {
  const departments = [
    {
      name: "High School Faculty",
      desc: "Subject experts focused on SSC board excellence and competitive foundations.",
      staff: [
        { name: "Mr. K. Ravi Teja", role: "Mathematics HOD", exp: "15+ Years" },
        { name: "Ms. S. Lakshmi", role: "Physical Science", exp: "12+ Years" },
        { name: "Mr. V. Suresh", role: "Social Studies", exp: "10+ Years" },
        { name: "Ms. T. Anitha", role: "Biological Science", exp: "8+ Years" }
      ]
    },
    {
      name: "Primary Wing",
      desc: "Nurturing mentors specializing in fundamental conceptual clarity.",
      staff: [
        { name: "Ms. G. Kavitha", role: "English Language", exp: "9+ Years" },
        { name: "Mr. M. Srinivas", role: "Mathematics", exp: "7+ Years" },
        { name: "Ms. P. Aruna", role: "Environmental Science", exp: "11+ Years" },
        { name: "Ms. B. Jyothi", role: "Telugu Specialist", exp: "14+ Years" }
      ]
    }
  ];

  return (
    <div className="pt-24 min-h-screen bg-[#FAF8F5]">
      {/* Hero Header */}
      <section className="bg-[#800000] py-24 text-white relative overflow-hidden">
        <div className="absolute inset-0 ikat-overlay opacity-10"></div>
        <div className="max-w-7xl mx-auto px-4 text-center relative z-10">
          <h1 className="text-5xl md:text-7xl font-black mb-6 tracking-tight text-[#FFF8E7]">Our Leaders & Mentors</h1>
          <p className="text-xl md:text-2xl text-[#FFF8E7] max-w-3xl mx-auto font-medium opacity-90 leading-relaxed">
            The dedicated pillars of PNREDDY Techno School, committed to quality, strategy, and student excellence.
          </p>
        </div>
      </section>

      {/* Leadership Section */}
      <section className="py-24 max-w-7xl mx-auto px-4">
        <div className="text-center mb-20">
          <span className="inline-block px-6 py-2 bg-[#FFF8E7] text-[#B71C1C] rounded-full text-[10px] font-black mb-6 uppercase tracking-[0.2em] border border-[#B71C1C]/10 shadow-sm">
            Educational Leadership
          </span>
          <h2 className="text-4xl md:text-7xl font-black text-[#800000] leading-tight">The 5 Pillars of <br /><span className="text-[#FF9800] italic font-medium">PNREDDY School</span></h2>
        </div>

        <div className="space-y-12 max-w-6xl mx-auto">
          {LEADERSHIP_TEAM.map((lead) => (
            <LeadershipCard key={lead.id} lead={lead} />
          ))}
        </div>
      </section>

      {/* Faculty Departments */}
      <section className="py-32 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-24">
            <h2 className="text-4xl md:text-6xl font-black text-[#800000] mb-6">Teaching Faculty</h2>
            <p className="max-w-2xl mx-auto text-[#333333] font-medium opacity-60 text-lg">Subject specialists blending traditional discipline with techno-pedagogy.</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {departments.map((dept, dIdx) => (
              <div key={dIdx} className="bg-[#FAF8F5] p-12 rounded-[3.5rem] border border-[#FFF8E7] shadow-sm">
                <h3 className="text-3xl font-black text-[#800000] mb-4">{dept.name}</h3>
                <p className="text-sm font-medium text-slate-400 mb-10 leading-relaxed">{dept.desc}</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {dept.staff.map((member, mIdx) => (
                    <div key={mIdx} className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
                      <h4 className="font-black text-[#800000] mb-1">{member.name}</h4>
                      <p className="text-[10px] font-black text-[#FF9800] uppercase tracking-widest">{member.role}</p>
                      <div className="mt-4 pt-4 border-t border-slate-50 flex items-center gap-2 text-[9px] font-black text-slate-300 uppercase">
                        <Award size={14} /> Exp: {member.exp}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Philosophy CTA */}
      <section className="py-24 max-w-7xl mx-auto px-4">
        <div className="bg-[#800000] rounded-[4rem] p-16 md:p-32 text-white text-center relative overflow-hidden shadow-2xl border-4 border-white/5">
          <div className="absolute inset-0 ikat-overlay opacity-10"></div>
          <h2 className="text-4xl md:text-7xl font-black mb-10 relative z-10 leading-tight">Building Careers, <br /><span className="text-[#FFC107] italic font-medium">Shaping Lives.</span></h2>
          <p className="text-xl opacity-80 max-w-3xl mx-auto mb-16 font-medium relative z-10 leading-relaxed">
            Our teachers are mentors who go beyond textbooks. Join our legacy as a student or a fellow educator.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center relative z-10">
            <button className="bg-[#FF9800] text-white px-12 py-5 rounded-2xl font-black uppercase tracking-widest text-xs shadow-xl hover:scale-105 transition-transform flex items-center gap-3 mx-auto sm:mx-0">
              Careers <ChevronRight size={18} />
            </button>
            <button className="bg-white/10 border-2 border-white/20 text-white px-12 py-5 rounded-2xl font-black uppercase tracking-widest text-xs hover:bg-white/20 transition-all flex items-center gap-3 mx-auto sm:mx-0">
              Our Methodology <ChevronRight size={18} />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Staff;
