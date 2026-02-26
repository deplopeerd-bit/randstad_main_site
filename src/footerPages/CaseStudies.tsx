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
  Linkedin, 
  Twitter, 
  Facebook, 
  Youtube, 
  Instagram,
  Menu,
  X
} from 'lucide-react';

// --- Types ---
interface CaseStudyItem {
  id: number;
  title: string;
  content: string;
}

interface AccordionItemProps {
  item: CaseStudyItem;
  isOpen: boolean;
  onClick: () => void;
}

// --- Data ---
const CASE_STUDIES: CaseStudyItem[] = [
  {
    id: 1,
    title: "how randstad's expertise in specialist talent acquisition and management and enabled a global energy storage technology company to achieve rapid entry into the Indian market",
    content: "Randstad provided a comprehensive talent acquisition strategy that included market mapping, employer branding, and a streamlined recruitment process. This allowed the client to hire over 100 specialized engineers within the first 6 months of operations in India."
  },
  {
    id: 2,
    title: "hiring for a leadership position to stabilize india operations.",
    content: "We identified and placed a Country Manager with deep experience in the energy sector, helping the client stabilize their local operations and establish a strong leadership foundation for future growth."
  },
  {
    id: 3,
    title: "leveraging unique sourcing capabilities to fulfill critical hiring needs.",
    content: "Using our proprietary talent database and advanced sourcing tools, we were able to find niche candidates for critical technical roles that had been vacant for over 6 months."
  },
  {
    id: 4,
    title: "efficient Manpower planning & delivery",
    content: "Our team worked closely with the client's HR department to forecast future hiring needs and build a proactive talent pipeline, reducing time-to-hire by 40%."
  },
  {
    id: 5,
    title: "deployment of 500+ resources within 60 days",
    content: "For a large-scale project rollout, we successfully recruited, vetted, and deployed over 500 contract workers across multiple locations in India within a tight 60-day window."
  }
];

// --- Components ---


const HeroSection = () => {
  return (
    <section className="bg-[#0a1a3c] text-white py-20 lg:py-32 overflow-hidden relative">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between">
          <div className="lg:w-1/2 space-y-8">
            <div className="text-sm uppercase tracking-widest opacity-70 flex items-center space-x-2">
              <span>home</span>
              <span>&gt;</span>
              <span>resources</span>
              <span>&gt;</span>
              <span className="font-bold">case studies</span>
            </div>
            <h1 className="text-6xl lg:text-8xl font-bold tracking-tight">case studies</h1>
            <p className="text-xl lg:text-2xl font-light leading-relaxed max-w-xl opacity-90">
              Explore our case studies to discover how Randstad transformed businesses and empowered clients to achieve their workforce and talent goals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <button className="px-10 py-4 border-2 border-white text-white font-bold hover:bg-white hover:text-[#0a1a3c] transition-all duration-300">
                looking for a job
              </button>
              <button className="px-10 py-4 border-2 border-white text-white font-bold hover:bg-white hover:text-[#0a1a3c] transition-all duration-300">
                looking to hire
              </button>
            </div>
          </div>

          {/* Graphic Element */}
          <div className="hidden lg:block lg:w-1/2 relative">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px]">
              <svg width="600" height="400" viewBox="0 0 600 400" fill="none" xmlns="http://www.w3.org/2000/svg" className="opacity-40">
                <path d="M150 150C150 150 200 100 250 100C300 100 350 150 350 150" stroke="white" strokeWidth="40" strokeLinecap="round"/>
                <path d="M250 250C250 250 300 300 350 300C400 300 450 250 450 250" stroke="#8bbef2" strokeWidth="40" strokeLinecap="round"/>
                <path d="M350 150C350 150 400 100 450 100C500 100 550 150 550 150" stroke="white" strokeWidth="40" strokeLinecap="round"/>
                <path d="M50 250C50 250 100 300 150 300C200 300 250 250 250 250" stroke="#8bbef2" strokeWidth="40" strokeLinecap="round"/>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const CaseStudyAccordionItem: React.FC<AccordionItemProps> = ({ item, isOpen, onClick }) => {
  return (
    <div className="border-b border-gray-200">
      <button
        className="w-full py-8 flex items-center justify-between text-left group"
        onClick={onClick}
      >
        <span className={`text-xl lg:text-2xl font-medium transition-colors duration-300 ${isOpen ? 'text-[#2175d9]' : 'text-gray-800 group-hover:text-[#2175d9]'}`}>
          {item.title}
        </span>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
          className="ml-4 flex-shrink-0"
        >
          <ChevronDown size={32} className={isOpen ? 'text-[#2175d9]' : 'text-[#2175d9]'} />
        </motion.div>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="overflow-hidden"
          >
            <div className="pb-8 text-lg text-gray-600 leading-relaxed max-w-4xl">
              {item.content}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const CaseStudiesSection = () => {
  const [openId, setOpenId] = useState<number | null>(null);

  return (
    <section className="py-24 bg-white">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-24">
          <div className="lg:w-1/4">
            <h2 className="text-4xl font-bold text-gray-900 sticky top-32">case studies</h2>
          </div>
          <div className="lg:w-3/4">
            {CASE_STUDIES.map((item) => (
              <CaseStudyAccordionItem
                key={item.id}
                item={item}
                isOpen={openId === item.id}
                onClick={() => setOpenId(openId === item.id ? null : item.id)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const UpskillSection = () => {
  return (
    <section className="bg-[#f8f9fa] py-24">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
          <div className="lg:w-1/2 space-y-8">
            <h2 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
              5 strategies to upskill your workforce.
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed">
              To help you formulate a plan for skilling your workforce that will future-proof your organisation, we have created a checklist with the most important steps. Download it to learn:
            </p>
            <ul className="space-y-4 text-lg text-gray-700">
              <li className="flex items-start">
                <span className="w-2 h-2 bg-[#2175d9] rounded-full mt-2.5 mr-4 flex-shrink-0"></span>
                <span>the importance of conducting a skills audit within your organisation</span>
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-[#2175d9] rounded-full mt-2.5 mr-4 flex-shrink-0"></span>
                <span>different approaches to skilling</span>
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-[#2175d9] rounded-full mt-2.5 mr-4 flex-shrink-0"></span>
                <span>how to build an open-minded learning culture</span>
              </li>
            </ul>
            <div className="pt-6">
              <button className="px-10 py-4 border-2 border-[#2175d9] text-[#2175d9] font-bold hover:bg-[#2175d9] hover:text-white transition-all duration-300">
                download now
              </button>
            </div>
          </div>
          <div className="lg:w-1/2 relative">
            <div className="rounded-full overflow-hidden aspect-square relative z-10 border-[20px] border-white shadow-2xl">
              <img 
                src="https://picsum.photos/seed/office/800/800" 
                alt="Upskill workforce" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              {/* Circular Overlays */}
              <div className="absolute inset-0 border-[40px] border-[#2175d9]/20 rounded-full pointer-events-none"></div>
              <div className="absolute inset-0 border-[80px] border-white/10 rounded-full pointer-events-none scale-90"></div>
            </div>
            {/* Decorative circles */}
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-[#2175d9]/10 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-10 -left-10 w-60 h-60 bg-[#8bbef2]/20 rounded-full blur-3xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
};


export default function CaseStudies() {
  return (
    <div className="min-h-screen bg-white font-sans selection:bg-[#2175d9] selection:text-white">
      <main>
        <HeroSection />
        <CaseStudiesSection />
        <UpskillSection />
      </main>

      
      {/* Sticky Feedback Button (as seen in screenshots) */}
      <div className="fixed right-0 top-1/2 -translate-y-1/2 z-40 hidden lg:block">
        <button className="bg-[#2175d9] text-white py-3 px-1 rounded-l-md flex flex-col items-center space-y-2 shadow-lg hover:pr-2 transition-all">
          <span className="[writing-mode:vertical-rl] text-sm font-bold tracking-widest uppercase">Feedback</span>
        </button>
      </div>

      {/* Floating Cookie/Bot Icon (as seen in screenshots) */}
      <div className="fixed bottom-6 left-6 z-40">
        <button className="w-12 h-12 bg-[#2175d9] rounded-full flex items-center justify-center text-white shadow-xl hover:scale-110 transition-transform">
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
