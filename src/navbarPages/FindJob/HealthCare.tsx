import React, { useState } from "react";

import { 
  ChevronDown, 
  Heart, 
  User, 
  MapPin, 
  X, 
  Check, 
  Mail, 
  ArrowDown,
  Linkedin
} from 'lucide-react';

// --- Components ---



const Breadcrumbs = () => (
  <div className="bg-white py-4">
    <div className="container-custom">
      <nav className="flex items-center gap-2 text-[13px] text-gray-500">
        <a href="#" className="hover:underline">home</a>
        <span>›</span>
        <a href="#" className="hover:underline">jobs</a>
        <span>›</span>
        <a href="#" className="hover:underline">administrative</a>
        <span>›</span>
        <a href="#" className="hover:underline">data-entry-employees</a>
        <span>›</span>
        <span className="text-black font-medium">healthcare-finder</span>
      </nav>
    </div>
  </div>
);

const SearchSection = () => (
  <section className="bg-randstad-navy text-white py-12">
    <div className="container-custom">
      <div className="grid grid-cols-1 lg:grid-cols-[1fr_1fr_160px_160px] gap-4 items-end">
        <div className="space-y-2">
          <label className="text-[14px] font-medium">search for</label>
          <div className="relative">
            <input 
              type="text" 
              placeholder="job title or keyword" 
              className="w-full bg-white text-black py-3 px-4 rounded-sm focus:outline-none"
            />
          </div>
        </div>
        <div className="space-y-2">
          <label className="text-[14px] font-medium">where</label>
          <div className="relative">
            <input 
              type="text" 
              placeholder="city, state or postcode" 
              className="w-full bg-white text-black py-3 px-4 rounded-sm focus:outline-none"
            />
          </div>
        </div>
        <div className="space-y-2">
          <label className="text-[14px] font-medium">range</label>
          <div className="relative">
            <select className="w-full bg-white text-black py-3 px-4 rounded-sm appearance-none focus:outline-none">
              <option>10 km</option>
              <option>25 km</option>
              <option>50 km</option>
            </select>
            <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 text-randstad-blue" size={20} />
          </div>
        </div>
        <button className="bg-randstad-blue hover:bg-blue-600 transition-colors py-3 px-6 rounded-sm font-medium text-[15px]">
          search 0 jobs
        </button>
      </div>
      <button className="mt-4 flex items-center gap-2 text-[14px] hover:underline">
        <MapPin size={16} />
        use current location
      </button>
    </div>
  </section>
);

const FilterBar = () => (
  <div className="bg-white border-b border-gray-100 py-6">
    <div className="container-custom">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div className="flex items-center gap-4">
          <span className="text-[15px] font-medium">filters:</span>
          <button className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-full text-[14px] hover:bg-gray-50">
            location <ChevronDown size={16} />
          </button>
          <button className="px-4 py-2 border border-gray-300 rounded-full text-[14px] hover:bg-gray-50">
            all filters
          </button>
        </div>
        <div className="flex items-center gap-6">
          <button className="bg-randstad-blue text-white px-6 py-2.5 rounded-sm font-medium text-[14px] hover:bg-blue-600">
            save this search & get alerts
          </button>
          <div className="flex items-center gap-4">
            <Heart size={20} className="text-gray-400" />
            <User size={20} className="text-gray-400" />
          </div>
        </div>
      </div>
      
      <div className="mt-6 flex items-center gap-4 flex-wrap">
        <span className="text-[14px] font-medium">selected filters:</span>
        {['administrative', 'data entry employees', 'healthcare-finder'].map((filter) => (
          <div key={filter} className="flex items-center gap-2 bg-blue-50 text-randstad-navy px-3 py-1 rounded-full text-[13px] border border-blue-100">
            {filter} <X size={14} className="cursor-pointer" />
          </div>
        ))}
        <button className="text-randstad-blue text-[14px] hover:underline ml-2">clear all</button>
      </div>
    </div>
  </div>
);

const NoResults = () => (
  <section className="bg-white py-20">
    <div className="container-custom grid grid-cols-1 md:grid-cols-[300px_1fr] gap-12">
      <h2 className="text-[32px] font-light text-randstad-navy leading-tight">
        no results found
      </h2>
      <div className="max-w-2xl space-y-8">
        <p className="text-[18px] text-gray-700 leading-relaxed">
          We did not find any jobs with these filters. You may want to change your filter criteria to get more results. The following actions may help:
        </p>
        <ul className="space-y-4">
          {[
            'consider removing some of the filters you have applied.',
            'have you searched for jobs in a specific location? consider expanding the range around the location.',
            'change the job title or keywords and check if it was spelled correctly.'
          ].map((item, i) => (
            <li key={i} className="flex items-start gap-3 text-[16px] text-gray-700">
              <Check className="text-randstad-blue mt-1 shrink-0" size={18} />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  </section>
);

const AlertCTA = () => (
  <section className="bg-randstad-yellow py-16 overflow-hidden relative">
    <div className="container-custom grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
      <div className="space-y-6 z-10">
        <h2 className="text-[48px] font-light text-randstad-navy leading-[1.1]">
          let similar jobs come to you
        </h2>
        <p className="text-[18px] text-randstad-navy">
          we will keep you updated when we have similar job postings.
        </p>
        <button className="bg-randstad-navy text-white px-8 py-4 rounded-sm font-medium text-[16px] hover:bg-opacity-90 transition-all">
          set a saved search & alert
        </button>
      </div>
      <div className="relative flex justify-center lg:justify-end">
        <div className="relative w-[300px] h-[200px] sm:w-[400px] sm:h-[250px] bg-randstad-blue rounded-lg flex items-center justify-center">
           <Mail size={120} className="text-white" />
           <div className="absolute -top-12 left-1/2 -translate-x-1/2">
              <ArrowDown size={80} className="text-randstad-navy" />
           </div>
        </div>
      </div>
    </div>
  </section>
);

const Accordion = ({ title, children }: { title: string, children: React.ReactNode }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="border-b border-gray-200">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full py-6 flex items-center justify-between text-left group"
      >
        <span className="text-[20px] font-light text-randstad-navy group-hover:text-randstad-blue transition-colors">
          {title}
        </span>
        <ChevronDown 
          size={24} 
          className={`text-randstad-blue transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} 
        />
      </button>
      {isOpen && (
        <div className="pb-6 text-[16px] text-gray-600 leading-relaxed">
          {children}
        </div>
      )}
    </div>
  );
};

const InfoSections = () => (
  <div className="bg-white">
    {/* About Section */}
    <section className="py-20 border-b border-gray-100">
      <div className="container-custom grid grid-cols-1 md:grid-cols-[300px_1fr] gap-12">
        <h2 className="text-[28px] font-light text-randstad-navy">about healthcare jobs</h2>
        <div className="max-w-3xl space-y-8">
          <p className="text-[16px] text-gray-700 leading-relaxed">
            The healthcare industry in India is rapidly growing, offering abundant opportunities for various professionals. From healthcare assistants and nurses to data analysts and administrative roles, Randstad India connects you with leading hospitals and medical centers. Whether you're a seasoned professional or a newcomer to the field, explore positions that promise growth and fulfillment. Our experts are ready to guide you to the right job. <a href="#" className="text-randstad-blue underline">Read more about working in healthcare here</a>.
          </p>
          <div className="space-y-4">
            <h3 className="text-[18px] font-medium text-randstad-navy">healthcare jobs per city</h3>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {['Mumbai', 'Delhi', 'Bengaluru', 'Chennai'].map(city => (
                <li key={city}>
                  <a href="#" className="text-randstad-blue hover:underline flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-randstad-blue rounded-full"></span>
                    healthcare jobs in {city}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>

    {/* Earning Potential Section */}
    <section className="py-20 bg-[#f9f9f7]">
      <div className="container-custom grid grid-cols-1 md:grid-cols-[300px_1fr] gap-12">
        <h2 className="text-[28px] font-light text-randstad-navy leading-tight">earning potential in healthcare</h2>
        <div className="max-w-3xl">
          <p className="text-[16px] text-gray-700 leading-relaxed">
            Explore the financial prospects in the healthcare industry with Randstad's comprehensive salary trends reports. These reports offer insights into current salary data, industry benchmarks, and compensation trends, helping you to make informed career decisions. Stay ahead of market dynamics by accessing our <a href="#" className="text-randstad-blue underline">latest salary trends report</a>.
          </p>
        </div>
      </div>
    </section>

    {/* Best Jobs Accordions */}
    <section className="py-20">
      <div className="container-custom grid grid-cols-1 md:grid-cols-[300px_1fr] gap-12">
        <h2 className="text-[28px] font-light text-randstad-navy">best healthcare jobs</h2>
        <div className="max-w-3xl">
          <p className="text-[16px] text-gray-700 mb-8">Explore some of the top healthcare roles with Randstad India:</p>
          <div className="border-t border-gray-200">
            <Accordion title="registered general nurse">
              Content for registered general nurse jobs...
            </Accordion>
            <Accordion title="healthcare assistant">
              Content for healthcare assistant jobs...
            </Accordion>
            <Accordion title="data analyst">
              Content for data analyst jobs...
            </Accordion>
            <Accordion title="other healthcare roles">
              Content for other healthcare roles...
            </Accordion>
          </div>
        </div>
      </div>
    </section>

    {/* FAQ Accordions */}
    <section className="py-20 bg-white">
      <div className="container-custom grid grid-cols-1 md:grid-cols-[300px_1fr] gap-12">
        <h2 className="text-[28px] font-light text-randstad-navy leading-tight">want to find healthcare jobs near you?</h2>
        <div className="max-w-3xl">
          <p className="text-[16px] text-gray-700 mb-8">
            Randstad connects you to opportunities that align with your skills and career goals. Whether you're looking for clinical roles or administrative positions, <a href="#" className="text-randstad-blue underline">begin your healthcare career with us today!</a>
          </p>
          <div className="border-t border-gray-200">
            <Accordion title="how do I apply for a healthcare job?">
              To apply for a healthcare job, you can browse our current openings, upload your CV, and our consultants will reach out if your profile matches any requirements.
            </Accordion>
            <Accordion title="does our agency offer job search tips in healthcare?">
              Yes, we provide career advice, interview tips, and market insights specifically tailored for the healthcare sector.
            </Accordion>
          </div>
        </div>
      </div>
    </section>

    {/* Explore Jobs */}
    <section className="py-20">
      <div className="container-custom grid grid-cols-1 md:grid-cols-[300px_1fr] gap-12">
        <h2 className="text-[28px] font-light text-randstad-navy leading-tight">explore jobs in other fields</h2>
        <div className="max-w-3xl space-y-8">
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              'banking jobs', 'engineering jobs', 'retail jobs', 
              'supply chain & logistics jobs', 'manufacturing jobs', 
              'sales & marketing jobs', 'hr & admin support jobs'
            ].map(job => (
              <li key={job}>
                <a href="#" className="text-randstad-blue hover:underline flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-randstad-blue rounded-full"></span>
                  {job}
                </a>
              </li>
            ))}
          </ul>
          <button className="border border-randstad-blue text-randstad-blue px-8 py-3 rounded-sm font-medium hover:bg-blue-50 transition-colors">
            view all jobs
          </button>
        </div>
      </div>
    </section>
  </div>
);

export function Healthcare() {
  return (
    <div className="min-h-screen bg-white">
      <Breadcrumbs />
      <SearchSection />
      <FilterBar />
      <NoResults />
      <AlertCTA />
      <InfoSections />
    </div>
  );
}
