import React, { useState } from "react";
import { AnimatePresence, motion } from "motion/react";

import { 
  ChevronDown, 
  Search, 
  Heart, 
  User, 
  Linkedin, 
  Twitter, 
  Facebook, 
  Youtube, 
  Instagram,
  ArrowRight,
  Menu,
  X
} from 'lucide-react';

// --- Components ---


const Hero = () => {
  return (
    <section className="bg-randstad-navy text-white overflow-hidden relative min-h-[480px] flex items-center">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12 grid lg:grid-cols-2 gap-12 items-center w-full py-20">
        <div className="z-10">
          <div className="flex gap-2 text-xs font-medium mb-8 opacity-70">
            <span>home</span>
            <span>{'>'}</span>
            <span>resources</span>
            <span>{'>'}</span>
            <span className="font-bold opacity-100">workforce insights</span>
          </div>
          <h1 className="text-5xl lg:text-6xl font-bold mb-6 tracking-tight leading-[1.1]">
            workforce insights hub.
          </h1>
          <p className="text-xl lg:text-2xl font-light mb-10 opacity-90 max-w-lg leading-relaxed">
            Your Gateway to Data-Driven Reports on Workforce Trends and Market Intelligence.
          </p>
          <button className="border-2 border-white px-8 py-3.5 text-lg font-medium hover:bg-white hover:text-randstad-navy transition-all duration-300">
            download reports
          </button>
        </div>
        <div className="relative flex justify-center lg:justify-end">
          {/* Envelope Illustration Mockup */}
          <div className="relative w-full max-w-[500px] aspect-square flex items-center justify-center">
            <div className="absolute inset-0 bg-randstad-light-blue/10 rounded-full blur-3xl"></div>
            <div className="relative z-10 w-4/5 h-3/5 border-4 border-randstad-light-blue rounded-2xl flex items-center justify-center overflow-hidden">
               <div className="absolute top-0 left-0 w-full h-full border-t-4 border-randstad-light-blue transform -translate-y-1/2 rotate-12"></div>
               <div className="bg-randstad-light-blue p-4 rounded-full">
                 <ArrowRight className="text-randstad-navy transform rotate-90" size={48} strokeWidth={3} />
               </div>
            </div>
            <div className="absolute bottom-1/4 right-0 w-32 h-20 border-4 border-randstad-light-blue/50 rounded-xl"></div>
            <div className="absolute top-1/4 left-0 w-24 h-16 border-4 border-randstad-light-blue/30 rounded-xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

const AtAGlance = () => {
  return (
    <section className="bg-white py-24">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12 grid lg:grid-cols-12 gap-12">
        <div className="lg:col-span-4">
          <h2 className="text-4xl font-bold tracking-tight">workforce insights at a glance.</h2>
        </div>
        <div className="lg:col-span-8">
          <p className="text-lg text-gray-600 leading-relaxed">
            Welcome to the Workforce Insights Hub – your go-to source for data-driven insights on the evolving workforce. Here, employers and job seekers can explore trends in diversity, salary benchmarks, talent acquisition, and market demands. Access our latest ED&I, Workmonitor, Talent Trends, Salary Insights, and other reports to stay informed and gain a competitive edge in hiring and career growth.
          </p>
        </div>
      </div>
    </section>
  );
};

const AccordionSection = ({ title, items, dark = false }: { title: string, items: string[], dark?: boolean }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className={`${dark ? 'bg-randstad-navy text-white' : 'bg-white text-randstad-navy'} py-24 border-t border-gray-100`}>
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12 grid lg:grid-cols-12 gap-12">
        <div className="lg:col-span-4">
          <h2 className="text-4xl font-bold tracking-tight">{title}</h2>
        </div>
        <div className="lg:col-span-8">
          <div className="space-y-4">
            {items.map((item, idx) => (
              <div key={item} className={`border-b ${dark ? 'border-white/20' : 'border-gray-200'} pb-4`}>
                <button 
                  onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                  className="w-full flex justify-between items-center text-xl font-medium py-4 text-left hover:opacity-70 transition-opacity"
                >
                  {item}
                  <ChevronDown className={`transform transition-transform ${openIndex === idx ? 'rotate-180' : ''}`} size={24} />
                </button>
                <AnimatePresence>
                  {openIndex === idx && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="overflow-hidden"
                    >
                      <p className="py-4 opacity-70 leading-relaxed">
                        Detailed information and download links for the {item} will be displayed here. This report provides comprehensive data and analysis to help you navigate the current workforce landscape.
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const SalaryTrends = () => {
  return (
    <section className="bg-randstad-navy text-white overflow-hidden">
      <div className="max-w-[1440px] mx-auto grid lg:grid-cols-2">
        <div className="p-12 lg:p-24 flex flex-col justify-center">
          <span className="text-sm font-medium mb-4 opacity-70 uppercase tracking-widest">salary & compensation insights</span>
          <h2 className="text-5xl font-bold mb-8 tracking-tight">salary trends reports.</h2>
          <p className="text-lg font-light mb-12 opacity-90 leading-relaxed max-w-md">
            Comprehensive breakdown of salary trends across roles, industries, and regions to guide compensation strategies and career decisions.
          </p>
          <button className="border-2 border-white px-8 py-3.5 text-lg font-medium hover:bg-white hover:text-randstad-navy transition-all duration-300 w-fit">
            download reports
          </button>
        </div>
        <div className="relative h-[400px] lg:h-auto">
          <img 
            src="https://picsum.photos/seed/randstad-salary/1200/800" 
            alt="Salary Trends" 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          {/* Abstract Overlay Elements */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div className="flex gap-4">
              <div className="w-16 h-32 bg-randstad-blue rounded-full opacity-80"></div>
              <div className="w-16 h-32 bg-white rounded-full opacity-80 mt-12"></div>
              <div className="w-16 h-32 bg-randstad-light-blue rounded-full opacity-80 mt-24"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const PartnerSection = () => {
  return (
    <section className="bg-randstad-navy text-white py-24 border-t border-white/10">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12 flex flex-col lg:flex-row justify-between items-center gap-12">
        <h2 className="text-5xl font-bold tracking-tight max-w-2xl text-center lg:text-left leading-tight">
          partner with us to discover top talent for your organization!
        </h2>
        <button className="border-2 border-white px-10 py-4 text-lg font-medium hover:bg-white hover:text-randstad-navy transition-all duration-300 whitespace-nowrap">
          get in touch
        </button>
      </div>
    </section>
  );
};

const InsightsGrid = () => {
  const articles = [
    {
      date: '12 August 2024',
      title: 'best practices for improving employee engagement in 2024.',
      image: 'https://picsum.photos/seed/engage/600/400'
    },
    {
      date: '26 February 2024',
      title: 'how working with an HR solutions partner can help you cut labour costs.',
      image: 'https://picsum.photos/seed/hr/600/400'
    },
    {
      date: '02 May 2023',
      title: 'how upskilling and reskilling can prepare your business for future success.',
      image: 'https://picsum.photos/seed/skill/600/400'
    },
    {
      date: '22 June 2022',
      title: 'tips for developing an effective employee compensation package',
      image: 'https://picsum.photos/seed/comp/600/400'
    },
    {
      date: '04 May 2022',
      title: 'the role of talent sourcing in the talent acquisition process',
      image: 'https://picsum.photos/seed/source/600/400'
    },
    {
      date: '05 July 2021',
      title: "ready to build a diverse workforce? here's how we can help",
      image: 'https://picsum.photos/seed/diverse/600/400'
    }
  ];

  return (
    <section className="bg-white py-24">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
        <h2 className="text-4xl font-bold tracking-tight mb-16">insights & trends in workforce dynamics.</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
          {articles.map((article, idx) => (
            <div key={idx} className="group cursor-pointer">
              <div className="overflow-hidden rounded-xl mb-6 aspect-[3/2]">
                <img 
                  src={article.image} 
                  alt={article.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
              </div>
              <p className="text-sm text-gray-500 mb-3 font-medium">{article.date}</p>
              <h3 className="text-2xl font-bold leading-tight group-hover:text-randstad-blue transition-colors">
                {article.title}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Newsletter = () => {
  return (
    <section className="bg-randstad-beige py-24">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12 grid lg:grid-cols-2 gap-16 items-center">
        <div className="relative">
          <img 
            src="https://picsum.photos/seed/newsletter/800/600" 
            alt="Newsletter" 
            className="w-full h-full object-cover rounded-2xl"
            referrerPolicy="no-referrer"
          />
          {/* Circular Graphic Overlay */}
          <div className="absolute -bottom-10 -left-10 w-64 h-64 border-[20px] border-randstad-blue rounded-full opacity-20"></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4/5 h-4/5 border-4 border-white/50 rounded-full"></div>
        </div>
        <div>
          <h2 className="text-5xl font-bold mb-8 tracking-tight leading-tight">
            workforce insights delivered to your inbox.
          </h2>
          <p className="text-lg text-gray-600 mb-10 leading-relaxed">
            Want to reduce your turnover rate, improve your company culture, or be inspired on improving employability for young people? Sign up to the monthly workforce insights newsletter and stay up to date with the latest recruitment and labor market news, tips, trends and reports for business leaders across the globe.
          </p>
          <button className="border-2 border-randstad-navy px-10 py-4 text-lg font-medium hover:bg-randstad-navy hover:text-white transition-all duration-300">
            subscribe
          </button>
        </div>
      </div>
    </section>
  );
};

const EnterpriseLeadership = () => {
  return (
    <section className="bg-white py-24 border-b border-gray-100">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12 flex flex-col lg:flex-row justify-between items-center gap-12">
        <h2 className="text-4xl font-bold tracking-tight max-w-2xl text-center lg:text-left leading-tight">
          access randstad enterprise thought leadership reports here.
        </h2>
        <button className="border-2 border-randstad-blue text-randstad-blue px-10 py-4 text-lg font-medium hover:bg-randstad-blue hover:text-white transition-all duration-300 whitespace-nowrap">
          access reports
        </button>
      </div>
    </section>
  );
};


// --- Main App ---

export default function SalaryTrendsReport() {
  return (
    <div className="min-h-screen bg-white">
      <main>
        <Hero />
        <AtAGlance />
        <AccordionSection 
          title="featured reports." 
          items={['ed&i report (equity, diversity, and inclusion)', 'workmonitor report']} 
          dark={true}
        />
        <AccordionSection 
          title="market trends & forecasting." 
          items={['talent insights reports', 'startup hiring trends reports', 'evolution of hybrid work report']} 
        />
        <SalaryTrends />
        <AccordionSection 
          title="employee sentiment and brand insights" 
          items={['talent pulse survey reports', 'employer brand research reports.']} 
        />
        <PartnerSection />
        <InsightsGrid />
        <Newsletter />
        <EnterpriseLeadership />
      </main>
      
      {/* Floating Feedback Button */}
      <div className="fixed right-0 top-1/2 -translate-y-1/2 z-40">
        <div className="bg-randstad-blue text-white py-4 px-2 rounded-l-md cursor-pointer hover:bg-opacity-90 transition-all shadow-lg [writing-mode:vertical-rl] text-sm font-medium">
          Feedback
        </div>
      </div>

      {/* Cookie Icon */}
      <div className="fixed bottom-6 left-6 z-40">
        <div className="bg-randstad-blue text-white p-3 rounded-full shadow-xl cursor-pointer hover:scale-110 transition-transform">
          <div className="w-6 h-6 border-2 border-white rounded-full border-dashed"></div>
        </div>
      </div>
    </div>
  );
}
