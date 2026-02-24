import React, { useState } from "react";
import { AnimatePresence, motion } from "motion/react";

import { 
  MapPin, 
  ChevronDown, 
  Check, 
  Mail, 
  Linkedin,
  Heart,
  User
} from 'lucide-react';

const AccordionItem = ({ title, children }: { title: string, children: React.ReactNode }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="border-b border-gray-200 py-4">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="flex w-full items-center justify-between text-left text-xl font-medium text-randstad-navy hover:text-randstad-blue transition-colors"
      >
        <span>{title}</span>
        <ChevronDown className={`h-6 w-6 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
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

export default function Manufacturing() {
  return (
    <div className="min-h-screen bg-white">
      <main>
        {/* Search Section */}
        <section className="bg-randstad-navy text-white pt-8 pb-12">
          <div className="container-custom">
            {/* Breadcrumbs */}
            <nav className="flex items-center gap-2 text-[12px] text-gray-400 mb-8">
              <a href="#" className="hover:text-white">home</a>
              <span>&gt;</span>
              <a href="#" className="hover:text-white">jobs</a>
              <span>&gt;</span>
              <a href="#" className="hover:text-white">production-assembly</a>
              <span>&gt;</span>
              <a href="#" className="hover:text-white">production-workers</a>
              <span>&gt;</span>
              <span className="text-white">manufacturing-assistants</span>
            </nav>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 items-end">
              <div className="lg:col-span-4">
                <label className="block text-[14px] font-medium mb-2">search for</label>
                <div className="relative">
                  <input 
                    type="text" 
                    placeholder="job title or keyword" 
                    className="w-full h-14 bg-white text-randstad-navy px-4 rounded-sm focus:outline-none"
                  />
                </div>
              </div>
              <div className="lg:col-span-4">
                <label className="block text-[14px] font-medium mb-2">where</label>
                <div className="relative">
                  <input 
                    type="text" 
                    placeholder="city, state or postcode" 
                    className="w-full h-14 bg-white text-randstad-navy px-4 rounded-sm focus:outline-none"
                  />
                </div>
              </div>
              <div className="lg:col-span-2">
                <label className="block text-[14px] font-medium mb-2">range</label>
                <div className="relative">
                  <select className="w-full h-14 bg-white text-randstad-navy px-4 rounded-sm appearance-none focus:outline-none">
                    <option>10 km</option>
                    <option>25 km</option>
                    <option>50 km</option>
                  </select>
                  <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 h-5 w-5 text-randstad-blue pointer-events-none" />
                </div>
              </div>
              <div className="lg:col-span-2">
                <button className="w-full h-14 bg-randstad-blue hover:bg-blue-600 transition-colors rounded-sm font-bold text-[16px]">
                  search 0 jobs
                </button>
              </div>
            </div>
            <button className="mt-4 flex items-center gap-2 text-[14px] font-medium hover:underline">
              <MapPin className="h-4 w-4" /> use current location
            </button>
          </div>
        </section>

        {/* Filters Bar */}
        <section className="bg-white border-b border-gray-200 py-4 sticky top-20 z-40 shadow-sm">
          <div className="container-custom flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              <span className="text-[14px] font-medium">filters:</span>
              <button className="flex items-center gap-2 px-6 py-2 border border-randstad-navy rounded-full text-[14px] font-medium hover:bg-gray-50">
                location <ChevronDown className="h-4 w-4" />
              </button>
              <button className="flex items-center gap-2 px-6 py-2 border border-randstad-navy rounded-full text-[14px] font-medium hover:bg-gray-50">
                all filters
              </button>
            </div>
            <div className="flex items-center gap-4">
              <button className="bg-randstad-blue text-white px-6 py-2 rounded-sm text-[14px] font-bold hover:bg-blue-600 transition-colors">
                save this search & get alerts
              </button>
              <Heart className="h-6 w-6 text-gray-400 cursor-pointer hover:text-randstad-blue" />
              <User className="h-6 w-6 text-gray-400 cursor-pointer hover:text-randstad-blue" />
            </div>
          </div>
        </section>

        {/* No Results Section */}
        <section className="py-20">
          <div className="container-custom grid grid-cols-1 md:grid-cols-12 gap-12">
            <div className="md:col-span-4">
              <h2 className="text-4xl font-light text-randstad-navy">no results found</h2>
            </div>
            <div className="md:col-span-8 space-y-6">
              <p className="text-lg text-gray-700">
                We did not find any jobs with these filters. You may want to change your filter criteria to get more results. The following actions may help:
              </p>
              <ul className="space-y-4">
                {[
                  'consider removing some of the filters you have applied.',
                  'have you searched for jobs in a specific location? consider expanding the range around the location.',
                  'change the job title or keywords and check if it was spelled correctly.'
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-4">
                    <Check className="h-5 w-5 text-randstad-blue mt-1 shrink-0" />
                    <span className="text-lg text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Alert Banner */}
        <section className="bg-randstad-yellow py-16 overflow-hidden">
          <div className="container-custom grid grid-cols-1 md:grid-cols-2 gap-12 items-center relative">
            <div className="z-10">
              <h2 className="text-6xl font-light text-randstad-navy mb-6">let similar jobs come to you</h2>
              <p className="text-xl text-randstad-navy mb-10">we will keep you updated when we have similar job postings.</p>
              <button className="bg-randstad-navy text-white px-8 py-4 rounded-sm text-lg font-bold hover:bg-opacity-90 transition-colors">
                set a saved search & alert
              </button>
            </div>
            <div className="hidden md:flex justify-end relative">
              <div className="relative w-80 h-80 bg-randstad-blue rounded-lg flex items-center justify-center">
                <Mail className="h-48 w-48 text-white" />
                <div className="absolute -top-10 left-1/2 -translate-x-1/2">
                  <ChevronDown className="h-20 w-20 text-randstad-navy" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Content Sections */}
        <div className="divide-y divide-gray-100">
          {/* About Section */}
          <section className="py-20">
            <div className="container-custom grid grid-cols-1 md:grid-cols-12 gap-12">
              <div className="md:col-span-4">
                <h2 className="text-4xl font-light text-randstad-navy">about manufacturing jobs</h2>
              </div>
              <div className="md:col-span-8 space-y-8">
                <p className="text-lg text-gray-700 leading-relaxed">
                  The manufacturing industry in India is a cornerstone of economic growth, with numerous opportunities for skilled professionals. From production managers to maintenance engineers, Randstad India connects you to roles that drive efficiency and innovation. Whether you're starting your career or looking to step up, you can find permanent, temporary, or contract positions that align with your skills and aspirations. For personalized career consultations, reach out to our expert team for tailored advice. <a href="#" className="text-randstad-blue underline">Read more about working in manufacturing here</a>
                </p>
                <div>
                  <h3 className="text-xl font-medium mb-4">manufacturing jobs per city</h3>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {['Pune', 'Delhi', 'Chennai', 'Hyderabad'].map(city => (
                      <li key={city} className="flex items-center gap-2">
                        <div className="h-1.5 w-1.5 bg-randstad-blue rounded-full"></div>
                        <a href="#" className="text-randstad-blue underline hover:text-randstad-navy">manufacturing jobs in {city}</a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Earning Potential Section */}
          <section className="py-20 bg-gray-50">
            <div className="container-custom grid grid-cols-1 md:grid-cols-12 gap-12">
              <div className="md:col-span-4">
                <h2 className="text-4xl font-light text-randstad-navy">earning potential in manufacturing</h2>
              </div>
              <div className="md:col-span-8">
                <p className="text-lg text-gray-700 leading-relaxed">
                  Explore the financial prospects in the manufacturing industry with Randstad's comprehensive salary trends reports. These reports offer crucial insights into current salary data, industry benchmarks, and compensation trends, enabling you to make informed decisions in your career journey. Stay ahead of market dynamics by accessing our <a href="#" className="text-randstad-blue underline">latest salary trends report</a>.
                </p>
              </div>
            </div>
          </section>

          {/* Best Jobs Section */}
          <section className="py-20">
            <div className="container-custom grid grid-cols-1 md:grid-cols-12 gap-12">
              <div className="md:col-span-4">
                <h2 className="text-4xl font-light text-randstad-navy">best manufacturing jobs</h2>
              </div>
              <div className="md:col-span-8">
                <p className="text-lg text-gray-700 mb-8">Explore some of the top manufacturing roles with Randstad India:</p>
                <div className="space-y-2">
                  <AccordionItem title="production assistant">
                    <p>Production assistants support the manufacturing process by handling materials, operating machinery, and ensuring quality control. They play a vital role in maintaining production schedules and efficiency.</p>
                  </AccordionItem>
                  <AccordionItem title="maintenance engineer">
                    <p>Maintenance engineers are responsible for the upkeep and repair of manufacturing equipment. They ensure that machinery operates smoothly and safely, minimizing downtime and maximizing productivity.</p>
                  </AccordionItem>
                  <AccordionItem title="operations manager">
                    <p>Operations managers oversee the entire manufacturing process, from planning and budgeting to production and delivery. They focus on optimizing resources and improving overall operational performance.</p>
                  </AccordionItem>
                  <AccordionItem title="other manufacturing roles">
                    <p>The manufacturing sector offers a wide range of other roles, including quality assurance specialists, supply chain coordinators, and safety officers, each contributing to the success of the industry.</p>
                  </AccordionItem>
                </div>
              </div>
            </div>
          </section>

          {/* FAQ Section */}
          <section className="py-20">
            <div className="container-custom grid grid-cols-1 md:grid-cols-12 gap-12">
              <div className="md:col-span-4">
                <h2 className="text-4xl font-light text-randstad-navy">want to find manufacturing jobs near you?</h2>
              </div>
              <div className="md:col-span-8 space-y-8">
                <p className="text-lg text-gray-700 leading-relaxed">
                  Randstad connects you to opportunities that align with your skills and career aspirations. Whether you're aiming for operational, technical, or managerial roles, <a href="#" className="text-randstad-blue underline">begin your manufacturing career with us today!</a>
                </p>
                <div className="space-y-2">
                  <AccordionItem title="how do I apply for a manufacturing job?">
                    <p>To apply for a manufacturing job, you can browse our current listings, upload your CV, and apply directly through our website. Our recruitment team will review your application and contact you if your profile matches the requirements.</p>
                  </AccordionItem>
                  <AccordionItem title="does our agency offer job search tips in manufacturing?">
                    <p>Yes, we provide extensive resources and tips for job seekers in the manufacturing sector, including CV writing advice, interview preparation, and industry insights to help you succeed in your job search.</p>
                  </AccordionItem>
                </div>
              </div>
            </div>
          </section>

          {/* Explore Section */}
          <section className="py-20">
            <div className="container-custom grid grid-cols-1 md:grid-cols-12 gap-12">
              <div className="md:col-span-4">
                <h2 className="text-4xl font-light text-randstad-navy">explore jobs in other fields</h2>
              </div>
              <div className="md:col-span-8">
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-8 mb-10">
                  {[
                    'engineering jobs', 'retail jobs', 'supply chain & logistics jobs', 
                    'finance & accounting jobs', 'healthcare jobs', 
                    'hr & admin support jobs', 'sales & marketing jobs'
                  ].map(job => (
                    <li key={job} className="flex items-center gap-2">
                      <div className="h-1.5 w-1.5 bg-randstad-blue rounded-full"></div>
                      <a href="#" className="text-randstad-blue underline hover:text-randstad-navy">{job}</a>
                    </li>
                  ))}
                </ul>
                <button className="px-8 py-3 border border-randstad-blue text-randstad-blue rounded-sm font-bold hover:bg-randstad-blue hover:text-white transition-all">
                  view all jobs
                </button>
              </div>
            </div>
          </section>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-randstad-navy text-white pt-20 pb-10">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12 mb-20">
            <div>
              <h4 className="text-xl font-bold mb-6">find a job</h4>
              <ul className="space-y-4 text-gray-300 text-[15px]">
                {['explore all jobs', 'submit your cv', 'join our team', 'refer a friend'].map(item => (
                  <li key={item}><a href="#" className="hover:text-white transition-colors">{item}</a></li>
                ))}
              </ul>
              <h4 className="text-xl font-bold mt-12 mb-6">for talents</h4>
              <ul className="space-y-4 text-gray-300 text-[15px]">
                {['specialisms', 'testimonials', 'career advice', 'beware of job scams'].map(item => (
                  <li key={item}><a href="#" className="hover:text-white transition-colors">{item}</a></li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="text-xl font-bold mb-6">for employers</h4>
              <ul className="space-y-4 text-gray-300 text-[15px]">
                {['submit a vacancy', 'request a callback', 'our services', 'specialisms', 'case studies', 'testimonials'].map(item => (
                  <li key={item}><a href="#" className="hover:text-white transition-colors">{item}</a></li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="text-xl font-bold mb-6">workforce insights</h4>
              <ul className="space-y-4 text-gray-300 text-[15px]">
                {['talent insights reports', 'employer brand research reports', 'salary trends reports', 'ed&i reports', 'workmonitor reports', 'startup hiring trends', 'talent pulse surveys'].map(item => (
                  <li key={item}><a href="#" className="hover:text-white transition-colors">{item}</a></li>
                ))}
              </ul>
              <h4 className="text-xl font-bold mt-12 mb-6">resources</h4>
              <ul className="space-y-4 text-gray-300 text-[15px]">
                {['case studies', 'press room', 'blogs'].map(item => (
                  <li key={item}><a href="#" className="hover:text-white transition-colors">{item}</a></li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="text-xl font-bold mb-6">jobs</h4>
              <ul className="space-y-4 text-gray-300 text-[15px]">
                {[
                  'engineering jobs', 'cxo jobs', 'manufacturing jobs', 
                  'supply chain & logistics jobs', 'education jobs', 
                  'finance & accounting jobs', 'healthcare jobs', 
                  'hr & admin support jobs', 'ites/gcc jobs', 
                  'legal & compliance jobs', 'sales & marketing jobs'
                ].map(item => (
                  <li key={item}><a href="#" className="hover:text-white transition-colors">{item}</a></li>
                ))}
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-10">
            <div className="flex flex-wrap items-center justify-between gap-8 mb-10">
              <div className="flex items-center gap-6">
                <a href="#" className="h-10 w-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors">
                  <Linkedin className="h-5 w-5" />
                </a>
              </div>
              <p className="text-[12px] text-gray-400 max-w-2xl">
                registered office: Randstad India Private Limited, CIN U74210TN1992PTC023097,/Randstad House, Old No. 5 & 5A, New No. 9, Pycrofts Garden Road, Nungambakkam, Chennai, TN - 600 006
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-4 mb-10">
              <div className="flex items-center gap-2">
                <div className="h-6 w-6 bg-randstad-blue rounded-sm flex items-center justify-center">
                  <div className="h-3 w-3 border-2 border-white border-t-transparent rounded-full rotate-45"></div>
                </div>
                <span className="text-lg font-bold tracking-tight">randstad</span>
              </div>
              <span className="text-[12px] text-gray-400">HUMAN FORWARD and SHAPING THE WORLD OF WORK are registered trademarks of © Randstad N.V.2023</span>
            </div>

            <div className="space-y-6 text-[14px] text-gray-300 mb-12">
              <p>
                <span className="font-bold text-white">Security Advice:</span> Randstad India does not charge any fee at any stage of its recruitment process from the candidate nor allows their employees to collect any fees from any candidates. <a href="#" className="text-randstad-blue underline">Click here to know more</a>
              </p>
              <p>
                <span className="font-bold text-white">EEO Statement:</span> Randstad India is an Equal Employment Opportunity Employer. All qualified applicants receive consideration for employment without regard to race, color, religion, sex, sexual orientation, gender identity or expression, appearance, national origin, age, marital status, veteran status, or disability status, or any other characteristics. Our global mission is to become the world's most equitable and specialized talent company, and we actively embrace diversity and inclusion as the cornerstones of our success. To read more of Randstad India's work in the space of equity, diversity and inclusion please <a href="#" className="text-randstad-blue underline">click here</a>
              </p>
            </div>

            <div className="flex flex-wrap gap-x-8 gap-y-4 text-[14px] text-gray-400">
              {['terms & conditions', 'cookies', 'misconduct reporting procedure', 'accessibility', 'be aware', 'sitemap', 'privacy statement'].map(item => (
                <a key={item} href="#" className="hover:text-white transition-colors">{item}</a>
              ))}
            </div>
          </div>
        </div>
      </footer>

      {/* Floating Elements */}
      <div className="fixed bottom-6 left-6 z-50">
        <button className="h-12 w-12 bg-randstad-blue text-white rounded-full shadow-lg flex items-center justify-center hover:scale-110 transition-transform">
          <div className="h-6 w-6 border-4 border-white border-t-transparent rounded-full rotate-45"></div>
        </button>
      </div>
      <div className="fixed right-0 top-1/2 -translate-y-1/2 z-50">
        <button className="bg-randstad-blue text-white py-4 px-2 rounded-l-md vertical-text font-bold text-[12px] tracking-widest uppercase shadow-lg hover:pr-4 transition-all">
          Feedback
        </button>
      </div>

      <style>{`
        .vertical-text {
          writing-mode: vertical-rl;
          transform: rotate(180deg);
        }
      `}</style>
    </div>
  );
}
