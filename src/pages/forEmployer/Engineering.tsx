import React, { useState } from "react";
import { AnimatePresence, motion } from "motion/react";

import { 
  Search, 
  User, 
  ChevronDown, 
  ChevronRight, 
  ArrowRight, 
  Play, 
  Linkedin, 
  Twitter, 
  Facebook, 
  Youtube, 
  Instagram,
  Menu,
  X
} from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white z-50 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center space-x-8">
            <div className="flex-shrink-0 flex items-center">
              <span className="text-2xl font-bold text-[#0055a4] flex items-center">
                <span className="mr-1">ר</span>randstad
              </span>
            </div>
            <div className="hidden lg:flex space-x-6">
              {['find a job', 'for talent', 'for employer', 'resources', 'about us'].map((item) => (
                <button key={item} className="text-gray-600 hover:text-black text-sm font-medium flex items-center">
                  {item} <ChevronDown className="ml-1 w-4 h-4" />
                </button>
              ))}
            </div>
          </div>
          <div className="hidden lg:flex items-center space-x-6">
            <button className="text-gray-600 hover:text-black text-sm font-medium">contact us</button>
            <div className="flex items-center space-x-4">
              <div className="flex items-center text-gray-600">
                <span className="text-sm mr-1">0</span>
                <Search className="w-5 h-5" />
              </div>
              <div className="flex items-center text-gray-600">
                <User className="w-5 h-5 mr-1" />
                <span className="text-sm">my randstad</span>
              </div>
            </div>
          </div>
          <div className="lg:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-600">
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="lg:hidden bg-white border-b border-gray-100 px-4 pt-2 pb-6"
          >
            {['find a job', 'for talent', 'for employer', 'resources', 'about us'].map((item) => (
              <button key={item} className="block w-full text-left py-3 text-gray-600 hover:text-black text-base font-medium border-b border-gray-50">
                {item}
              </button>
            ))}
            <button className="block w-full text-left py-3 text-gray-600 hover:text-black text-base font-medium">contact us</button>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = () => (
  <section className="pt-32 pb-20 bg-[#0a1a3c] text-white overflow-hidden relative">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <nav className="flex text-xs space-x-2 mb-8 opacity-60">
            <span>home</span> <span>&gt;</span> <span>employers</span> <span>&gt;</span> <span>industries</span> <span>&gt;</span> <span>engineering</span>
          </nav>
          <h1 className="text-5xl lg:text-7xl font-light leading-tight mb-8">
            a partner for talent in engineering.
          </h1>
          <p className="text-lg opacity-80 mb-10 max-w-lg">
            Build your team with top operational talent. With the largest pool of pre-qualified candidates, industry expertise, deep insights into operational workforce dynamics, and proven talent validation processes in our specialised talent centers, we'll help you simplify your recruiting and scale your workforce on demand — quickly and cost-effectively.
          </p>
          <button className="px-8 py-4 border border-white rounded-sm hover:bg-white hover:text-[#0a1a3c] transition-colors text-sm font-medium">
            get in touch
          </button>
        </motion.div>
        <div className="relative h-[400px] lg:h-[500px]">
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="absolute right-0 top-1/2 -translate-y-1/2 w-full max-w-md aspect-square"
          >
            <div className="relative w-full h-full">
              <div className="absolute inset-0 bg-[#00ff88] rounded-full opacity-80 blur-3xl"></div>
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4/5 h-4/5 bg-[#00ff88] rounded-full"></div>
              <div className="absolute top-1/2 left-0 -translate-y-1/2 w-1/2 h-24 bg-[#0070f3] rounded-full"></div>
              <div className="absolute bottom-1/4 right-0 w-32 h-32 border-2 border-dashed border-white/20 rounded-full"></div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  </section>
);

const FeatureSection = ({ title, text, image, reverse = false, bgColor = "bg-white" }: { title: string, text: string, image: string, reverse?: boolean, bgColor?: string }) => (
  <section className={`py-20 ${bgColor}`}>
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className={`grid lg:grid-cols-2 gap-12 items-center ${reverse ? 'lg:flex-row-reverse' : ''}`}>
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className={reverse ? 'lg:order-2' : ''}
        >
          <h2 className="text-4xl lg:text-5xl font-light text-[#0a1a3c] mb-6 leading-tight">
            {title}
          </h2>
          <p className="text-gray-600 text-lg leading-relaxed mb-8">
            {text}
          </p>
          {title.includes("industry 4.0") && (
            <button className="px-8 py-3 border border-[#0070f3] text-[#0070f3] rounded-sm hover:bg-[#0070f3] hover:text-white transition-colors text-sm font-medium">
              learn more
            </button>
          )}
        </motion.div>
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className={`relative aspect-[4/3] overflow-hidden rounded-sm ${reverse ? 'lg:order-1' : ''}`}
        >
          <img 
            src={image} 
            alt={title} 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
        </motion.div>
      </div>
    </div>
  </section>
);

const CTASection = () => (
  <section className="bg-[#0070f3] py-16 text-white">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col lg:flex-row justify-between items-center gap-8">
        <h2 className="text-3xl lg:text-4xl font-light max-w-2xl">
          contact us to start a conversation about your talent needs.
        </h2>
        <button className="px-10 py-4 border border-white rounded-sm hover:bg-white hover:text-[#0070f3] transition-colors text-sm font-medium whitespace-nowrap">
          let's meet
        </button>
      </div>
    </div>
  </section>
);

const InsightsGrid = ({ title, items }: { title: string, items: any[] }) => (
  <section className="py-20 bg-[#f5f2ed]">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <h2 className="text-3xl lg:text-4xl font-light text-[#0a1a3c] mb-12">{title}</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {items.map((item, idx) => (
          <motion.div 
            key={idx}
            whileHover={{ y: -10 }}
            className="bg-white rounded-sm overflow-hidden shadow-sm group cursor-pointer"
          >
            <div className="aspect-[3/4] overflow-hidden relative">
              <img 
                src={item.image} 
                alt={item.title} 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              <div className="absolute bottom-6 left-6 right-6">
                <p className="text-white text-lg font-medium leading-tight">
                  {item.title}
                </p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

const NewsletterSection = () => (
  <section className="py-20 bg-[#0a1a3c] text-white">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        <div className="relative">
          <div className="aspect-square rounded-full overflow-hidden border-8 border-[#00ff88]/20 p-8">
            <img 
              src="https://picsum.photos/seed/keyboard/800/800" 
              alt="Newsletter" 
              className="w-full h-full object-cover rounded-full"
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-4/5 h-4/5 border-2 border-dashed border-[#00ff88]/40 rounded-full animate-spin-slow"></div>
          </div>
        </div>
        <div>
          <h2 className="text-4xl lg:text-5xl font-light mb-8 leading-tight">
            workforce insights delivered to your inbox.
          </h2>
          <p className="text-lg opacity-80 mb-10">
            Want to reduce your turnover rate, improve your company culture, or be inspired on improving employability for young people? Sign up to the monthly workforce insights newsletter and stay up to date with the latest recruitment and labor market news, tips, trends and reports for business leaders across the globe.
          </p>
          <button className="px-10 py-4 border border-white rounded-sm hover:bg-white hover:text-[#0a1a3c] transition-colors text-sm font-medium">
            subscribe
          </button>
        </div>
      </div>
    </div>
  </section>
);

const ExpertiseAccordion = () => {
  const [openIdx, setOpenIdx] = useState<number | null>(null);
  const areas = [
    "operations, logistics & SCM",
    "civil & architecture",
    "engineering & industrial design",
    "oil, gas, power & energy",
    "manufacturing",
    "construction & property"
  ];

  return (
    <section className="py-20 bg-[#f5f2ed]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-[1fr_2fr] gap-12">
          <h2 className="text-3xl lg:text-4xl font-light text-[#0a1a3c]">our areas of expertise</h2>
          <div className="space-y-4">
            {areas.map((area, idx) => (
              <div key={idx} className="border-b border-gray-200">
                <button 
                  onClick={() => setOpenIdx(openIdx === idx ? null : idx)}
                  className="w-full py-6 flex justify-between items-center text-left group"
                >
                  <span className="text-xl text-[#0a1a3c] font-light group-hover:text-[#0070f3] transition-colors">
                    {area}
                  </span>
                  <ChevronDown className={`w-6 h-6 text-gray-400 transition-transform ${openIdx === idx ? 'rotate-180' : ''}`} />
                </button>
                <AnimatePresence>
                  {openIdx === idx && (
                    <motion.div 
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="overflow-hidden"
                    >
                      <p className="pb-6 text-gray-600">
                        Detailed information about our expertise in {area}. We provide specialized talent solutions and strategic consulting to help you navigate the complexities of this sector.
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const Footer = () => (
  <footer className="bg-[#0a1a3c] text-white pt-20 pb-10">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-12 mb-20">
        <div>
          <h3 className="text-lg font-medium mb-6">find a job</h3>
          <ul className="space-y-3 opacity-60 text-sm">
            <li>explore all jobs</li>
            <li>submit your cv</li>
            <li>join our team</li>
            <li>refer a friend</li>
          </ul>
          <h3 className="text-lg font-medium mt-10 mb-6">for talents</h3>
          <ul className="space-y-3 opacity-60 text-sm">
            <li>specialisms</li>
            <li>testimonials</li>
            <li>career advice</li>
            <li>beware of job scams</li>
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-medium mb-6">for employers</h3>
          <ul className="space-y-3 opacity-60 text-sm">
            <li>submit a vacancy</li>
            <li>request a callback</li>
            <li>our services</li>
            <li>specialisms</li>
            <li>case studies</li>
            <li>testimonials</li>
          </ul>
          <h3 className="text-lg font-medium mt-10 mb-6">resources</h3>
          <ul className="space-y-3 opacity-60 text-sm">
            <li>case studies</li>
            <li>press room</li>
            <li>blogs</li>
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-medium mb-6">workforce insights</h3>
          <ul className="space-y-3 opacity-60 text-sm">
            <li>talent insights reports</li>
            <li>employer brand research reports</li>
            <li>salary trends reports</li>
            <li>ed&i reports</li>
            <li>workmonitor reports</li>
            <li>startup hiring trends</li>
            <li>talent pulse surveys</li>
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-medium mb-6">jobs</h3>
          <ul className="space-y-3 opacity-60 text-sm">
            <li>engineering jobs</li>
            <li>cxo jobs</li>
            <li>manufacturing jobs</li>
            <li>supply chain & logistics jobs</li>
            <li>education jobs</li>
            <li>finance & accounting jobs</li>
            <li>healthcare jobs</li>
            <li>hr & admin support jobs</li>
            <li>ites/gcc jobs</li>
            <li>legal & compliance jobs</li>
            <li>sales & marketing jobs</li>
          </ul>
        </div>
      </div>
      
      <div className="pt-10 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="flex space-x-6">
          <Linkedin className="w-5 h-5 opacity-60 hover:opacity-100 cursor-pointer" />
          <Twitter className="w-5 h-5 opacity-60 hover:opacity-100 cursor-pointer" />
          <Facebook className="w-5 h-5 opacity-60 hover:opacity-100 cursor-pointer" />
          <Youtube className="w-5 h-5 opacity-60 hover:opacity-100 cursor-pointer" />
          <Instagram className="w-5 h-5 opacity-60 hover:opacity-100 cursor-pointer" />
        </div>
        <p className="text-xs opacity-40 text-center md:text-left">
          registered office: Randstad India Private Limited, CIN U74210TN1992PTC023097, Randstad House, Old No. 5 & 5A, New No. 9, Pycrofts Garden Road, Nungambakkam, Chennai, TN - 600 006
        </p>
      </div>
      
      <div className="mt-10 flex flex-wrap justify-center md:justify-start gap-6 text-[10px] uppercase tracking-widest opacity-40">
        <span>terms & conditions</span>
        <span>cookies</span>
        <span>misconduct reporting procedure</span>
        <span>accessibility</span>
        <span>be aware</span>
        <span>sitemap</span>
        <span>privacy statement</span>
      </div>
      
      <div className="mt-10 pt-10 border-t border-white/10 text-center">
        <p className="text-[10px] opacity-40">
          RANDSTAD, HUMAN FORWARD and SHAPING THE WORLD OF WORK are registered trademarks of © Randstad N.V.2023
        </p>
      </div>
    </div>
  </footer>
);

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-white font-sans selection:bg-[#0070f3] selection:text-white">
      <Navbar />
      <Hero />
      
      <FeatureSection 
        title="identifying top engineering talent."
        text="Talent is the cornerstone of success in the fast-paced world of engineering. As engineering specialists, we help business like yours daily — connecting you with innovative, reliable, efficient engineers that can help you oversee the entire project life cycle from start to finish."
        image="https://picsum.photos/seed/engineer1/1200/800"
      />
      
      <FeatureSection 
        title="building a brand."
        text="Talented engineers are in high demand, and companies have to work harder than ever before to attract the best candidates. By enhancing your employer brand and fostering diversity and inclusion, we help you attract top talent and create a workplace where every voice is valued. Our performance management programs recognise and reward excellence, driving employee engagement and retention."
        image="https://picsum.photos/seed/meeting/1200/800"
        reverse
        bgColor="bg-[#f5f2ed]"
      />
      
      <FeatureSection 
        title="experience in engineering."
        text="For decades, Randstad has served a wide array of engineering-focused industries, including manufacturing, construction, consulting, and architecture. Our commitment to talent development keeps your engineers ahead of the curve, with targeted training and upskilling programs that bridge the gap between existing competencies and emerging technologies."
        image="https://picsum.photos/seed/engineer2/1200/800"
      />
      
      <CTASection />
      
      <InsightsGrid 
        title="unlock more insights on talent management."
        items={[
          { title: "talent management during tougher times.", image: "https://picsum.photos/seed/insight1/600/800" },
          { title: "understand your workforce needs.", image: "https://picsum.photos/seed/insight2/600/800" },
          { title: "workforce planning template", image: "https://picsum.photos/seed/insight3/600/800" },
          { title: "leveraging working with randstad for workforce management and flexibility.", image: "https://picsum.photos/seed/insight4/600/800" }
        ]}
      />
      
      <NewsletterSection />
      
      <section className="relative h-[500px] overflow-hidden">
        <img 
          src="https://picsum.photos/seed/office/1920/1080" 
          alt="Growth Curve" 
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0a1a3c]/80 to-transparent flex items-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
            <div className="max-w-xl text-white">
              <div className="bg-white text-[#0070f3] px-6 py-4 inline-block mb-8">
                <h2 className="text-4xl font-light">engineer your next</h2>
              </div>
              <div className="bg-[#0070f3] text-white px-6 py-4 inline-block mb-8">
                <h2 className="text-5xl font-bold">growth curve.</h2>
              </div>
              <p className="text-lg opacity-90 mb-8">
                Our workforce solution experts offer you complete range of HR services to help achieve your current and future engineering staffing goals.
              </p>
              <button className="flex items-center space-x-3 group">
                <div className="w-12 h-12 rounded-full border border-white flex items-center justify-center group-hover:bg-white group-hover:text-[#0a1a3c] transition-all">
                  <Play className="w-5 h-5 fill-current" />
                </div>
                <span className="text-sm font-medium uppercase tracking-widest">watch our video to learn more</span>
              </button>
            </div>
          </div>
        </div>
      </section>
      
      <FeatureSection 
        title="industry 4.0 is here and now."
        text="The demand for products and services produced sustainably by core engineering sectors is on an overdrive. And with this demand, also increasing is the demand for great engineers, making attracting talent a tough proposition."
        image="https://picsum.photos/seed/industry/1200/800"
        reverse
      />
      
      <section className="py-20 bg-[#0a1a3c] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative aspect-square">
              <img 
                src="https://picsum.photos/seed/warehouse/1000/1000" 
                alt="Talent Pipeline" 
                className="w-full h-full object-cover rounded-sm"
                referrerPolicy="no-referrer"
              />
            </div>
            <div>
              <h2 className="text-5xl font-light mb-8 leading-tight">
                are you prepared to plan your engineering talent pipeline smartly?
              </h2>
              <p className="text-lg opacity-80 mb-10">
                We handle both regular and niche mandates as well as contractual or payroll. Our 5:1 CV to hire ratio in the engineering sector is one of the best in the country. With our vast global network, we can even assist you with global talent acquisition and talent mobility.
              </p>
              <button className="px-10 py-4 border border-white rounded-sm hover:bg-white hover:text-[#0a1a3c] transition-colors text-sm font-medium">
                let's get in touch
              </button>
            </div>
          </div>
        </div>
      </section>
      
      <ExpertiseAccordion />
      
      <InsightsGrid 
        title="read our case studies to learn why we are the best in business."
        items={[
          { title: "case study 1", image: "https://picsum.photos/seed/case1/600/800" },
          { title: "case study 2", image: "https://picsum.photos/seed/case2/600/800" },
          { title: "case study 3", image: "https://picsum.photos/seed/case3/600/800" },
          { title: "case study 4", image: "https://picsum.photos/seed/case4/600/800" }
        ]}
      />
      
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl lg:text-4xl font-light text-[#0a1a3c] mb-12">read our blogs below for more insights on randstad engineering.</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { date: "14 November 2022", title: "randstad engineering", image: "https://picsum.photos/seed/blog1/800/500" },
              { date: "07 October 2022", title: "is your workforce geared up for Industry 4.0?", image: "https://picsum.photos/seed/blog2/800/500" },
              { date: "07 October 2022", title: "catalyzing global competitiveness with right-fit engineers", image: "https://picsum.photos/seed/blog3/800/500" }
            ].map((blog, idx) => (
              <motion.div key={idx} whileHover={{ y: -5 }} className="cursor-pointer group">
                <div className="aspect-[16/10] overflow-hidden rounded-sm mb-6">
                  <img src={blog.image} alt={blog.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" referrerPolicy="no-referrer" />
                </div>
                <p className="text-xs text-gray-400 mb-2 uppercase tracking-widest">{blog.date}</p>
                <h3 className="text-xl text-[#0a1a3c] font-medium group-hover:text-[#0070f3] transition-colors">{blog.title}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      <Footer />
      
      {/* Floating Chat Button */}
      <button className="fixed bottom-6 right-6 w-14 h-14 bg-[#0070f3] text-white rounded-full shadow-lg flex items-center justify-center hover:scale-110 transition-transform z-50">
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
        </svg>
      </button>
      
      {/* Cookie Consent */}
      <div className="fixed bottom-6 left-6 w-12 h-12 bg-white text-[#0070f3] rounded-full shadow-lg flex items-center justify-center border border-gray-100 cursor-pointer hover:scale-110 transition-transform z-50">
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
          <path d="M10 2a8 8 0 100 16 8 8 0 000-16zm1 11H9v-2h2v2zm0-4H9V5h2v4z" />
        </svg>
      </div>
    </div>
  );
}
