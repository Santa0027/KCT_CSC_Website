import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom"; // Use Link from react-router-dom for routing
import {
  Search,
  Filter,
  Clock,
  BarChart,
  ChevronRight,
  ArrowRight,
  ShieldCheck,
  Zap,
  Award,
  Briefcase,
  Loader2
} from "lucide-react";

const CourseCatalog = () => {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [activeFilter, setActiveFilter] = useState("All");

  const BASE_URL = "http://localhost:8000";

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const response = await fetch(`${BASE_URL}/api/courses/`);
        const data = await response.json();
        // Defensive check: Ensure we only set state if data is an array
        setCourses(Array.isArray(data) ? data : []);
      } catch (error) {
        console.error("Error fetching courses:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchCourses();
  }, []);

  // --- DYNAMIC LOGIC HELPERS ---
  // Using optional chaining (?.) and default values to prevent "undefined" errors
  const categories = [
    "All",
    ...new Set(
      courses
        .filter(c => c && c.breakdown) // Only process courses with a breakdown field
        .map((c) => c.breakdown.split(" + ")[0])
    ),
  ];

  const filteredCourses = courses.filter(
    (c) => activeFilter === "All" || (c.breakdown && c.breakdown.includes(activeFilter))
  );

  // --- PAGINATION LOGIC ---
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  // Calculate indexes
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentCourses = filteredCourses.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(filteredCourses.length / itemsPerPage);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  // Reset to page 1 when filter changes
  useEffect(() => {
    setCurrentPage(1);
  }, [activeFilter]);


  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  if (loading) {
    return (
      <div className="h-screen flex flex-col items-center justify-center bg-white">
        <Loader2 className="animate-spin text-blue-600 mb-4" size={40} />
        <p className="text-slate-400 font-black text-[10px] uppercase tracking-[0.3em]">Loading Catalog...</p>
      </div>
    );
  }

  return (
    <div className="bg-white text-slate-900 font-sans selection:bg-blue-100 overflow-x-hidden">
      {/* --- HERO HEADER --- */}
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
              courses. Join {courses.length} specialized programs today.
            </p>
          </motion.div>

          <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="relative">
            <div className="bg-slate-900 rounded-[3rem] p-3 shadow-2xl overflow-hidden relative group">
              <img
                src={courses[0]?.images?.[0]?.image ? `${BASE_URL}${courses[0].images[0].image}` : "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=800"}
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
                    Join Successful Graduates
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </header>

      {/* --- QUICK FEATURES --- */}
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

      {/* --- COURSE CATALOG & FILTERS --- */}
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


          {/* Dynamic Course Grid */}
          <div className="grid md:grid-cols-3 gap-10 min-h-[500px]">
            {currentCourses.map((course) => (
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
                    src={course.images?.[0]?.image ? `${BASE_URL}${course.images[0].image}` : "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=600"}
                    alt={course.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    onError={(e) => { e.target.src = "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=600"; }}
                  />
                  <span className="absolute top-5 left-5 bg-white/90 backdrop-blur-md px-4 py-1.5 rounded-xl text-[10px] font-black uppercase tracking-widest">
                    {course.duration}
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
                      <BarChart size={14} /> ₹{course.price}
                    </div>
                  </div>
                  <p className="text-gray-500 text-sm font-medium leading-relaxed mb-10 line-clamp-2 italic">
                    {course.short_description}
                  </p>

                  <div className="mt-auto pt-6 border-t border-slate-50 flex justify-between items-center">
                    <Link
                      to={`/courses/${course.slug}`}
                      className="text-blue-600 font-black text-xs uppercase tracking-widest flex items-center gap-1 group-hover:gap-3 transition-all cursor-pointer"
                    >
                      View Details <ChevronRight size={16} />
                    </Link>
                    <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">
                      {course.discount}% OFF
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {filteredCourses.length === 0 ? (
            <div className="text-center py-20 bg-slate-50 rounded-[3rem] border border-dashed border-slate-200">
              <p className="font-bold text-slate-400">
                No courses found in this category.
              </p>
            </div>
          ) : (
            /* Pagination Controls */
            filteredCourses.length > itemsPerPage && (
              <div className="flex justify-center mt-20 gap-4">
                 <button 
                  onClick={() => paginate(currentPage - 1)}
                  disabled={currentPage === 1}
                  className="w-12 h-12 rounded-2xl flex items-center justify-center border-2 border-slate-100 text-slate-500 hover:border-blue-600 hover:text-blue-600 disabled:opacity-50 disabled:cursor-not-allowed transition-all font-bold"
                 >
                   &lt;
                 </button>
                 
                 {Array.from({ length: totalPages }, (_, i) => (
                    <button
                      key={i}
                      onClick={() => paginate(i + 1)}
                      className={`w-12 h-12 rounded-2xl flex items-center justify-center font-black text-xs transition-all ${
                        currentPage === i + 1
                          ? "bg-blue-600 text-white shadow-xl shadow-blue-200"
                          : "bg-white border-2 border-slate-100 text-slate-500 hover:border-blue-600 hover:text-blue-600"
                      }`}
                    >
                      {i + 1}
                    </button>
                 ))}

                 <button 
                  onClick={() => paginate(currentPage + 1)}
                  disabled={currentPage === totalPages}
                  className="w-12 h-12 rounded-2xl flex items-center justify-center border-2 border-slate-100 text-slate-500 hover:border-blue-600 hover:text-blue-600 disabled:opacity-50 disabled:cursor-not-allowed transition-all font-bold"
                 >
                   &gt;
                 </button>
              </div>
            )
          )}
        </div>
      </section>

      
    </div>
  );
};

export default CourseCatalog;