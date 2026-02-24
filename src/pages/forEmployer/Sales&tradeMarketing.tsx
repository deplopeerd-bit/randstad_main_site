import { motion } from "motion/react";

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { 
  Heart, 
  User, 
  ChevronDown, 
  Linkedin, 
  Mail, 
  Check, 
  Facebook, 
  Twitter, 
  Youtube, 
  Instagram,
  MessageSquare
} from 'lucide-react';

const Navbar = () => (
  <nav className="bg-white border-b border-gray-100 sticky top-0 z-50">
    <div className="container-custom py-4 flex items-center justify-between">
      <div className="flex items-center gap-12">
        <img 
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Randstad_logo.svg/2560px-Randstad_logo.svg.png" 
          alt="Randstad" 
          className="h-8"
        />
        <div className="hidden lg:flex items-center gap-8 text-[15px] font-medium text-gray-600">
          <a href="#" className="flex items-center gap-1 hover:text-randstad-blue">find a job <ChevronDown size={14} /></a>
          <a href="#" className="flex items-center gap-1 hover:text-randstad-blue">for talent <ChevronDown size={14} /></a>
          <a href="#" className="flex items-center gap-1 hover:text-randstad-blue">for employer <ChevronDown size={14} /></a>
          <a href="#" className="flex items-center gap-1 hover:text-randstad-blue">resources <ChevronDown size={14} /></a>
          <a href="#" className="flex items-center gap-1 hover:text-randstad-blue">about us <ChevronDown size={14} /></a>
        </div>
      </div>
      <div className="flex items-center gap-6 text-[15px] font-medium text-gray-600">
        <div className="hidden md:flex items-center gap-4">
          <a href="#" className="hover:text-randstad-blue">contact us</a>
        </div>
        <div className="flex items-center gap-4">
          <a href="#" className="flex items-center gap-1 hover:text-randstad-blue"><Heart size={20} /> <span className="hidden sm:inline">0</span></a>
          <a href="#" className="flex items-center gap-2 hover:text-randstad-blue border-l pl-4 border-gray-200">
            <User size={20} /> <span className="hidden sm:inline">my randstad</span>
          </a>
        </div>
      </div>
    </div>
  </nav>
);

const Hero = () => (
  <section className="bg-randstad-navy text-white py-24 overflow-hidden relative">
    <div className="container-custom grid lg:grid-cols-2 items-center gap-12">
      <motion.div 
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        className="z-10"
      >
        <div className="text-sm font-medium mb-8 opacity-80 flex gap-2">
          <span>home</span> {'>'} <span>employers</span> {'>'} <span>our services</span> {'>'} <span className="text-white">sales & trade marketing</span>
        </div>
        <h1 className="text-5xl md:text-6xl font-light leading-[1.1] mb-8 max-w-xl">
          a partner for talent in sales & trade marketing roles.
        </h1>
        <p className="text-lg font-light opacity-90 mb-12 max-w-lg leading-relaxed">
          Find in-demand, professional talent — when you need it. By offering a comprehensive set of solutions, backed by our innovative technologies and global footprint, with deep insights into market dynamics, a vast pool of pre-screened candidates, and specialised recruiting and talent management processes, we'll help you fill crucial roles to bolster growth and agility.
        </p>
        <button className="border border-white px-8 py-3 text-lg font-medium hover:bg-white hover:text-randstad-navy transition-colors">
          connect with us
        </button>
      </motion.div>
      <div className="relative h-[400px] lg:h-[500px]">
        {/* Abstract Graphic */}
        <div className="absolute right-0 top-1/2 -translate-y-1/2 flex items-center">
          <div className="w-1 bg-white/20 h-[1px] flex-grow"></div>
          <div className="relative flex items-center justify-center">
            <div className="w-48 h-48 rounded-full border-[24px] border-randstad-purple opacity-80"></div>
            <div className="absolute -left-12 w-24 h-24 rounded-full bg-randstad-purple/40"></div>
            <div className="absolute -left-24 w-12 h-12 rounded-full bg-randstad-purple/60"></div>
            <div className="absolute -left-32 w-6 h-6 rounded-full bg-randstad-purple"></div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const KeyComponents = () => (
  <section className="py-24 bg-white">
    <div className="container-custom">
      <h2 className="text-4xl font-light mb-16">key page components.</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {[
          { title: "our services", img: "https://picsum.photos/seed/services/600/800" },
          { title: "client success stories", img: "https://picsum.photos/seed/success/600/800" },
          { title: "client testimonials", img: "https://picsum.photos/seed/testimonials/600/800" },
          { title: "team", img: "https://picsum.photos/seed/team/600/800" },
        ].map((item, i) => (
          <motion.div 
            key={i}
            whileHover={{ y: -10 }}
            className="relative h-[450px] rounded-2xl overflow-hidden group cursor-pointer"
          >
            <img src={item.img} alt={item.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" referrerPolicy="no-referrer" />
            <div className="absolute inset-0 bg-gradient-to-t from-randstad-navy/80 via-transparent to-transparent"></div>
            <div className="absolute bottom-8 left-8">
              <h3 className="text-2xl font-light text-white">{item.title}</h3>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

const GoToMarket = () => (
  <section className="flex flex-col lg:flex-row min-h-[600px]">
    <div className="lg:w-1/2 bg-randstad-navy text-white p-12 lg:p-24 flex flex-col justify-center">
      <h2 className="text-5xl font-light mb-8 leading-tight">our go-to-market strategy - customised for you</h2>
      <p className="text-lg font-light opacity-90 mb-12 leading-relaxed">
        Each of our Go-To-Market strategies is customised as per your requirements. A detailed action plan on how to take your new product to the market and get customers to buy it is what we focus on. We take into account the pricing strategy, marketing plan, training support, budget, and resource needs for your new launch.
      </p>
      <button className="border border-white w-fit px-8 py-3 text-lg font-medium hover:bg-white hover:text-randstad-navy transition-colors">
        speak to an expert
      </button>
    </div>
    <div className="lg:w-1/2 relative h-[400px] lg:h-auto">
      <img 
        src="https://picsum.photos/seed/market/1200/800" 
        alt="Strategy" 
        className="w-full h-full object-cover"
        referrerPolicy="no-referrer"
      />
    </div>
  </section>
);

const ServiceOfferings = () => (
  <section className="py-24 bg-white">
    <div className="container-custom">
      <h2 className="text-4xl font-light mb-16">service offerings.</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {[
          { title: "feet on street", img: "https://picsum.photos/seed/feet/600/800" },
          { title: "in-shop sales", img: "https://picsum.photos/seed/sales/600/800" },
          { title: "visual merchandising", img: "https://picsum.photos/seed/visual/600/800" },
          { title: "market activation", img: "https://picsum.photos/seed/activation/600/800" },
        ].map((item, i) => (
          <div key={i} className="relative h-[500px] rounded-2xl overflow-hidden group">
            <img src={item.img} alt={item.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" referrerPolicy="no-referrer" />
            <div className="absolute inset-0 bg-gradient-to-t from-randstad-navy/80 via-transparent to-transparent"></div>
            <div className="absolute bottom-8 left-8">
              <h3 className="text-2xl font-light text-white">{item.title}</h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const WhatSetsUsApart = () => (
  <section className="py-24 bg-randstad-light">
    <div className="container-custom grid lg:grid-cols-2 gap-12">
      <h2 className="text-4xl font-light text-randstad-navy">what sets us apart.</h2>
      <div className="space-y-6">
        {[
          "People – Skill based Recruiters, Field driven Candidate DB, Reach up to 100+ cities, Scientific Selection Criteria.",
          "Process - End-to-end project management.",
          "Plan - Execute-Report-Consult-Improvise.",
          "Execute projects in Metros. Tier 1, Tier 2, Tier 3 and below. Location is never a challenge!",
          "Cross Industry Domain Expertise – work with clients in FMCG, CD, Pharma, BFSI and so on.",
          "ROI Focus – Design & Drive Sales and/or Marketing Goals with Positive ROI Focus."
        ].map((text, i) => (
          <div key={i} className="flex gap-6 text-lg font-light text-randstad-navy">
            <span className="font-medium min-w-[24px]">{i + 1}.</span>
            <p>{text}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const FeatureCard = ({ title, items, img, subtitle }: { title: string, items: string[], img: string, subtitle?: string }) => (
  <div className="space-y-8">
    <div className="h-[300px] rounded-2xl overflow-hidden">
      <img src={img} alt={title} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
    </div>
    <div className="space-y-4">
      <h3 className="text-3xl font-light text-randstad-navy">{title}</h3>
      {subtitle && <p className="text-lg font-light text-gray-600">{subtitle}</p>}
      <ul className="space-y-4">
        {items.map((item, i) => (
          <li key={i} className="flex items-start gap-3 text-lg font-light text-gray-700">
            <Check className="text-randstad-blue mt-1 shrink-0" size={20} />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  </div>
);

const FieldForceManagement = () => (
  <section className="py-24 bg-white">
    <div className="container-custom">
      <h2 className="text-4xl font-light mb-16">field force management</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
        <FeatureCard 
          title="retail sales"
          img="https://picsum.photos/seed/retail/800/600"
          items={["Inshop promoter & feet on street", "B2B field sales team"]}
        />
        <FeatureCard 
          title="channel development & sales"
          img="https://picsum.photos/seed/channel/800/600"
          items={["Distributor/Dealer acquisition", "Primary/Secondary sales team"]}
        />
        <FeatureCard 
          title="channel marketing"
          img="https://picsum.photos/seed/marketing/800/600"
          items={["Influencer management", "Loyalty program"]}
        />
      </div>
    </div>
  </section>
);

const RetailMarketing = () => (
  <section className="py-24 bg-white border-t border-gray-100">
    <div className="container-custom">
      <div className="mb-16">
        <h2 className="text-4xl font-light mb-4">end to end retail marketing.</h2>
        <p className="text-xl font-light text-gray-600">increases the visibility of the brand and also enhances brand loyalty.</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
        <FeatureCard 
          title="visual merchandising"
          img="https://picsum.photos/seed/merch/800/600"
          items={["POSM Deployment and Management (Hygiene & Refresh)"]}
        />
        <FeatureCard 
          title="retail audit"
          img="https://picsum.photos/seed/audit/800/600"
          items={["Branding/POSM, Planogram, Stock/SKUs, MOP, Display, Schemes & Promotions"]}
        />
        <FeatureCard 
          title="mystery shopping & loyalty programs"
          img="https://picsum.photos/seed/mystery/800/600"
          items={["Promoter Advocacy, Retailer Affinity, Customer Experience", "nd Customer Loyalty Program, Channel Partner Loyalty Program Scheme Propagation"]}
        />
      </div>
    </div>
  </section>
);

const LocalMarketing = () => (
  <section className="py-24 bg-white border-t border-gray-100">
    <div className="container-custom">
      <h2 className="text-4xl font-light mb-16">local marketing</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <FeatureCard 
          title="below the line (BTL)"
          img="https://picsum.photos/seed/btl/800/600"
          items={["Mall & Instore activation", "Marketplace activation", "Sampling/Test Marketing", "Flyers/Newspapers Inserts"]}
        />
        <FeatureCard 
          title="brand promotion"
          img="https://picsum.photos/seed/promo/800/600"
          items={["Transit Advertising", "Rural Marketing", "Branding & Promotion", "C-Sat Survey / Partner Survey"]}
        />
      </div>
    </div>
  </section>
);

const CaseStudies = () => (
  <section className="py-24 bg-white border-t border-gray-100">
    <div className="container-custom">
      <h2 className="text-4xl font-light mb-16">read our case studies to learn why we are the best in business.</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {[1, 2].map((i) => (
          <div key={i} className="relative h-[600px] rounded-2xl overflow-hidden group cursor-pointer">
            <img src={`https://picsum.photos/seed/case${i}/1200/800`} alt={`Case Study ${i}`} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" referrerPolicy="no-referrer" />
            <div className="absolute inset-0 bg-gradient-to-t from-randstad-navy/90 via-transparent to-transparent"></div>
            {/* Abstract overlay circles */}
            <div className="absolute inset-0 flex items-center justify-center opacity-30">
               <div className="w-[400px] h-[400px] border border-randstad-purple rounded-full"></div>
               <div className="absolute w-[300px] h-[300px] border border-randstad-purple rounded-full"></div>
               <div className="absolute w-[200px] h-[200px] bg-randstad-purple rounded-full"></div>
            </div>
            <div className="absolute bottom-12 left-12">
              <h3 className="text-3xl font-light text-white">case study {i}</h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const Team = () => (
  <section className="py-24 bg-white">
    <div className="container-custom">
      <h2 className="text-4xl font-light mb-16">meet the sales & trade marketing team</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-x-12 gap-y-24">
        {[
          { name: "siddharth jain", title: "Vice President - Speciality (Sales & Trade Marketing-STM)", email: "siddharth.j@randstad.in", img: "https://i.pravatar.cc/300?u=siddharth" },
          { name: "aditya kumar singh", title: "Retail & Channel Marketing Consultant", email: "aditya.ks@randstad.in", img: "https://i.pravatar.cc/300?u=aditya" },
          { name: "naveen kashyap", title: "Strategic Sales Head - STM at Randstad India", email: "naveen.kashyap@randstad.in", img: "https://i.pravatar.cc/300?u=naveen" },
          { name: "rahul bhagat", title: "Assistant Vice President - STM | Field Sales Marketing", email: "rahul.bhagat@randstad.in", img: "https://i.pravatar.cc/300?u=rahul" },
        ].map((member, i) => (
          <div key={i} className="space-y-6">
            <div className="w-48 h-48 rounded-full overflow-hidden">
              <img src={member.img} alt={member.name} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
            </div>
            <div className="space-y-2">
              <h3 className="text-3xl font-light text-randstad-blue">{member.name}</h3>
              <p className="text-lg font-light text-gray-600 leading-snug">{member.title}</p>
            </div>
            <div className="space-y-4">
              <a href={`mailto:${member.email}`} className="flex items-center gap-3 text-randstad-blue hover:underline">
                <Mail size={20} />
                <span>{member.email}</span>
              </a>
              <div className="flex gap-4">
                <a href="#" className="p-2 bg-randstad-navy text-white rounded-md hover:bg-randstad-blue transition-colors">
                  <Linkedin size={18} />
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const ContactCTA = () => (
  <section className="bg-randstad-blue text-white py-24">
    <div className="container-custom flex flex-col md:flex-row items-center justify-between gap-12">
      <h2 className="text-5xl font-light max-w-2xl leading-tight">
        contact us to start a conversation about your talent needs.
      </h2>
      <button className="border border-white px-12 py-4 text-xl font-medium hover:bg-white hover:text-randstad-blue transition-colors whitespace-nowrap">
        let's meet
      </button>
    </div>
  </section>
);

const WorkforceInsights = () => (
  <section className="flex flex-col lg:flex-row min-h-[600px]">
    <div className="lg:w-1/2 relative h-[400px] lg:h-auto overflow-hidden">
      <img 
        src="https://picsum.photos/seed/insights/1200/800" 
        alt="Insights" 
        className="w-full h-full object-cover"
        referrerPolicy="no-referrer"
      />
      {/* Abstract Graphic */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="relative">
          <div className="w-80 h-80 rounded-full border-[32px] border-randstad-purple opacity-80"></div>
          <div className="absolute -left-20 top-1/2 -translate-y-1/2 w-40 h-40 rounded-full border-[16px] border-randstad-purple/40"></div>
          <div className="absolute -left-32 top-1/2 -translate-y-1/2 w-20 h-20 rounded-full bg-randstad-purple/60"></div>
        </div>
      </div>
    </div>
    <div className="lg:w-1/2 bg-randstad-light p-12 lg:p-24 flex flex-col justify-center">
      <h2 className="text-6xl font-light text-randstad-navy mb-8 leading-tight">workforce insights delivered to your inbox.</h2>
      <p className="text-xl font-light text-gray-700 mb-12 leading-relaxed max-w-xl">
        Want to reduce your turnover rate, improve your company culture, or be inspired on improving employability for young people? Sign up to the monthly workforce insights newsletter and stay up to date with the latest recruitment and labor market news, tips, trends and reports for business leaders across the globe.
      </p>
      <button className="border border-randstad-navy text-randstad-navy w-fit px-12 py-4 text-xl font-medium hover:bg-randstad-navy hover:text-white transition-colors">
        subscribe
      </button>
    </div>
  </section>
);

const Footer = () => (
  <footer className="bg-randstad-footer text-white pt-24 pb-12">
    <div className="container-custom">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 mb-24">
        <div className="space-y-8">
          <h4 className="text-xl font-medium">find a job</h4>
          <ul className="space-y-4 text-gray-400 font-light">
            <li><a href="#" className="hover:text-white">explore all jobs</a></li>
            <li><a href="#" className="hover:text-white">submit your cv</a></li>
            <li><a href="#" className="hover:text-white">join our team</a></li>
            <li><a href="#" className="hover:text-white">refer a friend</a></li>
          </ul>
          <div className="pt-8 space-y-8">
            <h4 className="text-xl font-medium">for talents</h4>
            <ul className="space-y-4 text-gray-400 font-light">
              <li><a href="#" className="hover:text-white">specialisms</a></li>
              <li><a href="#" className="hover:text-white">testimonials</a></li>
              <li><a href="#" className="hover:text-white">career advice</a></li>
              <li><a href="#" className="hover:text-white">beware of job scams</a></li>
            </ul>
          </div>
        </div>
        <div className="space-y-8">
          <h4 className="text-xl font-medium">for employers</h4>
          <ul className="space-y-4 text-gray-400 font-light">
            <li><a href="#" className="hover:text-white">submit a vacancy</a></li>
            <li><a href="#" className="hover:text-white">request a callback</a></li>
            <li><a href="#" className="hover:text-white">our services</a></li>
            <li><a href="#" className="hover:text-white">specialisms</a></li>
            <li><a href="#" className="hover:text-white">case studies</a></li>
            <li><a href="#" className="hover:text-white">testimonials</a></li>
          </ul>
          <div className="pt-8 space-y-8">
            <h4 className="text-xl font-medium">resources</h4>
            <ul className="space-y-4 text-gray-400 font-light">
              <li><a href="#" className="hover:text-white">case studies</a></li>
              <li><a href="#" className="hover:text-white">press room</a></li>
              <li><a href="#" className="hover:text-white">blogs</a></li>
            </ul>
          </div>
        </div>
        <div className="space-y-8">
          <h4 className="text-xl font-medium">workforce insights</h4>
          <ul className="space-y-4 text-gray-400 font-light">
            <li><a href="#" className="hover:text-white">talent insights reports</a></li>
            <li><a href="#" className="hover:text-white">employer brand research reports</a></li>
            <li><a href="#" className="hover:text-white">salary trends reports</a></li>
            <li><a href="#" className="hover:text-white">ed&i reports</a></li>
            <li><a href="#" className="hover:text-white">workmonitor reports</a></li>
            <li><a href="#" className="hover:text-white">startup hiring trends</a></li>
            <li><a href="#" className="hover:text-white">talent pulse surveys</a></li>
          </ul>
        </div>
        <div className="space-y-8">
          <h4 className="text-xl font-medium">jobs</h4>
          <ul className="space-y-4 text-gray-400 font-light grid grid-cols-1 gap-y-4">
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

      <div className="border-t border-white/10 pt-12 flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="flex gap-6">
          <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-randstad-blue transition-colors"><Linkedin size={20} /></a>
          <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-randstad-blue transition-colors"><Twitter size={20} /></a>
          <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-randstad-blue transition-colors"><Facebook size={20} /></a>
          <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-randstad-blue transition-colors"><Youtube size={20} /></a>
          <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-randstad-blue transition-colors"><Instagram size={20} /></a>
        </div>
        <p className="text-sm text-gray-500 font-light text-center md:text-right">
          registered office: Randstad India Private Limited, CIN U74210TN1992PTC023097,/Randstad House, Old No. 5 & 5A, New No. 9, Pycrofts Garden Road, Nungambakkam, Chennai, TN - 600 006
        </p>
      </div>

      <div className="mt-12 flex flex-col gap-8">
        <div className="flex items-center gap-4">
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Randstad_logo.svg/2560px-Randstad_logo.svg.png" alt="Randstad" className="h-6 brightness-0 invert" />
          <p className="text-sm text-gray-400 font-light">
            , HUMAN FORWARD and SHAPING THE WORLD OF WORK are registered trademarks of © Randstad N.V.2023
          </p>
        </div>
        <div className="space-y-4 text-sm text-gray-400 font-light leading-relaxed">
          <p>
            Security Advice: Randstad India does not charge any fee at any stage of its recruitment process from the candidate nor allows their employees to collect any fees from any candidates. <a href="#" className="text-gray-300 hover:underline">Click here to know more</a>
          </p>
          <p>
            EEO Statement: Randstad India is an Equal Employment Opportunity Employer. All qualified applicants receive consideration for employment without regard to race, color, religion, sex, sexual orientation, gender identity or expression, appearance, national origin, age, marital status, veteran status, or disability status, or any other characteristics. Our global mission is to become the world’s most equitable and specialized talent company, and we actively embrace diversity and inclusion as the cornerstones of our success. To read more of Randstad India’s work in the space of equity, diversity and inclusion please <a href="#" className="text-gray-300 hover:underline">click here</a>
          </p>
        </div>
      </div>

      <div className="mt-12 pt-8 border-t border-white/10 flex flex-wrap gap-x-8 gap-y-4 text-sm text-gray-400 font-light">
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
);

const FloatingButtons = () => (
  <div className="fixed bottom-8 right-8 flex flex-col gap-4 z-50">
    <button className="w-14 h-14 bg-randstad-blue text-white rounded-full shadow-xl flex items-center justify-center hover:scale-110 transition-transform">
      <MessageSquare size={24} />
    </button>
    <div className="bg-randstad-blue text-white px-4 py-8 rounded-l-md fixed right-0 top-1/2 -translate-y-1/2 writing-vertical-rl flex items-center justify-center cursor-pointer hover:pr-2 transition-all">
      <span className="rotate-180 [writing-mode:vertical-rl] font-medium tracking-widest text-sm">FEEDBACK</span>
    </div>
  </div>
);

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <KeyComponents />
      <GoToMarket />
      <ServiceOfferings />
      <WhatSetsUsApart />
      <FieldForceManagement />
      <RetailMarketing />
      <LocalMarketing />
      <CaseStudies />
      <Team />
      <ContactCTA />
      <WorkforceInsights />
      <Footer />
      <FloatingButtons />
    </div>
  );
}
