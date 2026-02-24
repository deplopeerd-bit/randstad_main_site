import React, { useState } from "react";
import { AnimatePresence, motion } from "motion/react";

import { 
  Search, 
  MapPin, 
  Heart, 
  User, 
  ChevronDown, 
  X, 
  Mail, 
  Linkedin, 
  ChevronRight,
  Info,
  Check
} from 'lucide-react';

const LegalJobs = () => {
  const [activeAccordion, setActiveAccordion] = useState<string | null>(null);

  const toggleAccordion = (id: string) => {
    setActiveAccordion(activeAccordion === id ? null : id);
  };

  const selectedFilters = ['legal', 'lawyers', 'legal-advisor'];
  const cities = ['Mumbai', 'Delhi', 'Bengaluru', 'Chennai'];
  const jobCategories = [
    'banking jobs',
    'engineering jobs',
    'retail jobs',
    'supply chain & logistics jobs',
    'manufacturing jobs',
    'sales & marketing jobs',
    'hr & admin support jobs'
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
    <div className="min-h-screen bg-white font-sans text-[#141414]">
      {/* Top Header */}
      <header className="border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-end py-2 text-[11px] text-gray-500 space-x-4">
            <a href="#" className="hover:underline">contact us</a>
          </div>
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-8">
              <div className="flex items-center">
                <svg width="140" height="32" viewBox="0 0 140 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12.5 5.5C12.5 4.11929 13.6193 3 15 3H25C26.3807 3 27.5 4.11929 27.5 5.5V26.5C27.5 27.8807 26.3807 29 25 29H15C13.6193 29 12.5 27.8807 12.5 26.5V5.5Z" fill="#21409A"/>
                  <path d="M0 5.5C0 4.11929 1.11929 3 2.5 3H12.5V29H2.5C1.11929 29 0 27.8807 0 26.5V5.5Z" fill="#00AEEF"/>
                  <text x="35" y="24" fontFamily="Arial" fontSize="22" fontWeight="bold" fill="#21409A">randstad</text>
                </svg>
              </div>
              <nav className="hidden md:flex space-x-6 text-sm font-medium text-gray-600">
                <a href="#" className="flex items-center hover:text-[#21409A]">find a job <ChevronDown size={14} className="ml-1" /></a>
                <a href="#" className="flex items-center hover:text-[#21409A]">for talent <ChevronDown size={14} className="ml-1" /></a>
                <a href="#" className="flex items-center hover:text-[#21409A]">for employer <ChevronDown size={14} className="ml-1" /></a>
                <a href="#" className="flex items-center hover:text-[#21409A]">resources <ChevronDown size={14} className="ml-1" /></a>
                <a href="#" className="flex items-center hover:text-[#21409A]">about us <ChevronDown size={14} className="ml-1" /></a>
              </nav>
            </div>
            <div className="flex items-center space-x-6">
              <div className="flex items-center space-x-1 text-gray-600 cursor-pointer hover:text-[#21409A]">
                <Heart size={20} />
                <span className="text-sm">0</span>
              </div>
              <div className="flex items-center space-x-1 text-gray-600 cursor-pointer hover:text-[#21409A]">
                <User size={20} />
                <span className="text-sm font-medium">my randstad</span>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Breadcrumbs */}
      <div className="bg-[#001E46] text-white py-3">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-[11px] flex items-center space-x-2 opacity-80">
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
      </div>

      {/* Search Section */}
      <div className="bg-[#001E46] text-white pb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-4 mt-6">
            <div className="md:col-span-4">
              <label className="block text-xs font-medium mb-2 opacity-90">search for</label>
              <div className="relative">
                <input 
                  type="text" 
                  placeholder="job title or keyword" 
                  className="w-full bg-white text-gray-900 py-3 px-4 rounded-sm focus:outline-none"
                />
              </div>
            </div>
            <div className="md:col-span-4">
              <label className="block text-xs font-medium mb-2 opacity-90">where</label>
              <div className="relative">
                <input 
                  type="text" 
                  placeholder="city, state or postcode" 
                  className="w-full bg-white text-gray-900 py-3 px-4 rounded-sm focus:outline-none"
                />
              </div>
            </div>
            <div className="md:col-span-2">
              <label className="block text-xs font-medium mb-2 opacity-90">range</label>
              <div className="relative">
                <select className="w-full bg-white text-gray-900 py-3 px-4 rounded-sm appearance-none focus:outline-none">
                  <option>10 km</option>
                  <option>25 km</option>
                  <option>50 km</option>
                </select>
                <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500" size={16} />
              </div>
            </div>
            <div className="md:col-span-2 flex items-end">
              <button className="w-full bg-[#2478CC] hover:bg-[#1e63a8] text-white font-medium py-3 px-4 rounded-sm transition-colors">
                search 0 jobs
              </button>
            </div>
          </div>
          <div className="mt-4 flex items-center text-xs text-white opacity-90 cursor-pointer hover:opacity-100">
            <MapPin size={14} className="mr-1" />
            <span className="underline">use current location</span>
          </div>
        </div>
      </div>

      {/* Filters Section */}
      <div className="border-b border-gray-200 py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center space-x-4">
            <span className="text-sm font-medium">filters:</span>
            <button className="flex items-center border border-gray-300 rounded-full px-4 py-1.5 text-sm hover:bg-gray-50">
              location <ChevronDown size={14} className="ml-2" />
            </button>
            <button className="flex items-center border border-gray-300 rounded-full px-4 py-1.5 text-sm hover:bg-gray-50">
              all filters
            </button>
          </div>
          <button className="bg-[#2478CC] hover:bg-[#1e63a8] text-white text-sm font-medium py-2 px-6 rounded-sm transition-colors">
            save this search & get alerts
          </button>
        </div>
      </div>

      {/* Selected Filters */}
      <div className="py-4 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          <div className="flex items-center flex-wrap gap-3">
            <span className="text-xs font-medium text-gray-500">selected filters:</span>
            {selectedFilters.map(filter => (
              <div key={filter} className="flex items-center bg-gray-100 rounded-full px-3 py-1 text-xs text-gray-700">
                {filter}
                <X size={12} className="ml-2 cursor-pointer hover:text-black" />
              </div>
            ))}
          </div>
          <button className="text-xs text-[#2478CC] hover:underline font-medium">clear all</button>
        </div>
      </div>

      {/* Main Content Area */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* No Results Section */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-20">
          <div className="md:col-span-3">
            <h2 className="text-2xl font-light text-gray-800">no results found</h2>
          </div>
          <div className="md:col-span-9">
            <p className="text-gray-600 mb-6">
              We did not find any jobs with these filters. You may want to change your filter criteria to get more results. The following actions may help:
            </p>
            <ul className="space-y-4">
              <li className="flex items-start">
                <Check size={18} className="text-[#2478CC] mr-3 mt-1 shrink-0" />
                <span className="text-gray-700">consider removing some of the filters you have applied.</span>
              </li>
              <li className="flex items-start">
                <Check size={18} className="text-[#2478CC] mr-3 mt-1 shrink-0" />
                <span className="text-gray-700">have you searched for jobs in a specific location? consider expanding the range around the location.</span>
              </li>
              <li className="flex items-start">
                <Check size={18} className="text-[#2478CC] mr-3 mt-1 shrink-0" />
                <span className="text-gray-700">change the job title or keywords and check if it was spelled correctly.</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Similar Jobs Banner */}
       <section className="bg-[#ffc800] px-4 md:px-8 py-16 overflow-hidden relative">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between">

          <div className="md:w-1/2 space-y-6">
            <h2 className="text-5xl font-light text-[#001a3d]">
              let similar jobs come to you
            </h2>

            <p className="text-xl text-[#001a3d]">
              we will notify you when similar jobs are posted.
            </p>

            <button className="bg-[#001a3d] text-white font-bold px-8 py-4 rounded-sm hover:bg-[#002a5d] transition-colors">
              set a saved search & alert
            </button>
          </div>

          <div className="md:w-1/2 flex justify-center mt-12 md:mt-0">
            <div className="relative">
              <div className="bg-[#2175d9] w-64 h-48 rounded-lg flex items-center justify-center shadow-xl">
                <Mail className="text-white w-24 h-24" />
              </div>

              <motion.div
                animate={{ y: [0, 12, 0] }}
                transition={{ repeat: Infinity, duration: 2 }}
                className="absolute -top-10 left-1/2 -translate-x-1/2 text-[#001a3d]"
              >
                <ChevronDown className="w-16 h-16" />
              </motion.div>
            </div>
          </div>
        </div>
      </section>

        {/* About Legal Jobs Section */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-20">
          <div className="md:col-span-3">
            <h2 className="text-2xl font-light text-gray-800">about legal jobs</h2>
          </div>
          <div className="md:col-span-9">
            <p className="text-gray-600 leading-relaxed mb-4">
              The legal sector in India offers dynamic roles for professionals passionate about law, justice, and compliance. From legal advisors to compliance officers and contract managers, Randstad India partners with leading firms to connect you with positions that suit your expertise. Our consultants are dedicated to matching you with opportunities that support your career ambitions in the legal field.
            </p>
            <a href="#" className="text-[#2478CC] hover:underline font-medium block mb-8">Read more about working in legal here</a>
            
            <h3 className="text-lg font-medium text-gray-800 mb-4">legal jobs per city</h3>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {cities.map(city => (
                <li key={city} className="flex items-center">
                  <span className="w-1.5 h-1.5 bg-[#2478CC] rounded-full mr-3"></span>
                  <a href="#" className="text-[#2478CC] hover:underline">legal jobs in {city}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Earning Potential Section */}
        <div className="bg-gray-50 -mx-4 sm:-mx-6 lg:-mx-8 px-4 sm:px-6 lg:px-8 py-16 mb-20">
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-8">
            <div className="md:col-span-3">
              <h2 className="text-2xl font-light text-gray-800">earning potential in legal</h2>
            </div>
            <div className="md:col-span-9">
              <p className="text-gray-600 leading-relaxed">
                Explore the financial prospects in the legal sector with Randstad's comprehensive salary trends reports. These reports offer crucial insights into current salary data, industry benchmarks, and compensation trends. Access our <a href="#" className="text-[#2478CC] hover:underline font-medium">latest salary trends report</a>.
              </p>
            </div>
          </div>
        </div>

        {/* Best Legal Jobs Section */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-20">
          <div className="md:col-span-3">
            <h2 className="text-2xl font-light text-gray-800">best legal jobs</h2>
          </div>
          <div className="md:col-span-9">
            <p className="text-gray-600 mb-8">Explore some of the top legal roles with Randstad India:</p>
            <div className="space-y-0 border-t border-gray-200">
              {['legal secretary', 'analyst', 'business analyst', 'contract manager', 'other legal roles'].map((role) => (
                <div key={role} className="border-b border-gray-200">
                  <button 
                    onClick={() => toggleAccordion(role)}
                    className="w-full flex items-center justify-between py-6 text-left hover:text-[#2478CC] transition-colors"
                  >
                    <span className="text-xl font-light">{role}</span>
                    <ChevronDown 
                      size={24} 
                      className={`transition-transform duration-300 ${activeAccordion === role ? 'rotate-180' : ''}`} 
                    />
                  </button>
                  <AnimatePresence>
                    {activeAccordion === role && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <div className="pb-6 text-gray-600">
                          Detailed information about {role} opportunities and requirements would go here.
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-20">
          <div className="md:col-span-3">
            <h2 className="text-2xl font-light text-gray-800 leading-tight">want to find legal jobs near you?</h2>
          </div>
          <div className="md:col-span-9">
            <p className="text-gray-600 leading-relaxed mb-8">
              Randstad connects you to opportunities that align with your skills and career aspirations. Whether you're aiming for advisory or management roles, <a href="#" className="text-[#2478CC] hover:underline font-medium">begin your legal career with us today!</a>
            </p>
            <div className="space-y-0 border-t border-gray-200">
              {['how do I apply for a legal job?', 'does our agency offer job search tips in legal?'].map((q) => (
                <div key={q} className="border-b border-gray-200">
                  <button 
                    onClick={() => toggleAccordion(q)}
                    className="w-full flex items-center justify-between py-6 text-left hover:text-[#2478CC] transition-colors"
                  >
                    <span className="text-xl font-light">{q}</span>
                    <ChevronDown 
                      size={24} 
                      className={`transition-transform duration-300 ${activeAccordion === q ? 'rotate-180' : ''}`} 
                    />
                  </button>
                  <AnimatePresence>
                    {activeAccordion === q && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <div className="pb-6 text-gray-600">
                          Answer to "{q}" would be provided here with helpful guidance.
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Job Categories List */}
        <div className="flex justify-center mb-20">
          <div className="w-full max-w-md">
            <ul className="space-y-4">
              {jobCategories.map(cat => (
                <li key={cat} className="flex items-center">
                  <span className="w-1.5 h-1.5 bg-[#2478CC] rounded-full mr-3"></span>
                  <a href="#" className="text-[#2478CC] hover:underline">{cat}</a>
                </li>
              ))}
            </ul>
            <button className="mt-8 w-full border border-[#2478CC] text-[#2478CC] py-3 px-6 rounded-sm font-medium hover:bg-[#2478CC] hover:text-white transition-all">
              view all jobs
            </button>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-[#001E46] text-white pt-20 pb-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-12 mb-20">
            {Object.entries(footerLinks).map(([title, links]) => (
              <div key={title}>
                <h4 className="text-lg font-medium mb-6">{title}</h4>
                <ul className="space-y-3">
                  {links.map(link => (
                    <li key={link}>
                      <a href="#" className="text-sm opacity-70 hover:opacity-100 transition-opacity">{link}</a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="border-t border-white/10 pt-10 mb-10">
            <div className="flex items-center mb-10">
              <a href="#" className="bg-white/10 p-2 rounded-sm hover:bg-white/20 transition-colors">
                <Linkedin size={20} />
              </a>
            </div>
            
            <div className="text-[11px] opacity-60 space-y-6 max-w-4xl">
              <p>registered office: Randstad India Private Limited, CIN U74210TN1992PTC023097,/Randstad House, Old No. 5 & 5A, New No. 9, Pycrofts Garden Road, Nungambakkam, Chennai, TN - 600 006</p>
              
              <div className="flex items-center space-x-2">
                <span className="font-bold">RANDSTAD,</span>
                <svg width="24" height="16" viewBox="0 0 24 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M0 2C0 0.89543 0.89543 0 2 0H10V16H2C0.89543 16 0 15.1046 0 14V2Z" fill="#00AEEF"/>
                  <path d="M10 0H18C19.1046 0 20 0.89543 20 2V14C20 15.1046 19.1046 16 18 16H10V0Z" fill="#21409A"/>
                </svg>
                <span>HUMAN FORWARD and SHAPING THE WORLD OF WORK are registered trademarks of © Randstad N.V.2023</span>
              </div>

              <div className="space-y-4">
                <p>
                  <span className="font-bold">Security Advice:</span> Randstad India does not charge any fee at any stage of its recruitment process from the candidate nor allows their employees to collect any fees from any candidates. <a href="#" className="underline">Click here to know more</a>
                </p>
                <p>
                  <span className="font-bold">EEO Statement:</span> Randstad India is an Equal Employment Opportunity Employer. All qualified applicants receive consideration for employment without regard to race, color, religion, sex, sexual orientation, gender identity or expression, appearance, national origin, age, marital status, veteran status, or disability status, or any other characteristics. Our global mission is to become the world's most equitable and specialized talent company, and we actively embrace diversity and inclusion as the cornerstones of our success. To read more of Randstad India's work in the space of equity, diversity and inclusion please <a href="#" className="underline">click here</a>
                </p>
              </div>
            </div>
          </div>

          <div className="flex flex-wrap gap-x-8 gap-y-4 text-[11px] opacity-60">
            <a href="#" className="hover:underline">terms & conditions</a>
            <a href="#" className="hover:underline">cookies</a>
            <a href="#" className="hover:underline">misconduct reporting procedure</a>
            <a href="#" className="hover:underline">accessibility</a>
            <a href="#" className="hover:underline">be aware</a>
            <a href="#" className="hover:underline">sitemap</a>
            <a href="#" className="hover:underline">privacy statement</a>
          </div>
        </div>
      </footer>

      {/* Floating Feedback & Cookie Buttons */}
      <div className="fixed right-0 top-1/2 -translate-y-1/2 z-50">
        <button className="bg-[#2478CC] text-white py-4 px-2 rounded-l-md text-xs font-bold vertical-text tracking-widest shadow-lg hover:bg-[#1e63a8] transition-colors">
          FEEDBACK
        </button>
      </div>
      <div className="fixed left-4 bottom-4 z-50">
        <button className="bg-[#2478CC] text-white p-3 rounded-full shadow-xl hover:scale-110 transition-transform">
          <Info size={24} />
        </button>
      </div>

      <style>{`
        .vertical-text {
          writing-mode: vertical-rl;
          text-orientation: mixed;
          transform: rotate(180deg);
        }
      `}</style>
    </div>
  );
};

export default LegalJobs;
