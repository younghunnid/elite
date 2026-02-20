
import React from 'react';
import { BRAND } from '../../constants';

interface ITSolutionsProps {
  onNavigate: (path: string) => void;
}

const ITSolutions: React.FC<ITSolutionsProps> = ({ onNavigate }) => {
  const solutions = [
    { title: "Network Infrastructure", desc: "Design and deployment of robust office LAN/WAN networks, server rooms, and rack management.", icon: "🌐" },
    { title: "Surveillance Systems", desc: "High-definition CCTV installations with remote mobile monitoring and off-site backup storage.", icon: "📹" },
    { title: "IT Fleet Management", desc: "Contract-based maintenance of corporate laptops, desktops, and industrial printers.", icon: "📑" },
    { title: "Secure Data Archival", desc: "Automated cloud backup and physical data redundancy systems for mission-critical business info.", icon: "🔐" }
  ];

  return (
    <div className="bg-white min-h-screen">
       <div className="bg-blue-600 py-24 sm:py-32 px-4 text-center text-white overflow-hidden relative">
          <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/grid-me.png')]"></div>
          <h1 className="text-5xl sm:text-7xl font-black uppercase tracking-tighter mb-8 relative z-10">Business <span className="text-yellow-400">Solutions</span></h1>
          <p className="text-lg sm:text-xl text-blue-100 font-bold uppercase tracking-widest max-w-2xl mx-auto opacity-80 relative z-10">
             Building the Infrastructure for Liberia's Growing Enterprises.
          </p>
       </div>

       <section className="py-24 px-4 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
             {solutions.map((sol, i) => (
                <div key={i} className="bg-slate-50 p-12 sm:p-20 rounded-[4rem] border border-slate-100 flex flex-col group hover:bg-blue-900 transition-all duration-500">
                   <div className="text-6xl mb-8 transform group-hover:scale-110 transition-transform">{sol.icon}</div>
                   <h4 className="text-blue-950 font-black uppercase tracking-tight text-3xl mb-6 group-hover:text-white">{sol.title}</h4>
                   <p className="text-slate-500 font-medium text-lg leading-relaxed mb-10 group-hover:text-blue-100/60">{sol.desc}</p>
                   <div className="mt-auto">
                      <button onClick={() => onNavigate('contact')} className="text-blue-600 font-black uppercase tracking-widest text-[10px] group-hover:text-yellow-400 flex items-center gap-2">
                        Get Solution Quote <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M13 7l5 5m0 0l-5 5m5-5H6" /></svg>
                      </button>
                   </div>
                </div>
             ))}
          </div>
       </section>

       <section className="bg-blue-950 py-24 text-white px-4">
          <div className="max-w-4xl mx-auto text-center">
             <h3 className="text-3xl sm:text-4xl font-black uppercase mb-8">Trusted by Local Leaders</h3>
             <p className="text-blue-100/60 mb-12 font-medium leading-relaxed">
                Elite IT Solutions has successfully deployed technical infrastructure for NGOs, financial institutions, and retail hubs across Paynesville and Greater Monrovia.
             </p>
             <div className="flex flex-wrap justify-center gap-8 opacity-40 grayscale group hover:grayscale-0 transition-all">
                {/* Visual Placeholders for Partner Logos */}
                <div className="font-black text-2xl uppercase tracking-tighter">NGO Hub</div>
                <div className="font-black text-2xl uppercase tracking-tighter">Bank Support</div>
                <div className="font-black text-2xl uppercase tracking-tighter">Retail Core</div>
             </div>
          </div>
       </section>
    </div>
  );
};

export default ITSolutions;
