import { motion } from "motion/react";

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { 
  Linkedin, 
  Twitter, 
  Facebook, 
  Youtube, 
  Instagram, 
  Heart, 
  User, 
  Search, 
  ArrowRight,
  ChevronDown
} from 'lucide-react';

// --- Components ---

const Header = () => (
  <header className="bg-white border-b border-gray-100 sticky top-0 z-50">
    <div className="container-custom py-4 flex items-center justify-between">
      <div className="flex items-center gap-12">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-randstad-blue rounded-full flex items-center justify-center">
             <div className="w-4 h-4 border-2 border-white rounded-full border-t-transparent -rotate-45"></div>
          </div>
          <span className="text-2xl font-bold text-randstad-blue tracking-tighter">randstad</span>
        </div>
        <nav className="hidden lg:flex items-center gap-8 text-[15px] font-medium">
          <a href="#" className="flex items-center gap-1 hover:text-randstad-blue">find a job <ChevronDown size={16} /></a>
          <a href="#" className="flex items-center gap-1 hover:text-randstad-blue">for talent <ChevronDown size={16} /></a>
          <a href="#" className="flex items-center gap-1 hover:text-randstad-blue">for employer <ChevronDown size={16} /></a>
          <a href="#" className="flex items-center gap-1 hover:text-randstad-blue">resources <ChevronDown size={16} /></a>
          <a href="#" className="flex items-center gap-1 hover:text-randstad-blue">about us <ChevronDown size={16} /></a>
        </nav>
      </div>
      <div className="flex items-center gap-6 text-[14px]">
        <a href="#" className="text-gray-500 hover:text-randstad-blue">contact us</a>
        <div className="flex items-center gap-4">
          <button className="flex items-center gap-1 hover:text-randstad-blue">
            <Heart size={20} className="text-gray-400" />
            <span className="font-semibold">0</span>
          </button>
          <button className="flex items-center gap-2 hover:text-randstad-blue">
            <User size={20} className="text-gray-400" />
            <span className="font-semibold">my randstad</span>
          </button>
        </div>
      </div>
    </div>
  </header>
);

const Hero = () => (
  <section className="bg-randstad-navy text-white py-20 overflow-hidden">
    <div className="container-custom relative">
      <div className="max-w-2xl">
        <nav className="flex items-center gap-2 text-xs mb-12 opacity-70">
          <a href="#">home</a> <span>&gt;</span>
          <a href="#">employers</a> <span>&gt;</span>
          <a href="#">our services</a> <span>&gt;</span>
          <span className="font-bold">hire-to-retire</span>
        </nav>
        <h1 className="text-5xl md:text-6xl font-bold leading-[1.1] mb-8 tracking-tight">
          complete hire-to-retire solutions for optimal workforce management.
        </h1>
        <p className="text-lg opacity-90 mb-10 leading-relaxed max-w-xl">
          Streamline your HR processes with our comprehensive Hire-to-Retire service. Benefit from enhanced efficiency, robust compliance and risk management, a consistent onboarding experience, and improved employee satisfaction and retention.
        </p>
        <button className="border border-white px-8 py-3 text-sm font-semibold hover:bg-white hover:text-randstad-navy transition-colors">
          request a callback
        </button>
      </div>
      
      {/* Abstract Graphic */}
      <div className="absolute right-[-10%] top-1/2 -translate-y-1/2 w-[600px] h-[600px] hidden lg:block">
        <div className="relative w-full h-full">
          <div className="absolute inset-0 border-[40px] border-randstad-blue/30 rounded-full"></div>
          <div className="absolute inset-[15%] border-[30px] border-randstad-blue/50 rounded-full"></div>
          <div className="absolute inset-[30%] border-[20px] border-white/20 rounded-full"></div>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-1/2 h-1/2 bg-randstad-blue rounded-full flex items-center justify-center">
               <div className="w-1/2 h-1/2 border-[15px] border-white rounded-full"></div>
            </div>
          </div>
          {/* Turbine blades effect */}
          {[0, 120, 240].map((deg) => (
            <div 
              key={deg}
              className="absolute top-1/2 left-1/2 w-[120%] h-12 bg-randstad-navy -translate-x-1/2 -translate-y-1/2"
              style={{ transform: `translate(-50%, -50%) rotate(${deg}deg)` }}
            ></div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

const TextSection = () => (
  <section className="py-24 bg-white">
    <div className="container-custom grid md:grid-cols-2 gap-12 items-start">
      <h2 className="text-4xl font-bold leading-tight tracking-tight">
        streamline your field force management with expert solutions.
      </h2>
      <p className="text-lg text-gray-700 leading-relaxed">
        Simplify managing your field force with our team of specialists. We provide tailored recruitment, training, deployment, and productivity management for your sales team, ensuring alignment with your business needs. This allows you to focus on developing strategies that drive your future growth.
      </p>
    </div>
  </section>
);

const SplitSection = () => (
  <section className="flex flex-col lg:flex-row min-h-[600px]">
    <div className="lg:w-1/2 relative h-[400px] lg:h-auto">
      <img 
        src="https://picsum.photos/seed/office1/1200/800" 
        alt="Office collaboration" 
        className="w-full h-full object-cover"
        referrerPolicy="no-referrer"
      />
      <div className="absolute inset-0 bg-black/10"></div>
      {/* Bar overlays */}
      <div className="absolute left-10 bottom-0 flex items-end gap-4 h-full pb-10">
        <div className="w-12 bg-randstad-blue/80 h-[30%] rounded-t-full"></div>
        <div className="w-12 bg-randstad-blue/60 h-[50%] rounded-t-full relative">
           <div className="absolute top-10 left-1/2 -translate-x-1/2 w-6 h-6 bg-white rounded-full"></div>
        </div>
        <div className="w-12 bg-randstad-blue/40 h-[70%] rounded-t-full"></div>
        <div className="w-12 bg-randstad-blue/20 h-[40%] rounded-t-full"></div>
      </div>
    </div>
    <div className="lg:w-1/2 bg-randstad-blue text-white p-12 lg:p-24 flex flex-col justify-center">
      <h2 className="text-6xl font-bold mb-8 tracking-tight">hire to retire.</h2>
      <p className="text-lg mb-10 max-w-md opacity-90 leading-relaxed">
        Optimize your HR processes with our Hire-to-Retire service, which enhances efficiency, ensures compliance and risk management, provides a consistent onboarding experience, and boosts employee satisfaction and retention.
      </p>
      <button className="border border-white self-start px-10 py-3 text-sm font-semibold hover:bg-white hover:text-randstad-blue transition-colors">
        talk to us
      </button>
    </div>
  </section>
);

const ContactBanner = () => (
  <section className="bg-randstad-navy text-white py-20">
    <div className="container-custom flex flex-col md:flex-row items-center justify-between gap-8">
      <h2 className="text-5xl font-bold max-w-2xl tracking-tight leading-tight">
        contact us to start a conversation about your talent needs.
      </h2>
      <button className="border border-white px-10 py-4 text-sm font-semibold hover:bg-white hover:text-randstad-navy transition-colors whitespace-nowrap">
        request a callback
      </button>
    </div>
  </section>
);

const TurnoverSection = () => {
  const cards = [
    {
      title: "what causes employee turnover and what to do about it.",
      image: "https://picsum.photos/seed/turnover1/600/800",
      overlay: "circles"
    },
    {
      title: "focusing on the high cost of employee turnover.",
      image: "https://picsum.photos/seed/turnover2/600/800",
      overlay: "dots"
    },
    {
      title: "what are the best workforce strategies for employee retention?",
      image: "https://picsum.photos/seed/turnover3/600/800",
      overlay: "lines"
    }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="container-custom">
        <h2 className="text-4xl font-bold mb-16 max-w-3xl tracking-tight leading-tight">
          understanding and managing employee turnover: strategies for retention and success.
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {cards.map((card, i) => (
            <div key={i} className="group relative aspect-[3/4] overflow-hidden rounded-lg cursor-pointer">
              <img 
                src={card.image} 
                alt={card.title} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-randstad-navy/90 via-transparent to-transparent"></div>
              
              {/* Graphic Overlays */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                {card.overlay === 'circles' && (
                  <div className="relative w-48 h-48">
                    <div className="absolute inset-0 border-4 border-randstad-blue rounded-full"></div>
                    <div className="absolute inset-4 border-4 border-randstad-blue/60 rounded-full"></div>
                    <div className="absolute inset-8 border-4 border-randstad-blue/30 rounded-full"></div>
                    <div className="absolute inset-[40%] bg-randstad-blue rounded-full"></div>
                  </div>
                )}
                {card.overlay === 'dots' && (
                  <div className="flex gap-4 items-center">
                    <div className="w-4 h-4 bg-randstad-blue rounded-full"></div>
                    <div className="w-12 h-12 bg-randstad-blue rounded-full"></div>
                    <div className="w-24 h-24 bg-randstad-blue rounded-full"></div>
                  </div>
                )}
                {card.overlay === 'lines' && (
                  <div className="flex gap-4 items-center">
                    <div className="w-12 h-12 bg-randstad-blue/40 rounded-full"></div>
                    <div className="w-12 h-12 bg-randstad-blue/70 rounded-full"></div>
                    <div className="w-12 h-12 bg-randstad-blue rounded-full"></div>
                  </div>
                )}
              </div>

              <div className="absolute bottom-0 left-0 p-8">
                <h3 className="text-white text-xl font-bold leading-snug">
                  {card.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const TestimonialsSection = () => (
  <section className="flex flex-col lg:flex-row min-h-[600px]">
    <div className="lg:w-1/2 bg-randstad-navy text-white p-12 lg:p-24 flex flex-col justify-center">
      <h2 className="text-6xl font-bold mb-8 tracking-tight leading-tight">client success stories & testimonials.</h2>
      <p className="text-lg mb-10 max-w-md opacity-90 leading-relaxed">
        Explore our client success stories and testimonials to see how we've helped businesses thrive. Discover real experiences and results from our satisfied clients, showcasing the impact of our services and the value we bring to every partnership.
      </p>
      <button className="border border-white self-start px-10 py-3 text-sm font-semibold hover:bg-white hover:text-randstad-navy transition-colors">
        read more
      </button>
    </div>
    <div className="lg:w-1/2 relative h-[400px] lg:h-auto">
      <img 
        src="https://picsum.photos/seed/office2/1200/800" 
        alt="Happy clients" 
        className="w-full h-full object-cover"
        referrerPolicy="no-referrer"
      />
      <div className="absolute inset-0 bg-black/10"></div>
      {/* Circle overlays */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="relative w-64 h-64">
          <div className="absolute top-0 left-0 w-24 h-24 bg-randstad-blue/80 rounded-full"></div>
          <div className="absolute bottom-10 right-10 w-32 h-32 bg-randstad-blue/60 rounded-full"></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-randstad-navy/90 rounded-full"></div>
        </div>
      </div>
    </div>
  </section>
);

const NewsletterSection = () => (
  <section className="py-24 bg-white">
    <div className="container-custom grid lg:grid-cols-2 gap-20 items-center">
      <div>
        <h2 className="text-5xl font-bold mb-8 tracking-tight leading-tight">
          workforce insights delivered to your inbox.
        </h2>
        <p className="text-lg text-gray-600 mb-10 leading-relaxed">
          Want to reduce your turnover rate, improve your company culture, or be inspired on improving employability for young people? Sign up to the monthly workforce insights newsletter and stay up to date with the latest recruitment and labor market news, tips, trends and reports for business leaders across the globe.
        </p>
        <button className="border border-randstad-blue text-randstad-blue px-10 py-3 text-sm font-semibold hover:bg-randstad-blue hover:text-white transition-colors">
          subscribe now
        </button>
      </div>
      <div className="relative flex justify-center">
        <div className="w-[400px] h-[300px] border-[12px] border-randstad-blue rounded-3xl relative">
          <div className="absolute -top-12 left-1/2 -translate-x-1/2 w-24 h-24 bg-white flex items-center justify-center">
            <div className="w-16 h-16 border-[8px] border-randstad-blue rounded-full relative">
               <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-0 h-0 border-l-[12px] border-l-randstad-blue border-y-[8px] border-y-transparent ml-1"></div>
            </div>
          </div>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-[80%] h-[60%] border-4 border-randstad-blue/30 rounded-xl relative overflow-hidden">
               <div className="absolute top-0 left-0 w-full h-full border-t-[100px] border-t-randstad-blue/10 border-x-[150px] border-x-transparent"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const DownloadBanner = () => (
  <section className="bg-randstad-blue text-white py-20">
    <div className="container-custom flex flex-col md:flex-row items-center justify-between gap-8">
      <h2 className="text-5xl font-bold max-w-2xl tracking-tight leading-tight">
        top 10 reasons for employee turnover and what to do about it download your copy now.
      </h2>
      <button className="border border-white px-10 py-4 text-sm font-semibold hover:bg-white hover:text-randstad-blue transition-colors whitespace-nowrap">
        download now
      </button>
    </div>
  </section>
);

const LocationSection = () => (
  <section className="py-24 bg-white overflow-hidden">
    <div className="container-custom grid lg:grid-cols-2 gap-20 items-center">
      <div>
        <h2 className="text-6xl font-bold mb-8 tracking-tight">find location.</h2>
        <p className="text-lg text-gray-600 mb-10">
          Drop in and say "hi" at one of our branch locations.
        </p>
        <div className="flex max-w-md">
          <input 
            type="text" 
            placeholder="postcode / city" 
            className="flex-1 border border-gray-300 px-6 py-4 text-lg focus:outline-none focus:border-randstad-blue"
          />
          <button className="bg-randstad-blue text-white px-6 py-4 hover:bg-randstad-navy transition-colors">
            <ArrowRight size={24} />
          </button>
        </div>
      </div>
      <div className="relative h-[400px]">
        <div className="absolute top-0 right-0 w-64 h-64 border-[12px] border-randstad-blue/20 rounded-full"></div>
        <div className="absolute top-10 right-20 w-48 h-48 border-[12px] border-randstad-blue/40 rounded-full flex items-center justify-center">
           <div className="w-12 h-12 bg-randstad-blue rounded-full"></div>
        </div>
        <div className="absolute bottom-0 right-40 w-56 h-56 border-[12px] border-randstad-blue rounded-full flex flex-col items-center pt-8">
           <div className="w-16 h-16 bg-randstad-blue rounded-full mb-2"></div>
           <div className="w-8 h-8 border-4 border-randstad-blue rounded-full"></div>
        </div>
      </div>
    </div>
  </section>
);

const Footer = () => (
  <footer className="bg-randstad-navy text-white pt-20 pb-10">
    <div className="container-custom">
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-12 mb-20">
        <div className="space-y-6">
          <h4 className="font-bold text-lg">find a job</h4>
          <ul className="space-y-3 text-sm opacity-70">
            <li><a href="#" className="hover:opacity-100">explore all jobs</a></li>
            <li><a href="#" className="hover:opacity-100">submit your cv</a></li>
            <li><a href="#" className="hover:opacity-100">join our team</a></li>
            <li><a href="#" className="hover:opacity-100">refer a friend</a></li>
          </ul>
          <h4 className="font-bold text-lg pt-6">for talents</h4>
          <ul className="space-y-3 text-sm opacity-70">
            <li><a href="#" className="hover:opacity-100">specialisms</a></li>
            <li><a href="#" className="hover:opacity-100">testimonials</a></li>
            <li><a href="#" className="hover:opacity-100">career advice</a></li>
            <li><a href="#" className="hover:opacity-100">beware of job scams</a></li>
          </ul>
        </div>
        
        <div className="space-y-6">
          <h4 className="font-bold text-lg">for employers</h4>
          <ul className="space-y-3 text-sm opacity-70">
            <li><a href="#" className="hover:opacity-100">submit a vacancy</a></li>
            <li><a href="#" className="hover:opacity-100">request a callback</a></li>
            <li><a href="#" className="hover:opacity-100">our services</a></li>
            <li><a href="#" className="hover:opacity-100">specialisms</a></li>
            <li><a href="#" className="hover:opacity-100">case studies</a></li>
            <li><a href="#" className="hover:opacity-100">testimonials</a></li>
          </ul>
          <h4 className="font-bold text-lg pt-6">resources</h4>
          <ul className="space-y-3 text-sm opacity-70">
            <li><a href="#" className="hover:opacity-100">case studies</a></li>
            <li><a href="#" className="hover:opacity-100">press room</a></li>
            <li><a href="#" className="hover:opacity-100">blogs</a></li>
          </ul>
        </div>

        <div className="space-y-6">
          <h4 className="font-bold text-lg">workforce insights</h4>
          <ul className="space-y-3 text-sm opacity-70">
            <li><a href="#" className="hover:opacity-100">talent insights reports</a></li>
            <li><a href="#" className="hover:opacity-100">employer brand research reports</a></li>
            <li><a href="#" className="hover:opacity-100">salary trends reports</a></li>
            <li><a href="#" className="hover:opacity-100">ed&i reports</a></li>
            <li><a href="#" className="hover:opacity-100">workmonitor reports</a></li>
            <li><a href="#" className="hover:opacity-100">startup hiring trends</a></li>
            <li><a href="#" className="hover:opacity-100">talent pulse surveys</a></li>
          </ul>
        </div>

        <div className="space-y-6">
          <h4 className="font-bold text-lg">jobs</h4>
          <ul className="space-y-3 text-sm opacity-70">
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
        <div className="flex flex-wrap items-center justify-between gap-8 mb-12">
          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-randstad-blue transition-colors"><Linkedin size={24} /></a>
            <a href="#" className="hover:text-randstad-blue transition-colors"><Twitter size={24} /></a>
            <a href="#" className="hover:text-randstad-blue transition-colors"><Facebook size={24} /></a>
            <a href="#" className="hover:text-randstad-blue transition-colors"><Youtube size={24} /></a>
            <a href="#" className="hover:text-randstad-blue transition-colors"><Instagram size={24} /></a>
          </div>
          <div className="text-[10px] opacity-50 max-w-2xl">
            registered office: Randstad India Private Limited, CIN U74210TN1992PTC023097,/Randstad House, Old No. 5 & 5A, New No. 9, Pycrofts Garden Road, Nungambakkam, Chennai, TN - 600 006
          </div>
        </div>

        <div className="flex items-center gap-4 mb-12">
          <span className="text-xl font-bold tracking-tighter">RANDSTAD,</span>
          <div className="w-10 h-10 bg-randstad-blue rounded-full flex items-center justify-center">
             <div className="w-5 h-5 border-2 border-white rounded-full border-t-transparent -rotate-45"></div>
          </div>
          <span className="text-xs font-medium opacity-70">HUMAN FORWARD and SHAPING THE WORLD OF WORK are registered trademarks of © Randstad N.V.2023</span>
        </div>

        <div className="space-y-6 text-xs opacity-70 leading-relaxed mb-12">
          <p>
            <span className="font-bold">Security Advice:</span> Randstad India does not charge any fee at any stage of its recruitment process from the candidate nor allows their employees to collect any fees from any candidates. <a href="#" className="underline">Click here to know more</a>
          </p>
          <p>
            <span className="font-bold">EEO Statement:</span> Randstad India is an Equal Employment Opportunity Employer. All qualified applicants receive consideration for employment without regard to race, color, religion, sex, sexual orientation, gender identity or expression, appearance, national origin, age, marital status, veteran status, or disability status, or any other characteristics. Our global mission is to become the world's most equitable and specialized talent company, and we actively embrace diversity and inclusion as the cornerstones of our success. To read more of Randstad India's work in the space of equity, diversity and inclusion please <a href="#" className="underline">click here</a>
          </p>
        </div>

        <div className="flex flex-wrap gap-x-8 gap-y-4 text-xs opacity-70">
          <a href="#" className="hover:underline">terms & conditions</a>
          <a href="#" className="hover:underline">cookies</a>
          <a href="#" className="hover:underline">misconduct reporting procedure</a>
          <a href="#" className="hover:underline">accessibility</a>
          <a href="#" className="hover:underline">be aware</a>
          <a href="#" className="hover:underline">sitemap</a>
          <a href="#" className="hover:underline">privacy statement</a>
        </div>
      </div>
    </div>
  </footer>
);

export default function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <Hero />
        <TextSection />
        <SplitSection />
        <ContactBanner />
        <TurnoverSection />
        <TestimonialsSection />
        <NewsletterSection />
        <DownloadBanner />
        <LocationSection />
      </main>
      <Footer />
      
      {/* Floating Feedback Button */}
      <div className="fixed right-0 top-1/2 -translate-y-1/2 z-40 hidden md:block">
        <div className="bg-randstad-blue text-white py-4 px-2 rounded-l-md cursor-pointer hover:bg-randstad-navy transition-colors [writing-mode:vertical-rl] text-xs font-bold tracking-widest">
          FEEDBACK
        </div>
      </div>

      {/* Cookie/Bot Icon */}
      <div className="fixed bottom-6 left-6 z-50">
        <div className="w-12 h-12 bg-randstad-blue rounded-full flex items-center justify-center text-white shadow-lg cursor-pointer hover:scale-110 transition-transform">
          <div className="w-6 h-6 border-4 border-white rounded-full border-t-transparent -rotate-45"></div>
        </div>
      </div>
    </div>
  );
}
