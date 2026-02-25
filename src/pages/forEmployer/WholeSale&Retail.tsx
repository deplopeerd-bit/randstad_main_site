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




export default function EmpWholeSale() {
  return (
    <div className="min-h-screen bg-white">
      
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
