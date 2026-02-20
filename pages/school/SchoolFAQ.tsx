
import React from 'react';

const SchoolFAQ: React.FC = () => {
  const faqs = [
    { q: "How long is the E.C.L computer program?", a: "Our program is a 3-month intensive course designed to build a solid technical foundation. Students attend daily sessions in our practical labs." },
    { q: "Is the certificate recognized for jobs?", a: "Yes. Our professional national certification is recognized across Liberia by employers, NGOs, and government agencies as a standard for technical literacy." },
    { q: "Do I need to bring my own laptop to class?", a: "No. E.C.L provides high-performance workstations for every student within our practical labs. You only need to bring your focus and dedication." },
    { q: "What sessions are currently available?", a: "We offer three sessions daily: Morning (8:00 AM - 11:30 AM), Afternoon (1:00 PM - 4:00 PM), and Evening (5:00 PM - 8:00 PM)." },
    { q: "What is the primary focus of the training?", a: "Our training is 80% practical. We focus on hands-on application of Microsoft Office, internet research, hardware maintenance, and digital design." },
    { q: "Can I pay my tuition in installments?", a: "Yes, we allow flexible payment plans. You can secure your seat with a 50% initial deposit and complete the balance throughout the 3-month period." },
    { q: "Where is the computer school located?", a: "Our campus is located in Paynesville City, along the A.B. Tolbert Road, Monrovia, Liberia." }
  ];

  return (
    <div className="bg-slate-50 dark:bg-slate-950 min-h-screen py-24 px-4 transition-colors">
       <div className="max-w-4xl mx-auto">
          <div className="text-center mb-20">
             <h2 className="text-blue-600 dark:text-blue-400 font-black uppercase tracking-widest text-[10px] mb-4">Academic Help Desk</h2>
             <h1 className="text-4xl sm:text-6xl font-black text-blue-950 dark:text-white uppercase tracking-tighter mb-4 text-center">Student <span className="text-blue-600">FAQs</span></h1>
             <p className="text-slate-500 dark:text-slate-400 font-medium uppercase tracking-widest text-[9px]">Everything you need to know about E.C.L</p>
          </div>
          <div className="space-y-6">
             {faqs.map((f, i) => (
                <div key={i} className="bg-white dark:bg-slate-900 p-8 sm:p-12 rounded-[3rem] shadow-sm border border-slate-100 dark:border-white/5 hover:border-blue-200 transition-all group">
                   <h4 className="text-xl font-black text-blue-900 dark:text-white uppercase tracking-tight mb-4 flex items-center">
                      <span className="mr-5 w-10 h-10 bg-blue-50 dark:bg-slate-800 text-blue-600 dark:text-blue-400 rounded-full flex items-center justify-center flex-shrink-0 text-xs">Q</span> {f.q}
                   </h4>
                   <p className="text-slate-600 dark:text-slate-400 font-medium leading-relaxed pl-14 border-l-2 border-slate-100 dark:border-white/10">
                      {f.a}
                   </p>
                </div>
             ))}
          </div>
          
          <div className="mt-24 bg-blue-900 rounded-[3rem] p-12 text-center text-white shadow-2xl relative overflow-hidden">
             <div className="absolute top-0 right-0 w-32 h-32 bg-yellow-400 rounded-full blur-[100px] opacity-20"></div>
             <h4 className="text-2xl font-black uppercase tracking-tight mb-6">More Questions?</h4>
             <p className="text-blue-100/60 mb-10 text-sm font-medium">Our academic counselors are available Mon-Sat to help with your enrollment.</p>
             <div className="flex flex-wrap justify-center gap-4">
                <button onClick={() => window.location.href='tel:+231770025232'} className="cta-btn px-10 py-4 rounded-xl text-[10px] shadow-xl active:scale-95 transition-all">Call Enrollment Office</button>
             </div>
          </div>
       </div>
    </div>
  );
};

export default SchoolFAQ;
