import React, { useEffect } from 'react';
import { BRAND } from '../../constants';

interface EngineeringHomeProps {
  onNavigate: (path: string) => void;
}

const EngineeringHome: React.FC<EngineeringHomeProps> = ({ onNavigate }) => {
  useEffect(() => {
    // Handle scrolling to sections if the path matches
    const path = sessionStorage.getItem('currentPage');
    if (path === 'about' || path === 'solutions' || path === 'gallery') {
        const id = path === 'about' ? 'about-engineering' : path;
        const el = document.getElementById(id);
        if (el) {
            setTimeout(() => {
                el.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }, 100);
        }
    }
  }, []);

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative pt-20 pb-32 bg-slate-950 text-white overflow-hidden px-4">
        <div className="absolute inset-0 opacity-20 pointer-events-none bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-900/20 via-slate-950 to-slate-950"></div>
        <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px]"></div>
        
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <span className="inline-block px-4 py-1.5 rounded-full bg-blue-500/10 text-blue-400 text-[10px] font-black uppercase tracking-[0.3em] mb-8 border border-blue-500/20">
            Advanced Systems Division
          </span>
          <h1 className="text-fluid-h1 font-black uppercase tracking-tighter leading-[0.9] mb-8">
            Elite <span className="text-blue-500">Engineering.</span>
          </h1>
          <p className="text-fluid-h2 font-light uppercase tracking-[0.1em] text-slate-400 mb-12">
            Advanced Systems & Automation.
          </p>
          <p className="text-fluid-body text-slate-400 font-medium leading-relaxed mb-12 max-w-3xl mx-auto">
            We build and restore the physical world through precision engineering, industrial craftsmanship, and professional furniture restoration. From structural builds to expert repairs, we provide the expertise to fix and create.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <button 
              onClick={() => onNavigate('contact')}
              className="btn-primary"
            >
              Start Project
            </button>
            <button 
              onClick={() => {
                const el = document.getElementById('about-engineering');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
              }}
              className="btn-secondary"
            >
              Our Capabilities
            </button>
          </div>
        </div>
      </section>

      {/* About Elite Engineering */}
      <section id="about-engineering" className="section-spacing px-6 bg-white dark:bg-slate-900">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div className="space-y-8">
            <header>
              <h2 className="text-blue-600 font-black uppercase tracking-widest text-[10px] mb-4">The Engineering Core</h2>
              <h3 className="text-fluid-h2 font-black text-slate-900 dark:text-white uppercase tracking-tighter leading-none">About Elite Engineering.</h3>
            </header>
            <p className="text-slate-500 dark:text-slate-400 text-lg font-medium leading-relaxed">
              Elite Engineering is the specialized division of Elite Computer Services focused on physical infrastructure, structural integrity, and technical restoration. We bring a rigorous, hands-on approach to every build and repair.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              <div className="p-6 bg-slate-50 dark:bg-slate-800 rounded-3xl border border-slate-100 dark;border-white/5">
                <p className="text-2xl font-black text-blue-600 mb-2">Restoration</p>
                <p className="text-sm text-slate-500 dark:text-slate-400 font-medium">Expert repair of tables, chairs, and structural items.</p>
              </div>
              <div className="p-6 bg-slate-50 dark:bg-slate-800 rounded-3xl border border-slate-100 dark;border-white/5">
                <p className="text-2xl font-black text-blue-600 mb-2">Education</p>
                <p className="text-sm text-slate-500 dark:text-slate-400 font-medium">Teaching the next generation of technical fixers.</p>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="absolute inset-0 bg-blue-600/10 rounded-[4rem] -rotate-3 translate-x-4"></div>
            <img 
              src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=800" 
              className="w-full aspect-square object-cover rounded-[4rem] relative z-10 shadow-2xl" 
              alt="Engineering Excellence" 
            />
          </div>
        </div>
      </section>

      {/* Capabilities / Services */}
      <section id="solutions" className="section-spacing px-6 bg-slate-50 dark:bg-slate-900">
        <div className="max-w-7xl mx-auto">
          <header className="text-center mb-12">
            <h4 className="text-blue-950 dark:text-yellow-400 font-black uppercase tracking-widest text-[10px]">What We Do</h4>
            <h3 className="text-3xl sm:text-4xl font-black text-slate-900 dark:text-white mt-3">Engineering Capabilities</h3>
            <p className="max-w-2xl mx-auto text-slate-500 dark:text-slate-400 mt-4">From hands-on restoration to automation systems, our team delivers durable, practical solutions built to last.</p>
          </header>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="p-6 bg-white dark:bg-slate-800 rounded-3xl border border-slate-100 dark:border-white/5">
              <div className="text-4xl mb-4">🪚</div>
              <h5 className="font-black text-blue-900 mb-2">Restoration & Repair</h5>
              <p className="text-sm text-slate-500 dark:text-slate-400">Furniture, fixtures, and structural items restored to original condition with expert finishing.</p>
            </div>

            <div className="p-6 bg-white dark:bg-slate-800 rounded-3xl border border-slate-100 dark:border-white/5">
              <div className="text-4xl mb-4">🏗️</div>
              <h5 className="font-black text-blue-900 mb-2">Structural Builds</h5>
              <p className="text-sm text-slate-500 dark:text-slate-400">Small to medium scale structural assemblies for commercial and residential projects.</p>
            </div>

            <div className="p-6 bg-white dark:bg-slate-800 rounded-3xl border border-slate-100 dark:border-white/5">
              <div className="text-4xl mb-4">🤖</div>
              <h5 className="font-black text-blue-900 mb-2">Systems & Automation</h5>
              <p className="text-sm text-slate-500 dark:text-slate-400">Control systems, automation, and integration for repeatable, efficient workflows.</p>
            </div>

            <div className="p-6 bg-white dark:bg-slate-800 rounded-3xl border border-slate-100 dark:border-white/5">
              <div className="text-4xl mb-4">🛠️</div>
              <h5 className="font-black text-blue-900 mb-2">Custom Fabrication</h5>
              <p className="text-sm text-slate-500 dark:text-slate-400">CNC, metalwork and bespoke builds tailored to your exact specifications.</p>
            </div>

            <div className="p-6 bg-white dark:bg-slate-800 rounded-3xl border border-slate-100 dark:border-white/5">
              <div className="text-4xl mb-4">📋</div>
              <h5 className="font-black text-blue-900 mb-2">Site Consultation</h5>
              <p className="text-sm text-slate-500 dark:text-slate-400">On-site assessments, scope definition, and pragmatic recommendations for repair or build.</p>
            </div>

            <div className="p-6 bg-white dark:bg-slate-800 rounded-3xl border border-slate-100 dark:border-white/5">
              <div className="text-4xl mb-4">🏫</div>
              <h5 className="font-black text-blue-900 mb-2">Workshops & Training</h5>
              <p className="text-sm text-slate-500 dark:text-slate-400">Hands-on classes teaching restoration, fabrication, and basic mechanical systems.</p>
            </div>
          </div>

          <div className="mt-10 flex gap-4 justify-center">
            <button onClick={() => onNavigate('portfolios')} className="btn-secondary">View Projects</button>
            <button onClick={() => onNavigate('contact')} className="btn-primary">Get a Quote</button>
          </div>
        </div>
      </section>

      {/* Projects / Portfolio */}
      <section className="section-spacing px-6 bg-white dark:bg-slate-900">
        <div className="max-w-7xl mx-auto">
          <header className="mb-8 text-center">
            <h4 className="text-blue-950 dark:text-yellow-400 font-black uppercase tracking-widest text-[10px]">Selected Work</h4>
            <h3 className="text-2xl font-black text-slate-900 dark:text-white mt-3">Recent Projects</h3>
          </header>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1,2,3].map(i => (
              <div key={i} className="rounded-2xl overflow-hidden bg-slate-50 dark:bg-slate-800 shadow-lg">
                <img src={`https://images.unsplash.com/photo-1${i}00?auto=format&fit=crop&q=80&w=800`} alt={`Project ${i}`} className="w-full h-52 object-cover"/>
                <div className="p-4">
                  <h5 className="font-black text-blue-900">Project {i} — Structural Upgrade</h5>
                  <p className="text-sm text-slate-500 mt-2">A focused scope involving reinforcement, finishing and system integration.</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="section-spacing px-6 bg-slate-50 dark:bg-slate-900">
        <div className="max-w-4xl mx-auto text-center">
          <h4 className="text-blue-950 dark:text-yellow-400 font-black uppercase tracking-widest text-[10px]">Our Approach</h4>
          <h3 className="text-2xl font-black text-slate-900 dark:text-white mt-3">How We Work</h3>
          <div className="grid grid-cols-1 sm:grid-cols-4 gap-6 mt-8 text-left">
            <div className="p-6 bg-white dark:bg-slate-800 rounded-2xl border border-slate-100 dark:border-white/5">
              <div className="text-2xl font-black text-blue-900 mb-2">1</div>
              <p className="font-black uppercase text-[10px] text-slate-400 mb-2">Discover</p>
              <p className="text-sm text-slate-500">Site survey and requirement gathering.</p>
            </div>
            <div className="p-6 bg-white dark:bg-slate-800 rounded-2xl border border-slate-100 dark:border-white/5">
              <div className="text-2xl font-black text-blue-900 mb-2">2</div>
              <p className="font-black uppercase text-[10px] text-slate-400 mb-2">Plan</p>
              <p className="text-sm text-slate-500">Design and materials selection with clear milestones.</p>
            </div>
            <div className="p-6 bg-white dark:bg-slate-800 rounded-2xl border border-slate-100 dark:border-white/5">
              <div className="text-2xl font-black text-blue-900 mb-2">3</div>
              <p className="font-black uppercase text-[10px] text-slate-400 mb-2">Build</p>
              <p className="text-sm text-slate-500">Precision fabrication and onsite assembly.</p>
            </div>
            <div className="p-6 bg-white dark:bg-slate-800 rounded-2xl border border-slate-100 dark:border-white/5">
              <div className="text-2xl font-black text-blue-900 mb-2">4</div>
              <p className="font-black uppercase text-[10px] text-slate-400 mb-2">Deliver</p>
              <p className="text-sm text-slate-500">Handover, documentation and optional training.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-spacing px-6 bg-white dark:bg-slate-900">
        <div className="max-w-6xl mx-auto text-center">
          <h4 className="text-blue-950 dark:text-yellow-400 font-black uppercase tracking-widest text-[10px]">Client Voices</h4>
          <h3 className="text-2xl font-black text-slate-900 dark:text-white mt-3">Trusted by Local Partners</h3>
          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 bg-slate-50 dark:bg-slate-800 rounded-2xl border border-slate-100 dark:border-white/5">
              <p className="italic text-slate-600 dark:text-slate-400">"They restored our conference tables to like-new condition and improved the structural supports — professional and timely."</p>
              <p className="mt-4 font-black">— A. Cooper, Paynesville Clinic</p>
            </div>
            <div className="p-6 bg-slate-50 dark:bg-slate-800 rounded-2xl border border-slate-100 dark:border-white/5">
              <p className="italic text-slate-600 dark:text-slate-400">"Their automation solution cut our assembly time in half. Skilled team and great communication."</p>
              <p className="mt-4 font-black">— L. Johnson, Coastal Furnishings</p>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section id="gallery" className="section-spacing px-6 bg-slate-50 dark:bg-slate-900">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-2xl font-black text-slate-900 dark:text-white">Gallery</h3>
            <button onClick={() => onNavigate('portfolios')} className="text-sm font-black text-blue-600">See Full Portfolio</button>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {[1,2,3,4].map(i => (
              <div key={i} className="h-36 overflow-hidden rounded-2xl bg-white dark:bg-slate-800">
                <img src={`https://images.unsplash.com/photo-15${i}00?auto=format&fit=crop&q=80&w=800`} alt={`Gallery ${i}`} className="w-full h-full object-cover"/>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="section-spacing px-6 bg-blue-950 text-white">
        <div className="max-w-7xl mx-auto text-center">
          <h3 className="text-3xl font-black mb-4">Ready to start your project?</h3>
          <p className="text-blue-100/80 max-w-2xl mx-auto mb-8">Tell us about your site, scope, or the item you want restored — we'll provide a clear plan and estimate.</p>
          <div className="flex gap-4 justify-center">
            <button onClick={() => onNavigate('contact')} className="btn-primary">Contact Engineering</button>
            <button onClick={() => onNavigate('portfolios')} className="btn-secondary">View Work</button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default EngineeringHome;