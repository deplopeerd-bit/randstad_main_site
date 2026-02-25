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

const ResEdi = () => {
  return (
    <div className="min-h-screen bg-white selection:bg-randstad-blue selection:text-white">
      
      
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
      

      {/* Feedback Tab (Floating) */}
      <div className="fixed right-0 top-1/2 -translate-y-1/2 z-40 hidden md:block">
        <div className="bg-randstad-blue text-white py-4 px-2 rounded-l-md cursor-pointer hover:pr-4 transition-all duration-300 [writing-mode:vertical-rl] text-[14px] font-medium">
          feedback
        </div>
      </div>
    </div>
  );
};

export default ResEdi;
