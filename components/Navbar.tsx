
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { NAV_LINKS } from '../constants';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeMenu = () => setIsOpen(false);

  return (
    <nav 
      className={`fixed w-full z-[100] transition-all duration-500 ${
        scrolled 
          ? 'bg-[#800000] py-3 shadow-2xl' 
          : 'bg-white py-5 shadow-sm border-b border-slate-100'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center space-x-3 shrink-0" onClick={closeMenu}>
            {/* Logo Box */}
            <div className={`w-10 h-10 sm:w-12 sm:h-12 rounded-xl flex items-center justify-center font-black text-xl sm:text-2xl shadow-lg transition-all duration-300 ${
              scrolled 
                ? 'bg-white text-[#800000]' 
                : 'bg-[#B71C1C] text-white'
            }`}>
              P
            </div>
            {/* Brand Name */}
            <div className="flex flex-col whitespace-nowrap">
              <span className={`text-lg sm:text-xl font-black tracking-tight leading-none transition-colors duration-300 ${
                scrolled ? 'text-white' : 'text-[#800000]'
              }`}>
                PNREDDY <span className={`italic transition-colors duration-300 ${
                  scrolled ? 'text-[#FFC107]' : 'text-[#FF9800]'
                }`}>Techno</span> School
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center space-x-10">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-[12px] font-bold uppercase tracking-widest transition-all duration-300 hover:scale-105 ${
                  location.pathname === link.path 
                    ? (scrolled ? 'text-[#FFC107]' : 'text-[#FF9800]')
                    : (scrolled ? 'text-slate-100' : 'text-[#333333] opacity-70 hover:opacity-100')
                }`}
              >
                {link.name}
              </Link>
            ))}
            <Link 
              to="/contact" 
              className={`px-8 py-3 rounded-xl text-[12px] font-black uppercase tracking-widest transition-all shadow-lg border-2 ${
                scrolled 
                  ? 'bg-white text-[#800000] border-white hover:bg-transparent hover:text-white' 
                  : 'bg-[#FF9800] text-white border-[#FF9800] hover:bg-[#E68900] hover:border-[#E68900]'
              }`}
            >
              Contact Us
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`p-2 rounded-md transition-colors ${scrolled ? 'text-white' : 'text-[#800000]'}`}
            >
              {isOpen ? <X size={32} /> : <Menu size={32} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`lg:hidden absolute w-full transition-all duration-300 ease-in-out ${
        isOpen ? 'top-full opacity-100' : '-top-[600px] opacity-0'
      } ${scrolled ? 'bg-[#800000]' : 'bg-white'} shadow-2xl border-t border-slate-100`}>
        <div className="px-4 pt-2 pb-10 space-y-2">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              onClick={closeMenu}
              className={`block px-4 py-5 rounded-xl text-base font-bold uppercase tracking-widest ${
                location.pathname === link.path 
                  ? (scrolled ? 'text-[#FFC107] bg-white/5' : 'text-[#FF9800] bg-slate-50')
                  : (scrolled ? 'text-slate-100' : 'text-[#333333]')
              }`}
            >
              {link.name}
            </Link>
          ))}
          <div className="pt-6 px-4">
            <Link 
              to="/contact" 
              onClick={closeMenu}
              className="block w-full text-center bg-[#FF9800] text-white px-8 py-5 rounded-2xl font-black uppercase tracking-widest shadow-xl"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
