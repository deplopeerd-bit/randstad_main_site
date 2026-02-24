import { motion } from "motion/react";
import { useState } from "react";

import { 
  Search, 
  MapPin, 
  Briefcase, 
  Heart, 
  User, 
  ChevronDown, 
  Info, 
  Linkedin, 
  X, 
  LayoutGrid, 
  List,
  Mail,
  ChevronRight
} from 'lucide-react';

export default function Engineering() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white font-sans text-[#141414]">
      {/* Top Navigation */}
      

      {/* Hero Search Section */}
      <section className="bg-[#00274d] text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center gap-2 text-xs mb-8 opacity-70">
            <a href="#" className="hover:underline">home</a>
            <span>›</span>
            <a href="#" className="hover:underline">jobs</a>
            <span>›</span>
            <a href="#" className="hover:underline">(scientific) research</a>
            <span>›</span>
            <a href="#" className="hover:underline">r&d managers</a>
            <span>›</span>
            <span className="font-semibold">engineering director</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-end">
            <div className="md:col-span-4">
              <label className="block text-sm font-medium mb-2">search for</label>
              <div className="relative">
                <input 
                  type="text" 
                  placeholder="job title or keyword" 
                  className="w-full bg-white text-gray-900 px-4 py-3 rounded-sm focus:outline-none"
                  defaultValue="engineering director"
                />
              </div>
            </div>
            <div className="md:col-span-4">
              <label className="block text-sm font-medium mb-2">where</label>
              <div className="relative">
                <input 
                  type="text" 
                  placeholder="city, state or postcode" 
                  className="w-full bg-white text-gray-900 px-4 py-3 rounded-sm focus:outline-none"
                />
              </div>
            </div>
            <div className="md:col-span-2">
              <label className="block text-sm font-medium mb-2">range</label>
              <div className="relative">
                <select className="w-full bg-white text-gray-900 px-4 py-3 rounded-sm focus:outline-none appearance-none">
                  <option>10 km</option>
                  <option>25 km</option>
                  <option>50 km</option>
                </select>
                <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
              </div>
            </div>
            <div className="md:col-span-2">
              <button className="w-full bg-[#2175d9] hover:bg-[#1a5eb0] text-white font-medium py-3 px-6 rounded-sm transition-colors">
                search 1 job
              </button>
            </div>
          </div>
          <button className="mt-4 flex items-center gap-2 text-sm hover:underline">
            <MapPin size={16} />
            use current location
          </button>
        </div>
      </section>

      {/* Results Header */}
      <section className="bg-white border-b border-gray-100 py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <h1 className="text-2xl md:text-3xl font-light">1 engineering director job found for you.</h1>
            <div className="flex items-center gap-6">
              <div className="flex items-center gap-2 border-r pr-6">
                <button className="p-2 text-[#2175d9]"><List size={20} /></button>
                <button className="p-2 text-gray-400"><LayoutGrid size={20} /></button>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-sm text-gray-500">sort:</span>
                <button className="text-sm font-medium flex items-center gap-1">
                  date <ChevronDown size={14} />
                </button>
              </div>
            </div>
          </div>

          {/* Filters Bar */}
          <div className="flex flex-wrap items-center gap-3 mt-8">
            <span className="text-sm font-medium">filters:</span>
            <button className="px-4 py-2 border border-gray-900 rounded-full text-sm flex items-center gap-2 hover:bg-gray-50">
              location <ChevronDown size={14} />
            </button>
            <button className="px-4 py-2 border border-gray-900 rounded-full text-sm flex items-center gap-2 hover:bg-gray-50">
              job types <ChevronDown size={14} />
            </button>
            <button className="px-4 py-2 bg-[#00274d] text-white rounded-full text-sm flex items-center gap-2">
              <span className="bg-white text-[#00274d] w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-bold">3</span>
              professional field <ChevronDown size={14} />
            </button>
            <button className="px-4 py-2 border border-gray-900 rounded-full text-sm hover:bg-gray-50">
              all filters
            </button>
            <div className="ml-auto flex items-center gap-4">
              <button className="bg-[#2175d9] text-white px-6 py-2 rounded-sm text-sm font-medium hover:bg-[#1a5eb0]">
                save this search & get alerts
              </button>
              <div className="flex items-center gap-4">
                <Heart size={20} className="text-gray-400" />
                <User size={20} className="text-gray-400" />
              </div>
            </div>
          </div>

          {/* Selected Filters */}
          <div className="flex flex-wrap items-center gap-2 mt-6">
            <span className="text-sm text-gray-500">selected filters:</span>
            {['(scientific) research', 'r&d managers', 'engineering director'].map((filter) => (
              <span key={filter} className="bg-gray-100 px-3 py-1 rounded-full text-xs flex items-center gap-2">
                {filter} <X size={12} className="cursor-pointer" />
              </span>
            ))}
            <button className="text-sm text-[#2175d9] hover:underline ml-2">clear all</button>
          </div>
        </div>
      </section>

      {/* Main Content Area */}
      <main className="bg-[#f5f5f5] py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Job Listings */}
            <div className="lg:col-span-4">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-white p-6 rounded-sm shadow-sm border-l-4 border-transparent hover:border-[#2175d9] transition-all cursor-pointer group"
              >
                <div className="flex justify-between items-start mb-4">
                  <h2 className="text-xl text-[#2175d9] group-hover:underline">engineering coordinatore</h2>
                  <Heart size={24} className="text-gray-300 hover:text-red-500 transition-colors" />
                </div>
                <div className="space-y-2 text-sm text-gray-600 mb-8">
                  <div className="flex items-center gap-2">
                    <MapPin size={16} />
                    <span>jagiroad, assam</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Briefcase size={16} />
                    <span>permanent</span>
                  </div>
                </div>
                <div className="flex justify-between items-center pt-4 border-t border-gray-100">
                  <span className="text-xs text-gray-400 uppercase tracking-wider">20 january 2026</span>
                  <Info size={18} className="text-gray-300" />
                </div>
              </motion.div>
            </div>

            {/* Sidebar / Additional Info */}
            <div className="lg:col-span-8 space-y-12">
              {/* Alert Banner */}
              <div className="bg-[#ffc627] p-12 rounded-sm relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-8">
                <div className="z-10 max-w-md">
                  <h2 className="text-4xl font-light mb-4">let similar jobs come to you</h2>
                  <p className="text-lg mb-8">we will keep you updated when we have similar job postings.</p>
                  <button className="bg-[#00274d] text-white px-8 py-3 rounded-sm font-medium hover:bg-[#001a33] transition-colors">
                    set a saved search & alert
                  </button>
                </div>
                <div className="relative z-10">
                  <div className="bg-white p-8 rounded-sm shadow-lg transform rotate-3">
                    <Mail size={120} className="text-[#00274d]" />
                    <div className="absolute -top-4 -right-4 bg-[#00274d] text-white p-2 rounded-full">
                      <ChevronDown size={32} className="transform -rotate-45" />
                    </div>
                  </div>
                </div>
                {/* Decorative elements */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2"></div>
              </div>

              {/* Accordion Sections */}
              <div className="space-y-8">
                <section>
                  <h3 className="text-3xl font-light mb-6">other r&d managers jobs</h3>
                  <a href="#" className="text-[#2175d9] hover:underline">drawing office executive (6)</a>
                </section>

                <section className="grid grid-cols-1 md:grid-cols-2 gap-12">
                  <div>
                    <h3 className="text-2xl font-light mb-6">want to find engineering jobs near you?</h3>
                  </div>
                  <div>
                    <p className="text-gray-700 leading-relaxed mb-6">
                      Randstad connects you to opportunities that align with your skills and career aspirations. Whether you're aiming for research, development, or management roles, <a href="#" className="text-[#2175d9] hover:underline">begin your engineering career with us today!</a>
                    </p>
                    <div className="space-y-4">
                      <div className="border-t border-gray-200 py-4 flex justify-between items-center cursor-pointer hover:text-[#2175d9]">
                        <span className="text-lg">how do I apply for an engineering job?</span>
                        <ChevronDown size={20} />
                      </div>
                      <div className="border-t border-gray-200 py-4 flex justify-between items-center cursor-pointer hover:text-[#2175d9]">
                        <span className="text-lg">does our agency offer job search tips in engineering?</span>
                        <ChevronDown size={20} />
                      </div>
                    </div>
                  </div>
                </section>

                <section className="grid grid-cols-1 md:grid-cols-2 gap-12">
                  <div>
                    <h3 className="text-2xl font-light mb-6">best engineering jobs</h3>
                  </div>
                  <div>
                    <p className="text-gray-700 mb-6">Explore some of the top engineering roles with Randstad India:</p>
                    <div className="space-y-4">
                      {['mechanical engineer', 'civil engineer', 'electrical engineer', 'other engineering roles'].map((role) => (
                        <div key={role} className="border-t border-gray-200 py-4 flex justify-between items-center cursor-pointer hover:text-[#2175d9]">
                          <span className="text-lg">{role}</span>
                          <ChevronDown size={20} />
                        </div>
                      ))}
                    </div>
                  </div>
                </section>

                <section className="grid grid-cols-1 md:grid-cols-2 gap-12">
                  <div>
                    <h3 className="text-2xl font-light mb-6">earning potential in engineering</h3>
                  </div>
                  <div>
                    <p className="text-gray-700 leading-relaxed">
                      Explore the financial prospects in the engineering field with Randstad's comprehensive salary trends reports. These reports offer crucial insights into current salary data, industry benchmarks, and compensation trends, enabling you to make informed decisions in your career journey. Stay ahead of market dynamics by accessing our <a href="#" className="text-[#2175d9] hover:underline">latest salary trends report</a>.
                    </p>
                  </div>
                </section>

                <section className="grid grid-cols-1 md:grid-cols-2 gap-12">
                  <div>
                    <h3 className="text-2xl font-light mb-6">about engineering jobs</h3>
                  </div>
                  <div>
                    <p className="text-gray-700 leading-relaxed mb-6">
                      Engineering in India is a vast sector offering numerous pathways for innovative minds. Whether your expertise lies in software, mechanical, electrical, or civil engineering, Randstad India partners with top companies to bring you roles that match your skill set. Explore positions offering career advancement, flexibility, and industry-leading packages. For career consultations, our team is ready to assist you every step of the way to fulfill your professional goals. <a href="#" className="text-[#2175d9] hover:underline">Read more about working in engineering here</a>
                    </p>
                    <h4 className="font-bold mb-4">engineering jobs per city</h4>
                    <ul className="space-y-3">
                      {['Mumbai', 'Delhi', 'Bengaluru', 'Chennai'].map((city) => (
                        <li key={city} className="flex items-center gap-2 text-[#2175d9] hover:underline">
                          <span className="w-1 h-1 bg-[#2175d9] rounded-full"></span>
                          <a href="#">engineering jobs in {city}</a>
                        </li>
                      ))}
                    </ul>
                  </div>
                </section>

                <section className="grid grid-cols-1 md:grid-cols-2 gap-12">
                  <div>
                    <h3 className="text-2xl font-light mb-6">explore jobs in other fields</h3>
                  </div>
                  <div className="space-y-6">
                    <ul className="space-y-3">
                      {[
                        'retail jobs', 
                        'manufacturing jobs', 
                        'supply chain & logistics jobs', 
                        'banking sales jobs', 
                        'healthcare jobs', 
                        'hr & admin support jobs', 
                        'sales & marketing jobs'
                      ].map((field) => (
                        <li key={field} className="flex items-center gap-2 text-[#2175d9] hover:underline">
                          <span className="w-1 h-1 bg-[#2175d9] rounded-full"></span>
                          <a href="#">{field}</a>
                        </li>
                      ))}
                    </ul>
                    <button className="border border-[#2175d9] text-[#2175d9] px-8 py-3 rounded-sm hover:bg-[#2175d9] hover:text-white transition-all">
                      view all jobs
                    </button>
                  </div>
                </section>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      

      {/* Floating Elements */}
      <div className="fixed bottom-6 right-6 z-50">
        <button className="bg-[#2175d9] text-white p-4 rounded-full shadow-lg hover:scale-110 transition-transform">
          <Info size={24} />
        </button>
      </div>
      <div className="fixed bottom-6 left-6 z-50">
        <button className="bg-[#2175d9] text-white p-3 rounded-full shadow-lg">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 2a10 10 0 1 0 10 10 4 4 0 0 1-5-5 4 4 0 0 1-5-5" />
            <path d="M8.5 8.5a2.121 2.121 0 0 1 3 0L12 9l.5-.5a2.121 2.121 0 0 1 3 0 2.121 2.121 0 0 1 0 3L12 15l-3.5-3.5a2.121 2.121 0 0 1 0-3z" />
          </svg>
        </button>
      </div>
      
      {/* Feedback Tab */}
      <div className="fixed right-0 top-1/2 -translate-y-1/2 z-40 hidden md:block">
        <button className="bg-[#2175d9] text-white py-4 px-2 rounded-l-md text-xs font-bold uppercase tracking-widest [writing-mode:vertical-lr] rotate-180">
          feedback
        </button>
      </div>
    </div>
  );
}
