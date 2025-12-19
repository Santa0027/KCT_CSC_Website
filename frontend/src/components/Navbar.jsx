import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const location = useLocation();

  return (
    // The main nav stays full-width for the border and background
    <nav className="border-b border-gray-100 sticky top-0 bg-white/90 backdrop-blur-md z-[1000]">
      
      {/* THIS CONTAINER centers your content at 100% zoom */}
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        
        {/* LOGO */}
        <Link to="/" className="flex items-center gap-2">
          <div className="w-9 h-9 bg-blue-600 rounded-xl flex items-center justify-center">
            <span className="text-white text-sm font-black italic">C</span>
          </div>
          <span className="font-black text-xl tracking-tighter text-slate-900">
            CSC Institute
          </span>
        </Link>

        {/* LINKS */}
        <div className="hidden md:flex items-center gap-10">
          {['Home', 'About', 'Courses', 'Blog'].map((item) => (
            <Link 
              key={item}
              to={item === 'Home' ? '/' : `/${item.toLowerCase()}`}
              className={`text-sm font-bold tracking-tight transition-colors ${
                location.pathname === (item === 'Home' ? '/' : `/${item.toLowerCase()}`) 
                ? 'text-blue-600' : 'text-slate-500 hover:text-blue-600'
              }`}
            >
              {item}
            </Link>
          ))}
          
          {/* CTA BUTTON */}
          <Link to="/enquiry">  
            <button className="bg-blue-600 text-white px-8 py-3 rounded-2xl hover:bg-blue-700 transition-all text-xs font-black uppercase tracking-widest shadow-xl shadow-blue-100">
              Enquire Now
            </button>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;