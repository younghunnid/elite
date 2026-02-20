
import React, { useState } from 'react';
import { BRAND } from '../constants';
import Logo from './Logo';

interface WelcomeScreenProps {
  onEnter: (target: 'it' | 'school') => void;
}

const WelcomeScreen: React.FC<WelcomeScreenProps> = ({ onEnter }) => {
  const [hovered, setHovered] = useState<'it' | 'school' | null>(null);

  return (
    <div className="relative min-h-screen w-full bg-blue-500 flex flex-col items-center overflow-x-hidden selection:bg-blue-500/30">
      {/* Background Layer */}
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
        <div 
          className={`absolute inset-0 transition-colors duration-1000 ${
            hovered === 'school' ? 'bg-blue-900/30' : 
            hovered === 'it' ? 'bg-slate-900/50' : 
            'bg-slate-950'
          }`}
        ></div>

        <div 
          className={`absolute top-0 left-1/2 -translate-x-1/2 w-[200%] aspect-square rounded-full blur-[100px] transition-all duration-1000 opacity-20 ${
            hovered === 'school' ? 'bg-yellow-500' : hovered === 'it' ? 'bg-blue-500' : 'bg-blue-900'
          }`}
        ></div>
        
        <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] sm:bg-[size:40px_40px]"></div>
      </div>

      <div className="relative z-10 w-full max-w-7xl px-4 py-8 sm:py-24 flex flex-col items-center flex-grow">
        {/* Identity Block */}
        <header className="mb-10 sm:mb-20 text-center animate-in fade-in slide-in-from-top-4 duration-1000">
          <div className="mb-6">
            <Logo className="w-20 h-20 sm:w-32 sm:h-32 mx-auto drop-shadow-[0_0_15px_rgba(59,130,246,0.3)]" />
          </div>
          <h1 className="text-2xl xs:text-3xl sm:text-6xl font-black text-white uppercase tracking-tighter leading-tight mb-4">
            ELITE<span className="text-blue-500">COMPUTER</span><span className="text-slate-400">SERVICES</span>
          </h1>
          <p className="text-[10px] sm:text-xs font-black tracking-[0.3em] text-blue-100/40 uppercase">
            A Solid Foundation for a Greater Future
          </p>
        </header>

        {/* Portals */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-10 w-full max-w-5xl">
          <button 
            onMouseEnter={() => setHovered('school')}
            onMouseLeave={() => setHovered(null)}
            onClick={() => onEnter('school')}
            className={`group relative bg-white/5 backdrop-blur-xl border border-white/10 p-8 sm:p-14 rounded-[2rem] sm:rounded-[3rem] transition-all duration-500 text-left overflow-hidden active:scale-95 ${
              hovered === 'it' ? 'opacity-40 blur-[1px] grayscale' : 'opacity-100 border-yellow-400/20'
            }`}
          >
            <div className="relative z-10 flex flex-col h-full min-h-[160px] sm:min-h-[220px]">
              <span className="bg-yellow-400 text-blue-950 text-[9px] font-black uppercase tracking-widest px-3 py-1 rounded-full w-fit mb-6">Academic Wing</span>
              <h2 className="text-3xl sm:text-5xl font-black text-white uppercase tracking-tighter leading-[0.9] mb-4">
                Shape Your<br/><span className="text-yellow-400">Future.</span>
              </h2>
              <p className="text-slate-400 text-sm sm:text-base font-medium leading-relaxed mb-8 max-w-[280px]">
                Liberia's leading computer school. Intensive practical training for all ages.
              </p>
              <div className="mt-auto flex items-center gap-3 text-white font-black text-[10px] uppercase tracking-widest group-hover:gap-5 transition-all">
                <span>Enter Academy</span>
                <svg className="w-5 h-5 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M13 7l5 5m0 0l-5 5m5-5H6" /></svg>
              </div>
            </div>
            {/* Visual Icon background */}
            <div className="absolute -bottom-8 -right-8 opacity-[0.02] group-hover:opacity-[0.05] transition-opacity duration-700">
               <svg className="w-48 h-48 sm:w-64 sm:h-64" fill="currentColor" viewBox="0 0 24 24"><path d="M12 14l9-5-9-5-9 5 9 5z" /><path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" /></svg>
            </div>
          </button>

          <button 
            onMouseEnter={() => setHovered('it')}
            onMouseLeave={() => setHovered(null)}
            onClick={() => onEnter('it')}
            className={`group relative bg-white/5 backdrop-blur-xl border border-white/10 p-8 sm:p-14 rounded-[2rem] sm:rounded-[3rem] transition-all duration-500 text-left overflow-hidden active:scale-95 ${
              hovered === 'school' ? 'opacity-40 blur-[1px] grayscale' : 'opacity-100 border-blue-500/20'
            }`}
          >
            <div className="relative z-10 flex flex-col h-full min-h-[160px] sm:min-h-[220px]">
              <span className="bg-blue-600 text-white text-[9px] font-black uppercase tracking-widest px-3 py-1 rounded-full w-fit mb-6">Enterprise Hub</span>
              <h2 className="text-3xl sm:text-5xl font-black text-white uppercase tracking-tighter leading-[0.9] mb-4">
                Secure Your<br/><span className="text-blue-500">Business.</span>
              </h2>
              <p className="text-slate-400 text-sm sm:text-base font-medium leading-relaxed mb-8 max-w-[280px]">
                Professional hardware repair, networking, and industrial printing solutions.
              </p>
              <div className="mt-auto flex items-center gap-3 text-white font-black text-[10px] uppercase tracking-widest group-hover:gap-5 transition-all">
                <span>View Solutions</span>
                <svg className="w-5 h-5 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M13 7l5 5m0 0l-5 5m5-5H6" /></svg>
              </div>
            </div>
            {/* Visual Icon background */}
            <div className="absolute -bottom-8 -right-8 opacity-[0.02] group-hover:opacity-[0.05] transition-opacity duration-700">
               <svg className="w-48 h-48 sm:w-64 sm:h-64" fill="currentColor" viewBox="0 0 24 24"><path d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" /></svg>
            </div>
          </button>
        </div>

        <footer className="mt-auto pt-16 pb-8 text-center animate-in fade-in duration-1000 delay-500">
          <p className="text-[10px] sm:text-xs font-bold text-slate-500 uppercase tracking-widest mb-2 px-6">
            {BRAND.address}
          </p>
          <div className="h-px w-12 bg-blue-900/50 mx-auto"></div>
        </footer>
      </div>
    </div>
  );
};

export default WelcomeScreen;
