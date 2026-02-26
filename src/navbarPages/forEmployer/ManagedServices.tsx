import { motion } from "motion/react";

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { 
  Search, 
  Heart, 
  User, 
  Linkedin, 
  Twitter, 
  Facebook, 
  Youtube, 
  Instagram,
  ArrowRight
} from 'lucide-react';



const Hero = () => (
  <section className="bg-randstad-navy text-white py-20 overflow-hidden">
    <div className="container-custom grid lg:grid-cols-2 gap-12 items-center">
      <motion.div 
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="text-sm mb-6 flex gap-2 text-gray-400">
          <span>home</span> <span>&gt;</span> <span>employers</span> <span>&gt;</span> <span>our services</span> <span>&gt;</span> <span className="text-white">managed services</span>
        </div>
        <h1 className="text-5xl md:text-6xl font-bold mb-8 tracking-tight">managed services.</h1>
        <p className="text-xl text-gray-300 mb-10 max-w-xl leading-relaxed">
          Our managed services ensure alignment with your business objectives through proactive talent management, optimized resource allocation, and enhanced DEI initiatives. Leverage data-driven decision-making to drive success and efficiency.
        </p>
        <button className="border-2 border-white px-8 py-3.5 text-lg font-bold hover:bg-white hover:text-randstad-navy transition-all duration-300">
          request a callback
        </button>
      </motion.div>
      <div className="relative h-[400px] flex items-center justify-center">
        {/* Abstract graphic */}
        <div className="flex items-end gap-4">
          {[40, 80, 120, 160, 120, 80, 40].map((h, i) => (
            <motion.div 
              key={i}
              initial={{ height: 0 }}
              whileInView={{ height: h }}
              transition={{ duration: 0.8, delay: i * 0.1 }}
              className={`w-4 rounded-full ${i % 2 === 0 ? 'bg-randstad-blue' : 'bg-randstad-cyan'}`}
            />
          ))}
        </div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-px bg-white/10" />
      </div>
    </div>
  </section>
);

const TalentAcquisition = () => (
  <section className="py-24 bg-white">
    <div className="container-custom grid lg:grid-cols-2 gap-16">
      <h2 className="text-3xl md:text-4xl font-bold leading-tight">
        expert talent acquisition and consultancy services with randstad.
      </h2>
      <p className="text-lg text-gray-600 leading-relaxed">
        As a top talent acquisition specialist, Randstad excels in providing expert consultancy services to both employers and skilled job seekers. Our experienced consultants expertly bridge gaps in the talent market, helping you find the ideal candidate with our support.
      </p>
    </div>
  </section>
);

const ElevateBusiness = () => (
  <section className="bg-randstad-blue text-white py-24 overflow-hidden">
    <div className="container-custom grid lg:grid-cols-2 gap-12 items-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-4xl md:text-5xl font-bold mb-8 leading-tight">
          elevate your business with our managed services.
        </h2>
        <p className="text-lg text-white/90 mb-8 leading-relaxed">
          Boost your business with our managed services. We align talent and resources with your goals, manage proactively, optimize allocations, and use data-driven insights to enhance efficiency and support DEI initiatives.
        </p>
      </motion.div>
      <div className="relative">
        <img 
          src="https://picsum.photos/seed/randstad1/800/600" 
          alt="People working" 
          className="rounded-sm shadow-2xl"
          referrerPolicy="no-referrer"
        />
        <div className="absolute -left-12 top-1/2 -translate-y-1/2 flex gap-4">
          <div className="w-12 h-12 rounded-full bg-randstad-blue border-4 border-white" />
          <div className="w-24 h-24 rounded-full bg-randstad-cyan border-4 border-white" />
          <div className="w-16 h-16 rounded-full bg-white" />
        </div>
      </div>
    </div>
  </section>
);

const ContactUs = () => (
  <section className="bg-randstad-navy text-white py-20">
    <div className="container-custom flex flex-col md:flex-row items-center justify-between gap-8">
      <h2 className="text-4xl md:text-5xl font-bold max-w-2xl leading-tight">
        contact us to start a conversation about your talent needs.
      </h2>
      <button className="border-2 border-white px-8 py-3.5 text-lg font-bold hover:bg-white hover:text-randstad-navy transition-all duration-300 whitespace-nowrap">
        request a callback
      </button>
    </div>
  </section>
);

const StrategicPlanning = () => (
  <section className="py-24 bg-white">
    <div className="container-custom">
      <h2 className="text-3xl md:text-4xl font-bold mb-16">strategic workforce planning.</h2>
      <div className="grid md:grid-cols-3 gap-8">
        {[
          { title: "what is workforce planning and why is it important?", img: "https://picsum.photos/seed/wp1/400/500" },
          { title: "common workforce planning mistakes companies make.", img: "https://picsum.photos/seed/wp2/400/500" },
          { title: "the workforce planning process: 5 steps to success.", img: "https://picsum.photos/seed/wp3/400/500" }
        ].map((item, i) => (
          <motion.div 
            key={i}
            whileHover={{ y: -10 }}
            className="group cursor-pointer relative overflow-hidden rounded-lg aspect-[4/5]"
          >
            <img 
              src={item.img} 
              alt={item.title} 
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-randstad-navy/90 via-transparent to-transparent" />
            <div className="absolute bottom-0 left-0 p-8">
              <h3 className="text-white text-xl font-bold leading-tight group-hover:text-randstad-cyan transition-colors">
                {item.title}
              </h3>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

const ClientSuccess = () => (
  <section className="bg-randstad-navy text-white py-24 overflow-hidden">
    <div className="container-custom grid lg:grid-cols-2 gap-16 items-center">
      <div className="order-2 lg:order-1 relative">
        <img 
          src="https://picsum.photos/seed/success/800/600" 
          alt="Client success" 
          className="rounded-sm"
          referrerPolicy="no-referrer"
        />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center gap-4">
          <div className="w-16 h-16 rounded-full bg-randstad-blue" />
          <div className="w-32 h-32 rounded-full border-[16px] border-randstad-cyan" />
          <div className="w-12 h-12 rounded-full bg-white/20" />
        </div>
      </div>
      <div className="order-1 lg:order-2">
        <h2 className="text-4xl md:text-5xl font-bold mb-8 leading-tight">
          client success stories & testimonials.
        </h2>
        <p className="text-lg text-gray-300 mb-10 leading-relaxed">
          Explore our client success stories and testimonials to see how we've helped businesses thrive. Discover real experiences and results from our satisfied clients, showcasing the impact of our services and the value we bring to every partnership.
        </p>
        <button className="border-2 border-white px-8 py-3.5 text-lg font-bold hover:bg-white hover:text-randstad-navy transition-all duration-300">
          read more
        </button>
      </div>
    </div>
  </section>
);

const WorkforceInsights = () => (
  <section className="py-24 bg-white">
    <div className="container-custom grid lg:grid-cols-2 gap-16 items-center">
      <div>
        <h2 className="text-4xl md:text-5xl font-bold mb-8 leading-tight">
          workforce insights delivered to your inbox.
        </h2>
        <p className="text-lg text-gray-600 mb-10 leading-relaxed">
          Want to reduce your turnover rate, improve your company culture, or be inspired on improving employability for young people? Sign up to the monthly workforce insights newsletter and stay up to date with the latest recruitment and labor market news, tips, trends and reports for business leaders across the globe.
        </p>
        <button className="border-2 border-randstad-blue text-randstad-blue px-8 py-3.5 text-lg font-bold hover:bg-randstad-blue hover:text-white transition-all duration-300">
          subscribe now
        </button>
      </div>
      <div className="flex justify-center">
        <div className="relative w-full max-w-md">
          <div className="w-full aspect-square border-[20px] border-randstad-blue/20 rounded-3xl flex items-center justify-center">
            <div className="w-3/4 h-1/2 border-[12px] border-randstad-blue rounded-2xl relative">
              <div className="absolute -top-12 left-1/2 -translate-x-1/2 w-16 h-16 border-l-[12px] border-b-[12px] border-randstad-cyan rotate-45" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const PrepareFuture = () => (
  <section className="bg-[#f2f2f2] py-32 text-center">
    <div className="container-custom max-w-4xl">
      <h2 className="text-4xl md:text-6xl font-bold text-randstad-navy leading-tight mb-12">
        prepare for the future with a workforce planning strategy <span className="text-randstad-blue">download your copy now.</span>
      </h2>
      <button className="border-2 border-randstad-navy px-10 py-4 text-xl font-bold hover:bg-randstad-navy hover:text-white transition-all duration-300">
        download now
      </button>
    </div>
  </section>
);

const Footer = () => (
  <footer className="bg-randstad-navy text-white pt-20 pb-10">
    <div className="container-custom">
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-12 mb-20">
        <div>
          <h4 className="font-bold mb-6">find a job</h4>
          <ul className="space-y-3 text-sm text-gray-400">
            <li><a href="#" className="hover:text-white">explore all jobs</a></li>
            <li><a href="#" className="hover:text-white">submit your cv</a></li>
            <li><a href="#" className="hover:text-white">join our team</a></li>
            <li><a href="#" className="hover:text-white">refer a friend</a></li>
          </ul>
          <h4 className="font-bold mt-10 mb-6">for talents</h4>
          <ul className="space-y-3 text-sm text-gray-400">
            <li><a href="#" className="hover:text-white">specialisms</a></li>
            <li><a href="#" className="hover:text-white">testimonials</a></li>
            <li><a href="#" className="hover:text-white">career advice</a></li>
            <li><a href="#" className="hover:text-white">beware of job scams</a></li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold mb-6">for employers</h4>
          <ul className="space-y-3 text-sm text-gray-400">
            <li><a href="#" className="hover:text-white">submit a vacancy</a></li>
            <li><a href="#" className="hover:text-white">request a callback</a></li>
            <li><a href="#" className="hover:text-white">our services</a></li>
            <li><a href="#" className="hover:text-white">specialisms</a></li>
            <li><a href="#" className="hover:text-white">case studies</a></li>
            <li><a href="#" className="hover:text-white">testimonials</a></li>
          </ul>
          <h4 className="font-bold mt-10 mb-6">resources</h4>
          <ul className="space-y-3 text-sm text-gray-400">
            <li><a href="#" className="hover:text-white">case studies</a></li>
            <li><a href="#" className="hover:text-white">press room</a></li>
            <li><a href="#" className="hover:text-white">blogs</a></li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold mb-6">workforce insights</h4>
          <ul className="space-y-3 text-sm text-gray-400">
            <li><a href="#" className="hover:text-white">talent insights reports</a></li>
            <li><a href="#" className="hover:text-white">employer brand research reports</a></li>
            <li><a href="#" className="hover:text-white">salary trends reports</a></li>
            <li><a href="#" className="hover:text-white">ed&i reports</a></li>
            <li><a href="#" className="hover:text-white">workmonitor reports</a></li>
            <li><a href="#" className="hover:text-white">startup hiring trends</a></li>
            <li><a href="#" className="hover:text-white">talent pulse surveys</a></li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold mb-6">jobs</h4>
          <ul className="space-y-3 text-sm text-gray-400">
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

      <div className="border-t border-white/10 pt-10 mb-10">
        <div className="flex gap-6 mb-8">
          <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-randstad-blue transition-colors"><Linkedin size={20} /></a>
          <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-randstad-blue transition-colors"><Twitter size={20} /></a>
          <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-randstad-blue transition-colors"><Facebook size={20} /></a>
          <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-randstad-blue transition-colors"><Youtube size={20} /></a>
          <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-randstad-blue transition-colors"><Instagram size={20} /></a>
        </div>
        
        <p className="text-xs text-gray-500 mb-4">
          registered office: Randstad India Private Limited, CIN U74210TN1992PTC023097,/Randstad House, Old No. 5 & 5A, New No. 9, Pycrofts Garden Road, Nungambakkam, Chennai, TN - 600 006
        </p>
        <div className="flex items-center gap-4 mb-8">
          <span className="text-xs font-bold">RANDSTAD,</span>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M4 4C4 8.41828 7.58172 12 12 12C16.4183 12 20 8.41828 20 4" stroke="#00C1F3" strokeWidth="4"/>
            <path d="M12 12V20" stroke="#2175D9" strokeWidth="4"/>
          </svg>
          <span className="text-[10px] text-gray-500 uppercase tracking-widest">human forward and shaping the world of work are registered trademarks of © Randstad N.V.2023</span>
        </div>

        <div className="text-[11px] text-gray-500 space-y-4 max-w-5xl">
          <p>
            <span className="font-bold text-gray-400">Security Advice:</span> Randstad India does not charge any fee at any stage of its recruitment process from the candidate nor allows their employees to collect any fees from any candidates. <a href="#" className="underline">Click here to know more</a>
          </p>
          <p>
            <span className="font-bold text-gray-400">EEO Statement:</span> Randstad India is an Equal Employment Opportunity Employer. All qualified applicants receive consideration for employment without regard to race, color, religion, sex, sexual orientation, gender identity or expression, appearance, national origin, age, marital status, veteran status, or disability status, or any other characteristics. Our global mission is to become the world’s most equitable and specialized talent company, and we actively embrace diversity and inclusion as the cornerstones of our success. To read more of Randstad India’s work in the space of equity, diversity and inclusion please <a href="#" className="underline">click here</a>
          </p>
        </div>
      </div>

      <div className="flex flex-wrap gap-x-8 gap-y-4 text-xs text-gray-500">
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

export default function EmpManagedServices() {
  return (
    <div className="min-h-screen flex flex-col">
     
      <main className="flex-grow">
        <Hero />
        <TalentAcquisition />
        <ElevateBusiness />
        <ContactUs />
        <StrategicPlanning />
        <ClientSuccess />
        <WorkforceInsights />
        <PrepareFuture />
      </main>
      
      
      {/* Feedback button */}
      <div className="fixed right-0 top-1/2 -translate-y-1/2 z-40">
        <div className="bg-randstad-blue text-white py-4 px-2 rounded-l-md cursor-pointer hover:bg-randstad-navy transition-colors [writing-mode:vertical-rl] text-xs font-bold tracking-widest">
          FEEDBACK
        </div>
      </div>

      {/* Cookie button */}
      <div className="fixed left-4 bottom-4 z-40">
        <div className="w-10 h-10 bg-randstad-blue rounded-full flex items-center justify-center text-white shadow-lg cursor-pointer hover:scale-110 transition-transform">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 2a10 10 0 1 0 10 10 4 4 0 0 1-5-5 4 4 0 0 1-5-5" />
            <path d="M8.5 8.5v.01" />
            <path d="M16 15.5v.01" />
            <path d="M12 12v.01" />
            <path d="M11 17v.01" />
            <path d="M7 13v.01" />
          </svg>
        </div>
      </div>
    </div>
  );
}
