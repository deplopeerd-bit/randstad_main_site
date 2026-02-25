import React from "react";
import { motion } from "motion/react";

import { 
  Heart, 
  User, 
  Linkedin, 
  Twitter, 
  Facebook, 
  Youtube, 
  Instagram, 
  ChevronDown, 
  Play
} from 'lucide-react';

const Navbar = () => {
  return (
    <header className="w-full bg-white border-b border-gray-100 sticky top-0 z-50">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
        {/* Top bar */}
        <div className="flex justify-end items-center py-2 text-[11px] font-medium text-randstad-navy/70 space-x-6">
          <a href="#" className="hover:text-randstad-blue transition-colors">contact us</a>
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-1 cursor-pointer hover:text-randstad-blue">
              <Heart size={14} />
              <span>0</span>
            </div>
            <div className="flex items-center space-x-1 cursor-pointer hover:text-randstad-blue">
              <User size={14} />
              <span>my randstad</span>
            </div>
          </div>
        </div>

        {/* Main Nav */}
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center space-x-12">
            <a href="/" className="flex items-center">
              <svg width="140" height="32" viewBox="0 0 140 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12.5 0C5.6 0 0 5.6 0 12.5C0 19.4 5.6 25 12.5 25C19.4 25 25 19.4 25 12.5C25 5.6 19.4 0 12.5 0ZM12.5 21.4C7.6 21.4 3.6 17.4 3.6 12.5C3.6 7.6 7.6 3.6 12.5 3.6C17.4 3.6 21.4 7.6 21.4 12.5C21.4 17.4 17.4 21.4 12.5 21.4Z" fill="#2175D9"/>
                <path d="M35 8H31V25H35V8Z" fill="#2175D9"/>
                <path d="M45 8H41V25H45V8Z" fill="#2175D9"/>
                <path d="M55 8H51V25H55V8Z" fill="#2175D9"/>
                <text x="30" y="22" font-family="Arial" font-size="20" font-weight="bold" fill="#2175D9">randstad</text>
              </svg>
            </a>
            <nav className="hidden lg:flex items-center space-x-8 text-[15px] font-medium">
              <a href="#" className="flex items-center space-x-1 hover:text-randstad-blue">
                <span>find a job</span>
                <ChevronDown size={14} />
              </a>
              <a href="#" className="flex items-center space-x-1 hover:text-randstad-blue">
                <span>for talent</span>
                <ChevronDown size={14} />
              </a>
              <a href="#" className="flex items-center space-x-1 hover:text-randstad-blue">
                <span>for employer</span>
                <ChevronDown size={14} />
              </a>
              <a href="#" className="flex items-center space-x-1 hover:text-randstad-blue">
                <span>resources</span>
                <ChevronDown size={14} />
              </a>
              <a href="#" className="flex items-center space-x-1 hover:text-randstad-blue">
                <span>about us</span>
                <ChevronDown size={14} />
              </a>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};

const Hero = () => {
  return (
    <section className="bg-randstad-teal w-full py-16 lg:py-24">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
        <div className="text-[12px] font-medium mb-8 flex items-center space-x-2 opacity-70">
          <span>home</span>
          <span>&gt;</span>
          <span>about us</span>
          <span>&gt;</span>
          <span className="font-bold">our sponsorships</span>
        </div>
        <div className="max-w-3xl">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-[48px] lg:text-[64px] leading-[1.1] font-light text-randstad-navy mb-8"
          >
            our sponsorships define who we are.
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-[18px] lg:text-[20px] leading-relaxed text-randstad-navy/80 mb-10"
          >
            We feel it's important to work alongside likeminded companies and lend our expertise to projects that are particularly close to our hearts. These purposeful associations help us achieve a shared vision.
          </motion.p>
          <motion.button 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="px-10 py-3 border border-randstad-navy text-randstad-navy text-[14px] font-medium hover:bg-randstad-navy hover:text-white transition-all duration-300"
          >
            contact us
          </motion.button>
        </div>
      </div>
    </section>
  );
};

const SponsorshipSection = ({ 
  title, 
  description, 
  image, 
  reverse = false, 
  bgColor = "bg-white",
  hasPlayButton = false,
  buttonText = "learn more" 
}: {
  title: string;
  description: string;
  image: string;
  reverse?: boolean;
  bgColor?: string;
  hasPlayButton?: boolean;
  buttonText?: string;
}) => {
  return (
    <section className={`${bgColor} w-full py-16 lg:py-24`}>
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
        <div className={`flex flex-col ${reverse ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-center gap-12 lg:gap-24`}>
          <div className="w-full lg:w-1/2 relative group">
            <img 
              src={image} 
              alt={title} 
              className="w-full h-auto rounded-lg shadow-sm"
              referrerPolicy="no-referrer"
            />
            {hasPlayButton && (
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center border-2 border-white cursor-pointer hover:scale-110 transition-transform duration-300">
                  <Play fill="white" color="white" size={32} className="ml-1" />
                </div>
              </div>
            )}
          </div>
          <div className="w-full lg:w-1/2">
            <h2 className="text-[36px] lg:text-[48px] leading-[1.2] font-light text-randstad-navy mb-6">
              {title}
            </h2>
            <p className="text-[16px] lg:text-[18px] leading-relaxed text-randstad-navy/80 mb-8">
              {description}
            </p>
            <button className="px-10 py-3 border border-randstad-blue text-randstad-blue text-[14px] font-medium hover:bg-randstad-blue hover:text-white transition-all duration-300">
              {buttonText}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  const footerLinks = [
    {
      title: "find a job",
      links: ["explore all jobs", "submit your cv", "join our team", "refer a friend"]
    },
    {
      title: "for talent",
      links: ["specialisms", "testimonials", "career advice", "beware of job scams"]
    },
    {
      title: "for employers",
      links: ["submit a vacancy", "request a callback", "our services", "specialisms", "case studies", "testimonials"]
    },
    {
      title: "resources",
      links: ["case studies", "press room", "blogs"]
    },
    {
      title: "workforce insights",
      links: ["talent insights reports", "employer brand research reports", "salary trends reports", "ed&i reports", "workmonitor reports", "startup hiring trends", "talent pulse surveys"]
    },
    {
      title: "jobs",
      links: ["engineering jobs", "cxo jobs", "manufacturing jobs", "supply chain & logistics jobs", "education jobs", "finance & accounting jobs", "healthcare jobs", "hr & admin support jobs", "ites/gcc jobs", "legal & compliance jobs", "sales & marketing jobs"]
    }
  ];

  return (
    <footer className="bg-randstad-navy text-white pt-20 pb-10">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 mb-20">
          {footerLinks.map((section, idx) => (
            <div key={idx}>
              <h4 className="text-[16px] font-bold mb-6">{section.title}</h4>
              <ul className="space-y-3">
                {section.links.map((link, lIdx) => (
                  <li key={lIdx}>
                    <a href="#" className="text-[13px] opacity-70 hover:opacity-100 transition-opacity">{link}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-white/10 pt-10 mb-10">
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-8">
            <div className="flex space-x-6">
              <a href="#" className="opacity-70 hover:opacity-100 transition-opacity"><Linkedin size={20} /></a>
              <a href="#" className="opacity-70 hover:opacity-100 transition-opacity"><Twitter size={20} /></a>
              <a href="#" className="opacity-70 hover:opacity-100 transition-opacity"><Facebook size={20} /></a>
              <a href="#" className="opacity-70 hover:opacity-100 transition-opacity"><Youtube size={20} /></a>
              <a href="#" className="opacity-70 hover:opacity-100 transition-opacity"><Instagram size={20} /></a>
            </div>
            <div className="text-[11px] opacity-50 max-w-2xl">
              registered office: Randstad India Private Limited, CIN U74210TN1992PTC023097,/Randstad House, Old No. 5 & 5A, New No. 9, Pycrofts Garden Road, Nungambakkam, Chennai, TN - 600 006
            </div>
          </div>
        </div>

        <div className="mb-10">
          <div className="flex items-center space-x-4 mb-6">
            <span className="text-[12px] font-bold">RANDSTAD,</span>
            <svg width="40" height="20" viewBox="0 0 40 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M10 0C4.5 0 0 4.5 0 10C0 15.5 4.5 20 10 20C15.5 20 20 15.5 20 10C20 4.5 15.5 0 10 0ZM10 17.1C6.1 17.1 2.9 13.9 2.9 10C2.9 6.1 6.1 2.9 10 2.9C13.9 2.9 17.1 6.1 17.1 10C17.1 13.9 13.9 17.1 10 17.1Z" fill="#2175D9"/>
            </svg>
            <span className="text-[10px] opacity-50 uppercase tracking-wider">HUMAN FORWARD and SHAPING THE WORLD OF WORK are registered trademarks of © Randstad N.V.2023</span>
          </div>

          <div className="space-y-4 text-[12px] opacity-70 leading-relaxed">
            <p>
              <span className="font-bold">Security Advice:</span> Randstad India does not charge any fee at any stage of its recruitment process from the candidate nor allows their employees to collect any fees from any candidates. <a href="#" className="underline">Click here to know more</a>
            </p>
            <p>
              <span className="font-bold">EEO Statement:</span> Randstad India is an Equal Employment Opportunity Employer. All qualified applicants receive consideration for employment without regard to race, color, religion, sex, sexual orientation, gender identity or expression, appearance, national origin, age, marital status, veteran status, or disability status, or any other characteristics. Our global mission is to become the world’s most equitable and specialized talent company, and we actively embrace diversity and inclusion as the cornerstones of our success. To read more of Randstad India’s work in the space of equity, diversity and inclusion please <a href="#" className="underline">click here</a>
            </p>
          </div>
        </div>

        <div className="flex flex-wrap gap-x-8 gap-y-4 text-[12px] opacity-70 border-t border-white/10 pt-8">
          <a href="#" className="hover:opacity-100">terms & conditions</a>
          <a href="#" className="hover:opacity-100">cookies</a>
          <a href="#" className="hover:opacity-100">misconduct reporting procedure</a>
          <a href="#" className="hover:opacity-100">accessibility</a>
          <a href="#" className="hover:opacity-100">be aware</a>
          <a href="#" className="hover:opacity-100">sitemap</a>
          <a href="#" className="hover:opacity-100">privacy statement</a>
        </div>
      </div>

      {/* Feedback tab */}
      <div className="fixed right-0 top-1/2 -translate-y-1/2 bg-randstad-blue text-white px-2 py-6 rounded-l-md cursor-pointer hover:pr-4 transition-all duration-300 z-40" style={{ writingMode: 'vertical-rl' }}>
        <span className="text-[12px] font-bold tracking-widest">Feedback</span>
      </div>
    </footer>
  );
};

export default function OurSponserShip() {
  return (
    <div className="min-h-screen flex flex-col">
      
      <main className="flex-grow">
        <Hero />
        
        <SponsorshipSection 
          title="hockey goes higher with Randstad India & the hockey foundation."
          description="We see the bigger picture and take our social responsibility seriously. Our business must always benefit the society and partnering with hockey goes higher is our way of developing the region of the Leh in the district of Ladakh."
          image="https://picsum.photos/seed/hockey/800/500"
          bgColor="bg-randstad-cream"
          hasPlayButton={true}
          buttonText="contact us"
        />

        <SponsorshipSection 
          title="clipper stad amsterdam."
          description="A tribute to the Dutch trading spirit and connection to the sea throughout the ages, clipper stad symbolises our aspirations and pride in our global operations."
          image="https://picsum.photos/seed/ship/800/500"
          reverse={true}
        />

        <SponsorshipSection 
          title="VSO."
          description="We have a desire to apply our knowledge and skills to help alleviate poverty in communities outside our regular remit, and partnering with VSO allows us to do so."
          image="https://picsum.photos/seed/vso/800/500"
          bgColor="bg-randstad-cream"
        />
      </main>
    
    </div>
  );
}
