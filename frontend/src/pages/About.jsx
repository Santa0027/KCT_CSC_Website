import React from 'react';
import { motion } from 'framer-motion';
import { 
  Users, Award, BookOpen, Star, 
  Target, Rocket, Heart, ArrowRight,
  Linkedin, Twitter, Facebook, Mail,
  CheckCircle2, Globe
} from 'lucide-react';

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
      <header className="relative pt-24 pb-20 text-center overflow-hidden">
        <motion.div 
          initial="hidden" 
          animate="visible" 
          variants={fadeInUp}
          className="max-w-4xl mx-auto px-6"
        >
          <span className="bg-blue-50 text-blue-600 font-black text-[10px] tracking-[0.2em] px-4 py-2 rounded-lg uppercase inline-block mb-6 shadow-sm">
            Our Story
          </span>
          <h1 className="text-5xl lg:text-7xl font-black leading-[1.1] mb-8 tracking-tighter">
            Shaping the Future <br /> of <span className="text-blue-600">Tech Education</span>
          </h1>
          <p className="text-gray-500 text-xl leading-relaxed font-medium">
            CSC Institute is a premier destination for technology learning, 
            dedicated to empowering individuals with the skills needed to 
            excel in the ever-evolving digital world.
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
            <div className="rounded-[3.5rem] overflow-hidden shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1531482615713-2afd69097998?w=800" 
                alt="Our Lab" 
                className="w-full h-[500px] object-cover" 
              />
            </div>
          </motion.div>

          <motion.div 
            initial="hidden" 
            whileInView="visible" 
            viewport={{ once: true }} 
            variants={fadeInUp}
            className="space-y-8"
          >
            <h2 className="text-4xl font-black tracking-tighter">Our History & Mission</h2>
            <p className="text-gray-500 text-lg leading-relaxed font-medium">
              Founded in 2010, CSC Institute was started with a simple vision: to 
              bridge the widening gap between academic computer science 
              education and the practical demands of the IT industry. Over the 
              last decade, we have evolved from a small classroom into a 
              world-class learning hub.
            </p>
            <p className="text-gray-500 text-lg leading-relaxed font-medium">
              Our mission is to democratize tech education by providing 
              affordable, high-quality, and hands-on training that results in 
              real-world employability for our students.
            </p>
            
            <div className="grid grid-cols-3 gap-6 pt-6">
              <div>
                <p className="text-3xl font-black text-blue-600">2010</p>
                <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest mt-1">Established</p>
              </div>
              <div>
                <p className="text-3xl font-black text-blue-600">60+</p>
                <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest mt-1">Expert Mentors</p>
              </div>
              <div>
                <p className="text-3xl font-black text-blue-600">15k+</p>
                <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest mt-1">Happy Students</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* --- 4. CORE VALUES --- */}
      <section className="py-24 bg-slate-50/50">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div 
            variants={staggerContainer} 
            initial="hidden" 
            whileInView="visible" 
            viewport={{ once: true }} 
            className="grid md:grid-cols-3 gap-10"
          >
            {[
              { icon: <Target />, title: "Practical Learning", desc: "We focus on real-world projects and coding rather than just theory.", color: "text-blue-600 bg-white" },
              { icon: <Heart />, title: "Community First", desc: "Building a network of developers who support each other in their careers.", color: "text-red-500 bg-white" },
              { icon: <Rocket />, title: "Career Focus", desc: "Every course is designed to land you a job in the current tech market.", color: "text-orange-500 bg-white" }
            ].map((value, i) => (
              <motion.div key={i} variants={fadeInUp} className="p-10 rounded-[3rem] bg-white border border-slate-100 shadow-xl shadow-slate-200/30 group hover:border-blue-200 transition-all">
                <div className={`${value.color} w-16 h-16 rounded-2xl flex items-center justify-center mb-8 shadow-sm group-hover:scale-110 transition-transform`}>
                  {value.icon}
                </div>
                <h3 className="text-xl font-black mb-4 tracking-tight">{value.title}</h3>
                <p className="text-gray-500 font-medium leading-relaxed">{value.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* --- 5. STATS COUNTER --- */}
      <section className="py-24 max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 border-y-2 border-slate-50 py-16">
          {[
            { num: "15+", label: "Years of Excellence" },
            { num: "2000+", label: "Happy Graduates" },
            { num: "30+", label: "Expert Mentors" },
            { num: "98%", label: "Job Placement" }
          ].map((stat, i) => (
            <div key={i} className="text-center">
              <p className="text-5xl font-black text-slate-900 tracking-tighter mb-2">{stat.num}</p>
              <p className="text-[10px] font-black text-blue-600 uppercase tracking-[0.2em]">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* --- 6. MEET OUR INSTRUCTORS --- */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <span className="text-blue-600 font-black text-[10px] tracking-[0.2em] uppercase">The Brain Trust</span>
            <h2 className="text-4xl font-black mt-4 tracking-tighter">Meet Our Instructors</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-10">
            {[
              { name: "Robert Fox", role: "Junior Web Development Instructor", img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=500" },
              { name: "Jane Cooper", role: "Senior Data Scientist & Mentor", img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=500" },
              { name: "Eleanor Pane", role: "UI/UX Designer & Lead", img: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=500" }
            ].map((mentor, i) => (
              <motion.div key={i} whileHover={{ y: -10 }} className="group">
                <div className="rounded-[3rem] overflow-hidden mb-6 h-[400px] shadow-2xl relative">
                  <img src={mentor.img} alt={mentor.name} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700" />
                  <div className="absolute bottom-6 left-6 right-6 p-6 bg-white/90 backdrop-blur-md rounded-[2rem] translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all">
                    <div className="flex gap-4 justify-center">
                      <Linkedin className="w-5 h-5 text-blue-600 cursor-pointer" />
                      <Twitter className="w-5 h-5 text-blue-400 cursor-pointer" />
                    </div>
                  </div>
                </div>
                <h3 className="text-xl font-black tracking-tight text-center">{mentor.name}</h3>
                <p className="text-xs font-bold text-gray-400 uppercase tracking-widest text-center mt-2">{mentor.role}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* --- 7. STUDENT SUCCESS STORIES --- */}
      <section className="py-32 bg-slate-900 text-white rounded-[4rem] mx-6 mb-24 overflow-hidden relative">
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600/20 blur-[120px] rounded-full"></div>
        <div className="max-w-7xl mx-auto px-10 relative z-10">
          <div className="text-center mb-20">
            <span className="text-blue-400 font-black text-[10px] tracking-[0.2em] uppercase">Testimonials</span>
            <h2 className="text-4xl font-black mt-4 tracking-tighter">Student Success Stories</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-10">
            {[
              { name: "Alex Morgan", role: "Software Engineer at Google", text: "The practical approach at CSC helped me land my dream job. The mentors are top-notch!" },
              { name: "Sarah Lee", role: "Fullstack Developer", text: "I went from zero to hiring-ready in 6 months. Best decision for my career." },
              { name: "Michael Chen", role: "Data Analyst", text: "The curriculum is perfectly aligned with industry needs. Highly recommend this institute." }
            ].map((testi, i) => (
              <div key={i} className="bg-white/5 border border-white/10 p-10 rounded-[2.5rem] backdrop-blur-sm">
                <div className="flex text-yellow-400 gap-1 mb-6"><Star size={14} fill="currentColor"/><Star size={14} fill="currentColor"/><Star size={14} fill="currentColor"/><Star size={14} fill="currentColor"/><Star size={14} fill="currentColor"/></div>
                <p className="text-slate-300 font-medium italic mb-8 leading-relaxed">"{testi.text}"</p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-blue-500/20"></div>
                  <div>
                    <p className="font-bold text-sm">{testi.name}</p>
                    <p className="text-[10px] font-black text-blue-400 uppercase tracking-widest">{testi.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- 8. FOOTER --- */}
      <footer className="bg-slate-900 text-white pt-24 pb-12">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-16 mb-20">
          <div className="col-span-1">
            <div className="flex items-center gap-2 font-black text-2xl text-blue-400 mb-8 tracking-tighter">
              <div className="w-10 h-10 bg-blue-500 rounded-xl flex items-center justify-center text-white text-sm">C</div> CSC Institute
            </div>
            <p className="text-gray-400 font-medium leading-relaxed">Empowering the next generation of tech leaders through industry-focused education.</p>
          </div>
          <div>
            <h5 className="font-black text-[10px] uppercase tracking-[0.2em] mb-8 text-gray-500">Company</h5>
            <ul className="space-y-4 text-gray-400 font-bold text-sm">
              <li><a href="/" className="hover:text-white transition-colors">Home</a></li>
              <li><a href="/about" className="hover:text-white transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Career</a></li>
            </ul>
          </div>
          <div>
            <h5 className="font-black text-[10px] uppercase tracking-[0.2em] mb-8 text-gray-500">Contact</h5>
            <ul className="space-y-4 text-gray-400 font-bold text-sm">
              <li className="flex items-center gap-3"><Mail size={14}/> info@cscinstitute.com</li>
              <li className="flex items-center gap-3"><Globe size={14}/> San Francisco, CA</li>
            </ul>
          </div>
          <div>
            <h5 className="font-black text-[10px] uppercase tracking-[0.2em] mb-8 text-gray-500">Newsletter</h5>
            <div className="flex gap-2">
              <input type="text" placeholder="Email" className="bg-slate-800 border-none rounded-xl px-4 py-3 text-xs w-full focus:ring-1 focus:ring-blue-500" />
              <button className="bg-blue-600 p-3 rounded-xl hover:bg-blue-500 transition-colors"><ArrowRight size={16} /></button>
            </div>
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-6 pt-12 border-t border-slate-800 flex justify-between items-center text-[10px] font-black uppercase tracking-[0.3em] text-gray-600">
          <p>© 2024 CSC Institute. Designed for Excellence.</p>
          <div className="flex gap-8">
            <Linkedin size={16} className="hover:text-white cursor-pointer" />
            <Twitter size={16} className="hover:text-white cursor-pointer" />
            <Facebook size={16} className="hover:text-white cursor-pointer" />
          </div>
        </div>
      </footer>
    </div>
  );
};

export default AboutPage;