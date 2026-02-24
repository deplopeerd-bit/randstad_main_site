import React, { useState } from "react";
import { motion } from "motion/react";

import { 
  ChevronDown, 
  ChevronRight, 
  Search, 
  User, 
  Heart, 
  Linkedin, 
  Twitter, 
  Facebook, 
  Youtube, 
  Instagram,
  MapPin,
  ArrowRight
} from 'lucide-react';

const Navbar = () => (
  <nav className="bg-white border-b border-gray-100 sticky top-0 z-50">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex justify-between h-20 items-center">
        <div className="flex items-center gap-8">
          <div className="flex items-center">
            <span className="text-2xl font-bold text-blue-600 flex items-center">
              <span className="text-blue-500 mr-1">r</span>randstad
            </span>
          </div>
          <div className="hidden md:flex items-center space-x-6 text-sm font-medium text-gray-600">
            <a href="#" className="hover:text-blue-600 flex items-center gap-1">find a job <ChevronDown size={14} /></a>
            <a href="#" className="hover:text-blue-600 flex items-center gap-1">for talent <ChevronDown size={14} /></a>
            <a href="#" className="hover:text-blue-600 flex items-center gap-1">for employer <ChevronDown size={14} /></a>
            <a href="#" className="hover:text-blue-600 flex items-center gap-1">resources <ChevronDown size={14} /></a>
            <a href="#" className="hover:text-blue-600 flex items-center gap-1">about us <ChevronDown size={14} /></a>
          </div>
        </div>
        <div className="flex items-center space-x-6 text-sm">
          <a href="#" className="text-gray-500 hover:text-blue-600">contact us</a>
          <div className="flex items-center gap-4">
            <button className="text-gray-600 hover:text-blue-600 flex items-center gap-1">
              <Heart size={20} /> <span className="hidden sm:inline">0</span>
            </button>
            <button className="text-gray-600 hover:text-blue-600 flex items-center gap-1">
              <User size={20} /> <span className="hidden sm:inline">my randstad</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  </nav>
);

const Hero = () => (
  <section className="bg-[#0a1a3a] text-white py-20 relative overflow-hidden">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      <div className="text-xs uppercase tracking-widest mb-4 opacity-70">
        home &gt; job seekers &gt; areas of expertise &gt; banking finance sales
      </div>
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h1 className="text-5xl md:text-7xl font-light leading-tight mb-8">
            looking for a job in <br />
            <span className="font-normal">banking sales?</span>
          </h1>
          <p className="text-xl opacity-90 mb-10 max-w-lg leading-relaxed">
            Forget job portals - your next job is just a WhatsApp away! Click on the link below to text us on WhatsApp and get hired!
          </p>
          <button className="bg-white text-[#0a1a3a] px-8 py-4 rounded-sm font-medium hover:bg-gray-100 transition-colors">
            apply now
          </button>
        </div>
        <div className="relative hidden md:block">
          {/* Abstract shapes mimicking the screenshot */}
          <div className="absolute top-0 right-0 w-64 h-12 bg-purple-500 transform -rotate-45 rounded-full opacity-50"></div>
          <div className="absolute top-20 right-20 w-80 h-12 bg-purple-600 transform -rotate-45 rounded-full"></div>
          <div className="absolute top-40 right-40 w-48 h-12 bg-purple-400 transform -rotate-45 rounded-full opacity-30"></div>
          <div className="w-4 h-4 bg-white rounded-full absolute top-1/2 right-1/4"></div>
        </div>
      </div>
    </div>
  </section>
);

const WhatsAppBanner = () => (
  <section className="bg-white py-16">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-8">
      <h2 className="text-4xl md:text-5xl font-light text-[#0a1a3a]">
        your dream job is just a whatsapp <br />
        <span className="font-normal">click away.</span>
      </h2>
      <button className="border border-[#0a1a3a] text-[#0a1a3a] px-10 py-4 rounded-sm font-medium hover:bg-gray-50 transition-colors">
        apply now
      </button>
    </div>
  </section>
);

const RecruitingRoles = () => {
  const roles = [
    "Branch Relationship Executive",
    "Relationship Executive",
    "Telecalling Executive",
    "Trainer",
    "Business Development Associate",
    "Field Sales Executive",
    "Field Executive",
    "Field Supervisor",
    "Sales Promotion Executive - Volume ISP (CDIT)",
    "Sales Promotion Executive - 2W ISP",
    "Field Sales Executive"
  ];

  return (
    <section className="bg-[#0a1a3a] text-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-12">
          <div className="md:col-span-1">
            <h2 className="text-4xl font-light mb-4">
              roles we're currently <br />
              <span className="font-normal">recruiting for.</span>
            </h2>
          </div>
          <div className="md:col-span-2">
            <p className="text-sm opacity-70 mb-8">
              please click on the role to know more about eligibility criteria and job description.
            </p>
            <div className="divide-y divide-white/20">
              {roles.map((role, idx) => (
                <div key={idx} className="py-6 flex justify-between items-center group cursor-pointer">
                  <span className="text-xl font-light group-hover:pl-2 transition-all">{role}</span>
                  <ChevronDown className="opacity-50 group-hover:opacity-100" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const ContentSection = ({ title, subtitle, text, image, reverse = false, bgColor = "bg-white" }) => (
  <section className={`${bgColor} py-0 overflow-hidden`}>
    <div className={`flex flex-col ${reverse ? 'md:flex-row-reverse' : 'md:flex-row'} items-stretch`}>
      <div className="md:w-1/2 p-12 md:p-24 flex flex-col justify-center">
        <h2 className="text-5xl font-light text-[#0a1a3a] mb-8">
          {title} <br />
          <span className="font-normal">{subtitle}</span>
        </h2>
        <p className="text-lg text-gray-700 leading-relaxed mb-8">
          {text}
        </p>
        {title.includes("learn more") && (
          <button className="self-start border border-[#0a1a3a] text-[#0a1a3a] px-8 py-3 rounded-sm hover:bg-gray-50">
            learn more
          </button>
        )}
      </div>
      <div className="md:w-1/2 h-[500px] md:h-auto">
        <img src={image} alt={title} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
      </div>
    </div>
  </section>
);

const LatestUpdates = () => {
  const updates = [
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
    <section className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-end mb-12">
          <h2 className="text-4xl font-light text-[#0a1a3a]">latest updates</h2>
          <a href="#" className="text-blue-600 hover:underline flex items-center gap-1">see all articles</a>
        </div>
        <div className="grid md:grid-cols-3 gap-10">
          {updates.map((update, idx) => (
            <div key={idx} className="group cursor-pointer">
              <div className="overflow-hidden rounded-lg mb-4 h-64">
                <img 
                  src={update.image} 
                  alt={update.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                  referrerPolicy="no-referrer"
                />
              </div>
              <p className="text-sm text-gray-500 mb-2">{update.date}</p>
              <h3 className="text-2xl font-light text-[#0a1a3a] group-hover:text-blue-600 transition-colors">{update.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const JoinTalentPool = () => (
  <section className="bg-[#0a1a3a] text-white py-0 overflow-hidden">
    <div className="flex flex-col md:flex-row items-stretch">
      <div className="md:w-1/2 p-12 md:p-24 flex flex-col justify-center">
        <h2 className="text-5xl font-light mb-8">
          join our talent pool <br />
          <span className="font-normal">for future opportunities in banking finance sales.</span>
        </h2>
        <p className="text-lg opacity-80 mb-10">
          Can't find a job in the banking sales sector that matches your interests? Submit your application and resume, and our team will contact you when a suitable opportunity arises.
        </p>
        <button className="self-start border border-white text-white px-8 py-3 rounded-sm hover:bg-white/10 transition-colors">
          submit resume now
        </button>
      </div>
      <div className="md:w-1/2 relative h-[500px] md:h-auto">
        <img 
          src="https://picsum.photos/seed/talent/800/600" 
          alt="Join talent pool" 
          className="w-full h-full object-cover" 
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="w-64 h-64 border-[40px] border-purple-600 rounded-full opacity-60"></div>
          <div className="w-48 h-48 bg-purple-500 rounded-full absolute opacity-40 mix-blend-screen"></div>
        </div>
      </div>
    </div>
  </section>
);

const FAQs = () => (
  <section className="bg-[#0a1a3a] text-white py-24">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid md:grid-cols-2 gap-20 items-center">
        <div>
          <h2 className="text-sm uppercase tracking-widest opacity-70 mb-4">FAQs</h2>
          <h3 className="text-6xl font-light mb-8">
            frequently asked <br />
            <span className="font-normal">questions and answers.</span>
          </h3>
          <p className="text-xl opacity-80 mb-10">
            We provide answers to the most common questions that applicants and companies ask us about working with Randstad.
          </p>
          <button className="border border-white text-white px-10 py-4 rounded-sm hover:bg-white/10 transition-colors">
            learn more
          </button>
        </div>
        <div className="relative flex justify-center">
          <div className="w-80 h-48 border-8 border-purple-600 rounded-[40px] relative">
            <div className="absolute -bottom-10 -right-10 w-64 h-40 border-8 border-purple-400 rounded-[40px] bg-[#0a1a3a]"></div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const BranchLocator = () => (
  <section className="bg-white py-24 overflow-hidden">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid md:grid-cols-2 gap-20 items-center">
        <div>
          <h2 className="text-6xl font-light text-[#0a1a3a] mb-8 leading-tight">
            we'd love to <br />
            <span className="font-normal">have you over.</span>
          </h2>
          <p className="text-xl text-gray-600 mb-12">find a branch close to you.</p>
          <div className="flex max-w-md">
            <input 
              type="text" 
              placeholder="postcode / city" 
              className="flex-1 border border-gray-300 px-6 py-4 focus:outline-none focus:border-blue-600"
            />
            <button className="bg-blue-600 text-white px-6 py-4 flex items-center justify-center">
              <ArrowRight size={24} />
            </button>
          </div>
        </div>
        <div className="relative flex justify-center">
          <div className="text-purple-600">
            <MapPin size={300} strokeWidth={0.5} className="opacity-20" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
              <MapPin size={150} strokeWidth={1.5} />
              <div className="w-32 h-2 bg-purple-600 rounded-full mt-4 mx-auto"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const Footer = () => (
  <footer className="bg-[#0a1a3a] text-white pt-20 pb-10">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-10 mb-20">
        <div>
          <h4 className="font-bold mb-6">find a job</h4>
          <ul className="space-y-4 text-sm opacity-70">
            <li><a href="#" className="hover:opacity-100">explore all jobs</a></li>
            <li><a href="#" className="hover:opacity-100">submit your cv</a></li>
            <li><a href="#" className="hover:opacity-100">join our team</a></li>
            <li><a href="#" className="hover:opacity-100">refer a friend</a></li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold mb-6">for talents</h4>
          <ul className="space-y-4 text-sm opacity-70">
            <li><a href="#" className="hover:opacity-100">specialisms</a></li>
            <li><a href="#" className="hover:opacity-100">testimonials</a></li>
            <li><a href="#" className="hover:opacity-100">career advice</a></li>
            <li><a href="#" className="hover:opacity-100">beware of job scams</a></li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold mb-6">for employers</h4>
          <ul className="space-y-4 text-sm opacity-70">
            <li><a href="#" className="hover:opacity-100">submit a vacancy</a></li>
            <li><a href="#" className="hover:opacity-100">request a callback</a></li>
            <li><a href="#" className="hover:opacity-100">our services</a></li>
            <li><a href="#" className="hover:opacity-100">specialisms</a></li>
            <li><a href="#" className="hover:opacity-100">case studies</a></li>
            <li><a href="#" className="hover:opacity-100">testimonials</a></li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold mb-6">resources</h4>
          <ul className="space-y-4 text-sm opacity-70">
            <li><a href="#" className="hover:opacity-100">case studies</a></li>
            <li><a href="#" className="hover:opacity-100">press room</a></li>
            <li><a href="#" className="hover:opacity-100">blogs</a></li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold mb-6">workforce insights</h4>
          <ul className="space-y-4 text-sm opacity-70">
            <li><a href="#" className="hover:opacity-100">talent insights reports</a></li>
            <li><a href="#" className="hover:opacity-100">employer brand research reports</a></li>
            <li><a href="#" className="hover:opacity-100">salary trends reports</a></li>
            <li><a href="#" className="hover:opacity-100">ed&i reports</a></li>
            <li><a href="#" className="hover:opacity-100">workmonitor reports</a></li>
            <li><a href="#" className="hover:opacity-100">startup hiring trends</a></li>
            <li><a href="#" className="hover:opacity-100">talent pulse surveys</a></li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold mb-6">jobs</h4>
          <ul className="space-y-4 text-sm opacity-70">
            <li><a href="#" className="hover:opacity-100">engineering jobs</a></li>
            <li><a href="#" className="hover:opacity-100">cxo jobs</a></li>
            <li><a href="#" className="hover:opacity-100">manufacturing jobs</a></li>
            <li><a href="#" className="hover:opacity-100">supply chain & logistics jobs</a></li>
            <li><a href="#" className="hover:opacity-100">education jobs</a></li>
            <li><a href="#" className="hover:opacity-100">finance & accounting jobs</a></li>
            <li><a href="#" className="hover:opacity-100">healthcare jobs</a></li>
            <li><a href="#" className="hover:opacity-100">hr & admin support jobs</a></li>
            <li><a href="#" className="hover:opacity-100">ites/gcc jobs</a></li>
            <li><a href="#" className="hover:opacity-100">legal & compliance jobs</a></li>
            <li><a href="#" className="hover:opacity-100">sales & marketing jobs</a></li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10 pt-10 flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="flex gap-6">
          <a href="#" className="opacity-70 hover:opacity-100"><Linkedin size={24} /></a>
          <a href="#" className="opacity-70 hover:opacity-100"><Twitter size={24} /></a>
          <a href="#" className="opacity-70 hover:opacity-100"><Facebook size={24} /></a>
          <a href="#" className="opacity-70 hover:opacity-100"><Youtube size={24} /></a>
          <a href="#" className="opacity-70 hover:opacity-100"><Instagram size={24} /></a>
        </div>
        <div className="text-xs opacity-50 text-center md:text-right max-w-2xl">
          registered office: Randstad India Private Limited, CIN U74210TN1992PTC023097,/Randstad House, Old No. 5 & 5A, New No. 9, Pycrofts Garden Road, Nungambakkam, Chennai, TN - 600 006
        </div>
      </div>

      <div className="mt-12 flex flex-wrap justify-center gap-6 text-xs opacity-50">
        <a href="#" className="hover:underline">terms & conditions</a>
        <a href="#" className="hover:underline">cookies</a>
        <a href="#" className="hover:underline">misconduct reporting procedure</a>
        <a href="#" className="hover:underline">accessibility</a>
        <a href="#" className="hover:underline">be aware</a>
        <a href="#" className="hover:underline">sitemap</a>
        <a href="#" className="hover:underline">privacy statement</a>
      </div>

      <div className="mt-10 text-center text-[10px] opacity-30">
        RANDSTAD, HUMAN FORWARD and SHAPING THE WORLD OF WORK are registered trademarks of © Randstad N.V.2023
      </div>
    </div>
  </footer>
);

export default function RandstadPage() {
  return (
    <div className="min-h-screen bg-white font-sans text-[#0a1a3a]">
      <Navbar />
      <Hero />
      <WhatsAppBanner />
      <RecruitingRoles />
      
      <ContentSection 
        title="what"
        subtitle="we do."
        text="The banking finance sales landscape in India is dynamic and rewarding, offering opportunities for ambitious individuals to make a real impact. Whether you're a relationship manager, sales executive, financial advisor, or specialist in any area of banking sales, we understand the unique blend of interpersonal skills, financial acumen, and drive that leads to success. Our consultants are experts in matching talent with banking sales needs, ensuring you find roles that align with your expertise, target customer segments, and career aspirations."
        image="https://picsum.photos/seed/wedo/800/600"
        bgColor="bg-[#fdfcfb]"
      />

      <ContentSection 
        title="what"
        subtitle="we offer you."
        text="Your career in banking sales is a journey of relationship building, financial expertise, and achieving targets. We're dedicated to supporting your professional growth through tailored career guidance, access to industry-leading sales training programs, and insights into the latest banking products and services. Join our community of banking sales professionals to network with like-minded individuals, exchange strategies, and stay ahead of the curve in this competitive field."
        image="https://picsum.photos/seed/offer/800/600"
        reverse={true}
        bgColor="bg-[#0a1a3a]"
      />

      <ContentSection 
        title="learn more about"
        subtitle="job roles in banking sales"
        text="Our job profiles have been created to familiarise you with the responsibilities and day-to-day activities of a number of key job roles, so you can make the right decision before applying for a job. Start exploring qualifications, responsibilities, pay rates and more in each job."
        image="https://picsum.photos/seed/roles/800/600"
        bgColor="bg-[#0a1a3a]"
      />

      <LatestUpdates />
      <JoinTalentPool />
      <FAQs />
      <BranchLocator />
      <Footer />
    </div>
  );
}
