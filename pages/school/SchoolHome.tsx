
import React from 'react';
import { BRAND } from '../../constants';
import { useImages } from '../../ImageContext';

interface SchoolHomeProps {
  onNavigate: (path: string) => void;
}

const SchoolHome: React.FC<SchoolHomeProps> = ({ onNavigate }) => {
  const { images, schoolGallery } = useImages();

  return (
    <div className="flex flex-col bg-white dark:bg-slate-950 transition-colors duration-300">
      {/* Hero Section */}
      <section className="relative pt-16 pb-24 sm:pt-24 sm:pb-32 lg:min-h-[85vh] flex items-center text-white overflow-hidden px-4 hero-gradient">
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <img src={images['school-hero']} className="w-full h-full object-cover" alt="Elite Computer School" />
          <div className="absolute inset-0 bg-blue-950/40"></div>
        </div>
        
        <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-center relative z-10">
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center gap-3 bg-yellow-400 text-blue-950 px-4 py-2.5 rounded-full text-[10px] font-black uppercase tracking-widest mb-10 mx-auto lg:mx-0 shadow-lg">
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-900 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-900"></span>
              </span>
              Registration Period Open
            </div>
            <h1 className="text-fluid-h1 font-black uppercase tracking-tighter leading-[0.95] mb-8">
              Solid foundation <br className="hidden sm:block"/>
              <span className="text-yellow-400">yields result.</span>
            </h1>
            <p className="text-lg sm:text-2xl text-blue-100 font-bold mb-6">
              Liberia's leading 3-month intensive academy.
            </p>
            <p className="text-fluid-body text-white/50 mb-12 max-w-xl mx-auto lg:mx-0 leading-relaxed font-medium">
              We empower students of all ages with the practical technical skills required to thrive in the modern digital landscape.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button 
                onClick={() => onNavigate('admissions')} 
                className="cta-btn w-full sm:w-auto px-12 py-5 text-xs tracking-widest shadow-2xl transition-all active:scale-95"
              >
                Enroll Online
              </button>
              <button 
                onClick={() => onNavigate('programs')} 
                className="w-full sm:w-auto bg-white/5 hover:bg-white/10 text-white border border-white/10 px-12 py-5 rounded-2xl font-black uppercase tracking-widest text-xs backdrop-blur-md transition-all active:scale-95"
              >
                View Curriculum
              </button>
            </div>
          </div>
          
          <div className="hidden lg:block relative">
            <div className="absolute inset-0 bg-blue-500 rounded-full blur-[120px] opacity-10"></div>
            <div className="relative p-4 bg-white/5 border border-white/10 rounded-[4rem] backdrop-blur-md shadow-2xl">
               {/* use same hero/flyer image so the graphic appears here as well */}
               {/* object-cover was cropping the flyer; contain ensures the whole
                   graphic is visible. if you prefer a different picture you can
                   upload one via the ImageCustomizer (school-lab key). */}
               <img src={images['school-hero']} className="rounded-[3.5rem] w-full h-full object-contain" alt="Campus Learning" />
            </div>
          </div>
        </div>
      </section>

      {/* Feature Section */}
      <section className="section-spacing px-6 bg-white dark:bg-slate-900 transition-colors border-b border-slate-100 dark:border-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-center">
            <div className="lg:col-span-6 space-y-8 text-center lg:text-left">
              <div>
                <h2 className="text-blue-600 dark:text-blue-400 font-black uppercase tracking-widest text-[10px] mb-4">80% Practical Learning</h2>
                <h3 className="text-fluid-h2 font-black text-slate-900 dark:text-white uppercase tracking-tighter leading-none">
                  A Practical <br className="hidden sm:block"/><span className="text-blue-600 dark:text-blue-400">Education.</span>
                </h3>
              </div>
              <p className="text-slate-500 dark:text-slate-400 text-lg sm:text-xl font-medium leading-relaxed max-w-2xl mx-auto lg:mx-0">
                At E.C.L, we focus on hands-on application. Our curriculum is designed by professionals who work in the industry every day.
              </p>
              <div className="p-10 bg-slate-50 dark:bg-slate-800 rounded-[3rem] sm:rounded-[4rem] border border-slate-100 dark:border-white/5 shadow-inner">
                <p className="text-slate-700 dark:text-slate-300 text-sm sm:text-base font-bold italic leading-relaxed">
                  "We take students from zero knowledge to computer literate in just 3 months through immersive lab-based training."
                </p>
              </div>
              <button onClick={() => onNavigate('about')} className="bg-blue-950 dark:bg-blue-600 text-white px-12 py-5 rounded-2xl font-black uppercase tracking-widest text-[10px] hover:bg-blue-800 transition-all shadow-xl w-full sm:w-auto active:scale-95">
                Discover Our Mission
              </button>
            </div>
            
            <div className="lg:col-span-6">
              <div className="grid grid-cols-1 gap-6 sm:gap-8">
                {[
                  { title: "Hardware Mastery", icon: "🔧", desc: "Identify and maintain modern PC components." },
                  { title: "Professional Suite", icon: "📂", desc: "Master the complete Microsoft Office ecosystem." },
                  { title: "Digital Design", icon: "🎨", desc: "Professional graphic design and creative software." }
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-6 p-8 bg-white dark:bg-slate-800 border border-slate-100 dark:border-white/5 rounded-3xl shadow-sm hover:shadow-xl transition-all group active:scale-[0.98]">
                    <div className="w-16 h-16 bg-slate-50 dark:bg-slate-700 rounded-2xl flex items-center justify-center text-3xl group-hover:scale-110 transition-transform">
                      {item.icon}
                    </div>
                    <div>
                      <h4 className="text-xl font-black text-blue-950 dark:text-white uppercase tracking-tight mb-1">{item.title}</h4>
                      <p className="text-slate-400 dark:text-slate-500 text-sm font-medium">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="section-spacing px-6 bg-slate-50 dark:bg-slate-950 transition-colors">
        <div className="max-w-7xl mx-auto">
          <header className="mb-16 sm:mb-24 text-center md:text-left flex flex-col md:flex-row justify-between items-center md:items-end gap-10">
            <div>
              <h2 className="text-blue-600 dark:text-blue-400 font-black uppercase tracking-widest text-[10px] mb-4">THE EXPERIENCE</h2>
              <h3 className="text-fluid-h2 font-black text-slate-900 dark:text-white uppercase tracking-tighter leading-none">Campus <span className="text-blue-600 dark:text-blue-400">Gallery.</span></h3>
            </div>
            <button onClick={() => onNavigate('programs')} className="text-blue-600 dark:text-blue-400 font-black uppercase tracking-widest text-[10px] border-b-2 border-current pb-2 hover:text-blue-800 dark:hover:text-white transition-all active:scale-95">View Our Curriculum</button>
          </header>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-8">
            {schoolGallery.map((img, i) => (
              <div key={i} className="relative rounded-[2rem] sm:rounded-[3rem] overflow-hidden bg-white dark:bg-slate-900 border border-slate-200 dark:border-white/10 shadow-sm hover:shadow-2xl transition-all group">
                {/* no fixed aspect ratio so image height adjusts to preserve full picture */}
                <img src={img} className="w-full h-auto object-contain group-hover:scale-110 transition-transform duration-700" alt="Student project" />
                <div className="absolute inset-0 bg-blue-950/20 dark:bg-black/30 group-hover:bg-transparent transition-colors duration-500"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="py-16 sm:section-spacing px-6">
        <div className="max-w-7xl mx-auto bg-yellow-400 rounded-[3rem] sm:rounded-[5rem] p-12 sm:p-24 text-blue-950 text-center flex flex-col items-center shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 left-0 w-96 h-96 bg-white/20 rounded-full blur-[150px] -translate-x-1/2 -translate-y-1/2"></div>
          <h3 className="text-fluid-h2 font-black uppercase tracking-tighter mb-8 sm:mb-12 relative z-10 leading-tight">
            Next Cohort <br className="hidden sm:block" /> Enrolling <span className="text-blue-900">Now.</span>
          </h3>
          <p className="text-blue-900/60 text-lg sm:text-2xl mb-12 sm:mb-16 max-w-2xl relative z-10 leading-relaxed font-bold">
            Limited seats available per session. Secure your professional certification today.
          </p>
          <button 
            onClick={() => onNavigate('admissions')}
            className="cta-btn w-full sm:w-auto px-16 py-6 tracking-[0.2em] text-xs shadow-2xl transition-all active:scale-95"
          >
            Apply Online Now
          </button>
        </div>
      </section>
    </div>
  );
};

export default SchoolHome;
