
import React, { useState } from 'react';
import { useImages } from '../ImageContext';
import { SERVICES } from '../constants';

const ImageCustomizer: React.FC = () => {
  const { images, updateImage, resetImage, resetAll, itGallery, schoolGallery, addToGallery, removeFromGallery } = useImages();
  const [isOpen, setIsOpen] = useState(false);
  const [isAuthorized, setIsAuthorized] = useState(false);
  const [activeTab, setActiveTab] = useState<'heroes' | 'services' | 'academic' | 'about' | 'galleries'>('heroes');
  const [passcode, setPasscode] = useState('');

  const ADMIN_PASSCODE = "eliteadmin"; // You can change this passcode

  const handleOpen = () => {
    if (isAuthorized) {
      setIsOpen(true);
    } else {
      const input = prompt("Enter Admin Passcode to edit site content:");
      if (input === ADMIN_PASSCODE) {
        setIsAuthorized(true);
        setIsOpen(true);
      } else if (input !== null) {
        alert("Access Denied: Incorrect Passcode");
      }
    }
  };

  const categories = [
    { id: 'heroes', label: 'Hero Sections', icon: '✨' },
    { id: 'services', label: 'IT Services', icon: '🛠️' },
    { id: 'academic', label: 'Academic Wing', icon: '🎓' },
    { id: 'about', label: 'About ECS', icon: '🏢' },
    { id: 'galleries', label: 'Galleries', icon: '🖼️' },
  ];

  const getImageKeys = () => {
    switch (activeTab) {
      case 'heroes':
        return [
          { key: 'welcome-bg', label: 'Main Welcome Screen Background' },
          { key: 'it-hero', label: 'IT Solutions Hero Banner' },
          { key: 'school-hero', label: 'Computer School Hero Banner' }
        ];
      case 'services':
        return SERVICES.filter(s => s.id !== 'computer-school').map(s => ({
          key: `service-${s.id}`,
          label: s.title
        }));
      case 'academic':
        return [
          { key: 'service-computer-school', label: 'Primary School Image' },
          { key: 'school-lab', label: 'Practical Lab Background' },
          { key: 'school-programs', label: 'Curriculum Showcase Image' }
        ];
      case 'about':
        return [
          { key: 'about-main', label: 'Primary About Us Image' },
          { key: 'about-side-1', label: 'Team Workspace Photo' },
          { key: 'about-side-2', label: 'Technical Setup Photo' }
        ];
      default:
        return [];
    }
  };

  return (
    <>
      <button 
        onClick={handleOpen}
        className="fixed bottom-6 left-6 z-[100] bg-white text-blue-900 border border-slate-200 px-6 py-4 rounded-2xl shadow-2xl font-black uppercase tracking-widest text-[10px] flex items-center gap-3 hover:bg-slate-50 transition-all active:scale-95 group"
      >
        <svg className="w-5 h-5 text-blue-600 group-hover:rotate-180 transition-transform duration-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" /></svg>
        Admin Manager
      </button>

      {isOpen && (
        <div className="fixed inset-0 z-[110] flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-blue-950/80 backdrop-blur-md" onClick={() => setIsOpen(false)}></div>
          <div className="relative w-full max-w-6xl bg-white rounded-[3rem] shadow-2xl flex flex-col max-h-[90vh] overflow-hidden animate-in zoom-in duration-300">
            <div className="p-8 border-b border-slate-100 flex justify-between items-center bg-slate-50/50">
              <div>
                <h2 className="text-2xl font-black uppercase tracking-tight text-blue-950 flex items-center gap-3">
                   Asset Manager
                   <span className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-[9px] font-black tracking-widest">AUTHORIZED ACCESS</span>
                </h2>
                <p className="text-[10px] font-black uppercase tracking-widest text-slate-400 mt-1">Manage global assets and gallery items</p>
              </div>
              <button onClick={() => setIsOpen(false)} className="text-slate-400 hover:text-slate-900 transition-colors bg-white p-3 rounded-2xl shadow-sm border border-slate-100">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M6 18L18 6M6 6l12 12" /></svg>
              </button>
            </div>

            <div className="flex flex-grow overflow-hidden">
               {/* Sidebar Tabs */}
               <div className="w-64 border-r border-slate-100 p-6 space-y-2 bg-slate-50/30">
                  {categories.map(cat => (
                    <button
                      key={cat.id}
                      onClick={() => setActiveTab(cat.id as any)}
                      className={`w-full text-left px-5 py-4 rounded-2xl font-black uppercase tracking-widest text-[10px] transition-all flex items-center gap-4 ${activeTab === cat.id ? 'bg-blue-600 text-white shadow-xl translate-x-2' : 'text-slate-500 hover:bg-slate-100'}`}
                    >
                      <span className="text-lg">{cat.icon}</span>
                      {cat.label}
                    </button>
                  ))}
                  <div className="pt-8 mt-8 border-t border-slate-100">
                    <button 
                      onClick={() => { if(confirm('Factory reset all custom images?')) resetAll(); }} 
                      className="w-full text-left px-5 py-4 text-red-500 font-black uppercase tracking-widest text-[9px] hover:bg-red-50 rounded-2xl transition-colors"
                    >
                      Reset All Assets
                    </button>
                  </div>
               </div>

               {/* Grid Area */}
               <div className="flex-grow overflow-y-auto p-10 custom-scrollbar bg-white">
                  {activeTab === 'galleries' ? (
                    <div className="space-y-16">
                      {/* IT Gallery Management */}
                      <section>
                        <div className="flex justify-between items-end mb-8">
                          <div>
                            <h3 className="text-xl font-black uppercase tracking-tight text-blue-950">Technical Showcase</h3>
                            <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Manage images in the Technical Gallery</p>
                          </div>
                          <label className="bg-blue-600 text-white px-6 py-3 rounded-xl font-black uppercase tracking-widest text-[9px] cursor-pointer hover:bg-blue-700 transition-all">
                            Add New Photo
                            <input type="file" className="hidden" accept="image/*" onChange={(e) => {
                              const file = e.target.files?.[0];
                              if (file) addToGallery('it', file);
                            }} />
                          </label>
                        </div>
                        <div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-5 gap-4">
                           {itGallery.map((img, i) => (
                             <div key={i} className="aspect-square relative rounded-2xl overflow-hidden group border border-slate-100">
                               <img src={img} className="w-full h-full object-cover" alt="Gallery item" />
                               <button 
                                onClick={() => removeFromGallery('it', i)}
                                className="absolute inset-0 bg-red-600/80 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity text-white text-[9px] font-black uppercase tracking-widest"
                               >
                                 Remove
                               </button>
                             </div>
                           ))}
                        </div>
                      </section>

                      {/* School Gallery Management */}
                      <section>
                        <div className="flex justify-between items-end mb-8">
                          <div>
                            <h3 className="text-xl font-black uppercase tracking-tight text-blue-950">Campus Life</h3>
                            <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Manage images in the School Gallery</p>
                          </div>
                          <label className="bg-blue-600 text-white px-6 py-3 rounded-xl font-black uppercase tracking-widest text-[9px] cursor-pointer hover:bg-blue-700 transition-all">
                            Add New Photo
                            <input type="file" className="hidden" accept="image/*" onChange={(e) => {
                              const file = e.target.files?.[0];
                              if (file) addToGallery('school', file);
                            }} />
                          </label>
                        </div>
                        <div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-5 gap-4">
                           {schoolGallery.map((img, i) => (
                             <div key={i} className="aspect-square relative rounded-2xl overflow-hidden group border border-slate-100">
                               <img src={img} className="w-full h-full object-cover" alt="Gallery item" />
                               <button 
                                onClick={() => removeFromGallery('school', i)}
                                className="absolute inset-0 bg-red-600/80 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity text-white text-[9px] font-black uppercase tracking-widest"
                               >
                                 Remove
                               </button>
                             </div>
                           ))}
                        </div>
                      </section>
                    </div>
                  ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                      {getImageKeys().map(item => (
                        <div key={item.key} className="space-y-4 group">
                          <div className="flex justify-between items-end">
                            <p className="text-[10px] font-black text-slate-800 uppercase tracking-[0.2em]">{item.label}</p>
                            <button 
                              onClick={() => resetImage(item.key)}
                              className="text-[9px] font-black text-blue-600 uppercase tracking-widest opacity-0 group-hover:opacity-100 hover:underline transition-opacity"
                            >
                              Revert Default
                            </button>
                          </div>
                          <div className="relative aspect-[16/10] rounded-[2rem] overflow-hidden group/img border-4 border-slate-100 shadow-inner bg-slate-50">
                            <img src={images[item.key]} alt={item.label} className="w-full h-full object-cover" />
                            <label className="absolute inset-0 bg-blue-950/60 backdrop-blur-sm flex flex-col items-center justify-center opacity-0 group-hover/img:opacity-100 transition-opacity cursor-pointer">
                              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center text-blue-600 mb-4 shadow-2xl scale-75 group-hover/img:scale-100 transition-transform duration-500">
                                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M4 16v1a2 2 0 002 2h12a2 2 0 002-2v-1M16 8l-4-4m0 0L8 8m4-4v12" /></svg>
                              </div>
                              <span className="text-[10px] font-black uppercase tracking-widest text-white px-4 py-2 border border-white/20 rounded-full bg-white/10">Select New Photo</span>
                              <input 
                                type="file" 
                                className="hidden" 
                                accept="image/*" 
                                onChange={(e) => {
                                  const file = e.target.files?.[0];
                                  if (file) updateImage(item.key, file);
                                }} 
                              />
                            </label>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
               </div>
            </div>

            <div className="p-8 bg-slate-50 border-t border-slate-100 flex justify-end">
               <button 
                onClick={() => setIsOpen(false)} 
                className="bg-blue-600 text-white px-10 py-5 rounded-2xl font-black uppercase tracking-widest text-xs shadow-xl shadow-blue-600/20 active:scale-95 transition-all"
               >
                 Close Manager
               </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ImageCustomizer;
