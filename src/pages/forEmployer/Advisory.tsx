import React from "react";

import { 
  Search, 
  Heart, 
  User, 
  ChevronDown, 
  Linkedin, 
  Twitter, 
  Facebook, 
  Youtube, 
  Instagram 
} from 'lucide-react';

// --- Components ---

function Header() {
  return (
    <header className="w-full bg-white border-b border-gray-100 sticky top-0 z-50">
      <div className="container-custom py-4 flex items-center justify-between">
        <div className="flex items-center gap-12">
          <div className="flex items-center">
            {/* Randstad Logo Placeholder */}
            <div className="flex items-center gap-1">
              <div className="w-8 h-8 flex flex-col justify-center items-center">
                <div className="w-6 h-1.5 bg-randstad-blue rounded-full mb-0.5 transform -rotate-45 translate-y-1"></div>
                <div className="w-6 h-1.5 bg-randstad-blue rounded-full mt-0.5 transform rotate-45 -translate-y-1"></div>
              </div>
              <span className="text-2xl font-bold tracking-tighter text-randstad-blue">randstad</span>
            </div>
          </div>

          <nav className="hidden lg:flex items-center gap-8">
            {['find a job', 'for talent', 'for employer', 'resources', 'about us'].map((item) => (
              <button key={item} className="flex items-center gap-1 text-sm font-medium hover:text-randstad-blue transition-colors">
                {item}
                <ChevronDown size={14} />
              </button>
            ))}
          </nav>
        </div>

        <div className="flex items-center gap-6">
          <button className="text-xs font-medium text-randstad-blue underline uppercase tracking-wider">contact us</button>
          <div className="flex items-center gap-4 text-randstad-navy">
            <button className="hover:text-randstad-blue transition-colors"><Heart size={20} /></button>
            <button className="flex items-center gap-2 hover:text-randstad-blue transition-colors">
              <User size={20} />
              <span className="text-sm font-medium hidden md:inline">my randstad</span>
            </button>
            <button className="hover:text-randstad-blue transition-colors"><Search size={20} /></button>
          </div>
        </div>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section className="relative w-full bg-randstad-navy overflow-hidden min-h-[600px] flex items-center">
      <div className="container-custom relative z-10 grid lg:grid-cols-2 gap-12 items-center">
        <div className="text-white max-w-xl">
          <nav className="flex items-center gap-2 text-xs mb-8 opacity-70">
            <span>home</span>
            <span>›</span>
            <span>employers</span>
            <span>›</span>
            <span>our services</span>
            <span>›</span>
            <span className="font-semibold">enterprise</span>
          </nav>
          
          <h1 className="text-5xl md:text-6xl font-medium leading-[1.1] mb-8">
            randstad enterprise.
          </h1>
          
          <p className="text-lg md:text-xl leading-relaxed mb-10 opacity-90">
            Delivering complex, large-scale talent advisory, acquisition, development and transition solutions, Randstad Enterprise empowers you to unlock what's at the heart of your business success — your people.
          </p>
          
          <button className="btn-outline text-white border-white hover:bg-white hover:text-randstad-navy">
            explore our solutions
          </button>
        </div>

        <div className="relative hidden lg:block">
          {/* Decorative circles */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px]">
            <div className="absolute inset-0 border-[40px] border-randstad-accent/20 rounded-full"></div>
            <div className="absolute inset-10 border-[1px] border-white/20 rounded-full"></div>
            <div className="absolute inset-20 border-[1px] border-white/10 rounded-full"></div>
          </div>
          
          <img 
            src="https://picsum.photos/seed/randstad-hero/800/800" 
            alt="Randstad Professional" 
            className="relative z-10 w-full h-auto rounded-full aspect-square object-cover grayscale-[0.2]"
            referrerPolicy="no-referrer"
          />
        </div>
      </div>
      
      {/* Background accent */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-blue-900/20 to-transparent"></div>
    </section>
  );
}

const solutions = [
  {
    title: 'talent acquisition',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-12 h-12 text-randstad-accent">
        <rect x="3" y="11" width="6" height="6" />
        <path d="M12 3l9 9-9 9" />
        <path d="M12 12h9" />
      </svg>
    )
  },
  {
    title: 'talent development',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-12 h-12 text-randstad-accent">
        <rect x="4" y="4" width="10" height="10" />
        <path d="M14 14l6 6" />
        <path d="M20 14v6h-6" />
      </svg>
    )
  },
  {
    title: 'talent transition',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-12 h-12 text-randstad-accent">
        <path d="M4 12h16" />
        <path d="M14 6l6 6-6 6" />
        <path d="M10 18l-6-6 6-6" />
      </svg>
    )
  },
  {
    title: 'advisory',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-12 h-12 text-randstad-accent">
        <path d="M4 4h16v16H4z" />
        <path d="M8 8h8v8H8z" />
        <path d="M12 4v16" />
        <path d="M4 12h16" />
      </svg>
    )
  }
];

function TalentSolutions() {
  return (
    <section className="py-24 bg-white">
      <div className="container-custom">
        <h2 className="text-4xl font-medium mb-16">explore global talent solutions</h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {solutions.map((solution) => (
            <div 
              key={solution.title}
              className="bg-randstad-navy p-10 aspect-[4/5] flex flex-col justify-between group cursor-pointer hover:bg-randstad-navy/95 transition-all"
            >
              <div className="transform group-hover:scale-110 transition-transform duration-500">
                {solution.icon}
              </div>
              <h3 className="text-white text-2xl font-medium leading-tight">
                {solution.title}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

interface SolutionSectionProps {
  id: string;
  title: string;
  description: string;
  image: string;
  reverse?: boolean;
}

function SolutionSection({ id, title, description, image, reverse = false }: SolutionSectionProps) {
  return (
    <section id={id} className="w-full">
      <div className={`flex flex-col lg:flex-row ${reverse ? 'lg:flex-row-reverse' : ''}`}>
        {/* Content Side */}
        <div className="w-full lg:w-1/2 bg-randstad-navy text-white p-12 md:p-20 lg:p-32 flex flex-col justify-center">
          <h2 className="text-5xl font-medium mb-8 leading-tight">{title}</h2>
          <p className="text-lg leading-relaxed opacity-90 mb-0">
            {description}
          </p>
        </div>
        
        {/* Image Side */}
        <div className="w-full lg:w-1/2 relative min-h-[400px] lg:min-h-0">
          <img 
            src={image} 
            alt={title} 
            className="absolute inset-0 w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          {/* Decorative overlay circles */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div className="w-2/3 h-2/3 border border-white/20 rounded-full"></div>
            <div className="absolute w-1/2 h-1/2 border border-randstad-accent/30 rounded-full"></div>
            {/* Accent dots */}
            <div className="absolute top-1/4 right-1/4 w-4 h-4 bg-randstad-accent rounded-full shadow-[0_0_20px_rgba(212,255,0,0.5)]"></div>
            <div className="absolute bottom-1/3 left-1/4 w-3 h-3 bg-randstad-accent rounded-full opacity-60"></div>
          </div>
        </div>
      </div>
    </section>
  );
}

interface AccordionListProps {
  category: string;
  items: string[];
}

function AccordionList({ category, items }: AccordionListProps) {
  return (
    <section className="py-24 bg-white">
      <div className="container-custom grid lg:grid-cols-[1fr_2fr] gap-12">
        <div>
          <h3 className="text-2xl font-medium text-randstad-navy">{category} solutions</h3>
        </div>
        
        <div className="border-t border-gray-200">
          {items.map((item) => (
            <div key={item} className="accordion-item group">
              <span className="text-xl font-medium text-randstad-navy group-hover:text-randstad-blue transition-colors">
                {item}
              </span>
              <ChevronDown className="text-randstad-blue" size={24} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function About() {
  return (
    <section className="py-32 bg-white">
      <div className="container-custom grid lg:grid-cols-2 gap-24 items-start">
        <div>
          <h2 className="text-5xl font-medium mb-12 leading-tight">about randstad enterprise</h2>
          <div className="space-y-8 text-lg leading-relaxed text-randstad-navy/80">
            <p>
              As the leading global talent solutions provider, we enable companies to create sustainable business value and agility by keeping people at the heart of their organizations.
            </p>
            <p>
              We are uniquely positioned to support the world's leading enterprises with the inflow, crossflow and outflow of all talent through Randstad Sourceright and Randstad RiseSmart.
            </p>
          </div>
          
          <button className="mt-12 btn-outline text-randstad-blue border-randstad-blue hover:bg-randstad-blue hover:text-white">
            more information
          </button>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-12 items-center justify-center lg:justify-end">
          <div className="flex flex-col items-center gap-4">
            <div className="w-32 h-16 flex items-center justify-center">
              {/* Randstad Sourceright Logo Placeholder */}
              <div className="flex flex-col items-center">
                <div className="flex gap-1 mb-1">
                  <div className="w-6 h-1 bg-randstad-blue rounded-full transform -rotate-45 translate-y-1"></div>
                  <div className="w-6 h-1 bg-randstad-blue rounded-full transform rotate-45 -translate-y-1"></div>
                </div>
                <span className="text-sm font-bold text-randstad-blue">randstad</span>
                <span className="text-xs font-medium text-randstad-blue">sourceright</span>
              </div>
            </div>
          </div>
          
          <div className="flex flex-col items-center gap-4">
            <div className="w-32 h-16 flex items-center justify-center">
              {/* Randstad RiseSmart Logo Placeholder */}
              <div className="flex flex-col items-center">
                <div className="flex gap-1 mb-1">
                  <div className="w-6 h-1 bg-randstad-blue rounded-full transform -rotate-45 translate-y-1"></div>
                  <div className="w-6 h-1 bg-randstad-blue rounded-full transform rotate-45 -translate-y-1"></div>
                </div>
                <span className="text-sm font-bold text-randstad-blue">randstad</span>
                <span className="text-xs font-medium text-randstad-blue">risesmart</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Insights() {
  return (
    <section className="w-full bg-randstad-cream">
      <div className="flex flex-col lg:flex-row">
        <div className="w-full lg:w-1/2 bg-randstad-navy text-white p-12 md:p-20 lg:p-32 flex flex-col justify-center">
          <h2 className="text-5xl font-medium mb-8 leading-tight">see our latest insights.</h2>
          <p className="text-lg leading-relaxed opacity-90 mb-12">
            Check out the latest talent strategy research, news and case studies for employers in India.
          </p>
          <div>
            <button className="btn-outline text-white border-white hover:bg-white hover:text-randstad-navy">
              read now
            </button>
          </div>
        </div>
        
        <div className="w-full lg:w-1/2 relative min-h-[500px]">
          <img 
            src="https://picsum.photos/seed/randstad-insights/1000/1000" 
            alt="Insights" 
            className="absolute inset-0 w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          {/* Decorative accent dots */}
          <div className="absolute inset-0">
            <div className="absolute top-1/4 left-1/4 w-12 h-12 bg-randstad-accent rounded-full opacity-80 blur-sm"></div>
            <div className="absolute top-1/2 right-1/3 w-16 h-16 bg-randstad-accent rounded-full opacity-60"></div>
            <div className="absolute bottom-1/4 right-1/4 w-10 h-10 bg-randstad-accent rounded-full opacity-40"></div>
            <svg className="absolute inset-0 w-full h-full opacity-20" viewBox="0 0 100 100" preserveAspectRatio="none">
              <path d="M10 10 Q 50 50 90 10" fill="none" stroke="white" strokeWidth="0.5" />
              <path d="M10 90 Q 50 50 90 90" fill="none" stroke="white" strokeWidth="0.5" />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section className="py-32 bg-randstad-cream">
      <div className="container-custom flex flex-col lg:flex-row items-center justify-between gap-12">
        <h2 className="text-5xl md:text-6xl font-medium text-randstad-navy max-w-2xl leading-tight">
          ready to partner with randstad enterprise?
        </h2>
        <button className="btn-outline text-randstad-navy border-randstad-navy hover:bg-randstad-navy hover:text-white whitespace-nowrap">
          contact us
        </button>
      </div>
    </section>
  );
}

function Footer() {
  const footerSections = [
    {
      title: 'find a job',
      links: ['explore all jobs', 'submit your cv', 'join our team', 'refer a friend']
    },
    {
      title: 'for talents',
      links: ['specialisms', 'testimonials', 'career advice', 'beware of job scams']
    },
    {
      title: 'for employers',
      links: ['submit a vacancy', 'request a callback', 'our services', 'specialisms', 'case studies', 'testimonials']
    },
    {
      title: 'resources',
      links: ['case studies', 'press room', 'blogs']
    },
    {
      title: 'workforce insights',
      links: ['talent insights reports', 'employer brand research reports', 'salary trends reports', 'ed&i reports', 'workmonitor reports', 'startup hiring trends', 'talent pulse surveys']
    },
    {
      title: 'jobs',
      links: ['engineering jobs', 'cxo jobs', 'manufacturing jobs', 'supply chain & logistics jobs', 'education jobs', 'finance & accounting jobs', 'healthcare jobs', 'hr & admin support jobs', 'ites/gcc jobs', 'legal & compliance jobs', 'sales & marketing jobs']
    }
  ];

  return (
    <footer className="bg-randstad-navy text-white pt-24 pb-12">
      <div className="container-custom">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-12 mb-20">
          {footerSections.map((section) => (
            <div key={section.title}>
              <h4 className="font-bold mb-6 uppercase tracking-wider text-sm">{section.title}</h4>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link}>
                    <a href="#" className="footer-link">{link}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-white/10 pt-12 mb-12 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-randstad-accent transition-colors"><Linkedin size={24} /></a>
            <a href="#" className="hover:text-randstad-accent transition-colors"><Twitter size={24} /></a>
            <a href="#" className="hover:text-randstad-accent transition-colors"><Facebook size={24} /></a>
            <a href="#" className="hover:text-randstad-accent transition-colors"><Youtube size={24} /></a>
            <a href="#" className="hover:text-randstad-accent transition-colors"><Instagram size={24} /></a>
          </div>
          
          <p className="text-xs text-white/50 text-center md:text-right max-w-2xl">
            registered office: Randstad India Private Limited, CIN U74210TN1992PTC023097, Randstad House, Old No. 5 & 5A, New No. 9, Pycrofts Garden Road, Nungambakkam, Chennai, TN - 600 006
          </p>
        </div>

        <div className="space-y-8 mb-16">
          <div className="flex items-center gap-2">
            <span className="text-xs font-bold uppercase tracking-widest opacity-50">randstad,</span>
            <div className="flex gap-1">
              <div className="w-4 h-0.5 bg-randstad-blue rounded-full transform -rotate-45 translate-y-0.5"></div>
              <div className="w-4 h-0.5 bg-randstad-blue rounded-full transform rotate-45 -translate-y-0.5"></div>
            </div>
            <span className="text-[10px] uppercase tracking-widest opacity-50">human forward and shaping the world of work are registered trademarks of © Randstad N.V. 2023</span>
          </div>

          <div className="space-y-4 text-xs text-white/60 leading-relaxed">
            <p>
              <span className="font-bold text-white/80">Security Advice:</span> Randstad India does not charge any fee at any stage of its recruitment process from the candidate nor allows their employees to collect any fees from any candidates. <a href="#" className="text-randstad-blue underline">Click here to know more</a>
            </p>
            <p>
              <span className="font-bold text-white/80">EEO Statement:</span> Randstad India is an Equal Employment Opportunity Employer. All qualified applicants receive consideration for employment without regard to race, color, religion, sex, sexual orientation, gender identity or expression, appearance, national origin, age, marital status, veteran status, or disability status, or any other characteristics. Our global mission is to become the world's most equitable and specialized talent company, and we actively embrace diversity and inclusion as the cornerstones of our success. To read more of Randstad India's work in the space of equity, diversity and inclusion please <a href="#" className="text-randstad-blue underline">click here</a>
            </p>
          </div>
        </div>

        <div className="flex flex-wrap gap-x-8 gap-y-4 text-xs text-white/50 border-t border-white/10 pt-8">
          {['terms & conditions', 'cookies', 'misconduct reporting procedure', 'accessibility', 'be aware', 'sitemap', 'privacy statement'].map((item) => (
            <a key={item} href="#" className="hover:text-white transition-colors">{item}</a>
          ))}
        </div>
      </div>
    </footer>
  );
}

// --- Main App ---

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <main>
        <Hero />
        
        <TalentSolutions />
        
        <SolutionSection 
          id="acquisition"
          title="talent acquisition."
          description="Solve your complex hiring challenges with talent acquisition solutions delivered by Randstad Sourceright. Do you need to find people with high-demand skills, staff up to support a new project, or get an outside perspective to transform recruitment? Our technology-driven, scalable models will help you attract, source, screen, hire and onboard the right people, while creating efficiencies and delivering an exceptional experience."
          image="https://picsum.photos/seed/talent-acquisition/1200/800"
        />
        <AccordionList 
          category="talent acquisition"
          items={['recruitment process outsourcing (RPO)', 'managed services programs (MSP)', 'services procurement and SOW management']}
        />
        
        <SolutionSection 
          id="development"
          title="talent development."
          description="Elevate your employee experience with talent development solutions delivered by Randstad RiseSmart. Scalable, flexible and affordable talent development offerings help you unlock the potential of your people — and your organization."
          image="https://picsum.photos/seed/talent-development/1200/800"
        />
        <AccordionList 
          category="talent development"
          items={['career coaching']}
        />
        
        <SolutionSection 
          id="transition"
          title="talent transition."
          description="Manage layoffs seamlessly with Randstad RiseSmart's industry-leading outplacement and redeployment solutions. Help employees smoothly transition in their career journeys — and keep those who stay motivated."
          image="https://picsum.photos/seed/talent-transition/1200/800"
        />
        <AccordionList 
          category="talent transition"
          items={['outplacement', 'redeployment', 'pre-change support']}
        />
        
        <SolutionSection 
          id="advisory"
          title="advisory."
          description="Find your competitive talent edge. Randstad advisory services provide you with an independent, outside-in review and analysis of your talent strategy to drive enterprise workforce agility."
          image="https://picsum.photos/seed/talent-advisory/1200/800"
        />
        
        <section className="py-24 bg-white">
          <div className="container-custom grid lg:grid-cols-[1fr_2fr] gap-12">
            <h3 className="text-2xl font-medium text-randstad-navy">ignite the power of your talent.</h3>
            <div className="space-y-8">
              <p className="text-lg leading-relaxed text-randstad-navy/80">
                With advanced expertise in talent intelligence; people experience; diversity, equity and inclusion (DEI); and digital strategy, Randstad Enterprise advisory services provide audits, reviews and a plan to optimize your talent strategies. We help you unlock the power of your workforce and Human Potential to help your business succeed in any market condition.
              </p>
              <div className="border-t border-gray-200">
                {['talent intelligence', 'technology', 'talent marketing', 'diversity, equity & inclusion'].map((item) => (
                  <div key={item} className="accordion-item group">
                    <span className="text-xl font-medium text-randstad-navy group-hover:text-randstad-blue transition-colors">
                      {item}
                    </span>
                    <svg className="w-6 h-6 text-randstad-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
        
        <Contact />
        
        <Insights />
        
        <About />
      </main>
      
      <Footer />

      {/* Fixed UI Elements */}
      <div className="fixed right-0 top-1/2 -translate-y-1/2 z-40 hidden md:block">
        <button className="bg-randstad-blue text-white text-xs font-bold py-4 px-2 rounded-l-md vertical-text tracking-widest uppercase" style={{ writingMode: 'vertical-rl' }}>
          feedback
        </button>
      </div>

      <div className="fixed bottom-6 left-6 z-40">
        <button className="bg-randstad-blue text-white p-3 rounded-full shadow-lg hover:scale-110 transition-transform">
          <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
            <path d="M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/>
            <circle cx="12" cy="12" r="3"/>
            <circle cx="16" cy="8" r="1.5"/>
            <circle cx="8" cy="8" r="1.5"/>
            <circle cx="8" cy="16" r="1.5"/>
            <circle cx="16" cy="16" r="1.5"/>
          </svg>
        </button>
      </div>
    </div>
  );
}
