import React from "react";
import { motion } from "motion/react";

import { 
  Search, 
  MapPin, 
  Heart, 
  User, 
  ChevronDown, 
  Info, 
  Mail, 
  Linkedin, 
  MessageSquare,
  LayoutGrid,
  List,
  Navigation
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
    className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 flex flex-col h-full relative group hover:shadow-md transition-shadow"
  >
    <div className="flex justify-between items-start mb-4">
      <h3 className="text-[#2152ff] text-xl font-medium hover:underline cursor-pointer">{title}</h3>
      <button className="text-gray-400 hover:text-red-500 transition-colors">
        <Heart size={24} />
      </button>
    </div>
    
    <div className="space-y-2 mb-8">
      <div className="flex items-center text-gray-600 gap-2">
        <MapPin size={18} />
        <span className="text-sm">{location}</span>
      </div>
      <div className="flex items-center text-gray-600 gap-2">
        <div className="w-[18px] h-[18px] border-2 border-gray-400 rounded-sm flex items-center justify-center">
          <div className="w-2 h-2 bg-gray-400 rounded-full" />
        </div>
        <span className="text-sm">{type}</span>
      </div>
    </div>

    <div className="mt-auto flex justify-between items-center pt-4 border-t border-gray-50">
      <span className="text-gray-500 text-sm">{date}</span>
      <button className="text-[#2152ff] hover:bg-blue-50 p-1 rounded-full transition-colors">
        <Info size={20} />
      </button>
    </div>
  </motion.div>
);

export default function PermanentRoles() {
  const jobs = [
    { title: "chief of staff", location: "chandigarh, chandigarh", type: "permanent", date: "23 february 2026" },
    { title: "manager - us taxation", location: "delhi, delhi", type: "permanent", date: "23 february 2026" },
    { title: "data analyst", location: "pune, maharashtra", type: "permanent", date: "23 february 2026" },
    { title: "store management", location: "salem, tamil nadu", type: "permanent", date: "23 february 2026" },
    { title: "data science and ai developer lead", location: "bangalore, karnataka", type: "permanent", date: "23 february 2026" },
    { title: "data science & ai platform team lead", location: "bangalore, karnataka", type: "permanent", date: "23 february 2026" },
    { title: "dgm/gm foundry quality", location: "hyderabad, telangana", type: "permanent", date: "23 february 2026" },
    { title: "senior financial accountant", location: "doddanagamangala, karnataka", type: "permanent", date: "23 february 2026" },
    { title: "retail sales officer", location: "kilpauk, tamil nadu", type: "permanent", date: "23 february 2026" },
  ];

  return (
    <div className="min-h-screen bg-[#f5f2ed] font-sans text-[#141414]">
      {/* Top Header */}
      

      {/* Hero / Search Section */}
      <section className="bg-[#0c1941] text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 text-xs text-gray-400 mb-8">
            <a href="#" className="hover:underline">home</a>
            <span>&gt;</span>
            <a href="#" className="hover:underline">jobs</a>
            <span>&gt;</span>
            <span className="text-white">permanent</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-end">
            <div className="md:col-span-4">
              <label className="block text-sm font-medium mb-2">search for</label>
              <div className="relative">
                <input 
                  type="text" 
                  placeholder="job title or keyword" 
                  className="w-full bg-white text-gray-900 px-4 py-3 rounded-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>
            <div className="md:col-span-4">
              <label className="block text-sm font-medium mb-2">where</label>
              <div className="relative">
                <input 
                  type="text" 
                  placeholder="city, state or postcode" 
                  className="w-full bg-white text-gray-900 px-4 py-3 rounded-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>
            <div className="md:col-span-2">
              <label className="block text-sm font-medium mb-2">range</label>
              <div className="relative">
                <select className="w-full bg-white text-gray-900 px-4 py-3 rounded-sm appearance-none focus:outline-none focus:ring-2 focus:ring-blue-500">
                  <option>10 km</option>
                  <option>25 km</option>
                  <option>50 km</option>
                </select>
                <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" size={18} />
              </div>
            </div>
            <div className="md:col-span-2">
              <button className="w-full bg-[#2152ff] hover:bg-blue-600 text-white font-medium py-3 px-6 rounded-sm transition-colors">
                search 863 jobs
              </button>
            </div>
          </div>
          
          <button className="mt-4 flex items-center gap-2 text-sm text-blue-400 hover:underline">
            <Navigation size={16} className="rotate-45" />
            use current location
          </button>
        </div>
      </section>

      {/* Filters & Results Header */}
      <section className="bg-white border-b border-gray-200 py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-8">
            <h2 className="text-3xl font-light">863 permanent jobs found for you.</h2>
            <div className="flex items-center gap-4">
              <div className="flex bg-gray-100 p-1 rounded">
                <button className="p-1.5 text-gray-400 hover:text-[#2152ff]"><List size={20} /></button>
                <button className="p-1.5 bg-white text-[#2152ff] shadow-sm rounded"><LayoutGrid size={20} /></button>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <span className="text-gray-500">sort:</span>
                <button className="font-medium flex items-center gap-1">
                  date
                  <ChevronDown size={16} />
                </button>
              </div>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-3 mb-6">
            <span className="text-sm font-medium mr-2">filters:</span>
            <button className="px-4 py-2 border border-gray-300 rounded-full text-sm flex items-center gap-2 hover:border-[#2152ff] transition-colors">
              location <ChevronDown size={14} />
            </button>
            <button className="px-4 py-2 bg-[#0c1941] text-white rounded-full text-sm flex items-center gap-2">
              <span className="bg-white text-[#0c1941] w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-bold">1</span>
              job types <ChevronDown size={14} />
            </button>
            <button className="px-4 py-2 border border-gray-300 rounded-full text-sm flex items-center gap-2 hover:border-[#2152ff] transition-colors">
              professional field <ChevronDown size={14} />
            </button>
            <button className="px-4 py-2 border border-gray-300 rounded-full text-sm hover:border-[#2152ff] transition-colors">
              all filters
            </button>
            
            <div className="flex-grow" />
            
            <button className="bg-[#2152ff] hover:bg-blue-600 text-white text-sm font-medium px-6 py-2.5 rounded-sm transition-colors">
              save this search & get alerts
            </button>
            <button className="p-2 text-gray-400 hover:text-red-500"><Heart size={24} /></button>
            <button className="p-2 text-gray-400 hover:text-[#2152ff]"><User size={24} /></button>
          </div>

          <div className="flex items-center gap-4 text-sm">
            <span className="text-gray-500">selected filters:</span>
            <div className="flex items-center gap-2 bg-gray-100 px-3 py-1 rounded-full">
              <span>permanent</span>
              <button className="text-gray-400 hover:text-gray-600">×</button>
            </div>
            <button className="text-[#2152ff] hover:underline ml-auto">clear all</button>
          </div>
        </div>
      </section>

      {/* Main Content - Job Grid */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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

        {/* Pagination */}
        <div className="mt-16 flex flex-col items-center">
          <div className="w-full max-w-md bg-gray-200 h-1 rounded-full mb-4 overflow-hidden">
            <div className="bg-[#2152ff] h-full w-[3.5%]" />
          </div>
          <p className="text-sm text-gray-500 mb-6">30 of 863 jobs seen</p>
          <button className="border-2 border-[#141414] hover:bg-[#141414] hover:text-white text-[#141414] font-medium px-12 py-3 rounded-sm transition-all">
            view 30 more
          </button>
        </div>
      </main>

      {/* CTA Section */}
      <section className="bg-[#ffb600] py-20 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between">
          <div className="max-w-lg z-10">
            <h2 className="text-6xl font-medium mb-6 leading-tight">let similar jobs come to you</h2>
            <p className="text-xl mb-8">we will keep you updated when we have similar job postings.</p>
            <button className="bg-[#0c1941] text-white font-medium px-8 py-4 rounded-sm hover:bg-opacity-90 transition-all">
              set a saved search & alert
            </button>
          </div>
          
          <div className="mt-12 md:mt-0 relative z-10">
            <div className="w-64 h-64 md:w-96 md:h-96 bg-white rounded-lg shadow-2xl flex items-center justify-center p-8 relative">
              <Mail size={120} className="text-[#2152ff]" />
              <div className="absolute -top-12 left-1/2 -translate-x-1/2">
                <motion.div 
                  animate={{ y: [0, 10, 0] }}
                  transition={{ repeat: Infinity, duration: 2 }}
                >
                  <ChevronDown size={80} className="text-[#0c1941]" />
                </motion.div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Decorative elements */}
        <div className="absolute bottom-0 right-0 w-1/3 h-1/2 bg-[#0c1941] translate-y-1/2 translate-x-1/4 rounded-full opacity-10" />
      </section>

      {/* Footer */}
      <footer className="bg-[#0c1941] text-white pt-20 pb-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 mb-16">
            <div>
              <h4 className="font-bold mb-6">find a job</h4>
              <ul className="space-y-4 text-sm text-gray-400">
                <li><a href="#" className="hover:text-white">explore all jobs</a></li>
                <li><a href="#" className="hover:text-white">submit your cv</a></li>
                <li><a href="#" className="hover:text-white">join our team</a></li>
                <li><a href="#" className="hover:text-white">refer a friend</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-6">for employers</h4>
              <ul className="space-y-4 text-sm text-gray-400">
                <li><a href="#" className="hover:text-white">submit a vacancy</a></li>
                <li><a href="#" className="hover:text-white">request a callback</a></li>
                <li><a href="#" className="hover:text-white">our services</a></li>
                <li><a href="#" className="hover:text-white">specialisms</a></li>
                <li><a href="#" className="hover:text-white">case studies</a></li>
                <li><a href="#" className="hover:text-white">testimonials</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-6">workforce insights</h4>
              <ul className="space-y-4 text-sm text-gray-400">
                <li><a href="#" className="hover:text-white">talent insights reports</a></li>
                <li><a href="#" className="hover:text-white">employer brand research reports</a></li>
                <li><a href="#" className="hover:text-white">salary trends reports</a></li>
                <li><a href="#" className="hover:text-white">ed&i reports</a></li>
                <li><a href="#" className="hover:text-white">workmonitor reports</a></li>
                <li><a href="#" className="hover:text-white">startup hiring trends</a></li>
                <li><a href="#" className="hover:text-white">talent pulse surveys</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-6">jobs</h4>
              <ul className="space-y-4 text-sm text-gray-400">
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
            <div>
              <h4 className="font-bold mb-6">for talents</h4>
              <ul className="space-y-4 text-sm text-gray-400">
                <li><a href="#" className="hover:text-white">specialisms</a></li>
                <li><a href="#" className="hover:text-white">testimonials</a></li>
                <li><a href="#" className="hover:text-white">career advice</a></li>
                <li><a href="#" className="hover:text-white">beware of job scams</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-6">resources</h4>
              <ul className="space-y-4 text-sm text-gray-400">
                <li><a href="#" className="hover:text-white">case studies</a></li>
                <li><a href="#" className="hover:text-white">press room</a></li>
                <li><a href="#" className="hover:text-white">blogs</a></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-12">
            <div className="flex items-center gap-4 mb-8">
              <a href="#" className="bg-white text-[#0c1941] p-2 rounded-sm hover:bg-blue-50 transition-colors">
                <Linkedin size={20} />
              </a>
            </div>
            
            <div className="text-[10px] text-gray-500 space-y-4 mb-12">
              <p>registered office: Randstad India Private Limited, CIN U74210TN1992PTC023097,/Randstad House, Old No. 5 & 5A, New No. 9, Pycrofts Garden Road, Nungambakkam, Chennai, TN - 600 006</p>
              <p>RANDSTAD, <span className="inline-block w-4 h-4 border-t border-r border-gray-500 rotate-45 translate-y-0.5" /> HUMAN FORWARD and SHAPING THE WORLD OF WORK are registered trademarks of © Randstad N.V.2023</p>
              <p>Security Advice: Randstad India does not charge any fee at any stage of its recruitment process from the candidate nor allows their employees to collect any fees from any candidates. <a href="#" className="text-white hover:underline">Click here to know more</a></p>
              <p>EEO Statement: Randstad India is an Equal Employment Opportunity Employer. All qualified applicants receive consideration for employment without regard to race, color, religion, sex, sexual orientation, gender identity or expression, appearance, national origin, age, marital status, veteran status, or disability status, or any other characteristics. Our global mission is to become the world's most equitable and specialized talent company, and we actively embrace diversity and inclusion as the cornerstones of our success. To read more of Randstad India's work in the space of equity, diversity and inclusion please <a href="#" className="text-white hover:underline">click here</a></p>
            </div>

            <div className="flex flex-wrap gap-x-8 gap-y-4 text-xs text-gray-400">
              {['terms & conditions', 'cookies', 'misconduct reporting procedure', 'accessibility', 'be aware', 'sitemap', 'privacy statement'].map((item) => (
                <a key={item} href="#" className="hover:text-white transition-colors">{item}</a>
              ))}
            </div>
          </div>
        </div>
      </footer>

      {/* Floating Elements */}
      <button className="fixed bottom-6 left-6 bg-[#2152ff] text-white p-3 rounded-full shadow-lg hover:scale-110 transition-transform z-50">
        <div className="w-6 h-6 border-4 border-white rounded-full border-t-transparent animate-spin-slow" />
      </button>
      
      <button className="fixed right-0 top-1/2 -translate-y-1/2 bg-[#2152ff] text-white px-2 py-8 rounded-l-md flex flex-col items-center gap-2 z-50 shadow-xl">
        <span className="[writing-mode:vertical-rl] text-xs font-bold tracking-widest uppercase">feedback</span>
      </button>

      <style>{`
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .animate-spin-slow {
          animation: spin-slow 8s linear infinite;
        }
      `}</style>
    </div>
  );
}
