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
  Linkedin, 
  Twitter, 
  Facebook, 
  Youtube, 
  Instagram,
  Search,
  Menu,
  X
} from 'lucide-react';

interface AccordionItemProps {
  title: string;
  isOpen: boolean;
  onClick: () => void;
}

const AccordionItem: React.FC<AccordionItemProps> = ({ title, isOpen, onClick }) => {
  return (
    <div className="border-b border-gray-200">
      <button 
        className="w-full py-6 flex justify-between items-center text-left hover:text-[#24beff] transition-colors group"
        onClick={onClick}
      >
        <span className="text-lg md:text-xl font-normal text-[#0a1a3a] group-hover:text-[#24beff]">{title}</span>
        <ChevronDown className={`w-6 h-6 text-[#24beff] transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <div className="pb-6 text-gray-600">
              Download the full report to explore detailed talent trends, salary insights, and workforce dynamics for this period.
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default function ResTalentInsight() {
  const [openAccordion, setOpenAccordion] = useState<number | null>(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const reports = [
    "randstad india talent insights report 2025 - ed 1",
    "talent insights report 2024 - Ed 2",
    "talent insights report 2024 - Ed 1",
    "randstad india talent insights report 2023, first edition",
    "randstad india talent insights report 2023, 2nd edition"
  ];

  return (
    <div className="min-h-screen flex flex-col">
      {/* Top Utility Nav */}
      <div className="bg-white py-2 px-4 md:px-12 flex justify-end items-center space-x-6 text-[11px] font-medium uppercase tracking-wider text-gray-500 border-b border-gray-100">
        <a href="#" className="hover:text-[#24beff]">contact us</a>
      </div>

      {/* Main Header */}
     
      {/* Breadcrumbs */}
      <div className="bg-[#0a1a3a] text-white/60 text-[10px] uppercase tracking-widest py-4 px-4 md:px-12">
        <div className="max-w-[1440px] mx-auto flex items-center space-x-2">
          <a href="#" className="hover:text-white">home</a>
          <span>&gt;</span>
          <a href="#" className="hover:text-white">hr news</a>
          <span>&gt;</span>
          <a href="#" className="hover:text-white">workforce insights</a>
          <span>&gt;</span>
          <span className="text-white">talent insights</span>
        </div>
      </div>

      {/* Hero Section */}
      <section className="bg-[#0a1a3a] text-white py-16 md:py-24 px-4 md:px-12 overflow-hidden">
        <div className="max-w-[1440px] mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <h1 className="text-4xl md:text-6xl font-normal leading-tight tracking-tight">
              randstad india talent insight reports.
            </h1>
            <p className="text-lg md:text-xl text-white/80 font-light leading-relaxed max-w-xl">
              The Randstad India Talent Insight Reports are based on Randstad's data collected over a period of a six-month period, twice a year. The reports analyze talent trends across a comprehensive range of experience levels spread over 8 Tier-1 cities, and 20 Tier-2 cities across India.
            </p>
          </div>
          <div className="relative flex justify-center md:justify-end">
            <div className="relative w-full max-w-md aspect-square flex items-end justify-center space-x-4">
              {/* Stylized Figures */}
              <div className="flex items-end space-x-4">
                <div className="flex flex-col items-center">
                  <div className="w-16 h-16 rounded-full border-4 border-[#24beff] mb-4"></div>
                  <div className="w-20 h-40 bg-[#24beff] rounded-t-full"></div>
                </div>
                <div className="flex flex-col items-center">
                  <div className="w-16 h-16 rounded-full border-4 border-[#80dfff] mb-4"></div>
                  <div className="w-20 h-32 bg-[#80dfff] rounded-t-full"></div>
                </div>
                <div className="flex flex-col items-center">
                  <div className="w-16 h-16 rounded-full border-4 border-white/40 mb-4"></div>
                  <div className="w-20 h-24 bg-white/40 rounded-t-full"></div>
                </div>
              </div>
              {/* Decorative lines */}
              <div className="absolute bottom-0 left-0 w-full h-[1px] bg-white/20"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Accordion List Section */}
      <section className="py-20 px-4 md:px-12 bg-white">
        <div className="max-w-[1440px] mx-auto grid md:grid-cols-3 gap-12">
          <div className="md:col-span-1">
            <h2 className="text-2xl md:text-3xl font-normal text-[#0a1a3a] leading-tight">
              randstad india talent insight reports.
            </h2>
          </div>
          <div className="md:col-span-2">
            {reports.map((title, index) => (
              <AccordionItem 
                key={index}
                title={title}
                isOpen={openAccordion === index}
                onClick={() => setOpenAccordion(openAccordion === index ? null : index)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Trends Report 2022 Section */}
      <section className="py-20 px-4 md:px-12 bg-[#f9f9f9]">
        <div className="max-w-[1440px] mx-auto space-y-12">
          <h2 className="text-3xl md:text-4xl font-normal text-[#0a1a3a]">
            randstad talent trends report - 2022
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {/* Card 1 */}
            <div className="group cursor-pointer">
              <div className="relative overflow-hidden rounded-lg aspect-[16/10]">
                <img 
                  src="https://picsum.photos/seed/randstad1/1200/800" 
                  alt="First Edition" 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-8 left-8">
                  <span className="text-white text-2xl font-normal">first edition</span>
                </div>
              </div>
            </div>
            {/* Card 2 */}
            <div className="group cursor-pointer">
              <div className="relative overflow-hidden rounded-lg aspect-[16/10]">
                <img 
                  src="https://picsum.photos/seed/randstad2/1200/800" 
                  alt="Second Edition" 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-8 left-8">
                  <span className="text-white text-2xl font-normal">second edition</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="bg-[#f5f2ed] py-20 px-4 md:px-12">
        <div className="max-w-[1440px] mx-auto grid md:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <div className="relative rounded-lg overflow-hidden aspect-square">
              <img 
                src="https://picsum.photos/seed/typing/800/800" 
                alt="Workforce Insights" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              {/* Circular Graphic Overlay */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-3/4 h-3/4 border-[20px] border-[#24beff] rounded-full opacity-80"></div>
                <div className="absolute w-1/2 h-1/2 border-[15px] border-white rounded-full opacity-60"></div>
              </div>
            </div>
          </div>
          <div className="space-y-8">
            <h2 className="text-4xl md:text-5xl font-normal text-[#0a1a3a] leading-tight">
              workforce insights delivered to your inbox.
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              Want to reduce your turnover rate, improve your company culture, or be inspired on improving employability for young people? Sign up to the monthly workforce insights newsletter and stay up to date with the latest recruitment and labor market news, tips, trends and reports for business leaders across the globe.
            </p>
            <button className="px-10 py-4 border-2 border-[#0a1a3a] text-[#0a1a3a] text-sm font-medium hover:bg-[#0a1a3a] hover:text-white transition-all duration-300">
              subscribe
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      

      {/* Feedback Tab */}
      <div className="fixed right-0 top-1/2 -translate-y-1/2 bg-[#24beff] text-white py-3 px-1 rounded-l-md cursor-pointer hover:bg-[#1a9ed6] transition-colors z-50">
        <span className="[writing-mode:vertical-rl] text-[10px] font-bold uppercase tracking-widest">Feedback</span>
      </div>
    </div>
  );
}
