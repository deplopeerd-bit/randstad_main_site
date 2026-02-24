import React, { useState } from "react";
import { AnimatePresence, motion } from "motion/react";

import { 
  Search, 
  MapPin, 
  ChevronDown, 
  Heart, 
  User, 
  X, 
  Mail, 
  Linkedin, 
  ChevronRight,
  MessageSquare,
  Cookie
} from 'lucide-react';

const Accordion = ({ title, children }: { title: string; children: React.ReactNode }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="border-b border-gray-200">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full py-6 flex justify-between items-center text-left focus:outline-none group"
      >
        <span className="text-xl font-light text-[#141b3d] group-hover:text-blue-600 transition-colors">
          {title}
        </span>
        <ChevronDown 
          className={`w-6 h-6 text-blue-600 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} 
        />
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
            <div className="pb-6 text-gray-600 leading-relaxed">
              {children}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const ItesGcc = () => {
  const [activeFilters, setActiveFilters] = useState([
    'it',
    'software and application developers',
    'finance-ites-professionals'
  ]);

  const removeFilter = (filter: string) => {
    setActiveFilters(activeFilters.filter(f => f !== filter));
  };

  return (
    <div className="min-h-screen bg-white font-sans text-[#141b3d]">
      {/* Header */}
      

      {/* Main Content */}
      <main className="bg-[#141b3d] text-white pt-8 pb-12">
        <div className="max-w-7xl mx-auto px-4">
          {/* Breadcrumbs */}
          <nav className="flex items-center space-x-2 text-xs text-gray-400 mb-8">
            <a href="#" className="hover:text-white">home</a>
            <span>&gt;</span>
            <a href="#" className="hover:text-white">jobs</a>
            <span>&gt;</span>
            <a href="#" className="hover:text-white">it</a>
            <span>&gt;</span>
            <a href="#" className="hover:text-white">software-and-application-developers</a>
            <span>&gt;</span>
            <span className="text-white">finance-ites-professionals</span>
          </nav>

          {/* Search Bar */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-1 bg-white p-1 rounded-sm overflow-hidden">
            <div className="lg:col-span-4 flex flex-col p-4">
              <label className="text-xs text-gray-500 mb-1">search for</label>
              <div className="flex items-center">
                <input 
                  type="text" 
                  placeholder="job title or keyword" 
                  className="w-full text-gray-900 focus:outline-none"
                />
              </div>
            </div>
            <div className="lg:col-span-4 flex flex-col p-4 border-t lg:border-t-0 lg:border-l border-gray-200">
              <label className="text-xs text-gray-500 mb-1">where</label>
              <div className="flex items-center">
                <input 
                  type="text" 
                  placeholder="city, state or postcode" 
                  className="w-full text-gray-900 focus:outline-none"
                />
              </div>
            </div>
            <div className="lg:col-span-2 flex flex-col p-4 border-t lg:border-t-0 lg:border-l border-gray-200">
              <label className="text-xs text-gray-500 mb-1">range</label>
              <div className="flex items-center justify-between text-gray-900">
                <span>10 km</span>
                <ChevronDown className="w-4 h-4 text-blue-600" />
              </div>
            </div>
            <button className="lg:col-span-2 bg-[#2175d9] hover:bg-blue-700 text-white font-medium py-4 px-6 transition-colors">
              search 0 jobs
            </button>
          </div>
          <button className="mt-4 flex items-center text-sm text-white hover:underline">
            <MapPin className="w-4 h-4 mr-2" />
            use current location
          </button>
        </div>
      </main>

      {/* Filters Bar */}
      <div className="bg-white border-b border-gray-200 py-4">
        <div className="max-w-7xl mx-auto px-4 flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center space-x-4">
            <span className="text-sm font-medium">filters:</span>
            <button className="flex items-center px-4 py-2 border border-gray-300 rounded-full text-sm hover:border-blue-600 transition-colors">
              location <ChevronDown className="ml-2 w-4 h-4" />
            </button>
            <button className="flex items-center px-4 py-2 border border-gray-300 rounded-full text-sm hover:border-blue-600 transition-colors">
              all filters
            </button>
          </div>
          <div className="flex items-center space-x-4">
            <button className="bg-[#2175d9] hover:bg-blue-700 text-white text-sm font-medium py-2 px-6 rounded-sm transition-colors">
              save this search & get alerts
            </button>
            <div className="flex items-center space-x-4 text-gray-400">
              <Heart className="w-5 h-5 cursor-pointer hover:text-blue-600" />
              <User className="w-5 h-5 cursor-pointer hover:text-blue-600" />
            </div>
          </div>
        </div>
      </div>

      {/* Selected Filters */}
      <div className="max-w-7xl mx-auto px-4 py-4 flex flex-wrap items-center gap-4">
        <span className="text-sm font-medium">selected filters:</span>
        {activeFilters.map(filter => (
          <div key={filter} className="flex items-center bg-gray-100 px-3 py-1 rounded-full text-xs">
            <span>{filter}</span>
            <button onClick={() => removeFilter(filter)} className="ml-2 hover:text-red-500">
              <X className="w-3 h-3" />
            </button>
          </div>
        ))}
        <button 
          onClick={() => setActiveFilters([])}
          className="text-sm text-blue-600 hover:underline"
        >
          clear all
        </button>
      </div>

      {/* No Results Section */}
      <section className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-4">
            <h2 className="text-3xl font-light">no results found</h2>
          </div>
          <div className="lg:col-span-8">
            <p className="text-lg text-gray-600 mb-8">
              We did not find any jobs with these filters. You may want to change your filter criteria to get more results. The following actions may help:
            </p>
            <ul className="space-y-4">
              <li className="flex items-start">
                <ChevronRight className="w-5 h-5 text-blue-600 mr-2 mt-1 flex-shrink-0" />
                <span className="text-gray-600">consider removing some of the filters you have applied.</span>
              </li>
              <li className="flex items-start">
                <ChevronRight className="w-5 h-5 text-blue-600 mr-2 mt-1 flex-shrink-0" />
                <span className="text-gray-600">have you searched for jobs in a specific location? consider expanding the range around the location.</span>
              </li>
              <li className="flex items-start">
                <ChevronRight className="w-5 h-5 text-blue-600 mr-2 mt-1 flex-shrink-0" />
                <span className="text-gray-600">change the job title or keywords and check if it was spelled correctly.</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Alert Banner */}
      <section className="bg-[#ffc600] py-16">
        <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex-1">
            <h2 className="text-5xl font-light mb-4">let similar jobs come to you</h2>
            <p className="text-xl mb-8">we will keep you updated when we have similar job postings.</p>
            <button className="bg-[#141b3d] text-white font-medium py-4 px-8 rounded-sm hover:bg-opacity-90 transition-all">
              set a saved search & alert
            </button>
          </div>
          <div className="relative w-64 h-64 flex items-center justify-center">
            <div className="absolute inset-0 bg-blue-500 rounded-sm transform rotate-12"></div>
            <div className="relative z-10 bg-white p-8 rounded-sm shadow-xl">
              <Mail className="w-24 h-24 text-blue-500" />
              <div className="absolute -top-4 -right-4 bg-[#141b3d] p-2 rounded-full">
                <ChevronDown className="w-8 h-8 text-white transform rotate-180" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Info Sections */}
      <div className="max-w-7xl mx-auto px-4 py-20 space-y-24">
        {/* About Section */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-4">
            <h2 className="text-3xl font-light">about ITES/GCC jobs</h2>
          </div>
          <div className="lg:col-span-8">
            <p className="text-lg text-gray-600 leading-relaxed mb-8">
              The ITES (Information Technology Enabled Services) and GCC (Global Capability Centre) sectors offer a wide array of opportunities in India, fostering jobs that capitalize on your expertise. ITES/GCC includes roles like customer service representatives, data analysts, IT support specialists, and more. These sectors are essential for businesses seeking to optimize operations and enhance global reach. Randstad India collaborates with top employers to connect you with roles that align with your skills and career goals.
            </p>
            <a href="#" className="text-blue-600 hover:underline mb-8 inline-block">Read more about working in ITES/GCC here</a>
            
            <div className="mt-12">
              <h3 className="text-xl font-medium mb-6">ITES/GCC jobs per city</h3>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <li><a href="#" className="text-blue-600 hover:underline flex items-center"><span className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-2"></span>ITES/GCC jobs in Hyderabad</a></li>
                <li><a href="#" className="text-blue-600 hover:underline flex items-center"><span className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-2"></span>ITES/GCC jobs in Pune</a></li>
                <li><a href="#" className="text-blue-600 hover:underline flex items-center"><span className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-2"></span>ITES/GCC jobs in Bengaluru</a></li>
                <li><a href="#" className="text-blue-600 hover:underline flex items-center"><span className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-2"></span>ITES/GCC jobs in Gurgaon</a></li>
              </ul>
            </div>
          </div>
        </section>

        {/* Earning Potential */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-4">
            <h2 className="text-3xl font-light">earning potential in ITES/GCC</h2>
          </div>
          <div className="lg:col-span-8">
            <p className="text-lg text-gray-600 leading-relaxed">
              Explore the financial prospects in the ITES/GCC sector with Randstad's comprehensive salary trends reports. These insights help you understand current salary data and compensation trends, supporting informed career decisions. Access our <a href="#" className="text-blue-600 hover:underline">latest salary trends report</a>.
            </p>
          </div>
        </section>

        {/* Best Jobs Accordion */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-4">
            <h2 className="text-3xl font-light">best ITES/GCC jobs</h2>
          </div>
          <div className="lg:col-span-8">
            <p className="text-lg text-gray-600 mb-8">Explore some of the top ITES/GCC roles with Randstad India:</p>
            <div className="border-t border-gray-200">
              <Accordion title="data analyst">
                Data analysts in ITES/GCC sectors are responsible for interpreting complex data sets to help businesses make informed decisions. They use various tools and techniques to identify trends and patterns.
              </Accordion>
              <Accordion title="customer service representative">
                Customer service representatives provide support and assistance to clients, handling inquiries and resolving issues efficiently. Excellent communication skills are essential for this role.
              </Accordion>
              <Accordion title="IT support specialist">
                IT support specialists maintain and troubleshoot computer systems and networks, ensuring smooth operations for businesses. They provide technical assistance to users and resolve hardware and software issues.
              </Accordion>
              <Accordion title="other ITES/GCC roles">
                The ITES/GCC sector offers a wide range of other roles, including project managers, quality assurance analysts, and business process outsourcing specialists.
              </Accordion>
            </div>
          </div>
        </section>

        {/* Find Near You */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-4">
            <h2 className="text-3xl font-light">want to find ITES/GCC jobs near you?</h2>
          </div>
          <div className="lg:col-span-8">
            <p className="text-lg text-gray-600 leading-relaxed">
              Randstad connects you to opportunities that align with your skills and career aspirations. Whether you're aiming for technical or management roles, <a href="#" className="text-blue-600 hover:underline">begin your ITES/GCC career with us today!</a>
            </p>
            
            <div className="mt-12 border-t border-gray-200">
              <Accordion title="how do I apply for a ITES/GCC job?">
                You can apply for ITES/GCC jobs through the Randstad India website by searching for relevant roles and submitting your CV. Our consultants will review your application and contact you if you're a good match.
              </Accordion>
              <Accordion title="does our agency offer job search tips in ITES/GCC?">
                Yes, Randstad provides various resources and tips for job seekers in the ITES/GCC sector, including CV writing advice, interview preparation, and career guidance.
              </Accordion>
            </div>
          </div>
        </section>

        {/* Categories List */}
        <section className="py-12">
          <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            <li><a href="#" className="text-blue-600 hover:underline flex items-center"><span className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-2"></span>engineering jobs</a></li>
            <li><a href="#" className="text-blue-600 hover:underline flex items-center"><span className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-2"></span>finance jobs</a></li>
            <li><a href="#" className="text-blue-600 hover:underline flex items-center"><span className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-2"></span>healthcare jobs</a></li>
            <li><a href="#" className="text-blue-600 hover:underline flex items-center"><span className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-2"></span>retail jobs</a></li>
            <li><a href="#" className="text-blue-600 hover:underline flex items-center"><span className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-2"></span>sales & marketing jobs</a></li>
          </ul>
          <button className="border border-blue-600 text-blue-600 px-8 py-3 hover:bg-blue-50 transition-colors">
            view all jobs
          </button>
        </section>
      </div>

      {/* Footer */}
      

      {/* Floating Elements */}
      <div className="fixed right-0 top-1/2 -translate-y-1/2 z-40">
        <button className="bg-[#2175d9] text-white px-2 py-6 rounded-l-md flex items-center vertical-text text-sm font-medium hover:bg-blue-700 transition-colors shadow-lg">
          Feedback
        </button>
      </div>
      <div className="fixed bottom-6 left-6 z-40">
        <button className="bg-blue-600 text-white p-3 rounded-full shadow-2xl hover:scale-110 transition-transform">
          <Cookie className="w-6 h-6" />
        </button>
      </div>

      <style>{`
        .vertical-text {
          writing-mode: vertical-rl;
          text-orientation: mixed;
        }
      `}</style>
    </div>
  );
};

export default ItesGcc;
