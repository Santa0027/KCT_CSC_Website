import React from 'react';
import { motion } from 'framer-motion';
import { 
  Play, Users, Award, BookOpen, Clock, 
  ChevronRight, Star, ArrowRight, MapPin, 
  Phone, Mail, Facebook, Twitter, Linkedin,
  CheckCircle2, Send
} from 'lucide-react';

const FullHomePage = () => {
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
      <header className="relative pt-16 pb-24 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
          <motion.div initial="hidden" animate="visible" variants={fadeInUp}>
            <span className="bg-blue-50 text-blue-600 font-black text-[10px] tracking-[0.2em] px-4 py-2 rounded-lg uppercase inline-block mb-6 shadow-sm">
              Level Up Your Skills
            </span>
            <h1 className="text-5xl lg:text-7xl font-black leading-[1.1] mb-8 tracking-tighter">
              Master the <br /> <span className="text-blue-600">Future of IT</span>
            </h1>
            <p className="text-gray-500 text-xl leading-relaxed mb-10 max-w-lg font-medium">
              Industry-leading professional training in programming, networking, and security. Fast-track your career today with our expert-led bootcamp.
            </p>
            <div className="flex flex-wrap gap-5">
              <button className="bg-blue-600 text-white font-black px-10 py-5 rounded-2xl shadow-2xl shadow-blue-200 hover:bg-blue-700 transition-all hover:-translate-y-1 active:scale-95 text-sm uppercase tracking-widest">
                Join Course
              </button>
              <button className="border-2 border-slate-100 text-slate-700 font-black px-10 py-5 rounded-2xl hover:bg-slate-50 transition-all text-sm uppercase tracking-widest">
                The Institute
              </button>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 50 }} 
            animate={{ opacity: 1, x: 0 }} 
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="bg-slate-900 rounded-[3.5rem] p-3 shadow-2xl overflow-hidden relative">
              <img src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=800" alt="Hero" className="rounded-[3rem] opacity-70 w-full object-cover h-[450px]" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-20 h-20 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center shadow-2xl border border-white/30 cursor-pointer hover:scale-110 transition-transform">
                  <Play className="text-white fill-white ml-1" />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </header>

      {/* --- 3. CORE FEATURES --- */}
      <section className="max-w-7xl mx-auto px-6 py-12">
        <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }} className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { icon: <Users />, label: "100% Practical", color: "text-blue-600 bg-blue-50" },
            { icon: <Award />, label: "Certified Trainers", color: "text-orange-600 bg-orange-50" },
            { icon: <BookOpen />, label: "Affordable Fees", color: "text-green-600 bg-green-50" },
            { icon: <Clock />, label: "Placement Support", color: "text-purple-600 bg-purple-50" }
          ].map((item, i) => (
            <motion.div key={i} variants={fadeInUp} className="bg-white p-8 rounded-[2.5rem] border border-slate-50 shadow-sm hover:shadow-xl transition-all text-center">
              <div className={`${item.color} w-14 h-14 rounded-2xl flex items-center justify-center mx-auto mb-5`}>
                {item.icon}
              </div>
              <h3 className="font-black text-slate-800 text-sm tracking-tight">{item.label}</h3>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* --- 4. PROFESSIONAL COURSES --- */}
      <section className="py-24 bg-slate-50/50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex justify-between items-end mb-16">
            <div>
              <span className="text-blue-600 font-black text-[10px] tracking-[0.2em] uppercase">Our Programs</span>
              <h2 className="text-4xl font-black mt-4 tracking-tighter">Professional Courses</h2>
            </div>
            <button className="text-blue-600 font-black text-xs uppercase tracking-[0.2em] flex items-center gap-2 hover:underline">
              View All <ArrowRight size={14} />
            </button>
          </div>
          <div className="grid md:grid-cols-3 gap-10">
            {[
              { title: "Full Stack Web Dev", img: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=500", badge: "Best Seller" },
              { title: "Data Analytics Python", img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=500", badge: "Trending" },
              { title: "Graphic UI/UX Design", img: "https://images.unsplash.com/photo-1586717791821-3f44a563eb4c?w=500", badge: "New" }
            ].map((course, i) => (
              <motion.div key={i} whileHover={{ y: -10 }} className="bg-white rounded-[3rem] border border-slate-100 overflow-hidden shadow-xl shadow-slate-200/40">
                <div className="h-56 relative">
                  <img src={course.img} alt={course.title} className="w-full h-full object-cover" />
                  <span className="absolute top-6 left-6 bg-white px-4 py-1.5 rounded-xl text-[10px] font-black uppercase tracking-widest">{course.badge}</span>
                </div>
                <div className="p-10">
                  <h3 className="text-xl font-black mb-6 tracking-tight">{course.title}</h3>
                  <div className="flex justify-between items-center pt-6 border-t border-slate-50">
                    <div className="flex text-yellow-400 gap-1"><Star size={14} fill="currentColor"/><Star size={14} fill="currentColor"/><Star size={14} fill="currentColor"/><Star size={14} fill="currentColor"/><Star size={14} fill="currentColor"/></div>
                    <button className="w-10 h-10 bg-slate-900 text-white rounded-xl flex items-center justify-center hover:bg-blue-600 transition-colors"><ChevronRight size={18}/></button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* --- 5. ABOUT SECTION --- */}
      <section className="py-32 max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className="relative">
            <img src="https://images.unsplash.com/photo-1531482615713-2afd69097998?w=800" alt="About" className="rounded-[3rem] shadow-2xl" />
            <div className="absolute -bottom-8 -right-8 bg-white p-8 rounded-[2.5rem] shadow-2xl border border-slate-50">
              <p className="text-4xl font-black text-blue-600 leading-none">15+</p>
              <p className="text-xs font-black text-gray-400 uppercase tracking-widest mt-2">Years of <br /> Excellence</p>
            </div>
          </motion.div>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}>
            <span className="text-blue-600 font-black text-[10px] tracking-[0.2em] uppercase">Who We Are</span>
            <h2 className="text-4xl font-black mt-4 mb-8 tracking-tighter">About CSC Institute</h2>
            <p className="text-gray-500 text-lg leading-relaxed mb-8 font-medium">
              Empowering Students Since 2010. We offer industry-driven training that bridges the gap between traditional education and high-demand tech roles.
            </p>
            <div className="grid grid-cols-2 gap-y-4 mb-10">
              {["Practical Learning", "Expert Mentors", "Job Assistance", "Modern Labs"].map((item, i) => (
                <div key={i} className="flex items-center gap-3 font-bold text-slate-700 text-sm">
                  <CheckCircle2 size={18} className="text-blue-500" /> {item}
                </div>
              ))}
            </div>
            <button className="text-blue-600 font-black text-xs uppercase tracking-widest underline decoration-4 underline-offset-8">Learn More About Us</button>
          </motion.div>
        </div>
      </section>

      {/* --- 6. OUR GALLERY --- */}
      <section className="py-24 bg-slate-50/50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-blue-600 font-black text-[10px] tracking-[0.2em] uppercase">Our Campus</span>
            <h2 className="text-4xl font-black mt-4 tracking-tighter">Our Gallery</h2>
          </div>
          <div className="grid grid-cols-12 gap-6 h-[600px]">
            <motion.div whileHover={{ scale: 0.98 }} className="col-span-12 md:col-span-4 rounded-[2.5rem] overflow-hidden shadow-lg h-full">
              <img src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=600" className="w-full h-full object-cover" />
            </motion.div>
            <div className="col-span-12 md:col-span-8 grid grid-rows-2 gap-6 h-full">
              <div className="grid grid-cols-2 gap-6 h-full">
                <motion.div whileHover={{ scale: 0.98 }} className="rounded-[2.5rem] overflow-hidden shadow-lg"><img src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600" className="w-full h-full object-cover" /></motion.div>
                <motion.div whileHover={{ scale: 0.98 }} className="rounded-[2.5rem] overflow-hidden shadow-lg"><img src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=600" className="w-full h-full object-cover" /></motion.div>
              </div>
              <motion.div whileHover={{ scale: 0.98 }} className="rounded-[2.5rem] overflow-hidden shadow-lg h-full"><img src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=1000" className="w-full h-full object-cover" /></motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* --- 7. GET IN TOUCH (With Map) --- */}
      <section className="py-32 max-w-7xl mt-100 mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-20">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className="bg-white p-12 rounded-[3.5rem] border-2 border-slate-50 shadow-2xl">
            <h2 className="text-4xl font-black mb-8 tracking-tighter">Get In Touch</h2>
            <form className="space-y-6">
              <div className="grid grid-cols-2 gap-6">
                <input type="text" placeholder="Name" className="bg-slate-50 border-none rounded-2xl p-5 text-sm font-bold w-full focus:ring-2 focus:ring-blue-500" />
                <input type="text" placeholder="Phone" className="bg-slate-50 border-none rounded-2xl p-5 text-sm font-bold w-full focus:ring-2 focus:ring-blue-500" />
              </div>
              <input type="email" placeholder="Email Address" className="bg-slate-50 border-none rounded-2xl p-5 text-sm font-bold w-full focus:ring-2 focus:ring-blue-500" />
              <textarea placeholder="Message" rows="4" className="bg-slate-50 border-none rounded-2xl p-5 text-sm font-bold w-full focus:ring-2 focus:ring-blue-500"></textarea>
              <button className="w-full bg-blue-600 text-white font-black py-5 rounded-[1.25rem] shadow-xl shadow-blue-200 uppercase tracking-widest text-xs flex items-center justify-center gap-3">
                Send Message <Send size={16} />
              </button>
            </form>
          </motion.div>

          <div className="space-y-8">
            <div className="grid md:grid-cols-1 gap-6">
              {[
                { icon: <MapPin />, label: "Address", text: "123 Tech Park, Silicon Valley, CA" },
                { icon: <Phone />, label: "Call Us", text: "+1 (800) 123-4567" },
                { icon: <Mail />, label: "Email", text: "info@cscinstitute.com" }
              ].map((info, i) => (
                <div key={i} className="flex items-center gap-6 p-6 bg-slate-50 rounded-[2rem] border border-slate-100">
                  <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center text-blue-600 shadow-sm">{info.icon}</div>
                  <div><p className="text-[10px] font-black text-gray-400 uppercase tracking-widest">{info.label}</p><p className="font-bold text-slate-800">{info.text}</p></div>
                </div>
              ))}
            </div>
            {/* Map Placeholder */}
            <div className="rounded-[3rem] overflow-hidden h-72 border-4 border-white shadow-2xl relative">
              <img src="https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?w=800" className="w-full h-full object-cover grayscale opacity-50" />
              <div className="absolute inset-0 flex items-center justify-center">
                <button className="bg-slate-900 text-white px-8 py-3 rounded-full font-black text-xs uppercase tracking-widest flex items-center gap-2">
                  <MapPin size={14} /> Open Google Maps
                </button>
              </div>
            </div>
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
            <p className="text-gray-400 font-medium leading-relaxed">Providing high-end IT training to build world-class careers.</p>
          </div>
          <div>
            <h5 className="font-black text-[10px] uppercase tracking-[0.2em] mb-8 text-gray-500">Links</h5>
            <ul className="space-y-4 text-gray-400 font-bold text-sm">
              <li><a href="#" className="hover:text-blue-400 transition-colors">Courses</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Mentors</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>
          <div>
            <h5 className="font-black text-[10px] uppercase tracking-[0.2em] mb-8 text-gray-500">Popular</h5>
            <ul className="space-y-4 text-gray-400 font-bold text-sm">
              <li>Web Development</li>
              <li>Data Science</li>
              <li>Cyber Security</li>
            </ul>
          </div>
          <div>
            <h5 className="font-black text-[10px] uppercase tracking-[0.2em] mb-8 text-gray-500">Newsletter</h5>
            <div className="flex gap-2">
              <input type="text" placeholder="Email" className="bg-slate-800 border-none rounded-xl px-4 py-3 text-xs w-full" />
              <button className="bg-blue-600 p-3 rounded-xl"><Send size={16} /></button>
            </div>
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-6 pt-12 border-t border-slate-800 flex justify-between items-center text-[10px] font-black uppercase tracking-[0.3em] text-gray-600">
          <p>© 2024 CSC Institute. All Rights Reserved.</p>
          <div className="flex gap-8">
            <Linkedin size={16} className="hover:text-white transition-colors" />
            <Twitter size={16} className="hover:text-white transition-colors" />
            <Facebook size={16} className="hover:text-white transition-colors" />
          </div>
        </div>
      </footer>
    </div>
  );
};

export default FullHomePage;