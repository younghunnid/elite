
import React from 'react';
import { SERVICES, BRAND } from '../../constants';
import { useImages } from '../../ImageContext';

interface ITServicesProps {
  onNavigate: (path: string) => void;
}

const ITServices: React.FC<ITServicesProps> = ({ onNavigate }) => {
  const { itGallery } = useImages();
  const itServices = SERVICES.filter(s => s.id !== 'computer-school');
  
  return (
    <div className="bg-slate-50 dark:bg-slate-950 min-h-screen transition-colors duration-300">
      {/* Header */}
      <section className="bg-white dark:bg-slate-900 py-24 sm:py-32 px-4 border-b border-slate-100 dark:border-white/5">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-blue-600 dark:text-blue-400 font-black uppercase tracking-widest text-[10px] mb-4">Service Catalog</h2>
          <h1 className="text-4xl sm:text-6xl font-black uppercase tracking-tighter text-blue-950 dark:text-blue-300 mb-8">Professional IT <span className="text-blue-600 dark:text-blue-400">Ecosystem</span></h1>
          <p className="text-slate-500 dark:text-slate-400 text-xl font-medium leading-relaxed">
            High-performance hardware support and software integration services for Liberia's professional workforce.
          </p>
        </div>
      </section>

      {/* Service List */}
      <section className="py-24 px-4 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 gap-12">
          {itServices.map((s, idx) => (
            <div key={s.id} className={`flex flex-col lg:flex-row bg-white dark:bg-slate-900 text-slate-900 dark:text-white rounded-[4rem] shadow-sm overflow-hidden border border-slate-100 dark:border-white/5 group hover:shadow-2xl transition-all ${idx % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
              <div className="lg:w-2/5 relative h-80 lg:h-auto overflow-hidden">
                <img src={s.image} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" alt={s.title} />
                <div className="absolute inset-0 bg-blue-900/10 group-hover:bg-transparent transition-colors"></div>
              </div>
              <div className="lg:w-3/5 p-12 sm:p-20 flex flex-col justify-center">
                <div className="text-blue-600 dark:text-blue-400 mb-8">{s.icon}</div>
                <h3 className="text-3xl font-black uppercase tracking-tight text-blue-950 dark:text-white mb-6">{s.title}</h3>
                <p className="text-slate-500 dark:text-slate-200 text-lg leading-relaxed mb-8 font-medium">{s.description}</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
                   {s.details.map((d, i) => (
                     <div key={i} className="flex items-center gap-3">
                        <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                        <span className="text-xs font-black uppercase tracking-widest text-slate-700 dark:text-slate-200">{d}</span>
                     </div>
                   ))}
                </div>
                <button 
                  onClick={() => onNavigate('contact')} 
                  className="w-full sm:w-auto bg-slate-50 dark:bg-slate-900 hover:bg-blue-600 dark:hover:bg-blue-600 hover:text-white dark:text-white py-5 px-10 rounded-2xl font-black uppercase tracking-widest text-[10px] transition-all border border-slate-100 dark:border-white/5"
                >
                  Request {s.title} Support
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Technical Gallery */}
      <section className="py-24 px-4 bg-white dark:bg-slate-900 border-y border-slate-100 dark:border-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
            <div>
              <h2 className="text-blue-600 dark:text-blue-400 font-black uppercase tracking-widest text-[10px] mb-4">Showcase</h2>
              <h3 className="text-3xl sm:text-5xl font-black text-slate-900 dark:text-white uppercase tracking-tighter">Technical Gallery</h3>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {itGallery.map((img, i) => (
              <div key={i} className="aspect-square rounded-[2.5rem] overflow-hidden bg-slate-100 dark:bg-slate-800 relative group border border-slate-100 dark:border-white/5 shadow-sm">
                <img src={img} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" alt="Gallery item" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-24 bg-blue-950 text-white text-center px-4">
         <h4 className="text-2xl font-black uppercase tracking-tight mb-8">Looking for Enterprise Deployment?</h4>
         <button onClick={() => onNavigate('solutions')} className="bg-yellow-400 text-blue-950 px-12 py-5 rounded-2xl font-black uppercase tracking-widest text-xs shadow-xl active:scale-95 transition-all">View Business Solutions</button>
      </section>
    </div>
  );
};

export default ITServices;
