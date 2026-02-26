import React, { useState } from "react";
import { AnimatePresence, motion } from "motion/react";

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { 
  Search, 
  MapPin, 
  ChevronDown, 
  Heart, 
  User, 
  X, 
  Check, 
  Mail, 
  Linkedin,
  Menu,
  Globe
} from 'lucide-react';

const Accordion = ({ title, children }: { title: string, children: React.ReactNode }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="border-b border-gray-200 py-6">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="flex justify-between items-center w-full text-left group"
      >
        <span className="text-2xl font-light text-randstad-navy group-hover:text-randstad-blue transition-colors">
          {title}
        </span>
        <ChevronDown className={`w-6 h-6 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
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

export default function LegalAndCompilance() {
  const [selectedFilters, setSelectedFilters] = useState(['legal', 'lawyers', 'legal-advisor']);

  const removeFilter = (filter: string) => {
    setSelectedFilters(selectedFilters.filter(f => f !== filter));
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Top Utility Nav */}
     

      {/* Main Header */}
      

      {/* Hero / Search Section */}
      <section className="bg-randstad-navy text-white py-12">
        <div className="container-custom">
          {/* Breadcrumbs */}
          <div className="text-xs mb-8 flex items-center gap-2 opacity-80">
            <a href="#" className="hover:underline">home</a>
            <span>&gt;</span>
            <a href="#" className="hover:underline">jobs</a>
            <span>&gt;</span>
            <a href="#" className="hover:underline">legal</a>
            <span>&gt;</span>
            <a href="#" className="hover:underline">lawyers</a>
            <span>&gt;</span>
            <span className="font-bold">legal-advisor</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-[1fr_1fr_auto_auto] gap-4 items-end">
            <div className="space-y-2">
              <label className="text-sm font-semibold">search for</label>
              <div className="relative">
                <input 
                  type="text" 
                  placeholder="job title or keyword"
                  className="w-full bg-white text-randstad-navy px-4 py-3 rounded-sm focus:outline-none"
                />
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-sm font-semibold">where</label>
              <div className="relative">
                <input 
                  type="text" 
                  placeholder="city, state or postcode"
                  className="w-full bg-white text-randstad-navy px-4 py-3 rounded-sm focus:outline-none"
                />
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-sm font-semibold">range</label>
              <div className="relative">
                <select className="w-full bg-white text-randstad-navy px-4 py-3 rounded-sm focus:outline-none appearance-none pr-10">
                  <option>10 km</option>
                  <option>25 km</option>
                  <option>50 km</option>
                  <option>100 km</option>
                </select>
                <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 text-randstad-navy pointer-events-none" size={18} />
              </div>
            </div>
            <button className="bg-randstad-blue hover:bg-blue-600 text-white px-8 py-3 rounded-sm font-bold transition-colors h-[48px]">
              search 0 jobs
            </button>
          </div>
          <button className="mt-4 flex items-center gap-2 text-sm hover:underline">
            <MapPin size={16} />
            use current location
          </button>
        </div>
      </section>

      {/* Filters Bar */}
      <section className="bg-white border-b border-gray-200 py-6">
        <div className="container-custom flex flex-wrap justify-between items-center gap-4">
          <div className="flex items-center gap-4">
            <span className="text-sm font-semibold">filters:</span>
            <button className="flex items-center gap-2 border border-randstad-navy px-6 py-2 rounded-full text-sm font-semibold hover:bg-gray-50">
              location <ChevronDown size={16} />
            </button>
            <button className="flex items-center gap-2 border border-randstad-navy px-6 py-2 rounded-full text-sm font-semibold hover:bg-gray-50">
              all filters
            </button>
          </div>
          <div className="flex items-center gap-6">
            <button className="bg-randstad-blue text-white px-6 py-2 rounded-sm text-sm font-bold hover:bg-blue-600">
              save this search & get alerts
            </button>
            <div className="flex items-center gap-4 text-randstad-navy">
              <Heart size={20} className="cursor-pointer" />
              <User size={20} className="cursor-pointer" />
            </div>
          </div>
        </div>
      </section>

      {/* Selected Filters */}
      <section className="bg-white py-4">
        <div className="container-custom flex items-center gap-4">
          <span className="text-sm font-semibold">selected filters:</span>
          <div className="flex flex-wrap gap-2">
            {selectedFilters.map(filter => (
              <div key={filter} className="flex items-center gap-2 bg-gray-100 px-3 py-1 rounded-full text-sm text-randstad-navy">
                {filter}
                <X size={14} className="cursor-pointer hover:text-red-500" onClick={() => removeFilter(filter)} />
              </div>
            ))}
          </div>
          {selectedFilters.length > 0 && (
            <button 
              className="text-sm text-randstad-blue hover:underline ml-2"
              onClick={() => setSelectedFilters([])}
            >
              clear all
            </button>
          )}
        </div>
      </section>

      {/* Main Content - No Results */}
      <main className="py-20">
        <div className="container-custom grid grid-cols-1 lg:grid-cols-[300px_1fr] gap-12">
          <h2 className="text-4xl font-light text-randstad-navy">no results found</h2>
          <div className="max-w-2xl">
            <p className="text-lg text-gray-700 mb-8">
              We did not find any jobs with these filters. You may want to change your filter criteria to get more results. The following actions may help:
            </p>
            <ul className="space-y-6">
              <li className="flex items-start gap-4">
                <Check className="text-randstad-blue mt-1 shrink-0" size={20} />
                <span className="text-lg text-gray-700">consider removing some of the filters you have applied.</span>
              </li>
              <li className="flex items-start gap-4">
                <Check className="text-randstad-blue mt-1 shrink-0" size={20} />
                <span className="text-lg text-gray-700">have you searched for jobs in a specific location? consider expanding the range around the location.</span>
              </li>
              <li className="flex items-start gap-4">
                <Check className="text-randstad-blue mt-1 shrink-0" size={20} />
                <span className="text-lg text-gray-700">change the job title or keywords and check if it was spelled correctly.</span>
              </li>
            </ul>
          </div>
        </div>
      </main>

      {/* Banner Section */}
      <section className="bg-randstad-yellow py-16">
        <div className="container-custom flex flex-col lg:flex-row justify-between items-center gap-12">
          <div className="max-w-xl">
            <h2 className="text-5xl font-light text-randstad-navy mb-6">let similar jobs come to you</h2>
            <p className="text-xl text-randstad-navy mb-8">we will keep you updated when we have similar job postings.</p>
            <button className="bg-randstad-navy text-white px-8 py-4 rounded-sm font-bold hover:bg-opacity-90 transition-all">
              set a saved search & alert
            </button>
          </div>
          <div className="relative">
            <div className="w-64 h-64 bg-randstad-blue rounded-lg flex items-center justify-center relative overflow-hidden">
                <Mail size={120} className="text-white" />
                <div className="absolute top-4 right-4 text-white">
                    <ChevronDown size={48} className="rotate-180" />
                </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-24 bg-white">
        <div className="container-custom grid grid-cols-1 lg:grid-cols-[300px_1fr] gap-12">
          <h2 className="text-4xl font-light text-randstad-navy">about legal jobs</h2>
          <div className="max-w-3xl">
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              The legal sector in India offers dynamic roles for professionals passionate about law, justice, and compliance. From legal advisors to compliance officers and contract managers, Randstad India partners with leading firms to connect you with positions that suit your expertise. Our consultants are dedicated to matching you with opportunities that support your career ambitions in the legal field.
            </p>
            <a href="#" className="text-randstad-blue text-lg hover:underline block mb-12">Read more about working in legal here</a>
            
            <h3 className="text-xl font-semibold mb-6">legal jobs per city</h3>
            <ul className="space-y-4">
              <li><a href="#" className="text-randstad-blue text-lg hover:underline flex items-center gap-2"><span className="w-1.5 h-1.5 bg-randstad-blue rounded-full"></span> legal jobs in Mumbai</a></li>
              <li><a href="#" className="text-randstad-blue text-lg hover:underline flex items-center gap-2"><span className="w-1.5 h-1.5 bg-randstad-blue rounded-full"></span> legal jobs in Delhi</a></li>
              <li><a href="#" className="text-randstad-blue text-lg hover:underline flex items-center gap-2"><span className="w-1.5 h-1.5 bg-randstad-blue rounded-full"></span> legal jobs in Bengaluru</a></li>
              <li><a href="#" className="text-randstad-blue text-lg hover:underline flex items-center gap-2"><span className="w-1.5 h-1.5 bg-randstad-blue rounded-full"></span> legal jobs in Chennai</a></li>
            </ul>
          </div>
        </div>
      </section>

      {/* Earning Potential */}
      <section className="py-24 bg-randstad-light">
        <div className="container-custom grid grid-cols-1 lg:grid-cols-[300px_1fr] gap-12">
          <h2 className="text-4xl font-light text-randstad-navy">earning potential in legal</h2>
          <div className="max-w-3xl">
            <p className="text-lg text-gray-700 leading-relaxed">
              Explore the financial prospects in the legal sector with Randstad's comprehensive salary trends reports. These reports offer crucial insights into current salary data, industry benchmarks, and compensation trends. Access our <a href="#" className="text-randstad-blue hover:underline">latest salary trends report</a>.
            </p>
          </div>
        </div>
      </section>

      {/* Best Legal Jobs */}
      <section className="py-24 bg-white">
        <div className="container-custom grid grid-cols-1 lg:grid-cols-[300px_1fr] gap-12">
          <h2 className="text-4xl font-light text-randstad-navy">best legal jobs</h2>
          <div className="max-w-3xl">
            <p className="text-lg text-gray-700 mb-8">Explore some of the top legal roles with Randstad India:</p>
            <div className="border-t border-gray-200">
              <Accordion title="legal secretary">
                Details about legal secretary roles and responsibilities...
              </Accordion>
              <Accordion title="analyst">
                Details about analyst roles in the legal sector...
              </Accordion>
              <Accordion title="business analyst">
                Details about business analyst roles in legal departments...
              </Accordion>
              <Accordion title="contract manager">
                Details about contract management opportunities...
              </Accordion>
              <Accordion title="other legal roles">
                Information about various other legal positions available...
              </Accordion>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-white border-t border-gray-100">
        <div className="container-custom grid grid-cols-1 lg:grid-cols-[300px_1fr] gap-12">
          <h2 className="text-4xl font-light text-randstad-navy">want to find legal jobs near you?</h2>
          <div className="max-w-3xl">
            <p className="text-lg text-gray-700 mb-8">
              Randstad connects you to opportunities that align with your skills and career aspirations. Whether you're aiming for advisory or management roles, <a href="#" className="text-randstad-blue hover:underline">begin your legal career with us today!</a>
            </p>
            <div className="border-t border-gray-200">
              <Accordion title="how do I apply for a legal job?">
                You can apply directly through our website by creating a profile and uploading your CV...
              </Accordion>
              <Accordion title="does our agency offer job search tips in legal?">
                Yes, we provide extensive career advice and job search tips specifically for the legal sector...
              </Accordion>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
    

      {/* Floating Feedback Button */}
      <div className="fixed right-0 top-1/2 -translate-y-1/2 z-50">
        <button className="bg-randstad-blue text-white py-4 px-2 rounded-l-md flex flex-col items-center gap-2 [writing-mode:vertical-rl] rotate-180 font-semibold text-sm">
          Feedback
        </button>
      </div>

      {/* Cookie Consent Icon */}
      <div className="fixed bottom-6 left-6 z-50">
        <button className="w-12 h-12 bg-randstad-blue text-white rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform">
          <Globe size={24} />
        </button>
      </div>
    </div>
  );
}
