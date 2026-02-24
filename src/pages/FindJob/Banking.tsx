import { motion } from "motion/react";

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
  Linkedin, 
  Mail,
  ArrowDown
} from 'lucide-react';

export default function App() {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      {/* Breadcrumbs & Search Section */}
      <section className="bg-randstad-navy text-white pt-6 pb-12">
        <div className="max-w-[1280px] mx-auto px-4 md:px-8">
          {/* Breadcrumbs */}
          <div className="flex items-center gap-2 text-[12px] text-white/70 mb-8">
            <a href="#" className="hover:underline">home</a>
            <span>›</span>
            <a href="#" className="hover:underline">jobs</a>
            <span>›</span>
            <a href="#" className="hover:underline">business-management</a>
            <span>›</span>
            <a href="#" className="hover:underline">busineand-administrative-services-managers</a>
            <span>›</span>
            <span className="text-white">banker</span>
          </div>

          {/* Search Bar */}
          <div className="grid grid-cols-1 md:grid-cols-[1fr_1fr_120px_auto] gap-0 bg-white rounded-sm overflow-hidden mb-4">
            <div className="border-r border-gray-200 px-4 py-3 flex flex-col">
              <label className="text-[12px] text-randstad-navy font-semibold mb-1 uppercase tracking-wider">search for</label>
              <input 
                type="text" 
                placeholder="job title or keyword" 
                className="text-[16px] text-randstad-navy outline-none placeholder:text-gray-400"
                defaultValue="banker"
              />
            </div>
            <div className="border-r border-gray-200 px-4 py-3 flex flex-col">
              <label className="text-[12px] text-randstad-navy font-semibold mb-1 uppercase tracking-wider">where</label>
              <input 
                type="text" 
                placeholder="city, state or postcode" 
                className="text-[16px] text-randstad-navy outline-none placeholder:text-gray-400"
              />
            </div>
            <div className="border-r border-gray-200 px-4 py-3 flex flex-col">
              <label className="text-[12px] text-randstad-navy font-semibold mb-1 uppercase tracking-wider">range</label>
              <div className="flex items-center justify-between cursor-pointer">
                <span className="text-[16px] text-randstad-navy">10 km</span>
                <ChevronDown size={18} className="text-randstad-blue" />
              </div>
            </div>
            <button className="bg-randstad-blue hover:bg-blue-600 px-8 py-4 text-[16px] font-semibold transition-colors">
              search 0 jobs
            </button>
          </div>

          <div className="flex items-center gap-2 text-[14px] cursor-pointer hover:underline">
            <motion.div whileHover={{ scale: 1.1 }}>
              <MapPin size={16} className="text-white" />
            </motion.div>
            <span>use current location</span>
          </div>
        </div>
      </section>

      {/* Filters Bar */}
      <section className="bg-white border-b border-gray-200 py-4 sticky top-0 z-10 shadow-sm">
        <div className="max-w-[1280px] mx-auto px-4 md:px-8 flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <span className="text-[15px] text-randstad-navy font-medium">filters:</span>
            <button className="border border-randstad-navy rounded-full px-4 py-1.5 text-[14px] font-medium flex items-center gap-2 hover:bg-gray-50">
              location <ChevronDown size={14} />
            </button>
            <button className="border border-randstad-navy rounded-full px-4 py-1.5 text-[14px] font-medium hover:bg-gray-50">
              all filters
            </button>
          </div>

          <div className="flex items-center gap-6">
            <button className="bg-randstad-blue text-white px-6 py-2.5 rounded-sm text-[15px] font-semibold hover:bg-blue-600 transition-colors">
              save this search & get alerts
            </button>
            <div className="flex items-center gap-4">
              <Heart size={20} className="text-randstad-navy cursor-pointer" />
              <User size={20} className="text-randstad-navy cursor-pointer" />
            </div>
          </div>
        </div>

        {/* Selected Filters */}
        <div className="max-w-[1280px] mx-auto px-4 md:px-8 mt-4 flex flex-wrap items-center gap-3">
          <span className="text-[14px] text-randstad-navy font-medium">selected filters:</span>
          <div className="flex flex-wrap gap-2">
            {['business management', 'busineand-administrative-services-managers', 'banker'].map((filter) => (
              <div key={filter} className="bg-randstad-light-blue px-3 py-1 rounded-full flex items-center gap-2 text-[13px] text-randstad-navy">
                {filter}
                <X size={14} className="cursor-pointer" />
              </div>
            ))}
            <button className="text-[14px] text-randstad-blue underline ml-2">clear all</button>
          </div>
        </div>
      </section>

      {/* Main Content - No Results */}
      <main className="flex-grow py-20">
        <div className="max-w-[1280px] mx-auto px-4 md:px-8 grid grid-cols-1 md:grid-cols-[300px_1fr] gap-12">
          <h1 className="text-[32px] font-light text-randstad-navy">no results found</h1>
          
          <div className="max-w-2xl">
            <p className="text-[18px] text-randstad-navy mb-8 leading-relaxed">
              We did not find any jobs with these filters. You may want to change your filter criteria to get more results. The following actions may help:
            </p>
            
            <ul className="space-y-6">
              <li className="flex items-start gap-4">
                <div className="mt-1 text-randstad-blue">
                  <Check size={20} />
                </div>
                <span className="text-[16px] text-randstad-navy">consider removing some of the filters you have applied.</span>
              </li>
              <li className="flex items-start gap-4">
                <div className="mt-1 text-randstad-blue">
                  <Check size={20} />
                </div>
                <span className="text-[16px] text-randstad-navy">have you searched for jobs in a specific location? consider expanding the range around the location.</span>
              </li>
              <li className="flex items-start gap-4">
                <div className="mt-1 text-randstad-blue">
                  <Check size={20} />
                </div>
                <span className="text-[16px] text-randstad-navy">change the job title or keywords and check if it was spelled correctly.</span>
              </li>
            </ul>
          </div>
        </div>
      </main>

      {/* Yellow Alert Section */}
      <section className="bg-randstad-yellow py-20 overflow-hidden relative">
        <div className="max-w-[1280px] mx-auto px-4 md:px-8 grid grid-cols-1 md:grid-cols-2 items-center gap-12">
          <div>
            <h2 className="text-[64px] font-light text-randstad-navy leading-[1.1] mb-6">let similar jobs come to you</h2>
            <p className="text-[18px] text-randstad-navy mb-10">we will keep you updated when we have similar job postings.</p>
            <button className="bg-randstad-navy text-white px-8 py-4 text-[16px] font-semibold rounded-sm hover:bg-opacity-90 transition-all">
              set a saved search & alert
            </button>
          </div>
          
          <div className="relative flex justify-center md:justify-end">
            <div className="w-[400px] h-[300px] bg-randstad-blue rounded-lg relative flex items-center justify-center">
              <Mail size={180} className="text-white" strokeWidth={1} />
              <div className="absolute -top-12 right-12">
                <ArrowDown size={120} className="text-randstad-navy" strokeWidth={3} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-randstad-navy text-white pt-20 pb-10">
        <div className="max-w-[1280px] mx-auto px-4 md:px-8">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-8 gap-y-12 mb-20">
            {/* Column 1 */}
            <div>
              <h3 className="text-[20px] font-medium mb-6">find a job</h3>
              <ul className="space-y-4 text-[15px] text-white/80">
                <li><a href="#" className="hover:underline">explore all jobs</a></li>
                <li><a href="#" className="hover:underline">submit your cv</a></li>
                <li><a href="#" className="hover:underline">join our team</a></li>
                <li><a href="#" className="hover:underline">refer a friend</a></li>
              </ul>
              
              <h3 className="text-[20px] font-medium mt-12 mb-6">for talents</h3>
              <ul className="space-y-4 text-[15px] text-white/80">
                <li><a href="#" className="hover:underline">specialisms</a></li>
                <li><a href="#" className="hover:underline">testimonials</a></li>
                <li><a href="#" className="hover:underline">career advice</a></li>
                <li><a href="#" className="hover:underline">beware of job scams</a></li>
              </ul>
            </div>

            {/* Column 2 */}
            <div>
              <h3 className="text-[20px] font-medium mb-6">for employers</h3>
              <ul className="space-y-4 text-[15px] text-white/80">
                <li><a href="#" className="hover:underline">submit a vacancy</a></li>
                <li><a href="#" className="hover:underline">request a callback</a></li>
                <li><a href="#" className="hover:underline">our services</a></li>
                <li><a href="#" className="hover:underline">specialisms</a></li>
                <li><a href="#" className="hover:underline">case studies</a></li>
                <li><a href="#" className="hover:underline">testimonials</a></li>
              </ul>
              
              <h3 className="text-[20px] font-medium mt-12 mb-6">resources</h3>
              <ul className="space-y-4 text-[15px] text-white/80">
                <li><a href="#" className="hover:underline">case studies</a></li>
                <li><a href="#" className="hover:underline">press room</a></li>
                <li><a href="#" className="hover:underline">blogs</a></li>
              </ul>
            </div>

            {/* Column 3 */}
            <div>
              <h3 className="text-[20px] font-medium mb-6">workforce insights</h3>
              <ul className="space-y-4 text-[15px] text-white/80">
                <li><a href="#" className="hover:underline">talent insights reports</a></li>
                <li><a href="#" className="hover:underline">employer brand research reports</a></li>
                <li><a href="#" className="hover:underline">salary trends reports</a></li>
                <li><a href="#" className="hover:underline">ed&i reports</a></li>
                <li><a href="#" className="hover:underline">workmonitor reports</a></li>
                <li><a href="#" className="hover:underline">startup hiring trends</a></li>
                <li><a href="#" className="hover:underline">talent pulse surveys</a></li>
              </ul>
            </div>

            {/* Column 4 */}
            <div>
              <h3 className="text-[20px] font-medium mb-6">jobs</h3>
              <ul className="space-y-4 text-[15px] text-white/80">
                <li><a href="#" className="hover:underline">engineering jobs</a></li>
                <li><a href="#" className="hover:underline">cxo jobs</a></li>
                <li><a href="#" className="hover:underline">manufacturing jobs</a></li>
                <li><a href="#" className="hover:underline">supply chain & logistics jobs</a></li>
                <li><a href="#" className="hover:underline">education jobs</a></li>
                <li><a href="#" className="hover:underline">finance & accounting jobs</a></li>
                <li><a href="#" className="hover:underline">healthcare jobs</a></li>
                <li><a href="#" className="hover:underline">hr & admin support jobs</a></li>
                <li><a href="#" className="hover:underline">ites/gcc jobs</a></li>
                <li><a href="#" className="hover:underline">legal & compliance jobs</a></li>
                <li><a href="#" className="hover:underline">sales & marketing jobs</a></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-white/20 pt-10">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-10 h-10 bg-white/10 rounded-sm flex items-center justify-center cursor-pointer hover:bg-white/20 transition-colors">
                <Linkedin size={20} />
              </div>
            </div>

            <div className="text-[12px] text-white/60 space-y-6 max-w-5xl">
              <p>registered office: Randstad India Private Limited, CIN U74210TN1992PTC023097,/Randstad House, Old No. 5 & 5A, New No. 9, Pycrofts Garden Road, Nungambakkam, Chennai, TN - 600 006</p>
              
              <div className="flex items-center gap-2">
                <span className="font-bold">RANDSTAD,</span>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M4 6C4 4.89543 4.89543 4 6 4H8V6H6V18H8V20H6C4.89543 20 4 19.1046 4 18V6Z" fill="#2175D9"/>
                  <path d="M16 4H18C19.1046 4 20 4.89543 20 6V18C20 19.1046 19.1046 20 18 20H16V18H18V6H16V4Z" fill="#2175D9"/>
                </svg>
                <span>HUMAN FORWARD and SHAPING THE WORLD OF WORK are registered trademarks of © Randstad N.V.2023</span>
              </div>

              <p>
                <span className="font-bold">Security Advice:</span> Randstad India does not charge any fee at any stage of its recruitment process from the candidate nor allows their employees to collect any fees from any candidates. <a href="#" className="text-white/80 underline">Click here to know more</a>
              </p>
              
              <p>
                <span className="font-bold">EEO Statement:</span> Randstad India is an Equal Employment Opportunity Employer. All qualified applicants receive consideration for employment without regard to race, color, religion, sex, sexual orientation, gender identity or expression, appearance, national origin, age, marital status, veteran status, or disability status, or any other characteristics. Our global mission is to become the world's most equitable and specialized talent company, and we actively embrace diversity and inclusion as the cornerstones of our success. To read more of Randstad India's work in the space of equity, diversity and inclusion please <a href="#" className="text-white/80 underline">click here</a>
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-x-8 gap-y-4 mt-12 text-[13px] text-white/80">
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

      {/* Floating Elements */}
      <div className="fixed bottom-6 left-6 z-50">
        <div className="w-12 h-12 bg-randstad-blue rounded-full flex items-center justify-center shadow-lg cursor-pointer hover:scale-110 transition-transform">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 20C7.59 20 4 16.41 4 12C4 7.59 7.59 4 12 4C16.41 4 20 7.59 20 12C20 16.41 16.41 20 12 20ZM11 15H13V17H11V15ZM11 7H13V13H11V7Z" fill="white"/>
          </svg>
        </div>
      </div>

      <div className="fixed right-0 top-1/2 -translate-y-1/2 z-50">
        <div className="bg-randstad-blue text-white px-3 py-6 rounded-l-md cursor-pointer hover:pr-2 transition-all flex flex-col items-center gap-2 shadow-lg" style={{ writingMode: 'vertical-rl' }}>
          <span className="text-[14px] font-semibold tracking-widest uppercase">Feedback</span>
        </div>
      </div>
    </div>
  );
}
