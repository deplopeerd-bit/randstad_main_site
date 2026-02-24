import React, { useState } from "react";
import { motion } from "motion/react";

import { 
  Search, 
  Heart, 
  User, 
  ChevronDown, 
  MapPin, 
  Briefcase, 
  Clock, 
  ArrowRight,
  Linkedin,
  Twitter,
  Facebook,
  Youtube,
  Instagram,
  Info
} from 'lucide-react';

const EngineeringJobs: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { name: 'find a job', hasDropdown: true },
    { name: 'for talent', hasDropdown: true },
    { name: 'for employer', hasDropdown: true },
    { name: 'resources', hasDropdown: true },
    { name: 'about us', hasDropdown: true },
  ];

  const jobs = [
    {
      title: 'engineering coordinatore',
      location: 'jagiroad, assam',
      type: 'permanent',
      posted: '20 january 2026'
    }
  ];

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
    }
  ];

  return (
    <div className="min-h-screen flex flex-col overflow-x-hidden">
      {/* Top Bar */}
      <div className="bg-white border-b border-gray-100 py-2 px-4 md:px-12 flex justify-end">
        <a href="#" className="text-xs text-randstad-blue hover:underline">contact us</a>
      </div>

      {/* Header */}
      <header className="bg-white sticky top-0 z-50 px-4 md:px-12 py-4 flex items-center justify-between shadow-sm">
        <div className="flex items-center gap-12">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <svg width="140" height="32" viewBox="0 0 140 32" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12.5 8C12.5 3.58172 8.91828 0 4.5 0H0V32H4.5C8.91828 32 12.5 28.4183 12.5 24V8Z" fill="#2175D9"/>
              <path d="M25 8C25 3.58172 21.4183 0 17 0H14V32H17C21.4183 32 25 28.4183 25 24V8Z" fill="#001935"/>
              <text x="30" y="24" fontFamily="Arial" fontSize="24" fontWeight="bold" fill="#001935">randstad</text>
            </svg>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => (
              <div key={item.name} className="nav-link">
                {item.name}
                {item.hasDropdown && <ChevronDown size={14} />}
              </div>
            ))}
          </nav>
        </div>

        <div className="flex items-center gap-6">
          <div className="hidden md:flex items-center gap-4 text-randstad-blue">
            <Heart size={20} className="cursor-pointer hover:text-randstad-light-blue" />
            <div className="flex items-center gap-2 cursor-pointer hover:text-randstad-light-blue">
              <User size={20} />
              <span className="text-sm font-medium">my randstad</span>
            </div>
          </div>
          <button className="lg:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <div className="w-6 h-0.5 bg-randstad-blue mb-1.5"></div>
            <div className="w-6 h-0.5 bg-randstad-blue mb-1.5"></div>
            <div className="w-6 h-0.5 bg-randstad-blue"></div>
          </button>
        </div>
      </header>

      {/* Breadcrumbs */}
      <div className="bg-randstad-blue text-white/60 text-xs px-4 md:px-12 py-3 flex gap-2">
        <span>home</span>
        <span>&gt;</span>
        <span>operational career</span>
        <span>&gt;</span>
        <span className="text-white">engineering</span>
      </div>

      {/* Hero Section */}
      <section className="bg-randstad-blue text-white py-20 px-4 md:px-12 relative overflow-hidden">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 items-center gap-12">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-5xl md:text-7xl font-light leading-tight mb-8">
              a partner for<br />engineering<br />professionals.
            </h1>
            <p className="text-lg text-white/80 max-w-lg mb-10 leading-relaxed">
              Secure a job that complements your skills, supports work-life balance, and powers your goals. 
              Get access to a range of job opportunities through permanent, temp, or contract roles with 
              the best employers, plus ongoing training from a trusted partner who cares about your working life and well-being.
            </p>
            <div className="flex flex-wrap gap-4">
              <button className="btn-primary">explore available jobs</button>
              <button className="btn-outline">submit your resume</button>
            </div>
          </motion.div>

          <div className="hidden md:flex justify-center relative">
            {/* Abstract Graphic */}
            <div className="relative w-full h-64 flex items-center justify-center">
              <div className="flex items-center gap-2">
                {[40, 60, 100, 140, 120, 160, 100, 80, 60, 40].map((h, i) => (
                  <motion.div 
                    key={i}
                    initial={{ height: 0 }}
                    animate={{ height: h }}
                    transition={{ delay: i * 0.1, duration: 0.5, repeat: Infinity, repeatType: 'reverse' }}
                    className={`w-4 rounded-full ${i % 3 === 0 ? 'bg-randstad-green' : i % 3 === 1 ? 'bg-white' : 'bg-randstad-light-blue'}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What we do */}
      <section className="py-24 px-4 md:px-12 bg-white">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 items-center gap-16">
          <div>
            <h2 className="section-title">what we do.</h2>
            <p className="text-lg text-randstad-blue/80 leading-relaxed">
              Our consultants are experts within their specialisation and really understand your needs and preferences. 
              Combined with our wide range of available jobs with the best companies in the market, this provides 
              you with the guarantee that there are always jobs that are a perfect match for you.
            </p>
          </div>
          <div className="relative aspect-video overflow-hidden">
            <img 
              src="https://picsum.photos/seed/randstad1/1200/800" 
              alt="Professional working" 
              className="object-cover w-full h-full"
              referrerPolicy="no-referrer"
            />
          </div>
        </div>
      </section>

      {/* What we offer */}
      <section className="py-24 px-4 md:px-12 bg-randstad-blue text-white">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 items-center gap-16">
          <div className="order-2 md:order-1 relative aspect-video overflow-hidden">
            <img 
              src="https://picsum.photos/seed/randstad2/1200/800" 
              alt="Factory setting" 
              className="object-cover w-full h-full"
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="order-1 md:order-2">
            <h2 className="section-title">what we offer you.</h2>
            <p className="text-lg text-white/80 leading-relaxed">
              We provide you with a wonderful experience as we will be your guiding partner throughout every stage of your career. 
              With timely and honest feedback, aiming at a lasting relationship even during the stages when you don't work for us. 
              By becoming a member of our lively communities, you will have the opportunity to build valuable relationships 
              with peers and networks within your industry.
            </p>
          </div>
        </div>
      </section>

      {/* Learn more */}
      <section className="py-24 px-4 md:px-12 bg-white">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 items-center gap-16">
          <div>
            <h2 className="section-title">learn more about job roles in engineering.</h2>
            <p className="text-lg text-randstad-blue/80 leading-relaxed mb-8">
              Our job profiles have been created to familiarise you with the responsibilities and day-to-day activities of a number 
              of key job roles, so you can make the right decision before applying for a job. Start exploring qualifications, 
              responsibilities, pay rates and more in each job.
            </p>
            <button className="btn-outline !border-randstad-blue !text-randstad-blue hover:!bg-randstad-blue hover:!text-white">
              learn more
            </button>
          </div>
          <div className="relative aspect-video overflow-hidden">
            <img 
              src="https://picsum.photos/seed/randstad3/1200/800" 
              alt="Office discussion" 
              className="object-cover w-full h-full"
              referrerPolicy="no-referrer"
            />
          </div>
        </div>
      </section>

      {/* Latest Jobs */}
      <section className="py-24 px-4 md:px-12 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="section-title">our latest jobs in engineering.</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {jobs.map((job, idx) => (
              <div key={idx} className="card group">
                <div className="flex justify-between items-start mb-6">
                  <h3 className="text-xl font-medium text-randstad-light-blue group-hover:underline cursor-pointer">
                    {job.title}
                  </h3>
                  <Heart size={20} className="text-gray-400 cursor-pointer hover:text-red-500" />
                </div>
                <div className="space-y-3 text-randstad-blue/70 mb-8">
                  <div className="flex items-center gap-2">
                    <MapPin size={16} />
                    <span className="text-sm">{job.location}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Briefcase size={16} />
                    <span className="text-sm">{job.type}</span>
                  </div>
                </div>
                <div className="flex justify-between items-center pt-6 border-t border-gray-100">
                  <span className="text-xs text-gray-400">posted {job.posted}</span>
                  <Info size={16} className="text-gray-400 cursor-pointer" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Recruiting For */}
      <section className="py-24 px-4 md:px-12 bg-white">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start gap-12">
          <h2 className="text-3xl font-light max-w-xs">roles we're currently recruiting for.</h2>
          <div className="flex-1 w-full">
            <div className="border-b border-gray-200 py-6 flex justify-between items-center cursor-pointer group">
              <span className="text-2xl font-light group-hover:text-randstad-light-blue transition-colors">see all roles in engineering</span>
              <ChevronDown size={24} className="text-randstad-light-blue" />
            </div>
          </div>
        </div>
      </section>

      {/* Talent Pool */}
      <section className="bg-randstad-blue text-white py-0 px-0 overflow-hidden">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 items-center">
          <div className="p-12 md:p-24">
            <h2 className="section-title">join our talent pool for future opportunities in engineering.</h2>
            <p className="text-lg text-white/80 mb-10 leading-relaxed">
              Can't find a job in the engineering sector that matches your interests? 
              Submit your application and resume, and our team will contact you when a suitable opportunity arises.
            </p>
            <button className="btn-outline">submit resume now</button>
          </div>
          <div className="h-full min-h-[400px]">
            <img 
              src="https://picsum.photos/seed/talent/1000/1000" 
              alt="Engineer working" 
              className="object-cover w-full h-full"
              referrerPolicy="no-referrer"
            />
          </div>
        </div>
      </section>

      {/* Latest Updates */}
      <section className="py-24 px-4 md:px-12 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-end mb-12">
            <h2 className="section-title mb-0">latest updates</h2>
            <a href="#" className="text-randstad-light-blue hover:underline flex items-center gap-2">
              see all articles <ArrowRight size={16} />
            </a>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {updates.map((update, idx) => (
              <div key={idx} className="group cursor-pointer">
                <div className="aspect-[4/3] overflow-hidden mb-6">
                  <img 
                    src={update.image} 
                    alt={update.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <span className="text-xs text-gray-400 block mb-2">{update.date}</span>
                <h3 className="text-2xl font-light group-hover:text-randstad-light-blue transition-colors">{update.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-24 px-4 md:px-12 bg-randstad-blue text-white overflow-hidden">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 items-center gap-16">
          <div>
            <span className="text-sm uppercase tracking-widest mb-4 block opacity-70">FAQs</span>
            <h2 className="section-title">frequently asked questions and answers.</h2>
            <p className="text-lg text-white/80 mb-10 leading-relaxed">
              We provide answers to the most common questions that applicants and companies ask us about working with Randstad.
            </p>
            <button className="btn-outline">learn more</button>
          </div>
          <div className="relative flex justify-center">
            {/* Phone Graphic */}
            <div className="w-64 h-[450px] border-4 border-randstad-green rounded-[40px] relative p-4 flex flex-col gap-4">
              <div className="w-20 h-1.5 bg-randstad-green rounded-full mx-auto mb-8"></div>
              <div className="flex items-center gap-2">
                <div className="w-full h-12 bg-randstad-green/20 rounded-lg"></div>
              </div>
              <div className="w-3/4 h-8 bg-randstad-green/20 rounded-lg"></div>
              <div className="w-full h-24 bg-randstad-green/20 rounded-lg mt-auto"></div>
              
              {/* Soundwaves */}
              <div className="absolute -right-12 top-1/2 -translate-y-1/2 flex gap-2">
                {[30, 50, 80, 50, 30].map((h, i) => (
                  <div key={i} className="w-2 bg-randstad-green rounded-full" style={{ height: h }}></div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Branch Locator */}
      <section className="py-24 px-4 md:px-12 bg-gray-50">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 items-center gap-16">
          <div>
            <h2 className="section-title">we'd love to have you over.</h2>
            <p className="text-lg text-randstad-blue/80 mb-10">find a branch close to you.</p>
            <div className="flex max-w-md">
              <input 
                type="text" 
                placeholder="postcode / city" 
                className="flex-1 px-6 py-4 bg-white border border-gray-200 focus:outline-none focus:border-randstad-light-blue"
              />
              <button className="bg-randstad-light-blue text-white px-6 py-4 hover:bg-randstad-blue transition-colors">
                <ArrowRight size={20} />
              </button>
            </div>
          </div>
          <div className="flex justify-center">
            <div className="relative">
              <MapPin size={200} className="text-randstad-green stroke-1" />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-white rounded-full border-4 border-randstad-light-blue flex items-center justify-center">
                <div className="w-4 h-4 bg-randstad-light-blue rounded-full"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-randstad-blue text-white pt-24 pb-12 px-4 md:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12 mb-20">
            <div>
              <h4 className="font-medium mb-6">find a job</h4>
              <ul className="space-y-2">
                <li><a href="#" className="footer-link">explore all jobs</a></li>
                <li><a href="#" className="footer-link">submit your cv</a></li>
                <li><a href="#" className="footer-link">join our team</a></li>
                <li><a href="#" className="footer-link">refer a friend</a></li>
              </ul>
              <h4 className="font-medium mt-12 mb-6">for talents</h4>
              <ul className="space-y-2">
                <li><a href="#" className="footer-link">specialisms</a></li>
                <li><a href="#" className="footer-link">testimonials</a></li>
                <li><a href="#" className="footer-link">career advice</a></li>
                <li><a href="#" className="footer-link">beware of job scams</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-medium mb-6">for employers</h4>
              <ul className="space-y-2">
                <li><a href="#" className="footer-link">submit a vacancy</a></li>
                <li><a href="#" className="footer-link">request a callback</a></li>
                <li><a href="#" className="footer-link">our services</a></li>
                <li><a href="#" className="footer-link">specialisms</a></li>
                <li><a href="#" className="footer-link">case studies</a></li>
                <li><a href="#" className="footer-link">testimonials</a></li>
              </ul>
              <h4 className="font-medium mt-12 mb-6">resources</h4>
              <ul className="space-y-2">
                <li><a href="#" className="footer-link">case studies</a></li>
                <li><a href="#" className="footer-link">press room</a></li>
                <li><a href="#" className="footer-link">blogs</a></li>
                <li><a href="#" className="footer-link">testimonials</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-medium mb-6">workforce insights</h4>
              <ul className="space-y-2">
                <li><a href="#" className="footer-link">talent insights reports</a></li>
                <li><a href="#" className="footer-link">employer brand research reports</a></li>
                <li><a href="#" className="footer-link">salary trends reports</a></li>
                <li><a href="#" className="footer-link">ed&i reports</a></li>
                <li><a href="#" className="footer-link">workmonitor reports</a></li>
                <li><a href="#" className="footer-link">startup hiring trends</a></li>
                <li><a href="#" className="footer-link">talent pulse surveys</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-medium mb-6">jobs</h4>
              <ul className="space-y-2">
                <li><a href="#" className="footer-link">engineering jobs</a></li>
                <li><a href="#" className="footer-link">cxo jobs</a></li>
                <li><a href="#" className="footer-link">manufacturing jobs</a></li>
                <li><a href="#" className="footer-link">supply chain & logistics jobs</a></li>
                <li><a href="#" className="footer-link">education jobs</a></li>
                <li><a href="#" className="footer-link">finance & accounting jobs</a></li>
                <li><a href="#" className="footer-link">healthcare jobs</a></li>
                <li><a href="#" className="footer-link">hr & admin support jobs</a></li>
                <li><a href="#" className="footer-link">ites/gcc jobs</a></li>
                <li><a href="#" className="footer-link">legal & compliance jobs</a></li>
                <li><a href="#" className="footer-link">sales & marketing jobs</a></li>
              </ul>
            </div>
          </div>

          <div className="flex flex-col md:flex-row justify-between items-center gap-8 pt-12 border-t border-white/10">
            <div className="flex gap-6">
              <Linkedin size={24} className="text-white/60 hover:text-white cursor-pointer" />
              <Twitter size={24} className="text-white/60 hover:text-white cursor-pointer" />
              <Facebook size={24} className="text-white/60 hover:text-white cursor-pointer" />
              <Youtube size={24} className="text-white/60 hover:text-white cursor-pointer" />
              <Instagram size={24} className="text-white/60 hover:text-white cursor-pointer" />
            </div>
            <div className="text-xs text-white/40 text-center md:text-right max-w-2xl">
              registered office: Randstad India Private Limited, CIN U74210TN1992PTC023097,/Randstad House, Old No. 5 & 5A, New No. 9, Pycrofts Garden Road, Nungambakkam, Chennai, TN - 600 006
            </div>
          </div>

          <div className="mt-12 pt-12 border-t border-white/10 flex flex-col gap-8">
            <div className="flex items-center gap-4">
              <span className="text-xs font-bold tracking-widest opacity-60">RANDSTAD,</span>
              <svg width="30" height="20" viewBox="0 0 30 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M10 0C10 5.52285 5.52285 10 0 10H0V20H0C11.0457 20 20 11.0457 20 0V0H10Z" fill="#2175D9"/>
              </svg>
              <span className="text-[10px] uppercase tracking-widest opacity-40">HUMAN FORWARD and SHAPING THE WORLD OF WORK are registered trademarks of © Randstad N.V.2023</span>
            </div>

            <div className="bg-white/5 p-8 rounded-sm">
              <p className="text-sm text-white/70 mb-4">
                <span className="font-bold text-white">Security Advice:</span> Randstad India does not charge any fee at any stage of its recruitment process from the candidate nor allows their employees to collect any fees from any candidates. <a href="#" className="underline">Click here to know more</a>
              </p>
              <p className="text-sm text-white/70">
                <span className="font-bold text-white">EEO Statement:</span> Randstad India is an Equal Employment Opportunity Employer. All qualified applicants receive consideration for employment without regard to race, color, religion, sex, sexual orientation, gender identity or expression, appearance, national origin, age, marital status, veteran status, or disability status, or any other characteristics. Our global mission is to become the world's most equitable and specialized talent company, and we actively embrace diversity and inclusion as the cornerstones of our success. To read more of Randstad India's work in the space of equity, diversity and inclusion please <a href="#" className="underline">click here</a>
              </p>
            </div>

            <div className="flex flex-wrap gap-x-8 gap-y-4 text-xs text-white/60">
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

      {/* Floating Feedback Button */}
      <div className="fixed right-0 top-1/2 -translate-y-1/2 z-40">
        <div className="bg-randstad-light-blue text-white py-3 px-1 rounded-l-md cursor-pointer hover:bg-randstad-blue transition-colors [writing-mode:vertical-rl] text-xs font-medium">
          Feedback
        </div>
      </div>

      {/* Cookie Icon */}
      <div className="fixed bottom-6 left-6 z-40">
        <div className="w-10 h-10 bg-randstad-light-blue text-white rounded-full flex items-center justify-center cursor-pointer shadow-lg hover:scale-110 transition-transform">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 2a10 10 0 1 0 10 10 4 4 0 0 1-5-5 4 4 0 0 1-5-5" />
            <path d="M8.5 8.5v.01" />
            <path d="M16 15.5v.01" />
            <path d="M12 12v.01" />
            <path d="M11 17v.01" />
            <path d="M7 14v.01" />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default EngineeringJobs;
