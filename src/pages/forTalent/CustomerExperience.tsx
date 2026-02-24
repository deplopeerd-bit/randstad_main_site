import React, { useState } from "react";
import { AnimatePresence, motion } from "motion/react";

import { 
  ChevronDown, 
  Linkedin, 
  Twitter, 
  Youtube, 
  Menu, 
  X,
  ArrowRight
} from 'lucide-react';

// --- Components ---

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0a1931] text-white border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center gap-8">
            <div className="flex items-center">
              <span className="text-2xl font-bold tracking-tighter flex items-center">
                <svg width="40" height="40" viewBox="0 0 100 100" className="mr-2">
                  <path d="M20 20 L40 20 L60 80 L80 80" stroke="currentColor" strokeWidth="8" fill="none" />
                  <path d="M20 80 L40 80 L60 20 L80 20" stroke="currentColor" strokeWidth="8" fill="none" />
                </svg>
                randstad <span className="font-light ml-1 text-blue-400">digital</span>
              </span>
            </div>
            <div className="hidden lg:flex items-center space-x-8 text-sm font-medium uppercase tracking-wider">
              <a href="#" className="hover:text-blue-400 transition-colors border-b-2 border-blue-400 pb-1">expertise</a>
              <a href="#" className="hover:text-blue-400 transition-colors">approach</a>
              <a href="#" className="hover:text-blue-400 transition-colors">industries</a>
              <a href="#" className="hover:text-blue-400 transition-colors">about</a>
              <a href="#" className="hover:text-blue-400 transition-colors">insights</a>
              <a href="#" className="hover:text-blue-400 transition-colors">careers</a>
            </div>
          </div>
          <div className="hidden lg:flex items-center space-x-6">
            <div className="flex space-x-2 text-xs font-bold opacity-60">
              <span className="text-white">EN</span>
              <span>FR</span>
              <span>DE</span>
            </div>
            <button className="border border-blue-400 text-blue-400 px-6 py-2 text-sm font-medium hover:bg-blue-400 hover:text-white transition-all">
              get in touch
            </button>
          </div>
          <div className="lg:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="p-2">
              {isOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </div>
      
      {/* Sub-nav for expertise */}
      <div className="hidden lg:block bg-[#0a1931] border-t border-white/5 py-3">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex space-x-8 text-[10px] uppercase tracking-[0.2em] font-bold opacity-70">
            <a href="#" className="hover:text-white">consulting services</a>
            <a href="#" className="hover:text-white">cloud & infrastructure</a>
            <a href="#" className="hover:text-white">creative & marketing</a>
            <a href="#" className="text-white border-b border-white">customer experience</a>
            <a href="#" className="hover:text-white">data & analytics</a>
            <a href="#" className="hover:text-white">digital & product engineering</a>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-[#0a1931] border-t border-white/10 overflow-hidden"
          >
            <div className="px-4 pt-2 pb-6 space-y-1">
              <a href="#" className="block px-3 py-4 text-base font-medium border-b border-white/5">expertise</a>
              <a href="#" className="block px-3 py-4 text-base font-medium border-b border-white/5">approach</a>
              <a href="#" className="block px-3 py-4 text-base font-medium border-b border-white/5">industries</a>
              <a href="#" className="block px-3 py-4 text-base font-medium border-b border-white/5">about</a>
              <a href="#" className="block px-3 py-4 text-base font-medium border-b border-white/5">insights</a>
              <a href="#" className="block px-3 py-4 text-base font-medium border-b border-white/5">careers</a>
              <div className="pt-4 flex justify-center">
                <button className="w-full border border-blue-400 text-blue-400 px-6 py-3 text-sm font-medium">
                  get in touch
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = () => {
  return (
    <section className="pt-48 pb-32 bg-[#0a1931] text-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl">
          <nav className="flex mb-8 text-xs font-medium opacity-60 uppercase tracking-widest">
            <a href="#" className="hover:text-white">home</a>
            <span className="mx-2">›</span>
            <a href="#" className="hover:text-white">expertise</a>
            <span className="mx-2">›</span>
            <span className="text-white">customer experience</span>
          </nav>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-6xl md:text-8xl font-medium leading-[0.9] tracking-tight mb-12"
          >
            orchestrating seamless digital journeys.
          </motion.h1>
          <button className="border border-blue-400 text-blue-400 px-10 py-4 text-lg font-medium hover:bg-blue-400 hover:text-white transition-all">
            get in touch
          </button>
        </div>
      </div>
      {/* Decorative elements */}
      <div className="absolute top-1/2 right-0 -translate-y-1/2 opacity-10 pointer-events-none">
        <svg width="600" height="600" viewBox="0 0 100 100">
          <circle cx="50" cy="50" r="40" fill="none" stroke="white" strokeWidth="0.5" />
          <circle cx="50" cy="50" r="30" fill="none" stroke="white" strokeWidth="0.5" />
          <circle cx="50" cy="50" r="20" fill="none" stroke="white" strokeWidth="0.5" />
        </svg>
      </div>
    </section>
  );
};

const SectionDifferentiator = () => {
  return (
    <section className="flex flex-col md:flex-row min-h-[600px]">
      <div className="w-full md:w-1/2 relative overflow-hidden bg-gray-200">
        <img 
          src="https://picsum.photos/seed/tech1/1200/800" 
          alt="CX Differentiator" 
          className="absolute inset-0 w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 flex items-center justify-center">
           <div className="w-48 h-48 border-2 border-blue-400 rounded-full flex items-center justify-center opacity-80">
              <div className="w-32 h-32 border-2 border-blue-400 rounded-full flex items-center justify-center">
                 <div className="w-16 h-16 bg-blue-400 rounded-full"></div>
              </div>
           </div>
        </div>
      </div>
      <div className="w-full md:w-1/2 bg-white p-12 md:p-24 flex flex-col justify-center">
        <h2 className="text-5xl md:text-7xl font-medium leading-tight mb-8 text-[#0a1931]">
          CX is a key differentiator.
        </h2>
        <p className="text-xl text-gray-600 leading-relaxed max-w-lg">
          Customers have high expectations; they want to engage in a way that is convenient and today, this is digital. They want service that is frictionless, personalized, and seamless – get this right and you gain a differentiated advantage.
        </p>
      </div>
    </section>
  );
};

const HolisticApproach = () => {
  return (
    <section className="py-24 bg-[#f8f9fa]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-16">
          <h2 className="text-5xl font-medium text-[#0a1931] mb-8">taking a holistic approach.</h2>
          <p className="text-xl text-gray-600 leading-relaxed">
            CX is not just about the individual touchpoints, it is about your end-to-end customer journey. You want to adopt an experience-first approach and we can help you, wherever you are on your journey, by injecting the right talent and expertise.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { title: 'research', desc: 'Combining quantitative and qualitative research across all stakeholders to understand goals, preferences and expectations.', icon: '👤' },
            { title: 'service design', desc: 'Designing service through a strategic lens, delivering exceptional experiences and the desired business outcomes.', icon: '⚙️' },
            { title: 'marketing technology', desc: 'Optimize your martech stack with Randstad Digital to meet business objectives.', icon: '📊' },
            { title: 'product development', desc: 'Our digital application developers prioritize UX and UI, aiming to surpass customer expectations.', icon: '💻' }
          ].map((item, i) => (
            <motion.div 
              key={i}
              whileHover={{ y: -10 }}
              className="bg-[#0a1931] text-white p-10 rounded-sm flex flex-col min-h-[400px]"
            >
              <div className="text-4xl mb-auto opacity-40">{item.icon}</div>
              <h3 className="text-3xl font-medium mb-6">{item.title}</h3>
              <p className="text-gray-400 leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const ResearchSection = () => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-16">
          <h2 className="text-5xl font-medium text-[#0a1931] mb-8">research.</h2>
          <p className="text-xl text-gray-600 leading-relaxed">
            We can help you be rigorous and methodical in your research, following a mixed-methods approach that combines next generation quantitative analysis with qualitative human research.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { title: 'data analysis', img: 'https://picsum.photos/seed/data/600/400' },
            { title: 'focus groups', img: 'https://picsum.photos/seed/focus/600/400' },
            { title: 'stakeholder workshops', img: 'https://picsum.photos/seed/workshop/600/400' }
          ].map((item, i) => (
            <div key={i} className="group cursor-pointer relative overflow-hidden rounded-xl aspect-[4/3]">
              <img 
                src={item.img} 
                alt={item.title} 
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
              <div className="absolute bottom-8 left-8">
                <h3 className="text-2xl font-medium text-white">{item.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const CaseStudySection = () => {
  return (
    <section className="bg-[#0a1931] text-white flex flex-col md:flex-row">
      <div className="w-full md:w-1/2 p-12 md:p-24 flex flex-col justify-center">
        <span className="text-xs font-bold uppercase tracking-[0.3em] mb-12 opacity-60">a step up in</span>
        <h2 className="text-5xl md:text-7xl font-medium leading-[0.9] mb-12">
          capabilities and quality of interactions.
        </h2>
        <p className="text-lg opacity-80 mb-12">Read our case study.</p>
        <button className="self-start border border-blue-400 text-blue-400 px-8 py-3 text-sm font-medium hover:bg-blue-400 hover:text-white transition-all">
          learn more
        </button>
      </div>
      <div className="w-full md:w-1/2 relative min-h-[500px] overflow-hidden">
         <div className="absolute inset-0 flex items-center justify-center">
            <svg width="80%" height="80%" viewBox="0 0 100 100" className="opacity-40">
               <line x1="20" y1="80" x2="80" y2="20" stroke="url(#grad1)" strokeWidth="15" strokeLinecap="round" />
               <line x1="40" y1="90" x2="90" y2="40" stroke="url(#grad1)" strokeWidth="15" strokeLinecap="round" />
               <defs>
                  <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
                     <stop offset="0%" style={{ stopColor: '#007bff', stopOpacity: 1 }} />
                     <stop offset="100%" style={{ stopColor: '#00d4ff', stopOpacity: 1 }} />
                  </linearGradient>
               </defs>
            </svg>
         </div>
      </div>
    </section>
  );
};

const ServiceDesignSection = () => {
  return (
    <section className="flex flex-col md:flex-row min-h-[600px]">
      <div className="w-full md:w-1/2 bg-white p-12 md:p-24 flex flex-col justify-center">
        <h2 className="text-5xl md:text-7xl font-medium leading-tight mb-8 text-[#0a1931]">
          service design.
        </h2>
        <p className="text-xl text-gray-600 leading-relaxed max-w-lg">
          We inject digital talent and experience into your service design. Taking a holistic approach that combines the findings of your research with what you are trying to achieve. This enables us to design a customer-centric service that spans every aspect of the end-to-end experience.
        </p>
      </div>
      <div className="w-full md:w-1/2 relative overflow-hidden">
        <img 
          src="https://picsum.photos/seed/service/1200/800" 
          alt="Service Design" 
          className="absolute inset-0 w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 flex items-center justify-center">
           <div className="w-64 h-64 border border-blue-400 rounded-full flex items-center justify-center">
              <div className="w-48 h-48 border border-blue-400 rounded-full flex items-center justify-center">
                 <div className="w-32 h-32 border-4 border-blue-400 rounded-full border-t-transparent animate-spin"></div>
              </div>
           </div>
        </div>
      </div>
    </section>
  );
};

const MarketingTechSection = () => {
  return (
    <section className="flex flex-col md:flex-row-reverse min-h-[600px]">
      <div className="w-full md:w-1/2 bg-white p-12 md:p-24 flex flex-col justify-center">
        <h2 className="text-5xl md:text-7xl font-medium leading-tight mb-8 text-[#0a1931]">
          marketing technology.
        </h2>
        <p className="text-xl text-gray-600 leading-relaxed max-w-lg">
          Optimize your martech stack with Randstad Digital to meet business objectives. Our comprehensive services help you personalize experiences, drive conversions, and maximize your marketing investments.
        </p>
        <button className="self-start mt-12 border border-[#0a1931] text-[#0a1931] px-8 py-3 text-sm font-medium hover:bg-[#0a1931] hover:text-white transition-all">
          learn more
        </button>
      </div>
      <div className="w-full md:w-1/2 relative overflow-hidden">
        <img 
          src="https://picsum.photos/seed/martech/1200/800" 
          alt="Marketing Technology" 
          className="absolute inset-0 w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
      </div>
    </section>
  );
};

const ProductDevSection = () => {
  return (
    <section className="flex flex-col md:flex-row min-h-[600px]">
      <div className="w-full md:w-1/2 bg-white p-12 md:p-24 flex flex-col justify-center">
        <h2 className="text-5xl md:text-7xl font-medium leading-tight mb-8 text-[#0a1931]">
          product development.
        </h2>
        <p className="text-xl text-gray-600 leading-relaxed max-w-lg">
          Our digital application developers prioritize UX and UI, aiming to surpass customer expectations. They achieve this by crafting seamless and impactful customer experiences, utilizing web or mobile apps, as well as virtual or augmented reality technologies.
        </p>
      </div>
      <div className="w-full md:w-1/2 relative overflow-hidden">
        <img 
          src="https://picsum.photos/seed/dev/1200/800" 
          alt="Product Development" 
          className="absolute inset-0 w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
      </div>
    </section>
  );
};

interface AccordionProps {
  title: string;
  content: string;
  isOpen: boolean;
  onClick: () => void;
}

const Accordion: React.FC<AccordionProps> = ({ title, content, isOpen, onClick }) => {
  return (
    <div className="border-b border-white/10">
      <button 
        onClick={onClick}
        className="w-full py-8 flex justify-between items-center text-left group"
      >
        <span className="text-3xl font-medium group-hover:text-blue-400 transition-colors">{title}</span>
        <ChevronDown className={`w-8 h-8 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden"
          >
            <div className="pb-8 text-lg opacity-70 leading-relaxed max-w-2xl">
              {content}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const CapabilitiesSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  
  const items = [
    { title: 'experience strategy and design', content: 'We help you define a clear vision for your customer experience and design the interactions that will bring it to life.' },
    { title: 'marketing automation', content: 'Streamline your marketing processes and deliver personalized messages at scale with our automation expertise.' },
    { title: 'content and commerce', content: 'Create compelling content and seamless commerce experiences that drive engagement and sales.' },
    { title: 'personalization and recommendations', content: 'Leverage data and AI to deliver highly relevant experiences to every customer.' },
    { title: 'immersive experiences', content: 'Engage your customers in new ways with AR, VR, and other immersive technologies.' },
    { title: 'sales automation', content: 'Empower your sales teams with the tools and data they need to close more deals.' },
    { title: 'customer service', content: 'Deliver exceptional support across every channel, from self-service to human-assisted.' },
    { title: 'employee solutions', content: 'Improve the employee experience to drive better customer outcomes.' },
    { title: 'social media engagement', content: 'Build meaningful relationships with your customers on the platforms where they spend their time.' }
  ];

  return (
    <section className="py-24 bg-blue-600 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-16">
          <div className="lg:w-1/3">
            <h2 className="text-5xl font-medium sticky top-32">capabilities</h2>
          </div>
          <div className="lg:w-2/3">
            <p className="text-xl mb-16 opacity-90 leading-relaxed">
              Our global team provides capabilities across every aspect of customer experience from strategic planning, journey mapping to experience design, end-to-end implementation services and application managed services ensuring exceptional interaction at every touchpoint.
            </p>
            <div className="border-t border-white/10">
              {items.map((item, i) => (
                <Accordion 
                  key={i}
                  title={item.title}
                  content={item.content}
                  isOpen={openIndex === i}
                  onClick={() => setOpenIndex(openIndex === i ? null : i)}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const PartnershipsSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  
  const items = [
    { title: 'randstad digital + servicenow', content: 'Combining the power of ServiceNow with our digital expertise to transform your operations.' },
    { title: 'randstad digital + salesforce', content: 'Unlocking the full potential of the world\'s #1 CRM to drive customer success.' },
    { title: 'randstad digital + adobe', content: 'Creating exceptional digital experiences with the Adobe Experience Cloud.' }
  ];

  return (
    <section className="py-24 bg-[#f5f2ed] text-[#0a1931]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-16">
          <div className="lg:w-1/3">
            <h2 className="text-5xl font-medium sticky top-32">partnerships.</h2>
          </div>
          <div className="lg:w-2/3">
            <p className="text-xl mb-16 opacity-80 leading-relaxed">
              Randstad Digital partners with industry leaders to provide our clients with the expertise they require to leverage the best possible technology and applications available.
            </p>
            <div className="border-t border-[#0a1931]/10">
              {items.map((item, i) => (
                <div key={i} className="border-b border-[#0a1931]/10">
                  <button 
                    onClick={() => setOpenIndex(openIndex === i ? null : i)}
                    className="w-full py-8 flex justify-between items-center text-left group"
                  >
                    <span className="text-3xl font-medium group-hover:text-blue-600 transition-colors">{item.title}</span>
                    <ChevronDown className={`w-8 h-8 transition-transform duration-300 ${openIndex === i ? 'rotate-180' : ''}`} />
                  </button>
                  <AnimatePresence>
                    {openIndex === i && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="overflow-hidden"
                      >
                        <div className="pb-8 text-lg opacity-70 leading-relaxed max-w-2xl">
                          {item.content}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const CXAdvantageSection = () => {
  return (
    <section className="bg-[#0a1931] text-white py-32 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-24">
          <div className="lg:w-1/2">
            <h2 className="text-6xl md:text-8xl font-medium leading-[0.9] mb-12">
              creating CX advantage.
            </h2>
            <p className="text-xl opacity-80 leading-relaxed mb-12 max-w-xl">
              We help you to create an experience-first mindset across your organization and exceptional experiences across each and every customer touchpoint. This creates an advantage that has been proven to increase customer revenue and loyalty, drive-up profitability, and raise employee engagement.
            </p>
            <button className="border border-blue-400 text-blue-400 px-10 py-4 text-lg font-medium hover:bg-blue-400 hover:text-white transition-all">
              let's talk
            </button>
          </div>
          <div className="lg:w-1/2 relative">
             <div className="text-[12vw] font-bold opacity-20 select-none pointer-events-none whitespace-nowrap">
                cx advantage
             </div>
             <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full flex items-center justify-center">
                <div className="text-6xl md:text-8xl font-bold text-blue-400 opacity-80">
                   cx advantage
                </div>
             </div>
          </div>
        </div>
      </div>
      {/* Decorative circles */}
      <div className="absolute top-1/2 right-0 -translate-y-1/2 opacity-10 pointer-events-none">
        <svg width="800" height="800" viewBox="0 0 100 100">
          <circle cx="50" cy="50" r="45" fill="none" stroke="white" strokeWidth="0.2" />
          <circle cx="50" cy="50" r="35" fill="none" stroke="white" strokeWidth="0.2" />
          <circle cx="50" cy="50" r="25" fill="none" stroke="white" strokeWidth="0.2" />
        </svg>
      </div>
    </section>
  );
};

const ContactForm = () => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-24">
          <div className="lg:w-1/3">
            <h2 className="text-5xl font-medium text-[#0a1931] mb-8 leading-tight">
              ready to partner with randstad digital?
            </h2>
            <p className="text-2xl text-gray-400">Get in touch.</p>
          </div>
          <div className="lg:w-2/3">
            <form className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-2">
                <label className="text-sm font-bold uppercase tracking-wider opacity-60">First name<span className="text-red-500">*</span></label>
                <input type="text" className="w-full bg-gray-50 border-b border-gray-300 p-4 focus:outline-none focus:border-blue-400 transition-colors" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold uppercase tracking-wider opacity-60">Last name<span className="text-red-500">*</span></label>
                <input type="text" className="w-full bg-gray-50 border-b border-gray-300 p-4 focus:outline-none focus:border-blue-400 transition-colors" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold uppercase tracking-wider opacity-60">Work Email<span className="text-red-500">*</span></label>
                <input type="email" className="w-full bg-gray-50 border-b border-gray-300 p-4 focus:outline-none focus:border-blue-400 transition-colors" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold uppercase tracking-wider opacity-60">Job title<span className="text-red-500">*</span></label>
                <input type="text" className="w-full bg-gray-50 border-b border-gray-300 p-4 focus:outline-none focus:border-blue-400 transition-colors" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold uppercase tracking-wider opacity-60">Company name<span className="text-red-500">*</span></label>
                <input type="text" className="w-full bg-gray-50 border-b border-gray-300 p-4 focus:outline-none focus:border-blue-400 transition-colors" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold uppercase tracking-wider opacity-60">Country<span className="text-red-500">*</span></label>
                <select className="w-full bg-gray-50 border-b border-gray-300 p-4 focus:outline-none focus:border-blue-400 transition-colors appearance-none">
                  <option>Please Select</option>
                  <option>United States</option>
                  <option>United Kingdom</option>
                  <option>Netherlands</option>
                </select>
              </div>
              <div className="md:col-span-2 space-y-2">
                <label className="text-sm font-bold uppercase tracking-wider opacity-60">Staffing or Solutions<span className="text-red-500">*</span></label>
                <select className="w-full bg-gray-50 border-b border-gray-300 p-4 focus:outline-none focus:border-blue-400 transition-colors appearance-none">
                  <option>Please Select</option>
                  <option>Staffing</option>
                  <option>Solutions</option>
                </select>
              </div>
              <div className="md:col-span-2 space-y-2">
                <label className="text-sm font-bold uppercase tracking-wider opacity-60">How can we help you?<span className="text-red-500">*</span></label>
                <textarea rows={4} className="w-full bg-gray-50 border-b border-gray-300 p-4 focus:outline-none focus:border-blue-400 transition-colors resize-none"></textarea>
              </div>
              <div className="md:col-span-2 flex items-start gap-4 py-4">
                <input type="checkbox" className="mt-1 w-5 h-5" />
                <p className="text-sm text-gray-500 leading-relaxed">
                  I agree to receive other communications from Randstad Digital.
                </p>
              </div>
              <div className="md:col-span-2">
                <p className="text-xs text-gray-400 mb-8 leading-relaxed">
                  You can unsubscribe from these communications at any time. For more information on how to unsubscribe, our privacy practices, and how we are committed to protecting and respecting your privacy, please review our <a href="#" className="underline">Privacy Policy</a>.
                </p>
                <button type="submit" className="bg-blue-600 text-white px-12 py-4 text-lg font-medium hover:bg-blue-700 transition-all">
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="bg-[#0a1931] text-white pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-24">
          <div>
            <h4 className="text-xl font-bold mb-8">careers</h4>
            <ul className="space-y-4 opacity-60">
              <li><a href="#" className="hover:text-blue-400 transition-colors">working at randstad digital</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">current opportunities</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-xl font-bold mb-8">expertise</h4>
            <ul className="space-y-4 opacity-60">
              <li><a href="#" className="hover:text-blue-400 transition-colors">customer experience</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">digital & product engineering</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">data & analytics</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">cloud & infrastructure</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">creative & marketing</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">consulting services</a></li>
            </ul>
            <h4 className="text-xl font-bold mt-12 mb-8">solutions</h4>
            <ul className="space-y-4 opacity-60">
              <li><a href="#" className="hover:text-blue-400 transition-colors">ServiceNow</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-xl font-bold mb-8">about randstad digital</h4>
            <ul className="space-y-4 opacity-60">
              <li><a href="#" className="hover:text-blue-400 transition-colors">experience</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">leadership</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">partnerships</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">locations</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-xl font-bold mb-8">contact us</h4>
            <ul className="space-y-4 opacity-60">
              <li><a href="#" className="hover:text-blue-400 transition-colors">get in touch</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">about our team</a></li>
            </ul>
          </div>
        </div>
        
        <div className="flex flex-wrap items-center gap-6 mb-12">
          <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-blue-400 transition-colors"><Linkedin size={20} /></a>
          <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-blue-400 transition-colors"><Twitter size={20} /></a>
          <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-blue-400 transition-colors"><Youtube size={20} /></a>
        </div>
        
        <div className="border-t border-white/10 pt-12">
          <p className="text-xs opacity-40 mb-8">
            Randstad Digital B.V (91235944), Diemermere 25, 1112 TC, Diemen, The Netherlands.
          </p>
          <div className="flex flex-wrap gap-8 text-sm opacity-60">
            <a href="#" className="hover:text-white">terms & conditions</a>
            <a href="#" className="hover:text-white">cookie policy</a>
            <button className="bg-blue-600 text-white px-4 py-1 rounded-sm text-xs">customize</button>
            <a href="#" className="hover:text-white">legal information</a>
            <a href="#" className="hover:text-white">privacy policy</a>
            <a href="#" className="hover:text-white">misconduct reporting procedure</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

// --- Main Page ---

export default function RandstadPage() {
  return (
    <div className="font-sans text-[#0a1931] selection:bg-blue-200">
      <Navbar />
      <main>
        <Hero />
        <SectionDifferentiator />
        <HolisticApproach />
        <ResearchSection />
        <CaseStudySection />
        <ServiceDesignSection />
        <MarketingTechSection />
        <ProductDevSection />
        <CapabilitiesSection />
        <PartnershipsSection />
        <CXAdvantageSection />
        <ContactForm />
      </main>
      <Footer />
      
      {/* Floating accessibility button */}
      <div className="fixed bottom-6 right-6 z-50">
        <button className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="10" />
            <path d="M12 8v8" />
            <path d="M8 12h8" />
          </svg>
        </button>
      </div>
      
      {/* Floating cookie button */}
      <div className="fixed bottom-6 left-6 z-50">
        <button className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 2a10 10 0 1 0 10 10 4 4 0 0 1-5-5 4 4 0 0 1-5-5" />
            <path d="M8.5 8.5v.01" />
            <path d="M16 15.5v.01" />
            <path d="M12 12v.01" />
            <path d="M11 17v.01" />
            <path d="M7 13v.01" />
          </svg>
        </button>
      </div>
    </div>
  );
}
