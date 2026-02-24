import React, { useState } from "react";
import { AnimatePresence, motion } from "motion/react";

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
  ChevronRight,
  Menu,
  Phone
} from 'lucide-react';

const SupplyChainLogistic: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeAccordion, setActiveAccordion] = useState<string | null>(null);

  const toggleAccordion = (id: string) => {
    setActiveAccordion(activeAccordion === id ? null : id);
  };

  const filters = [
    "work planners and draughtsmen",
    "work planners and draughtsmen",
    "supply-chain-specialist"
  ];

  return (
    <div className="min-h-screen bg-white font-sans text-[#141414]">
      {/* Top Utility Nav */}

      {/* Main Header */}
      

      {/* Breadcrumbs */}
      <div className="bg-[#001b3d] text-white/70 text-[10px] px-4 md:px-8 py-3 uppercase tracking-wider">
        <div className="max-w-7xl mx-auto flex items-center space-x-2">
          <span>home</span>
          <span>/</span>
          <span>jobs</span>
          <span>/</span>
          <span>work-planners-and-draughtsmen</span>
          <span>/</span>
          <span>work-planners-and-draughtsmen</span>
          <span>/</span>
          <span className="text-white">supply-chain-specialist</span>
        </div>
      </div>

      {/* Search Section */}
      <section className="bg-[#001b3d] text-white px-4 md:px-8 py-10">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-end">
            <div className="md:col-span-4 space-y-2">
              <label className="text-xs font-semibold uppercase tracking-wide">search for</label>
              <div className="relative">
                <input 
                  type="text" 
                  placeholder="job title or keyword" 
                  className="w-full bg-white text-gray-900 px-4 py-3 rounded-sm focus:outline-none"
                />
              </div>
            </div>
            <div className="md:col-span-4 space-y-2">
              <label className="text-xs font-semibold uppercase tracking-wide">where</label>
              <div className="relative">
                <input 
                  type="text" 
                  placeholder="city, state or postcode" 
                  className="w-full bg-white text-gray-900 px-4 py-3 rounded-sm focus:outline-none"
                />
              </div>
            </div>
            <div className="md:col-span-2 space-y-2">
              <label className="text-xs font-semibold uppercase tracking-wide">range</label>
              <div className="relative">
                <select className="w-full bg-white text-gray-900 px-4 py-3 rounded-sm appearance-none focus:outline-none">
                  <option>10 km</option>
                  <option>25 km</option>
                  <option>50 km</option>
                </select>
                <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
              </div>
            </div>
            <div className="md:col-span-2">
              <button className="w-full bg-[#2c7be5] hover:bg-[#1a68d1] text-white font-semibold py-3 px-6 rounded-sm transition-colors">
                search 0 jobs
              </button>
            </div>
          </div>
          <button className="mt-4 flex items-center text-xs font-medium hover:underline">
            <MapPin size={14} className="mr-1" /> use current location
          </button>
        </div>
      </section>

      {/* Filter Bar */}
      <div className="bg-white border-b border-gray-100 px-4 md:px-8 py-4">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center space-x-4">
            <span className="text-sm text-gray-500">filters:</span>
            <button className="flex items-center px-4 py-2 border border-gray-300 rounded-full text-sm font-medium hover:bg-gray-50">
              location <ChevronDown size={16} className="ml-2" />
            </button>
            <button className="px-4 py-2 border border-gray-300 rounded-full text-sm font-medium hover:bg-gray-50">
              all filters
            </button>
          </div>
          <div className="flex items-center space-x-6">
            <button className="bg-[#2c7be5] hover:bg-[#1a68d1] text-white text-sm font-semibold py-2 px-6 rounded-sm transition-colors">
              save this search & get alerts
            </button>
            <div className="flex items-center space-x-4 text-gray-400">
              <Heart size={20} />
              <User size={20} />
            </div>
          </div>
        </div>
      </div>

      {/* Selected Filters */}
      <div className="bg-white px-4 md:px-8 py-4">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center gap-2">
          <span className="text-sm text-gray-500 mr-2">selected filters:</span>
          {filters.map((filter, index) => (
            <div key={index} className="flex items-center bg-gray-100 px-3 py-1 rounded-full text-xs font-medium text-gray-700">
              {filter}
              <button className="ml-2 hover:text-black">
                <X size={14} />
              </button>
            </div>
          ))}
          <button className="text-sm text-[#2c7be5] font-medium hover:underline ml-4">clear all</button>
        </div>
      </div>

      {/* No Results Content */}
      <main className="max-w-7xl mx-auto px-4 md:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-4">
            <h1 className="text-3xl font-light text-gray-800">no results found</h1>
          </div>
          <div className="lg:col-span-8 space-y-8">
            <p className="text-lg text-gray-600">
              We did not find any jobs with these filters. You may want to change your filter criteria to get more results. The following actions may help:
            </p>
            <ul className="space-y-4">
              <li className="flex items-start">
                <Check className="text-[#2c7be5] mt-1 mr-3 flex-shrink-0" size={20} />
                <span className="text-gray-700">consider removing some of the filters you have applied.</span>
              </li>
              <li className="flex items-start">
                <Check className="text-[#2c7be5] mt-1 mr-3 flex-shrink-0" size={20} />
                <span className="text-gray-700">have you searched for jobs in a specific location? consider expanding the range around the location.</span>
              </li>
              <li className="flex items-start">
                <Check className="text-[#2c7be5] mt-1 mr-3 flex-shrink-0" size={20} />
                <span className="text-gray-700">change the job title or keywords and check if it was spelled correctly.</span>
              </li>
            </ul>
          </div>
        </div>
      </main>

      {/* Yellow Banner */}
      <section className="bg-[#ffc800] py-16 px-4 md:px-8 overflow-hidden relative">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="space-y-6">
            <h2 className="text-5xl font-light text-[#001b3d] leading-tight">let similar jobs come to you</h2>
            <p className="text-lg text-[#001b3d]">we will keep you updated when we have similar job postings.</p>
            <button className="bg-[#001b3d] text-white font-semibold py-4 px-8 rounded-sm hover:bg-opacity-90 transition-all">
              set a saved search & alert
            </button>
          </div>
          <div className="relative flex justify-center md:justify-end">
            {/* Envelope Icon Graphic */}
            <div className="relative w-64 h-64 bg-[#2c7be5] rounded-lg flex items-center justify-center shadow-xl">
              <Mail size={120} className="text-white" />
              <div className="absolute -top-8 left-1/2 -translate-x-1/2">
                <ChevronDown size={80} className="text-[#001b3d]" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Info Sections */}
      <section className="py-20 px-4 md:px-8 space-y-32">
        {/* About Supply Chain */}
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-4">
            <h3 className="text-2xl font-light text-gray-800">about supply chain jobs</h3>
          </div>
          <div className="lg:col-span-8 space-y-6">
            <p className="text-gray-600 leading-relaxed">
              The supply chain industry in India is vital for maintaining the flow of goods and services, creating numerous opportunities for skilled professionals. From logistics managers to procurement specialists, Randstad India connects you with roles that enhance efficiency and innovation. Whether you're just starting out or looking to advance, explore positions that offer professional growth and stability. For personalized career consultations, reach out to our expert team for tailored advice. <a href="#" className="text-[#2c7be5] hover:underline">Read more about working in supply chain here</a>
            </p>
            <div className="space-y-4">
              <h4 className="font-semibold text-gray-800">supply chain jobs per city</h4>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                <li><a href="#" className="text-[#2c7be5] hover:underline flex items-center"><span className="w-1.5 h-1.5 bg-[#2c7be5] rounded-full mr-2"></span> supply chain jobs in Mumbai</a></li>
                <li><a href="#" className="text-[#2c7be5] hover:underline flex items-center"><span className="w-1.5 h-1.5 bg-[#2c7be5] rounded-full mr-2"></span> supply chain jobs in Delhi NCR</a></li>
                <li><a href="#" className="text-[#2c7be5] hover:underline flex items-center"><span className="w-1.5 h-1.5 bg-[#2c7be5] rounded-full mr-2"></span> supply chain jobs in Chennai</a></li>
                <li><a href="#" className="text-[#2c7be5] hover:underline flex items-center"><span className="w-1.5 h-1.5 bg-[#2c7be5] rounded-full mr-2"></span> supply chain jobs in Bengaluru</a></li>
              </ul>
            </div>
          </div>
        </div>

        {/* Earning Potential */}
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 bg-gray-50 p-8 md:p-12 rounded-sm">
          <div className="lg:col-span-4">
            <h3 className="text-2xl font-light text-gray-800">earning potential in supply chain</h3>
          </div>
          <div className="lg:col-span-8">
            <p className="text-gray-600 leading-relaxed">
              Explore the financial prospects in the supply chain industry with Randstad's comprehensive salary trends reports. These reports offer crucial insights into current salary data, industry benchmarks, and compensation trends, enabling you to make informed decisions in your career journey. Stay ahead of market dynamics by accessing our <a href="#" className="text-[#2c7be5] hover:underline">latest salary trends report</a>.
            </p>
          </div>
        </div>

        {/* Best Supply Chain Jobs Accordion */}
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-4">
            <h3 className="text-2xl font-light text-gray-800">best supply chain jobs</h3>
          </div>
          <div className="lg:col-span-8 space-y-4">
            <p className="text-gray-600 mb-6">Explore some of the top supply chain roles with Randstad India:</p>
            {['logistics manager', 'procurement manager', 'operations manager', 'other supply chain roles'].map((item) => (
              <div key={item} className="border-b border-gray-200">
                <button 
                  onClick={() => toggleAccordion(item)}
                  className="w-full py-4 flex items-center justify-between text-left hover:text-[#2c7be5] transition-colors"
                >
                  <span className="text-xl font-light">{item}</span>
                  <ChevronDown className={`transition-transform duration-300 ${activeAccordion === item ? 'rotate-180' : ''}`} />
                </button>
                <AnimatePresence>
                  {activeAccordion === item && (
                    <motion.div 
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="overflow-hidden"
                    >
                      <div className="pb-6 text-gray-600">
                        Detailed information about {item} would go here, explaining the role, requirements, and market demand in India.
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>

        {/* FAQs */}
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-4">
            <h3 className="text-2xl font-light text-gray-800">want to find supply chain jobs near you?</h3>
          </div>
          <div className="lg:col-span-8 space-y-6">
            <p className="text-gray-600">
              Randstad connects you to opportunities that align with your skills and career aspirations. Whether you're targeting logistics, procurement, or managerial roles, <a href="#" className="text-[#2c7be5] hover:underline">begin your supply chain career with us today!</a>
            </p>
            <div className="space-y-4">
              {['how do I apply for a supply chain job?', 'does our agency offer job search tips in supply chain?'].map((q) => (
                <div key={q} className="border-b border-gray-200">
                  <button 
                    onClick={() => toggleAccordion(q)}
                    className="w-full py-4 flex items-center justify-between text-left hover:text-[#2c7be5] transition-colors"
                  >
                    <span className="text-xl font-light">{q}</span>
                    <ChevronDown className={`transition-transform duration-300 ${activeAccordion === q ? 'rotate-180' : ''}`} />
                  </button>
                  <AnimatePresence>
                    {activeAccordion === q && (
                      <motion.div 
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="overflow-hidden"
                      >
                        <div className="pb-6 text-gray-600">
                          You can apply directly through our website by creating a profile and uploading your CV. We also offer various resources for job seekers including interview tips and resume building guides.
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Explore Other Fields */}
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-4">
            <h3 className="text-2xl font-light text-gray-800">explore jobs in other fields.</h3>
          </div>
          <div className="lg:col-span-8 space-y-6">
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {['engineering jobs', 'manufacturing jobs', 'retail jobs', 'finance & accounting jobs', 'healthcare jobs', 'hr & admin support jobs', 'sales & marketing jobs'].map((job) => (
                <li key={job}>
                  <a href="#" className="text-[#2c7be5] hover:underline flex items-center text-lg font-light">
                    <span className="w-1.5 h-1.5 bg-[#2c7be5] rounded-full mr-3"></span> {job}
                  </a>
                </li>
              ))}
            </ul>
            <button className="mt-8 border border-[#2c7be5] text-[#2c7be5] font-semibold py-3 px-10 rounded-sm hover:bg-[#2c7be5] hover:text-white transition-all">
              view all jobs
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#001b3d] text-white pt-20 pb-10 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-12 mb-20">
            <div className="space-y-4">
              <h5 className="text-lg font-semibold">find a job</h5>
              <ul className="space-y-2 text-sm text-white/70">
                <li><a href="#" className="hover:text-white">explore all jobs</a></li>
                <li><a href="#" className="hover:text-white">submit your cv</a></li>
                <li><a href="#" className="hover:text-white">join our team</a></li>
                <li><a href="#" className="hover:text-white">refer a friend</a></li>
              </ul>
              <h5 className="text-lg font-semibold pt-8">for talents</h5>
              <ul className="space-y-2 text-sm text-white/70">
                <li><a href="#" className="hover:text-white">specialisms</a></li>
                <li><a href="#" className="hover:text-white">testimonials</a></li>
                <li><a href="#" className="hover:text-white">career advice</a></li>
                <li><a href="#" className="hover:text-white">beware of job scams</a></li>
              </ul>
            </div>
            <div className="space-y-4">
              <h5 className="text-lg font-semibold">for employers</h5>
              <ul className="space-y-2 text-sm text-white/70">
                <li><a href="#" className="hover:text-white">submit a vacancy</a></li>
                <li><a href="#" className="hover:text-white">request a callback</a></li>
                <li><a href="#" className="hover:text-white">our services</a></li>
                <li><a href="#" className="hover:text-white">specialisms</a></li>
                <li><a href="#" className="hover:text-white">case studies</a></li>
                <li><a href="#" className="hover:text-white">testimonials</a></li>
              </ul>
              <h5 className="text-lg font-semibold pt-8">resources</h5>
              <ul className="space-y-2 text-sm text-white/70">
                <li><a href="#" className="hover:text-white">case studies</a></li>
                <li><a href="#" className="hover:text-white">press room</a></li>
                <li><a href="#" className="hover:text-white">blogs</a></li>
              </ul>
            </div>
            <div className="space-y-4">
              <h5 className="text-lg font-semibold">workforce insights</h5>
              <ul className="space-y-2 text-sm text-white/70">
                <li><a href="#" className="hover:text-white">talent insights reports</a></li>
                <li><a href="#" className="hover:text-white">employer brand research reports</a></li>
                <li><a href="#" className="hover:text-white">salary trends reports</a></li>
                <li><a href="#" className="hover:text-white">ed&i reports</a></li>
                <li><a href="#" className="hover:text-white">workmonitor reports</a></li>
                <li><a href="#" className="hover:text-white">startup hiring trends</a></li>
                <li><a href="#" className="hover:text-white">talent pulse surveys</a></li>
              </ul>
            </div>
            <div className="space-y-4">
              <h5 className="text-lg font-semibold">jobs</h5>
              <ul className="space-y-2 text-sm text-white/70">
                <li><a href="#" className="hover:text-white">engineering jobs</a></li>
                <li><a href="#" className="hover:text-white">cxo jobs</a></li>
                <li><a href="#" className="hover:text-white">manufacturing jobs</a></li>
                <li><a href="#" className="hover:text-white">supply chain & logistics jobs</a></li>
                <li><a href="#" className="hover:text-white">education jobs</a></li>
                <li><a href="#" className="hover:text-white">finance & accounting jobs</a></li>
                <li><a href="#" className="hover:text-white">healthcare jobs</a></li>
                <li><a href="#" className="hover:text-white">hr & admin support jobs</a></li>
                <li><a href="#" className="hover:text-white">ites/gcc jobs</a></li>
                <li><a href="#" className="hover:text-white">legal & compliance jobs</a></li>
                <li><a href="#" className="hover:text-white">sales & marketing jobs</a></li>
              </ul>
            </div>
            <div className="space-y-6">
              <div className="flex space-x-4">
                <a href="#" className="bg-white/10 p-2 rounded-full hover:bg-white/20 transition-colors">
                  <Linkedin size={20} />
                </a>
              </div>
              <div className="space-y-2">
                <p className="text-[10px] text-white/50 leading-relaxed">
                  registered office: Randstad India Private Limited, CIN U74210TN1992PTC023097,/Randstad House, Old No. 5 & 5A, New No. 9, Pycrofts Garden Road, Nungambakkam, Chennai, TN - 600 006
                </p>
                <p className="text-[10px] text-white/50 leading-relaxed">
                  RANDSTAD, human forward and SHAPING THE WORLD OF WORK are registered trademarks of © Randstad N.V. 2023
                </p>
              </div>
            </div>
          </div>

          <div className="border-t border-white/10 pt-10 space-y-8">
            <div className="space-y-4">
              <p className="text-xs text-white/60">
                <span className="font-bold text-white">Security Advice:</span> Randstad India does not charge any fee at any stage of its recruitment process from the candidate nor allows their employees to collect any fees from any candidates. <a href="#" className="underline">Click here to know more</a>
              </p>
              <p className="text-xs text-white/60">
                <span className="font-bold text-white">EEO Statement:</span> Randstad India is an Equal Employment Opportunity Employer. All qualified applicants receive consideration for employment without regard to race, color, religion, sex, sexual orientation, gender identity or expression, appearance, national origin, age, marital status, veteran status, or disability status, or any other characteristics. Our global mission is to become the world's most equitable and specialized talent company, and we actively embrace diversity and inclusion as the cornerstones of our success. To read more of Randstad India's work in the space of equity, diversity and inclusion please <a href="#" className="underline">click here</a>
              </p>
            </div>

            <div className="flex flex-wrap gap-x-8 gap-y-4 text-[10px] text-white/50 uppercase tracking-widest">
              <a href="#" className="hover:text-white">terms & conditions</a>
              <a href="#" className="hover:text-white">cookies</a>
              <a href="#" className="hover:text-white">misconduct reporting procedure</a>
              <a href="#" className="hover:text-white">accessibility</a>
              <a href="#" className="hover:text-white">be aware</a>
              <a href="#" className="hover:text-white">sitemap</a>
              <a href="#" className="hover:text-white">privacy statement</a>
            </div>
          </div>
        </div>
      </footer>

      {/* Floating Cookie/Help Button */}
      <button className="fixed bottom-6 left-6 bg-[#2c7be5] text-white p-3 rounded-full shadow-lg hover:scale-110 transition-transform z-50">
        <div className="w-6 h-6 border-2 border-white rounded-full flex items-center justify-center">
          <div className="w-2 h-2 bg-white rounded-full"></div>
        </div>
      </button>

      {/* Feedback Tab */}
      <button className="fixed right-0 top-1/2 -translate-y-1/2 bg-[#2c7be5] text-white px-2 py-6 rounded-l-md text-xs font-bold uppercase tracking-widest [writing-mode:vertical-rl] rotate-180 z-50">
        feedback
      </button>
    </div>
  );
};

export default SupplyChainLogistic;
