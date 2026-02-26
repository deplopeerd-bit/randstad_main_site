import React, { useState } from "react";
import { motion } from "motion/react";

import { 
  Search, 
  MapPin, 
  Briefcase, 
  Heart, 
  Info, 
  ChevronDown, 
  X, 
  LayoutGrid, 
  List, 
  User, 
  Linkedin,
  Mail,
  ArrowRight
} from 'lucide-react';

const RandstadClone: React.FC = () => {
  const [viewType, setViewType] = useState<'grid' | 'list'>('grid');

  const jobs = [
    {
      id: 1,
      title: "ceo - field",
      location: "visakhapatnam, andhra pradesh",
      type: "permanent",
      date: "4 february 2026"
    },
    {
      id: 2,
      title: "(executive assistant to ceo",
      location: "pinto park, delhi",
      type: "temporary",
      date: "23 january 2026"
    }
  ];

  return (
   <>
    <div className="min-h-screen bg-[#F5F5F5] font-sans text-[#141414]">
      {/* Top Header */}

      {/* Search Section */}
      <section className="bg-[#0A1A3F] text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumbs */}
          <div className="flex items-center space-x-2 text-xs text-gray-400 mb-8">
            <span className="hover:underline cursor-pointer">home</span>
            <span>&gt;</span>
            <span className="hover:underline cursor-pointer">jobs</span>
            <span>&gt;</span>
            <span className="hover:underline cursor-pointer">business management</span>
            <span>&gt;</span>
            <span className="hover:underline cursor-pointer">managing directors</span>
            <span>&gt;</span>
            <span className="text-white">chief executive officer</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-end">
            <div className="md:col-span-4">
              <label className="block text-xs font-semibold mb-2 uppercase tracking-wider">search for</label>
              <div className="relative">
                <input 
                  type="text" 
                  placeholder="job title or keyword" 
                  className="w-full bg-white text-gray-900 py-4 px-4 rounded-sm focus:outline-none"
                />
              </div>
            </div>
            <div className="md:col-span-4">
              <label className="block text-xs font-semibold mb-2 uppercase tracking-wider">where</label>
              <div className="relative">
                <input 
                  type="text" 
                  placeholder="city, state or postcode" 
                  className="w-full bg-white text-gray-900 py-4 px-4 rounded-sm focus:outline-none"
                />
              </div>
            </div>
            <div className="md:col-span-2">
              <label className="block text-xs font-semibold mb-2 uppercase tracking-wider">range</label>
              <div className="relative">
                <select className="w-full bg-white text-gray-900 py-4 px-4 rounded-sm focus:outline-none appearance-none">
                  <option>10 km</option>
                  <option>25 km</option>
                  <option>50 km</option>
                </select>
                <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 w-5 h-5 pointer-events-none" />
              </div>
            </div>
            <div className="md:col-span-2">
              <button className="w-full bg-[#2E7D32] hover:bg-[#256629] text-white font-semibold py-4 px-4 rounded-sm transition-colors">
                search 2 jobs
              </button>
            </div>
          </div>
          
          <button className="mt-4 flex items-center text-sm text-white hover:underline">
            <MapPin className="w-4 h-4 mr-2" />
            use current location
          </button>
        </div>
      </section>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
          <h1 className="text-2xl font-light">2 chief executive officer jobs found for you.</h1>
          <div className="flex items-center space-x-6">
            <div className="flex items-center space-x-2">
              <button 
                onClick={() => setViewType('list')}
                className={`p-2 ${viewType === 'list' ? 'text-[#0070AD]' : 'text-gray-400'}`}
              >
                <List className="w-6 h-6" />
              </button>
              <button 
                onClick={() => setViewType('grid')}
                className={`p-2 ${viewType === 'grid' ? 'text-[#0070AD]' : 'text-gray-400'}`}
              >
                <LayoutGrid className="w-6 h-6" />
              </button>
            </div>
            <div className="flex items-center space-x-2 text-sm">
              <span className="text-gray-500">sort:</span>
              <button className="font-medium flex items-center">
                date <ChevronDown className="ml-1 w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Filters Bar */}
        <div className="flex flex-wrap items-center gap-3 mb-6">
          <span className="text-sm text-gray-500 mr-2">filters:</span>
          <button className="px-6 py-2 bg-white border border-gray-300 rounded-full text-sm flex items-center hover:border-[#0070AD]">
            location <ChevronDown className="ml-2 w-4 h-4" />
          </button>
          <button className="px-6 py-2 bg-white border border-gray-300 rounded-full text-sm flex items-center hover:border-[#0070AD]">
            job types <ChevronDown className="ml-2 w-4 h-4" />
          </button>
          <button className="px-6 py-2 bg-[#0A1A3F] text-white rounded-full text-sm flex items-center">
            <span className="bg-white text-[#0A1A3F] w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-bold mr-2">3</span>
            professional field <ChevronDown className="ml-2 w-4 h-4" />
          </button>
          <button className="px-6 py-2 bg-white border border-gray-300 rounded-full text-sm hover:border-[#0070AD]">
            all filters
          </button>
          
          <div className="ml-auto flex items-center space-x-4">
            <button className="bg-[#1976D2] hover:bg-[#1565C0] text-white px-6 py-2 rounded-sm text-sm font-semibold transition-colors">
              save this search & get alerts
            </button>
            <button className="text-gray-400 hover:text-[#0070AD]">
              <Heart className="w-6 h-6" />
            </button>
            <button className="text-gray-400 hover:text-[#0070AD]">
              <User className="w-6 h-6" />
            </button>
          </div>
        </div>

        {/* Selected Filters */}
        <div className="flex flex-wrap items-center gap-2 mb-10">
          <span className="text-sm text-gray-500 mr-2">selected filters:</span>
          {['business management', 'managing directors', 'chief executive officer'].map((filter) => (
            <span key={filter} className="bg-[#E3F2FD] text-[#0D47A1] px-3 py-1 rounded-sm text-xs flex items-center">
              {filter} <X className="ml-2 w-3 h-3 cursor-pointer" />
            </span>
          ))}
          <button className="text-[#1976D2] text-xs font-medium hover:underline ml-2">clear all</button>
        </div>

        {/* Job Grid */}
        <div className={`grid ${viewType === 'grid' ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3' : 'grid-cols-1'} gap-6`}>
          {jobs.map((job) => (
            <motion.div 
              key={job.id}
              whileHover={{ y: -4 }}
              className="bg-white p-8 rounded-sm shadow-sm border border-gray-100 relative group cursor-pointer"
            >
              <div className="flex justify-between items-start mb-6">
                <h3 className="text-[#0070AD] text-xl font-light hover:underline">{job.title}</h3>
                <button className="text-gray-400 hover:text-[#0070AD]">
                  <Heart className="w-6 h-6" />
                </button>
              </div>
              
              <div className="space-y-3 mb-12">
                <div className="flex items-center text-gray-600 text-sm">
                  <MapPin className="w-4 h-4 mr-3 text-gray-400" />
                  {job.location}
                </div>
                <div className="flex items-center text-gray-600 text-sm">
                  <Briefcase className="w-4 h-4 mr-3 text-gray-400" />
                  {job.type}
                </div>
              </div>

              <div className="flex justify-between items-center pt-6 border-t border-gray-100">
                <span className="text-xs text-gray-400">{job.date}</span>
                <button className="text-gray-400 hover:text-[#0070AD]">
                  <Info className="w-5 h-5" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Alert Banner */}
        <div className="mt-16 bg-[#FFB300] rounded-sm overflow-hidden flex flex-col md:flex-row">
          <div className="p-12 md:w-2/3">
            <h2 className="text-4xl font-light text-[#0A1A3F] mb-4">let similar jobs come to you</h2>
            <p className="text-[#0A1A3F] mb-8">we will keep you updated when we have similar job postings.</p>
            <button className="bg-[#0A1A3F] text-white px-8 py-3 rounded-sm font-semibold hover:bg-[#152A5A] transition-colors">
              set a saved search & alert
            </button>
          </div>
          <div className="md:w-1/3 bg-[#FFB300] flex items-center justify-center p-8 relative overflow-hidden">
            <div className="absolute -right-10 -bottom-10 w-64 h-64 bg-[#0A1A3F] rounded-full opacity-10"></div>
            <div className="relative z-10 bg-[#0A1A3F] p-8 rounded-xl shadow-2xl transform rotate-3">
               <Mail className="w-24 h-24 text-white" />
               <div className="absolute -top-4 -right-4 bg-white rounded-full p-2 shadow-lg">
                 <ArrowRight className="w-6 h-6 text-[#0A1A3F]" />
               </div>
            </div>
          </div>
        </div>

        {/* Other Jobs Section */}
        <div className="mt-20">
          <h2 className="text-3xl font-light mb-10">other managing directors jobs</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-sm hover:text-[#0070AD] cursor-pointer">chief financial officer (3)</div>
            <div className="text-sm hover:text-[#0070AD] cursor-pointer">head of research (3)</div>
            <div className="text-sm hover:text-[#0070AD] cursor-pointer">head operations (4)</div>
            <div className="text-sm hover:text-[#0070AD] cursor-pointer">operation executive (3)</div>
          </div>
        </div>
      </main>

      {/* Footer */}
      

      {/* Floating Elements */}
      <div className="fixed right-0 top-1/2 -translate-y-1/2 z-50">
        <div className="bg-[#4285F4] text-white py-4 px-2 rounded-l-md cursor-pointer flex flex-col items-center space-y-2 shadow-lg">
          <span className="[writing-mode:vertical-rl] text-xs font-semibold tracking-widest uppercase">feedback</span>
        </div>
      </div>
      
      <div className="fixed left-6 bottom-6 z-50">
        <div className="bg-[#0070AD] p-3 rounded-full shadow-xl cursor-pointer hover:scale-110 transition-transform">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="white" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 20C7.59 20 4 16.41 4 12C4 7.59 7.59 4 12 4C16.41 4 20 7.59 20 12C20 16.41 16.41 20 12 20ZM11 7H13V9H11V7ZM11 11H13V17H11V11Z" />
          </svg>
        </div>
      </div>
    </div>
   </>
  );
};

export default RandstadClone;
