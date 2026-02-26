import { motion } from "motion/react";

import { 
  Heart, 
  User, 
  Search, 
  ChevronDown, 
  ChevronRight, 
  Linkedin, 
  Twitter, 
  Facebook, 
  Youtube, 
  Instagram,
  Play
} from 'lucide-react';


const Breadcrumbs = () => (
  <div className="bg-white py-4">
    <div className="max-w-[1440px] mx-auto px-4 md:px-8 text-[12px] text-gray-500 flex items-center space-x-2">
      <a href="#" className="hover:underline">home</a>
      <ChevronRight className="w-3 h-3" />
      <a href="#" className="hover:underline">hr news</a>
      <ChevronRight className="w-3 h-3" />
      <a href="#" className="hover:underline">workforce insights</a>
      <ChevronRight className="w-3 h-3" />
      <span className="text-gray-900">employer brand research</span>
    </div>
  </div>
);

const Hero = () => (
  <section className="bg-randstad-navy text-white py-20 overflow-hidden">
    <div className="max-w-[1440px] mx-auto px-4 md:px-8 flex flex-col md:flex-row items-center">
      <div className="md:w-1/2 z-10">
        <h1 className="text-[48px] md:text-[64px] font-bold leading-[1.1] tracking-tight mb-2">
          employer brand research
        </h1>
        <h2 className="text-[48px] md:text-[64px] font-bold leading-[1.1] tracking-tight text-randstad-light-blue mb-8">
          be a talent magnet.
        </h2>
        <p className="text-[18px] leading-relaxed mb-10 max-w-lg text-gray-300">
          Employee perception of an organization's culture determines its reputation in the talent market. Find out how a strong employer brand impacts your ability to hire a great workforce in the Randstad Employer Brand Research Reports.
        </p>
        <button className="border-2 border-white px-8 py-3 text-[16px] font-semibold hover:bg-white hover:text-randstad-navy transition-colors">
          download reports
        </button>
      </div>
      <div className="md:w-1/2 mt-12 md:mt-0 relative">
        {/* Abstract background elements could go here */}
      </div>
    </div>
  </section>
);

const InsightsSection = () => (
  <section className="bg-white py-24">
    <div className="max-w-[1440px] mx-auto px-4 md:px-8 flex flex-col md:flex-row items-center justify-between">
      <div className="md:w-3/5">
        <h2 className="text-[48px] font-bold leading-[1.1] text-randstad-navy mb-4">
          celebrate India's top employers with randstad
        </h2>
        <h3 className="text-[48px] font-bold leading-[1.1] text-randstad-blue mb-8">
          join us for insights, recognition, and more.
        </h3>
      </div>
      <div className="md:w-1/5 flex justify-end">
        <button className="border-2 border-randstad-blue text-randstad-blue px-8 py-3 text-[16px] font-semibold hover:bg-randstad-blue hover:text-white transition-colors">
          register now
        </button>
      </div>
    </div>
  </section>
);

const ReportsAccordion = () => (
  <section className="bg-randstad-grey py-20">
    <div className="max-w-[1440px] mx-auto px-4 md:px-8 flex flex-col md:flex-row">
      <div className="md:w-1/3 mb-8 md:mb-0">
        <h2 className="text-[24px] font-bold text-randstad-navy leading-tight">
          randstad employer<br />brand research reports.
        </h2>
      </div>
      <div className="md:w-2/3 space-y-0 border-t border-gray-300">
        {['rebr 2025', 'rebr 2024', 'rebr 2023', 'rebr 2022'].map((item) => (
          <div key={item} className="border-b border-gray-300 py-6 flex items-center justify-between cursor-pointer group">
            <span className="text-[20px] font-medium text-randstad-navy group-hover:text-randstad-blue transition-colors">{item}</span>
            <ChevronDown className="w-6 h-6 text-randstad-blue" />
          </div>
        ))}
      </div>
    </div>
  </section>
);

const TalentMagnetSection = () => (
  <section className="bg-white py-24 overflow-hidden">
    <div className="max-w-[1440px] mx-auto px-4 md:px-8 flex flex-col md:flex-row items-center gap-16">
      <div className="md:w-1/2">
        <h2 className="text-[48px] font-bold leading-[1.1] text-randstad-navy mb-8">
          be a talent magnet, build a standout brand
        </h2>
        <p className="text-[16px] leading-relaxed text-gray-700 mb-8">
          Employees are drawn to great work cultures, not companies. Employee perception of an organization's culture determines its reputation in the talent market. Find out how a strong employer brand impacts your ability to hire a great workforce in the Randstad Employer Brand Research 2022.
        </p>
      </div>
      <div className="md:w-1/2 bg-randstad-navy rounded-lg p-12 relative aspect-video flex items-center justify-center">
        <div className="absolute top-8 left-8 text-white">
          <h4 className="text-[18px] font-medium mb-1">changing employer</h4>
          <h3 className="text-[24px] font-bold text-yellow-500">India vs apac.</h3>
        </div>
        <div className="w-full max-w-xs space-y-4">
          <div className="text-white text-[14px] mb-2">switchers <span className="block text-[10px] opacity-60">changed employer in the past year.</span></div>
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-white text-[12px]">India</span>
              <div className="flex-1 mx-4 h-6 bg-yellow-500 w-[29%]"></div>
              <span className="text-white text-[12px]">29%</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-white text-[12px]">apac</span>
              <div className="flex-1 mx-4 h-6 bg-yellow-500/40 w-[17%]"></div>
              <span className="text-white text-[12px]">17%</span>
            </div>
          </div>
        </div>
        <div className="absolute bottom-8 right-8 flex items-center space-x-4">
          <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center cursor-pointer hover:scale-110 transition-transform">
            <Play className="w-8 h-8 text-randstad-navy fill-randstad-navy ml-1" />
          </div>
          <div className="w-12 h-24 bg-red-500 rounded-full"></div>
        </div>
      </div>
    </div>
  </section>
);

const REBRInfoSection = () => (
  <section className="bg-randstad-grey py-24">
    <div className="max-w-[1440px] mx-auto px-4 md:px-8 flex flex-col md:flex-row items-center gap-16">
      <div className="md:w-1/2 flex justify-center">
        <div className="relative w-80 h-80">
          <div className="absolute top-0 left-0 w-24 h-48 bg-cyan-500/60 rounded-t-full"></div>
          <div className="absolute top-12 left-28 w-24 h-24 bg-yellow-500 rounded-full"></div>
          <div className="absolute top-40 left-28 w-24 h-48 bg-yellow-500 rounded-t-full"></div>
          <div className="absolute top-24 left-56 w-24 h-48 bg-red-500 rounded-t-full"></div>
          <div className="absolute top-40 left-12 w-24 h-24 bg-randstad-navy rounded-full"></div>
          <div className="absolute bottom-0 left-12 w-24 h-24 bg-randstad-navy rounded-t-full"></div>
        </div>
      </div>
      <div className="md:w-1/2">
        <h2 className="text-[48px] font-bold leading-[1.1] text-randstad-navy mb-8">
          randstad employer brand research (REBR)
        </h2>
        <p className="text-[16px] leading-relaxed text-gray-700 mb-10">
          the most comprehensive, independent and in-depth employer brand research in the world. The annual employer brand research, covering 75% of the global economy with 33 participating countries and more than 1,85,000 respondents worldwide is based on perceptions of the general audience (students, employed and unemployed workforce) aged between 18-64. REBR has been providing valuable insights to help employers shape their employer brand for over 20 successful years globally and it is the 10th edition in India this year.
        </p>
        <button className="border-2 border-randstad-blue text-randstad-blue px-8 py-3 text-[16px] font-semibold hover:bg-randstad-blue hover:text-white transition-colors">
          learn more
        </button>
      </div>
    </div>
  </section>
);

const WhyBrandingSection = () => (
  <section className="bg-white py-24">
    <div className="max-w-[1440px] mx-auto px-4 md:px-8 flex flex-col md:flex-row items-center gap-16">
      <div className="md:w-1/2">
        <h2 className="text-[48px] font-bold leading-[1.1] text-randstad-navy mb-8">
          why employer branding?
        </h2>
        <p className="text-[16px] leading-relaxed text-gray-700 mb-10">
          Offering an outstanding package is not enough to attract good talent. The unique value proposition of a company, work culture, development opportunities, job description and strong management all stack up to build your brand. Learn how a consistent employer brand can help you attract the best in a fiercely competitive talent market.
        </p>
        <button className="border-2 border-randstad-blue text-randstad-blue px-8 py-3 text-[16px] font-semibold hover:bg-randstad-blue hover:text-white transition-colors">
          download report
        </button>
      </div>
      <div className="md:w-1/2 flex justify-center">
        <div className="grid grid-cols-4 gap-4 items-end">
          <div className="col-start-2 col-span-2 flex flex-col items-center">
            <div className="w-16 h-16 bg-randstad-blue rounded-full mb-2"></div>
            <div className="w-16 h-24 bg-randstad-blue rounded-t-full"></div>
          </div>
          <div className="col-start-1 flex flex-col items-center">
            <div className="w-16 h-16 bg-randstad-navy rounded-full mb-4"></div>
          </div>
          <div className="col-start-2 flex flex-col items-center">
            <div className="w-16 h-16 bg-yellow-500 rounded-full mb-4"></div>
          </div>
          <div className="col-start-3 flex flex-col items-center">
            <div className="w-16 h-16 bg-randstad-navy rounded-full mb-4"></div>
          </div>
          <div className="col-start-1 flex flex-col items-center">
            <div className="w-16 h-16 bg-randstad-navy rounded-full"></div>
          </div>
          <div className="col-start-2 flex flex-col items-center">
            <div className="w-16 h-16 bg-randstad-navy rounded-full"></div>
          </div>
          <div className="col-start-3 flex flex-col items-center">
            <div className="w-16 h-16 bg-randstad-navy rounded-full"></div>
          </div>
          <div className="col-start-4 flex flex-col items-center">
            <div className="w-16 h-16 bg-red-500 rounded-full"></div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const RecognizingSection = () => (
  <section className="bg-randstad-grey py-24">
    <div className="max-w-[1440px] mx-auto px-4 md:px-8 flex flex-col md:flex-row items-center gap-16">
      <div className="md:w-1/2">
        <img 
          src="https://picsum.photos/seed/trophy/800/600" 
          alt="Randstad Award" 
          className="w-full h-auto rounded-sm shadow-lg"
          referrerPolicy="no-referrer"
        />
      </div>
      <div className="md:w-1/2">
        <h2 className="text-[48px] font-bold leading-[1.1] text-randstad-navy mb-8">
          recognizing the best of the best
        </h2>
        <p className="text-[16px] leading-relaxed text-gray-700 mb-10">
          Each year, Randstad recognizes leading brands, that stay ahead of the curve, with the Randstad Award. To become a promising brand that is equipped to meet changing employee expectations, learn from the winners for 2022.
        </p>
        <button className="border-2 border-randstad-blue text-randstad-blue px-8 py-3 text-[16px] font-semibold hover:bg-randstad-blue hover:text-white transition-colors">
          view 2022 winners
        </button>
      </div>
    </div>
  </section>
);

const SubscribeSection = () => (
  <section className="bg-white py-24">
    <div className="max-w-[1440px] mx-auto px-4 md:px-8 flex flex-col md:flex-row items-center gap-16">
      <div className="md:w-1/2 relative">
        <img 
          src="https://picsum.photos/seed/keyboard/800/600" 
          alt="Workforce insights" 
          className="w-full h-auto rounded-sm"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-64 h-64 border-8 border-randstad-light-blue rounded-full opacity-80"></div>
          <div className="absolute top-1/4 right-1/4 w-8 h-8 bg-white rounded-full"></div>
          <div className="absolute bottom-1/4 left-1/3 w-12 h-12 bg-randstad-blue rounded-full"></div>
        </div>
      </div>
      <div className="md:w-1/2">
        <h2 className="text-[48px] font-bold leading-[1.1] text-randstad-navy mb-8">
          workforce insights delivered to your inbox.
        </h2>
        <p className="text-[16px] leading-relaxed text-gray-700 mb-10">
          Want to reduce your turnover rate, improve your company culture, or be inspired on improving employability for young people? Sign up to the monthly workforce insights newsletter and stay up to date with the latest recruitment and labor market news, tips, trends and reports for business leaders across the globe.
        </p>
        <button className="border-2 border-randstad-navy text-randstad-navy px-8 py-3 text-[16px] font-semibold hover:bg-randstad-navy hover:text-white transition-colors">
          subscribe
        </button>
      </div>
    </div>
  </section>
);

export default function EmployerBrandResearchReport() {
  return (
    <div className="min-h-screen bg-white">
      <Breadcrumbs />
      <Hero />
      <InsightsSection />
      <ReportsAccordion />
      <TalentMagnetSection />
      <REBRInfoSection />
      <WhyBrandingSection />
      <RecognizingSection />
      <SubscribeSection />
    
      
      {/* Floating Feedback Button */}
      <div className="fixed right-0 top-1/2 -translate-y-1/2 z-40">
        <div className="bg-randstad-blue text-white py-3 px-1 text-[12px] font-bold uppercase tracking-widest [writing-mode:vertical-rl] rotate-180 rounded-l-md cursor-pointer hover:bg-randstad-navy transition-colors">
          feedback
        </div>
      </div>

      {/* Cookie/Bot Icon */}
      <div className="fixed bottom-6 left-6 z-40">
        <div className="w-12 h-12 bg-randstad-blue rounded-full flex items-center justify-center shadow-lg cursor-pointer hover:scale-110 transition-transform">
          <div className="w-6 h-6 border-2 border-white rounded-full relative">
            <div className="absolute top-1 left-1 w-1 h-1 bg-white rounded-full"></div>
            <div className="absolute top-1 right-1 w-1 h-1 bg-white rounded-full"></div>
            <div className="absolute bottom-1 left-1/2 -translate-x-1/2 w-2 h-1 border-b border-white rounded-full"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
