import React, { useState } from "react";

import { 
  Search, 
  ChevronDown, 
  ChevronUp, 
  Heart, 
  User, 
  Linkedin, 
  X,
  Menu,
  MessageSquare
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
const articles: Article[] = [
  {
    id: 1,
    date: "23 October 2025",
    title: "decoding the Indian workforce: evolving expectations, equity, and retention in 2025.",
    tags: ["attracting and recruiting talent", "emerging workforce trends", "employer branding"],
    imageUrl: "https://picsum.photos/seed/workforce/400/250"
  },
  {
    id: 2,
    date: "12 August 2024",
    title: "best practices for improving employee engagement in 2024.",
    tags: ["employee satisfaction", "employer branding", "talent management"],
    imageUrl: "https://picsum.photos/seed/engagement/400/250"
  },
  {
    id: 3,
    date: "10 June 2024",
    title: "what is an inclusive workplace?",
    tags: ["employer branding", "employee engagement"],
    imageUrl: "https://picsum.photos/seed/inclusive/400/250"
  },
  {
    id: 4,
    date: "15 April 2024",
    title: "why is there a labor shortage in manufacturing?",
    tags: ["employer branding", "talent acquisition"],
    imageUrl: "https://picsum.photos/seed/manufacturing/400/250"
  },
  {
    id: 5,
    date: "02 April 2024",
    title: "tips for overcoming today’s global labor shortage.",
    tags: ["employer branding", "employee engagement"],
    imageUrl: "https://picsum.photos/seed/shortage/400/250"
  },
  {
    id: 6,
    date: "17 July 2023",
    title: "why creating an ideal work environment is crucial for business success.",
    tags: ["employer branding", "disruption in the workforce", "workplace culture"],
    imageUrl: "https://picsum.photos/seed/environment/400/250"
  },
  {
    id: 7,
    date: "10 July 2023",
    title: "how a partnership with Randstad can help you enhance your employee experience.",
    tags: ["employer branding", "flexible staffing", "talent acquisition"],
    imageUrl: "https://picsum.photos/seed/partnership/400/250"
  },
  {
    id: 8,
    date: "03 July 2023",
    title: "building a positive work environment through employee experience.",
    tags: ["employer branding", "workplace culture", "employee engagement"],
    imageUrl: "https://picsum.photos/seed/positive/400/250"
  },
  {
    id: 9,
    date: "20 March 2023",
    title: "how randstad can help you retain talent.",
    tags: ["employee satisfaction", "employer branding", "talent management"],
    imageUrl: "https://picsum.photos/seed/retain/400/250"
  },
  {
    id: 10,
    date: "13 March 2023",
    title: "what are the best workforce strategies for employee retention?",
    tags: ["emerging workforce trends", "employer branding", "workforce management"],
    imageUrl: "https://picsum.photos/seed/strategies/400/250"
  }
];

const categories = [
  "HR trends",
  "attracting and recruiting talent",
  "communication skills",
  "corporate culture",
  "disruption in the workplace",
  "emerging workforce trends",
  "employee development",
  "employee engagement",
  "employee productivity",
  "employee retention",
  "employee satisfaction",
  "employee value proposition",
  "employer branding",
  "flexible staffing",
  "future of work",
  "hr trends",
  "interview questions",
  "job automation",
  "leadership",
  "performance appraisals",
  "recruitment",
  "recruitment process",
  "skills",
  "skills shortage",
  "talent acquisition",
  "talent management",
  "women at work",
  "workforce management",
  "workforce optimization",
  "workforce planning"
];

const topics = [
  "COVID-19 insights, guides and advice",
  "HR strategy",
  "VUCA world",
  "attracting & recruiting talent",
  "attracting and recruiting talent",
  "attractive company",
  "blue collar workers",
  "ceo message",
  "compensation",
  "compensation and benefits",
  "contingent workers",
  "cost of living",
  "digital transformation",
  "disruption in the workforce"
];

export default function ResEmpBranding() {
  const [categoriesOpen, setCategoriesOpen] = useState(true);
  const [topicsOpen, setTopicsOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("employer branding");

  return (
    <div className="min-h-screen bg-white font-sans text-[#0a192f]">
      {/* --- Header --- */}
      

      {/* --- Hero Section --- */}
      <section className="bg-[#2175d9] text-white py-16 lg:py-24">
        <div className="max-w-[1280px] mx-auto px-6">
          <nav className="flex items-center gap-2 text-xs mb-12 opacity-80">
            <a href="#" className="hover:underline">home</a>
            <span>&gt;</span>
            <a href="#" className="hover:underline">hr trends & insights</a>
            <span>&gt;</span>
            <a href="#" className="hover:underline">all articles</a>
            <span>&gt;</span>
            <span>employer branding</span>
          </nav>
          
          <h1 className="text-5xl lg:text-7xl font-light mb-8 tracking-tight leading-tight">
            employer branding <br /> articles.
          </h1>
          
          <p className="max-w-2xl text-lg lg:text-xl font-light leading-relaxed opacity-90">
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

      {/* --- Main Content --- */}
      <main className="max-w-[1280px] mx-auto px-6 py-12">
        <div className="flex flex-col lg:flex-row gap-12">
          
          {/* --- Sidebar --- */}
          <aside className="w-full lg:w-[300px] flex-shrink-0">
            <div className="mb-8 flex items-center justify-between">
              <h2 className="text-2xl font-light">refine your search</h2>
              <button className="text-[#2175d9] text-sm hover:underline">clear all filters (1)</button>
            </div>

            <div className="mb-8">
              <div className="relative">
                <input 
                  type="text" 
                  placeholder="keyword or title" 
                  className="w-full border border-gray-200 px-4 py-3 text-sm focus:outline-none focus:border-[#2175d9]"
                />
              </div>
              <button className="w-full mt-4 border border-[#2175d9] text-[#2175d9] py-3 text-sm font-medium hover:bg-[#2175d9] hover:text-white transition-colors">
                search
              </button>
            </div>

            {/* Categories Accordion */}
            <div className="border-t border-gray-200">
              <button 
                onClick={() => setCategoriesOpen(!categoriesOpen)}
                className="w-full py-6 flex items-center justify-between text-xl font-light"
              >
                categories
                {categoriesOpen ? <ChevronUp size={20} className="text-[#2175d9]" /> : <ChevronDown size={20} className="text-[#2175d9]" />}
              </button>
              {categoriesOpen && (
                <div className="pb-6 space-y-3">
                  {categories.map((cat) => (
                    <label key={cat} className="flex items-start gap-3 cursor-pointer group">
                      <input 
                        type="checkbox" 
                        checked={selectedCategory === cat}
                        onChange={() => setSelectedCategory(cat)}
                        className="mt-1 w-4 h-4 border-gray-300 text-[#2175d9] focus:ring-[#2175d9]"
                      />
                      <span className={`text-sm ${selectedCategory === cat ? 'text-[#2175d9] font-medium' : 'text-gray-600 group-hover:text-[#2175d9]'}`}>
                        {cat}
                      </span>
                    </label>
                  ))}
                </div>
              )}
            </div>

            {/* Topics Accordion */}
            <div className="border-t border-gray-200">
              <button 
                onClick={() => setTopicsOpen(!topicsOpen)}
                className="w-full py-6 flex items-center justify-between text-xl font-light"
              >
                topics
                {topicsOpen ? <ChevronUp size={20} className="text-[#2175d9]" /> : <ChevronDown size={20} className="text-[#2175d9]" />}
              </button>
              {topicsOpen && (
                <div className="pb-6 space-y-3">
                  {topics.map((topic) => (
                    <label key={topic} className="flex items-start gap-3 cursor-pointer group">
                      <input 
                        type="checkbox" 
                        className="mt-1 w-4 h-4 border-gray-300 text-[#2175d9] focus:ring-[#2175d9]"
                      />
                      <span className="text-sm text-gray-600 group-hover:text-[#2175d9]">
                        {topic}
                      </span>
                    </label>
                  ))}
                </div>
              )}
            </div>
          </aside>

          {/* --- Article List --- */}
          <div className="flex-1">
            <div className="flex items-center justify-between mb-8 border-b border-gray-100 pb-4">
              <span className="text-sm text-gray-500">articles 1 to 10 of 48</span>
              <div className="relative">
                <button className="flex items-center gap-8 border border-gray-200 px-4 py-2 text-sm">
                  newest first
                  <ChevronDown size={16} className="text-[#2175d9]" />
                </button>
              </div>
            </div>

            <div className="space-y-12">
              {articles.map((article) => (
                <article key={article.id} className="flex flex-col md:flex-row gap-8 group cursor-pointer">
                  <div className="w-full md:w-[240px] h-[160px] flex-shrink-0 overflow-hidden">
                    <img 
                      src={article.imageUrl} 
                      alt={article.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  <div className="flex-1">
                    <span className="text-sm text-gray-500 block mb-2">{article.date}</span>
                    <h3 className="text-2xl font-light mb-3 leading-tight group-hover:text-[#2175d9] transition-colors">
                      {article.title}
                    </h3>
                    <div className="flex flex-wrap gap-x-4 gap-y-1">
                      {article.tags.map((tag, idx) => (
                        <span key={idx} className="text-sm text-[#2175d9] hover:underline">
                          {tag}{idx < article.tags.length - 1 ? ',' : ''}
                        </span>
                      ))}
                    </div>
                  </div>
                </article>
              ))}
            </div>

            {/* Pagination */}
            <div className="mt-16 flex items-center gap-6 text-lg font-light">
              <span className="text-[#2175d9] border-b-2 border-[#2175d9] pb-1">1</span>
              <button className="hover:text-[#2175d9]">2</button>
              <button className="hover:text-[#2175d9]">3</button>
              <button className="hover:text-[#2175d9]">4</button>
              <button className="hover:text-[#2175d9]">5</button>
              <button className="text-[#2175d9] hover:translate-x-1 transition-transform">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                  <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </main>

      {/* --- Footer --- */}
      

      {/* --- Floating Elements --- */}
      <button className="fixed bottom-6 left-6 w-12 h-12 bg-[#2175d9] text-white rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform z-50">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10"></circle>
          <path d="M12 8v8"></path>
          <path d="M8 12h8"></path>
        </svg>
      </button>

      <button className="fixed right-0 top-1/2 -translate-y-1/2 bg-[#2175d9] text-white px-2 py-4 rounded-l-md flex flex-col items-center gap-2 shadow-lg z-50">
        <span className="[writing-mode:vertical-rl] text-xs font-medium tracking-widest uppercase">Feedback</span>
      </button>
    </div>
  );
}
