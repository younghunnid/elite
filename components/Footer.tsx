
import React from 'react';
import { BRAND, SERVICES } from '../constants';

interface FooterProps {
  onNavigate: (path: string) => void;
}

const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  return (
    <footer className="bg-blue-950 text-white pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-20">
          {/* Brand Info */}
          <div className="lg:col-span-1">
            <h3 className="text-2xl font-black mb-6 uppercase tracking-tighter">ELITES <span className="text-blue-400">COMPUTER SERVICES</span></h3>
            <p className="text-blue-100/60 leading-relaxed mb-8">
              Liberia's premier hub for professional IT solutions and technical excellence. Helping you build a solid foundation for a greater future.
            </p>
            <div className="text-yellow-400 font-bold italic text-xs leading-relaxed">"{BRAND.motto}"</div>
          </div>

          {/* Quick Nav */}
          <div>
            <h4 className="text-lg font-bold mb-8 text-white uppercase tracking-widest text-[10px]">Navigation</h4>
            <ul className="space-y-4 text-blue-100/60 font-medium">
              <li><button onClick={() => onNavigate('home')} className="hover:text-yellow-400 transition-colors uppercase text-[10px] tracking-widest font-black">Home</button></li>
              <li><button onClick={() => onNavigate('about')} className="hover:text-yellow-400 transition-colors uppercase text-[10px] tracking-widest font-black">About Us</button></li>
              <li><button onClick={() => onNavigate('services')} className="hover:text-yellow-400 transition-colors uppercase text-[10px] tracking-widest font-black">Services</button></li>
              <li><button onClick={() => onNavigate('portfolios')} className="hover:text-yellow-400 transition-colors uppercase text-[10px] tracking-widest font-black">Portfolios</button></li>
              <li><button onClick={() => onNavigate('team')} className="hover:text-yellow-400 transition-colors uppercase text-[10px] tracking-widest font-black">Team</button></li>
            </ul>
          </div>

          {/* Core Services */}
          <div>
            <h4 className="text-lg font-bold mb-8 text-white uppercase tracking-widest text-[10px]">Our Services</h4>
            <ul className="space-y-4 text-blue-100/60 font-medium text-[10px] uppercase tracking-widest font-bold">
              {SERVICES.map(s => (
                <li key={s.id}>{s.title}</li>
              ))}
            </ul>
          </div>

          {/* Direct Contact */}
          <div>
            <h4 className="text-lg font-bold mb-8 text-white uppercase tracking-widest text-[10px]">Get In Touch</h4>
            <ul className="space-y-6 text-blue-100/60 font-medium text-[10px] uppercase tracking-widest font-bold">
              <li className="flex items-start">
                <span className="text-yellow-400 mr-4 w-5 flex-shrink-0">📍</span>
                <div className="flex flex-col">
                  <span className="text-[8px] text-white/40 mb-1">ADDRESS</span>
                  {BRAND.address}
                </div>
              </li>
              <li className="flex items-center">
                <span className="text-yellow-400 mr-4 w-5 flex-shrink-0">📞</span>
                <div className="flex flex-col">
                  <span className="text-[8px] text-white/40 mb-1">PHONE</span>
                  <a href={`tel:${BRAND.phone.replace(/\D/g, '')}`} className="hover:text-yellow-400 transition-colors">{BRAND.phone}</a>
                </div>
              </li>
              <li className="flex items-center">
                <span className="text-yellow-400 mr-4 w-5 flex-shrink-0">✉️</span>
                <div className="flex flex-col">
                  <span className="text-[8px] text-white/40 mb-1">EMAIL</span>
                  <a href={`mailto:${BRAND.email}`} className="hover:text-yellow-400 transition-colors break-all">{BRAND.email}</a>
                </div>
              </li>
              <li className="flex items-center border-t border-white/5 pt-6">
                <span className="text-yellow-400 mr-4 w-5 flex-shrink-0">🕒</span>
                <div className="flex flex-col">
                  <span className="text-[8px] text-white/40 mb-1">WORKING HOURS</span>
                  <span className="text-white">Mon - Sat: {BRAND.hours}</span>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-12 border-t border-white/10 flex flex-col md:flex-row justify-between items-center text-blue-100/40 text-[10px] uppercase tracking-widest font-black text-center md:text-left">
          <p>Copyright © 2026 elitescomputerliteracy.com. Powered by elitescomputerliteracy.com.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
