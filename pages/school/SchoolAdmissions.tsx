
import React from 'react';
import { BRAND } from '../../constants';

interface SchoolAdmissionsProps {
  onNavigate: (path: string) => void;
}

const SchoolAdmissions: React.FC<SchoolAdmissionsProps> = ({ onNavigate }) => {
  const steps = [
    { title: "Physical Registration", desc: "Visit our campus in Paynesville, A.B. Tolbert Road to obtain and fill out the enrollment application.", icon: "📝" },
    { title: "Select Your Session", desc: "We offer three flexible sessions: Morning, Afternoon, or Evening class blocks.", icon: "⏰" },
    { title: "Secure Your Seat", desc: "Tuition can be paid in installments. A 50% initial deposit is required to confirm enrollment.", icon: "💳" },
    { title: "Orientation Day", desc: "Join your cohort for the technical orientation and begin your 3-month transformation!", icon: "🚀" }
  ];

  const sessions = [
    { label: "Morning Session", time: "8:00 AM - 11:30 AM", target: "Students & Job Seekers", color: "bg-blue-600" },
    { label: "Afternoon Session", time: "1:00 PM - 4:00 PM", target: "Continuing Education", color: "bg-yellow-400" },
    { label: "Evening Session", time: "5:00 PM - 8:00 PM", target: "Busy Professionals", color: "bg-blue-400" }
  ];

  return (
    <div className="bg-white dark:bg-slate-900 min-h-screen transition-colors duration-300">
       {/* Admission Header */}
       <div className="bg-yellow-400 py-24 sm:py-32 px-4 text-center border-b-8 border-blue-950">
          <h2 className="text-blue-950 font-black uppercase tracking-widest text-[10px] mb-4">Join E.C.L Liberia</h2>
          <h1 className="text-5xl sm:text-7xl font-black text-blue-950 uppercase tracking-tighter mb-8">Enrollment & <span className="text-white">Admissions</span></h1>
          <p className="text-lg sm:text-xl text-blue-900 font-bold uppercase tracking-widest max-w-2xl mx-auto opacity-80">
             Enroll today to secure your seat for the upcoming 3-month session.
          </p>
       </div>

       {/* Step-by-Step Enrollment */}
       <section className="py-24 px-4 max-w-7xl mx-auto bg-white dark:bg-slate-900 transition-colors">
          <div className="text-center mb-16">
             <h3 className="text-3xl font-black uppercase tracking-tight text-blue-950 dark:text-white">How to Apply</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
             {steps.map((step, i) => (
                <div key={i} className="relative bg-slate-50 dark:bg-slate-800 p-12 rounded-[3.5rem] border border-slate-100 dark:border-white/5 text-center flex flex-col h-full group">
                   <div className="text-5xl mb-8 transform group-hover:scale-110 transition-transform">{step.icon}</div>
                   <h4 className="text-blue-950 dark:text-white font-black uppercase tracking-tight text-xl mb-4">Step {i+1}: {step.title}</h4>
                   <p className="text-slate-500 dark:text-slate-400 font-medium text-xs leading-relaxed mb-10">{step.desc}</p>
                   <div className="mt-auto text-blue-600 dark:text-blue-400 font-black text-[9px] uppercase tracking-[0.4em]">Official Instruction</div>
                </div>
             ))}
          </div>
       </section>

       {/* Session Block Times */}
       <section className="bg-blue-950 py-24 px-4 overflow-hidden relative">
          <div className="max-w-7xl mx-auto relative z-10">
             <div className="text-center mb-16">
                <h3 className="text-3xl sm:text-5xl font-black text-white uppercase mb-4">Available Session Times</h3>
                <p className="text-blue-100/60 font-medium uppercase tracking-widest text-xs">Choose the schedule that fits your daily routine.</p>
             </div>
             <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {sessions.map((s, i) => (
                   <div key={i} className="bg-white/5 border border-white/10 p-12 rounded-[3rem] text-center hover:bg-white/10 transition-all group">
                      <div className={`w-3 h-3 ${s.color} rounded-full mx-auto mb-6`}></div>
                      <h4 className="text-white font-black uppercase tracking-widest text-xs mb-4 opacity-50">{s.label}</h4>
                      <p className="text-3xl sm:text-4xl font-black text-white mb-4 leading-tight">{s.time}</p>
                      <p className="text-blue-300 text-[10px] font-black uppercase tracking-widest">{s.target}</p>
                   </div>
                ))}
             </div>
          </div>
       </section>

       {/* Tuition Policy */}
       <section className="py-24 px-4 max-w-4xl mx-auto text-center">
          <div className="bg-slate-50 dark:bg-slate-800 p-12 sm:p-20 rounded-[4rem] border border-slate-100 dark:border-white/5 shadow-sm">
             <h3 className="text-3xl font-black uppercase tracking-tight mb-8 text-blue-950 dark:text-white">Tuition & Financials</h3>
             <p className="text-slate-500 dark:text-slate-400 text-lg font-medium leading-relaxed mb-10">
                E.C.L offers flexible payment plans to ensure that technical literacy is accessible. Total tuition can be paid in installments throughout the 3-month duration of the program.
             </p>
             <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-left mb-12">
                <div className="p-6 bg-white dark:bg-slate-900 rounded-2xl border border-slate-100 dark:border-white/5">
                   <p className="text-[9px] font-black uppercase text-blue-600 dark:text-blue-400 mb-2">Initial Deposit</p>
                   <p className="text-xl font-black text-slate-900 dark:text-white">50% Minimum</p>
                </div>
                <div className="p-6 bg-white dark:bg-slate-900 rounded-2xl border border-slate-100 dark:border-white/5">
                   <p className="text-[9px] font-black uppercase text-blue-600 dark:text-blue-400 mb-2">PC Lab Access</p>
                   <p className="text-xl font-black text-slate-900 dark:text-white">100% Included</p>
                </div>
             </div>
             <a href={`tel:${BRAND.phone.replace(/\D/g, '')}`} className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-12 py-5 rounded-2xl font-black uppercase tracking-widest text-xs shadow-xl active:scale-95 transition-all">
                Call {BRAND.phone} for Pricing
             </a>
          </div>
       </section>
    </div>
  );
};

export default SchoolAdmissions;
