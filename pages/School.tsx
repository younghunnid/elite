
import React from 'react';
import { SERVICES, BRAND } from '../constants';
import { useImages } from '../ImageContext';

interface SchoolProps {
  onNavigate?: (path: string) => void;
}

const School: React.FC<SchoolProps> = ({ onNavigate }) => {
  const { schoolGallery } = useImages();
  
  const handleApplyClick = () => {
    if (onNavigate) {
      onNavigate('contact');
    }
  };

  const computerSchool = SERVICES.find(s => s.id === 'computer-school');

  return (
    <div className="bg-slate-50 min-h-screen overflow-x-hidden">
      {/* Dynamic Hero Header */}
      <div className="bg-blue-950 text-white py-20 sm:py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10"></div>
        <div className="max-w-7xl mx-auto px-4 relative z-10 text-center">
          <h2 className="text-yellow-400 font-black uppercase tracking-[0.3em] text-[10px] sm:text-xs mb-4">Elite Technical Education</h2>
          <h1 className="text-4xl sm:text-7xl font-black mb-6 uppercase tracking-tighter leading-tight">Build Your <span className="text-blue-500">Solid Foundation</span></h1>
          <p className="text-blue-100/60 max-w-2xl mx-auto text-base sm:text-xl font-medium">
            Liberia's premier 3-month intensive practical training program. We don't just teach software; we build the future of tech literacy.
          </p>
        </div>
      </div>

      {/* Program Details */}
      {computerSchool && (
        <section className="py-20 sm:py-32 bg-white relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="flex flex-col lg:flex-row gap-12 sm:gap-20 items-center">
              <div className="lg:w-1/2">
                <div className="inline-block bg-blue-600 text-white px-4 py-2 rounded-xl text-[10px] font-black uppercase tracking-widest mb-8 shadow-lg shadow-blue-600/20">
                  3-Month Intensive
                </div>
                <h2 className="text-4xl sm:text-6xl font-black text-slate-900 mb-8 uppercase tracking-tighter leading-none">
                  E.C.L <br/><span className="text-blue-600">Practical Labs</span>
                </h2>
                <p className="text-slate-600 text-lg sm:text-xl mb-10 leading-relaxed font-medium">
                  At <strong>Elite Computer School (E.C.L)</strong>, we focus on 80% practical learning. You'll work on real hardware, build real networks, and solve real-world problems.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-12">
                   {computerSchool.details.map((detail, i) => (
                      <div key={i} className="flex items-center space-x-4 p-4 bg-slate-50 rounded-2xl border border-slate-100">
                        <div className="w-8 h-8 bg-blue-600 text-white rounded-lg flex items-center justify-center flex-shrink-0">
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" /></svg>
                        </div>
                        <span className="text-slate-900 font-bold text-sm uppercase tracking-tight">{detail}</span>
                      </div>
                   ))}
                </div>
                <button onClick={handleApplyClick} className="w-full sm:w-auto bg-blue-600 hover:bg-blue-700 text-white px-12 py-5 rounded-2xl font-black uppercase tracking-widest text-xs shadow-xl active:scale-95 transition-all">
                  Apply For Next Cohort
                </button>
              </div>
              <div className="lg:w-1/2 w-full">
                <div className="relative group">
                  <div className="absolute inset-0 bg-blue-600 rounded-[3rem] blur-2xl opacity-20 group-hover:opacity-40 transition-opacity"></div>
                  <img src={computerSchool.image} alt="Computer School" className="rounded-[3rem] shadow-2xl w-full aspect-[4/3] object-cover relative z-10" />
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Campus Gallery Section */}
      <section className="py-20 sm:py-32 bg-slate-50 px-4 sm:px-6 lg:px-8 border-y border-slate-200">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center md:items-end mb-12 sm:mb-16 gap-8 text-center md:text-left">
            <div>
              <h2 className="text-blue-600 font-black uppercase tracking-widest text-[10px] mb-3">CAMPUS LIFE</h2>
              <h3 className="text-3xl sm:text-5xl font-black text-slate-900 uppercase tracking-tighter">School <span className="text-blue-600">Gallery</span></h3>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
            {schoolGallery.map((img, i) => (
              <div key={i} className="aspect-square rounded-[2.5rem] sm:rounded-[3.5rem] overflow-hidden bg-white relative group border border-slate-200 shadow-sm transition-all hover:shadow-2xl">
                <img src={img} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" alt="Campus environment" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Schedule Section */}
      <section id="school-schedule" className="bg-blue-950 py-20 sm:py-32 px-4 border-y-8 border-yellow-400">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-5xl font-black text-white mb-6 uppercase tracking-tight">E.C.L Session Times</h2>
            <p className="text-blue-100/60 max-w-xl mx-auto font-medium">Choose a session that fits your schedule. Morning, Afternoon, or Evening.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
             {[
               { label: 'Morning', time: '8:00 AM - 11:30 AM', desc: 'Fresh Start Session', accent: 'bg-blue-600' },
               { label: 'Afternoon', time: '1:00 PM - 4:00 PM', desc: 'Focus Intensive', accent: 'bg-yellow-400' },
               { label: 'Evening', time: '5:00 PM - 8:00 PM', desc: 'Professional Pivot', accent: 'bg-blue-400' }
             ].map((s, i) => (
               <div key={i} className="bg-white/5 border border-white/10 p-12 rounded-[3rem] text-center hover:bg-white/10 transition-all flex flex-col h-full group">
                  <div className={`w-3 h-3 ${s.accent} rounded-full mx-auto mb-6`}></div>
                  <h4 className="text-white font-black uppercase tracking-widest text-xs mb-4 opacity-50">{s.label}</h4>
                  <p className="text-3xl sm:text-4xl font-black text-white mb-2 leading-tight">{s.time.split(' - ')[0]}<br/><span className="text-blue-500 text-xl">to</span><br/>{s.time.split(' - ')[1]}</p>
                  <p className="text-blue-100/40 text-[10px] font-bold uppercase tracking-widest mt-auto pt-8">{s.desc}</p>
               </div>
             ))}
          </div>

          <div className="mt-20 bg-yellow-400 rounded-[3rem] p-10 sm:p-16 flex flex-col lg:flex-row items-center justify-between gap-10 shadow-2xl">
             <div className="text-center lg:text-left">
                <h4 className="text-blue-950 font-black text-2xl sm:text-3xl uppercase tracking-tighter mb-2">Registration is Open</h4>
                <p className="text-blue-900 font-bold opacity-80 uppercase tracking-widest text-[10px] sm:text-xs">Limited Slots Per Session - Real Certification Guaranteed</p>
             </div>
             <button onClick={handleApplyClick} className="w-full lg:w-auto bg-blue-950 text-white px-12 py-6 rounded-2xl font-black uppercase tracking-widest text-xs shadow-xl active:scale-95 transition-all">
                Register For School Online
             </button>
          </div>
        </div>
      </section>

      {/* Faculty CTA */}
      <section className="py-20 sm:py-32 bg-white text-center">
         <div className="max-w-4xl mx-auto px-4">
            <h3 className="text-2xl sm:text-4xl font-black text-slate-900 uppercase tracking-tight mb-8">Taught by the Elite Experts</h3>
            <p className="text-slate-500 text-lg mb-12 font-medium leading-relaxed">
              Our instructors are senior hardware technicians and system architects who work in the field every day. You're learning from the best.
            </p>
            <div className="flex justify-center gap-4">
               <button onClick={() => onNavigate && onNavigate('team')} className="text-blue-600 font-black uppercase tracking-widest text-xs border-b-4 border-blue-600 pb-1 hover:text-blue-800 transition-colors">
                  Meet Our Faculty
               </button>
            </div>
         </div>
      </section>
    </div>
  );
};

export default School;
