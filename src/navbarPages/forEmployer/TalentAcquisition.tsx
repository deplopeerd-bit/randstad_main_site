import React from "react";
import { ChevronDown, ChevronRight, Facebook, Globe, Heart, Instagram, Linkedin, Search, Twitter, User, Youtube } from "lucide-react";

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */


const Header = () => {
  return (
    <header className="w-full bg-white sticky top-0 z-50 shadow-sm">
      <div className="border-b border-gray-100">
        <div className="container-custom py-2 flex justify-end items-center space-x-6 text-[11px] uppercase tracking-[0.15em] font-medium text-gray-500">
          <a href="#" className="hover:text-randstad-blue transition-colors">contact us</a>
        </div>
      </div>
      <div className="container-custom py-4 flex justify-between items-center">
        <div className="flex items-center space-x-12">
          {/* Logo */}
          <div className="flex items-center">
            <svg width="140" height="40" viewBox="0 0 140 40" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12.5 15C12.5 10.8579 15.8579 7.5 20 7.5H30V12.5H20C18.6193 12.5 17.5 13.6193 17.5 15V25C17.5 26.3807 18.6193 27.5 20 27.5H30V32.5H20C15.8579 32.5 12.5 29.1421 12.5 25V15Z" fill="#2175d9"/>
              <path d="M35 7.5H45C49.1421 7.5 52.5 10.8579 52.5 15V25C52.5 29.1421 49.1421 32.5 45 32.5H35V7.5ZM45 27.5C46.3807 27.5 47.5 26.3807 47.5 25V15C47.5 13.6193 46.3807 12.5 45 12.5H40V27.5H45Z" fill="#2175d9"/>
              <text x="60" y="27" fontFamily="Inter" fontWeight="700" fontSize="22" fill="#2175d9">randstad</text>
            </svg>
          </div>
          
          {/* Navigation */}
          <nav className="hidden lg:flex items-center space-x-8 text-[15px] font-normal text-[#1a1a1a]">
            <div className="flex items-center cursor-pointer hover:text-randstad-blue group">
              <span>find a job</span>
              <ChevronDown size={14} className="ml-1 opacity-50 group-hover:rotate-180 transition-transform" />
            </div>
            <div className="flex items-center cursor-pointer hover:text-randstad-blue group">
              <span>for talent</span>
              <ChevronDown size={14} className="ml-1 opacity-50 group-hover:rotate-180 transition-transform" />
            </div>
            <div className="flex items-center cursor-pointer hover:text-randstad-blue group">
              <span>for employer</span>
              <ChevronDown size={14} className="ml-1 opacity-50 group-hover:rotate-180 transition-transform" />
            </div>
            <div className="flex items-center cursor-pointer hover:text-randstad-blue group">
              <span>resources</span>
              <ChevronDown size={14} className="ml-1 opacity-50 group-hover:rotate-180 transition-transform" />
            </div>
            <div className="flex items-center cursor-pointer hover:text-randstad-blue group">
              <span>about us</span>
              <ChevronDown size={14} className="ml-1 opacity-50 group-hover:rotate-180 transition-transform" />
            </div>
          </nav>
        </div>

        <div className="flex items-center space-x-6 text-[#1a1a1a]">
          <div className="flex items-center space-x-2 cursor-pointer hover:text-randstad-blue group">
            <Heart size={20} className="group-hover:fill-randstad-blue" />
            <span className="text-sm font-medium">0</span>
          </div>
          <div className="flex items-center space-x-2 cursor-pointer hover:text-randstad-blue">
            <User size={20} />
            <span className="text-sm font-medium">my randstad</span>
          </div>
          <Search size={20} className="cursor-pointer hover:text-randstad-blue" />
        </div>
      </div>
    </header>
  );
};

const Hero = () => {
  return (
    <section className="relative w-full h-[640px] overflow-hidden bg-[#051937]">
      <div className="absolute inset-0">
        <img 
          src="https://picsum.photos/seed/randstad-hero-woman/1920/1080?blur=2" 
          alt="Randstad Enterprise" 
          className="w-full h-full object-cover opacity-70"
          referrerPolicy="no-referrer"
        />
        {/* Graphic elements - concentric circles */}
        <div className="absolute top-1/2 right-[10%] w-[500px] h-[500px] border-[40px] border-randstad-lime rounded-full opacity-60 -translate-y-1/2 translate-x-1/2"></div>
        <div className="absolute top-1/2 right-[10%] w-[400px] h-[400px] border-[20px] border-randstad-lime rounded-full opacity-30 -translate-y-1/2 translate-x-1/2"></div>
        <div className="absolute top-1/2 right-[10%] w-[600px] h-[600px] border-[1px] border-white/20 rounded-full -translate-y-1/2 translate-x-1/2"></div>
      </div>
      
      <div className="container-custom relative h-full flex flex-col justify-center text-white z-10">
        <div className="flex items-center space-x-2 text-[11px] uppercase tracking-[0.2em] mb-12 opacity-70 font-medium">
          <a href="#" className="hover:text-randstad-lime transition-colors">home</a>
          <ChevronRight size={12} className="opacity-50" />
          <a href="#" className="hover:text-randstad-lime transition-colors">employers</a>
          <ChevronRight size={12} className="opacity-50" />
          <a href="#" className="hover:text-randstad-lime transition-colors">our services</a>
          <ChevronRight size={12} className="opacity-50" />
          <span className="font-bold text-white">enterprise</span>
        </div>
        
        <h1 className="text-[64px] md:text-[84px] font-normal mb-8 max-w-3xl leading-[1.05] tracking-tight">
          randstad enterprise.
        </h1>
        <p className="text-[20px] md:text-[24px] font-light mb-12 max-w-2xl leading-[1.5] opacity-90">
          Delivering complex, large-scale talent advisory, acquisition, development and transition solutions, Randstad Enterprise empowers you to unlock what's at the heart of your business success — your people.
        </p>
        <div>
          <button className="btn-white-outline px-10 py-4 text-[13px] font-bold tracking-[0.15em]">
            explore our solutions
          </button>
        </div>
      </div>
    </section>
  );
};

const SolutionsGrid = () => {
  const solutions = [
    { title: 'talent acquisition', icon: (
      <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="10" y="10" width="40" height="40" stroke="currentColor" strokeWidth="2"/>
        <path d="M40 20L20 40M20 40H30M20 40V30" stroke="currentColor" strokeWidth="2"/>
      </svg>
    ) },
    { title: 'talent development', icon: (
      <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="10" y="10" width="40" height="40" stroke="currentColor" strokeWidth="2"/>
        <path d="M20 40L40 20M40 20H30M40 20V30" stroke="currentColor" strokeWidth="2"/>
      </svg>
    ) },
    { title: 'talent transition', icon: (
      <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="10" y="10" width="40" height="40" stroke="currentColor" strokeWidth="2"/>
        <path d="M20 25H40M40 25L35 20M40 25L35 30" stroke="currentColor" strokeWidth="2"/>
        <path d="M40 35H20M20 35L25 30M20 35L25 40" stroke="currentColor" strokeWidth="2"/>
      </svg>
    ) },
    { title: 'advisory', icon: (
      <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="10" y="10" width="40" height="40" stroke="currentColor" strokeWidth="2"/>
        <path d="M20 40V15H40V30H20" stroke="currentColor" strokeWidth="2"/>
      </svg>
    ) },
  ];

  return (
    <section className="py-28 bg-white">
      <div className="container-custom">
        <h2 className="text-[42px] font-normal text-randstad-navy mb-20 tracking-tight">explore global talent solutions</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {solutions.map((item, idx) => (
            <div key={idx} className="bg-randstad-navy p-14 h-[420px] flex flex-col justify-between group cursor-pointer hover:bg-randstad-blue transition-all duration-500 transform hover:-translate-y-1 shadow-xl">
              <div className="text-randstad-lime group-hover:text-white transition-colors duration-500">
                {item.icon}
              </div>
              <h3 className="text-white text-[28px] font-normal leading-[1.2] tracking-tight">
                {item.title}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const FeatureSection = ({ title, description, image, accordionItems, reverse = false, graphicType = 'bar' }) => {
  return (
    <div className="w-full">
      <section className={`flex flex-col ${reverse ? 'lg:flex-row-reverse' : 'lg:flex-row'} w-full min-h-[640px]`}>
        <div className="lg:w-1/2 bg-randstad-navy flex flex-col justify-center p-12 lg:p-24 text-white relative overflow-hidden">
          <div className="relative z-10">
            <h2 className="text-[56px] md:text-[72px] font-normal mb-10 leading-[1.1] tracking-tight">{title}.</h2>
            <p className="text-[18px] font-light opacity-80 leading-[1.6] mb-14 max-w-xl">
              {description}
            </p>
          </div>
          
          {/* Graphic elements */}
          {graphicType === 'bar' && (
            <div className="absolute top-1/2 right-0 w-[400px] h-[60px] bg-randstad-lime rounded-full opacity-90 translate-x-1/2 -translate-y-1/2 z-20"></div>
          )}
          {graphicType === 'circle' && (
            <div className="absolute top-1/2 right-0 w-[400px] h-[400px] border-[40px] border-randstad-lime rounded-full opacity-90 translate-x-1/2 -translate-y-1/2 z-20"></div>
          )}
          
          <div className="absolute top-1/2 right-0 w-[500px] h-[500px] border border-white/10 rounded-full translate-x-1/2 -translate-y-1/2"></div>
        </div>
        <div className="lg:w-1/2 relative h-[480px] lg:h-auto overflow-hidden">
          <img 
            src={image} 
            alt={title} 
            className="w-full h-full object-cover scale-105 hover:scale-110 transition-transform duration-[2000ms]"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-black/5"></div>
          {/* Circular graphic overlay */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[450px] h-[450px] border border-white/40 rounded-full"></div>
          
          {/* Graphic element continuation */}
          {graphicType === 'bar' && (
            <div className="absolute top-1/2 left-0 w-[200px] h-[60px] bg-randstad-lime rounded-full opacity-90 -translate-x-1/2 -translate-y-1/2 z-20"></div>
          )}
        </div>
      </section>
      
      <section className="bg-white py-20">
        <div className="container-custom">
          <div className="flex flex-col lg:flex-row border-t border-gray-100 pt-12">
            <div className="lg:w-1/3 mb-10 lg:mb-0">
              <h3 className="text-[24px] font-normal text-randstad-navy tracking-tight">{title} solutions</h3>
            </div>
            <div className="lg:w-2/3">
              {accordionItems.map((item, idx) => (
                <div key={idx} className="accordion-item border-gray-100 first:pt-0">
                  <button className="accordion-header group py-4">
                    <span className="text-[22px] md:text-[26px] font-light text-randstad-navy group-hover:text-randstad-blue transition-colors">{item}</span>
                    <ChevronDown className="text-randstad-blue group-hover:translate-y-1 transition-transform" size={24} />
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

const IgniteSection = () => {
  const items = [
    'talent intelligence',
    'technology',
    'talent marketing',
    'diversity, equity & inclusion'
  ];

  return (
    <section className="py-28 bg-[#f8f9fa]">
      <div className="container-custom">
        <div className="flex flex-col lg:flex-row gap-20">
          <div className="lg:w-1/3">
            <h2 className="text-[32px] font-normal text-randstad-navy leading-[1.2] tracking-tight">ignite the power of your talent.</h2>
          </div>
          <div className="lg:w-2/3">
            <p className="text-[18px] font-light text-gray-600 mb-16 leading-[1.7]">
              With advanced expertise in talent intelligence; people experience; diversity, equity and inclusion (DEI); and digital strategy, Randstad Enterprise advisory services provide audits, reviews and a plan to optimize your talent strategies. We help you unlock the power of your workforce and Human Potential to help your business succeed in any market condition.
            </p>
            <div className="space-y-0 border-t border-gray-200">
              {items.map((item, idx) => (
                <div key={idx} className="accordion-item border-gray-200">
                  <button className="accordion-header group py-6">
                    <span className="text-[24px] md:text-[28px] font-light text-randstad-navy group-hover:text-randstad-blue transition-colors">{item}</span>
                    <ChevronDown className="text-randstad-blue group-hover:translate-y-1 transition-transform" size={28} />
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const PartnerSection = () => {
  return (
    <section className="py-36 bg-white">
      <div className="container-custom flex flex-col lg:flex-row justify-between items-center gap-12">
        <h2 className="text-[48px] md:text-[64px] font-normal text-randstad-navy mb-8 lg:mb-0 max-w-3xl leading-[1.1] tracking-tight">
          ready to partner with randstad enterprise?
        </h2>
        <button className="btn-outline px-14 py-5 text-[14px] font-bold tracking-[0.2em]">
          contact us
        </button>
      </div>
    </section>
  );
};

const InsightsSection = () => {
  return (
    <section className="flex flex-col lg:flex-row min-h-[600px]">
      <div className="lg:w-1/2 bg-randstad-navy p-12 lg:p-24 flex flex-col justify-center text-white relative overflow-hidden">
        <div className="relative z-10">
          <h2 className="text-[56px] md:text-[72px] font-normal mb-10 leading-[1.1] tracking-tight">see our latest insights.</h2>
          <p className="text-[18px] font-light opacity-80 mb-14 max-w-md leading-[1.6]">
            Check out the latest talent strategy research, news and case studies for employers in India.
          </p>
          <div>
            <button className="btn-white-outline px-12 py-4 text-[13px] font-bold tracking-[0.15em]">
              read now
            </button>
          </div>
        </div>
        <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
           <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] border border-white rounded-full"></div>
        </div>
      </div>
      <div className="lg:w-1/2 relative h-[480px] lg:h-auto overflow-hidden">
        <img 
          src="https://picsum.photos/seed/city-aerial-view/1200/800" 
          alt="Insights" 
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="absolute inset-0 flex items-center justify-center">
           {/* Graphic dots overlay - matching the lime dots in screenshot */}
           <div className="relative w-full h-full">
             <div className="absolute top-[20%] right-[20%] w-24 h-24 bg-randstad-lime rounded-full opacity-90"></div>
             <div className="absolute top-[40%] right-[30%] w-32 h-32 bg-randstad-lime rounded-full opacity-90"></div>
             <div className="absolute top-[60%] right-[15%] w-28 h-28 bg-randstad-lime rounded-full opacity-90"></div>
             <div className="absolute top-[75%] right-[25%] w-20 h-20 bg-randstad-lime rounded-full opacity-90"></div>
             <div className="absolute top-[30%] right-[40%] w-16 h-16 bg-randstad-lime rounded-full opacity-90"></div>
             <div className="absolute top-[50%] right-[5%] w-12 h-12 bg-randstad-lime rounded-full opacity-90"></div>
             
             {/* Connecting line */}
             <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-40" viewBox="0 0 100 100" preserveAspectRatio="none">
               <path d="M80 20 Q 70 40, 60 60 T 85 80" stroke="white" strokeWidth="0.2" fill="none" />
             </svg>
           </div>
        </div>
      </div>
    </section>
  );
};

const AboutSection = () => {
  return (
    <section className="py-32 bg-white">
      <div className="container-custom">
        <div className="flex flex-col lg:flex-row gap-32">
          <div className="lg:w-1/2">
            <h2 className="text-[56px] md:text-[72px] font-normal text-randstad-navy mb-14 leading-[1.1] tracking-tight">about randstad enterprise</h2>
            <p className="text-[19px] font-light text-gray-700 mb-10 leading-[1.7]">
              As the leading global talent solutions provider, we enable companies to create sustainable business value and agility by keeping people at the heart of their organizations.
            </p>
            <p className="text-[19px] font-light text-gray-700 mb-14 leading-[1.7]">
              We are uniquely positioned to support the world's leading enterprises with the inflow, crossflow and outflow of all talent through Randstad Sourceright and Randstad RiseSmart.
            </p>
            <button className="btn-outline px-12 py-4 text-[13px] font-bold tracking-[0.15em]">
              more information
            </button>
          </div>
          <div className="lg:w-1/2 flex flex-col md:flex-row items-center justify-center gap-20">
            <div className="text-center group cursor-pointer">
               <div className="mb-6 transform group-hover:scale-105 transition-transform duration-500">
                 <svg width="200" height="80" viewBox="0 0 200 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20 15C20 9.47715 24.4772 5 30 5H55V15H30C28.8954 15 28 15.8954 28 17V38C28 39.1046 28.8954 40 30 40H55V50H30C24.4772 50 20 45.5228 20 40V15Z" fill="#2175d9"/>
                    <text x="65" y="32" fontFamily="Inter" fontWeight="700" fontSize="22" fill="#2175d9">randstad</text>
                    <text x="65" y="55" fontFamily="Inter" fontWeight="400" fontSize="18" fill="#2175d9">sourceright</text>
                 </svg>
               </div>
            </div>
            <div className="text-center group cursor-pointer">
               <div className="mb-6 transform group-hover:scale-105 transition-transform duration-500">
                 <svg width="200" height="80" viewBox="0 0 200 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20 15C20 9.47715 24.4772 5 30 5H55V15H30C28.8954 15 28 15.8954 28 17V38C28 39.1046 28.8954 40 30 40H55V50H30C24.4772 50 20 45.5228 20 40V15Z" fill="#2175d9"/>
                    <text x="65" y="32" fontFamily="Inter" fontWeight="700" fontSize="22" fill="#2175d9">randstad</text>
                    <text x="65" y="55" fontFamily="Inter" fontWeight="400" fontSize="18" fill="#2175d9">risesmart</text>
                 </svg>
               </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  const columns = [
    {
      title: 'find a job',
      links: ['explore all jobs', 'submit your cv', 'join our team', 'refer a friend']
    },
    {
      title: 'for talents',
      links: ['specialisms', 'testimonials', 'career advice', 'beware of job scams']
    },
    {
      title: 'for employers',
      links: ['submit a vacancy', 'request a callback', 'our services', 'specialisms', 'case studies', 'testimonials']
    },
    {
      title: 'resources',
      links: ['case studies', 'press room', 'blogs']
    },
    {
      title: 'workforce insights',
      links: ['talent insights reports', 'employer brand research reports', 'salary trends reports', 'ed&i reports', 'workmonitor reports', 'startup hiring trends', 'talent pulse surveys']
    },
    {
      title: 'jobs',
      links: ['engineering jobs', 'cxo jobs', 'manufacturing jobs', 'supply chain & logistics jobs', 'education jobs', 'finance & accounting jobs', 'healthcare jobs', 'hr & admin support jobs', 'ites/gcc jobs', 'legal & compliance jobs', 'sales & marketing jobs']
    }
  ];

  return (
    <footer className="bg-[#051937] text-white pt-28 pb-14">
      <div className="container-custom">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-x-12 gap-y-16 mb-24">
          {columns.map((col, idx) => (
            <div key={idx}>
              <h4 className="text-[17px] font-bold mb-8 tracking-tight">{col.title}</h4>
              <ul className="space-y-4">
                {col.links.map((link, lIdx) => (
                  <li key={lIdx}>
                    <a href="#" className="text-[14px] font-light opacity-60 hover:opacity-100 hover:text-randstad-blue transition-all duration-300">{link}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-white/10 pt-14 mb-14 flex flex-col md:flex-row justify-between items-center gap-10">
          <div className="flex space-x-8">
            <Linkedin size={22} className="opacity-50 hover:opacity-100 hover:text-randstad-blue cursor-pointer transition-all" />
            <Twitter size={22} className="opacity-50 hover:opacity-100 hover:text-randstad-blue cursor-pointer transition-all" />
            <Facebook size={22} className="opacity-50 hover:opacity-100 hover:text-randstad-blue cursor-pointer transition-all" />
            <Youtube size={22} className="opacity-50 hover:opacity-100 hover:text-randstad-blue cursor-pointer transition-all" />
            <Instagram size={22} className="opacity-50 hover:opacity-100 hover:text-randstad-blue cursor-pointer transition-all" />
          </div>
          <div className="text-[11px] opacity-40 text-center md:text-right max-w-3xl leading-relaxed font-light">
            registered office: Randstad India Private Limited, CIN U74210TN1992PTC023097, Randstad House, Old No. 5 & 5A, New No. 9, Pycrofts Garden Road, Nungambakkam, Chennai, TN - 600 006
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center gap-5 mb-14">
           <span className="text-[11px] opacity-40 uppercase tracking-[0.2em] font-medium">RANDSTAD,</span>
           <svg width="36" height="24" viewBox="0 0 36 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M6 6C6 2.68629 8.68629 0 12 0H18V6H12C11.4477 6 11 6.44772 11 7V17C11 17.5523 11.4477 18 12 18H18V24H12C8.68629 24 6 21.3137 6 18V6Z" fill="#2175d9"/>
           </svg>
           <span className="text-[11px] opacity-40 uppercase tracking-[0.15em] font-light text-center md:text-left">HUMAN FORWARD and SHAPING THE WORLD OF WORK are registered trademarks of © Randstad N.V.2023</span>
        </div>

        <div className="bg-white/5 p-10 rounded-none mb-14 border border-white/5">
          <p className="text-[13px] font-light opacity-70 leading-[1.8] mb-6">
            <span className="font-bold opacity-100">Security Advice:</span> Randstad India does not charge any fee at any stage of its recruitment process from the candidate nor allows their employees to collect any fees from any candidates. <a href="#" className="underline hover:text-randstad-blue transition-colors">Click here to know more</a>
          </p>
          <p className="text-[13px] font-light opacity-70 leading-[1.8]">
            <span className="font-bold opacity-100">EEO Statement:</span> Randstad India is an Equal Employment Opportunity Employer. All qualified applicants receive consideration for employment without regard to race, color, religion, sex, sexual orientation, gender identity or expression, appearance, national origin, age, marital status, veteran status, or disability status, or any other characteristics. Our global mission is to become the world's most equitable and specialized talent company, and we actively embrace diversity and inclusion as the cornerstones of our success. To read more of Randstad India's work in the space of equity, diversity and inclusion please <a href="#" className="underline hover:text-randstad-blue transition-colors">click here</a>
          </p>
        </div>

        <div className="flex flex-wrap justify-center md:justify-start gap-x-10 gap-y-5 text-[12px] font-light opacity-50 uppercase tracking-[0.1em]">
          <a href="#" className="hover:opacity-100 hover:text-randstad-blue transition-all">terms & conditions</a>
          <a href="#" className="hover:opacity-100 hover:text-randstad-blue transition-all">cookies</a>
          <a href="#" className="hover:opacity-100 hover:text-randstad-blue transition-all">misconduct reporting procedure</a>
          <a href="#" className="hover:opacity-100 hover:text-randstad-blue transition-all">accessibility</a>
          <a href="#" className="hover:opacity-100 hover:text-randstad-blue transition-all">be aware</a>
          <a href="#" className="hover:opacity-100 hover:text-randstad-blue transition-all">sitemap</a>
          <a href="#" className="hover:opacity-100 hover:text-randstad-blue transition-all">privacy statement</a>
        </div>
      </div>
    </footer>
  );
};

export default function App() {
  return (
    <div className="min-h-screen bg-white selection:bg-randstad-blue selection:text-white">
      <Header />
      <Hero />
      <SolutionsGrid />
      
      <FeatureSection 
        title="talent acquisition"
        description="Solve your complex hiring challenges with talent acquisition solutions delivered by Randstad Sourceright. Do you need to find people with high-demand skills, staff up to support a new project, or get an outside perspective to transform recruitment? Our technology-driven, scalable models will help you attract, source, screen, hire and onboard the right people, while creating efficiencies and delivering an exceptional experience."
        image="https://picsum.photos/seed/talent-acq-tablet/1200/800"
        accordionItems={['recruitment process outsourcing (RPO)', 'managed services programs (MSP)', 'services procurement and SOW management']}
        graphicType="bar"
      />

      <FeatureSection 
        title="talent development"
        description="Elevate your employee experience with talent development solutions delivered by Randstad RiseSmart. Scalable, flexible and affordable talent development offerings help you unlock the potential of your people — and your organization."
        image="https://picsum.photos/seed/talent-dev-people/1200/800"
        accordionItems={['career coaching']}
        reverse={true}
        graphicType="bar"
      />

      <FeatureSection 
        title="talent transition"
        description="Manage layoffs seamlessly with Randstad RiseSmart's industry-leading outplacement and redeployment solutions. Help employees smoothly transition in their career journeys — and keep those who stay motivated."
        image="https://picsum.photos/seed/talent-trans-man/1200/800"
        accordionItems={['outplacement', 'redeployment', 'pre-change support']}
        graphicType="bar"
      />

      <FeatureSection 
        title="advisory"
        description="Find your competitive talent edge. Randstad advisory services provide you with an independent, outside-in review and analysis of your talent strategy to drive enterprise workforce agility."
        image="https://picsum.photos/seed/advisory-meeting/1200/800"
        accordionItems={['learn more about advisory']}
        reverse={true}
        graphicType="circle"
      />

      <IgniteSection />
      <PartnerSection />
      <InsightsSection />
      <AboutSection />
      <Footer />

      {/* Floating Feedback Button */}
      <div className="fixed right-0 top-1/2 -translate-y-1/2 z-50">
        <button className="bg-randstad-blue text-white py-5 px-2 rounded-l-md text-[11px] vertical-text tracking-[0.2em] uppercase font-bold shadow-2xl hover:bg-randstad-navy transition-colors duration-300">
          Feedback
        </button>
      </div>

      {/* Cookie Icon */}
      <div className="fixed bottom-8 left-8 z-50">
        <button className="bg-randstad-blue text-white p-4 rounded-full shadow-2xl hover:scale-110 hover:bg-randstad-navy transition-all duration-300 group">
          <Globe size={28} className="group-hover:rotate-12 transition-transform" />
        </button>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        .vertical-text {
          writing-mode: vertical-rl;
          transform: rotate(180deg);
        }
        @media (max-width: 768px) {
          .container-custom {
            padding-left: 1.5rem;
            padding-right: 1.5rem;
          }
        }
      `}} />
    </div>
  );
}
