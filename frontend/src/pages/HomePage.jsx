import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  Play, Users, Award, BookOpen, Clock, ChevronRight, Star, ArrowRight,
  MapPin, Phone, Mail, CheckCircle2, Send, Loader2
} from "lucide-react";

// Animation Variants
const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
};

const ContactForm = () => {
    const [formData, setFormData] = useState({
        name: "", phone: "", email: "", subject: "", message: ""
    });
    const [status, setStatus] = useState("idle"); // idle, loading, success, error

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus("loading");
        try {
            const response = await fetch("http://localhost:8000/api/contact/", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData),
            });
            if (response.ok) {
                setStatus("success");
                setFormData({ name: "", phone: "", email: "", subject: "", message: "" });
                setTimeout(() => setStatus("idle"), 3000);
            } else {
                setStatus("error");
            }
        } catch (error) {
            setStatus("error");
        }
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
            <div className="grid grid-cols-2 gap-6">
                <input 
                    type="text" name="name" placeholder="Name" value={formData.name} onChange={handleChange} required
                    className="bg-white/10 border border-white/20 placeholder:text-blue-200 text-white rounded-2xl p-5 text-sm font-bold w-full focus:outline-none focus:bg-white/20 transition-all" 
                />
                <input 
                    type="text" name="phone" placeholder="Phone" value={formData.phone} onChange={handleChange} required
                    className="bg-white/10 border border-white/20 placeholder:text-blue-200 text-white rounded-2xl p-5 text-sm font-bold w-full focus:outline-none focus:bg-white/20 transition-all" 
                />
            </div>
            <input 
                type="email" name="email" placeholder="Email Address" value={formData.email} onChange={handleChange} required
                className="bg-white/10 border border-white/20 placeholder:text-blue-200 text-white rounded-2xl p-5 text-sm font-bold w-full focus:outline-none focus:bg-white/20 transition-all" 
            />
             <input 
                type="text" name="subject" placeholder="Subject" value={formData.subject} onChange={handleChange} required
                className="bg-white/10 border border-white/20 placeholder:text-blue-200 text-white rounded-2xl p-5 text-sm font-bold w-full focus:outline-none focus:bg-white/20 transition-all" 
            />
            <textarea 
                name="message" placeholder="Message" rows="4" value={formData.message} onChange={handleChange} required
                className="bg-white/10 border border-white/20 placeholder:text-blue-200 text-white rounded-2xl p-5 text-sm font-bold w-full focus:outline-none focus:bg-white/20 transition-all"
            ></textarea>
            
            <button 
                type="submit" 
                disabled={status === "loading"}
                className="w-full bg-white text-blue-600 font-black py-5 rounded-[1.25rem] shadow-xl uppercase tracking-widest text-xs flex items-center justify-center gap-3 hover:bg-blue-50 transition-colors disabled:opacity-70 disabled:cursor-not-allowed"
            >
                {status === "loading" ? <Loader2 size={16} className="animate-spin" /> : 
                 status === "success" ? <>Message Sent! <CheckCircle2 size={16}/></> : 
                 status === "error" ? "Error! Try Again" : 
                 <>Send Message <Send size={16} /></>}
            </button>
        </form>
    );
};

const FullHomePage = () => {
  const [courses, setCourses] = useState([]);
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);
  const BASE_URL = "http://localhost:8000";

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [courseRes, reviewRes] = await Promise.all([
          fetch(`${BASE_URL}/api/courses/`),
          fetch(`${BASE_URL}/api/reviews/`)
        ]);
        
        const courseData = await courseRes.json();
        const reviewData = await reviewRes.json();
        
        setCourses(Array.isArray(courseData) ? courseData : []);
        setReviews(Array.isArray(reviewData) ? reviewData : []);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  const getImageUrl = (course) => {
    const imagePath = course.images?.[0]?.image;
    if (!imagePath) return "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800";
    if (imagePath.startsWith("http")) return imagePath;
    const cleanPath = imagePath.startsWith("/") ? imagePath : `/${imagePath}`;
    return `${BASE_URL}${cleanPath}`;
  };

  if (loading)
    return (
      <div className="h-screen flex items-center justify-center bg-slate-50">
        <Loader2 className="animate-spin text-blue-600" size={40} />
      </div>
    );

  return (
    <div className="bg-slate-50 text-slate-900 font-sans selection:bg-blue-200 selection:text-blue-900 overflow-x-hidden">
      
      {/* --- HERO SECTION --- */}
      <section className="relative pt-20 pb-32 overflow-hidden">
        {/* Abstract Background Elements */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
          <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-blue-100 rounded-full blur-3xl opacity-50 mix-blend-multiply animate-pulse" />
          <div className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] bg-purple-100 rounded-full blur-3xl opacity-50 mix-blend-multiply animate-pulse" style={{ animationDelay: '2s' }} />
        </div>

        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
          <motion.div 
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
          >
            <motion.div variants={fadeInUp} className="inline-flex items-center gap-2 bg-white border border-blue-100 px-4 py-2 rounded-full shadow-sm mb-8">
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
              </span>
              <span className="text-xs font-black uppercase tracking-widest text-slate-500">New Batches Starting Soon</span>
            </motion.div>
            
            <motion.h1 variants={fadeInUp} className="text-6xl lg:text-7xl font-black leading-[1.1] mb-8 tracking-tighter text-slate-900">
              Master the <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Future of IT</span>
            </motion.h1>
            
            <motion.p variants={fadeInUp} className="text-slate-500 text-lg mb-10 max-w-lg font-medium leading-relaxed">
              Join 1200+ successful students mastering modern technology with CSC Institute. Practical learning, industry experts, and real-world projects.
            </motion.p>
            
            <motion.div variants={fadeInUp} className="flex flex-wrap gap-4 mb-12">
              <Link to="/courses">
                <button className="bg-blue-600 text-white px-8 py-4 rounded-xl font-bold shadow-xl shadow-blue-200 hover:bg-blue-700 hover:scale-105 transition-all flex items-center gap-2 group">
                  Join Course <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </button>
              </Link>
              <Link to="/about">
                <button className="bg-white border text-slate-600 px-8 py-4 rounded-xl font-bold hover:bg-slate-50 hover:border-slate-200 transition-all flex items-center gap-2">
                  <Play size={18} className="fill-slate-600" /> Introduction
                </button>
              </Link>
            </motion.div>

            <motion.div variants={fadeInUp} className="flex items-center gap-4">
              <div className="flex -space-x-4">
                {[1,2,3,4].map(i => (
                  <img key={i} src={`https://i.pravatar.cc/100?u=${i+20}`} className="w-12 h-12 rounded-full border-4 border-white shadow-md relative z-0 hover:z-10 transition-all hover:scale-110" alt="Student"/>
                ))}
              </div>
              <div className="flex flex-col">
                <div className="flex text-yellow-500 mb-1">
                  {[...Array(5)].map((_, i) => <Star key={i} size={14} fill="currentColor" />)}
                </div>
                <p className="text-xs font-black text-slate-400 uppercase tracking-widest">Trusted by 1200+ Students</p>
              </div>
            </motion.div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.8, rotate: 5 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="rounded-[3rem] overflow-hidden shadow-2xl relative z-10 group cursor-pointer border-4 border-white">
              <img src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800" className="w-full h-[600px] object-cover transition-transform duration-700 group-hover:scale-110" alt="Hero"/>
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent flex items-end p-10">
                <div className="text-white">
                  <p className="font-bold text-lg mb-2">Learn from the Best</p>
                  <p className="text-sm text-slate-200">Industry standard curriculum and labs.</p>
                </div>
              </div>
            </div>
            
            {/* Floating Elements */}
            <motion.div 
              animate={{ y: [0, -20, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-10 -left-10 bg-white p-6 rounded-3xl shadow-xl z-20 max-w-[200px]"
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center text-green-600">
                  <CheckCircle2 size={20} />
                </div>
                <p className="font-black text-xs uppercase tracking-widest text-slate-400">Success</p>
              </div>
              <p className="font-bold text-slate-800 text-sm">95% Placement Rate in 2024</p>
            </motion.div>

            <motion.div 
              animate={{ y: [0, 20, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute bottom-20 -right-10 bg-white/90 backdrop-blur-xl p-5 rounded-[2rem] flex items-center gap-4 shadow-2xl border border-white z-20"
            >
              <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center text-white shadow-lg shadow-blue-600/30">
                <Award size={24}/>
              </div>
              <div>
                <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Certified</p>
                <p className="text-sm font-bold text-slate-900">Govt. Approved</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* --- FEATURES SECTION --- */}
      <section className="py-20">
         <div className="max-w-7xl mx-auto px-6">
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
              className="grid grid-cols-2 md:grid-cols-4 gap-6"
            >
              {[
                { icon: <Users size={24} />, label: "100% Practical", color: "text-blue-600", bg: "bg-blue-50" },
                { icon: <Award size={24} />, label: "Certified Trainers", color: "text-orange-600", bg: "bg-orange-50" },
                { icon: <BookOpen size={24} />, label: "Affordable Fees", color: "text-green-600", bg: "bg-green-50" },
                { icon: <Clock size={24} />, label: "Placement Support", color: "text-purple-600", bg: "bg-purple-50" },
              ].map((item, i) => (
                <motion.div
                  variants={fadeInUp}
                  key={i}
                  whileHover={{ y: -5 }}
                  className="bg-white p-8 rounded-[2.5rem] border border-slate-100 shadow-sm hover:shadow-xl transition-all text-center group cursor-pointer"
                >
                  <div className={`${item.color} ${item.bg} w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform`}>
                    {item.icon}
                  </div>
                  <h3 className="font-black text-slate-800 text-sm tracking-tight">{item.label}</h3>
                </motion.div>
              ))}
            </motion.div>
         </div>
      </section>

      {/* --- COURSES SECTION --- */}
      <section className="py-32 bg-white rounded-t-[4rem] relative z-10 border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex justify-between items-end mb-16">
            <div>
              <span className="text-blue-600 font-black text-[10px] tracking-[0.2em] uppercase">Start Learning</span>
              <h2 className="text-4xl lg:text-5xl font-black mt-4 tracking-tighter text-slate-900">Popular Courses</h2>
            </div>
            <Link to="/courses" className="text-blue-600 font-bold text-sm flex items-center gap-2 hover:gap-4 transition-all">
              View All Courses <ArrowRight size={16} />
            </Link>
          </div>

          <div className="grid md:grid-cols-3 gap-10">
            {courses.slice(0, 3).map((course, i) => (
              <motion.div
                key={course.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -10 }}
                className="bg-white rounded-[2.5rem] p-4 border border-slate-100 shadow-xl shadow-slate-200/50 flex flex-col group"
              >
                <div className="h-64 relative rounded-[2rem] overflow-hidden mb-6">
                  <img src={getImageUrl(course)} alt={course.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" onError={(e) => { e.target.src = "https://via.placeholder.com/500"; }} />
                  <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md px-3 py-1.5 rounded-lg text-[10px] font-black uppercase tracking-widest shadow-sm flex items-center gap-1">
                    <Clock size={12} className="text-blue-600" /> {course.duration}
                  </div>
                </div>

                <div className="px-4 pb-4 flex flex-col flex-grow">
                  <h3 className="text-xl font-black mb-3 tracking-tight text-slate-900 group-hover:text-blue-600 transition-colors">
                    {course.title}
                  </h3>
                  <p className="text-slate-500 text-sm leading-relaxed mb-6 line-clamp-2">
                    {course.short_description}
                  </p>
                  <div className="mt-auto pt-6 border-t border-slate-100 flex justify-between items-center">
                    <div>
                        <span className="text-[10px] font-black uppercase text-slate-400 tracking-widest block mb-1">Instructor</span>
                        <div className="flex items-center gap-2">
                            <div className="w-6 h-6 rounded-full bg-slate-200"></div>
                            <span className="text-xs font-bold text-slate-700">Expert</span>
                        </div>
                    </div>
                    <Link to={`/courses/${course.slug}`} className="w-12 h-12 bg-slate-900 text-white rounded-2xl flex items-center justify-center hover:bg-blue-600 transition-all shadow-lg hover:shadow-blue-500/30 group-hover:rotate-[-45deg]">
                      <ChevronRight size={20} />
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* --- GALLERY SECTION (MASONRY-ISH) --- */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-20">
                <span className="text-blue-600 font-black text-[10px] tracking-[0.2em] uppercase">Life at Campus</span>
                <h2 className="text-4xl font-black mt-4 tracking-tighter">Our Gallery</h2>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 grid-rows-2 gap-4 h-[600px]">
                <div className="col-span-2 row-span-2 rounded-[2.5rem] overflow-hidden relative group shadow-lg">
                    <img src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" alt=""/>
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors" />
                </div>
                <div className="col-span-1 row-span-1 rounded-[2.5rem] overflow-hidden relative group shadow-lg">
                     <img src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" alt=""/>
                </div>
                <div className="col-span-1 row-span-2 rounded-[2.5rem] overflow-hidden relative group shadow-lg">
                     <img src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=600" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" alt=""/>
                </div>
                <div className="col-span-1 row-span-1 rounded-[2.5rem] overflow-hidden relative group shadow-lg">
                     <img src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=600" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" alt=""/>
                </div>
            </div>
        </div>
      </section>

      {/* --- REVIEWS SECTION --- */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
           <div className="text-center mb-16">
            <span className="text-blue-600 font-black text-[10px] tracking-[0.2em] uppercase">Testimonials</span>
            <h2 className="text-4xl font-black mt-4 tracking-tighter">Student Success Stories</h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {reviews.map((review, i) => (
              <motion.div
                key={review.id}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-slate-50 p-8 rounded-[2rem] border border-slate-100 relative group hover:bg-blue-600 hover:text-white transition-colors duration-300"
              >
                {/* Quote Icon */}
                <div className="absolute top-8 right-8 text-slate-200 group-hover:text-blue-500 transition-colors">
                  <svg width="40" height="40" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M14.017 21L14.017 18C14.017 16.8954 14.9124 16 16.017 16H19.017C19.5693 16 20.017 15.5523 20.017 15V9C20.017 8.44772 19.5693 8 19.017 8H15.017C14.4647 8 14.017 8.44772 14.017 9V11C14.017 11.5523 13.5693 12 13.017 12H12.017V5H22.017V15C22.017 18.3137 19.3307 21 16.017 21H14.017ZM5.0166 21L5.0166 18C5.0166 16.8954 5.91203 16 7.0166 16H10.0166C10.5689 16 11.0166 15.5523 11.0166 15V9C11.0166 8.44772 10.5689 8 10.0166 8H6.0166C5.46432 8 5.0166 8.44772 5.0166 9V11C5.0166 11.5523 4.56889 12 4.0166 12H3.0166V5H13.0166V15C13.0166 18.3137 10.3303 21 7.0166 21H5.0166Z" />
                  </svg>
                </div>

                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded-full overflow-hidden bg-slate-200 border-2 border-white shadow-sm">
                    {review.image ? (
                        <img src={review.image} alt={review.name} className="w-full h-full object-cover" />
                    ) : (
                        <div className="w-full h-full bg-slate-300 flex items-center justify-center text-slate-500 font-bold text-lg">
                            {review.name.charAt(0)}
                        </div>
                    )}
                  </div>
                  <div>
                    <h4 className="font-bold text-sm tracking-tight">{review.name}</h4>
                    <p className="text-[10px] uppercase font-black text-slate-400 group-hover:text-blue-200 tracking-widest">{review.role}</p>
                  </div>
                </div>

                <p className="text-slate-600 text-sm italic mb-6 leading-relaxed group-hover:text-blue-50 relative z-10">
                  "{review.review}"
                </p>

                {review.tag_text && (
                    <div className="inline-block bg-white px-3 py-1 rounded-lg shadow-sm group-hover:bg-blue-500">
                        <span className="text-[10px] font-black uppercase tracking-widest text-blue-600 group-hover:text-white">
                            #{review.tag_text}
                        </span>
                    </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* --- CONTACT SECTION --- */}
      <section className="py-32 bg-white relative">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-20">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="bg-blue-600 p-12 rounded-[3.5rem] shadow-2xl relative overflow-hidden text-white"
          >
            {/* Shapes */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
            
            <h2 className="text-4xl font-black mb-8 tracking-tighter relative z-10">Get In Touch</h2>
            <ContactForm />
          </motion.div>

          <div className="flex flex-col justify-center space-y-10">
             <div>
                <span className="text-blue-600 font-black text-[10px] tracking-[0.2em] uppercase">Contact Us</span>
                <h2 className="text-4xl font-black mt-4 tracking-tighter text-slate-900">We're here to help you.</h2>
                <p className="text-slate-500 mt-6 leading-relaxed">Have questions about our courses or need career guidance? Reach out to our expert team.</p>
             </div>
             <div className="space-y-6">
              {[
                { icon: <MapPin />, label: "Visit Us", text: "36, 2nd St, Kumarappa Nagar, Katpadi, Vellore" },
                { icon: <Phone />, label: "Call Us", text: "+91 94446 59702" },
                { icon: <Mail />, label: "Email Us", text: "kctce2007@gmail.com" },
              ].map((info, i) => (
                <div key={i} className="flex items-center gap-6 p-6 bg-slate-50 rounded-[2rem] border border-slate-100 hover:bg-white hover:shadow-lg transition-all cursor-default">
                  <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center text-blue-600 shadow-sm">{info.icon}</div>
                  <div>
                    <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">{info.label}</p>
                    <p className="font-bold text-slate-800">{info.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default FullHomePage;
