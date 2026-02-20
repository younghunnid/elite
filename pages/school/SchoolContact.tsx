
import React from 'react';
import { BRAND } from '../../constants';

const SchoolContact: React.FC = () => (
  <div className="bg-slate-50 min-h-screen py-24 px-4">
    <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
      {/* Enrollment Card - Data Extraction */}
      <div className="bg-blue-950 p-12 sm:p-24 rounded-[4rem] text-white shadow-2xl relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-yellow-400 rounded-full blur-[120px] opacity-10 translate-x-1/2 -translate-y-1/2"></div>
        <h2 className="text-4xl sm:text-5xl font-black uppercase tracking-tighter mb-12">Academic <br/>Admissions</h2>
        
        <div className="space-y-12">
           <div className="flex items-start gap-8">
              <div className="w-14 h-14 bg-white/5 border border-white/10 rounded-2xl flex items-center justify-center text-yellow-400 text-2xl flex-shrink-0">📍</div>
              <div>
                 <p className="text-[10px] font-black uppercase tracking-widest text-blue-400 mb-2">Campus Location</p>
                 <p className="text-xl font-bold leading-snug">{BRAND.address}</p>
                 <p className="text-[10px] uppercase font-bold text-white/40 mt-1">Paynesville City, Liberia</p>
              </div>
           </div>

           <div className="flex items-start gap-8">
              <div className="w-14 h-14 bg-white/5 border border-white/10 rounded-2xl flex items-center justify-center text-yellow-400 text-2xl flex-shrink-0">📞</div>
              <div>
                 <p className="text-[10px] font-black uppercase tracking-widest text-blue-400 mb-2">Enrollment Hotline</p>
                 <p className="text-3xl font-black leading-none text-yellow-400">{BRAND.phone}</p>
                 <p className="text-xs font-bold text-blue-300 mt-2 uppercase tracking-widest">Open Mon - Sat (8AM - 6PM)</p>
              </div>
           </div>

           <div className="flex items-start gap-8">
              <div className="w-14 h-14 bg-white/5 border border-white/10 rounded-2xl flex items-center justify-center text-yellow-400 text-2xl flex-shrink-0">✉️</div>
              <div>
                 <p className="text-[10px] font-black uppercase tracking-widest text-blue-400 mb-2">Academic Support</p>
                 <p className="text-xl font-bold leading-none">{BRAND.email}</p>
              </div>
           </div>
        </div>
      </div>

      {/* Information Block - Data Extraction */}
      <div className="flex flex-col gap-12">
         <div className="bg-white p-12 sm:p-20 rounded-[4rem] shadow-sm border border-slate-100 flex-grow flex flex-col justify-center">
            <h3 className="text-3xl font-black text-blue-950 uppercase tracking-tight mb-8">Visit Our Office</h3>
            <p className="text-slate-500 text-lg font-medium leading-relaxed mb-10">
               Registration is a physical process at our campus. We invite all prospective students to visit us for a demonstration of our practical labs and a consultation with our technical faculty.
            </p>
            <div className="space-y-6">
               <div className="flex justify-between items-center border-b border-slate-50 pb-6">
                  <span className="font-bold text-slate-500 uppercase text-[10px] tracking-widest">Office Hours</span>
                  <span className="font-black text-blue-600 uppercase text-[10px] tracking-widest">8:00 AM - 6:00 PM</span>
               </div>
               <div className="flex justify-between items-center border-b border-slate-50 pb-6">
                  <span className="font-bold text-slate-500 uppercase text-[10px] tracking-widest">Academic Days</span>
                  <span className="font-black text-blue-600 uppercase text-[10px] tracking-widest">Monday - Saturday</span>
               </div>
            </div>
            
            <div className="mt-12 flex space-x-4">
               {['facebook', 'twitter', 'linkedin'].map(social => (
                 <div key={social} className="w-12 h-12 bg-slate-50 rounded-xl border border-slate-100 flex items-center justify-center hover:bg-blue-600 hover:text-white transition-all cursor-pointer">
                    <span className="text-[10px] font-black uppercase">{social.substring(0, 2)}</span>
                 </div>
               ))}
            </div>
         </div>

         <div className="bg-yellow-400 p-12 rounded-[3rem] text-blue-950 text-center shadow-xl">
            <h4 className="text-xl font-black uppercase mb-6">Bridging the Divide</h4>
            <p className="text-[10px] font-black uppercase tracking-widest text-blue-900/60 mb-8">A Solid Foundation for a Greater Future</p>
            <button onClick={() => window.open('https://maps.google.com/?q='+BRAND.address, '_blank')} className="cta-btn px-10 py-4 rounded-xl text-[10px] shadow-2xl active:scale-95 transition-all">Get Campus Directions</button>
         </div>
      </div>
    </div>
  </div>
);

export default SchoolContact;
