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

const RandstadPage: React.FC = () => {
  return (
    <div className="min-h-screen font-sans text-[#05192d] bg-white">
      {/* Top Utility Bar */}
      <div className="border-bottom border-gray-100 py-2 px-4 md:px-12 flex justify-end text-xs font-medium text-gray-500">
        <a href="#" className="hover:underline">contact us</a>
      </div>

      {/* Header */}
      <header className="sticky top-0 z-50 bg-white border-b border-gray-100 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 md:px-12 h-20 flex items-center justify-between">
          <div className="flex items-center gap-8">
            {/* Logo */}
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 flex items-center justify-center">
                <svg viewBox="0 0 100 100" className="w-full h-full text-[#2196f3]">
                  <path d="M20 80 L20 20 Q20 10 30 10 L70 10 Q80 10 80 20 L80 80" fill="none" stroke="currentColor" strokeWidth="8" />
                  <path d="M40 80 L40 40 Q40 30 50 30 L60 30 Q70 30 70 40 L70 80" fill="none" stroke="currentColor" strokeWidth="8" />
                </svg>
              </div>
              <span className="text-2xl font-bold tracking-tight text-[#05192d]">randstad</span>
            </div>

            {/* Navigation */}
            <nav className="hidden lg:flex items-center gap-6 text-sm font-medium">
              <div className="flex items-center gap-1 cursor-pointer hover:text-[#2196f3]">
                find a job <ChevronDown size={14} />
              </div>
              <div className="flex items-center gap-1 cursor-pointer hover:text-[#2196f3]">
                for talent <ChevronDown size={14} />
              </div>
              <div className="flex items-center gap-1 cursor-pointer hover:text-[#2196f3]">
                for employer <ChevronDown size={14} />
              </div>
              <div className="flex items-center gap-1 cursor-pointer hover:text-[#2196f3]">
                resources <ChevronDown size={14} />
              </div>
              <div className="flex items-center gap-1 cursor-pointer hover:text-[#2196f3]">
                about us <ChevronDown size={14} />
              </div>
            </nav>
          </div>

          <div className="flex items-center gap-6">
            <div className="flex items-center gap-4 text-gray-600">
              <button className="hover:text-[#2196f3] flex items-center gap-1">
                <Heart size={20} />
                <span className="text-sm font-bold">0</span>
              </button>
              <button className="hover:text-[#2196f3] flex items-center gap-2">
                <User size={20} />
                <span className="text-sm font-bold">my randstad</span>
              </button>
            </div>
          </div>
        </div>
      </header>

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
      <footer className="bg-[#05192d] text-white pt-20 pb-12 px-4 md:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-12 mb-20">
            {/* Column 1 */}
            <div>
              <h3 className="font-bold text-lg mb-6">find a job</h3>
              <ul className="space-y-4 text-sm text-white/70">
                <li><a href="#" className="hover:text-white">explore all jobs</a></li>
                <li><a href="#" className="hover:text-white">submit your cv</a></li>
                <li><a href="#" className="hover:text-white">join our team</a></li>
                <li><a href="#" className="hover:text-white">refer a friend</a></li>
              </ul>
              <h3 className="font-bold text-lg mt-12 mb-6">for talents</h3>
              <ul className="space-y-4 text-sm text-white/70">
                <li><a href="#" className="hover:text-white">specialisms</a></li>
                <li><a href="#" className="hover:text-white">testimonials</a></li>
                <li><a href="#" className="hover:text-white">career advice</a></li>
                <li><a href="#" className="hover:text-white">beware of job scams</a></li>
              </ul>
            </div>

            {/* Column 2 */}
            <div>
              <h3 className="font-bold text-lg mb-6">for employers</h3>
              <ul className="space-y-4 text-sm text-white/70">
                <li><a href="#" className="hover:text-white">submit a vacancy</a></li>
                <li><a href="#" className="hover:text-white">request a callback</a></li>
                <li><a href="#" className="hover:text-white">our services</a></li>
                <li><a href="#" className="hover:text-white">specialisms</a></li>
                <li><a href="#" className="hover:text-white">case studies</a></li>
                <li><a href="#" className="hover:text-white">testimonials</a></li>
              </ul>
              <h3 className="font-bold text-lg mt-12 mb-6">resources</h3>
              <ul className="space-y-4 text-sm text-white/70">
                <li><a href="#" className="hover:text-white">case studies</a></li>
                <li><a href="#" className="hover:text-white">press room</a></li>
                <li><a href="#" className="hover:text-white">blogs</a></li>
              </ul>
            </div>

            {/* Column 3 */}
            <div>
              <h3 className="font-bold text-lg mb-6">workforce insights</h3>
              <ul className="space-y-4 text-sm text-white/70">
                <li><a href="#" className="hover:text-white">talent insights reports</a></li>
                <li><a href="#" className="hover:text-white">employer brand research reports</a></li>
                <li><a href="#" className="hover:text-white">salary trends reports</a></li>
                <li><a href="#" className="hover:text-white">ed&i reports</a></li>
                <li><a href="#" className="hover:text-white">workmonitor reports</a></li>
                <li><a href="#" className="hover:text-white">startup hiring trends</a></li>
                <li><a href="#" className="hover:text-white">talent pulse surveys</a></li>
              </ul>
            </div>

            {/* Column 4 */}
            <div>
              <h3 className="font-bold text-lg mb-6">jobs</h3>
              <ul className="space-y-4 text-sm text-white/70">
                <li><a href="#" className="hover:text-white">engineering jobs</a></li>
                <li><a href="#" className="hover:text-white">cxo jobs</a></li>
                <li><a href="#" className="hover:text-white">manufacturing jobs</a></li>
                <li><a href="#" className="hover:text-white">supply chain & logistics jobs</a></li>
                <li><a href="#" className="hover:text-white">education jobs</a></li>
                <li><a href="#" className="hover:text-white">finance & accounting jobs</a></li>
                <li><a href="#" className="hover:text-white">healthcare jobs</a></li>
                <li><a href="#" className="hover:text-white">hr & admin support jobs</a></li>
                <li><a href="#" className="hover:text-white">ites/gcc jobs</a></li>
                <li><a href="#" className="hover:text-white">legal & compliance jobs</a></li>
                <li><a href="#" className="hover:text-white">sales & marketing jobs</a></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-white/10 pt-12">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 mb-12">
              <div className="flex gap-4">
                <a href="#" className="bg-white/10 p-2 rounded-full hover:bg-white/20 transition-colors">
                  <Linkedin size={20} />
                </a>
                <a href="#" className="bg-white/10 p-2 rounded-full hover:bg-white/20 transition-colors">
                  <Twitter size={20} />
                </a>
                <a href="#" className="bg-white/10 p-2 rounded-full hover:bg-white/20 transition-colors">
                  <Facebook size={20} />
                </a>
                <a href="#" className="bg-white/10 p-2 rounded-full hover:bg-white/20 transition-colors">
                  <Youtube size={20} />
                </a>
                <a href="#" className="bg-white/10 p-2 rounded-full hover:bg-white/20 transition-colors">
                  <Instagram size={20} />
                </a>
              </div>
              <div className="text-xs text-white/50 max-w-2xl">
                registered office: Randstad India Private Limited, CIN U74210TN1992PTC023097,/Randstad House, Old No. 5 & 5A, New No. 9, Pycrofts Garden Road, Nungambakkam, Chennai, TN - 600 006
              </div>
            </div>

            <div className="flex items-center gap-2 mb-8">
              <span className="text-sm font-bold tracking-widest uppercase">randstad,</span>
              <div className="w-8 h-8">
                <svg viewBox="0 0 100 100" className="w-full h-full text-[#2196f3]">
                  <path d="M20 80 L20 20 Q20 10 30 10 L70 10 Q80 10 80 20 L80 80" fill="none" stroke="currentColor" strokeWidth="8" />
                  <path d="M40 80 L40 40 Q40 30 50 30 L60 30 Q70 30 70 40 L70 80" fill="none" stroke="currentColor" strokeWidth="8" />
                </svg>
              </div>
              <span className="text-xs text-white/60 uppercase tracking-tighter">human forward and shaping the world of work are registered trademarks of © Randstad N.V.2023</span>
            </div>

            <div className="space-y-6 text-xs text-white/50 mb-12">
              <p>
                Security Advice: Randstad India does not charge any fee at any stage of its recruitment process from the candidate nor allows their employees to collect any fees from any candidates. <a href="#" className="text-white/80 hover:underline">Click here to know more</a>
              </p>
              <p>
                EEO Statement: Randstad India is an Equal Employment Opportunity Employer. All qualified applicants receive consideration for employment without regard to race, color, religion, sex, sexual orientation, gender identity or expression, appearance, national origin, age, marital status, veteran status, or disability status, or any other characteristics. Our global mission is to become the world's most equitable and specialized talent company, and we actively embrace diversity and inclusion as the cornerstones of our success. To read more of Randstad India's work in the space of equity, diversity and inclusion please <a href="#" className="text-white/80 hover:underline">click here</a>
              </p>
            </div>

            <div className="flex flex-wrap gap-x-8 gap-y-4 text-xs text-white/70">
              <a href="#" className="hover:text-white">terms & conditions</a>
              <a href="#" className="hover:text-white">cookies</a>
              <a href="#" className="hover:text-white">misconduct reporting procedure</a>
              <a href="#" className="hover:text-white">accessibility</a>
              <a href="#" className="hover:text-white">be aware</a>
              <a href="#" className="hover:text-white">sitemap</a>
              <a href="#" className="hover:text-white">privacy statement</a>
            </div>
          </div>
        </div>
      </footer>

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

export default RandstadPage;
