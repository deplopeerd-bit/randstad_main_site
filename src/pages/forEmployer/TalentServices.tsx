import React, { useState } from "react";
import { AnimatePresence, motion } from "motion/react";

import { 
  Linkedin, 
  Youtube, 
  Twitter, 
  ChevronRight, 
  ChevronDown, 
  BarChart3, 
  User, 
  Search, 
  ArrowLeft, 
  ArrowRight,
  Globe,
  Zap,
  Maximize,
  Layout
} from 'lucide-react';

// --- Components ---

const Header = () => {
  return (
    <header className="bg-brand-navy text-white">
      <div className="container-custom py-6 flex items-center justify-between">
        <div className="flex items-center gap-12">
          <div className="text-2xl font-bold flex items-center gap-2">
            <div className="w-8 h-8 flex flex-col justify-center gap-1">
              <div className="h-1 w-full bg-white rounded-full"></div>
              <div className="h-1 w-2/3 bg-white rounded-full"></div>
            </div>
            <span>randstad <span className="font-light opacity-70">digital</span></span>
          </div>
          <nav className="hidden lg:flex items-center gap-8 text-sm font-medium uppercase tracking-wider">
            <a href="#" className="hover:text-brand-cyan">expertise</a>
            <a href="#" className="text-brand-cyan">approach</a>
            <a href="#" className="hover:text-brand-cyan">industries</a>
            <a href="#" className="hover:text-brand-cyan">about</a>
            <a href="#" className="hover:text-brand-cyan">insights</a>
            <a href="#" className="hover:text-brand-cyan">careers</a>
          </nav>
        </div>
        <div className="flex items-center gap-4 text-xs font-medium uppercase tracking-widest">
          <a href="#" className="opacity-70 hover:opacity-100">contact us</a>
          <div className="flex gap-2">
            <span className="text-brand-cyan">EN</span>
            <span className="opacity-40">FR</span>
            <span className="opacity-40">DE</span>
          </div>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="container-custom py-4 flex gap-8 text-sm font-medium">
          <a href="#" className="text-brand-cyan border-b-2 border-brand-cyan pb-1">talent services</a>
          <a href="#" className="opacity-70 hover:opacity-100">global talent centers</a>
          <a href="#" className="opacity-70 hover:opacity-100">managed solutions</a>
          <a href="#" className="opacity-70 hover:opacity-100">talent sourcing platform</a>
          <a href="#" className="opacity-70 hover:opacity-100">randstad digital academy</a>
        </div>
      </div>
    </header>
  );
};

const Hero = () => {
  return (
    <section className="bg-brand-navy text-white py-20 md:py-32">
      <div className="container-custom">
        <div className="text-sm uppercase tracking-widest opacity-60 mb-8 flex items-center gap-2">
          <span>home</span> <ChevronRight size={12} /> <span>approach</span> <ChevronRight size={12} /> <span className="text-white opacity-100">talent services</span>
        </div>
        <div className="flex flex-col md:flex-row justify-between items-end gap-12">
          <div className="max-w-3xl">
            <h1 className="heading-xl mb-8">talent services.</h1>
            <p className="text-2xl md:text-3xl font-light opacity-80 leading-relaxed">
              We help you scale your team with exceptional talent to accelerate your digital enablement.
            </p>
          </div>
          <button className="btn-outline-cyan whitespace-nowrap">get in touch</button>
        </div>
      </div>
    </section>
  );
};

const ExpertsSection = () => {
  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="container-custom grid md:grid-cols-2 gap-16 items-center">
        <div className="relative">
          <div className="aspect-[4/3] bg-gray-100 overflow-hidden rounded-sm">
            <img 
              src="https://picsum.photos/seed/randstad1/800/600" 
              alt="Experts working" 
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="absolute -bottom-10 -left-10 w-48 h-48 border-4 border-brand-blue/20 rounded-full"></div>
          <div className="absolute -top-10 -right-10 w-64 h-64 border-[20px] border-brand-cyan/10 rounded-full"></div>
        </div>
        <div>
          <h2 className="heading-lg mb-8 text-brand-navy">we are experts at finding talent.</h2>
          <p className="text-body text-gray-700">
            Renowned for our world-leading talent engine, Randstad Digital excels in attracting top-notch professionals even in times of talent scarcity. Our expertise lies in seamlessly aligning their skills, personality, and values with the precise requirements of our clients.
          </p>
        </div>
      </div>
    </section>
  );
};

const BlueBanner = () => {
  return (
    <section className="bg-brand-blue text-white py-24">
      <div className="container-custom grid md:grid-cols-2 gap-12 items-center">
        <h2 className="heading-md">talent services for digital enablement.</h2>
        <p className="text-xl font-light opacity-90">
          In order to deliver on your digital ambition, you need to scale your team and inject new skills to navigate change. Finding the right talent is difficult; finding them quickly and in the locations that you want to need them is even harder.
        </p>
      </div>
    </section>
  );
};

const EngagementModels = () => {
  const models = [
    {
      title: "talent solutions.",
      desc: "Contingent permanent placement services; utilize Randstad Digital to assist with key hires across your organization.",
      icon: <BarChart3 className="text-brand-cyan w-12 h-12" />
    },
    {
      title: "hiring projects.",
      desc: "Exclusive bulk direct hire projects that are carved out for your specific business goals.",
      icon: <User className="text-brand-cyan w-12 h-12" />
    },
    {
      title: "executive search.",
      desc: "Retained executive search in IT and Product Engineering for VP and C-Level roles.",
      icon: <Search className="text-brand-cyan w-12 h-12" />
    }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="container-custom">
        <div className="max-w-3xl mb-16">
          <h2 className="heading-lg mb-8 text-brand-navy">direct hire engagement models.</h2>
          <p className="text-body text-gray-600">
            We enable you to move at speed, scaling your team and injecting specialized talent. By combining our leading talent engine with our digital enablement expertise, we can customize the right model that makes sense for your business.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {models.map((model, idx) => (
            <div key={idx} className="bg-brand-navy text-white p-12 rounded-sm flex flex-col gap-8 group hover:bg-brand-dark-blue transition-colors duration-300">
              <div className="mb-4">{model.icon}</div>
              <h3 className="text-3xl font-bold">{model.title}</h3>
              <p className="text-lg opacity-70 leading-relaxed">{model.desc}</p>
            </div>
          ))}
        </div>
        
        <div className="mt-12 flex justify-end gap-4">
          <button className="p-4 border border-gray-200 rounded-full hover:bg-gray-50 transition-colors">
            <ArrowLeft size={24} />
          </button>
          <button className="p-4 border border-gray-200 rounded-full hover:bg-gray-50 transition-colors">
            <ArrowRight size={24} />
          </button>
        </div>
      </div>
    </section>
  );
};

const ValueSection = () => {
  const [openIdx, setOpenIdx] = useState(null);

  const items = [
    { title: "context", content: "We understand your business goals and the specific technical landscape you operate in." },
    { title: "speed", content: "Our vast network and efficient processes ensure we find the right talent quickly." },
    { title: "flexibility", content: "We offer various engagement models tailored to your specific needs and timelines." },
    { title: "global", content: "Leverage our international reach to find talent anywhere in the world." }
  ];

  return (
    <section className="py-24 bg-brand-beige">
      <div className="container-custom grid md:grid-cols-2 gap-20">
        <div>
          <h2 className="heading-lg text-brand-navy mb-8">the value you gain.</h2>
          <p className="text-body text-gray-700">
            By partnering with Randstad Digital you gain the value of a talent-first business that is focused on digital enablement, and this delivers some unique advantages.
          </p>
        </div>
        <div className="flex flex-col border-t border-brand-navy/10">
          {items.map((item, idx) => (
            <div key={idx} className="border-b border-brand-navy/10">
              <button 
                onClick={() => setOpenIdx(openIdx === idx ? null : idx)}
                className="w-full py-8 flex justify-between items-center text-2xl font-bold text-brand-navy hover:text-brand-blue transition-colors"
              >
                <span>{item.title}</span>
                <ChevronDown className={`transition-transform duration-300 ${openIdx === idx ? 'rotate-180' : ''}`} />
              </button>
              <AnimatePresence>
                {openIdx === idx && (
                  <motion.div 
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="overflow-hidden"
                  >
                    <p className="pb-8 text-lg text-gray-600 leading-relaxed">
                      {item.content}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const PermHireSection = () => {
  return (
    <section className="bg-brand-navy text-white overflow-hidden">
      <div className="grid md:grid-cols-2">
        <div className="h-[500px] md:h-auto">
          <img 
            src="https://picsum.photos/seed/randstad2/1000/800" 
            alt="Perm hire advantage" 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
        </div>
        <div className="p-12 md:p-24 flex flex-col justify-center gap-8">
          <h2 className="heading-lg">do you want to gain a perm hire advantage?</h2>
          <div className="space-y-6 text-xl font-light opacity-80 leading-relaxed">
            <p>Almost half of CIOs say that the talent shortage is impacting their business. Sound familiar?</p>
            <p>By understanding the perm job seeker's setup, mindset and motivation you can turn them to your advantage and make the right permanent hire, fast.</p>
          </div>
          <button className="btn-outline-cyan self-start mt-4">download our ebook</button>
        </div>
      </div>
    </section>
  );
};

const AccelerationSection = () => {
  return (
    <section className="py-24 bg-white">
      <div className="container-custom grid md:grid-cols-2 gap-20 items-center">
        <div>
          <h2 className="heading-lg text-brand-navy mb-8">resourcing digital acceleration.</h2>
          <p className="text-body text-gray-700">
            Our talent services help you accelerate digital enablement. They enable you to inject the digital skills you need to drive your vision, to quickly scale to deliver change programs at speed, and to backfill your existing team giving them precious time to reskill and focus on strategic initiatives.
          </p>
        </div>
        <div className="relative">
          <img 
            src="https://picsum.photos/seed/jet/800/600" 
            alt="Digital acceleration" 
            className="w-full rounded-sm shadow-2xl"
            referrerPolicy="no-referrer"
          />
          <div className="absolute -top-10 -left-10 w-32 h-32 bg-brand-blue/10 rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full">
            <div className="w-full h-full border border-brand-cyan/20 rounded-full scale-110"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

const RitsSection = () => {
  return (
    <section className="bg-brand-navy text-white overflow-hidden">
      <div className="grid md:grid-cols-2">
        <div className="p-12 md:p-24 flex flex-col justify-center gap-8 order-2 md:order-1">
          <h2 className="heading-lg">empower your workforce with rits.</h2>
          <p className="text-xl font-light opacity-80 leading-relaxed">
            As the international recruiting arm for Randstad Digital, Randstad International Talent Solutions (RITS) specializes in all immigration and global hiring activities. With over 19 years of experience sponsoring H-1B talent, RITS focuses on hiring highly skilled software developers and engineers. Our dedicated team of immigration experts rigorously screens talent and collaborates with knowledgeable counsel to navigate the H-1B petition process. Join us in unlocking the potential of top-tier global talent.
          </p>
          <button className="btn-outline-cyan self-start mt-4">get started today</button>
        </div>
        <div className="h-[500px] md:h-auto order-1 md:order-2">
          <img 
            src="https://picsum.photos/seed/randstad3/1000/800" 
            alt="RITS workforce" 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
        </div>
      </div>
    </section>
  );
};

const PartnerBanner = () => {
  return (
    <section className="bg-brand-blue text-white py-24">
      <div className="container-custom flex flex-col md:flex-row justify-between items-center gap-12">
        <h2 className="heading-lg max-w-2xl">ready to partner with randstad digital?</h2>
        <button className="btn-outline-white whitespace-nowrap">get in touch</button>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="bg-brand-navy text-white pt-24 pb-12">
      <div className="container-custom">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-12 mb-20">
          <div className="flex flex-col gap-6">
            <h4 className="text-xl font-bold">careers</h4>
            <div className="flex flex-col gap-4 opacity-70 text-sm">
              <a href="#" className="hover:text-brand-cyan">working at randstad digital</a>
              <a href="#" className="hover:text-brand-cyan">current opportunities</a>
            </div>
          </div>
          <div className="flex flex-col gap-6">
            <h4 className="text-xl font-bold">expertise</h4>
            <div className="flex flex-col gap-4 opacity-70 text-sm">
              <a href="#" className="hover:text-brand-cyan">customer experience</a>
              <a href="#" className="hover:text-brand-cyan">digital & product engineering</a>
              <a href="#" className="hover:text-brand-cyan">data & analytics</a>
              <a href="#" className="hover:text-brand-cyan">cloud & infrastructure</a>
              <a href="#" className="hover:text-brand-cyan">creative & marketing</a>
              <a href="#" className="hover:text-brand-cyan">consulting services</a>
            </div>
          </div>
          <div className="flex flex-col gap-6">
            <h4 className="text-xl font-bold">solutions</h4>
            <div className="flex flex-col gap-4 opacity-70 text-sm">
              <a href="#" className="hover:text-brand-cyan">ServiceNow</a>
            </div>
          </div>
          <div className="flex flex-col gap-6">
            <h4 className="text-xl font-bold">about randstad digital</h4>
            <div className="flex flex-col gap-4 opacity-70 text-sm">
              <a href="#" className="hover:text-brand-cyan">experience</a>
              <a href="#" className="hover:text-brand-cyan">leadership</a>
              <a href="#" className="hover:text-brand-cyan">partnerships</a>
              <a href="#" className="hover:text-brand-cyan">locations</a>
            </div>
          </div>
          <div className="flex flex-col gap-6">
            <h4 className="text-xl font-bold">contact us</h4>
            <div className="flex flex-col gap-4 opacity-70 text-sm">
              <a href="#" className="hover:text-brand-cyan">get in touch</a>
              <a href="#" className="hover:text-brand-cyan">about our team</a>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center gap-8 pt-12 border-t border-white/10">
          <div className="flex gap-6">
            <a href="#" className="p-3 bg-white/5 rounded-full hover:bg-white/10 transition-colors"><Linkedin size={20} /></a>
            <a href="#" className="p-3 bg-white/5 rounded-full hover:bg-white/10 transition-colors"><Twitter size={20} /></a>
            <a href="#" className="p-3 bg-white/5 rounded-full hover:bg-white/10 transition-colors"><Youtube size={20} /></a>
          </div>
          <p className="text-xs opacity-50 text-center md:text-left">
            Randstad Digital B.V (91235944), Diemermere 25, 1112 TC, Diemen, The Netherlands.
          </p>
        </div>

        <div className="flex flex-wrap justify-center md:justify-start gap-6 mt-12 text-xs font-medium uppercase tracking-wider opacity-70">
          <a href="#" className="hover:text-brand-cyan">terms & conditions</a>
          <a href="#" className="hover:text-brand-cyan">cookie policy</a>
          <button className="bg-brand-blue px-4 py-1 rounded-sm text-white">customize</button>
          <a href="#" className="hover:text-brand-cyan">legal information</a>
          <a href="#" className="hover:text-brand-cyan">privacy policy</a>
          <a href="#" className="hover:text-brand-cyan">misconduct reporting procedure</a>
        </div>
      </div>
    </footer>
  );
};

// --- Main App ---

export default function EmptalentServices() {
  return (
    <div className="min-h-screen bg-white selection:bg-brand-cyan selection:text-white">
      
      <main>
        <Hero />
        <ExpertsSection />
        <BlueBanner />
        <EngagementModels />
        <ValueSection />
        <PermHireSection />
        <AccelerationSection />
        <RitsSection />
        <PartnerBanner />
      </main>
      
    </div>
  );
}
