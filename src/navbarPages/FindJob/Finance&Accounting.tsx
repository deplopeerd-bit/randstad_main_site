import React, { useState } from "react";
import { AnimatePresence, motion } from "motion/react";

import { 
  Search, 
  MapPin, 
  ChevronDown, 
  Heart, 
  Info, 
  LayoutGrid, 
  List, 
  X, 
  Linkedin, 
  Mail,
  User,
  Menu,
  ChevronRight
} from 'lucide-react';

const Header = () => (
  <></>
);

const SearchBar = () => (
  <div className="bg-[#001a3d] text-white py-12">
    <div className="max-w-7xl mx-auto px-4">
      <div className="flex items-center gap-2 text-xs text-gray-400 mb-8 overflow-x-auto whitespace-nowrap">
        <span>home</span> <ChevronRight size={12} />
        <span>jobs</span> <ChevronRight size={12} />
        <span>finance</span> <ChevronRight size={12} />
        <span>accountants and bookkeepers</span> <ChevronRight size={12} />
        <span className="text-white">account analyst</span>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-[1fr_1fr_120px_160px] gap-px bg-gray-700 rounded-sm overflow-hidden border border-gray-700">
        <div className="bg-white p-4 flex flex-col gap-1">
          <label className="text-[10px] uppercase font-bold text-gray-500 tracking-wider">search for</label>
          <div className="flex items-center gap-2">
            <input 
              type="text" 
              placeholder="job title or keyword" 
              className="w-full text-gray-900 outline-none placeholder:text-gray-400"
            />
          </div>
        </div>
        <div className="bg-white p-4 flex flex-col gap-1">
          <label className="text-[10px] uppercase font-bold text-gray-500 tracking-wider">where</label>
          <div className="flex items-center gap-2">
            <input 
              type="text" 
              placeholder="city, state or postcode" 
              className="w-full text-gray-900 outline-none placeholder:text-gray-400"
            />
          </div>
        </div>
        <div className="bg-white p-4 flex flex-col gap-1 border-l border-gray-100">
          <label className="text-[10px] uppercase font-bold text-gray-500 tracking-wider">range</label>
          <div className="flex items-center justify-between text-gray-900 cursor-pointer">
            <span>10 km</span>
            <ChevronDown size={16} />
          </div>
        </div>
        <button className="bg-[#2175d9] hover:bg-[#1a5eb0] transition-colors font-bold text-white flex items-center justify-center h-full">
          search 3 jobs
        </button>
      </div>
      <button className="mt-4 flex items-center gap-2 text-sm text-white hover:underline">
        <MapPin size={16} />
        use current location
      </button>
    </div>
  </div>
);

const FilterBar = () => {
  const [selectedFilters, setSelectedFilters] = useState(['finance', 'accountants and bookkeepers', 'account analyst']);

  return (
    <div className="bg-white border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 py-6">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="flex flex-wrap items-center gap-3">
            <span className="text-sm font-medium text-gray-500 mr-2">filters:</span>
            <button className="px-4 py-2 border border-gray-300 rounded-full text-sm flex items-center gap-2 hover:border-gray-400">
              location <ChevronDown size={14} />
            </button>
            <button className="px-4 py-2 border border-gray-300 rounded-full text-sm flex items-center gap-2 hover:border-gray-400">
              job types <ChevronDown size={14} />
            </button>
            <button className="px-4 py-2 bg-[#001a3d] text-white rounded-full text-sm flex items-center gap-2">
              <span className="bg-white text-[#001a3d] w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-bold">3</span>
              professional field <ChevronDown size={14} />
            </button>
            <button className="px-4 py-2 border border-gray-300 rounded-full text-sm hover:border-gray-400">
              all filters
            </button>
          </div>
          <button className="bg-[#2175d9] hover:bg-[#1a5eb0] text-white px-6 py-2.5 rounded-sm font-bold text-sm transition-colors">
            save this search & get alerts
          </button>
        </div>

        <div className="mt-6 flex flex-wrap items-center gap-3">
          <span className="text-sm font-medium text-gray-500 mr-2">selected filters:</span>
          {selectedFilters.map(filter => (
            <div key={filter} className="flex items-center gap-2 bg-gray-100 px-3 py-1.5 rounded-sm text-xs font-medium text-gray-700">
              {filter}
              <button onClick={() => setSelectedFilters(prev => prev.filter(f => f !== filter))}>
                <X size={14} className="text-gray-400 hover:text-gray-600" />
              </button>
            </div>
          ))}
          <button 
            onClick={() => setSelectedFilters([])}
            className="text-sm text-[#2175d9] hover:underline ml-2"
          >
            clear all
          </button>
        </div>
      </div>
    </div>
  );
};

const JobCard = ({ title, location, type, date }: { title: string, location: string, type: string, date: string }) => (
  <div className="bg-white p-8 rounded-sm shadow-sm border border-gray-100 hover:shadow-md transition-shadow flex flex-col justify-between h-full">
    <div>
      <div className="flex justify-between items-start mb-4">
        <h3 className="text-xl font-medium text-[#2175d9] hover:underline cursor-pointer">{title}</h3>
        <button className="p-1 hover:bg-gray-50 rounded-full">
          <Heart size={20} className="text-gray-400" />
        </button>
      </div>
      <div className="flex flex-col gap-2 text-gray-600 text-sm">
        <div className="flex items-center gap-2">
          <MapPin size={16} className="text-gray-400" />
          {location}
        </div>
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 border border-gray-400 rounded-sm" />
          {type}
        </div>
      </div>
    </div>
    <div className="mt-12 pt-6 border-t border-gray-50 flex items-center justify-between text-xs text-gray-400">
      <span>{date}</span>
      <Info size={16} className="text-gray-300 hover:text-gray-500 cursor-pointer" />
    </div>
  </div>
);

const Accordion = ({ title, children }: { title: string, children: React.ReactNode }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="border-b border-gray-200 py-4">
      <button 
        className="w-full flex items-center justify-between text-left group"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="text-xl font-medium text-gray-800 group-hover:text-[#2175d9] transition-colors">{title}</span>
        <ChevronDown size={24} className={`text-gray-400 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden"
          >
            <div className="pt-4 text-gray-600 leading-relaxed">
              {children}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const Footer = () => (
  <></>
);

export default function FinanceAccounting() {
  return (
    <div className="min-h-screen bg-[#f5f5f5] font-sans selection:bg-[#2175d9] selection:text-white">
      <Header />
      <SearchBar />
      
      <main>
        <div className="bg-white">
          <div className="max-w-7xl mx-auto px-4 py-12">
            <div className="flex items-center justify-between mb-8">
              <h1 className="text-3xl font-medium text-gray-900">3 account analyst jobs found for you.</h1>
              <div className="flex items-center gap-6">
                <div className="flex items-center gap-2 border border-gray-200 rounded-sm p-1">
                  <button className="p-1.5 hover:bg-gray-100 rounded-sm"><List size={18} className="text-gray-500" /></button>
                  <button className="p-1.5 bg-[#001a3d] text-white rounded-sm"><LayoutGrid size={18} /></button>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <span className="text-gray-500">sort:</span>
                  <button className="flex items-center gap-1 font-medium text-gray-800">
                    date <ChevronDown size={14} />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <FilterBar />

        <div className="max-w-7xl mx-auto px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <JobCard 
              title="account analyst" 
              location="powai iit, maharashtra" 
              type="temporary" 
              date="17 february 2026" 
            />
            <JobCard 
              title="account analyst" 
              location="mumbai, maharashtra" 
              type="temporary" 
              date="12 february 2026" 
            />
            <JobCard 
              title="account analyst" 
              location="domlur, karnataka" 
              type="temporary" 
              date="23 january 2026" 
            />
          </div>

          <div className="mt-12 flex justify-center">
            <button className="px-8 py-3 border border-[#2175d9] text-[#2175d9] font-bold rounded-sm hover:bg-[#2175d9] hover:text-white transition-all">
              view all jobs
            </button>
          </div>
        </div>

        {/* Content Sections */}
        <section className="bg-[#ffc629] py-24 overflow-hidden relative">
          <div className="max-w-7xl mx-auto px-4 flex flex-col lg:flex-row items-center justify-between gap-12">
            <div className="max-w-xl">
              <h2 className="text-6xl font-medium text-[#001a3d] leading-tight mb-8">let similar jobs come to you</h2>
              <p className="text-xl text-[#001a3d] mb-12">we will keep you updated when we have similar job postings.</p>
              <button className="bg-[#001a3d] text-white px-10 py-4 font-bold rounded-sm hover:bg-[#002a5d] transition-colors">
                set a saved search & alert
              </button>
            </div>
            <div className="relative">
              <div className="w-80 h-80 bg-white rounded-sm flex items-center justify-center shadow-2xl transform rotate-3">
                <Mail size={120} className="text-[#2175d9]" />
                <div className="absolute -top-4 -right-4 w-12 h-12 bg-[#001a3d] rounded-full flex items-center justify-center">
                  <ChevronDown size={24} className="text-white" />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-white py-24">
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-[300px_1fr] gap-16">
              <h2 className="text-3xl font-medium text-gray-900">other accountants and bookkeepers jobs</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-6 gap-x-12">
                <a href="#" className="text-gray-700 hover:text-[#2175d9] transition-colors">accountant (6)</a>
                <a href="#" className="text-gray-700 hover:text-[#2175d9] transition-colors">accounts receivable specialist (5)</a>
                <a href="#" className="text-gray-700 hover:text-[#2175d9] transition-colors">executive - accounts (9)</a>
                <a href="#" className="text-gray-700 hover:text-[#2175d9] transition-colors">accounts payable specialist (4)</a>
                <a href="#" className="text-gray-700 hover:text-[#2175d9] transition-colors">audit manager (6)</a>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-[#f5f2ed] py-24">
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-[300px_1fr] gap-16">
              <h2 className="text-3xl font-medium text-gray-900">about accounting jobs</h2>
              <div className="max-w-3xl">
                <p className="text-gray-700 leading-relaxed mb-6">
                  The accounting sector in India is integral to business operations, offering numerous opportunities for professionals. From accountants and auditors to finance analysts and managers, Randstad India partners with top organizations to present job roles that match your skills and aspirations. Whether you're starting or looking to advance your career, explore various positions that provide growth and stability in accounting. Connect with our experts for personalized career guidance.
                </p>
                <a href="#" className="text-[#2175d9] hover:underline font-medium">Read more about working in accounting here</a>
                
                <div className="mt-12">
                  <h3 className="text-lg font-bold mb-6">accounting jobs per city</h3>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <li><a href="#" className="text-[#2175d9] hover:underline flex items-center gap-2"><div className="w-1.5 h-1.5 bg-[#2175d9] rounded-full" /> accounting jobs in Mumbai</a></li>
                    <li><a href="#" className="text-[#2175d9] hover:underline flex items-center gap-2"><div className="w-1.5 h-1.5 bg-[#2175d9] rounded-full" /> accounting jobs in Delhi</a></li>
                    <li><a href="#" className="text-[#2175d9] hover:underline flex items-center gap-2"><div className="w-1.5 h-1.5 bg-[#2175d9] rounded-full" /> accounting jobs in Bengaluru</a></li>
                    <li><a href="#" className="text-[#2175d9] hover:underline flex items-center gap-2"><div className="w-1.5 h-1.5 bg-[#2175d9] rounded-full" /> accounting jobs in Chennai</a></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-white py-24">
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-[300px_1fr] gap-16">
              <h2 className="text-3xl font-medium text-gray-900">earning potential in accounting</h2>
              <div className="max-w-3xl">
                <p className="text-gray-700 leading-relaxed">
                  Explore the financial prospects in the accounting industry with Randstad's comprehensive salary trends reports. These reports offer insights into current salary data, industry benchmarks, and compensation trends, aiding you in making informed decisions. Stay ahead of market dynamics by accessing our <a href="#" className="text-[#2175d9] hover:underline">latest salary trends report</a>.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-[#f5f2ed] py-24">
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-[300px_1fr] gap-16">
              <h2 className="text-3xl font-medium text-gray-900">best accounting jobs</h2>
              <div className="max-w-3xl">
                <p className="text-gray-700 mb-8">Explore some of the top accounting roles with Randstad India:</p>
                <div className="border-t border-gray-200">
                  <Accordion title="accountant">
                    Detailed information about accountant roles, responsibilities, and market demand in India.
                  </Accordion>
                  <Accordion title="auditor">
                    Insights into auditing careers, required certifications like CA/CPA, and top hiring sectors.
                  </Accordion>
                  <Accordion title="finance analyst">
                    The evolving role of finance analysts in data-driven business environments and key skills needed.
                  </Accordion>
                  <Accordion title="other accounting roles">
                    Information about specialized roles like tax consultants, cost accountants, and treasury managers.
                  </Accordion>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-white py-24">
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-[300px_1fr] gap-16">
              <h2 className="text-3xl font-medium text-gray-900">want to find accounting jobs near you?</h2>
              <div className="max-w-3xl">
                <p className="text-gray-700 mb-8">
                  Randstad connects you to opportunities that align with your skills and career aspirations. Whether you're aiming for finance, auditing, or analysis roles, <a href="#" className="text-[#2175d9] hover:underline">begin your accounting career with us today!</a>
                </p>
                <div className="border-t border-gray-200">
                  <Accordion title="how do I apply for an accounting job?">
                    Step-by-step guide on applying through the Randstad portal, from profile creation to interview preparation.
                  </Accordion>
                  <Accordion title="does our agency offer job search tips in accounting?">
                    Resources and expert advice on resume building, networking, and mastering accounting interviews.
                  </Accordion>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-[#f5f2ed] py-24">
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-[300px_1fr] gap-16">
              <h2 className="text-3xl font-medium text-gray-900">explore jobs in other fields.</h2>
              <div className="max-w-3xl">
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <li><a href="#" className="text-[#2175d9] hover:underline flex items-center gap-2"><div className="w-1.5 h-1.5 bg-[#2175d9] rounded-full" /> banking jobs</a></li>
                  <li><a href="#" className="text-[#2175d9] hover:underline flex items-center gap-2"><div className="w-1.5 h-1.5 bg-[#2175d9] rounded-full" /> engineering jobs</a></li>
                  <li><a href="#" className="text-[#2175d9] hover:underline flex items-center gap-2"><div className="w-1.5 h-1.5 bg-[#2175d9] rounded-full" /> retail jobs</a></li>
                  <li><a href="#" className="text-[#2175d9] hover:underline flex items-center gap-2"><div className="w-1.5 h-1.5 bg-[#2175d9] rounded-full" /> supply chain & logistics jobs</a></li>
                  <li><a href="#" className="text-[#2175d9] hover:underline flex items-center gap-2"><div className="w-1.5 h-1.5 bg-[#2175d9] rounded-full" /> manufacturing jobs</a></li>
                  <li><a href="#" className="text-[#2175d9] hover:underline flex items-center gap-2"><div className="w-1.5 h-1.5 bg-[#2175d9] rounded-full" /> sales & marketing jobs</a></li>
                  <li><a href="#" className="text-[#2175d9] hover:underline flex items-center gap-2"><div className="w-1.5 h-1.5 bg-[#2175d9] rounded-full" /> hr & admin support jobs</a></li>
                </ul>
                <div className="mt-12">
                  <button className="px-8 py-3 border border-[#2175d9] text-[#2175d9] font-bold rounded-sm hover:bg-[#2175d9] hover:text-white transition-all">
                    view all jobs
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />

      {/* Floating Feedback Button */}
      <button className="fixed right-0 top-1/2 -translate-y-1/2 bg-[#2175d9] text-white py-4 px-2 rounded-l-md vertical-text font-bold text-xs tracking-widest shadow-lg hover:bg-[#1a5eb0] transition-colors z-40">
        Feedback
      </button>

      {/* Cookie Consent Icon */}
      <button className="fixed left-4 bottom-4 w-10 h-10 bg-[#2175d9] text-white rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform z-40">
        <Info size={20} />
      </button>

      <style>{`
        .vertical-text {
          writing-mode: vertical-rl;
          text-orientation: mixed;
        }
      `}</style>
    </div>
  );
}
