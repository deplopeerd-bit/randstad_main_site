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
  Check, 
  Linkedin, 
  ChevronRight,
  Menu
} from 'lucide-react';

const Accordion = ({ title, children }: { title: string, children: React.ReactNode }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="border-b border-gray-200 py-4">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex justify-between items-center text-left hover:text-blue-600 transition-colors"
      >
        <span className="text-xl font-medium text-[#141414]">{title}</span>
        <ChevronDown className={`w-6 h-6 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
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

export default function HealthCare() {
  const [selectedFilters, setSelectedFilters] = useState([
    'administrative',
    'data entry employees',
    'healthcare-finder'
  ]);

  const removeFilter = (filter: string) => {
    setSelectedFilters(selectedFilters.filter(f => f !== filter));
  };

  return (
    <div className="min-h-screen bg-white font-sans text-[#141414]">
      {/* Header */}
      <header className="border-b border-gray-100 sticky top-0 bg-white z-50">
        <div className="max-w-7xl mx-auto px-4 h-20 flex items-center justify-between">
          <div className="flex items-center gap-8">
            {/* Logo Placeholder */}
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-[#002855] flex items-center justify-center rounded-sm">
                <span className="text-white font-bold text-xl">r</span>
              </div>
              <span className="text-[#002855] font-bold text-2xl tracking-tighter">randstad</span>
            </div>
            
            <nav className="hidden lg:flex items-center gap-6 text-sm font-medium text-gray-600">
              <a href="#" className="hover:text-[#002855] flex items-center gap-1">find a job <ChevronDown className="w-4 h-4" /></a>
              <a href="#" className="hover:text-[#002855] flex items-center gap-1">for talent <ChevronDown className="w-4 h-4" /></a>
              <a href="#" className="hover:text-[#002855] flex items-center gap-1">for employer <ChevronDown className="w-4 h-4" /></a>
              <a href="#" className="hover:text-[#002855] flex items-center gap-1">resources <ChevronDown className="w-4 h-4" /></a>
              <a href="#" className="hover:text-[#002855] flex items-center gap-1">about us <ChevronDown className="w-4 h-4" /></a>
            </nav>
          </div>

          <div className="flex items-center gap-6 text-sm font-medium text-gray-600">
            <a href="#" className="hidden sm:block hover:text-[#002855]">contact us</a>
            <div className="flex items-center gap-4">
              <button className="flex items-center gap-1 hover:text-[#002855]">
                <Heart className="w-5 h-5" />
                <span className="hidden md:inline">0</span>
              </button>
              <button className="flex items-center gap-2 hover:text-[#002855]">
                <User className="w-5 h-5" />
                <span className="hidden md:inline">my randstad</span>
              </button>
              <button className="lg:hidden">
                <Menu className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Breadcrumbs */}
      <div className="bg-[#002855] text-white py-3">
        <div className="max-w-7xl mx-auto px-4 flex items-center gap-2 text-xs opacity-80">
          <a href="#" className="hover:underline">home</a>
          <span>&gt;</span>
          <a href="#" className="hover:underline">jobs</a>
          <span>&gt;</span>
          <a href="#" className="hover:underline">administrative</a>
          <span>&gt;</span>
          <a href="#" className="hover:underline">data-entry-employees</a>
          <span>&gt;</span>
          <span className="font-semibold">healthcare-finder</span>
        </div>
      </div>

      {/* Hero Search Section */}
      <section className="bg-[#002855] text-white pt-8 pb-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-end">
            <div className="md:col-span-4 space-y-2">
              <label className="text-sm font-medium opacity-90">search for</label>
              <div className="relative">
                <input 
                  type="text" 
                  placeholder="job title or keyword"
                  className="w-full bg-white text-[#141414] px-4 py-3 rounded-sm focus:outline-none"
                />
              </div>
            </div>
            <div className="md:col-span-4 space-y-2">
              <label className="text-sm font-medium opacity-90">where</label>
              <div className="relative">
                <input 
                  type="text" 
                  placeholder="city, state or postcode"
                  className="w-full bg-white text-[#141414] px-4 py-3 rounded-sm focus:outline-none"
                />
              </div>
            </div>
            <div className="md:col-span-2 space-y-2">
              <label className="text-sm font-medium opacity-90">range</label>
              <div className="relative">
                <select className="w-full bg-white text-[#141414] px-4 py-3 rounded-sm focus:outline-none appearance-none">
                  <option>10 km</option>
                  <option>25 km</option>
                  <option>50 km</option>
                  <option>100 km</option>
                </select>
                <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5 pointer-events-none" />
              </div>
            </div>
            <div className="md:col-span-2">
              <button className="w-full bg-[#2175d9] hover:bg-[#1a5eb0] text-white font-semibold py-3 px-6 rounded-sm transition-colors">
                search 0 jobs
              </button>
            </div>
          </div>
          <button className="mt-4 flex items-center gap-2 text-sm font-medium hover:underline">
            <MapPin className="w-4 h-4" />
            use current location
          </button>
        </div>
      </section>

      {/* Filters Section */}
      <section className="border-b border-gray-100 py-6">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              <span className="text-sm font-medium text-gray-500">filters:</span>
              <button className="flex items-center gap-2 border border-gray-300 px-4 py-2 rounded-full text-sm font-medium hover:bg-gray-50">
                location <ChevronDown className="w-4 h-4" />
              </button>
              <button className="flex items-center gap-2 border border-gray-300 px-4 py-2 rounded-full text-sm font-medium hover:bg-gray-50">
                all filters
              </button>
            </div>
            <div className="flex items-center gap-4">
              <button className="bg-[#2175d9] text-white px-6 py-2 rounded-sm text-sm font-semibold hover:bg-[#1a5eb0]">
                save this search & get alerts
              </button>
              <div className="flex items-center gap-4 text-gray-400">
                <Heart className="w-6 h-6 cursor-pointer hover:text-red-500" />
                <User className="w-6 h-6 cursor-pointer hover:text-[#002855]" />
              </div>
            </div>
          </div>

          {selectedFilters.length > 0 && (
            <div className="mt-6 flex flex-wrap items-center gap-3">
              <span className="text-sm font-medium text-gray-500">selected filters:</span>
              {selectedFilters.map(filter => (
                <button 
                  key={filter}
                  onClick={() => removeFilter(filter)}
                  className="flex items-center gap-2 bg-gray-100 px-3 py-1 rounded-full text-xs font-medium hover:bg-gray-200"
                >
                  {filter} <X className="w-3 h-3" />
                </button>
              ))}
              <button 
                onClick={() => setSelectedFilters([])}
                className="text-sm font-medium text-[#2175d9] hover:underline ml-2"
              >
                clear all
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 py-16">
        {/* No Results Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-24">
          <div className="lg:col-span-4">
            <h2 className="text-4xl font-light text-[#141414]">no results found</h2>
          </div>
          <div className="lg:col-span-8 space-y-6">
            <p className="text-lg text-gray-700 leading-relaxed">
              We did not find any jobs with these filters. You may want to change your filter criteria to get more results. The following actions may help:
            </p>
            <ul className="space-y-4">
              {[
                'consider removing some of the filters you have applied.',
                'have you searched for jobs in a specific location? consider expanding the range around the location.',
                'change the job title or keywords and check if it was spelled correctly.'
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-gray-700">
                  <Check className="w-5 h-5 text-teal-500 mt-1 shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Alert Banner */}
        <div className="bg-[#ffb81c] rounded-sm overflow-hidden mb-24 flex flex-col md:flex-row items-center">
          <div className="p-12 md:w-1/2 space-y-6">
            <h2 className="text-5xl font-light text-[#141414] leading-tight">let similar jobs come to you</h2>
            <p className="text-lg text-[#141414]">we will keep you updated when we have similar job postings.</p>
            <button className="bg-[#002855] text-white px-8 py-4 rounded-sm font-semibold hover:bg-[#001a38] transition-colors">
              set a saved search & alert
            </button>
          </div>
          <div className="md:w-1/2 h-full flex justify-center items-center p-12 bg-[#ffb81c]">
            <div className="relative w-64 h-64">
              {/* Simplified Email Icon Illustration */}
              <div className="absolute inset-0 bg-[#2175d9] rounded-2xl flex items-center justify-center">
                <Mail className="w-32 h-32 text-white" />
              </div>
              <div className="absolute -top-8 left-1/2 -translate-x-1/2">
                <ChevronDown className="w-16 h-16 text-[#002855] animate-bounce" />
              </div>
            </div>
          </div>
        </div>

        {/* About Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-24">
          <div className="lg:col-span-4">
            <h2 className="text-4xl font-light text-[#141414]">about healthcare jobs</h2>
          </div>
          <div className="lg:col-span-8 space-y-8">
            <p className="text-lg text-gray-700 leading-relaxed">
              The healthcare industry in India is rapidly growing, offering abundant opportunities for various professionals. From healthcare assistants and nurses to data analysts and administrative roles, Randstad India connects you with leading hospitals and medical centers. Whether you're a seasoned professional or a newcomer to the field, explore positions that promise growth and fulfillment. Our experts are ready to guide you to the right job. <a href="#" className="text-[#2175d9] hover:underline">Read more about working in healthcare here</a>.
            </p>
            <div className="space-y-4">
              <h3 className="text-xl font-medium">healthcare jobs per city</h3>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {['Mumbai', 'Delhi', 'Bengaluru', 'Chennai'].map(city => (
                  <li key={city}>
                    <a href="#" className="text-[#2175d9] hover:underline flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-[#2175d9] rounded-full"></div>
                      healthcare jobs in {city}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Earning Potential Section */}
        <div className="bg-[#f5f2ed] -mx-4 px-4 py-24 mb-24">
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12">
            <div className="lg:col-span-4">
              <h2 className="text-4xl font-light text-[#141414]">earning potential in healthcare</h2>
            </div>
            <div className="lg:col-span-8">
              <p className="text-lg text-gray-700 leading-relaxed">
                Explore the financial prospects in the healthcare industry with Randstad's comprehensive salary trends reports. These reports offer insights into current salary data, industry benchmarks, and compensation trends, helping you to make informed career decisions. Stay ahead of market dynamics by accessing our <a href="#" className="text-[#2175d9] hover:underline">latest salary trends report</a>.
              </p>
            </div>
          </div>
        </div>

        {/* Best Healthcare Jobs Accordion */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-24">
          <div className="lg:col-span-4">
            <h2 className="text-4xl font-light text-[#141414]">best healthcare jobs</h2>
          </div>
          <div className="lg:col-span-8">
            <p className="text-lg text-gray-700 mb-8">Explore some of the top healthcare roles with Randstad India:</p>
            <div className="space-y-2">
              <Accordion title="registered general nurse">
                <p>Information about registered general nurse roles, requirements, and opportunities in the healthcare sector.</p>
              </Accordion>
              <Accordion title="healthcare assistant">
                <p>Learn about the vital role of healthcare assistants and how to start your career in this rewarding field.</p>
              </Accordion>
              <Accordion title="data analyst">
                <p>Discover how data analysis is transforming healthcare and the skills needed for these specialized roles.</p>
              </Accordion>
              <Accordion title="other healthcare roles">
                <p>Explore a wide variety of other professional and support roles available within the healthcare industry.</p>
              </Accordion>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-24">
          <div className="lg:col-span-4">
            <h2 className="text-4xl font-light text-[#141414]">want to find healthcare jobs near you?</h2>
          </div>
          <div className="lg:col-span-8 space-y-8">
            <p className="text-lg text-gray-700 leading-relaxed">
              Randstad connects you to opportunities that align with your skills and career goals. Whether you're looking for clinical roles or administrative positions, <a href="#" className="text-[#2175d9] hover:underline">begin your healthcare career with us today!</a>
            </p>
            <div className="space-y-2">
              <Accordion title="how do I apply for a healthcare job?">
                <p>Applying is easy! Simply search for your desired role, upload your CV, and our consultants will review your application. We'll guide you through every step of the process.</p>
              </Accordion>
              <Accordion title="does our agency offer job search tips in healthcare?">
                <p>Yes, we provide extensive resources including interview preparation, CV writing tips, and industry-specific career advice to help you stand out.</p>
              </Accordion>
            </div>
          </div>
        </div>

        {/* Other Fields Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-24">
          <div className="lg:col-span-4">
            <h2 className="text-4xl font-light text-[#141414]">explore jobs in other fields</h2>
          </div>
          <div className="lg:col-span-8">
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                'banking jobs',
                'engineering jobs',
                'retail jobs',
                'supply chain & logistics jobs',
                'manufacturing jobs',
                'sales & marketing jobs',
                'hr & admin support jobs'
              ].map(field => (
                <li key={field}>
                  <a href="#" className="text-[#2175d9] hover:underline flex items-center gap-2 text-lg">
                    <div className="w-1.5 h-1.5 bg-[#2175d9] rounded-full"></div>
                    {field}
                  </a>
                </li>
              ))}
            </ul>
            <button className="mt-12 border border-[#2175d9] text-[#2175d9] px-8 py-3 rounded-sm font-semibold hover:bg-[#2175d9] hover:text-white transition-colors">
              view all jobs
            </button>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-[#001a38] text-white pt-20 pb-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-6 gap-12 mb-20">
            <div className="space-y-6">
              <h4 className="text-xl font-medium">find a job</h4>
              <ul className="space-y-3 text-sm opacity-70">
                <li><a href="#" className="hover:opacity-100">explore all jobs</a></li>
                <li><a href="#" className="hover:opacity-100">submit your cv</a></li>
                <li><a href="#" className="hover:opacity-100">join our team</a></li>
                <li><a href="#" className="hover:opacity-100">refer a friend</a></li>
              </ul>
              <h4 className="text-xl font-medium pt-6">for talents</h4>
              <ul className="space-y-3 text-sm opacity-70">
                <li><a href="#" className="hover:opacity-100">specialisms</a></li>
                <li><a href="#" className="hover:opacity-100">testimonials</a></li>
                <li><a href="#" className="hover:opacity-100">career advice</a></li>
                <li><a href="#" className="hover:opacity-100">beware of job scams</a></li>
              </ul>
            </div>

            <div className="space-y-6">
              <h4 className="text-xl font-medium">for employers</h4>
              <ul className="space-y-3 text-sm opacity-70">
                <li><a href="#" className="hover:opacity-100">submit a vacancy</a></li>
                <li><a href="#" className="hover:opacity-100">request a callback</a></li>
                <li><a href="#" className="hover:opacity-100">our services</a></li>
                <li><a href="#" className="hover:opacity-100">specialisms</a></li>
                <li><a href="#" className="hover:opacity-100">case studies</a></li>
                <li><a href="#" className="hover:opacity-100">testimonials</a></li>
              </ul>
            </div>

            <div className="space-y-6">
              <h4 className="text-xl font-medium">resources</h4>
              <ul className="space-y-3 text-sm opacity-70">
                <li><a href="#" className="hover:opacity-100">case studies</a></li>
                <li><a href="#" className="hover:opacity-100">press room</a></li>
                <li><a href="#" className="hover:opacity-100">blogs</a></li>
              </ul>
            </div>

            <div className="space-y-6">
              <h4 className="text-xl font-medium">workforce insights</h4>
              <ul className="space-y-3 text-sm opacity-70">
                <li><a href="#" className="hover:opacity-100">talent insights reports</a></li>
                <li><a href="#" className="hover:opacity-100">employer brand research reports</a></li>
                <li><a href="#" className="hover:opacity-100">salary trends reports</a></li>
                <li><a href="#" className="hover:opacity-100">ed&i reports</a></li>
                <li><a href="#" className="hover:opacity-100">workmonitor reports</a></li>
                <li><a href="#" className="hover:opacity-100">startup hiring trends</a></li>
                <li><a href="#" className="hover:opacity-100">talent pulse surveys</a></li>
              </ul>
            </div>

            <div className="space-y-6">
              <h4 className="text-xl font-medium">jobs</h4>
              <ul className="space-y-3 text-sm opacity-70">
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

          <div className="border-t border-white/10 pt-12">
            <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-8">
              <div className="flex items-center gap-4">
                <a href="#" className="bg-white/10 p-2 rounded-full hover:bg-white/20 transition-colors">
                  <Linkedin className="w-5 h-5" />
                </a>
              </div>
              <div className="text-xs opacity-50 space-y-4">
                <p>registered office: Randstad India Private Limited, CIN U74210TN1992PTC023097, Randstad House, Old No. 5 & 5A, New No. 9, Pycrofts Garden Road, Nungambakkam, Chennai, TN - 600 006</p>
                <p>RANDSTAD, HUMAN FORWARD and SHAPING THE WORLD OF WORK are registered trademarks of Randstad N.V. 2023</p>
              </div>
            </div>

            <div className="mt-12 flex flex-wrap gap-x-8 gap-y-4 text-xs opacity-70">
              <a href="#" className="hover:underline">terms & conditions</a>
              <a href="#" className="hover:underline">cookies</a>
              <a href="#" className="hover:underline">misconduct reporting procedure</a>
              <a href="#" className="hover:underline">accessibility</a>
              <a href="#" className="hover:underline">be aware</a>
              <a href="#" className="hover:underline">sitemap</a>
              <a href="#" className="hover:underline">privacy statement</a>
            </div>
          </div>
        </div>
      </footer>

      {/* Floating Feedback Button */}
      <button className="fixed right-0 top-1/2 -translate-y-1/2 bg-[#2175d9] text-white px-2 py-8 rounded-l-md text-xs font-bold [writing-mode:vertical-rl] rotate-180 hover:bg-[#1a5eb0] transition-colors z-40">
        feedback
      </button>

      {/* Cookie Consent Icon */}
      <button className="fixed bottom-6 left-6 bg-[#2175d9] text-white p-3 rounded-full shadow-lg hover:scale-110 transition-transform z-40">
        <div className="w-6 h-6 border-2 border-white rounded-full border-dashed flex items-center justify-center">
          <div className="w-2 h-2 bg-white rounded-full"></div>
        </div>
      </button>
    </div>
  );
}
