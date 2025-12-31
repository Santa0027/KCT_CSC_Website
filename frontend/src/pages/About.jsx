import React from 'react';
import { motion } from 'framer-motion';
import { 
  Users, Award, BookOpen, Star, 
  Target, Rocket, Heart, ArrowRight,
  Linkedin, Twitter, Facebook, Mail,
  CheckCircle2, Globe
} from 'lucide-react';

// Import Assets
import kctLogo from '../assets/KCT logo.jpeg';
import msmeLogo from '../assets/msme.jpeg';
import isoLogo from '../assets/iso.jpeg';

const AboutPage = () => {
  // Animation Variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
  };

  return (
    <div className="bg-white text-slate-900 font-sans selection:bg-blue-100 overflow-x-hidden">
      
      {/* --- 2. HERO SECTION --- */}
      <header className="relative pt-24 pb-20 text-center overflow-hidden bg-slate-50/50">
        <motion.div 
          initial="hidden" 
          animate="visible" 
          variants={fadeInUp}
          className="max-w-4xl mx-auto px-6"
        >
          <div className="flex justify-center items-center gap-4 mb-8">
             <img src={kctLogo} alt="Krishnaa Logo" className="h-20 md:h-24 mix-blend-multiply" />
          </div>
         
          <h1 className="text-3xl lg:text-5xl font-black leading-[1.2] mb-6 tracking-tighter text-slate-900">
            Krishnaa CompuTech <br/> <span className="text-blue-600">Computer Education (KCT)</span>
          </h1>
          <p className="text-slate-600 text-xl md:text-2xl font-black italic tracking-tight">
            "Enhance your Knowledge & Ensure your Success!"
          </p>
        </motion.div>
      </header>

      {/* --- 3. HISTORY & MISSION --- */}
      <section className="py-24 max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <motion.div 
            initial="hidden" 
            whileInView="visible" 
            viewport={{ once: true }} 
            variants={fadeInUp}
            className="relative"
          >
            <div className="rounded-[3.5rem] overflow-hidden shadow-2xl border-8 border-white">
              <img 
                src="https://images.unsplash.com/photo-1531482615713-2afd69097998?w=800" 
                alt="KCT Institute" 
                className="w-full h-[600px] object-cover" 
              />
            </div>
             {/* Floating Badge - ISO */}
             <div className="absolute -bottom-10 -right-10 bg-white p-6 rounded-[2rem] shadow-xl max-w-xs border border-slate-50 hidden md:flex items-center gap-4">
                <img src={isoLogo} alt="ISO Logo" className="h-12 w-auto" />
                <div>
                  <p className="text-[10px] font-black uppercase text-slate-400 tracking-widest">Certified</p>
                  <p className="font-bold text-slate-900">ISO 9001:2015</p>
                </div>
            </div>
          </motion.div>

          <motion.div 
            initial="hidden" 
            whileInView="visible" 
            viewport={{ once: true }} 
            variants={fadeInUp}
            className="space-y-8"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 text-blue-600 font-bold text-xs uppercase tracking-wider mb-2">
              <Award size={16} />
              <span>Since 2007</span>
            </div>
            <h2 className="text-4xl font-black tracking-tighter text-slate-900">About Our Journey</h2>
            
            <div className="space-y-6 text-lg text-slate-600 leading-relaxed font-medium">
              <p>
                Established in <strong className="text-slate-900">2007</strong>, Krishnaa Computech Computer Education in Katpadi, Vellore,  
                is a top player in the category of Computer Hardware and Software Training Institutes.  
                Formerly known as <strong className="text-slate-900">Eray Computer Education</strong>, the institute was renamed in 2011 to reflect its expanded vision.  
                Since then, we have been affiliated with <strong className="text-blue-600">Penta Tech Tamil Nadu Computer Education & Examination (PTCEE)</strong>,  
                ensuring all courses are recognized and certified.
              </p>

              <div className="bg-slate-50 p-6 rounded-3xl border border-slate-100 flex items-start gap-4">
                 <img src={msmeLogo} alt="MSME Logo" className="h-10 w-auto mix-blend-multiply" />
                 <div>
                    <p className="font-bold text-slate-900 mb-1">MSME Registered Institute</p>
                    <p className="text-sm text-slate-500">Ref: <span className="font-mono font-bold text-blue-600">UDYAM-TN-30-0088670</span></p>
                 </div>
              </div>

              <p>
                PTCEE is <strong className="text-slate-900">ISO 9001:2008</strong> and <strong className="text-slate-900">ISO 9001:2015</strong> certified, ensuring quality management and standardized education processes.
              </p>

              <p>
                Over the years, <strong className="text-slate-900">Krishnaa Computech Computer Education (KCT)</strong> has built a strong foothold in the computer education industry in Vellore.  
                Our belief that student satisfaction is as important as the quality of our courses has helped us grow a vast base of learners,  
                both locally and from other parts of Vellore.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* --- 4. STATS COUNTER --- */}
      <section className="py-20 bg-slate-900 text-white">
         <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
            {[
              { num: "2007", label: "Established" },
              { num: "ISO", label: "Certified" },
              { num: "MSME", label: "Registered" },
              { num: "15k+", label: "Students" }
            ].map((stat, i) => (
              <div key={i}>
                <p className="text-4xl lg:text-5xl font-black tracking-tighter mb-2 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">{stat.num}</p>
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-slate-500">{stat.label}</p>
              </div>
            ))}
         </div>
      </section>



      {/* --- 6. SIMPLE FOOTER --- */}
      <footer className="bg-slate-50 border-t border-slate-200 py-12 text-center">
         <div className="max-w-4xl mx-auto px-6 space-y-6">
            <p className="text-slate-500 font-medium text-sm">
              © 2025 Krishnaa CompuTech Computer Education.
            </p>
            <div className="flex flex-col md:flex-row items-center justify-center gap-4 text-sm text-slate-600 font-medium">
               <span className="flex items-center gap-2">
                 Registered under MSME 
                 <img src={msmeLogo} alt="MSME" className="h-6 mix-blend-multiply" />
               </span>
               <span className="hidden md:inline text-slate-300">|</span>
               <span>(Udyam Registration No: <strong className="text-slate-900">UDYAM-TN-30-0088670</strong>)</span>
            </div>
            <p className="text-xs text-slate-400 font-bold uppercase tracking-widest">
              Affiliated with Penta Tech Tamil Nadu Computer Education & Examination (PTCEE)
            </p>
         </div>
      </footer>
    
    </div>
  );
};

export default AboutPage;