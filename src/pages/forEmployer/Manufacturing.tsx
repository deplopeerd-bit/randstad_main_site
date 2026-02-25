import React from "react";
import { motion } from "motion/react";

import { 
  Search, 
  Heart, 
  User, 
  Linkedin, 
  Twitter, 
  Facebook, 
  Youtube, 
  Instagram, 
  ChevronDown,
  MessageSquare,
  Phone
} from 'lucide-react';

const ForTalentManufacturingPage: React.FC = () => {
  return (
    <div className="font-sans text-[#141414] bg-white selection:bg-blue-100">
      {/* Top Navigation Bar */}
      

      {/* Hero Section */}
      <section className="bg-[#001c46] text-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32 flex flex-col lg:flex-row items-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:w-1/2 z-10"
          >
            <div className="text-sm uppercase tracking-widest text-blue-400 mb-6 font-semibold">
              home &gt; employers &gt; industries &gt; manufacturing
            </div>
            <h1 className="text-5xl lg:text-7xl font-light leading-tight mb-8">
              a partner for talent in <br />
              <span className="font-medium">manufacturing.</span>
            </h1>
            <p className="text-lg text-gray-300 mb-10 max-w-lg leading-relaxed">
              Build your team with top operational talent. With the largest pool of pre-qualified candidates, industry expertise, deep insights into operational workforce dynamics, and proven talent validation processes in our specialised talent centres, we'll help you simplify your recruiting and scale your workforce on demand — quickly and cost-effectively.
            </p>
            <button className="px-8 py-4 border border-white rounded-sm hover:bg-white hover:text-[#001c46] transition-all duration-300 font-medium">
              get in touch
            </button>
          </motion.div>
          
          <div className="lg:w-1/2 mt-12 lg:mt-0 relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative z-0"
            >
              {/* Abstract Graphic Placeholder */}
              <div className="w-full aspect-square flex items-center justify-center">
                <div className="relative w-80 h-80">
                   <div className="absolute top-0 left-0 w-full h-full border-4 border-blue-500 rounded-full opacity-20 animate-pulse"></div>
                   <div className="absolute top-10 left-10 w-60 h-60 bg-blue-600 rounded-full opacity-40 blur-3xl"></div>
                   <div className="absolute top-20 left-20 w-40 h-40 bg-emerald-500 rounded-full opacity-30 blur-2xl"></div>
                   <svg viewBox="0 0 200 200" className="w-full h-full text-blue-400">
                      <path fill="currentColor" d="M40,100 Q40,40 100,40 T160,100 T100,160 T40,100" className="opacity-50" />
                      <circle cx="100" cy="100" r="10" fill="white" />
                   </svg>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Overcoming the Competition */}
      <SplitSection 
        title="overcoming the competition."
        description="In today's competitive landscape, attracting and retaining top manufacturing talent is essential for operational efficiency, product quality, and innovation. Randstad leverages our extensive network and deep understanding of the manufacturing landscape to source the professionals who will drive your production goals and enhance your competitive advantage."
        image="https://picsum.photos/seed/manuf1/800/600"
        bgColor="bg-[#f5f2ed]"
        reverse={false}
      />

      {/* Understanding your needs */}
      <SplitSection 
        title="understanding your needs."
        description="Every manufacturing operation is unique, with its own set of challenges and opportunities. We take a personalised approach to understand your specific needs, whether it's short-term staffing for a peak production period or a long-term talent strategy to support your growth. Our specialised recruiters are well-versed in manufacturing processes and will identify the individuals who perfectly align with your company's culture and operational requirements."
        image="https://picsum.photos/seed/manuf2/800/600"
        bgColor="bg-[#001c46]"
        textColor="text-white"
        reverse={true}
      />

      {/* More than just recruitment */}
      <SplitSection 
        title="more than just recruitment."
        description="We offer comprehensive workforce solutions tailored to the manufacturing sector. We understand the importance of lean manufacturing principles, quality control, and supply chain optimisation. Our services extend beyond simple placement, encompassing workforce management, on-site support, and consulting to optimise your operations and ensure your manufacturing facility is staffed with the skilled professionals you need."
        image="https://picsum.photos/seed/manuf3/800/600"
        bgColor="bg-white"
        reverse={false}
      />

      {/* Driving performance */}
      <SplitSection 
        title="driving performance."
        description="We make it our business to improve your business. Whatever your needs, we can deliver the people resources to drive your business performance."
        image="https://picsum.photos/seed/manuf4/800/600"
        bgColor="bg-white"
        reverse={true}
        buttonLabel="submit a vacancy"
      />

      {/* Read our case study */}
      <SplitSection 
        title="read our case study."
        description="a leading global manufacturer of information products achieves high efficiency of volume hiring and onboarding of skilled manpower with Randstad's expert partnership."
        image="https://picsum.photos/seed/manuf5/800/600"
        bgColor="bg-white"
        reverse={false}
        buttonLabel="read more"
      />

      {/* Want to know more? */}
      <section className="bg-[#001c46] text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center">
          <div className="lg:w-1/2 mb-12 lg:mb-0">
            <h2 className="text-5xl font-light mb-8">want to know <br /><span className="font-medium">more?</span></h2>
            <button className="px-8 py-4 border border-white rounded-sm hover:bg-white hover:text-[#001c46] transition-all duration-300 font-medium">
              request a callback
            </button>
          </div>
          <div className="lg:w-1/2 flex justify-center">
            <div className="relative w-64 h-96 bg-blue-600 rounded-3xl border-4 border-blue-400 flex flex-col items-center justify-center overflow-hidden">
               <Phone className="w-20 h-20 text-white mb-4" />
               <div className="absolute top-4 w-16 h-1 bg-blue-400 rounded-full"></div>
               <div className="absolute bottom-4 w-10 h-10 border-2 border-blue-400 rounded-full"></div>
               <div className="w-full h-1/2 bg-blue-500 absolute bottom-0 opacity-20"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Looking for the right candidate? */}
      <section className="bg-white py-24 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row justify-between items-center">
          <h2 className="text-5xl font-light text-[#001c46] mb-8 lg:mb-0">looking for the right <span className="font-medium">candidate?</span></h2>
          <button className="px-10 py-4 border border-blue-600 text-blue-600 rounded-sm hover:bg-blue-600 hover:text-white transition-all duration-300 font-medium">
            submit a vacancy
          </button>
        </div>
      </section>

      {/* Workforce insights */}
      <SplitSection 
        title="workforce insights delivered to your inbox."
        description="Want to reduce your turnover rate, improve your company culture, or be inspired on improving employability for young people? Sign up to the monthly workforce insights newsletter and stay up to date with the latest recruitment and labor market news, tips, trends and reports for business leaders across the globe."
        image="https://picsum.photos/seed/manuf6/800/600"
        bgColor="bg-[#001c46]"
        textColor="text-white"
        reverse={true}
        buttonLabel="subscribe"
      />

      {/* Unlock more insights */}
      <section className="bg-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-light text-[#001c46] mb-12">unlock more <span className="font-medium">insights.</span></h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <InsightCard 
              image="https://picsum.photos/seed/ins1/400/500"
              title="how to minimise productivity loss in manufacturing with Gen Z."
            />
            <InsightCard 
              image="https://picsum.photos/seed/ins2/400/500"
              title="get the checklist for recruiting Gen Z into manufacturing."
            />
            <InsightCard 
              image="https://picsum.photos/seed/ins3/400/500"
              title="gen z job hopping: what's the impact in manufacturing?"
            />
            <InsightCard 
              image="https://picsum.photos/seed/ins4/400/500"
              title="hiring gen z: how to attract young talent to your manufacturing company."
            />
          </div>
        </div>
      </section>

      {/* Contact Banner */}
      <section className="bg-blue-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row justify-between items-center">
          <h2 className="text-4xl font-light mb-8 lg:mb-0 max-w-2xl">
            contact us to start a conversation about your <span className="font-medium">talent needs.</span>
          </h2>
          <button className="px-10 py-4 border border-white rounded-sm hover:bg-white hover:text-blue-600 transition-all duration-300 font-medium">
            let's meet
          </button>
        </div>
      </section>

      {/* Footer */}
      

      {/* Floating Action Buttons */}
      <div className="fixed bottom-8 right-8 flex flex-col space-y-4 z-50">
        <button className="w-14 h-14 bg-blue-600 text-white rounded-full shadow-2xl flex items-center justify-center hover:scale-110 transition-transform">
          <MessageSquare className="w-6 h-6" />
        </button>
      </div>
      
      {/* Feedback Tab */}
      <div className="fixed right-0 top-1/2 -translate-y-1/2 z-40">
        <button className="bg-blue-600 text-white px-3 py-6 rounded-l-md text-xs font-bold uppercase tracking-widest [writing-mode:vertical-rl] rotate-180">
          feedback
        </button>
      </div>

      {/* Cookie Consent Icon */}
      <div className="fixed left-8 bottom-8 z-50">
        <button className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center text-white shadow-lg">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-6 h-6">
            <path d="M12 2a10 10 0 1 0 10 10 4 4 0 0 1-4-4 4 4 0 0 1-4-4z" />
            <circle cx="12" cy="12" r="1" fill="currentColor" />
            <circle cx="15" cy="15" r="1" fill="currentColor" />
            <circle cx="9" cy="15" r="1" fill="currentColor" />
            <circle cx="9" cy="9" r="1" fill="currentColor" />
          </svg>
        </button>
      </div>
    </div>
  );
};

const NavLink: React.FC<{ label: string; hasChevron?: boolean }> = ({ label, hasChevron }) => (
  <div className="flex items-center space-x-1 cursor-pointer group">
    <span className="text-sm font-medium text-gray-700 group-hover:text-blue-600 transition-colors uppercase tracking-wide">{label}</span>
    {hasChevron && <ChevronDown className="w-4 h-4 text-gray-400 group-hover:text-blue-600 transition-colors" />}
  </div>
);

const SplitSection: React.FC<{
  title: string;
  description: string;
  image: string;
  bgColor: string;
  textColor?: string;
  reverse?: boolean;
  buttonLabel?: string;
}> = ({ title, description, image, bgColor, textColor = "text-[#141414]", reverse, buttonLabel }) => (
  <section className={`${bgColor} ${textColor} overflow-hidden`}>
    <div className={`flex flex-col ${reverse ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-stretch`}>
      <div className="lg:w-1/2 p-12 lg:p-24 flex flex-col justify-center">
        <motion.div
          initial={{ opacity: 0, x: reverse ? 20 : -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-5xl font-light mb-8 leading-tight">{title}</h2>
          <p className="text-lg opacity-80 leading-relaxed mb-10">{description}</p>
          {buttonLabel && (
            <button className={`px-8 py-4 border ${textColor === 'text-white' ? 'border-white hover:bg-white hover:text-[#001c46]' : 'border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white'} rounded-sm transition-all duration-300 font-medium`}>
              {buttonLabel}
            </button>
          )}
        </motion.div>
      </div>
      <div className="lg:w-1/2 relative min-h-[400px]">
        <img 
          src={image} 
          alt={title} 
          className="absolute inset-0 w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
        {/* Decorative overlay elements */}
        <div className="absolute inset-0 bg-blue-900/10"></div>
        <div className="absolute top-10 left-10 w-20 h-20 border-t-2 border-l-2 border-blue-400/30"></div>
        <div className="absolute bottom-10 right-10 w-20 h-20 border-b-2 border-r-2 border-blue-400/30"></div>
      </div>
    </div>
  </section>
);

const InsightCard: React.FC<{ image: string; title: string }> = ({ image, title }) => (
  <motion.div 
    whileHover={{ y: -10 }}
    className="group cursor-pointer"
  >
    <div className="relative aspect-[3/4] rounded-lg overflow-hidden mb-4">
      <img 
        src={image} 
        alt={title} 
        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        referrerPolicy="no-referrer"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-[#001c46]/90 via-transparent to-transparent opacity-60"></div>
      <div className="absolute bottom-6 left-6 right-6">
        <h3 className="text-white text-lg font-medium leading-snug">{title}</h3>
      </div>
    </div>
  </motion.div>
);

const FooterLink: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <a href="#" className="hover:text-white transition-colors cursor-pointer">{children}</a>
);

const SocialIcon: React.FC<{ icon: React.ReactNode }> = ({ icon }) => (
  <a href="#" className="w-10 h-10 rounded-full border border-gray-700 flex items-center justify-center text-gray-400 hover:text-white hover:border-white transition-all">
    {icon}
  </a>
);

export default ForTalentManufacturingPage;
