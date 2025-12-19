import React from 'react';
import { motion } from 'framer-motion';
import { 
  Search, Calendar, Clock, ChevronRight, 
  ArrowRight, Mail, Facebook, Twitter, Linkedin,
  ChevronLeft, LayoutGrid, List
} from 'lucide-react';

const BlogPage = () => {
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const articles = [
    {
      id: 1,
      category: "Data Science",
      title: "Top 5 Python Libraries for Data Science in 2024",
      excerpt: "Explore the essential tools that every data scientist should master this year, from Pandas improvements to the latest in TensorFlow...",
      author: "Jane Cooper",
      date: "Oct 24, 2023",
      readTime: "5 min read",
      img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600"
    },
    {
      id: 2,
      category: "Development",
      title: "Success Story: How Sarah Became a Full Stack Dev",
      excerpt: "From a complete beginner to a hired developer in just 6 months. Read Sarah's inspiring journey through our intensive bootcamp program.",
      author: "Mike Ross",
      date: "Oct 20, 2023",
      readTime: "8 min read",
      img: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=600"
    },
    {
      id: 3,
      category: "Cloud Computing",
      title: "Understanding AWS Basics for Beginners",
      excerpt: "Confused by the cloud? We break down the fundamental concepts of Amazon Web Services and how to get started with your first...",
      author: "Alex Chen",
      date: "Oct 15, 2023",
      readTime: "12 min read",
      img: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=600"
    },
    {
      id: 4,
      category: "Cybersecurity",
      title: "Essential Security Practices for Junior Devs",
      excerpt: "Security isn't just for the Ops team. Learn how to write secure code and protect your applications from common vulnerabilities like...",
      author: "Sarah Connor",
      date: "Oct 12, 2023",
      readTime: "4 min read",
      img: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=600"
    }
  ];

  return (
    <div className="bg-[#f8fafc] text-slate-900 font-sans selection:bg-blue-100 min-h-screen">
      
     

      {/* --- 2. HERO HEADER --- */}
      <header className="bg-white py-20 text-center border-b border-slate-100">
        <motion.div initial="hidden" animate="visible" variants={fadeInUp} className="max-w-3xl mx-auto px-6">
          <span className="bg-blue-50 text-blue-600 font-black text-[10px] tracking-[0.3em] uppercase px-4 py-2 rounded-lg inline-block mb-6">
            Our Blog
          </span>
          <h1 className="text-5xl lg:text-6xl font-black tracking-tighter leading-tight mb-8">
            Insights & Updates from the <br /> <span className="text-blue-600">Tech World</span>
          </h1>
          <p className="text-gray-500 text-lg font-medium leading-relaxed">
            Stay ahead of the curve with our latest tutorials, student success stories, and industry news designed for future tech leaders.
          </p>
        </motion.div>
      </header>

      {/* --- 3. MAIN CONTENT --- */}
      <main className="max-w-7xl mx-auto px-6 py-16">
        <div className="flex flex-col lg:flex-row gap-12">
          
          {/* LEFT: ARTICLES GRID */}
          <div className="lg:w-2/3">
            <div className="flex items-center justify-between mb-10">
              <h2 className="text-2xl font-black tracking-tight flex items-center gap-3">
                <List className="text-blue-600" size={24}/> Latest Articles
              </h2>
              <div className="flex gap-2 text-slate-400">
                <LayoutGrid size={20} className="cursor-pointer hover:text-blue-600 transition-colors" />
                <List size={20} className="cursor-pointer text-blue-600" />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {articles.map((post) => (
                <motion.article 
                  key={post.id}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={fadeInUp}
                  className="bg-white rounded-[2.5rem] border border-slate-100 overflow-hidden shadow-sm hover:shadow-xl transition-all group"
                >
                  <div className="h-48 overflow-hidden relative">
                    <img src={post.img} alt={post.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                    <span className="absolute top-5 left-5 bg-blue-600 text-white text-[10px] font-black uppercase tracking-widest px-3 py-1.5 rounded-lg shadow-lg">
                      {post.category}
                    </span>
                  </div>
                  <div className="p-8">
                    <div className="flex items-center gap-4 text-[10px] font-black text-gray-400 uppercase tracking-widest mb-4">
                      <span className="flex items-center gap-1.5"><Calendar size={12}/> {post.date}</span>
                      <span className="flex items-center gap-1.5"><Clock size={12}/> {post.readTime}</span>
                    </div>
                    <h3 className="text-xl font-black mb-4 leading-tight group-hover:text-blue-600 transition-colors line-clamp-2">
                      {post.title}
                    </h3>
                    <p className="text-gray-500 text-sm font-medium leading-relaxed mb-8 line-clamp-3">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center justify-between pt-6 border-t border-slate-50">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full bg-slate-100 overflow-hidden">
                          <img src={`https://i.pravatar.cc/100?u=${post.author}`} alt={post.author} />
                        </div>
                        <span className="text-xs font-bold text-slate-700">{post.author}</span>
                      </div>
                      <button className="text-blue-600 font-black text-[10px] uppercase tracking-widest flex items-center gap-1 group-hover:gap-2 transition-all">
                        Read More <ChevronRight size={14} />
                      </button>
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>

            {/* Pagination */}
            <div className="mt-16 flex justify-center gap-3">
              <button className="w-10 h-10 rounded-xl border border-slate-200 flex items-center justify-center text-slate-400 hover:bg-white transition-all"><ChevronLeft size={18}/></button>
              <button className="w-10 h-10 rounded-xl bg-blue-600 text-white font-black text-sm shadow-lg shadow-blue-100">1</button>
              <button className="w-10 h-10 rounded-xl bg-white border border-slate-200 text-slate-600 font-black text-sm hover:border-blue-600 transition-all">2</button>
              <button className="w-10 h-10 rounded-xl bg-white border border-slate-200 text-slate-600 font-black text-sm hover:border-blue-600 transition-all">3</button>
              <button className="w-10 h-10 rounded-xl border border-slate-200 flex items-center justify-center text-slate-400 hover:bg-white transition-all"><ArrowRight size={18}/></button>
            </div>
          </div>

          {/* RIGHT: SIDEBAR */}
          <aside className="lg:w-1/3 space-y-10">
            {/* Search */}
            <div className="bg-white p-8 rounded-[2.5rem] border border-slate-100 shadow-sm">
              <h4 className="text-sm font-black uppercase tracking-widest text-slate-400 mb-6">Search</h4>
              <div className="relative">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-300" size={18} />
                <input 
                  type="text" 
                  placeholder="Search articles..." 
                  className="w-full bg-slate-50 border-none rounded-2xl py-4 pl-12 pr-4 text-sm font-bold focus:ring-2 focus:ring-blue-500" 
                />
              </div>
            </div>

            {/* Categories */}
            <div className="bg-white p-8 rounded-[2.5rem] border border-slate-100 shadow-sm">
              <h4 className="text-sm font-black uppercase tracking-widest text-slate-400 mb-6">Categories</h4>
              <div className="space-y-2">
                {[
                  { name: "Web Development", count: 12 },
                  { name: "Data Science", count: 8 },
                  { name: "Cyber Security", count: 5 },
                  { name: "Career Advice", count: 15 }
                ].map((cat) => (
                  <div key={cat.name} className="flex items-center justify-between p-3 rounded-xl hover:bg-slate-50 cursor-pointer group transition-all">
                    <span className="text-sm font-bold text-slate-600 group-hover:text-blue-600">{cat.name}</span>
                    <span className="text-[10px] font-black bg-slate-100 px-2 py-1 rounded-md text-slate-400 group-hover:bg-blue-50 group-hover:text-blue-600">{cat.count}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Popular Now */}
            <div className="bg-white p-8 rounded-[2.5rem] border border-slate-100 shadow-sm">
              <h4 className="text-sm font-black uppercase tracking-widest text-slate-400 mb-6">Popular Now</h4>
              <div className="space-y-6">
                {[
                  { title: "The Future of AI in Education", label: "Trends", color: "text-blue-600" },
                  { title: "Building Your First PC for Coding", label: "Hardware", color: "text-green-600" },
                  { title: "10 Tips for Cleaner Code", label: "Coding", color: "text-orange-600" }
                ].map((item, i) => (
                  <div key={i} className="flex gap-4 group cursor-pointer">
                    <div className="w-16 h-16 rounded-2xl bg-slate-100 shrink-0 overflow-hidden">
                      <img src={`https://picsum.photos/100?random=${i}`} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                    </div>
                    <div>
                      <p className={`text-[10px] font-black uppercase tracking-widest mb-1 ${item.color}`}>{item.label}</p>
                      <h5 className="text-sm font-black leading-tight group-hover:text-blue-600 transition-colors">{item.title}</h5>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Newsletter CTA */}
            <div className="bg-blue-600 p-10 rounded-[3rem] text-white text-center shadow-2xl shadow-blue-200 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 blur-3xl rounded-full"></div>
              <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Mail size={24} />
              </div>
              <h4 className="text-2xl font-black mb-4 tracking-tight">Subscribe to our Newsletter</h4>
              <p className="text-blue-100 text-sm font-medium mb-8 leading-relaxed">Get the latest articles and course updates delivered to your inbox.</p>
              <div className="space-y-3">
                <input 
                  type="email" 
                  placeholder="Your email address" 
                  className="w-full bg-white/10 border border-white/20 rounded-2xl py-4 px-6 text-sm placeholder:text-blue-200 focus:outline-none focus:ring-2 focus:ring-white/50" 
                />
                <button className="w-full bg-white text-blue-600 font-black py-4 rounded-2xl shadow-xl shadow-blue-900/20 hover:bg-blue-50 transition-all text-xs uppercase tracking-widest">
                  Subscribe
                </button>
              </div>
            </div>
          </aside>
        </div>
      </main>

      {/* --- 4. FOOTER --- */}
      <footer className="bg-white pt-24 pb-12 border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-16 mb-20">
          <div className="col-span-1">
            <div className="flex items-center gap-2 font-black text-2xl text-blue-600 mb-8 tracking-tighter">
              <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center text-white text-sm">C</div>
              CSC Institute
            </div>
            <p className="text-gray-400 font-medium leading-relaxed">Providing world-class insights and training for the next generation of tech leaders.</p>
          </div>
          <div>
            <h5 className="font-black text-[10px] uppercase tracking-[0.2em] mb-8 text-gray-400">Company</h5>
            <ul className="space-y-4 text-slate-500 font-bold text-sm">
              <li><a href="#" className="hover:text-blue-600 transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-blue-600 transition-colors">Courses</a></li>
              <li><a href="#" className="hover:text-blue-600 transition-colors">Contact</a></li>
            </ul>
          </div>
          <div>
            <h5 className="font-black text-[10px] uppercase tracking-[0.2em] mb-8 text-gray-400">Newsletter</h5>
            <div className="flex gap-2">
              <input type="text" placeholder="Email" className="bg-slate-50 border-none rounded-xl px-4 py-3 text-xs w-full" />
              <button className="bg-blue-600 p-3 rounded-xl text-white hover:bg-blue-700 transition-colors"><ArrowRight size={16} /></button>
            </div>
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-6 pt-12 border-t border-slate-100 flex justify-between items-center text-[10px] font-black uppercase tracking-[0.3em] text-gray-400">
          <p>© 2024 CSC Institute. All Rights Reserved.</p>
          <div className="flex gap-8">
            <Facebook size={16} className="hover:text-blue-600 transition-colors cursor-pointer" />
            <Twitter size={16} className="hover:text-blue-600 transition-colors cursor-pointer" />
            <Linkedin size={16} className="hover:text-blue-600 transition-colors cursor-pointer" />
          </div>
        </div>
      </footer>
    </div>
  );
};

export default BlogPage;