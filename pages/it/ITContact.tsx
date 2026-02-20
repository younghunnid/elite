
import React from 'react';
import { BRAND } from '../../constants';

const ITContact: React.FC = () => (
  <div className="bg-slate-50 min-h-screen py-24 px-4">
    <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
      {/* Contact Card */}
      <div className="bg-blue-900 p-12 sm:p-24 rounded-[4rem] text-white shadow-2xl relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600 rounded-full blur-[100px] opacity-20 translate-x-1/2 -translate-y-1/2"></div>
        <h2 className="text-4xl sm:text-5xl font-black uppercase tracking-tighter mb-10">Technical <br/>Headquarters</h2>
        
        <div className="space-y-12">
           <div className="flex items-start gap-8">
              <div className="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center text-blue-400 text-2xl">📍</div>
              <div>
                 <p className="text-[10px] font-black uppercase tracking-widest text-blue-400 mb-2">Office Location</p>
                 <p className="text-xl font-bold leading-snug">{BRAND.address}</p>
              </div>
           </div>

           <div className="flex items-start gap-8">
              <div className="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center text-blue-400 text-2xl">📞</div>
              <div>
                 <p className="text-[10px] font-black uppercase tracking-widest text-blue-400 mb-2">Support Hotlines</p>
                 <p className="text-3xl font-black leading-none text-yellow-400">{BRAND.phone}</p>
                 <p className="text-xs font-bold text-blue-300 mt-2 uppercase tracking-widest">Available Mon - Sat</p>
              </div>
           </div>

           <div className="flex items-start gap-8">
              <div className="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center text-blue-400 text-2xl">✉️</div>
              <div>
                 <p className="text-[10px] font-black uppercase tracking-widest text-blue-400 mb-2">Email Channels</p>
                 <p className="text-xl font-bold leading-none">{BRAND.email}</p>
              </div>
           </div>
        </div>
      </div>

      {/* Form / Hours Area */}
      <div className="flex flex-col gap-12">
         <div className="bg-white p-12 sm:p-20 rounded-[4rem] shadow-sm border border-slate-100 flex-grow flex flex-col justify-center">
            <h3 className="text-3xl font-black text-blue-950 uppercase tracking-tight mb-8">Service Hours</h3>
            <div className="space-y-6">
               {[
                 { day: "Monday - Friday", hours: "9:00 AM - 6:00 PM" },
                 { day: "Saturday", hours: "10:00 AM - 4:00 PM" },
                 { day: "Sunday", hours: "Closed for Maintenance" }
               ].map((h, i) => (
                 <div key={i} className="flex justify-between items-center border-b border-slate-50 pb-6">
                    <span className="font-bold text-slate-500 uppercase text-xs tracking-widest">{h.day}</span>
                    <span className="font-black text-blue-600 uppercase text-xs tracking-widest">{h.hours}</span>
                 </div>
               ))}
            </div>
            <p className="text-slate-400 text-xs font-medium italic mt-12 leading-relaxed">
               * Emergency on-site support available for contract holders outside of standard hours.
            </p>
         </div>

         <div className="bg-blue-600 p-12 rounded-[3rem] text-white text-center">
            <h4 className="text-xl font-black uppercase mb-6">Need a quote?</h4>
            <a href={`mailto:${BRAND.email}`} className="inline-block bg-white text-blue-600 px-10 py-4 rounded-xl font-black uppercase tracking-widest text-[10px] hover:bg-slate-50 transition-all active:scale-95 shadow-xl">Send Inquiry</a>
         </div>
      </div>
    </div>
  </div>
);

export default ITContact;
