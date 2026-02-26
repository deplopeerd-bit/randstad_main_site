import { ArrowRight, ChevronDown, Facebook, Heart, Instagram, Linkedin, Mail, Twitter, User, Youtube } from "lucide-react";
import { motion } from "motion/react";

export default function EmpTalentAcquisition2() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Top Utility Nav */}
      <div className="bg-white border-b border-gray-100 py-2">
        <div className="container-custom flex justify-end">
          <a href="#" className="text-[11px] text-gray-500 hover:text-randstad-navy">contact us</a>
        </div>
      </div>

      {/* Main Header */}
    

      <main>
        {/* Breadcrumbs */}
        <div className="bg-white py-4">
          <div className="container-custom">
            <div className="flex items-center gap-2 text-[11px] text-gray-500 uppercase tracking-wider">
              <a href="#" className="hover:text-randstad-navy">home</a>
              <span>›</span>
              <a href="#" className="hover:text-randstad-navy">employers</a>
              <span>›</span>
              <a href="#" className="hover:text-randstad-navy">our services</a>
              <span>›</span>
              <span className="text-randstad-navy font-semibold">talent acquisition</span>
            </div>
          </div>
        </div>

        {/* Hero Section */}
        <section className="bg-randstad-navy text-white py-20 lg:py-32 overflow-hidden relative">
          <div className="container-custom relative z-10">
            <div className="grid lg:grid-cols-2 items-center gap-12">
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
              >
                <h1 className="heading-xl mb-8">
                  top talent acquisition services.
                </h1>
                <p className="text-lg lg:text-xl text-gray-300 mb-10 max-w-xl leading-relaxed">
                  Discover top talent for your business with our expert recruitment services. We ensure fast hiring, high-quality candidates, and data-driven insights to streamline your hiring process.
                </p>
                <button className="btn-outline-white">
                  request a callback
                </button>
              </motion.div>
              
              <div className="relative flex justify-center lg:justify-end">
                {/* Star Graphic Placeholder */}
                <div className="relative w-full max-w-[500px] aspect-square">
                  <svg viewBox="0 0 400 400" className="w-full h-full">
                    <path d="M200 20 L240 140 L370 140 L265 215 L305 335 L200 260 L95 335 L135 215 L30 140 L160 140 Z" fill="none" stroke="#21C1F3" strokeWidth="2" />
                    <path d="M200 60 L230 160 L330 160 L250 220 L280 320 L200 260 L120 320 L150 220 L70 160 L170 160 Z" fill="none" stroke="#ffffff" strokeWidth="2" />
                    <path d="M200 100 L220 180 L300 180 L235 225 L260 300 L200 255 L140 300 L165 225 L100 180 L180 180 Z" fill="none" stroke="#21C1F3" strokeWidth="2" />
                    <line x1="50" y1="350" x2="350" y2="350" stroke="#21C1F3" strokeWidth="2" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Section */}
        <section className="py-24 bg-white">
          <div className="container-custom">
            <div className="grid lg:grid-cols-12 gap-12 items-start">
              <div className="lg:col-span-4">
                <h2 className="heading-md text-randstad-navy leading-tight">
                  why choose randstad for expert talent acquisition?
                </h2>
              </div>
              <div className="lg:col-span-8">
                <p className="text-lg text-gray-700 leading-relaxed">
                  Randstad, a top talent acquisition specialist, offers expert consultancy to both employers and job seekers. Our skilled consultants bridge gaps in the talent market, helping you find the perfect candidate with ease.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Leading Talent Section */}
        <section className="bg-white">
          <div className="grid lg:grid-cols-2">
            <div className="bg-white flex items-center py-20 lg:py-0">
              <div className="container-custom lg:max-w-none lg:pl-32 lg:pr-16">
                <h2 className="heading-lg text-randstad-navy mb-8">
                  leading talent acquisition services.
                </h2>
                <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                  Access skilled professionals in sales, support functions like (F&A, HR, Admin), healthcare, and education. Benefit from optimal conversion ratios, fast turnaround times, and insightful talent acquisition analytics to meet your hiring needs effectively.
                </p>
              </div>
            </div>
            <div className="relative h-[400px] lg:h-[600px]">
              <img 
                src="https://picsum.photos/seed/randstad1/1200/800" 
                alt="Talent Acquisition" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div className="w-64 h-64 border border-white/30 rounded-full flex items-center justify-center">
                   <div className="w-48 h-48 border border-white/50 rounded-full flex items-center justify-center">
                      <div className="w-32 h-32 bg-randstad-blue/80 rounded-full"></div>
                   </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Us Section */}
        <section className="bg-randstad-navy text-white py-24">
          <div className="container-custom">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
              <h2 className="heading-lg max-w-2xl">
                contact us to start a conversation about your talent needs.
              </h2>
              <button className="btn-outline-white whitespace-nowrap">
                let's connect
              </button>
            </div>
          </div>
        </section>

        {/* Reskilling Section */}
        <section className="py-24 bg-white">
          <div className="container-custom">
            <h2 className="heading-md text-randstad-navy mb-16 text-center lg:text-left">
              reskilling and upskilling: building future-ready skills.
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  title: "how upskilling and reskilling can prepare your business for future success.",
                  image: "https://picsum.photos/seed/reskill1/600/800"
                },
                {
                  title: "skills development: 7 strategies for reskilling your workforce.",
                  image: "https://picsum.photos/seed/reskill2/600/800"
                },
                {
                  title: "introducing BrightFit: your route to next-level skilling.",
                  image: "https://picsum.photos/seed/reskill3/600/800"
                }
              ].map((card, idx) => (
                <motion.div 
                  key={idx}
                  whileHover={{ y: -10 }}
                  className="relative h-[500px] rounded-lg overflow-hidden group cursor-pointer"
                >
                  <img 
                    src={card.image} 
                    alt={card.title} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-randstad-navy/90 via-randstad-navy/20 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 p-8">
                    <h3 className="text-xl font-bold text-white leading-tight">
                      {card.title}
                    </h3>
                  </div>
                  {/* Graphic overlay */}
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-40">
                    <div className="flex gap-2">
                       <div className="w-12 h-12 rounded-full bg-white/20"></div>
                       <div className="w-12 h-12 rounded-full bg-randstad-blue/40"></div>
                       <div className="w-12 h-12 rounded-full bg-white/20"></div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Client Success Section */}
        <section className="bg-randstad-navy text-white overflow-hidden">
          <div className="grid lg:grid-cols-2">
            <div className="flex items-center py-24 lg:py-0">
              <div className="container-custom lg:max-w-none lg:pl-32 lg:pr-16">
                <h2 className="heading-lg mb-8">
                  client success stories & testimonials.
                </h2>
                <p className="text-lg text-gray-300 mb-10 leading-relaxed">
                  Explore our client success stories and testimonials to see how we've helped businesses thrive. Discover real experiences and results from our satisfied clients, showcasing the impact of our services and the value we bring to every partnership.
                </p>
                <button className="btn-outline-white">
                  know more
                </button>
              </div>
            </div>
            <div className="relative h-[400px] lg:h-[700px]">
              <img 
                src="https://picsum.photos/seed/success1/1200/800" 
                alt="Success Stories" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative w-80 h-80">
                   <div className="absolute inset-0 border border-white/20 rounded-full scale-150"></div>
                   <div className="absolute inset-0 border border-white/30 rounded-full scale-125"></div>
                   <div className="absolute inset-0 border border-white/40 rounded-full"></div>
                   <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 bg-randstad-blue rounded-full flex items-center justify-center">
                      <div className="w-4 h-4 bg-white rounded-full"></div>
                   </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Workforce Insights Section */}
        <section className="py-24 bg-white">
          <div className="container-custom">
            <div className="grid lg:grid-cols-2 items-center gap-16">
              <div>
                <h2 className="heading-lg text-randstad-navy mb-8">
                  workforce insights delivered to your inbox.
                </h2>
                <p className="text-lg text-gray-700 mb-10 leading-relaxed">
                  Want to reduce your turnover rate, improve your company culture, or be inspired on improving employability for young people? Sign up to the monthly workforce insights newsletter and stay up to date with the latest recruitment and labor market news, tips, trends and reports for business leaders across the globe.
                </p>
                <button className="btn-outline-navy">
                  subscribe now
                </button>
              </div>
              <div className="relative flex justify-center">
                <div className="w-full max-w-md aspect-square relative">
                   <Mail className="w-full h-full text-randstad-blue opacity-10 absolute inset-0" />
                   <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-full h-2/3 border-8 border-randstad-blue rounded-2xl relative flex items-center justify-center">
                         <div className="absolute -top-12 left-1/2 -translate-x-1/2">
                            <motion.div 
                              animate={{ y: [0, -10, 0] }}
                              transition={{ repeat: Infinity, duration: 2 }}
                              className="text-randstad-blue"
                            >
                              <svg width="80" height="80" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M7 13l5 5 5-5M7 6l5 5 5-5" />
                              </svg>
                            </motion.div>
                         </div>
                         <div className="w-4/5 h-px bg-randstad-blue/30 absolute top-1/3"></div>
                         <div className="w-4/5 h-px bg-randstad-blue/30 absolute top-1/2"></div>
                         <div className="w-4/5 h-px bg-randstad-blue/30 absolute top-2/3"></div>
                      </div>
                   </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Download Section */}
        <section className="bg-randstad-light py-24">
          <div className="container-custom">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
              <div className="max-w-3xl">
                <h2 className="heading-lg text-randstad-navy mb-4">
                  upskilling and reskilling: essential ingredients in your future success
                </h2>
                <p className="text-4xl lg:text-6xl font-bold text-randstad-blue tracking-tighter">
                  download your copy now.
                </p>
              </div>
              <button className="btn-outline-navy whitespace-nowrap">
                download now
              </button>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      

      {/* Floating Feedback Button */}
      <div className="fixed right-0 top-1/2 -translate-y-1/2 z-50">
        <div className="bg-randstad-blue text-white py-4 px-2 rounded-l-md cursor-pointer hover:pr-4 transition-all duration-300 shadow-lg">
          <span className="[writing-mode:vertical-rl] text-xs font-bold uppercase tracking-widest">Feedback</span>
        </div>
      </div>

      {/* Cookie Icon */}
      <div className="fixed bottom-6 left-6 z-50">
        <div className="bg-randstad-blue text-white p-3 rounded-full cursor-pointer hover:scale-110 transition-transform shadow-lg">
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
