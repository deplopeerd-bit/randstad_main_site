import { motion } from "motion/react";
import { useState } from "react";

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { 
  Linkedin, 
  Twitter, 
  Youtube, 
  ChevronRight, 
  ChevronLeft,
  Search,
  Globe
} from "lucide-react";



const Hero = () => {
  return (
    <section className="bg-brand-navy text-white pt-16 pb-24">
      <div className="container-custom">
        <div className="text-xs uppercase tracking-widest opacity-60 mb-8 flex gap-2">
          <span>home</span> <span>&gt;</span> <span>approach</span> <span>&gt;</span> <span className="text-white opacity-100">managed solutions</span>
        </div>
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-8">
          <div className="max-w-2xl">
            <h1 className="text-6xl md:text-8xl font-medium tracking-tight mb-8">managed solutions.</h1>
            <p className="text-xl md:text-2xl font-light opacity-90 leading-relaxed">
              accelerating the impact and value of your digital enablement programs.
            </p>
          </div>
          <button className="border border-brand-blue text-brand-blue px-10 py-4 rounded-sm font-medium hover:bg-brand-blue hover:text-white transition-all duration-300">
            get in touch
          </button>
        </div>
      </div>
    </section>
  );
};

const AchievementSection = () => {
  return (
    <section className="flex flex-col md:flex-row min-h-[600px]">
      <div className="w-full md:w-1/2 relative overflow-hidden">
        <img 
          src="https://picsum.photos/seed/randstad1/1200/800" 
          alt="Team working" 
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
      </div>
      <div className="w-full md:w-1/2 bg-brand-blue text-white p-12 md:p-24 flex flex-col justify-center">
        <h2 className="text-5xl md:text-7xl font-medium leading-[1.1] mb-12">
          it’s about what you want to achieve.
        </h2>
        <div className="space-y-8 text-lg md:text-xl font-light opacity-90 leading-relaxed max-w-xl">
          <p>
            Our teams are dedicated to understanding your goals and leveraging their talents, expertise, and cross-industry experience to craft tailored solutions that achieve your desired outcomes.
          </p>
          <p>
            Unlock your digital advantage with our expertise in customer experience, cloud & infrastructure, data & analytics, and digital & product engineering. Elevate your business to new heights with our comprehensive solutions in these key areas.
          </p>
        </div>
      </div>
    </section>
  );
};

const EnablementSection = () => {
  return (
    <section className="bg-white py-24 md:py-32">
      <div className="container-custom grid md:grid-cols-2 gap-16 items-start">
        <h2 className="text-4xl md:text-5xl font-medium leading-tight">
          value focused digital enablement.
        </h2>
        <p className="text-lg md:text-xl font-light leading-relaxed text-brand-navy/80">
          As part of your digital enablement program, there are elements that need specialist skills and the benefits of experience. Randstad Digital helps your organization to accelerate digital programs by providing outcome-driven services and solutions.
        </p>
      </div>
    </section>
  );
};

const ValueBringSection = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  const cards = [
    {
      title: "know-how",
      description: "We apply top-tier talent to your challenge, combining digital expertise with earned experience to add critical value.",
      icon: (
        <div className="relative w-32 h-32">
          {[...Array(12)].map((_, i) => (
            <div 
              key={i}
              className="absolute w-2 h-2 rounded-full bg-brand-blue"
              style={{
                top: '50%',
                left: '50%',
                transform: `rotate(${i * 30}deg) translate(50px) rotate(-${i * 30}deg)`,
                opacity: 0.2 + (i / 12) * 0.8
              }}
            />
          ))}
        </div>
      )
    },
    {
      title: "innovation",
      description: "Our global talent teams collaborate, ideate and leverage each other to create innovative solutions that deliver for our clients.",
      icon: (
        <div className="relative w-32 h-32 flex items-center justify-center">
          <svg width="80" height="80" viewBox="0 0 24 24" fill="none" stroke="#00f2ff" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
          </svg>
        </div>
      )
    },
    {
      title: "methodology",
      description: "With thousands of projects completed, we bring the benefit of hindsight and a proven methodology that reduces risk and maximizes success.",
      icon: (
        <div className="relative w-32 h-32 flex items-center justify-center">
          <div className="w-20 h-20 border-2 border-brand-blue rounded-full flex items-center justify-center">
            <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
              <div className="w-2 h-2 bg-brand-blue rounded-full" />
            </div>
          </div>
          <div className="absolute top-1/2 left-1/2 w-16 h-[1px] bg-brand-blue -translate-x-1/2 -translate-y-1/2 rotate-45" />
          <div className="absolute top-1/2 left-1/2 w-4 h-4 bg-brand-blue rounded-full -translate-x-1/2 -translate-y-1/2" />
        </div>
      )
    },
    {
      title: "results",
      description: "We not only focus on what we deliver but the outcomes that they generate; our focus is around client and project success.",
      icon: (
        <div className="relative w-32 h-32 flex items-center justify-center">
          <div className="flex items-end gap-1 h-12">
            <div className="w-2 h-4 bg-white" />
            <div className="w-2 h-8 bg-white" />
            <div className="w-2 h-12 bg-white" />
          </div>
          <div className="absolute w-24 h-24 border-2 border-brand-blue border-t-transparent rounded-full rotate-45" />
        </div>
      )
    }
  ];

  return (
    <section className="bg-brand-light py-24 overflow-hidden">
      <div className="container-custom mb-16">
        <h2 className="text-5xl md:text-6xl font-medium mb-8">the value we bring.</h2>
        <p className="text-xl font-light max-w-2xl opacity-80 leading-relaxed">
          our global team of talent is built around the needs of our clients, a diverse range of skills, expertise and experience that collectively delivers significant value
        </p>
      </div>

      <div className="relative">
        <div className="flex gap-6 px-6 md:px-20 overflow-x-auto no-scrollbar">
          {cards.map((card, idx) => (
            <div 
              key={idx}
              className="min-w-[300px] md:min-w-[600px] bg-brand-navy text-white p-12 md:p-20 rounded-sm flex flex-col md:flex-row justify-between items-center gap-12"
            >
              <div className="flex-1">
                <h3 className="text-4xl md:text-5xl font-medium mb-8">{card.title}</h3>
                <p className="text-lg md:text-xl font-light opacity-80 leading-relaxed">
                  {card.description}
                </p>
              </div>
              <div className="flex-shrink-0">
                {card.icon}
              </div>
            </div>
          ))}
        </div>
        
        <div className="container-custom mt-12 flex items-center gap-4">
          <button className="w-12 h-12 border border-brand-navy/20 rounded-full flex items-center justify-center hover:bg-brand-navy hover:text-white transition-colors">
            <ChevronLeft size={24} />
          </button>
          <button className="w-12 h-12 border border-brand-navy/20 rounded-full flex items-center justify-center hover:bg-brand-navy hover:text-white transition-colors">
            <ChevronRight size={24} />
          </button>
        </div>
      </div>
    </section>
  );
};

const TimeToValueSection = () => {
  return (
    <section className="flex flex-col md:flex-row min-h-[600px]">
      <div className="w-full md:w-1/2 bg-brand-navy text-white p-12 md:p-24 flex flex-col justify-center">
        <h2 className="text-5xl md:text-7xl font-medium leading-[1.1] mb-12">
          accelerating time to value.
        </h2>
        <p className="text-lg md:text-xl font-light opacity-90 leading-relaxed max-w-xl">
          Our ability to move at speed, flexibly work the way you work and to focus on outcomes, enables us to not only accelerate your digital enablement program but also to reduce the time to value. Key to this is our scale, the ability to mobilize teams quickly against your needs but more importantly, ensure this team is made up of highly skilled, experienced top-tier talent.
        </p>
      </div>
      <div className="w-full md:w-1/2 relative overflow-hidden">
        <img 
          src="https://picsum.photos/seed/randstad2/1200/800" 
          alt="Smartwatch" 
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="w-64 h-64 border border-white/20 rounded-full flex items-center justify-center">
            <div className="w-48 h-48 border-2 border-brand-blue border-t-transparent rounded-full animate-spin-slow" />
          </div>
        </div>
      </div>
    </section>
  );
};

const PartnerSection = () => {
  return (
    <section className="bg-brand-light py-32 md:py-48">
      <div className="container-custom flex flex-col md:flex-row justify-between items-center gap-12">
        <h2 className="text-5xl md:text-8xl font-medium tracking-tight max-w-3xl leading-[0.9]">
          ready to partner with randstad digital?
        </h2>
        <button className="border border-brand-navy text-brand-navy px-12 py-5 rounded-sm font-medium hover:bg-brand-navy hover:text-white transition-all duration-300 text-lg">
          get in touch
        </button>
      </div>
    </section>
  );
};

const Footer = () => {
  const columns = [
    {
      title: "careers",
      links: ["working at randstad digital", "current opportunities"]
    },
    {
      title: "expertise",
      links: [
        "customer experience",
        "digital & product engineering",
        "data & analytics",
        "cloud & infrastructure",
        "creative & marketing",
        "consulting services"
      ]
    },
    {
      title: "about randstad digital",
      links: ["experience", "leadership", "partnerships", "locations"]
    },
    {
      title: "contact us",
      links: ["get in touch", "about our team"]
    },
    {
      title: "solutions",
      links: ["ServiceNow"]
    }
  ];

  return (
    <footer className="bg-brand-navy text-white pt-24 pb-12">
      <div className="container-custom">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-12 mb-24">
          {columns.map((col, idx) => (
            <div key={idx}>
              <h4 className="text-lg font-medium mb-6">{col.title}</h4>
              <ul className="space-y-4 text-sm opacity-60">
                {col.links.map((link, lIdx) => (
                  <li key={lIdx}>
                    <a href="#" className="hover:opacity-100 transition-opacity">{link}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="pt-12 border-t border-white/10 flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
          <div className="flex gap-6">
            <Linkedin className="opacity-60 hover:opacity-100 cursor-pointer" size={24} />
            <Twitter className="opacity-60 hover:opacity-100 cursor-pointer" size={24} />
            <Youtube className="opacity-60 hover:opacity-100 cursor-pointer" size={24} />
          </div>
          <p className="text-xs opacity-40">
            Randstad Digital B.V (91235944), Diemermere 25, 1112 TC, Diemen, The Netherlands.
          </p>
        </div>

        <div className="mt-12 flex flex-wrap gap-x-8 gap-y-4 text-xs opacity-60">
          <a href="#" className="hover:opacity-100">terms & conditions</a>
          <a href="#" className="hover:opacity-100">cookie policy</a>
          <button className="bg-brand-blue text-white px-4 py-2 rounded-sm font-medium hover:bg-brand-blue/80 transition-colors">customize</button>
          <a href="#" className="hover:opacity-100">legal information</a>
          <a href="#" className="hover:opacity-100">privacy policy</a>
          <a href="#" className="hover:opacity-100">misconduct reporting procedure</a>
        </div>
      </div>
      
      {/* Floating Action Buttons */}
      <div className="fixed bottom-6 left-6 z-50">
        <div className="w-12 h-12 bg-brand-blue rounded-full flex items-center justify-center shadow-lg cursor-pointer">
          <div className="w-6 h-6 border-2 border-white rounded-full border-t-transparent animate-spin-slow" />
        </div>
      </div>
      <div className="fixed bottom-6 right-6 z-50">
        <div className="w-12 h-12 bg-brand-blue rounded-full flex items-center justify-center shadow-lg cursor-pointer">
          <Globe size={24} className="text-white" />
        </div>
      </div>
    </footer>
  );
};

export default function EmpmanageSolution() {
  return (
    <div className="min-h-screen flex flex-col">
     
      <main className="flex-grow">
        <Hero />
        <AchievementSection />
        <EnablementSection />
        <ValueBringSection />
        <TimeToValueSection />
        <PartnerSection />
      </main>
     
    </div>
  );
}
