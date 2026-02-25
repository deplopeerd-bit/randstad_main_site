import React from "react";
import { motion } from "motion/react";

import { 
  Heart, 
  User, 
  Linkedin, 
  Twitter, 
  Facebook, 
  Youtube, 
  Instagram,
  ChevronDown,
  ExternalLink
} from 'lucide-react';

const FortalentRegisterYourInstitute: React.FC = () => {
  return (
    <div className="min-h-screen font-sans text-[#05192d] bg-white">
      {/* Top Utility Bar */}
      <div className="border-bottom border-gray-100 py-2 px-4 md:px-12 flex justify-end text-xs font-medium text-gray-500">
        <a href="#" className="hover:underline">contact us</a>
      </div>

      {/* Header */}
      
      {/* Breadcrumbs */}
      <div className="bg-[#05192d] text-white/60 py-4 px-4 md:px-12 text-xs">
        <div className="max-w-7xl mx-auto flex gap-2">
          <a href="#" className="hover:text-white">home</a>
          <span>&gt;</span>
          <a href="#" className="hover:text-white">for talent</a>
          <span>&gt;</span>
          <a href="#" className="hover:text-white">randstad bridging futures program</a>
          <span>&gt;</span>
          <span className="text-white">register your institute</span>
        </div>
      </div>

      {/* Hero Section */}
      <section className="bg-[#05192d] text-white py-16 md:py-24 px-4 md:px-12 overflow-hidden">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-5xl md:text-7xl font-light leading-tight mb-8">
              randstad bridging futures program for institutes.
            </h1>
            <p className="text-lg md:text-xl text-white/80 leading-relaxed max-w-xl">
              We invite schools, colleges, universities, ITIs, polytechnics, and NGOs to join the Randstad Bridging Futures Program and become a priority partner with us. Our program is open to partnerships and collaborations across various educational and organizational platforms. To explore this opportunity further and receive a callback from our team, please submit your details below.
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative flex justify-center"
          >
            {/* Chain Graphic */}
            <svg viewBox="0 0 400 400" className="w-full max-w-md drop-shadow-2xl">
              <g transform="rotate(-30 200 200)">
                <rect x="100" y="150" width="120" height="60" rx="30" fill="none" stroke="#2196f3" strokeWidth="20" />
                <rect x="180" y="190" width="120" height="60" rx="30" fill="none" stroke="#4dabf5" strokeWidth="20" />
                <rect x="260" y="230" width="120" height="60" rx="30" fill="none" stroke="#90caf9" strokeWidth="20" />
              </g>
            </svg>
          </motion.div>
        </div>
      </section>

      {/* Registration Section */}
      <section className="bg-white py-20 px-4 md:px-12">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
          <h2 className="text-4xl md:text-6xl font-light text-[#05192d] max-w-2xl">
            register your institute & join our bridging futures program.
          </h2>
          <button className="border-2 border-[#2196f3] text-[#2196f3] px-8 py-4 rounded-md font-bold hover:bg-[#2196f3] hover:text-white transition-colors">
            register now
          </button>
        </div>
      </section>

      {/* Footer */}
      

      {/* Floating Feedback Button */}
      <div className="fixed right-0 top-1/2 -translate-y-1/2 z-50">
        <button className="bg-[#2196f3] text-white px-2 py-6 rounded-l-md text-xs font-bold [writing-mode:vertical-rl] rotate-180 flex items-center gap-2">
          Feedback
        </button>
      </div>

      {/* Cookie Icon */}
      <div className="fixed left-4 bottom-4 z-50">
        <button className="bg-[#2196f3] text-white p-3 rounded-full shadow-lg">
          <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current">
            <path d="M12,2A10,10,0,1,0,22,12,10,10,0,0,0,12,2Zm0,18a8,8,0,1,1,8-8A8,8,0,0,1,12,20ZM12,6a1.5,1.5,0,1,0,1.5,1.5A1.5,1.5,0,0,0,12,6Zm-4,4a1.5,1.5,0,1,0,1.5,1.5A1.5,1.5,0,0,0,8,10Zm8,0a1.5,1.5,0,1,0,1.5,1.5A1.5,1.5,0,0,0,16,10Zm-4,4a1.5,1.5,0,1,0,1.5,1.5A1.5,1.5,0,0,0,12,14Z" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default FortalentRegisterYourInstitute;
