
import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Youtube, Twitter, MapPin, Phone, Lock } from 'lucide-react';
import { NAV_LINKS, SCHOOL_PHONE } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#333333] text-slate-300 pt-24 pb-12 overflow-hidden relative">
      <div className="absolute inset-0 ikat-overlay opacity-5 pointer-events-none"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-20">
          {/* Logo & Info */}
          <div className="space-y-8">
            <div className="flex items-center space-x-3 whitespace-nowrap">
              <div className="w-10 h-10 bg-[#B71C1C] rounded-lg flex items-center justify-center text-white font-black text-xl border border-white/10 shrink-0">
                P
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-black text-white leading-none">
                  PNREDDY <span className="text-[#FFC107] italic font-medium">Techno</span> School
                </span>
              </div>
            </div>
            <p className="text-sm leading-relaxed font-medium text-slate-400">
              Rooted in Telangana heritage since 2001. Committed to excellence through the SSC curriculum and concept-based programs.
            </p>
            <div className="flex space-x-4">
              {[Facebook, Instagram, Youtube, Twitter].map((Icon, idx) => (
                <a key={idx} href="#" className="w-10 h-10 bg-[#800000]/30 border border-white/5 rounded-lg flex items-center justify-center hover:bg-[#B71C1C] transition-colors text-white">
                  <Icon size={20} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-[#FFC107] font-bold text-lg mb-8 uppercase tracking-widest">Quick Links</h3>
            <ul className="space-y-4">
              {NAV_LINKS.map((link) => (
                <li key={link.path}>
                  <Link to={link.path} className="text-sm hover:text-white transition-colors font-medium border-b border-transparent hover:border-[#FFC107] pb-1">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Office Hours */}
          <div>
            <h3 className="text-[#FFC107] font-bold text-lg mb-8 uppercase tracking-widest">Office Hours</h3>
            <ul className="space-y-4 text-sm font-medium">
              <li className="flex justify-between items-center pb-2 border-b border-white/5">
                <span>Monday - Friday:</span>
                <span className="text-white">8:30 AM - 4:30 PM</span>
              </li>
              <li className="flex justify-between items-center pb-2 border-b border-white/5">
                <span>Saturday:</span>
                <span className="text-white">8:30 AM - 1:00 PM</span>
              </li>
              <li className="flex justify-between items-center">
                <span>Sunday:</span>
                <span className="text-[#FF9800] uppercase text-[10px] tracking-widest font-black">Closed</span>
              </li>
            </ul>
          </div>

          {/* Reach Us */}
          <div>
            <h3 className="text-[#FFC107] font-bold text-lg mb-8 uppercase tracking-widest">Reach Us</h3>
            <ul className="space-y-6">
              <li className="flex items-start space-x-4">
                <MapPin className="text-[#FFC107] mt-1 flex-shrink-0" size={20} />
                <span className="text-sm font-medium leading-relaxed">
                  Plot No 123, Techno Avenue, Banjara Hills, Hyderabad, 500034
                </span>
              </li>
              <li className="flex items-center space-x-4">
                <Phone className="text-[#FFC107] flex-shrink-0" size={20} />
                <span className="text-sm font-black text-white">+91 {SCHOOL_PHONE}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/5 pt-12 flex flex-col md:flex-row justify-between items-center text-[10px] font-black uppercase tracking-widest text-slate-500">
          <p>© 2026 PNREDDY Techno School. All rights reserved.</p>
          <div className="flex space-x-10 mt-6 md:mt-0 items-center">
            <Link to="/admin" className="flex items-center gap-2 hover:text-[#FFC107] transition-colors">
              <Lock size={12} /> Staff Dashboard
            </Link>
            <a href="#" className="hover:text-[#FFC107]">Privacy Policy</a>
            <a href="#" className="hover:text-[#FFC107]">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
