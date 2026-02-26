import React, { useState } from "react";
import { AnimatePresence, motion } from "motion/react";

import { 
  Search, 
  ChevronDown, 
  ChevronRight, 
  Heart, 
  User, 
  Linkedin, 
  MessageSquare,
  Globe,
  Cookie,
  ShieldCheck,
  AlertCircle,
  MapPin,
  Menu,
  X
} from 'lucide-react';

// --- Types ---
interface Article {
  id: number;
  date: string;
  title: string;
  tags: string[];
  imageUrl: string;
}

// --- Mock Data ---
const ARTICLES: Article[] = [
  {
    id: 1,
    date: '23 February 2026',
    title: 'the silent tax of the accountant shortage.',
    tags: ['employee productivity', 'employee productivity'],
    imageUrl: 'https://picsum.photos/seed/acc/400/250'
  },
  {
    id: 2,
    date: '19 January 2026',
    title: 'what is social media screening?',
    tags: ['attracting and recruiting talent', 'recruitment process', 'talent acquisition'],
    imageUrl: 'https://picsum.photos/seed/social/400/250'
  },
  {
    id: 3,
    date: '12 January 2026',
    title: 'how to set up an effective reference-checking process.',
    tags: ['recruitment process', 'talent acquisition', 'attracting and recruiting talent'],
    imageUrl: 'https://picsum.photos/seed/ref/400/250'
  },
  {
    id: 4,
    date: '05 January 2026',
    title: 'how to ask the right questions during a reference check.',
    tags: ['recruitment process', 'talent acquisition', 'attracting and recruiting talent'],
    imageUrl: 'https://picsum.photos/seed/ques/400/250'
  },
  {
    id: 5,
    date: '29 December 2025',
    title: 'what is an employment background check?',
    tags: ['interview questions', 'recruitment process', 'talent acquisition'],
    imageUrl: 'https://picsum.photos/seed/bg/400/250'
  },
  {
    id: 6,
    date: '22 December 2025',
    title: 'what is a reference check, and why is it important?',
    tags: ['recruitment process', 'talent acquisition', 'attracting and recruiting talent'],
    imageUrl: 'https://picsum.photos/seed/imp/400/250'
  },
  {
    id: 7,
    date: '15 December 2025',
    title: 'the role of AI in finance and accounting.',
    tags: ['workforce management', 'attracting and recruiting talent'],
    imageUrl: 'https://picsum.photos/seed/ai/400/250'
  },
  {
    id: 8,
    date: '08 December 2025',
    title: 'transforming finance and accounting: how businesses are winning with AI.',
    tags: ['attracting and recruiting talent', 'workforce management'],
    imageUrl: 'https://picsum.photos/seed/win/400/250'
  },
  {
    id: 9,
    date: '01 December 2025',
    title: 'AI use cases in finance: what they mean for your team.',
    tags: ['workforce management', 'attracting and recruiting talent'],
    imageUrl: 'https://picsum.photos/seed/team/400/250'
  },
  {
    id: 10,
    date: '24 November 2025',
    title: 'top trends shaping finance and accounting: a mid-2025 outlook and beyond.',
    tags: ['workforce management', 'attracting and recruiting talent'],
    imageUrl: 'https://picsum.photos/seed/trends/400/250'
  }
];

const CATEGORIES = [
  'HR trends',
  'attracting and recruiting talent',
  'communication skills',
  'corporate culture',
  'disruption in the workplace',
  'emerging workforce trends',
  'employee development',
  'employee engagement',
  'employee productivity',
  'employee retention'
];

// --- Components ---

const Hero = () => {
  return (
    <section className="bg-randstad-blue text-white py-16 md:py-24">
      <div className="max-w-[1440px] mx-auto px-4 md:px-8">
        <div className="mb-8 flex items-center gap-2 text-[12px] opacity-80">
          <span>home</span> <ChevronRight size={12} />
          <span>hr trends & insights</span> <ChevronRight size={12} />
          <span className="font-semibold">all articles</span>
        </div>
        
        <div className="max-w-3xl">
          <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-[0.9] tracking-tighter">
            workplace insights<br />all articles.
          </h1>
          <p className="text-lg md:text-xl leading-relaxed opacity-90">
            Today's employees expect more from their employer. Work-life balance, social responsibility, equality for women and minorities, and technological innovation are just a few of the current issues organizations are facing. We're here to keep you informed about trending issues that will impact workplaces like yours today and tomorrow.
          </p>
        </div>
      </div>
    </section>
  );
};

const Sidebar = () => {
  const [isCategoriesOpen, setIsCategoriesOpen] = useState(true);
  const [isTopicsOpen, setIsTopicsOpen] = useState(true);

  return (
    <aside className="w-full lg:w-80 flex-shrink-0">
      <div className="mb-12">
        <h3 className="text-xl font-bold mb-4">refine your search</h3>
        <div className="flex flex-col gap-4">
          <input 
            type="text" 
            placeholder="keyword or title" 
            className="w-full border border-gray-300 px-4 py-3 text-[14px] focus:outline-none focus:border-randstad-blue transition-colors"
          />
          <button className="w-full border border-randstad-blue text-randstad-blue py-3 font-medium hover:bg-randstad-blue hover:text-white transition-all">
            search
          </button>
        </div>
      </div>

      <div className="border-t border-gray-200 py-6">
        <button 
          onClick={() => setIsCategoriesOpen(!isCategoriesOpen)}
          className="flex items-center justify-between w-full text-left mb-4"
        >
          <h3 className="text-xl font-bold">categories</h3>
          <ChevronDown size={20} className={`transition-transform ${isCategoriesOpen ? '' : '-rotate-90'}`} />
        </button>
        <AnimatePresence>
          {isCategoriesOpen && (
            <motion.div 
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="overflow-hidden flex flex-col gap-3"
            >
              {CATEGORIES.map((cat) => (
                <label key={cat} className="flex items-center gap-3 cursor-pointer group">
                  <div className="w-5 h-5 border border-gray-300 flex items-center justify-center group-hover:border-randstad-blue transition-colors">
                    <div className="w-3 h-3 bg-randstad-blue opacity-0 group-hover:opacity-20 transition-opacity"></div>
                  </div>
                  <span className="text-[14px] text-gray-700 group-hover:text-randstad-blue transition-colors">{cat}</span>
                </label>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <div className="border-t border-gray-200 py-6">
        <button 
          onClick={() => setIsTopicsOpen(!isTopicsOpen)}
          className="flex items-center justify-between w-full text-left mb-4"
        >
          <h3 className="text-xl font-bold">topics</h3>
          <ChevronDown size={20} className={`transition-transform ${isTopicsOpen ? '' : '-rotate-90'}`} />
        </button>
        <AnimatePresence>
          {isTopicsOpen && (
            <motion.div 
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="overflow-hidden flex flex-col gap-3"
            >
              {['COVID-19 insights , guides and advice', 'HR strategy', 'VUCA world', 'attracting & recruiting talent', 'attracting and recruiting talent'].map((topic) => (
                <label key={topic} className="flex items-center gap-3 cursor-pointer group">
                  <div className="w-5 h-5 border border-gray-300 flex items-center justify-center group-hover:border-randstad-blue transition-colors">
                    <div className="w-3 h-3 bg-randstad-blue opacity-0 group-hover:opacity-20 transition-opacity"></div>
                  </div>
                  <span className="text-[14px] text-gray-700 group-hover:text-randstad-blue transition-colors">{topic}</span>
                </label>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </aside>
  );
};

const ArticleCard: React.FC<{ article: Article }> = ({ article }) => {
  return (
    <div className="flex flex-col md:flex-row gap-6 py-8 border-b border-gray-100 group cursor-pointer">
      <div className="w-full md:w-48 h-32 flex-shrink-0 overflow-hidden rounded-lg">
        <img 
          src={article.imageUrl} 
          alt={article.title} 
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          referrerPolicy="no-referrer"
        />
      </div>
      <div className="flex flex-col gap-2">
        <span className="text-[12px] text-gray-500">{article.date}</span>
        <h2 className="text-xl md:text-2xl font-bold group-hover:text-randstad-blue transition-colors leading-tight">
          {article.title}
        </h2>
        <div className="flex flex-wrap gap-x-2 gap-y-1 mt-1">
          {article.tags.map((tag, idx) => (
            <span key={idx} className="text-[12px] text-randstad-blue hover:underline">
              {tag}{idx < article.tags.length - 1 ? ',' : ''}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

const Footer = () => {
  const footerLinks = {
    'find a job': ['explore all jobs', 'submit your cv', 'join our team', 'refer a friend'],
    'for employers': ['submit a vacancy', 'request a callback', 'our services', 'specialisms', 'case studies', 'testimonials'],
    'workforce insights': ['talent insights reports', 'employer brand research reports', 'salary trends reports', 'ed&i reports', 'workmonitor reports', 'startup hiring trends', 'talent pulse surveys'],
    'jobs': ['engineering jobs', 'cxo jobs', 'manufacturing jobs', 'supply chain & logistics jobs', 'education jobs', 'finance & accounting jobs', 'healthcare jobs', 'hr & admin support jobs', 'ites/gcc jobs', 'legal & compliance jobs', 'sales & marketing jobs'],
    'for talents': ['specialisms', 'testimonials', 'career advice', 'beware of job scams'],
    'resources': ['case studies', 'press room', 'blogs']
  };
};

// --- Main App ---

export default function FooterBlogs() {
  return (
    <div className="min-h-screen flex flex-col">
      
      <main className="flex-grow">
        <Hero />
        
        <div className="max-w-[1440px] mx-auto px-4 md:px-8 py-12">
          <div className="flex flex-col lg:flex-row gap-16">
            <Sidebar />
            
            <div className="flex-grow">
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8 border-b border-gray-100 pb-6">
                <span className="text-[14px] text-gray-500">articles 1 to 10 of 471</span>
                <div className="relative group">
                  <button className="flex items-center gap-8 border border-gray-300 px-4 py-2 text-[14px]">
                    newest first
                    <ChevronDown size={16} />
                  </button>
                </div>
              </div>

              <div className="flex flex-col">
                {ARTICLES.map((article) => (
                  <ArticleCard key={article.id} article={article} />
                ))}
              </div>

              <div className="flex items-center gap-4 mt-12">
                {[1, 2, 3, 4, 5].map((num) => (
                  <button 
                    key={num} 
                    className={`w-10 h-10 flex items-center justify-center text-[14px] font-medium transition-colors ${num === 1 ? 'text-randstad-blue border-b-2 border-randstad-blue' : 'text-gray-500 hover:text-randstad-blue'}`}
                  >
                    {num}
                  </button>
                ))}
                <button className="text-randstad-blue hover:translate-x-1 transition-transform">
                  <ChevronRight size={20} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>


      {/* Floating Feedback Button */}
      <div className="fixed right-0 top-1/2 -translate-y-1/2 z-40 hidden md:block">
        <button className="bg-randstad-blue text-white py-3 px-1 rounded-l-md flex flex-col items-center gap-2 [writing-mode:vertical-rl] rotate-180">
          <span className="text-[12px] font-bold tracking-widest uppercase">feedback</span>
        </button>
      </div>

      {/* Cookie/Bot Icon */}
      <div className="fixed bottom-6 left-6 z-40">
        <button className="w-12 h-12 bg-randstad-blue text-white rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform">
          <Cookie size={24} />
        </button>
      </div>
    </div>
  );
}
