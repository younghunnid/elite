
import React, { useState } from 'react';
import { BRAND, SERVICES } from '../../constants';
import { useImages } from '../../ImageContext';

interface ITHomeProps {
  onNavigate: (path: string) => void;
}

const ITHome: React.FC<ITHomeProps> = ({ onNavigate }) => {
  const { images } = useImages();
  const [appointment, setAppointment] = useState({ name: '', email: '', phone: '', message: '' });

  const handleAppointmentSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = `Appointment Request: ${appointment.name}`;
    const body = `Customer: ${appointment.name}\nEmail: ${appointment.email}\nPhone: ${appointment.phone}\n\nInquiry:\n${appointment.message}`;
    window.location.href = `mailto:${BRAND.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  return (
    <div className="flex flex-col transition-colors duration-300">
      {/* Hero Section */}
      <section className="relative pt-12 pb-20 sm:pt-20 sm:pb-32 text-white overflow-hidden px-4 hero-gradient">
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <img src={images['it-hero']} className="w-full h-full object-cover" alt="Background" />
        </div>
        
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 sm:gap-20 items-center relative z-10">
          <div className="lg:col-span-7 text-center lg:text-left">
            <span className="inline-block px-4 py-1.5 rounded-full bg-blue-600/20 text-blue-400 text-[10px] font-black uppercase tracking-[0.2em] mb-8 border border-blue-400/20">
              Elite Technology Partner
            </span>
            <h1 className="text-fluid-h1 font-black uppercase tracking-tighter leading-[1] mb-8">
              Professional IT <br className="hidden sm:block"/>
              <span className="text-blue-500">Solutions for All.</span>
            </h1>
            <p className="text-fluid-body text-blue-100/60 font-medium leading-relaxed mb-10 max-w-2xl mx-auto lg:mx-0">
              Transforming your business through expert consulting, reliable repairs, and cutting-edge hardware implementation.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button 
                onClick={() => onNavigate('services')}
                className="cta-btn w-full sm:w-auto px-12 py-5 text-xs tracking-widest shadow-xl transition-all active:scale-95"
              >
                Our Services
              </button>
              <button 
                onClick={() => onNavigate('about')}
                className="w-full sm:w-auto px-12 py-5 bg-white/5 border border-white/10 hover:bg-white/10 text-white font-black uppercase tracking-widest text-xs rounded-2xl backdrop-blur-md transition-all active:scale-95"
              >
                Learn More
              </button>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="bg-white dark:bg-slate-900 p-8 sm:p-12 rounded-[2.5rem] sm:rounded-[4rem] text-slate-900 dark:text-white shadow-2xl border dark:border-white/5">
              <h3 className="text-2xl font-black uppercase tracking-tight mb-2">Technical Inquiry</h3>
              <p className="text-slate-400 text-[10px] font-black uppercase tracking-widest mb-8">Fast Response Guaranteed</p>
              
              <form onSubmit={handleAppointmentSubmit} className="space-y-4">
                <input 
                  type="text" placeholder="Your Name" required 
                  className="w-full h-14 px-6 bg-slate-50 dark:bg-slate-800 border border-slate-100 dark:border-white/10 rounded-2xl outline-none focus:ring-4 focus:ring-blue-100 dark:focus:ring-blue-900 transition-all font-semibold text-base dark:text-white"
                  value={appointment.name}
                  onChange={(e) => setAppointment({...appointment, name: e.target.value})}
                />
                <input 
                  type="tel" placeholder="Mobile Number" required 
                  className="w-full h-14 px-6 bg-slate-50 dark:bg-slate-800 border border-slate-100 dark:border-white/10 rounded-2xl outline-none focus:ring-4 focus:ring-blue-100 dark:focus:ring-blue-900 transition-all font-semibold text-base dark:text-white"
                  value={appointment.phone}
                  onChange={(e) => setAppointment({...appointment, phone: e.target.value})}
                />
                <textarea 
                  placeholder="How can we help?" rows={2} required
                  className="w-full p-6 bg-slate-50 dark:bg-slate-800 border border-slate-100 dark:border-white/10 rounded-2xl outline-none focus:ring-4 focus:ring-blue-100 dark:focus:ring-blue-900 transition-all font-semibold text-base dark:text-white resize-none"
                  value={appointment.message}
                  onChange={(e) => setAppointment({...appointment, message: e.target.value})}
                ></textarea>
                <button type="submit" className="w-full py-5 bg-blue-600 hover:bg-blue-700 text-white rounded-2xl font-black uppercase tracking-[0.2em] text-[10px] shadow-xl transition-all active:scale-95">
                  Send Technical Request
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Main Services Grid */}
      <section className="section-spacing px-6 bg-white dark:bg-slate-900 transition-colors duration-300">
        <div className="max-w-7xl mx-auto">
          <header className="mb-16 sm:mb-24 text-center lg:text-left">
            <h2 className="text-blue-600 font-black uppercase tracking-widest text-[10px] mb-4">Core Ecosystem</h2>
            <h3 className="text-fluid-h2 font-black text-slate-900 dark:text-white uppercase tracking-tighter leading-none">Expert Services.</h3>
          </header>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10">
            {SERVICES.slice(1, 7).map((s) => (
              <div 
                key={s.id} 
                onClick={() => onNavigate('services')}
                className="bg-slate-50 dark:bg-slate-800 p-10 rounded-[3rem] border border-slate-100 dark:border-white/5 hover:shadow-2xl transition-all duration-500 group cursor-pointer flex flex-col h-full active:scale-95"
              >
                <div className="w-16 h-16 bg-white dark:bg-slate-700 text-blue-600 dark:text-blue-400 rounded-2xl flex items-center justify-center mb-8 shadow-inner group-hover:bg-blue-600 group-hover:text-white transition-colors duration-500">
                  {s.icon}
                </div>
                <h4 className="text-xl sm:text-2xl font-black text-slate-900 dark:text-white uppercase tracking-tight mb-4 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  {s.title}
                </h4>
                <p className="text-slate-500 dark:text-slate-400 text-sm sm:text-base font-medium leading-relaxed flex-grow">
                  {s.description}
                </p>
                <div className="mt-10 pt-8 border-t border-slate-200 dark:border-white/5 flex items-center text-blue-600 dark:text-blue-400 font-black text-[10px] uppercase tracking-widest group-hover:translate-x-3 transition-transform">
                  Read More <svg className="w-4 h-4 ml-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M13 7l5 5m0 0l-5 5m5-5H6" /></svg>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="section-spacing px-6 bg-slate-50 dark:bg-slate-950 transition-colors border-y border-slate-200 dark:border-white/5">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
          <div className="lg:w-1/2 relative w-full aspect-square max-w-[500px]">
            <div className="absolute inset-0 bg-blue-600/10 rounded-[3rem] sm:rounded-[4rem] rotate-6 scale-95 translate-x-4"></div>
            <img 
              src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=800" 
              className="w-full h-full object-cover rounded-[3rem] sm:rounded-[4rem] relative z-10 shadow-2xl" 
              alt="Quality Technical Support" 
            />
            <div className="absolute -bottom-6 -right-2 sm:-bottom-12 sm:-right-8 bg-yellow-400 p-8 sm:p-12 rounded-[2.5rem] sm:rounded-[3.5rem] shadow-2xl z-20">
               <p className="text-blue-950 font-black text-4xl sm:text-6xl tracking-tighter leading-none mb-1">100%</p>
               <p className="text-blue-900 text-[9px] sm:text-[11px] font-black uppercase tracking-widest leading-tight">Elite Quality <br/>Standard</p>
            </div>
          </div>
          <div className="lg:w-1/2 space-y-8 text-center lg:text-left">
            <div>
              <h2 className="text-blue-600 font-black uppercase tracking-widest text-[10px] mb-4">Our Track Record</h2>
              <h3 className="text-fluid-h2 font-black text-slate-900 dark:text-white uppercase tracking-tighter leading-[0.95] mb-8">
                8+ Years of <br className="hidden sm:block"/><span className="text-blue-600">IT Excellence.</span>
              </h3>
            </div>
            <p className="text-slate-500 dark:text-slate-400 text-lg sm:text-xl font-medium leading-relaxed">
              We understand that downtime is expensive. Our dedicated team of engineers ensures that your systems operate at peak efficiency.
            </p>
            <div className="grid grid-cols-2 gap-6 sm:gap-10 py-8">
              <div>
                <p className="text-3xl sm:text-4xl font-black text-blue-950 dark:text-white mb-1 tracking-tighter">500+</p>
                <p className="text-[9px] font-black text-slate-400 uppercase tracking-widest">Successful Projects</p>
              </div>
              <div>
                <p className="text-3xl sm:text-4xl font-black text-blue-950 dark:text-white mb-1 tracking-tighter">98%</p>
                <p className="text-[9px] font-black text-slate-400 uppercase tracking-widest">Satisfaction Rate</p>
              </div>
            </div>
            <button onClick={() => onNavigate('portfolios')} className="cta-btn px-12 py-5 rounded-2xl tracking-widest text-[10px] transition-all shadow-xl active:scale-95 w-full sm:w-auto">
              View Our Work
            </button>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="section-spacing px-6">
        <div className="max-w-7xl mx-auto bg-blue-900 rounded-[3rem] sm:rounded-[5rem] p-12 sm:p-24 text-white text-center flex flex-col items-center shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600 rounded-full blur-[150px] opacity-20 -translate-y-1/2 translate-x-1/2"></div>
          <h3 className="text-fluid-h2 font-black uppercase tracking-tighter mb-8 sm:mb-12 relative z-10 leading-tight">
            Ready to Build <br className="hidden sm:block" /> a Better <span className="text-yellow-400">Foundation?</span>
          </h3>
          <p className="text-blue-100/60 text-lg sm:text-xl mb-12 sm:mb-16 max-w-2xl relative z-10 leading-relaxed font-medium">
            Contact Liberia's leading IT professionals today for a comprehensive technical assessment.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 w-full justify-center relative z-10">
            <a 
              href={`tel:${BRAND.phone.replace(/\D/g, '')}`}
              className="cta-btn w-full sm:w-auto px-14 py-6 rounded-2xl tracking-widest text-xs shadow-xl transition-all active:scale-95 flex items-center justify-center"
            >
              Call {BRAND.phone}
            </a>
            <button 
              onClick={() => onNavigate('contact')}
              className="w-full sm:w-auto bg-white/10 hover:bg-white/20 border border-white/20 px-14 py-6 rounded-2xl font-black uppercase tracking-widest text-xs transition-all active:scale-95"
            >
              Online Inquiry
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ITHome;
