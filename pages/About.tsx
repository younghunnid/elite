
import React from 'react';
import { BRAND, IMAGES } from '../constants';

const About: React.FC = () => {
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
    <div className="bg-white dark:bg-slate-900 transition-colors duration-300">
      <section className="py-16 sm:py-24 bg-slate-50 dark:bg-slate-950 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 sm:gap-16 items-center">
            <div className="order-2 lg:order-1">
              <h2 className="text-blue-600 font-black uppercase tracking-widest text-xs mb-4">ABOUT US</h2>
              <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white mb-6 leading-tight uppercase tracking-tighter">
                We Provide The Utmost <span className="text-blue-600">Quality</span>
              </h1>
              <p className="text-slate-600 dark:text-slate-300 text-base sm:text-xl mb-8 leading-relaxed font-medium">
                Our mission is to empower individuals and businesses by providing cutting-edge solutions in the realm of consumer electronics, website development, and online services.
              </p>
              <div className="grid grid-cols-2 gap-6 sm:gap-8 py-8 border-y border-slate-200 dark:border-white/10">
                <div>
                  <h4 className="text-2xl sm:text-3xl font-bold text-blue-600 uppercase">Quality</h4>
                  <p className="text-slate-500 dark:text-slate-400 text-[10px] font-bold uppercase tracking-widest">Utmost Standard</p>
                </div>
                <div>
                  <h4 className="text-2xl sm:text-3xl font-bold text-blue-600 uppercase">Expert</h4>
                  <p className="text-slate-500 dark:text-slate-400 text-[10px] font-bold uppercase tracking-widest">Tech Solutions</p>
                </div>
              </div>
            </div>
            <div className="relative order-1 lg:order-2">
              <img src={IMAGES.about} alt="Tech Excellence" className="rounded-[2rem] sm:rounded-[3rem] shadow-2xl" />
              <div className="absolute -top-4 -right-4 w-24 h-24 sm:w-32 h-32 bg-blue-600 rounded-full flex items-center justify-center text-white text-center p-4 shadow-xl border-4 border-white dark:border-slate-800">
                 <span className="font-black uppercase tracking-tighter text-[10px] sm:text-sm">Elite Quality</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Working Process Section */}
      <section className="py-16 sm:py-24 bg-white dark:bg-slate-900 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 sm:mb-20">
            <h2 className="text-blue-600 font-black uppercase tracking-widest text-[10px] mb-4">Working Process</h2>
            <h3 className="text-3xl sm:text-4xl font-black text-slate-900 dark:text-white uppercase tracking-tighter px-2">Our Working Process - How We Work For Our Customers</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-12">
            {steps.map((step, i) => (
              <div key={i} className="relative p-8 sm:p-10 bg-slate-50 dark:bg-slate-800 rounded-[2rem] sm:rounded-[2.5rem] border border-slate-100 dark:border-white/5 hover:shadow-xl transition-all">
                <div className="text-5xl sm:text-6xl font-black text-blue-100 dark:text-blue-900/10 absolute top-4 right-8">{step.num}</div>
                <div className="relative z-10">
                  <h4 className="text-xl sm:text-2xl font-black text-slate-900 dark:text-white mb-4 uppercase tracking-tight">{step.title}</h4>
                  <p className="text-slate-500 dark:text-slate-400 font-medium leading-relaxed text-sm">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
