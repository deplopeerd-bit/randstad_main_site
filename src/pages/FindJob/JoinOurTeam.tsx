import React, { useState } from "react";
import { AnimatePresence, motion } from "motion/react";

import { 
  Search, 
  ChevronRight, 
  ChevronDown, 
  Linkedin, 
  Twitter, 
  Facebook, 
  Youtube, 
  Instagram,
  Heart,
  User,
  ArrowRight
} from 'lucide-react';

const JoinOurTeam: React.FC = () => {
  const [activeAccordion, setActiveAccordion] = useState<number | null>(null);

  const accordionItems = [
    { title: "walk through the door of quality employers", content: "We connect you with top-tier companies looking for your specific skills." },
    { title: "find a job faster", content: "Our streamlined process and extensive network help you land your next role quickly." },
    { title: "benefit from personalized advice", content: "Get expert guidance tailored to your career goals and experience." },
    { title: "discover exciting possibilities", content: "Explore roles you might not have considered in industries that are growing." }
  ];

  return (
    <div className="min-h-screen bg-white font-sans text-[#001941]">
      {/* Top Bar */}
      <div className="bg-white border-b border-gray-100 py-2 px-4 md:px-12 flex justify-end items-center space-x-6 text-xs font-medium">
        <a href="#" className="hover:underline">contact us</a>
      </div>

      {/* Header */}
      <header className="bg-white sticky top-0 z-50 border-b border-gray-100 px-4 md:px-12 py-4 flex justify-between items-center">
        <div className="flex items-center space-x-12">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 flex flex-col justify-center space-y-1">
              <div className="h-1 w-full bg-[#2196f3] rounded-full"></div>
              <div className="h-1 w-3/4 bg-[#2196f3] rounded-full"></div>
            </div>
            <span className="text-2xl font-bold tracking-tighter text-[#001941]">randstad</span>
          </div>
          
          <nav className="hidden lg:flex space-x-8 text-sm font-medium">
            {['find a job', 'for talent', 'for employer', 'resources', 'about us'].map((item) => (
              <a key={item} href="#" className="flex items-center hover:text-[#2196f3] transition-colors">
                {item} <ChevronDown className="ml-1 w-4 h-4" />
              </a>
            ))}
          </nav>
        </div>

        <div className="flex items-center space-x-6 text-sm font-medium">
          <div className="flex items-center space-x-1 cursor-pointer hover:text-[#2196f3]">
            <Heart className="w-5 h-5" />
            <span>0</span>
          </div>
          <div className="flex items-center space-x-1 cursor-pointer hover:text-[#2196f3]">
            <User className="w-5 h-5" />
            <span>my randstad</span>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-[#001941] text-white py-20 px-4 md:px-12 overflow-hidden relative">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <nav className="text-xs mb-8 opacity-60 flex space-x-2">
              <span>home</span>
              <span>&gt;</span>
              <span>career advice</span>
              <span>&gt;</span>
              <span className="opacity-100">work with randstad</span>
            </nav>
            <h1 className="text-5xl md:text-7xl font-light mb-8 leading-tight">
              looking for a job? we'll help you find it.
            </h1>
            <p className="text-lg md:text-xl font-light mb-12 opacity-80 max-w-lg">
              Our goal as recruiters is to find the perfect job for you by considering your needs, goals, and personality. We believe that when your job makes you happy, you're more likely to thrive every day.
            </p>
            <div className="flex flex-wrap gap-4">
              <button className="bg-white text-[#001941] px-8 py-3 rounded-sm font-medium hover:bg-gray-100 transition-colors">
                find a job
              </button>
              <button className="border border-white text-white px-8 py-3 rounded-sm font-medium hover:bg-white/10 transition-colors">
                submit your resume
              </button>
            </div>
          </motion.div>

          <div className="relative flex justify-center items-center">
            <motion.div 
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative w-80 h-80 md:w-[500px] md:h-[500px]"
            >
              {/* Circular graphic */}
              <div className="absolute inset-0 border-[12px] border-[#2196f3] rounded-full opacity-40"></div>
              <div className="absolute inset-8 border-[12px] border-[#2196f3] rounded-full opacity-60"></div>
              <div className="absolute inset-16 border-[12px] border-[#2196f3] rounded-full"></div>
              
              {/* Magnifying glass handle */}
              <motion.div 
                initial={{ rotate: -45 }}
                animate={{ rotate: 0 }}
                transition={{ duration: 1, delay: 0.5 }}
                className="absolute bottom-0 right-0 w-32 h-12 bg-[#2196f3] origin-left transform rotate-45 rounded-full"
              ></motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Quick Links Section */}
      <section className="py-20 px-4 md:px-12 bg-white">
        <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-8">
          <h2 className="text-3xl font-light">what do you want to do?</h2>
          <div className="md:col-span-3 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-8 gap-x-12">
            {[
              "find a job", "career resources", "submit your resume",
              "job seeker toolkit", "jobs profiles", "work from home"
            ].map((link) => (
              <a key={link} href="#" className="text-xl text-[#2196f3] font-light border-b border-gray-200 pb-4 hover:border-[#2196f3] transition-all flex justify-between items-center group">
                {link}
                <ChevronRight className="w-5 h-5 opacity-0 group-hover:opacity-100 transition-opacity" />
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Why Work Section */}
      <section className="py-20 px-4 md:px-12 bg-[#f9f9f7]">
        <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-8">
          <h2 className="text-3xl font-light">why work with randstad?</h2>
          <div className="md:col-span-3 space-y-6 text-lg font-light leading-relaxed">
            <p>
              We work with hundreds of great Indian employers, which means we can help you get through the door to great employers you'll be proud to work for. Whether you are looking for a temporary or permanent position, whether you have one or twenty years of experience, we want to offer you exciting professional opportunities. We will not have succeeded in our mission if you are not happy to receive a job offer at the end of the process.
            </p>
            <p>
              We are really here to facilitate your job search. Ready to start? Let's go!
            </p>
          </div>
        </div>
      </section>

      {/* Support Section */}
      <section className="py-20 px-4 md:px-12 bg-white">
        <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-8">
          <h2 className="text-3xl font-light">support at every stage of your professional career.</h2>
          <div className="md:col-span-3 space-y-6 text-lg font-light leading-relaxed">
            <p>
              We support you at all stages of your professional journey. We want to team up with you, whether you're new to the job market and need help building your resume or you're a seasoned job seeker who's heard it all before. We'll be there to offer you the advice you need, whether it's helping you create an outstanding CV or target excellent job opportunities.
            </p>
          </div>
        </div>
      </section>

      {/* Learn Today Section */}
      <section className="py-20 px-4 md:px-12 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-light mb-12">what do you want to learn today?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: "how to write an awesome resume", img: "https://picsum.photos/seed/resume/600/800" },
              { title: "how to search for a job online", img: "https://picsum.photos/seed/search/600/800" },
              { title: "how to ace my next interview", img: "https://picsum.photos/seed/interview/600/800" }
            ].map((card, i) => (
              <motion.div 
                key={i}
                whileHover={{ y: -10 }}
                className="relative h-[500px] rounded-lg overflow-hidden group cursor-pointer"
              >
                <img 
                  src={card.img} 
                  alt={card.title} 
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#001941] via-transparent to-transparent opacity-80"></div>
                <div className="absolute bottom-8 left-8 right-8">
                  <h3 className="text-2xl text-white font-light leading-tight">{card.title}</h3>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Career Guide Section */}
      <section className="py-20 px-4 md:px-12 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-light mb-12">career guide.</h2>
          <div className="grid md:grid-cols-3 gap-12">
            {[
              { 
                title: "want more tips & tricks?", 
                desc: "Visit our career resources section to learn more about resumes, interviews, salaries, professional development and more!",
                img: "https://picsum.photos/seed/tips/600/400",
                link: "to career opportunities"
              },
              { 
                title: "check out career resources", 
                desc: "access to our latest tips & advice for helpful tips to improve your resume, interview skills & more.",
                img: "https://picsum.photos/seed/resources/600/400",
                link: "to career resources"
              },
              { 
                title: "career insights", 
                desc: "Explore our career insights articles for valuable tips, industry trends, and expert advice to enhance your career growth and make informed decisions on your professional journey.",
                img: "https://picsum.photos/seed/insights/600/400",
                link: ""
              }
            ].map((card, i) => (
              <div key={i} className="space-y-6">
                <img 
                  src={card.img} 
                  alt={card.title} 
                  className="w-full h-64 object-cover rounded-lg"
                  referrerPolicy="no-referrer"
                />
                <h3 className="text-2xl font-light">{card.title}</h3>
                <div className="flex items-start space-x-3">
                  <div className="mt-1.5"><ChevronRight className="w-4 h-4 text-gray-400" /></div>
                  <p className="text-gray-600 font-light leading-relaxed">{card.desc}</p>
                </div>
                {card.link && (
                  <a href="#" className="text-[#2196f3] font-medium hover:underline inline-block">{card.link}</a>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Accordion Section */}
      <section className="py-24 px-4 md:px-12 bg-[#001941] text-white">
        <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-12">
          <h2 className="text-3xl font-light">read our ultimate job guides.</h2>
          <div className="md:col-span-3 space-y-4">
            {accordionItems.map((item, i) => (
              <div key={i} className="border-b border-white/20">
                <button 
                  onClick={() => setActiveAccordion(activeAccordion === i ? null : i)}
                  className="w-full py-6 flex justify-between items-center text-xl font-light hover:text-[#2196f3] transition-colors"
                >
                  <span>{item.title}</span>
                  <motion.div
                    animate={{ rotate: activeAccordion === i ? 180 : 0 }}
                  >
                    <ChevronDown className="w-6 h-6" />
                  </motion.div>
                </button>
                <AnimatePresence>
                  {activeAccordion === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="overflow-hidden"
                    >
                      <p className="pb-8 text-lg opacity-70 font-light">{item.content}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="py-24 px-4 md:px-12 bg-[#f9f9f7]">
        <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-12 items-center">
          <div className="flex justify-center">
            <div className="text-[#2196f3] text-9xl font-serif opacity-80 leading-none">“</div>
          </div>
          <div className="md:col-span-3 space-y-8">
            <h2 className="text-3xl font-light mb-4">what our candidates say.</h2>
            <p className="text-3xl font-light leading-tight text-[#001941]">
              The standout thing for me was how Randstad India keeps in touch with people, understands the personalities of individuals and maps it to the requirements of the organizations. Overall it has been a very fruitful journey since then.
            </p>
            <div>
              <p className="text-xl text-[#2196f3] font-light">Chidambar, Head Hr - Bridgadegroup</p>
            </div>
            <div className="flex space-x-2">
              <div className="w-2 h-2 rounded-full bg-[#001941]"></div>
              <div className="w-2 h-2 rounded-full border border-[#001941]"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-24 px-4 md:px-12 bg-white">
        <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-12">
          <h2 className="text-3xl font-light">the benefits of working with randstad.</h2>
          <div className="md:col-span-3 space-y-8">
            <p className="text-lg font-light leading-relaxed">
              We analyze your skills and talents so that we can customize our approach to match your career goals and personality. Your ideal job is waiting for you and here is how we help you find it:
            </p>
            <ul className="space-y-4 text-lg font-light">
              {[
                "a recruiter eager to help you offers personalized advice",
                "the focus is on jobs that match your career goals and personality",
                "you benefit from advice for writing your CV and preparing for your interviews",
                "most positions are permanent full-time jobs",
                "you have access to the hidden job market, since up to half of the positions we fill are not posted online",
                "working with a recruiter is free and poses no risk",
                "diversity and inclusion are at the heart of our recruitment approach",
                "we work with hundreds of major Indian employers"
              ].map((benefit, i) => (
                <li key={i} className="flex items-start space-x-4">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#001941] mt-3"></div>
                  <span>{benefit}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Career Insights Section */}
      <section className="py-24 px-4 md:px-12 bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-end mb-12">
            <h2 className="text-4xl font-light">career insights: navigating success and growth.</h2>
            <a href="#" className="text-[#2196f3] text-xl font-light hover:underline">see all categories</a>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: "personal branding", articles: 10, img: "https://picsum.photos/seed/branding/600/400" },
              { title: "job interview", articles: 16, img: "https://picsum.photos/seed/jobinterview/600/400" },
              { title: "career development", articles: 57, img: "https://picsum.photos/seed/dev/600/400" }
            ].map((card, i) => (
              <div key={i} className="space-y-4 group cursor-pointer">
                <div className="overflow-hidden rounded-lg">
                  <img 
                    src={card.img} 
                    alt={card.title} 
                    className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-105"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <p className="text-gray-400 text-sm">{card.articles} articles</p>
                <h3 className="text-2xl font-light group-hover:text-[#2196f3] transition-colors">{card.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#001941] text-white pt-20 pb-12 px-4 md:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-12 mb-20">
            <div>
              <h4 className="text-xl font-medium mb-8">find a job</h4>
              <ul className="space-y-4 text-sm opacity-70 font-light">
                {['explore all jobs', 'submit your cv', 'join our team', 'refer a friend'].map(item => (
                  <li key={item}><a href="#" className="hover:text-white transition-colors">{item}</a></li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="text-xl font-medium mb-8">for employers</h4>
              <ul className="space-y-4 text-sm opacity-70 font-light">
                {['submit a vacancy', 'request a callback', 'our services', 'specialisms', 'case studies', 'testimonials'].map(item => (
                  <li key={item}><a href="#" className="hover:text-white transition-colors">{item}</a></li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="text-xl font-medium mb-8">workforce insights</h4>
              <ul className="space-y-4 text-sm opacity-70 font-light">
                {['talent insights reports', 'employer brand research reports', 'salary trends reports', 'ed&i reports', 'workmonitor reports', 'startup hiring trends', 'talent pulse surveys'].map(item => (
                  <li key={item}><a href="#" className="hover:text-white transition-colors">{item}</a></li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="text-xl font-medium mb-8">jobs</h4>
              <ul className="space-y-4 text-sm opacity-70 font-light">
                {['engineering jobs', 'cxo jobs', 'manufacturing jobs', 'supply chain & logistics jobs', 'education jobs', 'finance & accounting jobs', 'healthcare jobs', 'hr & admin support jobs', 'ites/gcc jobs', 'legal & compliance jobs', 'sales & marketing jobs'].map(item => (
                  <li key={item}><a href="#" className="hover:text-white transition-colors">{item}</a></li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="text-xl font-medium mb-8">for talents</h4>
              <ul className="space-y-4 text-sm opacity-70 font-light">
                {['specialisms', 'testimonials', 'career advice', 'beware of job scams'].map(item => (
                  <li key={item}><a href="#" className="hover:text-white transition-colors">{item}</a></li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="text-xl font-medium mb-8">resources</h4>
              <ul className="space-y-4 text-sm opacity-70 font-light">
                {['case studies', 'press room', 'blogs'].map(item => (
                  <li key={item}><a href="#" className="hover:text-white transition-colors">{item}</a></li>
                ))}
              </ul>
            </div>
          </div>

          <div className="border-t border-white/10 pt-12">
            <div className="flex flex-wrap justify-between items-center gap-8 mb-12">
              <div className="flex space-x-6">
                <Linkedin className="w-6 h-6 opacity-60 hover:opacity-100 cursor-pointer" />
                <Twitter className="w-6 h-6 opacity-60 hover:opacity-100 cursor-pointer" />
                <Facebook className="w-6 h-6 opacity-60 hover:opacity-100 cursor-pointer" />
                <Youtube className="w-6 h-6 opacity-60 hover:opacity-100 cursor-pointer" />
                <Instagram className="w-6 h-6 opacity-60 hover:opacity-100 cursor-pointer" />
              </div>
              <p className="text-xs opacity-40 font-light">
                registered office: Randstad India Private Limited, CIN U74210TN1992PTC023097,/Randstad House, Old No. 5 & 5A, New No. 9, Pycrofts Garden Road, Nungambakkam, Chennai, TN - 600 006
              </p>
            </div>

            <div className="flex items-center space-x-4 mb-12">
              <div className="w-12 h-12 flex flex-col justify-center space-y-1">
                <div className="h-1 w-full bg-[#2196f3] rounded-full"></div>
                <div className="h-1 w-3/4 bg-[#2196f3] rounded-full"></div>
              </div>
              <span className="text-xs opacity-60 font-light uppercase tracking-widest">
                RANDSTAD, HUMAN FORWARD and SHAPING THE WORLD OF WORK are registered trademarks of © Randstad N.V. 2023
              </span>
            </div>

            <div className="space-y-6 text-sm opacity-70 font-light mb-12">
              <p>
                Security Advice: Randstad India does not charge any fee at any stage of its recruitment process from the candidate nor allows their employees to collect any fees from any candidates. <a href="#" className="underline">Click here to know more</a>
              </p>
              <p>
                EEO Statement: Randstad India is an Equal Employment Opportunity Employer. All qualified applicants receive consideration for employment without regard to race, color, religion, sex, sexual orientation, gender identity or expression, appearance, national origin, age, marital status, veteran status, or disability status, or any other characteristics. Our global mission is to become the world's most equitable and specialized talent company, and we actively embrace diversity and inclusion as the cornerstones of our success. To read more of Randstad India's work in the space of equity, diversity and inclusion please <a href="#" className="underline">click here</a>
              </p>
            </div>

            <div className="flex flex-wrap gap-x-8 gap-y-4 text-sm opacity-60 font-light">
              {['terms & conditions', 'cookies', 'misconduct reporting procedure', 'accessibility', 'be aware', 'sitemap', 'privacy statement'].map(item => (
                <a key={item} href="#" className="hover:text-white transition-colors">{item}</a>
              ))}
            </div>
          </div>
        </div>
      </footer>

      {/* Floating Cookie Icon */}
      <div className="fixed bottom-6 left-6 w-10 h-10 bg-[#2196f3] rounded-full flex items-center justify-center text-white shadow-lg cursor-pointer hover:scale-110 transition-transform z-[60]">
        <div className="w-6 h-6 border-2 border-white rounded-full border-dashed"></div>
      </div>

      {/* Floating Feedback Button */}
      <div className="fixed right-0 top-1/2 -translate-y-1/2 bg-[#2196f3] text-white py-4 px-2 rounded-l-md cursor-pointer hover:pr-4 transition-all z-[60] [writing-mode:vertical-rl] text-xs font-medium tracking-widest">
        FEEDBACK
      </div>
    </div>
  );
};

export default JoinOurTeam;
