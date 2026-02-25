import React, { useState } from "react";

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { 
  ChevronDown, 
  Search, 
  Heart, 
  User, 
  Linkedin, 
  ChevronRight,
  X,
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
const ARTICLES: Article[] = [
  {
    id: 1,
    date: '23 October 2025',
    title: 'decoding the Indian workforce: evolving expectations, equity, and retention in 2025.',
    tags: ['attracting and recruiting talent', 'emerging workforce trends', 'employee engagement'],
    imageUrl: 'https://picsum.photos/seed/work1/400/250'
  },
  {
    id: 2,
    date: '23 June 2025',
    title: 'AI in logistics and how it affects workforce skills and talent acquisition.',
    tags: ['HR trends'],
    imageUrl: 'https://picsum.photos/seed/work2/400/250'
  },
  {
    id: 3,
    date: '02 June 2025',
    title: '4 major HR and supply chain trends in the logistics industry.',
    tags: ['HR trends'],
    imageUrl: 'https://picsum.photos/seed/work3/400/250'
  },
  {
    id: 4,
    date: '04 November 2024',
    title: 'how to organise and adapt your workforce amid constant change.',
    tags: ['HR trends', 'team management'],
    imageUrl: 'https://picsum.photos/seed/work4/400/250'
  },
  {
    id: 5,
    date: '01 August 2024',
    title: 'the role of HR in building a business during tougher times.',
    tags: ['hr trends', 'workforce management', 'talent management', 'human resources'],
    imageUrl: 'https://picsum.photos/seed/work5/400/250'
  },
  {
    id: 6,
    date: '22 July 2024',
    title: 'partnering with a staffing expert for workforce agility and success.',
    tags: ['hr trends', 'workforce management', 'talent management', 'human resources'],
    imageUrl: 'https://picsum.photos/seed/work6/400/250'
  },
  {
    id: 7,
    date: '15 July 2024',
    title: 'beyond layoffs - strategic workforce planning as a way to reduce costs.',
    tags: ['hr trends', 'workforce management', 'talent management', 'human resources'],
    imageUrl: 'https://picsum.photos/seed/work7/400/250'
  },
  {
    id: 8,
    date: '08 July 2024',
    title: 'talent management during tougher times.',
    tags: ['hr trends', 'workforce management', 'talent management', 'human resources'],
    imageUrl: 'https://picsum.photos/seed/work8/400/250'
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
  'employee retention',
  'employee satisfaction',
  'employee value proposition',
  'employer branding',
  'flexible staffing',
  'future of work'
];

const TOPICS = [
  'COVID-19 insights, guides and advice',
  'HR strategy',
  'VUCA world',
  'attracting & recruiting talent',
  'attractive company',
  'blue collar workers',
  'ceo message',
  'compensation',
  'compensation and benefits',
  'contingent workers',
  'cost of living',
  'digital transformation',
  'disruption in the workforce',
  'diversity & inclusion',
  'diversity and inclusion'
];

// --- Components ---

const Navbar = () => (
  <nav className="bg-white border-b border-gray-100 sticky top-0 z-50">
    <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
      <div className="flex justify-between items-center h-20">
        {/* Logo */}
        <div className="flex items-center space-x-12">
          <div className="flex items-center">
            <svg width="140" height="40" viewBox="0 0 200 60" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M15.5 15C15.5 15 25 15 25 25C25 35 15.5 35 15.5 35" stroke="#2167ad" strokeWidth="6" strokeLinecap="round"/>
              <path d="M35 15C35 15 25.5 15 25.5 25C25.5 35 35 35 35 35" stroke="#2167ad" strokeWidth="6" strokeLinecap="round"/>
              <text x="50" y="42" fill="#2167ad" style={{ font: 'bold 36px sans-serif' }}>randstad</text>
            </svg>
          </div>

          {/* Main Nav */}
          <div className="hidden lg:flex items-center space-x-8 text-[15px] font-medium text-[#333]">
            {['find a job', 'for talent', 'for employer', 'resources', 'about us'].map((item) => (
              <button key={item} className="flex items-center hover:text-[#2167ad] transition-colors">
                {item} <ChevronDown className="ml-1 w-4 h-4 opacity-60" />
              </button>
            ))}
          </div>
        </div>

        {/* Right Nav */}
        <div className="flex items-center space-x-6 text-[14px]">
          <a href="#" className="hidden sm:block text-[#2167ad] hover:underline">contact us</a>
          <div className="flex items-center space-x-4">
            <button className="flex items-center space-x-1 hover:text-[#2167ad]">
              <Heart className="w-5 h-5" />
              <span className="font-medium">0</span>
            </button>
            <button className="flex items-center space-x-2 hover:text-[#2167ad]">
              <User className="w-5 h-5" />
              <span className="font-medium hidden md:inline">my randstad</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  </nav>
);

const Hero = () => (
  <section className="bg-[#1c6dd0] text-white py-16 lg:py-24">
    <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
      {/* Breadcrumbs */}
      <div className="flex items-center space-x-2 text-[13px] mb-12 opacity-90">
        <a href="#" className="hover:underline">home</a>
        <ChevronRight className="w-3 h-3" />
        <a href="#" className="hover:underline">hr trends & insights</a>
        <ChevronRight className="w-3 h-3" />
        <a href="#" className="hover:underline">all articles</a>
        <ChevronRight className="w-3 h-3" />
        <span className="font-semibold">HR trends</span>
      </div>

      {/* Title */}
      <h1 className="text-5xl lg:text-[64px] font-bold leading-tight mb-8">
        HR trends<br />articles.
      </h1>

      {/* Description */}
      <p className="max-w-2xl text-[18px] leading-relaxed opacity-95">
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
);

const FilterSidebar = () => {
  const [catOpen, setCatOpen] = useState(true);
  const [topicOpen, setTopicOpen] = useState(true);

  return (
    <div className="w-full lg:w-[320px] flex-shrink-0">
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-[#333] mb-4">refine your search</h2>
        <button className="text-[#2167ad] text-[14px] hover:underline mb-6 block">clear all filters (2)</button>
        
        <div className="space-y-4">
          <div className="relative">
            <input 
              type="text" 
              placeholder="keyword or title"
              className="w-full border border-gray-300 p-4 pr-12 text-[15px] focus:outline-none focus:border-[#2167ad]"
            />
          </div>
          <button className="w-full border-2 border-[#2167ad] text-[#2167ad] font-bold py-3 hover:bg-[#2167ad] hover:text-white transition-all uppercase tracking-wider text-[14px]">
            search
          </button>
        </div>
      </div>

      {/* Categories Accordion */}
      <div className="border-t border-gray-200 py-4">
        <button 
          onClick={() => setCatOpen(!catOpen)}
          className="flex justify-between items-center w-full text-left font-bold text-[18px] text-[#333]"
        >
          categories
          <ChevronDown className={`w-5 h-5 transition-transform ${catOpen ? 'rotate-180' : ''}`} />
        </button>
        {catOpen && (
          <div className="mt-4 space-y-3">
            {CATEGORIES.map((cat, idx) => (
              <label key={idx} className="flex items-start space-x-3 cursor-pointer group">
                <input 
                  type="checkbox" 
                  className="mt-1 w-5 h-5 border-gray-300 rounded text-[#2167ad] focus:ring-[#2167ad]" 
                  defaultChecked={cat === 'HR trends'}
                />
                <span className="text-[15px] text-[#333] group-hover:text-[#2167ad]">{cat}</span>
              </label>
            ))}
          </div>
        )}
      </div>

      {/* Topics Accordion */}
      <div className="border-t border-gray-200 py-4">
        <button 
          onClick={() => setTopicOpen(!topicOpen)}
          className="flex justify-between items-center w-full text-left font-bold text-[18px] text-[#333]"
        >
          topics
          <ChevronDown className={`w-5 h-5 transition-transform ${topicOpen ? 'rotate-180' : ''}`} />
        </button>
        {topicOpen && (
          <div className="mt-4 space-y-3">
            {TOPICS.map((topic, idx) => (
              <label key={idx} className="flex items-start space-x-3 cursor-pointer group">
                <input 
                  type="checkbox" 
                  className="mt-1 w-5 h-5 border-gray-300 rounded text-[#2167ad] focus:ring-[#2167ad]" 
                />
                <span className="text-[15px] text-[#333] group-hover:text-[#2167ad]">{topic}</span>
              </label>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

const ArticleCard: React.FC<{ article: Article }> = ({ article }) => {
  return (
    <div className="flex flex-col md:flex-row gap-8 py-10 border-b border-gray-100 group">
      <div className="w-full md:w-[300px] h-[200px] flex-shrink-0 overflow-hidden">
        <img 
          src={article.imageUrl} 
          alt={article.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          referrerPolicy="no-referrer"
        />
      </div>
      <div className="flex-1">
        <p className="text-[14px] text-[#666] mb-2">{article.date}</p>
        <h3 className="text-[22px] font-bold text-[#333] leading-tight mb-4 group-hover:text-[#2167ad] transition-colors cursor-pointer">
          {article.title}
        </h3>
        <div className="flex flex-wrap gap-x-4 gap-y-2">
          {article.tags.map((tag, idx) => (
            <a key={idx} href="#" className="text-[14px] text-[#2167ad] hover:underline">
              {tag}{idx < article.tags.length - 1 ? ',' : ''}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

const Footer = () => (
  <footer className="bg-[#05132d] text-white pt-20 pb-12">
    <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
        <div>
          <h4 className="font-bold text-[18px] mb-6">find a job</h4>
          <ul className="space-y-4 text-[15px] opacity-80">
            <li><a href="#" className="hover:underline">explore all jobs</a></li>
            <li><a href="#" className="hover:underline">submit your cv</a></li>
            <li><a href="#" className="hover:underline">join our team</a></li>
            <li><a href="#" className="hover:underline">refer a friend</a></li>
          </ul>
          <h4 className="font-bold text-[18px] mt-12 mb-6">for talents</h4>
          <ul className="space-y-4 text-[15px] opacity-80">
            <li><a href="#" className="hover:underline">specialisms</a></li>
            <li><a href="#" className="hover:underline">testimonials</a></li>
            <li><a href="#" className="hover:underline">career advice</a></li>
            <li><a href="#" className="hover:underline">beware of job scams</a></li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold text-[18px] mb-6">for employers</h4>
          <ul className="space-y-4 text-[15px] opacity-80">
            <li><a href="#" className="hover:underline">submit a vacancy</a></li>
            <li><a href="#" className="hover:underline">request a callback</a></li>
            <li><a href="#" className="hover:underline">our services</a></li>
            <li><a href="#" className="hover:underline">specialisms</a></li>
            <li><a href="#" className="hover:underline">case studies</a></li>
            <li><a href="#" className="hover:underline">testimonials</a></li>
          </ul>
          <h4 className="font-bold text-[18px] mt-12 mb-6">resources</h4>
          <ul className="space-y-4 text-[15px] opacity-80">
            <li><a href="#" className="hover:underline">case studies</a></li>
            <li><a href="#" className="hover:underline">press room</a></li>
            <li><a href="#" className="hover:underline">blogs</a></li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold text-[18px] mb-6">workforce insights</h4>
          <ul className="space-y-4 text-[15px] opacity-80">
            <li><a href="#" className="hover:underline">talent insights reports</a></li>
            <li><a href="#" className="hover:underline">employer brand research reports</a></li>
            <li><a href="#" className="hover:underline">salary trends reports</a></li>
            <li><a href="#" className="hover:underline">ed&i reports</a></li>
            <li><a href="#" className="hover:underline">workmonitor reports</a></li>
            <li><a href="#" className="hover:underline">startup hiring trends</a></li>
            <li><a href="#" className="hover:underline">talent pulse surveys</a></li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold text-[18px] mb-6">jobs</h4>
          <ul className="space-y-4 text-[15px] opacity-80">
            <li><a href="#" className="hover:underline">engineering jobs</a></li>
            <li><a href="#" className="hover:underline">cxo jobs</a></li>
            <li><a href="#" className="hover:underline">manufacturing jobs</a></li>
            <li><a href="#" className="hover:underline">supply chain & logistics jobs</a></li>
            <li><a href="#" className="hover:underline">education jobs</a></li>
            <li><a href="#" className="hover:underline">finance & accounting jobs</a></li>
            <li><a href="#" className="hover:underline">healthcare jobs</a></li>
            <li><a href="#" className="hover:underline">hr & admin support jobs</a></li>
            <li><a href="#" className="hover:underline">ites/gcc jobs</a></li>
            <li><a href="#" className="hover:underline">legal & compliance jobs</a></li>
            <li><a href="#" className="hover:underline">sales & marketing jobs</a></li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10 pt-12">
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-8">
          <div className="flex items-center space-x-6">
            <a href="#" className="hover:opacity-80 transition-opacity">
              <Linkedin className="w-8 h-8" />
            </a>
          </div>
          <div className="text-[13px] opacity-60 max-w-3xl">
            <p className="mb-4">registered office: Randstad India Private Limited, CIN U74210TN1992PTC023097,/Randstad House, Old No. 5 & 5A, New No. 9, Pycrofts Garden Road, Nungambakkam, Chennai, TN - 600 006</p>
            <p className="mb-8 flex items-center">
              RANDSTAD, <span className="mx-2 inline-block w-8 h-4 bg-[#2167ad] rounded-full"></span> , HUMAN FORWARD and SHAPING THE WORLD OF WORK are registered trademarks of © Randstad N.V.2023
            </p>
            <div className="space-y-4 text-[14px]">
              <p><span className="font-bold opacity-100">Security Advice:</span> Randstad India does not charge any fee at any stage of its recruitment process from the candidate nor allows their employees to collect any fees from any candidates. <a href="#" className="underline">Click here to know more</a></p>
              <p><span className="font-bold opacity-100">EEO Statement:</span> Randstad India is an Equal Employment Opportunity Employer. All qualified applicants receive consideration for employment without regard to race, color, religion, sex, sexual orientation, gender identity or expression, appearance, national origin, age, marital status, veteran status, or disability status, or any other characteristics. Our global mission is to become the world's most equitable and specialized talent company, and we actively embrace diversity and inclusion as the cornerstones of our success. To read more of Randstad India's work in the space of equity, diversity and inclusion please <a href="#" className="underline">click here</a></p>
            </div>
          </div>
        </div>

        <div className="mt-16 flex flex-wrap gap-x-8 gap-y-4 text-[14px] opacity-80">
          {['terms & conditions', 'cookies', 'misconduct reporting procedure', 'accessibility', 'be aware', 'sitemap', 'privacy statement'].map(link => (
            <a key={link} href="#" className="hover:underline">{link}</a>
          ))}
        </div>
      </div>
    </div>
  </footer>
);

export default function ResHrTrends() {
  return (
    <div className="min-h-screen bg-white font-sans text-[#333]">
    
      <Hero />
      
      <main className="max-w-[1440px] mx-auto px-6 lg:px-12 py-12">
        <div className="flex flex-col lg:flex-row gap-16">
          {/* Sidebar */}
          <FilterSidebar />

          {/* Content */}
          <div className="flex-1">
            <div className="flex justify-between items-center pb-6 border-b border-gray-200 mb-4">
              <span className="text-[15px] font-medium text-[#666]">articles 1 to 10 of 137</span>
              <div className="relative group">
                <button className="flex items-center space-x-2 border border-gray-300 px-4 py-2 text-[15px] hover:border-gray-400">
                  <span>newest first</span>
                  <ChevronDown className="w-4 h-4" />
                </button>
              </div>
            </div>

            <div className="divide-y divide-gray-100">
              {ARTICLES.map(article => (
                <ArticleCard key={article.id} article={article} />
              ))}
            </div>

            {/* Pagination */}
            <div className="flex items-center justify-center space-x-6 py-12 text-[18px] font-medium text-[#2167ad]">
              <span className="text-[#333] border-b-2 border-[#2167ad]">1</span>
              <a href="#" className="hover:underline">2</a>
              <a href="#" className="hover:underline">3</a>
              <a href="#" className="hover:underline">4</a>
              <a href="#" className="hover:underline">5</a>
              <a href="#" className="hover:underline flex items-center">
                <ChevronRight className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </main>

      

      {/* Floating Elements */}
      <div className="fixed right-0 top-1/2 -translate-y-1/2 z-40 hidden md:block">
        <button className="bg-[#1c6dd0] text-white py-4 px-2 rounded-l-md vertical-text flex items-center space-x-2 shadow-lg hover:bg-[#1559ab] transition-colors" style={{ writingMode: 'vertical-rl' }}>
          <span className="rotate-180">Feedback</span>
        </button>
      </div>

      <div className="fixed bottom-6 left-6 z-40 flex flex-col space-y-4">
        <button className="bg-[#1c6dd0] text-white p-3 rounded-full shadow-xl hover:scale-110 transition-transform">
          <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 2a10 10 0 1 0 10 10 4 4 0 0 1-5-5 4 4 0 0 1-5-5" />
            <path d="M8.5 8.5v.01" />
            <path d="M16 15.5v.01" />
            <path d="M12 12v.01" />
            <path d="M11 17v.01" />
            <path d="M7 14v.01" />
          </svg>
        </button>
        <button className="bg-[#1c6dd0] text-white p-3 rounded-full shadow-xl hover:scale-110 transition-transform">
          <MessageSquare className="w-6 h-6" />
        </button>
      </div>
    </div>
  );
}
