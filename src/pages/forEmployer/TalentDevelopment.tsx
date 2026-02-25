import React, { useState } from "react";
import { AnimatePresence, motion } from "motion/react";

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { 
  Search, 
  Heart, 
  User, 
  ChevronDown, 
  ChevronRight, 
  Linkedin, 
  Twitter, 
  Facebook, 
  Youtube, 
  Instagram,
  ArrowRight
} from 'lucide-react';



const Hero = () => {
  return (
    <section className="relative w-full h-[600px] overflow-hidden bg-white">
      <div className="container-custom h-full flex items-center relative z-10">
        <div className="max-w-2xl">
          <div className="flex items-center gap-2 text-[14px] font-medium text-gray-500 mb-8">
            <span>home</span> <ChevronRight size={14} />
            <span>employers</span> <ChevronRight size={14} />
            <span>our services</span> <ChevronRight size={14} />
            <span className="text-randstad-navy">enterprise</span>
          </div>
          <h1 className="text-[64px] font-bold leading-[1.1] text-randstad-navy mb-6 tracking-tight">
            randstad enterprise.
          </h1>
          <p className="text-[18px] text-randstad-navy leading-relaxed mb-10 max-w-xl">
            Delivering complex, large-scale talent advisory, acquisition, development and transition solutions, Randstad Enterprise empowers you to unlock what’s at the heart of your business success — your people.
          </p>
          <button className="px-8 py-3 border-2 border-randstad-navy text-randstad-navy font-bold text-[16px] hover:bg-randstad-navy hover:text-white transition-all duration-300">
            explore our solutions
          </button>
        </div>
      </div>
      
      {/* Hero Image & Graphic */}
      <div className="absolute top-0 right-0 w-1/2 h-full hidden lg:block">
        <img 
          src="https://picsum.photos/seed/randstad-hero/1200/800" 
          alt="Professional woman smiling" 
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-[400px] h-[400px] border-[40px] border-randstad-lime rounded-full opacity-80 -translate-x-1/4"></div>
          <div className="w-[300px] h-[300px] border-[20px] border-randstad-lime rounded-full opacity-40 absolute"></div>
        </div>
      </div>
    </section>
  );
};

const SolutionsGrid = () => {
  const solutions = [
    { title: 'talent acquisition', icon: (
      <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="12" y="12" width="40" height="40" stroke="#d4ff00" strokeWidth="4" />
        <path d="M32 32L44 20M44 20H36M44 20V28" stroke="#d4ff00" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
        <rect x="16" y="40" width="8" height="8" stroke="#d4ff00" strokeWidth="2" />
      </svg>
    )},
    { title: 'talent development', icon: (
      <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="12" y="12" width="40" height="40" stroke="#d4ff00" strokeWidth="4" />
        <path d="M24 40L40 24M40 24H32M40 24V32" stroke="#d4ff00" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
        <rect x="16" y="40" width="8" height="8" stroke="#d4ff00" strokeWidth="2" />
      </svg>
    )},
    { title: 'talent transition', icon: (
      <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="12" y="12" width="40" height="40" stroke="#d4ff00" strokeWidth="4" />
        <path d="M20 32H44M20 32L28 24M20 32L28 40" stroke="#d4ff00" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    )},
    { title: 'advisory', icon: (
      <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="12" y="12" width="40" height="40" stroke="#d4ff00" strokeWidth="4" />
        <path d="M24 20V44M24 20H40V32H24" stroke="#d4ff00" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    )},
  ];

  return (
    <section className="py-24 bg-white">
      <div className="container-custom">
        <h2 className="text-[42px] font-bold text-randstad-navy mb-16">explore global talent solutions</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {solutions.map((sol, idx) => (
            <div key={idx} className="bg-randstad-navy p-12 aspect-[3/4] flex flex-col justify-between group cursor-pointer hover:bg-randstad-blue transition-all duration-500">
              <div className="mb-8">{sol.icon}</div>
              <h3 className="text-[24px] font-bold text-white leading-tight">{sol.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const SplitSection = ({ title, description, items, image, reverse = false, bgNavy = true, buttonText }: any) => {
  return (
    <section className={`w-full flex flex-col lg:flex-row ${reverse ? 'lg:flex-row-reverse' : ''}`}>
      <div className={`w-full lg:w-1/2 p-12 lg:p-24 flex flex-col justify-center ${bgNavy ? 'bg-randstad-navy text-white' : 'bg-white text-randstad-navy'}`}>
        <div className="max-w-xl">
          <h2 className="text-[56px] font-bold leading-[1.1] mb-8 tracking-tight">{title}</h2>
          <p className="text-[18px] leading-relaxed mb-12 opacity-90">{description}</p>
          {buttonText && (
            <button className={`px-8 py-3 border-2 font-bold text-[16px] transition-all duration-300 ${bgNavy ? 'border-white text-white hover:bg-white hover:text-randstad-navy' : 'border-randstad-navy text-randstad-navy hover:bg-randstad-navy hover:text-white'}`}>
              {buttonText}
            </button>
          )}
        </div>
      </div>
      <div className="w-full lg:w-1/2 relative min-h-[400px]">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
        {/* Decorative circles */}
        <div className="absolute inset-0 flex items-center justify-center overflow-hidden pointer-events-none">
          <div className="w-[500px] h-[500px] border-[2px] border-white/20 rounded-full"></div>
          <div className="w-[400px] h-[400px] border-[1px] border-white/10 rounded-full absolute"></div>
          <div className="flex gap-4 absolute">
            {[1, 2, 3, 4, 5].map(i => (
              <div key={i} className="w-8 h-8 bg-randstad-lime rounded-full opacity-80"></div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const AccordionSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const items = [
    { title: 'talent intelligence', content: 'Advanced expertise in talent intelligence to optimize your talent strategies.' },
    { title: 'technology', content: 'Leveraging cutting-edge technology to drive your workforce forward.' },
    { title: 'talent marketing', content: 'Strategic talent marketing to attract the best candidates.' },
    { title: 'diversity, equity & inclusion', content: 'Building inclusive workplaces that celebrate diversity.' },
  ];

  return (
    <section className="py-24 bg-white">
      <div className="container-custom grid grid-cols-1 lg:grid-cols-2 gap-20">
        <div>
          <h2 className="text-[42px] font-bold text-randstad-navy leading-tight mb-8">ignite the power of your talent.</h2>
          <p className="text-[18px] text-randstad-navy leading-relaxed opacity-80">
            With advanced expertise in talent intelligence; people experience; diversity, equity and inclusion (DEI); and digital strategy, Randstad Enterprise advisory services provide audits, reviews and a plan to optimize your talent strategies. We help you unlock the power of your workforce and Human Potential to help your business succeed in any market condition.
          </p>
        </div>
        <div className="flex flex-col border-t border-gray-200">
          {items.map((item, idx) => (
            <div key={idx} className="border-b border-gray-200">
              <button 
                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                className="w-full py-8 flex items-center justify-between text-left group"
              >
                <span className="text-[24px] font-bold text-randstad-navy group-hover:text-randstad-blue transition-colors">{item.title}</span>
                <ChevronDown className={`transition-transform duration-300 ${openIndex === idx ? 'rotate-180' : ''}`} size={28} />
              </button>
              <AnimatePresence>
                {openIndex === idx && (
                  <motion.div 
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="overflow-hidden"
                  >
                    <p className="pb-8 text-[16px] text-gray-600 leading-relaxed">{item.content}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  const columns = [
    {
      title: 'find a job',
      links: ['explore all jobs', 'submit your cv', 'join our team', 'refer a friend']
    },
    {
      title: 'for employers',
      links: ['submit a vacancy', 'request a callback', 'our services', 'specialisms', 'case studies', 'testimonials']
    },
    {
      title: 'workforce insights',
      links: ['talent insights reports', 'employer brand research reports', 'salary trends reports', 'ed&i reports', 'workmonitor reports', 'startup hiring trends', 'talent pulse surveys']
    },
    {
      title: 'jobs',
      links: ['engineering jobs', 'cxo jobs', 'manufacturing jobs', 'supply chain & logistics jobs', 'education jobs', 'finance & accounting jobs', 'healthcare jobs', 'hr & admin support jobs', 'ites/gcc jobs', 'legal & compliance jobs', 'sales & marketing jobs']
    },
    {
      title: 'for talents',
      links: ['specialisms', 'testimonials', 'career advice', 'beware of job scams']
    },
    {
      title: 'resources',
      links: ['case studies', 'press room', 'blogs']
    }
  ];

 
};

export default function EmpTalentDevelopment() {
  return (
    <div className="min-h-screen bg-white">
     
      <Hero />
      
      <SolutionsGrid />

      <SplitSection 
        title="talent acquisition."
        description="Solve your complex hiring challenges with talent acquisition solutions delivered by Randstad Sourceright. Do you need to find people with high-demand skills, staff up to support a new project, or get an outside perspective to transform recruitment? Our technology-driven, scalable models will help you attract, source, screen, hire and onboard the right people, while creating efficiencies and delivering an exceptional experience."
        image="https://picsum.photos/seed/randstad-ta/1200/800"
      />

      <section className="py-24 bg-white">
        <div className="container-custom grid grid-cols-1 lg:grid-cols-2 gap-20">
          <div className="text-[24px] font-bold text-randstad-navy">talent acquisition solutions</div>
          <div className="flex flex-col border-t border-gray-200">
            {['recruitment process outsourcing (RPO)', 'managed services programs (MSP)', 'services procurement and SOW management'].map((item, idx) => (
              <div key={idx} className="border-b border-gray-200 py-8 flex items-center justify-between group cursor-pointer">
                <span className="text-[24px] font-bold text-randstad-navy group-hover:text-randstad-blue transition-colors">{item}</span>
                <ChevronDown size={28} />
              </div>
            ))}
          </div>
        </div>
      </section>

      <SplitSection 
        title="talent development"
        description="Elevate your employee experience with talent development solutions delivered by Randstad RiseSmart. Scalable, flexible and affordable talent development offerings help you unlock the potential of your people — and your organization."
        image="https://picsum.photos/seed/randstad-td/1200/800"
        reverse
      />

      <section className="py-24 bg-white">
        <div className="container-custom grid grid-cols-1 lg:grid-cols-2 gap-20">
          <div className="text-[24px] font-bold text-randstad-navy">talent development solutions</div>
          <div className="flex flex-col border-t border-gray-200">
            {['career coaching'].map((item, idx) => (
              <div key={idx} className="border-b border-gray-200 py-8 flex items-center justify-between group cursor-pointer">
                <span className="text-[24px] font-bold text-randstad-navy group-hover:text-randstad-blue transition-colors">{item}</span>
                <ChevronDown size={28} />
              </div>
            ))}
          </div>
        </div>
      </section>

      <SplitSection 
        title="talent transition"
        description="Manage layoffs seamlessly with Randstad RiseSmart’s industry-leading outplacement and redeployment solutions. Help employees smoothly transition in their career journeys — and keep those who stay motivated."
        image="https://picsum.photos/seed/randstad-tt/1200/800"
      />

      <section className="py-24 bg-white">
        <div className="container-custom grid grid-cols-1 lg:grid-cols-2 gap-20">
          <div className="text-[24px] font-bold text-randstad-navy">talent transition solutions</div>
          <div className="flex flex-col border-t border-gray-200">
            {['outplacement', 'redeployment', 'pre-change support'].map((item, idx) => (
              <div key={idx} className="border-b border-gray-200 py-8 flex items-center justify-between group cursor-pointer">
                <span className="text-[24px] font-bold text-randstad-navy group-hover:text-randstad-blue transition-colors">{item}</span>
                <ChevronDown size={28} />
              </div>
            ))}
          </div>
        </div>
      </section>

      <SplitSection 
        title="advisory."
        description="Find your competitive talent edge. Randstad advisory services provide you with an independent, outside-in review and analysis of your talent strategy to drive enterprise workforce agility."
        image="https://picsum.photos/seed/randstad-adv/1200/800"
        reverse
        buttonText="learn more about advisory"
      />

      <AccordionSection />

      <section className="py-32 bg-randstad-gray">
        <div className="container-custom flex flex-col md:flex-row items-center justify-between gap-12">
          <h2 className="text-[56px] font-bold text-randstad-navy leading-tight max-w-2xl">ready to partner with randstad enterprise?</h2>
          <button className="px-12 py-4 border-2 border-randstad-navy text-randstad-navy font-bold text-[18px] hover:bg-randstad-navy hover:text-white transition-all duration-300 whitespace-nowrap">
            contact us
          </button>
        </div>
      </section>

      <SplitSection 
        title="see our latest insights."
        description="Check out the latest talent strategy research, news and case studies for employers in India."
        image="https://picsum.photos/seed/randstad-insights/1200/800"
        buttonText="read now"
      />

      <section className="py-32 bg-white">
        <div className="container-custom grid grid-cols-1 lg:grid-cols-2 gap-20">
          <div>
            <h2 className="text-[56px] font-bold text-randstad-navy leading-[1.1] mb-8">about randstad enterprise</h2>
            <p className="text-[18px] text-randstad-navy leading-relaxed mb-8 opacity-90">
              As the leading global talent solutions provider, we enable companies to create sustainable business value and agility by keeping people at the heart of their organizations.
            </p>
            <p className="text-[18px] text-randstad-navy leading-relaxed mb-12 opacity-90">
              We are uniquely positioned to support the world’s leading enterprises with the inflow, crossflow and outflow of all talent through Randstad Sourceright and Randstad RiseSmart.
            </p>
            <button className="px-8 py-3 border-2 border-randstad-navy text-randstad-navy font-bold text-[16px] hover:bg-randstad-navy hover:text-white transition-all duration-300">
              more information
            </button>
          </div>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-16">
            <div className="flex flex-col items-center gap-4">
              <svg width="120" height="40" viewBox="0 0 120 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M15 0C6.7 0 0 6.7 0 15V40H7.5V15C7.5 10.9 10.9 7.5 15 7.5C19.1 7.5 22.5 10.9 22.5 15V40H30V15C30 6.7 23.3 0 15 0Z" fill="#2175d9"/>
                <text x="35" y="30" fontFamily="Inter" fontWeight="700" fontSize="18" fill="#2175d9">sourceright</text>
              </svg>
            </div>
            <div className="flex flex-col items-center gap-4">
              <svg width="120" height="40" viewBox="0 0 120 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M15 0C6.7 0 0 6.7 0 15V40H7.5V15C7.5 10.9 10.9 7.5 15 7.5C19.1 7.5 22.5 10.9 22.5 15V40H30V15C30 6.7 23.3 0 15 0Z" fill="#2175d9"/>
                <text x="35" y="30" fontFamily="Inter" fontWeight="700" fontSize="18" fill="#2175d9">risesmart</text>
              </svg>
            </div>
          </div>
        </div>
      </section>

      <Footer />

      {/* Floating Feedback Button */}
      <div className="fixed right-0 top-1/2 -translate-y-1/2 z-40 hidden md:block">
        <button className="bg-randstad-blue text-white py-4 px-2 rounded-l-md flex flex-col items-center gap-2 [writing-mode:vertical-rl] text-[14px] font-bold shadow-lg">
          Feedback
        </button>
      </div>

      {/* Cookie Consent Icon */}
      <div className="fixed bottom-6 left-6 z-40">
        <button className="w-12 h-12 bg-randstad-blue text-white rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2a10 10 0 1 0 10 10 4 4 0 0 1-5-5 4 4 0 0 1-5-5" /><path d="M8.5 8.5v.01" /><path d="M16 15.5v.01" /><path d="M12 12v.01" /><path d="M11 17v.01" /><path d="M7 13v.01" /></svg>
        </button>
      </div>
    </div>
  );
}
