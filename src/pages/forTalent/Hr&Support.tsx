import React, { useState } from "react";
import { AnimatePresence, motion } from "motion/react";

import { 
  Search, 
  Heart, 
  User, 
  ChevronDown, 
  ArrowRight, 
  MapPin, 
  Facebook, 
  Twitter, 
  Linkedin, 
  Youtube, 
  Instagram,
  Menu,
  X
} from 'lucide-react';

const RandstadPage: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeAccordion, setActiveAccordion] = useState<string | null>(null);

  const toggleAccordion = (id: string) => {
    setActiveAccordion(activeAccordion === id ? null : id);
  };

  const navItems = [
    { label: 'find a job', hasDropdown: true },
    { label: 'for talent', hasDropdown: true },
    { label: 'for employer', hasDropdown: true },
    { label: 'resources', hasDropdown: true },
    { label: 'about us', hasDropdown: true },
  ];

  const footerLinks = {
    'find a job': ['explore all jobs', 'submit your cv', 'join our team', 'refer a friend'],
    'for employers': ['submit a vacancy', 'request a callback', 'our services', 'specialisms', 'case studies', 'testimonials'],
    'workforce insights': ['talent insights reports', 'employer brand research reports', 'salary trends reports', 'ed&i reports', 'workmonitor reports', 'startup hiring trends', 'talent pulse surveys'],
    'jobs': ['engineering jobs', 'cxo jobs', 'manufacturing jobs', 'supply chain & logistics jobs', 'education jobs', 'finance & accounting jobs', 'healthcare jobs', 'hr & admin support jobs', 'ites/gcc jobs', 'legal & compliance jobs', 'sales & marketing jobs'],
    'for talents': ['specialisms', 'testimonials', 'career advice', 'beware of job scams'],
    'resources': ['case studies', 'press room', 'blogs']
  };

  const updates = [
    {
      date: '02 August 2023',
      title: 'randstad with heart.',
      image: 'https://picsum.photos/seed/heart/800/500'
    },
    {
      date: '17 January 2023',
      title: 'how to stand out in an interview.',
      image: 'https://picsum.photos/seed/interview/800/500'
    },
    {
      date: '17 January 2023',
      title: '5 tips to ace your video interview.',
      image: 'https://picsum.photos/seed/video/800/500'
    },
    {
      date: '17 January 2023',
      title: 'declining a job offer.',
      image: 'https://picsum.photos/seed/decline/800/500'
    },
    {
      date: '17 January 2023',
      title: 'how to negotiate and accept your job offer.',
      image: 'https://picsum.photos/seed/negotiate/800/500'
    },
    {
      date: '12 January 2023',
      title: 'prepare answers for tough interview questions.',
      image: 'https://picsum.photos/seed/tough/800/500'
    }
  ];

  return (
    <div className="min-h-screen bg-white font-sans text-[#141414] selection:bg-[#213970] selection:text-white">
      {/* Top Bar */}
      <div className="hidden lg:flex justify-end px-12 py-2 border-b border-gray-100">
        <a href="#" className="text-xs text-gray-500 hover:text-[#213970] transition-colors">contact us</a>
      </div>

      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12 h-20 flex items-center justify-between">
          <div className="flex items-center gap-12">
            {/* Logo */}
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 flex items-center justify-center">
                <svg viewBox="0 0 40 40" className="w-full h-full text-[#213970]">
                  <path fill="currentColor" d="M10 10h20v4H10zM10 18h20v4H10zM10 26h20v4H10z" className="opacity-20" />
                  <path fill="currentColor" d="M5 5v30h30V5H5zm28 28H7V7h26v26z" />
                  <path fill="currentColor" d="M12 12h16v4H12zM12 24h16v4H12z" />
                </svg>
              </div>
              <span className="text-2xl font-bold tracking-tighter text-[#213970]">randstad</span>
            </div>

            {/* Desktop Nav */}
            <nav className="hidden xl:flex items-center gap-8">
              {navItems.map((item) => (
                <button key={item.label} className="flex items-center gap-1 text-sm font-medium hover:text-[#213970] transition-colors group">
                  {item.label}
                  {item.hasDropdown && <ChevronDown size={14} className="group-hover:rotate-180 transition-transform duration-300" />}
                </button>
              ))}
            </nav>
          </div>

          <div className="flex items-center gap-6">
            <div className="hidden lg:flex items-center gap-6">
              <button className="hover:text-[#213970] transition-colors"><Heart size={20} /></button>
              <button className="flex items-center gap-2 hover:text-[#213970] transition-colors">
                <User size={20} />
                <span className="text-sm font-medium">my randstad</span>
              </button>
            </div>
            <button 
              className="xl:hidden p-2 hover:bg-gray-100 rounded-full transition-colors"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="absolute top-20 left-0 w-full bg-white border-b border-gray-200 xl:hidden p-6 shadow-xl"
            >
              <nav className="flex flex-col gap-4">
                {navItems.map((item) => (
                  <button key={item.label} className="flex items-center justify-between text-lg font-medium py-2 border-b border-gray-50">
                    {item.label}
                    <ChevronDown size={20} />
                  </button>
                ))}
                <div className="flex flex-col gap-4 mt-4">
                  <button className="flex items-center gap-3 text-lg font-medium py-2">
                    <Heart size={20} /> favorites
                  </button>
                  <button className="flex items-center gap-3 text-lg font-medium py-2">
                    <User size={20} /> my randstad
                  </button>
                </div>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      <main>
        {/* Breadcrumbs */}
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12 py-4">
          <nav className="flex items-center gap-2 text-xs text-gray-400">
            <a href="#" className="hover:text-[#213970]">home</a>
            <span>›</span>
            <a href="#" className="hover:text-[#213970]">job seekers</a>
            <span>›</span>
            <a href="#" className="hover:text-[#213970]">areas of expertise</a>
            <span>›</span>
            <span className="text-gray-600">hr & support</span>
          </nav>
        </div>

        {/* Hero Section */}
        <section className="bg-[#213970] text-white overflow-hidden relative">
          <div className="max-w-[1440px] mx-auto px-6 lg:px-12 py-20 lg:py-32 flex flex-col lg:flex-row items-center justify-between gap-12">
            <div className="max-w-2xl z-10">
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-5xl lg:text-7xl font-light leading-tight mb-8"
              >
                a partner for HR and support professionals.
              </motion.h1>
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-lg lg:text-xl opacity-90 mb-12 leading-relaxed"
              >
                Find the right job, love what you do, and develop your career. With access to a wide range of roles with top employers, a global community of professional peers, and specialised training and support, we'll be your guiding partner and help you build a rewarding career.
              </motion.p>
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="flex flex-wrap gap-4"
              >
                <button className="px-8 py-4 border border-white rounded-md font-medium hover:bg-white hover:text-[#213970] transition-all duration-300">
                  explore available jobs
                </button>
                <button className="px-8 py-4 border border-white rounded-md font-medium hover:bg-white hover:text-[#213970] transition-all duration-300">
                  submit your resume
                </button>
              </motion.div>
            </div>

            {/* Abstract Circles */}
            <div className="relative w-full lg:w-1/2 h-[300px] lg:h-[500px]">
              <motion.div 
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 8, repeat: Infinity }}
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] lg:w-[450px] lg:h-[450px] border-4 border-white/20 rounded-full"
              />
              <motion.div 
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 10, repeat: Infinity, delay: 1 }}
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[200px] h-[200px] lg:w-[300px] lg:h-[300px] bg-gradient-to-br from-purple-500/40 to-blue-500/40 rounded-full blur-2xl"
              />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center gap-4">
                <div className="w-8 h-8 bg-purple-600 rounded-full" />
                <div className="w-12 h-12 bg-purple-400 rounded-full" />
                <div className="w-16 h-16 bg-purple-300 rounded-full" />
              </div>
            </div>
          </div>
        </section>

        {/* What we do */}
        <section className="flex flex-col lg:flex-row">
          <div className="w-full lg:w-1/2 bg-[#F5F5F5] p-12 lg:p-24 flex flex-col justify-center">
            <h2 className="text-5xl font-light mb-8">what we do.</h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              HR, office and administration has always been at the heart of our services, our consultants are experts and really understand your needs and preferences. Combined with our wide range of available jobs with the best companies in the market provides you the guarantee that there are always jobs that are a perfect match for you.
            </p>
          </div>
          <div className="w-full lg:w-1/2 h-[400px] lg:h-auto">
            <img 
              src="https://picsum.photos/seed/office1/1200/800" 
              alt="Professional at work" 
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
        </section>

        {/* What we offer */}
        <section className="flex flex-col lg:flex-row-reverse">
          <div className="w-full lg:w-1/2 bg-white p-12 lg:p-24 flex flex-col justify-center">
            <h2 className="text-5xl font-light mb-8">what we offer you.</h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              we provide you with a wonderful experience as we will be your guiding partner throughout every stage of your career. With timely and honest feedback, aiming at a lasting relationship even during the stages you don't work for us. By working with us you will have the opportunity for professional development with personalised follow up and at the same time build valuable relationships and networks with your industry.
            </p>
          </div>
          <div className="w-full lg:w-1/2 h-[400px] lg:h-auto">
            <img 
              src="https://picsum.photos/seed/office2/1200/800" 
              alt="Team meeting" 
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
        </section>

        {/* Recruiting Roles */}
        <section className="bg-[#213970] text-white py-24">
          <div className="max-w-[1440px] mx-auto px-6 lg:px-12 flex flex-col lg:flex-row gap-12">
            <div className="lg:w-1/3">
              <h2 className="text-4xl font-light leading-tight">roles we're currently recruiting for.</h2>
            </div>
            <div className="lg:w-2/3 flex flex-col gap-4">
              {['HR', 'administration', 'legal'].map((role) => (
                <div key={role} className="border-b border-white/20">
                  <button 
                    onClick={() => toggleAccordion(role)}
                    className="w-full py-6 flex items-center justify-between text-xl hover:opacity-70 transition-opacity"
                  >
                    <span>see all roles in {role}</span>
                    <ChevronDown className={`transition-transform duration-300 ${activeAccordion === role ? 'rotate-180' : ''}`} />
                  </button>
                  <AnimatePresence>
                    {activeAccordion === role && (
                      <motion.div 
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="overflow-hidden"
                      >
                        <div className="pb-8 grid grid-cols-1 md:grid-cols-2 gap-4 text-white/70">
                          <a href="#" className="hover:text-white transition-colors">HR Manager</a>
                          <a href="#" className="hover:text-white transition-colors">Recruitment Specialist</a>
                          <a href="#" className="hover:text-white transition-colors">Office Administrator</a>
                          <a href="#" className="hover:text-white transition-colors">Legal Counsel</a>
                          <a href="#" className="hover:text-white transition-colors">Compliance Officer</a>
                          <a href="#" className="hover:text-white transition-colors">Payroll Executive</a>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Job Roles Info */}
        <section className="flex flex-col lg:flex-row">
          <div className="w-full lg:w-1/2 bg-[#213970] text-white p-12 lg:p-24 flex flex-col justify-center">
            <h2 className="text-5xl font-light mb-8 leading-tight">learn more about job roles in HR, office & administration support.</h2>
            <p className="text-lg opacity-80 leading-relaxed mb-12">
              Our job profiles have been created to familiarise you with the responsibilities and day-to-day activities of a number of key job roles, so you can make the right decision before applying for a job. Start exploring qualifications, responsibilities, pay rates and more in each job.
            </p>
            <button className="w-fit px-8 py-4 border border-white rounded-md font-medium hover:bg-white hover:text-[#213970] transition-all duration-300">
              learn more
            </button>
          </div>
          <div className="w-full lg:w-1/2 h-[400px] lg:h-auto">
            <img 
              src="https://picsum.photos/seed/office3/1200/800" 
              alt="People talking" 
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
        </section>

        {/* Latest Updates */}
        <section className="py-24 max-w-[1440px] mx-auto px-6 lg:px-12">
          <div className="flex items-center justify-between mb-12">
            <h2 className="text-4xl font-light">latest updates</h2>
            <a href="#" className="text-[#213970] font-medium flex items-center gap-2 group">
              see all articles
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {updates.map((update, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="group cursor-pointer"
              >
                <div className="aspect-[16/10] overflow-hidden rounded-lg mb-6">
                  <img 
                    src={update.image} 
                    alt={update.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <p className="text-sm text-gray-500 mb-2">{update.date}</p>
                <h3 className="text-2xl font-light group-hover:text-[#213970] transition-colors">{update.title}</h3>
              </motion.div>
            ))}
          </div>
        </section>

        {/* FAQs */}
        <section className="bg-[#213970] text-white py-24 relative overflow-hidden">
          <div className="max-w-[1440px] mx-auto px-6 lg:px-12 flex flex-col lg:flex-row items-center justify-between gap-12 relative z-10">
            <div className="max-w-xl">
              <p className="text-lg mb-4 opacity-80">FAQs</p>
              <h2 className="text-5xl lg:text-7xl font-light leading-tight mb-8">frequently asked questions and answers.</h2>
              <p className="text-lg opacity-80 mb-12">We provide answers to the most common questions that applicants and companies ask us about working with Randstad.</p>
              <button className="px-8 py-4 border border-white rounded-md font-medium hover:bg-white hover:text-[#213970] transition-all duration-300">
                learn more
              </button>
            </div>
            <div className="relative w-full lg:w-1/2 h-[300px] flex items-center justify-center">
              <div className="absolute w-[250px] h-[180px] border-4 border-purple-500 rounded-[100px] -rotate-12" />
              <div className="absolute w-[250px] h-[180px] border-4 border-purple-300 rounded-[100px] rotate-12 translate-x-12 opacity-50" />
            </div>
          </div>
        </section>

        {/* Branch Locator */}
        <section className="py-24 bg-white">
          <div className="max-w-[1440px] mx-auto px-6 lg:px-12 flex flex-col lg:flex-row items-center justify-between gap-12">
            <div className="max-w-xl">
              <h2 className="text-5xl lg:text-7xl font-light leading-tight mb-6">we'd love to have you over.</h2>
              <p className="text-xl text-gray-600 mb-12">find a branch close to you.</p>
              <div className="flex gap-2">
                <input 
                  type="text" 
                  placeholder="postcode / city" 
                  className="flex-1 px-6 py-4 border border-gray-200 rounded-md focus:outline-none focus:border-[#213970] transition-colors"
                />
                <button className="bg-[#213970] text-white p-4 rounded-md hover:bg-[#1a2d59] transition-colors">
                  <ArrowRight />
                </button>
              </div>
            </div>
            <div className="relative text-[#A855F7]">
              <MapPin size={300} strokeWidth={0.5} className="opacity-10" />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                <div className="w-24 h-24 border-[12px] border-current rounded-full flex items-center justify-center">
                  <div className="w-6 h-6 bg-current rounded-full" />
                </div>
                <div className="w-32 h-2 bg-current/20 rounded-full mt-4 blur-sm" />
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-[#0D1B3E] text-white pt-24 pb-12">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-2 lg:grid-cols-4 xl:grid-cols-6 gap-12 mb-24">
            {Object.entries(footerLinks).map(([title, links]) => (
              <div key={title}>
                <h4 className="text-lg font-medium mb-8">{title}</h4>
                <ul className="flex flex-col gap-4">
                  {links.map((link) => (
                    <li key={link}>
                      <a href="#" className="text-sm text-gray-400 hover:text-white transition-colors">{link}</a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="flex flex-col lg:flex-row items-center justify-between gap-12 pt-12 border-t border-white/10">
            <div className="flex items-center gap-6">
              {[Linkedin, Twitter, Facebook, Youtube, Instagram].map((Icon, idx) => (
                <a key={idx} href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-white/20 transition-colors">
                  <Icon size={20} />
                </a>
              ))}
            </div>
            <div className="flex flex-wrap justify-center gap-8 text-xs text-gray-400">
              <a href="#" className="hover:text-white transition-colors">terms & conditions</a>
              <a href="#" className="hover:text-white transition-colors">cookies</a>
              <a href="#" className="hover:text-white transition-colors">misconduct reporting procedure</a>
              <a href="#" className="hover:text-white transition-colors">accessibility</a>
              <a href="#" className="hover:text-white transition-colors">be aware</a>
              <a href="#" className="hover:text-white transition-colors">sitemap</a>
              <a href="#" className="hover:text-white transition-colors">privacy statement</a>
            </div>
          </div>

          <div className="mt-12 text-[10px] text-gray-500 leading-relaxed max-w-4xl">
            <p className="mb-4">registered office: Randstad India Private Limited, CIN U74210TN1992PTC023097, Randstad House, Old No. 5 & 5A, New No. 9, Pycrofts Garden Road, Nungambakkam, Chennai, TN - 600 006</p>
            <p className="mb-8">RANDSTAD, HUMAN FORWARD and SHAPING THE WORLD OF WORK are registered trademarks of © Randstad N.V. 2023</p>
            <p className="mb-4">Security Advice: Randstad India does not charge any fee at any stage of its recruitment process from the candidate nor allows their employees to collect any fees from any candidates. <a href="#" className="underline">Click here to know more</a></p>
            <p>EEO Statement: Randstad India is an Equal Employment Opportunity Employer. All qualified applicants receive consideration for employment without regard to race, color, religion, sex, sexual orientation, gender identity or expression, appearance, national origin, age, marital status, veteran status, or disability status, or any other characteristics. Our global mission is to become the world's most equitable and specialized talent company, and we actively embrace diversity and inclusion as the cornerstones of our success. To read more of Randstad India's work in the space of equity, diversity and inclusion please <a href="#" className="underline">click here</a></p>
          </div>
        </div>
      </footer>

      {/* Cookie Consent Floating Button */}
      <button className="fixed bottom-6 left-6 w-12 h-12 bg-[#213970] text-white rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform z-50">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-6 h-6">
          <path d="M12 2a10 10 0 1 0 10 10 4 4 0 0 1-5-5 4 4 0 0 1-5-5" />
          <circle cx="12" cy="12" r="1" />
          <circle cx="15" cy="15" r="1" />
          <circle cx="9" cy="16" r="1" />
          <circle cx="8" cy="11" r="1" />
        </svg>
      </button>

      {/* Feedback Tab */}
      <button className="fixed right-0 top-1/2 -translate-y-1/2 bg-[#3B82F6] text-white px-2 py-4 rounded-l-md text-xs font-bold tracking-widest [writing-mode:vertical-lr] rotate-180 z-50 hover:pr-4 transition-all">
        FEEDBACK
      </button>
    </div>
  );
};

export default RandstadPage;
