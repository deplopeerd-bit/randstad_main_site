import React, { useState } from "react";
import { AnimatePresence, motion } from "motion/react";

import { 
  Search, 
  MapPin, 
  ChevronDown, 
  Heart, 
  Info, 
  Mail, 
  Linkedin, 
  X, 
  LayoutGrid, 
  List,
  Menu,
  ChevronRight
} from 'lucide-react';

// --- Types ---
interface Job {
  id: number;
  title: string;
  location: string;
  type: string;
  date: string;
}

// --- Mock Data ---
const MOCK_JOBS: Job[] = [
  { id: 1, title: 'inside sales executive', location: 'bengaluru, karnataka', type: 'permanent', date: '27 january 2026' },
  { id: 2, title: 'sales executives', location: 'gurugram, haryana', type: 'temporary', date: '14 january 2026' },
  { id: 3, title: 'branch sales executive', location: 'bengaluru city, karnataka', type: 'permanent', date: '13 january 2026' },
  { id: 4, title: 'inside sales executive', location: 'gurgaon, haryana', type: 'temporary', date: '13 january 2026' },
  { id: 5, title: 'inside sales executive', location: 'gurgaon, haryana', type: 'temporary', date: '9 january 2026' },
  { id: 6, title: 'sales executives', location: 'lucknoora, uttar pradesh', type: 'temporary', date: '8 january 2026' },
  { id: 7, title: 'las (long arm sales)', location: 'kolkata, west bengal', type: 'temporary', date: '23 february 2026' },
  { id: 8, title: 'sales executives', location: 'chennai, tamil nadu', type: 'temporary', date: '20 february 2026' },
  { id: 9, title: 'sales executives', location: 'palavakkam, tamil nadu', type: 'temporary', date: '20 february 2026' },
  { id: 10, title: 'branch sales executive', location: 'perungudi, tamil nadu', type: 'permanent', date: '19 february 2026' },
  { id: 11, title: 'sales executives', location: 'jalandhar, punjab', type: 'temporary', date: '19 february 2026' },
  { id: 12, title: 'sales executives', location: 'salem, tamil nadu', type: 'permanent', date: '19 february 2026' },
];

const REGIONS = [
  { name: 'haryana', count: 4 },
  { name: 'karnataka', count: 7 },
  { name: 'tamil nadu', count: 5 },
];

// --- Components ---

const Accordion = ({ title, children }: { title: string, children: React.ReactNode }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="border-b border-gray-200 py-4">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="flex w-full items-center justify-between text-left text-lg font-medium text-[#002758] hover:text-[#2175d9] transition-colors"
      >
        <span>{title}</span>
        <ChevronDown className={`h-5 w-5 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
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

export default function JobSearchPage() {
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');

  return (
    <div className="min-h-screen bg-white font-sans text-[#141414]">
      {/* Sticky Feedback Button */}
      <button className="fixed right-0 top-1/2 z-50 -translate-y-1/2 rotate-90 origin-right bg-[#2175d9] px-4 py-2 text-xs font-bold text-white rounded-t-md shadow-lg">
        Feedback
      </button>

      {/* Top Header */}
      <header className="border-b border-gray-100 bg-white px-4 py-2 md:px-8">
        <div className="mx-auto flex max-w-7xl items-center justify-between">
          <div className="flex items-center gap-8">
            <div className="flex items-center gap-2">
              <div className="h-8 w-8 bg-[#2175d9] rounded-sm flex items-center justify-center">
                <span className="text-white font-bold text-xl">r</span>
              </div>
              <span className="text-2xl font-bold tracking-tighter text-[#002758]">randstad</span>
            </div>
            <nav className="hidden lg:flex items-center gap-6 text-sm font-medium text-gray-600">
              <a href="#" className="flex items-center gap-1 hover:text-[#2175d9]">find a job <ChevronDown className="h-4 w-4" /></a>
              <a href="#" className="flex items-center gap-1 hover:text-[#2175d9]">for talent <ChevronDown className="h-4 w-4" /></a>
              <a href="#" className="flex items-center gap-1 hover:text-[#2175d9]">for employer <ChevronDown className="h-4 w-4" /></a>
              <a href="#" className="flex items-center gap-1 hover:text-[#2175d9]">resources <ChevronDown className="h-4 w-4" /></a>
              <a href="#" className="flex items-center gap-1 hover:text-[#2175d9]">about us <ChevronDown className="h-4 w-4" /></a>
            </nav>
          </div>
          <div className="flex items-center gap-4 text-sm font-medium">
            <a href="#" className="hidden md:block text-gray-500 hover:text-[#2175d9]">contact us</a>
            <div className="flex items-center gap-2">
              <Heart className="h-5 w-5 text-gray-400" />
              <span className="text-gray-400">0</span>
            </div>
            <a href="#" className="flex items-center gap-2 text-[#002758] hover:text-[#2175d9]">
              <div className="h-8 w-8 rounded-full border border-gray-300 flex items-center justify-center">
                <Menu className="h-4 w-4" />
              </div>
              <span className="hidden md:inline">my randstad</span>
            </a>
          </div>
        </div>
      </header>

      {/* Breadcrumbs */}
      <div className="bg-[#002758] px-4 py-3 md:px-8">
        <div className="mx-auto max-w-7xl text-[10px] uppercase tracking-wider text-white/60 flex items-center gap-2">
          <a href="#" className="hover:text-white">home</a>
          <ChevronRight className="h-3 w-3" />
          <a href="#" className="hover:text-white">jobs</a>
          <ChevronRight className="h-3 w-3" />
          <a href="#" className="hover:text-white">remote customer service</a>
          <ChevronRight className="h-3 w-3" />
          <a href="#" className="hover:text-white">commercial customer service workers</a>
          <ChevronRight className="h-3 w-3" />
          <span className="text-white">inside sales executive</span>
        </div>
      </div>

      {/* Search Section */}
      <section className="bg-[#002758] px-4 pb-12 pt-8 md:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 gap-4 md:grid-cols-12">
            <div className="md:col-span-4">
              <label className="mb-2 block text-sm font-medium text-white">search for</label>
              <div className="relative">
                <input 
                  type="text" 
                  placeholder="job title or keyword" 
                  className="w-full rounded-sm bg-white px-4 py-3 text-sm focus:outline-none"
                  defaultValue="inside sales executive"
                />
              </div>
            </div>
            <div className="md:col-span-4">
              <label className="mb-2 block text-sm font-medium text-white">where</label>
              <div className="relative">
                <input 
                  type="text" 
                  placeholder="city, state or postcode" 
                  className="w-full rounded-sm bg-white px-4 py-3 text-sm focus:outline-none"
                />
              </div>
            </div>
            <div className="md:col-span-2">
              <label className="mb-2 block text-sm font-medium text-white">range</label>
              <div className="relative">
                <select className="w-full appearance-none rounded-sm bg-white px-4 py-3 text-sm focus:outline-none">
                  <option>10 km</option>
                  <option>25 km</option>
                  <option>50 km</option>
                </select>
                <ChevronDown className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
              </div>
            </div>
            <div className="flex items-end md:col-span-2">
              <button className="w-full rounded-sm bg-[#2175d9] py-3 text-sm font-bold text-white hover:bg-[#1a5eb0] transition-colors">
                search 24 jobs
              </button>
            </div>
          </div>
          <div className="mt-4">
            <button className="flex items-center gap-2 text-sm text-white hover:underline">
              <MapPin className="h-4 w-4" />
              use current location
            </button>
          </div>
        </div>
      </section>

      {/* Results Header & Filters */}
      <section className="border-b border-gray-200 bg-white px-4 py-6 md:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mb-6 flex flex-col justify-between gap-4 md:flex-row md:items-center">
            <h1 className="text-2xl font-light text-[#002758]">
              24 <span className="font-bold">inside sales executive</span> jobs found for you.
            </h1>
            <div className="flex items-center gap-4">
              <div className="flex items-center rounded-md border border-gray-200 p-1">
                <button 
                  onClick={() => setViewMode('list')}
                  className={`p-1 ${viewMode === 'list' ? 'bg-gray-100 text-[#2175d9]' : 'text-gray-400'}`}
                >
                  <List className="h-5 w-5" />
                </button>
                <button 
                  onClick={() => setViewMode('grid')}
                  className={`p-1 ${viewMode === 'grid' ? 'bg-gray-100 text-[#2175d9]' : 'text-gray-400'}`}
                >
                  <LayoutGrid className="h-5 w-5" />
                </button>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <span className="text-gray-500">sort:</span>
                <button className="flex items-center gap-1 font-medium text-[#002758]">
                  date <ChevronDown className="h-4 w-4" />
                </button>
              </div>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <span className="text-sm font-medium text-gray-500">filters:</span>
            <button className="flex items-center gap-2 rounded-full border border-gray-300 px-4 py-2 text-sm font-medium hover:border-[#2175d9]">
              location <ChevronDown className="h-4 w-4" />
            </button>
            <button className="flex items-center gap-2 rounded-full border border-gray-300 px-4 py-2 text-sm font-medium hover:border-[#2175d9]">
              job types <ChevronDown className="h-4 w-4" />
            </button>
            <button className="flex items-center gap-2 rounded-full bg-[#002758] px-4 py-2 text-sm font-medium text-white">
              <span className="flex h-5 w-5 items-center justify-center rounded-full bg-[#2175d9] text-[10px]">3</span>
              professional field <ChevronDown className="h-4 w-4" />
            </button>
            <button className="rounded-full border border-gray-300 px-4 py-2 text-sm font-medium hover:border-[#2175d9]">
              all filters
            </button>
            <div className="ml-auto hidden lg:block">
              <button className="rounded-sm bg-[#2175d9] px-6 py-2 text-sm font-bold text-white hover:bg-[#1a5eb0]">
                save this search & get alerts
              </button>
            </div>
          </div>

          <div className="mt-6 flex flex-wrap items-center gap-2">
            <span className="text-xs font-medium text-gray-500">selected filters:</span>
            {['remote customer service', 'commercial customer service workers', 'inside sales executive'].map(filter => (
              <span key={filter} className="flex items-center gap-2 rounded-full bg-gray-100 px-3 py-1 text-xs font-medium text-gray-700">
                {filter}
                <X className="h-3 w-3 cursor-pointer hover:text-red-500" />
              </span>
            ))}
            <button className="text-xs font-medium text-[#2175d9] hover:underline">clear all</button>
          </div>
        </div>
      </section>

      {/* Job Grid */}
      <section className="bg-[#f5f2ed] px-4 py-12 md:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {MOCK_JOBS.map((job, idx) => (
              <motion.div 
                key={job.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.05 }}
                className="group relative flex flex-col rounded-sm bg-white p-6 shadow-sm transition-shadow hover:shadow-md"
              >
                <div className="mb-4 flex items-center justify-between text-xs text-gray-400">
                  <span>{job.date}</span>
                  <Info className="h-4 w-4 cursor-help" />
                </div>
                <h3 className="mb-4 text-xl font-bold text-[#2175d9] group-hover:underline">
                  <a href="#">{job.title}</a>
                </h3>
                <div className="mt-auto space-y-2 text-sm text-gray-600">
                  <div className="flex items-center gap-2">
                    <MapPin className="h-4 w-4 text-gray-400" />
                    <span>{job.location}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="h-4 w-4 flex items-center justify-center">
                      <div className="h-3 w-3 border border-gray-400 rounded-sm"></div>
                    </div>
                    <span>{job.type}</span>
                  </div>
                </div>
                <button className="absolute bottom-6 right-6 text-gray-300 hover:text-red-500 transition-colors">
                  <Heart className="h-6 w-6" />
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Info Sections */}
      <section className="bg-white px-4 py-16 md:px-8">
        <div className="mx-auto max-w-7xl grid grid-cols-1 gap-16 md:grid-cols-2">
          <div>
            <h2 className="mb-6 text-3xl font-light text-[#002758]">sales executive jobs overview</h2>
            <p className="mb-8 text-gray-600 leading-relaxed">
              On this page, you will find a list of our current sales executive jobs and an overview of the typical responsibilities and expectations of a sales executive. You can compare and filter relevant sales executive positions based on specialism, location and salary to find your ideal job match.
            </p>
            <div className="space-y-2">
              <Accordion title="sales executive jobs contract types">
                Details about different contract types...
              </Accordion>
              <Accordion title="about sales executive jobs">
                Information about what sales executive jobs entail...
              </Accordion>
              <Accordion title="how much does a sales executive make in India?">
                Salary insights for sales executives in India...
              </Accordion>
            </div>
          </div>
          <div>
            <h2 className="mb-6 text-3xl font-light text-[#002758]">how to apply for sales executive jobs</h2>
            <p className="mb-8 text-gray-600 leading-relaxed">
              If you are ready to apply for a sales executive job, take a look at our jobs list, filter to your preference and apply directly. If you require any further assistance applying for a role, feel free to contact <a href="#" className="text-[#2175d9] hover:underline">your nearest Randstad office</a> and a member of the team will be happy to point you in the right direction.
            </p>
            <div className="space-y-2">
              <Accordion title="how do I apply for a job as a sales executive?">
                Step-by-step guide on applying...
              </Accordion>
              <Accordion title="does randstad have any tips on how to search for sales executive jobs?">
                Expert tips for your job search...
              </Accordion>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-[#ffc62d] px-4 py-16 md:px-8 overflow-hidden relative">
        <div className="mx-auto max-w-7xl flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="z-10">
            <h2 className="mb-4 text-5xl font-bold text-[#002758] tracking-tight">let similar jobs come to you</h2>
            <p className="text-lg text-[#002758]">we will keep you updated when we have similar job postings.</p>
            <button className="mt-8 rounded-sm bg-[#002758] px-8 py-4 text-sm font-bold text-white hover:bg-[#001a3d] transition-colors">
              set a saved search & alert
            </button>
          </div>
          <div className="relative z-10">
            <div className="h-64 w-64 md:h-80 md:w-80 bg-white rounded-lg shadow-2xl flex items-center justify-center p-8">
               <div className="w-full h-full bg-[#2175d9] rounded flex flex-col items-center justify-center text-white">
                  <Mail className="h-24 w-24 mb-4" />
                  <div className="h-2 w-3/4 bg-white/20 rounded-full mb-2"></div>
                  <div className="h-2 w-1/2 bg-white/20 rounded-full"></div>
               </div>
            </div>
            {/* Decorative Arrow */}
            <div className="absolute -top-12 -left-12 text-[#002758]">
              <ChevronDown className="h-24 w-24 rotate-45 opacity-20" />
            </div>
          </div>
        </div>
        {/* Background Decorative Element */}
        <div className="absolute top-0 right-0 w-1/2 h-full bg-[#002758]/5 -skew-x-12 translate-x-1/4"></div>
      </section>

      {/* Regions Section */}
      <section className="bg-white px-4 py-16 md:px-8">
        <div className="mx-auto max-w-7xl">
          <h2 className="mb-12 text-4xl font-light text-[#002758]">inside sales executive jobs by region</h2>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {REGIONS.map(region => (
              <a key={region.name} href="#" className="text-lg text-[#2175d9] hover:underline">
                {region.name} ({region.count})
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#001a3d] px-4 pt-16 pb-8 text-white md:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-2 gap-12 md:grid-cols-4 lg:grid-cols-5">
            <div className="col-span-2 lg:col-span-1">
              <h3 className="mb-6 text-lg font-bold">find a job</h3>
              <ul className="space-y-3 text-sm text-gray-400">
                <li><a href="#" className="hover:text-white">explore all jobs</a></li>
                <li><a href="#" className="hover:text-white">submit your cv</a></li>
                <li><a href="#" className="hover:text-white">join our team</a></li>
                <li><a href="#" className="hover:text-white">refer a friend</a></li>
              </ul>
              <h3 className="mt-12 mb-6 text-lg font-bold">for talents</h3>
              <ul className="space-y-3 text-sm text-gray-400">
                <li><a href="#" className="hover:text-white">specialisms</a></li>
                <li><a href="#" className="hover:text-white">testimonials</a></li>
                <li><a href="#" className="hover:text-white">career advice</a></li>
                <li><a href="#" className="hover:text-white">beware of job scams</a></li>
              </ul>
            </div>
            <div>
              <h3 className="mb-6 text-lg font-bold">for employers</h3>
              <ul className="space-y-3 text-sm text-gray-400">
                <li><a href="#" className="hover:text-white">submit a vacancy</a></li>
                <li><a href="#" className="hover:text-white">request a callback</a></li>
                <li><a href="#" className="hover:text-white">our services</a></li>
                <li><a href="#" className="hover:text-white">specialisms</a></li>
                <li><a href="#" className="hover:text-white">case studies</a></li>
                <li><a href="#" className="hover:text-white">testimonials</a></li>
              </ul>
              <h3 className="mt-12 mb-6 text-lg font-bold">resources</h3>
              <ul className="space-y-3 text-sm text-gray-400">
                <li><a href="#" className="hover:text-white">case studies</a></li>
                <li><a href="#" className="hover:text-white">press room</a></li>
                <li><a href="#" className="hover:text-white">blogs</a></li>
              </ul>
            </div>
            <div className="col-span-2 lg:col-span-1">
              <h3 className="mb-6 text-lg font-bold">workforce insights</h3>
              <ul className="space-y-3 text-sm text-gray-400">
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
              <h3 className="mb-6 text-lg font-bold">jobs</h3>
              <ul className="space-y-3 text-sm text-gray-400">
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
          </div>

          <div className="mt-16 border-t border-white/10 pt-8">
            <div className="flex flex-col md:flex-row justify-between gap-8">
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <a href="#" className="h-10 w-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#2175d9] transition-colors">
                    <Linkedin className="h-5 w-5" />
                  </a>
                </div>
                <p className="text-[10px] text-gray-500 max-w-2xl">
                  registered office: Randstad India Private Limited, CIN U74210TN1992PTC023097,/Randstad House, Old No. 5 & 5A, New No. 9, Pycrofts Garden Road, Nungambakkam, Chennai, TN - 600 006
                </p>
                <div className="flex items-center gap-2 text-[10px] text-gray-500">
                  <span className="font-bold text-white">RANDSTAD,</span>
                  <div className="h-4 w-6 bg-[#2175d9] rounded-sm"></div>
                  <span>HUMAN FORWARD and SHAPING THE WORLD OF WORK are registered trademarks of © Randstad N.V.2023</span>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-12 space-y-6 text-xs text-gray-500">
            <p>
              <span className="font-bold text-gray-300">Security Advice:</span> Randstad India does not charge any fee at any stage of its recruitment process from the candidate nor allows their employees to collect any fees from any candidates. <a href="#" className="text-[#2175d9] hover:underline">Click here to know more</a>
            </p>
            <p>
              <span className="font-bold text-gray-300">EEO Statement:</span> Randstad India is an Equal Employment Opportunity Employer. All qualified applicants receive consideration for employment without regard to race, color, religion, sex, sexual orientation, gender identity or expression, appearance, national origin, age, marital status, veteran status, or disability status, or any other characteristics. Our global mission is to become the world's most equitable and specialized talent company, and we actively embrace diversity and inclusion as the cornerstones of our success. To read more of Randstad India's work in the space of equity, diversity and inclusion please <a href="#" className="text-[#2175d9] hover:underline">click here</a>
            </p>
          </div>

          <div className="mt-12 flex flex-wrap gap-6 text-[10px] font-bold uppercase tracking-widest text-gray-400">
            <a href="#" className="hover:text-white">terms & conditions</a>
            <a href="#" className="hover:text-white">cookies</a>
            <a href="#" className="hover:text-white">misconduct reporting procedure</a>
            <a href="#" className="hover:text-white">accessibility</a>
            <a href="#" className="hover:text-white">be aware</a>
            <a href="#" className="hover:text-white">sitemap</a>
            <a href="#" className="hover:text-white">privacy statement</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
