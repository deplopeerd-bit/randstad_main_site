import React from "react";
import { motion } from "motion/react";

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { 
  Search, 
  User, 
  Heart, 
  ChevronDown, 
  Linkedin, 
  Twitter, 
  Facebook, 
  Youtube, 
  Instagram,
  ArrowRight,
  Phone
} from 'lucide-react';



const Hero = () => (
  <section className="bg-randstad-navy text-white py-24 relative overflow-hidden">
    <div className="container-custom relative z-10">
      <div className="max-w-2xl">
        <div className="flex gap-2 text-sm mb-8 opacity-60">
          <span>home</span>
          <span>&gt;</span>
          <span>employers</span>
          <span>&gt;</span>
          <span>industries</span>
          <span>&gt;</span>
          <span className="text-white opacity-100">ites/gcc</span>
        </div>
        <h1 className="text-[64px] font-medium leading-[1.1] tracking-tight mb-8">
          a partner for talent in ITES & GCC.
        </h1>
        <p className="text-[18px] leading-relaxed opacity-90 mb-10 max-w-xl">
          Find in-demand, professional talent — when you need it. By offering a 
          comprehensive set of solutions, backed by our innovative 
          technologies and global footprint, with deep insights into market 
          dynamics, a vast pool of pre-screened candidates, and specialised 
          recruiting and talent management processes, we'll help you fill 
          crucial roles to bolster growth and agility.
        </p>
        <button className="border border-white px-8 py-3 text-[16px] font-medium hover:bg-white hover:text-randstad-navy transition-colors">
          get in touch
        </button>
      </div>
    </div>
    {/* Decorative Circles */}
    <div className="absolute right-[-10%] top-1/2 -translate-y-1/2 flex items-center gap-4 opacity-80">
      <div className="w-16 h-16 rounded-full bg-randstad-purple opacity-40"></div>
      <div className="w-32 h-32 rounded-full bg-randstad-purple opacity-60"></div>
      <div className="w-48 h-48 rounded-full bg-randstad-purple"></div>
      <div className="w-32 h-32 rounded-full bg-randstad-purple opacity-60"></div>
      <div className="w-16 h-16 rounded-full bg-randstad-purple opacity-40"></div>
    </div>
  </section>
);

const NewsBanner = () => (
  <section className="bg-white py-24">
    <div className="container-custom grid lg:grid-cols-2 gap-20 items-center">
      <div className="relative">
        <img 
          src="https://picsum.photos/seed/talent/800/600" 
          alt="Talent" 
          className="w-full h-auto rounded-sm"
          referrerPolicy="no-referrer"
        />
        <div className="absolute -left-10 -bottom-10 w-64 h-64 bg-randstad-purple rounded-3xl -z-10 opacity-20"></div>
        <div className="absolute left-10 top-10 w-48 h-48 bg-randstad-purple rounded-3xl -z-10 opacity-40"></div>
      </div>
      <div>
        <span className="text-[18px] font-medium text-randstad-navy mb-4 block">executive roles Up 30%</span>
        <h2 className="text-[56px] font-medium leading-[1.1] tracking-tight mb-8">
          randstad india to hire 15,000+ staffers in 2025.
        </h2>
        <p className="text-[18px] leading-relaxed text-gray-600 mb-6">
          Fueled by AI and GCC demand, Randstad India will add 
          15,000+ staffers in 2025, boosting executive hiring. Read 
          more about it <a href="#" className="text-randstad-blue underline">here</a>.
        </p>
        <p className="text-[18px] leading-relaxed text-gray-600 mb-10">
          Looking to hire top talent in the GCC? Partner with 
          Randstad India to access skilled professionals ready to 
          drive your business forward.
        </p>
        <button className="border border-randstad-blue text-randstad-blue px-8 py-3 text-[16px] font-medium hover:bg-randstad-blue hover:text-white transition-colors">
          connect with us
        </button>
      </div>
    </div>
  </section>
);

const OvercomingCompetition = () => (
  <section className="grid lg:grid-cols-2">
    <div className="bg-randstad-beige p-20 flex flex-col justify-center">
      <div className="max-w-lg ml-auto">
        <h2 className="text-[56px] font-medium leading-[1.1] tracking-tight mb-8">
          overcoming the competition.
        </h2>
        <p className="text-[18px] leading-relaxed text-gray-700">
          In today's competitive landscape, attracting and 
          retaining top ITES/GCC talent is crucial for operational 
          efficiency, cost-effectiveness, and delivering exceptional 
          customer experiences. Randstad leverages our extensive 
          network and deep understanding of the Indian ITES/GCC 
          landscape to source the professionals who will drive 
          your business goals and enhance your competitive 
          advantage.
        </p>
      </div>
    </div>
    <div className="h-[600px]">
      <img 
        src="https://picsum.photos/seed/competition/1000/800" 
        alt="Competition" 
        className="w-full h-full object-cover"
        referrerPolicy="no-referrer"
      />
    </div>
  </section>
);

const UnderstandingNeeds = () => (
  <section className="grid lg:grid-cols-2">
    <div className="h-[600px]">
      <img 
        src="https://picsum.photos/seed/needs/1000/800" 
        alt="Needs" 
        className="w-full h-full object-cover"
        referrerPolicy="no-referrer"
      />
    </div>
    <div className="bg-randstad-navy text-white p-20 flex flex-col justify-center">
      <div className="max-w-lg">
        <h2 className="text-[56px] font-medium leading-[1.1] tracking-tight mb-8">
          understanding your needs.
        </h2>
        <p className="text-[18px] leading-relaxed opacity-90">
          Every ITES/GCC operation is unique, with its own set of 
          requirements, processes, and customer expectations. 
          We take a personalised approach to understand your 
          specific needs, whether it's short-term staffing for a 
          specific project or a long-term talent strategy to support 
          your growth. Our specialised recruiters are well-versed in 
          ITES/GCC best practices and will identify the individuals 
          who seamlessly integrate into your team and deliver 
          results.
        </p>
      </div>
    </div>
  </section>
);

const PartnerForTalent = () => (
  <section className="grid lg:grid-cols-2">
    <div className="bg-white p-20 flex flex-col justify-center">
      <div className="max-w-lg ml-auto">
        <h2 className="text-[56px] font-medium leading-[1.1] tracking-tight mb-8">
          partner for talent.
        </h2>
        <p className="text-[18px] leading-relaxed text-gray-700">
          We offer comprehensive workforce solutions tailored to 
          the ITES/GCC sector in India. We understand the 
          importance of process efficiency, data security, and 
          customer satisfaction. Our services extend beyond 
          simple placement, encompassing workforce 
          management, on-site support, and consulting to 
          optimise your ITES/GCC operations and ensure your 
          team is staffed with the skilled professionals you need.
        </p>
      </div>
    </div>
    <div className="h-[600px]">
      <img 
        src="https://picsum.photos/seed/partner/1000/800" 
        alt="Partner" 
        className="w-full h-full object-cover"
        referrerPolicy="no-referrer"
      />
    </div>
  </section>
);

const FocusIndustries = () => (
  <section className="bg-white py-32 overflow-hidden">
    <div className="container-custom grid lg:grid-cols-2 items-center">
      <div>
        <h2 className="text-[56px] font-medium leading-[1.1] tracking-tight mb-12">
          focus industries in GCC.
        </h2>
        <ol className="space-y-6 text-[20px] font-medium text-randstad-navy">
          <li>1. BFSI ( Banking and financial services)</li>
          <li>2. Engineering and Manufacturing</li>
          <li>3. Pharmaceutical and Life sciences</li>
          <li>4. Consumer Goods</li>
          <li>5. Transportation and Logistics</li>
          <li>6. Entertainment and Media</li>
        </ol>
      </div>
      <div className="relative flex justify-center">
        <div className="w-[500px] h-[500px] rounded-full border-[40px] border-randstad-purple/20 relative">
          <div className="absolute inset-0 rounded-full border-[40px] border-randstad-purple border-t-transparent border-r-transparent rotate-45"></div>
        </div>
      </div>
    </div>
  </section>
);

const AreasOfExpertise = () => (
  <section className="bg-randstad-beige py-32">
    <div className="container-custom grid lg:grid-cols-[1fr_2fr] gap-20">
      <h2 className="text-[40px] font-medium leading-tight">
        areas of expertise.
      </h2>
      <div className="text-[18px] leading-[1.8] text-gray-700">
        Quality assurance, Global Operations, Accounts Payable & Receivable, Graphic Designer/UX 
        Designer, General Ledger & Inventory Accounting, Digital Marketing, Risk/Legal & 
        Compliance, Finance & Accounts, Investment Advisor, Mergers & acquisition, Procurement, 
        Administration, Risk Management, Audit, SOX, HRSS, FP&A, Application Support/Developer , 
        Content, BI & Support Writers/Editors/Copywriting, HR Operations, Master Data Management, 
        Inside Sales/Sales Operations, Engineering & Analytics
      </div>
    </div>
  </section>
);

const ContactBanner = () => (
  <section className="bg-randstad-blue text-white py-24">
    <div className="container-custom flex items-center justify-between">
      <h2 className="text-[56px] font-medium leading-[1.1] tracking-tight max-w-2xl">
        contact us to start a conversation about your talent needs.
      </h2>
      <button className="border border-white px-10 py-4 text-[18px] font-medium hover:bg-white hover:text-randstad-blue transition-colors">
        let's meet
      </button>
    </div>
  </section>
);

const InsightsSection = () => (
  <section className="bg-white py-32">
    <div className="container-custom">
      <h2 className="text-[40px] font-medium mb-16">unlock more insights.</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {[
          { title: "the future of career pathing.", img: "pathing1" },
          { title: "a key step in successful career pathing.", img: "pathing2" },
          { title: "get the career pathing template.", img: "pathing3" },
          { title: "get the skills gap analysis template.", img: "pathing4" }
        ].map((item, i) => (
          <div key={i} className="relative h-[450px] group cursor-pointer overflow-hidden rounded-sm">
            <img 
              src={`https://picsum.photos/seed/${item.img}/500/800`} 
              alt={item.title} 
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-randstad-navy/80 to-transparent"></div>
            <div className="absolute bottom-8 left-8 right-8">
              <h3 className="text-[24px] font-medium text-white leading-tight">
                {item.title}
              </h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const WorkforceInsights = () => (
  <section className="grid lg:grid-cols-2">
    <div className="relative h-[600px]">
      <img 
        src="https://picsum.photos/seed/inbox/1000/800" 
        alt="Inbox" 
        className="w-full h-full object-cover"
        referrerPolicy="no-referrer"
      />
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-80 h-80 rounded-full border-[30px] border-randstad-purple relative">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 rounded-full border-[20px] border-randstad-purple/40"></div>
        </div>
      </div>
    </div>
    <div className="bg-randstad-navy text-white p-20 flex flex-col justify-center">
      <div className="max-w-lg">
        <h2 className="text-[56px] font-medium leading-[1.1] tracking-tight mb-8">
          workforce insights delivered to your inbox.
        </h2>
        <p className="text-[18px] leading-relaxed opacity-90 mb-10">
          Want to reduce your turnover rate, improve your 
          company culture, or be inspired on improving 
          employability for young people? Sign up to the monthly 
          workforce insights newsletter and stay up to date with 
          the latest recruitment and labor market news, tips, 
          trends and reports for business leaders across the 
          globe.
        </p>
        <button className="border border-white px-8 py-3 text-[16px] font-medium hover:bg-white hover:text-randstad-navy transition-colors">
          subscribe
        </button>
      </div>
    </div>
  </section>
);

const RightCandidate = () => (
  <section className="bg-white py-32">
    <div className="container-custom flex items-center justify-between">
      <h2 className="text-[56px] font-medium leading-[1.1] tracking-tight">
        looking for the right candidate?
      </h2>
      <button className="border border-randstad-blue text-randstad-blue px-10 py-4 text-[18px] font-medium hover:bg-randstad-blue hover:text-white transition-colors">
        submit a vacancy
      </button>
    </div>
  </section>
);

const PartnerWithUs = () => (
  <section className="grid lg:grid-cols-2">
    <div className="bg-randstad-navy text-white p-20 flex flex-col justify-center">
      <div className="max-w-lg ml-auto">
        <h2 className="text-[56px] font-medium leading-[1.1] tracking-tight mb-12">
          why partner with us?
        </h2>
        <ul className="space-y-6 text-[20px] font-medium">
          <li className="flex items-center gap-4">
            <div className="w-2 h-2 rounded-full bg-white"></div>
            targeted search
          </li>
          <li className="flex items-center gap-4">
            <div className="w-2 h-2 rounded-full bg-white"></div>
            fast onboarding
          </li>
          <li className="flex items-center gap-4">
            <div className="w-2 h-2 rounded-full bg-white"></div>
            focus on diversity
          </li>
        </ul>
      </div>
    </div>
    <div className="relative h-[600px]">
      <img 
        src="https://picsum.photos/seed/partnerwoman/1000/800" 
        alt="Partner Woman" 
        className="w-full h-full object-cover"
        referrerPolicy="no-referrer"
      />
      <div className="absolute right-0 top-1/2 -translate-y-1/2 flex items-center gap-4">
        <div className="w-32 h-32 rounded-full bg-randstad-purple"></div>
        <div className="w-48 h-48 rounded-full bg-randstad-purple/60"></div>
        <div className="w-64 h-64 rounded-full bg-randstad-purple/30"></div>
      </div>
    </div>
  </section>
);

const CaseStudy = () => (
  <section className="grid lg:grid-cols-2">
    <div className="h-[600px] relative">
      <img 
        src="https://picsum.photos/seed/casestudy/1000/800" 
        alt="Case Study" 
        className="w-full h-full object-cover"
        referrerPolicy="no-referrer"
      />
      <div className="absolute inset-0 bg-randstad-purple/10"></div>
      <div className="absolute top-10 right-10 w-48 h-48 bg-randstad-purple rounded-3xl opacity-60 rotate-12"></div>
    </div>
    <div className="bg-randstad-navy text-white p-20 flex flex-col justify-center">
      <div className="max-w-lg">
        <h2 className="text-[56px] font-medium leading-[1.1] tracking-tight mb-8">
          read our case study
        </h2>
        <p className="text-[18px] leading-relaxed opacity-90 mb-10">
          how an Indian subsidiary of the largest global 
          technology employer achieved the ‘right-resource-at-the 
          right-time-and cost’ e iciency with Randstad India’s 
          services.
        </p>
        <button className="border border-white px-8 py-3 text-[16px] font-medium hover:bg-white hover:text-randstad-navy transition-colors">
          read more
        </button>
      </div>
    </div>
  </section>
);

const KnowMore = () => (
  <section className="bg-white py-32">
    <div className="container-custom grid lg:grid-cols-2 items-center gap-20">
      <div>
        <h2 className="text-[64px] font-medium leading-[1.1] tracking-tight mb-12">
          want to know more?
        </h2>
        <button className="border border-randstad-blue text-randstad-blue px-10 py-4 text-[18px] font-medium hover:bg-randstad-blue hover:text-white transition-colors">
          request a callback
        </button>
      </div>
      <div className="flex justify-center">
        <div className="relative">
          <div className="w-64 h-96 border-[12px] border-randstad-blue rounded-[40px] relative">
            <div className="absolute top-4 left-1/2 -translate-x-1/2 w-16 h-2 bg-randstad-blue rounded-full"></div>
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 w-4 h-4 bg-randstad-blue rounded-full"></div>
          </div>
          <div className="absolute -right-20 top-10 flex flex-col gap-4">
            <div className="w-40 h-10 border-t-[10px] border-randstad-blue rounded-full opacity-20"></div>
            <div className="w-40 h-10 border-t-[10px] border-randstad-blue rounded-full opacity-40"></div>
            <div className="w-40 h-10 border-t-[10px] border-randstad-blue rounded-full opacity-60"></div>
          </div>
        </div>
      </div>
    </div>
  </section>
);



export default function EmpItes() {
  return (
    <div className="min-h-screen bg-white selection:bg-randstad-blue selection:text-white">
     
      <Hero />
      <NewsBanner />
      <OvercomingCompetition />
      <UnderstandingNeeds />
      <PartnerForTalent />
      <FocusIndustries />
      <AreasOfExpertise />
      <ContactBanner />
      <InsightsSection />
      <WorkforceInsights />
      <RightCandidate />
      <PartnerWithUs />
      <CaseStudy />
      <KnowMore />
   
      
      {/* Floating Action Buttons */}
      <div className="fixed bottom-8 right-8 flex flex-col gap-4 z-50">
        <button className="w-14 h-14 bg-randstad-blue text-white rounded-full shadow-lg flex items-center justify-center hover:scale-110 transition-transform">
          <Phone size={24} />
        </button>
        <button className="w-14 h-14 bg-white text-randstad-blue border border-randstad-blue rounded-full shadow-lg flex items-center justify-center hover:scale-110 transition-transform">
          <Search size={24} />
        </button>
      </div>
      
      {/* Feedback Tab */}
      <div className="fixed right-0 top-1/2 -translate-y-1/2 bg-randstad-blue text-white px-2 py-8 rounded-l-md cursor-pointer hover:pr-4 transition-all z-50 [writing-mode:vertical-rl] text-sm font-medium">
        Feedback
      </div>
    </div>
  );
}
