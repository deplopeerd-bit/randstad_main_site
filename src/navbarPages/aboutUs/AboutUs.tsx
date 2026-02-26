import React, { useState } from "react";
import { AnimatePresence, motion } from "motion/react";

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { 
  Heart, 
  User, 
  ChevronDown, 
  ChevronRight, 
  Linkedin, 
  Twitter, 
  Facebook, 
  Youtube, 
  Instagram,
  Search,
  Menu,
  X
} from 'lucide-react';

const Navbar = () => {
  return (
    <header className="w-full bg-white border-b border-gray-100 sticky top-0 z-50">
      <div className="max-w-[1440px] mx-auto px-4 md:px-8 h-20 flex items-center justify-between">
        <div className="flex items-center gap-8">
          <a href="/" className="flex-shrink-0">
            <svg width="160" height="40" viewBox="0 0 160 40" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12.5 10C12.5 4.47715 16.9772 0 22.5 0H37.5C43.0228 0 47.5 4.47715 47.5 10V25C47.5 30.5228 43.0228 35 37.5 35H22.5C16.9772 35 12.5 30.5228 12.5 25V10Z" fill="#2175D9"/>
              <path d="M0 10C0 4.47715 4.47715 0 10 0H15V35H10C4.47715 35 0 30.5228 0 25V10Z" fill="#00C1F3"/>
              <text x="55" y="28" fill="#2175D9" style={{ font: 'bold 24px Inter' }}>randstad</text>
            </svg>
          </a>
          <nav className="hidden lg:flex items-center gap-6">
            {['find a job', 'for talent', 'for employer', 'resources', 'about us'].map((item) => (
              <a key={item} href="#" className="text-[15px] font-medium text-randstad-navy hover:text-randstad-blue flex items-center gap-1">
                {item}
                <ChevronDown size={14} />
              </a>
            ))}
          </nav>
        </div>
        <div className="flex items-center gap-6">
          <div className="hidden md:flex items-center gap-6 text-[14px] font-medium">
            <a href="#" className="text-gray-500 hover:text-randstad-blue">contact us</a>
            <div className="flex items-center gap-4">
              <a href="#" className="flex items-center gap-1 hover:text-randstad-blue">
                <Heart size={18} />
                <span>0</span>
              </a>
              <a href="#" className="flex items-center gap-1 hover:text-randstad-blue">
                <User size={18} />
                <span>my randstad</span>
              </a>
            </div>
          </div>
          <button className="lg:hidden">
            <Menu size={24} />
          </button>
        </div>
      </div>
    </header>
  );
};

const Breadcrumbs = () => (
  <div className="bg-[#f5f2ed] py-4">
    <div className="max-w-[1440px] mx-auto px-4 md:px-8">
      <nav className="flex items-center gap-2 text-[13px] text-gray-500">
        <a href="#" className="hover:underline">home</a>
        <ChevronRight size={12} />
        <a href="#" className="hover:underline">about us</a>
        <ChevronRight size={12} />
        <span className="text-randstad-navy">our history</span>
      </nav>
      <h1 className="mt-8 text-[48px] md:text-[64px] font-light leading-tight tracking-tight">
        the randstad story <br />
        <span className="text-randstad-blue italic">a legacy of 65 years.</span>
      </h1>
    </div>
  </div>
);

const Hero = () => (
  <section className="bg-randstad-navy text-white py-24 overflow-hidden">
    <div className="max-w-[1440px] mx-auto px-4 md:px-8 flex flex-col md:flex-row items-center justify-between gap-12">
      <div className="max-w-2xl">
        <h2 className="text-[48px] md:text-[64px] font-light leading-[1.1] mb-8">
          share your story <br />
          and support world <br />
          bicycle relief.
        </h2>
        <p className="text-[18px] leading-relaxed mb-12 opacity-90 max-w-xl">
          We help people on their journey to a meaningful job. Maybe we even helped you! To celebrate our 60th anniversary we will donate to World Bicycle Relief on your behalf for those who need it most. Simply share your unique story with us.
        </p>
        <button className="px-12 py-4 border-2 border-white rounded-md text-[16px] font-medium hover:bg-white hover:text-randstad-navy transition-all duration-300">
          learn more
        </button>
      </div>
      <div className="relative w-full md:w-1/2 flex justify-center">
        <svg width="480" height="360" viewBox="0 0 400 300" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full max-w-[500px]">
          <circle cx="120" cy="200" r="45" stroke="white" strokeWidth="6"/>
          <circle cx="280" cy="200" r="45" stroke="white" strokeWidth="6"/>
          <path d="M120 200L180 120H260L280 200" stroke="white" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M180 120L160 80H200" stroke="white" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M260 120L280 140" stroke="white" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M180 120L120 200" stroke="white" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M220 120V200" stroke="white" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </div>
    </div>
  </section>
);

const Timeline = () => (
  <section className="py-32 bg-white overflow-hidden">
    <div className="max-w-[1440px] mx-auto px-4 md:px-8">
      <h2 className="text-[48px] font-light mb-20">our story.</h2>
      <div className="relative w-full overflow-x-auto pb-20 scrollbar-hide">
        <div className="min-w-[1400px] h-[600px] relative bg-[#fcfbf9] rounded-2xl p-12">
          <svg width="1300" height="500" viewBox="0 0 1300 500" fill="none" xmlns="http://www.w3.org/2000/svg" className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            <path 
              d="M50 250C150 250 150 100 250 100C350 100 350 400 450 400C550 400 550 100 650 100C750 100 750 400 850 400C950 400 950 100 1050 100C1150 100 1150 250 1250 250" 
              stroke="#2175D9" 
              strokeWidth="10" 
              strokeLinecap="round"
            />
            {[
              { x: 50, y: 250, year: '1960', text: 'Uitzendbureau Amstelveen founded in the Netherlands.' },
              { x: 150, y: 175, year: '1964', text: 'The company takes a new name: Randstad Uitzendbureau.' },
              { x: 250, y: 100, year: '1967', text: 'Randstad has 32 branches in 4 countries.' },
              { x: 350, y: 250, year: '1983', text: 'Staffing agency Tempo-Team acquired.' },
              { x: 450, y: 400, year: '1985', text: 'Randstad celebrates its silver jubilee; 257 branches in four countries.' },
              { x: 550, y: 250, year: '1990', text: 'Randstad shares are listed on the Amsterdam Stock Exchange.' },
              { x: 650, y: 100, year: '1996', text: 'Randstad deploys 16,000 staffing employees at the Olympic Games, Atlanta.' },
              { x: 750, y: 250, year: '2007', text: 'Randstad is present in 20 countries, promoted to the AEX index.' },
              { x: 850, y: 400, year: '2008', text: 'Randstad & Vedior join forces becoming the 2nd largest HR services provider worldwide.' },
              { x: 950, y: 250, year: '2011', text: 'Randstad acquires SFN Group. The combination creates the No. 3 HR services provider in North America.' },
              { x: 1050, y: 100, year: '2017', text: 'Randstad acquires BMC and Ausy to strengthen the European Professionals business.' },
              { x: 1150, y: 175, year: '2023', text: 'Randstad sets out Partner for Talent strategy to be the world\'s most equitable and specialized talent company.' },
              { x: 1250, y: 250, year: '2024', text: 'Acquisition of Torc and Zorgwerk; Monster-CareerBuilder Joint Venture.' },
            ].map((marker, i) => (
              <g key={i}>
                <circle cx={marker.x} cy={marker.y} r="8" fill="white" stroke="#2175D9" strokeWidth="3" />
                <text x={marker.x} y={i % 2 === 0 ? marker.y - 25 : marker.y + 35} textAnchor="middle" fill="#0c193a" className="text-[14px] font-bold">{marker.year}</text>
                <foreignObject x={marker.x - 60} y={i % 2 === 0 ? marker.y - 100 : marker.y + 45} width="120" height="80">
                  <p className="text-[10px] text-center text-gray-500 leading-tight">{marker.text}</p>
                </foreignObject>
              </g>
            ))}
          </svg>
        </div>
      </div>
    </div>
  </section>
);

const Beginnings = () => (
  <section className="flex flex-col md:flex-row min-h-[700px]">
    <div className="w-full md:w-1/2 relative overflow-hidden group">
      <img 
        src="https://picsum.photos/seed/beginnings/1000/1000" 
        alt="The Beginnings" 
        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        referrerPolicy="no-referrer"
      />
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="flex gap-4">
          <div className="w-16 h-16 rounded-full bg-randstad-blue/40 backdrop-blur-sm" />
          <div className="w-16 h-16 rounded-full bg-white shadow-xl" />
          <div className="w-16 h-16 rounded-full bg-randstad-navy/40 backdrop-blur-sm" />
          <div className="w-16 h-16 rounded-full bg-randstad-light-blue/40 backdrop-blur-sm" />
        </div>
      </div>
    </div>
    <div className="w-full md:w-1/2 bg-[#f5f2ed] p-16 md:p-32 flex flex-col justify-center">
      <h2 className="text-[56px] font-light mb-10 leading-tight">the beginnings.</h2>
      <p className="text-[20px] leading-relaxed text-gray-700 max-w-lg">
        When we began our journey in 1960, it was just two men and an old bicycle. Over the last 59 years, their vision would see Randstad transform from those humble beginnings to one of the largest recruitment firms in the world.
      </p>
    </div>
  </section>
);

const IndiaStory = () => (
  <section className="flex flex-col md:flex-row-reverse min-h-[700px]">
    <div className="w-full md:w-1/2 relative overflow-hidden group">
      <img 
        src="https://picsum.photos/seed/india-story/1000/1000" 
        alt="Randstad India Story" 
        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        referrerPolicy="no-referrer"
      />
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-80 h-80 border-[16px] border-randstad-light-blue rounded-full opacity-60 animate-pulse" />
      </div>
    </div>
    <div className="w-full md:w-1/2 bg-randstad-blue text-white p-16 md:p-32 flex flex-col justify-center">
      <h2 className="text-[56px] font-light mb-10 leading-tight">the Randstad India story.</h2>
      <p className="text-[20px] leading-relaxed opacity-90 max-w-lg">
        Randstad firmly established an Indian presence by acquiring Ma Foi in 2008. Today, with presence across 22 cities, Randstad is a leading HR service provider in India.
      </p>
    </div>
  </section>
);

const AccordionItem = ({ title, content }: { title: string, content: string }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="border-b border-gray-200">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full py-6 flex items-center justify-between text-left hover:bg-gray-50 transition-colors px-4"
      >
        <span className="text-[20px] font-medium">{title}</span>
        <ChevronDown className={`transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden"
          >
            <div className="p-6 text-gray-600 leading-relaxed">
              {content}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const IndiaStoryAccordion = () => (
  <section className="py-24 bg-white">
    <div className="max-w-[1440px] mx-auto px-4 md:px-8 flex flex-col md:flex-row gap-16">
      <div className="w-full md:w-1/3">
        <h2 className="text-[40px] font-light leading-tight">the india story so far.</h2>
      </div>
      <div className="w-full md:w-2/3">
        <AccordionItem title="1992" content="Ma Foi Management Consultants was founded in Chennai, India." />
        <AccordionItem title="2004" content="Ma Foi expands its operations across major Indian cities and enters international markets." />
        <AccordionItem title="2005-2006" content="Ma Foi becomes the largest HR service provider in India." />
        <AccordionItem title="2008" content="Randstad acquires Ma Foi, marking its entry into the Indian market." />
        <AccordionItem title="2012" content="Ma Foi is rebranded as Randstad India, fully integrating with the global brand." />
      </div>
    </div>
  </section>
);

const WhereWeStand = () => (
  <section className="flex flex-col md:flex-row min-h-[700px]">
    <div className="w-full md:w-1/2 bg-[#f5f2ed] p-16 md:p-32 flex flex-col justify-center">
      <h2 className="text-[56px] font-light mb-10 leading-tight">where we stand <br /> today.</h2>
      <ul className="space-y-6 mb-12">
        {[
          '28 year legacy in India',
          '57K+ temporary workers on-site daily',
          'Over 500K perm placements to date',
          '1400+ clients in diverse industries across India'
        ].map((item) => (
          <li key={item} className="flex items-start gap-4 text-[20px] text-gray-700">
            <div className="w-2 h-2 rounded-full bg-randstad-blue mt-3 flex-shrink-0" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
      <button className="w-fit px-12 py-4 border-2 border-randstad-navy rounded-md text-[16px] font-medium hover:bg-randstad-navy hover:text-white transition-all duration-300">
        talk to us
      </button>
    </div>
    <div className="w-full md:w-1/2 relative overflow-hidden group">
      <img 
        src="https://picsum.photos/seed/stand-today/1000/1000" 
        alt="Where we stand today" 
        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        referrerPolicy="no-referrer"
      />
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-96 h-96 border-[1px] border-randstad-blue rounded-full opacity-30 scale-110" />
        <div className="absolute w-72 h-72 border-[16px] border-randstad-blue rounded-full opacity-50" />
      </div>
    </div>
  </section>
);

const BusinessPrinciples = () => (
  <section className="bg-randstad-navy text-white py-32">
    <div className="max-w-[1440px] mx-auto px-4 md:px-8 flex flex-col md:flex-row items-center gap-20">
      <div className="w-full md:w-1/2">
        <h2 className="text-[56px] font-light mb-10 leading-tight">business <br /> principles</h2>
        <p className="text-[20px] leading-relaxed mb-12 opacity-90 max-w-lg">
          Randstad's business principles are based on our core values. They project a positive message, help us live up to our values, and ensure that the needs of the world in which we work, as well as our business and personal behavior, are well aligned and reinforce one another.
        </p>
        <button className="px-12 py-4 border-2 border-white rounded-md text-[16px] font-medium hover:bg-white hover:text-randstad-navy transition-all duration-300">
          know more
        </button>
      </div>
      <div className="w-full md:w-1/2 flex justify-center">
        <div className="relative flex items-center justify-center h-[450px] w-full">
          <div className="relative flex items-center">
            {/* Human figures SVG */}
            <svg width="400" height="300" viewBox="0 0 400 300" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M100 150C100 122.386 122.386 100 150 100C177.614 100 200 122.386 200 150V250H100V150Z" fill="#2175D9" fillOpacity="0.4"/>
              <path d="M150 150C150 122.386 172.386 100 200 100C227.614 100 250 122.386 250 150V250H150V150Z" fill="white"/>
              <path d="M200 150C200 122.386 222.386 100 250 100C277.614 100 300 122.386 300 150V250H200V150Z" fill="#00C1F3" fillOpacity="0.4"/>
              <circle cx="150" cy="70" r="30" fill="#2175D9" fillOpacity="0.4"/>
              <circle cx="200" cy="70" r="35" fill="white"/>
              <circle cx="250" cy="70" r="30" fill="#00C1F3" fillOpacity="0.4"/>
            </svg>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const Strategy = () => (
  <section className="bg-white py-32">
    <div className="max-w-[1440px] mx-auto px-4 md:px-8 flex flex-col md:flex-row-reverse items-center gap-20">
      <div className="w-full md:w-1/2">
        <h2 className="text-[56px] font-light mb-10 leading-tight">our strategy.</h2>
        <p className="text-[20px] leading-relaxed mb-12 text-gray-700 max-w-lg">
          Our brand definition reflects our strategy. It adds focus to the way we want our brand to be experienced. A strong, purpose-driven brand also helps drive commercial success.
        </p>
        <button className="px-12 py-4 border-2 border-randstad-blue text-randstad-blue rounded-md text-[16px] font-medium hover:bg-randstad-blue hover:text-white transition-all duration-300">
          know more
        </button>
      </div>
      <div className="w-full md:w-1/2 flex justify-center">
        <div className="relative h-[450px] w-full flex items-center justify-center">
          {/* Pencils SVG */}
          <svg width="400" height="400" viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg" className="transform rotate-[-15deg]">
            <rect x="100" y="50" width="40" height="250" rx="20" fill="#00C1F3" fillOpacity="0.2"/>
            <rect x="160" y="80" width="40" height="250" rx="20" fill="#2175D9" fillOpacity="0.4"/>
            <rect x="220" y="110" width="40" height="250" rx="20" fill="#2175D9"/>
            <path d="M100 300L120 340L140 300H100Z" fill="#00C1F3" fillOpacity="0.2"/>
            <path d="M160 330L180 370L200 330H160Z" fill="#2175D9" fillOpacity="0.4"/>
            <path d="M220 360L240 400L260 360H220Z" fill="#2175D9"/>
          </svg>
        </div>
      </div>
    </div>
  </section>
);

const Footer = () => {
  const footerLinks = [
    {
      title: 'find a job',
      links: ['explore all jobs', 'submit your cv', 'join our team', 'refer a friend']
    },
    {
      title: 'for talents',
      links: ['specialisms', 'testimonials', 'career advice', 'beware of job scams']
    },
    {
      title: 'for employers',
      links: ['submit a vacancy', 'request a callback', 'our services', 'specialisms', 'case studies', 'testimonials']
    },
    {
      title: 'resources',
      links: ['case studies', 'press room', 'blogs']
    },
    {
      title: 'workforce insights',
      links: ['talent insights reports', 'employer brand research reports', 'salary trends reports', 'ed&i reports', 'workmonitor reports', 'startup hiring trends', 'talent pulse surveys']
    },
    {
      title: 'jobs',
      links: ['engineering jobs', 'cxo jobs', 'manufacturing jobs', 'supply chain & logistics jobs', 'education jobs', 'finance & accounting jobs', 'healthcare jobs', 'hr & admin support jobs', 'ites/gcc jobs', 'legal & compliance jobs', 'sales & marketing jobs']
    }
  ];

  return (
    <footer className="bg-randstad-navy text-white pt-24 pb-12">
      <div className="max-w-[1440px] mx-auto px-4 md:px-8">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-x-8 gap-y-12 mb-24">
          {footerLinks.map((section) => (
            <div key={section.title}>
              <h4 className="text-[16px] font-bold mb-8 uppercase tracking-wider">{section.title}</h4>
              <ul className="space-y-4">
                {section.links.map((link) => (
                  <li key={link}>
                    <a href="#" className="text-[14px] opacity-60 hover:opacity-100 hover:text-randstad-light-blue transition-all duration-300">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between gap-10 border-t border-white/10 pt-12 mb-12">
          <div className="flex items-center gap-6">
            {[Linkedin, Twitter, Facebook, Youtube, Instagram].map((Icon, i) => (
              <a key={i} href="#" className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center hover:bg-white hover:text-randstad-navy transition-all duration-300">
                <Icon size={20} />
              </a>
            ))}
          </div>
          <div className="text-[13px] opacity-40 text-center md:text-right max-w-2xl leading-relaxed">
            registered office: Randstad India Private Limited, CIN U74210TN1992PTC023097,/Randstad House, Old No. 5 & 5A, New No. 9, Pycrofts Garden Road, Nungambakkam, Chennai, TN - 600 006
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between gap-8 border-t border-white/10 pt-12">
          <div className="flex flex-col md:flex-row items-center gap-6">
            <svg width="140" height="35" viewBox="0 0 160 40" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12.5 10C12.5 4.47715 16.9772 0 22.5 0H37.5C43.0228 0 47.5 4.47715 47.5 10V25C47.5 30.5228 43.0228 35 37.5 35H22.5C16.9772 35 12.5 30.5228 12.5 25V10Z" fill="white"/>
              <path d="M0 10C0 4.47715 4.47715 0 10 0H15V35H10C4.47715 35 0 30.5228 0 25V10Z" fill="#00C1F3"/>
              <text x="55" y="28" fill="white" style={{ font: 'bold 24px Inter' }}>randstad</text>
            </svg>
            <span className="text-[11px] opacity-30 uppercase tracking-widest text-center md:text-left">
              HUMAN FORWARD and SHAPING THE WORLD OF WORK are registered trademarks of © Randstad N.V.2023
            </span>
          </div>
          <div className="flex flex-wrap justify-center gap-6 text-[13px] opacity-60">
            {['terms & conditions', 'cookies', 'misconduct reporting procedure', 'accessibility', 'be aware', 'sitemap', 'privacy statement'].map((item) => (
              <a key={item} href="#" className="hover:text-randstad-light-blue transition-colors">{item}</a>
            ))}
          </div>
        </div>

        <div className="mt-20 p-8 bg-white/5 rounded-xl text-[14px] opacity-70 leading-relaxed">
          <p className="mb-6">
            <span className="font-bold text-white">Security Advice:</span> Randstad India does not charge any fee at any stage of its recruitment process from the candidate nor allows their employees to collect any fees from any candidates. <a href="#" className="text-randstad-light-blue underline hover:text-white transition-colors">Click here to know more</a>
          </p>
          <p>
            <span className="font-bold text-white">EEO Statement:</span> Randstad India is an Equal Employment Opportunity Employer. All qualified applicants receive consideration for employment without regard to race, color, religion, sex, sexual orientation, gender identity or expression, appearance, national origin, age, marital status, veteran status, or disability status, or any other characteristics. Our global mission is to become the world's most equitable and specialized talent company, and we actively embrace diversity and inclusion as the cornerstones of our success. To read more of Randstad India's work in the space of equity, diversity and inclusion please <a href="#" className="text-randstad-light-blue underline hover:text-white transition-colors">click here</a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default function AboutUs() {
  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-grow">
        <Breadcrumbs />
        <Hero />
        <Timeline />
        <Beginnings />
        <IndiaStory />
        <IndiaStoryAccordion />
        <WhereWeStand />
        <BusinessPrinciples />
        <Strategy />
      </main>
      
      {/* Floating Feedback Button */}
      <div className="fixed right-0 top-1/2 -translate-y-1/2 z-40 hidden lg:block">
        <button className="bg-randstad-blue text-white py-4 px-2 rounded-l-md [writing-mode:vertical-rl] text-[14px] font-medium tracking-wider">
          Feedback
        </button>
      </div>

      {/* Cookie Consent Icon */}
      <div className="fixed bottom-6 left-6 z-40">
        <button className="w-12 h-12 bg-randstad-blue text-white rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform">
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
    </div>
  );
}
