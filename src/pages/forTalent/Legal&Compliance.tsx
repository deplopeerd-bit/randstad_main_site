import React, { useState } from "react";
import { AnimatePresence, motion } from "motion/react";

import { 
  Search, 
  User, 
  ChevronDown, 
  ArrowRight, 
  Facebook, 
  Twitter, 
  Linkedin, 
  Instagram, 
  Youtube,
  Heart,
  MessageSquare,
  MapPin,
  Menu,
  X
} from 'lucide-react';

// --- Components ---

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-white border-b border-gray-100 px-4 py-3 md:px-12">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center gap-8">
          {/* Logo Placeholder */}
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-[#2175d9] rounded-sm flex items-center justify-center">
              <span className="text-white font-bold text-xl">r</span>
            </div>
            <span className="text-[#2175d9] font-bold text-2xl tracking-tight">randstad</span>
          </div>

          <div className="hidden lg:flex items-center gap-6 text-sm font-medium text-gray-600">
            <a href="#" className="hover:text-[#2175d9] flex items-center gap-1">find a job <ChevronDown size={14} /></a>
            <a href="#" className="hover:text-[#2175d9] flex items-center gap-1">for talent <ChevronDown size={14} /></a>
            <a href="#" className="hover:text-[#2175d9] flex items-center gap-1">for employer <ChevronDown size={14} /></a>
            <a href="#" className="hover:text-[#2175d9] flex items-center gap-1">resources <ChevronDown size={14} /></a>
            <a href="#" className="hover:text-[#2175d9] flex items-center gap-1">about us <ChevronDown size={14} /></a>
          </div>
        </div>

        <div className="flex items-center gap-6">
          <div className="hidden md:flex items-center gap-4 text-sm font-medium text-gray-600">
            <a href="#" className="text-xs uppercase tracking-widest hover:underline">contact us</a>
            <div className="flex items-center gap-2 hover:text-[#2175d9] cursor-pointer">
              <Heart size={18} />
              <span>0</span>
            </div>
            <div className="flex items-center gap-2 hover:text-[#2175d9] cursor-pointer">
              <User size={18} />
              <span>my randstad</span>
            </div>
          </div>
          <button 
            className="lg:hidden text-gray-600"
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
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white border-t border-gray-100 overflow-hidden"
          >
            <div className="flex flex-col p-4 gap-4 text-gray-600 font-medium">
              <a href="#" className="py-2 border-bottom border-gray-50">find a job</a>
              <a href="#" className="py-2 border-bottom border-gray-50">for talent</a>
              <a href="#" className="py-2 border-bottom border-gray-50">for employer</a>
              <a href="#" className="py-2 border-bottom border-gray-50">resources</a>
              <a href="#" className="py-2 border-bottom border-gray-50">about us</a>
              <div className="flex flex-col gap-4 pt-4 border-t border-gray-100">
                <div className="flex items-center gap-2">
                  <Heart size={18} />
                  <span>0 favorites</span>
                </div>
                <div className="flex items-center gap-2">
                  <User size={18} />
                  <span>my randstad</span>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = () => {
  return (
    <section className="bg-[#0a1931] text-white py-20 px-4 md:px-12 overflow-hidden relative">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 items-center gap-12 relative z-10">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <nav className="text-xs text-gray-400 mb-8 flex gap-2">
            <a href="#" className="hover:text-white">home</a>
            <span>&gt;</span>
            <a href="#" className="hover:text-white">professional career</a>
            <span>&gt;</span>
            <span className="text-white">legal & compliance</span>
          </nav>
          <h1 className="text-5xl md:text-7xl font-light leading-tight mb-8">
            a partner for legal & <br />
            <span className="font-medium">compliance professionals.</span>
          </h1>
          <p className="text-lg text-gray-300 mb-10 max-w-lg leading-relaxed">
            Find the right job, love what you do, and develop your career. With access to a wide range of roles with top employers, a global community of professional peers, and specialised training and support, we'll be your guiding partner and help you build a rewarding career.
          </p>
          <div className="flex flex-wrap gap-4">
            <button className="px-8 py-4 border border-white text-white font-medium hover:bg-white hover:text-[#0a1931] transition-colors">
              explore available jobs
            </button>
            <button className="px-8 py-4 border border-white text-white font-medium hover:bg-white hover:text-[#0a1931] transition-colors">
              submit your resume
            </button>
          </div>
        </motion.div>

        <div className="relative hidden md:block">
          {/* Abstract Purple Circles */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center gap-4">
            <motion.div 
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ repeat: Infinity, duration: 4 }}
              className="w-16 h-16 rounded-full bg-purple-600 opacity-80"
            />
            <motion.div 
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ repeat: Infinity, duration: 5, delay: 0.5 }}
              className="w-24 h-24 rounded-full bg-purple-500 opacity-60"
            />
            <motion.div 
              animate={{ scale: [1, 1.05, 1] }}
              transition={{ repeat: Infinity, duration: 6, delay: 1 }}
              className="w-48 h-48 rounded-full border-4 border-purple-400 flex items-center justify-center"
            >
               <div className="w-40 h-40 rounded-full border-2 border-purple-300 opacity-30" />
            </motion.div>
            <motion.div 
              animate={{ scale: [1, 1.15, 1] }}
              transition={{ repeat: Infinity, duration: 4.5, delay: 0.2 }}
              className="w-20 h-20 rounded-full bg-purple-800 opacity-90"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

const SplitSection = ({ title, subtitle, content, image, reverse = false, dark = false, buttonText }: any) => {
  return (
    <section className={`flex flex-col md:flex-row ${reverse ? 'md:flex-row-reverse' : ''} ${dark ? 'bg-[#0a1931] text-white' : 'bg-white text-[#0a1931]'}`}>
      <div className="w-full md:w-1/2 p-12 md:p-24 flex flex-col justify-center">
        <h2 className="text-4xl md:text-6xl font-light mb-8 leading-tight">
          {title} <br />
          <span className="font-medium">{subtitle}</span>
        </h2>
        <p className={`text-lg mb-10 leading-relaxed ${dark ? 'text-gray-300' : 'text-gray-600'}`}>
          {content}
        </p>
        {buttonText && (
          <div>
            <button className={`px-8 py-4 border font-medium transition-colors ${dark ? 'border-white text-white hover:bg-white hover:text-[#0a1931]' : 'border-[#0a1931] text-[#0a1931] hover:bg-[#0a1931] hover:text-white'}`}>
              {buttonText}
            </button>
          </div>
        )}
      </div>
      <div className="w-full md:w-1/2 h-[400px] md:h-auto overflow-hidden relative">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
        {dark && (
           <div className="absolute top-0 right-0 p-8">
              <div className="w-24 h-24 rounded-full border-2 border-purple-500 opacity-50 flex items-center justify-center">
                <div className="w-16 h-16 rounded-full bg-purple-500 opacity-30" />
              </div>
           </div>
        )}
      </div>
    </section>
  );
};

const RecruitingSection = () => {
  return (
    <section className="py-24 px-4 md:px-12 bg-white">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start gap-12">
        <h2 className="text-3xl font-light text-[#0a1931] max-w-sm">
          roles we're currently recruiting for.
        </h2>
        <div className="w-full md:w-2/3">
          <div className="border-b border-gray-200 py-6 flex items-center justify-between cursor-pointer group">
            <span className="text-2xl font-light text-[#2175d9] group-hover:underline">see all legal & compliance jobs.</span>
            <ChevronDown className="text-[#2175d9]" />
          </div>
        </div>
      </div>
    </section>
  );
};

const LatestUpdates = () => {
  const articles = [
    {
      date: "02 August 2023",
      title: "randstad with heart.",
      image: "https://picsum.photos/seed/heart/600/400"
    },
    {
      date: "17 January 2023",
      title: "how to stand out in an interview.",
      image: "https://picsum.photos/seed/interview/600/400"
    },
    {
      date: "17 January 2023",
      title: "5 tips to ace your video interview.",
      image: "https://picsum.photos/seed/video/600/400"
    },
    {
      date: "17 January 2023",
      title: "declining a job offer.",
      image: "https://picsum.photos/seed/decline/600/400"
    },
    {
      date: "17 January 2023",
      title: "how to negotiate and accept your job offer.",
      image: "https://picsum.photos/seed/negotiate/600/400"
    },
    {
      date: "12 January 2023",
      title: "prepare answers for tough interview questions.",
      image: "https://picsum.photos/seed/tough/600/400"
    }
  ];

  return (
    <section className="py-24 px-4 md:px-12 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-end mb-12">
          <h2 className="text-4xl font-light text-[#0a1931]">latest updates</h2>
          <a href="#" className="text-[#2175d9] hover:underline text-lg">see all articles</a>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map((article, idx) => (
            <motion.div 
              key={idx}
              whileHover={{ y: -5 }}
              className="cursor-pointer group"
            >
              <div className="aspect-video overflow-hidden mb-4">
                <img 
                  src={article.image} 
                  alt={article.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
              </div>
              <p className="text-sm text-gray-500 mb-2">{article.date}</p>
              <h3 className="text-2xl font-light text-[#0a1931] group-hover:text-[#2175d9] transition-colors">
                {article.title}
              </h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const FAQSection = () => {
  return (
    <section className="bg-[#0a1931] text-white py-24 px-4 md:px-12 overflow-hidden relative">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 items-center gap-12 relative z-10">
        <div>
          <span className="text-xl font-light mb-4 block">FAQs</span>
          <h2 className="text-5xl md:text-7xl font-light leading-tight mb-8">
            frequently asked <br />
            <span className="font-medium">questions and <br /> answers.</span>
          </h2>
          <p className="text-lg text-gray-300 mb-10 max-w-md">
            We provide answers to the most common questions that applicants and companies ask us about working with Randstad.
          </p>
          <button className="px-8 py-4 border border-white text-white font-medium hover:bg-white hover:text-[#0a1931] transition-colors">
            learn more
          </button>
        </div>
        <div className="relative flex justify-center">
          {/* Abstract Speech Bubbles */}
          <div className="relative w-full max-w-md aspect-square">
            <motion.div 
              animate={{ rotate: [0, 5, 0] }}
              transition={{ repeat: Infinity, duration: 8 }}
              className="absolute top-0 right-0 w-4/5 h-3/5 rounded-[100px] border-8 border-purple-500 opacity-80"
            />
            <motion.div 
              animate={{ rotate: [0, -5, 0] }}
              transition={{ repeat: Infinity, duration: 10, delay: 1 }}
              className="absolute bottom-0 left-0 w-3/5 h-2/5 rounded-[80px] bg-purple-400 opacity-40"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

const BranchFinder = () => {
  return (
    <section className="py-24 px-4 md:px-12 bg-white">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 items-center gap-12">
        <div>
          <h2 className="text-5xl md:text-7xl font-light text-[#0a1931] leading-tight mb-6">
            we'd love to <br />
            <span className="font-medium">have you over.</span>
          </h2>
          <p className="text-xl text-gray-600 mb-12">find a branch close to you.</p>
          
          <div className="flex max-w-md border border-gray-300 focus-within:border-[#2175d9] transition-colors">
            <input 
              type="text" 
              placeholder="postcode / city" 
              className="flex-1 px-6 py-4 outline-none text-lg"
            />
            <button className="bg-[#2175d9] text-white px-6 flex items-center justify-center hover:bg-[#1a5eb0] transition-colors">
              <ArrowRight size={24} />
            </button>
          </div>
        </div>
        <div className="flex justify-center">
          <div className="relative">
            <MapPin size={300} className="text-purple-600 font-thin" strokeWidth={1} />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 rounded-full border-4 border-purple-600 bg-white" />
          </div>
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
    <footer className="bg-[#0a1931] text-white pt-24 pb-12 px-4 md:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-12 mb-20">
          {footerLinks.map((section, idx) => (
            <div key={idx}>
              <h4 className="text-xl font-medium mb-6">{section.title}</h4>
              <ul className="space-y-3">
                {section.links.map((link, lIdx) => (
                  <li key={lIdx}>
                    <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">{link}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-gray-800 pt-12 mb-12">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-[#2175d9] transition-colors"><Linkedin size={18} /></a>
              <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-[#2175d9] transition-colors"><Twitter size={18} /></a>
              <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-[#2175d9] transition-colors"><Facebook size={18} /></a>
              <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-[#2175d9] transition-colors"><Youtube size={18} /></a>
              <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-[#2175d9] transition-colors"><Instagram size={18} /></a>
            </div>
            <div className="text-xs text-gray-500 text-center md:text-right max-w-2xl">
              <p className="mb-2">registered office: Randstad India Private Limited, CIN U74210TN1992PTC023097, Randstad House, Old No. 5 & 5A, New No. 9, Pycrofts Garden Road, Nungambakkam, Chennai, TN - 600 006</p>
              <p>RANDSTAD, r, HUMAN FORWARD and SHAPING THE WORLD OF WORK are registered trademarks of © Randstad N.V. 2023</p>
            </div>
          </div>
        </div>

        <div className="bg-[#0d2142] p-8 rounded-lg mb-12">
          <p className="text-sm text-gray-400 leading-relaxed">
            <span className="text-white font-medium">Security Advice:</span> Randstad India does not charge any fee at any stage of its recruitment process from the candidate nor allows their employees to collect any fees from any candidates. <a href="#" className="text-[#2175d9] hover:underline">Click here to know more</a>
          </p>
          <p className="text-sm text-gray-400 leading-relaxed mt-4">
            <span className="text-white font-medium">EEO Statement:</span> Randstad India is an Equal Employment Opportunity Employer. All qualified applicants receive consideration for employment without regard to race, color, religion, sex, sexual orientation, gender identity or expression, appearance, national origin, age, marital status, veteran status, or disability status, or any other characteristics. Our global mission is to become the world's most equitable and specialized talent company, and we actively embrace diversity and inclusion as the cornerstones of our success. To read more of Randstad India's work in the space of equity, diversity and inclusion please <a href="#" className="text-[#2175d9] hover:underline">click here</a>
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-6 text-xs text-gray-400 uppercase tracking-widest">
          <a href="#" className="hover:text-white">terms & conditions</a>
          <a href="#" className="hover:text-white">cookies</a>
          <a href="#" className="hover:text-white">misconduct reporting procedure</a>
          <a href="#" className="hover:text-white">accessibility</a>
          <a href="#" className="hover:text-white">be aware</a>
          <a href="#" className="hover:text-white">sitemap</a>
          <a href="#" className="hover:text-white">privacy statement</a>
        </div>
      </div>
      
      {/* Feedback Tab */}
      <div className="fixed right-0 top-1/2 -translate-y-1/2 bg-[#2175d9] text-white py-3 px-1 rounded-l-md cursor-pointer hover:bg-[#1a5eb0] transition-colors z-50">
        <span className="writing-mode-vertical-rl rotate-180 text-xs font-bold tracking-widest uppercase">feedback</span>
      </div>

      {/* Cookie Icon */}
      <div className="fixed bottom-6 left-6 w-12 h-12 bg-[#2175d9] text-white rounded-full flex items-center justify-center shadow-lg cursor-pointer hover:scale-110 transition-transform z-50">
        <MessageSquare size={24} />
      </div>
    </footer>
  );
};

// --- Main Page Component ---

export default function RandstadPage() {
  return (
    <div className="min-h-screen font-sans selection:bg-[#2175d9] selection:text-white">
      <Navbar />
      <main>
        <Hero />
        
        <SplitSection 
          title="what we"
          subtitle="do."
          content="our consultants are experts within their specialisation and really understand your needs and preferences. Combined with our wide range of available jobs with the best companies in the market provides you the guarantee that there are always jobs that are a perfect match for you."
          image="https://picsum.photos/seed/whatwedo/1200/800"
        />

        <SplitSection 
          title="what we"
          subtitle="offer you."
          content="we provide you with a wonderful experience as we will be your guiding partner throughout every stage of your career. With timely and honest feedback, aiming at a lasting relationship even during the stages you don't work for us. By becoming a member of our lively communities you will have the opportunity to build valuable relationships and networks with your industry."
          image="https://picsum.photos/seed/whatweoffer/1200/800"
          reverse
          dark
        />

        <SplitSection 
          title="learn more about"
          subtitle="job roles in legal & compliance jobs."
          content="Our job profiles have been created to familiarise you with the responsibilities and day-to-day activities of a number of key job roles, so you can make the right decision before applying for a job. Start exploring qualifications, responsibilities, pay rates and more in each job."
          image="https://picsum.photos/seed/jobroles/1200/800"
          buttonText="learn more"
          dark
        />

        <RecruitingSection />

        <SplitSection 
          title="legal &"
          subtitle="compliance."
          content="Can't find a job in the legal and compliance sector that matches your interests? Submit your application and resume, and our team will contact you when a suitable opportunity arises."
          image="https://picsum.photos/seed/legal/1200/800"
          buttonText="submit resume now"
          dark
          reverse
        />

        <LatestUpdates />
        <FAQSection />
        <BranchFinder />
      </main>
      <Footer />
    </div>
  );
}
