import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  MapPin, Phone, Mail, Send, 
  ChevronDown, Map as MapIcon,
  Facebook, Twitter, Linkedin, ArrowRight, Loader2, CheckCircle2
} from 'lucide-react';

const EnquiryPage = () => {
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const [formData, setFormData] = useState({
      name: "", phone: "", email: "", course: "Select a course", message: ""
  });
  const [status, setStatus] = useState("idle");

  const handleChange = (e) => {
      setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
      e.preventDefault();
      setStatus("loading");
      // Map 'course' to 'subject' for the API compatibility
      const apiData = {
          name: formData.name,
          phone: formData.phone,
          email: formData.email,
          subject: `Enquiry for ${formData.course}`,
          message: formData.message
      };

      try {
          const response = await fetch("http://localhost:8000/api/contact/", {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify(apiData),
          });
          if (response.ok) {
              setStatus("success");
              setFormData({ name: "", phone: "", email: "", course: "Select a course", message: "" });
              setTimeout(() => setStatus("idle"), 3000);
          } else {
              setStatus("error");
          }
      } catch (error) {
          setStatus("error");
      }
  };

  return (
    <div className="bg-[#f8fafc] text-slate-900 font-sans selection:bg-blue-100 min-h-screen">
      
        

      {/* --- 2. HERO HEADER --- */}
      <header className="pt-20 pb-12 max-w-7xl mx-auto px-6">
        <motion.div initial="hidden" animate="visible" variants={fadeInUp}>
          <h1 className="text-6xl font-black tracking-tighter mb-6">Get in Touch</h1>
          <p className="text-gray-500 text-xl font-medium max-w-2xl leading-relaxed">
            Have questions about our IT courses or admissions? We're here to 
            guide you on your tech journey.
          </p>
        </motion.div>
      </header>

      {/* --- 3. MAIN CONTENT GRID --- */}
      <main className="max-w-7xl mx-auto px-6 pb-24">
        <div className="grid lg:grid-cols-12 gap-10 items-start">
          
          {/* LEFT SIDE: CONTACT INFO & MAP */}
          <div className="lg:col-span-5 space-y-8">
            
            {/* Contact Information Card */}
            <motion.div 
              initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}
              className="bg-white p-10 rounded-[2.5rem] border border-slate-100 shadow-sm space-y-10"
            >
              <h3 className="text-xl font-black tracking-tight text-slate-800">Contact Information</h3>
              
              <div className="space-y-8">
                {/* Location */}
                <div className="flex items-start gap-5 group">
                  <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center shrink-0 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <p className="font-black text-sm mb-1 uppercase tracking-widest text-slate-400">Headquarters</p>
                    <p className="text-slate-700 font-bold leading-relaxed">36, 2nd Street, Kumarappa Nagar, Katpadi, Vellore - 632007</p>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start gap-5 group">
                  <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center shrink-0 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
                    <Phone size={20} />
                  </div>
                  <div>
                    <p className="font-black text-sm mb-1 uppercase tracking-widest text-slate-400">Phone</p>
                    <p className="text-slate-700 font-bold">+91 94446 59702</p>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-5 group">
                  <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center shrink-0 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
                    <Mail size={20} />
                  </div>
                  <div>
                    <p className="font-black text-sm mb-1 uppercase tracking-widest text-slate-400">Email</p>
                    <p className="text-slate-700 font-bold">kctce2007@gmail.com</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Map Card */}
            <motion.div 
              initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}
              className="relative h-[320px] rounded-[2.5rem] overflow-hidden group shadow-md border border-slate-200"
            >
              <img 
                src="https://images.unsplash.com/photo-1524661135-423995f22d0b?w=800" 
                alt="Location Map" 
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 ease-in-out scale-110 group-hover:scale-100" 
              />
              <div className="absolute inset-0 bg-blue-900/10 group-hover:bg-transparent transition-colors duration-500"></div>
              
              <button 
                onClick={() => window.open("https://maps.google.com/?q=36,+2nd+Street,+Kumarappa+Nagar,+Katpadi,+Vellore", "_blank")}
                className="absolute bottom-6 left-6 bg-white/95 backdrop-blur-md px-6 py-3 rounded-2xl font-black text-[10px] uppercase tracking-[0.2em] flex items-center gap-3 shadow-2xl hover:bg-blue-600 hover:text-white transition-all active:scale-95 border border-slate-100"
              >
                <MapIcon size={14} /> Open in Google Maps
              </button>
            </motion.div>
          </div>

          {/* RIGHT SIDE: ENQUIRY FORM */}
          <motion.div 
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}
            className="lg:col-span-7 bg-white p-10 lg:p-14 rounded-[3.5rem] border border-slate-100 shadow-xl shadow-slate-200/50"
          >
            <div className="mb-12">
              <h3 className="text-3xl font-black tracking-tight mb-3">Send us a Message</h3>
              <p className="text-gray-400 text-base font-medium">Fill out the form below and our team will get back to you within 24 hours.</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-8">
              {/* Row 1: Name & Email */}
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 ml-1">Full Name</label>
                  <input type="text" name="name" value={formData.name} onChange={handleChange} required placeholder="Jane Doe" className="w-full bg-slate-50 border-2 border-transparent rounded-2xl py-4 px-6 text-sm font-bold focus:bg-white focus:border-blue-100 focus:ring-4 focus:ring-blue-50 transition-all outline-none" />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 ml-1">Email Address</label>
                  <input type="email" name="email" value={formData.email} onChange={handleChange} required placeholder="jane@example.com" className="w-full bg-slate-50 border-2 border-transparent rounded-2xl py-4 px-6 text-sm font-bold focus:bg-white focus:border-blue-100 focus:ring-4 focus:ring-blue-50 transition-all outline-none" />
                </div>
              </div>

              {/* Row 2: Phone & Course Selection */}
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 ml-1">Phone Number</label>
                  <input type="text" name="phone" value={formData.phone} onChange={handleChange} required placeholder="+91 94446 59702" className="w-full bg-slate-50 border-2 border-transparent rounded-2xl py-4 px-6 text-sm font-bold focus:bg-white focus:border-blue-100 focus:ring-4 focus:ring-blue-50 transition-all outline-none" />
                </div>
                <div className="space-y-2 relative">
                  <label className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 ml-1">Interested Course</label>
                  <div className="relative">
                    <select name="course" value={formData.course} onChange={handleChange} className="w-full bg-slate-50 border-2 border-transparent rounded-2xl py-4 px-6 text-sm font-bold focus:bg-white focus:border-blue-100 focus:ring-4 focus:ring-blue-50 transition-all outline-none appearance-none cursor-pointer">
                      <option>Select a course</option>
                      <option>Full Stack Web Development</option>
                      <option>Data Science & AI</option>
                      <option>Tally Prime</option>
                      <option>DCA / HDCA</option>
                    </select>
                    <ChevronDown className="absolute right-6 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" size={18} />
                  </div>
                </div>
              </div>

              {/* Row 3: Message */}
              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 ml-1">Message</label>
                <textarea name="message" value={formData.message} onChange={handleChange} required rows="5" placeholder="Tell us about your learning goals..." className="w-full bg-slate-50 border-2 border-transparent rounded-3xl py-4 px-6 text-sm font-bold focus:bg-white focus:border-blue-100 focus:ring-4 focus:ring-blue-50 transition-all outline-none resize-none"></textarea>
              </div>

              {/* Submit Button */}
              <button 
                type="submit" 
                disabled={status === "loading"}
                className="w-full bg-blue-600 text-white font-black py-5 rounded-2xl shadow-xl shadow-blue-200 hover:bg-blue-700 hover:shadow-2xl hover:shadow-blue-300 transition-all flex items-center justify-center gap-3 text-sm uppercase tracking-[0.2em] group relative overflow-hidden disabled:opacity-70 disabled:cursor-not-allowed"
              >
                  {status === "loading" ? <Loader2 size={18} className="animate-spin" /> : 
                   status === "success" ? <>Message Sent! <CheckCircle2 size={18}/></> : 
                   status === "error" ? "Error! Try Again" : 
                   <>Send Message <Send size={18} className="relative z-10 group-hover:translate-x-2 group-hover:-translate-y-2 transition-transform duration-300" /></>}
              </button>
            </form>
          </motion.div>
        </div>
      </main>

      
    </div>
  );
};

export default EnquiryPage;