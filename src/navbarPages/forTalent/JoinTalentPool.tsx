import React from "react";
import { motion } from "motion/react";

import { 
  Search, 
  Heart, 
  User, 
  ChevronDown, 
  ArrowRight, 
  MapPin, 
  Clock, 
  Info,
  Linkedin,
  Twitter,
  Facebook,
  Youtube,
  Instagram
} from 'lucide-react';

const ForTalentJoinTalentPool = () => {
  const navItems = [
    { name: 'find a job', hasDropdown: true },
    { name: 'for talent', hasDropdown: true },
    { name: 'for employer', hasDropdown: true },
    { name: 'resources', hasDropdown: true },
    { name: 'about us', hasDropdown: true },
  ];

  const jobs = [
    {
      title: 'ceo - field',
      location: 'visakhapatnam, andhra pradesh',
      type: 'permanent',
      posted: 'posted 4 february 2026',
    },
    {
      title: '(executive assistant to ceo',
      location: 'pinto park, delhi',
      type: 'temporary',
      posted: 'posted 23 january 2026',
    }
  ];

  const articles = [
    {
      date: '02 August 2023',
      title: 'randstad with heart.',
      image: 'https://picsum.photos/seed/heart/800/500'
    },
    {
      date: '17 January 2023',
      title: 'how to stand out in an interview.',
      image: 'https://picsum.photos/seed/interview/800/500'
    },
    {
      date: '17 January 2023',
      title: '5 tips to ace your video interview.',
      image: 'https://picsum.photos/seed/video/800/500'
    },
    {
      date: '17 January 2023',
      title: 'declining a job offer.',
      image: 'https://picsum.photos/seed/decline/800/500'
    },
    {
      date: '17 January 2023',
      title: 'how to negotiate and accept your job offer.',
      image: 'https://picsum.photos/seed/negotiate/800/500'
    },
    {
      date: '12 January 2023',
      title: 'prepare answers for tough interview questions.',
      image: 'https://picsum.photos/seed/tough/800/500'
    }
  ];

  const footerLinks = {
    'find a job': ['explore all jobs', 'submit your cv', 'join our team', 'refer a friend'],
    'for employers': ['submit a vacancy', 'request a callback', 'our services', 'specialisms', 'case studies', 'testimonials'],
    'workforce insights': ['talent insights reports', 'employer brand research reports', 'salary trends reports', 'ed&i reports', 'workmonitor reports', 'startup hiring trends', 'talent pulse surveys'],
    'jobs': ['engineering jobs', 'cxo jobs', 'manufacturing jobs', 'supply chain & logistics jobs', 'education jobs', 'finance & accounting jobs', 'healthcare jobs', 'hr & admin support jobs', 'ites/gcc jobs', 'legal & compliance jobs', 'sales & marketing jobs'],
    'for talents': ['specialisms', 'testimonials', 'career advice', 'beware of job scams'],
    'resources': ['case studies', 'press room', 'blogs']
  };

  return (
    <div className="min-h-screen bg-white font-sans text-[#0a1931]">
      {/* Top Bar */}
      <div className="bg-white border-bottom border-gray-100 py-2 px-4 md:px-12 flex justify-end">
        <a href="#" className="text-xs text-[#0a1931] hover:underline">contact us</a>
      </div>

      {/* Header */}
      

      {/* Hero Section */}
      <section className="bg-[#0a1931] text-white py-20 px-4 md:px-12 relative overflow-hidden">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 items-center gap-12">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <nav className="flex items-center gap-2 text-xs opacity-60 mb-8">
              <a href="#" className="hover:underline">home</a>
              <span>›</span>
              <a href="#" className="hover:underline">job seekers</a>
              <span>›</span>
              <a href="#" className="hover:underline">areas of expertise</a>
              <span>›</span>
              <span className="text-white opacity-100">executive (cxo roles)</span>
            </nav>
            <h1 className="text-5xl md:text-7xl font-light mb-8 leading-tight">
              find your next CXO role.
            </h1>
            <p className="text-lg opacity-80 mb-10 max-w-lg leading-relaxed">
              As your trusted career partner, we simplify your job search by connecting you with top employers. With our success in executive hiring, we help you achieve your career goals.
            </p>
            <div className="flex flex-wrap gap-4">
              <button className="px-8 py-4 border border-white rounded-md hover:bg-white hover:text-[#0a1931] transition-all duration-300 font-medium">
                explore available jobs
              </button>
              <button className="px-8 py-4 border border-white rounded-md hover:bg-white hover:text-[#0a1931] transition-all duration-300 font-medium">
                submit your resume
              </button>
            </div>
          </motion.div>
          
          <div className="relative hidden md:flex justify-center items-center">
            {/* Abstract Graphic Element */}
            <div className="relative w-80 h-80">
              <div className="absolute top-1/2 left-0 w-4 h-4 bg-white rounded-full opacity-40"></div>
              <div className="absolute top-1/2 left-1/4 w-12 h-12 bg-blue-400 rounded-full opacity-60"></div>
              <div className="absolute top-1/2 left-1/2 w-24 h-24 border-8 border-[#00d1ff] rounded-full"></div>
              <div className="absolute top-1/2 right-0 w-4 h-4 bg-white rounded-full"></div>
              <div className="absolute top-1/2 left-0 right-0 h-[2px] bg-white opacity-20 -z-10"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Latest Jobs Section */}
      <section className="py-20 px-4 md:px-12 bg-[#f5f5f5]">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-light mb-12">our latest jobs in executive hiring.</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {jobs.map((job, idx) => (
              <motion.div 
                key={idx}
                whileHover={{ y: -5 }}
                className="bg-white p-8 rounded-lg shadow-sm border border-gray-100 flex flex-col justify-between h-full"
              >
                <div>
                  <div className="flex justify-between items-start mb-6">
                    <h3 className="text-xl font-medium text-blue-600 hover:underline cursor-pointer">{job.title}</h3>
                    <button className="text-gray-400 hover:text-red-500 transition-colors">
                      <Heart size={24} />
                    </button>
                  </div>
                  <div className="space-y-3 mb-8">
                    <div className="flex items-center gap-3 text-gray-600">
                      <MapPin size={18} />
                      <span className="text-sm">{job.location}</span>
                    </div>
                    <div className="flex items-center gap-3 text-gray-600">
                      <Clock size={18} />
                      <span className="text-sm">{job.type}</span>
                    </div>
                  </div>
                </div>
                <div className="flex justify-between items-center pt-6 border-t border-gray-100">
                  <span className="text-xs text-gray-400 uppercase tracking-wider">{job.posted}</span>
                  <button className="text-gray-400 hover:text-[#0a1931]">
                    <Info size={20} />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
          
          <div className="mt-16 border-t border-gray-200 pt-12 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
            <h3 className="text-2xl font-light">roles we're currently recruiting for.</h3>
            <button className="flex items-center gap-2 text-xl font-light text-[#0a1931] hover:text-[#00d1ff] transition-colors group">
              see all roles in executive hiring
              <ChevronDown size={24} className="group-hover:translate-y-1 transition-transform" />
            </button>
          </div>
        </div>
      </section>

      {/* Talent Pool Section */}
      <section className="bg-[#0a1931] text-white overflow-hidden">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 items-center">
          <div className="p-12 md:p-20">
            <h2 className="text-4xl md:text-5xl font-light mb-8 leading-tight">
              join our talent pool for future opportunities in CXO roles.
            </h2>
            <p className="text-lg opacity-80 mb-10 leading-relaxed">
              Can't find a job in the executive hiring that matches your interests? Submit your application and resume, and our team will contact you when a suitable opportunity arises.
            </p>
            <button className="px-8 py-4 border border-white rounded-md hover:bg-white hover:text-[#0a1931] transition-all duration-300 font-medium">
              submit resume now
            </button>
          </div>
          <div className="h-full min-h-[400px] relative">
            <img 
              src="https://picsum.photos/seed/executive/1000/800" 
              alt="Executive Professional" 
              className="absolute inset-0 w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
            {/* Graphic Overlay */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
               <div className="w-64 h-64 border-[16px] border-[#00d1ff] rounded-full opacity-40 translate-x-1/2"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Latest Updates Section */}
      <section className="py-20 px-4 md:px-12 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-end mb-12">
            <h2 className="text-4xl font-light">latest updates</h2>
            <a href="#" className="text-xl font-light text-blue-600 hover:underline flex items-center gap-2">
              see all articles
            </a>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {articles.map((article, idx) => (
              <motion.div 
                key={idx}
                whileHover={{ y: -5 }}
                className="group cursor-pointer"
              >
                <div className="aspect-[16/10] overflow-hidden rounded-lg mb-6">
                  <img 
                    src={article.image} 
                    alt={article.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <p className="text-sm text-gray-400 mb-2 uppercase tracking-wider font-medium">{article.date}</p>
                <h3 className="text-2xl font-light group-hover:text-blue-600 transition-colors leading-tight">
                  {article.title}
                </h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs Section */}
      <section className="bg-[#0a1931] text-white py-24 px-4 md:px-12 relative overflow-hidden">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 items-center gap-16">
          <div className="relative z-10">
            <p className="text-xl font-light mb-4 opacity-80">FAQs</p>
            <h2 className="text-5xl md:text-6xl font-light mb-8 leading-tight">
              frequently asked questions and answers.
            </h2>
            <p className="text-lg opacity-70 mb-10 max-w-lg leading-relaxed">
              We provide answers to the most common questions that applicants and companies ask us about working with Randstad.
            </p>
            <button className="px-10 py-4 border border-white rounded-md hover:bg-white hover:text-[#0a1931] transition-all duration-300 font-medium">
              learn more
            </button>
          </div>
          <div className="relative flex justify-center items-center">
            {/* Speech Bubbles Graphic */}
            <div className="relative w-full max-w-md aspect-square">
              <div className="absolute top-0 right-0 w-4/5 h-1/2 border-4 border-white rounded-[100px] rounded-br-none"></div>
              <div className="absolute bottom-1/4 left-0 w-3/4 h-2/5 border-4 border-[#00d1ff] rounded-[100px] rounded-bl-none"></div>
              <div className="absolute bottom-0 right-1/4 w-1/2 h-1/4 border-4 border-gray-600 rounded-[100px] rounded-br-none"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Branch Finder Section */}
      <section className="py-24 px-4 md:px-12 bg-white">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 items-center gap-16">
          <div>
            <h2 className="text-5xl md:text-7xl font-light mb-8 leading-tight">
              we'd love to have you over.
            </h2>
            <p className="text-2xl font-light mb-12 opacity-80">find a branch close to you.</p>
            <div className="flex max-w-md">
              <input 
                type="text" 
                placeholder="postcode / city" 
                className="flex-1 px-6 py-4 border border-gray-300 rounded-l-md focus:outline-none focus:border-blue-500 text-lg"
              />
              <button className="bg-blue-600 text-white px-6 py-4 rounded-r-md hover:bg-blue-700 transition-colors">
                <ArrowRight size={24} />
              </button>
            </div>
          </div>
          <div className="relative flex justify-center">
            {/* Map Pins Graphic */}
            <div className="relative w-full max-w-sm aspect-square">
              <div className="absolute top-0 right-0 w-48 h-48 text-blue-200 opacity-40">
                <MapPin size={192} strokeWidth={1} />
              </div>
              <div className="absolute top-1/4 left-1/4 w-40 h-40 text-gray-200">
                <MapPin size={160} strokeWidth={1} />
              </div>
              <div className="absolute bottom-0 right-1/4 w-56 h-56 text-[#00d1ff]">
                <MapPin size={224} strokeWidth={1.5} />
              </div>
              <div className="absolute bottom-1/4 right-1/2 w-4 h-4 bg-[#00d1ff] rounded-full blur-sm"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      

      {/* Floating Feedback Button */}
      <div className="fixed right-0 top-1/2 -translate-y-1/2 z-40">
        <button className="bg-blue-500 text-white py-4 px-2 rounded-l-md vertical-text flex items-center justify-center gap-2 hover:bg-blue-600 transition-colors shadow-lg" style={{ writingMode: 'vertical-rl' }}>
          Feedback
        </button>
      </div>

      {/* Cookie Consent Icon */}
      <div className="fixed bottom-4 left-4 z-40">
        <button className="bg-blue-600 text-white p-3 rounded-full shadow-lg hover:bg-blue-700 transition-colors">
          <div className="w-6 h-6 border-2 border-dashed border-white rounded-full flex items-center justify-center">
            <div className="w-2 h-2 bg-white rounded-full"></div>
          </div>
        </button>
      </div>
    </div>
  );
};

export default ForTalentJoinTalentPool;
