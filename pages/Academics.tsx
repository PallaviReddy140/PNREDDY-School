
import React from 'react';
import SectionHeader from '../components/SectionHeader';
import { 
  Languages, 
  BookOpen, 
  Palette, 
  Rocket, 
  Users, 
  Monitor, 
  Brain, 
  Calendar, 
  Pencil, 
  GraduationCap, 
  Heart,
  CheckCircle2
} from 'lucide-react';

const Academics: React.FC = () => {
  return (
    <div className="pt-24 min-h-screen bg-[#FAF8F5]">
      {/* Hero Header */}
      <section className="bg-[#800000] py-24 text-white relative overflow-hidden">
        <div className="absolute inset-0 ikat-overlay opacity-10"></div>
        <div className="max-w-7xl mx-auto px-4 text-center relative z-10">
          <h1 className="text-5xl md:text-7xl font-black mb-6 tracking-tight text-[#FFF8E7]">Academic Excellence</h1>
          <p className="text-xl md:text-2xl text-[#FFF8E7] max-w-3xl mx-auto font-medium opacity-90">
            Empowering students with a structured SSC curriculum and innovative techno-learning strategies.
          </p>
        </div>
      </section>

      {/* SSC Curriculum Overview */}
      <section className="py-24 max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-[#800000] mb-6">SSC Curriculum Overview</h2>
          <p className="max-w-4xl mx-auto text-[#333333] font-medium opacity-70 leading-relaxed text-lg">
            PNREDDY Techno School strictly adheres to the State Board (SSC) syllabus while integrating advanced academic tools. Our curriculum is designed to ensure mastery of subjects and prepare students for both state examinations and future competitive landscapes.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Languages Card */}
          <div className="bg-[#EBF1FF] p-10 rounded-[2.5rem] border border-blue-100 shadow-sm">
            <div className="flex items-center gap-4 mb-8">
              <div className="p-3 bg-white rounded-2xl text-blue-600 shadow-sm">
                <Languages size={28} />
              </div>
              <h3 className="text-2xl font-black text-[#800000]">Languages</h3>
            </div>
            <ul className="space-y-4 font-medium text-[#333333] opacity-80">
              <li className="flex justify-between border-b border-blue-200 pb-2">
                <span>First Language:</span>
                <span className="font-bold">Telugu / Hindi</span>
              </li>
              <li className="flex justify-between border-b border-blue-200 pb-2">
                <span>Second Language:</span>
                <span className="font-bold">Hindi / Telugu</span>
              </li>
              <li className="flex justify-between">
                <span>Third Language:</span>
                <span className="font-bold">English (Special Focus)</span>
              </li>
            </ul>
          </div>

          {/* Core Subjects Card */}
          <div className="bg-[#FFF9E7] p-10 rounded-[2.5rem] border border-yellow-100 shadow-sm">
            <div className="flex items-center gap-4 mb-8">
              <div className="p-3 bg-white rounded-2xl text-yellow-600 shadow-sm">
                <BookOpen size={28} />
              </div>
              <h3 className="text-2xl font-black text-[#800000]">Core Subjects</h3>
            </div>
            <ul className="space-y-4 font-medium text-[#333333] opacity-80">
              <li className="flex items-center gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-yellow-400"></div>
                Mathematics (Conceptual approach)
              </li>
              <li className="flex items-center gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-yellow-400"></div>
                General Science (Physics & Biology)
              </li>
              <li className="flex items-center gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-yellow-400"></div>
                Social Studies
              </li>
              <li className="flex items-center gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-yellow-400"></div>
                Information Technology (Techno Program)
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Academic Wings */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-6xl font-black text-[#800000] mb-6">Academic Wings</h2>
          <p className="text-[#333333] font-medium opacity-60 mb-20 text-lg">Structured learning paths for every growth milestone.</p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Pre-Primary */}
            <div className="bg-white p-12 rounded-[2.5rem] shadow-ikat border border-[#FFF8E7] flex flex-col items-center group hover:-translate-y-2 transition-transform duration-300">
              <div className="w-20 h-20 bg-[#E8F8F5] rounded-full flex items-center justify-center mb-8 text-[#1ABC9C] group-hover:scale-110 transition-transform">
                <Palette size={40} />
              </div>
              <h3 className="text-2xl font-black text-[#800000] mb-2">Pre-Primary</h3>
              <p className="text-[10px] font-bold uppercase tracking-widest text-[#1ABC9C] mb-6">NURSERY - UKG</p>
              <p className="text-sm font-medium text-[#333333] opacity-70 leading-relaxed">
                Focus on motor skills, cognitive development, and social interaction through the Play-Way method.
              </p>
            </div>

            {/* Primary School */}
            <div className="bg-white p-12 rounded-[2.5rem] shadow-ikat border border-[#FFF8E7] flex flex-col items-center group hover:-translate-y-2 transition-transform duration-300">
              <div className="w-20 h-20 bg-[#EBF5FB] rounded-full flex items-center justify-center mb-8 text-[#3498DB] group-hover:scale-110 transition-transform">
                <BookOpen size={40} />
              </div>
              <h3 className="text-2xl font-black text-[#800000] mb-2">Primary School</h3>
              <p className="text-[10px] font-bold uppercase tracking-widest text-[#3498DB] mb-6">CLASSES I - V</p>
              <p className="text-sm font-medium text-[#333333] opacity-70 leading-relaxed">
                Strengthening fundamentals in Literacy, Numeracy, and Environmental Awareness with interactive tools.
              </p>
            </div>

            {/* High School */}
            <div className="bg-white p-12 rounded-[2.5rem] shadow-ikat border border-[#FFF8E7] flex flex-col items-center group hover:-translate-y-2 transition-transform duration-300">
              <div className="w-20 h-20 bg-[#F5EEF8] rounded-full flex items-center justify-center mb-8 text-[#8E44AD] group-hover:scale-110 transition-transform">
                <Rocket size={40} />
              </div>
              <h3 className="text-2xl font-black text-[#800000] mb-2">High School</h3>
              <p className="text-[10px] font-bold uppercase tracking-widest text-[#8E44AD] mb-6">CLASSES VI - X</p>
              <p className="text-sm font-medium text-[#333333] opacity-70 leading-relaxed">
                Advanced analytical training, SSC board preparation, and IIT-Foundation integration.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Techno Methodology */}
      <section className="py-24 max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="grid grid-cols-2 gap-4">
            <div className="rounded-[2.5rem] overflow-hidden shadow-lg border-4 border-white">
              <img src="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&w=600&q=80" alt="Student learning" className="w-full h-full object-cover" />
            </div>
            <div className="rounded-[2.5rem] overflow-hidden shadow-lg border-4 border-white mt-12">
              <img src="https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=600&q=80" alt="Smart class" className="w-full h-full object-cover" />
            </div>
          </div>
          <div>
            <h2 className="text-4xl md:text-6xl font-black text-[#800000] mb-12">Our "Techno" Methodology</h2>
            <div className="space-y-8">
              <div className="flex gap-6">
                <div className="w-12 h-12 bg-[#E8F8F5] text-[#1ABC9C] font-black text-xl flex items-center justify-center rounded-xl flex-shrink-0">01</div>
                <div>
                  <h4 className="text-xl font-black text-[#800000] mb-2">Concept Mapping</h4>
                  <p className="text-sm font-medium text-[#333333] opacity-70">Visual breakdown of complex syllabus topics into easy-to-understand logical maps.</p>
                </div>
              </div>
              <div className="flex gap-6">
                <div className="w-12 h-12 bg-[#EBF5FB] text-[#3498DB] font-black text-xl flex items-center justify-center rounded-xl flex-shrink-0">02</div>
                <div>
                  <h4 className="text-xl font-black text-[#800000] mb-2">Smart Classroom Integration</h4>
                  <p className="text-sm font-medium text-[#333333] opacity-70">Interactive multimedia resources that bring textbook lessons to life through 3D visuals and animations.</p>
                </div>
              </div>
              <div className="flex gap-6">
                <div className="w-12 h-12 bg-[#FEF9E7] text-[#F1C40F] font-black text-xl flex items-center justify-center rounded-xl flex-shrink-0">03</div>
                <div>
                  <h4 className="text-xl font-black text-[#800000] mb-2">Rote-Free Learning</h4>
                  <p className="text-sm font-medium text-[#333333] opacity-70">Moving away from memorization to application-based learning where students solve real-world problems.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Evaluation Strategy */}
      <section className="py-24 bg-[#1E3A8A] text-white">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-6xl font-black mb-6">Evaluation Strategy</h2>
          <p className="text-xl opacity-80 mb-20 font-medium">Tracking progress through continuous and comprehensive evaluation.</p>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white/10 backdrop-blur-md border border-white/20 p-10 rounded-[2.5rem] flex flex-col items-center">
              <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mb-6">
                <Calendar size={32} />
              </div>
              <h4 className="text-xl font-black mb-4">Weekly Micro-Tests</h4>
              <p className="text-sm opacity-70 font-medium">Short weekend assessments to ensure topics taught during the week are mastered.</p>
            </div>

            <div className="bg-white/10 backdrop-blur-md border border-white/20 p-10 rounded-[2.5rem] flex flex-col items-center">
              <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mb-6">
                <Pencil size={32} />
              </div>
              <h4 className="text-xl font-black mb-4">Formative Exams</h4>
              <p className="text-sm opacity-70 font-medium">Classroom activities, projects, and oral tests conducted 4 times a year.</p>
            </div>

            <div className="bg-white/10 backdrop-blur-md border border-white/20 p-10 rounded-[2.5rem] flex flex-col items-center">
              <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mb-6">
                <GraduationCap size={32} />
              </div>
              <h4 className="text-xl font-black mb-4">Summative Exams</h4>
              <p className="text-sm opacity-70 font-medium">Terminal examinations (Term 1 & Term 2) aligned with SSC board patterns.</p>
            </div>

            <div className="bg-white/10 backdrop-blur-md border border-white/20 p-10 rounded-[2.5rem] flex flex-col items-center">
              <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mb-6">
                <Heart size={32} />
              </div>
              <h4 className="text-xl font-black mb-4">Parent-Teacher Meets</h4>
              <p className="text-sm opacity-70 font-medium">Regular performance reviews with parents to discuss and plan improvement paths.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Holistic Student Support */}
      <section className="py-24 max-w-7xl mx-auto px-4">
        <div className="bg-white rounded-[3rem] shadow-ikat border border-[#FFF8E7] overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="p-12 md:p-20">
              <h2 className="text-4xl font-black text-[#800000] mb-8">Holistic Student Support</h2>
              <p className="text-lg font-medium text-[#333333] opacity-70 mb-10 leading-relaxed">
                We understand that every student learns at their own pace. Our support system is designed to provide extra care to those who need it and challenge those who excel.
              </p>
              <div className="space-y-4">
                {[
                  "Remedial Classes for slow learners",
                  "Career Guidance for High School students",
                  "Emotional Counseling & Peer support",
                  "Language Lab for communication skills"
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-4">
                    <CheckCircle2 size={24} className="text-[#FFC107] flex-shrink-0" />
                    <span className="font-bold text-[#333333] opacity-90">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative min-h-[400px]">
              <img src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1200&q=80" alt="Students collaborating" className="absolute inset-0 w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Academics;
