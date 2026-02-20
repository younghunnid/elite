
import React from 'react';
import { SERVICES, BRAND } from '../constants';
import { useImages } from '../ImageContext';

interface ServicesProps {
  onNavigate?: (path: string) => void;
}

const Services: React.FC<ServicesProps> = ({ onNavigate }) => {
  const { itGallery, images } = useImages();
  
  const handleContactClick = () => {
    if (onNavigate) {
      onNavigate('contact');
    }
  };

  // Exclude school as it has its own page
  const technicalServices = SERVICES.filter(s => s.id !== 'computer-school');

  return (
    <div className="bg-slate-50 dark:bg-slate-950 min-h-screen overflow-x-hidden transition-colors duration-300">
      {/* Services Hero */}
      <div className="bg-blue-950 text-white py-20 sm:py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10"></div>
        <div className="max-w-7xl mx-auto px-4 relative z-10 text-center">
          <h2 className="text-yellow-400 font-black uppercase tracking-[0.3em] text-[10px] sm:text-xs mb-4">Elite Technical Solutions</h2>
          <h1 className="text-4xl sm:text-7xl font-black mb-6 uppercase tracking-tighter leading-tight">Professional <span className="text-blue-500">IT Wing</span></h1>
          <p className="text-blue-100/60 max-w-2xl mx-auto text-base sm:text-xl font-medium">
            Fast, reliable, and expert hardware and software support for individuals and businesses in Paynesville and beyond.
          </p>
        </div>
      </div>

      {/* Main Services Grid */}
      <section className="py-20 sm:py-32 bg-slate-50 dark:bg-slate-950 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10 sm:gap-16">
            {technicalServices.map((s) => (
              <div key={s.id} id={s.id} className="bg-white dark:bg-slate-900 rounded-[3rem] shadow-sm border border-slate-100 dark:border-white/5 group hover:shadow-2xl transition-all duration-500 flex flex-col h-full">
                <div className="relative h-64 overflow-hidden rounded-t-[3rem]">
                   <img 
                    src={images[`service-${s.id}`] || s.image} 
                    alt={s.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
                   />
                   <div className="absolute top-6 right-6 p-4 bg-white/90 dark:bg-slate-800/90 backdrop-blur-md rounded-2xl text-blue-600 dark:text-blue-400 shadow-xl">
                      {s.icon}
                   </div>
                </div>
                <div className="p-10 sm:p-14 flex flex-col flex-grow">
                  <h3 className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white mb-6 uppercase tracking-tight">{s.title}</h3>
                  <p className="text-slate-500 dark:text-slate-400 text-base sm:text-lg leading-relaxed mb-10 font-medium">{s.description}</p>
                  
                  <div className="space-y-4 mb-10">
                    {s.details.map((d, i) => (
                      <div key={i} className="flex items-center text-slate-700 dark:text-slate-300 font-bold text-sm">
                        <div className="w-6 h-6 bg-blue-50 dark:bg-slate-800 text-blue-600 dark:text-blue-400 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                           <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} d="M5 13l4 4L19 7" /></svg>
                        </div>
                        {d}
                      </div>
                    ))}
                  </div>

                  <div className="mt-auto">
                    <button onClick={handleContactClick} className="w-full bg-slate-50 dark:bg-slate-800 hover:bg-blue-600 hover:text-white dark:hover:bg-blue-600 text-blue-600 dark:text-blue-400 py-5 rounded-2xl font-black uppercase tracking-widest text-[10px] transition-all border border-slate-100 dark:border-white/5">
                      Inquire About {s.title}
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technical Showcase Gallery */}
      <section className="py-20 sm:py-32 bg-white dark:bg-slate-900 px-4 sm:px-6 lg:px-8 border-y border-slate-100 dark:border-white/5 transition-colors duration-300">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 sm:mb-16 gap-8 text-center md:text-left">
            <div>
              <h2 className="text-blue-600 dark:text-blue-400 font-black uppercase tracking-widest text-[10px] mb-4">THE SHOWCASE</h2>
              <h3 className="text-3xl sm:text-5xl font-black text-slate-900 dark:text-white uppercase tracking-tighter leading-none">
                Technical <br className="hidden sm:block"/><span className="text-blue-600">Gallery</span>
              </h3>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-8">
            {itGallery.map((img, i) => (
              <div key={i} className="aspect-square rounded-[2rem] sm:rounded-[3rem] overflow-hidden bg-slate-50 dark:bg-slate-800 relative group border border-slate-100 dark:border-white/5 shadow-sm transition-all hover:shadow-2xl">
                <img src={img} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" alt="Technical project" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Urgent Help Section */}
      <section className="bg-blue-600 py-20 sm:py-32 relative overflow-hidden px-4">
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="bg-white dark:bg-slate-900 rounded-[4rem] p-10 sm:p-24 shadow-2xl text-center md:text-left flex flex-col md:flex-row items-center gap-12 sm:gap-20">
            <div className="md:w-3/5">
              <h3 className="text-3xl sm:text-5xl font-black text-slate-900 dark:text-white uppercase tracking-tighter mb-8 leading-tight">Need Urgent <br className="hidden sm:block" /> <span className="text-blue-600">Technical</span> Support?</h3>
              <p className="text-slate-500 dark:text-slate-400 text-lg sm:text-xl font-medium leading-relaxed">
                Our technicians handle everything from board-level repairs to complex network installations. Same-day diagnostics available for most repairs.
              </p>
            </div>
            <div className="md:w-2/5 w-full space-y-4">
               <a href={`tel:${BRAND.phone.replace(/\D/g, '')}`} className="block w-full text-center bg-blue-600 hover:bg-blue-700 text-white py-6 rounded-2xl font-black uppercase tracking-widest text-xs shadow-xl shadow-blue-600/30 active:scale-95 transition-all">
                Call {BRAND.phone}
              </a>
              <button onClick={handleContactClick} className="block w-full text-center border-2 border-slate-200 dark:border-white/10 hover:bg-slate-50 dark:hover:bg-slate-800 text-slate-600 dark:text-slate-400 py-6 rounded-2xl font-black uppercase tracking-widest text-xs transition-all">
                Book Diagnostic
              </button>
            </div>
          </div>
        </div>
      </section>
      
      {/* Global Motto */}
      <section className="py-20 text-center opacity-20 select-none pointer-events-none">
         <h4 className="text-4xl sm:text-8xl font-black uppercase text-blue-900/10 dark:text-blue-400/10 tracking-widest">Trust • Speed • Reliability</h4>
      </section>
    </div>
  );
};

export default Services;
