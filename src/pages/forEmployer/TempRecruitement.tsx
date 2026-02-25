import React, { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { 
  ChevronDown, 
  Heart, 
  User, 
  Search, 
  FileText, 
  Mail, 
  ArrowRight, 
  Download,
  Linkedin,
  Twitter,
  Facebook,
  Youtube,
  Instagram,
  Menu,
  X,
  Pencil,
  Layout,
  Users
} from 'lucide-react';

// --- Constants & Types ---

const COLORS = {
  navy: '#141b3d',
  blue: '#2175d9',
  lightBlue: '#e9f2fb',
  beige: '#f5f2ed',
  text: '#333333',
  muted: '#666666',
  border: '#e5e7eb',
};

const SECTIONS = [
  { id: 'section-1', title: 'what is flexible staffing?' },
  { id: 'section-2', title: 'why do you need a flexible staffing strategy?' },
  { id: 'section-3', title: 'building your flexible staffing strategy.' },
  { id: 'section-4', title: 'attracting and retaining contingent talent.' },
  { id: 'section-5', title: 'a staffing agency can help.' },
  { id: 'section-6', title: 'working with randstad.' },
  { id: 'section-7', title: 'flexible staffing FAQs' },
];

// --- Components ---

const TopNav = () => (
  <div className="hidden lg:flex justify-end px-8 py-2 border-b border-gray-100 text-[11px] font-medium text-muted">
    <a href="#" className="hover:text-blue transition-colors">contact us</a>
  </div>
);



const Hero = () => (
  <section className="bg-[#141b3d] text-white pt-16 pb-24 lg:pt-24 lg:pb-32 overflow-hidden relative">
    <div className="max-w-[1440px] mx-auto px-4 lg:px-8 flex flex-col lg:flex-row items-center justify-between gap-12">
      <div className="max-w-2xl">
        <h1 className="text-5xl lg:text-7xl font-bold mb-8 tracking-tight">
          flexible staffing.
        </h1>
        <button className="px-8 py-3.5 border-2 border-white text-white font-bold text-[15px] hover:bg-white hover:text-[#141b3d] transition-all duration-300">
          request a callback
        </button>
      </div>
      
      {/* Decorative Graphic */}
      <div className="relative w-full max-w-md aspect-square flex items-center justify-center">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-64 h-64 border-2 border-blue/30 rounded-full animate-pulse" />
          <div className="absolute w-48 h-48 border-2 border-blue/20 rounded-full" />
        </div>
        <div className="relative z-10">
          <Search size={120} className="text-white opacity-20" strokeWidth={1} />
          <div className="absolute -bottom-4 -right-4 flex gap-2">
            <div className="w-8 h-8 bg-blue rounded-full" />
            <div className="w-4 h-4 bg-blue/50 rounded-full mt-2" />
          </div>
        </div>
      </div>
    </div>
    
    {/* Feedback Tab */}
    <div className="hidden lg:block absolute right-0 top-1/2 -translate-y-1/2 rotate-90 origin-right">
      <button className="bg-blue text-white px-6 py-2 text-[13px] font-bold tracking-wider uppercase">
        Feedback
      </button>
    </div>
  </section>
);

const Breadcrumbs = () => (
  <div className="max-w-[1440px] mx-auto px-4 lg:px-8 py-6 text-[13px] text-muted flex items-center gap-2">
    <a href="#" className="hover:text-blue">home</a>
    <span>&gt;</span>
    <a href="#" className="hover:text-blue">services</a>
    <span>&gt;</span>
    <span className="text-gray-400">temp recruitment</span>
  </div>
);

const CalloutBox = ({ title, linkText, icon: Icon, type = 'download' }: { title: string, linkText: string, icon: any, type?: 'download' | 'watch' | 'learn' }) => (
  <div className="bg-[#f5f2ed] p-8 lg:p-12 my-12 flex flex-col sm:flex-row items-start sm:items-center gap-8 group cursor-pointer border-l-4 border-transparent hover:border-blue transition-all">
    <div className="bg-white p-6 rounded-sm shadow-sm flex-shrink-0">
      <Icon size={48} className="text-blue" strokeWidth={1.2} />
    </div>
    <div className="flex-1">
      <h4 className="text-2xl lg:text-3xl font-medium text-[#141b3d] mb-4 group-hover:text-blue transition-colors leading-tight">
        {title}
      </h4>
      <button className="flex items-center gap-2 text-blue font-bold text-[16px] border-b-2 border-transparent hover:border-blue transition-all uppercase tracking-wider">
        {linkText}
        {type === 'download' && <Download size={18} />}
        {type === 'watch' && <ArrowRight size={18} />}
        {type === 'learn' && <ArrowRight size={18} />}
      </button>
    </div>
  </div>
);

const Sidebar = () => {
  const [activeSection, setActiveSection] = useState('section-1');

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200;
      for (const section of SECTIONS) {
        const element = document.getElementById(section.id);
        if (element && element.offsetTop <= scrollPosition) {
          setActiveSection(section.id);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <aside className="hidden lg:block w-72 sticky top-32 h-fit">
      <h3 className="text-[14px] font-bold text-[#141b3d] uppercase tracking-wider mb-8">
        table of contents
      </h3>
      <ul className="flex flex-col gap-4">
        {SECTIONS.map((section, index) => (
          <li key={section.id}>
            <a 
              href={`#${section.id}`}
              className={`flex items-start gap-3 text-[15px] transition-colors ${
                activeSection === section.id ? 'text-blue font-bold' : 'text-muted hover:text-blue'
              }`}
            >
              <span className="text-[13px] mt-0.5">{index + 1}.</span>
              <span>{section.title}</span>
            </a>
          </li>
        ))}
      </ul>
    </aside>
  );
};

const LatestUpdates = () => {
  const updates = [
    {
      date: '02 August 2023',
      title: 'randstad with heart.',
      image: 'https://picsum.photos/seed/heart/800/500',
    },
    {
      date: '22 June 2023',
      title: 'the future of work after coronavirus.',
      image: 'https://picsum.photos/seed/future/800/500',
    },
    {
      date: '22 June 2023',
      title: 'bangalore remains india\'s highest paying city.',
      image: 'https://picsum.photos/seed/bangalore/800/500',
    },
    {
      date: '16 June 2023',
      title: 'job hunting? stand out from the competition.',
      image: 'https://picsum.photos/seed/hunting/800/500',
    },
    {
      date: '16 June 2023',
      title: 'challenges faced by the IT Sector.',
      image: 'https://picsum.photos/seed/it/800/500',
    },
    {
      date: '09 June 2023',
      title: 'keep your cv real and avoid fake claims.',
      image: 'https://picsum.photos/seed/cv/800/500',
    },
  ];

  return (
    <section className="bg-white py-24 border-t border-gray-100">
      <div className="max-w-[1440px] mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between mb-12">
          <h2 className="text-4xl font-bold text-[#141b3d]">latest updates</h2>
          <a href="#" className="text-blue font-bold flex items-center gap-2 hover:underline">
            see all articles
          </a>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {updates.map((update, idx) => (
            <div key={idx} className="group cursor-pointer">
              <div className="aspect-[16/10] overflow-hidden mb-6">
                <img 
                  src={update.image} 
                  alt={update.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
              </div>
              <p className="text-[14px] text-muted mb-3">{update.date}</p>
              <h3 className="text-2xl font-medium text-[#141b3d] leading-tight group-hover:text-blue transition-colors">
                {update.title}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};



export default function EmpTempR() {
  return (
    <div className="min-h-screen bg-white font-sans text-[#333333]">
      <TopNav />
   
      <Hero />
      
      <main className="max-w-[1440px] mx-auto px-4 lg:px-8 py-12">
        <div className="flex flex-col lg:flex-row gap-16">
          <Sidebar />
          
          <div className="flex-1 max-w-4xl">
            <Breadcrumbs />
            
            {/* Introduction */}
            <section className="mb-24">
              <h2 className="text-4xl lg:text-5xl font-bold text-[#141b3d] mb-8 leading-tight">
                introduction to flexible staffing.
              </h2>
              <div className="space-y-6 text-[18px] leading-relaxed text-muted">
                <p>
                  Companies worldwide are transforming their staffing practices to meet the evolving challenges of today's global economy. HR leaders and hiring managers are optimizing talent acquisition using temporary staffing solutions.
                </p>
                <p>
                  In 2020, <a href="#" className="text-blue hover:underline">76% of human capital leaders</a> used temporary staffing solutions to build a more resilient workforce. Business leaders are discovering that the ideal staffing strategy includes a balance of permanent hires and temporary hires. Working with an HR services firm to optimize use of internal resources can help.
                </p>
                <p>
                  It's time to reimagine your own staffing strategy. Here you can find everything you need to know about temporary staffing and how it can contribute to your company's success.
                </p>
              </div>
              
              <button className="mt-12 flex items-center gap-3 px-8 py-3.5 border-2 border-blue text-blue font-bold text-[15px] hover:bg-blue hover:text-white transition-all duration-300">
                <Download size={20} />
                download page as PDF
              </button>
            </section>

            {/* Section 1 */}
            <section id="section-1" className="mb-24 scroll-mt-32">
              <div className="flex items-start gap-4 mb-8">
                <span className="text-5xl font-bold text-blue leading-none">1</span>
                <h2 className="text-4xl lg:text-5xl font-bold text-[#141b3d] leading-tight">
                  what is flexible staffing?
                </h2>
              </div>
              <div className="space-y-6 text-[18px] leading-relaxed text-muted">
                <p>
                  Flexible staffing is a strategy by which companies employ contingent workers. HR teams and other departments use a contingent workforce to meet evolving business and operational challenges, and as an alternative to hiring permanent employees. Contingent workers are not on a company's payroll—they are contractors, independent freelancers, gig workers, and agency-provided workers.
                </p>
                <p>
                  Companies use flexible staffing for a variety of reasons, such as:
                </p>
                <ul className="list-disc pl-6 space-y-4">
                  <li>filling a temporary talent gap, such as when a permanent employee is on maternity leave</li>
                  <li>meeting a temporary surge in labor demand (e.g., seasonal work)</li>
                  <li>trialing contingent workers as potential permanent hires</li>
                  <li>supporting one's small business in lieu of costly, full-time hires</li>
                  <li>accessing top talent among workers that prefer to have a flexible schedule, such as parents and students</li>
                </ul>
                <a href="#" className="inline-block text-blue font-bold hover:underline mt-4">
                  Learn more: the pros and cons of hiring flexible talent
                </a>
              </div>
              
              <CalloutBox 
                title="the pros and cons of hiring flexible talent."
                linkText="learn more"
                icon={Pencil}
                type="learn"
              />
            </section>

            {/* Section 2 */}
            <section id="section-2" className="mb-24 scroll-mt-32">
              <div className="flex items-start gap-4 mb-8">
                <span className="text-5xl font-bold text-blue leading-none">2</span>
                <h2 className="text-4xl lg:text-5xl font-bold text-[#141b3d] leading-tight">
                  why do you need a flexible staffing strategy?
                </h2>
              </div>
              <div className="space-y-6 text-[18px] leading-relaxed text-muted">
                <p>
                  Preparing a flexible staffing strategy now gives your workforce the resiliency it needs to take on the unpredictable challenges of the future—without the time, effort, and costs associated with hiring new employees.
                </p>
                <p>
                  Thanks to the <a href="#" className="text-blue hover:underline">gig economy</a> and the availability provided by remote work, there are more capable professionals and a wider variety of talent available than at any point in history. You too can take advantage of contingent workers, each with their own unique advantages and personal goals.
                </p>
                
                <h3 className="text-2xl font-bold text-[#141b3d] mt-12 mb-6">the problem with rigid staffing strategies</h3>
                <p>
                  Identifying and acquiring the right talent remains one of the biggest challenges in modern business: 80% of CEOs worry about skills shortages, <a href="#" className="text-blue hover:underline">The Economist</a> reports. Hiring a permanent employee is a considerable commitment in terms of finances, productivity, and time; companies lose money and productivity while positions remain unfilled as well.
                </p>
                
                <div className="bg-[#f5f2ed] p-12 my-12 relative">
                  <span className="absolute top-4 left-4 text-7xl text-blue/20 font-serif">"</span>
                  <p className="text-2xl font-medium text-[#141b3d] relative z-10">
                    The typical cost to replace an employee is 21% of the employee's annual salary as well.
                  </p>
                  <p className="mt-6 font-bold text-[#141b3d]">Forbes</p>
                </div>
              </div>
              
              <CalloutBox 
                title="how to build resilience into your business strategy."
                linkText="download now"
                icon={Mail}
              />
            </section>

            {/* Section 3 */}
            <section id="section-3" className="mb-24 scroll-mt-32">
              <div className="flex items-start gap-4 mb-8">
                <span className="text-5xl font-bold text-blue leading-none">3</span>
                <h2 className="text-4xl lg:text-5xl font-bold text-[#141b3d] leading-tight">
                  building your flexible staffing strategy.
                </h2>
              </div>
              <div className="space-y-6 text-[18px] leading-relaxed text-muted">
                <p>
                  Now that you recognize flexible staffing as an important asset in modern business, you can develop your own flexible staffing strategy to leverage its benefits. You can begin by identifying your own unique needs, then update your strategy for temporary labor to align with operations and business objectives.
                </p>
                
                <h3 className="text-2xl font-bold text-[#141b3d] mt-12 mb-6">how to get started with flexible staffing</h3>
                <p>
                  Traditional hiring calls upon company stakeholders to identify, invest in, and build formal relationships with individual employees. With flexible staffing, the focus of the relationship shifts to a talent pool—for example, an assortment of freelancers and contractors. This pool may also include staffing agencies, which bring their own, already-vetted relationships with contingent workers to the bargaining table.
                </p>
              </div>
              
              <CalloutBox 
                title="the 6 building blocks of a profitable team."
                linkText="download now"
                icon={Layout}
              />
              
              <div className="my-12 aspect-[16/9] overflow-hidden">
                <img 
                  src="https://picsum.photos/seed/man/1200/675" 
                  alt="Man smiling"
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
            </section>

            {/* Section 4 */}
            <section id="section-4" className="mb-24 scroll-mt-32">
              <div className="flex items-start gap-4 mb-8">
                <span className="text-5xl font-bold text-blue leading-none">4</span>
                <h2 className="text-4xl lg:text-5xl font-bold text-[#141b3d] leading-tight">
                  attracting and retaining contingent talent.
                </h2>
              </div>
              <div className="space-y-6 text-[18px] leading-relaxed text-muted">
                <p>
                  Companies need to improve how they attract and retain contingent talent as it becomes more important to them. To begin, their HR leaders must familiarize themselves with contingent workers' unique needs. Although companies approach flexible staffing as a business solution, they are engaging a community of talented individuals seeking roles that will help them fulfill their own professional goals.
                </p>
                
                <h3 className="text-2xl font-bold text-[#141b3d] mt-12 mb-6">why do workers choose flexible roles?</h3>
                <ul className="list-disc pl-6 space-y-4">
                  <li>opportunities to build relevant professional experience</li>
                  <li>exposure to training and other staff benefits</li>
                  <li>pathways to permanent positions</li>
                  <li>referrals and recommendations from supervisors</li>
                  <li>association with recognizable industry brands</li>
                  <li>trying out different jobs to decide what they want in a career</li>
                  <li>more time to travel, attend school, raise children, or care for family members</li>
                </ul>
              </div>
              
              <CalloutBox 
                title="how to engage your contingent workforce."
                linkText="watch now"
                icon={Pencil}
                type="watch"
              />
              
              <button className="mt-8 px-8 py-3.5 border-2 border-blue text-blue font-bold text-[15px] hover:bg-blue hover:text-white transition-all duration-300">
                speak to an expert
              </button>
            </section>

            {/* Section 5 */}
            <section id="section-5" className="mb-24 scroll-mt-32">
              <div className="flex items-start gap-4 mb-8">
                <span className="text-5xl font-bold text-blue leading-none">5</span>
                <h2 className="text-4xl lg:text-5xl font-bold text-[#141b3d] leading-tight">
                  a staffing agency can help.
                </h2>
              </div>
              <div className="space-y-6 text-[18px] leading-relaxed text-muted">
                <p>
                  For decades, staffing agencies have helped companies fill labor shortages and even build relationships with successful full-time hires. Today's staffing agencies have evolved to meet the modern needs of businesses with critical capabilities such as:
                </p>
                <ul className="list-disc pl-6 space-y-4">
                  <li>connecting companies with talented workers, quickly and efficiently</li>
                  <li>interviewing and vetting talent to the benefit of companies seeking them</li>
                  <li>fulfilling formal requirements for recruitment process outsourcing (RPO)</li>
                  <li>nurturing a tight-knit community of enthusiastic and capable workers</li>
                  <li>optimizing staffing best practices for remote work environments</li>
                  <li>scaling up staffing efforts while helping you plan your workforce efficiently</li>
                </ul>
              </div>
              
              <div className="my-12 aspect-[16/9] overflow-hidden">
                <img 
                  src="https://picsum.photos/seed/suit/1200/675" 
                  alt="Man in suit"
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              
              <CalloutBox 
                title="10 questions to ask when choosing an HR partner."
                linkText="download now"
                icon={Mail}
              />
            </section>

            {/* Section 6 */}
            <section id="section-6" className="mb-24 scroll-mt-32">
              <div className="flex items-start gap-4 mb-8">
                <span className="text-5xl font-bold text-blue leading-none">6</span>
                <h2 className="text-4xl lg:text-5xl font-bold text-[#141b3d] leading-tight">
                  working with randstad.
                </h2>
              </div>
              <div className="space-y-6 text-[18px] leading-relaxed text-muted">
                <p>
                  Randstad is the world leader in the HR services industry. With 60 years of experience, our close professional relationships and expertise span multiple continents and industries. We provide unique and localized solutions to meet any companies' contingent workforce needs—on small and large scales, for companies of all sizes.
                </p>
                <p>Our partners enjoy:</p>
                <ul className="list-disc pl-6 space-y-4">
                  <li>flexible access to millions of candidates</li>
                  <li>high-tech and people-powered solutions</li>
                  <li>deep understanding of the industry's latest best practices and trends</li>
                  <li>a global presence, providing over 600,000 workers with employment every day</li>
                </ul>
              </div>
              
              <CalloutBox 
                title="download the randstad staffing guide"
                linkText="download now"
                icon={User}
              />
            </section>

            {/* Section 7 */}
            <section id="section-7" className="mb-24 scroll-mt-32">
              <div className="flex items-start gap-4 mb-8">
                <span className="text-5xl font-bold text-blue leading-none">7</span>
                <h2 className="text-4xl lg:text-5xl font-bold text-[#141b3d] leading-tight">
                  flexible staffing FAQs
                </h2>
              </div>
              <div className="space-y-12">
                <div>
                  <h4 className="text-xl font-bold text-[#141b3d] mb-4">what are the different types of staffing?</h4>
                  <p className="text-[18px] text-muted leading-relaxed">
                    Traditional staffing involves the hiring of permanent employees. Companies offer them salaries and benefits so that they remain part of the company long term. Alternate staffing solutions include partnering with individual freelancers, partnering with contractors or vendors, and working with staffing agencies like Randstad. These methods allow companies to acquire talent without hiring permanent employees.
                  </p>
                </div>
                <div>
                  <h4 className="text-xl font-bold text-[#141b3d] mb-4">what is the difference between flexible staffing and recruitment?</h4>
                  <p className="text-[18px] text-muted leading-relaxed">
                    Flexible staffing is the use of temporary, contingent workers to fill talent needs within a company. It does not require direct recruitment, hiring, administrative handling, and payrolling, which apply to permanent employees. Rather, flexible staffing involves a third-party partnership—with a staffing company, a contractor, a vendor, or a freelancer.
                  </p>
                </div>
                <div>
                  <h4 className="text-xl font-bold text-[#141b3d] mb-4">what are companies' responsibilities to their contingent workers?</h4>
                  <p className="text-[18px] text-muted leading-relaxed">
                    Unlike employees, most contingent workers do not receive salaries or benefits through the companies for whom they perform work. If those contingent workers are contractors or freelancers, the company pays them as they would vendors. If those contingent workers represent a staffing agency, companies pay the agency, which pays workers in turn with respect to local laws and wage requirements. Companies must provide workers with a safe, equitable, and constructive work environment.
                  </p>
                </div>
              </div>
            </section>
          </div>
        </div>
      </main>
      
      <LatestUpdates />
     
    </div>
  );
}
