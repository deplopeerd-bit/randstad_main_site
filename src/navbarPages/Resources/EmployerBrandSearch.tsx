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
  Play, 
  Linkedin, 
  Twitter, 
  Facebook, 
  Youtube, 
  Instagram,
  ChevronRight
} from 'lucide-react';


const Hero = () => {
  return (
    <section className="bg-randstad-navy text-white py-20 lg:py-32 overflow-hidden relative">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12 relative z-10">
        <div className="max-w-3xl">
          <nav className="flex items-center gap-2 text-[12px] text-gray-400 mb-12">
            <a href="#" className="hover:text-white">home</a>
            <ChevronRight size={12} />
            <a href="#" className="hover:text-white">hr news</a>
            <ChevronRight size={12} />
            <a href="#" className="hover:text-white">workforce insights</a>
            <ChevronRight size={12} />
            <span className="text-white">employer brand research</span>
          </nav>
          <h1 className="text-[56px] lg:text-[72px] font-light leading-[1.1] mb-2 tracking-tight">
            employer brand research
          </h1>
          <h2 className="text-[48px] lg:text-[64px] font-light leading-[1.1] text-randstad-blue mb-8 tracking-tight">
            be a talent magnet.
          </h2>
          <p className="text-[18px] lg:text-[20px] font-light text-gray-300 mb-12 max-w-2xl leading-relaxed">
            Employee perception of an organization's culture determines its reputation in the talent market. Find out how a strong employer brand impacts your ability to hire a great workforce in the Randstad Employer Brand Research Reports.
          </p>
          <button className="border border-white px-8 py-4 text-[16px] font-medium hover:bg-white hover:text-randstad-navy transition-all duration-300">
            download reports
          </button>
        </div>
      </div>
      {/* Abstract background element */}
      <div className="absolute right-[-10%] top-1/2 -translate-y-1/2 w-[600px] h-[600px] opacity-10 pointer-events-none">
        <div className="w-full h-full border-[60px] border-randstad-blue rounded-full"></div>
      </div>
    </section>
  );
};

const CelebrateSection = () => {
  return (
    <section className="bg-white py-20 lg:py-32">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-12">
          <div className="max-w-2xl">
            <h2 className="text-[48px] lg:text-[64px] font-light leading-[1.1] text-randstad-navy mb-4 tracking-tight">
              celebrate India's top employers with randstad
            </h2>
            <h3 className="text-[48px] lg:text-[64px] font-light leading-[1.1] text-randstad-blue tracking-tight">
              join us for insights, recognition, and more.
            </h3>
          </div>
          <div>
            <button className="border border-randstad-blue text-randstad-blue px-8 py-4 text-[16px] font-medium hover:bg-randstad-blue hover:text-white transition-all duration-300">
              register now
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

const AccordionSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const reports = ['rebr 2025', 'rebr 2024', 'rebr 2023', 'rebr 2022'];

  return (
    <section className="bg-randstad-beige py-20 lg:py-32">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-20">
          <div>
            <h2 className="text-[32px] font-light text-randstad-navy leading-tight max-w-xs">
              randstad employer brand research reports.
            </h2>
          </div>
          <div className="space-y-0">
            {reports.map((report, index) => (
              <div key={report} className="border-b border-gray-300">
                <button 
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  className="w-full py-6 flex items-center justify-between text-left group"
                >
                  <span className="text-[24px] font-light text-randstad-navy group-hover:text-randstad-blue transition-colors">
                    {report}
                  </span>
                  <ChevronDown 
                    className={`text-randstad-blue transition-transform duration-300 ${openIndex === index ? 'rotate-180' : ''}`} 
                    size={28} 
                  />
                </button>
                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="overflow-hidden"
                    >
                      <div className="pb-8 text-gray-600">
                        Detailed insights and data for the {report} period are available for download.
                      </div>
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

const TalentMagnetSection = () => {
  return (
    <section className="bg-white py-20 lg:py-32">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <div>
            <h2 className="text-[48px] lg:text-[64px] font-light leading-[1.1] text-randstad-navy mb-8 tracking-tight">
              be a talent magnet, build a standout brand
            </h2>
            <p className="text-[18px] text-gray-600 leading-relaxed mb-6">
              Employees are drawn to great work cultures, not companies. Employee perception of an organization's culture determines its reputation in the talent market. Find out how a strong employer brand impacts your ability to hire a great workforce in the Randstad Employer Brand Research 2022.
            </p>
          </div>
          <div className="relative">
            <div className="bg-randstad-navy rounded-sm overflow-hidden aspect-video flex flex-col p-8 relative">
              <div className="mb-auto">
                <h4 className="text-white text-[20px] font-light mb-1">changing employer</h4>
                <h4 className="text-[#f2c94c] text-[20px] font-medium">India vs apac.</h4>
              </div>
              
              <div className="flex items-center gap-8">
                <div className="flex-1 space-y-4">
                  <div className="text-[14px] text-gray-400 uppercase tracking-wider">switchers</div>
                  <div className="text-[12px] text-gray-400">changed employer in the past year.</div>
                  <div className="space-y-2">
                    <div className="flex items-center gap-4">
                      <span className="text-[12px] text-white w-12">India</span>
                      <div className="h-4 bg-[#f2c94c] w-[29%]"></div>
                      <span className="text-[12px] text-white">29%</span>
                    </div>
                    <div className="flex items-center gap-4">
                      <span className="text-[12px] text-white w-12">apac</span>
                      <div className="h-4 bg-[#f2c94c] w-[17%]"></div>
                      <span className="text-[12px] text-white">17%</span>
                    </div>
                  </div>
                </div>
                <div className="w-24 h-24 rounded-full bg-white/10 flex items-center justify-center cursor-pointer hover:bg-white/20 transition-colors">
                  <Play fill="white" className="text-white ml-1" size={32} />
                </div>
              </div>
              
              {/* Abstract shape in video card */}
              <div className="absolute right-12 top-1/2 -translate-y-1/2 w-20 h-40 bg-[#eb5757] rounded-full opacity-80"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const RebrInfoSection = () => {
  return (
    <section className="bg-white py-20 lg:py-32">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <div className="flex justify-center">
            <div className="relative w-[300px] h-[300px]">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-16 h-16 bg-[#f2c94c] rounded-full"></div>
              <div className="absolute top-20 left-0 w-16 h-40 bg-[#82b1c1] rounded-full"></div>
              <div className="absolute top-24 left-20 w-16 h-24 bg-randstad-navy rounded-full"></div>
              <div className="absolute top-16 right-0 w-16 h-48 bg-[#eb5757] rounded-full"></div>
            </div>
          </div>
          <div>
            <h2 className="text-[48px] lg:text-[64px] font-light leading-[1.1] text-randstad-navy mb-8 tracking-tight">
              randstad employer brand research (REBR)
            </h2>
            <p className="text-[18px] text-gray-600 leading-relaxed mb-12">
              the most comprehensive, independent and in-depth employer brand research in the world. The annual employer brand research, covering 75% of the global economy with 33 participating countries and more than 1,85,000 respondents worldwide is based on perceptions of the general audience (students, employed and unemployed workforce) aged between 18-64. REBR has been providing valuable insights to help employers shape their employer brand for over 20 successful years globally and it is the 10th edition in India this year.
            </p>
            <button className="border border-randstad-blue text-randstad-blue px-8 py-4 text-[16px] font-medium hover:bg-randstad-blue hover:text-white transition-all duration-300">
              learn more
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

const WhyBrandingSection = () => {
  return (
    <section className="bg-white py-20 lg:py-32">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <div>
            <h2 className="text-[48px] lg:text-[64px] font-light leading-[1.1] text-randstad-navy mb-8 tracking-tight">
              why employer branding?
            </h2>
            <p className="text-[18px] text-gray-600 leading-relaxed mb-12">
              Offering an outstanding package is not enough to attract good talent. The unique value proposition of a company, work culture, development opportunities, job description and strong management all stack up to build your brand. Learn how a consistent employer brand can help you attract the best in a fiercely competitive talent market.
            </p>
            <button className="border border-randstad-blue text-randstad-blue px-8 py-4 text-[16px] font-medium hover:bg-randstad-blue hover:text-white transition-all duration-300">
              download report
            </button>
          </div>
          <div className="flex justify-center">
            <div className="relative w-[300px] h-[300px] flex flex-col items-center justify-center">
              <div className="w-16 h-16 bg-randstad-blue rounded-full mb-2"></div>
              <div className="w-16 h-20 bg-randstad-blue rounded-t-full mb-8"></div>
              <div className="grid grid-cols-3 gap-4">
                <div className="w-12 h-12 bg-randstad-navy rounded-full"></div>
                <div className="w-12 h-12 bg-[#f2c94c] rounded-full"></div>
                <div className="w-12 h-12 bg-randstad-navy rounded-full"></div>
                <div className="w-12 h-12 bg-randstad-navy rounded-full"></div>
                <div className="w-12 h-12 bg-randstad-navy rounded-full"></div>
                <div className="w-12 h-12 bg-[#eb5757] rounded-full"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const BestOfBestSection = () => {
  return (
    <section className="bg-white py-20 lg:py-32">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <div>
            <img 
              src="https://picsum.photos/seed/randstad-award/800/600" 
              alt="Randstad Award" 
              className="w-full h-auto rounded-sm shadow-xl"
              referrerPolicy="no-referrer"
            />
          </div>
          <div>
            <h2 className="text-[48px] lg:text-[64px] font-light leading-[1.1] text-randstad-navy mb-8 tracking-tight">
              recognizing the best of the best
            </h2>
            <p className="text-[18px] text-gray-600 leading-relaxed mb-12">
              Each year, Randstad recognizes leading brands, that stay ahead of the curve, with the Randstad Award. To become a promising brand that is equipped to meet changing employee expectations, learn from the winners for 2022.
            </p>
            <button className="border border-randstad-blue text-randstad-blue px-8 py-4 text-[16px] font-medium hover:bg-randstad-blue hover:text-white transition-all duration-300">
              view 2022 winners
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

const NewsletterSection = () => {
  return (
    <section className="bg-randstad-beige py-20 lg:py-32">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <div className="relative">
            <img 
              src="https://picsum.photos/seed/newsletter/800/600" 
              alt="Newsletter" 
              className="w-full h-auto rounded-sm"
              referrerPolicy="no-referrer"
            />
            {/* Abstract overlay circle */}
            <div className="absolute left-[-50px] bottom-[-50px] w-[300px] h-[300px] border-[40px] border-randstad-blue rounded-full opacity-30"></div>
          </div>
          <div>
            <h2 className="text-[48px] lg:text-[64px] font-light leading-[1.1] text-randstad-navy mb-8 tracking-tight">
              workforce insights delivered to your inbox.
            </h2>
            <p className="text-[18px] text-gray-600 leading-relaxed mb-12">
              Want to reduce your turnover rate, improve your company culture, or be inspired on improving employability for young people? Sign up to the monthly workforce insights newsletter and stay up to date with the latest recruitment and labor market news, tips, trends and reports for business leaders across the globe.
            </p>
            <button className="border border-randstad-navy text-randstad-navy px-8 py-4 text-[16px] font-medium hover:bg-randstad-navy hover:text-white transition-all duration-300">
              subscribe
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};



export default function ResEmployerBrand() {
  return (
    <div className="min-h-screen bg-white">
     
      <main>
        <Hero />
        <CelebrateSection />
        <AccordionSection />
        <TalentMagnetSection />
        <RebrInfoSection />
        <WhyBrandingSection />
        <BestOfBestSection />
        <NewsletterSection />
      </main>
    
      
      {/* Floating Feedback Button */}
      <div className="fixed right-0 top-1/2 -translate-y-1/2 z-40">
        <button className="bg-randstad-blue text-white py-4 px-2 rounded-l-md text-[12px] uppercase tracking-widest font-bold [writing-mode:vertical-rl] rotate-180">
          feedback
        </button>
      </div>

      {/* Cookie/Bot Icon */}
      <div className="fixed bottom-6 left-6 z-40">
        <button className="w-12 h-12 bg-randstad-blue rounded-full flex items-center justify-center text-white shadow-lg hover:scale-110 transition-transform">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 20C7.59 20 4 16.41 4 12C4 7.59 7.59 4 12 4C16.41 4 20 7.59 20 12C20 16.41 16.41 20 12 20Z" fill="currentColor"/>
            <path d="M12 17C13.66 17 15 15.66 15 14C15 12.34 13.66 11 12 11C10.34 11 9 12.34 9 14C9 15.66 10.34 17 12 17Z" fill="currentColor"/>
            <path d="M12 7C10.34 7 9 8.34 9 10C9 11.66 10.34 13 12 13C13.66 13 15 11.66 15 10C15 8.34 13.66 7 12 7Z" fill="currentColor" opacity="0.3"/>
          </svg>
        </button>
      </div>
    </div>
  );
}
