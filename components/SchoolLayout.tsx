
import React, { useState, useEffect } from 'react';
import { BRAND } from '../constants';
import Logo from './Logo';
import { useTheme } from '../ThemeContext';

interface SchoolLayoutProps {
  children: React.ReactNode;
  currentPage: string;
  onNavigate: (path: string) => void;
  onSwitchWorld: () => void;
}

const SchoolLayout: React.FC<SchoolLayoutProps> = ({ children, currentPage, onNavigate, onSwitchWorld }) => {
  const [isOpen, setIsOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();
  
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => { document.body.style.overflow = 'unset'; };
  }, [isOpen]);

  const links = [
    { name: 'Home', path: 'home', icon: '🏠' },
    { name: 'About E.C.L', path: 'about', icon: '🎓' },
    { name: 'Programs', path: 'programs', icon: '📚' },
    { name: 'Admissions', path: 'admissions', icon: '📝' },
    { name: 'FAQs', path: 'faq', icon: '❓' },
    { name: 'Contact', path: 'contact', icon: '📬' },
  ];

  const handleLinkClick = (path: string) => {
    onNavigate(path);
    setIsOpen(false);
  };

  return (
    <>
      <nav className="sticky top-0 z-[100] bg-blue-950 border-b border-blue-900 shadow-2xl transition-colors duration-300 pt-safe-top">
        <div className="bg-yellow-400 text-blue-950 py-2 px-6 text-[10px] font-black uppercase tracking-widest hidden lg:block">
          <div className="max-w-7xl mx-auto flex justify-between items-center">
            <div className="flex space-x-6 items-center">
              <span className="flex items-center gap-2">📍 {BRAND.address}</span>
              <span className="flex items-center gap-2 font-black">📞 Enrollment: {BRAND.phone}</span>
              <button 
                onClick={toggleTheme}
                className="ml-4 bg-blue-950 text-white px-3 py-1 rounded-full text-[8px] hover:bg-blue-800 transition-all font-black uppercase tracking-widest shadow-sm"
              >
                {theme === 'light' ? '🌙 Dark Mode' : '☀️ Light Mode'}
              </button>
            </div>
            <button 
              onClick={() => { handleLinkClick('home'); onSwitchWorld(); }} 
              className="bg-blue-950 text-white px-4 py-1.5 rounded-full hover:bg-blue-800 transition-all font-black uppercase tracking-widest text-[9px] flex items-center gap-2"
            >
              Go to IT Services <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M13 7l5 5m0 0l-5 5m5-5H6" /></svg>
            </button>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 h-16 sm:h-20 flex justify-between items-center text-white">
          <div className="flex items-center cursor-pointer group" onClick={() => handleLinkClick('home')}>
            <Logo className="w-10 h-10 sm:w-12 sm:h-12 mr-3 transition-transform group-hover:scale-110" />
            <div className="flex flex-col">
              <span className="text-lg font-black text-white uppercase tracking-tighter leading-none">E.C.L School</span>
              <span className="text-[8px] sm:text-[9px] font-bold text-blue-400 uppercase tracking-[0.2em]">Academic Excellence</span>
            </div>
          </div>

          <div className="hidden lg:flex items-center space-x-1">
            {links.map(l => (
              <button 
                key={l.path} 
                onClick={() => handleLinkClick(l.path)} 
                className={`px-4 py-2 text-[10px] font-black uppercase tracking-widest rounded-xl transition-all ${
                  currentPage === l.path ? 'bg-yellow-400 text-blue-950 shadow-lg' : 'text-blue-100 hover:bg-white/10'
                }`}
              >
                {l.name}
              </button>
            ))}
            <div className="h-6 w-px bg-white/10 mx-4"></div>
            <button onClick={() => { handleLinkClick('home'); onSwitchWorld(); }} className="px-5 py-2.5 bg-blue-600 hover:bg-blue-700 text-white text-[10px] font-black uppercase tracking-widest rounded-xl shadow-lg transition-all active:scale-95">
              IT Services
            </button>
          </div>

          <div className="flex items-center gap-2 lg:hidden">
            <button onClick={toggleTheme} className="p-3 text-yellow-400 hover:bg-white/10 rounded-xl transition-colors min-w-[44px] min-h-[44px]">
              {theme === 'light' ? '🌙' : '☀️'}
            </button>
            <button 
              className="p-3 text-yellow-400 hover:bg-white/5 rounded-xl transition-colors relative z-[110] active:scale-90 min-w-[44px] min-h-[44px]" 
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle Menu"
            >
              <div className="w-7 h-5 relative flex flex-col justify-between">
                <span className={`w-full h-0.5 bg-current rounded-full transition-all duration-300 transform ${isOpen ? 'rotate-45 translate-y-[9px]' : ''}`}></span>
                <span className={`w-full h-0.5 bg-current rounded-full transition-all duration-300 ${isOpen ? 'opacity-0' : ''}`}></span>
                <span className={`w-full h-0.5 bg-current rounded-full transition-all duration-300 transform ${isOpen ? '-rotate-45 -translate-y-[9px]' : ''}`}></span>
              </div>
            </button>
          </div>
        </div>

        <div 
          className={`fixed inset-0 bg-blue-950/90 backdrop-blur-md z-[90] transition-opacity duration-500 lg:hidden ${isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
          onClick={() => setIsOpen(false)}
        ></div>

        <div 
          className={`fixed right-0 top-0 h-full w-[85%] max-w-[340px] bg-blue-900 z-[101] shadow-2xl lg:hidden transform transition-transform duration-500 cubic-bezier(0.16, 1, 0.3, 1) flex flex-col pt-safe-top pb-safe-bottom ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}
        >
          <div className="p-8 sm:p-10 border-b border-white/5 bg-blue-950">
             <div className="flex items-center">
                <Logo className="w-14 h-14 mr-4" />
                <div className="flex flex-col">
                  <span className="text-2xl font-black text-white uppercase leading-none tracking-tighter">E.C.L School</span>
                  <span className="text-[10px] font-bold text-blue-300 uppercase tracking-widest">Academic Hub</span>
                </div>
             </div>
          </div>

          <div className="flex-grow min-h-0 py-8 px-4 sm:px-6 space-y-2 overflow-y-auto custom-scrollbar">
            <p className="px-6 text-[10px] font-black uppercase tracking-[0.4em] text-blue-400 mb-6">Course Directory</p>
            {links.map(l => (
              <button 
                key={l.path}
                onClick={() => handleLinkClick(l.path)} 
                className={`flex items-center w-full p-5 rounded-[2.5rem] transition-all group active:scale-95 ${currentPage === l.path ? 'bg-yellow-400 text-blue-950 shadow-2xl' : 'text-blue-100 hover:bg-white/5'}`}
              >
                <span className="text-3xl mr-6 group-hover:scale-110 transition-transform">{l.icon}</span>
                <span className="font-black uppercase tracking-widest text-xs">{l.name}</span>
              </button>
            ))}
          </div>

          <div className="p-8 bg-blue-950 border-t border-white/5 mt-auto space-y-6">
             <button 
                onClick={() => { handleLinkClick('home'); onSwitchWorld(); }} 
                className="w-full flex flex-col items-center gap-3 p-8 bg-blue-600 hover:bg-blue-700 text-white rounded-[2.5rem] transition-all shadow-2xl active:scale-95 group"
             >
                <span className="text-[10px] font-black uppercase tracking-widest opacity-60">IT Support Wing</span>
                <span className="font-black uppercase tracking-tight text-base flex items-center gap-3">
                   IT Services <svg className="w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M13 7l5 5m0 0l-5 5m5-5H6" /></svg>
                </span>
             </button>
             <p className="text-[9px] text-center font-black uppercase tracking-[0.3em] text-blue-500/50 italic">Solid Foundation • Greater Result</p>
          </div>
        </div>
      </nav>

      <main className="flex-grow bg-slate-50 dark:bg-slate-950 transition-colors duration-300 overflow-x-hidden">{children}</main>

      <footer className="bg-blue-950 dark:bg-black text-white pt-24 pb-12 px-4 border-t-8 border-yellow-400 pb-safe-bottom">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-20 text-center md:text-left">
          <div className="lg:col-span-1">
            <h4 className="font-black uppercase tracking-tighter text-3xl mb-6 text-yellow-400">Elite Computer School</h4>
            <p className="text-blue-100/60 text-lg leading-relaxed mb-8 max-w-md font-medium">
              {BRAND.motto}
            </p>
            <div className="flex space-x-4 justify-center md:justify-start">
               {['fb', 'tw', 'ln'].map(s => <div key={s} className="w-12 h-12 bg-white/5 rounded-2xl border border-white/10 flex items-center justify-center hover:bg-yellow-400 hover:text-blue-950 cursor-pointer transition-all uppercase font-black text-[10px] shadow-sm">{s}</div>)}
            </div>
          </div>

          <div>
            <h4 className="font-bold uppercase tracking-widest text-[10px] mb-8 text-blue-400">Quick link</h4>
            <ul className="space-y-4 text-blue-100/60 text-[10px] font-black uppercase tracking-widest">
              <li><button onClick={() => handleLinkClick('home')} className="hover:text-yellow-400 transition-colors active:scale-95">Home</button></li>
              <li><button onClick={() => handleLinkClick('about')} className="hover:text-yellow-400 transition-colors active:scale-95">About Us</button></li>
              <li><button onClick={() => handleLinkClick('admissions')} className="hover:text-yellow-400 transition-colors active:scale-95">Admission</button></li>
              <li><button onClick={() => handleLinkClick('contact')} className="hover:text-yellow-400 transition-colors active:scale-95">Contact</button></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold uppercase tracking-widest text-[10px] mb-8 text-blue-400">Academic Hours</h4>
            <ul className="space-y-4 text-blue-100/60 text-[10px] font-black uppercase tracking-widest">
              <li className="flex flex-col gap-1">
                 <span className="text-white">Monday - Friday</span>
                 <span className="text-yellow-400 font-black">{BRAND.hours}</span>
              </li>
              <li className="flex flex-col gap-1">
                 <span className="text-white">Saturday Sessions</span>
                 <span className="text-yellow-400 font-black">10:00 - 15:00</span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold uppercase tracking-widest text-[10px] mb-8 text-blue-400">Get in touch</h4>
            <div className="space-y-6 text-blue-100/60 text-[10px] font-black uppercase tracking-widest">
              <div className="flex flex-col gap-1">
                <span className="text-[8px] text-white/30">CAMPUS ADDRESS</span>
                <p className="leading-relaxed">{BRAND.address}</p>
              </div>
              <div className="flex flex-col gap-1">
                <span className="text-[8px] text-white/30">ENROLLMENT LINE</span>
                <a href={`tel:${BRAND.phone.replace(/\D/g, '')}`} className="text-yellow-400 text-lg font-black tracking-normal hover:text-white transition-colors">{BRAND.phone}</a>
              </div>
              <div className="flex flex-col gap-1">
                <span className="text-[8px] text-white/30">EMAIL SUPPORT</span>
                <a href={`mailto:${BRAND.email}`} className="hover:text-yellow-400 transition-colors break-all">{BRAND.email}</a>
              </div>
            </div>
          </div>
        </div>
        <div className="max-w-7xl mx-auto pt-12 border-t border-white/5 text-center">
           <p className="text-[10px] font-black uppercase tracking-widest text-white/20">
              Copyright © 2026 elitescomputerliteracy.com.
           </p>
        </div>
      </footer>
    </>
  );
};

export default SchoolLayout;
