
import React from 'react';
import { useImages } from '../../ImageContext';

interface SchoolProgramsProps {
  onNavigate: (path: string) => void;
}

const SchoolPrograms: React.FC<SchoolProgramsProps> = ({ onNavigate }) => {
  const { schoolGallery, images } = useImages();
  
  const courseList = [
    { 
      id: 'literacy', 
      title: 'Computer Literacy Core', 
      level: 'Foundation - Month 1',
      topics: [
        'Hardware Components & Identification',
        'Operating System Logic (Windows/Linux)',
        'File Management & Security',
        'Keyboard Mastery & Typing Accuracy',
        'System Maintenance Fundamentals'
      ],
      icon: '💻'
    },
    { 
      id: 'productivity', 
      title: 'Office Suite Mastery', 
      level: 'Professional - Month 2',
      topics: [
        'Advanced Microsoft Word Document Design',
        'Excel Data Analysis & Formulas',
        'PowerPoint Professional Presentations',
        'MS Access Database Management',
        'Publisher & Document Layouts'
      ],
      icon: '📊'
    },
    { 
      id: 'internet', 
      title: 'Internet & Cloud Services', 
      level: 'Month 2 Extension',
      topics: [
        'Professional Email Management (Outlook)',
        'Cloud Storage (Google Drive/OneDrive)',
        'Advanced Internet Research Techniques',
        'Online Security & Ethics',
        'Digital Communications'
      ],
      icon: '🌐'
    },
    { 
      id: 'creative', 
      title: 'Digital Arts & Design', 
      level: 'Advanced - Month 3',
      topics: [
        'Graphic Design Principles',
        'Branding & Logo Design',
        'Basic Web Structure (HTML/CSS Intro)',
        'Social Media Marketing Basics',
        'Desktop Publishing'
      ],
      icon: '🎨'
    },
    { 
      id: 'hardware', 
      title: 'Hardware & Systems', 
      level: 'Professional Elective',
      topics: [
        'PC Assembly & Disassembly',
        'Software Troubleshooting & Repair',
        'Networking Fundamentals (LAN)',
        'System Security & Antivirus Deployment',
        'Peripheral Management'
      ],
      icon: '🛠️'
    }
  ];

  return (
    <div className="bg-slate-50 dark:bg-slate-950 min-h-screen transition-colors duration-300">
      {/* Hero Header */}
      <section className="bg-blue-950 py-24 sm:py-32 relative overflow-hidden text-center">
         <div className="max-w-4xl mx-auto px-4 relative z-10">
            <h2 className="text-yellow-400 font-black uppercase tracking-widest text-[10px] mb-4">Academic Directory</h2>
            <h1 className="text-4xl sm:text-7xl font-black text-white uppercase tracking-tighter mb-8">Course <span className="text-yellow-400">Curriculum</span></h1>
            <p className="text-lg text-blue-100/60 font-medium leading-relaxed">
              Our 3-month intensive program is split into focused monthly blocks, ensuring a comprehensive technical foundation for every student.
            </p>
         </div>
      </section>

      {/* Program Detailed Breakdown */}
      <section className="py-24 px-4 max-w-7xl mx-auto">
         <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {courseList.map((course) => (
               <div key={course.id} className="bg-white dark:bg-slate-900 p-12 rounded-[3.5rem] shadow-sm border border-slate-100 dark:border-white/5 group hover:shadow-2xl transition-all duration-500">
                  <div className="flex items-center justify-between mb-10">
                     <span className="text-5xl">{course.icon}</span>
                     <span className="bg-blue-50 dark:bg-slate-800 text-blue-600 dark:text-blue-400 px-5 py-2 rounded-full text-[9px] font-black uppercase tracking-widest border border-blue-100 dark:border-white/5">{course.level}</span>
                  </div>
                  <h3 className="text-3xl font-black uppercase tracking-tight text-blue-950 dark:text-white mb-8">{course.title}</h3>
                  <div className="grid grid-cols-1 gap-5">
                     {course.topics.map((t, idx) => (
                        <div key={idx} className="flex items-center space-x-4">
                           <div className="w-2 h-2 bg-yellow-400 rounded-full flex-shrink-0"></div>
                           <span className="text-xs font-black text-slate-700 dark:text-slate-300 uppercase tracking-wide leading-tight">{t}</span>
                        </div>
                     ))}
                  </div>
               </div>
            ))}
         </div>
      </section>

      {/* Campus Gallery */}
      <section className="py-24 px-4 bg-slate-50 dark:bg-slate-950 border-y border-slate-200 dark:border-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
            <div>
              <h2 className="text-blue-600 font-black uppercase tracking-widest text-[10px] mb-4">Life at E.C.L</h2>
              <h3 className="text-3xl sm:text-5xl font-black text-slate-900 dark:text-white uppercase tracking-tighter">Campus Gallery</h3>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {schoolGallery.slice(0, 4).map((img, i) => (
              <div key={i} className="relative aspect-square rounded-[3rem] overflow-hidden bg-white dark:bg-slate-800 border border-slate-100 dark:border-white/5 shadow-sm group">
                <img src={img} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" alt="Campus item" />
                <div className="absolute inset-0 bg-blue-950/20 dark:bg-black/30 group-hover:bg-transparent transition-colors duration-500"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certification Section */}
      <section className="bg-white dark:bg-slate-900 py-24 px-4 transition-colors">
         <div className="max-w-7xl mx-auto bg-blue-950 rounded-[4rem] overflow-hidden flex flex-col lg:flex-row shadow-2xl relative">
            <div className="absolute top-0 left-0 p-10 opacity-10">
               <svg className="w-40 h-40 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"/></svg>
            </div>
            <div className="lg:w-1/2 p-12 sm:p-20 text-white relative z-10">
               <h3 className="text-4xl font-black uppercase tracking-tighter mb-8 leading-tight text-yellow-400">Professional <br/>National Certification</h3>
               <p className="text-blue-100/80 text-lg leading-relaxed font-medium mb-12">
                  Graduates of the E.C.L program receive an official certificate of completion that is recognized by government agencies, NGOs, and the private sector across Liberia.
               </p>
               <div className="flex items-center gap-6 p-6 bg-white/5 border border-white/10 rounded-3xl">
                  <div className="text-3xl">🎖️</div>
                  <div>
                     <p className="font-black uppercase tracking-widest text-xs">Standard of Excellence</p>
                     <p className="text-[10px] uppercase tracking-widest text-blue-400 font-bold">Bridging the Divide</p>
                  </div>
               </div>
            </div>
            <div className="lg:w-1/2">
               <img src={images['school-programs']} className="w-full h-full object-cover grayscale opacity-50 transition-all duration-700 hover:grayscale-0 hover:opacity-100" alt="ECL Certification" />
            </div>
         </div>
      </section>
    </div>
  );
};

export default SchoolPrograms;
