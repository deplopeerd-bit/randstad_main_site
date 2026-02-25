import React, { useState } from "react";
import { ArrowRight, ChevronDown, Facebook, Heart, Instagram, Linkedin, Mail, Minus, Plus, Search, Twitter, User, Youtube } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";

// --- Components ---



const Hero = () => (
  <section className="bg-randstad-navy text-white overflow-hidden relative min-h-[600px] flex items-center">
    <div className="container-custom grid lg:grid-cols-2 gap-12 items-center py-20 relative z-10">
      <div>
        <div className="flex items-center gap-2 text-[14px] mb-8 opacity-70">
          <span>home</span> <ArrowRight size={12} /> <span>employers</span> <ArrowRight size={12} /> <span>our services</span> <ArrowRight size={12} /> <span>executive search</span>
        </div>
        <h1 className="heading-xl mb-8">
          executive search: your bespoke leadership solution.
        </h1>
        <p className="text-body mb-10 max-w-lg opacity-90">
          Finding the right executive for your company is a challenging task. Partner with us to find your next permanent or executive interim management.
        </p>
        <div className="flex flex-wrap gap-4">
          <button className="btn-outline-white">request a callback</button>
          <button className="btn-outline-white">FAQs about this service</button>
        </div>
      </div>
      <div className="relative flex justify-center">
        {/* Abstract graphic matching screenshot 17 */}
        <div className="relative w-[400px] h-[400px]">
          <div className="absolute inset-0 border-[20px] border-white/10 rounded-full"></div>
          <div className="absolute inset-[40px] border-[20px] border-randstad-blue/30 rounded-full"></div>
          <div className="absolute inset-[80px] border-[20px] border-randstad-blue rounded-full"></div>
          <div className="absolute bottom-0 right-0 w-32 h-32 bg-randstad-navy"></div>
          <div className="absolute bottom-4 right-4 w-24 h-24 border-r-[20px] border-b-[20px] border-randstad-blue"></div>
        </div>
      </div>
    </div>
  </section>
);

const IntroSection = () => (
  <section className="py-24 bg-white">
    <div className="container-custom grid lg:grid-cols-3 gap-12">
      <h2 className="heading-md text-randstad-navy">randstad executive search services.</h2>
      <div className="lg:col-span-2">
        <p className="text-body text-randstad-navy opacity-80">
          At Randstad, we specialize in providing bespoke executive search solutions tailored to meet the unique leadership requirements of your organization. With decades of industry expertise, a global network, and a meticulous search process, we help you identify and secure the best talent to drive your business forward.
        </p>
      </div>
    </div>
  </section>
);

const ApproachSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const items = [
    "comprehensive understanding",
    "tailored search strategy",
    "rigorous screening",
    "collaborative engagement",
    "seamless onboarding",
    "beyond recruitment"
  ];

  return (
    <section className="py-24 bg-randstad-navy text-white">
      <div className="container-custom grid lg:grid-cols-3 gap-12">
        <h2 className="heading-md">our approach.</h2>
        <div className="lg:col-span-2">
          {items.map((item, index) => (
            <div key={index} className="accordion-item" onClick={() => setOpenIndex(openIndex === index ? null : index)}>
              <div className="accordion-title">
                {item}
                {openIndex === index ? <Minus size={24} /> : <Plus size={24} />}
              </div>
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="overflow-hidden"
                  >
                    <p className="pt-4 text-white/70">
                      Detailed information about {item} would go here. Our process ensures the highest quality results for your executive needs.
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const MeetTheTeam = () => {
  const team = [
    {
      name: "abhilash george",
      role: "Vice President - Executive Search",
      email: "abhilash.george@randstad.in",
      image: "https://picsum.photos/seed/abhilash/200/200"
    },
    {
      name: "gaurav kumar",
      role: "General Manager - Executive Search",
      email: "kumar.gaurav@randstad.in",
      image: "https://picsum.photos/seed/gaurav/200/200"
    },
    {
      name: "freeda mary",
      role: "General Manager - Executive Search",
      email: "freeda.mary@randstad.in",
      image: "https://picsum.photos/seed/freeda/200/200"
    }
  ];

  return (
    <section className="py-24 bg-randstad-light">
      <div className="container-custom">
        <div className="mb-16">
          <h2 className="text-[32px] font-light text-randstad-navy mb-4">executive search - meet the team</h2>
          <p className="text-body text-randstad-navy opacity-80">
            Introducing the accomplished executive search team at Randstad India, dedicated to finding top talent for your organization's success.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-12">
          {team.map((member, index) => (
            <div key={index} className="flex flex-col items-start">
              <img src={member.image} alt={member.name} className="w-32 h-32 rounded-full object-cover mb-6" referrerPolicy="no-referrer" />
              <h3 className="text-[24px] font-light text-randstad-blue mb-1">{member.name}</h3>
              <p className="text-[14px] text-randstad-navy opacity-70 mb-4">{member.role}</p>
              <div className="flex items-center gap-2 text-[14px] text-randstad-navy mb-4">
                <Mail size={16} /> <span>{member.email}</span>
              </div>
              <div className="w-8 h-8 bg-randstad-navy text-white flex items-center justify-center rounded-sm">
                <Linkedin size={18} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const WhyChooseSection = () => {
  const cards = [
    { title: "industry expertise", image: "https://picsum.photos/seed/exp1/600/800" },
    { title: "consultative approach", image: "https://picsum.photos/seed/exp2/600/800" },
    { title: "global reach, local expertise", image: "https://picsum.photos/seed/exp3/600/800" }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="container-custom">
        <h2 className="heading-md text-randstad-navy mb-16">why choose randstad executive search?</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {cards.map((card, index) => (
            <div key={index} className="relative aspect-[3/4] overflow-hidden group">
              <img src={card.image} alt={card.title} className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" referrerPolicy="no-referrer" />
              <div className="absolute inset-0 bg-gradient-to-t from-randstad-navy/80 to-transparent"></div>
              <div className="absolute bottom-8 left-8 right-8">
                <h3 className="text-[24px] font-light text-white">{card.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const MoreReasonsSection = () => {
  const cards = [
    { title: "confidentiality and integrity", image: "https://picsum.photos/seed/reason1/800/600" },
    { title: "proven track record", image: "https://picsum.photos/seed/reason2/800/600" }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="container-custom">
        <h2 className="heading-md text-randstad-navy mb-16">more reasons to choose randstad executive search.</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {cards.map((card, index) => (
            <div key={index} className="relative aspect-[16/10] overflow-hidden group">
              <img src={card.image} alt={card.title} className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" referrerPolicy="no-referrer" />
              <div className="absolute inset-0 bg-gradient-to-t from-randstad-navy/80 to-transparent"></div>
              <div className="absolute bottom-8 left-8 right-8">
                <h3 className="text-[24px] font-light text-white">{card.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const ServicesSection = () => (
  <section className="bg-randstad-navy text-white overflow-hidden">
    <div className="container-custom flex flex-col lg:flex-row items-stretch">
      <div className="lg:w-1/2 py-24 pr-12">
        <h2 className="heading-lg mb-12">our services includes.</h2>
        <ul className="space-y-6 mb-12">
          <li className="flex items-start gap-4 text-[18px] font-light">
            <div className="w-1.5 h-1.5 bg-white rounded-full mt-2.5"></div>
            C-suite and Board Member Searches
          </li>
          <li className="flex items-start gap-4 text-[18px] font-light">
            <div className="w-1.5 h-1.5 bg-white rounded-full mt-2.5"></div>
            Functional Leadership Roles (e.g., CFO, CTO, CHRO) & building teams under them.
          </li>
          <li className="flex items-start gap-4 text-[18px] font-light">
            <div className="w-1.5 h-1.5 bg-white rounded-full mt-2.5"></div>
            Succession Planning and Talent Pipeline Development
          </li>
          <li className="flex items-start gap-4 text-[18px] font-light">
            <div className="w-1.5 h-1.5 bg-white rounded-full mt-2.5"></div>
            Diversity and Inclusion-focused Searches
          </li>
          <li className="flex items-start gap-4 text-[18px] font-light">
            <div className="w-1.5 h-1.5 bg-white rounded-full mt-2.5"></div>
            Recruitment related advisory & consulting services
          </li>
        </ul>
        <button className="btn-outline-white">read more</button>
      </div>
      <div className="lg:w-1/2 relative min-h-[400px]">
        <img src="https://picsum.photos/seed/services/1000/800" alt="Services" className="absolute inset-0 w-full h-full object-cover" referrerPolicy="no-referrer" />
        {/* Abstract circle graphic overlay */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="w-[300px] h-[300px] border-[15px] border-white/20 rounded-full"></div>
          <div className="absolute w-[200px] h-[200px] border-[15px] border-randstad-blue/40 rounded-full"></div>
          <div className="absolute w-[100px] h-[100px] bg-randstad-navy flex items-center justify-center rounded-full">
            <div className="w-8 h-8 bg-randstad-blue rounded-full"></div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const SuccessStory = ({ subtitle, title, description, reverse = false, graphicType = 'arrow' }: any) => (
  <section className="py-24 bg-white">
    <div className={`container-custom flex flex-col ${reverse ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-center gap-24`}>
      <div className="lg:w-1/2">
        <div className="mb-8">
          <p className="text-[14px] text-randstad-navy opacity-70 mb-2">{subtitle}</p>
          <h2 className="heading-lg text-randstad-navy">{title}</h2>
        </div>
        <p className="text-body text-randstad-navy opacity-80">
          {description}
        </p>
      </div>
      <div className="lg:w-1/2 flex justify-center">
        {graphicType === 'arrow' ? (
          <div className="relative w-[400px] h-[300px]">
             <svg width="400" height="300" viewBox="0 0 400 300" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M50 250L350 50" stroke="#21C2F2" strokeWidth="12" />
                <path d="M250 50H350V150" stroke="#21C2F2" strokeWidth="12" />
             </svg>
          </div>
        ) : (
          <div className="relative w-[400px] h-[300px] flex items-end gap-4">
            <div className="w-20 h-40 border-[12px] border-randstad-blue rounded-full"></div>
            <div className="w-20 h-60 border-[12px] border-randstad-blue rounded-full"></div>
            <div className="w-20 h-52 border-[12px] border-randstad-blue rounded-full relative overflow-hidden">
               <div className="absolute top-0 left-0 right-0 h-1/2 bg-gradient-to-b from-white to-transparent"></div>
            </div>
            <div className="absolute -top-10 left-0 w-full h-1 bg-randstad-blue transform -rotate-12"></div>
          </div>
        )}
      </div>
    </div>
  </section>
);

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const faqs = [
    "Why should we engage Randstad? What makes you better or different from the competition?",
    "How long does a senior level search typically take?",
    "What is the difference between Executive Search (ES) and standard, mid-to-senior level recruitment?",
    "What is the difference in the service provided during a retained search, and contingency (i.e., success-only) recruitment projects?",
    "If we already have an agreement in place with Randstad for recruitment services, why do we need to sign an additional one?",
    "If we are paying you an up-front retainer fee, how can you guarantee to find us the right candidate?",
    "Other agencies are offering to run a search for us on a success basis (contingency) - therefore, why should we pay a retainer fee?",
    "Why are search fees higher than for standard recruitment?",
    "What happens if we are forced to cancel the assignment or put the position on hold?"
  ];

  return (
    <section className="py-24 bg-randstad-navy text-white">
      <div className="container-custom grid lg:grid-cols-3 gap-12">
        <div>
          <h2 className="heading-md">FAQs</h2>
        </div>
        <div className="lg:col-span-2">
          <p className="text-[16px] font-light opacity-80 mb-12">
            After reading the answers to these FAQs, should you still have any questions or require and additional information, please do not hesitate to contact us for an initial, no obligation conversation:
          </p>
          {faqs.map((faq, index) => (
            <div key={index} className="accordion-item" onClick={() => setOpenIndex(openIndex === index ? null : index)}>
              <div className="text-[20px] font-light text-white flex justify-between items-center gap-4">
                {faq}
                {openIndex === index ? <ChevronDown size={24} className="rotate-180 transition-transform" /> : <ChevronDown size={24} className="transition-transform" />}
              </div>
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="overflow-hidden"
                  >
                    <p className="pt-4 text-white/70 font-light">
                      Detailed answer for this FAQ would be provided here. We aim to be transparent and helpful in all our client interactions.
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const CallToAction = () => (
  <section className="py-32 bg-randstad-light">
    <div className="container-custom flex flex-col md:flex-row items-center justify-between gap-12">
      <div className="max-w-2xl">
        <h2 className="heading-lg text-randstad-navy mb-4">find leaders who shape the future with randstad executive search.</h2>
        <p className="heading-lg text-randstad-blue">contact us to secure top talent for your key roles.</p>
      </div>
      <button className="btn-outline-navy whitespace-nowrap">let's connect</button>
    </div>
  </section>
);

const NewsletterSection = () => (
  <section className="py-24 bg-white overflow-hidden">
    <div className="container-custom flex flex-col lg:flex-row items-center gap-24">
      <div className="lg:w-1/2">
        <h2 className="heading-lg text-randstad-navy mb-8">workforce insights delivered to your inbox.</h2>
        <p className="text-body text-randstad-navy opacity-80 mb-12">
          Want to reduce your turnover rate, improve your company culture, or be inspired on improving employability for young people? Sign up to the monthly workforce insights newsletter and stay up to date with the latest recruitment and labor market news, tips, trends and reports for business leaders across the globe.
        </p>
        <button className="btn-outline-blue">subscribe now</button>
      </div>
      <div className="lg:w-1/2 relative flex justify-center">
        {/* Envelope graphic matching screenshot 3 */}
        <div className="relative w-[400px] h-[300px]">
           <div className="absolute inset-0 border-[12px] border-randstad-blue rounded-[32px]"></div>
           <div className="absolute top-0 left-0 right-0 h-1/2 border-b-[12px] border-randstad-blue rounded-t-[32px] flex items-center justify-center">
              <div className="w-0 h-0 border-l-[100px] border-l-transparent border-r-[100px] border-r-transparent border-t-[80px] border-t-randstad-blue mt-[-40px]"></div>
           </div>
           <div className="absolute -top-12 left-1/2 -translate-x-1/2 flex flex-col items-center">
              <div className="w-1.5 h-20 bg-randstad-blue"></div>
              <div className="w-0 h-0 border-l-[15px] border-l-transparent border-r-[15px] border-r-transparent border-t-[20px] border-t-randstad-blue"></div>
           </div>
        </div>
      </div>
    </div>
  </section>
);



// --- Main App ---

export default function EmpExecutiveSearch() {
  return (
    <div className="min-h-screen flex flex-col">
      
      <main className="flex-grow">
        <Hero />
        <IntroSection />
        <ApproachSection />
        <MeetTheTeam />
        <WhyChooseSection />
        <MoreReasonsSection />
        <ServicesSection />
        <SuccessStory 
          subtitle="executive search in action"
          title="a tech giant's success story."
          description="Placed a transformational CTO who spearheaded a global digital transformation initiative, resulting in a 30% revenue growth within two years."
          graphicType="arrow"
        />
        <SuccessStory 
          subtitle="executive search in action"
          title="success story of a global FMCG leader."
          description="Identified and secured a culturally aligned CEO who enhanced operational efficiency and improved employee engagement scores by 40%."
          reverse={true}
          graphicType="bars"
        />
        <FAQSection />
        <CallToAction />
        <NewsletterSection />
      </main>
     
      
      {/* Feedback button fixed on right */}
      <div className="fixed right-0 top-1/2 -translate-y-1/2 z-50">
        <button className="bg-randstad-blue text-white py-4 px-2 text-[12px] font-bold uppercase tracking-widest [writing-mode:vertical-rl] rotate-180 rounded-l-md">
          Feedback
        </button>
      </div>

      {/* Cookie/Accessibility icon fixed on bottom left */}
      <div className="fixed left-4 bottom-4 z-50">
        <button className="w-10 h-10 bg-randstad-blue text-white rounded-full flex items-center justify-center shadow-lg">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2a10 10 0 1 0 10 10 4 4 0 0 1-5-5 4 4 0 0 1-5-5Z"/><path d="M8.5 8.5v.01"/><path d="M16 15.5v.01"/><path d="M12 12v.01"/><path d="M11 17v.01"/><path d="M7 14v.01"/></svg>
        </button>
      </div>
    </div>
  );
}
