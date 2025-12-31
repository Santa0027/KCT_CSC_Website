import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import logo from '../assets/KCT logo.jpeg';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => setIsOpen(!isOpen);

  const links = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Courses', path: '/courses' },
    { name: 'Blog', path: '/blog' },
    { name: 'Contact', path: '/enquiry' },
  ];

  return (
    <nav className="fixed w-full z-50 bg-white/80 backdrop-blur-xl border-b border-white/20 shadow-sm">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex justify-between items-center h-20">
          
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group">
            <div className="relative">
              <div className="absolute inset-0 bg-blue-500 blur-2xl opacity-20 group-hover:opacity-40 transition-opacity rounded-full"></div>
              <img src={logo} alt="KCT Logo" className="h-12 w-auto relative z-10 mix-blend-multiply" />
            </div>
            <div className="hidden md:block">
              <span className="block text-xl font-black tracking-tighter text-slate-900 leading-none">KCT</span>
              <span className="text-[10px] font-bold text-blue-600 tracking-[0.2em] uppercase">Computer Education</span>
            </div>
          </Link>

        {/* DESKTOP LINKS */}
        <div className="hidden md:flex items-center gap-8 bg-white/50 px-6 py-2 rounded-full border border-white/50 shadow-sm backdrop-blur-sm">
          {['Home', 'About', 'Courses', 'Blog'].map((item) => {
            const path = item === 'Home' ? '/' : `/${item.toLowerCase()}`;
            const isActive = location.pathname === path;
            
            return (
              <Link 
                key={item}
                to={path}
                className={`text-sm font-bold tracking-tight transition-all relative px-2 py-1 ${
                  isActive ? 'text-blue-600' : 'text-slate-500 hover:text-blue-600'
                }`}
              >
                {item}
                {isActive && (
                  <motion.span 
                    layoutId="nav-pill"
                    className="absolute -bottom-1 left-0 right-0 h-1 bg-blue-600 rounded-full"
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
              </Link>
            );
          })}
        </div>
          
        {/* CTA BUTTON */}
        <div className="hidden md:block">
          <Link to="/enquiry">  
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-blue-600 text-white px-6 py-3 rounded-xl hover:bg-blue-700 transition-colors text-xs font-black uppercase tracking-widest shadow-xl shadow-blue-600/20"
            >
              Enquire Now
            </motion.button>
          </Link>
        </div>

        {/* MOBILE MENU BUTTON */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="p-2 text-slate-600 hover:bg-slate-100 rounded-xl transition-colors">
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
        </div>
      </div>

      {/* MOBILE MENU DROPDOWN */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t border-slate-100 overflow-hidden"
          >
            <div className="px-6 py-8 flex flex-col gap-6">
              {['Home', 'About', 'Courses', 'Blog'].map((item) => (
                <Link 
                  key={item}
                  to={item === 'Home' ? '/' : `/${item.toLowerCase()}`}
                  onClick={() => setIsOpen(false)}
                  className="text-lg font-bold text-slate-600 hover:text-blue-600 transition-colors"
                >
                  {item}
                </Link>
              ))}
              <Link to="/enquiry" onClick={() => setIsOpen(false)}>
                <button className="w-full bg-blue-600 text-white px-6 py-4 rounded-xl font-black uppercase tracking-widest shadow-lg shadow-blue-200">
                  Enquire Now
                </button>
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;