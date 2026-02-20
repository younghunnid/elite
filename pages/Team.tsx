
import React from 'react';
import { TEAM_MEMBERS, BRAND } from '../constants';

const Team: React.FC = () => {
  return (
    <div className="bg-slate-50 dark:bg-slate-950 min-h-screen pb-24 transition-colors duration-300">
      {/* Team Hero */}
      <section className="bg-blue-950 py-24 sm:py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <h2 className="text-yellow-400 font-black uppercase tracking-[0.3em] text-[10px] sm:text-xs mb-4">Our Technical Force</h2>
          <h1 className="text-4xl sm:text-6xl font-black text-white uppercase tracking-tighter mb-6">Meet The <span className="text-blue-400">Elite</span> Experts</h1>
          <p className="text-blue-100/60 max-w-2xl mx-auto text-base sm:text-lg font-medium leading-relaxed">
            A diverse collective of engineers, educators, and specialists committed to technical excellence in Paynesville and beyond.
          </p>
        </div>
      </section>

      {/* Team Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-16 relative z-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-12">
          {TEAM_MEMBERS.map((m) => (
            <div key={m.name} className="bg-white dark:bg-slate-900 rounded-[2.5rem] overflow-hidden shadow-xl border border-slate-100 dark:border-white/5 group hover:shadow-2xl transition-all duration-500 flex flex-col h-full">
              <div className="relative h-80 overflow-hidden">
                <img 
                  src={m.img} 
                  alt={m.name} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 grayscale group-hover:grayscale-0" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-950/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-8">
                   <div className="flex space-x-3">
                      {m.socials?.linkedin && (
                        <div className="w-10 h-10 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center hover:bg-yellow-400 hover:text-blue-900 transition-colors cursor-pointer">
                          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
                        </div>
                      )}
                      {m.socials?.twitter && (
                        <div className="w-10 h-10 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center hover:bg-yellow-400 hover:text-blue-900 transition-colors cursor-pointer">
                          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/></svg>
                        </div>
                      )}
                   </div>
                </div>
              </div>
              <div className="p-8 flex flex-col flex-grow">
                <p className="text-blue-600 dark:text-blue-400 font-black text-[10px] uppercase tracking-widest mb-2">{m.role}</p>
                <h3 className="text-2xl font-black text-slate-900 dark:text-white mb-4">{m.name}</h3>
                <p className="text-slate-500 dark:text-slate-400 font-medium text-sm leading-relaxed mb-6">
                  {m.bio}
                </p>
                <div className="mt-auto pt-6 border-t border-slate-100 dark:border-white/5 flex items-center text-blue-900 dark:text-blue-400 font-bold text-[10px] uppercase tracking-widest cursor-pointer hover:text-blue-600 transition-colors group/link">
                  View Full Profile
                  <svg className="w-4 h-4 ml-2 transform group-hover/link:translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M9 5l7 7-7 7" /></svg>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Join Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-24">
        <div className="bg-yellow-400 rounded-[3rem] p-10 sm:p-20 flex flex-col lg:flex-row items-center justify-between gap-12 text-blue-950 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 opacity-10 transform translate-x-1/4 -translate-y-1/4">
             <svg className="w-96 h-96" fill="currentColor" viewBox="0 0 200 200"><circle cx="100" cy="100" r="100"/></svg>
          </div>
          <div className="relative z-10 lg:w-3/5 text-center lg:text-left">
            <h2 className="text-3xl sm:text-5xl font-black uppercase tracking-tighter mb-6">Want to Join the <span className="underline decoration-blue-900 decoration-8 underline-offset-8">Elite</span> Force?</h2>
            <p className="text-lg font-bold opacity-80 leading-relaxed">
              We're always looking for talented instructors, hardware geniuses, and creative professionals to join our Paynesville branch.
            </p>
          </div>
          <div className="relative z-10 lg:w-2/5 w-full">
            <a 
              href={`mailto:${BRAND.email}`} 
              className="block w-full text-center bg-blue-950 text-white py-6 rounded-2xl font-black uppercase tracking-[0.2em] text-xs sm:text-sm hover:bg-blue-900 transition-all shadow-xl active:scale-95"
            >
              Send Resume
            </a>
          </div>
        </div>
      </section>

      {/* Culture Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-24 text-center">
        <h2 className="text-slate-400 dark:text-slate-500 font-black uppercase tracking-[0.3em] text-[10px] mb-8">Our Core Culture</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
          <div className="space-y-4">
             <div className="text-3xl font-black text-blue-600 dark:text-blue-400 uppercase tracking-tighter">Speed</div>
             <p className="text-[10px] text-slate-500 dark:text-slate-400 font-black uppercase tracking-widest">Rapid Response</p>
          </div>
          <div className="space-y-4">
             <div className="text-3xl font-black text-blue-600 dark:text-blue-400 uppercase tracking-tighter">Trust</div>
             <p className="text-[10px] text-slate-500 dark:text-slate-400 font-black uppercase tracking-widest">Data Integrity</p>
          </div>
          <div className="space-y-4">
             <div className="text-3xl font-black text-blue-600 dark:text-blue-400 uppercase tracking-tighter">Skill</div>
             <p className="text-[10px] text-slate-500 dark:text-slate-400 font-black uppercase tracking-widest">Expert Training</p>
          </div>
          <div className="space-y-4">
             <div className="text-3xl font-black text-blue-600 dark:text-blue-400 uppercase tracking-tighter">Growth</div>
             <p className="text-[10px] text-slate-500 dark:text-slate-400 font-black uppercase tracking-widest">Digital Future</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Team;
