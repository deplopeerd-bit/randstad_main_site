import React from "react";
import { ArrowRight, ChevronDown, Facebook, Heart, Instagram, Linkedin, MessageSquare, Search, Twitter, User, Youtube } from "lucide-react";

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */


const Header = () => {
  return (
    <header className="bg-white border-b border-gray-100 sticky top-0 z-50">
      <div className="container-custom py-4 flex items-center justify-between">
        <div className="flex items-center gap-12">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-randstad-blue rounded-sm flex items-center justify-center">
               <span className="text-white font-bold text-xl">r</span>
            </div>
            <span className="text-randstad-blue font-bold text-2xl tracking-tighter">randstad</span>
          </div>
          
          <nav className="hidden lg:flex items-center gap-8">
            {['find a job', 'for talent', 'for employer', 'resources', 'about us'].map((item) => (
              <div key={item} className="flex items-center gap-1 cursor-pointer group">
                <span className="text-navy font-medium text-sm lowercase">{item}</span>
                <ChevronDown size={14} className="text-navy opacity-50 group-hover:opacity-100" />
              </div>
            ))}
          </nav>
        </div>

        <div className="flex items-center gap-6">
          <a href="#" className="text-navy text-xs font-medium border-b border-navy pb-0.5">contact us</a>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-1 cursor-pointer">
              <Heart size={20} className="text-navy" strokeWidth={1.5} />
              <span className="text-navy text-sm font-medium">0</span>
            </div>
            <div className="flex items-center gap-2 cursor-pointer">
              <User size={20} className="text-navy" strokeWidth={1.5} />
              <span className="text-navy text-sm font-medium">my randstad</span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

const Hero = () => {
  return (
    <section className="bg-navy text-white section-padding overflow-hidden relative">
      <div className="container-custom relative z-10">
        <div className="max-w-3xl">
          <nav className="flex items-center gap-2 text-xs opacity-60 mb-12 lowercase">
            <span>home</span>
            <span>&gt;</span>
            <span>employers</span>
            <span>&gt;</span>
            <span>industries</span>
            <span>&gt;</span>
            <span>hr & support</span>
          </nav>
          
          <h1 className="text-6xl md:text-7xl font-bold mb-8 leading-[1.1]">
            a partner for talent in HR and support roles.
          </h1>
          
          <p className="text-lg opacity-90 mb-12 max-w-2xl leading-relaxed">
            Find in-demand, professional talent — when you need it. By offering a comprehensive set of solutions, backed by our innovative technologies and global footprint, with deep insights into market dynamics, a vast pool of pre-screened candidates, and specialized recruiting and talent management processes, we'll help you fill crucial roles in Legal, Admin, Office, Surveillance, Drivers etc. to bolster growth and agility.
          </p>
          
          <button className="btn-outline">get in touch</button>
        </div>
      </div>
      
      {/* Abstract Graphic */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 hidden lg:block">
        <div className="relative flex items-center">
          <div className="w-[600px] h-[1px] bg-white/20 absolute right-0"></div>
          <div className="flex items-center gap-4 relative z-10 pr-24">
            <div className="w-12 h-12 rounded-full bg-randstad-purple"></div>
            <div className="w-24 h-24 rounded-full bg-white/20 border border-white/30"></div>
            <div className="w-64 h-64 rounded-full border-4 border-randstad-purple flex items-center justify-center">
              <div className="w-56 h-56 rounded-full bg-navy border border-white/10"></div>
            </div>
            <div className="w-20 h-20 rounded-full bg-randstad-purple"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

const ContentSection = ({ title, text, image, reverse = false, bgColor = "bg-white", textColor = "text-navy" }) => {
  return (
    <section className={`${bgColor} ${textColor}`}>
      <div className={`flex flex-col ${reverse ? 'md:flex-row-reverse' : 'md:flex-row'}`}>
        <div className="w-full md:w-1/2 h-[400px] md:h-auto">
          <img src={image} alt={title} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
        </div>
        <div className="w-full md:w-1/2 flex items-center">
          <div className={`p-12 md:p-24 max-w-2xl ${reverse ? 'mr-auto' : 'ml-auto'}`}>
            <h2 className="text-5xl font-bold mb-8 leading-tight">{title}</h2>
            <p className="text-lg leading-relaxed opacity-90">{text}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

const AccordionSection = () => {
  const roles = [
    { title: "see all roles in HR.", items: ["HR Manager", "Recruitment Specialist", "L&D Coordinator"] },
    { title: "see all roles in administration.", items: ["Office Manager", "Executive Assistant", "Data Entry"] },
    { title: "see all roles in legal.", items: ["Legal Counsel", "Paralegal", "Compliance Officer"] }
  ];

  return (
    <section className="bg-white section-padding">
      <div className="container-custom flex flex-col md:flex-row gap-12">
        <div className="md:w-1/3">
          <h2 className="text-4xl font-bold leading-tight">we help you find exceptional talent for a wide range of roles.</h2>
        </div>
        <div className="md:w-2/3">
          {roles.map((role, idx) => (
            <div key={idx} className="border-b border-navy/20 py-6 flex items-center justify-between cursor-pointer group">
              <span className="text-2xl font-medium lowercase">{role.title}</span>
              <ChevronDown className="text-randstad-blue group-hover:translate-y-1 transition-transform" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const ProblemSolveSection = () => {
  return (
    <section className="bg-navy text-white">
      <div className="flex flex-col md:flex-row">
        <div className="w-full md:w-1/2 p-12 md:p-24">
          <h2 className="text-5xl font-bold mb-12">the problem we are trying to solve.</h2>
          <ul className="space-y-8 text-lg opacity-90">
            <li>Help clients to hire TA profiles in high volume sectors in onsite or contractual or permanent mode</li>
            <li>Hire niche roles (such as C&B, OD, Data Analytics etc.,) within HR on permanent mode for clients</li>
            <li>Help clients to manage roles such as drivers, office support, receptionist, secretary, surveillance etc. by payrolling them in a compliant fashion</li>
            <li>Randstad will also redeploy these resources across different clients of Randstad over a period of time, thereby addressing the glass ceiling and career aspiration aspect of these resources</li>
          </ul>
        </div>
        <div className="w-full md:w-1/2 relative min-h-[500px]">
          <img src="https://picsum.photos/seed/solve/1000/1000" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
          <div className="absolute inset-0 flex items-center justify-center">
             <div className="w-64 h-64 rounded-full bg-randstad-purple/80 mix-blend-multiply"></div>
             <div className="w-96 h-96 rounded-full border border-white/20 absolute"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

const SetsUsApart = () => {
  return (
    <section className="bg-offwhite section-padding">
      <div className="container-custom flex flex-col md:flex-row items-center gap-16">
        <div className="md:w-1/2">
          <h2 className="text-5xl font-bold mb-8">what sets us apart.</h2>
          <ul className="space-y-6 text-lg list-disc pl-5 opacity-90">
            <li>Our commitment to delivering quick results with well-assessed profiles ensuring that you have access to top talent promptly.</li>
            <li>Through our extensive internal talent pool, we can connect you with immediately available candidates who can join on shorter notice periods.</li>
            <li>But that's not all! In addition to our robust talent acquisition services, we offer a comprehensive suite of additional services to support your organization's growth and success.</li>
          </ul>
        </div>
        <div className="md:w-1/2 flex items-center justify-center">
          <div className="relative flex items-center">
            <div className="w-[500px] h-[1px] bg-navy/10 absolute"></div>
            <div className="flex items-center gap-4 relative z-10">
              <div className="w-8 h-8 rounded-full bg-randstad-purple"></div>
              <div className="w-16 h-16 rounded-full bg-randstad-purple/40"></div>
              <div className="w-32 h-32 rounded-full bg-randstad-purple"></div>
              <div className="w-20 h-20 rounded-full bg-randstad-purple"></div>
              <div className="w-6 h-6 rounded-full bg-navy"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const CTASection = ({ title, buttonText, bgColor = "bg-navy" }) => {
  return (
    <section className={`${bgColor} text-white py-20`}>
      <div className="container-custom flex flex-col md:flex-row items-center justify-between gap-8">
        <h2 className="text-5xl font-bold max-w-2xl leading-tight">{title}</h2>
        <button className="btn-outline whitespace-nowrap">{buttonText}</button>
      </div>
    </section>
  );
};

const InsightsSection = () => {
  const insights = [
    { title: "the employee life cycle: from hire to retire.", image: "https://picsum.photos/seed/insight1/600/800" },
    { title: "the key to improving your employee experience.", image: "https://picsum.photos/seed/insight2/600/800" },
    { title: "the employee life cycle: from hire to retire.", image: "https://picsum.photos/seed/insight3/600/800" },
    { title: "map out your employee experience.", image: "https://picsum.photos/seed/insight4/600/800" }
  ];

  return (
    <section className="bg-offwhite section-padding">
      <div className="container-custom">
        <h2 className="text-4xl font-bold mb-12">unlock more insights.</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {insights.map((insight, idx) => (
            <div key={idx} className="relative h-[450px] rounded-xl overflow-hidden group cursor-pointer">
              <img src={insight.image} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" referrerPolicy="no-referrer" />
              <div className="absolute inset-0 bg-gradient-to-t from-navy/80 to-transparent flex items-end p-8">
                <h3 className="text-white text-xl font-bold leading-tight">{insight.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const WorkforceInsights = () => {
  return (
    <section className="bg-offwhite">
      <div className="flex flex-col md:flex-row">
        <div className="w-full md:w-1/2 p-12 md:p-24">
          <h2 className="text-5xl font-bold mb-8">workforce insights delivered to your inbox.</h2>
          <p className="text-lg opacity-90 mb-12 leading-relaxed">
            Want to reduce your turnover rate, improve your company culture, or be inspired on improving employability for young people? Sign up to the monthly workforce insights newsletter and stay up to date with the latest recruitment and labor market news, tips, trends and reports for business leaders across the globe.
          </p>
          <button className="border border-navy px-10 py-3 font-medium hover:bg-navy hover:text-white transition-colors lowercase">subscribe</button>
        </div>
        <div className="w-full md:w-1/2 relative min-h-[500px]">
          <img src="https://picsum.photos/seed/inbox/1000/1000" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
          <div className="absolute inset-0 flex items-center justify-center">
             <div className="w-80 h-80 rounded-full border-8 border-randstad-purple/60"></div>
             <div className="w-64 h-64 rounded-full bg-randstad-purple/20 absolute"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

const LocationSection = () => {
  return (
    <section className="bg-offwhite section-padding">
      <div className="container-custom flex flex-col md:flex-row items-center justify-between gap-12">
        <div className="md:w-1/2">
          <h2 className="text-6xl font-bold mb-12">find your nearest location.</h2>
          <div className="flex max-w-md">
            <input 
              type="text" 
              placeholder="postcode / city" 
              className="flex-1 bg-white border border-gray-200 px-6 py-4 text-lg focus:outline-none focus:border-randstad-blue"
            />
            <button className="btn-blue px-6">
              <ArrowRight size={24} />
            </button>
          </div>
        </div>
        <div className="md:w-1/2 flex justify-center">
          <div className="relative">
            <div className="w-32 h-32 rounded-full border border-randstad-blue/20 absolute -top-8 -left-8"></div>
            <div className="w-48 h-48 rounded-full border border-randstad-blue/10 absolute -bottom-12 -right-12"></div>
            <div className="flex flex-col gap-4 relative z-10">
               <div className="flex gap-4">
                  <div className="w-16 h-16 rounded-full border-4 border-randstad-blue/30"></div>
                  <div className="w-24 h-24 rounded-full border-4 border-randstad-blue"></div>
               </div>
               <div className="w-32 h-32 rounded-full border-4 border-randstad-blue/50 ml-12"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  const columns = [
    { title: "find a job", items: ["explore all jobs", "submit your cv", "join our team", "refer a friend"] },
    { title: "for talent", items: ["specialisms", "testimonials", "career advice", "beware of job scams"] },
    { title: "for employers", items: ["submit a vacancy", "request a callback", "our services", "specialisms", "case studies", "testimonials"] },
    { title: "resources", items: ["case studies", "press room", "blogs"] },
    { title: "workforce insights", items: ["talent insights reports", "employer brand research reports", "salary trends reports", "ed&i reports", "workmonitor reports", "startup hiring trends", "talent pulse surveys"] },
    { title: "jobs", items: ["engineering jobs", "cxo jobs", "manufacturing jobs", "supply chain & logistics jobs", "education jobs", "finance & accounting jobs", "healthcare jobs", "hr & admin support jobs", "ites/gcc jobs", "legal & compliance jobs", "sales & marketing jobs"] }
  ];

  return (
    <footer className="bg-navy text-white pt-24 pb-12">
      <div className="container-custom">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-12 mb-24">
          {columns.map((col, idx) => (
            <div key={idx}>
              <h4 className="font-bold mb-6 lowercase">{col.title}</h4>
              <ul className="space-y-3 opacity-70 text-sm lowercase">
                {col.items.map((item, i) => (
                  <li key={i} className="hover:opacity-100 cursor-pointer transition-opacity">{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-white/10 pt-12 mb-12 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex items-center gap-6">
            <Linkedin size={20} className="opacity-60 hover:opacity-100 cursor-pointer" />
            <Twitter size={20} className="opacity-60 hover:opacity-100 cursor-pointer" />
            <Facebook size={20} className="opacity-60 hover:opacity-100 cursor-pointer" />
            <Youtube size={20} className="opacity-60 hover:opacity-100 cursor-pointer" />
            <Instagram size={20} className="opacity-60 hover:opacity-100 cursor-pointer" />
          </div>
          <div className="text-[10px] opacity-40 text-center md:text-right max-w-xl">
            registered office: Randstad India Private Limited, CIN U74210TN1992PTC023097,/Randstad House, Old No. 5 & 5A, New No. 9, Pycrofts Garden Road, Nungambakkam, Chennai, TN - 600 006
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between gap-8 mb-12">
          <div className="flex items-center gap-2">
            <span className="text-randstad-blue font-bold text-xl tracking-tighter">randstad</span>
            <div className="w-1 h-4 bg-randstad-blue"></div>
            <span className="text-[10px] opacity-60 uppercase tracking-widest">human forward</span>
          </div>
          <div className="text-[10px] opacity-40">
            RANDSTAD, HUMAN FORWARD and SHAPING THE WORLD OF WORK are registered trademarks of © Randstad N.V.2023
          </div>
        </div>

        <div className="space-y-6 text-xs opacity-60 mb-12">
          <p>Security Advice: Randstad India does not charge any fee at any stage of its recruitment process from the candidate nor allows their employees to collect any fees from any candidates. <a href="#" className="underline">Click here to know more</a></p>
          <p>EEO Statement: Randstad India is an Equal Employment Opportunity Employer. All qualified applicants receive consideration for employment without regard to race, color, religion, sex, sexual orientation, gender identity or expression, appearance, national origin, age, marital status, veteran status, or disability status, or any other characteristics. Our global mission is to become the world’s most equitable and specialized talent company, and we actively embrace diversity and inclusion as the cornerstones of our success. To read more of Randstad India’s work in the space of equity, diversity and inclusion please <a href="#" className="underline">click here</a></p>
        </div>

        <div className="flex flex-wrap items-center gap-x-8 gap-y-4 text-xs opacity-60 lowercase">
          {['terms & conditions', 'cookies', 'misconduct reporting procedure', 'accessibility', 'be aware', 'sitemap', 'privacy statement'].map(item => (
            <a key={item} href="#" className="hover:underline">{item}</a>
          ))}
        </div>
      </div>

      {/* Floating Buttons */}
      <div className="fixed bottom-6 right-6 flex flex-col gap-4 z-50">
        <div className="w-14 h-14 bg-randstad-blue rounded-full flex items-center justify-center text-white shadow-xl cursor-pointer hover:scale-110 transition-transform">
          <MessageSquare size={24} />
        </div>
      </div>
      <div className="fixed right-0 top-1/2 -translate-y-1/2 z-50">
        <div className="bg-randstad-blue text-white py-4 px-2 rounded-l-md cursor-pointer hover:pr-4 transition-all flex flex-col items-center gap-2">
          <span className="[writing-mode:vertical-lr] rotate-180 text-xs font-bold tracking-widest uppercase">feedback</span>
        </div>
      </div>
    </footer>
  );
};

export default function HrSupport() {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      
      <ContentSection 
        title="the right level of support."
        text="Who better to help you source and hire exceptional people than an organization that's all about people? We'll find the right candidates for key HR & support jobs (Legal, Admin, Office, Surveillance, Drivers etc.) whose experience, adaptability and enthusiasm will bring the right balance of skill and personality to your workplace."
        image="https://picsum.photos/seed/support/800/600"
      />
      
      <ContentSection 
        title="experienced specialists in recruitment."
        text="We specialize in sourcing top-performing HR & support candidates. We'll work with you to understand your requirements and the level of support you need, ensuring a good match from the start."
        image="https://picsum.photos/seed/specialists/800/600"
        reverse={true}
        bgColor="bg-navy"
        textColor="text-white"
      />
      
      <AccordionSection />
      
      <ProblemSolveSection />
      
      <ContentSection 
        title="navigating a varying landscape."
        text="HR & support involves a wide range of tasks and duties, and the right experience and qualifications are vital. We work proactively to assess and interview candidates, maintaining a pool of talent that can quickly respond to your requirements."
        image="https://picsum.photos/seed/landscape/800/600"
        reverse={true}
        bgColor="bg-navy"
        textColor="text-white"
      />
      
      <SetsUsApart />
      
      <CTASection 
        title="contact us to start a conversation about your talent needs."
        buttonText="let's meet"
      />
      
      <ContentSection 
        title="hr and support recruitment solutions."
        text="Our human resource and support roles recruitment solutions help leading global organizations to take on complex business and talent challenges. When you choose Randstad, you choose excellence in your recruitment function. Combining the latest technology with human insight, we help your organization identify the right talent from our wide pool of skilled professionals. Scale new heights of success with passionate and driven HR & support placement consultants."
        image="https://picsum.photos/seed/solutions/800/600"
      />
      
      <WorkforceInsights />
      
      <CTASection 
        title="looking for the future ready talent?"
        buttonText="speak to us"
      />
      
      <LocationSection />
      
      <InsightsSection />
      
      <Footer />
    </div>
  );
}

