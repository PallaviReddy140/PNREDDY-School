
import React, { useState, useEffect, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, MessageCircle, Camera, Star } from 'lucide-react';
import { DataService } from '../services/DataService';
import { GalleryItem } from '../types';
import { HERO_CARDS, FOUNDER_NAME, SCHOOL_TAGLINE, SCHOOL_SLOGAN_TELUGU } from '../constants';

const Home: React.FC = () => {
  const [currentBgIndex, setCurrentBgIndex] = useState(0);
  const [allGalleryItems, setAllGalleryItems] = useState<GalleryItem[]>([]);
  const [imgError, setImgError] = useState(false);
  const [founderImg, setFounderImg] = useState<string>(DataService.getFounderImage());

  const fetchData = async () => {
    const items = await DataService.getGalleryItems();
    setAllGalleryItems(items);
  };

  useEffect(() => {
    fetchData();
    // Periodically sync content in case it was changed in admin
    const syncInterval = setInterval(() => {
      setFounderImg(DataService.getFounderImage());
      fetchData();
    }, 3000);
    return () => clearInterval(syncInterval);
  }, []);
  
  // Use useMemo for gallery items to prevent unnecessary re-renders
  const bgImages = useMemo(() => 
    allGalleryItems.filter(item => item.type === 'image').slice(0, 5),
  [allGalleryItems]);

  useEffect(() => {
    if (bgImages.length <= 1) return;
    const timer = setInterval(() => {
      setCurrentBgIndex((prev) => (prev + 1) % bgImages.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [bgImages.length]);

  // Highlight Strategy: 
  // 1. Show newest items first
  // 2. Prioritize 'Campus' category if available
  // 3. Ensure only images are highlighted in this specific section
  const highlights = useMemo(() => {
    const images = [...allGalleryItems].reverse().filter(item => item.type === 'image');
    const campusImages = images.filter(img => img.category === 'Campus');
    const otherImages = images.filter(img => img.category !== 'Campus');
    return [...campusImages, ...otherImages].slice(0, 3);
  }, [allGalleryItems]);

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center pt-32 pb-48">
        <div className="absolute inset-0 overflow-hidden z-0">
          {bgImages.length > 0 ? bgImages.map((img, idx) => (
            <div
              key={img.id || idx}
              className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                idx === currentBgIndex ? 'opacity-100' : 'opacity-0'
              }`}
            >
              <img 
                src={img.url} 
                alt="School Background" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-[#800000]/90 via-[#800000]/60 to-transparent"></div>
              <div className="absolute inset-0 bg-black/20"></div>
            </div>
          )) : (
            <div className="absolute inset-0 bg-[#800000]"></div>
          )}
          <div className="absolute inset-0 ikat-overlay pointer-events-none z-10"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20 text-white w-full">
          <div className="max-w-5xl">
            <div className="flex items-center gap-3 mb-8">
              <span className="px-4 py-1.5 bg-[#FFC107] rounded-full text-[10px] font-black uppercase tracking-[0.2em] text-[#800000] shadow-lg">
                Admissions Open 2025-26
              </span>
              <span className="hidden sm:inline-block h-px w-12 bg-white/30"></span>
              <span className="text-[10px] font-bold uppercase tracking-widest opacity-80">Hyderabad, Telangana</span>
            </div>

            <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black mb-8 leading-tight text-white drop-shadow-2xl whitespace-nowrap">
              PNREDDY <span className="text-[#FFC107] italic font-medium">Techno</span> School
            </h1>
            
            <div className="space-y-4">
              <p className="text-xl md:text-3xl font-bold text-[#FFF8E7] italic border-l-4 border-[#FF9800] pl-6 py-1">
                "{SCHOOL_TAGLINE}"
              </p>
              <p className="text-lg md:text-2xl font-black text-[#FFC107] pl-7 opacity-90 tracking-tight">
                {SCHOOL_SLOGAN_TELUGU}
              </p>
            </div>
          </div>
        </div>

        {/* Hero Quick Cards */}
        <div className="absolute bottom-0 left-0 right-0 transform translate-y-1/2 z-30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {HERO_CARDS.map((card, idx) => (
                <div key={idx} className="bg-white p-8 rounded-[2.5rem] shadow-ikat border border-[#FFF8E7] flex flex-col h-full hover:-translate-y-2 transition-all duration-300">
                  <div className="mb-6 p-4 bg-[#FAF8F5] w-fit rounded-2xl border border-[#FFF8E7]">
                    {React.cloneElement(card.icon as React.ReactElement<any>, { className: 'text-[#B71C1C]', size: 28 })}
                  </div>
                  <h3 className="text-xl font-black text-[#800000] mb-3">{card.title}</h3>
                  <p className="text-sm text-[#333333] font-medium opacity-60">{card.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Floating Admission Button */}
        <div className="fixed right-6 bottom-10 z-50 flex flex-col items-end gap-3 pointer-events-none">
          <div className="bg-white shadow-2xl px-5 py-3 rounded-2xl text-[10px] font-black border border-[#FFF8E7] flex items-center gap-3 animate-bounce pointer-events-auto">
            <span className="w-2.5 h-2.5 bg-green-500 rounded-full animate-pulse"></span> Admissions 2025 Active
          </div>
          <button className="w-16 h-16 bg-[#25D366] text-white rounded-[1.5rem] shadow-2xl flex items-center justify-center hover:scale-110 transition-transform pointer-events-auto border-4 border-white/20">
            <MessageCircle size={36} />
          </button>
        </div>
      </section>

      {/* Chairman Section */}
      <section className="pt-80 pb-32 bg-[#FAF8F5] relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-20 items-center">
            <div className="lg:col-span-5 relative">
              <div className="relative z-10 p-5 border-4 border-[#FFC107] rounded-[3.5rem] overflow-hidden bg-white shadow-2xl min-h-[400px] flex items-center justify-center">
                {!imgError ? (
                  <img 
                    src={founderImg} 
                    alt="Chairman" 
                    className="w-full h-auto rounded-[2.5rem] object-cover"
                    onError={() => setImgError(true)}
                  />
                ) : (
                  <div className="w-full aspect-[4/5] bg-[#800000] rounded-[2.5rem] flex flex-col items-center justify-center text-white p-12 text-center">
                    <span className="text-6xl font-black mb-4">PNR</span>
                    <p className="text-xs uppercase tracking-[0.2em] font-bold opacity-60">{FOUNDER_NAME}</p>
                  </div>
                )}
                <div className="absolute bottom-10 right-10 bg-[#800000] text-white px-10 py-5 rounded-2xl shadow-2xl border border-white/10">
                  <h4 className="font-black text-xl">{FOUNDER_NAME}</h4>
                  <p className="text-xs text-[#FFC107] uppercase font-black tracking-[0.2em]">Founder & Chairman</p>
                </div>
              </div>
              <div className="absolute -z-0 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-[#FFC107]/5 rounded-full blur-[120px] opacity-50"></div>
            </div>
            <div className="lg:col-span-7">
              <span className="inline-block px-4 py-2 bg-[#FFF8E7] text-[#B71C1C] rounded-full text-[10px] font-black mb-8 uppercase tracking-widest border border-[#B71C1C]/10">
                Pillars of PNREDDY
              </span>
              <h2 className="text-5xl md:text-7xl font-black text-[#800000] mb-10 leading-[1.05]">
                Empowering Students to Reach Their Full Potential
              </h2>
              <div className="space-y-8 text-[#333333] font-medium leading-relaxed opacity-80 text-xl">
                <p>"At PNREDDY Techno School, our journey since 2001 has been defined by a relentless pursuit of academic excellence."</p>
                <p>"We believe that every child is unique and deserves an environment that fosters curiosity and resilience."</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Campus Reflections - HIGHLIGHTED PHOTOS SECTION */}
      <section className="py-32 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
            <div className="max-w-2xl">
              <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-[#FFF8E7] text-[#B71C1C] rounded-full text-[10px] font-black mb-6 uppercase tracking-widest border border-[#B71C1C]/10">
                <Star size={12} className="fill-current" /> Recent Highlights
              </span>
              <h2 className="text-5xl md:text-7xl font-black text-[#800000] leading-none mb-6">
                Campus <span className="text-[#FFC107] italic font-medium">Reflections</span>
              </h2>
              <p className="text-xl font-medium text-slate-400">Discover the latest photos and memories from our vibrant campus.</p>
            </div>
            <Link to="/gallery" className="group flex items-center gap-4 bg-[#800000] text-white px-10 py-5 rounded-2xl font-black uppercase text-xs tracking-[0.2em] shadow-2xl hover:bg-[#B71C1C] transition-all">
              View Full Gallery
              <ArrowRight size={20} className="group-hover:translate-x-2 transition-transform" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {highlights.map((item, idx) => (
              <div key={item.id || idx} className={`group relative h-[500px] overflow-hidden rounded-[3rem] shadow-2xl transition-all duration-500 hover:shadow-[#800000]/20 ${idx === 1 ? 'md:-translate-y-12' : ''}`}>
                <img 
                  src={item.url} 
                  alt={item.title} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#800000]/90 via-[#800000]/20 to-transparent opacity-80 group-hover:opacity-100 transition-opacity"></div>
                
                {/* Meta info tags */}
                <div className="absolute top-8 left-8 flex flex-col gap-2">
                  <span className="bg-white/20 backdrop-blur-md px-4 py-2 rounded-xl text-[10px] font-black text-white uppercase tracking-widest border border-white/20 flex items-center gap-2">
                    <Camera size={14} /> {item.category}
                  </span>
                  {item.id.startsWith('custom_') && (
                    <span className="bg-[#FFC107] px-3 py-1 rounded-lg text-[9px] font-black text-[#800000] uppercase tracking-widest w-fit shadow-lg">
                      New Upload
                    </span>
                  )}
                </div>

                <div className="absolute bottom-10 left-10 right-10 text-white">
                  <div className="flex items-center gap-3 mb-2 opacity-60">
                    <span className="text-[10px] font-black uppercase tracking-widest">{item.year} Academic Year</span>
                  </div>
                  <h3 className="text-3xl font-black mb-2 leading-tight group-hover:text-[#FFC107] transition-colors">{item.title}</h3>
                  <p className="text-sm font-medium opacity-70 line-clamp-2 leading-relaxed">
                    {item.caption || "A special moment captured at PNREDDY Techno School campus."}
                  </p>
                </div>

                {/* Hover indicator */}
                <div className="absolute bottom-10 right-10 opacity-0 group-hover:opacity-100 transition-opacity translate-x-4 group-hover:translate-x-0 transition-transform">
                  <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-[#800000] shadow-xl">
                    <ArrowRight size={24} />
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Empty state if no images */}
          {highlights.length === 0 && (
            <div className="py-24 text-center bg-[#FAF8F5] rounded-[3rem] border-2 border-dashed border-slate-200">
              <Camera size={48} className="mx-auto text-slate-300 mb-4" />
              <p className="text-slate-400 font-bold uppercase tracking-widest text-xs">No photos to highlight yet. Upload some in Admin!</p>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 bg-[#FFF8E7] relative overflow-hidden text-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-5xl md:text-8xl font-black mb-10 leading-[1.05] text-[#800000]">
            Ready to give your child a<br />
            <span className="text-[#FF9800] italic font-medium">Stronger Foundation?</span>
          </h2>
          <Link to="/contact" className="inline-flex items-center gap-4 bg-[#800000] text-white px-16 py-6 rounded-[2rem] font-black text-xl shadow-2xl hover:scale-105 transition-transform">
            Apply for Admission 2025-26
            <ArrowRight size={24} />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
