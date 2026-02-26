import React from "react";
import { motion } from "motion/react";

import { 
  Heart, 
  User, 
  ChevronDown, 
  Linkedin, 
  Twitter, 
  Facebook, 
  Youtube, 
  Instagram 
} from 'lucide-react';

// --- Sub-components ---

const NavItem = ({ label }: { label: string }) => (
  <div className="flex items-center gap-1 cursor-pointer group">
    <span className="text-sm font-medium text-gray-700 group-hover:text-randstad-blue transition-colors">{label}</span>
    <ChevronDown size={14} className="text-gray-400 group-hover:text-randstad-blue transition-colors" />
  </div>
);



const Hero = () => {
  return (
    <section className="bg-randstad-navy text-white overflow-hidden relative min-h-[500px] flex items-center">
      {/* Background Graphic */}
      <div className="absolute right-0 top-0 h-full w-1/2 pointer-events-none hidden lg:block">
        <div className="absolute top-1/2 right-[-15%] transform -translate-y-1/2 rotate-[-40deg] flex flex-col gap-6 opacity-90">
          <div className="w-[800px] h-[70px] bg-gradient-to-r from-[#8a2be2] via-[#a855f7] to-[#d946ef] rounded-full shadow-[0_0_40px_rgba(138,43,226,0.3)]" />
          <div className="w-[600px] h-[70px] bg-gradient-to-r from-[#8a2be2] via-[#a855f7] to-[#d946ef] rounded-full ml-32 shadow-[0_0_40px_rgba(138,43,226,0.3)]" />
          <div className="w-[700px] h-[70px] bg-gradient-to-r from-[#8a2be2] via-[#a855f7] to-[#d946ef] rounded-full -ml-16 shadow-[0_0_40px_rgba(138,43,226,0.3)]" />
        </div>
        <div className="absolute top-[45%] right-[25%] w-3 h-3 bg-white rounded-full shadow-[0_0_15px_rgba(255,255,255,0.8)]" />
      </div>

      <div className="container-custom relative z-10 py-20">
        <div className="max-w-2xl">
          <nav className="flex items-center gap-2 text-xs text-gray-400 mb-8 uppercase tracking-wider">
            <a href="#" className="hover:text-white">home</a>
            <span>&gt;</span>
            <a href="#" className="hover:text-white">job seekers</a>
            <span>&gt;</span>
            <a href="#" className="hover:text-white">areas of expertise</a>
            <span>&gt;</span>
            <span className="text-white">banking finance and sales jobs</span>
          </nav>

          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-5xl md:text-6xl font-bold leading-[1.1] tracking-tight mb-8"
          >
            looking for a job in<br />financial product sales?
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-lg md:text-xl font-medium text-gray-200 mb-10 max-w-lg"
          >
            Just clicked on our ad? That means you're looking for exciting career opportunities! Upload Your Resume in just 2 minutes & get noticed!
          </motion.p>

          <motion.button 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="px-8 py-4 border-2 border-white rounded-md font-bold text-sm uppercase tracking-widest hover:bg-white hover:text-randstad-navy transition-all"
          >
            upload resume
          </motion.button>
        </div>
      </div>
    </section>
  );
};

const CTASection = () => {
  return (
    <section className="bg-white py-24 border-b border-gray-100">
      <div className="container-custom flex flex-col md:flex-row items-center justify-between gap-12">
        <h2 className="text-4xl md:text-6xl font-bold text-randstad-navy leading-tight max-w-3xl">
          It takes less than 2 minutes! Submit your resume & let top recruiters find you.
        </h2>
        
        <button className="whitespace-nowrap px-10 py-4 border-2 border-randstad-blue text-randstad-blue rounded-md font-bold text-sm uppercase tracking-widest hover:bg-randstad-blue hover:text-white transition-all">
          apply now
        </button>
      </div>
    </section>
  );
};

// --- Main App ---

export default function FinancialProductAndSaleJob() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <main className="flex-grow">
        <Hero />
        <CTASection />
      </main>
      
      {/* Feedback Button (Fixed) */}
      <div className="fixed right-0 top-1/2 -translate-y-1/2 z-40 hidden md:block">
        <button className="bg-randstad-blue text-white px-2 py-6 rounded-l-md font-medium text-xs [writing-mode:vertical-rl] rotate-180 flex items-center justify-center gap-2 hover:bg-opacity-90 transition-all">
          Feedback
        </button>
      </div>

      {/* Cookie Icon (Fixed Bottom Left) */}
      <div className="fixed bottom-6 left-6 z-40">
        <button className="w-10 h-10 bg-randstad-blue text-white rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform">
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
}
