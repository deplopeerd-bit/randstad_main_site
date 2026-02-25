import React, { useState } from "react";

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { 
  Search, 
  Heart, 
  User, 
  ChevronDown, 
  Linkedin, 
  Twitter, 
  Facebook, 
  Youtube, 
  Instagram,
  MessageSquare
} from 'lucide-react';

// Custom components for the replica
const Navbar = () => (
  <nav className="w-full bg-white border-b border-gray-100 px-4 md:px-12 py-4">
    <div className="max-w-[1440px] mx-auto flex flex-col gap-2">
      <div className="flex justify-end text-[12px] text-[#0d173c] gap-4 mb-1">
        <a href="#" className="hover:underline">contact us</a>
      </div>
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-12">
          {/* Randstad Logo Placeholder */}
          <div className="flex items-center">
            <svg width="140" height="32" viewBox="0 0 140 32" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12.5 8C12.5 8 10 5 7 5C4 5 2 7 2 10C2 13 4 15 7 15C10 15 12.5 12 12.5 12" stroke="#2478cc" strokeWidth="2.5" strokeLinecap="round"/>
              <path d="M18 5V15" stroke="#2478cc" strokeWidth="2.5" strokeLinecap="round"/>
              <text x="30" y="24" fill="#2478cc" style={{ font: 'bold 24px sans-serif' }}>randstad</text>
            </svg>
          </div>
          <div className="hidden lg:flex items-center gap-8 text-[15px] font-medium text-[#0d173c]">
            <div className="flex items-center gap-1 cursor-pointer hover:text-[#2478cc]">find a job <ChevronDown size={16} /></div>
            <div className="flex items-center gap-1 cursor-pointer hover:text-[#2478cc]">for talent <ChevronDown size={16} /></div>
            <div className="flex items-center gap-1 cursor-pointer hover:text-[#2478cc]">for employer <ChevronDown size={16} /></div>
            <div className="flex items-center gap-1 cursor-pointer hover:text-[#2478cc]">resources <ChevronDown size={16} /></div>
            <div className="flex items-center gap-1 cursor-pointer hover:text-[#2478cc]">about us <ChevronDown size={16} /></div>
          </div>
        </div>
        <div className="flex items-center gap-6 text-[15px] font-medium text-[#0d173c]">
          <div className="flex items-center gap-2 cursor-pointer">
            <Heart size={20} />
            <span>0</span>
          </div>
          <div className="flex items-center gap-2 cursor-pointer">
            <User size={20} className="bg-gray-100 rounded-full p-0.5" />
            <span>my randstad</span>
          </div>
        </div>
      </div>
    </div>
  </nav>
);

const Hero = () => (
  <section className="bg-[#0d173c] text-white px-4 md:px-12 py-16 md:py-24">
    <div className="max-w-[1440px] mx-auto">
      <div className="text-[13px] text-gray-400 mb-12 flex items-center gap-2">
        <span>home</span>
        <span>{'>'}</span>
        <span>hr news</span>
        <span>{'>'}</span>
        <span>workforce insights</span>
        <span>{'>'}</span>
        <span className="text-white">salary trends</span>
      </div>
      <h1 className="text-[48px] md:text-[64px] font-light leading-tight mb-8 tracking-tight">
        latest salary trends reports and analysis.
      </h1>
      <p className="text-[18px] md:text-[20px] max-w-[500px] font-light leading-relaxed text-gray-300">
        Explore the latest salary trends with our comprehensive reports. Get valuable insights into salary data, industry benchmarks, and compensation trends to stay informed and make data-driven decisions.
      </p>
    </div>
  </section>
);

const InfoSection = () => (
  <section className="bg-[#f5f2ed] px-4 md:px-12 py-20">
    <div className="max-w-[1440px] mx-auto grid grid-cols-1 md:grid-cols-12 gap-8">
      <div className="md:col-span-4">
        <h2 className="text-[28px] text-[#0d173c] font-light leading-tight">
          what's in the salary trends reports.
        </h2>
      </div>
      <div className="md:col-span-8">
        <p className="text-[16px] text-[#0d173c] leading-relaxed font-light">
          The Randstad Salary Trends Reports reflects trends positively across locations, industries and functions, as Indian businesses surge confidently towards growth. It is both a barometer of Corporate India’s strong business performance — and, more importantly, of a future forward vision of building a resilient workforce, and balancing the impact of cost and demand for talent with the right investment in talent.
        </p>
      </div>
    </div>
  </section>
);

const AccordionItem = ({ title }: { title: string }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="border-b border-gray-200 py-6">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between text-left group"
      >
        <span className="text-[20px] text-[#0d173c] font-light group-hover:text-[#2478cc] transition-colors">
          {title}
        </span>
        <ChevronDown 
          className={`text-[#2478cc] transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} 
          size={24} 
        />
      </button>
      {isOpen && (
        <div className="mt-4 text-gray-600 font-light">
          Report details and download options would appear here.
        </div>
      )}
    </div>
  );
};

const ReportsSection = () => (
  <section className="bg-white px-4 md:px-12 py-20">
    <div className="max-w-[1440px] mx-auto grid grid-cols-1 md:grid-cols-12 gap-8">
      <div className="md:col-span-4">
        <h2 className="text-[28px] text-[#0d173c] font-light leading-tight">
          randstad salary trends reports.
        </h2>
      </div>
      <div className="md:col-span-8">
        <div className="flex flex-col">
          <AccordionItem title="annual salary trends report - 2025-2026" />
          <AccordionItem title="annual salary trends report - 2024-2025" />
          <AccordionItem title="annual salary trends report - 2023-2024" />
          <AccordionItem title="annual salary trends report - 2022" />
          <AccordionItem title="annual salary trends report - 2021" />
        </div>
      </div>
    </div>
  </section>
);

const Footer = () => (
  <footer className="bg-[#0d173c] text-white px-4 md:px-12 pt-20 pb-10">
    <div className="max-w-[1440px] mx-auto">
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-12 mb-20">
        <div className="flex flex-col gap-4">
          <h3 className="text-[18px] font-medium mb-2">find a job</h3>
          <ul className="flex flex-col gap-3 text-[14px] text-gray-400 font-light">
            <li className="hover:text-white cursor-pointer">explore all jobs</li>
            <li className="hover:text-white cursor-pointer">submit your cv</li>
            <li className="hover:text-white cursor-pointer">join our team</li>
            <li className="hover:text-white cursor-pointer">refer a friend</li>
          </ul>
          <h3 className="text-[18px] font-medium mt-8 mb-2">for talents</h3>
          <ul className="flex flex-col gap-3 text-[14px] text-gray-400 font-light">
            <li className="hover:text-white cursor-pointer">specialisms</li>
            <li className="hover:text-white cursor-pointer">testimonials</li>
            <li className="hover:text-white cursor-pointer">career advice</li>
            <li className="hover:text-white cursor-pointer">beware of job scams</li>
          </ul>
        </div>

        <div className="flex flex-col gap-4">
          <h3 className="text-[18px] font-medium mb-2">for employers</h3>
          <ul className="flex flex-col gap-3 text-[14px] text-gray-400 font-light">
            <li className="hover:text-white cursor-pointer">submit a vacancy</li>
            <li className="hover:text-white cursor-pointer">request a callback</li>
            <li className="hover:text-white cursor-pointer">our services</li>
            <li className="hover:text-white cursor-pointer">specialisms</li>
            <li className="hover:text-white cursor-pointer">case studies</li>
            <li className="hover:text-white cursor-pointer">testimonials</li>
          </ul>
          <h3 className="text-[18px] font-medium mt-8 mb-2">resources</h3>
          <ul className="flex flex-col gap-3 text-[14px] text-gray-400 font-light">
            <li className="hover:text-white cursor-pointer">case studies</li>
            <li className="hover:text-white cursor-pointer">press room</li>
            <li className="hover:text-white cursor-pointer">blogs</li>
          </ul>
        </div>

        <div className="flex flex-col gap-4">
          <h3 className="text-[18px] font-medium mb-2">workforce insights</h3>
          <ul className="flex flex-col gap-3 text-[14px] text-gray-400 font-light">
            <li className="hover:text-white cursor-pointer">talent insights reports</li>
            <li className="hover:text-white cursor-pointer">employer brand research reports</li>
            <li className="hover:text-white cursor-pointer">salary trends reports</li>
            <li className="hover:text-white cursor-pointer">ed&i reports</li>
            <li className="hover:text-white cursor-pointer">workmonitor reports</li>
            <li className="hover:text-white cursor-pointer">startup hiring trends</li>
            <li className="hover:text-white cursor-pointer">talent pulse surveys</li>
          </ul>
        </div>

        <div className="flex flex-col gap-4">
          <h3 className="text-[18px] font-medium mb-2">jobs</h3>
          <ul className="flex flex-col gap-3 text-[14px] text-gray-400 font-light">
            <li className="hover:text-white cursor-pointer">engineering jobs</li>
            <li className="hover:text-white cursor-pointer">cxo jobs</li>
            <li className="hover:text-white cursor-pointer">manufacturing jobs</li>
            <li className="hover:text-white cursor-pointer">supply chain & logistics jobs</li>
            <li className="hover:text-white cursor-pointer">education jobs</li>
            <li className="hover:text-white cursor-pointer">finance & accounting jobs</li>
            <li className="hover:text-white cursor-pointer">healthcare jobs</li>
            <li className="hover:text-white cursor-pointer">hr & admin support jobs</li>
            <li className="hover:text-white cursor-pointer">ites/gcc jobs</li>
            <li className="hover:text-white cursor-pointer">legal & compliance jobs</li>
            <li className="hover:text-white cursor-pointer">sales & marketing jobs</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-gray-800 pt-10">
        <div className="flex flex-wrap items-center gap-6 mb-8">
          <Linkedin size={24} className="text-gray-400 hover:text-white cursor-pointer" />
          <Twitter size={24} className="text-gray-400 hover:text-white cursor-pointer" />
          <Facebook size={24} className="text-gray-400 hover:text-white cursor-pointer" />
          <Youtube size={24} className="text-gray-400 hover:text-white cursor-pointer" />
          <Instagram size={24} className="text-gray-400 hover:text-white cursor-pointer" />
        </div>

        <p className="text-[12px] text-gray-500 mb-6 font-light">
          registered office: Randstad India Private Limited, CIN U74210TN1992PTC023097,/Randstad House, Old No. 5 & 5A, New No. 9, Pycrofts Garden Road, Nungambakkam, Chennai, TN - 600 006
        </p>

        <div className="flex items-center gap-4 mb-10">
          <span className="text-[12px] text-gray-400">RANDSTAD,</span>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 4C12 4 10 2 8 2C6 2 4 4 4 6C4 8 6 10 8 10C10 10 12 8 12 8" stroke="#2478cc" strokeWidth="2" strokeLinecap="round"/>
          </svg>
          <span className="text-[10px] text-gray-500 uppercase tracking-wider">HUMAN FORWARD and SHAPING THE WORLD OF WORK are registered trademarks of © Randstad N.V.2023</span>
        </div>

        <div className="text-[12px] text-gray-400 font-light leading-relaxed mb-12 flex flex-col gap-4">
          <p>
            <span className="font-medium text-gray-300">Security Advice:</span> Randstad India does not charge any fee at any stage of its recruitment process from the candidate nor allows their employees to collect any fees from any candidates. <a href="#" className="text-[#2478cc] hover:underline">Click here to know more</a>
          </p>
          <p>
            <span className="font-medium text-gray-300">EEO Statement:</span> Randstad India is an Equal Employment Opportunity Employer. All qualified applicants receive consideration for employment without regard to race, color, religion, sex, sexual orientation, gender identity or expression, appearance, national origin, age, marital status, veteran status, or disability status, or any other characteristics. Our global mission is to become the world’s most equitable and specialized talent company, and we actively embrace diversity and inclusion as the cornerstones of our success. To read more of Randstad India’s work in the space of equity, diversity and inclusion please <a href="#" className="text-[#2478cc] hover:underline">click here</a>
          </p>
        </div>

        <div className="flex flex-wrap gap-x-8 gap-y-4 text-[12px] text-gray-400 font-light">
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
);

const FeedbackButton = () => (
  <div className="fixed right-0 top-1/2 -translate-y-1/2 z-50">
    <button className="bg-[#2478cc] text-white px-3 py-6 rounded-l-md flex flex-col items-center gap-2 text-[12px] font-medium vertical-text">
      <span className="rotate-90 origin-center whitespace-nowrap">Feedback</span>
    </button>
  </div>
);

const CookieIcon = () => (
  <div className="fixed left-6 bottom-6 z-50">
    <button className="bg-[#2478cc] text-white p-3 rounded-full shadow-lg hover:scale-110 transition-transform">
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2a10 10 0 1 0 10 10 4 4 0 0 1-5-5 4 4 0 0 1-5-5" />
        <path d="M8.5 8.5v.01" />
        <path d="M16 15.5v.01" />
        <path d="M12 12v.01" />
        <path d="M11 17v.01" />
        <path d="M7 14v.01" />
      </svg>
    </button>
  </div>
);

export default function ResSalary() {
  return (
    <div className="min-h-screen font-sans selection:bg-[#2478cc] selection:text-white">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700&display=swap');
        body {
          font-family: 'Inter', sans-serif;
        }
        .vertical-text {
          writing-mode: vertical-rl;
          text-orientation: mixed;
        }
      `}</style>
      
      
      <main>
        <Hero />
        <InfoSection />
        <ReportsSection />
      </main>
   
      
      <FeedbackButton />
      <CookieIcon />
    </div>
  );
}
