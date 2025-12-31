import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Search, Calendar, Clock, ChevronRight, 
  Mail, List, Loader2, TrendingUp, AlertCircle
} from 'lucide-react';

const BlogPage = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const BASE_URL = "http://localhost:8000";

  // 1. Fetch Data from Django API
  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await fetch(`${BASE_URL}/api/blogs/`);
        const data = await response.json();
        setPosts(Array.isArray(data) ? data : []);
      } catch (error) {
        console.error("Error fetching blogs:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchBlogs();
  }, []);

  // 2. Search Logic
  const filteredPosts = posts.filter((post) => {
    const contentToSearch = `${post.title} ${post.category?.name} ${post.content}`.toLowerCase();
    return contentToSearch.includes(searchTerm.toLowerCase());
  });

  // --- PAGINATION LOGIC ---
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 4;

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentPosts = filteredPosts.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(filteredPosts.length / itemsPerPage);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  // Reset to page 1 on search
  useEffect(() => {
    setCurrentPage(1);
  }, [searchTerm]);


  // 3. Dynamic Category Counting
  const categoryCounts = posts.reduce((acc, post) => {
    const name = post.category?.name || "Uncategorized";
    acc[name] = (acc[name] || 0) + 1;
    return acc;
  }, {});

  const categoryList = Object.keys(categoryCounts).map(name => ({
    name,
    count: categoryCounts[name]
  }));

  // 4. Helper: Format Date
  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString(undefined, { 
      year: 'numeric', month: 'short', day: 'numeric' 
    });
  };

  if (loading) return (
    <div className="h-screen flex items-center justify-center bg-white">
      <Loader2 className="animate-spin text-blue-600" size={40} />
    </div>
  );

  return (
    <div className="bg-[#f8fafc] text-slate-900 font-sans selection:bg-blue-100 min-h-screen pb-20">
      
      {/* --- HERO HEADER --- */}
      <header className="bg-white py-24 text-center border-b border-slate-100">
        <motion.div 
          initial={{ opacity: 0, y: -20 }} 
          animate={{ opacity: 1, y: 0 }} 
          className="max-w-3xl mx-auto px-6"
        >
          <span className="bg-blue-50 text-blue-600 font-black text-[10px] tracking-[0.3em] uppercase px-4 py-2 rounded-lg inline-block mb-6">
            Latest Insights
          </span>
          <h1 className="text-5xl lg:text-7xl font-black tracking-tighter leading-tight mb-8">
            The Tech <span className="text-blue-600">Journal</span>
          </h1>
          <p className="text-gray-500 text-lg font-medium leading-relaxed">
            Discover tutorials, trends, and success stories from the CSC Institute community.
          </p>
        </motion.div>
      </header>

      {/* --- MAIN CONTENT --- */}
      <main className="max-w-7xl mx-auto px-6 py-16">
        <div className="flex flex-col lg:flex-row gap-12">
          
          {/* LEFT: ARTICLES GRID */}
          <div className="lg:w-2/3">
            <AnimatePresence mode='wait'>

              {filteredPosts.length > 0 ? (
                <>
                  <motion.div 
                    layout
                    className="grid md:grid-cols-2 gap-8"
                  >
                    {currentPosts.map((post) => (
                      <motion.article 
                        key={post.id}
                        layout
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.9 }}
                        className="bg-white rounded-[2.5rem] border border-slate-100 overflow-hidden shadow-sm hover:shadow-xl transition-all group"
                      >
                        <div className="h-52 overflow-hidden relative">
                          <img 
                            src={post.thumbnail} 
                            alt={post.title} 
                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" 
                          />
                          <span className="absolute top-5 left-5 bg-blue-600 text-white text-[10px] font-black uppercase tracking-widest px-3 py-1.5 rounded-lg shadow-lg">
                            {post.category?.name}
                          </span>
                        </div>
                        <div className="p-8">
                          <div className="flex items-center gap-4 text-[10px] font-black text-gray-400 uppercase mb-4">
                            <span className="flex items-center gap-1.5"><Calendar size={12}/> {formatDate(post.created_at)}</span>
                            <span className="flex items-center gap-1.5"><Clock size={12}/> 5 Min Read</span>
                          </div>
                          <h3 className="text-xl font-black mb-4 leading-tight group-hover:text-blue-600 transition-colors line-clamp-2">
                            {post.title}
                          </h3>
                          <p className="text-gray-500 text-sm leading-relaxed mb-8 line-clamp-3">
                            {post.content.replace(/<[^>]*>?/gm, '').substring(0, 120)}...
                          </p>
                          <Link 
                            to={`/blog/${post.slug}`} 
                            className="text-blue-600 font-black text-[10px] uppercase tracking-widest flex items-center gap-1 group-hover:gap-2 transition-all"
                          >
                            Read Article <ChevronRight size={14} />
                          </Link>
                        </div>
                      </motion.article>
                    ))}
                  </motion.div>

                  {/* Pagination Controls */}
                  {filteredPosts.length > itemsPerPage && (
                    <div className="flex justify-center mt-12 gap-4">
                      <button 
                        onClick={() => paginate(currentPage - 1)}
                        disabled={currentPage === 1}
                        className="w-10 h-10 rounded-xl flex items-center justify-center border border-slate-200 text-slate-500 hover:border-blue-600 hover:text-blue-600 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
                      >
                        &lt;
                      </button>
                      
                      {Array.from({ length: totalPages }, (_, i) => (
                          <button
                            key={i}
                            onClick={() => paginate(i + 1)}
                            className={`w-10 h-10 rounded-xl flex items-center justify-center font-bold text-xs transition-all ${
                              currentPage === i + 1
                                ? "bg-blue-600 text-white shadow-lg shadow-blue-200"
                                : "bg-white border border-slate-200 text-slate-500 hover:border-blue-600 hover:text-blue-600"
                            }`}
                          >
                            {i + 1}
                          </button>
                      ))}

                      <button 
                        onClick={() => paginate(currentPage + 1)}
                        disabled={currentPage === totalPages}
                        className="w-10 h-10 rounded-xl flex items-center justify-center border border-slate-200 text-slate-500 hover:border-blue-600 hover:text-blue-600 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
                      >
                        &gt;
                      </button>
                    </div>
                  )}
                </>
              ) : (
                <motion.div 
                  initial={{ opacity: 0 }} 
                  animate={{ opacity: 1 }} 
                  className="text-center py-24 bg-white rounded-[3.5rem] border-2 border-dashed border-slate-100"
                >
                  <AlertCircle size={48} className="mx-auto text-slate-200 mb-4" />
                  <h3 className="text-xl font-black text-slate-400 tracking-tight">No articles found matching "{searchTerm}"</h3>
                  <button 
                    onClick={() => setSearchTerm("")}
                    className="mt-4 text-blue-600 font-bold text-sm hover:underline"
                  >
                    Clear all filters
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* RIGHT: SIDEBAR */}
          <aside className="lg:w-1/3 space-y-8">
            
            {/* 1. FUNCTIONAL SEARCH */}
            <div className="bg-white p-8 rounded-[2.5rem] border border-slate-100 shadow-sm">
              <h4 className="text-xs font-black uppercase tracking-widest text-slate-400 mb-6">Search</h4>
              <div className="relative">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-300" size={18} />
                <input 
                  type="text" 
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  placeholder="Keywords..." 
                  className="w-full bg-slate-50 border-none rounded-2xl py-4 pl-12 pr-4 text-sm font-bold focus:ring-2 focus:ring-blue-500 outline-none transition-all" 
                />
              </div>
            </div>

            {/* 2. DYNAMIC CATEGORIES */}
            <div className="bg-white p-8 rounded-[2.5rem] border border-slate-100 shadow-sm">
              <h4 className="text-xs font-black uppercase tracking-widest text-slate-400 mb-6 flex items-center gap-2">
                <List size={14}/> Categories
              </h4>
              <div className="space-y-2">
                {categoryList.map((cat) => (
                  <button 
                    key={cat.name} 
                    onClick={() => setSearchTerm(cat.name)}
                    className="flex items-center justify-between w-full p-3 rounded-xl hover:bg-blue-50 cursor-pointer group transition-all"
                  >
                    <span className="text-sm font-bold text-slate-600 group-hover:text-blue-600">{cat.name}</span>
                    <span className="text-[10px] font-black bg-slate-100 px-2 py-1 rounded-md text-slate-400 group-hover:bg-blue-600 group-hover:text-white transition-all">
                      {cat.count}
                    </span>
                  </button>
                ))}
              </div>
            </div>

            {/* 3. POPULAR POSTS */}
            <div className="bg-white p-8 rounded-[2.5rem] border border-slate-100 shadow-sm">
              <h4 className="text-xs font-black uppercase tracking-widest text-slate-400 mb-6 flex items-center gap-2">
                <TrendingUp size={14}/> Trending Posts
              </h4>
              <div className="space-y-6">
                {posts.slice(0, 3).map((post) => (
                  <Link to={`/blog/${post.slug}`} key={post.id} className="flex gap-4 group">
                    <div className="w-16 h-16 rounded-2xl bg-slate-100 shrink-0 overflow-hidden shadow-sm">
                      <img src={post.thumbnail} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" alt="" />
                    </div>
                    <div>
                      <p className="text-[9px] font-black uppercase tracking-widest mb-1 text-blue-600">{post.category?.name}</p>
                      <h5 className="text-sm font-black leading-tight group-hover:text-blue-600 transition-colors line-clamp-2">{post.title}</h5>
                    </div>
                  </Link>
                ))}
              </div>
            </div>

            {/* 4. NEWSLETTER */}
            <div className="bg-slate-900 p-10 rounded-[3.5rem] text-white text-center relative overflow-hidden shadow-2xl">
              <div className="absolute top-0 right-0 w-32 h-32 bg-blue-600/20 blur-3xl rounded-full"></div>
              <div className="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Mail className="text-blue-400" size={24} />
              </div>
              <h4 className="text-xl font-black mb-4 tracking-tight">Stay in the loop</h4>
              <p className="text-slate-400 text-xs font-medium mb-8 leading-relaxed">Weekly tech updates directly to your inbox.</p>
              <div className="space-y-3">
                <input 
                  type="email" 
                  placeholder="Your email" 
                  className="w-full bg-slate-800 border-none rounded-2xl py-4 px-6 text-sm focus:ring-2 focus:ring-blue-500 outline-none" 
                />
                <button className="w-full bg-blue-600 text-white font-black py-4 rounded-2xl text-[10px] uppercase tracking-[0.2em] hover:bg-blue-700 transition-all">
                  Subscribe
                </button>
              </div>
            </div>

          </aside>
        </div>
      </main>
    </div>
  );
};

export default BlogPage;