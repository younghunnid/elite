
import React, { useState } from 'react';
import { BRAND } from '../constants';

interface ContactProps {
  onNavigate?: (path: string) => void;
  activeWorld: 'it' | 'school';
}

const Contact: React.FC<ContactProps> = ({ onNavigate, activeWorld }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: activeWorld === 'it' ? 'Repair' : 'Enrollment',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const itOptions = [
    { value: 'Repair', label: 'Computer/Mobile Repair' },
    { value: 'Printing', label: 'Industrial Printing' },
    { value: 'Data', label: 'Data Recovery' },
    { value: 'Custom', label: 'Custom Built PC' },
    { value: 'Web', label: 'Web Development' },
    { value: 'General', label: 'General IT Inquiry' }
  ];

  const schoolOptions = [
    { value: 'Enrollment', label: 'Enrollment Inquiry' },
    { value: 'Programs', label: 'Program Details' },
    { value: 'Tuition', label: 'Tuition & Fees' },
    { value: 'Visit', label: 'Campus Visit' },
    { value: 'General', label: 'General Academic Question' }
  ];

  const dropdownOptions = activeWorld === 'it' ? itOptions : schoolOptions;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const subjectLine = `${activeWorld === 'it' ? 'Technical' : 'Academic'} Inquiry: ${formData.subject} from ${formData.name}`;
    const bodyContent = `Full Name: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone}\nInterested In: ${formData.subject}\n\nMessage Details:\n${formData.message}`;
    
    const mailtoUrl = `mailto:${BRAND.email}?subject=${encodeURIComponent(subjectLine)}&body=${encodeURIComponent(bodyContent)}`;
    
    window.location.href = mailtoUrl;
    setSubmitted(true);
  };

  const handleScheduleClick = () => {
    if (onNavigate) {
      onNavigate('admissions');
    }
  };

  return (
    <div className="bg-slate-50 dark:bg-slate-950 min-h-screen overflow-x-hidden transition-colors duration-300">
      <div className="text-white py-16 sm:py-24 px-4 hero-gradient">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-3xl sm:text-5xl font-black mb-4 uppercase tracking-tighter">Let's Talk Tech</h1>
          <p className="text-blue-100 text-sm sm:text-xl max-w-2xl mx-auto leading-relaxed opacity-80 font-medium">
            {activeWorld === 'it' 
              ? "Expert IT support and industrial-scale solutions in the heart of Paynesville."
              : "Professional computer training for all ages in the heart of Paynesville."
            }
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-12 sm:-mt-16 pb-16 sm:pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 sm:gap-12">
          {/* Quick Info */}
          <div className="space-y-6">
            <div className="bg-white dark:bg-slate-900 p-8 sm:p-10 rounded-[2.5rem] shadow-xl border border-slate-100 dark:border-white/5">
              <h3 className="text-xl sm:text-2xl font-black text-slate-900 dark:text-white mb-8 uppercase tracking-tight">Direct Access</h3>
              <div className="space-y-8">
                <div className="flex items-start">
                  <div className="p-3 sm:p-4 bg-blue-50 dark:bg-slate-800 text-blue-600 dark:text-blue-400 rounded-xl sm:rounded-2xl mr-4 shadow-sm">
                    <svg className="w-5 h-5 sm:w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                  </div>
                  <div>
                    <p className="text-[8px] font-black text-slate-400 dark:text-slate-500 uppercase tracking-[0.2em] mb-1">{activeWorld === 'it' ? 'Support Line' : 'Enrollment Line'}</p>
                    <p className="text-sm sm:text-lg font-black text-slate-900 dark:text-white">{BRAND.phone}</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="p-3 sm:p-4 bg-blue-50 dark:bg-slate-800 text-blue-600 dark:text-blue-400 rounded-xl sm:rounded-2xl mr-4 shadow-sm">
                    <svg className="w-5 h-5 sm:w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                  </div>
                  <div>
                    <p className="text-[8px] font-black text-slate-400 dark:text-slate-500 uppercase tracking-[0.2em] mb-1">Liberia Office</p>
                    <p className="text-sm sm:text-lg font-black text-slate-900 dark:text-white leading-tight">{BRAND.address}</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* embedded map of physical location */}
            <div className="bg-white dark:bg-slate-900 p-6 sm:p-8 rounded-[2.5rem] shadow-xl border border-slate-100 dark:border-white/5">
              <h4 className="text-lg font-black text-slate-900 dark:text-white mb-4 uppercase tracking-tight">Visit Us</h4>
              <div className="w-full h-64 rounded-[2rem] overflow-hidden">
                <iframe
                  title="Elites Computer Services Location"
                  src="https://www.google.com/maps?q=A.B+Tolbert+Road,+Opposite+Methodist+Church,+Weaver+Avenue,+Paynesville+City,+Montserrado+Liberia&output=embed"
                  className="w-full h-full"
                  allowFullScreen
                  loading="lazy"
                ></iframe>
              </div>
            </div>
            
            {activeWorld === 'school' && (
              <div className="bg-yellow-400 p-8 sm:p-10 rounded-[2.5rem] shadow-xl">
                <h4 className="text-blue-900 font-black text-xl mb-4 leading-tight uppercase tracking-tight">Ready to Enroll?</h4>
                <p className="text-blue-800 font-bold mb-8 text-[10px] sm:text-sm opacity-80 uppercase tracking-wide">Next cohort starting soon at Paynesville.</p>
                <button 
                  onClick={handleScheduleClick}
                  className="cta-btn w-full py-4 sm:py-5 rounded-2xl text-[9px] sm:text-[10px] shadow-xl active:scale-95 transition-all"
                >
                  View Admission Steps
                </button>
              </div>
            )}
          </div>

          {/* Form */}
          <div className="lg:col-span-2">
            <div className="bg-white dark:bg-slate-900 p-6 sm:p-12 lg:p-16 rounded-[3rem] shadow-2xl border border-slate-100 dark:border-white/5 h-full transition-colors duration-300">
              {submitted ? (
                <div className="flex flex-col items-center justify-center h-full text-center py-10">
                  <div className="w-20 h-20 bg-green-100 dark:bg-green-900 text-green-600 dark:text-green-400 rounded-full flex items-center justify-center mb-8 shadow-inner">
                    <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" /></svg>
                  </div>
                  <h2 className="text-2xl sm:text-4xl font-black text-slate-900 dark:text-white mb-4 uppercase tracking-tighter">Inquiry Ready!</h2>
                  <p className="text-slate-500 dark:text-slate-400 font-medium text-xs sm:text-base max-w-sm">We have prepared your inquiry. If your email application didn't open, please click the button again.</p>
                  <button onClick={() => setSubmitted(false)} className="mt-10 bg-blue-50 dark:bg-slate-800 text-blue-600 dark:text-blue-400 px-8 py-3 rounded-full font-black uppercase tracking-widest text-[10px] hover:bg-blue-100 dark:hover:bg-slate-700 transition-colors">Go Back / Send Another</button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6 sm:space-y-10">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-10">
                    <div className="space-y-2">
                      <label className="text-[8px] sm:text-[10px] font-black text-slate-400 dark:text-slate-500 uppercase tracking-[0.2em] ml-2">Full Name</label>
                      <input 
                        type="text" 
                        required 
                        placeholder="Samuel K. Doe"
                        className="w-full px-5 py-4 sm:py-5 bg-slate-50 dark:bg-slate-800 border border-slate-100 dark:border-white/5 dark:text-white rounded-2xl focus:ring-4 focus:ring-blue-100 dark:focus:ring-blue-900 outline-none transition-all font-medium text-xs sm:text-base"
                        value={formData.name}
                        onChange={(e) => setFormData({...formData, name: e.target.value})}
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-[8px] sm:text-[10px] font-black text-slate-400 dark:text-slate-500 uppercase tracking-[0.2em] ml-2">Email Address</label>
                      <input 
                        type="email" 
                        required 
                        placeholder="yourname@domain.com"
                        className="w-full px-5 py-4 sm:py-5 bg-slate-50 dark:bg-slate-800 border border-slate-100 dark:border-white/5 dark:text-white rounded-2xl focus:ring-4 focus:ring-blue-100 dark:focus:ring-blue-900 outline-none transition-all font-medium text-xs sm:text-base"
                        value={formData.email}
                        onChange={(e) => setFormData({...formData, email: e.target.value})}
                      />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-10">
                    <div className="space-y-2">
                      <label className="text-[8px] sm:text-[10px] font-black text-slate-400 dark:text-slate-500 uppercase tracking-[0.2em] ml-2">Mobile Number</label>
                      <input 
                        type="tel" 
                        required 
                        placeholder="+231..."
                        className="w-full px-5 py-4 sm:py-5 bg-slate-50 dark:bg-slate-800 border border-slate-100 dark:border-white/5 dark:text-white rounded-2xl focus:ring-4 focus:ring-blue-100 dark:focus:ring-blue-900 outline-none transition-all font-medium text-xs sm:text-base"
                        value={formData.phone}
                        onChange={(e) => setFormData({...formData, phone: e.target.value})}
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-[8px] sm:text-[10px] font-black text-slate-400 dark:text-slate-500 uppercase tracking-[0.2em] ml-2">Interested In</label>
                      <div className="relative">
                        <select 
                          className="w-full px-5 py-4 sm:py-5 bg-slate-50 dark:bg-slate-800 border border-slate-100 dark:border-white/5 dark:text-white rounded-2xl focus:ring-4 focus:ring-blue-100 dark:focus:ring-blue-900 outline-none transition-all appearance-none font-bold text-slate-800 dark:text-slate-100 text-xs sm:text-base"
                          value={formData.subject}
                          onChange={(e) => setFormData({...formData, subject: e.target.value})}
                        >
                          {dropdownOptions.map(opt => (
                            <option key={opt.value} value={opt.value}>{opt.label}</option>
                          ))}
                        </select>
                        <div className="absolute right-5 top-1/2 -translate-y-1/2 pointer-events-none text-slate-400">
                           <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M19 9l-7 7-7-7" /></svg>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-[8px] sm:text-[10px] font-black text-slate-400 dark:text-slate-500 uppercase tracking-[0.2em] ml-2">Your Message</label>
                    <textarea 
                      rows={4} 
                      required 
                      placeholder="Tell us how we can help..."
                      className="w-full px-5 py-4 sm:py-5 bg-slate-50 dark:bg-slate-800 border border-slate-100 dark:border-white/5 dark:text-white rounded-2xl focus:ring-4 focus:ring-blue-100 dark:focus:ring-blue-900 outline-none transition-all font-medium text-xs sm:text-base"
                      value={formData.message}
                      onChange={(e) => setFormData({...formData, message: e.target.value})}
                    ></textarea>
                  </div>
                  <button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white py-5 sm:py-6 rounded-2xl font-black uppercase tracking-widest text-[10px] sm:text-sm shadow-xl shadow-blue-500/30 active:scale-[0.98] transition-all">
                    Send Inquiry
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
