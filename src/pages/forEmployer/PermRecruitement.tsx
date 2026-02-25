import React from "react";
import { motion } from "motion/react";

import { 
  Search, 
  User, 
  Heart, 
  ChevronDown, 
  Linkedin, 
  Twitter, 
  Facebook, 
  Youtube, 
  Instagram 
} from 'lucide-react';

// --- Navbar Components ---

function NavLink({ label, hasDropdown, active }: { label: string; hasDropdown?: boolean; active?: boolean }) {
  return (
    <a 
      href="#" 
      className={`flex items-center gap-1 text-[15px] font-medium transition-colors ${
        active ? 'text-randstad-blue' : 'text-gray-600 hover:text-randstad-blue'
      }`}
    >
      {label}
      {hasDropdown && <ChevronDown size={14} />}
    </a>
  );
}


// --- Hero Component ---

function Hero() {
  return (
    <section className="bg-randstad-navy text-white overflow-hidden">
      <div className="container-custom py-16 lg:py-24 flex flex-col lg:flex-row items-center gap-12">
        <div className="flex-1 z-10">
          <nav className="flex items-center gap-2 text-xs text-gray-400 mb-8">
            <a href="#" className="hover:text-white">home</a>
            <span>›</span>
            <a href="#" className="hover:text-white">employers</a>
            <span>›</span>
            <a href="#" className="hover:text-white">our services</a>
            <span>›</span>
            <span className="text-white">perm recruitment</span>
          </nav>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-5xl lg:text-7xl font-light leading-tight mb-8"
          >
            permanent<br />
            recruitment solutions.
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-lg text-gray-300 max-w-xl mb-10 leading-relaxed"
          >
            Enhance your team's strength with our permanent recruitment services. 
            We specialize in connecting businesses with top candidates for long-term success, 
            ensuring you find the right talent to drive your organization forward.
          </motion.p>
          
          <motion.button 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="px-8 py-4 border border-white text-white font-medium hover:bg-white hover:text-randstad-navy transition-all duration-300"
          >
            request a callback
          </motion.button>
        </div>

        <div className="flex-1 relative">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="relative w-full aspect-[4/3] flex items-center justify-center"
          >
            {/* Stylized figures illustration placeholder */}
            <div className="flex items-end gap-4">
              <div className="w-24 h-48 bg-blue-400/20 rounded-t-full border-2 border-blue-400"></div>
              <div className="w-32 h-64 bg-blue-400/40 rounded-t-full border-2 border-blue-400 flex items-center justify-center">
                <div className="w-16 h-16 rounded-full border-2 border-blue-400"></div>
              </div>
              <div className="w-24 h-56 bg-blue-400/60 rounded-t-full border-2 border-blue-400"></div>
            </div>
            
            {/* Floating circles */}
            <div className="absolute top-1/4 right-1/4 w-12 h-12 rounded-full border-2 border-blue-300 opacity-50"></div>
            <div className="absolute bottom-1/4 left-1/4 w-8 h-8 rounded-full bg-blue-400 opacity-30"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

// --- Section Components ---

function TextSection() {
  return (
    <section className="py-20 bg-white">
      <div className="container-custom grid lg:grid-cols-2 gap-16 items-start">
        <h2 className="text-3xl lg:text-4xl font-light leading-snug">
          tailored permanent<br />
          recruitment solutions<br />
          for every industry.
        </h2>
        <div className="text-lg text-gray-600 leading-relaxed">
          <p className="mb-6">
            Our permanent recruitment division partners with organizations of all sizes to provide the 
            ideal talent across various industries. Leveraging a robust database of over 3 million 
            candidates and deep expertise in key business sectors, we deliver top talent swiftly and 
            optimize your <a href="#" className="text-randstad-blue underline">recruitment process</a> for exceptional results.
          </p>
        </div>
      </div>
    </section>
  );
}

function FeatureSection({ 
  title, 
  description, 
  buttonText, 
  imageSrc, 
  reverse = false 
}: { 
  title: string; 
  description: string; 
  buttonText: string; 
  imageSrc: string; 
  reverse?: boolean;
}) {
  return (
    <section className="py-20 bg-white">
      <div className={`container-custom flex flex-col ${reverse ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-center gap-16`}>
        <div className="flex-1">
          <div className="relative">
            <img 
              src={imageSrc} 
              alt={title} 
              className="w-full aspect-[4/3] object-cover"
              referrerPolicy="no-referrer"
            />
            {/* Decorative circles */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full pointer-events-none">
               <div className="absolute top-0 left-0 w-full h-full border border-randstad-blue/20 rounded-full scale-110"></div>
               <div className="absolute top-0 left-0 w-full h-full border border-randstad-blue/10 rounded-full scale-125"></div>
            </div>
          </div>
        </div>
        <div className="flex-1">
          <h2 className="text-5xl lg:text-6xl font-light mb-8 leading-tight">{title}</h2>
          <p className="text-lg text-gray-600 mb-10 leading-relaxed">{description}</p>
          <button className="px-8 py-4 border border-randstad-navy text-randstad-navy font-medium hover:bg-randstad-navy hover:text-white transition-all duration-300">
            {buttonText}
          </button>
        </div>
      </div>
    </section>
  );
}

function CtaBanner({ 
  title, 
  buttonText, 
  highlightedText 
}: { 
  title: string; 
  buttonText: string; 
  highlightedText?: string;
}) {
  return (
    <section className="bg-randstad-navy py-20 text-white">
      <div className="container-custom flex flex-col lg:flex-row items-center justify-between gap-12">
        <div className="max-w-3xl">
          <h2 className="text-4xl lg:text-6xl font-light leading-tight">
            {title}
            {highlightedText && (
              <span className="block text-randstad-blue">{highlightedText}</span>
            )}
          </h2>
        </div>
        <button className="px-8 py-4 border border-white text-white font-medium hover:bg-white hover:text-randstad-navy transition-all duration-300 whitespace-nowrap">
          {buttonText}
        </button>
      </div>
    </section>
  );
}

function ProductivityCards() {
  const cards = [
    {
      title: "is worker well-being—or lack of it—wrecking your employee productivity?",
      image: "https://picsum.photos/seed/wellbeing/600/800"
    },
    {
      title: "proven strategies to improve employee productivity.",
      image: "https://picsum.photos/seed/strategies/600/800"
    },
    {
      title: "5 ways randstad inhouse services can help optimize worker productivity.",
      image: "https://picsum.photos/seed/inhouse/600/800"
    }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="container-custom">
        <h2 className="text-4xl font-light mb-16">boosting employee productivity.</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {cards.map((card, idx) => (
            <motion.div 
              key={idx}
              whileHover={{ y: -10 }}
              className="group cursor-pointer"
            >
              <div className="relative aspect-[3/4] overflow-hidden mb-6">
                <img 
                  src={card.image} 
                  alt={card.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-randstad-navy/80 to-transparent"></div>
                <div className="absolute bottom-0 left-0 p-8">
                  <h3 className="text-xl text-white font-light leading-snug">{card.title}</h3>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function NewsletterSection() {
  return (
    <section className="py-24 bg-white border-t border-gray-100">
      <div className="container-custom flex flex-col lg:flex-row items-center gap-16">
        <div className="flex-1">
          <h2 className="text-5xl lg:text-6xl font-light mb-8 leading-tight">
            workforce insights delivered to your inbox.
          </h2>
          <p className="text-lg text-gray-600 mb-10 leading-relaxed">
            Want to reduce your turnover rate, improve your company culture, or be inspired on improving 
            employability for young people? Sign up to the monthly workforce insights newsletter and 
            stay up to date with the latest recruitment and labor market news, tips, trends and reports 
            for business leaders across the globe.
          </p>
          <button className="px-8 py-4 border border-randstad-blue text-randstad-blue font-medium hover:bg-randstad-blue hover:text-white transition-all duration-300">
            subscribe now
          </button>
        </div>
        <div className="flex-1 flex justify-center">
          <div className="relative w-full max-w-md aspect-square">
             <svg viewBox="0 0 200 200" className="w-full h-full text-randstad-blue">
                <rect x="20" y="60" width="160" height="100" rx="4" fill="none" stroke="currentColor" strokeWidth="2" />
                <path d="M20 60 L100 110 L180 60" fill="none" stroke="currentColor" strokeWidth="2" />
                <path d="M100 20 L100 50" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
                <path d="M85 35 L100 50 L115 35" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
             </svg>
          </div>
        </div>
      </div>
    </section>
  );
}

function LocationFinder() {
  return (
    <section className="py-24 bg-randstad-light-blue">
      <div className="container-custom flex flex-col lg:flex-row items-center gap-16">
        <div className="flex-1">
          <h2 className="text-5xl lg:text-7xl font-light mb-8">find location.</h2>
          <p className="text-lg text-gray-600 mb-10">Drop in and say "hi" at one of our branch locations.</p>
          <div className="flex max-w-md">
            <input 
              type="text" 
              placeholder="postcode / city" 
              className="flex-1 px-6 py-4 bg-white border-none focus:ring-2 focus:ring-randstad-blue outline-none"
            />
            <button className="bg-randstad-blue text-white px-6 py-4 hover:bg-randstad-navy transition-colors">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
            </button>
          </div>
        </div>
        <div className="flex-1 flex justify-center">
           <div className="relative w-full max-w-md aspect-square">
             <svg viewBox="0 0 200 200" className="w-full h-full text-randstad-blue">
                <circle cx="100" cy="100" r="40" fill="none" stroke="currentColor" strokeWidth="2" />
                <circle cx="100" cy="100" r="60" fill="none" stroke="currentColor" strokeWidth="1" strokeDasharray="4 4" />
                <path d="M100 60 C100 60 70 90 70 110 C70 126 83 140 100 140 C117 140 130 126 130 110 C130 90 100 60 100 60 Z" fill="currentColor" />
                <circle cx="100" cy="110" r="10" fill="white" />
             </svg>
           </div>
        </div>
      </div>
    </section>
  );
}

// --- Footer Components ---

function FooterColumn({ title, links }: { title: string; links: string[] }) {
  return (
    <div className="flex flex-col gap-6">
      <h3 className="text-lg font-medium">{title}</h3>
      <ul className="flex flex-col gap-3">
        {links.map((link, idx) => (
          <li key={idx}>
            <a href="#" className="text-sm text-gray-400 hover:text-white transition-colors">{link}</a>
          </li>
        ))}
      </ul>
    </div>
  );
}

function SocialIcon({ icon }: { icon: React.ReactNode }) {
  return (
    <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-randstad-blue transition-all duration-300">
      {icon}
    </a>
  );
}



// --- Main App Component ---

export default function EmpPerm() {
  return (
    <div className="min-h-screen bg-white">
      
      <Hero />
      
      <main>
        <TextSection />
        
        <FeatureSection 
          title="professional search & selection."
          description="We help you identify the best-fit talent for roles, across various levels. We get it right first time so you can plan for the future."
          buttonText="talk to an expert"
          imageSrc="https://picsum.photos/seed/office1/1200/900"
        />

        <CtaBanner 
          title="contact us to start a conversation"
          highlightedText="about your talent needs."
          buttonText="request a callback"
        />

        <ProductivityCards />

        <FeatureSection 
          title="client success stories & testimonials."
          description="Explore our client success stories and testimonials to see how we've helped businesses thrive. Discover real experiences and results from our satisfied clients, showcasing the impact of our services and the value we bring to every partnership."
          buttonText="read more"
          imageSrc="https://picsum.photos/seed/office2/1200/900"
          reverse
        />

        <CtaBanner 
          title="in order to assess whether your workforce is appropriately productive, there are 9 signs you should be aware of."
          buttonText="learn more"
        />

        <NewsletterSection />
        <LocationFinder />
      </main>

     

      {/* Floating Feedback button */}
      <div className="fixed right-0 top-1/2 -translate-y-1/2 z-40 hidden lg:block">
        <button className="bg-randstad-blue text-white py-4 px-2 [writing-mode:vertical-rl] text-xs font-bold tracking-widest uppercase rounded-l-md hover:bg-randstad-navy transition-colors">
          Feedback
        </button>
      </div>

      {/* Floating Cookie button */}
      <div className="fixed left-6 bottom-6 z-40">
        <button className="w-12 h-12 bg-randstad-blue text-white rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 2a10 10 0 0 1 10 10 10 10 0 0 1-10 10 10 10 0 0 1-10-10 10 10 0 0 1 10-10z"/><path d="M8 11a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"/><path d="M11 15a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"/><path d="M16 11a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"/><path d="M14 16a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"/></svg>
        </button>
      </div>
    </div>
  );
}

