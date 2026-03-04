import React, { useState, useEffect } from 'react';
import { BRAND } from '../constants';
import Logo from './Logo';
import { useTheme } from '../ThemeContext';

interface EngineeringLayoutProps {
  children: React.ReactNode;
  currentPage: string;
  onNavigate: (path: string) => void;
  onSwitchWorld: () => void;
}

const EngineeringLayout: React.FC<EngineeringLayoutProps> = ({ children, currentPage, onNavigate, onSwitchWorld }) => {
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
    { name: 'Home', path: 'home', icon: '🏗️' },
    { name: 'Contact', path: 'contact', icon: '📞' },
    { name: 'Team', path: 'team', icon: '👥' },
    { name: 'Blog', path: 'blog', icon: '✍️' },
    { name: 'Portfolios', path: 'portfolios', icon: '💼' },
    { name: 'Store', path: 'store', icon: '🛒' },
    { name: 'Elite IT', path: '/index.html', icon: '💻', external: true },
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
              <span className="flex items-center gap-2 font-black">📞 Engineering: {BRAND.phone}</span>
              <button 
                onClick={toggleTheme}
                className="ml-4 bg-blue-950 text-white px-3 py-1 rounded-full text-[8px] hover:bg-blue-800 transition-all font-black uppercase tracking-widest shadow-sm"
              >
                {theme === 'light' ? '🌙 Dark Mode' : '☀️ Light Mode'}
              </button>
            </div>
            <button 
              onClick={() => onSwitchWorld()} 
              className="bg-blue-950 text-white px-4 py-1.5 rounded-full hover:bg-blue-800 transition-all font-black uppercase tracking-widest text-[9px] flex items-center gap-2"
            >
              Back to Welcome
            </button>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 h-16 sm:h-20 flex justify-between items-center text-white">
          <div className="flex items-center cursor-pointer group" onClick={() => handleLinkClick('home')}>
            <Logo className="w-10 h-10 sm:w-12 sm:h-12 mr-3 transition-transform group-hover:scale-110" />
            <div className="flex flex-col">
              <span className="text-lg font-black text-white uppercase tracking-tighter leading-none">Elite Engineering</span>
              <span className="text-[8px] sm:text-[9px] font-bold text-blue-400 uppercase tracking-[0.2em]">Systems & Build</span>
            </div>
          </div>

          <div className="hidden lg:flex items-center space-x-1">
            {links.map(l => {
              if (l.external) {
                return (
                  <a
                    key={l.name}
                    href={l.path}
                    className="px-4 py-2 text-[10px] font-black uppercase tracking-widest rounded-xl transition-all text-blue-100 hover:bg-white/10"
                  >
                    {l.name}
                  </a>
                );
              }
              return (
                <button 
                  key={l.path} 
                  onClick={() => handleLinkClick(l.path)} 
                  className={`px-4 py-2 text-[10px] font-black uppercase tracking-widest rounded-xl transition-all ${
                    currentPage === l.path ? 'bg-yellow-400 text-blue-950 shadow-lg' : 'text-blue-100 hover:bg-white/10'
                  }`}
                >
                  {l.name}
                </button>
              );
            })}
            <div className="h-6 w-px bg-white/10 mx-4"></div>
          </div>

          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 hover:bg-white/10 rounded-xl transition-all"
          >
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'} />
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        <div className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-screen' : 'max-h-0'}`}>
          <div className="bg-blue-900 border-t border-blue-800 max-h-screen overflow-y-auto">
            <div className="px-6 py-6 space-y-1 flex flex-col">
              {links.map(l => (
                l.external ? (
                  <a
                    key={l.name}
                    href={l.path}
                    className="flex items-center w-full p-5 rounded-[2rem] transition-all active:scale-95 group text-blue-100 hover:bg-blue-800"
                  >
                    <span className="text-2xl mr-6 transition-transform group-hover:scale-110">{l.icon}</span>
                    <span className="font-black uppercase tracking-widest text-xs">{l.name}</span>
                  </a>
                ) : (
                  <button 
                    key={l.path}
                    onClick={() => handleLinkClick(l.path)} 
                    className={`flex items-center w-full p-5 rounded-[2rem] transition-all active:scale-95 group ${currentPage === l.path ? 'bg-yellow-400 text-blue-950 shadow-xl' : 'text-blue-100 hover:bg-blue-800'}`}
                  >
                    <span className="text-2xl mr-6 transition-transform group-hover:scale-110">{l.icon}</span>
                    <span className="font-black uppercase tracking-widest text-xs">{l.name}</span>
                  </button>
                )
              ))}
            </div>

            <div className="p-8 border-t border-blue-800 mt-auto space-y-6 bg-blue-950/50">
              <button 
                onClick={() => onSwitchWorld()} 
                className="w-full flex flex-col items-center gap-3 p-8 bg-yellow-400 hover:bg-yellow-300 text-blue-950 rounded-[2.5rem] transition-all shadow-2xl group active:scale-95 font-black"
              >
                <span className="text-[10px] uppercase tracking-widest opacity-50">Transfer to</span>
                <span className="uppercase tracking-tight text-base flex items-center gap-3">
                  Back to Welcome
                </span>
              </button>
              <p className="text-[8px] text-center font-black uppercase tracking-widest text-blue-400 italic">Engineering Excellence</p>
            </div>
          </div>
        </div>
      </nav>

      <main className="flex-grow dark:bg-slate-950 transition-colors duration-300">{children}</main>

      <footer className="bg-blue-950 dark:bg-black text-white pt-24 pb-12 sm:pb-24 px-6 sm:px-8 border-t border-white/5 pb-safe-bottom">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-20 text-center md:text-left">
          <div className="lg:col-span-1">
            <h4 className="font-black uppercase tracking-tighter text-2xl mb-6">Elite Engineering</h4>
            <p className="text-blue-100/60 text-base leading-relaxed mb-8 max-w-sm font-medium">Building and restoring with precision engineering and professional craftsmanship.</p>
            <div className="flex gap-4 justify-center md:justify-start">
              {['fb', 'tw', 'ln'].map(s => <div key={s} className="w-11 h-11 bg-white/5 rounded-2xl flex items-center justify-center hover:bg-yellow-400 transition-all cursor-pointer font-black text-xs uppercase shadow-sm text-blue-950">{s}</div>)}
            </div>
          </div>
          <div>
            <h4 className="font-black uppercase tracking-widest text-[10px] mb-8 text-yellow-400">Engineering Division</h4>
            <ul className="space-y-4 text-blue-100/60 text-[10px] font-black uppercase tracking-widest">
              <li><button onClick={() => handleLinkClick('home')} className="hover:text-yellow-400 cursor-pointer transition-colors active:scale-95">Our Services</button></li>
              <li><button onClick={() => handleLinkClick('portfolios')} className="hover:text-yellow-400 cursor-pointer transition-colors active:scale-95">Projects</button></li>
              <li><button onClick={() => handleLinkClick('team')} className="hover:text-yellow-400 cursor-pointer transition-colors active:scale-95">Our Team</button></li>
              <li><a href="/" className="hover:text-yellow-400 cursor-pointer transition-colors">Back to Main</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-black uppercase tracking-widest text-[10px] mb-8 text-yellow-400">Company Links</h4>
            <ul className="space-y-4 text-blue-100/60 text-[10px] font-black uppercase tracking-widest">
              <li><button onClick={() => handleLinkClick('blog')} className="hover:text-yellow-400 transition-colors">Blog</button></li>
              <li><button onClick={() => handleLinkClick('contact')} className="hover:text-yellow-400 transition-colors">Request Quote</button></li>
              <li><a href="/index.html" className="hover:text-yellow-400 transition-colors">IT Services</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-black uppercase tracking-widest text-[10px] mb-8 text-yellow-400">Service Hours</h4>
            <div className="space-y-4">
              <p className="text-blue-200 text-[9px] font-black uppercase tracking-widest mb-1">Mon - Sat</p>
              <p className="text-xl font-black text-yellow-400 tracking-tighter">{BRAND.hours}</p>
              <p className="text-blue-200/60 text-[10px] font-bold mt-6 leading-tight italic max-w-xs mx-auto md:mx-0">"Engineering Solutions with Precision Craftsmanship."</p>
            </div>
          </div>
        </div>
        <div className="max-w-7xl mx-auto pt-10 border-t border-white/5 text-center">
          <p className="text-[10px] font-black uppercase tracking-widest text-blue-400">
            © 2026 Elite Computer Services. Engineering Excellence Division.
          </p>
        </div>
      </footer>
    </>
  );
};

export default EngineeringLayout;
