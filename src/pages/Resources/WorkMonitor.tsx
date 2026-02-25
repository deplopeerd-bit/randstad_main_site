import React, { useState } from "react";
import { AnimatePresence, motion } from "motion/react";

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { 
  ChevronDown, 
  Heart, 
  User, 
  Search, 
  Linkedin, 
  Twitter, 
  Facebook, 
  Youtube, 
  Instagram,
  Menu,
  X
} from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-100">
      <div className="container-custom py-4 flex items-center justify-between">
        <div className="flex items-center gap-8">
          {/* Logo Placeholder - Randstad Logo */}
          <div className="flex items-center gap-1">
            <div className="w-8 h-8 flex flex-col justify-center gap-1">
              <div className="w-full h-1 bg-randstad-blue rounded-full"></div>
              <div className="w-2/3 h-1 bg-randstad-navy rounded-full"></div>
            </div>
            <span className="text-2xl font-bold tracking-tighter text-randstad-navy">randstad</span>
          </div>

          <nav className="hidden lg:flex items-center gap-6">
            {['find a job', 'for talent', 'for employer', 'resources', 'about us'].map((item) => (
              <button key={item} className="text-sm font-medium flex items-center gap-1 hover:text-randstad-blue transition-colors">
                {item} <ChevronDown size={14} />
              </button>
            ))}
          </nav>
        </div>

        <div className="flex items-center gap-6">
          <div className="hidden md:flex items-center gap-4 text-sm font-medium">
            <button className="hover:text-randstad-blue">contact us</button>
            <div className="flex items-center gap-4 border-l pl-4 border-gray-200">
              <button className="relative">
                <Heart size={20} />
                <span className="absolute -top-1 -right-1 bg-randstad-blue text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center">0</span>
              </button>
              <button className="flex items-center gap-2 hover:text-randstad-blue">
                <User size={20} />
                <span>my randstad</span>
              </button>
            </div>
          </div>
          <button className="lg:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
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
            className="lg:hidden absolute top-full left-0 w-full bg-white shadow-xl border-t border-gray-100"
          >
            <div className="p-6 flex flex-col gap-4">
              {['find a job', 'for talent', 'for employer', 'resources', 'about us'].map((item) => (
                <button key={item} className="text-left text-lg font-medium py-2 border-b border-gray-50">
                  {item}
                </button>
              ))}
              <div className="pt-4 flex flex-col gap-4">
                <button className="text-left font-medium">contact us</button>
                <button className="text-left font-medium flex items-center gap-2">
                  <User size={20} />
                  <span>my randstad</span>
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

const Hero = () => {
  return (
    <section className="bg-randstad-navy text-white pt-16 pb-24">
      <div className="container-custom">
        <div className="text-xs uppercase tracking-widest mb-8 flex items-center gap-2 opacity-70">
          <span>home</span>
          <span>›</span>
          <span>hr news</span>
          <span>›</span>
          <span>workforce insights</span>
          <span>›</span>
          <span className="text-white opacity-100">workmonitor</span>
        </div>
        
        <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-12">
          randstad workmonitor <br />
          <span className="text-randstad-blue">reports.</span>
        </h1>

        <p className="max-w-xl text-lg md:text-xl leading-relaxed opacity-90">
          The study conceptualizes and measures the gap between the reality and the wishes of the global workforce and tracks how this changes over time.
        </p>
      </div>
    </section>
  );
};

const InfoSection = () => {
  return (
    <section className="bg-randstad-light py-24">
      <div className="container-custom grid lg:grid-cols-12 gap-12">
        <div className="lg:col-span-4">
          <h2 className="text-3xl font-bold leading-tight">
            what's in the <br />
            workmonitor reports.
          </h2>
        </div>
        <div className="lg:col-span-8">
          <p className="text-lg leading-relaxed opacity-80">
            The Randstad Workmonitor Reports reflects that for the past 21 years our Workmonitor research has captured the voice of the global workforce to show that people's needs are broad, dynamic and evolving with the labor market and economy. It's exciting to see how much has changed in just the past three years.
          </p>
        </div>
      </div>
    </section>
  );
};

interface AccordionItemProps {
  title: string;
  isOpen: boolean;
  onClick: () => void;
}

const AccordionItem: React.FC<AccordionItemProps> = ({ title, isOpen, onClick }) => {
  return (
    <div className="border-b border-gray-200">
      <button 
        onClick={onClick}
        className="w-full py-6 flex items-center justify-between text-left group"
      >
        <span className="text-xl md:text-2xl font-medium group-hover:text-randstad-blue transition-colors">
          {title}
        </span>
        <ChevronDown 
          className={`text-randstad-blue transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} 
          size={28} 
        />
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden"
          >
            <div className="pb-8 text-lg opacity-70">
              Detailed information about {title} will be displayed here. This report covers key insights into workforce trends, employee expectations, and market dynamics.
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const ReportsSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const reports = [
    "workmonitor report 2025 - india edition",
    "workmonitor report 2024 - india edition",
    "workmonitor report 2024 - global edition",
    "workmonitor report 2023 - India edition",
    "workmonitor report 2023 - global edition"
  ];

  return (
    <section className="py-24 bg-white">
      <div className="container-custom grid lg:grid-cols-12 gap-12">
        <div className="lg:col-span-4">
          <h2 className="text-3xl font-bold leading-tight">
            randstad workmonitor <br />
            reports.
          </h2>
        </div>
        <div className="lg:col-span-8">
          <div className="flex flex-col">
            {reports.map((report, index) => (
              <AccordionItem 
                key={index}
                title={report}
                isOpen={openIndex === index}
                onClick={() => {
                  setOpenIndex(openIndex === index ? null : index);
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const NewsletterSection = () => {
  return (
    <section className="bg-randstad-light overflow-hidden">
      <div className="container-custom grid lg:grid-cols-2 items-center">
        <div className="relative h-[400px] lg:h-[600px] -ml-24 lg:-ml-48">
          <img 
            src="https://picsum.photos/seed/work/1200/800" 
            alt="Workforce Insights"
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          {/* Circular graphic overlay */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div className="w-[300px] h-[300px] md:w-[450px] md:h-[450px] border-[40px] md:border-[60px] border-randstad-blue/30 rounded-full"></div>
            <div className="absolute w-[300px] h-[300px] md:w-[450px] md:h-[450px] border-[40px] md:border-[60px] border-transparent border-t-randstad-blue rounded-full rotate-45"></div>
            <div className="absolute w-4 h-4 md:w-6 md:h-6 bg-blue-500 rounded-full translate-x-[150px] md:translate-x-[225px]"></div>
          </div>
        </div>
        
        <div className="py-16 lg:pl-24">
          <h2 className="text-4xl md:text-6xl font-bold leading-tight mb-8">
            workforce insights <br />
            delivered to your <br />
            inbox.
          </h2>
          <p className="text-lg opacity-80 mb-10 max-w-lg">
            Want to reduce your turnover rate, improve your company culture, or be inspired on improving employability for young people? Sign up to the monthly workforce insights newsletter and stay up to date with the latest recruitment and labor market news, tips, trends and reports for business leaders across the globe.
          </p>
          <button className="px-10 py-4 border-2 border-randstad-navy text-randstad-navy font-bold text-lg hover:bg-randstad-navy hover:text-white transition-all duration-300">
            subscribe
          </button>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  const footerLinks = [
    {
      title: "find a job",
      links: ["explore all jobs", "submit your cv", "join our team", "refer a friend"]
    },
    {
      title: "for employers",
      links: ["submit a vacancy", "request a callback", "our services", "specialisms", "case studies", "testimonials"]
    },
    {
      title: "workforce insights",
      links: ["talent insights reports", "employer brand research reports", "salary trends reports", "ed&i reports", "workmonitor reports", "startup hiring trends", "talent pulse surveys"]
    },
    {
      title: "jobs",
      links: ["engineering jobs", "cxo jobs", "manufacturing jobs", "supply chain & logistics jobs", "education jobs", "finance & accounting jobs", "healthcare jobs", "hr & admin support jobs", "ites/gcc jobs", "legal & compliance jobs", "sales & marketing jobs"]
    },
    {
      title: "for talents",
      links: ["specialisms", "testimonials", "career advice", "beware of job scams"]
    },
    {
      title: "resources",
      links: ["case studies", "press room", "blogs"]
    }
  ];

  return (
    <footer className="bg-randstad-navy text-white pt-24 pb-12">
      <div className="container-custom">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-y-12 gap-x-8 mb-24">
          {footerLinks.map((section) => (
            <div key={section.title}>
              <h3 className="text-lg font-bold mb-6">{section.title}</h3>
              <ul className="flex flex-col gap-3">
                {section.links.map((link) => (
                  <li key={link}>
                    <a href="#" className="text-sm opacity-70 hover:opacity-100 hover:text-randstad-blue transition-all">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-white/10 pt-12">
          <div className="flex flex-wrap items-center justify-between gap-8 mb-12">
            <div className="flex items-center gap-6">
              <a href="#" className="p-2 bg-white/10 rounded-full hover:bg-white/20 transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="#" className="p-2 bg-white/10 rounded-full hover:bg-white/20 transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="p-2 bg-white/10 rounded-full hover:bg-white/20 transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="p-2 bg-white/10 rounded-full hover:bg-white/20 transition-colors">
                <Youtube size={20} />
              </a>
              <a href="#" className="p-2 bg-white/10 rounded-full hover:bg-white/20 transition-colors">
                <Instagram size={20} />
              </a>
            </div>
          </div>

          <div className="text-[10px] opacity-50 mb-12 max-w-3xl">
            registered office: Randstad India Private Limited, CIN U74210TN1992PTC023097, Randstad House, Old No. 5 & 5A, New No. 9, Pycrofts Garden Road, Nungambakkam, Chennai, TN - 600 006
          </div>

          <div className="flex flex-col md:flex-row md:items-center gap-4 mb-12">
            <div className="flex items-center gap-2">
              <span className="text-sm font-bold tracking-tighter">RANDSTAD,</span>
              <div className="flex items-center gap-1">
                <div className="w-6 h-6 flex flex-col justify-center gap-0.5">
                  <div className="w-full h-0.5 bg-randstad-blue rounded-full"></div>
                  <div className="w-2/3 h-0.5 bg-white rounded-full"></div>
                </div>
              </div>
              <span className="text-[10px] opacity-70 uppercase tracking-widest">human forward and shaping the world of work are registered trademarks of © Randstad N.V.2023</span>
            </div>
          </div>

          <div className="space-y-6 text-xs opacity-70 mb-12">
            <p>
              Security Advice: Randstad India does not charge any fee at any stage of its recruitment process from the candidate nor allows their employees to collect any fees from any candidates. <a href="#" className="underline">Click here to know more</a>
            </p>
            <p>
              EEO Statement: Randstad India is an Equal Employment Opportunity Employer. All qualified applicants receive consideration for employment without regard to race, color, religion, sex, sexual orientation, gender identity or expression, appearance, national origin, age, marital status, veteran status, or disability status, or any other characteristics. Our global mission is to become the world's most equitable and specialized talent company, and we actively embrace diversity and inclusion as the cornerstones of our success. To read more of Randstad India's work in the space of equity, diversity and inclusion please <a href="#" className="underline">click here</a>
            </p>
          </div>

          <div className="flex flex-wrap gap-x-8 gap-y-4 text-xs opacity-70">
            {["terms & conditions", "cookies", "misconduct reporting procedure", "accessibility", "be aware", "sitemap", "privacy statement"].map((item) => (
              <a key={item} href="#" className="hover:text-randstad-blue transition-colors">
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default function ResWorkMonitor() {
  return (
    <div className="min-h-screen flex flex-col">
     
      <main className="flex-grow">
        <Hero />
        <InfoSection />
        <ReportsSection />
        <NewsletterSection />
      </main>
     
      
      {/* Feedback Button - Floating */}
      <div className="fixed right-0 top-1/2 -translate-y-1/2 z-40 hidden md:block">
        <button className="bg-randstad-blue text-white px-2 py-6 rounded-l-md [writing-mode:vertical-rl] rotate-180 text-xs font-bold tracking-widest uppercase">
          feedback
        </button>
      </div>

      {/* Cookie/Bot Icon - Floating Bottom Left */}
      <div className="fixed bottom-6 left-6 z-40">
        <button className="w-12 h-12 bg-randstad-blue text-white rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform">
          <div className="relative w-6 h-6">
             <div className="absolute inset-0 border-2 border-white rounded-full"></div>
             <div className="absolute top-1 left-1 w-1.5 h-1.5 bg-white rounded-full"></div>
             <div className="absolute bottom-1 right-1 w-1.5 h-1.5 bg-white rounded-full"></div>
          </div>
        </button>
      </div>
    </div>
  );
}
