import React, { ReactNode, useState } from "react";
import { motion } from "motion/react";

import { 
  Search, 
  MapPin, 
  Heart, 
  Info, 
  ChevronDown, 
  X, 
  Mail, 
  Linkedin, 
  Menu,
  User,
  LayoutGrid,
  List as ListIcon
} from 'lucide-react';

interface JobCardProps {
  title: string;
  location: string;
  type: string;
  date: string;
}

const JobCard: React.FC<JobCardProps> = ({ title, location, type, date }) => (
  <motion.div 
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 flex flex-col h-full hover:shadow-md transition-shadow relative group"
  >
    <div className="flex justify-between items-start mb-4">
      <h3 className="text-blue-600 font-medium text-lg leading-tight group-hover:underline cursor-pointer">
        {title}
      </h3>
      <button className="text-gray-400 hover:text-red-500 transition-colors">
        <Heart size={20} />
      </button>
    </div>
    
    <div className="space-y-2 mb-8">
      <div className="flex items-center text-gray-600 text-sm">
        <MapPin size={16} className="mr-2" />
        {location}
      </div>
      <div className="flex items-center text-gray-600 text-sm">
        <div className="w-4 h-4 border border-gray-400 mr-2 flex items-center justify-center">
          <div className="w-2 h-2 bg-gray-400"></div>
        </div>
        {type}
      </div>
    </div>

    <div className="mt-auto flex justify-between items-center pt-4 border-t border-gray-50">
      <span className="text-gray-400 text-xs">{date}</span>
      <button className="text-gray-400 hover:text-blue-600 transition-colors">
        <Info size={18} />
      </button>
    </div>
  </motion.div>
);

const Accordion = ({ title, children }: { title: string, children: ReactNode }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="border-b border-gray-200 py-4">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex justify-between items-center text-left text-blue-900 font-medium hover:text-blue-700 transition-colors"
      >
        <span className="text-xl">{title}</span>
        <ChevronDown className={`transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
      </button>
      {isOpen && (
        <div className="mt-4 text-gray-600 leading-relaxed">
          {children}
        </div>
      )}
    </div>
  );
};

export default function HrAdminSupport() {
  const [activeFilters, setActiveFilters] = useState(['hr', 'hr employees', 'hr executive']);

  const removeFilter = (filter: string) => {
    setActiveFilters(activeFilters.filter(f => f !== filter));
  };

  const clearAll = () => setActiveFilters([]);

  const jobs = [
    { title: "regional head hr - gujarat", location: "sanand, gujarat", type: "permanent", date: "13 february 2026" },
    { title: "hr executive", location: "powai iit, maharashtra", type: "permanent", date: "12 february 2026" },
    { title: "hr assistant", location: "pune, maharashtra", type: "permanent", date: "12 february 2026" },
    { title: "hr recruiter", location: "kheda, gujarat", type: "permanent", date: "9 february 2026" },
    { title: "hr analyst", location: "pune, maharashtra", type: "temporary", date: "4 february 2026" },
    { title: "hr manager", location: "mumbai, maharashtra", type: "permanent", date: "4 february 2026" },
    { title: "hr coordiantor", location: "bangalore, karnataka", type: "temporary", date: "2 february 2026" },
    { title: "hr - recruiter", location: "bengaluru city, karnataka", type: "temporary", date: "30 january 2026" },
    { title: "hr manager", location: "hyderabad, telangana", type: "permanent", date: "30 january 2026" },
  ];

  return (
    <div className="min-h-screen bg-white font-sans text-blue-900">
      {/* Navbar */}
      

      {/* Hero / Search Section */}
      <div className="bg-[#0a1a3c] text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumbs */}
          <div className="flex items-center text-xs text-gray-400 mb-8 space-x-2">
            <a href="#" className="hover:text-white">home</a>
            <span>&gt;</span>
            <a href="#" className="hover:text-white">jobs</a>
            <span>&gt;</span>
            <a href="#" className="hover:text-white">hr</a>
            <span>&gt;</span>
            <a href="#" className="hover:text-white">hr employees</a>
            <span>&gt;</span>
            <span className="text-white">hr executive</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 items-end">
            <div className="lg:col-span-4">
              <label className="block text-sm mb-2">search for</label>
              <div className="relative">
                <input 
                  type="text" 
                  placeholder="job title or keyword" 
                  className="w-full bg-white text-blue-900 px-4 py-3 rounded-sm focus:outline-none"
                />
              </div>
            </div>
            <div className="lg:col-span-4">
              <label className="block text-sm mb-2">where</label>
              <div className="relative">
                <input 
                  type="text" 
                  placeholder="city, state or postcode" 
                  className="w-full bg-white text-blue-900 px-4 py-3 rounded-sm focus:outline-none"
                />
              </div>
            </div>
            <div className="lg:col-span-2">
              <label className="block text-sm mb-2">range</label>
              <div className="relative">
                <select className="w-full bg-white text-blue-900 px-4 py-3 rounded-sm focus:outline-none appearance-none">
                  <option>10 km</option>
                  <option>25 km</option>
                  <option>50 km</option>
                </select>
                <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 text-blue-900" size={18} />
              </div>
            </div>
            <div className="lg:col-span-2">
              <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 rounded-sm transition-colors">
                search 31 jobs
              </button>
            </div>
          </div>
          <button className="mt-4 flex items-center text-sm text-gray-300 hover:text-white transition-colors">
            <MapPin size={16} className="mr-2" />
            use current location
          </button>
        </div>
      </div>

      {/* Filters Bar */}
      <div className="bg-white border-b border-gray-100 py-4 sticky top-20 z-40 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div className="flex flex-wrap items-center gap-3">
              <span className="text-sm text-gray-500 mr-2">filters:</span>
              <button className="px-4 py-2 border border-gray-300 rounded-full text-sm flex items-center hover:border-blue-600 transition-colors">
                location <ChevronDown size={14} className="ml-2" />
              </button>
              <button className="px-4 py-2 border border-gray-300 rounded-full text-sm flex items-center hover:border-blue-600 transition-colors">
                job types <ChevronDown size={14} className="ml-2" />
              </button>
              <button className="px-4 py-2 bg-[#0a1a3c] text-white rounded-full text-sm flex items-center">
                <span className="bg-blue-600 text-white rounded-full w-5 h-5 flex items-center justify-center text-[10px] mr-2">3</span>
                professional field <ChevronDown size={14} className="ml-2" />
              </button>
              <button className="px-4 py-2 border border-gray-300 rounded-full text-sm hover:border-blue-600 transition-colors">
                all filters
              </button>
            </div>
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-sm text-sm font-medium transition-colors">
              save this search & get alerts
            </button>
          </div>

          {activeFilters.length > 0 && (
            <div className="mt-4 flex flex-wrap items-center gap-2">
              <span className="text-sm text-gray-500 mr-2">selected filters:</span>
              {activeFilters.map(filter => (
                <span key={filter} className="bg-gray-100 px-3 py-1 rounded-full text-xs flex items-center">
                  {filter}
                  <button onClick={() => removeFilter(filter)} className="ml-2 text-gray-400 hover:text-blue-600">
                    <X size={14} />
                  </button>
                </span>
              ))}
              <button onClick={clearAll} className="text-sm text-blue-600 hover:underline ml-2">clear all</button>
            </div>
          )}
        </div>
      </div>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Results Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
          <h2 className="text-3xl font-light text-blue-900">
            31 hr executive jobs found for you.
          </h2>
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2">
              <button className="p-2 text-blue-600 hover:bg-gray-100 rounded">
                <ListIcon size={20} />
              </button>
              <button className="p-2 text-gray-400 hover:bg-gray-100 rounded">
                <LayoutGrid size={20} />
              </button>
            </div>
            <div className="flex items-center gap-2 text-sm">
              <span className="text-gray-500">sort:</span>
              <button className="font-medium flex items-center">
                date <ChevronDown size={14} className="ml-1" />
              </button>
            </div>
          </div>
        </div>

        {/* Job Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {jobs.map((job, idx) => (
            <JobCard 
              key={idx} 
              title={job.title}
              location={job.location}
              type={job.type}
              date={job.date}
            />
          ))}
        </div>

        {/* Informational Sections */}
        <div className="space-y-24">
          {/* About Section */}
          <section className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            <div className="lg:col-span-4">
              <h2 className="text-3xl font-light">about HR jobs</h2>
            </div>
            <div className="lg:col-span-8 space-y-6">
              <p className="text-gray-600 leading-relaxed">
                The human resources sector in India is pivotal in fostering corporate growth and employee satisfaction, offering abundant opportunities for driven professionals. From HR managers and recruiters to training specialists and data analysts, Randstad India partners with top organizations to connect you with roles that leverage your skills and passion. Whether you're beginning your career or advancing it, explore positions that offer growth and fulfillment. Our experts are here to help you find your ideal HR role. <a href="#" className="text-blue-600 hover:underline">Read more about working in HR here</a>
              </p>
              <div>
                <h4 className="font-medium mb-4">HR jobs per city</h4>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-blue-600">
                  <li><a href="#" className="hover:underline">• HR jobs in Mumbai</a></li>
                  <li><a href="#" className="hover:underline">• HR jobs in Delhi</a></li>
                  <li><a href="#" className="hover:underline">• HR jobs in Bengaluru</a></li>
                  <li><a href="#" className="hover:underline">• HR jobs in Chennai</a></li>
                </ul>
              </div>
            </div>
          </section>

          {/* Earning Potential */}
          <section className="grid grid-cols-1 lg:grid-cols-12 gap-12 bg-gray-50 -mx-4 sm:-mx-8 lg:-mx-12 px-4 sm:px-8 lg:px-12 py-16">
            <div className="lg:col-span-4">
              <h2 className="text-3xl font-light">earning potential in HR</h2>
            </div>
            <div className="lg:col-span-8">
              <p className="text-gray-600 leading-relaxed">
                Explore the financial prospects in the HR industry with Randstad's comprehensive salary trends reports. These reports provide insights into current salary data, industry benchmarks, and compensation trends, enabling you to make informed career decisions. Stay ahead of market dynamics by accessing our <a href="#" className="text-blue-600 hover:underline">latest salary trends report</a>.
              </p>
            </div>
          </section>

          {/* Best HR Jobs */}
          <section className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            <div className="lg:col-span-4">
              <h2 className="text-3xl font-light">best HR jobs</h2>
            </div>
            <div className="lg:col-span-8">
              <p className="text-gray-600 mb-8">Explore some of the top HR roles with Randstad India:</p>
              <div className="space-y-2">
                <Accordion title="HR manager">
                  Information about HR manager roles...
                </Accordion>
                <Accordion title="recruiter">
                  Information about recruiter roles...
                </Accordion>
                <Accordion title="HR administrator">
                  Information about HR administrator roles...
                </Accordion>
                <Accordion title="other HR roles">
                  Information about other HR roles...
                </Accordion>
              </div>
            </div>
          </section>

          {/* FAQ Section */}
          <section className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            <div className="lg:col-span-4">
              <h2 className="text-3xl font-light leading-tight">want to find HR jobs near you?</h2>
            </div>
            <div className="lg:col-span-8 space-y-6">
              <p className="text-gray-600 leading-relaxed">
                Randstad connects you to opportunities that align with your skills and career goals. Whether you're aiming for roles in recruitment, management, or training, <a href="#" className="text-blue-600 hover:underline">begin your HR career with us today!</a>
              </p>
              <div className="space-y-2">
                <Accordion title="how do I apply for an HR job?">
                  To apply for an HR job, you can browse our listings, select a role that matches your profile, and click 'Apply'. You'll need to upload your CV and provide some basic details.
                </Accordion>
                <Accordion title="does our agency offer job search tips in HR?">
                  Yes, we provide extensive resources including career advice, interview tips, and resume building guides specifically tailored for HR professionals.
                </Accordion>
              </div>
            </div>
          </section>

          {/* Regions and Roles */}
          <section className="space-y-16">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
              <div className="lg:col-span-4">
                <h2 className="text-3xl font-light">hr executive jobs by region</h2>
              </div>
              <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 text-blue-600">
                <a href="#" className="hover:underline">gujarat (3)</a>
                <a href="#" className="hover:underline">maharashtra (9)</a>
                <a href="#" className="hover:underline">telangana (3)</a>
                <a href="#" className="hover:underline">karnataka (11)</a>
                <a href="#" className="hover:underline">tamil nadu (4)</a>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 bg-gray-50 -mx-4 sm:-mx-8 lg:-mx-12 px-4 sm:px-8 lg:px-12 py-16">
              <div className="lg:col-span-4">
                <h2 className="text-3xl font-light">other hr employees jobs</h2>
              </div>
              <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 text-gray-800">
                <a href="#" className="hover:text-blue-600">executive - hr & admin (6)</a>
                <a href="#" className="hover:text-blue-600">hr business partner (5)</a>
                <a href="#" className="hover:text-blue-600">technical recruiter (4)</a>
              </div>
            </div>
          </section>
        </div>
      </main>

      {/* CTA Section */}
      <section className="bg-[#ffb400] py-20 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between relative z-10">
          <div className="max-w-xl mb-8 md:mb-0">
            <h2 className="text-5xl font-light text-blue-900 mb-6">let similar jobs come to you</h2>
            <p className="text-blue-900 text-lg mb-8">we will keep you updated when we have similar job postings.</p>
            <button className="bg-[#0a1a3c] text-white px-8 py-4 rounded-sm font-medium hover:bg-blue-800 transition-colors">
              set a saved search & alert
            </button>
          </div>
          <div className="relative w-full max-w-md aspect-square flex items-center justify-center">
            <div className="absolute inset-0 flex items-center justify-center">
              <Mail size={300} className="text-blue-900 opacity-10" />
            </div>
            <div className="bg-white p-8 rounded-lg shadow-2xl relative z-20 w-full">
              <div className="flex flex-col items-center text-center">
                <div className="w-20 h-20 bg-blue-600 rounded-full flex items-center justify-center mb-6">
                  <Mail size={40} className="text-white" />
                </div>
                <h3 className="text-2xl font-medium text-blue-900 mb-2">get job alerts</h3>
                <p className="text-gray-600 mb-6">Never miss an opportunity. Set up alerts for your favorite searches.</p>
                <div className="w-full h-1 bg-gray-100 rounded-full overflow-hidden">
                  <div className="w-1/3 h-full bg-blue-600"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>
      </section>

      {/* Footer */}
      

      {/* Floating Feedback Button */}
      <button className="fixed right-0 top-1/2 -translate-y-1/2 bg-blue-600 text-white py-3 px-1 rounded-l-md text-xs font-bold vertical-text z-50 hover:bg-blue-700 transition-colors" style={{ writingMode: 'vertical-rl' }}>
        Feedback
      </button>

      {/* Cookie Consent Icon */}
      <button className="fixed bottom-4 left-4 bg-blue-600 text-white p-3 rounded-full shadow-lg z-50 hover:bg-blue-700 transition-colors">
        <div className="w-6 h-6 border-2 border-white rounded-full border-dashed animate-spin-slow"></div>
      </button>
    </div>
  );
}
