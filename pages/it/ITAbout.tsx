
import React, { useState } from 'react';
import { BRAND, TEAM_MEMBERS } from '../../constants';
import { useImages } from '../../ImageContext';

interface ITAboutProps {
  onNavigate: (path: string) => void;
}

const ITAbout: React.FC<ITAboutProps> = ({ onNavigate }) => {
  const { images } = useImages();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    website: '',
    message: ''
  });

  const handleConsultationSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const subject = `Consultation Request from ${formData.name}`;
    const body = `Name: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone}\nWebsite: ${formData.website}\n\nMessage:\n${formData.message}`;
    
    window.location.href = `mailto:${BRAND.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    alert("Consultation inquiry prepared! Opening your email application...");
    setFormData({ name: '', email: '', phone: '', website: '', message: '' });
  };

  const steps = [
    {
      id: "1.",
      title: "Discovery",
      desc: "We delve into understanding the project requirement, goals and constraints. We gather information, conduct research, etc.",
      icon: "🔍"
    },
    {
      id: "2.",
      title: "Planning",
      desc: "Based on the insights from the discovery phase, we create a detail plan by defining milestones, allocating resources, etc.",
      icon: "📝"
    },
    {
      id: "3.",
      title: "Execute",
      desc: "With the plan in place, we start to implementing the project. This involves design, development, testing, and iteration.",
      icon: "⚙️"
    },
    {
      id: "4.",
      title: "Deliver",
      desc: "Once the project is complete, we deliver the final product or service to the client. We ensure quality, address any remaining issues, etc.",
      icon: "🚀"
    }
  ];

  return (
    <div className="bg-white dark:bg-slate-950 min-h-screen transition-colors duration-300">
      {/* Hero Header */}
      <section className="bg-blue-950 text-white py-24 sm:py-32 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/grid-me.png')]"></div>
        <div className="max-w-7xl mx-auto px-4 relative z-10 text-center">
          <h1 className="text-5xl sm:text-7xl font-black uppercase tracking-tighter mb-4">About</h1>
          <nav className="text-blue-400 font-bold uppercase tracking-widest text-[10px] sm:text-xs">
            Elites Computer Services &gt; <span className="text-white">About</span>
          </nav>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-24 px-4 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="grid grid-cols-2 gap-4">
            <img src={images['about-main']} className="rounded-[2rem] shadow-xl aspect-square object-cover" alt="Technical Excellence" />
            <img src={images['about-side-1']} className="rounded-[2rem] shadow-xl mt-12 aspect-square object-cover" alt="Team workspace" />
            <img src={images['about-side-1']} className="rounded-[2rem] shadow-xl col-span-2 mt-4 h-64 w-full object-cover" alt="Technical setup" />
          </div>
          <div className="space-y-8">
            <div>
              <h2 className="text-blue-600 font-black uppercase tracking-widest text-[10px] mb-4">ABOUT US</h2>
              <h3 className="text-3xl sm:text-5xl font-black text-slate-900 dark:text-white uppercase tracking-tighter leading-tight">
                We Provide <br/><span className="text-blue-600">The Utmost Quality</span>
              </h3>
            </div>
            <p className="text-slate-600 text-lg leading-relaxed font-medium">
              Our mission is to empower individuals and businesses by providing cutting-edge solutions in the realm of consumer electronics, website development, and online services.
            </p>
            {/* service stats */}
            <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex justify-between">
                <span className="font-semibold">Computer School</span>
                <span className="font-black">99%</span>
              </div>
              <div className="flex justify-between">
                <span className="font-semibold">Computer Repair</span>
                <span className="font-black">90%</span>
              </div>
              <div className="flex justify-between">
                <span className="font-semibold">Custom Built</span>
                <span className="font-black">95%</span>
              </div>
              <div className="flex justify-between">
                <span className="font-semibold">Industrial Laser Printing</span>
                <span className="font-black">92%</span>
              </div>
            </div>
            
            <div className="space-y-6 pt-6">
              <h4 className="text-blue-950 font-black uppercase tracking-tight text-xl">Our Commitment:</h4>
              <div className="grid grid-cols-1 gap-6">
                {[
                  { title: "Cutting-Edge Services", desc: "Elites offers a wide range of computer services, including hardware maintenance, software development, and network solutions. Our team of experts ensures seamless operations for businesses and individuals alike.", icon: "💎" },
                  { title: "Empowering Minds", desc: "Education is our passion. We conduct workshops, training programs, and certification courses to equip learners with essential computer skills. From coding to cybersecurity, we cover it all.", icon: "🧠" },
                  { title: "Community Impact", desc: "Elites Computer Services actively engages with local schools, colleges, and community centers to bridge the digital divide. We believe that everyone deserves access to quality computer education.", icon: "🤝" }
                ].map((item, i) => (
                  <div key={i} className="flex gap-6 p-8 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white rounded-[2.5rem] border border-slate-100 dark:border-white/5 hover:bg-white dark:hover:bg-slate-800 hover:shadow-xl transition-all group">
                    <span className="text-4xl">{item.icon}</span>
                    <div>
                      <h5 className="font-black text-blue-950 dark:text-white uppercase tracking-tight mb-2 group-hover:text-blue-600 transition-colors">{item.title}</h5>
                      <p className="text-slate-500 dark:text-slate-200 text-sm leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="pt-8">
              <button onClick={() => onNavigate('services')} className="bg-blue-600 text-white px-10 py-5 rounded-2xl font-black uppercase tracking-widest text-xs shadow-xl hover:bg-blue-700 transition-all active:scale-95">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-24 px-4 bg-slate-50 dark:bg-slate-950 transition-colors duration-300">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-blue-600 font-black uppercase tracking-widest text-[10px] mb-4">Team</h2>
            <h3 className="text-3xl sm:text-5xl font-black text-slate-900 dark:text-white uppercase tracking-tighter">Meet With IT Experts</h3>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {TEAM_MEMBERS.map((member, i) => (
              <div key={i} className="bg-white dark:bg-slate-900 rounded-[3rem] overflow-hidden shadow-sm border border-slate-100 dark:border-white/5 group hover:shadow-xl transition-all duration-500 flex flex-col h-full text-slate-900 dark:text-white">
                <div className="h-72 overflow-hidden relative">
                  <img src={member.img} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" alt={member.name} />
                  <div className="absolute inset-0 bg-gradient-to-t from-blue-950/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-8">
                    <p className="text-white text-[10px] font-black uppercase tracking-widest">Expert Professional</p>
                  </div>
                </div>
                <div className="p-10 flex flex-col flex-grow">
                  <p className="text-blue-600 dark:text-blue-400 font-black text-[10px] uppercase tracking-widest mb-2">{member.role}</p>
                  <h4 className="text-2xl font-black text-blue-950 dark:text-white uppercase tracking-tight mb-4">{member.name}</h4>
                  <p className="text-slate-500 dark:text-slate-200 text-sm leading-relaxed font-medium flex-grow">{member.bio}</p>
                  <div className="mt-8 pt-6 border-t border-slate-50 dark:border-white/10 flex gap-4">
                     {['LinkedIn', 'Twitter'].map(s => (
                       <button key={s} className="text-slate-400 dark:text-slate-300 hover:text-blue-600 transition-colors text-[9px] font-black uppercase tracking-widest">{s}</button>
                     ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 bg-white dark:bg-slate-900 px-4 border-t border-slate-100 dark:border-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-blue-600 font-black uppercase tracking-widest text-[10px] mb-4">Process</h2>
            <h3 className="text-3xl sm:text-5xl font-black text-slate-900 dark:text-white uppercase tracking-tighter">Our Working Process</h3>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, i) => (
              <div key={i} className="bg-slate-50 dark:bg-slate-800 p-12 rounded-[4rem] shadow-sm border border-slate-100 dark:border-white/5 text-center relative group hover:bg-white dark:hover:bg-slate-800 hover:shadow-xl transition-all">
                <div className="absolute top-0 right-0 p-8 text-5xl font-black text-slate-100 group-hover:text-blue-50 transition-colors">{step.id}</div>
                <div className="text-5xl mb-8 transform group-hover:scale-110 transition-transform relative z-10">{step.icon}</div>
                <h4 className="text-2xl font-black uppercase tracking-tight text-blue-950 mb-4 relative z-10">{step.title}</h4>
                <p className="text-slate-500 text-xs font-medium leading-relaxed relative z-10">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Consultation Form */}
      <section className="py-24 px-4 bg-slate-50 border-t border-slate-100">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div className="bg-blue-900 text-white p-16 sm:p-24 rounded-[5rem] shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600 rounded-full blur-[100px] opacity-20 -translate-y-1/2 translate-x-1/2"></div>
            <h2 className="text-4xl sm:text-6xl font-black uppercase tracking-tighter leading-none mb-10 relative z-10">
              Join us on this <br/><span className="text-blue-400">journey toward</span> <br/>a smarter world.
            </h2>
            <p className="text-blue-100/60 text-lg font-medium leading-relaxed mb-12 relative z-10">
              Whether you’re a business seeking reliable IT solutions or an aspiring tech enthusiast, Elites Computer Company is here to elevate your experience.
            </p>
            <div className="flex items-center gap-6 relative z-10">
              <div className="w-16 h-16 bg-blue-600 rounded-2xl flex items-center justify-center text-2xl">⚡</div>
              <div>
                <p className="text-[10px] font-black uppercase tracking-widest text-blue-400">Ready to Elevate?</p>
                <p className="text-xl font-black">Fill out the form for a free talk</p>
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-slate-900 p-12 sm:p-20 rounded-[5rem] shadow-2xl border border-slate-100 dark:border-white/5">
            <div className="mb-12">
              <h2 className="text-blue-600 font-black uppercase tracking-widest text-[10px] mb-4">Contact</h2>
              <h3 className="text-3xl font-black text-slate-900 dark:text-white uppercase tracking-tighter leading-tight">Request A Free Consultation</h3>
            </div>
            
            <form onSubmit={handleConsultationSubmit} className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-4">Name</label>
                <input 
                  type="text" required
                  className="w-full px-8 py-5 bg-slate-50 dark:bg-slate-800 border border-slate-100 dark:border-white/5 rounded-3xl outline-none focus:ring-4 focus:ring-blue-100 transition-all font-medium"
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-4">E-Mail</label>
                <input 
                  type="email" required
                  className="w-full px-8 py-5 bg-slate-50 dark:bg-slate-800 border border-slate-100 dark:border-white/5 rounded-3xl outline-none focus:ring-4 focus:ring-blue-100 transition-all font-medium"
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-4">Phone Number</label>
                <input 
                  type="tel" required
                  className="w-full px-8 py-5 bg-slate-50 dark:bg-slate-800 border border-slate-100 dark:border-white/5 rounded-3xl outline-none focus:ring-4 focus:ring-blue-100 transition-all font-medium"
                  value={formData.phone}
                  onChange={(e) => setFormData({...formData, phone: e.target.value})}
                />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-4">Your Website</label>
                <input 
                  type="url"
                  placeholder="https://"
                  className="w-full px-8 py-5 bg-slate-50 dark:bg-slate-800 border border-slate-100 dark:border-white/5 rounded-3xl outline-none focus:ring-4 focus:ring-blue-100 transition-all font-medium"
                  value={formData.website}
                  onChange={(e) => setFormData({...formData, website: e.target.value})}
                />
              </div>
              <div className="space-y-2 sm:col-span-2">
                <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-4">Your Message Here</label>
                <textarea 
                  rows={4} required
                  className="w-full px-8 py-5 bg-slate-50 dark:bg-slate-800 border border-slate-100 dark:border-white/5 rounded-3xl outline-none focus:ring-4 focus:ring-blue-100 transition-all font-medium"
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                ></textarea>
              </div>
              <button 
                type="submit" 
                className="sm:col-span-2 bg-blue-600 hover:bg-blue-700 text-white py-6 rounded-3xl font-black uppercase tracking-widest text-xs shadow-xl transition-all active:scale-95"
              >
                Request Free Consultation
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ITAbout;
