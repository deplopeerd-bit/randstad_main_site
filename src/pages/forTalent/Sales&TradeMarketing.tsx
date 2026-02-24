import React, { useState } from "react";
import { motion } from "motion/react";

import { 
  Search, 
  Heart, 
  User, 
  ChevronDown, 
  MapPin, 
  Briefcase, 
  Clock, 
  Info, 
  ArrowRight,
  Linkedin,
  Facebook,
  Youtube,
  Instagram,
  X
} from 'lucide-react';

const Navbar = () => {
  return (
    <nav className="bg-white border-b border-gray-100 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          <div className="flex items-center gap-8">
            <div className="flex items-center">
              <span className="text-2xl font-bold text-[#2175d9] flex items-center">
                <span className="text-[#2175d9] mr-1">r</span>
                <span className="text-[#2175d9]">randstad</span>
              </span>
            </div>
            <div className="hidden md:flex items-center space-x-6 text-sm font-medium text-gray-600">
              <button className="flex items-center hover:text-gray-900">find a job <ChevronDown size={14} className="ml-1" /></button>
              <button className="flex items-center hover:text-gray-900">for talent <ChevronDown size={14} className="ml-1" /></button>
              <button className="flex items-center hover:text-gray-900">for employer <ChevronDown size={14} className="ml-1" /></button>
              <button className="flex items-center hover:text-gray-900">resources <ChevronDown size={14} className="ml-1" /></button>
              <button className="flex items-center hover:text-gray-900">about us <ChevronDown size={14} className="ml-1" /></button>
            </div>
          </div>
          <div className="flex items-center space-x-6">
            <div className="hidden sm:flex items-center space-x-4 text-sm text-gray-600">
              <button className="hover:text-gray-900">contact us</button>
            </div>
            <div className="flex items-center space-x-4">
              <button className="p-2 text-gray-600 hover:text-gray-900 relative">
                <Heart size={20} />
                <span className="absolute top-1 right-1 bg-gray-200 text-[10px] w-4 h-4 rounded-full flex items-center justify-center">0</span>
              </button>
              <button className="flex items-center space-x-2 text-sm font-medium text-gray-600 hover:text-gray-900">
                <User size={20} />
                <span className="hidden sm:inline">my randstad</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

const Hero = () => {
  return (
    <section className="bg-[#0a1a3c] text-white py-20 overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <nav className="text-xs text-gray-400 mb-8 flex space-x-2">
              <span className="hover:text-white cursor-pointer">home</span>
              <span>&gt;</span>
              <span className="hover:text-white cursor-pointer">professional career</span>
              <span>&gt;</span>
              <span className="text-white">sales & trade marketing</span>
            </nav>
            <h1 className="text-5xl md:text-6xl font-light mb-8 leading-tight">
              a partner for sales & <br />
              marketing professionals.
            </h1>
            <p className="text-lg text-gray-300 mb-10 max-w-lg leading-relaxed">
              Find the right job, love what you do, and develop your career. With access to a wide range of roles with top employers, a global community of professional peers, and specialised training and support, we'll be your guiding partner and help you build a rewarding career.
            </p>
            <div className="flex flex-wrap gap-4">
              <button className="px-8 py-3 border border-white rounded-md hover:bg-white hover:text-[#0a1a3c] transition-colors font-medium">
                explore available jobs
              </button>
              <button className="px-8 py-3 border border-white rounded-md hover:bg-white hover:text-[#0a1a3c] transition-colors font-medium">
                submit your resume
              </button>
            </div>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="relative hidden md:block"
          >
            <div className="relative w-full aspect-square flex items-center justify-center">
              <div className="absolute w-64 h-64 rounded-full border border-purple-500/30"></div>
              <div className="absolute w-80 h-80 rounded-full border border-purple-500/20"></div>
              <div className="w-48 h-48 rounded-full bg-purple-600/80 blur-xl absolute"></div>
              <div className="flex space-x-4 items-center">
                <div className="w-12 h-12 rounded-full bg-purple-600"></div>
                <div className="w-20 h-20 rounded-full bg-purple-500/50 border border-purple-400"></div>
                <div className="w-32 h-32 rounded-full border-2 border-purple-400 flex items-center justify-center">
                   <div className="w-24 h-24 rounded-full border border-purple-400/50"></div>
                </div>
                <div className="w-16 h-16 rounded-full bg-purple-900/50"></div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const SplitSection = ({ title, content, image, reverse = false, dark = false, buttonText = "learn more" }: any) => {
  return (
    <section className={`${dark ? 'bg-[#0a1a3c] text-white' : 'bg-white text-gray-900'} py-20`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`grid md:grid-cols-2 gap-12 items-center ${reverse ? 'md:flex-row-reverse' : ''}`}>
          <div className={reverse ? 'md:order-2' : ''}>
            <h2 className="text-4xl font-light mb-6 leading-tight">{title}</h2>
            <p className={`text-lg mb-8 leading-relaxed ${dark ? 'text-gray-300' : 'text-gray-600'}`}>
              {content}
            </p>
            {buttonText && (
              <button className={`px-8 py-3 border rounded-md transition-colors font-medium ${dark ? 'border-white hover:bg-white hover:text-[#0a1a3c]' : 'border-gray-900 hover:bg-gray-900 hover:text-white'}`}>
                {buttonText}
              </button>
            )}
          </div>
          <div className={`relative ${reverse ? 'md:order-1' : ''}`}>
            <img 
              src={image} 
              alt={title} 
              className="w-full h-[400px] object-cover rounded-sm shadow-xl"
              referrerPolicy="no-referrer"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

const JobCard = ({ title, location, type, date }: any) => (
  <div className="bg-white p-8 rounded-sm shadow-sm border border-gray-100 flex flex-col h-full hover:shadow-md transition-shadow">
    <div className="flex justify-between items-start mb-6">
      <h3 className="text-xl font-medium text-[#2175d9] hover:underline cursor-pointer">{title}</h3>
      <button className="text-gray-400 hover:text-red-500 transition-colors">
        <Heart size={20} />
      </button>
    </div>
    <div className="space-y-3 mb-8 text-gray-600 text-sm">
      <div className="flex items-center gap-2">
        <MapPin size={16} />
        <span>{location}</span>
      </div>
      <div className="flex items-center gap-2">
        <Briefcase size={16} />
        <span>{type}</span>
      </div>
    </div>
    <div className="mt-auto pt-6 border-t border-gray-100 flex justify-between items-center text-xs text-gray-400">
      <span>posted {date}</span>
      <button className="p-1 hover:bg-gray-100 rounded-full">
        <Info size={16} />
      </button>
    </div>
  </div>
);

const LatestJobs = () => {
  const jobs = [
    { title: "store management", location: "salem, tamil nadu", type: "permanent", date: "23 february 2026" },
    { title: "data science & ai platform team lead", location: "bangalore, karnataka", type: "permanent", date: "23 february 2026" },
    { title: "medical representative", location: "chennai, tamil nadu", type: "temporary", date: "23 february 2026" },
  ];

  return (
    <section className="bg-gray-50 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-end mb-12">
          <h2 className="text-4xl font-light">our latest jobs in sales and marketing.</h2>
          <button className="text-[#2175d9] font-medium flex items-center hover:underline">
            see all jobs
          </button>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {jobs.map((job, i) => (
            <JobCard key={i} {...job} />
          ))}
        </div>
      </div>
    </section>
  );
};

const RecruitingRoles = () => {
  return (
    <section className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-12">
          <div className="md:col-span-1">
            <h2 className="text-4xl font-light">roles we're currently recruiting for.</h2>
          </div>
          <div className="md:col-span-2 space-y-4">
            <div className="border-b border-gray-200 py-6 flex justify-between items-center cursor-pointer group">
              <span className="text-2xl font-light group-hover:text-[#2175d9] transition-colors">see all roles in sales</span>
              <ChevronDown className="text-gray-400 group-hover:text-[#2175d9]" />
            </div>
            <div className="border-b border-gray-200 py-6 flex justify-between items-center cursor-pointer group">
              <span className="text-2xl font-light group-hover:text-[#2175d9] transition-colors">see all roles in marketing</span>
              <ChevronDown className="text-gray-400 group-hover:text-[#2175d9]" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const TalentPool = () => {
  return (
    <section className="bg-[#0a1a3c] text-white py-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-5xl font-light mb-8 leading-tight">
              join our talent pool <br />
              for future <br />
              opportunities in <br />
              sales and trade <br />
              marketing.
            </h2>
            <p className="text-lg text-gray-300 mb-10 leading-relaxed">
              Can't find a job in the sales and trade marketing sector that matches your interests? Submit your application and resume, and our team will contact you when a suitable opportunity arises.
            </p>
            <button className="px-8 py-3 border border-white rounded-md hover:bg-white hover:text-[#0a1a3c] transition-colors font-medium">
              submit resume now
            </button>
          </div>
          <div className="relative">
            <div className="relative z-10">
              <img 
                src="https://picsum.photos/seed/office/800/600" 
                alt="Talent pool" 
                className="w-full h-[500px] object-cover rounded-sm"
                referrerPolicy="no-referrer"
              />
              <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-purple-600 rounded-full opacity-80"></div>
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 border-2 border-purple-400/30 rounded-full"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const ArticleCard = ({ image, date, title }: any) => (
  <div className="group cursor-pointer">
    <div className="overflow-hidden mb-4 rounded-sm">
      <img 
        src={image} 
        alt={title} 
        className="w-full aspect-[4/3] object-cover group-hover:scale-105 transition-transform duration-500"
        referrerPolicy="no-referrer"
      />
    </div>
    <p className="text-xs text-gray-400 mb-2">{date}</p>
    <h3 className="text-xl font-light group-hover:text-[#2175d9] transition-colors">{title}</h3>
  </div>
);

const LatestUpdates = () => {
  const articles = [
    { image: "https://picsum.photos/seed/heart/400/300", date: "02 August 2023", title: "randstad with heart." },
    { image: "https://picsum.photos/seed/interview/400/300", date: "17 January 2023", title: "how to stand out in an interview." },
    { image: "https://picsum.photos/seed/video/400/300", date: "17 January 2023", title: "5 tips to ace your video interview." },
    { image: "https://picsum.photos/seed/offer/400/300", date: "17 January 2023", title: "declining a job offer." },
    { image: "https://picsum.photos/seed/negotiate/400/300", date: "17 January 2023", title: "how to negotiate and accept your job offer." },
    { image: "https://picsum.photos/seed/questions/400/300", date: "12 January 2023", title: "prepare answers for tough interview questions." },
  ];

  return (
    <section className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-end mb-12">
          <h2 className="text-4xl font-light">latest updates</h2>
          <button className="text-[#2175d9] font-medium flex items-center hover:underline">
            see all articles
          </button>
        </div>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-x-8 gap-y-12">
          {articles.map((article, i) => (
            <ArticleCard key={i} {...article} />
          ))}
        </div>
      </div>
    </section>
  );
};

const FAQ = () => {
  return (
    <section className="bg-[#0a1a3c] text-white py-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-sm text-gray-400 mb-4">FAQs</p>
            <h2 className="text-5xl font-light mb-8 leading-tight">
              frequently asked <br />
              questions about <br />
              sales and <br />
              marketing jobs.
            </h2>
            <p className="text-lg text-gray-300 mb-10 leading-relaxed">
              We provide answers to the most common questions that applicants and companies ask us about working with Randstad.
            </p>
            <button className="px-8 py-3 border border-white rounded-md hover:bg-white hover:text-[#0a1a3c] transition-colors font-medium">
              learn more
            </button>
          </div>
          <div className="relative flex justify-center">
            <div className="relative w-80 h-64">
              <div className="absolute top-0 right-0 w-64 h-48 border-2 border-purple-500 rounded-3xl rounded-tr-none"></div>
              <div className="absolute bottom-0 left-0 w-64 h-48 border-2 border-purple-800/50 rounded-3xl rounded-bl-none"></div>
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-purple-600/20 blur-xl"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const BranchFinder = () => {
  return (
    <section className="bg-gray-50 py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-5xl font-light mb-4">we'd love to have you over.</h2>
            <p className="text-xl text-gray-600 mb-10">find a branch close to you.</p>
            <div className="flex max-w-md">
              <input 
                type="text" 
                placeholder="postcode / city" 
                className="flex-1 px-4 py-3 border border-gray-300 rounded-l-md focus:outline-none focus:ring-1 focus:ring-[#2175d9]"
              />
              <button className="bg-[#2175d9] text-white px-6 py-3 rounded-r-md hover:bg-[#1a5fb3] transition-colors">
                <ArrowRight size={20} />
              </button>
            </div>
          </div>
          <div className="flex justify-center md:justify-end">
            <div className="relative">
              <MapPin size={180} className="text-purple-600" strokeWidth={1} />
              <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-10 h-10 bg-white rounded-full border-4 border-purple-600"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  const columns = [
    { title: "find a job", links: ["explore all jobs", "submit your cv", "join our team", "refer a friend"] },
    { title: "for talents", links: ["specialisms", "testimonials", "career advice", "beware of job scams"] },
    { title: "for employers", links: ["submit a vacancy", "request a callback", "our services", "specialisms", "case studies", "testimonials"] },
    { title: "resources", links: ["case studies", "press room", "blogs"] },
    { title: "workforce insights", links: ["talent insights reports", "employer brand research reports", "salary trends reports", "ed&i reports", "workmonitor reports", "startup hiring trends", "talent pulse surveys"] },
    { title: "jobs", links: ["engineering jobs", "cxo jobs", "manufacturing jobs", "supply chain & logistics jobs", "education jobs", "finance & accounting jobs", "healthcare jobs", "hr & admin support jobs", "ites/gcc jobs", "legal & compliance jobs", "sales & marketing jobs"] },
  ];

  return (
    <footer className="bg-[#0a1a3c] text-white pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 mb-16">
          {columns.map((col, i) => (
            <div key={i}>
              <h4 className="text-lg font-medium mb-6">{col.title}</h4>
              <ul className="space-y-3">
                {col.links.map((link, j) => (
                  <li key={j}>
                    <a href="#" className="text-sm text-gray-400 hover:text-white transition-colors">{link}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-gray-800 pt-10 mb-10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="flex space-x-6">
              <a href="#" className="text-gray-400 hover:text-white transition-colors"><Linkedin size={24} /></a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors"><X size={24} /></a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors"><Facebook size={24} /></a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors"><Youtube size={24} /></a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors"><Instagram size={24} /></a>
            </div>
            <div className="text-xs text-gray-500 text-center md:text-right">
              <p className="mb-2">registered office: Randstad India Private Limited, CIN U74210TN1992PTC023097,/Randstad House, Old No. 5 & 5A, New No. 9, Pycrofts Garden Road, Nungambakkam, Chennai, TN - 600 006</p>
              <p>RANDSTAD, r, HUMAN FORWARD and SHAPING THE WORLD OF WORK are registered trademarks of © Randstad N.V.2023</p>
            </div>
          </div>
        </div>

        <div className="bg-[#08142b] p-8 rounded-sm mb-10 text-sm text-gray-400 leading-relaxed">
          <p className="mb-4">
            Security Advice: Randstad India does not charge any fee at any stage of its recruitment process from the candidate nor allows their employees to collect any fees from any candidates. <a href="#" className="text-white hover:underline">Click here to know more</a>
          </p>
          <p>
            EEO Statement: Randstad India is an Equal Employment Opportunity Employer. All qualified applicants receive consideration for employment without regard to race, color, religion, sex, sexual orientation, gender identity or expression, appearance, national origin, age, marital status, veteran status, or disability status, or any other characteristics. Our global mission is to become the world's most equitable and specialized talent company, and we actively embrace diversity and inclusion as the cornerstones of our success. To read more of Randstad India's work in the space of equity, diversity and inclusion please <a href="#" className="text-white hover:underline">click here</a>
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-x-8 gap-y-4 text-xs text-gray-500">
          <a href="#" className="hover:text-white">terms & conditions</a>
          <a href="#" className="hover:text-white">cookies</a>
          <a href="#" className="hover:text-white">misconduct reporting procedure</a>
          <a href="#" className="hover:text-white">accessibility</a>
          <a href="#" className="hover:text-white">be aware</a>
          <a href="#" className="hover:text-white">sitemap</a>
          <a href="#" className="hover:text-white">privacy statement</a>
        </div>
      </div>
    </footer>
  );
};

export default function RandstadPage() {
  return (
    <div className="min-h-screen bg-white font-sans selection:bg-purple-200 selection:text-purple-900">
      <Navbar />
      <Hero />
      <SplitSection 
        title="what we do."
        content="our consultants are experts within their specialisation and really understand your needs and preferences. Combined with our wide range of available jobs with the best companies in the market provides you the guarantee that there are always jobs that are a perfect match for you."
        image="https://picsum.photos/seed/consultants/800/600"
      />
      <SplitSection 
        title="what we offer you."
        content="we provide you with a wonderful experience as we will be your guiding partner throughout every stage of your career. With timely and honest feedback, aiming at a lasting relationship even during the stages you don't work for us. By becoming a member of our lively communities you will have the opportunity to build valuable relationships and networks with your industry."
        image="https://picsum.photos/seed/offer-you/800/600"
        dark={true}
        reverse={true}
        buttonText={null}
      />
      <SplitSection 
        title="learn more about job roles in sales & marketing."
        content="Our job profiles have been created to familiarise you with the responsibilities and day-to-day activities of a number of key job roles across all sales and marketing jobs, so you can make the right decision before applying. Start exploring qualifications, responsibilities, pay rates and more in each job."
        image="https://picsum.photos/seed/job-roles/800/600"
        dark={true}
      />
      <LatestJobs />
      <RecruitingRoles />
      <TalentPool />
      <LatestUpdates />
      <FAQ />
      <BranchFinder />
      <Footer />
    </div>
  );
}
