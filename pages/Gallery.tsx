
import React, { useState, useMemo, useEffect } from 'react';
import { Camera, Play, Youtube, X, Grid as GridIcon, Calendar, Maximize2, ChevronRight, Loader2 } from 'lucide-react';
import { DataService } from '../services/DataService';
import { GalleryItem, GalleryCategory } from '../types';

const Gallery: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'photos' | 'videos' | 'youtube'>('photos');
  const [activeCategory, setActiveCategory] = useState<GalleryCategory>('All');
  const [activeYear, setActiveYear] = useState<string>('All');
  const [selectedItem, setSelectedItem] = useState<GalleryItem | null>(null);
  const [displayCount, setDisplayCount] = useState(8);
  const [galleryItems, setGalleryItems] = useState<GalleryItem[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadData = async () => {
      setLoading(true);
      const items = await DataService.getGalleryItems();
      setGalleryItems(items);
      setLoading(false);
    };
    loadData();
  }, []);

  const categories: GalleryCategory[] = ['All', 'Campus', 'Classrooms', 'Labs', 'Events', 'Sports', 'Cultural'];
  const years = ['All', '2025', '2024', '2023', '2022'];

  const filteredItems = useMemo(() => {
    return galleryItems.filter(item => {
      let typeMatch = false;
      if (activeTab === 'photos') typeMatch = item.type === 'image';
      if (activeTab === 'videos') typeMatch = item.type === 'video';
      if (activeTab === 'youtube') typeMatch = item.type === 'youtube';
      
      const categoryMatch = activeCategory === 'All' || item.category === activeCategory;
      const yearMatch = activeYear === 'All' || item.year === activeYear;
      return typeMatch && categoryMatch && yearMatch;
    });
  }, [activeTab, activeCategory, activeYear, galleryItems]);

  const displayedItems = filteredItems.slice(0, displayCount);

  const handleShowMore = () => setDisplayCount(prev => prev + 4);

  return (
    <div className="pt-24 min-h-screen bg-[#FAF8F5]">
      {/* 1. Header Section */}
      <section className="bg-[#800000] py-24 text-white relative overflow-hidden">
        <div className="absolute inset-0 ikat-overlay opacity-10"></div>
        <div className="max-w-7xl mx-auto px-4 text-center relative z-10">
          <h1 className="text-5xl md:text-7xl font-black mb-6 tracking-tight text-[#FFF8E7]">Our Gallery</h1>
          <p className="text-xl md:text-2xl text-[#FFF8E7] max-w-3xl mx-auto font-medium opacity-90">
            Capturing the joyous moments, achievements, and vibrant life at PNREDDY.
          </p>
        </div>
      </section>

      {/* 2. Controls Section */}
      <section className="max-w-7xl mx-auto px-4 -mt-12 relative z-20">
        <div className="bg-white rounded-[2.5rem] shadow-ikat p-8 md:p-12 border border-[#FFF8E7]">
          <div className="flex justify-center mb-12 overflow-x-auto pb-4 lg:pb-0 no-scrollbar">
            <div className="inline-flex bg-slate-100 p-1.5 rounded-2xl shadow-inner whitespace-nowrap">
              <button
                onClick={() => { setActiveTab('photos'); setDisplayCount(8); }}
                className={`flex items-center px-8 py-3.5 rounded-xl font-black text-sm uppercase tracking-widest transition-all ${
                  activeTab === 'photos' ? 'bg-[#800000] text-white shadow-lg' : 'text-slate-500 hover:text-[#800000]'
                }`}
              >
                <Camera className="mr-3" size={20} />
                Photos
              </button>
              <button
                onClick={() => { setActiveTab('videos'); setDisplayCount(8); }}
                className={`flex items-center px-8 py-3.5 rounded-xl font-black text-sm uppercase tracking-widest transition-all ${
                  activeTab === 'videos' ? 'bg-[#800000] text-white shadow-lg' : 'text-slate-500 hover:text-[#800000]'
                }`}
              >
                <Play className="mr-3" size={20} />
                Videos
              </button>
              <button
                onClick={() => { setActiveTab('youtube'); setDisplayCount(8); }}
                className={`flex items-center px-8 py-3.5 rounded-xl font-black text-sm uppercase tracking-widest transition-all ${
                  activeTab === 'youtube' ? 'bg-[#FF0000] text-white shadow-lg' : 'text-slate-500 hover:text-[#FF0000]'
                }`}
              >
                <Youtube className="mr-3" size={20} />
                YouTube
              </button>
            </div>
          </div>

          <div className="flex flex-col lg:flex-row gap-8 justify-between items-start lg:items-center">
            <div className="flex flex-wrap gap-2 w-full lg:w-auto overflow-x-auto pb-2 lg:pb-0 scrollbar-hide">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-6 py-2.5 rounded-full text-[10px] font-black uppercase tracking-widest border transition-all whitespace-nowrap ${
                    activeCategory === cat 
                      ? 'bg-[#FFC107] border-[#FFC107] text-[#800000] shadow-md' 
                      : 'bg-white border-slate-200 text-slate-400 hover:border-[#800000] hover:text-[#800000]'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            <div className="flex items-center gap-4 bg-[#FAF8F5] px-6 py-3 rounded-2xl border border-[#FFF8E7] self-end lg:self-auto">
              <Calendar size={18} className="text-[#800000] opacity-50" />
              <select 
                value={activeYear}
                onChange={(e) => setActiveYear(e.target.value)}
                className="bg-transparent border-none focus:ring-0 text-sm font-black text-[#800000] uppercase tracking-widest cursor-pointer"
              >
                {years.map(year => (
                  <option key={year} value={year}>{year === 'All' ? 'Academic Year' : year}</option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Grid Content */}
      <section className="max-w-7xl mx-auto px-4 py-24 min-h-[400px]">
        {loading ? (
          <div className="flex flex-col items-center justify-center py-32 text-[#800000]">
            <Loader2 size={48} className="animate-spin mb-4" />
            <p className="font-black uppercase tracking-widest text-xs">Syncing with Campus Cloud...</p>
          </div>
        ) : filteredItems.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {displayedItems.map((item) => (
              <div 
                key={item.id} 
                className="group relative flex flex-col bg-white rounded-[2rem] overflow-hidden shadow-sm border border-[#FFF8E7] hover:shadow-ikat transition-all duration-500"
                onClick={() => setSelectedItem(item)}
              >
                <div className="relative aspect-[4/5] overflow-hidden cursor-pointer">
                  <img 
                    src={item.thumbnail} 
                    alt={item.title} 
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-t ${item.type === 'youtube' ? 'from-[#FF0000]/80' : 'from-[#800000]/80'} via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-8`}>
                    <button className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-[#800000] shadow-xl transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                      {item.type === 'image' ? <Maximize2 size={24} /> : (item.type === 'youtube' ? <Youtube size={24} className="text-[#FF0000]" /> : <Play size={24} />)}
                    </button>
                  </div>
                  <div className="absolute top-4 left-4 bg-white/90 backdrop-blur px-3 py-1 rounded-lg text-[9px] font-black uppercase tracking-widest text-[#800000] border border-white/20 shadow-sm">
                    {item.category}
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-lg font-black text-[#800000] leading-tight line-clamp-1">{item.title}</h3>
                    <span className="text-[10px] font-black text-slate-300 ml-4">{item.year}</span>
                  </div>
                  <p className="text-xs font-medium text-slate-400 line-clamp-2 leading-relaxed">
                    {item.caption || "Moments from our school activities."}
                  </p>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="py-32 text-center bg-white rounded-[3rem] shadow-sm border border-[#FFF8E7]">
            <div className="w-20 h-20 bg-[#FAF8F5] rounded-full flex items-center justify-center mx-auto mb-6 text-slate-300">
              <GridIcon size={40} />
            </div>
            <h3 className="text-2xl font-black text-[#800000] mb-2">No Items Found</h3>
            <p className="text-slate-400 font-medium">Try adjusting your filters or category selection.</p>
          </div>
        )}

        {filteredItems.length > displayCount && !loading && (
          <div className="mt-20 text-center">
            <button 
              onClick={handleShowMore}
              className="inline-flex items-center gap-3 bg-white text-[#800000] px-12 py-5 rounded-2xl font-black uppercase tracking-[0.2em] text-[10px] border-2 border-[#800000] hover:bg-[#800000] hover:text-white transition-all shadow-lg"
            >
              View More Collections
              <ChevronRight size={18} />
            </button>
          </div>
        )}
      </section>

      {/* 4. Lightbox / Modal */}
      {selectedItem && (
        <div className="fixed inset-0 z-[1000] bg-[#1a0000]/98 backdrop-blur-sm flex items-center justify-center p-4 lg:p-12">
          <div className="absolute inset-0 cursor-zoom-out" onClick={() => setSelectedItem(null)}></div>
          <div className="relative z-10 w-full max-w-6xl flex flex-col">
            <button 
              className="absolute -top-16 lg:top-0 lg:-right-16 text-white p-4 hover:bg-white/10 rounded-2xl transition-all"
              onClick={() => setSelectedItem(null)}
            >
              <X size={40} />
            </button>
            <div className="bg-white rounded-[2.5rem] overflow-hidden shadow-2xl flex flex-col lg:flex-row max-h-[90vh]">
              <div className="flex-grow bg-black flex items-center justify-center min-h-[300px] lg:min-h-[400px]">
                {selectedItem.type === 'image' ? (
                  <img 
                    src={selectedItem.url} 
                    className="max-w-full max-h-full object-contain" 
                    alt={selectedItem.title} 
                  />
                ) : selectedItem.type === 'youtube' ? (
                  <iframe
                    className="w-full aspect-video"
                    src={`https://www.youtube.com/embed/${selectedItem.url}?autoplay=1`}
                    title={selectedItem.title}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                ) : (
                  <video 
                    src={selectedItem.url} 
                    controls 
                    autoPlay 
                    className="max-w-full max-h-full"
                  />
                )}
              </div>
              <div className="w-full lg:w-[350px] p-10 bg-white border-l border-slate-50 overflow-y-auto">
                <span className="inline-block px-3 py-1 bg-[#FFF8E7] text-[#B71C1C] rounded-lg text-[9px] font-black uppercase tracking-widest mb-4">
                  {selectedItem.category} • {selectedItem.year}
                </span>
                <h3 className="text-3xl font-black text-[#800000] mb-6 leading-tight">
                  {selectedItem.title}
                </h3>
                <p className="text-[#333333] font-medium leading-relaxed opacity-70 text-sm mb-12">
                  {selectedItem.caption || "Joyful moments capturing the essence of learning, play, and growth at PNREDDY Techno School."}
                </p>
                <div className="pt-8 border-t border-slate-100">
                  <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-6">Details</p>
                  <div className="space-y-4">
                    <div className="flex justify-between text-xs font-bold">
                      <span className="text-slate-300">Format:</span>
                      <span className={`uppercase font-black ${selectedItem.type === 'youtube' ? 'text-red-600' : 'text-[#800000]'}`}>
                        {selectedItem.type}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;
