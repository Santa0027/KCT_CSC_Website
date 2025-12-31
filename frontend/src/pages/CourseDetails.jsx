import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  CheckCircle, Clock, Layout, Globe, ChevronDown, 
  ChevronUp, PlayCircle, Star, GraduationCap, 
  Briefcase, Rocket, ShieldCheck, Zap, ArrowRight,
  Target, Users, HelpCircle, BookOpen, MessageCircle, Info
} from 'lucide-react';

const CourseDetailPage = () => {
  const { slug } = useParams();
  const [course, setCourse] = useState(null);
  const [activeCurriculum, setActiveCurriculum] = useState(0);
  const [activeFaq, setActiveFaq] = useState(null);

  const BASE_URL = "http://localhost:8000"; 

  useEffect(() => {
    const fetchCourseData = async () => {
      try {
        const response = await fetch(`${BASE_URL}/api/courses/${slug}/full/`);
        const data = await response.json();
        setCourse(data);
      } catch (error) {
        console.error("Error loading course:", error);
      }
    };
    fetchCourseData();
    window.scrollTo(0, 0);
  }, [slug]);

  // Enquiry Logic
  const [enquiryData, setEnquiryData] = useState({ name: '', phone: '', email: '' });
  const [enquiryStatus, setEnquiryStatus] = useState('idle');

  const handleEnquiryChange = (e) => setEnquiryData({...enquiryData, [e.target.name]: e.target.value});

  const handleEnquirySubmit = async (e) => {
    e.preventDefault();
    setEnquiryStatus('loading');
    try {
        const response = await fetch(`${BASE_URL}/api/contact/`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                ...enquiryData,
                subject: `Course Enquiry: ${course.title}`,
                message: `I am interested in the ${course.title} course.`
            })
        });
        if (response.ok) {
            setEnquiryStatus('success');
            setEnquiryData({ name: '', phone: '', email: '' });
            setTimeout(() => setEnquiryStatus('idle'), 3000);
        } else {
            setEnquiryStatus('error');
        }
    } catch {
        setEnquiryStatus('error');
    }
  };


  if (!course) return (
    <div className="flex h-screen items-center justify-center font-bold text-slate-400 animate-pulse bg-slate-50">
      <div className="flex flex-col items-center gap-4">
        <div className="w-12 h-12 border-4 border-blue-600 border-t-transparent rounded-full animate-spin"></div>
        <p>Loading Experience...</p>
      </div>
    </div>
  );

  const getImgUrl = (path) => path?.startsWith('http') ? path : `${BASE_URL}${path}`;
  const discountedPrice = course.price - (course.price * (course.discount / 100));

  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  const stagger = {
    visible: { transition: { staggerChildren: 0.1 } }
  };

  return (
    <div className="bg-[#F8FAFC] min-h-screen font-sans text-slate-900 overflow-x-hidden selection:bg-blue-100">
      
      {/* --- HERO SECTION --- */}
      <header className="relative bg-white pt-32 pb-20 overflow-hidden">
        <div className="absolute top-0 right-0 w-[50%] h-full bg-blue-50/50 skew-x-12 translate-x-32 z-0"></div>
        <div className="absolute top-20 left-10 w-64 h-64 bg-yellow-400/10 rounded-full blur-3xl"></div>
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <nav className="flex items-center gap-3 text-sm font-bold text-slate-400 mb-8">
            <Link to="/courses" className="hover:text-blue-600 transition-colors">Courses</Link> 
            <ChevronDown className="-rotate-90 text-slate-300" size={14} /> 
            <span className="text-blue-600 bg-blue-50 px-3 py-1 rounded-full">{course.title}</span>
          </nav>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div initial="hidden" animate="visible" variants={stagger}>
              <motion.div variants={fadeInUp} className="flex gap-2 mb-6">
                 {course.highlights.slice(0, 2).map((h, i) => (
                    <span key={i} className="flex items-center gap-1 text-[10px] font-black uppercase tracking-widest bg-slate-900 text-white px-3 py-1.5 rounded-lg shadow-lg shadow-slate-900/20">
                       <Star size={12} className="text-yellow-400" fill="currentColor"/> {h.text}
                    </span>
                 ))}
              </motion.div>
              
              <motion.h1 variants={fadeInUp} className="text-5xl lg:text-7xl font-black tracking-tighter leading-[1.05] mb-6 text-slate-900">
                {course.title.split('(')[0]} <br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
                  {course.title.match(/\(([^)]+)\)/)?.[0] || 'Mastery'}
                </span>
              </motion.h1>
              
              <motion.p variants={fadeInUp} className="text-xl text-slate-500 font-medium leading-relaxed mb-10 max-w-xl">
                {course.short_description}
              </motion.p>

              <motion.div variants={fadeInUp} className="flex flex-wrap gap-4">
                <a href="#inquire" className="bg-blue-600 text-white px-8 py-4 rounded-2xl font-black text-sm uppercase tracking-widest shadow-xl shadow-blue-600/30 hover:bg-blue-700 hover:scale-105 transition-all flex items-center gap-3">
                   Start Learning <ArrowRight size={18} />
                </a>
                <button className="bg-white text-slate-900 border border-slate-200 px-8 py-4 rounded-2xl font-black text-sm uppercase tracking-widest hover:border-blue-200 hover:bg-blue-50 transition-all flex items-center gap-3">
                   <PlayCircle size={18} /> Watch Preview
                </button>
              </motion.div>

              <motion.div variants={fadeInUp} className="mt-12 flex items-center gap-8 text-sm font-bold text-slate-500 border-t border-slate-100 pt-8">
                 <div className="flex items-center gap-2">
                    <Clock className="text-blue-500" size={20}/>
                    <div>
                      <p className="text-[10px] uppercase tracking-wider text-slate-400">Duration</p>
                      <p className="text-slate-900">{course.duration}</p>
                    </div>
                 </div>
                 <div className="flex items-center gap-2">
                    <Globe className="text-blue-500" size={20}/>
                     <div>
                      <p className="text-[10px] uppercase tracking-wider text-slate-400">Mode</p>
                      <p className="text-slate-900">{course.modes.map(m => m.mode).join(' & ')}</p>
                    </div>
                 </div>
              </motion.div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="relative rounded-[3rem] overflow-hidden shadow-2xl shadow-blue-900/20 border-[8px] border-white">
                <img src={getImgUrl(course.images[0]?.image)} alt={course.title} className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent flex items-end p-10">
                   <div className="text-white">
                      <p className="text-xs font-bold uppercase tracking-widest mb-2 opacity-80">Course Rating</p>
                      <div className="flex items-center gap-2">
                         <span className="text-4xl font-black">4.9</span>
                         <div className="flex text-yellow-400">
                            {[1,2,3,4,5].map(i => <Star key={i} size={20} fill="currentColor"/>)}
                         </div>
                      </div>
                   </div>
                </div>
              </div>
              
              {/* Floating Badge */}
              <motion.div 
                animate={{ y: [0, -10, 0] }}
                transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                className="absolute -bottom-10 -left-10 bg-white p-6 rounded-[2rem] shadow-xl max-w-[200px] border border-slate-100 hidden md:block"
              >
                 <div className="flex -space-x-3 mb-3">
                    {[1,2,3].map(i => (
                       <div key={i} className="w-10 h-10 rounded-full bg-slate-200 border-2 border-white"></div>
                    ))}
                    <div className="w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center text-xs font-bold border-2 border-white">+2k</div>
                 </div>
                 <p className="font-bold text-slate-900 leading-tight">Join 2,000+ Students enrolled.</p>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </header>


      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-12 gap-12 py-20">
         
         {/* --- LEFT CONTENT --- */}
         <div className="lg:col-span-8 space-y-20">
            
            {/* WHY CHOOSE US - Grid */}
            <section>
               <h3 className="text-2xl font-black mb-8 flex items-center gap-3">
                  <span className="bg-blue-100 text-blue-600 p-2 rounded-lg"><Rocket size={24}/></span>
                  Why Choose KCT?
               </h3>
               <div className="grid md:grid-cols-2 gap-6">
                  {course.why_choose && course.why_choose.length > 0 ? (
                      course.why_choose.map((item) => (
                        <div key={item.id} className="bg-white p-8 rounded-[2rem] border border-slate-100 shadow-sm hover:shadow-md hover:border-blue-100 transition-all group">
                           <div className="w-12 h-12 bg-slate-50 text-slate-900 rounded-xl flex items-center justify-center mb-6 text-xl font-bold group-hover:bg-blue-600 group-hover:text-white transition-colors">
                              {item.title[0]}
                           </div>
                           <h4 className="font-bold text-lg mb-2">{item.title}</h4>
                           <p className="text-slate-500 text-sm leading-relaxed">{item.description}</p>
                        </div>
                      ))
                  ) : (
                    // Fallback using data if empty for safety
                    <div className="bg-blue-50 p-6 rounded-xl text-blue-800">Rich data coming soon...</div>
                  )}
               </div>
            </section>

            {/* CURRICULUM */}
            <section>
               <h3 className="text-2xl font-black mb-8 flex items-center gap-3">
                  <span className="bg-fuchsia-100 text-fuchsia-600 p-2 rounded-lg"><BookOpen size={24}/></span>
                  Curriculum
               </h3>
               <div className="space-y-4">
                  {course.curriculum.sort((a,b) => a.order - b.order).map((module, idx) => (
                    <motion.div 
                      key={module.id} 
                      className="bg-white border border-slate-200 rounded-[1.5rem] overflow-hidden"
                      initial={false}
                    >
                      <button 
                        onClick={() => setActiveCurriculum(activeCurriculum === idx ? null : idx)}
                        className={`w-full flex justify-between items-center p-6 text-left transition-colors ${activeCurriculum === idx ? 'bg-slate-50' : 'hover:bg-slate-50'}`}
                      >
                         <div className="flex items-center gap-4">
                            <span className="w-8 h-8 rounded-lg bg-blue-100 text-blue-600 flex items-center justify-center text-sm font-bold">
                              {idx + 1}
                            </span>
                            <span className="font-bold text-slate-800 text-lg">{module.title}</span>
                         </div>
                         <ChevronDown className={`transition-transform duration-300 text-slate-400 ${activeCurriculum === idx ? 'rotate-180 text-blue-600' : ''}`} />
                      </button>
                      <AnimatePresence initial={false}>
                        {activeCurriculum === idx && (
                          <motion.div
                             initial={{ height: 0, opacity: 0 }}
                             animate={{ height: "auto", opacity: 1 }}
                             exit={{ height: 0, opacity: 0 }}
                             transition={{ duration: 0.3 }}
                          >
                             <div className="px-6 pb-8 pt-2 pl-20">
                                <ul className="space-y-3">
                                   {module.topics.map(topic => (
                                      <li key={topic.id} className="flex items-start gap-3 text-slate-600 font-medium text-sm">
                                         <CheckCircle size={16} className="text-green-500 mt-0.5 shrink-0" />
                                         {topic.title}
                                      </li>
                                   ))}
                                </ul>
                             </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </motion.div>
                  ))}
               </div>
            </section>

            {/* FAQs */}
            <section>
               <h3 className="text-2xl font-black mb-8 flex items-center gap-3">
                  <span className="bg-orange-100 text-orange-600 p-2 rounded-lg"><HelpCircle size={24}/></span>
                  Common Questions
               </h3>
               <div className="grid gap-4">
                  {course.faqs && course.faqs.sort((a,b) => a.order - b.order).map((faq, i) => (
                     <div key={faq.id} className="bg-white rounded-2xl border border-slate-100 p-6">
                        <button 
                          onClick={() => setActiveFaq(activeFaq === i ? null : i)}
                          className="flex justify-between w-full text-left font-bold text-slate-800"
                        >
                           {faq.question}
                           <ChevronDown className={`shrink-0 transition-transform ${activeFaq === i ? 'rotate-180 text-blue-600' : ''}`} />
                        </button>
                        <AnimatePresence>
                           {activeFaq === i && (
                              <motion.p 
                                initial={{ height: 0, opacity: 0, marginTop: 0 }}
                                animate={{ height: "auto", opacity: 1, marginTop: 16 }}
                                exit={{ height: 0, opacity: 0, marginTop: 0 }}
                                className="text-slate-500 leading-relaxed text-sm"
                              >
                                 {faq.answer}
                              </motion.p>
                           )}
                        </AnimatePresence>
                     </div>
                  ))}
               </div>
            </section>
         </div>

         {/* --- RIGHT SIDEBAR --- */}
         <div className="lg:col-span-4">
            <div className="sticky top-24 space-y-8" id="inquire">
               
                {/* Enquiry Card */}
                <div className="bg-white p-8 rounded-[2.5rem] shadow-2xl shadow-blue-900/10 border border-slate-100 relative overflow-hidden">
                   <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-blue-500 to-indigo-500"></div>
                   
                   <div className="mb-8">
                      <p className="text-slate-500 font-bold uppercase tracking-widest text-xs mb-2">Total Course Fee</p>
                      <div className="flex items-end gap-3">
                         <span className="text-5xl font-black text-slate-900">₹{discountedPrice}</span>
                         <span className="text-slate-400 line-through text-xl font-bold mb-1">₹{course.price}</span>
                      </div>
                      <span className="inline-block mt-3 bg-green-100 text-green-700 text-xs font-black uppercase tracking-widest px-3 py-1 rounded-full">
                         {course.discount}% Discount
                      </span>
                   </div>

                   <form onSubmit={handleEnquirySubmit} className="space-y-4">
                      <div>
                         <label className="block text-xs font-bold uppercase tracking-widest text-slate-400 mb-2">Your Name</label>
                         <input 
                           type="text" 
                           name="name"
                           value={enquiryData.name}
                           onChange={handleEnquiryChange}
                           required
                           className="w-full bg-slate-50 border-none rounded-xl px-4 py-3 font-bold text-slate-900 focus:ring-2 focus:ring-blue-600 outline-none" 
                           placeholder="John Doe" 
                         />
                      </div>
                      <div>
                         <label className="block text-xs font-bold uppercase tracking-widest text-slate-400 mb-2">Phone Number</label>
                         <input 
                           type="tel" 
                           name="phone"
                           value={enquiryData.phone}
                           onChange={handleEnquiryChange}
                           required
                           className="w-full bg-slate-50 border-none rounded-xl px-4 py-3 font-bold text-slate-900 focus:ring-2 focus:ring-blue-600 outline-none" 
                           placeholder="+91 98765 43210" 
                         />
                      </div>
                      <div>
                         <label className="block text-xs font-bold uppercase tracking-widest text-slate-400 mb-2">Email Address</label>
                         <input 
                           type="email" 
                           name="email"
                           value={enquiryData.email}
                           onChange={handleEnquiryChange}
                           required
                           className="w-full bg-slate-50 border-none rounded-xl px-4 py-3 font-bold text-slate-900 focus:ring-2 focus:ring-blue-600 outline-none" 
                           placeholder="john@example.com" 
                         />
                      </div>
                      
                      <button 
                        type="submit"
                        disabled={enquiryStatus === 'loading'}
                        className="w-full bg-slate-900 text-white py-4 rounded-xl font-black uppercase tracking-widest text-sm hover:bg-blue-600 transition-colors shadow-lg shadow-slate-900/20 disabled:opacity-50"
                      >
                         {enquiryStatus === 'loading' ? 'Sending...' : 
                          enquiryStatus === 'success' ? 'Enquiry Sent!' : 
                          enquiryStatus === 'error' ? 'Error. Try Again.' : 'Enquire Now'}
                      </button>
                   </form>
                   <p className="text-center text-xs text-slate-400 mt-6 font-medium">
                      <ShieldCheck className="inline w-3 h-3 mr-1"/> We'll contact you shortly
                   </p>
                </div>

               {/* Career Paths */}
               <div className="bg-gradient-to-br from-indigo-600 to-blue-600 rounded-[2.5rem] p-8 text-white relative overflow-hidden">
                  <div className="absolute -right-10 -top-10 w-40 h-40 bg-white/10 rounded-full blur-3xl"></div>
                  <h4 className="text-xl font-black mb-6 flex items-center gap-2 relative z-10">
                     <Briefcase size={20}/> Career Paths
                  </h4>
                  <div className="flex flex-wrap gap-2 relative z-10">
                     {course.careers && course.careers.map((c) => (
                        <span key={c.id} className="bg-white/20 border border-white/10 px-3 py-1.5 rounded-lg text-xs font-bold hover:bg-white hover:text-blue-600 transition-all cursor-default">
                           {c.role}
                        </span>
                     ))}
                  </div>
                  <div className="mt-8 pt-6 border-t border-white/10">
                    <p className="text-blue-200 text-sm font-medium italic">"This course opens doors to 15+ job roles in the industry."</p>
                  </div>
               </div>

               {/* Ideal For */}
               <div className="bg-white p-8 rounded-[2.5rem] border border-slate-100">
                  <h4 className="text-xl font-black mb-6 text-slate-900 flex items-center gap-2">
                     <Target className="text-blue-600" size={20}/> Ideal For
                  </h4>
                  <ul className="space-y-4">
                     {course.ideal_for && course.ideal_for.map(item => (
                        <li key={item.id} className="flex items-center gap-3 text-sm font-bold text-slate-600">
                           <span className="w-6 h-6 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center shrink-0">
                              <CheckCircle size={14}/>
                           </span>
                           {item.text}
                        </li>
                     ))}
                  </ul>
               </div>

            </div>
         </div>

      </div>
    </div>
  );
};

export default CourseDetailPage;