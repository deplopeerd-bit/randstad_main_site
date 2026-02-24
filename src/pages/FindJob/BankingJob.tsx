import React from "react";
import { motion } from "motion/react";

import { 
  Search, 
  Heart, 
  User, 
  ChevronDown, 
  Linkedin, 
  Facebook, 
  Youtube, 
  Instagram,
  ArrowRight
} from 'lucide-react';

const RandstadPage: React.FC = () => {
  return (
    <div className="min-h-screen font-sans bg-white text-[#141414]">
      {/* Top Bar */}
      <div className="bg-white border-b border-gray-100 py-2 px-6 flex justify-end items-center text-xs space-x-4">
        <a href="#" className="hover:underline text-gray-600">contact us</a>
      </div>

      {/* Main Header */}
      <header className="sticky top-0 z-50 bg-white border-b border-gray-100 px-6 py-4 flex items-center justify-between">
        <div className="flex items-center space-x-12">
          {/* Logo */}
          <div className="flex items-center">
            <svg width="140" height="32" viewBox="0 0 140 32" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12.5 5C8.35786 5 5 8.35786 5 12.5V27H0V12.5C0 5.59644 5.59644 0 12.5 0H27V5H12.5Z" fill="#2175D9"/>
              <path d="M127.5 5C131.642 5 135 8.35786 135 12.5V27H140V12.5C140 5.59644 134.404 0 127.5 0H113V5H127.5Z" fill="#2175D9"/>
              <text x="35" y="24" fill="#2175D9" style={{ font: 'bold 24px sans-serif' }}>randstad</text>
            </svg>
          </div>

          {/* Navigation */}
          <nav className="hidden lg:flex items-center space-x-8 text-sm font-medium text-gray-700">
            <button className="flex items-center hover:text-[#2175D9] transition-colors">
              find a job <ChevronDown className="ml-1 w-4 h-4" />
            </button>
            <button className="flex items-center hover:text-[#2175D9] transition-colors">
              for talent <ChevronDown className="ml-1 w-4 h-4" />
            </button>
            <button className="flex items-center hover:text-[#2175D9] transition-colors">
              for employer <ChevronDown className="ml-1 w-4 h-4" />
            </button>
            <button className="flex items-center hover:text-[#2175D9] transition-colors">
              resources <ChevronDown className="ml-1 w-4 h-4" />
            </button>
            <button className="flex items-center hover:text-[#2175D9] transition-colors">
              about us <ChevronDown className="ml-1 w-4 h-4" />
            </button>
          </nav>
        </div>

        <div className="flex items-center space-x-6">
          <button className="p-2 hover:bg-gray-50 rounded-full">
            <Heart className="w-5 h-5 text-gray-600" />
            <span className="ml-1 text-sm font-medium">0</span>
          </button>
          <button className="flex items-center space-x-2 p-2 hover:bg-gray-50 rounded-full">
            <User className="w-5 h-5 text-gray-600" />
            <span className="text-sm font-medium">my randstad</span>
          </button>
        </div>
      </header>

      {/* Breadcrumbs */}
      <div className="bg-[#0a1931] px-6 py-4 text-[10px] text-gray-400 uppercase tracking-wider">
        <div className="max-w-7xl mx-auto flex items-center space-x-2">
          <a href="#" className="hover:text-white">home</a>
          <span>›</span>
          <a href="#" className="hover:text-white">job seekers</a>
          <span>›</span>
          <a href="#" className="hover:text-white">areas of expertise</a>
          <span>›</span>
          <span className="text-white">banking finance and sales jobs</span>
        </div>
      </div>

      {/* Hero Section */}
      <section className="bg-[#0a1931] text-white relative overflow-hidden min-h-[500px] flex items-center">
        {/* Abstract Background Elements */}
        <div className="absolute right-0 top-0 w-1/2 h-full opacity-50 pointer-events-none">
          <div className="absolute top-1/4 right-10 w-[400px] h-[60px] bg-[#8a2be2] rounded-full rotate-[-35deg] blur-sm"></div>
          <div className="absolute top-1/3 right-20 w-[300px] h-[40px] bg-[#6a5acd] rounded-full rotate-[-35deg] opacity-60"></div>
          <div className="absolute top-1/2 right-40 w-[500px] h-[80px] bg-[#9370db] rounded-full rotate-[-35deg] blur-md"></div>
        </div>

        <div className="max-w-7xl mx-auto px-6 py-20 relative z-10 w-full">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl"
          >
            <h1 className="text-5xl md:text-7xl font-light leading-tight mb-8">
              looking for a job in <br />
              <span className="font-normal">banking sales?</span>
            </h1>
            <p className="text-lg text-gray-300 mb-10 max-w-lg leading-relaxed">
              Just clicked on our ad? That means you're looking for exciting career opportunities! Upload Your Resume in just 2 minutes & get noticed!
            </p>
            <button className="px-10 py-4 border border-white rounded-md text-sm font-medium uppercase tracking-widest hover:bg-white hover:text-[#0a1931] transition-all duration-300">
              upload resume
            </button>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-white py-32 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12">
          <motion.h2 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-light text-[#0a1931] leading-tight max-w-3xl"
          >
            It takes less than 2 minutes! Submit your resume & let top recruiters find you.
          </motion.h2>
          <motion.button 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="px-12 py-5 border border-[#2175D9] text-[#2175D9] rounded-md text-sm font-medium uppercase tracking-widest hover:bg-[#2175D9] hover:text-white transition-all duration-300 whitespace-nowrap"
          >
            apply now
          </motion.button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#0a1931] text-white pt-20 pb-10 px-6">
        <div className="max-w-7xl mx-auto">
          {/* Footer Links Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-12 mb-20">
            <div className="space-y-6">
              <h3 className="text-lg font-medium">find a job</h3>
              <ul className="space-y-3 text-sm text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">explore all jobs</a></li>
                <li><a href="#" className="hover:text-white transition-colors">submit your cv</a></li>
                <li><a href="#" className="hover:text-white transition-colors">join our team</a></li>
                <li><a href="#" className="hover:text-white transition-colors">refer a friend</a></li>
              </ul>
              <h3 className="text-lg font-medium pt-6">for talents</h3>
              <ul className="space-y-3 text-sm text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">specialisms</a></li>
                <li><a href="#" className="hover:text-white transition-colors">testimonials</a></li>
                <li><a href="#" className="hover:text-white transition-colors">career advice</a></li>
                <li><a href="#" className="hover:text-white transition-colors">beware of job scams</a></li>
              </ul>
            </div>

            <div className="space-y-6">
              <h3 className="text-lg font-medium">for employers</h3>
              <ul className="space-y-3 text-sm text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">submit a vacancy</a></li>
                <li><a href="#" className="hover:text-white transition-colors">request a callback</a></li>
                <li><a href="#" className="hover:text-white transition-colors">our services</a></li>
                <li><a href="#" className="hover:text-white transition-colors">specialisms</a></li>
                <li><a href="#" className="hover:text-white transition-colors">case studies</a></li>
                <li><a href="#" className="hover:text-white transition-colors">testimonials</a></li>
              </ul>
              <h3 className="text-lg font-medium pt-6">resources</h3>
              <ul className="space-y-3 text-sm text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">case studies</a></li>
                <li><a href="#" className="hover:text-white transition-colors">press room</a></li>
                <li><a href="#" className="hover:text-white transition-colors">blogs</a></li>
              </ul>
            </div>

            <div className="space-y-6">
              <h3 className="text-lg font-medium">workforce insights</h3>
              <ul className="space-y-3 text-sm text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">talent insights reports</a></li>
                <li><a href="#" className="hover:text-white transition-colors">employer brand research reports</a></li>
                <li><a href="#" className="hover:text-white transition-colors">salary trends reports</a></li>
                <li><a href="#" className="hover:text-white transition-colors">ed&i reports</a></li>
                <li><a href="#" className="hover:text-white transition-colors">workmonitor reports</a></li>
                <li><a href="#" className="hover:text-white transition-colors">startup hiring trends</a></li>
                <li><a href="#" className="hover:text-white transition-colors">talent pulse surveys</a></li>
              </ul>
            </div>

            <div className="space-y-6">
              <h3 className="text-lg font-medium">jobs</h3>
              <ul className="space-y-3 text-sm text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">engineering jobs</a></li>
                <li><a href="#" className="hover:text-white transition-colors">cxo jobs</a></li>
                <li><a href="#" className="hover:text-white transition-colors">manufacturing jobs</a></li>
                <li><a href="#" className="hover:text-white transition-colors">supply chain & logistics jobs</a></li>
                <li><a href="#" className="hover:text-white transition-colors">education jobs</a></li>
                <li><a href="#" className="hover:text-white transition-colors">finance & accounting jobs</a></li>
                <li><a href="#" className="hover:text-white transition-colors">healthcare jobs</a></li>
                <li><a href="#" className="hover:text-white transition-colors">hr & admin support jobs</a></li>
                <li><a href="#" className="hover:text-white transition-colors">ites/gcc jobs</a></li>
                <li><a href="#" className="hover:text-white transition-colors">legal & compliance jobs</a></li>
                <li><a href="#" className="hover:text-white transition-colors">sales & marketing jobs</a></li>
              </ul>
            </div>
          </div>

          {/* Social and Legal */}
          <div className="border-t border-gray-800 pt-10">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 mb-12">
              <div className="flex space-x-4">
                <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-[#2175D9] transition-colors">
                  <Linkedin className="w-5 h-5" />
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-[#2175D9] transition-colors">
                  <span className="font-bold text-lg">𝕏</span>
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-[#2175D9] transition-colors">
                  <Facebook className="w-5 h-5" />
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-[#2175D9] transition-colors">
                  <Youtube className="w-5 h-5" />
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-[#2175D9] transition-colors">
                  <Instagram className="w-5 h-5" />
                </a>
              </div>
              <div className="text-[10px] text-gray-500 uppercase tracking-widest">
                registered office: Randstad India Private Limited, CIN U74210TN1992PTC023097,/Randstad House, Old No. 5 & 5A, New No. 9, Pycrofts Garden Road, Nungambakkam, Chennai, TN - 600 006
              </div>
            </div>

            <div className="space-y-8 text-xs text-gray-500 leading-relaxed">
              <div className="flex items-center space-x-2">
                <span className="font-bold text-gray-400">RANDSTAD,</span>
                <svg width="24" height="12" viewBox="0 0 24 12" fill="none" xmlns="http://www.w3.org/2000/svg" className="inline">
                  <path d="M0 0H4V12H0V0Z" fill="#2175D9"/>
                  <path d="M8 0H12V12H8V0Z" fill="#2175D9"/>
                  <path d="M16 0H20V12H16V0Z" fill="#2175D9"/>
                </svg>
                <span>HUMAN FORWARD and SHAPING THE WORLD OF WORK are registered trademarks of © Randstad N.V.2023</span>
              </div>

              <p>
                <span className="text-gray-400 font-medium">Security Advice:</span> Randstad India does not charge any fee at any stage of its recruitment process from the candidate nor allows their employees to collect any fees from any candidates. <a href="#" className="underline hover:text-white">Click here to know more</a>
              </p>

              <p>
                <span className="text-gray-400 font-medium">EEO Statement:</span> Randstad India is an Equal Employment Opportunity Employer. All qualified applicants receive consideration for employment without regard to race, color, religion, sex, sexual orientation, gender identity or expression, appearance, national origin, age, marital status, veteran status, or disability status, or any other characteristics. Our global mission is to become the world's most equitable and specialized talent company, and we actively embrace diversity and inclusion as the cornerstones of our success. To read more of Randstad India's work in the space of equity, diversity and inclusion please <a href="#" className="underline hover:text-white">click here</a>
              </p>

              <div className="flex flex-wrap gap-x-6 gap-y-2 pt-4 border-t border-gray-800 mt-8">
                <a href="#" className="hover:text-white transition-colors">terms & conditions</a>
                <a href="#" className="hover:text-white transition-colors">cookies</a>
                <a href="#" className="hover:text-white transition-colors">misconduct reporting procedure</a>
                <a href="#" className="hover:text-white transition-colors">accessibility</a>
                <a href="#" className="hover:text-white transition-colors">be aware</a>
                <a href="#" className="hover:text-white transition-colors">sitemap</a>
                <a href="#" className="hover:text-white transition-colors">privacy statement</a>
              </div>
            </div>
          </div>
        </div>
      </footer>

      {/* Floating Feedback Button */}
      <div className="fixed right-0 top-1/2 -translate-y-1/2 z-50">
        <button className="bg-[#2175D9] text-white py-3 px-1 rounded-l-md text-[10px] font-bold uppercase tracking-widest [writing-mode:vertical-rl] rotate-180 hover:bg-[#1a5fb0] transition-colors">
          Feedback
        </button>
      </div>

      {/* Cookie Icon */}
      <div className="fixed bottom-6 left-6 z-50">
        <button className="w-10 h-10 bg-[#2175D9] text-white rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 2a10 10 0 1 0 10 10 4 4 0 0 1-5-5 4 4 0 0 1-5-5" />
            <path d="M8.5 8.5v.01" />
            <path d="M16 15.5v.01" />
            <path d="M12 12v.01" />
            <path d="M11 17v.01" />
            <path d="M7 14v.01" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default RandstadPage;
