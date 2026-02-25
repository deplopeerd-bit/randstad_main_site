import React, { useState } from "react";
import { AnimatePresence, motion } from "motion/react";

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { 
  ChevronDown, 
  Heart, 
  User, 
  Linkedin, 
  Facebook, 
  Youtube, 
  Instagram,
  Search
} from 'lucide-react';

// Custom X icon (formerly Twitter)
const XIcon = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true" className="w-5 h-5 fill-current">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path>
  </svg>
);

// Randstad Logo SVG
const RandstadLogo = () => (
  <svg width="156" height="36" viewBox="0 0 156 36" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M14.8 11.2C14.8 11.2 19.2 11.2 19.2 15.6C19.2 20 14.8 20 14.8 20H8V28.8H3.6V11.2H14.8ZM8 15.6V15.6H14.8C14.8 15.6 14.8 15.6 14.8 15.6C14.8 15.6 14.8 15.6 14.8 15.6H8ZM26.4 11.2H30.8V28.8H26.4V11.2ZM39.6 11.2H44V28.8H39.6V11.2ZM52.8 11.2H57.2V28.8H52.8V11.2ZM66 11.2H70.4V28.8H66V11.2ZM79.2 11.2H83.6V28.8H79.2V11.2ZM92.4 11.2H96.8V28.8H92.4V11.2ZM105.6 11.2H110V28.8H105.6V11.2ZM118.8 11.2H123.2V28.8H118.8V11.2ZM132 11.2H136.4V28.8H132V11.2Z" fill="#2175D9"/>
    <text x="0" y="28" fontFamily="Inter, sans-serif" fontWeight="700" fontSize="26" fill="#2175D9" letterSpacing="-1">randstad</text>
  </svg>
);

const AccordionItem = ({ title }: { title: string; key?: React.Key }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-[#e5e5e5]">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full py-[26px] flex justify-between items-center text-left hover:text-randstad-blue transition-colors group"
      >
        <span className="text-[22px] leading-[1.3] font-normal text-[#333333] group-hover:text-randstad-blue">
          {title}
        </span>
        <ChevronDown 
          className={`w-6 h-6 text-randstad-blue transition-transform duration-300 ease-in-out ${isOpen ? 'rotate-180' : ''}`} 
        />
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
            className="overflow-hidden"
          >
            <div className="pb-8 text-[#666666] text-[16px] leading-relaxed">
              This section provides detailed insights and data regarding "{title}". Randstad's Talent Pulse surveys help organizations stay ahead of workforce trends by capturing the evolving expectations of talent across various sectors in India.
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default function App() {
  const navItems = [
    { name: 'find a job', hasDropdown: true },
    { name: 'for talent', hasDropdown: true },
    { name: 'for employer', hasDropdown: true },
    { name: 'resources', hasDropdown: true },
    { name: 'about us', hasDropdown: true },
  ];

  const surveyItems = [
    "2020 vs. 2025 – have we accelerated action for women in the workforce?",
    "india’s on-demand workforce: evolving expectations and employer imperatives.",
    "AI and disability equity: bridging gaps, empowering inclusion",
    "AI and workplace equity",
    "quiet hiring pulse survey",
    "4-day work week",
    "randstad india workmonitor survey"
  ];

  const footerLinks = {
    "find a job": ["explore all jobs", "submit your cv", "join our team", "refer a friend"],
    "for talent": ["specialisms", "testimonials", "career advice", "beware of job scams"],
    "for employers": ["submit a vacancy", "request a callback", "our services", "specialisms", "case studies", "testimonials"],
    "resources": ["case studies", "press room", "blogs"],
    "workforce insights": [
      "talent insights reports", 
      "employer brand research reports", 
      "salary trends reports", 
      "ed&i reports", 
      "workmonitor reports", 
      "startup hiring trends", 
      "talent pulse surveys"
    ],
    "jobs": [
      "engineering jobs", "cxo jobs", "manufacturing jobs", "supply chain & logistics jobs",
      "education jobs", "finance & accounting jobs", "healthcare jobs", "hr & admin support jobs",
      "ites/gcc jobs", "legal & compliance jobs", "sales & marketing jobs"
    ]
  };

  return (
    <div className="min-h-screen bg-white font-sans selection:bg-randstad-blue/30">
      {/* Header */}
      <header className="sticky top-0 z-40 bg-white border-b border-[#f0f0f0]">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-16">
          <div className="flex justify-end pt-3 pb-1">
            <a href="#" className="text-[12px] text-[#666666] hover:text-randstad-blue transition-colors">contact us</a>
          </div>
          <div className="flex items-center justify-between py-4">
            <div className="flex items-center gap-14">
              <a href="/" className="flex-shrink-0">
                <RandstadLogo />
              </a>
              <nav className="hidden xl:flex items-center gap-9">
                {navItems.map((item) => (
                  <a 
                    key={item.name} 
                    href="#" 
                    className="text-[15px] font-medium text-[#333333] hover:text-randstad-blue flex items-center gap-1 transition-colors"
                  >
                    {item.name}
                    {item.hasDropdown && <ChevronDown className="w-4 h-4 opacity-40 group-hover:opacity-100" />}
                  </a>
                ))}
              </nav>
            </div>
            <div className="flex items-center gap-7 text-[#333333]">
              <div className="flex items-center gap-1.5 cursor-pointer hover:text-randstad-blue transition-colors">
                <Heart className="w-[22px] h-[22px] stroke-[1.5]" />
                <span className="text-[15px] font-medium">0</span>
              </div>
              <div className="flex items-center gap-2.5 cursor-pointer hover:text-randstad-blue transition-colors">
                <User className="w-[22px] h-[22px] stroke-[1.5]" />
                <span className="text-[15px] font-medium">my randstad</span>
              </div>
              <button className="xl:hidden">
                <Search className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-[#f8f9fa] pt-12 pb-20 overflow-hidden">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-16 relative">
          <div className="mb-10 text-[13px] text-[#666666] flex items-center gap-2">
            <a href="#" className="hover:text-randstad-blue transition-colors">home</a>
            <span className="text-[#cccccc]">&gt;</span>
            <a href="#" className="hover:text-randstad-blue transition-colors">hr news</a>
            <span className="text-[#cccccc]">&gt;</span>
            <a href="#" className="hover:text-randstad-blue transition-colors">workforce insights</a>
            <span className="text-[#cccccc]">&gt;</span>
            <span className="text-[#333333] font-medium">talent pulse surveys</span>
          </div>
          
          <div className="flex flex-col md:flex-row items-start justify-between gap-12">
            <div className="max-w-3xl">
              <h1 className="text-[64px] lg:text-[72px] font-bold leading-[1.05] tracking-tight text-black">
                talent pulse survey.
              </h1>
            </div>
            
            <div className="relative flex-shrink-0">
              {/* Randstad Brand Graphic */}
              <div className="relative w-[220px] h-[220px]">
                <svg width="220" height="220" viewBox="0 0 220 220" fill="none" xmlns="http://www.w3.org/2000/svg">
                  {/* Blue semi-circle */}
                  <path d="M110 30 A80 80 0 0 1 190 110" stroke="#2175D9" strokeWidth="22" fill="none" strokeLinecap="round" />
                  <path d="M110 30 A80 80 0 0 0 30 110" stroke="#2175D9" strokeWidth="22" fill="none" strokeLinecap="round" />
                  {/* Yellow horizontal bar */}
                  <rect x="30" y="100" width="160" height="20" fill="#FFD700" />
                  {/* Navy vertical bar */}
                  <rect x="100" y="110" width="22" height="80" fill="#051937" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-24 bg-white">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            <div className="lg:col-span-4">
              <h2 className="text-[32px] font-bold text-black leading-tight">
                talent pulse surveys.
              </h2>
            </div>
            <div className="lg:col-span-8">
              <div className="flex flex-col border-t border-[#e5e5e5]">
                {surveyItems.map((item, index) => (
                  <AccordionItem key={index} title={item} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#051937] text-white pt-24 pb-16">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-16">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-x-8 gap-y-14 mb-24">
            {Object.entries(footerLinks).map(([title, links]) => (
              <div key={title}>
                <h3 className="text-[18px] font-bold mb-8 text-white">{title}</h3>
                <ul className="space-y-4">
                  {links.map((link) => (
                    <li key={link}>
                      <a href="#" className="text-[15px] text-[#b3b3b3] hover:text-white transition-colors leading-snug inline-block">
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="border-t border-white/10 pt-14">
            <div className="flex flex-wrap gap-5 mb-14">
              {[
                { icon: <Linkedin className="w-5 h-5" />, label: 'LinkedIn' },
                { icon: <XIcon />, label: 'X' },
                { icon: <Facebook className="w-5 h-5" />, label: 'Facebook' },
                { icon: <Youtube className="w-5 h-5" />, label: 'YouTube' },
                { icon: <Instagram className="w-5 h-5" />, label: 'Instagram' }
              ].map((social) => (
                <a 
                  key={social.label}
                  href="#" 
                  aria-label={social.label}
                  className="w-11 h-11 rounded-full bg-white/5 flex items-center justify-center hover:bg-randstad-blue transition-all duration-300 hover:scale-110"
                >
                  {social.icon}
                </a>
              ))}
            </div>

            <div className="text-[13px] text-[#999999] space-y-7 max-w-6xl leading-relaxed">
              <p>
                registered office: Randstad India Private Limited, CIN U74210TN1992PTC023097,/Randstad House, Old No. 5 & 5A, New No. 9, Pycrofts Garden Road, Nungambakkam, Chennai, TN - 600 006
              </p>
              
              <div className="flex items-center flex-wrap gap-2">
                <span className="font-bold text-white tracking-wide">RANDSTAD,</span>
                <div className="w-8 h-4 bg-randstad-blue rounded-sm opacity-80"></div>
                <span className="text-[#cccccc]">HUMAN FORWARD and SHAPING THE WORLD OF WORK are registered trademarks of © Randstad N.V.2023</span>
              </div>
              
              <div className="space-y-5">
                <p>
                  <span className="font-bold text-white">Security Advice:</span> Randstad India does not charge any fee at any stage of its recruitment process from the candidate nor allows their employees to collect any fees from any candidates. <a href="#" className="text-white underline underline-offset-4 hover:text-randstad-blue transition-colors">Click here to know more</a>
                </p>
                <p>
                  <span className="font-bold text-white">EEO Statement:</span> Randstad India is an Equal Employment Opportunity Employer. All qualified applicants receive consideration for employment without regard to race, color, religion, sex, sexual orientation, gender identity or expression, appearance, national origin, age, marital status, veteran status, or disability status, or any other characteristics. Our global mission is to become the world’s most equitable and specialized talent company, and we actively embrace diversity and inclusion as the cornerstones of our success. To read more of Randstad India’s work in the space of equity, diversity and inclusion please <a href="#" className="text-white underline underline-offset-4 hover:text-randstad-blue transition-colors">click here</a>
                </p>
              </div>
            </div>

            <div className="mt-20 flex flex-wrap gap-x-10 gap-y-5 text-[13px] text-[#999999] font-medium">
              {['terms & conditions', 'cookies', 'misconduct reporting procedure', 'accessibility', 'be aware', 'sitemap', 'privacy statement'].map((item) => (
                <a key={item} href="#" className="hover:text-white transition-colors uppercase tracking-wider text-[11px]">
                  {item}
                </a>
              ))}
            </div>
          </div>
        </div>
      </footer>

      {/* Floating Feedback Button */}
      <button className="fixed right-0 top-1/2 -translate-y-1/2 bg-randstad-blue text-white py-5 px-2.5 rounded-l-md vertical-text flex items-center gap-2 shadow-2xl hover:bg-blue-600 transition-all duration-300 z-50 group">
        <span className="rotate-90 origin-center whitespace-nowrap font-bold tracking-[0.1em] text-[13px] uppercase">Feedback</span>
      </button>

      {/* Cookie Icon */}
      <button className="fixed bottom-8 left-8 w-14 h-14 bg-randstad-blue text-white rounded-full flex items-center justify-center shadow-2xl hover:scale-110 active:scale-95 transition-all duration-300 z-50">
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-7 h-7">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v2h-2zm0 4h2v6h-2z"/>
        </svg>
      </button>

      <style>{`
        .vertical-text {
          writing-mode: vertical-rl;
          text-orientation: mixed;
        }
        @media (max-width: 1024px) {
          .vertical-text {
            display: none;
          }
        }
      `}</style>
    </div>
  );
}
