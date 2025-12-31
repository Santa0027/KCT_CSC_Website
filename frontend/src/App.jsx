
import { Routes, Route } from "react-router-dom";

import HomePage from './pages/HomePage';
import AboutPage from './pages/About';
import Navbar from './components/Navbar';
import CoursesPage from './pages/Course';
import CourseDetails from './pages/CourseDetails';
import Blog from './pages/Blog'
import EnquiryPage from './pages/Enquiry';
import Footer from './components/footer';
import BlogDetail from './pages/BlogDetails';
function App() {
  return (
    <>  
      <Navbar />   {/* ✅ Always visible */}
      
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/courses" element={<CoursesPage/>}/>
        <Route path="/courses/:slug"element={<CourseDetails/>}/>
        <Route path="/blog" element={<Blog/>}/>
        <Route path="/enquiry" element={<EnquiryPage/>}/>
        <Route path="/blog/:slug" element={<BlogDetail />} />
      </Routes>
      <Footer/>
    </>
  );
}

export default App;
