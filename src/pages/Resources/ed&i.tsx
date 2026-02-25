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
  ArrowRight,
  Linkedin,
  Facebook,
  Youtube,
  Instagram,
  Twitter
} from 'lucide-react';

const Navbar = () => {
  return (
    <header className="w-full bg-white border-b border-gray-100 sticky top-0 z-50">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12">
        {/* Top small nav */}
        <div className="flex justify-end py-2">
          <a href="#" className="text-[11px] text-randstad-gray hover:text-randstad-blue transition-colors">contact us</a>
        </div>
        
        {/* Main nav */}
        <div className="flex items-center justify-between py-4">
          <div className="flex items-center gap-12">
            {/* Logo */}
            <div className="flex items-center">
              <svg width="140" height="32" viewBox="0 0 140 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M14.5 5.5C14.5 3.01472 16.5147 1 19 1H29.5C30.8807 1 32 2.11929 32 3.5V3.5C32 4.88071 30.8807 6 29.5 6H19C17.6193 6 16.5 7.11929 16.5 8.5V23.5C16.5 24.8807 17.6193 26 19 26H29.5C30.8807 26 32 27.1193 32 28.5V28.5C32 29.8807 30.8807 31 29.5 31H19C16.5147 31 14.5 28.9853 14.5 26.5V5.5Z" fill="#1C69D4"/>
                <path d="M0 28.5V28.5C0 27.1193 1.11929 26 2.5 26H13V31H2.5C1.11929 31 0 29.8807 0 28.5Z" fill="#1C69D4"/>
                <path d="M0 3.5V3.5C0 2.11929 1.11929 1 2.5 1H13V6H2.5C1.11929 6 0 4.88071 0 3.5Z" fill="#1C69D4"/>
                <text x="40" y="24" fill="#1C69D4" style={{ font: 'bold 24px Inter' }}>randstad</text>
              </svg>
            </div>

            {/* Nav Links */}
            <nav className="hidden lg:flex items-center gap-8">
              {['find a job', 'for talent', 'for employer', 'resources', 'about us'].map((item) => (
                <a key={item} href="#" className="flex items-center gap-1 text-[14px] font-medium text-randstad-navy hover:text-randstad-blue transition-colors">
                  {item} <ChevronDown size={14} />
                </a>
              ))}
            </nav>
          </div>

          {/* Right Icons */}
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-1 cursor-pointer group">
              <Heart size={20} className="text-randstad-navy group-hover:text-randstad-blue transition-colors" />
              <span className="text-[14px] font-medium">0</span>
            </div>
            <div className="flex items-center gap-2 cursor-pointer group">
              <User size={20} className="text-randstad-navy group-hover:text-randstad-blue transition-colors" />
              <span className="text-[14px] font-medium">my randstad</span>
            </div>
            <Search size={20} className="cursor-pointer hover:text-randstad-blue transition-colors" />
          </div>
        </div>
      </div>
    </header>
  );
};

const Hero = () => {
  return (
    <section className="bg-randstad-blue text-white py-16 md:py-24">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12">
        <div className="flex flex-col gap-4 max-w-4xl">
          <nav className="flex items-center gap-2 text-[12px] opacity-80 mb-4">
            <a href="#">home</a> <span>&gt;</span>
            <a href="#">hr news</a> <span>&gt;</span>
            <a href="#">workforce insights</a> <span>&gt;</span>
            <span className="font-semibold">ed&i</span>
          </nav>
          <h1 className="text-[48px] md:text-[64px] font-medium leading-[1.1] tracking-tight lowercase">
            equity, diversity & inclusion reports.
          </h1>
          <p className="text-[18px] md:text-[20px] leading-relaxed mt-6 opacity-90">
            Randstad is strongly committed to gender equality, inclusion and diversity. We believe this helps us build a more agile, productive, and innovative workforce that reflects our candidate and client base, and the society in which we work.
          </p>
        </div>
      </div>
    </section>
  );
};

const AccordionItem = ({ title }: { title: string }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="border-b border-gray-200">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full py-6 flex items-center justify-between text-left group"
      >
        <span className="text-[18px] text-randstad-navy group-hover:text-randstad-blue transition-colors lowercase">
          {title}
        </span>
        <ChevronDown 
          size={24} 
          className={`text-randstad-blue transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} 
        />
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden"
          >
            <div className="pb-6 text-randstad-gray text-[16px]">
              Details for {title} would go here. This is a replica of the Randstad India EDI reports page.
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const ArticleItem = ({ title }: { title: string }) => {
  return (
    <a href="#" className="flex items-center justify-between py-6 border-b border-gray-200 group">
      <span className="text-[18px] text-randstad-navy group-hover:text-randstad-blue transition-colors lowercase">
        {title}
      </span>
      <ArrowRight size={24} className="text-randstad-navy group-hover:text-randstad-blue transition-colors" />
    </a>
  );
};

const App = () => {
  return (
    <div className="min-h-screen bg-white selection:bg-randstad-blue selection:text-white">
      <Navbar />
      
      <main>
        <Hero />

        {/* What we stand for */}
        <section className="py-20 md:py-32">
          <div className="max-w-[1440px] mx-auto px-6 md:px-12">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
              <div className="md:col-span-4">
                <h2 className="text-[32px] font-medium text-randstad-navy lowercase">what we stand for</h2>
              </div>
              <div className="md:col-span-8">
                <p className="text-[18px] leading-relaxed text-randstad-navy">
                  There has been a conscious and steady effort by corporates to support women at the workplace in the last few years - take for instance equal hiring opportunities, return to work programs, women's councils, network support groups for women, and more. And yet, women's workforce participation in India continues to be one of the lowest in the world.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Diversity & Inclusion Reports */}
        <section className="py-20 md:py-32 bg-[#fafafa]">
          <div className="max-w-[1440px] mx-auto px-6 md:px-12">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
              <div className="md:col-span-4">
                <h2 className="text-[32px] font-medium text-randstad-navy lowercase leading-tight">
                  diversity & inclusion<br />reports
                </h2>
              </div>
              <div className="md:col-span-8">
                <div className="flex flex-col">
                  <AccordionItem title="beyond numbers: inter-generational insights on ageism" />
                  <AccordionItem title="embracing all abilities report" />
                  <AccordionItem title="randstad nasscom ed&i whitepaper" />
                  <AccordionItem title="inclusion without exception report - 2021" />
                  <AccordionItem title="diversity & inclusion report - 2020" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Latest EDI Articles */}
        <section className="py-20 md:py-32">
          <div className="max-w-[1440px] mx-auto px-6 md:px-12">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
              <div className="md:col-span-4">
                <h2 className="text-[32px] font-medium text-randstad-navy lowercase leading-tight">
                  read our latest EDI<br />specific articles.
                </h2>
              </div>
              <div className="md:col-span-8">
                <div className="flex flex-col">
                  <ArticleItem title="beyond the binary" />
                  <ArticleItem title="baby steps - an inclusive workplace for blue collared" />
                  <ArticleItem title="5 best practices to make gender sensitization effective" />
                  <ArticleItem title="3 under-invested areas of LGBTQ+ inclusion" />
                  <ArticleItem title="3 innovative ways to leverage ERGs for better inclusion" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Retention Strategies Section */}
        <section className="bg-randstad-navy text-white overflow-hidden">
          <div className="max-w-[1440px] mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2">
              <div className="p-12 md:p-24 flex flex-col justify-center gap-8">
                <h2 className="text-[40px] md:text-[56px] font-medium leading-[1.1] lowercase">
                  what are the best workforce strategies for employee retention?
                </h2>
                <p className="text-[18px] opacity-80 leading-relaxed">
                  In this article, we'll discuss employee turnover as it relates to manufacturing and explore why employee retention, rather than replacement, is the key to HR success. Finally, we'll reveal some employee retention strategies along with examples to keep your facility productive and moving forward.
                </p>
                <button className="w-fit px-8 py-3 border border-white text-white hover:bg-white hover:text-randstad-navy transition-all duration-300 text-[16px] font-medium">
                  read more
                </button>
              </div>
              <div className="relative h-[400px] md:h-auto min-h-[500px]">
                <img 
                  src="https://picsum.photos/seed/randstad1/1000/1000" 
                  alt="Workforce strategies" 
                  className="absolute inset-0 w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
                {/* Circular graphics overlay (simplified) */}
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                  <div className="w-64 h-64 border-2 border-randstad-blue rounded-full opacity-50 animate-pulse"></div>
                  <div className="absolute w-80 h-80 border border-white rounded-full opacity-20"></div>
                  <div className="absolute w-[400px] h-[400px] border border-white rounded-full opacity-10"></div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Download Section */}
        <section className="py-24 md:py-40 bg-white">
          <div className="max-w-[1440px] mx-auto px-6 md:px-12 text-center">
            <div className="flex flex-col md:flex-row items-center justify-center gap-12 md:gap-24">
              <h2 className="text-[40px] md:text-[56px] font-medium leading-[1.1] text-randstad-navy max-w-2xl text-left lowercase">
                download our guide to learn <span className="text-randstad-blue">practical retention strategies.</span>
              </h2>
              <button className="px-12 py-4 border-2 border-randstad-blue text-randstad-blue hover:bg-randstad-blue hover:text-white transition-all duration-300 text-[18px] font-medium whitespace-nowrap">
                download now
              </button>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-randstad-navy text-white pt-20 pb-12">
        <div className="max-w-[1440px] mx-auto px-6 md:px-12">
          {/* Footer Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-12 mb-20">
            <div className="flex flex-col gap-6">
              <h3 className="text-[18px] font-semibold">find a job</h3>
              <ul className="flex flex-col gap-3 text-[14px] opacity-70">
                {['explore all jobs', 'submit your cv', 'join our team', 'refer a friend'].map(item => (
                  <li key={item}><a href="#" className="hover:text-randstad-blue transition-colors">{item}</a></li>
                ))}
              </ul>
              <h3 className="text-[18px] font-semibold mt-8">for talents</h3>
              <ul className="flex flex-col gap-3 text-[14px] opacity-70">
                {['specialisms', 'testimonials', 'career advice', 'beware of job scams'].map(item => (
                  <li key={item}><a href="#" className="hover:text-randstad-blue transition-colors">{item}</a></li>
                ))}
              </ul>
            </div>

            <div className="flex flex-col gap-6">
              <h3 className="text-[18px] font-semibold">for employers</h3>
              <ul className="flex flex-col gap-3 text-[14px] opacity-70">
                {['submit a vacancy', 'request a callback', 'our services', 'specialisms', 'case studies', 'testimonials'].map(item => (
                  <li key={item}><a href="#" className="hover:text-randstad-blue transition-colors">{item}</a></li>
                ))}
              </ul>
              <h3 className="text-[18px] font-semibold mt-8">resources</h3>
              <ul className="flex flex-col gap-3 text-[14px] opacity-70">
                {['case studies', 'press room', 'blogs'].map(item => (
                  <li key={item}><a href="#" className="hover:text-randstad-blue transition-colors">{item}</a></li>
                ))}
              </ul>
            </div>

            <div className="flex flex-col gap-6">
              <h3 className="text-[18px] font-semibold">workforce insights</h3>
              <ul className="flex flex-col gap-3 text-[14px] opacity-70">
                {['talent insights reports', 'employer brand research reports', 'salary trends reports', 'ed&i reports', 'workmonitor reports', 'startup hiring trends', 'talent pulse surveys'].map(item => (
                  <li key={item}><a href="#" className="hover:text-randstad-blue transition-colors">{item}</a></li>
                ))}
              </ul>
            </div>

            <div className="flex flex-col gap-6">
              <h3 className="text-[18px] font-semibold">jobs</h3>
              <ul className="flex flex-col gap-3 text-[14px] opacity-70">
                {[
                  'engineering jobs', 'cxo jobs', 'manufacturing jobs', 'supply chain & logistics jobs',
                  'education jobs', 'finance & accounting jobs', 'healthcare jobs', 'hr & admin support jobs',
                  'ites/gcc jobs', 'legal & compliance jobs', 'sales & marketing jobs'
                ].map(item => (
                  <li key={item}><a href="#" className="hover:text-randstad-blue transition-colors">{item}</a></li>
                ))}
              </ul>
            </div>
          </div>

          {/* Social and Divider */}
          <div className="border-t border-white/10 pt-12 mb-12 flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="flex items-center gap-6">
              {[Linkedin, Twitter, Facebook, Youtube, Instagram].map((Icon, i) => (
                <a key={i} href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-randstad-blue transition-colors">
                  <Icon size={20} />
                </a>
              ))}
            </div>
            <div className="text-[12px] opacity-50 text-center md:text-right max-w-2xl">
              registered office: Randstad India Private Limited, CIN U74210TN1992PTC023097,/Randstad House, Old No. 5 & 5A, New No. 9, Pycrofts Garden Road, Nungambakkam, Chennai, TN - 600 006
            </div>
          </div>

          {/* Logo and Copyright */}
          <div className="flex flex-col md:flex-row items-center gap-4 mb-12">
            <div className="flex items-center gap-2">
              <span className="text-[14px] font-bold tracking-widest uppercase">randstad,</span>
              <div className="flex items-center gap-1">
                <div className="w-6 h-4 bg-randstad-blue rounded-sm"></div>
                <div className="w-6 h-4 bg-white/20 rounded-sm"></div>
              </div>
            </div>
            <span className="text-[11px] opacity-50 uppercase tracking-wider">
              HUMAN FORWARD and SHAPING THE WORLD OF WORK are registered trademarks of © Randstad N.V.2023
            </span>
          </div>

          {/* Legal Text */}
          <div className="flex flex-col gap-6 text-[13px] opacity-70 leading-relaxed mb-12">
            <p>
              <span className="font-bold">Security Advice:</span> Randstad India does not charge any fee at any stage of its recruitment process from the candidate nor allows their employees to collect any fees from any candidates. <a href="#" className="underline hover:text-randstad-blue transition-colors">Click here to know more</a>
            </p>
            <p>
              <span className="font-bold">EEO Statement:</span> Randstad India is an Equal Employment Opportunity Employer. All qualified applicants receive consideration for employment without regard to race, color, religion, sex, sexual orientation, gender identity or expression, appearance, national origin, age, marital status, veteran status, or disability status, or any other characteristics. Our global mission is to become the world’s most equitable and specialized talent company, and we actively embrace diversity and inclusion as the cornerstones of our success. To read more of Randstad India’s work in the space of equity, diversity and inclusion please <a href="#" className="underline hover:text-randstad-blue transition-colors">click here</a>
            </p>
          </div>

          {/* Bottom Links */}
          <div className="flex flex-wrap items-center justify-center md:justify-start gap-x-8 gap-y-4 text-[13px] opacity-60">
            {['terms & conditions', 'cookies', 'misconduct reporting procedure', 'accessibility', 'be aware', 'sitemap', 'privacy statement'].map(item => (
              <a key={item} href="#" className="hover:text-randstad-blue transition-colors">{item}</a>
            ))}
          </div>
        </div>
      </footer>

      {/* Feedback Tab (Floating) */}
      <div className="fixed right-0 top-1/2 -translate-y-1/2 z-40 hidden md:block">
        <div className="bg-randstad-blue text-white py-4 px-2 rounded-l-md cursor-pointer hover:pr-4 transition-all duration-300 [writing-mode:vertical-rl] text-[14px] font-medium">
          feedback
        </div>
      </div>
    </div>
  );
};

export default App;
