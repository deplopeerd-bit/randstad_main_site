import React, { useState } from "react";
import { AnimatePresence, motion } from "motion/react";

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { 
  Search, 
  Heart, 
  User, 
  ChevronDown, 
  Linkedin, 
  Twitter, 
  Facebook, 
  Youtube, 
  Instagram,
  Mail,
  MessageSquare,
  ChevronRight,
  Plus,
  Minus
} from 'lucide-react';

// --- Types ---

interface NavItem {
  label: string;
  hasDropdown?: boolean;
}

interface CardProps {
  image: string;
  title: string;
  subtitle?: string;
}

interface TeamMember {
  name: string;
  role: string;
  email: string;
  image: string;
}

interface FAQItem {
  question: string;
  answer: string;
}

// --- Components ---

const Navbar = () => {
  const navItems: NavItem[] = [
    { label: 'find a job', hasDropdown: true },
    { label: 'for talent', hasDropdown: true },
    { label: 'for employer', hasDropdown: true },
    { label: 'resources', hasDropdown: true },
    { label: 'about us', hasDropdown: true },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-white border-b border-gray-100 shadow-sm">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="flex items-center">
              <svg width="140" height="32" viewBox="0 0 140 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M11.5 10.5C11.5 10.5 10.5 8.5 8 8.5C5.5 8.5 4.5 10.5 4.5 10.5V24H0V10.5C0 10.5 1.5 4 8 4C14.5 4 16 10.5 16 10.5V24H11.5V10.5Z" fill="#2167AD"/>
                <path d="M28.5 10.5C28.5 10.5 27.5 8.5 25 8.5C22.5 8.5 21.5 10.5 21.5 10.5V24H17V10.5C17 10.5 18.5 4 25 4C31.5 4 33 10.5 33 10.5V24H28.5V10.5Z" fill="#2167AD"/>
                <path d="M45.5 10.5C45.5 10.5 44.5 8.5 42 8.5C39.5 8.5 38.5 10.5 38.5 10.5V24H34V10.5C34 10.5 35.5 4 42 4C48.5 4 50 10.5 50 10.5V24H45.5V10.5Z" fill="#2167AD"/>
                <text x="55" y="22" className="text-2xl font-bold fill-[#2167AD] lowercase" style={{ fontFamily: 'Inter, sans-serif' }}>randstad</text>
              </svg>
            </div>
          </div>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => (
              <div key={item.label} className="flex items-center gap-1 cursor-pointer group">
                <span className="text-[15px] font-medium text-randstad-navy group-hover:text-randstad-blue transition-colors lowercase">
                  {item.label}
                </span>
                {item.hasDropdown && <ChevronDown size={14} className="text-gray-400" />}
              </div>
            ))}
          </div>

          {/* Right Icons */}
          <div className="flex items-center gap-6">
            <div className="hidden sm:flex items-center gap-4 border-r border-gray-200 pr-6">
              <a href="#" className="text-[13px] text-randstad-navy hover:underline lowercase">contact us</a>
            </div>
            <div className="flex items-center gap-5">
              <div className="relative cursor-pointer">
                <Heart size={20} className="text-randstad-navy" />
                <span className="absolute -top-1 -right-1 w-4 h-4 bg-randstad-blue text-white text-[10px] flex items-center justify-center rounded-full">0</span>
              </div>
              <div className="flex items-center gap-2 cursor-pointer">
                <User size={20} className="text-randstad-navy" />
                <span className="hidden md:inline text-[14px] font-medium text-randstad-navy lowercase">my randstad</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

const Hero = () => {
  return (
    <section className="relative bg-randstad-navy text-white overflow-hidden py-20 lg:py-32">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 text-[13px] text-gray-400 mb-8 lowercase">
              <span>home</span> <ChevronRight size={12} />
              <span>employers</span> <ChevronRight size={12} />
              <span>industries</span> <ChevronRight size={12} />
              <span className="text-white">pharma, healthcare & lifesciences</span>
            </div>
            <h1 className="text-5xl lg:text-7xl font-bold mb-8 leading-[1.1]">
              a partner for talent in pharma, healthcare and lifesciences.
            </h1>
            <p className="text-lg lg:text-xl text-gray-300 mb-10 leading-relaxed max-w-xl">
              Find in-demand, professional talent — when you need it. By offering a comprehensive set of solutions, backed by our innovative technologies and global footprint, with deep insights into market dynamics, a vast pool of pre-screened candidates, and specialised recruiting and talent management processes, we'll help you fill crucial roles to bolster growth and agility.
            </p>
            <button className="px-10 py-4 border-2 border-white text-white font-semibold rounded-sm hover:bg-white hover:text-randstad-navy transition-all duration-300 lowercase">
              get in touch
            </button>
          </div>

          {/* Abstract Graphic */}
          <div className="relative w-full lg:w-1/2 h-[400px] hidden lg:block">
            <div className="absolute top-0 right-0 w-full h-full">
              <motion.div 
                initial={{ x: 100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 1, ease: "easeOut" }}
                className="relative w-full h-full"
              >
                {/* Diagonal bars matching screenshot 18 */}
                <div className="absolute top-10 right-20 w-16 h-[300px] bg-randstad-purple rounded-full transform rotate-[35deg] opacity-80" />
                <div className="absolute top-20 right-40 w-16 h-[350px] bg-randstad-purple rounded-full transform rotate-[35deg] opacity-60" />
                <div className="absolute top-40 right-60 w-16 h-[400px] bg-randstad-purple rounded-full transform rotate-[35deg] opacity-40" />
                <div className="absolute -top-10 right-0 w-16 h-[250px] bg-randstad-purple rounded-full transform rotate-[35deg] opacity-90" />
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const TwoColumnSection = ({ 
  title, 
  text, 
  image, 
  reverse = false, 
  dark = false,
  buttonLabel
}: { 
  title: string; 
  text: string; 
  image: string; 
  reverse?: boolean; 
  dark?: boolean;
  buttonLabel?: string;
}) => {
  return (
    <section className={`flex flex-col lg:flex-row ${reverse ? 'lg:flex-row-reverse' : ''} min-h-[500px]`}>
      <div className={`w-full lg:w-1/2 flex items-center justify-center p-12 lg:p-24 ${dark ? 'bg-randstad-navy text-white' : 'bg-white text-randstad-navy'}`}>
        <div className="max-w-lg">
          <h2 className="text-4xl lg:text-5xl font-bold mb-8 leading-tight">{title}</h2>
          <p className={`text-lg leading-relaxed mb-8 ${dark ? 'text-gray-300' : 'text-gray-600'}`}>{text}</p>
          {buttonLabel && (
            <button className={`px-8 py-3 border-2 font-semibold rounded-sm transition-all duration-300 lowercase ${dark ? 'border-white text-white hover:bg-white hover:text-randstad-navy' : 'border-randstad-navy text-randstad-navy hover:bg-randstad-navy hover:text-white'}`}>
              {buttonLabel}
            </button>
          )}
        </div>
      </div>
      <div className="w-full lg:w-1/2 relative h-[400px] lg:h-auto">
        <img 
          src={image} 
          alt={title} 
          className="absolute inset-0 w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
      </div>
    </section>
  );
};

const BlueBanner = ({ title, buttonLabel }: { title: string; buttonLabel: string }) => (
  <section className="bg-randstad-light-blue py-20">
    <div className="max-w-[1440px] mx-auto px-6 lg:px-12 flex flex-col lg:flex-row items-center justify-between gap-8">
      <h2 className="text-4xl lg:text-5xl font-bold text-white max-w-3xl leading-tight">
        {title}
      </h2>
      <button className="px-10 py-4 border-2 border-white text-white font-semibold rounded-sm hover:bg-white hover:text-randstad-light-blue transition-all duration-300 whitespace-nowrap lowercase">
        {buttonLabel}
      </button>
    </div>
  </section>
);

const CardGrid = ({ title, cards, columns = 4 }: { title: string; cards: CardProps[]; columns?: number }) => (
  <section className="py-24 bg-white">
    <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
      <h2 className="text-4xl font-bold mb-16 text-center lg:text-left">{title}</h2>
      <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-${columns} gap-8`}>
        {cards.map((card, idx) => (
          <div key={idx} className="group relative h-[450px] overflow-hidden rounded-lg cursor-pointer">
            <img 
              src={card.image} 
              alt={card.title} 
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-randstad-navy/90 via-transparent to-transparent" />
            <div className="absolute bottom-0 left-0 p-8 w-full">
              <h3 className="text-2xl font-bold text-white mb-2">{card.title}</h3>
              {card.subtitle && <p className="text-gray-300 text-sm">{card.subtitle}</p>}
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const AccordionSection = ({ title, items }: { title: string; items: FAQItem[] }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-24 bg-randstad-gray">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12 flex flex-col lg:flex-row gap-16">
        <div className="w-full lg:w-1/3">
          <h2 className="text-3xl lg:text-4xl font-bold leading-tight">{title}</h2>
        </div>
        <div className="w-full lg:w-2/3 space-y-4">
          {items.map((item, idx) => (
            <div key={idx} className="border-b border-gray-300">
              <button 
                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                className="w-full py-6 flex items-center justify-between text-left group"
              >
                <span className="text-xl font-medium text-randstad-navy group-hover:text-randstad-blue transition-colors">
                  {item.question}
                </span>
                {openIndex === idx ? <Minus size={20} className="text-randstad-blue" /> : <Plus size={20} className="text-gray-400" />}
              </button>
              <AnimatePresence>
                {openIndex === idx && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="pb-8 text-gray-600 leading-relaxed">
                      {item.answer}
                    </div>
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

const TeamSection = ({ title, members }: { title: string; members: TeamMember[] }) => (
  <section className="py-24 bg-white">
    <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
      <h2 className="text-4xl font-bold mb-16">{title}</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
        {members.map((member, idx) => (
          <div key={idx} className="flex flex-col items-start">
            <div className="w-48 h-48 rounded-full overflow-hidden mb-6">
              <img 
                src={member.image} 
                alt={member.name} 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <h3 className="text-2xl font-bold text-randstad-blue mb-1">{member.name}</h3>
            <p className="text-gray-600 mb-6 leading-tight">{member.role}</p>
            <div className="space-y-3">
              <a href={`mailto:${member.email}`} className="flex items-center gap-3 text-randstad-blue hover:underline text-sm">
                <Mail size={16} />
                {member.email}
              </a>
              <a href="#" className="flex items-center gap-3 text-randstad-navy hover:text-randstad-blue transition-colors">
                <div className="w-6 h-6 bg-randstad-navy rounded flex items-center justify-center text-white">
                  <Linkedin size={14} fill="white" />
                </div>
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const Footer = () => {
  const footerLinks = [
    {
      title: 'find a job',
      links: ['explore all jobs', 'submit your cv', 'join our team', 'refer a friend']
    },
    {
      title: 'for employers',
      links: ['submit a vacancy', 'request a callback', 'our services', 'specialisms', 'case studies', 'testimonials']
    },
    {
      title: 'workforce insights',
      links: ['talent insights reports', 'employer brand research reports', 'salary trends reports', 'ed&i reports', 'workmonitor reports', 'startup hiring trends', 'talent pulse surveys']
    },
    {
      title: 'jobs',
      links: ['engineering jobs', 'cxo jobs', 'manufacturing jobs', 'supply chain & logistics jobs', 'education jobs', 'finance & accounting jobs', 'healthcare jobs', 'hr & admin support jobs', 'ites/gcc jobs', 'legal & compliance jobs', 'sales & marketing jobs']
    },
    {
      title: 'for talents',
      links: ['specialisms', 'testimonials', 'career advice', 'beware of job scams']
    },
    {
      title: 'resources',
      links: ['case studies', 'press room', 'blogs']
    }
  ];

  return (
    <footer className="bg-randstad-navy text-white pt-20 pb-10">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-8 gap-y-12 mb-20">
          {footerLinks.map((section) => (
            <div key={section.title}>
              <h4 className="text-lg font-bold mb-6 lowercase">{section.title}</h4>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link}>
                    <a href="#" className="text-sm text-gray-400 hover:text-white transition-colors lowercase">{link}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-gray-800 pt-12 mb-12">
          <div className="flex flex-wrap items-center gap-6 mb-12">
            <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-randstad-blue transition-colors">
              <Linkedin size={18} fill="white" />
            </a>
            <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-randstad-blue transition-colors">
              <Twitter size={18} fill="white" />
            </a>
            <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-randstad-blue transition-colors">
              <Facebook size={18} fill="white" />
            </a>
            <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-randstad-blue transition-colors">
              <Youtube size={18} fill="white" />
            </a>
            <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-randstad-blue transition-colors">
              <Instagram size={18} fill="white" />
            </a>
          </div>

          <div className="space-y-6 text-[13px] text-gray-400 max-w-5xl">
            <p>registered office: Randstad India Private Limited, CIN U74210TN1992PTC023097,/Randstad House, Old No. 5 & 5A, New No. 9, Pycrofts Garden Road, Nungambakkam, Chennai, TN - 600 006</p>
            <div className="flex items-center gap-2">
              <span className="font-bold text-white">RANDSTAD,</span>
              <svg width="24" height="16" viewBox="0 0 24 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M4 4C4 4 3 2 1 2C-1 2 -2 4 -2 4V14H-6V4C-6 4 -4.5 -2 2 -2C8.5 -2 10 4 10 4V14H6V4Z" fill="#2167AD"/>
                <path d="M18 4C18 4 17 2 15 2C13 2 12 4 12 4V14H8V4C8 4 9.5 -2 16 -2C22.5 -2 24 4 24 4V14H20V4Z" fill="#2167AD"/>
              </svg>
              <span>HUMAN FORWARD and SHAPING THE WORLD OF WORK are registered trademarks of © Randstad N.V.2023</span>
            </div>
            <p className="leading-relaxed">
              <span className="font-bold text-white">Security Advice:</span> Randstad India does not charge any fee at any stage of its recruitment process from the candidate nor allows their employees to collect any fees from any candidates. <a href="#" className="underline">Click here to know more</a>
            </p>
            <p className="leading-relaxed">
              <span className="font-bold text-white">EEO Statement:</span> Randstad India is an Equal Employment Opportunity Employer. All qualified applicants receive consideration for employment without regard to race, color, religion, sex, sexual orientation, gender identity or expression, appearance, national origin, age, marital status, veteran status, or disability status, or any other characteristics. Our global mission is to become the world’s most equitable and specialized talent company, and we actively embrace diversity and inclusion as the cornerstones of our success. To read more of Randstad India’s work in the space of equity, diversity and inclusion please <a href="#" className="underline">click here</a>
            </p>
          </div>
        </div>

        <div className="flex flex-wrap gap-x-8 gap-y-4 text-[13px] text-gray-400 border-t border-gray-800 pt-8">
          <a href="#" className="hover:text-white transition-colors lowercase">terms & conditions</a>
          <a href="#" className="hover:text-white transition-colors lowercase">cookies</a>
          <a href="#" className="hover:text-white transition-colors lowercase">misconduct reporting procedure</a>
          <a href="#" className="hover:text-white transition-colors lowercase">accessibility</a>
          <a href="#" className="hover:text-white transition-colors lowercase">be aware</a>
          <a href="#" className="hover:text-white transition-colors lowercase">sitemap</a>
          <a href="#" className="hover:text-white transition-colors lowercase">privacy statement</a>
        </div>
      </div>
    </footer>
  );
};

// --- Main App ---

export default function App() {
  const caseStudies: CardProps[] = [
    { title: 'case study 1', image: 'https://picsum.photos/seed/cs1/800/1000' },
    { title: 'case study 2', image: 'https://picsum.photos/seed/cs2/800/1000' },
    { title: 'case study 3', image: 'https://picsum.photos/seed/cs3/800/1000' },
    { title: 'case study 4', image: 'https://picsum.photos/seed/cs4/800/1000' },
  ];

  const absenteeismCards: CardProps[] = [
    { title: 'getting more work done: how absenteeism and presenteeism affect productivity', image: 'https://picsum.photos/seed/abs1/800/1000' },
    { title: 'manage absenteeism in the workplace with proactive planning and long-term solutions.', image: 'https://picsum.photos/seed/abs2/800/1000' },
    { title: 'how to manage absenteeism to keep your business running.', image: 'https://picsum.photos/seed/abs3/800/1000' },
    { title: 'case study: lean staffing improves attendance.', image: 'https://picsum.photos/seed/abs4/800/1000' },
  ];

  const whyChooseUsCards: CardProps[] = [
    { title: 'talent network', image: 'https://picsum.photos/seed/why1/800/1000' },
    { title: 'specialized team of recruiters', image: 'https://picsum.photos/seed/why2/800/1000' },
    { title: 'focus on diversity & inclusion', image: 'https://picsum.photos/seed/why3/800/1000' },
  ];

  const faqs: FAQItem[] = [
    { question: 'why to choose randstad?', answer: 'Randstad is a global leader in the HR services industry. We combine our passion for people with the power of today’s intelligent technology to help people and organizations realize their true potential.' },
    { question: 'how much time does a permanent recruitment takes?', answer: 'The timeline for permanent recruitment varies depending on the complexity of the role and market availability, but typically ranges from 4 to 8 weeks.' },
    { question: 'what is the recruitment process flow?', answer: 'Our process includes sourcing, screening, interviewing, reference checks, and final selection to ensure the best fit for your organization.' },
    { question: 'any latest facts/data/insights about the present scenario of the industry?', answer: 'The healthcare sector is seeing a massive shift towards digital health and specialized care, leading to increased demand for niche skills.' },
    { question: 'do we have a candidate network or database?', answer: 'Yes, we maintain one of the largest and most up-to-date candidate databases in the industry, specifically vetted for healthcare and lifesciences.' },
    { question: 'do we have a team who understand the healthcare Industry or have we hired for any hospitals (super specialist, consultants, registrar etc) ?', answer: 'Absolutely. Our recruiters are industry experts who have successfully placed high-level medical professionals across various specialties.' },
    { question: 'how does the temp staffing model work for Hospitals?', answer: 'We provide flexible staffing solutions to handle peak loads, seasonal demands, or specialized short-term projects.' },
    { question: 'do we have a candidate network or database in the PHL sector?', answer: 'Yes, our Pharma, Healthcare, and Lifesciences (PHL) network is extensive and covers all major verticals.' },
  ];

  const teamMembers: TeamMember[] = [
    { name: 'pooja upadhyaya', role: 'National Vertical Head, Healthcare & Lifesciences', email: 'pooja.upadhyaya@randstad.in', image: 'https://picsum.photos/seed/team1/400/400' },
    { name: 'vipul agarwal', role: 'Delivery Head, Healthcare & Lifesciences', email: 'vipul.a@randstad.in', image: 'https://picsum.photos/seed/team2/400/400' },
    { name: 'sahana s', role: 'Talent Partner, Healthcare & Lifesciences', email: 'sahana.s@randstad.in', image: 'https://picsum.photos/seed/team3/400/400' },
    { name: 'sourabh sharma', role: 'Talent Partner, Healthcare & Lifesciences', email: 's.sourabh@randstad.in', image: 'https://picsum.photos/seed/team4/400/400' },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      
      <TwoColumnSection 
        title="attract healthcare staff."
        text="The shortage of healthcare professionals is intensifying. Randstad’s extensive expertise in the healthcare sector allows us to cut through the scarcity and connect with skilled healthcare professionals."
        image="https://picsum.photos/seed/hc1/1200/800"
      />

      <TwoColumnSection 
        title="our expertise."
        text="Our deep understanding of healthcare allows us to zero in on qualified healthcare professionals with the right mix of skills. We have the resources to assist with high volume staffing that supports continuity of operations and creates a fast and seamless service experience."
        image="https://picsum.photos/seed/hc2/1200/800"
        reverse
        dark
      />

      <TwoColumnSection 
        title="handling complex requirements."
        text="When lives and health are on the line, it's essential you have highly qualified staff you can rely on. Randstad healthcare is staffed by experts who understand your unique needs in the healthcare space, ensuring you can match with needed talent at short notice."
        image="https://picsum.photos/seed/hc3/1200/800"
      />

      <BlueBanner 
        title="contact us to start a conversation about your talent needs."
        buttonLabel="let's meet"
      />

      <TwoColumnSection 
        title="talent network."
        text="We offer our partners access to an extensive network of pre-vetted candidates with highly specialized skill sets across several verticals within the Healthcare, life sciences, and Pharmaceutical Industries."
        image="https://picsum.photos/seed/hc4/1200/800"
        dark
      />

      <TwoColumnSection 
        title="specialized team of recruiters."
        text="Our recruitment team undergoes thorough training within their specialist vertical, and many hold a Healthcare, Lifesciences, or pharma qualification or have a background in the Healthcare, Lifesciences & and Pharmaceutical Industry. Having an Industry expert hiring team, we are highly qualified to fill any vacancy our partners require."
        image="https://picsum.photos/seed/hc5/1200/800"
        reverse
        dark
      />

      <CardGrid 
        title="read our case studies to learn why we are the best in business."
        cards={caseStudies}
      />

      <TwoColumnSection 
        title="focus on diversity and inclusion."
        text="In recent years, there has been a growing recognition of the importance of diversity and inclusion in the workplace, particularly in the Healthcare, Lifesciences, and pharmaceutical Industries. At Randstad, we support our clients in implementing inclusive hiring practices, fostering a culture of belonging, and providing equal opportunities for all candidates."
        image="https://picsum.photos/seed/hc6/1200/800"
        dark
      />

      <AccordionSection 
        title="FAQs about healthcare & lifesciences recruitment services."
        items={faqs}
      />

      <TeamSection 
        title="meet the team."
        members={teamMembers}
      />

      <section className="bg-randstad-light-blue py-24">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12 flex flex-col lg:flex-row gap-16">
          <div className="w-full lg:w-1/3">
            <h2 className="text-4xl font-bold text-white leading-tight">we help you find exceptional talent for a wide range of roles.</h2>
          </div>
          <div className="w-full lg:w-2/3 space-y-6">
            {['see all roles in pharma', 'see all roles in hospital/diagnostics/clinics/fertility clinics', 'see all roles in diagnostics labs', 'see all roles in consumer fall in healthcare'].map((role) => (
              <div key={role} className="border-b border-white/30 pb-6 flex items-center justify-between cursor-pointer group">
                <span className="text-xl font-medium text-white group-hover:underline">{role}</span>
                <ChevronDown size={24} className="text-white" />
              </div>
            ))}
          </div>
        </div>
      </section>

      <CardGrid 
        title="why choose us?"
        cards={whyChooseUsCards}
        columns={3}
      />

      <TwoColumnSection 
        title="workforce insights delivered to your inbox."
        text="Want to reduce your turnover rate, improve your company culture, or be inspired on improving employability for young people? Sign up to the monthly workforce insights newsletter and stay up to date with the latest recruitment and labor market news, tips, trends and reports for business leaders across the globe."
        image="https://picsum.photos/seed/hc7/1200/800"
        dark
        buttonLabel="subscribe"
      />

      <CardGrid 
        title="unlock key insights in absenteeism."
        cards={absenteeismCards}
      />

      <Footer />

      {/* Floating Action Buttons */}
      <div className="fixed bottom-8 right-8 flex flex-col gap-4 z-50">
        <button className="w-14 h-14 bg-randstad-blue text-white rounded-full shadow-lg flex items-center justify-center hover:scale-110 transition-transform">
          <MessageSquare size={24} />
        </button>
      </div>

      {/* Cookie Banner Placeholder */}
      <div className="fixed bottom-8 left-8 z-50">
        <button className="w-12 h-12 bg-randstad-blue text-white rounded-full shadow-lg flex items-center justify-center">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 9.24 20.88 6.74 19.06 4.94C18.72 4.6 18.28 4.41 17.8 4.41C16.81 4.41 16 5.22 16 6.21C16 7.2 15.2 8 14.21 8C13.22 8 12.41 7.2 12.41 6.21C12.41 5.22 11.6 4.41 10.61 4.41C9.62 4.41 8.81 5.22 8.81 6.21C8.81 7.2 8.01 8 7.02 8C6.03 8 5.22 7.2 5.22 6.21C5.22 5.22 4.41 4.41 3.42 4.41C2.94 4.41 2.5 4.6 2.16 4.94" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <circle cx="12" cy="13" r="1.5" fill="currentColor"/>
            <circle cx="7" cy="16" r="1.5" fill="currentColor"/>
            <circle cx="17" cy="16" r="1.5" fill="currentColor"/>
          </svg>
        </button>
      </div>

      {/* Feedback Tab */}
      <div className="fixed right-0 top-1/2 -translate-y-1/2 z-50">
        <div className="bg-randstad-blue text-white px-2 py-4 rounded-l-md cursor-pointer hover:pr-4 transition-all duration-300" style={{ writingMode: 'vertical-rl' }}>
          <span className="text-xs font-bold tracking-widest uppercase">Feedback</span>
        </div>
      </div>
    </div>
  );
}
