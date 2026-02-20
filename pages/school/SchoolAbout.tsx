
import React from 'react';
import { useImages } from '../../ImageContext';

interface SchoolAboutProps {
  onNavigate: (path: string) => void;
}

const SchoolAbout: React.FC<SchoolAboutProps> = ({ onNavigate }) => {
  const { images } = useImages();

  return (
    <div className="bg-white dark:bg-slate-950 min-h-screen transition-colors duration-300">
      {/* Page Header */}
      <div className="bg-blue-950 text-white py-24 sm:py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-yellow-400/5 -skew-y-6 transform translate-y-12"></div>
        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
          <h2 className="text-yellow-400 font-black uppercase tracking-widest text-[10px] mb-4">The E.C.L Journey</h2>
          <h1 className="text-5xl sm:text-7xl font-black uppercase tracking-tighter mb-8 leading-none">
            Solid Foundation <br/><span className="text-yellow-400">Yields Greater Result</span>
          </h1>
          <p className="text-xl sm:text-2xl text-blue-100/60 leading-relaxed font-medium">
            Our passion for Technology meets our Commitment to Education.
          </p>
        </div>
      </div>

      {/* Main Narrative */}
      <section className="py-24 px-4 bg-white dark:bg-slate-900 transition-colors">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-blue-600 font-black uppercase tracking-widest text-[10px] mb-4">About Us</h2>
            <h3 className="text-3xl sm:text-5xl font-black text-slate-900 dark:text-white uppercase tracking-tighter leading-tight">
              We are an affordable, innovative, <br/><span className="text-blue-600">fully inclusive community</span>
            </h3>
          </div>
          
          <div className="space-y-12 text-slate-600 dark:text-slate-400 text-lg leading-relaxed font-medium">
            <div className="p-10 bg-slate-50 dark:bg-slate-800 rounded-[3rem] border border-slate-100 dark:border-white/5">
              <p className="mb-6">
                Modern Technology is reshaping our lives, enhancing global connectivity, impacting health, education, and security, and revolutionizing businesses. Computers are the backbones of Technology.
              </p>
              <p>
                At Elites Computer Literacy, we take on students based on no prior knowledge and then make those students computer literate in 3 months. Thereafter, our students can choose to take advanced courses in graphic design, data analysis with Excel, video editing, etc.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <p>
                  At Elites Computer Literacy, we understand that everyone’s journey with technology is unique. That’s why we offer a diverse range of courses tailored to different skill levels and interests. From basic computer skills and internet safety to advanced programming and data analysis, our curriculum is curated by industry experts to ensure that you receive the most current and relevant knowledge.
                </p>
                <p>
                  Our team of dedicated instructors is the heart of Elites Computer Literacy. With years of experience and a passion for teaching, they are committed to providing a supportive and engaging learning environment.
                </p>
              </div>
              <div className="relative aspect-[4/3] rounded-[3rem] overflow-hidden shadow-2xl border-4 border-white dark:border-slate-800 group">
                {/* using the same school-hero graphic here for consistency */}
                {/* switch to contain so the full flyer is visible without cropping */}
                <img src={images['school-hero']} alt="E.C.L instructor helping a student" className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-700" />
                <div className="absolute inset-0 bg-blue-900/10 group-hover:bg-transparent transition-colors"></div>
              </div>
            </div>

            <div className="p-10 bg-blue-950 text-white rounded-[4rem] shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-yellow-400 rounded-full blur-[120px] opacity-10"></div>
              <p className="relative z-10 text-xl font-medium leading-relaxed italic">
                "Elites Computer Literacy is more than just a place to learn; it’s a community of learners and educators who are passionate about technology."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-24 bg-blue-950 text-white px-4 relative overflow-hidden transition-colors">
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600 rounded-full blur-[150px] opacity-10"></div>
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
            <div className="p-12 sm:p-20 bg-white/5 border border-white/10 rounded-[4rem] backdrop-blur-md">
              <h3 className="text-4xl font-black uppercase tracking-tighter mb-8 text-yellow-400">Vision</h3>
              <p className="text-lg sm:text-xl leading-relaxed font-medium text-blue-100/80">
                We aim to make digital literacy universal, empowering everyone with the skills to leverage technology to enhance their lives.
              </p>
            </div>
            <div className="p-12 sm:p-20 bg-white/5 border border-white/10 rounded-[4rem] backdrop-blur-md">
              <h3 className="text-4xl font-black uppercase tracking-tighter mb-8 text-blue-400">Mission</h3>
              <p className="text-lg sm:text-xl leading-relaxed font-medium text-blue-100/80">
                Our mission is to empower individuals through accessible, high-quality computer education, enhancing their personal and professional lives.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SchoolAbout;
