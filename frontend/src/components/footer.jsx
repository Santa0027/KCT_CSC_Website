import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Send, Facebook, Twitter, Linkedin, 
  MapPin, Phone, Mail, Instagram, ArrowRight
} from 'lucide-react';
import msmeLogo from '../assets/msme.jpeg';
import kctLogo from '../assets/KCT logo.jpeg';

const Footer = ({ courses = [] }) => {
  return (
    <footer className="bg-slate-900 pt-10 pb-5 overflow-hidden relative border-t border-slate-800">
      
      {/* Background Gradients - Reduced opacity and blur for cleaner look */}
      <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-blue-600/5 rounded-full blur-[80px] opacity-30 -translate-y-1/2 translate-x-1/3 pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-indigo-600/5 rounded-full blur-[80px] opacity-20 translate-y-1/3 -translate-x-1/3 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-12 gap-8 relative z-10 mb-8">
        
        {/* Brand Column */}
        <div className="md:col-span-4 lg:col-span-4 space-y-4">
          <Link to="/" className="flex items-center gap-2 group">
            <div className="relative w-8 h-8">
               <div className="absolute inset-0 bg-blue-500 blur-lg opacity-20 group-hover:opacity-40 transition-opacity rounded-full"></div>
               <img src={kctLogo} alt="KCT Logo" className="w-full h-full object-contain relative z-10 rounded-lg" />
            </div>
            <div>
              <span className="block text-lg font-black text-white tracking-tighter leading-none group-hover:text-blue-400 transition-colors">KCT</span>
              <span className="text-[9px] font-bold text-blue-500 tracking-[0.2em] uppercase">Computer Education</span>
            </div>
          </Link>
          <p className="text-slate-400 text-xs leading-relaxed max-w-sm">
            Empowering students with industry-relevant IT skills since 2007.
          </p>
          
          <div className="flex gap-3">
            {[Facebook, Instagram, Linkedin, Twitter].map((Icon, i) => (
              <a key={i} href="#" className="w-8 h-8 bg-slate-800 rounded-lg flex items-center justify-center text-slate-400 hover:bg-blue-600 hover:text-white transition-all hover:-translate-y-1 shadow-lg shadow-slate-900/50">
                <Icon size={14} />
              </a>
            ))}
          </div>
        </div>

        {/* Links Column - Added Blog Link */}
        <div className="md:col-span-3 lg:col-span-3">
          <h5 className="font-black text-[10px] uppercase tracking-[0.2em] text-slate-500 mb-4">Quick Links</h5>
          <ul className="space-y-2">
             <li>
                <Link to="/blog" className="text-slate-400 hover:text-blue-400 text-xs font-medium transition-colors flex items-center gap-2 group">
                  <span className="w-1 h-1 bg-slate-600 rounded-full group-hover:bg-blue-400"></span>
                  Blog & Insights
                </Link>
             </li>
             <li>
                <Link to="/courses" className="text-slate-400 hover:text-blue-400 text-xs font-medium transition-colors flex items-center gap-2 group">
                  <span className="w-1 h-1 bg-slate-600 rounded-full group-hover:bg-blue-400"></span>
                  All Courses
                </Link>
             </li>
            {courses.slice(0, 3).map(course => (
              <li key={course.id}>
                <Link to={`/courses/${course.slug}`} className="text-slate-400 hover:text-blue-400 text-xs font-medium transition-colors flex items-center gap-2 group">
                  <span className="w-1 h-1 bg-slate-600 rounded-full group-hover:bg-blue-400"></span>
                  {course.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Column */}
        <div className="md:col-span-5 lg:col-span-5 space-y-4">
          <h5 className="font-black text-[10px] uppercase tracking-[0.2em] text-slate-500 mb-4">Contact</h5>
          
          <div className="bg-slate-800/30 border border-slate-700/30 p-4 rounded-xl space-y-3 backdrop-blur-sm">
             <div className="flex items-start gap-3">
               <MapPin className="text-blue-500 shrink-0 mt-0.5" size={14} />
               <p className="text-slate-400 text-[10px] leading-relaxed">
                 36, 2nd Street, Kumarappa Nagar, Katpadi, Vellore - 632007. <br/>(Backside of Katpadi Police Station)
               </p>
             </div>

             <div className="flex items-center gap-3">
               <Phone className="text-blue-500 shrink-0" size={14} />
               <p className="text-slate-400 text-[10px] font-mono">+91 94446 59702</p>
             </div>

             <div className="flex items-center gap-3">
               <Mail className="text-blue-500 shrink-0" size={14} />
               <p className="text-slate-400 text-[10px] font-mono">kctce2007@gmail.com</p>
             </div>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="max-w-7xl mx-auto px-6 pt-4 border-t border-slate-800/50">
        <div className="flex flex-col md:flex-row items-center justify-between gap-3 text-[10px]">
           <div className="flex flex-col md:flex-row items-center gap-2 md:gap-4 text-center md:text-left">
              <span className="font-bold text-slate-500">© 2025 Krishnaa CompuTech.</span>
              <span className="hidden md:block w-px h-2 bg-slate-700"></span>
              <div className="flex items-center gap-2">
                 <span className="font-bold text-slate-500 uppercase tracking-tight">MSME Reg:</span>
                 <span className="text-slate-400 font-mono">UDYAM-TN-30-0088670</span>
              </div>
              <span className="hidden md:block w-px h-2 bg-slate-700"></span>
               <span className="font-bold text-slate-500 uppercase tracking-tight">Affiliated with PTCEE</span>
           </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;