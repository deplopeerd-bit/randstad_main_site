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

const BankingFinanceAndJob: React.FC = () => {
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

export default BankingFinanceAndJob;
