import "./index.css";
import { AnimatePresence, motion } from "motion/react";
import { StrictMode, useState } from "react";
import { createRoot } from "react-dom/client";

import { 
  ChevronDown, 
  ChevronRight, 
  Linkedin, 
  Twitter, 
  Youtube, 
  Globe, 
  Menu, 
  X,
  ArrowRight
} from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-randstad-navy text-white border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <div className="flex items-center gap-12">
          {/* Logo Placeholder */}
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 flex flex-col gap-1">
              <div className="h-1.5 w-full bg-white rounded-full"></div>
              <div className="h-1.5 w-2/3 bg-white rounded-full"></div>
            </div>
            <span className="text-xl font-bold tracking-tight">randstad <span className="font-light">digital</span></span>
          </div>

          <div className="hidden lg:flex items-center gap-8 text-sm font-medium opacity-80">
            <a href="#" className="hover:text-randstad-light-blue transition-colors border-b-2 border-randstad-light-blue pb-1">expertise</a>
            <a href="#" className="hover:text-randstad-light-blue transition-colors">approach</a>
            <a href="#" className="hover:text-randstad-light-blue transition-colors">industries</a>
            <a href="#" className="hover:text-randstad-light-blue transition-colors">about</a>
            <a href="#" className="hover:text-randstad-light-blue transition-colors">insights</a>
            <a href="#" className="hover:text-randstad-light-blue transition-colors">careers</a>
          </div>
        </div>

        <div className="flex items-center gap-6">
          <div className="hidden md:flex items-center gap-4 text-xs font-bold uppercase tracking-widest opacity-60">
            <span>EN</span>
            <span>FR</span>
            <span>DE</span>
          </div>
          <button className="hidden md:block px-6 py-2 border border-randstad-light-blue text-randstad-light-blue text-sm font-bold hover:bg-randstad-light-blue hover:text-white transition-all">
            get in touch
          </button>
          <button className="lg:hidden" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="lg:hidden bg-randstad-navy border-t border-white/10 p-6 flex flex-col gap-4"
          >
            <a href="#" className="text-lg font-medium">expertise</a>
            <a href="#" className="text-lg font-medium">approach</a>
            <a href="#" className="text-lg font-medium">industries</a>
            <a href="#" className="text-lg font-medium">about</a>
            <a href="#" className="text-lg font-medium">insights</a>
            <a href="#" className="text-lg font-medium">careers</a>
            <button className="mt-4 px-6 py-3 bg-randstad-light-blue text-white font-bold">
              get in touch
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = () => (
  <section className="pt-32 pb-20 bg-randstad-navy text-white overflow-hidden">
    <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
      <motion.div 
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        className="space-y-8"
      >
        <div className="space-y-4">
          <p className="text-sm font-bold uppercase tracking-widest text-randstad-light-blue">expertise</p>
          <h1 className="text-5xl lg:text-7xl font-light leading-tight">
            addressing your <br />
            <span className="font-bold">digital priorities.</span>
          </h1>
          <p className="text-xl opacity-70 max-w-lg leading-relaxed">
            Digital enablement spans every part of your organization; we have aligned our expertise to your priorities.
          </p>
        </div>
        <button className="px-8 py-4 border border-randstad-light-blue text-randstad-light-blue text-lg font-bold hover:bg-randstad-light-blue hover:text-white transition-all inline-flex items-center gap-3">
          get in touch <ArrowRight size={20} />
        </button>
      </motion.div>

      <motion.div 
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        className="relative aspect-square lg:aspect-video rounded-2xl overflow-hidden shadow-2xl"
      >
        <img 
          src="https://picsum.photos/seed/satellite/1200/800" 
          alt="Satellite Dish" 
          className="w-full h-full object-cover opacity-80"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-tr from-randstad-navy/80 to-transparent"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <div className="w-32 h-32 rounded-full border border-white/20 flex items-center justify-center animate-pulse">
            <div className="w-16 h-16 rounded-full border border-randstad-light-blue/40"></div>
          </div>
        </div>
      </motion.div>
    </div>
  </section>
);

const ExpertiseSection = () => {
  const expertise = [
    { title: "customer experience", desc: "We help you advance the way you engage with your customers, creating exceptional digital experiences and connected journeys." },
    { title: "digital & product engineering", desc: "We inject the talent and experience to accelerate digital innovation, from design to engineered solutions." },
    { title: "data & analytics", desc: "We enable you to assemble, structure and analyze your data to deliver actionable insights across your organization." },
    { title: "cloud & infrastructure", desc: "We support you in modernizing your infrastructure and accelerating your cloud journey, creating an agile, digital-first foundation." },
    { title: "creative & marketing", desc: "We combine creative vision with data-driven marketing strategies to build brands that resonate in the digital age." },
    { title: "consulting services", desc: "Strategic guidance to navigate complex digital transformations and optimize your business operations." }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-3 gap-16">
          <div className="lg:col-span-1 space-y-6">
            <h2 className="text-4xl font-light">focused around <br /><span className="font-bold">your needs.</span></h2>
            <p className="text-lg opacity-70 leading-relaxed">
              You are looking to differentiate your digital customer experience, streamline and automate internal processes and leverage data to shape your future, and all of this requires a digital foundation that is scalable and agile.
            </p>
          </div>

          <div className="lg:col-span-2 space-y-12">
            <div className="flex items-start gap-8">
              <h3 className="text-2xl font-bold whitespace-nowrap pt-1">our expertise.</h3>
              <div className="space-y-4">
                <p className="text-lg opacity-70">
                  We align our talent across four core service lines, recognizing that client programs often span multiple disciplines.
                </p>
                
                <div className="space-y-8 mt-12">
                  {expertise.map((item, idx) => (
                    <motion.div 
                      key={idx}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: idx * 0.1 }}
                      className="group border-b border-gray-100 pb-8"
                    >
                      <div className="flex items-center justify-between cursor-pointer">
                        <h4 className="text-2xl font-medium group-hover:text-randstad-blue transition-colors">{item.title}</h4>
                        <ChevronDown className="text-randstad-blue group-hover:translate-y-1 transition-transform" />
                      </div>
                      <div className="mt-4 space-y-6">
                        <p className="text-gray-600 leading-relaxed max-w-2xl">
                          {item.desc}
                        </p>
                        <button className="px-6 py-2 border border-randstad-navy text-sm font-bold hover:bg-randstad-navy hover:text-white transition-all">
                          learn more
                        </button>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const CapabilitiesSection = () => (
  <section className="bg-randstad-blue py-24 text-white relative overflow-hidden">
    <div className="absolute right-0 top-0 w-1/2 h-full opacity-20">
      <div className="absolute top-1/2 right-0 -translate-y-1/2 flex gap-4">
        {[1, 2, 3].map(i => (
          <div key={i} className="w-12 h-64 bg-white rounded-full rotate-45 transform origin-bottom"></div>
        ))}
      </div>
    </div>
    
    <div className="max-w-7xl mx-auto px-6 relative z-10">
      <div className="max-w-2xl space-y-8">
        <p className="text-sm font-bold uppercase tracking-widest">a step up in</p>
        <h2 className="text-5xl lg:text-7xl font-light leading-tight">
          capabilities and <br />
          <span className="font-bold">quality of interactions.</span>
        </h2>
        <p className="text-xl opacity-90">
          Read our case studies and success stories.
        </p>
        <button className="px-8 py-4 border border-white text-white text-lg font-bold hover:bg-white hover:text-randstad-blue transition-all">
          learn more
        </button>
      </div>
    </div>
  </section>
);

const GlobalDelivery = () => {
  const regions = [
    { name: "india", centers: ["bangalore", "hyderabad"], seed: "india" },
    { name: "europe", centers: ["hungary", "poland", "portugal", "romania", "spain"], seed: "europe" },
    { name: "north america", centers: ["canada"], seed: "canada" },
    { name: "latin america", centers: ["mexico", "argentina"], seed: "latam" }
  ];

  return (
    <section className="py-24 bg-randstad-navy text-white">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-light mb-16">our <span className="font-bold">global delivery.</span></h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {regions.map((region, idx) => (
            <div key={idx} className="space-y-8">
              <div className="border-b border-white/20 pb-4">
                <h3 className="text-2xl font-medium">{region.name}</h3>
              </div>
              <div className="aspect-square bg-white/5 rounded-xl p-4 flex items-center justify-center relative group">
                {/* Mock Map Visualization */}
                <div className="w-full h-full opacity-40 group-hover:opacity-60 transition-opacity">
                  <div className="grid grid-cols-8 gap-1 h-full">
                    {Array.from({ length: 64 }).map((_, i) => (
                      <div key={i} className={`rounded-full ${Math.random() > 0.7 ? 'bg-randstad-light-blue' : 'bg-white/20'}`}></div>
                    ))}
                  </div>
                </div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <Globe className="text-randstad-light-blue opacity-20" size={80} />
                </div>
              </div>
              <ul className="space-y-2">
                {region.centers.map((center, cIdx) => (
                  <li key={cIdx} className="text-randstad-light-blue font-medium hover:underline cursor-pointer">
                    {center}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-20 flex flex-wrap gap-12 items-center opacity-80">
          <div className="flex items-center gap-3">
            <div className="w-6 h-6 bg-randstad-light-blue rounded"></div>
            <span className="text-sm font-medium">global talent center</span>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-6 h-6 bg-white rounded"></div>
            <span className="text-sm font-medium">planned global talent center</span>
          </div>
        </div>
      </div>
    </section>
  );
};

const TalentCenters = () => (
  <section className="grid lg:grid-cols-2">
    <div className="h-[500px] lg:h-auto relative">
      <img 
        src="https://picsum.photos/seed/coding/1000/1000" 
        alt="Coding" 
        className="w-full h-full object-cover"
        referrerPolicy="no-referrer"
      />
      <div className="absolute inset-0 bg-randstad-navy/20"></div>
    </div>
    <div className="bg-gray-50 py-24 px-12 lg:px-24 flex flex-col justify-center space-y-8">
      <h2 className="text-5xl font-light leading-tight">
        interested in our <br />
        <span className="font-bold">global talent <br />centers?</span>
      </h2>
      <button className="self-start px-8 py-4 border border-randstad-navy text-randstad-navy text-lg font-bold hover:bg-randstad-navy hover:text-white transition-all">
        learn more
      </button>
    </div>
  </section>
);

const ContactForm = () => (
  <section className="py-24 bg-white">
    <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-24">
      <div className="space-y-6">
        <h2 className="text-4xl font-light">ready to partner with <br /><span className="font-bold">randstad digital?</span></h2>
        <p className="text-2xl font-bold text-randstad-navy">get in touch.</p>
      </div>

      <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-2">
            <label className="text-sm font-bold">First name<span className="text-red-500">*</span></label>
            <input type="text" className="w-full bg-gray-50 border-b border-gray-300 p-3 focus:border-randstad-blue outline-none transition-colors" required />
          </div>
          <div className="space-y-2">
            <label className="text-sm font-bold">Last name<span className="text-red-500">*</span></label>
            <input type="text" className="w-full bg-gray-50 border-b border-gray-300 p-3 focus:border-randstad-blue outline-none transition-colors" required />
          </div>
        </div>
        <div className="space-y-2">
          <label className="text-sm font-bold">Work Email<span className="text-red-500">*</span></label>
          <input type="email" className="w-full bg-gray-50 border-b border-gray-300 p-3 focus:border-randstad-blue outline-none transition-colors" required />
        </div>
        <div className="space-y-2">
          <label className="text-sm font-bold">Job title<span className="text-red-500">*</span></label>
          <input type="text" className="w-full bg-gray-50 border-b border-gray-300 p-3 focus:border-randstad-blue outline-none transition-colors" required />
        </div>
        <div className="space-y-2">
          <label className="text-sm font-bold">Company name<span className="text-red-500">*</span></label>
          <input type="text" className="w-full bg-gray-50 border-b border-gray-300 p-3 focus:border-randstad-blue outline-none transition-colors" required />
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-2">
            <label className="text-sm font-bold">Country<span className="text-red-500">*</span></label>
            <select className="w-full bg-gray-50 border-b border-gray-300 p-3 focus:border-randstad-blue outline-none transition-colors appearance-none">
              <option>Please Select</option>
              <option>United States</option>
              <option>United Kingdom</option>
              <option>Netherlands</option>
            </select>
          </div>
          <div className="space-y-2">
            <label className="text-sm font-bold">Staffing or Solutions<span className="text-red-500">*</span></label>
            <select className="w-full bg-gray-50 border-b border-gray-300 p-3 focus:border-randstad-blue outline-none transition-colors appearance-none">
              <option>Please Select</option>
              <option>Staffing</option>
              <option>Solutions</option>
            </select>
          </div>
        </div>

        <div className="space-y-2">
          <label className="text-sm font-bold">How can we help you?<span className="text-red-500">*</span></label>
          <textarea className="w-full bg-gray-50 border-b border-gray-300 p-3 h-32 focus:border-randstad-blue outline-none transition-colors resize-none" required></textarea>
        </div>

        <div className="space-y-4 text-sm text-gray-600 leading-relaxed">
          <p>Randstad Digital is committed to protecting and respecting your privacy, and we'll only use your personal information to administer your account and to provide the products and services you requested from us.</p>
          <div className="flex gap-3 items-start">
            <input type="checkbox" className="mt-1" />
            <label>I agree to receive other communications from Randstad Digital.</label>
          </div>
          <p>You can unsubscribe from these communications at any time. For more information on how to unsubscribe, our privacy practices, and how we are committed to protecting and respecting your privacy, please review our <a href="#" className="text-randstad-blue underline">Privacy Policy</a>.</p>
        </div>

        <button type="submit" className="px-12 py-4 bg-randstad-blue text-white font-bold hover:bg-randstad-navy transition-all">
          Submit
        </button>
      </form>
    </div>
  </section>
);

const Footer = () => (
  <footer className="bg-randstad-navy text-white pt-24 pb-12">
    <div className="max-w-7xl mx-auto px-6">
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
        <div className="space-y-6">
          <h4 className="text-lg font-bold">careers</h4>
          <ul className="space-y-4 opacity-70">
            <li><a href="#" className="hover:text-randstad-light-blue transition-colors">working at randstad digital</a></li>
            <li><a href="#" className="hover:text-randstad-light-blue transition-colors">current opportunities</a></li>
          </ul>
        </div>
        <div className="space-y-6">
          <h4 className="text-lg font-bold">expertise</h4>
          <ul className="space-y-4 opacity-70">
            <li><a href="#" className="hover:text-randstad-light-blue transition-colors">customer experience</a></li>
            <li><a href="#" className="hover:text-randstad-light-blue transition-colors">digital & product engineering</a></li>
            <li><a href="#" className="hover:text-randstad-light-blue transition-colors">data & analytics</a></li>
            <li><a href="#" className="hover:text-randstad-light-blue transition-colors">cloud & infrastructure</a></li>
            <li><a href="#" className="hover:text-randstad-light-blue transition-colors">creative & marketing</a></li>
            <li><a href="#" className="hover:text-randstad-light-blue transition-colors">consulting services</a></li>
          </ul>
          <div className="pt-8 space-y-6">
            <h4 className="text-lg font-bold">solutions</h4>
            <ul className="space-y-4 opacity-70">
              <li><a href="#" className="hover:text-randstad-light-blue transition-colors">ServiceNow</a></li>
            </ul>
          </div>
        </div>
        <div className="space-y-6">
          <h4 className="text-lg font-bold">about randstad digital</h4>
          <ul className="space-y-4 opacity-70">
            <li><a href="#" className="hover:text-randstad-light-blue transition-colors">experience</a></li>
            <li><a href="#" className="hover:text-randstad-light-blue transition-colors">leadership</a></li>
            <li><a href="#" className="hover:text-randstad-light-blue transition-colors">partnerships</a></li>
            <li><a href="#" className="hover:text-randstad-light-blue transition-colors">locations</a></li>
          </ul>
        </div>
        <div className="space-y-6">
          <h4 className="text-lg font-bold">contact us</h4>
          <ul className="space-y-4 opacity-70">
            <li><a href="#" className="hover:text-randstad-light-blue transition-colors">get in touch</a></li>
            <li><a href="#" className="hover:text-randstad-light-blue transition-colors">about our team</a></li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10 pt-12 flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="flex items-center gap-6">
          <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-randstad-light-blue transition-colors"><Linkedin size={20} /></a>
          <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-randstad-light-blue transition-colors"><Twitter size={20} /></a>
          <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-randstad-light-blue transition-colors"><Youtube size={20} /></a>
        </div>
        <p className="text-sm opacity-50">Randstad Digital B.V (91235944), Diemermere 25, 1112 TC, Diemen, The Netherlands.</p>
      </div>

      <div className="mt-12 flex flex-wrap justify-center md:justify-start gap-8 text-sm opacity-70">
        <a href="#" className="hover:text-randstad-light-blue transition-colors">terms & conditions</a>
        <a href="#" className="hover:text-randstad-light-blue transition-colors">cookie policy</a>
        <button className="px-6 py-1 bg-randstad-blue text-white rounded hover:bg-randstad-light-blue transition-colors">customize</button>
        <a href="#" className="hover:text-randstad-light-blue transition-colors">legal information</a>
        <a href="#" className="hover:text-randstad-light-blue transition-colors">privacy policy</a>
        <a href="#" className="hover:text-randstad-light-blue transition-colors">misconduct reporting procedure</a>
      </div>
    </div>
  </footer>
);

const App = () => {
  return (
    <div className="min-h-screen bg-white selection:bg-randstad-light-blue selection:text-white">
      <Navbar />
      <main>
        <Hero />
        <ExpertiseSection />
        <CapabilitiesSection />
        <GlobalDelivery />
        <TalentCenters />
        <ContactForm />
      </main>
      <Footer />
      
      {/* Floating Action Buttons */}
      <div className="fixed bottom-6 left-6 z-40">
        <button className="w-12 h-12 bg-randstad-blue text-white rounded-full shadow-lg flex items-center justify-center hover:scale-110 transition-transform">
          <div className="w-6 h-6 border-2 border-white rounded-full border-t-transparent animate-spin-slow"></div>
        </button>
      </div>
      <div className="fixed bottom-6 right-6 z-40">
        <button className="w-12 h-12 bg-randstad-blue text-white rounded-full shadow-lg flex items-center justify-center hover:scale-110 transition-transform">
          <Globe size={24} />
        </button>
      </div>
    </div>
  );
};

