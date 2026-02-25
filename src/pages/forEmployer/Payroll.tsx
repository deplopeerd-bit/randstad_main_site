import React from "react";
import { Facebook, Heart, Instagram, Linkedin, Twitter, User, Youtube } from "lucide-react";
import { motion } from "motion/react";

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */


const Navbar = () => (
  <nav className="w-full bg-white">
    <div className="container-custom py-2 flex justify-end items-center text-[11px] text-randstad-navy/70 space-x-4">
      <a href="#" className="hover:text-randstad-blue">contact us</a>
    </div>
    <div className="container-custom py-4 flex justify-between items-center">
      <div className="flex items-center space-x-12">
        <div className="flex items-center space-x-2">
          <svg width="120" height="30" viewBox="0 0 120 30" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12.5 5C8.35786 5 5 8.35786 5 12.5C5 16.6421 8.35786 20 12.5 20H17.5V25H12.5C5.59644 25 0 19.4036 0 12.5C0 5.59644 5.59644 0 12.5 0H25V5H12.5Z" fill="#2175D9"/>
            <path d="M17.5 10C21.6421 10 25 13.3579 25 17.5C25 21.6421 21.6421 25 17.5 25H12.5V30H17.5C24.4036 30 30 24.4036 30 17.5C30 10.5964 24.4036 5 17.5 5H5V10H17.5Z" fill="#2175D9"/>
            <text x="35" y="22" fontFamily="Inter" fontWeight="700" fontSize="20" fill="#0A1931">randstad</text>
          </svg>
        </div>
        <div className="hidden lg:flex space-x-8 text-[15px] font-medium">
          <a href="#" className="flex items-center hover:text-randstad-blue">find a job <span className="ml-1 text-[10px]">▼</span></a>
          <a href="#" className="flex items-center hover:text-randstad-blue">for talent <span className="ml-1 text-[10px]">▼</span></a>
          <a href="#" className="flex items-center hover:text-randstad-blue">for employer <span className="ml-1 text-[10px]">▼</span></a>
          <a href="#" className="flex items-center hover:text-randstad-blue">resources <span className="ml-1 text-[10px]">▼</span></a>
          <a href="#" className="flex items-center hover:text-randstad-blue">about us <span className="ml-1 text-[10px]">▼</span></a>
        </div>
      </div>
      <div className="flex items-center space-x-6">
        <div className="flex items-center space-x-1 text-[14px] font-medium">
          <Heart size={18} className="text-randstad-navy" />
          <span>0</span>
        </div>
        <div className="flex items-center space-x-2 text-[14px] font-medium">
          <User size={18} className="text-randstad-navy" />
          <span>my randstad</span>
        </div>
      </div>
    </div>
  </nav>
);

const Hero = () => (
  <section className="bg-randstad-navy text-white overflow-hidden">
    <div className="container-custom py-20 lg:py-32 flex flex-col lg:flex-row items-center relative">
      <div className="w-full lg:w-1/2 z-10">
        <div className="text-[14px] mb-8 opacity-70 flex items-center space-x-2">
          <span>home</span>
          <span>›</span>
          <span>employers</span>
          <span>›</span>
          <span>our services</span>
          <span>›</span>
          <span className="font-semibold opacity-100">payroll</span>
        </div>
        <h1 className="text-[48px] lg:text-[64px] font-medium leading-[1.1] mb-8 tracking-tight">
          streamlined payroll transfers and tailored staffing solutions for your business.
        </h1>
        <p className="text-[18px] lg:text-[20px] opacity-80 mb-10 max-w-xl leading-relaxed">
          Let us handle your payroll transfers and staffing needs with precision. Our expert consultants provide customized solutions, ensuring a seamless experience while you focus on growing your business.
        </p>
        <button className="border-2 border-white px-8 py-4 text-[16px] font-medium hover:bg-white hover:text-randstad-navy transition-colors">
          request a callback
        </button>
      </div>
      
      <div className="w-full lg:w-1/2 mt-16 lg:mt-0 flex justify-center relative">
        <div className="relative w-[400px] h-[400px] lg:w-[500px] lg:h-[500px]">
          <div className="absolute inset-0 border border-white/20 rounded-full"></div>
          <div className="absolute inset-10 border border-white/20 rounded-full"></div>
          <div className="absolute inset-20 border border-white/20 rounded-full"></div>
          
          <motion.div 
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="absolute inset-0"
          >
            <div className="absolute top-1/4 right-0 w-20 h-20 bg-randstad-blue rounded-full opacity-80 blur-sm"></div>
            <div className="absolute bottom-1/4 left-0 w-24 h-24 bg-cyan-400 rounded-full opacity-80 blur-sm"></div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-28 h-28 bg-white rounded-full shadow-2xl"></div>
            <div className="absolute top-10 left-1/4 w-4 h-4 bg-randstad-blue rounded-full"></div>
          </motion.div>
        </div>
      </div>
    </div>
  </section>
);

const TrustPartner = () => (
  <section className="bg-white py-24">
    <div className="container-custom flex flex-col lg:flex-row items-start justify-between gap-12">
      <div className="w-full lg:w-1/3">
        <h2 className="text-[32px] font-medium leading-tight tracking-tight">
          your trusted partner for payroll transfers and staffing solutions.
        </h2>
      </div>
      <div className="w-full lg:w-2/3">
        <p className="text-[18px] leading-relaxed text-randstad-navy/80">
          As a top payroll transfer organization with years of expertise, we specialize in helping employers find staffing solutions tailored to their preferred locations. Our team of professional consultants and vast database of candidates across all levels ensure that your hiring needs are fully met.
        </p>
      </div>
    </div>
  </section>
);

const ContactBanner = () => (
  <section className="bg-randstad-navy text-white py-20">
    <div className="container-custom flex flex-col lg:flex-row items-center justify-between gap-8">
      <h2 className="text-[42px] lg:text-[56px] font-medium leading-tight tracking-tight max-w-2xl">
        contact us to start a conversation about your talent needs.
      </h2>
      <button className="border-2 border-white px-10 py-4 text-[16px] font-medium hover:bg-white hover:text-randstad-navy transition-colors whitespace-nowrap">
        let's connect
      </button>
    </div>
  </section>
);

const journeys = [
  {
    title: "the employee life cycle: from hire to retire.",
    image: "https://picsum.photos/seed/journey1/800/1000",
  },
  {
    title: "from interview to exit: how does your day-to-day candidate experience stack up?",
    image: "https://picsum.photos/seed/journey2/800/1000",
  },
  {
    title: "employee journey mapping: the key to improving your employee experience.",
    image: "https://picsum.photos/seed/journey3/800/1000",
  }
];

const EmployeeJourney = () => (
  <section className="bg-white py-24">
    <div className="container-custom">
      <h2 className="text-[36px] font-medium mb-16 tracking-tight max-w-3xl">
        navigating the employee journey: insights into life cycle and mapping.
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {journeys.map((item, index) => (
          <div key={index} className="group cursor-pointer relative overflow-hidden rounded-lg aspect-[3/4]">
            <img 
              src={item.image} 
              alt={item.title}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-randstad-navy/90 via-transparent to-transparent"></div>
            
            <div className="absolute inset-0 flex items-center justify-center opacity-60 pointer-events-none">
              <div className="w-48 h-48 border-2 border-randstad-blue rounded-full"></div>
              <div className="absolute w-32 h-32 border-2 border-cyan-400 rounded-full"></div>
              <div className="absolute w-16 h-16 bg-white/20 rounded-full backdrop-blur-sm"></div>
            </div>

            <div className="absolute bottom-0 left-0 p-8">
              <h3 className="text-white text-[20px] font-medium leading-snug">
                {item.title}
              </h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const ClientSuccess = () => (
  <section className="bg-randstad-navy text-white overflow-hidden">
    <div className="container-custom flex flex-col lg:flex-row items-center">
      <div className="w-full lg:w-1/2 py-20 lg:pr-24">
        <h2 className="text-[48px] font-medium leading-tight mb-8 tracking-tight">
          client success stories & testimonials.
        </h2>
        <p className="text-[18px] opacity-80 mb-10 leading-relaxed">
          Explore our client success stories and testimonials to see how we've helped businesses thrive. Discover real experiences and results from our satisfied clients, showcasing the impact of our services and the value we bring to every partnership.
        </p>
        <button className="border-2 border-white px-10 py-4 text-[16px] font-medium hover:bg-white hover:text-randstad-navy transition-colors">
          read more
        </button>
      </div>
      
      <div className="w-full lg:w-1/2 h-[500px] lg:h-[700px] relative">
        <img 
          src="https://picsum.photos/seed/success/1200/1400" 
          alt="Client Success"
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="w-[400px] h-[400px] border-[12px] border-randstad-blue/40 rounded-full"></div>
          <div className="absolute w-[300px] h-[300px] border-[8px] border-cyan-400/30 rounded-full"></div>
          <div className="absolute bottom-20 right-20 w-16 h-16 bg-randstad-blue rounded-full shadow-lg"></div>
        </div>
      </div>
    </div>
  </section>
);

const Newsletter = () => (
  <section className="bg-white py-24 overflow-hidden">
    <div className="container-custom flex flex-col lg:flex-row items-center gap-16">
      <div className="w-full lg:w-1/2">
        <h2 className="text-[48px] font-medium leading-tight mb-8 tracking-tight">
          workforce insights delivered to your inbox.
        </h2>
        <p className="text-[18px] text-randstad-navy/80 mb-10 leading-relaxed max-w-xl">
          Want to reduce your turnover rate, improve your company culture, or be inspired on improving employability for young people? Sign up to the monthly workforce insights newsletter and stay up to date with the latest recruitment and labor market news, tips, trends and reports for business leaders across the globe.
        </p>
        <button className="border-2 border-randstad-blue text-randstad-blue px-10 py-4 text-[16px] font-medium hover:bg-randstad-blue hover:text-white transition-colors">
          subscribe now
        </button>
      </div>
      
      <div className="w-full lg:w-1/2 flex justify-center relative">
        <div className="relative w-full max-w-[500px] aspect-square flex items-center justify-center">
          <div className="w-full h-3/4 border-[12px] border-randstad-blue rounded-[40px] relative flex items-center justify-center">
            <div className="absolute -top-12 w-0 h-0 border-l-[100px] border-l-transparent border-r-[100px] border-r-transparent border-b-[100px] border-b-randstad-blue"></div>
            <div className="w-3/4 h-1/2 border-t-[12px] border-randstad-blue/40 rounded-t-full"></div>
          </div>
          <div className="absolute top-10 left-10 w-full h-3/4 border-[12px] border-randstad-blue/10 rounded-[40px] -z-10"></div>
        </div>
      </div>
    </div>
  </section>
);

const DownloadBanner = () => (
  <section className="bg-randstad-light py-24">
    <div className="container-custom flex flex-col lg:flex-row items-end justify-between gap-12">
      <div className="w-full lg:w-3/4">
        <h2 className="text-[48px] lg:text-[64px] font-medium leading-[1.1] tracking-tight mb-4">
          unlock the secret to boosting employee engagement by focusing on a positive employee experience
        </h2>
        <p className="text-[36px] lg:text-[48px] font-medium text-randstad-blue leading-tight tracking-tight">
          get your free copy of our employee lifecycle model.
        </p>
      </div>
      <div className="w-full lg:w-1/4 flex justify-end">
        <button className="border-2 border-randstad-navy px-12 py-5 text-[18px] font-medium hover:bg-randstad-navy hover:text-white transition-colors whitespace-nowrap">
          download now
        </button>
      </div>
    </div>
  </section>
);

const Footer = () => (
  <footer className="bg-randstad-navy text-white pt-24 pb-12">
    <div className="container-custom">
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-12 mb-20">
        <div className="space-y-4">
          <h4 className="text-[18px] font-semibold mb-6">find a job</h4>
          <ul className="space-y-3 text-[15px] opacity-70">
            <li><a href="#" className="hover:opacity-100">explore all jobs</a></li>
            <li><a href="#" className="hover:opacity-100">submit your cv</a></li>
            <li><a href="#" className="hover:opacity-100">join our team</a></li>
            <li><a href="#" className="hover:opacity-100">refer a friend</a></li>
          </ul>
        </div>
        
        <div className="space-y-4">
          <h4 className="text-[18px] font-semibold mb-6">for talents</h4>
          <ul className="space-y-3 text-[15px] opacity-70">
            <li><a href="#" className="hover:opacity-100">specialisms</a></li>
            <li><a href="#" className="hover:opacity-100">testimonials</a></li>
            <li><a href="#" className="hover:opacity-100">career advice</a></li>
            <li><a href="#" className="hover:opacity-100">beware of job scams</a></li>
          </ul>
        </div>

        <div className="space-y-4">
          <h4 className="text-[18px] font-semibold mb-6">for employers</h4>
          <ul className="space-y-3 text-[15px] opacity-70">
            <li><a href="#" className="hover:opacity-100">submit a vacancy</a></li>
            <li><a href="#" className="hover:opacity-100">request a callback</a></li>
            <li><a href="#" className="hover:opacity-100">our services</a></li>
            <li><a href="#" className="hover:opacity-100">specialisms</a></li>
            <li><a href="#" className="hover:opacity-100">case studies</a></li>
            <li><a href="#" className="hover:opacity-100">testimonials</a></li>
          </ul>
        </div>

        <div className="space-y-4">
          <h4 className="text-[18px] font-semibold mb-6">resources</h4>
          <ul className="space-y-3 text-[15px] opacity-70">
            <li><a href="#" className="hover:opacity-100">case studies</a></li>
            <li><a href="#" className="hover:opacity-100">press room</a></li>
            <li><a href="#" className="hover:opacity-100">blogs</a></li>
          </ul>
        </div>

        <div className="space-y-4">
          <h4 className="text-[18px] font-semibold mb-6">workforce insights</h4>
          <ul className="space-y-3 text-[15px] opacity-70">
            <li><a href="#" className="hover:opacity-100">talent insights reports</a></li>
            <li><a href="#" className="hover:opacity-100">employer brand research reports</a></li>
            <li><a href="#" className="hover:opacity-100">salary trends reports</a></li>
            <li><a href="#" className="hover:opacity-100">ed&i reports</a></li>
            <li><a href="#" className="hover:opacity-100">workmonitor reports</a></li>
            <li><a href="#" className="hover:opacity-100">startup hiring trends</a></li>
            <li><a href="#" className="hover:opacity-100">talent pulse surveys</a></li>
          </ul>
        </div>

        <div className="space-y-4">
          <h4 className="text-[18px] font-semibold mb-6">jobs</h4>
          <ul className="space-y-3 text-[15px] opacity-70">
            <li><a href="#" className="hover:opacity-100">engineering jobs</a></li>
            <li><a href="#" className="hover:opacity-100">cxo jobs</a></li>
            <li><a href="#" className="hover:opacity-100">manufacturing jobs</a></li>
            <li><a href="#" className="hover:opacity-100">supply chain & logistics jobs</a></li>
            <li><a href="#" className="hover:opacity-100">education jobs</a></li>
            <li><a href="#" className="hover:opacity-100">finance & accounting jobs</a></li>
            <li><a href="#" className="hover:opacity-100">healthcare jobs</a></li>
            <li><a href="#" className="hover:opacity-100">hr & admin support jobs</a></li>
            <li><a href="#" className="hover:opacity-100">ites/gcc jobs</a></li>
            <li><a href="#" className="hover:opacity-100">legal & compliance jobs</a></li>
            <li><a href="#" className="hover:opacity-100">sales & marketing jobs</a></li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10 pt-12">
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-8 mb-12">
          <div className="flex space-x-6">
            <a href="#" className="bg-white/10 p-3 rounded-full hover:bg-white/20 transition-colors"><Linkedin size={20} /></a>
            <a href="#" className="bg-white/10 p-3 rounded-full hover:bg-white/20 transition-colors"><Twitter size={20} /></a>
            <a href="#" className="bg-white/10 p-3 rounded-full hover:bg-white/20 transition-colors"><Facebook size={20} /></a>
            <a href="#" className="bg-white/10 p-3 rounded-full hover:bg-white/20 transition-colors"><Youtube size={20} /></a>
            <a href="#" className="bg-white/10 p-3 rounded-full hover:bg-white/20 transition-colors"><Instagram size={20} /></a>
          </div>
        </div>

        <div className="text-[12px] opacity-50 space-y-6 max-w-5xl">
          <p>registered office: Randstad India Private Limited, CIN U74210TN1992PTC023097,/Randstad House, Old No. 5 & 5A, New No. 9, Pycrofts Garden Road, Nungambakkam, Chennai, TN - 600 006</p>
          
          <div className="flex items-center space-x-4">
            <span className="font-bold text-[14px] opacity-100">RANDSTAD,</span>
            <svg width="30" height="20" viewBox="0 0 30 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12.5 5C8.35786 5 5 8.35786 5 12.5C5 16.6421 8.35786 20 12.5 20H17.5V25H12.5C5.59644 25 0 19.4036 0 12.5C0 5.59644 5.59644 0 12.5 0H25V5H12.5Z" fill="#2175D9"/>
              <path d="M17.5 10C21.6421 10 25 13.3579 25 17.5C25 21.6421 21.6421 25 17.5 25H12.5V30H17.5C24.4036 30 30 24.4036 30 17.5C30 10.5964 24.4036 5 17.5 5H5V10H17.5Z" fill="#2175D9"/>
            </svg>
            <span>HUMAN FORWARD and SHAPING THE WORLD OF WORK are registered trademarks of © Randstad N.V.2023</span>
          </div>

          <div className="space-y-4">
            <p><span className="font-semibold opacity-100">Security Advice:</span> Randstad India does not charge any fee at any stage of its recruitment process from the candidate nor allows their employees to collect any fees from any candidates. <a href="#" className="underline">Click here to know more</a></p>
            <p><span className="font-semibold opacity-100">EEO Statement:</span> Randstad India is an Equal Employment Opportunity Employer. All qualified applicants receive consideration for employment without regard to race, color, religion, sex, sexual orientation, gender identity or expression, appearance, national origin, age, marital status, veteran status, or disability status, or any other characteristics. Our global mission is to become the world's most equitable and specialized talent company, and we actively embrace diversity and inclusion as the cornerstones of our success. To read more of Randstad India's work in the space of equity, diversity and inclusion please <a href="#" className="underline">click here</a></p>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/5 flex flex-wrap gap-6 text-[13px] opacity-70">
          <a href="#" className="hover:opacity-100">terms & conditions</a>
          <a href="#" className="hover:opacity-100">cookies</a>
          <a href="#" className="hover:opacity-100">misconduct reporting procedure</a>
          <a href="#" className="hover:opacity-100">accessibility</a>
          <a href="#" className="hover:opacity-100">be aware</a>
          <a href="#" className="hover:opacity-100">sitemap</a>
          <a href="#" className="hover:opacity-100">privacy statement</a>
        </div>
      </div>
    </div>
  </footer>
);

export default function EmpPayroll() {
  return (
    <div className="min-h-screen bg-white">
     
      <main>
        <Hero />
        <TrustPartner />
        <ContactBanner />
        <EmployeeJourney />
        <ClientSuccess />
        <Newsletter />
        <DownloadBanner />
      </main>

      
      {/* Floating Feedback Button Replica */}
      <div className="fixed right-0 top-1/2 -translate-y-1/2 z-50">
        <div className="bg-randstad-blue text-white py-4 px-2 rounded-l-md cursor-pointer hover:bg-blue-700 transition-colors [writing-mode:vertical-rl] text-[12px] font-medium tracking-widest">
          Feedback
        </div>
      </div>

      {/* Cookie/Bot Icon Replica */}
      <div className="fixed bottom-6 left-6 z-50">
        <div className="bg-randstad-blue text-white p-3 rounded-full shadow-lg cursor-pointer hover:scale-110 transition-transform">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 2a10 10 0 1 0 10 10 4 4 0 0 1-5-5 4 4 0 0 1-5-5" />
            <path d="M8.5 8.5v.01" />
            <path d="M16 15.5v.01" />
            <path d="M12 12v.01" />
            <path d="M11 17v.01" />
            <path d="M7 14v.01" />
          </svg>
        </div>
      </div>
    </div>
  );
}
