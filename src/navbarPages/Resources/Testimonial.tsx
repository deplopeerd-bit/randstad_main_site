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
  ChevronUp, 
  Linkedin, 
  Twitter, 
  Facebook, 
  Youtube, 
  Instagram
} from 'lucide-react';

// --- Components ---


const Hero = () => (
  <section className="bg-randstad-navy text-white py-20 lg:py-32 overflow-hidden relative">
    <div className="max-w-[1440px] mx-auto px-6 lg:px-12 flex flex-col lg:flex-row items-center justify-between">
      <div className="lg:w-1/2 z-10">
        <div className="text-xs uppercase tracking-[0.2em] mb-6 opacity-80">home &gt; resources &gt; testimonials</div>
        <h1 className="text-6xl lg:text-8xl font-bold mb-6 tracking-tighter">testimonials</h1>
        <p className="text-xl lg:text-2xl mb-12 opacity-90 max-w-md leading-relaxed">
          see what our clients and candidates have to say about us.
        </p>
        <div className="flex flex-wrap gap-4">
          <button className="px-8 py-4 border-2 border-white rounded-md font-bold hover:bg-white hover:text-randstad-navy transition-colors">
            looking for a job
          </button>
          <button className="px-8 py-4 border-2 border-white rounded-md font-bold hover:bg-white hover:text-randstad-navy transition-colors">
            looking to hire
          </button>
        </div>
      </div>
      <div className="lg:w-1/2 mt-12 lg:mt-0 flex justify-center lg:justify-end">
        <div className="relative w-full max-w-md aspect-square">
          {/* Stylized graphic of three people */}
          <div className="absolute inset-0 flex items-end justify-center gap-4">
            <div className="w-1/3 bg-[#00c1de] h-[60%] rounded-t-full relative">
               <div className="absolute -top-12 left-1/2 -translate-x-1/2 w-24 h-24 bg-[#00c1de] rounded-full border-4 border-randstad-navy"></div>
            </div>
            <div className="w-1/3 bg-white h-[80%] rounded-t-full relative">
               <div className="absolute -top-12 left-1/2 -translate-x-1/2 w-24 h-24 bg-white rounded-full border-4 border-randstad-navy"></div>
               <div className="absolute bottom-1/4 left-1/2 -translate-x-1/2 w-12 h-12 bg-randstad-navy rounded-sm"></div>
            </div>
            <div className="w-1/3 bg-[#2175d9] h-[70%] rounded-t-full relative">
               <div className="absolute -top-12 left-1/2 -translate-x-1/2 w-24 h-24 bg-[#2175d9] rounded-full border-4 border-randstad-navy"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
    {/* Feedback Tab */}
    <div className="absolute right-0 top-1/2 -translate-y-1/2 bg-[#2175d9] text-white px-2 py-6 rounded-l-md cursor-pointer hover:bg-blue-600 transition-colors z-40 hidden lg:block" style={{ writingMode: 'vertical-rl' }}>
      <span className="text-xs font-bold uppercase tracking-widest">Feedback</span>
    </div>
  </section>
);

const ReadMore = () => (
  <section className="py-24 bg-white">
    <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
      <h2 className="text-5xl font-bold mb-16 tracking-tight">read more</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="group relative overflow-hidden rounded-xl aspect-[4/3] cursor-pointer">
          <img 
            src="https://picsum.photos/seed/randstad1/800/600" 
            alt="Candidate Testimonials" 
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-randstad-navy/80 to-transparent flex flex-col justify-end p-10">
            <h3 className="text-3xl font-bold text-white">candidate testimonials</h3>
          </div>
        </div>
        <div className="group relative overflow-hidden rounded-xl aspect-[4/3] cursor-pointer">
          <img 
            src="https://picsum.photos/seed/randstad2/800/600" 
            alt="Client Testimonials" 
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-randstad-navy/80 to-transparent flex flex-col justify-end p-10">
            <h3 className="text-3xl font-bold text-white">client testimonials</h3>
          </div>
        </div>
      </div>
    </div>
  </section>
);

interface AccordionItemProps {
  title: string;
  isOpen: boolean;
  onClick: () => void;
}

const AccordionItem: React.FC<AccordionItemProps> = ({ title, isOpen, onClick }) => (
  <div className="border-b border-white/20">
    <button 
      className="w-full py-8 flex items-center justify-between text-left group"
      onClick={onClick}
    >
      <span className="text-2xl font-medium group-hover:text-randstad-blue transition-colors">{title}</span>
      {isOpen ? <ChevronUp size={24} /> : <ChevronDown size={24} />}
    </button>
    <AnimatePresence>
      {isOpen && (
        <motion.div 
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: 'auto', opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          className="overflow-hidden"
        >
          <div className="pb-8 text-lg opacity-80 leading-relaxed">
            Randstad has been a key partner in our growth journey. Their deep understanding of our industry and commitment to finding the right talent has consistently exceeded our expectations. We value their professionalism and the quality of candidates they bring to the table.
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  </div>
);

const ClientTestimonials = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const clients = [
    "Tata Steel",
    "Edward Lifesciences",
    "Mumbai Metro",
    "Schueco",
    "Steelcase",
    "Canara Robeco"
  ];

  return (
    <section className="bg-randstad-navy text-white py-24">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-12 gap-12">
        <div className="lg:col-span-4">
          <h2 className="text-4xl font-bold mb-6">client testimonials</h2>
        </div>
        <div className="lg:col-span-8">
          <p className="text-xl mb-12 opacity-80 leading-relaxed">
            Discover the voices of our satisfied clients through their testimonials, sharing their experiences and successes with our services.
          </p>
          <div className="mt-8">
            {clients.map((client, index) => (
              <AccordionItem 
                key={client} 
                title={client} 
                isOpen={openIndex === index}
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const TestimonialCards = () => (
  <section className="py-24 bg-white">
    <div className="max-w-[1440px] mx-auto px-6 lg:px-12 grid grid-cols-1 md:grid-cols-3 gap-8">
      {/* Card 1 */}
      <div className="bg-[#ffc62d] p-10 rounded-2xl relative flex flex-col justify-between min-h-[400px]">
        <div className="absolute top-6 left-6">
          <div className="w-4 h-4 bg-[#2175d9] rounded-full"></div>
        </div>
        <div className="relative z-10">
          <div className="mb-6">
            <svg width="40" height="40" viewBox="0 0 40 40" fill="none" className="text-randstad-navy">
              <path d="M10 15H18V23H10V15ZM22 15H30V23H22V15Z" fill="currentColor"/>
              <circle cx="14" cy="19" r="8" stroke="currentColor" strokeWidth="4"/>
              <circle cx="26" cy="19" r="8" stroke="currentColor" strokeWidth="4"/>
            </svg>
          </div>
          <p className="text-lg font-medium leading-relaxed mb-8">
            “i’ve been working with randstad for 2 years now. they’ve given me great work opportunities and strong support. whenever i’ve had concerns, they’ve responded positively and helped me out. thank you, randstad, for this wonderful journey!”
          </p>
        </div>
        <div className="flex items-center justify-between">
          <span className="text-lg font-bold">- prashant</span>
          <div className="w-12 h-12 bg-randstad-navy rounded-full flex items-center justify-center">
             <div className="w-6 h-6 bg-[#ffc62d] rounded-t-full"></div>
          </div>
        </div>
      </div>

      {/* Card 2 */}
      <div className="bg-[#f24e2e] p-10 rounded-2xl relative flex flex-col justify-between min-h-[400px] text-white">
        <div className="absolute top-6 left-6 flex gap-2">
          <div className="w-4 h-4 bg-[#ffc62d] rounded-full"></div>
          <div className="w-4 h-4 bg-[#ffc62d] rounded-full"></div>
        </div>
        <div className="relative z-10">
          <div className="bg-white rounded-3xl p-8 text-randstad-navy relative">
            <p className="text-lg font-medium leading-relaxed">
              “i have been associated with randstad from last 12 years. their impeccable human resources practices makes them one of the best in the industry. so thank you randstad team for being with us throughout the journey.”
            </p>
            <div className="absolute -bottom-4 left-10 w-8 h-8 bg-white rotate-45"></div>
          </div>
        </div>
        <div className="flex items-center justify-between mt-8">
          <span className="text-lg font-bold">- payal</span>
          <div className="flex -space-x-2">
            <div className="w-10 h-10 bg-[#ffc62d] rounded-full border-2 border-[#f24e2e]"></div>
            <div className="w-10 h-10 bg-randstad-navy rounded-full border-2 border-[#f24e2e]"></div>
          </div>
        </div>
      </div>

      {/* Card 3 */}
      <div className="bg-randstad-navy p-10 rounded-2xl relative flex flex-col justify-between min-h-[400px] text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
           <div className="absolute top-10 right-10 w-20 h-20 border-4 border-white rounded-full"></div>
           <div className="absolute bottom-10 left-10 w-32 h-32 border-4 border-white rounded-full"></div>
        </div>
        <div className="relative z-10">
          <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 border border-white/20">
            <p className="text-lg font-medium leading-relaxed">
              hi, i am a randstad employee. i have been working here since 2022. you can also join randstad, it's a trusted company. they offer great salaries and career opportunities. their team is also very responsible.
            </p>
            <div className="mt-6 text-randstad-blue font-bold cursor-pointer hover:underline">view all 7 photos</div>
          </div>
        </div>
        <div className="flex items-center justify-between mt-8">
          <span className="text-lg font-bold">- narmada</span>
          <div className="flex gap-1">
            <div className="w-8 h-8 bg-[#00c1de] rounded-full"></div>
            <div className="w-8 h-8 bg-[#f24e2e] rounded-full"></div>
            <div className="w-8 h-8 bg-[#ffc62d] rounded-full"></div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const Upskilling = () => (
  <section className="py-24 bg-white">
    <div className="max-w-[1440px] mx-auto px-6 lg:px-12 flex flex-col lg:flex-row items-center justify-between gap-12">
      <div className="lg:w-2/3">
        <h2 className="text-5xl lg:text-7xl font-bold leading-[1.1] tracking-tight mb-4">
          upskilling and reskilling: essential ingredients in your future success
        </h2>
        <p className="text-4xl lg:text-5xl text-randstad-blue font-medium leading-tight">
          download the guide to know more about this subject.
        </p>
      </div>
      <div className="lg:w-1/3 flex justify-end">
        <button className="px-12 py-5 border-2 border-randstad-navy rounded-md font-bold text-lg hover:bg-randstad-navy hover:text-white transition-all duration-300">
          download now
        </button>
      </div>
    </div>
  </section>
);


// --- Main App ---

export default function Testimonial() {
  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-grow">
        <Hero />
        <ReadMore />
        <ClientTestimonials />
        <TestimonialCards />
        <Upskilling />
      </main>
      
      {/* Cookie/Accessibility floating button */}
      <div className="fixed bottom-6 left-6 z-50">
        <button className="w-12 h-12 bg-[#2175d9] text-white rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform">
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
