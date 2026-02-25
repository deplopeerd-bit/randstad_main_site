import React from "react";
import { motion } from "motion/react";

import { 
  Search, 
  Heart, 
  User, 
  Linkedin, 
  Facebook, 
  Youtube, 
  Instagram,
  ArrowRight,
  ChevronDown,
  Mail
} from 'lucide-react';

// Custom X icon (formerly Twitter)
const XIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

const RandstadLogo = ({ className = "h-8" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 150 40" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12.5 10C12.5 11.3807 11.3807 12.5 10 12.5C8.61929 12.5 7.5 11.3807 7.5 10C7.5 8.61929 8.61929 7.5 10 7.5C11.3807 7.5 12.5 8.61929 12.5 10Z" fill="#2176FF"/>
    <path d="M20 10C20 15.5228 15.5228 20 10 20C4.47715 20 0 15.5228 0 10C0 4.47715 4.47715 0 10 0C15.5228 0 20 4.47715 20 10Z" fill="#2176FF" fillOpacity="0.2"/>
    <text x="25" y="28" fontFamily="Inter" fontWeight="700" fontSize="24" fill="#051937">randstad</text>
  </svg>
);

const NavItem = ({ label, hasDropdown = true }: { label: string, hasDropdown?: boolean }) => (
  <div className="flex items-center gap-1 cursor-pointer hover:text-randstad-blue transition-colors py-4">
    <span className="text-[15px] font-medium">{label}</span>
    {hasDropdown && <ChevronDown size={14} />}
  </div>
);

const FooterColumn = ({ title, links }: { title: string, links: string[] }) => (
  <div className="flex flex-col gap-3">
    <h4 className="text-white font-bold text-[16px] mb-2">{title}</h4>
    {links.map((link, i) => (
      <a key={i} href="#" className="text-white/80 hover:text-white text-[14px] transition-colors">
        {link}
      </a>
    ))}
  </div>
);

export default function RequestAcall() {
  return (
    <div className="min-h-screen bg-white">
      {/* Top Utility Bar */}
      <div className="bg-white border-bottom border-gray-100 py-2">
        <div className="container-custom flex justify-end">
          <a href="#" className="text-[12px] text-randstad-navy/60 hover:text-randstad-blue underline">contact us</a>
        </div>
      </div>

      {/* Main Navigation */}
      <header className="bg-white sticky top-0 z-50 border-b border-gray-100">
        <div className="container-custom flex items-center justify-between h-20">
          <div className="flex items-center gap-12">
            <RandstadLogo className="h-10" />
            <nav className="hidden lg:flex items-center gap-6">
              <NavItem label="find a job" />
              <NavItem label="for talent" />
              <NavItem label="for employer" />
              <NavItem label="resources" />
              <NavItem label="about us" />
            </nav>
          </div>
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2 cursor-pointer hover:text-randstad-blue">
              <Heart size={20} />
              <span className="text-[15px] font-medium">0</span>
            </div>
            <div className="flex items-center gap-2 cursor-pointer hover:text-randstad-blue">
              <User size={20} />
              <span className="text-[15px] font-medium">my randstad</span>
            </div>
          </div>
        </div>
      </header>

      {/* Breadcrumbs */}
      <div className="bg-white py-4">
        <div className="container-custom">
          <div className="flex items-center gap-2 text-[13px] text-randstad-navy/60">
            <a href="#" className="hover:text-randstad-blue">home</a>
            <span>›</span>
            <a href="#" className="hover:text-randstad-blue">employers</a>
            <span>›</span>
            <a href="#" className="hover:text-randstad-blue">our services</a>
            <span>›</span>
            <span className="font-bold text-randstad-navy">workforce advisory</span>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section className="bg-randstad-navy py-16 lg:py-24 overflow-hidden">
        <div className="container-custom grid lg:grid-cols-2 items-center gap-12">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="text-white"
          >
            <h1 className="text-[56px] lg:text-[72px] font-bold leading-[1.1] mb-8">
              workforce advisory.
            </h1>
            <p className="text-[18px] lg:text-[20px] leading-relaxed opacity-90 mb-10 max-w-xl">
              Optimize your workforce strategy with our expert advisory services. 
              We provide tailored solutions to help you manage, develop, and 
              engage your employees effectively, driving success across your organization.
            </p>
            <button className="px-8 py-3 border-2 border-white text-white font-bold hover:bg-white hover:text-randstad-navy transition-all duration-300">
              request a callback
            </button>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="relative flex justify-center lg:justify-end"
          >
            {/* Stylized human icons graphic */}
            <div className="relative w-[300px] h-[300px] lg:w-[450px] lg:h-[450px]">
              <div className="absolute inset-0 border-[6px] border-randstad-cyan rounded-full opacity-80 translate-x-4 translate-y-4"></div>
              <div className="absolute inset-0 border-[6px] border-white rounded-full opacity-40 translate-x-8 translate-y-8"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <User size={200} className="text-randstad-cyan" strokeWidth={1} />
              </div>
              <div className="absolute top-0 right-0 w-32 h-32 border-4 border-randstad-blue rounded-full opacity-60"></div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Why Choose Section */}
      <section className="py-20 bg-white">
        <div className="container-custom grid md:grid-cols-[1fr_2fr] gap-12 items-start">
          <h2 className="text-[32px] lg:text-[40px] font-bold leading-tight">
            why choose randstad?
          </h2>
          <p className="text-[18px] leading-relaxed text-randstad-navy/80">
            Randstad is a top workforce company dedicated to filling a wide range of job opportunities 
            with skilled professionals across various industries. Whether you need candidates in banking, 
            pharmaceuticals, digital marketing, sales, research, education, or other fields, Randstad 
            excels at connecting your needs with the right talent.
          </p>
        </div>
      </section>

      {/* Comprehensive Services Section */}
      <section className="grid lg:grid-cols-2">
        <div className="bg-randstad-blue p-12 lg:p-24 flex flex-col justify-center text-white">
          <h2 className="text-[40px] lg:text-[56px] font-bold leading-tight mb-8">
            comprehensive workforce advisory services.
          </h2>
          <p className="text-[18px] leading-relaxed opacity-90 mb-10">
            Maximize your workforce potential with our expert advisory services. 
            We deliver customized solutions to help you manage, develop, and 
            engage your employees, ensuring your organization's success at every level.
          </p>
        </div>
        <div className="relative h-[400px] lg:h-auto overflow-hidden">
          <img 
            src="https://picsum.photos/seed/workforce1/1200/800" 
            alt="Workforce Advisory" 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-randstad-blue/20"></div>
          {/* Circular graphic overlay */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 border-[12px] border-white/30 rounded-full"></div>
        </div>
      </section>

      {/* Contact CTA Section */}
      <section className="bg-randstad-navy py-20 text-white">
        <div className="container-custom flex flex-col lg:flex-row items-center justify-between gap-12">
          <h2 className="text-[36px] lg:text-[48px] font-bold leading-tight max-w-2xl">
            contact us to start a conversation about your talent needs.
          </h2>
          <button className="px-10 py-3 border-2 border-white text-white font-bold hover:bg-white hover:text-randstad-navy transition-all duration-300 whitespace-nowrap">
            let's connect
          </button>
        </div>
      </section>

      {/* Employee Engagement Section */}
      <section className="py-24 bg-white">
        <div className="container-custom">
          <h2 className="text-[32px] lg:text-[40px] font-bold leading-tight mb-16 max-w-3xl">
            boosting employee engagement: strategies for a Motivated Workforce.
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "what impacts employee engagement?",
                img: "https://picsum.photos/seed/eng1/600/800"
              },
              {
                title: "best practices for improving employee engagement.",
                img: "https://picsum.photos/seed/eng2/600/800"
              },
              {
                title: "how randstad can help improve your employee engagement.",
                img: "https://picsum.photos/seed/eng3/600/800"
              }
            ].map((card, i) => (
              <motion.div 
                key={i}
                whileHover={{ y: -10 }}
                className="group relative aspect-[3/4] overflow-hidden rounded-lg cursor-pointer"
              >
                <img 
                  src={card.img} 
                  alt={card.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-randstad-navy/90 via-transparent to-transparent"></div>
                <div className="absolute bottom-0 left-0 p-8">
                  <h3 className="text-white text-[22px] font-bold leading-tight">
                    {card.title}
                  </h3>
                </div>
                {/* Decorative circles */}
                <div className="absolute top-8 left-8 flex gap-2">
                  <div className="w-8 h-8 rounded-full bg-randstad-blue/60"></div>
                  <div className="w-8 h-8 rounded-full bg-randstad-cyan/60"></div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="grid lg:grid-cols-2 bg-randstad-navy">
        <div className="p-12 lg:p-24 flex flex-col justify-center text-white">
          <h2 className="text-[40px] lg:text-[56px] font-bold leading-tight mb-8">
            client success stories & testimonials.
          </h2>
          <p className="text-[18px] leading-relaxed opacity-90 mb-10">
            Explore our client success stories and testimonials to see how we've helped 
            businesses thrive. Discover real experiences and results from our satisfied 
            clients, showcasing the impact of our services and the value we bring to every partnership.
          </p>
          <button className="w-fit px-10 py-3 border-2 border-white text-white font-bold hover:bg-white hover:text-randstad-navy transition-all duration-300">
            know more
          </button>
        </div>
        <div className="relative h-[400px] lg:h-auto overflow-hidden">
          <img 
            src="https://picsum.photos/seed/success1/1200/800" 
            alt="Client Success" 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-randstad-navy/20"></div>
          {/* Circular graphic overlay */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 border-[1px] border-white/40 rounded-full"></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] border-[1px] border-white/20 rounded-full"></div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-24 bg-white">
        <div className="container-custom grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-[40px] lg:text-[56px] font-bold leading-tight mb-8">
              workforce insights delivered to your inbox.
            </h2>
            <p className="text-[18px] leading-relaxed text-randstad-navy/80 mb-10">
              Want to reduce your turnover rate, improve your company culture, or be inspired 
              on improving employability for young people? Sign up to the monthly workforce 
              insights newsletter and stay up to date with the latest recruitment and labor 
              market news, tips, trends and reports for business leaders across the globe.
            </p>
            <button className="px-10 py-3 border-2 border-randstad-blue text-randstad-blue font-bold hover:bg-randstad-blue hover:text-white transition-all duration-300">
              subscribe now
            </button>
          </div>
          <div className="relative flex justify-center">
            <div className="relative w-full max-w-md aspect-square flex items-center justify-center">
              <Mail size={280} className="text-randstad-blue" strokeWidth={0.5} />
              <div className="absolute top-0 right-0 w-24 h-24 bg-randstad-cyan rounded-full flex items-center justify-center">
                <ArrowRight size={40} className="text-white" />
              </div>
              <div className="absolute -bottom-4 -left-4 w-64 h-64 border-[12px] border-randstad-blue/10 rounded-3xl -z-10"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Guide Download Section */}
      <section className="py-24 bg-randstad-light">
        <div className="container-custom flex flex-col lg:flex-row items-center justify-between gap-12">
          <h2 className="text-[32px] lg:text-[44px] font-bold leading-tight max-w-3xl">
            download our guide outlining the eight key factors impacting <span className="text-randstad-blue">employee engagement in the workplace.</span>
          </h2>
          <button className="px-10 py-3 border-2 border-black text-black font-bold hover:bg-black hover:text-white transition-all duration-300 whitespace-nowrap">
            download now
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-randstad-navy pt-20 pb-10 text-white">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-12 mb-20">
            <FooterColumn 
              title="find a job" 
              links={["explore all jobs", "submit your cv", "join our team", "refer a friend"]} 
            />
            <FooterColumn 
              title="for talents" 
              links={["specialisms", "testimonials", "career advice", "beware of job scams"]} 
            />
            <FooterColumn 
              title="for employers" 
              links={["submit a vacancy", "request a callback", "our services", "specialisms", "case studies", "testimonials"]} 
            />
            <FooterColumn 
              title="workforce insights" 
              links={["talent insights reports", "employer brand research reports", "salary trends reports", "ed&i reports", "workmonitor reports", "startup hiring trends", "talent pulse surveys"]} 
            />
            <FooterColumn 
              title="resources" 
              links={["case studies", "press room", "blogs"]} 
            />
            <FooterColumn 
              title="jobs" 
              links={["engineering jobs", "cxo jobs", "manufacturing jobs", "supply chain & logistics jobs", "education jobs", "finance & accounting jobs", "healthcare jobs", "hr & admin support jobs", "ites/gcc jobs", "legal & compliance jobs", "sales & marketing jobs"]} 
            />
          </div>

          <div className="flex flex-wrap items-center justify-between gap-8 py-10 border-t border-white/10">
            <div className="flex items-center gap-6">
              <a href="#" className="p-2 bg-white/10 rounded-full hover:bg-white/20 transition-colors"><Linkedin size={20} /></a>
              <a href="#" className="p-2 bg-white/10 rounded-full hover:bg-white/20 transition-colors"><XIcon /></a>
              <a href="#" className="p-2 bg-white/10 rounded-full hover:bg-white/20 transition-colors"><Facebook size={20} /></a>
              <a href="#" className="p-2 bg-white/10 rounded-full hover:bg-white/20 transition-colors"><Youtube size={20} /></a>
              <a href="#" className="p-2 bg-white/10 rounded-full hover:bg-white/20 transition-colors"><Instagram size={20} /></a>
            </div>
            <div className="text-[12px] text-white/60">
              registered office: Randstad India Private Limited, CIN U74210TN1992PTC023097, Randstad House, Old No. 5 & 5A, New No. 9, Pycrofts Garden Road, Nungambakkam, Chennai, TN - 600 006
            </div>
          </div>

          <div className="flex flex-col gap-8 py-10 border-t border-white/10">
            <div className="flex items-center gap-4">
              <RandstadLogo className="h-8 brightness-0 invert" />
              <span className="text-[12px] font-medium tracking-widest opacity-60">HUMAN FORWARD and SHAPING THE WORLD OF WORK are registered trademarks of © Randstad N.V. 2023</span>
            </div>
            
            <div className="space-y-4 text-[13px] text-white/70 leading-relaxed">
              <p>
                <span className="font-bold text-white">Security Advice:</span> Randstad India does not charge any fee at any stage of its recruitment process from the candidate nor allows their employees to collect any fees from any candidates. <a href="#" className="text-randstad-cyan hover:underline">Click here to know more</a>
              </p>
              <p>
                <span className="font-bold text-white">EEO Statement:</span> Randstad India is an Equal Employment Opportunity Employer. All qualified applicants receive consideration for employment without regard to race, color, religion, sex, sexual orientation, gender identity or expression, appearance, national origin, age, marital status, veteran status, or disability status, or any other characteristics. Our global mission is to become the world's most equitable and specialized talent company, and we actively embrace diversity and inclusion as the cornerstones of our success. To read more of Randstad India's work in the space of equity, diversity and inclusion please <a href="#" className="text-randstad-cyan hover:underline">click here</a>
              </p>
            </div>
          </div>

          <div className="flex flex-wrap gap-6 pt-10 border-t border-white/10 text-[12px] text-white/60">
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

      {/* Sticky Feedback Button */}
      <div className="fixed right-0 top-1/2 -translate-y-1/2 z-[100] hidden md:block">
        <button className="bg-randstad-blue text-white py-3 px-1 rounded-l-md [writing-mode:vertical-rl] rotate-180 text-[14px] font-bold tracking-wider">
          Feedback
        </button>
      </div>

      {/* Cookie Icon */}
      <div className="fixed bottom-6 left-6 z-[100]">
        <button className="w-10 h-10 bg-randstad-blue text-white rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform">
          <div className="w-6 h-6 border-2 border-white rounded-full border-dashed"></div>
        </button>
      </div>
    </div>
  );
}
