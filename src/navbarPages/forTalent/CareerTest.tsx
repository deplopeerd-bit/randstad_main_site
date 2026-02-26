import React, { useState } from "react";
import { AnimatePresence, motion } from "motion/react";

import { 
  Search, 
  Heart, 
  User, 
  ChevronDown, 
  ChevronRight, 
  Play, 
  Linkedin, 
  Twitter, 
  Facebook, 
  Youtube, 
  Instagram,
  Menu,
  X
} from 'lucide-react';

const tips = [
  { id: 1, title: 'understand the purpose of career tests.' },
  { id: 2, title: 'choose the right career test.' },
  { id: 3, title: 'prepare for the test.' },
  { id: 4, title: 'interpret your results carefully.' },
  { id: 5, title: 'seek professional guidance.' },
  { id: 6, title: 'compare results with real-world experience.' },
  { id: 7, title: 'use results to explore career options.' },
  { id: 8, title: 'reassess periodically.' },
  { id: 9, title: 'combine tests with other career exploration methods.' },
  { id: 10, title: 'stay positive and open-minded.' },
];

const updates = [
  {
    date: '02 August 2023',
    title: 'randstad with heart.',
    image: 'https://picsum.photos/seed/heart/600/400'
  },
  {
    date: '09 June 2023',
    title: 'keep your cv real and avoid fake claims.',
    image: 'https://picsum.photos/seed/cv/600/400'
  },
  {
    date: '20 April 2023',
    title: '‘tips n tricks’ – to use the right communication channels and skills.',
    image: 'https://picsum.photos/seed/tips/600/400'
  }
];

const moreArticles = [
  {
    date: '17 April 2023',
    title: 'what you should be aware of your performance management measures for remote work?',
    image: 'https://picsum.photos/seed/remote1/600/400'
  },
  {
    date: '17 April 2023',
    title: 'in-office or remote work - which is better?',
    image: 'https://picsum.photos/seed/remote2/600/400'
  },
  {
    date: '17 April 2023',
    title: 'what are your responsibilities as a remote worker?',
    image: 'https://picsum.photos/seed/remote3/600/400'
  }
];

export default function CareerTestsPage() {
  const [openTip, setOpenTip] = useState<number | null>(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white font-sans text-brand-blue overflow-x-hidden">
      {/* Top Bar */}
      <div className="bg-white border-b border-gray-100 py-2 px-4 md:px-12 flex justify-end items-center text-xs space-x-4">
        <a href="#" className="hover:underline">contact us</a>
      </div>

      {/* Header */}
      

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="lg:hidden bg-white border-b border-gray-100 p-4 space-y-4"
          >
            <a href="#" className="block py-2 border-b border-gray-50">find a job</a>
            <a href="#" className="block py-2 border-b border-gray-50">for talent</a>
            <a href="#" className="block py-2 border-b border-gray-50">for employer</a>
            <a href="#" className="block py-2 border-b border-gray-50">resources</a>
            <a href="#" className="block py-2 border-b border-gray-50">about us</a>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Breadcrumbs */}
      <div className="px-4 md:px-12 py-4 text-xs text-gray-500 flex items-center space-x-2">
        <a href="#" className="hover:underline">home</a>
        <ChevronRight className="w-3 h-3" />
        <a href="#" className="hover:underline">career advice</a>
        <ChevronRight className="w-3 h-3" />
        <span className="font-medium text-brand-blue">career tests</span>
      </div>

      {/* Hero Section */}
      <section className="bg-brand-blue text-white px-4 md:px-12 py-16 md:py-24 relative overflow-hidden">
        <div className="max-w-4xl">
          <h2 className="text-xl md:text-2xl font-light mb-4">career advice.</h2>
          <h1 className="text-4xl md:text-6xl font-medium leading-tight mb-8">
            learn more about:<br />
            <span className="flex items-center cursor-pointer hover:text-brand-light-blue transition-colors">
              career tests <ChevronDown className="ml-4 w-8 h-8 md:w-12 md:h-12" />
            </span>
          </h1>
          <p className="text-lg md:text-xl font-light opacity-90">Discover how to improve your career.</p>
        </div>
        {/* Ladder Graphic */}
        <div className="absolute right-12 bottom-0 hidden md:block">
           <svg width="120" height="240" viewBox="0 0 120 240" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="20" y="0" width="8" height="240" fill="#0076CE" fillOpacity="0.8"/>
              <rect x="92" y="0" width="8" height="240" fill="#0076CE" fillOpacity="0.8"/>
              <rect x="28" y="40" width="64" height="8" fill="#0076CE" fillOpacity="0.8"/>
              <rect x="28" y="90" width="64" height="8" fill="#0076CE" fillOpacity="0.8"/>
              <rect x="28" y="140" width="64" height="8" fill="#0076CE" fillOpacity="0.8"/>
              <rect x="28" y="190" width="64" height="8" fill="#0076CE" fillOpacity="0.8"/>
           </svg>
        </div>
      </section>

      {/* Top 10 Tips Section */}
      <section className="px-4 md:px-12 py-16 md:py-24 max-w-7xl mx-auto grid md:grid-cols-12 gap-12">
        <div className="md:col-span-4">
          <h2 className="text-3xl md:text-4xl font-medium leading-tight">
            top 10 tips for using career tests effectively.
          </h2>
        </div>
        <div className="md:col-span-8">
          <p className="text-lg mb-8 font-light">guide to making informed career decisions.</p>
          <div className="space-y-0 border-t border-gray-200">
            {tips.map((tip) => (
              <div key={tip.id} className="border-b border-gray-200">
                <button 
                  onClick={() => setOpenTip(openTip === tip.id ? null : tip.id)}
                  className="w-full py-6 flex justify-between items-center text-left hover:text-brand-light-blue transition-colors group"
                >
                  <span className="text-xl md:text-2xl font-light">
                    {tip.id}. {tip.title}
                  </span>
                  <ChevronDown className={`w-6 h-6 transition-transform duration-300 ${openTip === tip.id ? 'rotate-180' : ''}`} />
                </button>
                <AnimatePresence>
                  {openTip === tip.id && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="overflow-hidden"
                    >
                      <div className="pb-8 text-gray-600 leading-relaxed font-light">
                        Detailed information about {tip.title} would go here. This section provides insights and actionable advice for candidates looking to leverage career tests for their professional growth.
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Video Section */}
      <section className="bg-brand-blue text-white grid md:grid-cols-2">
        <div className="p-12 md:p-24 flex flex-col justify-center">
          <h2 className="text-4xl md:text-6xl font-medium leading-tight mb-8">
            3 effective ways to communicate better
          </h2>
          <p className="text-lg md:text-xl font-light opacity-80 mb-12">
            Having an effective communication not only boosts morale among employees but also encourages the exchange of new ideas.
          </p>
          <button className="w-fit px-8 py-3 border border-white rounded-sm hover:bg-white hover:text-brand-blue transition-all uppercase tracking-wider text-sm font-medium">
            play the video
          </button>
        </div>
        <div className="relative aspect-video md:aspect-auto bg-gray-200 overflow-hidden">
          <img 
            src="https://picsum.photos/seed/office/1200/800" 
            alt="Office meeting" 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 flex items-center justify-center">
             <div className="w-48 h-48 md:w-64 md:h-64 border-2 border-brand-light-blue rounded-full flex items-center justify-center relative">
                <div className="absolute inset-0 border-2 border-white/30 rounded-full scale-110"></div>
                <div className="absolute inset-0 border-2 border-white/10 rounded-full scale-125"></div>
                <button className="w-20 h-20 bg-brand-light-blue rounded-full flex items-center justify-center hover:scale-110 transition-transform">
                  <Play className="fill-white text-white ml-1" />
                </button>
             </div>
          </div>
        </div>
      </section>

      {/* Latest Updates Section */}
      <section className="px-4 md:px-12 py-16 md:py-24 max-w-7xl mx-auto">
        <div className="flex justify-between items-end mb-12">
          <h2 className="text-3xl md:text-4xl font-medium">latest updates</h2>
          <a href="#" className="text-xl font-light hover:text-brand-light-blue border-b border-transparent hover:border-brand-light-blue transition-all">see all articles</a>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {updates.map((update, idx) => (
            <div key={idx} className="group cursor-pointer">
              <div className="aspect-[3/2] overflow-hidden mb-6 rounded-sm">
                <img 
                  src={update.image} 
                  alt={update.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
              </div>
              <p className="text-sm text-gray-500 mb-2">{update.date}</p>
              <h3 className="text-2xl font-light group-hover:text-brand-light-blue transition-colors leading-tight">
                {update.title}
              </h3>
            </div>
          ))}
        </div>
      </section>

      {/* More Articles Section */}
      <section className="px-4 md:px-12 pb-16 md:pb-24 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8">
          {moreArticles.map((article, idx) => (
            <div key={idx} className="group cursor-pointer">
              <div className="aspect-[3/2] overflow-hidden mb-6 rounded-sm">
                <img 
                  src={article.image} 
                  alt={article.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
              </div>
              <p className="text-sm text-gray-500 mb-2">{article.date}</p>
              <h3 className="text-2xl font-light group-hover:text-brand-light-blue transition-colors leading-tight">
                {article.title}
              </h3>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section className="px-4 md:px-12 py-16 md:py-24 max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-5xl md:text-7xl font-medium leading-tight mb-12">
            get in touch or explore available jobs.
          </h2>
          <button className="px-10 py-4 border border-brand-light-blue text-brand-light-blue rounded-sm hover:bg-brand-light-blue hover:text-white transition-all uppercase tracking-wider text-sm font-medium">
            contact us
          </button>
        </div>
        <div className="flex justify-center md:justify-end">
           <div className="relative w-64 h-[500px] border-8 border-gray-100 rounded-[40px] bg-white shadow-2xl overflow-hidden">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-gray-100 rounded-b-2xl"></div>
              <div className="p-6 pt-12 space-y-4">
                 <div className="w-full h-4 bg-gray-100 rounded"></div>
                 <div className="w-3/4 h-4 bg-gray-100 rounded"></div>
                 <div className="w-full aspect-square bg-brand-light-blue/10 rounded-2xl flex items-center justify-center">
                    <div className="w-16 h-16 bg-brand-light-blue rounded-full animate-pulse"></div>
                 </div>
                 <div className="space-y-2">
                    <div className="w-full h-2 bg-gray-100 rounded"></div>
                    <div className="w-full h-2 bg-gray-100 rounded"></div>
                    <div className="w-1/2 h-2 bg-gray-100 rounded"></div>
                 </div>
              </div>
              {/* Signal waves */}
              <div className="absolute top-8 right-0 -mr-12">
                 <div className="w-32 h-32 border-4 border-brand-light-blue rounded-full opacity-20 animate-ping"></div>
              </div>
              <div className="absolute top-16 right-0 -mr-8">
                 <div className="w-24 h-24 border-4 border-brand-light-blue rounded-full opacity-40"></div>
              </div>
           </div>
        </div>
      </section>

      {/* Footer */}
      

      {/* Sticky Elements */}
      <div className="fixed right-0 top-1/2 -translate-y-1/2 z-40">
        <button className="bg-brand-light-blue text-white py-4 px-2 rounded-l-md vertical-text text-xs font-medium uppercase tracking-widest shadow-lg hover:pr-4 transition-all">
          Feedback
        </button>
      </div>

      <div className="fixed bottom-6 left-6 z-40">
        <button className="w-12 h-12 bg-brand-light-blue text-white rounded-full flex items-center justify-center shadow-xl hover:scale-110 transition-transform">
           <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2ZM12 20C7.58172 20 4 16.4183 4 12C4 7.58172 7.58172 4 12 4C16.4183 4 20 7.58172 20 12C20 16.4183 16.4183 20 12 20ZM15 10C15 10.5523 14.5523 11 14 11C13.4477 11 13 10.5523 13 10C13 9.44772 13.4477 9 14 9C14.5523 9 15 9.44772 15 10ZM10 11C10.5523 11 11 10.5523 11 10C11 9.44772 10.5523 9 10 9C9.44772 9 9 9.44772 9 10C9 10.5523 9.44772 11 10 11ZM12 18C14.5 18 16.5 16.5 17 14.5H7C7.5 16.5 9.5 18 12 18Z" fill="currentColor"/>
           </svg>
        </button>
      </div>

      <style>{`
        .vertical-text {
          writing-mode: vertical-rl;
          transform: rotate(180deg);
        }
      `}</style>
    </div>
  );
}
