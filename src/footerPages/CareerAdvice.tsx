import React from "react";
import { motion } from "motion/react";

import { 
  Search, 
  Heart, 
  User, 
  ChevronDown, 
  ArrowRight, 
  Linkedin, 
  Twitter, 
  Facebook, 
  Youtube, 
  Instagram,
  Check
} from 'lucide-react';

const NavItem = ({ children, hasDropdown = false }: { children: React.ReactNode, hasDropdown?: boolean }) => (
  <div className="flex items-center gap-1 cursor-pointer hover:text-blue-400 transition-colors py-4">
    <span className="text-[15px] font-medium">{children}</span>
    {hasDropdown && <ChevronDown size={14} />}
  </div>
);

const FooterColumn = ({ title, links }: { title: string, links: string[] }) => (
  <div className="flex flex-col gap-3">
    <h3 className="text-white font-bold text-[18px] mb-2">{title}</h3>
    {links.map((link, i) => (
      <a key={i} href="#" className="text-gray-300 hover:text-white text-[14px] transition-colors">
        {link}
      </a>
    ))}
  </div>
);

const Card = ({ image, category, title, articles }: { image: string, category?: string, title: string, articles?: string }) => (
  <div className="flex flex-col group cursor-pointer">
    <div className="overflow-hidden rounded-lg mb-4 aspect-[16/10]">
      <img 
        src={image} 
        alt={title} 
        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        referrerPolicy="no-referrer"
      />
    </div>
    {articles && <span className="text-gray-500 text-[13px] mb-1">{articles}</span>}
    <h4 className="text-[#051937] font-bold text-[22px] leading-tight group-hover:text-blue-600 transition-colors">
      {title}
    </h4>
  </div>
);

const ShortcutCard = ({ image, title, items, linkText, linkHref }: { image: string, title: string, items: string[], linkText: string, linkHref: string }) => (
  <div className="flex flex-col">
    <div className="rounded-lg overflow-hidden mb-6 aspect-[16/10]">
      <img src={image} alt={title} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
    </div>
    <h3 className="text-[#051937] font-bold text-[24px] mb-4">{title}</h3>
    <ul className="flex flex-col gap-3 mb-6">
      {items.map((item, i) => (
        <li key={i} className="flex gap-3 text-[16px] text-[#051937]">
          <Check size={18} className="text-blue-500 shrink-0 mt-1" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
    <a href={linkHref} className="text-blue-600 font-medium hover:underline flex items-center gap-1">
      {linkText}
    </a>
  </div>
);

const InfoCard = ({ image, title, description, linkText, linkHref }: { image: string, title: string, description: string, linkText: string, linkHref: string }) => (
  <div className="flex flex-col">
    <div className="rounded-lg overflow-hidden mb-6 aspect-[16/10]">
      <img src={image} alt={title} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
    </div>
    <h3 className="text-[#051937] font-bold text-[24px] mb-4">{title}</h3>
    <div className="flex gap-3 text-[16px] text-[#051937] mb-6">
      <Check size={18} className="text-blue-500 shrink-0 mt-1" />
      <span>{description}</span>
    </div>
    <a href={linkHref} className="text-blue-600 font-medium hover:underline">
      {linkText}
    </a>
  </div>
);

export default function CareerAdvice() {
  return (
    <div className="min-h-screen bg-white font-sans text-[#051937]">
      {/* Header */}
     

      {/* Hero Section */}
      <section className="bg-[#051937] text-white pt-12 pb-24 overflow-hidden relative">
        <div className="max-w-[1440px] mx-auto px-6 md:px-12">
          <div className="text-[13px] text-gray-400 mb-12 flex gap-2">
            <span className="hover:text-white cursor-pointer">home</span>
            <span>{'>'}</span>
            <span className="text-white">career advice</span>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="max-w-xl">
              <h1 className="text-[64px] font-bold leading-[1.1] mb-8 tracking-tight">
                career advice
              </h1>
              <p className="text-[20px] leading-relaxed mb-12 text-gray-200">
                Unlock your career potential with expert advice, resources, and insights. Discover job search strategies, develop essential skills, and navigate your path to success.
              </p>
              <div className="flex flex-wrap gap-4">
                <button className="px-8 py-3 border-2 border-white rounded-md font-bold text-[16px] hover:bg-white hover:text-[#051937] transition-all">
                  submit your resume
                </button>
                <button className="px-8 py-3 border-2 border-white rounded-md font-bold text-[16px] hover:bg-white hover:text-[#051937] transition-all">
                  find a job
                </button>
                <button className="px-8 py-3 border-2 border-white rounded-md font-bold text-[16px] hover:bg-white hover:text-[#051937] transition-all">
                  career insights
                </button>
              </div>
            </div>
            
            <div className="relative hidden lg:block">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px]">
                <svg viewBox="0 0 400 200" className="w-full">
                  <path 
                    d="M 50 100 Q 150 100 350 100" 
                    stroke="#00c1f3" 
                    strokeWidth="12" 
                    fill="none" 
                    strokeLinecap="round"
                  />
                  <path 
                    d="M 50 120 Q 150 120 350 120" 
                    stroke="#ffffff" 
                    strokeWidth="12" 
                    fill="none" 
                    strokeLinecap="round"
                  />
                  <path 
                    d="M 50 140 Q 150 140 350 140" 
                    stroke="#2175d9" 
                    strokeWidth="12" 
                    fill="none" 
                    strokeLinecap="round"
                  />
                  <path 
                    d="M 320 80 L 360 120 L 320 160" 
                    stroke="#00c1f3" 
                    strokeWidth="12" 
                    fill="none" 
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Links Section */}
      <section className="py-24 bg-white">
        <div className="max-w-[1440px] mx-auto px-6 md:px-12">
          <div className="grid lg:grid-cols-[1fr_2fr] gap-12">
            <h2 className="text-[32px] font-bold leading-tight">
              I want to know more about
            </h2>
            <div className="grid md:grid-cols-3 gap-x-12 gap-y-8">
              <div className="flex flex-col gap-8">
                <a href="#" className="text-[20px] font-medium text-blue-600 hover:underline border-b border-gray-200 pb-4">career tests</a>
                <a href="#" className="text-[20px] font-medium text-blue-600 hover:underline border-b border-gray-200 pb-4">job search strategy</a>
              </div>
              <div className="flex flex-col gap-8">
                <a href="#" className="text-[20px] font-medium text-blue-600 hover:underline border-b border-gray-200 pb-4">career tips</a>
                <a href="#" className="text-[20px] font-medium text-blue-600 hover:underline border-b border-gray-200 pb-4">interviews</a>
              </div>
              <div className="flex flex-col gap-8">
                <a href="#" className="text-[20px] font-medium text-blue-600 hover:underline border-b border-gray-200 pb-4">resume</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Job Seeker Toolkit */}
      <section className="bg-[#051937] text-white py-24">
        <div className="max-w-[1440px] mx-auto px-6 md:px-12">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-[48px] font-bold mb-6">job seeker toolkit</h2>
              <p className="text-[20px] text-gray-300 mb-12 max-w-lg">
                We've created a series of steps in order to propel you forward in your job search.
              </p>
              <button className="px-8 py-3 border-2 border-white rounded-md font-bold text-[16px] hover:bg-white hover:text-[#051937] transition-all">
                to job seeker toolkit
              </button>
            </div>
            <div className="flex justify-center lg:justify-end">
              <div className="relative w-[300px] h-[300px]">
                <div className="absolute inset-0 border-[12px] border-blue-500/30 rounded-full"></div>
                <div className="absolute inset-4 border-[12px] border-blue-400/50 rounded-full"></div>
                <div className="absolute inset-8 border-[12px] border-blue-300/70 rounded-full"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-48 h-24 bg-blue-500 rounded-full relative overflow-hidden">
                    <div className="absolute left-4 top-1/2 -translate-y-1/2 w-16 h-16 bg-[#051937] rounded-full border-4 border-white"></div>
                    <div className="absolute right-4 top-1/2 -translate-y-1/2 w-16 h-16 bg-[#051937] rounded-full border-4 border-white"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Shortcut Section */}
      <section className="py-24 bg-white">
        <div className="max-w-[1440px] mx-auto px-6 md:px-12">
          <h2 className="text-[40px] font-bold mb-16">your shortcut to</h2>
          <div className="grid md:grid-cols-3 gap-12">
            <ShortcutCard 
              image="https://picsum.photos/seed/appguide/800/500"
              title="application guide"
              items={[
                "How do I write a resume?",
                "How do I master the job interview?",
                "What is in a good cover letter?"
              ]}
              linkText="to the application guide"
              linkHref="#"
            />
            <ShortcutCard 
              image="https://picsum.photos/seed/professions/800/500"
              title="professions A to Z"
              items={[
                "What jobs are there in the various fields of activity?",
                "What do you earn in each profession?"
              ]}
              linkText="to the professions"
              linkHref="#"
            />
            <ShortcutCard 
              image="https://picsum.photos/seed/careerguide/800/500"
              title="career guide"
              items={[
                "How do I get (back) into work?",
                "Building a personal brand on linkedin",
                "Many other topics for your career."
              ]}
              linkText="to the career guide"
              linkHref="#"
            />
          </div>
        </div>
      </section>

      {/* Professional Fields Section */}
      <section className="bg-[#2175d9] text-white py-24">
        <div className="max-w-[1440px] mx-auto px-6 md:px-12">
          <div className="grid lg:grid-cols-[1fr_2fr] gap-12">
            <h2 className="text-[32px] font-bold leading-tight max-w-xs">
              we offer jobs in these exciting professional fields.
            </h2>
            <div className="grid md:grid-cols-3 gap-x-12 gap-y-8">
              <div className="flex flex-col gap-8">
                <a href="#" className="text-[20px] font-bold hover:underline border-b border-white/30 pb-4">engineering</a>
                <a href="#" className="text-[20px] font-bold hover:underline border-b border-white/30 pb-4">ITeS & BPO</a>
                <a href="#" className="text-[20px] font-bold hover:underline border-b border-white/30 pb-4">telecom</a>
              </div>
              <div className="flex flex-col gap-8">
                <a href="#" className="text-[20px] font-bold hover:underline border-b border-white/30 pb-4">information technology</a>
                <a href="#" className="text-[20px] font-bold hover:underline border-b border-white/30 pb-4">pharma, healthcare & ...</a>
                <a href="#" className="text-[20px] font-bold hover:underline border-b border-white/30 pb-4">banking & finance</a>
              </div>
              <div className="flex flex-col gap-8">
                <a href="#" className="text-[20px] font-bold hover:underline border-b border-white/30 pb-4">hospitality & tourism</a>
                <a href="#" className="text-[20px] font-bold hover:underline border-b border-white/30 pb-4">FMCG</a>
                <a href="#" className="text-[20px] font-bold hover:underline border-b border-white/30 pb-4">see all jobs</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* More Info Section */}
      <section className="py-24 bg-white">
        <div className="max-w-[1440px] mx-auto px-6 md:px-12">
          <h2 className="text-[40px] font-bold mb-16">I want to know more about</h2>
          <div className="grid md:grid-cols-3 gap-12">
            <InfoCard 
              image="https://picsum.photos/seed/podcast/800/500"
              title="audio library (podcast)"
              description="How to win the interviewer's trust? How to effectively approach leaders? The importance of upskilling."
              linkText="to the podcast"
              linkHref="#"
            />
            <InfoCard 
              image="https://picsum.photos/seed/whywork/800/500"
              title="why work with randstad"
              description="Our goal as recruiters is to find the perfect job for you by considering your needs, goals, and personality. We believe that when your job makes you happy, you're more likely to thrive every day."
              linkText="learn more"
              linkHref="#"
            />
            <InfoCard 
              image="https://picsum.photos/seed/wfh/800/500"
              title="work from home"
              description="We've created a series of tips and answers to some of the most frequently asked questions about work-from-home jobs. Check out our remote job options to find the ideal work-from-home job for you."
              linkText="to the guide"
              linkHref="#"
            />
          </div>
        </div>
      </section>

      {/* Job Portal Section */}
      <section className="bg-[#051937] text-white py-24">
        <div className="max-w-[1440px] mx-auto px-6 md:px-12">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-[48px] font-bold mb-6">randstad job portal.</h2>
              <p className="text-[20px] text-gray-300 mb-12 max-w-lg">
                Explore the numerous jobs on the Randstad India job portal and find the right one in your area!
              </p>
              <button className="px-8 py-3 border-2 border-white rounded-md font-bold text-[16px] hover:bg-white hover:text-[#051937] transition-all">
                to the job portal
              </button>
            </div>
            <div className="flex justify-center lg:justify-end">
              <div className="relative w-[200px] h-[300px] flex flex-col gap-4">
                <div className="w-full h-12 border-4 border-blue-400 rounded-sm"></div>
                <div className="w-full h-12 border-4 border-blue-400 rounded-sm"></div>
                <div className="w-full h-12 border-4 border-blue-400 rounded-sm"></div>
                <div className="w-full h-12 border-4 border-blue-400 rounded-sm"></div>
                <div className="w-full h-12 border-4 border-blue-400 rounded-sm"></div>
                <div className="absolute right-[-20px] top-0 bottom-0 w-4 bg-blue-600/30 rounded-full"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Internal Careers Section */}
      <section className="py-24 bg-white">
        <div className="max-w-[1440px] mx-auto px-6 md:px-12">
          <div className="grid lg:grid-cols-2 gap-24 items-center">
            <div>
              <h2 className="text-[48px] font-bold mb-6">internal careers at randstad.</h2>
              <p className="text-[20px] text-gray-600 mb-12">
                Are you interested in an internal careers at Randstad? Benefit from the opportunities that Randstad offers as an employer - regardless of where you are in your professional life.
              </p>
              <button className="px-8 py-3 border-2 border-blue-600 text-blue-600 rounded-md font-bold text-[16px] hover:bg-blue-600 hover:text-white transition-all">
                to the job portal
              </button>
            </div>
            <div className="relative">
              <div className="rounded-lg overflow-hidden aspect-[4/3]">
                <img 
                  src="https://picsum.photos/seed/internal/1000/750" 
                  alt="Internal Careers" 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="absolute -bottom-10 -left-10 w-48 h-48 bg-blue-500 rounded-full mix-blend-multiply opacity-80"></div>
              <div className="absolute -top-10 -right-10 w-32 h-32 bg-blue-300 rounded-full mix-blend-multiply opacity-80"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Get In Touch Section */}
      <section className="bg-[#051937] text-white py-24">
        <div className="max-w-[1440px] mx-auto px-6 md:px-12">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-12">
            <div className="max-w-2xl">
              <h2 className="text-[48px] font-bold mb-4">let's get in touch.</h2>
              <p className="text-[32px] text-blue-400 font-medium leading-tight">
                search our jobs or speak to a consultant to kick start your job search.
              </p>
            </div>
            <button className="px-12 py-4 border-2 border-white rounded-md font-bold text-[18px] hover:bg-white hover:text-[#051937] transition-all whitespace-nowrap">
              contact us
            </button>
          </div>
        </div>
      </section>

      {/* Career Insights Section */}
      <section className="py-24 bg-white">
        <div className="max-w-[1440px] mx-auto px-6 md:px-12">
          <div className="flex justify-between items-end mb-16">
            <h2 className="text-[40px] font-bold max-w-2xl">
              career insights: navigating success and growth
            </h2>
            <a href="#" className="text-blue-600 font-bold text-[18px] hover:underline mb-2">
              see all categories
            </a>
          </div>
          <div className="grid md:grid-cols-3 gap-12">
            <Card 
              image="https://picsum.photos/seed/dev/800/500"
              articles="57 articles"
              title="career development"
            />
            <Card 
              image="https://picsum.photos/seed/interview/800/500"
              articles="16 articles"
              title="job interview"
            />
            <Card 
              image="https://picsum.photos/seed/branding/800/500"
              articles="10 articles"
              title="personal branding"
            />
          </div>
        </div>
      </section>

      {/* Footer */}
      

      {/* Floating Feedback Button */}
      <div className="fixed right-0 top-1/2 -translate-y-1/2 bg-blue-500 text-white py-3 px-1 rounded-l-md cursor-pointer hover:bg-blue-600 transition-colors z-50 [writing-mode:vertical-rl] text-[12px] font-bold tracking-wider">
        Feedback
      </div>

      {/* Cookie Consent Icon */}
      <div className="fixed bottom-6 left-6 bg-blue-600 text-white p-3 rounded-full shadow-lg cursor-pointer hover:bg-blue-700 transition-colors z-50">
        <div className="w-6 h-6 flex items-center justify-center">
          <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z" />
          </svg>
        </div>
      </div>
    </div>
  );
}
