import { ChevronDown, Facebook, Heart, Instagram, Linkedin, MessageSquare, Search, Twitter, User, Youtube } from "lucide-react";
import { motion } from "motion/react";

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */


const Navbar = () => (
  <nav className="bg-white border-b border-gray-100 sticky top-0 z-50">
    <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
      <div className="flex justify-between items-center h-20">
        <div className="flex items-center gap-12">
          <div className="flex items-center">
            <svg width="140" height="32" viewBox="0 0 140 32" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M14.5 0C6.5 0 0 6.5 0 14.5V32H5.5V14.5C5.5 9.5 9.5 5.5 14.5 5.5H32V0H14.5Z" fill="#2175d9"/>
              <path d="M125.5 0C133.5 0 140 6.5 140 14.5V32H134.5V14.5C134.5 9.5 130.5 5.5 125.5 5.5H108V0H125.5Z" fill="#2175d9"/>
              <text x="40" y="24" fontFamily="Inter" fontWeight="700" fontSize="24" fill="#051937">randstad</text>
            </svg>
          </div>
          <div className="hidden lg:flex items-center gap-8">
            {["find a job", "for talent", "for employer", "resources", "about us"].map((item) => (
              <button key={item} className="flex items-center gap-1 text-[15px] font-medium text-randstad-navy hover:text-randstad-blue transition-colors">
                {item} <ChevronDown size={14} />
              </button>
            ))}
          </div>
        </div>
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-2 text-randstad-navy">
            <Heart size={20} />
            <span className="text-[15px] font-medium">0</span>
          </div>
          <div className="flex items-center gap-2 text-randstad-navy">
            <User size={20} className="border border-randstad-navy rounded-full p-0.5" />
            <span className="text-[15px] font-medium">my randstad</span>
          </div>
        </div>
      </div>
    </div>
  </nav>
);

const Footer = () => (
  <footer className="bg-randstad-navy text-white pt-20 pb-10">
    <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-12 mb-20">
        <div>
          <h4 className="text-lg font-bold mb-6">find a job</h4>
          <ul className="space-y-4 text-gray-400 text-[15px]">
            <li>explore all jobs</li>
            <li>submit your cv</li>
            <li>join our team</li>
            <li>refer a friend</li>
          </ul>
          <h4 className="text-lg font-bold mt-12 mb-6">for talents</h4>
          <ul className="space-y-4 text-gray-400 text-[15px]">
            <li>specialisms</li>
            <li>testimonials</li>
            <li>career advice</li>
            <li>beware of job scams</li>
          </ul>
        </div>
        <div>
          <h4 className="text-lg font-bold mb-6">for employers</h4>
          <ul className="space-y-4 text-gray-400 text-[15px]">
            <li>submit a vacancy</li>
            <li>request a callback</li>
            <li>our services</li>
            <li>specialisms</li>
            <li>case studies</li>
            <li>testimonials</li>
          </ul>
          <h4 className="text-lg font-bold mt-12 mb-6">resources</h4>
          <ul className="space-y-4 text-gray-400 text-[15px]">
            <li>case studies</li>
            <li>press room</li>
            <li>blogs</li>
          </ul>
        </div>
        <div>
          <h4 className="text-lg font-bold mb-6">workforce insights</h4>
          <ul className="space-y-4 text-gray-400 text-[15px]">
            <li>talent insights reports</li>
            <li>employer brand research reports</li>
            <li>salary trends reports</li>
            <li>ed&i reports</li>
            <li>workmonitor reports</li>
            <li>startup hiring trends</li>
            <li>talent pulse surveys</li>
          </ul>
        </div>
        <div>
          <h4 className="text-lg font-bold mb-6">jobs</h4>
          <ul className="space-y-4 text-gray-400 text-[15px]">
            <li>engineering jobs</li>
            <li>cxo jobs</li>
            <li>manufacturing jobs</li>
            <li>supply chain & logistics jobs</li>
            <li>education jobs</li>
            <li>finance & accounting jobs</li>
            <li>healthcare jobs</li>
            <li>hr & admin support jobs</li>
            <li>ites/gcc jobs</li>
            <li>legal & compliance jobs</li>
            <li>sales & marketing jobs</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-gray-800 pt-12">
        <div className="flex flex-wrap gap-6 mb-12">
          {[Linkedin, Twitter, Facebook, Youtube, Instagram].map((Icon, i) => (
            <div key={i} className="w-10 h-10 rounded-full bg-gray-700 flex items-center justify-center cursor-pointer hover:bg-randstad-blue transition-colors">
              <Icon size={20} />
            </div>
          ))}
        </div>
        
        <p className="text-xs text-gray-500 mb-8">
          registered office: Randstad India Private Limited, CIN U74210TN1992PTC023097,/Randstad House, Old No. 5 & 5A, New No. 9, Pycrofts Garden Road, Nungambakkam, Chennai, TN - 600 006
        </p>
        
        <div className="flex items-center gap-4 mb-12">
          <span className="text-xs font-bold">RANDSTAD,</span>
          <div className="flex items-center gap-2">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M4 4C2 4 0 6 0 8V24H2V8C2 7 3 6 4 6H12V4H4Z" fill="#2175d9"/>
              <path d="M20 4C22 4 24 6 24 8V24H22V8C22 7 21 6 20 6H12V4H20Z" fill="#2175d9"/>
            </svg>
            <span className="text-[10px] text-gray-400 uppercase tracking-widest">human forward and shaping the world of work are registered trademarks of © Randstad N.V.2023</span>
          </div>
        </div>

        <div className="space-y-6 text-[13px] text-gray-400 leading-relaxed max-w-5xl">
          <p>
            <span className="font-bold text-white">Security Advice:</span> Randstad India does not charge any fee at any stage of its recruitment process from the candidate nor allows their employees to collect any fees from any candidates. <span className="text-randstad-blue cursor-pointer">Click here to know more</span>
          </p>
          <p>
            <span className="font-bold text-white">EEO Statement:</span> Randstad India is an Equal Employment Opportunity Employer. All qualified applicants receive consideration for employment without regard to race, color, religion, sex, sexual orientation, gender identity or expression, appearance, national origin, age, marital status, veteran status, or disability status, or any other characteristics. Our global mission is to become the world's most equitable and specialized talent company, and we actively embrace diversity and inclusion as the cornerstones of our success. To read more of Randstad India's work in the space of equity, diversity and inclusion please <span className="text-randstad-blue cursor-pointer">click here</span>
          </p>
        </div>

        <div className="flex flex-wrap gap-x-8 gap-y-4 mt-12 text-xs text-gray-400">
          {["terms & conditions", "cookies", "misconduct reporting procedure", "accessibility", "be aware", "sitemap", "privacy statement"].map(item => (
            <span key={item} className="hover:text-white cursor-pointer transition-colors">{item}</span>
          ))}
        </div>
      </div>
    </div>
  </footer>
);

const Section = ({ title, description, image, imageLeft = false, dark = false, buttonText = "read more" }: any) => (
  <section className={`${dark ? 'bg-randstad-navy text-white' : 'bg-white text-randstad-navy'} py-0 overflow-hidden`}>
    <div className="max-w-[1440px] mx-auto flex flex-col md:flex-row items-stretch">
      <div className={`w-full md:w-1/2 p-12 lg:p-24 flex flex-col justify-center ${imageLeft ? 'md:order-2' : ''}`}>
        <h2 className="text-5xl lg:text-6xl font-normal mb-8 leading-tight">{title}</h2>
        <p className={`text-lg lg:text-xl mb-10 leading-relaxed ${dark ? 'text-gray-300' : 'text-gray-600'}`}>{description}</p>
        <button className={`w-fit px-10 py-4 border ${dark ? 'border-white hover:bg-white hover:text-randstad-navy' : 'border-randstad-blue text-randstad-blue hover:bg-randstad-blue hover:text-white'} transition-all text-[15px] font-medium`}>
          {buttonText}
        </button>
      </div>
      <div className={`w-full md:w-1/2 min-h-[400px] lg:min-h-[600px] relative ${imageLeft ? 'md:order-1' : ''}`}>
        <img src={image} alt={title} className="absolute inset-0 w-full h-full object-cover" referrerPolicy="no-referrer" />
      </div>
    </div>
  </section>
);

const Banner = ({ text, buttonText }: any) => (
  <section className="bg-randstad-blue text-white py-20">
    <div className="max-w-[1440px] mx-auto px-6 lg:px-12 flex flex-col md:flex-row justify-between items-center gap-8">
      <h2 className="text-5xl lg:text-6xl font-normal">{text}</h2>
      <button className="px-10 py-4 border border-white hover:bg-white hover:text-randstad-blue transition-all text-[15px] font-medium whitespace-nowrap">
        {buttonText}
      </button>
    </div>
  </section>
);

export default function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        {/* Breadcrumbs */}
        <div className="bg-randstad-navy text-white py-4">
          <div className="max-w-[1440px] mx-auto px-6 lg:px-12 text-xs text-gray-400 flex gap-2">
            <span>home</span> <span>&gt;</span> <span>employers</span> <span>&gt;</span> <span>industries</span> <span>&gt;</span> <span className="text-white">finance & accounting</span>
          </div>
        </div>

        {/* Hero Section */}
        <section className="bg-randstad-navy text-white py-24 lg:py-32 relative overflow-hidden">
          <div className="max-w-[1440px] mx-auto px-6 lg:px-12 relative z-10">
            <div className="max-w-2xl">
              <h1 className="text-6xl lg:text-8xl font-normal mb-12 leading-[1.1]">
                a partner for talent in finance & accounting.
              </h1>
              <p className="text-xl lg:text-2xl text-gray-300 mb-12 leading-relaxed">
                Find in-demand, top-tier professional talent — when you need it. By offering a comprehensive set of solutions, backed by our innovative technologies and global footprint, with deep insights into market dynamics, a vast pool of pre-screened candidates, and specialised recruiting processes, we'll help you fill crucial roles to bolster growth and agility.
              </p>
              <button className="px-10 py-4 border border-white hover:bg-white hover:text-randstad-navy transition-all text-[15px] font-medium">
                get in touch
              </button>
            </div>
          </div>
          
          {/* Overlapping Circles */}
          <div className="absolute top-1/2 right-0 -translate-y-1/2 translate-x-1/4 flex items-center">
            <div className="w-[500px] h-[500px] rounded-full bg-randstad-purple opacity-80"></div>
            <div className="w-[400px] h-[400px] rounded-full bg-randstad-magenta -ml-32 opacity-90"></div>
          </div>
        </section>

        {/* Content Sections */}
        <Section 
          title="identifying top talent."
          description="When you need a candidate with leading analytical skills and business acumen, we can help. Drawing from a wide pool of finance & accounting talent, we specialise in finding the right fit for your company."
          image="https://picsum.photos/seed/talent/1200/800"
        />

        <Section 
          title="our expertise."
          description="Our trained recruiters are specialised in the finance and accounting roles they fill, ensuring you're always working with a specialist who is fully equipped to help you find your next star performer. They'll quickly build an understanding of the role and your requirements, identifying matching candidates that will thrive at your company."
          image="https://picsum.photos/seed/expertise/1200/800"
          dark={true}
          imageLeft={true}
          buttonText="request a call back"
        />

        <Section 
          title="combining people and technology."
          description="We embrace technology for optimising our talent searches, but we complement this approach with a focus on human connection. With a combination of technology and people skills, we build long lasting relationships that allow us to deliver superior candidates, faster, while maintaining a high quality of service."
          image="https://picsum.photos/seed/tech/1200/800"
        />

        <Section 
          title="building for the future. together."
          description="Are you looking for talented banking professionals to help grow your business?"
          image="https://picsum.photos/seed/future/1200/800"
          imageLeft={true}
          buttonText="request a call back"
        />

        <Section 
          title="read our case study."
          description="Randstad India's expertise in recruitment and HR practices enable a multinational professional services network of firms to more than triple their EW count and achieve high levels of productivity and profits."
          image="https://picsum.photos/seed/casestudy/1200/800"
        />

        <Banner text="looking to hire?" buttonText="speak to an expert" />

        {/* Latest Updates */}
        <section className="bg-white py-24">
          <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
            <div className="flex justify-between items-end mb-12">
              <h2 className="text-5xl font-normal text-randstad-navy">latest updates</h2>
              <span className="text-randstad-blue text-lg hover:underline cursor-pointer">see all</span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              {[
                { date: "23 February 2026", title: "the silent tax of the accountant shortage.", img: "https://picsum.photos/seed/update1/600/400" },
                { date: "19 January 2026", title: "what is social media screening?", img: "https://picsum.photos/seed/update2/600/400" },
                { date: "12 January 2026", title: "how to set up an effective reference-checking process.", img: "https://picsum.photos/seed/update3/600/400" }
              ].map((item, i) => (
                <div key={i} className="group cursor-pointer">
                  <div className="aspect-[3/2] overflow-hidden rounded-lg mb-6">
                    <img src={item.img} alt={item.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" referrerPolicy="no-referrer" />
                  </div>
                  <p className="text-gray-500 text-sm mb-3">{item.date}</p>
                  <h3 className="text-2xl font-normal text-randstad-navy group-hover:text-randstad-blue transition-colors leading-tight">{item.title}</h3>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Workforce Insights Inbox */}
        <section className="bg-randstad-navy text-white py-0 overflow-hidden">
          <div className="max-w-[1440px] mx-auto flex flex-col md:flex-row items-stretch">
            <div className="w-full md:w-1/2 min-h-[400px] lg:min-h-[600px] relative">
              <img src="https://picsum.photos/seed/inbox/1200/800" alt="Workforce Insights" className="absolute inset-0 w-full h-full object-cover" referrerPolicy="no-referrer" />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 border-[20px] border-randstad-magenta rounded-full opacity-80"></div>
            </div>
            <div className="w-full md:w-1/2 p-12 lg:p-24 flex flex-col justify-center">
              <h2 className="text-5xl lg:text-7xl font-normal mb-8 leading-tight">workforce insights delivered to your inbox.</h2>
              <p className="text-lg lg:text-xl text-gray-300 mb-10 leading-relaxed">
                Want to reduce your turnover rate, improve your company culture, or be inspired on improving employability for young people? Sign up to the monthly workforce insights newsletter and stay up to date with the latest recruitment and labor market news, tips, trends and reports for business leaders across the globe.
              </p>
              <button className="w-fit px-10 py-4 border border-white hover:bg-white hover:text-randstad-navy transition-all text-[15px] font-medium">
                subscribe
              </button>
            </div>
          </div>
        </section>

        {/* Unlock More Insights */}
        <section className="bg-white py-24">
          <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
            <h2 className="text-5xl font-normal text-randstad-navy mb-16">unlock more insights on employee motivation in finance</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { title: "employee motivation in finance: what does an engaged team look like?", img: "https://picsum.photos/seed/insight1/400/600" },
                { title: "5 key stats that every finance team leader should know.", img: "https://picsum.photos/seed/insight2/400/600" },
                { title: "key strategies to keep your finance team motivated and engaged.", img: "https://picsum.photos/seed/insight3/400/600" },
                { title: "implementation plan for employee motivation strategies.", img: "https://picsum.photos/seed/insight4/400/600" }
              ].map((item, i) => (
                <div key={i} className="relative aspect-[2/3] rounded-xl overflow-hidden group cursor-pointer">
                  <img src={item.img} alt={item.title} className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" referrerPolicy="no-referrer" />
                  <div className="absolute inset-0 bg-gradient-to-t from-randstad-navy/90 via-randstad-navy/20 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 p-8">
                    <h3 className="text-xl font-medium text-white leading-snug">{item.title}</h3>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <Banner text="contact us to start a conversation about your talent needs." buttonText="let's meet" />
      </main>

      <Footer />

      {/* Floating Action Buttons */}
      <div className="fixed bottom-6 right-6 flex flex-col gap-4 z-40">
        <div className="w-14 h-14 bg-randstad-blue text-white rounded-full flex items-center justify-center shadow-lg cursor-pointer hover:scale-110 transition-transform">
          <MessageSquare size={24} />
        </div>
      </div>
      
      <div className="fixed bottom-6 left-6 z-40">
        <div className="w-10 h-10 bg-randstad-blue text-white rounded-full flex items-center justify-center shadow-lg cursor-pointer">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z"/>
          </svg>
        </div>
      </div>
    </div>
  );
}
