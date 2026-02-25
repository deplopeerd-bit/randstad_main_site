import { ChevronDown, Facebook, Heart, Instagram, Linkedin, Search, Twitter, User, Youtube } from "lucide-react";

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */



export default function EmpTalentTransition() {




 const Hero = () => {
  return (
    <section className="bg-randstad-navy text-white overflow-hidden relative min-h-[600px] flex items-center">
      <div className="container-custom grid lg:grid-cols-2 items-center gap-12 py-20">
        <div className="z-10">
          <div className="flex items-center gap-2 text-xs text-gray-400 mb-8">
            <span>home</span>
            <span>&gt;</span>
            <span>employers</span>
            <span>&gt;</span>
            <span>our services</span>
            <span>&gt;</span>
            <span className="text-white">enterprise</span>
          </div>
          <h1 className="text-6xl md:text-7xl font-semibold mb-8 tracking-tight">
            randstad enterprise.
          </h1>
          <p className="text-xl leading-relaxed mb-12 max-w-xl text-gray-200">
            Delivering complex, large-scale talent advisory, acquisition, development and transition solutions, Randstad Enterprise empowers you to unlock what's at the heart of your business success — your people.
          </p>
          <button className="px-8 py-4 border border-white text-white font-medium hover:bg-white hover:text-randstad-navy transition-colors">
            explore our solutions
          </button>
        </div>
        <div className="relative h-full min-h-[500px] lg:min-h-0">
          <img 
            src="https://picsum.photos/seed/randstad-hero/800/800" 
            alt="Randstad Enterprise" 
            className="absolute right-0 top-1/2 -translate-y-1/2 w-[120%] max-w-none object-cover rounded-full aspect-square"
            referrerPolicy="no-referrer"
          />
          <div className="absolute top-1/2 left-0 -translate-y-1/2 w-64 h-64 border-[20px] border-randstad-lime rounded-full opacity-80 -translate-x-1/2"></div>
        </div>
      </div>
    </section>
  );
};

const SolutionsGrid = () => {
  const solutions = [
    { title: 'talent acquisition', icon: 'acquisition' },
    { title: 'talent development', icon: 'development' },
    { title: 'talent transition', icon: 'transition' },
    { title: 'advisory', icon: 'advisory' },
  ];

  return (
    <section className="py-24 bg-white">
      <div className="container-custom">
        <h2 className="text-4xl font-semibold mb-16">explore global talent solutions</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {solutions.map((sol) => (
            <div key={sol.title} className="bg-randstad-navy p-12 aspect-[3/4] flex flex-col justify-between group cursor-pointer hover:bg-randstad-blue transition-colors">
              <div className="w-24 h-24 border-2 border-randstad-lime flex items-center justify-center relative">
                {/* Mock icons based on screenshots */}
                <div className="w-12 h-12 border-2 border-white opacity-50 absolute -top-2 -left-2"></div>
                <div className="w-8 h-8 border-2 border-randstad-lime"></div>
              </div>
              <h3 className="text-2xl font-medium text-white leading-tight">{sol.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const SplitSection = ({ title, description, image, reverse = false, accordionItems = [], buttonText = "learn more" }) => {
  return (
    <div className="bg-white">
      <section className={`flex flex-col ${reverse ? 'lg:flex-row-reverse' : 'lg:flex-row'} min-h-[600px]`}>
        <div className="lg:w-1/2 bg-randstad-navy text-white p-12 lg:p-24 flex flex-col justify-center">
          <div className="max-w-xl mx-auto lg:mx-0">
            <h2 className="text-5xl font-semibold mb-8 tracking-tight">{title}</h2>
            <p className="text-lg leading-relaxed mb-12 text-gray-300">{description}</p>
            {buttonText && (
              <button className="w-fit px-8 py-4 border border-white text-white font-medium hover:bg-white hover:text-randstad-navy transition-colors">
                {buttonText}
              </button>
            )}
          </div>
        </div>
        <div className="lg:w-1/2 relative overflow-hidden bg-gray-100">
          <img 
            src={image} 
            alt={title} 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] border border-white/20 rounded-full"></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[40%] h-[40%] border-[15px] border-randstad-lime/80 rounded-full"></div>
        </div>
      </section>
      
      {accordionItems.length > 0 && (
        <section className="py-20 bg-white">
          <div className="container-custom grid lg:grid-cols-3 gap-12">
            <div className="lg:col-span-1">
              <h3 className="text-2xl font-medium text-randstad-navy">{title} solutions</h3>
            </div>
            <div className="lg:col-span-2">
              {accordionItems.map((item, idx) => (
                <div key={idx} className="border-b border-gray-200 py-6 flex items-center justify-between group cursor-pointer">
                  <span className="text-2xl text-gray-800 group-hover:text-randstad-blue transition-colors">{item}</span>
                  <ChevronDown className="text-randstad-blue" />
                </div>
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
};

 const IgniteSection = () => {
  const items = [
    { title: 'talent intelligence', content: 'With advanced expertise in talent intelligence; people experience; diversity, equity and inclusion (DEI); and digital strategy, Randstad Enterprise advisory services provide audits, reviews and a plan to optimize your talent strategies. We help you unlock the power of your workforce and Human Potential to help your business succeed in any market condition.' },
    { title: 'technology' },
    { title: 'talent marketing' },
    { title: 'diversity, equity & inclusion' },
  ];

  return (
    <section className="py-24 bg-white border-t border-gray-100">
      <div className="container-custom grid lg:grid-cols-3 gap-16">
        <div className="lg:col-span-1">
          <h2 className="text-3xl font-medium leading-tight">ignite the power of your talent.</h2>
        </div>
        <div className="lg:col-span-2">
          {items.map((item, idx) => (
            <div key={idx} className="border-b border-gray-200 py-8 first:pt-0">
              <div className="flex items-center justify-between mb-4 cursor-pointer group">
                <h3 className="text-2xl text-gray-800 group-hover:text-randstad-blue transition-colors">{item.title}</h3>
                <ChevronDown className={`text-randstad-blue ${idx === 0 ? 'rotate-180' : ''}`} />
              </div>
              {item.content && (
                <p className="text-lg text-gray-600 leading-relaxed max-w-3xl">
                  {item.content}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

 const ReadyToPartner = () => {
  return (
    <section className="py-32 bg-gray-50">
      <div className="container-custom flex flex-col lg:flex-row items-center justify-between gap-12">
        <h2 className="text-6xl font-semibold tracking-tight max-w-2xl">
          ready to partner with randstad enterprise?
        </h2>
        <button className="px-12 py-5 border border-randstad-navy text-randstad-navy font-medium hover:bg-randstad-navy hover:text-white transition-colors whitespace-nowrap">
          contact us
        </button>
      </div>
    </section>
  );
};

 const AboutSection = () => {
  return (
    <section className="py-24 bg-white">
      <div className="container-custom grid lg:grid-cols-2 gap-20 items-start">
        <div>
          <h2 className="text-6xl font-semibold mb-12 tracking-tight">about randstad enterprise</h2>
          <p className="text-xl text-gray-700 leading-relaxed mb-8">
            As the leading global talent solutions provider, we enable companies to create sustainable business value and agility by keeping people at the heart of their organizations.
          </p>
          <p className="text-xl text-gray-700 leading-relaxed mb-12">
            We are uniquely positioned to support the world's leading enterprises with the inflow, crossflow and outflow of all talent through Randstad Sourceright and Randstad RiseSmart.
          </p>
          <button className="px-8 py-4 border border-randstad-blue text-randstad-blue font-medium hover:bg-randstad-blue hover:text-white transition-colors">
            more information
          </button>
        </div>
        <div className="flex flex-wrap gap-12 items-center justify-center lg:justify-start pt-12">
          <div className="flex flex-col items-center gap-4">
            <svg width="120" height="60" viewBox="0 0 120 60" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M10 20C10 14.4772 14.4772 10 20 10H30V20H10Z" fill="#0070ad"/>
              <path d="M10 40V50H20C25.5228 50 30 45.5228 30 40H10Z" fill="#0070ad"/>
              <path d="M0 20H10V40H0V20Z" fill="#0070ad"/>
            </svg>
            <span className="text-randstad-blue font-bold text-xl">randstad sourceright</span>
          </div>
          <div className="flex flex-col items-center gap-4">
            <svg width="120" height="60" viewBox="0 0 120 60" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M10 20C10 14.4772 14.4772 10 20 10H30V20H10Z" fill="#0070ad"/>
              <path d="M10 40V50H20C25.5228 50 30 45.5228 30 40H10Z" fill="#0070ad"/>
              <path d="M0 20H10V40H0V20Z" fill="#0070ad"/>
            </svg>
            <span className="text-randstad-blue font-bold text-xl">randstad risesmart</span>
          </div>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  const columns = [
    {
      title: 'find a job',
      links: ['explore all jobs', 'submit your cv', 'join our team', 'refer a friend']
    },
    {
      title: 'for employers',
      links: ['submit a vacancy', 'request a callback', 'our services', 'specialisms', 'case studies', 'testimonials']
    },
    {
      title: 'workforce insights',
      links: ['talent insights reports', 'employer brand research reports', 'salary trends reports', 'ed&i reports', 'workmonitor reports', 'startup hiring trends', 'talent pulse surveys']
    },
    {
      title: 'jobs',
      links: ['engineering jobs', 'cxo jobs', 'manufacturing jobs', 'supply chain & logistics jobs', 'education jobs', 'finance & accounting jobs', 'healthcare jobs', 'hr & admin support jobs', 'ites/gcc jobs', 'legal & compliance jobs', 'sales & marketing jobs']
    },
    {
      title: 'for talents',
      links: ['specialisms', 'testimonials', 'career advice', 'beware of job scams']
    },
    {
      title: 'resources',
      links: ['case studies', 'press room', 'blogs']
    }
  ];


};




  return (
    <div className="min-h-screen bg-white">
    
      <main>
        <Hero />
        
        <SolutionsGrid />

        <SplitSection 
          title="talent acquisition."
          description="Solve your complex hiring challenges with talent acquisition solutions delivered by Randstad Sourceright. Do you need to find people with high-demand skills, staff up to support a new project, or get an outside perspective to transform recruitment? Our technology-driven, scalable models will help you attract, source, screen, hire and onboard the right people, while creating efficiencies and delivering an exceptional experience."
          image="https://picsum.photos/seed/talent-acq/1200/800"
          accordionItems={['recruitment process outsourcing (RPO)', 'managed services programs (MSP)', 'services procurement and SOW management']}
        />

        <SplitSection 
          title="talent development."
          description="Elevate your employee experience with talent development solutions delivered by Randstad RiseSmart. Scalable, flexible and affordable talent development offerings help you unlock the potential of your people — and your organization."
          image="https://picsum.photos/seed/talent-dev/1200/800"
          reverse={true}
          accordionItems={['career coaching']}
        />

        <SplitSection 
          title="talent transition."
          description="Manage layoffs seamlessly with Randstad RiseSmart’s industry-leading outplacement and redeployment solutions. Help employees smoothly transition in their career journeys — and keep those who stay motivated."
          image="https://picsum.photos/seed/talent-trans/1200/800"
          accordionItems={['outplacement', 'redeployment', 'pre-change support']}
        />

        <SplitSection 
          title="advisory."
          description="Find your competitive talent edge. Randstad advisory services provide you with an independent, outside-in review and analysis of your talent strategy to drive enterprise workforce agility."
          image="https://picsum.photos/seed/advisory/1200/800"
          reverse={true}
          buttonText="learn more about advisory"
        />

        <IgniteSection />

        <ReadyToPartner />

        <SplitSection 
          title="see our latest insights."
          description="Check out the latest talent strategy research, news and case studies for employers in India."
          image="https://picsum.photos/seed/insights/1200/800"
          buttonText="read now"
        />

        <AboutSection />
      </main>
      <Footer />
      
      {/* Floating Feedback Button */}
      <div className="fixed right-0 top-1/2 -translate-y-1/2 z-40">
        <div className="bg-randstad-blue text-white py-4 px-2 rounded-l-md cursor-pointer hover:bg-randstad-navy transition-colors [writing-mode:vertical-rl] text-xs font-medium tracking-widest">
          FEEDBACK
        </div>
      </div>

      {/* Cookie Consent Floating Icon */}
      <div className="fixed bottom-6 left-6 z-40">
        <div className="w-12 h-12 bg-randstad-blue text-white rounded-full flex items-center justify-center shadow-lg cursor-pointer hover:scale-110 transition-transform">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 20C7.59 20 4 16.41 4 12C4 7.59 7.59 4 12 4C16.41 4 20 7.59 20 12C20 16.41 16.41 20 12 20Z" fill="currentColor"/>
            <circle cx="12" cy="12" r="3" fill="currentColor"/>
          </svg>
        </div>
      </div>
    </div>
  );
}



