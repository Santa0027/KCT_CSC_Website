import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { 
  Calendar, Clock, User, ArrowLeft, 
  Share2, Bookmark, MessageCircle, Loader2 
} from 'lucide-react';
import { motion } from 'framer-motion';

const BlogDetail = () => {
  const { slug } = useParams();
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const BASE_URL = "http://localhost:8000";

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const response = await fetch(`${BASE_URL}/api/blogs/${slug}/`);
        const data = await response.json();
        setPost(data);
      } catch (error) {
        console.error("Error fetching blog post:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchPost();
    window.scrollTo(0, 0); // Scroll to top on load
  }, [slug]);

  if (loading) return (
    <div className="h-screen flex items-center justify-center bg-white">
      <Loader2 className="animate-spin text-blue-600" size={40} />
    </div>
  );

  if (!post) return <div className="text-center py-20">Post not found.</div>;

  return (
    <div className="bg-white min-h-screen pb-20">
      {/* --- 1. HERO HEADER --- */}
      <header className="pt-16 pb-12 bg-slate-50/50">
        <div className="max-w-4xl mx-auto px-6">
          <Link to="/blog" className="inline-flex items-center gap-2 text-blue-600 font-black text-[10px] uppercase tracking-widest mb-8 hover:gap-3 transition-all">
            <ArrowLeft size={14} /> Back to Blog
          </Link>
          
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <span className="bg-blue-600 text-white px-4 py-1.5 rounded-xl text-[10px] font-black uppercase tracking-widest mb-6 inline-block">
              {post.category?.name}
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tighter leading-tight mb-8">
              {post.title}
            </h1>
            
            <div className="flex flex-wrap items-center gap-8 pt-8 border-t border-slate-200">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-blue-100 rounded-2xl flex items-center justify-center text-blue-600 font-bold uppercase">
                  {post.author.username.substring(0,2)}
                </div>
                <div>
                  <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Written by</p>
                  <p className="font-bold text-slate-900">@{post.author.username}</p>
                </div>
              </div>
              <div className="flex items-center gap-6 text-slate-400">
                <span className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest">
                  <Calendar size={16} className="text-blue-600" /> {new Date(post.created_at).toLocaleDateString()}
                </span>
                <span className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest">
                  <Clock size={16} className="text-blue-600" /> 8 Min Read
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </header>

      {/* --- 2. MAIN IMAGE --- */}
      <div className="max-w-5xl mx-auto px-6 -mt-10">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="rounded-[3rem] overflow-hidden shadow-2xl border-8 border-white"
        >
          <img 
            src={post.thumbnail} 
            alt={post.title} 
            className="w-full h-[500px] object-cover" 
          />
        </motion.div>
      </div>

      {/* --- 3. CONTENT AREA --- */}
      <main className="max-w-4xl mx-auto px-6 mt-16 grid lg:grid-cols-12 gap-12">
        {/* Left: Floating Actions */}
        <aside className="lg:col-span-1 flex lg:flex-col gap-4 sticky top-10 h-fit">
          <button className="w-12 h-12 rounded-2xl border border-slate-100 flex items-center justify-center text-slate-400 hover:bg-blue-600 hover:text-white transition-all shadow-sm">
            <Share2 size={18} />
          </button>
          <button className="w-12 h-12 rounded-2xl border border-slate-100 flex items-center justify-center text-slate-400 hover:bg-blue-600 hover:text-white transition-all shadow-sm">
            <Bookmark size={18} />
          </button>
          <button className="w-12 h-12 rounded-2xl border border-slate-100 flex items-center justify-center text-slate-400 hover:bg-blue-600 hover:text-white transition-all shadow-sm">
            <MessageCircle size={18} />
          </button>
        </aside>

        {/* Center: Article Body */}
        <div className="lg:col-span-11">
          <div 
            className="prose prose-lg max-w-none prose-slate prose-headings:font-black prose-headings:tracking-tighter prose-p:font-medium prose-p:text-slate-600 prose-p:leading-relaxed prose-img:rounded-[2rem]"
            dangerouslySetInnerHTML={{ __html: post.content }} 
          />
          
          {/* Tags / Footer */}
          <div className="mt-16 pt-10 border-t border-slate-100 flex flex-wrap gap-3">
            <span className="text-xs font-black uppercase tracking-widest text-slate-400">Tagged in:</span>
            {['Coding', 'Success', 'Tech2025'].map(tag => (
              <span key={tag} className="bg-slate-50 px-4 py-1.5 rounded-lg text-xs font-bold text-slate-600 hover:bg-blue-50 hover:text-blue-600 cursor-pointer transition-colors">
                #{tag}
              </span>
            ))}
          </div>
        </div>
      </main>

      {/* --- 4. NEWSLETTER FOOTER --- */}
      <section className="max-w-4xl mx-auto px-6 mt-24">
        <div className="bg-blue-600 rounded-[3rem] p-12 text-center text-white relative overflow-hidden">
          <div className="absolute top-0 left-0 w-32 h-32 bg-white/10 blur-3xl rounded-full -ml-16 -mt-16"></div>
          <h3 className="text-3xl font-black mb-4 tracking-tighter">Enjoyed this article?</h3>
          <p className="text-blue-100 mb-8 font-medium">Get the latest tech news and tutorials directly in your inbox.</p>
          <div className="flex flex-col md:flex-row gap-4 max-w-md mx-auto">
            <input type="email" placeholder="Email address" className="bg-white/10 border border-white/20 rounded-2xl px-6 py-4 text-sm w-full outline-none focus:ring-2 focus:ring-white/50 placeholder:text-blue-100" />
            <button className="bg-white text-blue-600 px-8 py-4 rounded-2xl font-black text-xs uppercase tracking-widest hover:bg-blue-50 transition-colors shrink-0">Subscribe</button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BlogDetail;