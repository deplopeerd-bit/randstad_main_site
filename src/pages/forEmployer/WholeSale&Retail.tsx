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
  Facebook, 
  Youtube, 
  Instagram,
  ChevronRight,
  ArrowRight
} from "lucide-react";

// Custom X icon since lucide might not have the latest
const XIcon = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true" className="w-5 h-5 fill-current">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path>
  </svg>
);

const Navbar = () => (
  <header className="sticky top-0 z-50 bg-white border-b border-gray-100">
    <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
      <div className="flex items-center justify-between h-20">
        <div className="flex items-center gap-12">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 flex flex-col justify-between py-1">
              <div className="h-1.5 w-full bg-randstad-blue rounded-r-full"></div>
              <div className="h-1.5 w-3/4 bg-randstad-blue rounded-r-full"></div>
            </div>
            <span className="text-2xl font-bold tracking-tighter text-randstad-blue">randstad</span>
          </div>
          <nav className="hidden lg:flex items-center gap-8">
            {["find a job", "for talent", "for employer", "resources", "about us"].map((item) => (
              <a key={item} href="#" className="text-[15px] font-medium hover:text-randstad-blue transition-colors flex items-center gap-1">
                {item}
                {item === "about us" || item === "resources" || item === "for talent" || item === "for employer" || item === "find a job" ? <ChevronRight className="w-4 h-4 rotate-90" /> : null}
              </a>
            ))}
          </nav>
        </div>
        <div className="flex items-center gap-6">
          <a href="#" className="text-[13px] font-medium hover:underline">contact us</a>
          <div className="flex items-center gap-4">
            <button className="p-2 hover:bg-gray-50 rounded-full">
              <div className="relative">
                <Heart className="w-5 h-5" />
                <span className="absolute -top-1 -right-1 bg-randstad-navy text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center">0</span>
              </div>
            </button>
            <button className="flex items-center gap-2 px-4 py-2 hover:bg-gray-50 rounded-full">
              <User className="w-5 h-5" />
              <span className="text-[15px] font-medium">my randstad</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  </header>
);

const Hero = () => (
  <section className="bg-randstad-navy text-white py-24 overflow-hidden relative">
    <div className="max-w-[1440px] mx-auto px-6 lg:px-12 relative z-10">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-2 text-sm mb-8 opacity-80">
            <span>home</span> <ChevronRight className="w-3 h-3" /> 
            <span>professional services</span> <ChevronRight className="w-3 h-3" /> 
            <span className="font-semibold">wholesale & retail</span>
          </div>
          <h1 className="text-5xl lg:text-7xl font-light leading-[1.1] mb-8 tracking-tight">
            a partner for talent in wholesale & retail.
          </h1>
          <p className="text-lg lg:text-xl opacity-90 max-w-xl mb-10 leading-relaxed">
            Find in-demand, top-tier professional talent — when you need it. By offering a comprehensive set of solutions, backed by our innovative technologies and global footprint, with deep insights into market dynamics, a vast pool of pre-screened candidates, and specialised recruiting processes, we'll help you fill crucial roles to bolster growth and agility.
          </p>
          <button className="px-8 py-3 border border-white rounded-md text-lg font-medium hover:bg-white hover:text-randstad-navy transition-all">
            get in touch
          </button>
        </motion.div>
        <div className="relative h-[400px] lg:h-[600px]">
          <motion.div 
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="absolute right-0 top-1/2 -translate-y-1/2 w-[500px] h-[500px]"
          >
            <div className="absolute inset-0 bg-randstad-purple rounded-full mix-blend-screen opacity-80 translate-x-12"></div>
            <div className="absolute inset-0 bg-fuchsia-500 rounded-full mix-blend-screen opacity-80 -translate-x-12"></div>
          </motion.div>
        </div>
      </div>
    </div>
  </section>
);

const SectionWithImage = ({ title, description, image, overlays, reverse = false, dark = false, buttonText }: { title: string, description: string, image: string, overlays: any[], reverse?: boolean, dark?: boolean, buttonText?: string }) => (
  <section className={`${dark ? 'bg-randstad-navy text-white' : 'bg-[#fdfbf7]'} py-0 overflow-hidden`}>
    <div className={`flex flex-col ${reverse ? 'lg:flex-row-reverse' : 'lg:flex-row'}`}>
      <div className="lg:w-1/2 p-12 lg:p-24 flex flex-col justify-center">
        <motion.div
          initial={{ opacity: 0, x: reverse ? 20 : -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className={`text-4xl lg:text-6xl font-light mb-8 tracking-tight ${dark ? 'text-white' : 'text-randstad-navy'}`}>
            {title}
          </h2>
          <p className={`text-lg mb-10 leading-relaxed opacity-90 ${dark ? 'text-white' : 'text-randstad-navy'}`}>
            {description}
          </p>
          {buttonText && (
            <button className={`px-8 py-3 border rounded-md text-lg font-medium transition-all ${dark ? 'border-white text-white hover:bg-white hover:text-randstad-navy' : 'border-randstad-blue text-randstad-blue hover:bg-randstad-blue hover:text-white'}`}>
              {buttonText}
            </button>
          )}
        </motion.div>
      </div>
      <div className="lg:w-1/2 relative min-h-[400px] lg:min-h-[600px]">
        <img 
          src={image} 
          alt={title} 
          className="absolute inset-0 w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {overlays.map((overlay, i) => (
            <div 
              key={i} 
              className={`${overlay.type === 'pill' ? 'pill-overlay' : 'circle-overlay'} ${overlay.color}`}
              style={{
                width: overlay.width,
                height: overlay.height,
                top: overlay.top,
                left: overlay.left,
                right: overlay.right,
                bottom: overlay.bottom,
                transform: `rotate(${overlay.rotate || 0}deg)`
              }}
            />
          ))}
        </div>
      </div>
    </div>
  </section>
);

const BlueBanner = () => (
  <section className="bg-randstad-blue text-white py-20">
    <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
      <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
        <h2 className="text-4xl lg:text-6xl font-light tracking-tight max-w-3xl">
          contact us to start a conversation about your talent needs.
        </h2>
        <button className="px-10 py-4 border border-white rounded-md text-xl font-medium hover:bg-white hover:text-randstad-blue transition-all whitespace-nowrap">
          let's meet
        </button>
      </div>
    </div>
  </section>
);

const InsightsGrid = ({ title, items, showSeeAll = false }) => (
  <section className="bg-[#fdfbf7] py-24">
    <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
      <div className="flex items-center justify-between mb-16">
        <h2 className="text-4xl lg:text-5xl font-light tracking-tight text-randstad-navy">{title}</h2>
        {showSeeAll && (
          <a href="#" className="text-xl font-medium hover:underline flex items-center gap-2">
            see all
          </a>
        )}
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {items.map((item, i) => (
          <motion.div 
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="group cursor-pointer"
          >
            <div className="relative aspect-[4/3] mb-6 overflow-hidden rounded-lg">
              <img 
                src={item.image} 
                alt={item.title} 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                referrerPolicy="no-referrer"
              />
              {item.overlayText && (
                <div className="absolute inset-0 bg-gradient-to-t from-randstad-navy/80 to-transparent flex items-end p-8">
                  <h3 className="text-2xl font-light text-white leading-tight">{item.overlayText}</h3>
                </div>
              )}
            </div>
            {!item.overlayText && (
              <>
                <p className="text-sm text-gray-500 mb-2">{item.date}</p>
                <h3 className="text-2xl font-light text-randstad-navy leading-tight group-hover:text-randstad-blue transition-colors">
                  {item.title}
                </h3>
              </>
            )}
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

const Footer = () => (
  <footer className="bg-randstad-navy text-white pt-24 pb-12">
    <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-12 mb-20">
        <div>
          <h4 className="text-xl font-semibold mb-8">find a job</h4>
          <ul className="space-y-4 opacity-80 text-[15px]">
            <li><a href="#" className="hover:underline">explore all jobs</a></li>
            <li><a href="#" className="hover:underline">submit your cv</a></li>
            <li><a href="#" className="hover:underline">join our team</a></li>
            <li><a href="#" className="hover:underline">refer a friend</a></li>
          </ul>
        </div>
        <div>
          <h4 className="text-xl font-semibold mb-8">for talent</h4>
          <ul className="space-y-4 opacity-80 text-[15px]">
            <li><a href="#" className="hover:underline">specialisms</a></li>
            <li><a href="#" className="hover:underline">testimonials</a></li>
            <li><a href="#" className="hover:underline">career advice</a></li>
            <li><a href="#" className="hover:underline">beware of job scams</a></li>
          </ul>
        </div>
        <div>
          <h4 className="text-xl font-semibold mb-8">for employers</h4>
          <ul className="space-y-4 opacity-80 text-[15px]">
            <li><a href="#" className="hover:underline">submit a vacancy</a></li>
            <li><a href="#" className="hover:underline">request a callback</a></li>
            <li><a href="#" className="hover:underline">our services</a></li>
            <li><a href="#" className="hover:underline">specialisms</a></li>
            <li><a href="#" className="hover:underline">case studies</a></li>
            <li><a href="#" className="hover:underline">testimonials</a></li>
          </ul>
        </div>
        <div>
          <h4 className="text-xl font-semibold mb-8">workforce insights</h4>
          <ul className="space-y-4 opacity-80 text-[15px]">
            <li><a href="#" className="hover:underline">talent insights reports</a></li>
            <li><a href="#" className="hover:underline">employer brand research reports</a></li>
            <li><a href="#" className="hover:underline">salary trends reports</a></li>
            <li><a href="#" className="hover:underline">ed&i reports</a></li>
            <li><a href="#" className="hover:underline">workmonitor reports</a></li>
            <li><a href="#" className="hover:underline">startup hiring trends</a></li>
            <li><a href="#" className="hover:underline">talent pulse surveys</a></li>
          </ul>
        </div>
        <div>
          <h4 className="text-xl font-semibold mb-8">resources</h4>
          <ul className="space-y-4 opacity-80 text-[15px]">
            <li><a href="#" className="hover:underline">case studies</a></li>
            <li><a href="#" className="hover:underline">press room</a></li>
            <li><a href="#" className="hover:underline">blogs</a></li>
          </ul>
        </div>
        <div>
          <h4 className="text-xl font-semibold mb-8">jobs</h4>
          <ul className="space-y-4 opacity-80 text-[15px]">
            <li><a href="#" className="hover:underline">engineering jobs</a></li>
            <li><a href="#" className="hover:underline">cxo jobs</a></li>
            <li><a href="#" className="hover:underline">manufacturing jobs</a></li>
            <li><a href="#" className="hover:underline">supply chain & logistics jobs</a></li>
            <li><a href="#" className="hover:underline">education jobs</a></li>
            <li><a href="#" className="hover:underline">finance & accounting jobs</a></li>
            <li><a href="#" className="hover:underline">healthcare jobs</a></li>
            <li><a href="#" className="hover:underline">hr & admin support jobs</a></li>
            <li><a href="#" className="hover:underline">ites/gcc jobs</a></li>
            <li><a href="#" className="hover:underline">legal & compliance jobs</a></li>
            <li><a href="#" className="hover:underline">sales & marketing jobs</a></li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10 pt-12 mb-12">
        <div className="flex flex-wrap items-center justify-between gap-8">
          <div className="flex items-center gap-6">
            <a href="#" className="p-2 bg-white/10 rounded-full hover:bg-white/20 transition-colors"><Linkedin className="w-5 h-5" /></a>
            <a href="#" className="p-2 bg-white/10 rounded-full hover:bg-white/20 transition-colors"><XIcon /></a>
            <a href="#" className="p-2 bg-white/10 rounded-full hover:bg-white/20 transition-colors"><Facebook className="w-5 h-5" /></a>
            <a href="#" className="p-2 bg-white/10 rounded-full hover:bg-white/20 transition-colors"><Youtube className="w-5 h-5" /></a>
            <a href="#" className="p-2 bg-white/10 rounded-full hover:bg-white/20 transition-colors"><Instagram className="w-5 h-5" /></a>
          </div>
          <p className="text-[13px] opacity-60">
            registered office: Randstad India Private Limited, CIN U74210TN1992PTC023097,/Randstad House, Old No. 5 & 5A, New No. 9, Pycrofts Garden Road, Nungambakkam, Chennai, TN - 600 006
          </p>
        </div>
      </div>

      <div className="mb-12">
        <div className="flex items-center gap-4 mb-8">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 flex flex-col justify-between py-1">
              <div className="h-1 w-full bg-randstad-blue rounded-r-full"></div>
              <div className="h-1 w-3/4 bg-randstad-blue rounded-r-full"></div>
            </div>
            <span className="text-xl font-bold tracking-tighter">randstad</span>
          </div>
          <span className="text-[13px] opacity-60">HUMAN FORWARD and SHAPING THE WORLD OF WORK are registered trademarks of © Randstad N.V.2023</span>
        </div>
        
        <div className="space-y-6 text-[13px] opacity-80 leading-relaxed max-w-5xl">
          <p>
            Security Advice: Randstad India does not charge any fee at any stage of its recruitment process from the candidate nor allows their employees to collect any fees from any candidates. <a href="#" className="underline">Click here to know more</a>
          </p>
          <p>
            EEO Statement: Randstad India is an Equal Employment Opportunity Employer. All qualified applicants receive consideration for employment without regard to race, color, religion, sex, sexual orientation, gender identity or expression, appearance, national origin, age, marital status, veteran status, or disability status, or any other characteristics. Our global mission is to become the world’s most equitable and specialized talent company, and we actively embrace diversity and inclusion as the cornerstones of our success. To read more of Randstad India’s work in the space of equity, diversity and inclusion please <a href="#" className="underline">click here</a>
          </p>
        </div>
      </div>

      <div className="flex flex-wrap items-center gap-x-8 gap-y-4 text-[13px] opacity-80">
        {["terms & conditions", "cookies", "misconduct reporting procedure", "accessibility", "be aware", "sitemap", "privacy statement"].map(link => (
          <a key={link} href="#" className="hover:underline">{link}</a>
        ))}
      </div>
    </div>
  </footer>
);

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      
      <SectionWithImage 
        title="identifying top talent."
        description="When you need a candidate with leading analytical skills and business acumen, we can help. Drawing from a wide pool of wholesale and retail talent, we specialise in finding the right fit for your company."
        image="https://picsum.photos/seed/retail1/1200/800"
        overlays={[
          { type: 'pill', color: 'bg-randstad-purple', width: '300px', height: '60px', top: '20%', left: '-50px', rotate: -5 },
          { type: 'pill', color: 'bg-randstad-light-purple', width: '250px', height: '50px', bottom: '30%', left: '20px' },
          { type: 'pill', color: 'bg-randstad-purple', width: '200px', height: '40px', bottom: '10%', right: '-30px' }
        ]}
      />

      <SectionWithImage 
        title="our expertise."
        description="Our trained retail recruitment professionals are specialised in the wholesale and retail roles they fill, ensuring you’re always working with a specialist who is fully equipped to help you find your next star performer. They’ll quickly build an understanding of the role and your requirements, identifying matching candidates that will thrive at your company."
        image="https://picsum.photos/seed/retail2/1200/800"
        dark={true}
        reverse={true}
        overlays={[
          { type: 'pill', color: 'bg-randstad-purple', width: '200px', height: '200px', top: '10%', right: '10%', rotate: 45 },
          { type: 'pill', color: 'bg-randstad-light-purple', width: '150px', height: '150px', bottom: '20%', left: '10%' }
        ]}
      />

      <SectionWithImage 
        title="combining people and technology."
        description="We embrace technology for optimising our talent searches, but we complement this approach with a focus on human connection. With a combination of technology and people skills, we build long lasting relationships that allow us to deliver superior candidates, faster, while maintaining a high quality of service."
        image="https://picsum.photos/seed/retail3/1200/800"
        overlays={[
          { type: 'circle', color: 'bg-randstad-purple', width: '300px', height: '300px', top: '20%', right: '10%' },
          { type: 'circle', color: 'bg-randstad-light-purple', width: '150px', height: '150px', top: '40%', right: '40%' }
        ]}
      />

      <BlueBanner />

      <InsightsGrid 
        title="unlock more insights."
        items={[
          { image: "https://picsum.photos/seed/insight1/800/600", overlayText: "what is span of control, and why is it important?" },
          { image: "https://picsum.photos/seed/insight2/800/600", overlayText: "how to identify the right span of control for your company." },
          { image: "https://picsum.photos/seed/insight3/800/600", overlayText: "get help on your span of control journey." },
          { image: "https://picsum.photos/seed/insight4/800/600", overlayText: "calculate your ideal span of control." }
        ]}
      />

      <SectionWithImage 
        title="workforce insights delivered to your inbox."
        description="Want to reduce your turnover rate, improve your company culture, or be inspired on improving employability for young people? Sign up to the monthly workforce insights newsletter and stay up to date with the latest recruitment and labor market news, tips, trends and reports for business leaders across the globe."
        image="https://picsum.photos/seed/retail4/1200/800"
        dark={true}
        buttonText="subscribe"
        overlays={[
          { type: 'circle', color: 'bg-randstad-purple', width: '400px', height: '400px', top: '10%', left: '10%' }
        ]}
      />

      <SectionWithImage 
        title="building for the future. together."
        description="Are you looking for talented banking professionals to help grow your business?"
        image="https://picsum.photos/seed/retail5/1200/800"
        buttonText="request a call back"
        overlays={[
          { type: 'pill', color: 'bg-randstad-purple', width: '300px', height: '80px', top: '30%', right: '10%' },
          { type: 'pill', color: 'bg-randstad-light-purple', width: '300px', height: '80px', top: '45%', right: '5%' }
        ]}
      />

      <SectionWithImage 
        title="read our case study"
        description="Randstad India enables an India-based multinational conglomerate to successfully equip their innovative ‘Business Hub’ with specialist talent with speed and scale."
        image="https://picsum.photos/seed/retail6/1200/800"
        dark={true}
        reverse={true}
        buttonText="read more"
        overlays={[
          { type: 'pill', color: 'bg-randstad-purple', width: '200px', height: '40px', top: '20%', left: '10%' },
          { type: 'pill', color: 'bg-randstad-light-purple', width: '300px', height: '60px', top: '30%', left: '5%' }
        ]}
      />

      <InsightsGrid 
        title="latest updates"
        showSeeAll={true}
        items={[
          { image: "https://picsum.photos/seed/update1/800/600", date: "23 February 2026", title: "the silent tax of the accountant shortage." },
          { image: "https://picsum.photos/seed/update2/800/600", date: "19 January 2026", title: "what is social media screening?" },
          { image: "https://picsum.photos/seed/update3/800/600", date: "12 January 2026", title: "how to set up an effective reference-checking process." },
          { image: "https://picsum.photos/seed/update4/800/600", date: "05 January 2026", title: "how to ask the right questions during a reference check." },
          { image: "https://picsum.photos/seed/update5/800/600", date: "29 December 2025", title: "what is an employment background check?" },
          { image: "https://picsum.photos/seed/update6/800/600", date: "22 December 2025", title: "what is a reference check, and why is it important?" }
        ]}
      />

      <Footer />

      {/* Floating Feedback Button */}
      <div className="fixed right-0 top-1/2 -translate-y-1/2 z-40">
        <button className="bg-randstad-blue text-white py-4 px-2 rounded-l-md [writing-mode:vertical-rl] rotate-180 text-sm font-medium">
          Feedback
        </button>
      </div>

      {/* Cookie Icon */}
      <div className="fixed bottom-6 left-6 z-40">
        <button className="bg-randstad-blue text-white p-3 rounded-full shadow-lg">
          <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z"></path>
          </svg>
        </button>
      </div>
    </div>
  );
}
