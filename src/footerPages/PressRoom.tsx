import React from "react";

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { 
  Heart, 
  User, 
  Search, 
  Linkedin, 
  Twitter, 
  Facebook, 
  Youtube, 
  Instagram, 
  Mail, 
  Check,
  ChevronRight
} from 'lucide-react';


const Hero = () => (
  <section className="bg-randstad-navy text-white relative overflow-hidden">
    <div className="container-custom py-16 md:py-24 relative z-10">
      <div className="text-[13px] mb-8 flex items-center gap-2 opacity-80">
        <span>home</span> <ChevronRight size={12} /> <span>resources</span> <ChevronRight size={12} /> <span className="font-semibold">press room</span>
      </div>
      <h1 className="text-6xl md:text-7xl font-light tracking-tight mb-10">press room</h1>
      <button className="border border-white px-8 py-3 text-[15px] font-medium hover:bg-white hover:text-randstad-navy transition-colors">
        contact for media queries
      </button>
    </div>
    {/* Abstract Graphic Element */}
    <div className="absolute right-0 top-1/2 -translate-y-1/2 w-1/3 h-full opacity-20 pointer-events-none">
      <div className="flex flex-col gap-4">
        <div className="h-4 bg-randstad-light-blue rounded-full w-full ml-auto"></div>
        <div className="h-4 bg-white rounded-full w-3/4 ml-auto"></div>
        <div className="h-4 bg-randstad-light-blue rounded-full w-1/2 ml-auto"></div>
      </div>
    </div>
  </section>
);

const Subjects = () => (
  <section className="bg-white py-20">
    <div className="container-custom">
      <h2 className="text-4xl font-light mb-12">subjects.</h2>
      <div className="grid md:grid-cols-2 gap-8">
        <div className="group cursor-pointer">
          <div className="bg-randstad-blue aspect-[16/9] mb-6 flex items-center justify-center relative overflow-hidden">
             <div className="text-white font-bold text-4xl tracking-tighter flex items-center">
              <span className="text-white/50 mr-1">רר</span>
              randstad
            </div>
            <div className="absolute bottom-4 left-4 text-white text-sm font-medium">in the news</div>
          </div>
          <h3 className="text-2xl font-light mb-4 group-hover:text-randstad-blue transition-colors">randstad in the news & leader bytes.</h3>
          <div className="flex items-start gap-3 text-[15px] mb-6 opacity-80">
            <Check size={18} className="mt-1 flex-shrink-0" />
            <p>read what our leaders have to say on important, trending industry topics.</p>
          </div>
          <a href="#" className="text-randstad-blue text-[15px] font-medium border-b border-randstad-blue pb-0.5">read more</a>
        </div>
        <div className="group cursor-pointer">
          <div className="aspect-[16/9] mb-6 overflow-hidden">
            <img 
              src="https://picsum.photos/seed/office/800/450" 
              alt="Industry Insights" 
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              referrerPolicy="no-referrer"
            />
          </div>
          <h3 className="text-2xl font-light mb-4 group-hover:text-randstad-blue transition-colors">industry insights.</h3>
          <div className="flex items-start gap-3 text-[15px] mb-6 opacity-80">
            <Check size={18} className="mt-1 flex-shrink-0" />
            <p>read our latest press releases and industry insights from Randstad India</p>
          </div>
          <a href="#" className="text-randstad-blue text-[15px] font-medium border-b border-randstad-blue pb-0.5">read more</a>
        </div>
      </div>
    </div>
  </section>
);

const LeaderCard = ({ name, title, date, articleTitle, image }: any) => (
  <div className="group cursor-pointer">
    <div className="bg-randstad-navy p-6 flex items-center justify-between h-48 mb-6">
      <div className="text-white">
        <div className="text-[13px] uppercase tracking-widest opacity-60 mb-2">leader bytes</div>
        <div className="text-lg font-light leading-tight mb-1">{name}</div>
        <div className="text-[11px] opacity-60">{title}</div>
        <div className="text-[11px] opacity-60">Randstad India</div>
      </div>
      <div className="w-24 h-24 rounded-full overflow-hidden border-2 border-white/20">
        <img src={image} alt={name} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
      </div>
    </div>
    <div className="text-[13px] text-gray-400 mb-2">{date}</div>
    <h4 className="text-xl font-light leading-tight group-hover:text-randstad-blue transition-colors">{articleTitle}</h4>
  </div>
);

const LeadersSection = () => (
  <section className="bg-white py-20 border-t border-gray-100">
    <div className="container-custom">
      <h2 className="text-4xl font-light mb-12">randstad leaders in the news</h2>
      <div className="grid md:grid-cols-3 gap-10">
        <LeaderCard 
          name="Yeshab Giri"
          title="Chief Commercial Officer"
          date="09 February 2023"
          articleTitle="bengaluru, home to 1.5 million IT workers and called 'the world's back-office,' has dodged the te..."
          image="https://picsum.photos/seed/yeshab/200/200"
        />
        <LeaderCard 
          name="Viswanath PS"
          title="MD & Chief Executive Officer"
          date="09 February 2023"
          articleTitle="business as usual: here's why Covid-19's reemergence will not harm business continuity."
          image="https://picsum.photos/seed/viswanath/200/200"
        />
        <LeaderCard 
          name="Sanjay Shetty"
          title="Director, PSS & SAM"
          date="08 February 2023"
          articleTitle="CEO hiring – the changing path to the top job."
          image="https://picsum.photos/seed/sanjay/200/200"
        />
      </div>
    </div>
  </section>
);

const ThoughtLeadership = () => (
  <section className="bg-white py-20 border-t border-gray-100">
    <div className="container-custom">
      <h2 className="text-4xl font-light mb-12">thought leadership</h2>
      <div className="grid md:grid-cols-3 gap-10">
        {[1, 2, 3].map((i) => (
          <div key={i} className="group cursor-pointer">
            <div className="bg-randstad-blue aspect-[16/10] mb-6 flex items-center justify-center relative overflow-hidden">
               <div className="text-white font-bold text-3xl tracking-tighter flex items-center">
                <span className="text-white/50 mr-1">רר</span>
                randstad
              </div>
              <div className="absolute bottom-4 left-4 text-white text-xs font-medium">in the news</div>
            </div>
            <div className="text-[13px] text-gray-400 mb-2">09 February 2023</div>
            <h4 className="text-xl font-light leading-tight group-hover:text-randstad-blue transition-colors">
              {i === 1 && "pre budget 2023 news live and latest updates."}
              {i === 2 && "bengaluru tops tier-1 cities in job creation; jaipur, goa lead tier-2 cities in work opportunities."}
              {i === 3 && "WFH vs WFO vs Hybrid mode: Nearly 50% companies want full return to office; only 16% allow..."}
            </h4>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const IndustryNews = () => (
  <section className="bg-white py-20 border-t border-gray-100">
    <div className="container-custom">
      <div className="flex items-center justify-between mb-12">
        <h2 className="text-4xl font-light">industry news</h2>
        <a href="#" className="text-randstad-blue text-[15px] font-medium border-b border-randstad-blue pb-0.5">see all articles</a>
      </div>
      <div className="grid md:grid-cols-3 gap-10">
        <div className="group cursor-pointer">
          <div className="bg-randstad-navy p-6 flex items-center justify-between h-48 mb-6">
            <div className="text-white">
              <div className="text-[13px] uppercase tracking-widest opacity-60 mb-2">leader bytes</div>
              <div className="text-lg font-light leading-tight mb-1">Yeshab Giri</div>
              <div className="text-[11px] opacity-60">Chief Commercial Officer</div>
            </div>
            <div className="w-24 h-24 rounded-full overflow-hidden border-2 border-white/20">
              <img src="https://picsum.photos/seed/yeshab2/200/200" alt="Yeshab" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
            </div>
          </div>
          <div className="text-[13px] text-gray-400 mb-2">18 March 2025</div>
          <h4 className="text-xl font-light leading-tight group-hover:text-randstad-blue transition-colors">industry insights.</h4>
        </div>
        <div className="group cursor-pointer">
          <div className="bg-randstad-navy p-6 flex items-center justify-between h-48 mb-6">
            <div className="text-white">
              <div className="text-[13px] uppercase tracking-widest opacity-60 mb-2">leader bytes</div>
              <div className="text-lg font-light leading-tight mb-1">Yeshab Giri</div>
              <div className="text-[11px] opacity-60">Chief Commercial Officer</div>
            </div>
            <div className="w-24 h-24 rounded-full overflow-hidden border-2 border-white/20">
              <img src="https://picsum.photos/seed/yeshab3/200/200" alt="Yeshab" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
            </div>
          </div>
          <div className="text-[13px] text-gray-400 mb-2">18 March 2025</div>
          <h4 className="text-xl font-light leading-tight group-hover:text-randstad-blue transition-colors">randstad in the news & leader bytes.</h4>
        </div>
        <div className="group cursor-pointer">
          <div className="aspect-[16/10] mb-6 overflow-hidden">
            <img src="https://picsum.photos/seed/woman/800/500" alt="Woman" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" referrerPolicy="no-referrer" />
          </div>
          <div className="text-[13px] text-gray-400 mb-2">09 February 2023</div>
          <h4 className="text-xl font-light leading-tight group-hover:text-randstad-blue transition-colors">sacked twitter india employees on job hunt; may land new employment easily, even within...</h4>
        </div>
      </div>
    </div>
  </section>
);

const AwardsBanner = () => (
  <section className="bg-randstad-navy text-white py-20">
    <div className="container-custom flex flex-col md:flex-row items-center justify-between gap-8">
      <h2 className="text-4xl md:text-5xl font-light max-w-2xl leading-tight">
        check out our most recent <span className="text-randstad-light-blue">awards and recognition.</span>
      </h2>
      <button className="border border-white px-10 py-3 text-[15px] font-medium hover:bg-white hover:text-randstad-navy transition-colors whitespace-nowrap">
        learn more
      </button>
    </div>
  </section>
);

const MediaContact = () => (
  <section className="bg-white py-24">
    <div className="container-custom grid md:grid-cols-2 gap-12 items-center">
      <h2 className="text-4xl font-light">contact for media queries</h2>
      <div className="flex items-center gap-8">
        <div className="w-32 h-32 rounded-full overflow-hidden">
          <img src="https://picsum.photos/seed/manju/300/300" alt="Manjulakshmi" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
        </div>
        <div>
          <h3 className="text-2xl text-randstad-blue font-light mb-1">manjulakshmi p</h3>
          <p className="text-gray-500 text-[15px] mb-4">Head, Corporate Communications</p>
          <div className="flex flex-col gap-2">
            <a href="mailto:manjulakshmi.p@randstad.in" className="flex items-center gap-2 text-randstad-blue text-[15px] hover:underline">
              <Mail size={16} /> manjulakshmi.p@randstad.in
            </a>
            <a href="#" className="bg-randstad-navy text-white w-8 h-8 flex items-center justify-center rounded-sm hover:bg-randstad-blue transition-colors">
              <Linkedin size={16} fill="white" />
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const DownloadGuide = () => (
  <section className="bg-white py-24 border-t border-gray-100">
    <div className="container-custom flex flex-col md:flex-row items-center justify-between gap-12">
      <h2 className="text-4xl md:text-5xl font-light max-w-3xl leading-tight">
        download our guide to know more about <span className="text-randstad-blue">how to find talent with effective sourcing strategies.</span>
      </h2>
      <button className="border border-randstad-blue text-randstad-blue px-10 py-3 text-[15px] font-medium hover:bg-randstad-blue hover:text-white transition-colors whitespace-nowrap">
        download now
      </button>
    </div>
  </section>
);

const ActivePassiveSection = () => (
  <section className="flex flex-col md:flex-row min-h-[600px]">
    <div className="md:w-1/2 bg-randstad-navy text-white p-12 md:p-24 flex flex-col justify-center">
      <h2 className="text-4xl md:text-6xl font-light mb-8 leading-tight">the difference between active and passive job candidates.</h2>
      <p className="text-lg opacity-80 mb-10 max-w-md">If you are looking to improve your talent acquisition strategy and find both active and passive job seekers, here are the things you'll need to consider.</p>
      <button className="border border-white w-fit px-10 py-3 text-[15px] font-medium hover:bg-white hover:text-randstad-navy transition-colors">
        read more
      </button>
    </div>
    <div className="md:w-1/2 relative overflow-hidden">
      <img 
        src="https://picsum.photos/seed/candidate/1200/800" 
        alt="Candidate" 
        className="w-full h-full object-cover"
        referrerPolicy="no-referrer"
      />
      {/* Decorative Circle Graphic */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-64 h-64 border-4 border-randstad-light-blue rounded-full opacity-40"></div>
        <div className="absolute w-48 h-48 border-4 border-white rounded-full opacity-40"></div>
        <div className="absolute w-32 h-32 bg-randstad-light-blue rounded-full opacity-60"></div>
      </div>
    </div>
  </section>
);

const Footer = () => (
  <footer className="bg-randstad-navy text-white py-20">
    <div className="container-custom">
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-12 mb-20">
        <div>
          <h4 className="font-semibold mb-6">find a job</h4>
          <ul className="flex flex-col gap-4 text-[14px] opacity-70">
            <li><a href="#" className="hover:text-white transition-colors">explore all jobs</a></li>
            <li><a href="#" className="hover:text-white transition-colors">submit your cv</a></li>
            <li><a href="#" className="hover:text-white transition-colors">join our team</a></li>
            <li><a href="#" className="hover:text-white transition-colors">refer a friend</a></li>
          </ul>
          <h4 className="font-semibold mt-10 mb-6">for talents</h4>
          <ul className="flex flex-col gap-4 text-[14px] opacity-70">
            <li><a href="#" className="hover:text-white transition-colors">specialisms</a></li>
            <li><a href="#" className="hover:text-white transition-colors">testimonials</a></li>
            <li><a href="#" className="hover:text-white transition-colors">career advice</a></li>
            <li><a href="#" className="hover:text-white transition-colors">beware of job scams</a></li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-6">for employers</h4>
          <ul className="flex flex-col gap-4 text-[14px] opacity-70">
            <li><a href="#" className="hover:text-white transition-colors">submit a vacancy</a></li>
            <li><a href="#" className="hover:text-white transition-colors">request a callback</a></li>
            <li><a href="#" className="hover:text-white transition-colors">our services</a></li>
            <li><a href="#" className="hover:text-white transition-colors">specialisms</a></li>
            <li><a href="#" className="hover:text-white transition-colors">case studies</a></li>
            <li><a href="#" className="hover:text-white transition-colors">testimonials</a></li>
          </ul>
          <h4 className="font-semibold mt-10 mb-6">resources</h4>
          <ul className="flex flex-col gap-4 text-[14px] opacity-70">
            <li><a href="#" className="hover:text-white transition-colors">case studies</a></li>
            <li><a href="#" className="hover:text-white transition-colors">press room</a></li>
            <li><a href="#" className="hover:text-white transition-colors">blogs</a></li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-6">workforce insights</h4>
          <ul className="flex flex-col gap-4 text-[14px] opacity-70">
            <li><a href="#" className="hover:text-white transition-colors">talent insights reports</a></li>
            <li><a href="#" className="hover:text-white transition-colors">employer brand research reports</a></li>
            <li><a href="#" className="hover:text-white transition-colors">salary trends reports</a></li>
            <li><a href="#" className="hover:text-white transition-colors">ed&i reports</a></li>
            <li><a href="#" className="hover:text-white transition-colors">workmonitor reports</a></li>
            <li><a href="#" className="hover:text-white transition-colors">startup hiring trends</a></li>
            <li><a href="#" className="hover:text-white transition-colors">talent pulse surveys</a></li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-6">jobs</h4>
          <ul className="flex flex-col gap-4 text-[14px] opacity-70">
            <li><a href="#" className="hover:text-white transition-colors">engineering jobs</a></li>
            <li><a href="#" className="hover:text-white transition-colors">cxo jobs</a></li>
            <li><a href="#" className="hover:text-white transition-colors">manufacturing jobs</a></li>
            <li><a href="#" className="hover:text-white transition-colors">supply chain & logistics jobs</a></li>
            <li><a href="#" className="hover:text-white transition-colors">education jobs</a></li>
            <li><a href="#" className="hover:text-white transition-colors">finance & accounting jobs</a></li>
            <li><a href="#" className="hover:text-white transition-colors">healthcare jobs</a></li>
            <li><a href="#" className="hover:text-white transition-colors">hr & admin support jobs</a></li>
            <li><a href="#" className="hover:text-white transition-colors">ites/gcc jobs</a></li>
            <li><a href="#" className="hover:text-white transition-colors">legal & compliance jobs</a></li>
            <li><a href="#" className="hover:text-white transition-colors">sales & marketing jobs</a></li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10 pt-10 flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="flex items-center gap-4">
          <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"><Linkedin size={18} /></a>
          <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"><Twitter size={18} /></a>
          <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"><Facebook size={18} /></a>
          <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"><Youtube size={18} /></a>
          <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"><Instagram size={18} /></a>
        </div>
        <div className="text-[11px] opacity-50 text-center md:text-right max-w-2xl">
          registered office: Randstad India Private Limited, CIN U74210TN1992PTC023097,/Randstad House, Old No. 5 & 5A, New No. 9, Pycrofts Garden Road, Nungambakkam, Chennai, TN - 600 006
        </div>
      </div>

      <div className="mt-12 flex flex-col md:flex-row items-center gap-4">
        <div className="text-white font-bold text-xl tracking-tighter flex items-center">
          RANDSTAD, <span className="text-randstad-light-blue mx-1">רר</span>, HUMAN FORWARD and SHAPING THE WORLD OF WORK are registered trademarks of © Randstad N.V.2023
        </div>
      </div>

      <div className="mt-12 text-[12px] opacity-70 leading-relaxed">
        <p className="mb-4">
          Security Advice: Randstad India does not charge any fee at any stage of its recruitment process from the candidate nor allows their employees to collect any fees from any candidates. <a href="#" className="underline">Click here to know more</a>
        </p>
        <p>
          EEO Statement: Randstad India is an Equal Employment Opportunity Employer. All qualified applicants receive consideration for employment without regard to race, color, religion, sex, sexual orientation, gender identity or expression, appearance, national origin, age, marital status, veteran status, or disability status, or any other characteristics. Our global mission is to become the world's most equitable and specialized talent company, and we actively embrace diversity and inclusion as the cornerstones of our success. To read more of Randstad India's work in the space of equity, diversity and inclusion please <a href="#" className="underline">click here</a>
        </p>
      </div>

      <div className="mt-12 pt-10 border-t border-white/10 flex flex-wrap gap-x-8 gap-y-4 text-[13px] opacity-60">
        <a href="#" className="hover:text-white transition-colors">terms & conditions</a>
        <a href="#" className="hover:text-white transition-colors">cookies</a>
        <a href="#" className="hover:text-white transition-colors">misconduct reporting procedure</a>
        <a href="#" className="hover:text-white transition-colors">accessibility</a>
        <a href="#" className="hover:text-white transition-colors">be aware</a>
        <a href="#" className="hover:text-white transition-colors">sitemap</a>
        <a href="#" className="hover:text-white transition-colors">privacy statement</a>
      </div>
    </div>
  </footer>
);

export default function PressRoom() {
  return (
    <div className="min-h-screen bg-white">
      <main>
        <Hero />
        <Subjects />
        <LeadersSection />
        <ThoughtLeadership />
        <IndustryNews />
        <AwardsBanner />
        <MediaContact />
        <DownloadGuide />
        <ActivePassiveSection />
      </main>
      
      {/* Floating Feedback Button */}
      <div className="fixed right-0 top-1/2 -translate-y-1/2 z-50">
        <div className="bg-randstad-blue text-white py-4 px-2 rounded-l-md cursor-pointer [writing-mode:vertical-rl] text-[13px] font-medium tracking-wide">
          feedback
        </div>
      </div>

      {/* Cookie/Bot Icon */}
      <div className="fixed bottom-6 left-6 z-50">
        <div className="bg-randstad-blue text-white w-12 h-12 rounded-full flex items-center justify-center shadow-lg cursor-pointer hover:scale-110 transition-transform">
          <div className="grid grid-cols-2 gap-0.5">
            <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
            <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
            <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
            <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
