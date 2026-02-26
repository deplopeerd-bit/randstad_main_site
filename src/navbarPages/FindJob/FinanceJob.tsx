import { motion } from "motion/react";

import { 
  Search, 
  User, 
  Heart, 
  ChevronDown, 
  Linkedin, 
  Twitter, 
  Facebook, 
  Youtube, 
  Instagram,
  Cookie
} from "lucide-react";

export default function JobPortal() {
  return (
    <div className="min-h-screen bg-white font-sans text-[#141414]">
      {/* Top Navigation Bar */}
      

      {/* Hero Section */}
      <section className="relative bg-[#0E1B3D] text-white overflow-hidden py-20 lg:py-32">
        {/* Abstract Background Elements */}
        <div className="absolute top-0 right-0 w-1/2 h-full pointer-events-none opacity-40">
          <div className="absolute top-1/4 right-1/4 w-[400px] h-[60px] bg-gradient-to-r from-purple-600 to-blue-500 rounded-full rotate-[-45deg] blur-sm"></div>
          <div className="absolute top-1/3 right-1/3 w-[300px] h-[40px] bg-gradient-to-r from-purple-500 to-indigo-500 rounded-full rotate-[-45deg] opacity-60"></div>
          <div className="absolute top-1/2 right-1/2 w-[200px] h-[30px] bg-purple-400 rounded-full rotate-[-45deg] opacity-40"></div>
          <div className="absolute bottom-1/4 right-1/4 w-4 h-4 bg-white rounded-full"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <nav className="flex items-center space-x-2 text-xs mb-12 opacity-80">
            <a href="#" className="hover:underline">home</a>
            <span>›</span>
            <a href="#" className="hover:underline">find a job</a>
            <span>›</span>
            <a href="#" className="hover:underline">ongoing hiring drives</a>
            <span>›</span>
            <span className="font-semibold">financial product sales jobs</span>
          </nav>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl"
          >
            <h1 className="text-5xl lg:text-7xl font-bold leading-tight mb-8">
              looking for a job in financial product sales?
            </h1>
            <p className="text-xl lg:text-2xl mb-10 opacity-90 leading-relaxed">
              Just clicked on our ad? That means you're looking for exciting career opportunities! Upload Your Resume in just 2 minutes & get noticed!
            </p>
            <button className="bg-white text-[#0E1B3D] px-10 py-4 rounded-md font-bold text-lg hover:bg-gray-100 transition-all shadow-lg">
              upload resume
            </button>
          </motion.div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="bg-white py-24 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row justify-between items-center gap-12">
            <motion.h2 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-4xl lg:text-6xl font-bold text-[#0E1B3D] max-w-3xl leading-tight"
            >
              It takes less than 2 minutes! Submit your resume & let top recruiters find you.
            </motion.h2>
            <motion.button 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="border-2 border-[#007DBA] text-[#007DBA] px-12 py-4 rounded-md font-bold text-lg hover:bg-[#007DBA] hover:text-white transition-all whitespace-nowrap"
            >
              apply now
            </motion.button>
          </div>
        </div>
      </section>

      {/* Footer */}
      

      {/* Floating Elements */}
      <div className="fixed right-0 top-1/2 -translate-y-1/2 z-50">
        <button className="bg-[#4F86F7] text-white px-3 py-6 rounded-l-md font-bold text-xs uppercase tracking-widest [writing-mode:vertical-rl] rotate-180 flex items-center justify-center hover:bg-[#3b6edb] transition-colors shadow-lg">
          Feedback
        </button>
      </div>

      <div className="fixed bottom-6 left-6 z-50">
        <button className="bg-[#007DBA] text-white p-3 rounded-full shadow-2xl hover:bg-[#006699] transition-transform hover:scale-110">
          <Cookie className="w-6 h-6" />
        </button>
      </div>
    </div>
  );
}
