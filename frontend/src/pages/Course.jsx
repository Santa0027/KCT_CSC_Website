import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Search,
  Filter,
  Clock,
  BarChart,
  ChevronRight,
  Linkedin,
  Twitter,
  Facebook,
  Mail,
  ArrowRight,
  ShieldCheck,
  Zap,
  Award,
  Briefcase,
} from "lucide-react";
 import { Link } from "lucide-react";

const CourseCatalog = () => {
  const [activeFilter, setActiveFilter] = useState("All");

  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const courses = [
    {
      id: 1,
      title: "Full Stack Web Development",
      category: "Development",
      level: "Beginner",
      duration: "6 Months",
      img: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=600",
      badge: "Best Seller",
    },
    {
      id: 2,
      title: "Data Science & Python AI",
      category: "Data Science",
      level: "Intermediate",
      duration: "4 Months",
      img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600",
      badge: "Fast Track",
    },
    {
      id: 3,
      title: "Graphic & UI/UX Design",
      category: "Design",
      level: "Beginner",
      duration: "3 Months",
      img: "https://images.unsplash.com/photo-1586717791821-3f44a563eb4c?w=600",
      badge: "Design",
    },
    {
      id: 4,
      title: "Cyber Security Specialist",
      category: "Security",
      level: "Advanced",
      duration: "5 Months",
      img: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=600",
      badge: "Hardcore",
    },
    {
      id: 5,
      title: "Cloud Computing (AWS/Azure)",
      category: "Development",
      level: "Intermediate",
      duration: "4 Months",
      img: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=600",
      badge: "High Demand",
    },
    {
      id: 6,
      title: "Digital Marketing & SEO",
      category: "Marketing",
      level: "Beginner",
      duration: "3 Months",
      img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600",
      badge: "Marketing",
    },
  ];

  const categories = [
    "All",
    "Development",
    "Data Science",
    "Design",
    "Marketing",
  ];

  return (
    <div className="bg-white text-slate-900 font-sans selection:bg-blue-100 overflow-x-hidden">
      

      {/* --- 2. HERO HEADER --- */}
      <header className="relative py-20 bg-gradient-to-b from-blue-50/50 to-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
          <motion.div initial="hidden" animate="visible" variants={fadeInUp}>
            <span className="text-blue-600 font-black text-[10px] tracking-[0.3em] uppercase mb-4 block">
              New Batch Starting Soon
            </span>
            <h1 className="text-6xl lg:text-7xl font-black tracking-tighter leading-[1] mb-8">
              Find Your Perfect <br />{" "}
              <span className="text-blue-600">IT Course</span>
            </h1>
            <p className="text-gray-500 text-xl font-medium max-w-lg mb-10 leading-relaxed">
              Explore our comprehensive catalog of industry-standard technology
              courses. From coding to cloud computing, we have a path for you.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="relative"
          >
            <div className="bg-slate-900 rounded-[3rem] p-3 shadow-2xl overflow-hidden relative group">
              <img
                src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=800"
                alt="Tech Hero"
                className="rounded-[2.5rem] opacity-60 w-full object-cover h-[400px]"
              />
              <div className="absolute bottom-10 left-10 bg-white/90 backdrop-blur-md p-6 rounded-[2rem] shadow-2xl flex items-center gap-4">
                <div className="w-12 h-12 bg-blue-600 text-white rounded-2xl flex items-center justify-center shadow-lg">
                  <Zap fill="currentColor" />
                </div>
                <div>
                  <p className="text-xs font-black text-gray-400 uppercase tracking-widest">
                    Kickstart Your Career
                  </p>
                  <p className="font-bold text-slate-800">
                    Join 1500+ Successful Graduates
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </header>

      {/* --- 3. QUICK FEATURES --- */}
      <section className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { icon: <Zap size={18} />, label: "Practical Learning" },
            { icon: <ShieldCheck size={18} />, label: "Expert Mentors" },
            { icon: <Award size={18} />, label: "Certification" },
            { icon: <Briefcase size={18} />, label: "Job Support" },
          ].map((item, i) => (
            <div key={i} className="flex items-center gap-4 group">
              <div className="w-10 h-10 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition-all shadow-sm">
                {item.icon}
              </div>
              <span className="font-bold text-sm text-slate-700">
                {item.label}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* --- 4. COURSE CATALOG & FILTERS --- */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-8 mb-16">
            <div>
              <span className="text-blue-600 font-black text-[10px] tracking-[0.2em] uppercase">
                Course Catalog
              </span>
              <h2 className="text-4xl font-black mt-4 tracking-tighter">
                Available Programs
              </h2>
              <p className="text-gray-400 font-medium mt-2">
                Browse our curated list of professional courses designed to help
                you master in-demand skills.
              </p>
            </div>

            {/* Filter Pills */}
            <div className="flex flex-wrap gap-3">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveFilter(cat)}
                  className={`px-6 py-2.5 rounded-full text-xs font-black transition-all uppercase tracking-widest border-2 ${
                    activeFilter === cat
                      ? "bg-slate-900 border-slate-900 text-white"
                      : "bg-white border-slate-50 text-slate-400 hover:border-blue-100 hover:text-blue-600"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* Course Grid */}
          <div className="grid md:grid-cols-3 gap-10">
            {courses
              .filter(
                (c) => activeFilter === "All" || c.category === activeFilter
              )
              .map((course, i) => (
                <motion.div
                  key={course.id}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={fadeInUp}
                  whileHover={{ y: -10 }}
                  className="bg-white rounded-[2.5rem] border border-slate-50 overflow-hidden shadow-xl shadow-slate-200/40 group flex flex-col"
                >
                  <div className="h-52 relative overflow-hidden">
                    <img
                      src={course.img}
                      alt={course.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <span className="absolute top-5 left-5 bg-white/90 backdrop-blur-md px-4 py-1.5 rounded-xl text-[10px] font-black uppercase tracking-widest">
                      {course.badge}
                    </span>
                  </div>

                  <div className="p-8 flex-1 flex flex-col">
                    <h3 className="text-xl font-black mb-4 tracking-tight group-hover:text-blue-600 transition-colors">
                      {course.title}
                    </h3>
                    <div className="flex gap-4 mb-8">
                      <div className="flex items-center gap-1.5 text-xs font-bold text-gray-400">
                        <Clock size={14} /> {course.duration}
                      </div>
                      <div className="flex items-center gap-1.5 text-xs font-bold text-gray-400">
                        <BarChart size={14} /> {course.level}
                      </div>
                    </div>
                    <p className="text-gray-500 text-sm font-medium leading-relaxed mb-10 line-clamp-2 italic">
                      Master modern tools and industry workflows to build
                      responsive, professional-grade projects.
                    </p>

                    <div className="mt-auto pt-6 border-t border-slate-50 flex justify-between items-center">
                      {/* Import Link at the top of your file: import { Link } from 'react-router-dom'; */}

                      <Link
                        to={`/about`}
                        className="text-blue-600 font-black text-xs uppercase tracking-widest flex items-center gap-1 group-hover:gap-3 transition-all cursor-pointer"
                      >
                        View Details <ChevronRight size={16} />
                      </Link>
                      <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">
                        Next batch: Nov 25
                      </span>
                    </div>
                  </div>
                </motion.div>
              ))}
          </div>

          {/* No results placeholder */}
          {courses.filter(
            (c) => activeFilter === "All" || c.category === activeFilter
          ).length === 0 && (
            <div className="text-center py-20 bg-slate-50 rounded-[3rem] border border-dashed border-slate-200">
              <p className="font-bold text-slate-400">
                No courses found in this category. Check back soon!
              </p>
            </div>
          )}

          <div className="mt-20 text-center">
            <p className="text-sm font-bold text-gray-400 mb-6">
              Looking for a custom training program for your team?
            </p>
            <button className="border-2 border-slate-100 text-slate-800 font-black px-10 py-4 rounded-2xl hover:bg-slate-50 transition-all text-xs uppercase tracking-widest">
              Request Corporate Training
            </button>
          </div>
        </div>
      </section>

      {/* --- 5. FOOTER --- */}
      <footer className="bg-slate-900 text-white pt-24 pb-12">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-16 mb-20">
          <div className="col-span-1">
            <div className="flex items-center gap-2 font-black text-2xl text-blue-400 mb-8 tracking-tighter">
              <div className="w-10 h-10 bg-blue-500 rounded-xl flex items-center justify-center text-white text-sm">
                C
              </div>{" "}
              CSC Institute
            </div>
            <p className="text-gray-400 font-medium leading-relaxed">
              Empowering the next generation of tech leaders through
              industry-focused education.
            </p>
          </div>
          <div>
            <h5 className="font-black text-[10px] uppercase tracking-[0.2em] mb-8 text-gray-500">
              Quick Links
            </h5>
            <ul className="space-y-4 text-gray-400 font-bold text-sm">
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  All Courses
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Student Login
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h5 className="font-black text-[10px] uppercase tracking-[0.2em] mb-8 text-gray-500">
              Popular Programs
            </h5>
            <ul className="space-y-4 text-gray-400 font-bold text-sm">
              <li>Software Engineering</li>
              <li>Python Programming</li>
              <li>Data Science</li>
              <li>Digital Marketing</li>
            </ul>
          </div>
          <div>
            <h5 className="font-black text-[10px] uppercase tracking-[0.2em] mb-8 text-gray-500">
              Newsletter
            </h5>
            <p className="text-xs text-gray-500 mb-4">
              Get the latest course updates.
            </p>
            <div className="flex gap-2">
              <input
                type="text"
                placeholder="Email"
                className="bg-slate-800 border-none rounded-xl px-4 py-3 text-xs w-full focus:ring-1 focus:ring-blue-500"
              />
              <button className="bg-blue-600 p-3 rounded-xl hover:bg-blue-500 transition-colors">
                <ArrowRight size={16} />
              </button>
            </div>
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-6 pt-12 border-t border-slate-800 flex justify-between items-center text-[10px] font-black uppercase tracking-[0.3em] text-gray-600">
          <p>© 2024 CSC Institute. All Rights Reserved.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-white">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-white">
              Terms of Service
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default CourseCatalog;
