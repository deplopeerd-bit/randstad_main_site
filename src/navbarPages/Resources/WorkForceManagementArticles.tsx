import React, { useState } from "react";

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
  ArrowRight
} from 'lucide-react';

// Exact Colors from Screenshots
const COLORS = {
  brandBlue: '#2175d9',
  footerNavy: '#0a163b',
  textGray: '#4a4a4a',
  borderLight: '#e5e5e5',
  bgLight: '#f8f9fa',
};

const ARTICLES = [
  {
    id: 1,
    date: '15 December 2025',
    title: 'the role of AI in finance and accounting.',
    tags: ['workforce management', 'attracting and recruiting talent'],
    image: 'https://picsum.photos/seed/ai-finance/400/250'
  },
  {
    id: 2,
    date: '08 December 2025',
    title: 'transforming finance and accounting: how businesses are winning with AI.',
    tags: ['attracting and recruiting talent', 'workforce management'],
    image: 'https://picsum.photos/seed/transform-finance/400/250'
  },
  {
    id: 3,
    date: '01 December 2025',
    title: 'AI use cases in finance: what they mean for your team.',
    tags: ['workforce management', 'attracting and recruiting talent'],
    image: 'https://picsum.photos/seed/ai-use-cases/400/250'
  },
  {
    id: 4,
    date: '24 November 2025',
    title: 'top trends shaping finance and accounting: a mid-2025 outlook and beyond.',
    tags: ['workforce management', 'attracting and recruiting talent'],
    image: 'https://picsum.photos/seed/finance-trends/400/250'
  },
  {
    id: 5,
    date: '31 March 2025',
    title: 'why supporting employees to set a career path is a top priority',
    tags: ['workforce management', 'attracting and recruiting talent'],
    image: 'https://picsum.photos/seed/career-path/400/250'
  }
];

const CATEGORIES = [
  "HR trends", "attracting and recruiting talent", "communication skills", "corporate culture", 
  "disruption in the workplace", "emerging workforce trends", "employee development", 
  "employee engagement", "employee productivity", "employee retention", "employee satisfaction",
  "employee value proposition", "employer brand", "equity", "flexibility", "future of work",
  "gender diversity", "governance", "hiring processes", "hr innovation", "hr technology",
  "hr transformation", "human capital trends", "human resources", "internal recruitment",
  "international womens day", "interview advice", "leadership and management",
  "learning and development", "new normal", "new ways", "non-office workers",
  "organizational change", "performance appraisal", "performance management",
  "personal insights", "productivity", "recruitment", "recruitment process",
  "robotization", "skills", "skills shortages", "stem", "succession planning",
  "sustainability", "talent acquisition", "talent attraction"
];

const TOPICS = [
  "COVID-19 insights, guides and advice", "HR strategy", "VUCA world", 
  "attracting & recruiting talent", "attracting and recruiting talent", 
  "attractive company", "blue collar workers", "ceo message", "compensation"
];

export default function ResWorkForce() {
  const [isCategoriesOpen, setIsCategoriesOpen] = useState(true);
  const [isTopicsOpen, setIsTopicsOpen] = useState(true);

  return (
    <div className="min-h-screen font-sans text-[#141414] bg-white">
      {/* Top Bar */}
      <div className="border-b border-gray-100">
        <div className="max-w-[1440px] mx-auto px-6 py-2 flex justify-end items-center space-x-6 text-sm text-[#2175d9]">
          <a href="#" className="hover:underline">contact us</a>
        </div>
      </div>

      {/* Main Header */}
     

      {/* Breadcrumbs */}
      <div className="bg-[#2175d9] text-white/80 text-xs py-4">
        <div className="max-w-[1440px] mx-auto px-6 flex items-center space-x-2">
          <a href="#" className="hover:underline">home</a>
          <ChevronRight className="w-3 h-3" />
          <a href="#" className="hover:underline">hr trends & insights</a>
          <ChevronRight className="w-3 h-3" />
          <a href="#" className="hover:underline">all articles</a>
          <ChevronRight className="w-3 h-3" />
          <span>workforce management</span>
        </div>
      </div>

      {/* Hero Section */}
      <section className="bg-[#2175d9] text-white pt-12 pb-24">
        <div className="max-w-[1440px] mx-auto px-6">
          <h1 className="text-[64px] font-bold leading-[1.1] mb-8 tracking-tight">
            workforce management<br />articles.
          </h1>
          <p className="max-w-2xl text-xl leading-relaxed opacity-90">
            Today's employees expect more from their employer. 
            Work-life balance, social responsibility, equality for 
            women and minorities, and technological innovation are 
            just a few of the current issues organizations are facing. 
            We're here to keep you informed about trending issues 
            that will impact workplaces like yours today and 
            tomorrow.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <main className="max-w-[1440px] mx-auto px-6 py-12 flex flex-col lg:flex-row gap-12">
        {/* Sidebar */}
        <aside className="w-full lg:w-1/4 space-y-12">
          <div>
            <h2 className="text-2xl font-bold mb-4">refine your search</h2>
            <button className="text-[#2175d9] text-sm hover:underline mb-6 block">clear all filters (1)</button>
            
            <div className="space-y-4">
              <input 
                type="text" 
                placeholder="keyword or title" 
                className="w-full border border-gray-300 px-4 py-3 focus:outline-none focus:border-[#2175d9]"
              />
              <button className="w-full bg-white border border-[#2175d9] text-[#2175d9] py-3 font-medium hover:bg-[#2175d9] hover:text-white transition-colors">
                search
              </button>
            </div>
          </div>

          {/* Categories Accordion */}
          <div className="border-t border-gray-200 pt-6">
            <button 
              onClick={() => setIsCategoriesOpen(!isCategoriesOpen)}
              className="w-full flex items-center justify-between text-xl font-bold mb-6"
            >
              categories
              <ChevronDown className={`w-6 h-6 transition-transform ${isCategoriesOpen ? '' : '-rotate-90'}`} />
            </button>
            {isCategoriesOpen && (
              <div className="space-y-3 max-h-[600px] overflow-y-auto pr-4 scrollbar-thin scrollbar-thumb-gray-300">
                {CATEGORIES.map((cat, idx) => (
                  <label key={idx} className="flex items-start space-x-3 cursor-pointer group">
                    <input type="checkbox" className="mt-1 w-4 h-4 border-gray-300 rounded text-[#2175d9] focus:ring-[#2175d9]" />
                    <span className="text-sm group-hover:text-[#2175d9]">{cat}</span>
                  </label>
                ))}
              </div>
            )}
          </div>

          {/* Topics Accordion */}
          <div className="border-t border-gray-200 pt-6">
            <button 
              onClick={() => setIsTopicsOpen(!isTopicsOpen)}
              className="w-full flex items-center justify-between text-xl font-bold mb-6"
            >
              topics
              <ChevronDown className={`w-6 h-6 transition-transform ${isTopicsOpen ? '' : '-rotate-90'}`} />
            </button>
            {isTopicsOpen && (
              <div className="space-y-3">
                {TOPICS.map((topic, idx) => (
                  <label key={idx} className="flex items-start space-x-3 cursor-pointer group">
                    <input type="checkbox" className="mt-1 w-4 h-4 border-gray-300 rounded text-[#2175d9] focus:ring-[#2175d9]" />
                    <span className="text-sm group-hover:text-[#2175d9]">{topic}</span>
                  </label>
                ))}
              </div>
            )}
          </div>
        </aside>

        {/* Article List */}
        <div className="w-full lg:w-3/4">
          <div className="flex justify-between items-center mb-8 border-b border-gray-100 pb-4">
            <span className="text-lg">articles 1 to 10 of 42</span>
            <div className="relative group">
              <button className="flex items-center space-x-2 border border-gray-300 px-4 py-2 text-sm">
                <span>newest first</span>
                <ChevronDown className="w-4 h-4" />
              </button>
            </div>
          </div>

          <div className="space-y-12">
            {ARTICLES.map((article) => (
              <article key={article.id} className="flex flex-col md:flex-row gap-8 group cursor-pointer">
                <div className="w-full md:w-[300px] h-[200px] overflow-hidden">
                  <img 
                    src={article.image} 
                    alt={article.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="flex-1 space-y-3">
                  <span className="text-sm text-gray-500">{article.date}</span>
                  <h3 className="text-2xl font-bold leading-tight group-hover:text-[#2175d9] transition-colors">
                    {article.title}
                  </h3>
                  <div className="flex flex-wrap gap-2 pt-2">
                    {article.tags.map((tag, idx) => (
                      <span key={idx} className="text-[#2175d9] text-sm hover:underline">
                        {tag}{idx < article.tags.length - 1 ? ',' : ''}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* Pagination */}
          <div className="mt-16 flex items-center space-x-4 text-lg">
            <span className="text-[#2175d9] font-bold border-b-2 border-[#2175d9]">1</span>
            <a href="#" className="hover:text-[#2175d9]">2</a>
            <a href="#" className="hover:text-[#2175d9]">3</a>
            <a href="#" className="hover:text-[#2175d9]">4</a>
            <a href="#" className="hover:text-[#2175d9]">5</a>
            <a href="#" className="text-[#2175d9]"><ArrowRight className="w-6 h-6" /></a>
          </div>
        </div>
      </main>

      {/* Footer */}
      

      {/* Floating Feedback Button */}
      <div className="fixed right-0 top-1/2 -translate-y-1/2 z-40">
        <button className="bg-[#2175d9] text-white py-3 px-1 rounded-l-md [writing-mode:vertical-rl] text-sm font-medium hover:bg-[#1a5eb0] transition-colors">
          Feedback
        </button>
      </div>

      {/* Floating Cookie/Bot Icon */}
      <div className="fixed left-6 bottom-6 z-40">
        <button className="w-12 h-12 bg-[#2175d9] text-white rounded-full flex items-center justify-center shadow-lg hover:bg-[#1a5eb0] transition-colors">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 2a10 10 0 1 0 10 10 4 4 0 0 1-5-5 4 4 0 0 1-5-5" />
            <path d="M8.5 8.5v.01" />
            <path d="M16 15.5v.01" />
            <path d="M12 12v.01" />
            <path d="M11 17a1 1 0 1 0 2 0 1 1 0 1 0-2 0" />
            <path d="M7 13a1 1 0 1 0 2 0 1 1 0 1 0-2 0" />
          </svg>
        </button>
      </div>
    </div>
  );
}
