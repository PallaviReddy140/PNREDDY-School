
import React, { useState, useEffect, useRef } from 'react';
import { DataService } from '../services/DataService';
import { GalleryItem, GalleryCategory } from '../types';
import { 
  Plus, 
  Trash2, 
  Lock, 
  CheckCircle, 
  Youtube, 
  Image as ImageIcon, 
  Play, 
  RefreshCw,
  LogOut,
  AlertCircle,
  Upload,
  Camera,
  FolderPlus,
  Folder,
  HardDrive,
  X,
  ChevronRight,
  ShieldCheck,
  UserCheck,
  Cloud,
  CloudOff,
  Database
} from 'lucide-react';
import { FOUNDER_NAME, LEADERSHIP_TEAM } from '../constants';

const Admin: React.FC = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState('');
  const [items, setItems] = useState<GalleryItem[]>([]);
  const [msg, setMsg] = useState<{type: 'success' | 'error', text: string} | null>(null);
  const [isUploading, setIsUploading] = useState(false);
  const [storageUsage, setStorageUsage] = useState(0);
  const [isCloud, setIsCloud] = useState(false);

  // Leadership Previews
  const [leadershipPhotos, setLeadershipPhotos] = useState<Record<string, string>>({});

  // Folder/Batch State
  const [selectedFolder, setSelectedFolder] = useState<GalleryCategory>('Campus');
  const [newFolderName, setNewFolderName] = useState('');
  const [batchYear, setBatchYear] = useState('2025');
  const [ytLinks, setYtLinks] = useState('');
  
  const multiUploadRef = useRef<HTMLInputElement>(null);
  const staffPhotoRef = useRef<HTMLInputElement>(null);
  const [activeRoleUpload, setActiveRoleUpload] = useState<string | null>(null);

  const categories: GalleryCategory[] = ['Campus', 'Classrooms', 'Labs', 'Events', 'Sports', 'Cultural'];
  const [customFolders, setCustomFolders] = useState<string[]>([]);

  useEffect(() => {
    if (isAuthenticated) {
      refreshData();
      setIsCloud(DataService.isCloudConnected());
      const photos: Record<string, string> = {};
      LEADERSHIP_TEAM.forEach(lead => {
        photos[lead.id] = DataService.getStaffPhoto(lead.id, lead.defaultImg);
      });
      setLeadershipPhotos(photos);
    }
  }, [isAuthenticated]);

  const refreshData = async () => {
    const gallery = await DataService.getGalleryItems();
    setItems(gallery);
    setStorageUsage(DataService.getStorageUsage());
    const customCats = gallery.filter(i => i.id.startsWith('custom_')).map(i => i.category);
    setCustomFolders(Array.from(new Set(customCats)));
  };

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === 'pnreddy2024') { 
      setIsAuthenticated(true);
    } else {
      setMsg({ type: 'error', text: 'Incorrect access code.' });
    }
  };

  const handleStaffPhotoUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file && activeRoleUpload) {
      const r = new FileReader();
      r.onload = async () => {
        const base64 = r.result as string;
        const success = await DataService.setStaffPhoto(activeRoleUpload, base64);
        if (success) {
          setLeadershipPhotos(prev => ({ ...prev, [activeRoleUpload]: base64 }));
          setMsg({ type: 'success', text: `Photo for ${activeRoleUpload} updated!` });
        } else {
          setMsg({ type: 'error', text: 'Storage limit reached. Try a smaller photo.' });
        }
        setTimeout(() => setMsg(null), 3000);
      };
      r.readAsDataURL(file);
    }
  };

  const handleFileBatch = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files || []);
    if (files.length === 0) return;
    setIsUploading(true);
    const newItems: Omit<GalleryItem, 'id'>[] = [];
    for (const file of files) {
      const isVideo = file.type.startsWith('video/');
      const base64 = await new Promise<string>((resolve) => {
        const reader = new FileReader();
        reader.onloadend = () => resolve(reader.result as string);
        reader.readAsDataURL(file);
      });
      newItems.push({
        type: isVideo ? 'video' : 'image',
        category: selectedFolder,
        year: batchYear,
        title: file.name.split('.')[0].replace(/[-_]/g, ' '),
        thumbnail: isVideo ? 'https://images.unsplash.com/photo-1516280440614-37939bbacd81?auto=format&fit=crop&w=400&q=80' : base64,
        url: base64
      });
    }
    const success = await DataService.addItems(newItems);
    if (success) {
      setMsg({ type: 'success', text: `Uploaded ${newItems.length} items to ${selectedFolder}` });
    } else {
      setMsg({ type: 'error', text: 'Storage full or Cloud connection error!' });
    }
    setIsUploading(false);
    refreshData();
    setTimeout(() => setMsg(null), 3000);
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen pt-40 bg-[#FAF8F5] flex items-center justify-center px-4">
        <div className="max-w-md w-full bg-white rounded-[2.5rem] shadow-ikat p-12 border border-[#FFF8E7] text-center">
          <div className="w-20 h-20 bg-[#FFF8E7] rounded-3xl flex items-center justify-center mx-auto mb-8 text-[#800000]">
            <Lock size={40} />
          </div>
          <h1 className="text-3xl font-black text-[#800000] mb-8">Staff Access</h1>
          <form onSubmit={handleLogin} className="space-y-4">
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Access Code" className="w-full bg-[#FAF8F5] border border-slate-100 px-6 py-4 rounded-2xl font-bold text-center tracking-[0.5em] focus:outline-none" />
            <button className="w-full bg-[#800000] text-white py-5 rounded-2xl font-black uppercase text-xs">Unlock</button>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-32 pb-24 min-h-screen bg-[#FAF8F5]">
      <div className="max-w-7xl mx-auto px-4">
        {/* Cloud Status Bar */}
        <div className="mb-8 flex items-center justify-between bg-white px-8 py-4 rounded-2xl border border-[#FFF8E7] shadow-sm">
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2">
              {isCloud ? <Cloud className="text-green-500" size={18} /> : <CloudOff className="text-orange-400" size={18} />}
              <span className="text-[10px] font-black uppercase tracking-widest text-slate-400">
                Azure Connectivity: <span className={isCloud ? 'text-green-600' : 'text-orange-500'}>{isCloud ? 'Online (Cosmos DB)' : 'Local Mode'}</span>
              </span>
            </div>
            <div className="h-4 w-px bg-slate-100"></div>
            <div className="flex items-center gap-2">
              <Database className="text-blue-500" size={18} />
              <span className="text-[10px] font-black uppercase tracking-widest text-slate-400">
                Storage Type: <span className="text-blue-600">{isCloud ? 'Azure Blob' : 'Browser Cache'}</span>
              </span>
            </div>
          </div>
          {!isCloud && (
            <div className="flex items-center gap-4">
               <span className="text-[9px] font-black text-slate-300 uppercase">LocalStorage Usage:</span>
               <div className="w-32 h-1.5 bg-slate-100 rounded-full overflow-hidden">
                 <div className={`h-full ${storageUsage > 80 ? 'bg-red-500' : 'bg-blue-500'}`} style={{ width: `${storageUsage}%` }}></div>
               </div>
            </div>
          )}
        </div>

        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12 gap-8">
          <div>
            <h1 className="text-4xl font-black text-[#800000] mb-2">School Media Center</h1>
            <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">Manage campus memories and leadership profiles.</p>
          </div>
          <button onClick={() => setIsAuthenticated(false)} className="flex items-center gap-2 text-slate-400 font-black uppercase text-[10px] hover:text-[#800000] transition-colors"><LogOut size={16} /> Exit Dashboard</button>
        </div>

        {msg && (
          <div className={`mb-8 p-6 rounded-2xl flex items-center gap-4 animate-in slide-in-from-top ${msg.type === 'success' ? 'bg-green-50 text-green-700' : 'bg-red-50 text-red-700'}`}>
            {msg.type === 'success' ? <CheckCircle size={20} /> : <AlertCircle size={20} />}
            <span className="text-xs font-black uppercase tracking-widest">{msg.text}</span>
          </div>
        )}

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* LEADERSHIP MANAGER */}
          <div className="lg:col-span-12">
            <div className="bg-white rounded-[3rem] shadow-ikat border border-[#FFF8E7] p-10 mb-12">
              <div className="flex items-center gap-4 mb-10">
                <div className="w-12 h-12 bg-[#FFF8E7] rounded-xl flex items-center justify-center text-[#B71C1C]"><UserCheck size={24} /></div>
                <div>
                  <h2 className="text-2xl font-black text-[#800000]">Leadership Team Manager</h2>
                  <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">Update photos for the 5 key leadership roles.</p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
                {LEADERSHIP_TEAM.map((lead) => (
                  <div key={lead.id} className="bg-[#FAF8F5] p-6 rounded-3xl border border-slate-50 flex flex-col group">
                    <div className="relative aspect-[3/4] mb-4 overflow-hidden rounded-2xl bg-white shadow-sm flex items-center justify-center">
                      <img src={leadershipPhotos[lead.id]} className="w-full h-full object-cover" />
                      <button 
                        onClick={() => { setActiveRoleUpload(lead.id); staffPhotoRef.current?.click(); }}
                        className="absolute inset-0 bg-[#800000]/80 text-white flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
                      >
                        <Camera size={32} className="mb-2" />
                        <span className="text-[10px] font-black uppercase tracking-widest">Update Photo</span>
                      </button>
                    </div>
                    <h4 className="font-black text-[#800000] text-sm text-center mb-1">{lead.role}</h4>
                    <p className="text-[9px] font-bold text-slate-400 text-center uppercase mb-4 tracking-tighter">{lead.name}</p>
                    <button 
                      onClick={async () => {
                        DataService.resetStaffPhoto(lead.id);
                        setLeadershipPhotos(prev => ({ ...prev, [lead.id]: lead.defaultImg }));
                      }}
                      className="mt-auto text-[9px] font-black uppercase text-slate-300 hover:text-red-500 transition-colors"
                    >
                      Reset Default
                    </button>
                  </div>
                ))}
              </div>
              <input type="file" ref={staffPhotoRef} className="hidden" accept="image/*" onChange={handleStaffPhotoUpload} />
            </div>
          </div>

          {/* FOLDER MANAGER */}
          <div className="lg:col-span-4 space-y-8">
            <div className="bg-white rounded-[2.5rem] shadow-ikat p-8 border border-[#FFF8E7]">
              <h2 className="text-lg font-black text-[#800000] mb-6 flex items-center gap-3"><Folder size={20} /> Content Folders</h2>
              <div className="space-y-2 mb-8 max-h-[300px] overflow-y-auto pr-2 no-scrollbar">
                {[...categories, ...customFolders].map(folder => (
                  <button key={folder} onClick={() => setSelectedFolder(folder as any)} className={`w-full text-left px-5 py-4 rounded-xl font-bold text-sm flex justify-between items-center transition-all ${selectedFolder === folder ? 'bg-[#800000] text-white' : 'bg-[#FAF8F5] text-slate-500 hover:bg-slate-100'}`}>
                    <span className="flex items-center gap-3"><Folder size={16} /> {folder}</span>
                    {selectedFolder === folder && <ChevronRight size={16} />}
                  </button>
                ))}
              </div>
              <div className="pt-6 border-t border-slate-100">
                <div className="flex gap-2">
                  <input value={newFolderName} onChange={e => setNewFolderName(e.target.value)} placeholder="New Folder..." className="flex-grow bg-[#FAF8F5] border-none px-4 py-3 rounded-lg font-bold text-sm focus:ring-0" />
                  <button onClick={() => { if(newFolderName) { setCustomFolders(prev => [...prev, newFolderName]); setSelectedFolder(newFolderName as any); setNewFolderName(''); } }} className="p-3 bg-[#FF9800] text-white rounded-lg"><FolderPlus size={20} /></button>
                </div>
              </div>
            </div>
          </div>

          {/* BATCH UPLOAD */}
          <div className="lg:col-span-8 space-y-8">
            <div className="bg-white rounded-[3rem] shadow-ikat border border-[#FFF8E7] p-10">
              <div className="flex flex-col md:flex-row justify-between mb-10 gap-6">
                <div><h2 className="text-2xl font-black text-[#800000]">Album: <span className="text-[#FF9800]">{selectedFolder}</span></h2></div>
                <div className="bg-[#FAF8F5] px-4 py-2 rounded-xl flex items-center gap-3 border border-slate-100"><span className="text-[10px] font-black uppercase text-slate-400">Year:</span><input value={batchYear} onChange={e => setBatchYear(e.target.value)} className="w-16 bg-transparent border-none p-0 font-black text-[#800000] focus:ring-0" /></div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div onClick={() => multiUploadRef.current?.click()} className="aspect-video bg-[#FAF8F5] border-2 border-dashed border-slate-200 rounded-[2rem] flex flex-col items-center justify-center cursor-pointer hover:bg-slate-50 transition-all relative">
                  {isUploading ? <RefreshCw className="animate-spin text-[#800000]" size={40} /> : <><Upload className="text-slate-300 mb-4" size={48} /><p className="text-[10px] font-black text-slate-400 uppercase tracking-widest text-center px-8">Bulk Upload Photos/Videos</p></>}
                  <input type="file" ref={multiUploadRef} multiple className="hidden" accept="image/*,video/*" onChange={handleFileBatch} />
                </div>
                <div className="aspect-video bg-red-50 border-2 border-dashed border-red-100 rounded-[2rem] p-8 flex flex-col">
                  <h3 className="text-xs font-black text-red-600 uppercase mb-4 flex items-center gap-2"><Youtube size={16} /> YouTube Links</h3>
                  <textarea value={ytLinks} onChange={e => setYtLinks(e.target.value)} placeholder="Paste links one per line..." className="flex-grow bg-white/50 border-none rounded-xl p-4 text-[10px] font-bold focus:ring-0 resize-none mb-4" />
                  <button onClick={() => {}} className="w-full bg-red-600 text-white py-3 rounded-xl font-black uppercase text-[10px]">Add Links</button>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[...categories, ...customFolders].map(folder => {
                const count = items.filter(i => i.category === folder).length;
                if (count === 0 && !customFolders.includes(folder)) return null;
                return (
                  <div key={folder} className="bg-white p-6 rounded-3xl shadow-sm border border-[#FFF8E7] flex justify-between items-center group">
                    <div className="flex items-center gap-4"><div className="w-12 h-12 bg-[#FAF8F5] rounded-xl flex items-center justify-center text-[#800000]"><Folder size={20} /></div><div><h4 className="font-black text-[#800000]">{folder}</h4><p className="text-[9px] font-bold text-slate-300 uppercase">{count} items</p></div></div>
                    <button onClick={async () => { if(window.confirm(`Clear "${folder}"?`)) { await DataService.deleteCategory(folder); refreshData(); } }} className="w-10 h-10 rounded-xl flex items-center justify-center text-slate-300 hover:text-red-600"><Trash2 size={18} /></button>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Admin;
