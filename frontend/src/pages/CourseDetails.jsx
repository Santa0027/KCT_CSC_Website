import React, { useState } from 'react';
import { 
  CheckCircle, Clock, Globe, Star, ChevronDown, Play, 
  MessageCircle, Facebook, Twitter, Linkedin, Mail, Search,
  Award, BookOpen, Users, BarChart, ShieldCheck, HelpCircle
} from 'lucide-react';

const CourseLandingPage = () => {
  const [openCurriculum, setOpenCurriculum] = useState(0);
  const [openFaq, setOpenFaq] = useState(null);

  return (
    <div className="bg-white min-h-screen font-sans text-slate-900 selection:bg-blue-100">
     

      <main className="max-w-7xl mx-auto px-6 pt-12">
        <div className="flex flex-col lg:flex-row gap-12">
          
          {/* --- LEFT COLUMN: SCROLLABLE CONTENT --- */}
          <div className="lg:w-2/3 space-y-16 pb-32">
            
            {/* Hero Text */}
            <section>
              <nav className="text-sm font-medium text-gray-400 mb-6 flex items-center gap-2">
                Home <span className="text-gray-300">/</span> Courses <span className="text-gray-300">/</span> <span className="text-blue-600 font-bold">Development</span>
              </nav>
              <div className="flex flex-wrap gap-3 mb-6">
                <span className="bg-blue-50 text-blue-700 text-[10px] font-black px-3 py-1 rounded-md tracking-widest uppercase">Best Seller</span>
                <span className="bg-orange-50 text-orange-600 text-[10px] font-black px-3 py-1 rounded-md tracking-widest uppercase">Trending</span>
                <div className="flex items-center text-xs font-bold gap-1 ml-2 text-slate-700">
                  <Star size={14} className="fill-yellow-400 text-yellow-400"/> 4.8 <span className="text-gray-400 font-medium">(3,250 reviews)</span>
                </div>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-slate-900 mb-6 leading-[1.1]">
                Full Stack Web Development <br /> Bootcamp 2024
              </h1>
              <p className="text-gray-500 text-lg md:text-xl max-w-2xl mb-10 leading-relaxed">
                Become a full-stack developer with just one course. HTML, CSS, Javascript, Node, React, MongoDB and more. Build real-world projects and get hired.
              </p>
              <div className="flex flex-wrap gap-8 py-6 border-y border-gray-100">
                <div className="flex items-center gap-3 text-sm font-bold text-slate-700"><Clock size={20} className="text-blue-600"/> 60+ Hours</div>
                <div className="flex items-center gap-3 text-sm font-bold text-slate-700"><BarChart size={20} className="text-blue-600"/> All Levels</div>
                <div className="flex items-center gap-3 text-sm font-bold text-slate-700"><Globe size={20} className="text-blue-600"/> English, Hindi</div>
              </div>
            </section>

            {/* Course Overview */}
            <section>
              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center"><BookOpen size={24}/></div>
                <h2 className="text-3xl font-black text-slate-900">Course Overview</h2>
              </div>
              <p className="text-gray-500 text-lg leading-[1.8] mb-8">
                Welcome to this comprehensive Full Stack Web Development bootcamp. We start from scratch and build up to advanced concepts like microservices and cloud deployment.
              </p>
              <div className="bg-slate-50 p-10 rounded-[2.5rem] border border-slate-100 shadow-sm">
                <h3 className="text-xl font-bold mb-8 flex items-center gap-3">
                  <div className="w-2 h-6 bg-blue-500 rounded-full"></div> What You'll Learn
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-y-6 gap-x-12">
                  {["Master React & Next.js 14", "Node.js & Express", "Database with MongoDB", "Modern UI with Tailwind", "State Management", "CI/CD & Deployment"].map((item, i) => (
                    <div key={i} className="flex items-start gap-4 text-sm font-bold text-slate-600">
                      <CheckCircle size={20} className="text-green-500 shrink-0" /> {item}
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* Curriculum Breakdown */}
            <section>
              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center"><BarChart size={24}/></div>
                <h2 className="text-3xl font-black text-slate-900">Curriculum Breakdown</h2>
              </div>
              <div className="space-y-4">
                {[
                  { title: 'The Frontend Foundation', lessons: '12 lessons • 8 hours', status: 'Updated' },
                  { title: 'JavaScript Mastery', lessons: '18 lessons • 15 hours', status: 'Popular' },
                  { title: 'React & Next.js', lessons: '22 lessons • 20 hours', status: 'New' }
                ].map((section, idx) => (
                  <div key={idx} className="border-2 border-slate-50 rounded-[1.5rem] overflow-hidden transition-all hover:border-blue-100">
                    <button 
                      onClick={() => setOpenCurriculum(openCurriculum === idx ? -1 : idx)}
                      className="w-full flex items-center justify-between p-8 bg-white"
                    >
                      <div className="flex items-center gap-6">
                        <div className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center text-slate-400 font-bold">{idx + 1}</div>
                        <div className="text-left">
                          <h4 className="font-bold text-slate-800 text-lg">{section.title}</h4>
                          <p className="text-xs text-gray-400 font-bold uppercase mt-1">{section.lessons}</p>
                        </div>
                      </div>
                      <ChevronDown className={`transition-transform ${openCurriculum === idx ? 'rotate-180 text-blue-600' : ''}`} />
                    </button>
                  </div>
                ))}
              </div>
            </section>

            {/* Instructor */}
            <section>
              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center"><Star size={24}/></div>
                <h2 className="text-3xl font-black text-slate-900">Your Instructor</h2>
              </div>
              <div className="bg-white border-2 border-slate-50 p-10 rounded-[2.5rem] flex flex-col md:flex-row gap-10 items-center md:items-start relative overflow-hidden">
                <img src="https://i.pravatar.cc/200?img=32" alt="Sarah" className="w-40 h-40 rounded-[2rem] object-cover shadow-2xl ring-8 ring-white" />
                <div className="flex-1">
                  <h3 className="text-3xl font-black mb-2 text-slate-900">Sarah Jenkins</h3>
                  <p className="text-blue-600 font-black text-xs mb-6 tracking-widest uppercase">Senior Software Engineer at TechCorp</p>
                  <p className="text-gray-500 leading-relaxed text-lg mb-8">Sarah is a self-taught engineer with over 10 years of industry experience. She has mentored over 50,000 students worldwide.</p>
                  <div className="flex gap-4">
                    {[Linkedin, Twitter, Facebook].map((Icon, i) => (
                      <button key={i} className="w-12 h-12 flex items-center justify-center bg-slate-50 rounded-2xl hover:bg-blue-600 hover:text-white transition-all"><Icon size={20}/></button>
                    ))}
                  </div>
                </div>
              </div>
            </section>

            {/* Career Paths */}
            <section>
              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center"><Award size={24}/></div>
                <h2 className="text-3xl font-black text-slate-900">Career Paths</h2>
              </div>
              <div className="flex flex-wrap gap-4">
                {['Frontend Dev', 'Backend Dev', 'Fullstack Dev', 'QA Engineer'].map((tag, i) => (
                  <span key={i} className="px-6 py-4 bg-slate-50 rounded-2xl font-bold text-slate-600 border border-slate-100">{tag}</span>
                ))}
              </div>
            </section>

            {/* Student Reviews */}
            <section>
              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center"><MessageCircle size={24}/></div>
                <h2 className="text-3xl font-black text-slate-900">Student Reviews</h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[1, 2].map((i) => (
                  <div key={i} className="p-8 border-2 border-slate-50 rounded-[2rem] space-y-4">
                    <div className="flex text-yellow-400 gap-1"><Star size={16} fill="currentColor"/><Star size={16} fill="currentColor"/><Star size={16} fill="currentColor"/><Star size={16} fill="currentColor"/><Star size={16} fill="currentColor"/></div>
                    <p className="text-slate-700 font-medium italic">"This course changed my life. I went from zero coding knowledge to landing a job in 6 months."</p>
                    <div className="flex items-center gap-4 pt-4 border-t border-slate-50">
                      <div className="w-10 h-10 rounded-full bg-blue-100"></div>
                      <div><p className="font-bold text-sm">John Doe</p><p className="text-xs text-gray-400">Software Engineer</p></div>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* FAQ */}
            <section>
              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center"><HelpCircle size={24}/></div>
                <h2 className="text-3xl font-black text-slate-900">Frequently Asked Questions</h2>
              </div>
              <div className="space-y-4">
                {['Do I need prior coding experience?', 'Will I receive a certificate?', 'Is there job placement support?'].map((q, i) => (
                  <div key={i} className="border-2 border-slate-50 rounded-2xl p-6">
                    <button 
                      onClick={() => setOpenFaq(openFaq === i ? null : i)}
                      className="w-full flex justify-between items-center text-left font-bold text-slate-700"
                    >
                      {q} <ChevronDown size={20} className={openFaq === i ? 'rotate-180' : ''}/>
                    </button>
                    {openFaq === i && <p className="mt-4 text-gray-500 text-sm">Yes! This course covers everything from the absolute basics to advanced topics.</p>}
                  </div>
                ))}
              </div>
            </section>
          </div>

          {/* --- RIGHT COLUMN: FLOATING SIDEBAR --- */}
          <div className="lg:w-1/3 relative">
            <div className="lg:sticky lg:top-28 z-50">
              <div className="bg-white rounded-[2.5rem] shadow-[0_32px_64px_-16px_rgba(0,0,0,0.12)] border border-gray-100 overflow-hidden">
                <div className="relative aspect-video group cursor-pointer overflow-hidden">
                  <img src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=600" alt="Preview" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                  <div className="absolute inset-0 bg-slate-900/40 flex items-center justify-center backdrop-blur-[2px]">
                    <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-2xl group-hover:scale-110 transition-all"><Play size={24} className="text-blue-600 fill-blue-600 ml-1" /></div>
                  </div>
                </div>
                <div className="p-8 md:p-10">
                  <div className="flex items-center gap-3 mb-8">
                    <span className="text-5xl font-black text-slate-900 tracking-tighter">$499</span>
                    <span className="text-gray-400 line-through text-xl font-semibold">$899</span>
                    <span className="text-green-600 font-bold bg-green-50 px-3 py-1 rounded-lg text-sm uppercase tracking-tighter">45% OFF</span>
                  </div>
                  <div className="space-y-4">
                    <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-black py-5 rounded-[1.25rem] shadow-xl shadow-blue-200 transition-all active:scale-[0.98] text-lg">Enroll Now</button>
                    <button className="w-full border-2 border-slate-100 text-slate-700 font-bold py-5 rounded-[1.25rem] hover:bg-slate-50 transition-all text-lg">Inquire About Course</button>
                  </div>
                  <div className="mt-10 space-y-5">
                    <h4 className="font-black text-[10px] uppercase tracking-[0.2em] text-gray-400">Course Features</h4>
                    {[ { icon: <Clock size={18}/>, text: 'Lifetime access to all materials' }, { icon: <CheckCircle size={18}/>, text: '25 coding exercises & projects' }, { icon: <Award size={18}/>, text: 'Verified certificate' }, { icon: <ShieldCheck size={18}/>, text: 'Job placement support' } ].map((item, i) => (
                      <div key={i} className="flex items-center gap-4 text-sm text-slate-600 font-semibold"><span className="text-blue-500">{item.icon}</span>{item.text}</div>
                    ))}
                  </div>
                  <div className="mt-10 p-6 bg-slate-50 rounded-[1.5rem] text-center border border-slate-100">
                    <p className="text-sm font-bold text-slate-800 tracking-tight">Have questions? Our experts are here.</p>
                    <button className="mt-2 text-blue-600 font-black text-xs uppercase tracking-widest hover:underline decoration-2 underline-offset-4">Contact Support</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* --- FOOTER --- */}
      <footer className="bg-slate-900 text-white mt-32 pt-24 pb-12">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-16 mb-20">
          <div>
            <div className="flex items-center gap-2 font-bold text-2xl text-blue-400 mb-8">
              <div className="w-10 h-10 bg-blue-500 rounded-xl flex items-center justify-center text-white text-sm">C</div> CSC Institute
            </div>
            <p className="text-gray-400 font-medium leading-relaxed">Empowering engineers with high-scale applications training.</p>
          </div>
          <div>
            <h5 className="font-black text-sm uppercase tracking-widest mb-8">Quick Links</h5>
            <ul className="space-y-4 text-gray-400 font-bold text-sm">
              <li><a href="#" className="hover:text-white transition-colors">All Courses</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Become Mentor</a></li>
            </ul>
          </div>
          <div>
            <h5 className="font-black text-sm uppercase tracking-widest mb-8">Newsletter</h5>
            <div className="relative group">
              <input type="text" placeholder="Email address" className="bg-slate-800/50 border border-slate-700 rounded-2xl px-6 py-4 text-sm w-full focus:outline-none focus:ring-2 focus:ring-blue-500" />
              <button className="absolute right-2 top-2 bottom-2 bg-blue-600 text-white px-4 rounded-xl hover:bg-blue-500 transition-colors"><Mail size={18}/></button>
            </div>
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-6 pt-12 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center text-xs font-black uppercase tracking-[0.2em] text-gray-500 gap-8">
          <p>© 2024 CSC Institute.</p>
          <div className="flex gap-10"><a href="#">Privacy</a><a href="#">Terms</a></div>
        </div>
      </footer>
    </div>
  );
};  

export default CourseLandingPage;