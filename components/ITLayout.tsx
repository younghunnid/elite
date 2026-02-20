
import React, { useState, useEffect, useRef } from 'react';
import { BRAND, SERVICES } from '../constants';
import Logo from './Logo';
import { useTheme } from '../ThemeContext';

interface ITLayoutProps {
  children: React.ReactNode;
  currentPage: string;
  onNavigate: (path: string) => void;
  onSwitchWorld: () => void;
}

const ITLayout: React.FC<ITLayoutProps> = ({ children, currentPage, onNavigate, onSwitchWorld }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const dropdownRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => { document.body.style.overflow = 'unset'; };
  }, [isOpen]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsServicesOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const links = [
    { name: 'Home', path: 'home', icon: '🏢' },
    { name: 'About', path: 'about', icon: 'ℹ️' },
    { name: 'Services', path: 'services', icon: '🛠️' },
    { name: 'Store', path: 'store', icon: '🛒' },
    { name: 'Portfolios', path: 'portfolios', icon: '💼' },
    { name: 'Team', path: 'team', icon: '👥' },
    { name: 'Blog', path: 'blog', icon: '✍️' },
    { name: 'Contact', path: 'contact', icon: '📞' },
  ];

  const handleLinkClick = (path: string) => {
    onNavigate(path);
    setIsOpen(false);
    setIsServicesOpen(false);
  };

  const getServiceIcon = (id: string) => {
    switch(id) {
      case 'computer-school': return '🎓';
      case 'computer-repair': return '🛠️';
      case 'custom-built': return '🖥️';
      case 'mobile-repair': return '📱';
      case 'data-recovery': return '💾';
      case 'industrial-laser-printing': return '🖨️';
      default: return '📄';
    }
  };

  return (
    <>
      <nav className="sticky top-0 z-[100] bg-white/95 dark:bg-slate-900/95 backdrop-blur-lg border-b border-slate-200 dark:border-white/10 shadow-sm transition-colors duration-300 pt-safe-top">
        <div className="bg-blue-900 text-white py-2 px-6 text-[9px] uppercase tracking-[0.2em] hidden lg:block">
          <div className="max-w-7xl mx-auto flex justify-between font-black items-center">
            <span>Enterprise IT Support | {BRAND.phone}</span>
            <div className="flex items-center gap-6">
              <button onClick={toggleTheme} className="hover:text-yellow-400 transition-all font-black">{theme === 'light' ? '🌙 Dark Mode' : '☀️ Light Mode'}</button>
              <button onClick={() => { handleLinkClick('home'); onSwitchWorld(); }} className="text-yellow-400 hover:text-white transition-all font-black">Go to Academic Wing &rarr;</button>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 h-16 sm:h-20 flex justify-between items-center">
          <div className="flex items-center cursor-pointer group" onClick={() => handleLinkClick('home')}>
            <Logo className="w-10 h-10 sm:w-12 sm:h-12 mr-3 transition-transform group-hover:scale-105" />
            <div className="flex flex-col">
              <span className="text-sm sm:text-base font-black text-blue-950 dark:text-white uppercase leading-none tracking-tight">Elite IT</span>
              <span className="text-[7px] sm:text-[9px] font-bold text-slate-500 uppercase tracking-widest">Solutions & Repair</span>
            </div>
          </div>

          <div className="hidden lg:flex items-center space-x-1">
            {links.map(l => {
              if (l.path === 'services') {
                return (
                  <div key={l.path} className="relative" ref={dropdownRef}>
                    <button
                      onClick={() => setIsServicesOpen(!isServicesOpen)}
                      className={`px-4 py-2.5 text-[10px] font-black uppercase tracking-widest rounded-xl transition-all flex items-center gap-2 ${
                        (currentPage === l.path || isServicesOpen) ? 'bg-blue-600 text-white shadow-lg' : 'text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-white/5'
                      }`}
                    >
                      {l.name}
                      <svg className={`w-3 h-3 transition-transform ${isServicesOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M19 9l-7 7-7-7" /></svg>
                    </button>

                    <div className={`absolute top-full right-0 mt-3 w-80 bg-white dark:bg-slate-800 border border-slate-100 dark:border-white/10 rounded-3xl shadow-2xl p-4 transition-all duration-300 transform origin-top-right ${isServicesOpen ? 'opacity-100 scale-100' : 'opacity-0 scale-95 pointer-events-none'}`}>
                      <div className="max-h-[60vh] overflow-y-auto custom-scrollbar">
                        {SERVICES.slice(1).map(service => (
                          <button 
                            key={service.id}
                            onClick={() => {
                              handleLinkClick('services');
                              setTimeout(() => {
                                const el = document.getElementById(service.id);
                                if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
                              }, 100);
                            }}
                            className="w-full text-left px-5 py-4 text-xs font-black uppercase tracking-widest text-slate-700 dark:text-slate-300 hover:bg-blue-50 dark:hover:bg-white/5 hover:text-blue-600 dark:hover:text-blue-400 transition-all flex items-center gap-4 group/item rounded-2xl"
                          >
                            <span className="w-10 h-10 bg-slate-100 dark:bg-slate-700 rounded-xl flex items-center justify-center text-lg group-hover/item:bg-blue-600 group-hover/item:text-white transition-colors duration-300">
                              {getServiceIcon(service.id)}
                            </span>
                            <div className="flex flex-col">
                              <span>{service.title}</span>
                              <span className="text-[8px] font-bold text-slate-400 opacity-0 group-hover/item:opacity-100 transition-opacity">Technical Solution</span>
                            </div>
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>
                );
              }
              return (
                <button 
                  key={l.path} 
                  onClick={() => handleLinkClick(l.path)} 
                  className={`px-4 py-2.5 text-[10px] font-black uppercase tracking-widest rounded-xl transition-all ${currentPage === l.path ? 'bg-blue-600 text-white shadow-lg' : 'text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-white/5'}`}
                >
                  {l.name}
                </button>
              );
            })}
            <div className="h-6 w-px bg-slate-200 dark:bg-white/10 mx-4"></div>
            <button onClick={() => { handleLinkClick('home'); onSwitchWorld(); }} className="px-6 py-2.5 bg-blue-950 hover:bg-blue-800 text-white text-[10px] font-black uppercase tracking-widest rounded-xl shadow-lg active:scale-95 transition-all">
              Academic Wing
            </button>
          </div>

          <div className="flex lg:hidden items-center gap-1 sm:gap-2">
            <button onClick={toggleTheme} className="p-3 text-blue-900 dark:text-white hover:bg-slate-100 dark:hover:bg-white/5 rounded-xl transition-colors min-w-[44px] min-h-[44px]">
              {theme === 'light' ? '🌙' : '☀️'}
            </button>
            <button 
              className="p-3 text-blue-950 dark:text-white hover:bg-slate-100 dark:hover:bg-white/5 rounded-xl transition-colors relative z-[110] active:scale-90 min-w-[44px] min-h-[44px]" 
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle Menu"
            >
              <div className="w-6 h-5 relative flex flex-col justify-between">
                <span className={`w-full h-0.5 bg-current rounded-full transition-all duration-300 transform ${isOpen ? 'rotate-45 translate-y-[9px]' : ''}`}></span>
                <span className={`w-full h-0.5 bg-current rounded-full transition-all duration-300 ${isOpen ? 'opacity-0' : ''}`}></span>
                <span className={`w-full h-0.5 bg-current rounded-full transition-all duration-300 transform ${isOpen ? '-rotate-45 -translate-y-[9px]' : ''}`}></span>
              </div>
            </button>
          </div>
        </div>

        <div 
          className={`fixed inset-0 bg-slate-950/80 backdrop-blur-md z-[90] transition-opacity duration-500 lg:hidden ${isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
          onClick={() => setIsOpen(false)}
        ></div>

        <div 
          className={`fixed right-0 top-0 h-full w-[85%] max-w-[340px] bg-white dark:bg-slate-900 z-[101] shadow-2xl lg:hidden transform transition-transform duration-500 cubic-bezier(0.16, 1, 0.3, 1) flex flex-col pt-safe-top pb-safe-bottom ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}
        >
          <div className="p-8 sm:p-10 border-b border-slate-100 dark:border-white/5 flex items-center">
            <Logo className="w-12 h-12 mr-4" />
            <div className="flex flex-col">
              <span className="text-xl font-black text-blue-950 dark:text-white uppercase leading-none tracking-tighter">Elite IT</span>
              <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Solutions</span>
            </div>
          </div>

          <div className="flex-grow min-h-0 py-8 px-4 sm:px-6 space-y-1.5 overflow-y-auto custom-scrollbar">
            <p className="px-5 text-[10px] font-black uppercase tracking-[0.4em] text-slate-400 mb-6">Directory</p>
            {links.map(l => (
              <div key={l.path}>
                <button 
                  onClick={() => {
                    if (l.path === 'services') {
                      setIsServicesOpen(!isServicesOpen);
                    } else {
                      handleLinkClick(l.path);
                    }
                  }} 
                  className={`flex items-center w-full p-5 rounded-[2rem] transition-all active:scale-95 group ${currentPage === l.path ? 'bg-blue-600 text-white shadow-xl shadow-blue-600/30' : 'text-slate-800 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-white/5'}`}
                >
                  <span className="text-2xl mr-6 transition-transform group-hover:scale-110">{l.icon}</span>
                  <span className="font-black uppercase tracking-widest text-xs">{l.name}</span>
                  {l.path === 'services' && (
                    <svg className={`ml-auto w-4 h-4 transition-transform duration-300 ${isServicesOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M19 9l-7 7-7-7" /></svg>
                  )}
                </button>
                
                {l.path === 'services' && (
                  <div className={`pl-12 space-y-1 overflow-hidden transition-all ease-in-out duration-500 ${isServicesOpen ? 'max-h-96 mt-2 mb-4' : 'max-h-0'}`}>
                    {SERVICES.slice(1).map(s => (
                      <button
                        key={s.id}
                        onClick={() => {
                          handleLinkClick('services');
                          setTimeout(() => {
                            const el = document.getElementById(s.id);
                            if (el) el.scrollIntoView({ behavior: 'smooth' });
                          }, 300);
                        }}
                        className="flex items-center w-full p-3.5 rounded-xl text-slate-500 dark:text-slate-400 hover:text-blue-600 text-[10px] font-black uppercase tracking-widest text-left"
                      >
                        <span className="mr-3">{getServiceIcon(s.id)}</span>
                        {s.title}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="p-8 border-t border-slate-100 dark:border-white/5 mt-auto space-y-6 bg-slate-50/50 dark:bg-black/20">
             <button 
                onClick={() => { handleLinkClick('home'); onSwitchWorld(); }} 
                className="w-full flex flex-col items-center gap-3 p-8 bg-blue-950 hover:bg-blue-900 text-white rounded-[2.5rem] transition-all shadow-2xl group active:scale-95"
             >
                <span className="text-[10px] font-black uppercase tracking-widest opacity-50">Transfer to</span>
                <span className="font-black uppercase tracking-tight text-base flex items-center gap-3">
                   Academic Wing &rarr;
                </span>
             </button>
             <p className="text-[8px] text-center font-black uppercase tracking-widest text-slate-400 italic">Trusted Tech Excellence</p>
          </div>
        </div>
      </nav>

      <main className="flex-grow dark:bg-slate-950 transition-colors duration-300">{children}</main>

      <footer className="bg-slate-900 dark:bg-black text-white pt-24 pb-12 sm:pb-24 px-6 sm:px-8 border-t border-white/5 pb-safe-bottom">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-20 text-center md:text-left">
          <div className="lg:col-span-1">
            <h4 className="font-black uppercase tracking-tighter text-2xl mb-6">Elite IT Services</h4>
            <p className="text-slate-400 text-base leading-relaxed mb-8 max-w-sm font-medium">Helping you build a solid foundation for a greater technological future.</p>
            <div className="flex gap-4 justify-center md:justify-start">
               {['fb', 'tw', 'ln'].map(s => <div key={s} className="w-11 h-11 bg-white/5 rounded-2xl flex items-center justify-center hover:bg-blue-600 transition-all cursor-pointer font-black text-xs uppercase shadow-sm">{s}</div>)}
            </div>
          </div>
          <div>
            <h4 className="font-black uppercase tracking-widest text-[10px] mb-8 text-blue-400">Technical Catalog</h4>
            <ul className="space-y-4 text-slate-400 text-[10px] font-black uppercase tracking-widest">
              {SERVICES.slice(1,6).map(s => <li key={s.id} onClick={() => handleLinkClick('services')} className="hover:text-white cursor-pointer transition-colors active:scale-95">{s.title}</li>)}
            </ul>
          </div>
          <div>
            <h4 className="font-black uppercase tracking-widest text-[10px] mb-8 text-blue-400">Company Access</h4>
            <ul className="space-y-4 text-slate-400 text-[10px] font-black uppercase tracking-widest">
              <li><button onClick={() => handleLinkClick('about')} className="hover:text-white">Our Story</button></li>
              <li><button onClick={() => handleLinkClick('blog')} className="hover:text-white">Insights & News</button></li>
              <li><button onClick={() => handleLinkClick('team')} className="hover:text-white">Expert Team</button></li>
              <li><button onClick={() => handleLinkClick('contact')} className="hover:text-white">Request Quote</button></li>
            </ul>
          </div>
          <div>
             <h4 className="font-black uppercase tracking-widest text-[10px] mb-8 text-blue-400">Service Hours</h4>
             <div className="space-y-4">
                <p className="text-slate-500 text-[9px] font-black uppercase tracking-widest mb-1">Mon - Sat</p>
                <p className="text-xl font-black text-yellow-400 tracking-tighter">{BRAND.hours}</p>
                <p className="text-slate-600 text-[10px] font-bold mt-6 leading-tight italic max-w-xs mx-auto md:mx-0">"Providing the utmost quality in consumer electronics and technical training."</p>
             </div>
          </div>
        </div>
        <div className="max-w-7xl mx-auto pt-10 border-t border-white/5 text-center">
           <p className="text-[10px] font-black uppercase tracking-widest text-slate-600">
              © 2026 Elite Computer Services. Professional IT Force.
           </p>
        </div>
      </footer>
    </>
  );
};

export default ITLayout;
