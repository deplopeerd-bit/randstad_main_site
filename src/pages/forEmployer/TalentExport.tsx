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
  ChevronDown,
  ArrowRight,
  Mail,
  Download
} from "lucide-react";

const NavItem = ({ label, hasDropdown = true }: { label: string; hasDropdown?: boolean }) => (
  <div className="flex items-center gap-1 cursor-pointer group">
    <span className="text-[15px] font-normal text-randstad-navy hover:text-randstad-blue transition-colors">
      {label}
    </span>
    {hasDropdown && <ChevronDown size={14} className="text-randstad-blue group-hover:rotate-180 transition-transform" />}
  </div>
);

const FooterLink = ({ label }: { label: string }) => (
  <li className="mb-2">
    <a href="#" className="text-[14px] text-white/80 hover:text-white transition-colors">
      {label}
    </a>
  </li>
);

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      {/* Top Bar */}
      <div className="border-b border-gray-100 py-2 hidden lg:block">
        <div className="max-w-[1440px] mx-auto px-10 flex justify-end items-center gap-6">
          <a href="#" className="text-[12px] text-randstad-navy/60 hover:text-randstad-blue">contact us</a>
        </div>
      </div>

      {/* Header */}
      <header className="sticky top-0 z-50 bg-white border-b border-gray-100">
        <div className="max-w-[1440px] mx-auto px-10 h-20 flex items-center justify-between">
          <div className="flex items-center gap-12">
            {/* Logo */}
            <div className="flex items-center gap-2">
              <div className="flex flex-col">
                <span className="text-[28px] font-bold text-randstad-blue leading-none tracking-tighter flex items-center gap-1">
                  <svg width="32" height="32" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10 10C10 10 15 10 15 15C15 20 10 20 10 20" stroke="#2175d9" strokeWidth="4" strokeLinecap="round"/>
                    <path d="M20 10C20 10 25 10 25 15C25 20 20 20 20 20" stroke="#2175d9" strokeWidth="4" strokeLinecap="round"/>
                    <path d="M10 30C10 30 15 30 15 25C15 20 10 20 10 20" stroke="#2175d9" strokeWidth="4" strokeLinecap="round"/>
                    <path d="M20 30C20 30 25 30 25 25C25 20 20 20 20 20" stroke="#2175d9" strokeWidth="4" strokeLinecap="round"/>
                  </svg>
                  randstad
                </span>
              </div>
            </div>

            {/* Main Nav */}
            <nav className="hidden xl:flex items-center gap-8">
              <NavItem label="find a job" />
              <NavItem label="for talent" />
              <NavItem label="for employer" />
              <NavItem label="resources" />
              <NavItem label="about us" />
            </nav>
          </div>

          {/* Right Nav */}
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2 cursor-pointer text-randstad-navy/80 hover:text-randstad-blue">
              <Heart size={20} />
              <span className="text-[15px]">0</span>
            </div>
            <div className="flex items-center gap-2 cursor-pointer text-randstad-navy/80 hover:text-randstad-blue">
              <User size={20} />
              <span className="text-[15px]">my randstad</span>
            </div>
          </div>
        </div>
      </header>

      <main>
        {/* Hero Section */}
        <section className="bg-randstad-navy py-20 overflow-hidden relative">
          <div className="max-w-[1440px] mx-auto px-10 flex flex-col lg:flex-row items-center justify-between gap-12">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="max-w-2xl"
            >
              <div className="flex items-center gap-2 text-white/60 text-[13px] mb-8">
                <span>home</span>
                <span>&gt;</span>
                <span>employers</span>
                <span>&gt;</span>
                <span>our services</span>
                <span>&gt;</span>
                <span className="text-white">talent export</span>
              </div>
              <h1 className="text-[72px] font-bold text-white leading-[0.9] tracking-tighter mb-8">
                talent export.
              </h1>
              <p className="text-[20px] text-white/90 leading-relaxed mb-10 max-w-xl">
                Bridge the talent gap with our global networks. We connect you with skilled professionals across various industries, helping your organization meet workforce needs effectively.
              </p>
              <button className="px-8 py-3 border border-white text-white text-[16px] font-medium hover:bg-white hover:text-randstad-navy transition-all duration-300">
                request a callback
              </button>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              className="relative w-full lg:w-1/2 flex justify-center"
            >
              <div className="relative w-[400px] h-[400px]">
                {/* Rocket Graphic Placeholder */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <svg width="300" height="300" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M50 10L70 40H30L50 10Z" fill="#2175d9" />
                    <rect x="40" y="40" width="20" height="40" fill="#2175d9" />
                    <path d="M40 80L30 90H70L60 80H40Z" fill="#00a1e0" />
                    <circle cx="50" cy="55" r="5" fill="white" />
                    <path d="M20 60L10 80H30L20 60Z" fill="#2175d9" />
                    <path d="M80 60L90 80H70L80 60Z" fill="#2175d9" />
                  </svg>
                </div>
                {/* Decorative lines */}
                <div className="absolute top-1/2 left-0 w-full h-[1px] bg-white/10 -translate-y-1/2"></div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Intro Section */}
        <section className="py-24 bg-white">
          <div className="max-w-[1440px] mx-auto px-10 grid lg:grid-cols-2 gap-20">
            <h2 className="text-[40px] font-bold text-randstad-navy leading-[1.1] tracking-tight">
              randstad's tailored talent export services for business growth.
            </h2>
            <div className="text-[18px] text-randstad-navy/80 leading-relaxed space-y-6">
              <p>
                Randstad's talent export services are tailored to meet your organization's needs by sourcing top-quality candidates at all managerial levels. We are committed to providing the best talent export solutions, selecting the most skilled individuals from our extensive talent pool to support your business growth.
              </p>
            </div>
          </div>
        </section>

        {/* Bridge Section */}
        <section className="flex flex-col lg:flex-row min-h-[600px]">
          <div className="lg:w-1/2 bg-randstad-blue p-20 flex flex-col justify-center">
            <h2 className="text-[56px] font-bold text-white leading-[1] tracking-tighter mb-8">
              bridging the talent-supply gap with global expertise.
            </h2>
            <p className="text-[18px] text-white/90 leading-relaxed max-w-lg">
              Address the talent-supply gap by leveraging established global networks. Our services connect you with skilled professionals across key sectors, ensuring your organization stays ahead in meeting workforce demands.
            </p>
          </div>
          <div className="lg:w-1/2 relative overflow-hidden">
            <img 
              src="https://picsum.photos/seed/randstad1/1200/800" 
              alt="Global Expertise" 
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
            {/* Circular overlay graphic */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-[400px] h-[400px] border-[40px] border-randstad-blue/30 rounded-full"></div>
              <div className="absolute w-[300px] h-[300px] border-[20px] border-randstad-light-blue/40 rounded-full"></div>
            </div>
          </div>
        </section>

        {/* Contact CTA */}
        <section className="bg-randstad-navy py-20">
          <div className="max-w-[1440px] mx-auto px-10 flex flex-col lg:flex-row items-center justify-between gap-10">
            <h2 className="text-[48px] font-bold text-white leading-[1] tracking-tighter max-w-2xl">
              contact us to start a conversation about your talent needs.
            </h2>
            <button className="px-10 py-4 border border-white text-white text-[18px] font-medium hover:bg-white hover:text-randstad-navy transition-all duration-300 whitespace-nowrap">
              let's connect
            </button>
          </div>
        </section>

        {/* Compensation Section */}
        <section className="py-24 bg-white">
          <div className="max-w-[1440px] mx-auto px-10">
            <h2 className="text-[48px] font-bold text-randstad-navy leading-[1.1] tracking-tighter mb-16 max-w-3xl">
              understanding employee compensation and benefits: key insights and strategies.
            </h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  title: "comprehensive guide to employee compensation and benefits.",
                  image: "https://picsum.photos/seed/comp1/600/800",
                  overlay: (
                    <div className="absolute bottom-10 left-10 flex items-end gap-2 h-32">
                      <div className="w-4 bg-randstad-light-blue h-[40%] rounded-full"></div>
                      <div className="w-4 bg-randstad-blue h-[70%] rounded-full"></div>
                      <div className="w-4 bg-white h-[100%] rounded-full"></div>
                      <div className="w-4 bg-randstad-blue h-[60%] rounded-full"></div>
                    </div>
                  )
                },
                {
                  title: "tips for developing an effective employee compensation package.",
                  image: "https://picsum.photos/seed/comp2/600/800",
                },
                {
                  title: "how randstad can help companies establish the right compensation.",
                  image: "https://picsum.photos/seed/comp3/600/800",
                  overlay: (
                    <div className="absolute top-10 right-10 w-32 h-32 border-8 border-randstad-blue/40 rounded-full flex items-center justify-center">
                      <div className="w-16 h-16 bg-randstad-blue/60 rounded-full"></div>
                    </div>
                  )
                }
              ].map((card, idx) => (
                <motion.div 
                  key={idx}
                  whileHover={{ y: -10 }}
                  className="relative aspect-[3/4] overflow-hidden group cursor-pointer rounded-lg shadow-lg"
                >
                  <img src={card.image} alt={card.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" referrerPolicy="no-referrer" />
                  <div className="absolute inset-0 bg-gradient-to-t from-randstad-navy/90 via-randstad-navy/20 to-transparent"></div>
                  {card.overlay}
                  <div className="absolute bottom-0 left-0 p-8">
                    <h3 className="text-[22px] font-bold text-white leading-tight tracking-tight group-hover:text-randstad-light-blue transition-colors">
                      {card.title}
                    </h3>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Client Success Section */}
        <section className="flex flex-col lg:flex-row min-h-[600px]">
          <div className="lg:w-1/2 bg-randstad-navy p-20 flex flex-col justify-center">
            <h2 className="text-[56px] font-bold text-white leading-[1] tracking-tighter mb-8">
              client success stories & testimonials.
            </h2>
            <p className="text-[18px] text-white/80 leading-relaxed mb-10 max-w-lg">
              Explore our client success stories and testimonials to see how we've helped businesses thrive. Discover real experiences and results from our satisfied clients, showcasing the impact of our services and the value we bring to every partnership.
            </p>
            <button className="w-fit px-8 py-3 border border-white text-white text-[16px] font-medium hover:bg-white hover:text-randstad-navy transition-all duration-300">
              read more
            </button>
          </div>
          <div className="lg:w-1/2 relative overflow-hidden">
            <img 
              src="https://picsum.photos/seed/success1/1200/800" 
              alt="Client Success" 
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-[450px] h-[450px] border-[2px] border-randstad-light-blue/30 rounded-full"></div>
              <div className="absolute w-[350px] h-[350px] border-[60px] border-randstad-blue/20 rounded-full"></div>
            </div>
          </div>
        </section>

        {/* Newsletter Section */}
        <section className="py-24 bg-white border-b border-gray-100">
          <div className="max-w-[1440px] mx-auto px-10 flex flex-col lg:flex-row items-center justify-between gap-20">
            <div className="lg:w-1/2">
              <h2 className="text-[56px] font-bold text-randstad-navy leading-[1] tracking-tighter mb-8">
                workforce insights delivered to your inbox.
              </h2>
              <p className="text-[18px] text-randstad-navy/70 leading-relaxed mb-10">
                Want to reduce your turnover rate, improve your company culture, or be inspired on improving employability for young people? Sign up to the monthly workforce insights newsletter and stay up to date with the latest recruitment and labor market news, tips, trends and reports for business leaders across the globe.
              </p>
              <button className="px-8 py-3 border border-randstad-blue text-randstad-blue text-[16px] font-medium hover:bg-randstad-blue hover:text-white transition-all duration-300">
                subscribe now
              </button>
            </div>
            <div className="lg:w-1/2 flex justify-center">
              <div className="relative w-[400px] h-[300px] flex items-center justify-center">
                <Mail size={200} className="text-randstad-blue" strokeWidth={1} />
                <div className="absolute top-0 right-10">
                  <motion.div 
                    animate={{ y: [0, 10, 0] }}
                    transition={{ repeat: Infinity, duration: 2 }}
                  >
                    <svg width="60" height="60" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 5V19M12 19L5 12M12 19L19 12" stroke="#00a1e0" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </motion.div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Employee Benefits Section */}
        <section className="py-24 bg-gray-50">
          <div className="max-w-[1440px] mx-auto px-10 flex flex-col lg:flex-row items-center justify-between gap-10">
            <div className="flex flex-col">
              <h2 className="text-[48px] font-bold text-randstad-navy leading-[1] tracking-tighter">
                top 10 employee benefits to retain your employees
              </h2>
              <p className="text-[48px] font-bold text-randstad-blue leading-[1] tracking-tighter">
                download our guide to know more.
              </p>
            </div>
            <button className="flex items-center gap-3 px-8 py-4 border border-randstad-navy text-randstad-navy text-[18px] font-medium hover:bg-randstad-navy hover:text-white transition-all duration-300 whitespace-nowrap">
              download now
              <Download size={20} />
            </button>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-randstad-navy text-white pt-20 pb-10">
        <div className="max-w-[1440px] mx-auto px-10">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
            <div>
              <h4 className="text-[18px] font-bold mb-6">find a job</h4>
              <ul className="list-none p-0 m-0">
                <FooterLink label="explore all jobs" />
                <FooterLink label="submit your cv" />
                <FooterLink label="join our team" />
                <FooterLink label="refer a friend" />
              </ul>
              <h4 className="text-[18px] font-bold mt-10 mb-6">for talents</h4>
              <ul className="list-none p-0 m-0">
                <FooterLink label="specialisms" />
                <FooterLink label="testimonials" />
                <FooterLink label="career advice" />
                <FooterLink label="beware of job scams" />
              </ul>
            </div>
            <div>
              <h4 className="text-[18px] font-bold mb-6">for employers</h4>
              <ul className="list-none p-0 m-0">
                <FooterLink label="submit a vacancy" />
                <FooterLink label="request a callback" />
                <FooterLink label="our services" />
                <FooterLink label="specialisms" />
                <FooterLink label="case studies" />
                <FooterLink label="testimonials" />
              </ul>
              <h4 className="text-[18px] font-bold mt-10 mb-6">resources</h4>
              <ul className="list-none p-0 m-0">
                <FooterLink label="case studies" />
                <FooterLink label="press room" />
                <FooterLink label="blogs" />
              </ul>
            </div>
            <div>
              <h4 className="text-[18px] font-bold mb-6">workforce insights</h4>
              <ul className="list-none p-0 m-0">
                <FooterLink label="talent insights reports" />
                <FooterLink label="employer brand research reports" />
                <FooterLink label="salary trends reports" />
                <FooterLink label="ed&i reports" />
                <FooterLink label="workmonitor reports" />
                <FooterLink label="startup hiring trends" />
                <FooterLink label="talent pulse surveys" />
              </ul>
            </div>
            <div>
              <h4 className="text-[18px] font-bold mb-6">jobs</h4>
              <ul className="list-none p-0 m-0 grid grid-cols-1 gap-x-4">
                <FooterLink label="engineering jobs" />
                <FooterLink label="cxo jobs" />
                <FooterLink label="manufacturing jobs" />
                <FooterLink label="supply chain & logistics jobs" />
                <FooterLink label="education jobs" />
                <FooterLink label="finance & accounting jobs" />
                <FooterLink label="healthcare jobs" />
                <FooterLink label="hr & admin support jobs" />
                <FooterLink label="ites/gcc jobs" />
                <FooterLink label="legal & compliance jobs" />
                <FooterLink label="sales & marketing jobs" />
              </ul>
            </div>
          </div>

          <div className="border-t border-white/10 pt-10 flex flex-col lg:flex-row justify-between items-center gap-8">
            <div className="flex items-center gap-6">
              <Linkedin size={24} className="text-white/60 hover:text-white cursor-pointer" />
              <Twitter size={24} className="text-white/60 hover:text-white cursor-pointer" />
              <Facebook size={24} className="text-white/60 hover:text-white cursor-pointer" />
              <Youtube size={24} className="text-white/60 hover:text-white cursor-pointer" />
              <Instagram size={24} className="text-white/60 hover:text-white cursor-pointer" />
            </div>
            <div className="text-[12px] text-white/40 text-center lg:text-left">
              registered office: Randstad India Private Limited, CIN U74210TN1992PTC023097/Randstad House, Old No. 5 & 5A, New No. 9, Pycrofts Garden Road, Nungambakkam, Chennai, TN - 600 006
            </div>
          </div>

          <div className="mt-10 flex flex-col gap-6">
            <div className="flex items-center gap-4 text-[12px] text-white/60">
              <span className="font-bold">RANDSTAD,</span>
              <svg width="24" height="24" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M10 10C10 10 15 10 15 15C15 20 10 20 10 20" stroke="white" strokeWidth="4" strokeLinecap="round"/>
                <path d="M20 10C20 10 25 10 25 15C25 20 20 20 20 20" stroke="white" strokeWidth="4" strokeLinecap="round"/>
                <path d="M10 30C10 30 15 30 15 25C15 20 10 20 10 20" stroke="white" strokeWidth="4" strokeLinecap="round"/>
                <path d="M20 30C20 30 25 30 25 25C25 20 20 20 20 20" stroke="white" strokeWidth="4" strokeLinecap="round"/>
              </svg>
              <span>HUMAN FORWARD and SHAPING THE WORLD OF WORK are registered trademarks of © Randstad N.V.2023</span>
            </div>
            
            <div className="text-[13px] text-white/80 leading-relaxed max-w-5xl">
              <p className="mb-4">
                <span className="font-bold">Security Advice:</span> Randstad India does not charge any fee at any stage of its recruitment process from the candidate nor allows their employees to collect any fees from any candidates. <a href="#" className="underline">Click here to know more</a>
              </p>
              <p>
                <span className="font-bold">EEO Statement:</span> Randstad India is an Equal Employment Opportunity Employer. All qualified applicants receive consideration for employment without regard to race, color, religion, sex, sexual orientation, gender identity or expression, appearance, national origin, age, marital status, veteran status, or disability status, or any other characteristics. Our global mission is to become the world's most equitable and specialized talent company, and we actively embrace diversity and inclusion as the cornerstones of our success. To read more of Randstad India's work in the space of equity, diversity and inclusion please <a href="#" className="underline">click here</a>
              </p>
            </div>

            <div className="flex flex-wrap gap-x-8 gap-y-4 text-[13px] text-white/60 mt-10">
              <a href="#" className="hover:text-white">terms & conditions</a>
              <a href="#" className="hover:text-white">cookies</a>
              <a href="#" className="hover:text-white">misconduct reporting procedure</a>
              <a href="#" className="hover:text-white">accessibility</a>
              <a href="#" className="hover:text-white">be aware</a>
              <a href="#" className="hover:text-white">sitemap</a>
              <a href="#" className="hover:text-white">privacy statement</a>
            </div>
          </div>
        </div>
      </footer>

      {/* Sticky Feedback Button */}
      <div className="fixed right-0 top-1/2 -translate-y-1/2 z-50">
        <div className="bg-randstad-blue text-white py-4 px-2 rounded-l-md cursor-pointer [writing-mode:vertical-rl] text-[14px] font-medium">
          Feedback
        </div>
      </div>

      {/* Cookie Icon */}
      <div className="fixed bottom-6 left-6 z-50">
        <div className="bg-randstad-blue text-white p-3 rounded-full shadow-lg cursor-pointer">
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
