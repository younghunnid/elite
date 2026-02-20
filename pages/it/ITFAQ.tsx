
import React from 'react';

interface ITFAQProps {
  onNavigate: (path: string) => void;
}

const ITFAQ: React.FC<ITFAQProps> = ({ onNavigate }) => {
  const faqs = [
    { q: "What is your turnaround time for repairs?", a: "Most software-related issues and basic hardware replacements are completed within 24 hours. Complex logic board repairs may take 2-4 business days depending on part availability." },
    { q: "Do you offer on-site support for businesses?", a: "Yes, our mobile engineering team provides on-site technical support and networking services for corporate clients within the Paynesville and Monrovia areas." },
    { q: "Is my data safe during repair?", a: "Absolute data privacy is a core pillar of E.C.S. We follow strict integrity protocols and offer full data imaging services before performing any invasive hardware repairs." },
    { q: "Do you sell genuine computer parts?", a: "Yes. We source high-quality, genuine parts for all repairs and provide a limited service warranty on all hardware components we install." },
    { q: "Can you recover data from a dead hard drive?", a: "We specialize in professional data recovery from damaged hard drives, SSDs, and USB flash drives using forensic imaging techniques." }
  ];

  return (
    <div className="bg-slate-50 min-h-screen py-24 px-4">
       <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl sm:text-6xl font-black text-blue-950 uppercase tracking-tighter mb-16 text-center">Technical <span className="text-blue-600">FAQ</span></h1>
          <div className="space-y-6">
             {faqs.map((f, i) => (
                <div key={i} className="bg-white p-8 sm:p-12 rounded-[3rem] shadow-sm border border-slate-100">
                   <h4 className="text-xl font-black text-blue-600 uppercase tracking-tight mb-4 flex items-center">
                      <span className="mr-4 opacity-30 text-blue-950">Q.</span> {f.q}
                   </h4>
                   <p className="text-slate-600 font-medium leading-relaxed pl-10 border-l-2 border-slate-100">
                      {f.a}
                   </p>
                </div>
             ))}
          </div>
          <div className="mt-20 bg-blue-600 rounded-[3rem] p-12 text-center text-white">
             <h4 className="text-2xl font-black uppercase tracking-tight mb-6">Still have questions?</h4>
             <button onClick={() => onNavigate('contact')} className="bg-blue-950 text-white px-10 py-4 rounded-xl font-black uppercase tracking-widest text-[10px] shadow-2xl active:scale-95 transition-all">Contact Our Technicians</button>
          </div>
       </div>
    </div>
  );
};

export default ITFAQ;
