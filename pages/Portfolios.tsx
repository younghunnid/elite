
import React from 'react';
import { PORTFOLIO_PROJECTS } from '../constants';

const Portfolios: React.FC = () => {
  return (
    <div className="bg-slate-50 dark:bg-slate-950 min-h-screen py-24 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-blue-600 font-black uppercase tracking-widest text-[10px] mb-4">Our Technical Track Record</h2>
          <h1 className="text-4xl sm:text-6xl font-black text-slate-900 dark:text-white uppercase tracking-tighter mb-4">Elite <span className="text-blue-600">Portfolios</span></h1>
          <p className="text-slate-500 dark:text-slate-400 max-w-xl mx-auto font-medium leading-relaxed">
            Real results for real clients across Liberia. From NGO infrastructure to industrial printing deployments.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {PORTFOLIO_PROJECTS.map((p, i) => (
            <div key={i} className="group bg-white dark:bg-slate-900 rounded-[3rem] overflow-hidden shadow-sm border border-slate-100 dark:border-white/5 flex flex-col hover:shadow-2xl transition-all duration-500">
              <div className="relative h-[300px] overflow-hidden">
                <img src={p.img} alt={p.title} className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-950/80 via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity"></div>
                <div className="absolute top-6 right-6">
                   <span className="bg-white/90 dark:bg-slate-800/90 backdrop-blur-md text-blue-950 dark:text-white px-4 py-1.5 rounded-full text-[9px] font-black uppercase tracking-widest shadow-xl">
                      {p.category}
                   </span>
                </div>
              </div>
              <div className="p-10 flex flex-col flex-grow">
                <div className="flex justify-between items-center mb-6">
                   <p className="text-[10px] font-black text-blue-600 dark:text-blue-400 uppercase tracking-[0.2em]">{p.category}</p>
                   <p className="text-[10px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-widest">{p.date}</p>
                </div>
                <h3 className="text-2xl font-black text-slate-900 dark:text-white mb-6 uppercase tracking-tight leading-tight group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  {p.title}
                </h3>
                <p className="text-slate-500 dark:text-slate-400 font-medium text-sm leading-relaxed mb-8 flex-grow">
                  {p.desc}
                </p>
                <div className="pt-6 border-t border-slate-50 dark:border-white/5 flex items-center text-blue-950 dark:text-blue-400 font-black text-[10px] uppercase tracking-widest cursor-pointer hover:text-blue-600 transition-colors">
                  View Project Details
                  <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M9 5l7 7-7 7" /></svg>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-24 text-center">
           <p className="text-slate-400 dark:text-slate-500 font-black uppercase tracking-[0.3em] text-[10px] mb-8">Ready to start your project?</p>
           <button className="bg-blue-600 text-white px-12 py-5 rounded-2xl font-black uppercase tracking-widest text-xs shadow-xl shadow-blue-600/20 hover:bg-blue-700 transition-all active:scale-95">
              Get A Consultation
           </button>
        </div>
      </div>
    </div>
  );
};

export default Portfolios;
