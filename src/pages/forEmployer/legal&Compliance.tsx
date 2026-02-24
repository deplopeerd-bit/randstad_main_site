import React from "react";
import { motion } from "motion/react";

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

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
  ArrowRight
} from 'lucide-react';

const Navbar = () => (
  <nav className="sticky top-0 z-50 bg-white border-b border-gray-100">
    <div className="bg-gray-50 border-b border-gray-100 py-1">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 flex justify-end">
        <a href="#" className="text-[12px] text-gray-600 hover:text-randstad-blue transition-colors">contact us</a>
      </div>
    </div>
    <div className="max-w-[1440px] mx-auto px-6 md:px-12 py-4 flex items-center justify-between">
      <div className="flex items-center gap-12">
        <div className="flex items-center gap-2">
          <svg width="140" height="32" viewBox="0 0 140 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M14.5 0C6.5 0 0 6.5 0 14.5C0 22.5 6.5 29 14.5 29H24V24H14.5C9.3 24 5 19.7 5 14.5C5 9.3 9.3 5 14.5 5H24V0H14.5Z" fill="#2175d9"/>
            <path d="M34 0V29H39V0H34Z" fill="#2175d9"/>
            <text x="45" y="22" fontFamily="Inter" fontWeight="700" fontSize="22" fill="#2175d9">randstad</text>
          </svg>
        </div>
        <div className="hidden lg:flex items-center gap-8 text-[15px] font-medium text-gray-700">
          <button className="flex items-center gap-1 hover:text-randstad-blue transition-colors">find a job <ChevronDown size={16} /></button>
          <button className="flex items-center gap-1 hover:text-randstad-blue transition-colors">for talent <ChevronDown size={16} /></button>
          <button className="flex items-center gap-1 hover:text-randstad-blue transition-colors">for employer <ChevronDown size={16} /></button>
          <button className="flex items-center gap-1 hover:text-randstad-blue transition-colors">resources <ChevronDown size={16} /></button>
          <button className="flex items-center gap-1 hover:text-randstad-blue transition-colors">about us <ChevronDown size={16} /></button>
        </div>
      </div>
      <div className="flex items-center gap-6 text-gray-700">
        <button className="hover:text-randstad-blue transition-colors flex items-center gap-1 text-[14px]">
          <Heart size={20} /> <span className="hidden sm:inline">0</span>
        </button>
        <button className="hover:text-randstad-blue transition-colors flex items-center gap-1 text-[14px]">
          <User size={20} /> <span className="hidden sm:inline">my randstad</span>
        </button>
      </div>
    </div>
  </nav>
);

const Hero = () => (
  <section className="bg-randstad-navy text-white overflow-hidden relative min-h-[600px] flex items-center">
    <div className="max-w-[1440px] mx-auto px-6 md:px-12 py-20 grid lg:grid-cols-2 gap-12 items-center relative z-10">
      <motion.div 
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="text-sm font-medium mb-8 flex gap-2 text-gray-400">
          <span>home</span> <span>›</span> <span>professional services</span> <span>›</span> <span className="text-white">legal & compliance</span>
        </div>
        <h1 className="text-5xl md:text-7xl font-light leading-[1.1] mb-8 max-w-xl">
          a partner for talent in legal & compliance roles.
        </h1>
        <p className="text-lg text-gray-300 mb-12 max-w-lg leading-relaxed">
          Find in-demand, professional talent — when you need it. By offering a comprehensive set of solutions, backed by our innovative technologies and global footprint, with deep insights into market dynamics, a vast pool of pre-screened candidates, and specialised recruiting and talent management processes, we'll help you fill crucial roles to bolster growth and agility.
        </p>
        <button className="px-8 py-4 border border-white rounded-md text-lg font-medium hover:bg-white hover:text-randstad-navy transition-all duration-300">
          get in touch
        </button>
      </motion.div>
      <div className="relative hidden lg:block">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px]">
          <div className="absolute inset-0 border-[40px] border-randstad-purple/20 rounded-full transform rotate-45 scale-110"></div>
          <div className="absolute inset-0 border-[40px] border-randstad-magenta/30 rounded-full transform -rotate-12 scale-90"></div>
          <div className="absolute inset-0 bg-gradient-to-br from-randstad-purple to-randstad-magenta opacity-40 blur-3xl rounded-full"></div>
          <div className="absolute top-10 right-0 w-64 h-24 bg-randstad-magenta rounded-full transform rotate-45 opacity-60"></div>
        </div>
      </div>
    </div>
  </section>
);

const FeatureSection = ({ title, description, image, imageRight = true, list = [] }: { title: string, description?: string, image: string, imageRight?: boolean, list?: string[] }) => (
  <section className="bg-white text-randstad-navy overflow-hidden">
    <div className="max-w-[1440px] mx-auto flex flex-col lg:flex-row">
      <div className={`lg:w-1/2 p-12 md:p-24 flex flex-col justify-center ${imageRight ? 'order-1' : 'order-2 bg-[#f5f2ed]'}`}>
        <h2 className="text-5xl font-light mb-8 leading-tight">{title}</h2>
        {description && <p className="text-lg text-gray-600 leading-relaxed mb-8">{description}</p>}
        {list.length > 0 && (
          <ul className="space-y-4">
            {list.map((item, i) => (
              <li key={i} className="flex items-center gap-3 text-lg">
                <div className="w-2 h-2 rounded-full bg-randstad-blue"></div>
                {item}
              </li>
            ))}
          </ul>
        )}
      </div>
      <div className={`lg:w-1/2 h-[400px] lg:h-auto overflow-hidden ${imageRight ? 'order-2' : 'order-1'}`}>
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
      </div>
    </div>
  </section>
);

const Banner = ({ text, buttonText, bgColor = 'bg-randstad-blue', textColor = 'text-white' }: { text: string, buttonText: string, bgColor?: string, textColor?: string }) => (
  <section className={`${bgColor} ${textColor} py-20`}>
    <div className="max-w-[1440px] mx-auto px-6 md:px-12 flex flex-col md:row items-center justify-between gap-8">
      <h2 className="text-4xl md:text-5xl font-light text-center md:text-left max-w-3xl leading-tight">
        {text}
      </h2>
      <button className={`px-8 py-4 border ${textColor === 'text-white' ? 'border-white' : 'border-randstad-blue'} rounded-md text-lg font-medium hover:bg-white hover:text-randstad-blue transition-all duration-300 whitespace-nowrap`}>
        {buttonText}
      </button>
    </div>
  </section>
);

const InsightsGrid = () => (
  <section className="bg-white py-24">
    <div className="max-w-[1440px] mx-auto px-6 md:px-12">
      <h2 className="text-4xl font-light mb-16 text-center md:text-left">unlock key insights on employee well-being.</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {[
          {
            title: "the state of workplace well-being across the globe.",
            image: "https://picsum.photos/seed/wellbeing1/600/800"
          },
          {
            title: "creating an employee well-being program: best practices.",
            image: "https://picsum.photos/seed/wellbeing2/600/800"
          },
          {
            title: "strategies for building an effective employee wellness program.",
            image: "https://picsum.photos/seed/wellbeing3/600/800"
          },
          {
            title: "how to create an employee wellness program that adds value to your company.",
            image: "https://picsum.photos/seed/wellbeing4/600/800"
          }
        ].map((card, i) => (
          <div key={i} className="relative group cursor-pointer overflow-hidden rounded-xl h-[500px]">
            <img 
              src={card.image} 
              alt={card.title} 
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-randstad-navy/90 via-randstad-navy/20 to-transparent flex flex-col justify-end p-8">
              <h3 className="text-xl font-medium text-white leading-snug">{card.title}</h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const Newsletter = () => (
  <section className="bg-randstad-navy text-white overflow-hidden">
    <div className="max-w-[1440px] mx-auto flex flex-col lg:flex-row">
      <div className="lg:w-1/2 h-[400px] lg:h-auto relative overflow-hidden">
        <img 
          src="https://picsum.photos/seed/newsletter/800/600" 
          alt="Workforce insights" 
          className="w-full h-full object-cover opacity-60"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-64 h-64 border-[30px] border-randstad-purple rounded-full opacity-80"></div>
          <div className="absolute w-48 h-48 border-[20px] border-randstad-magenta rounded-full opacity-60 transform translate-x-12 translate-y-12"></div>
        </div>
      </div>
      <div className="lg:w-1/2 p-12 md:p-24 flex flex-col justify-center">
        <h2 className="text-5xl font-light mb-8 leading-tight">workforce insights delivered to your inbox.</h2>
        <p className="text-lg text-gray-300 leading-relaxed mb-12">
          Want to reduce your turnover rate, improve your company culture, or be inspired on improving employability for young people? Sign up to the monthly workforce insights newsletter and stay up to date with the latest recruitment and labor market news, tips, trends and reports for business leaders across the globe.
        </p>
        <button className="w-fit px-12 py-4 border border-white rounded-md text-lg font-medium hover:bg-white hover:text-randstad-navy transition-all duration-300">
          subscribe
        </button>
      </div>
    </div>
  </section>
);

const Footer = () => (
  <footer className="bg-randstad-navy text-white pt-24 pb-12">
    <div className="max-w-[1440px] mx-auto px-6 md:px-12">
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-12 mb-24">
        <div>
          <h4 className="text-xl font-medium mb-8">find a job</h4>
          <ul className="space-y-4 text-gray-400">
            <li><a href="#" className="hover:text-white transition-colors">explore all jobs</a></li>
            <li><a href="#" className="hover:text-white transition-colors">submit your cv</a></li>
            <li><a href="#" className="hover:text-white transition-colors">join our team</a></li>
            <li><a href="#" className="hover:text-white transition-colors">refer a friend</a></li>
          </ul>
        </div>
        <div>
          <h4 className="text-xl font-medium mb-8">for employers</h4>
          <ul className="space-y-4 text-gray-400">
            <li><a href="#" className="hover:text-white transition-colors">submit a vacancy</a></li>
            <li><a href="#" className="hover:text-white transition-colors">request a callback</a></li>
            <li><a href="#" className="hover:text-white transition-colors">our services</a></li>
            <li><a href="#" className="hover:text-white transition-colors">specialisms</a></li>
            <li><a href="#" className="hover:text-white transition-colors">case studies</a></li>
            <li><a href="#" className="hover:text-white transition-colors">testimonials</a></li>
          </ul>
        </div>
        <div>
          <h4 className="text-xl font-medium mb-8">workforce insights</h4>
          <ul className="space-y-4 text-gray-400">
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
          <h4 className="text-xl font-medium mb-8">jobs</h4>
          <ul className="space-y-4 text-gray-400">
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
        <div>
          <h4 className="text-xl font-medium mb-8">resources</h4>
          <ul className="space-y-4 text-gray-400">
            <li><a href="#" className="hover:text-white transition-colors">case studies</a></li>
            <li><a href="#" className="hover:text-white transition-colors">press room</a></li>
            <li><a href="#" className="hover:text-white transition-colors">blogs</a></li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10 pt-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 mb-12">
          <div className="flex items-center gap-6">
            <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"><Linkedin size={20} /></a>
            <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"><Twitter size={20} /></a>
            <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"><Facebook size={20} /></a>
            <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"><Youtube size={20} /></a>
            <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"><Instagram size={20} /></a>
          </div>
          <div className="text-gray-400 text-sm text-center md:text-right">
            registered office: Randstad India Private Limited, CIN U74210TN1992PTC023097,/Randstad House, Old No. 5 & 5A, New No. 9, Pycrofts Garden Road, Nungambakkam, Chennai, TN - 600 006
          </div>
        </div>

        <div className="space-y-6 text-gray-400 text-sm mb-12">
          <p>RANDSTAD, human forward and SHAPING THE WORLD OF WORK are registered trademarks of © Randstad N.V.2023</p>
          <p>
            Security Advice: Randstad India does not charge any fee at any stage of its recruitment process from the candidate nor allows their employees to collect any fees from any candidates. <a href="#" className="text-white hover:underline">Click here to know more</a>
          </p>
          <p>
            EEO Statement: Randstad India is an Equal Employment Opportunity Employer. All qualified applicants receive consideration for employment without regard to race, color, religion, sex, sexual orientation, gender identity or expression, appearance, national origin, age, marital status, veteran status, or disability status, or any other characteristics. Our global mission is to become the world’s most equitable and specialized talent company, and we actively embrace diversity and inclusion as the cornerstones of our success. To read more of Randstad India’s work in the space of equity, diversity and inclusion please <a href="#" className="text-white hover:underline">click here</a>
          </p>
        </div>

        <div className="flex flex-wrap items-center justify-center md:justify-start gap-x-8 gap-y-4 text-sm font-medium">
          <a href="#" className="hover:text-randstad-blue transition-colors">terms & conditions</a>
          <a href="#" className="hover:text-randstad-blue transition-colors">cookies</a>
          <a href="#" className="hover:text-randstad-blue transition-colors">misconduct reporting procedure</a>
          <a href="#" className="hover:text-randstad-blue transition-colors">accessibility</a>
          <a href="#" className="hover:text-randstad-blue transition-colors">be aware</a>
          <a href="#" className="hover:text-randstad-blue transition-colors">sitemap</a>
          <a href="#" className="hover:text-randstad-blue transition-colors">privacy statement</a>
        </div>
      </div>
    </div>
  </footer>
);

const CookieIcon = () => (
  <div className="fixed bottom-6 left-6 z-50">
    <button className="w-12 h-12 bg-randstad-blue rounded-full flex items-center justify-center text-white shadow-lg hover:scale-110 transition-transform">
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2a10 10 0 1 0 10 10 4 4 0 0 1-5-5 4 4 0 0 1-5-5" />
        <path d="M8.5 8.5v.01" />
        <path d="M16 15.5v.01" />
        <path d="M12 12v.01" />
        <path d="M11 17v.01" />
        <path d="M7 14v.01" />
      </svg>
    </button>
  </div>
);

const FeedbackButton = () => (
  <div className="fixed right-0 top-1/2 -translate-y-1/2 z-50 hidden md:block">
    <button className="bg-randstad-blue text-white py-3 px-1 rounded-l-md flex items-center justify-center [writing-mode:vertical-lr] rotate-180 text-sm font-medium tracking-wider">
      Feedback
    </button>
  </div>
);

export default function App() {
  return (
    <div className="min-h-screen bg-white relative">
      <Navbar />
      <FeedbackButton />
      <CookieIcon />
      <Hero />
      
      <FeatureSection 
        title="discover exceptional legal talent."
        description="With our diverse pool of legal & compliance recruitment professionals, we're able to find the ideal match for your company's unique needs. Through a diverse range of HR, recruitment and consulting services, we are a true partner legal talent for your business, regardless of your industry, size, or objectives."
        image="https://picsum.photos/seed/legal1/1200/800"
        imageRight={true}
      />

      <FeatureSection 
        title="our expertise."
        description="We understand the importance of having a dedicated specialised consultant who truly understands your needs. That's why we partner you with experienced individuals who get to know your business and can tailor services just for you."
        image="https://picsum.photos/seed/legal2/1200/800"
        imageRight={false}
      />

      <FeatureSection 
        title="identifying top talent."
        description="Building a proficient legal & compliance team can significantly impact your company's operational success. Qualification and background are crucial, which is why recruiters work to fully understand candidates' career stories and place them in the roles where they are best suited."
        image="https://picsum.photos/seed/legal3/1200/800"
        imageRight={true}
      />

      <Banner 
        text="contact us to start a conversation about your talent needs."
        buttonText="let's meet"
      />

      <InsightsGrid />

      <Newsletter />

      <Banner 
        text="looking for the right candidate?"
        buttonText="submit a vacancy"
        bgColor="bg-white"
        textColor="text-randstad-navy"
      />

      <FeatureSection 
        title="why partner with us?"
        list={[
          "targeted search",
          "fast onboarding",
          "focus on diversity"
        ]}
        image="https://picsum.photos/seed/legal4/1200/800"
        imageRight={true}
      />

      <Footer />
    </div>
  );
}
