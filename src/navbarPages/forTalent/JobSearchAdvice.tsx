import React, { useState } from "react";
import { motion } from "motion/react";

import { 
  Search, 
  User, 
  ChevronDown, 
  Play, 
  Linkedin, 
  Twitter, 
  Facebook, 
  Youtube, 
  Instagram,
  Heart
} from 'lucide-react';

const AccordionItem = ({ title, index }: { title: string; index: number }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="border-b border-gray-200 py-4">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex justify-between items-center text-left group"
      >
        <span className="text-xl md:text-2xl font-light text-[#051937] group-hover:text-[#2175d9] transition-colors">
          {index}. {title}
        </span>
        <ChevronDown className={`w-6 h-6 text-[#2175d9] transition-transform ${isOpen ? 'rotate-180' : ''}`} />
      </button>
      {isOpen && (
        <div className="mt-4 text-gray-600 leading-relaxed">
          Detailed information about {title.toLowerCase()} would go here. This is a placeholder for the actual content of the strategy.
        </div>
      )}
    </div>
  );
};

const ForTalentJobSearchAdvice: React.FC = () => {
  return (
    <div className="font-sans text-[#051937] bg-white">
      {/* Top Bar */}
      <div className="bg-white border-b border-gray-100 py-2 px-4 md:px-8 flex justify-end">
        <a href="#" className="text-xs text-gray-500 hover:text-[#2175d9] transition-colors">contact us</a>
      </div>

      {/* Header */}
      

      {/* Breadcrumbs */}
      <div className="px-4 md:px-8 py-4 text-xs text-gray-500 bg-[#051937] text-white/70">
        <div className="max-w-7xl mx-auto flex gap-2">
          <a href="#" className="hover:text-white">home</a>
          <span>&gt;</span>
          <a href="#" className="hover:text-white">career advice</a>
          <span>&gt;</span>
          <span className="text-white">job search advice</span>
        </div>
      </div>

      {/* Hero Section */}
      <section className="bg-[#051937] text-white py-16 md:py-24 px-4 md:px-8 relative overflow-hidden">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 items-center gap-12">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-xl md:text-2xl font-light mb-4">career advice.</h2>
            <h1 className="text-4xl md:text-6xl font-light leading-tight mb-8">
              learn more about:<br />
              <span className="text-[#2175d9] flex items-center gap-2">
                job search strategy <ChevronDown className="w-8 h-8 md:w-12 md:h-12" />
              </span>
            </h1>
            <p className="text-lg md:text-xl font-light opacity-90">Discover how to improve your career.</p>
          </motion.div>
          <div className="relative flex justify-center">
            <div className="w-64 h-64 md:w-80 md:h-80 border-4 border-[#2175d9]/30 rounded-full flex items-center justify-center">
              <div className="w-48 h-48 md:w-60 md:h-60 border-4 border-[#2175d9]/60 rounded-full flex items-center justify-center">
                <div className="w-32 h-32 md:w-40 md:h-40 border-4 border-[#2175d9] rounded-full flex items-center justify-center">
                  <Search className="w-12 h-12 md:w-16 md:h-16 text-[#2175d9]" />
                </div>
              </div>
            </div>
            {/* Decorative arcs */}
            <div className="absolute top-0 right-0 w-full h-full pointer-events-none opacity-20">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] border border-white rounded-full"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Top 10 Section */}
      <section className="py-16 md:py-24 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-3 gap-12">
          <div className="lg:col-span-1">
            <h2 className="text-3xl md:text-4xl font-light leading-tight text-[#051937]">
              top 10 job search<br />strategies for success.
            </h2>
          </div>
          <div className="lg:col-span-2">
            <AccordionItem index={1} title="define your career goals." />
            <AccordionItem index={2} title="clear a tailored resume." />
            <AccordionItem index={3} title="write an impactful cover letter." />
            <AccordionItem index={4} title="utilize job search engines." />
            <AccordionItem index={5} title="network strategically." />
            <AccordionItem index={6} title="prepare thoroughly for interviews." />
            <AccordionItem index={7} title="follow up professionally." />
            <AccordionItem index={8} title="stay organized in your job search." />
            <AccordionItem index={9} title="enhance your skills and qualifications." />
            <AccordionItem index={10} title="maintain a positive and persistent attitude." />
          </div>
        </div>
      </section>

      {/* Video Section */}
      <section className="relative h-[400px] md:h-[600px] overflow-hidden">
        <img 
          src="https://picsum.photos/seed/cycling/1920/1080" 
          alt="Person on bike" 
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-black/20 flex items-center px-4 md:px-24">
          <div className="max-w-7xl w-full">
            <div className="inline-block bg-white p-6 md:p-10 mb-4">
              <h2 className="text-4xl md:text-7xl font-light text-[#2175d9] leading-none">
                the hardest part<br />about
              </h2>
            </div>
            <br />
            <div className="inline-block bg-[#2175d9] p-6 md:p-10">
              <h2 className="text-4xl md:text-7xl font-light text-white leading-none">
                job hunting.
              </h2>
            </div>
            <button className="mt-8 flex items-center gap-4 text-white hover:text-[#2175d9] transition-colors group">
              <div className="w-12 h-12 md:w-16 md:h-16 rounded-full border-2 border-white flex items-center justify-center group-hover:border-[#2175d9]">
                <Play fill="currentColor" size={24} />
              </div>
              <span className="text-lg md:text-xl font-light">play the video</span>
            </button>
          </div>
        </div>
      </section>

      {/* Related Articles Section */}
      <section className="py-16 md:py-24 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-3 gap-12">
          <div className="lg:col-span-1">
            <h2 className="text-3xl md:text-4xl font-light text-[#051937]">
              job search strategy.
            </h2>
          </div>
          <div className="lg:col-span-2">
            <h3 className="text-xl font-light mb-8">related articles.</h3>
            <div className="border-t border-gray-200">
              <AccordionItem index={0} title="how to tell when it's the time to find a new job." />
              <AccordionItem index={0} title="how to find a job." />
              <AccordionItem index={0} title="why use a recruitment specialist?" />
            </div>
          </div>
        </div>
      </section>

      {/* Latest Updates Section */}
      <section className="bg-white py-16 md:py-24 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-end mb-12">
            <h2 className="text-3xl md:text-4xl font-light text-[#051937]">latest updates</h2>
            <a href="#" className="text-[#2175d9] hover:underline text-lg font-light">see all articles</a>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { 
                date: '20 April 2023', 
                title: '‘tips n tricks’ – to use the right communication channels and skills.',
                img: 'https://picsum.photos/seed/tips/600/400'
              },
              { 
                date: '17 April 2023', 
                title: 'what you should be aware of your performance management measures for remote work?',
                img: 'https://picsum.photos/seed/remote/600/400'
              },
              { 
                date: '17 April 2023', 
                title: 'in-office or remote work - which is better?',
                img: 'https://picsum.photos/seed/office/600/400'
              },
              { 
                date: '17 April 2023', 
                title: 'what are your responsibilities as a remote worker?',
                img: 'https://picsum.photos/seed/worker/600/400'
              },
              { 
                date: '17 April 2023', 
                title: 'how to stay healthy working from home or remote?',
                img: 'https://picsum.photos/seed/health/600/400'
              },
              { 
                date: '17 April 2023', 
                title: 'how to make the best of a hybrid work model?',
                img: 'https://picsum.photos/seed/hybrid/600/400'
              }
            ].map((article, i) => (
              <motion.div 
                key={i}
                whileHover={{ y: -5 }}
                className="group cursor-pointer"
              >
                <div className="aspect-video overflow-hidden rounded-lg mb-4">
                  <img 
                    src={article.img} 
                    alt={article.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <p className="text-sm text-gray-500 mb-2">{article.date}</p>
                <h3 className="text-xl font-light leading-tight group-hover:text-[#2175d9] transition-colors">
                  {article.title}
                </h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="bg-[#f5f5f5] py-16 md:py-24 px-4 md:px-8">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="md:w-1/2">
            <h2 className="text-4xl md:text-6xl font-light text-[#051937] leading-tight mb-8">
              get in touch or<br />search our jobs.
            </h2>
            <button className="px-8 py-3 border border-[#051937] text-[#051937] hover:bg-[#051937] hover:text-white transition-all rounded-md text-lg font-light">
              contact us
            </button>
          </div>
          <div className="md:w-1/2 relative">
            <div className="w-64 h-[450px] bg-[#2175d9] rounded-[40px] mx-auto relative overflow-hidden shadow-2xl">
              <div className="absolute top-4 left-1/2 -translate-x-1/2 w-16 h-1 bg-white/20 rounded-full"></div>
              <div className="mt-20 px-6">
                <div className="w-full h-12 bg-white/10 rounded-lg mb-4"></div>
                <div className="w-3/4 h-12 bg-white/10 rounded-lg mb-4"></div>
                <div className="w-full h-32 bg-white/10 rounded-lg"></div>
              </div>
              {/* Signal waves */}
              <div className="absolute -top-10 -right-10 w-40 h-40 border border-white/20 rounded-full"></div>
              <div className="absolute -top-16 -right-16 w-56 h-56 border border-white/10 rounded-full"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      

      {/* Floating Feedback Button */}
      <div className="fixed right-0 top-1/2 -translate-y-1/2 z-40">
        <button className="bg-[#2175d9] text-white py-4 px-2 rounded-l-md vertical-text text-xs font-bold tracking-widest hover:bg-[#1a5eb0] transition-colors">
          FEEDBACK
        </button>
      </div>

      {/* Cookie Icon */}
      <div className="fixed bottom-4 left-4 z-40">
        <button className="w-10 h-10 bg-[#2175d9] text-white rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2a10 10 0 1 0 10 10 4 4 0 0 1-5-5 4 4 0 0 1-5-5"></path><path d="M8.5 8.5v.01"></path><path d="M16 15.5v.01"></path><path d="M12 12v.01"></path><path d="M11 17v.01"></path><path d="M7 14v.01"></path></svg>
        </button>
      </div>

      <style>{`
        .vertical-text {
          writing-mode: vertical-rl;
          text-orientation: mixed;
        }
      `}</style>
    </div>
  );
};

export default ForTalentJobSearchAdvice;
