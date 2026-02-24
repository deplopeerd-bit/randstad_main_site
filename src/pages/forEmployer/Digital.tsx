import React from "react";
import { ChevronDown, Facebook, Heart, Instagram, Linkedin, Search, Twitter, User, Youtube } from "lucide-react";

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */


const Navbar = () => (
  <nav className="bg-white border-b border-gray-100 sticky top-0 z-50">
    <div className="container-custom">
      <div className="flex justify-end py-2 text-[11px] text-gray-500 space-x-4">
        <a href="#" className="hover:text-randstad-blue">contact us</a>
      </div>
      <div className="flex items-center justify-between py-4">
        <div className="flex items-center space-x-12">
          <div className="flex items-center">
             <svg width="140" height="32" viewBox="0 0 140 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12.5 6.5C12.5 9.81371 9.81371 12.5 6.5 12.5C3.18629 12.5 0.5 9.81371 0.5 6.5C0.5 3.18629 3.18629 0.5 6.5 0.5C9.81371 0.5 12.5 3.18629 12.5 6.5Z" fill="#2167D1"/>
                <path d="M25 6.5C25 9.81371 22.3137 12.5 19 12.5C15.6863 12.5 13 9.81371 13 6.5C13 3.18629 15.6863 0.5 19 0.5C22.3137 0.5 25 3.18629 25 6.5Z" fill="#2167D1"/>
                <path d="M12.5 19.5C12.5 22.8137 9.81371 25.5 6.5 25.5C3.18629 25.5 0.5 22.8137 0.5 19.5C0.5 16.1863 3.18629 13.5 6.5 13.5C9.81371 13.5 12.5 16.1863 12.5 19.5Z" fill="#2167D1"/>
                <text x="32" y="24" fontFamily="Inter" fontSize="22" fontWeight="700" fill="#2167D1">randstad</text>
             </svg>
          </div>
          <div className="hidden lg:flex items-center space-x-8 text-[15px] font-medium text-gray-700">
            <a href="#" className="flex items-center hover:text-randstad-blue">find a job <ChevronDown className="ml-1 w-4 h-4" /></a>
            <a href="#" className="flex items-center hover:text-randstad-blue">for talent <ChevronDown className="ml-1 w-4 h-4" /></a>
            <a href="#" className="flex items-center hover:text-randstad-blue">for employer <ChevronDown className="ml-1 w-4 h-4" /></a>
            <a href="#" className="flex items-center hover:text-randstad-blue">resources <ChevronDown className="ml-1 w-4 h-4" /></a>
            <a href="#" className="flex items-center hover:text-randstad-blue">about us <ChevronDown className="ml-1 w-4 h-4" /></a>
          </div>
        </div>
        <div className="flex items-center space-x-6 text-[15px] font-medium text-gray-700">
          <a href="#" className="flex items-center hover:text-randstad-blue"><Heart className="mr-2 w-5 h-5" /> 0</a>
          <a href="#" className="flex items-center hover:text-randstad-blue"><User className="mr-2 w-5 h-5" /> my randstad</a>
        </div>
      </div>
    </div>
  </nav>
);

const Hero = () => (
  <section className="bg-randstad-navy text-white overflow-hidden relative min-h-[600px] flex items-center">
    <div className="container-custom relative z-10 py-20">
      <div className="text-[13px] uppercase tracking-wider mb-8 opacity-80">
        home &gt; digital
      </div>
      <div className="max-w-2xl">
        <h1 className="text-[56px] leading-[1.1] font-bold mb-8">
          randstad technologies is becoming randstad digital.
        </h1>
        <p className="text-[20px] leading-relaxed mb-12 opacity-90">
          As your digital enablement partner, we apply our talent-first approach to accelerate your digital journey, helping you unleash your potential and unlock unseen opportunities.
        </p>
        <button className="border-2 border-white px-8 py-4 text-[16px] font-medium hover:bg-white hover:text-randstad-navy transition-colors">
          explore our solutions
        </button>
      </div>
    </div>
    {/* Abstract Background Shapes */}
    <div className="absolute right-0 top-0 h-full w-1/2 pointer-events-none">
        <div className="absolute top-[10%] right-[-10%] w-[600px] h-[150px] bg-gradient-to-r from-cyan-400 to-blue-600 rounded-full rotate-[-35deg] opacity-80"></div>
        <div className="absolute top-[35%] right-[-5%] w-[700px] h-[180px] bg-gradient-to-r from-blue-500 to-indigo-700 rounded-full rotate-[-35deg] opacity-90"></div>
        <div className="absolute top-[65%] right-[0%] w-[800px] h-[200px] bg-gradient-to-r from-blue-600 to-randstad-blue rounded-full rotate-[-35deg]"></div>
        <div className="absolute top-[25%] right-[15%] w-4 h-4 bg-white rounded-full border-2 border-white/50"></div>
    </div>
  </section>
);

const IntroSection = () => (
  <section className="bg-randstad-gray py-24">
    <div className="container-custom">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
        <h2 className="text-[36px] leading-[1.2] font-medium text-randstad-navy">
          dedicated to accelerating & enabling your digital ambition.
        </h2>
        <div>
          <p className="text-[18px] leading-relaxed text-gray-700 mb-10">
            We are your digital enablement partner to accelerate your transformation journey. Whether it is augmenting your existing team, leveraging our global digital talent centers for specialized skills, or delivering managed programs across focused industries, we're designed to enable your digital journey.
          </p>
          <button className="border-2 border-randstad-navy px-8 py-4 text-[16px] font-medium text-randstad-navy hover:bg-randstad-navy hover:text-white transition-colors">
            learn more
          </button>
        </div>
      </div>
    </div>
  </section>
);

const ApproachSection = () => (
  <section className="py-24 bg-white">
    <div className="container-custom">
      <h2 className="text-[42px] font-medium text-randstad-navy mb-8">
        a talent-first digital enablement approach.
      </h2>
      <p className="text-[18px] text-gray-700 max-w-4xl mb-16">
        At Randstad Digital, we believe that when you bring talent together, inject experience and follow a proven approach, amazing things can be achieved. You select the combination of models to accelerate your digital enablement.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {[
          { title: 'talent services', img: 'https://picsum.photos/seed/talent/800/1000' },
          { title: 'global talent centers', img: 'https://picsum.photos/seed/global/800/1000' },
          { title: 'managed solutions', img: 'https://picsum.photos/seed/managed/800/1000' }
        ].map((card, i) => (
          <div key={i} className="relative group overflow-hidden rounded-lg aspect-[3/4]">
            <img src={card.img} alt={card.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" referrerPolicy="no-referrer" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
            <div className="absolute bottom-8 left-8">
              <h3 className="text-[28px] font-medium text-white">{card.title}</h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const VisionSection = () => (
  <section className="bg-randstad-navy text-white py-32 relative overflow-hidden">
    <div className="container-custom relative z-10">
      <div className="max-w-2xl">
        <h2 className="text-[52px] font-medium leading-tight mb-8">
          accelerating your <span className="text-randstad-blue">digital vision.</span>
        </h2>
        <p className="text-[18px] opacity-90 mb-12">
          You have a clear vision; your challenge is how quickly you can operationalize your strategy to deliver digital advantage – this is where randstad digital can help.
        </p>
        <button className="border-2 border-white px-8 py-4 text-[16px] font-medium hover:bg-white hover:text-randstad-navy transition-colors">
          learn more
        </button>
      </div>
    </div>
  </section>
);

const ExpertiseSection = () => (
  <section className="py-24 bg-white">
    <div className="container-custom">
      <h2 className="text-[42px] font-medium text-randstad-navy mb-16">
        our areas of expertise.
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {[
          { title: 'customer experience', icon: '👤' },
          { title: 'data & analytics', icon: '🔍' },
          { title: 'digital & product engineering', icon: '🔳' },
          { title: 'cloud & infrastructure', icon: '☁️' }
        ].map((item, i) => (
          <div key={i} className="bg-randstad-navy p-12 rounded-lg flex flex-col items-start min-h-[400px] justify-between">
            <div className="text-6xl mb-8">
                {/* Placeholder for icons shown in screenshot */}
                {i === 0 && <div className="w-24 h-24 border-4 border-blue-400 rounded-full relative"><div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-white rounded-full"></div></div>}
                {i === 1 && <div className="w-24 h-24 border-4 border-blue-400 rounded-full flex items-center justify-center"><div className="w-4 h-4 bg-white rounded-full"></div></div>}
                {i === 2 && <div className="w-20 h-20 border-4 border-blue-400 flex items-center justify-center"><div className="w-10 h-10 bg-blue-600"></div></div>}
                {i === 3 && <div className="w-24 h-16 border-4 border-blue-400 rounded-full"></div>}
            </div>
            <h3 className="text-[24px] font-medium text-white leading-tight">{item.title}</h3>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const PartnerSection = () => (
  <section className="bg-randstad-blue text-white py-24">
    <div className="container-custom flex flex-col md:flex-row items-center justify-between">
      <h2 className="text-[52px] font-medium leading-tight max-w-xl mb-8 md:mb-0">
        ready to partner with randstad digital?
      </h2>
      <button className="border-2 border-white px-10 py-4 text-[18px] font-medium hover:bg-white hover:text-randstad-blue transition-colors">
        get in touch
      </button>
    </div>
  </section>
);

const Footer = () => (
  <footer className="bg-randstad-navy text-white pt-24 pb-12">
    <div className="container-custom">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-12 mb-20">
        <div>
          <h4 className="text-[18px] font-bold mb-6">find a job</h4>
          <ul className="space-y-4 text-[14px] opacity-70">
            <li><a href="#" className="hover:opacity-100">explore all jobs</a></li>
            <li><a href="#" className="hover:opacity-100">submit your cv</a></li>
            <li><a href="#" className="hover:opacity-100">join our team</a></li>
            <li><a href="#" className="hover:opacity-100">refer a friend</a></li>
          </ul>
          <h4 className="text-[18px] font-bold mt-12 mb-6">for talents</h4>
          <ul className="space-y-4 text-[14px] opacity-70">
            <li><a href="#" className="hover:opacity-100">specialisms</a></li>
            <li><a href="#" className="hover:opacity-100">testimonials</a></li>
            <li><a href="#" className="hover:opacity-100">career advice</a></li>
            <li><a href="#" className="hover:opacity-100">beware of job scams</a></li>
          </ul>
        </div>
        <div>
          <h4 className="text-[18px] font-bold mb-6">for employers</h4>
          <ul className="space-y-4 text-[14px] opacity-70">
            <li><a href="#" className="hover:opacity-100">submit a vacancy</a></li>
            <li><a href="#" className="hover:opacity-100">request a callback</a></li>
            <li><a href="#" className="hover:opacity-100">our services</a></li>
            <li><a href="#" className="hover:opacity-100">specialisms</a></li>
            <li><a href="#" className="hover:opacity-100">case studies</a></li>
            <li><a href="#" className="hover:opacity-100">testimonials</a></li>
          </ul>
          <h4 className="text-[18px] font-bold mt-12 mb-6">resources</h4>
          <ul className="space-y-4 text-[14px] opacity-70">
            <li><a href="#" className="hover:opacity-100">case studies</a></li>
            <li><a href="#" className="hover:opacity-100">press room</a></li>
            <li><a href="#" className="hover:opacity-100">blogs</a></li>
          </ul>
        </div>
        <div>
          <h4 className="text-[18px] font-bold mb-6">workforce insights</h4>
          <ul className="space-y-4 text-[14px] opacity-70">
            <li><a href="#" className="hover:opacity-100">talent insights reports</a></li>
            <li><a href="#" className="hover:opacity-100">employer brand research reports</a></li>
            <li><a href="#" className="hover:opacity-100">salary trends reports</a></li>
            <li><a href="#" className="hover:opacity-100">ed&i reports</a></li>
            <li><a href="#" className="hover:opacity-100">workmonitor reports</a></li>
            <li><a href="#" className="hover:opacity-100">startup hiring trends</a></li>
            <li><a href="#" className="hover:opacity-100">talent pulse surveys</a></li>
          </ul>
        </div>
        <div>
          <h4 className="text-[18px] font-bold mb-6">jobs</h4>
          <ul className="space-y-4 text-[14px] opacity-70">
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
          <div className="flex space-x-4">
            <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20"><Linkedin className="w-5 h-5" /></a>
            <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20"><Twitter className="w-5 h-5" /></a>
            <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20"><Facebook className="w-5 h-5" /></a>
            <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20"><Youtube className="w-5 h-5" /></a>
            <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20"><Instagram className="w-5 h-5" /></a>
          </div>
          <div className="text-[12px] opacity-60">
            registered office: Randstad India Private Limited, CIN U74210TN1992PTC023097,/Randstad House, Old No. 5 & 5A, New No. 9, Pycrofts Garden Road, Nungambakkam, Chennai, TN - 600 006
          </div>
        </div>

        <div className="flex items-center space-x-4 mb-12">
            <span className="text-[14px] font-bold">RANDSTAD,</span>
            <svg width="32" height="24" viewBox="0 0 32 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 4C12 6.20914 10.2091 8 8 8C5.79086 8 4 6.20914 4 4C4 1.79086 5.79086 0 8 0C10.2091 0 12 1.79086 12 4Z" fill="#2167D1"/>
                <path d="M28 4C28 6.20914 26.2091 8 24 8C21.7909 8 20 6.20914 20 4C20 1.79086 21.7909 0 24 0C26.2091 0 28 1.79086 28 4Z" fill="#2167D1"/>
                <path d="M12 20C12 22.2091 10.2091 24 8 24C5.79086 24 4 22.2091 4 20C4 17.7909 5.79086 16 8 16C10.2091 16 12 17.7909 12 20Z" fill="#2167D1"/>
            </svg>
            <span className="text-[11px] opacity-60 uppercase tracking-widest">human forward and shaping the world of work are registered trademarks of © Randstad N.V. 2023</span>
        </div>

        <div className="bg-white/5 p-8 rounded-lg mb-12 text-[13px] leading-relaxed opacity-80">
          <p className="mb-4">
            Security Advice: Randstad India does not charge any fee at any stage of its recruitment process from the candidate nor allows their employees to collect any fees from any candidates. <a href="#" className="underline hover:text-white">Click here to know more</a>
          </p>
          <p>
            EEO Statement: Randstad India is an Equal Employment Opportunity Employer. All qualified applicants receive consideration for employment without regard to race, color, religion, sex, sexual orientation, gender identity or expression, appearance, national origin, age, marital status, veteran status, or disability status, or any other characteristics. Our global mission is to become the world's most equitable and specialized talent company, and we actively embrace diversity and inclusion as the cornerstones of our success. To read more of Randstad India's work in the space of equity, diversity and inclusion please <a href="#" className="underline hover:text-white">click here</a>
          </p>
        </div>

        <div className="flex flex-wrap gap-x-8 gap-y-4 text-[13px] opacity-70">
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
    {/* Feedback button */}
    <div className="fixed right-0 top-1/2 -translate-y-1/2 bg-blue-500 text-white p-2 vertical-text rounded-l-md cursor-pointer z-50 text-[12px] font-bold">
        Feedback
    </div>
    {/* Cookie button */}
    <div className="fixed left-4 bottom-4 w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center text-white cursor-pointer z-50">
        🍪
    </div>
  </footer>
);

export default function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <IntroSection />
        <ApproachSection />
        <VisionSection />
        <ExpertiseSection />
        <PartnerSection />
      </main>
      <Footer />
    </div>
  );
}
