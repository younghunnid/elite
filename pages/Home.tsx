
import React from 'react';
import { SERVICES, BRAND, IMAGES } from '../constants';

interface HomeProps {
  onNavigate: (path: string) => void;
}

const Home: React.FC<HomeProps> = ({ onNavigate }) => {
  const handleScheduleClick = () => {
    onNavigate('services');
    setTimeout(() => {
      const element = document.getElementById('school-schedule');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }, 200);
  };

  const steps = [
    {
      num: "1.",
      title: "Discovery",
      desc: "We delve into understanding the project requirement, goals and constraints. We gather information, conduct reseach, etc."
    },
    {
      num: "2.",
      title: "Planning",
      desc: "Based on the insights from the dicovey phase, we create a detail plan by defining milestones, allocating resources, etc."
    },
    {
      num: "3.",
      title: "Execute",
      desc: "With the plan in place, we start to implementing the project. This involves design, development, testing, and interation."
    },
    {
      num: "4.",
      title: "Deliver",
      desc: "Once the project is complete, we deliver the final product or service to the client. We ensure quality, address any remaining issues, etc."
    }
  ];

  return (
    <div className="space-y-0 overflow-x-hidden transition-colors duration-300">
      {/* Hero Section */}
      <section className="relative py-16 sm:py-24 lg:py-40 text-white overflow-hidden hero-gradient">
        <div className="absolute inset-0 opacity-20 pointer-events-none">
          <img src={IMAGES.hero} alt="Tech Background" className="w-full h-full object-cover" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center lg:text-left lg:w-2/3">
            <div className="inline-block bg-blue-500/20 text-blue-400 px-4 py-2 rounded-full text-[9px] sm:text-[10px] font-bold tracking-widest uppercase mb-6 border border-blue-500/30">
              {BRAND.motto}
            </div>
            <h1 className="text-3xl xs:text-4xl sm:text-6xl lg:text-8xl font-black leading-tight mb-6 sm:mb-8 uppercase tracking-tighter">
              Elite <span className="text-yellow-400">IT</span> Solutions.
            </h1>
            <p className="text-sm sm:text-base md:text-xl text-blue-100 mb-8 sm:mb-10 max-w-2xl mx-auto lg:mx-0 leading-relaxed opacity-90 font-medium">
              We empower Liberia through cutting-edge technology literacy and professional IT services. Your solid foundation for a greater future.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button 
                onClick={() => onNavigate('services')}
                className="cta-btn px-8 py-4 sm:py-5 rounded-xl text-xs tracking-widest shadow-xl active:scale-95"
              >
                Explore IT Solutions
              </button>
              <button 
                onClick={() => onNavigate('contact')}
                className="bg-white/10 hover:bg-white/20 text-white border border-white/30 backdrop-blur-md px-8 py-4 sm:py-5 rounded-xl font-black text-xs uppercase tracking-widest transition-all"
              >
                Schedule Appointment
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 sm:py-32 px-4 bg-white dark:bg-slate-900 overflow-hidden transition-colors duration-300">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            <div className="relative order-2 lg:order-1">
              <div className="aspect-[4/5] rounded-[3rem] sm:rounded-[5rem] overflow-hidden shadow-2xl relative z-10 group">
                <img 
                  src={IMAGES.hero} 
                  alt="Quality Assurance" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
                />
                <div className="absolute inset-0 bg-blue-900/10"></div>
              </div>
              <div className="absolute -bottom-8 -right-8 sm:-bottom-12 sm:-right-12 bg-yellow-400 p-8 sm:p-12 rounded-[2.5rem] sm:rounded-[4rem] shadow-2xl z-20">
                <p className="text-blue-950 font-black text-4xl sm:text-6xl tracking-tighter leading-none mb-2">100%</p>
                <p className="text-blue-900 text-[9px] sm:text-[11px] font-black uppercase tracking-widest">Satisfaction<br/>Guaranteed</p>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="text-blue-600 font-black uppercase tracking-widest text-[10px] mb-4">The Elite Advantage</h2>
              <h3 className="text-3xl sm:text-5xl lg:text-6xl font-black text-slate-900 dark:text-white uppercase tracking-tighter leading-none mb-8 sm:mb-12">
                Why Choose <br/><span className="text-blue-600">Our Services?</span>
              </h3>
              
              <div className="space-y-10 sm:space-y-16">
                <div className="flex gap-6 items-start group">
                  <div className="w-14 h-14 sm:w-20 sm:h-20 bg-blue-50 dark:bg-slate-800 text-blue-600 rounded-2xl sm:rounded-3xl flex items-center justify-center text-3xl sm:text-4xl flex-shrink-0 group-hover:bg-blue-600 group-hover:text-white transition-all shadow-inner">⚡</div>
                  <div>
                    <h4 className="text-xl sm:text-2xl font-black text-blue-950 dark:text-white uppercase tracking-tight mb-3">Unmatched Speed</h4>
                    <p className="text-slate-500 dark:text-slate-400 text-sm sm:text-base font-medium leading-relaxed">
                      We understand that downtime costs money. Our priority-based service model ensures same-day diagnostics and rapid turnaround for all technical repairs.
                    </p>
                  </div>
                </div>

                <div className="flex gap-6 items-start group">
                  <div className="w-14 h-14 sm:w-20 sm:h-20 bg-blue-50 dark:bg-slate-800 text-blue-600 rounded-2xl sm:rounded-3xl flex items-center justify-center text-3xl sm:text-4xl flex-shrink-0 group-hover:bg-blue-600 group-hover:text-white transition-all shadow-inner">🛡️</div>
                  <div>
                    <h4 className="text-xl sm:text-2xl font-black text-blue-950 dark:text-white uppercase tracking-tight mb-3">Absolute Reliability</h4>
                    <p className="text-slate-500 dark:text-slate-400 text-sm sm:text-base font-medium leading-relaxed">
                      Trust is earned. With 8+ years of field experience in Liberia, we follow strict data integrity protocols and only use high-standard genuine components.
                    </p>
                  </div>
                </div>

                <div className="flex gap-6 items-start group">
                  <div className="w-14 h-14 sm:w-20 sm:h-20 bg-blue-50 dark:bg-slate-800 text-blue-600 rounded-2xl sm:rounded-3xl flex items-center justify-center text-3xl sm:text-4xl flex-shrink-0 group-hover:bg-blue-600 group-hover:text-white transition-all shadow-inner">👨‍🔬</div>
                  <div>
                    <h4 className="text-xl sm:text-2xl font-black text-blue-950 dark:text-white uppercase tracking-tight mb-3">Expert Expertise</h4>
                    <p className="text-slate-500 dark:text-slate-400 text-sm sm:text-base font-medium leading-relaxed">
                      Our team consists of certified hardware engineers and system architects specializing in complex logic-board repairs and enterprise network design.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Welcome Section */}
      <section className="py-16 sm:py-24 bg-slate-50 dark:bg-slate-950 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className="relative order-2 lg:order-1 px-4 lg:px-0">
              <div className="aspect-square bg-blue-100 dark:bg-slate-800 rounded-[2rem] sm:rounded-[4rem] overflow-hidden shadow-2xl border-4 sm:border-8 border-white dark:border-slate-800">
                 <img src={IMAGES.welcome} alt="Welcome" className="w-full h-full object-cover" />
              </div>
              <div className="absolute -bottom-4 -right-2 sm:-bottom-10 sm:-right-10 w-40 h-40 sm:w-72 sm:h-72 bg-yellow-400 rounded-[2rem] sm:rounded-[3rem] p-6 sm:p-12 shadow-2xl flex flex-col justify-center border-4 sm:border-8 border-white dark:border-slate-800">
                 <p className="text-blue-900 font-black text-lg sm:text-2xl mb-1 sm:mb-4 leading-tight uppercase tracking-tight">Solid <br/>Foundation</p>
                 <p className="text-blue-800 text-[7px] sm:text-[10px] font-black uppercase tracking-[0.2em] opacity-80">Empowering technical growth in Liberia.</p>
              </div>
            </div>
            <div className="order-1 lg:order-2 px-4 sm:px-0">
              <h2 className="text-blue-600 font-black uppercase tracking-[0.2em] text-[10px] mb-4">Welcome to Elites</h2>
              <h3 className="text-2xl sm:text-4xl md:text-5xl font-black text-slate-900 dark:text-white mb-6 sm:mb-8 uppercase tracking-tighter leading-tight">Gateway to the Digital World.</h3>
              <div className="space-y-4 sm:space-y-6 text-slate-600 dark:text-slate-300 text-sm sm:text-lg leading-relaxed font-medium">
                <p>
                  At <strong>Elites Computer Services</strong>, we provide the utmost quality in consumer electronics, website development, and professional technical education.
                </p>
                <p>
                  Our mission is to empower individuals and businesses with cutting-edge solutions that eliminate technical barriers and drive growth in Paynesville and across Liberia.
                </p>
                <div className="pt-4 sm:pt-8">
                  <button onClick={() => onNavigate('about')} className="text-blue-600 dark:text-blue-400 font-black flex items-center group uppercase tracking-widest text-[9px] sm:text-[10px] bg-blue-50 dark:bg-slate-800 px-4 sm:px-6 py-3 rounded-xl hover:bg-blue-100 dark:hover:bg-slate-700 transition-colors w-full sm:w-auto justify-center sm:justify-start">
                    Learn our full story
                    <svg className="w-4 h-4 ml-2 sm:ml-3 transform group-hover:translate-x-3 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M13 7l5 5m0 0l-5 5m5-5H6" /></svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services snapshot */}
      <section className="py-16 sm:py-24 bg-white dark:bg-slate-900 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-10 sm:mb-16">
          <h2 className="text-blue-600 font-black uppercase tracking-[0.2em] text-[10px] mb-4">Our Expertise</h2>
          <h3 className="text-2xl sm:text-4xl font-black text-slate-900 dark:text-white uppercase tracking-tighter mb-4 px-2">We Offering All Kinds of IT Solutions</h3>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {SERVICES.slice(0, 6).map((s) => (
            <div key={s.id} className="bg-slate-50 dark:bg-slate-800 p-8 sm:p-12 rounded-[2rem] sm:rounded-[3rem] shadow-sm hover:shadow-xl transition-all border border-slate-100 dark:border-white/5 group cursor-pointer" onClick={() => onNavigate('services')}>
              <div className="w-12 h-12 sm:w-16 h-16 bg-white dark:bg-slate-700 text-blue-600 dark:text-blue-400 rounded-xl sm:rounded-2xl flex items-center justify-center mb-6 sm:mb-8 group-hover:bg-blue-600 group-hover:text-white transition-colors shadow-inner">
                {s.icon}
              </div>
              <h4 className="text-xl sm:text-2xl font-black mb-3 sm:mb-4 text-slate-900 dark:text-white uppercase tracking-tight leading-tight">{s.title}</h4>
              <p className="text-slate-500 dark:text-slate-400 mb-6 sm:mb-8 leading-relaxed font-medium text-xs sm:text-sm">{s.description}</p>
              <div className="flex items-center text-blue-600 dark:text-blue-400 font-black text-[9px] sm:text-[10px] uppercase tracking-widest group-hover:translate-x-3 transition-transform">
                Read More <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M9 5l7 7-7 7" /></svg>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Call CTA */}
      <section className="py-16 sm:py-24 bg-blue-600 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="bg-blue-950 rounded-[2.5rem] sm:rounded-[4rem] p-8 sm:p-12 md:p-20 text-white shadow-2xl text-center lg:text-left flex flex-col lg:flex-row items-center gap-10 lg:gap-16">
            <div className="lg:w-2/3">
              <h3 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl font-black uppercase tracking-tighter mb-6 sm:mb-8 leading-tight">CALL US 24/7 <br className="hidden sm:block" /> <span className="text-yellow-400 break-all">{BRAND.phone}</span></h3>
              <p className="text-blue-100 text-sm sm:text-xl font-medium leading-relaxed opacity-80">
                Do you need Computer Education? Or have an idea or project in mind, call us or schedule an appointment.
              </p>
            </div>
            <div className="lg:w-1/3 w-full space-y-4">
              <a href={`tel:${BRAND.phone.replace(/\D/g, '')}`} className="block w-full text-center bg-yellow-400 text-blue-950 py-4 sm:py-6 rounded-2xl font-black uppercase tracking-widest text-[10px] sm:text-sm shadow-xl active:scale-95 transition-all">
                Call Now
              </a>
              <button onClick={() => onNavigate('contact')} className="block w-full text-center bg-white/10 hover:bg-white/20 text-white border border-white/20 py-4 sm:py-6 rounded-2xl font-black uppercase tracking-widest text-[10px] sm:text-sm transition-all">
                Send Inquiry
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 sm:py-24 bg-white dark:bg-slate-900 px-4 transition-colors duration-300">
        <div className="max-w-7xl mx-auto text-center mb-10 sm:mb-20">
          <h2 className="text-blue-600 font-black uppercase tracking-[0.2em] text-[10px] mb-4">Our Methodology</h2>
          <h3 className="text-2xl sm:text-4xl font-black text-slate-900 dark:text-white uppercase tracking-tighter">Working Process</h3>
        </div>
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-12">
          {steps.map((step, i) => (
            <div key={i} className="relative p-8 sm:p-10 bg-slate-50 dark:bg-slate-800 rounded-[2.5rem] sm:rounded-[3rem] border border-slate-100 dark:border-white/5 hover:shadow-xl transition-all group overflow-hidden">
              <div className="absolute -top-4 -left-4 text-5xl sm:text-8xl font-black text-blue-100/20 dark:text-blue-900/10 group-hover:text-blue-200/40 transition-colors pointer-events-none">{step.num}</div>
              <div className="relative z-10">
                <h4 className="text-lg sm:text-xl font-black text-slate-900 dark:text-white mb-3 sm:mb-4 uppercase tracking-tight leading-tight">{step.title}</h4>
                <p className="text-slate-500 dark:text-slate-400 font-medium leading-relaxed text-xs sm:text-sm">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Office CTA */}
      <section className="bg-yellow-400 py-12 sm:py-20 border-y-4 sm:border-y-8 border-blue-950 px-4">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center text-blue-950 gap-8">
          <div className="flex items-center text-center md:text-left">
            <div className="hidden sm:block bg-blue-950 text-white p-5 rounded-3xl mr-8 shadow-2xl">
              <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
            </div>
            <div>
              <p className="font-black text-xl sm:text-3xl uppercase tracking-tighter leading-tight">Visit Paynesville Office</p>
              <p className="font-bold opacity-80 uppercase tracking-widest text-[8px] sm:text-xs">{BRAND.address}</p>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 w-full md:w-auto">
             <button onClick={handleScheduleClick} className="bg-blue-950 text-white px-8 py-4 sm:py-5 rounded-2xl font-black uppercase tracking-widest text-[9px] sm:text-[10px] hover:bg-blue-900 transition-all shadow-2xl active:scale-95">
              School Schedule
             </button>
             <button onClick={() => onNavigate('contact')} className="bg-white text-blue-900 px-8 py-4 sm:py-5 rounded-2xl font-black uppercase tracking-widest text-[9px] sm:text-[10px] hover:bg-slate-50 transition-all shadow-xl">
              Get Directions
             </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
