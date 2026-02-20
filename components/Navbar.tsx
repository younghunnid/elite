
import React, { useState, useEffect, useRef } from 'react';
import { BRAND, SERVICES } from '../constants';
import Logo from './Logo';

interface NavbarProps {
  currentPath: string;
  onNavigate: (path: string) => void;
}

const Navbar: React.FC<NavbarProps> = ({ currentPath, onNavigate }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Prevent scrolling when mobile menu is active
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => { document.body.style.overflow = 'unset'; };
  }, [isOpen]);

  // Close dropdown on click outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsServicesOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const mainLinks = [
    { name: 'Home', path: 'home', icon: '🏠' },
    { name: 'About', path: 'about', icon: 'ℹ️' },
    { name: 'School', path: 'school', icon: '🎓' },
    { name: 'Services', path: 'services', icon: '🛠️' },
    { name: 'Portfolios', path: 'portfolios', icon: '💼' },
    { name: 'Store', path: 'store', icon: '🛒' },
    { name: 'Blog', path: 'blog', icon: '✍️' },
    { name: 'Contact', path: 'contact', icon: '📞' },
  ];

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
    <nav className="sticky top-0 z-50 bg-white border-b border-slate-200 shadow-sm">
      {/* Top bar for Contact Info - only on desktop */}
      <div className="bg-blue-900 text-white py-1.5 px-4 text-[10px] uppercase tracking-widest hidden lg:block">
        <div className="max-w-7xl mx-auto flex justify-between font-bold">
          <div className="flex space-x-6">
            <span className="flex items-center"><span className="mr-2">📞</span> {BRAND.phone}</span>
            <span className="flex items-center"><span className="mr-2">📍</span> {BRAND.address}</span>
          </div>
          <div className="italic text-yellow-400">"{BRAND.motto}"</div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 sm:h-20 items-center">
          {/* Logo Section */}
          <div 
            className="flex-shrink-0 flex items-center cursor-pointer py-2 max-w-[85%] sm:max-w-none group"
            onClick={() => onNavigate('home')}
          >
            <Logo className="w-10 h-10 sm:w-14 sm:h-14 mr-2 sm:mr-3 flex-shrink-0 transition-transform group-hover:scale-105" />
            <div className="flex flex-col min-w-0">
              <span className="text-[10px] xs:text-[11px] sm:text-base font-black text-blue-950 leading-tight uppercase truncate">
                Elite<span className="text-blue-600 ml-1">Computer Services</span>
              </span>
              <span className="text-[7px] sm:text-[9px] tracking-widest text-slate-500 font-black uppercase truncate">Professional IT Solutions</span>
            </div>
          </div>

          {/* Desktop Nav */}
          <div className="hidden lg:flex space-x-1 items-center">
            {mainLinks.map((link) => {
              if (link.path === 'services') {
                return (
                  <div key={link.path} className="relative" ref={dropdownRef}>
                    <button
                      onClick={() => setIsServicesOpen(!isServicesOpen)}
                      className={`text-[9px] uppercase tracking-widest font-black px-3 py-2 transition-all rounded-lg flex items-center gap-1 ${
                        currentPath === link.path ? 'text-white bg-blue-600 shadow-md' : 'text-slate-600 hover:text-blue-600 hover:bg-slate-50'
                      }`}
                    >
                      {link.name}
                      <svg className={`w-3 h-3 transition-transform ${isServicesOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" /></svg>
                    </button>

                    {/* Services Dropdown Menu */}
                    <div className={`absolute top-full left-0 mt-2 w-72 bg-white border border-slate-100 rounded-2xl shadow-2xl py-4 transition-all duration-300 transform origin-top-left ${isServicesOpen ? 'opacity-100 scale-100 translate-y-0' : 'opacity-0 scale-95 -translate-y-2 pointer-events-none'}`}>
                      <div className="px-5 mb-3 border-b border-slate-50 pb-2">
                        <p className="text-[8px] font-black uppercase tracking-widest text-blue-600">IT Solutions Ecosystem</p>
                      </div>
                      <div className="max-h-[60vh] overflow-y-auto custom-scrollbar">
                        {SERVICES.map(service => (
                          <button 
                            key={service.id}
                            onClick={() => {
                              onNavigate('services');
                              setIsServicesOpen(false);
                              setTimeout(() => {
                                const el = document.getElementById(service.id);
                                if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
                              }, 100);
                            }}
                            className="w-full text-left px-5 py-3.5 text-[10px] font-black uppercase tracking-widest text-slate-700 hover:bg-blue-50 hover:text-blue-600 transition-all flex items-center gap-4 group/item"
                          >
                            <span className="w-8 h-8 bg-slate-50 rounded-lg flex items-center justify-center text-base group-hover/item:bg-blue-100 transition-colors">
                              {getServiceIcon(service.id)}
                            </span>
                            <div className="flex flex-col">
                              <span>{service.title}</span>
                              <span className="text-[7px] font-bold text-slate-400 opacity-0 group-hover/item:opacity-100 transition-opacity">Professional Support</span>
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
                  key={link.name}
                  onClick={() => onNavigate(link.path)}
                  className={`text-[9px] uppercase tracking-widest font-black px-3 py-2 transition-all rounded-lg ${
                    currentPath === link.path ? 'text-white bg-blue-600 shadow-md' : 'text-slate-600 hover:text-blue-600 hover:bg-slate-50'
                  }`}
                >
                  {link.name}
                </button>
              );
            })}
          </div>

          {/* Mobile Menu Toggle */}
          <div className="lg:hidden flex items-center">
            <button 
              onClick={() => setIsOpen(!isOpen)} 
              className="text-blue-900 p-2 hover:bg-slate-50 rounded-xl transition-colors relative z-[70] active:scale-90"
              aria-label="Toggle menu"
            >
              <div className="w-6 h-5 relative flex flex-col justify-between items-center">
                <span className={`w-full h-0.5 bg-current rounded-full transition-all duration-300 transform ${isOpen ? 'rotate-45 translate-y-[9px]' : ''}`}></span>
                <span className={`w-full h-0.5 bg-current rounded-full transition-all duration-300 ${isOpen ? 'opacity-0' : ''}`}></span>
                <span className={`w-full h-0.5 bg-current rounded-full transition-all duration-300 transform ${isOpen ? '-rotate-45 -translate-y-[9px]' : ''}`}></span>
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* Overlay for Mobile Menu */}
      <div 
        className={`fixed inset-0 bg-slate-900/50 backdrop-blur-sm z-[60] lg:hidden transition-opacity duration-500 ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
        onClick={() => setIsOpen(false)}
        aria-hidden="true"
      ></div>
      
      {/* Mobile Menu Side Drawer */}
      <div 
        className={`fixed right-0 top-0 h-full w-[85%] max-w-[320px] bg-white z-[65] shadow-2xl lg:hidden transform transition-transform duration-500 cubic-bezier(0.4, 0, 0.2, 1) flex flex-col ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}
      >
        <div className="p-8 border-b border-slate-100 flex flex-col gap-2">
          <div className="flex items-center">
            <Logo className="w-10 h-10 mr-3" />
            <div className="flex flex-col">
              <span className="text-lg font-black text-blue-950 uppercase leading-none">Elite IT</span>
              <span className="text-[9px] font-bold text-slate-400 uppercase tracking-widest">Solutions & Academy</span>
            </div>
          </div>
        </div>

        <div className="flex-grow py-8 px-6 space-y-1 overflow-y-auto">
          <p className="px-4 text-[9px] font-black uppercase tracking-[0.3em] text-slate-400 mb-6">Directory</p>
          {mainLinks.map((link) => (
            <div key={link.name} className="space-y-1">
              <button 
                onClick={() => {
                  if (link.path === 'services') {
                    setIsServicesOpen(!isServicesOpen);
                  } else {
                    onNavigate(link.path);
                    setIsOpen(false);
                  }
                }} 
                className={`flex items-center w-full p-4 rounded-2xl transition-all group ${
                    currentPath === link.path 
                      ? 'bg-blue-600 text-white shadow-lg' 
                      : 'text-slate-700 hover:bg-slate-50'
                }`}
              >
                <span className={`text-lg mr-4 transition-transform group-hover:scale-110 ${currentPath === link.path ? 'opacity-100' : 'opacity-50'}`}>
                  {link.icon}
                </span>
                <span className="font-black uppercase tracking-widest text-xs">{link.name}</span>
                {link.path === 'services' && (
                  <svg className={`ml-auto w-4 h-4 transition-transform ${isServicesOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" /></svg>
                )}
              </button>

              {/* Mobile Nested Services */}
              {link.path === 'services' && isServicesOpen && (
                <div className="pl-8 space-y-1 mt-1 animate-in slide-in-from-top-2 duration-300">
                  {SERVICES.map(s => (
                    <button
                      key={s.id}
                      onClick={() => {
                        onNavigate('services');
                        setIsOpen(false);
                        setTimeout(() => {
                          const el = document.getElementById(s.id);
                          if (el) el.scrollIntoView({ behavior: 'smooth' });
                        }, 200);
                      }}
                      className="flex items-center w-full p-3 rounded-xl text-slate-500 hover:bg-slate-50 text-[10px] font-black uppercase tracking-widest"
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

        <div className="p-8 bg-slate-50 border-t border-slate-100 mt-auto">
          <div className="flex flex-col gap-4">
             <div className="space-y-1">
               <p className="text-[9px] font-black text-slate-400 uppercase tracking-widest">Technical Support</p>
               <p className="text-sm font-black text-blue-900">{BRAND.phone}</p>
             </div>
             <a 
              href={`tel:${BRAND.phone.replace(/\D/g, '')}`}
              className="w-full bg-blue-900 text-white py-4 rounded-xl font-black uppercase tracking-widest text-[10px] text-center shadow-lg active:scale-95 transition-all"
             >
               Call Support
             </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
