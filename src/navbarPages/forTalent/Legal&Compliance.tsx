import React, { useState } from "react";
import { AnimatePresence, motion } from "motion/react";

import { 
  Search, 
  User, 
  ChevronDown, 
  ArrowRight, 
  Facebook, 
  Twitter, 
  Linkedin, 
  Instagram, 
  Youtube,
  Heart,
  MessageSquare,
  MapPin,
  Menu,
  X
} from 'lucide-react';

// --- Components ---



const Hero = () => {
  return (
    <section className="bg-[#0a1931] text-white py-20 px-4 md:px-12 overflow-hidden relative">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 items-center gap-12 relative z-10">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <nav className="text-xs text-gray-400 mb-8 flex gap-2">
            <a href="#" className="hover:text-white">home</a>
            <span>&gt;</span>
            <a href="#" className="hover:text-white">professional career</a>
            <span>&gt;</span>
            <span className="text-white">legal & compliance</span>
          </nav>
          <h1 className="text-5xl md:text-7xl font-light leading-tight mb-8">
            a partner for legal & <br />
            <span className="font-medium">compliance professionals.</span>
          </h1>
          <p className="text-lg text-gray-300 mb-10 max-w-lg leading-relaxed">
            Find the right job, love what you do, and develop your career. With access to a wide range of roles with top employers, a global community of professional peers, and specialised training and support, we'll be your guiding partner and help you build a rewarding career.
          </p>
          <div className="flex flex-wrap gap-4">
            <button className="px-8 py-4 border border-white text-white font-medium hover:bg-white hover:text-[#0a1931] transition-colors">
              explore available jobs
            </button>
            <button className="px-8 py-4 border border-white text-white font-medium hover:bg-white hover:text-[#0a1931] transition-colors">
              submit your resume
            </button>
          </div>
        </motion.div>

        <div className="relative hidden md:block">
          {/* Abstract Purple Circles */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center gap-4">
            <motion.div 
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ repeat: Infinity, duration: 4 }}
              className="w-16 h-16 rounded-full bg-purple-600 opacity-80"
            />
            <motion.div 
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ repeat: Infinity, duration: 5, delay: 0.5 }}
              className="w-24 h-24 rounded-full bg-purple-500 opacity-60"
            />
            <motion.div 
              animate={{ scale: [1, 1.05, 1] }}
              transition={{ repeat: Infinity, duration: 6, delay: 1 }}
              className="w-48 h-48 rounded-full border-4 border-purple-400 flex items-center justify-center"
            >
               <div className="w-40 h-40 rounded-full border-2 border-purple-300 opacity-30" />
            </motion.div>
            <motion.div 
              animate={{ scale: [1, 1.15, 1] }}
              transition={{ repeat: Infinity, duration: 4.5, delay: 0.2 }}
              className="w-20 h-20 rounded-full bg-purple-800 opacity-90"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

const SplitSection = ({ title, subtitle, content, image, reverse = false, dark = false, buttonText }: any) => {
  return (
    <section className={`flex flex-col md:flex-row ${reverse ? 'md:flex-row-reverse' : ''} ${dark ? 'bg-[#0a1931] text-white' : 'bg-white text-[#0a1931]'}`}>
      <div className="w-full md:w-1/2 p-12 md:p-24 flex flex-col justify-center">
        <h2 className="text-4xl md:text-6xl font-light mb-8 leading-tight">
          {title} <br />
          <span className="font-medium">{subtitle}</span>
        </h2>
        <p className={`text-lg mb-10 leading-relaxed ${dark ? 'text-gray-300' : 'text-gray-600'}`}>
          {content}
        </p>
        {buttonText && (
          <div>
            <button className={`px-8 py-4 border font-medium transition-colors ${dark ? 'border-white text-white hover:bg-white hover:text-[#0a1931]' : 'border-[#0a1931] text-[#0a1931] hover:bg-[#0a1931] hover:text-white'}`}>
              {buttonText}
            </button>
          </div>
        )}
      </div>
      <div className="w-full md:w-1/2 h-[400px] md:h-auto overflow-hidden relative">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
        {dark && (
           <div className="absolute top-0 right-0 p-8">
              <div className="w-24 h-24 rounded-full border-2 border-purple-500 opacity-50 flex items-center justify-center">
                <div className="w-16 h-16 rounded-full bg-purple-500 opacity-30" />
              </div>
           </div>
        )}
      </div>
    </section>
  );
};

const RecruitingSection = () => {
  return (
    <section className="py-24 px-4 md:px-12 bg-white">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start gap-12">
        <h2 className="text-3xl font-light text-[#0a1931] max-w-sm">
          roles we're currently recruiting for.
        </h2>
        <div className="w-full md:w-2/3">
          <div className="border-b border-gray-200 py-6 flex items-center justify-between cursor-pointer group">
            <span className="text-2xl font-light text-[#2175d9] group-hover:underline">see all legal & compliance jobs.</span>
            <ChevronDown className="text-[#2175d9]" />
          </div>
        </div>
      </div>
    </section>
  );
};

const LatestUpdates = () => {
  const articles = [
    {
      date: "02 August 2023",
      title: "randstad with heart.",
      image: "https://picsum.photos/seed/heart/600/400"
    },
    {
      date: "17 January 2023",
      title: "how to stand out in an interview.",
      image: "https://picsum.photos/seed/interview/600/400"
    },
    {
      date: "17 January 2023",
      title: "5 tips to ace your video interview.",
      image: "https://picsum.photos/seed/video/600/400"
    },
    {
      date: "17 January 2023",
      title: "declining a job offer.",
      image: "https://picsum.photos/seed/decline/600/400"
    },
    {
      date: "17 January 2023",
      title: "how to negotiate and accept your job offer.",
      image: "https://picsum.photos/seed/negotiate/600/400"
    },
    {
      date: "12 January 2023",
      title: "prepare answers for tough interview questions.",
      image: "https://picsum.photos/seed/tough/600/400"
    }
  ];

  return (
    <section className="py-24 px-4 md:px-12 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-end mb-12">
          <h2 className="text-4xl font-light text-[#0a1931]">latest updates</h2>
          <a href="#" className="text-[#2175d9] hover:underline text-lg">see all articles</a>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map((article, idx) => (
            <motion.div 
              key={idx}
              whileHover={{ y: -5 }}
              className="cursor-pointer group"
            >
              <div className="aspect-video overflow-hidden mb-4">
                <img 
                  src={article.image} 
                  alt={article.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
              </div>
              <p className="text-sm text-gray-500 mb-2">{article.date}</p>
              <h3 className="text-2xl font-light text-[#0a1931] group-hover:text-[#2175d9] transition-colors">
                {article.title}
              </h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const FAQSection = () => {
  return (
    <section className="bg-[#0a1931] text-white py-24 px-4 md:px-12 overflow-hidden relative">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 items-center gap-12 relative z-10">
        <div>
          <span className="text-xl font-light mb-4 block">FAQs</span>
          <h2 className="text-5xl md:text-7xl font-light leading-tight mb-8">
            frequently asked <br />
            <span className="font-medium">questions and <br /> answers.</span>
          </h2>
          <p className="text-lg text-gray-300 mb-10 max-w-md">
            We provide answers to the most common questions that applicants and companies ask us about working with Randstad.
          </p>
          <button className="px-8 py-4 border border-white text-white font-medium hover:bg-white hover:text-[#0a1931] transition-colors">
            learn more
          </button>
        </div>
        <div className="relative flex justify-center">
          {/* Abstract Speech Bubbles */}
          <div className="relative w-full max-w-md aspect-square">
            <motion.div 
              animate={{ rotate: [0, 5, 0] }}
              transition={{ repeat: Infinity, duration: 8 }}
              className="absolute top-0 right-0 w-4/5 h-3/5 rounded-[100px] border-8 border-purple-500 opacity-80"
            />
            <motion.div 
              animate={{ rotate: [0, -5, 0] }}
              transition={{ repeat: Infinity, duration: 10, delay: 1 }}
              className="absolute bottom-0 left-0 w-3/5 h-2/5 rounded-[80px] bg-purple-400 opacity-40"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

const BranchFinder = () => {
  return (
    <section className="py-24 px-4 md:px-12 bg-white">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 items-center gap-12">
        <div>
          <h2 className="text-5xl md:text-7xl font-light text-[#0a1931] leading-tight mb-6">
            we'd love to <br />
            <span className="font-medium">have you over.</span>
          </h2>
          <p className="text-xl text-gray-600 mb-12">find a branch close to you.</p>
          
          <div className="flex max-w-md border border-gray-300 focus-within:border-[#2175d9] transition-colors">
            <input 
              type="text" 
              placeholder="postcode / city" 
              className="flex-1 px-6 py-4 outline-none text-lg"
            />
            <button className="bg-[#2175d9] text-white px-6 flex items-center justify-center hover:bg-[#1a5eb0] transition-colors">
              <ArrowRight size={24} />
            </button>
          </div>
        </div>
        <div className="flex justify-center">
          <div className="relative">
            <MapPin size={300} className="text-purple-600 font-thin" strokeWidth={1} />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 rounded-full border-4 border-purple-600 bg-white" />
          </div>
        </div>
      </div>
    </section>
  );
};

// --- Main Page Component ---

export default function ForTalentLegalAndCompliance() {
  return (
    <div className="min-h-screen font-sans selection:bg-[#2175d9] selection:text-white">

      <main>
        <Hero />
        
        <SplitSection 
          title="what we"
          subtitle="do."
          content="our consultants are experts within their specialisation and really understand your needs and preferences. Combined with our wide range of available jobs with the best companies in the market provides you the guarantee that there are always jobs that are a perfect match for you."
          image="https://picsum.photos/seed/whatwedo/1200/800"
        />

        <SplitSection 
          title="what we"
          subtitle="offer you."
          content="we provide you with a wonderful experience as we will be your guiding partner throughout every stage of your career. With timely and honest feedback, aiming at a lasting relationship even during the stages you don't work for us. By becoming a member of our lively communities you will have the opportunity to build valuable relationships and networks with your industry."
          image="https://picsum.photos/seed/whatweoffer/1200/800"
          reverse
          dark
        />

        <SplitSection 
          title="learn more about"
          subtitle="job roles in legal & compliance jobs."
          content="Our job profiles have been created to familiarise you with the responsibilities and day-to-day activities of a number of key job roles, so you can make the right decision before applying for a job. Start exploring qualifications, responsibilities, pay rates and more in each job."
          image="https://picsum.photos/seed/jobroles/1200/800"
          buttonText="learn more"
          dark
        />

        <RecruitingSection />

        <SplitSection 
          title="legal &"
          subtitle="compliance."
          content="Can't find a job in the legal and compliance sector that matches your interests? Submit your application and resume, and our team will contact you when a suitable opportunity arises."
          image="https://picsum.photos/seed/legal/1200/800"
          buttonText="submit resume now"
          dark
          reverse
        />

        <LatestUpdates />
        <FAQSection />
        <BranchFinder />
      </main>
    
    </div>
  );
}
