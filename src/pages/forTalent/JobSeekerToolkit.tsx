import React, { useState } from "react";
import { AnimatePresence, motion } from "motion/react";

import { 
  Search, 
  Heart, 
  MapPin, 
  Briefcase, 
  ChevronDown, 
  ChevronUp,
  Linkedin,
  Facebook,
  Youtube,
  Instagram,
  User,
  PhoneCall,
  Info
} from 'lucide-react';

// --- Types ---
interface JobCardProps {
  title: string;
  location: string;
  type: string;
  date: string;
}

interface StepCardProps {
  image: string;
  title: string;
}

interface AccordionProps {
  title: string;
  content: string;
}

// --- Components ---

const JobCard: React.FC<JobCardProps> = ({ title, location, type, date }) => (
  <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 flex flex-col h-full">
    <div className="flex justify-between items-start mb-4">
      <h3 className="text-blue-600 font-medium text-lg hover:underline cursor-pointer">{title}</h3>
      <button className="text-gray-400 hover:text-red-500 transition-colors">
        <Heart size={20} />
      </button>
    </div>
    <div className="space-y-2 mb-6 flex-grow">
      <div className="flex items-center text-gray-600 text-sm">
        <MapPin size={16} className="mr-2" />
        {location}
      </div>
      <div className="flex items-center text-gray-600 text-sm">
        <Briefcase size={16} className="mr-2" />
        {type}
      </div>
    </div>
    <div className="flex justify-between items-center pt-4 border-t border-gray-100 text-xs text-gray-400">
      <span>posted {date}</span>
      <Info size={16} className="cursor-pointer hover:text-blue-600" />
    </div>
  </div>
);

const StepCard: React.FC<StepCardProps> = ({ image, title }) => (
  <div className="relative group overflow-hidden rounded-xl aspect-[4/5] cursor-pointer">
    <img 
      src={image} 
      alt={title} 
      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
      referrerPolicy="no-referrer"
    />
    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
    <div className="absolute bottom-0 left-0 p-6 w-full">
      <h3 className="text-white text-xl font-medium leading-tight group-hover:underline">
        {title}
      </h3>
    </div>
  </div>
);

const Accordion: React.FC<AccordionProps> = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-white/20">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full py-6 flex justify-between items-center text-left text-white hover:opacity-80 transition-opacity"
      >
        <span className="text-xl font-medium">{title}</span>
        {isOpen ? <ChevronUp size={24} /> : <ChevronDown size={24} />}
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden"
          >
            <div className="pb-6 text-white/70 leading-relaxed">
              {content}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

// --- Main Page Component ---

export default function JobSeekerToolkit() {
  return (
    <div className="min-h-screen bg-[#f5f2ed] font-sans text-[#0a1a3c]">
      {/* Header */}
      <header className="bg-white sticky top-0 z-50 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <div className="flex items-center">
              <div className="flex items-center space-x-1">
                <div className="w-8 h-8 bg-blue-600 rounded-sm flex items-center justify-center">
                   <span className="text-white font-bold text-xl">r</span>
                </div>
                <span className="text-[#0a1a3c] text-2xl font-bold tracking-tight">randstad</span>
              </div>
            </div>

            {/* Desktop Nav */}
            <nav className="hidden md:flex space-x-8 items-center">
              {['find a job', 'for talent', 'for employer', 'resources', 'about us'].map((item) => (
                <div key={item} className="flex items-center cursor-pointer group">
                  <span className="text-sm font-medium capitalize group-hover:text-blue-600">{item}</span>
                  <ChevronDown size={14} className="ml-1 group-hover:text-blue-600" />
                </div>
              ))}
            </nav>

            {/* Right Actions */}
            <div className="flex items-center space-x-6">
              <a href="#" className="text-xs font-medium text-gray-500 hover:text-blue-600 hidden lg:block">contact us</a>
              <div className="flex items-center space-x-1 cursor-pointer group">
                <Heart size={18} className="text-gray-400 group-hover:text-red-500" />
                <span className="text-sm font-medium">0</span>
              </div>
              <div className="flex items-center space-x-2 cursor-pointer bg-gray-100 px-4 py-2 rounded-full hover:bg-gray-200 transition-colors">
                <User size={18} />
                <span className="text-sm font-medium">my randstad</span>
              </div>
            </div>
          </div>
        </div>
      </header>

      <main>
        {/* Hero Section */}
        <section className="bg-[#0a1a3c] text-white py-20 overflow-hidden relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <nav className="text-xs text-white/60 mb-8 flex space-x-2">
                  <span>home</span>
                  <span>&gt;</span>
                  <span>job seekers</span>
                  <span>&gt;</span>
                  <span className="text-white">job seeker toolkit</span>
                </nav>
                <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-8">
                  welcome to your job seeker toolkit.
                </h1>
                <p className="text-xl text-white/80 mb-10 max-w-lg">
                  We've created a series of steps in order to propel you forward in your job search.
                </p>
                <button className="border-2 border-white px-10 py-4 rounded-md text-lg font-medium hover:bg-white hover:text-[#0a1a3c] transition-all">
                  let's go
                </button>
              </div>
              <div className="hidden md:flex justify-center items-center">
                <div className="relative w-80 h-80">
                  <div className="absolute inset-0 border-8 border-blue-400/30 rounded-full" />
                  <div className="absolute inset-4 border-8 border-blue-400/50 rounded-full" />
                  <div className="absolute inset-8 border-8 border-blue-400 rounded-full flex items-center justify-center">
                    <Search size={80} className="text-blue-400" />
                  </div>
                  {/* Animated ring */}
                  <motion.div 
                    animate={{ rotate: 360 }}
                    transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                    className="absolute inset-0 border-t-8 border-blue-400 rounded-full"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Journey Section */}
        <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-16">where are you on your job journey...</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <StepCard image="https://picsum.photos/seed/journey1/800/1000" title="thinking about changing jobs?" />
            <StepCard image="https://picsum.photos/seed/journey2/800/1000" title="preparing to apply for new roles?" />
            <StepCard image="https://picsum.photos/seed/journey3/800/1000" title="getting ready for interviews?" />
            <StepCard image="https://picsum.photos/seed/journey4/800/1000" title="negotiating your job offer?" />
          </div>
        </section>

        {/* Why Randstad Section */}
        <section className="bg-[#0a1a3c] text-white py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-16 items-center">
              <h2 className="text-3xl font-bold">why work with randstad?</h2>
              <div className="space-y-8">
                <p className="text-4xl font-light leading-snug">
                  Our goal as recruiters is to find the perfect job for you by considering your needs, goals, and personality. We believe that when your job makes you happy, you're more likely to thrive every day.
                </p>
                <button className="border-2 border-white px-8 py-3 rounded-md font-medium hover:bg-white hover:text-[#0a1a3c] transition-all">
                  learn more
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Step 1 Section */}
        <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-16">step 1: is it time to move?</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <StepCard image="https://picsum.photos/seed/step1a/800/1000" title="how to tell it's time to change jobs." />
            <StepCard image="https://picsum.photos/seed/step1b/800/1000" title="how to resign." />
            <StepCard image="https://picsum.photos/seed/step1c/800/1000" title="how to find a new job." />
            <StepCard image="https://picsum.photos/seed/step1d/800/1000" title="why you should partner with a recruitment specialist." />
          </div>
        </section>

        {/* Step 2 Section */}
        <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-16">step 2: preparing to apply for new roles.</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <StepCard image="https://picsum.photos/seed/step2a/800/1000" title="how to write a resume." />
            <StepCard image="https://picsum.photos/seed/step2b/800/1000" title="how to write a cover letter." />
            <StepCard image="https://picsum.photos/seed/step2c/800/1000" title="how to stand out with your linkedin profile." />
            <StepCard image="https://picsum.photos/seed/step2d/800/1000" title="preparing your online footprint for a job search." />
          </div>
        </section>

        {/* Ready Section */}
        <section className="bg-[#0a1a3c] text-white py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-16 items-center">
              <h2 className="text-3xl font-bold">are you ready?</h2>
              <div className="space-y-8">
                <p className="text-5xl font-bold leading-tight">
                  apply for a job today.
                </p>
                <button className="border-2 border-white px-10 py-4 rounded-md text-lg font-medium hover:bg-white hover:text-[#0a1a3c] transition-all">
                  apply now
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Related Jobs Section */}
        <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-end mb-12">
            <h2 className="text-4xl font-bold">related jobs.</h2>
            <a href="#" className="text-blue-600 font-medium hover:underline text-lg">see all jobs</a>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <JobCard 
              title="publishing ethics expert" 
              location="chennai, tamil nadu" 
              type="temporary" 
              date="24 february 2026" 
            />
            <JobCard 
              title="associate" 
              location="hyderabad, telangana" 
              type="permanent" 
              date="24 february 2026" 
            />
            <JobCard 
              title="sr data analyst" 
              location="hyderabad, telangana" 
              type="permanent" 
              date="24 february 2026" 
            />
          </div>
        </section>

        {/* Step 3 Section */}
        <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-16">step 3: preparing for the interview.</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <StepCard image="https://picsum.photos/seed/step3a/800/1000" title="elevator pitch." />
            <StepCard image="https://picsum.photos/seed/step3b/800/1000" title="how to prepare for a job interview." />
            <StepCard image="https://picsum.photos/seed/step3c/800/1000" title="preparing for a video interview." />
            <StepCard image="https://picsum.photos/seed/step3d/800/1000" title="how to answer hard interview questions." />
          </div>
        </section>

        {/* Step 4 Section */}
        <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-16">step 4: negotiating your job offer.</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <StepCard image="https://picsum.photos/seed/step4a/1200/800" title="how to negotiate a job offer." />
            <StepCard image="https://picsum.photos/seed/step4b/1200/800" title="how to reject a job offer." />
          </div>
        </section>

        {/* Bytes Section */}
        <section className="bg-[#0a1a3c] text-white py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-16">
              <h2 className="text-3xl font-bold">bytes that you can chew.</h2>
              <div className="space-y-4">
                <p className="text-xl text-white/70 mb-12">
                  download our byte-sized cheat sheets for tips and tricks across the virtual interview lifecycle and make your virtual interview handshake count.
                </p>
                <Accordion 
                  title="cheat sheet 1: make technology count" 
                  content="Ensure your internet connection is stable, test your audio and video settings beforehand, and choose a professional background." 
                />
                <Accordion 
                  title="cheat sheet 2: dress to make an impact" 
                  content="Even for virtual interviews, dressing professionally shows respect and helps you get into the right mindset." 
                />
                <Accordion 
                  title="cheat sheet 3: prepare, prepare, prepare" 
                  content="Research the company, practice common interview questions, and have your own questions ready for the interviewer." 
                />
                <Accordion 
                  title="cheat sheet 4: shut out those distractions" 
                  content="Find a quiet space, notify others in your household, and turn off notifications on your devices." 
                />
                <Accordion 
                  title="cheat sheet 5: mind your body language!" 
                  content="Maintain eye contact by looking at the camera, sit up straight, and use natural gestures." 
                />
                <Accordion 
                  title="cheat sheet 6: build your rapport" 
                  content="Start with a friendly greeting, engage in small talk if appropriate, and show enthusiasm for the role." 
                />
                <Accordion 
                  title="cheat sheet 7: be your true self" 
                  content="Authenticity is key. Share your genuine experiences and let your personality shine through." 
                />
                <Accordion 
                  title="cheat sheet 8: last-mile follow up" 
                  content="Send a thank-you note within 24 hours, reiterating your interest and highlighting a key point from the conversation." 
                />
                <Accordion 
                  title="cheat sheet 9: develop your behavioural skills" 
                  content="Focus on soft skills like communication, problem-solving, and adaptability which are highly valued by employers." 
                />
              </div>
            </div>
          </div>
        </section>

        {/* Specialist Section */}
        <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 bg-white">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <h2 className="text-5xl font-bold leading-tight">
              want to talk to a recruitment specialist?
            </h2>
            <div className="flex justify-end">
              <button className="border-2 border-blue-600 text-blue-600 px-10 py-4 rounded-md text-lg font-medium hover:bg-blue-600 hover:text-white transition-all">
                get in touch
              </button>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-[#0a1a3c] text-white pt-24 pb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-12 mb-20">
            <div className="col-span-2 lg:col-span-1">
               <h4 className="text-xl font-bold mb-8">find a job</h4>
               <ul className="space-y-4 text-white/60 text-sm">
                 <li className="hover:text-white cursor-pointer">explore all jobs</li>
                 <li className="hover:text-white cursor-pointer">submit your cv</li>
                 <li className="hover:text-white cursor-pointer">join our team</li>
                 <li className="hover:text-white cursor-pointer">refer a friend</li>
               </ul>
            </div>
            <div className="col-span-2 lg:col-span-1">
               <h4 className="text-xl font-bold mb-8">for employers</h4>
               <ul className="space-y-4 text-white/60 text-sm">
                 <li className="hover:text-white cursor-pointer">submit a vacancy</li>
                 <li className="hover:text-white cursor-pointer">request a callback</li>
                 <li className="hover:text-white cursor-pointer">our services</li>
                 <li className="hover:text-white cursor-pointer">specialisms</li>
                 <li className="hover:text-white cursor-pointer">case studies</li>
                 <li className="hover:text-white cursor-pointer">testimonials</li>
               </ul>
            </div>
            <div className="col-span-2 lg:col-span-1">
               <h4 className="text-xl font-bold mb-8">workforce insights</h4>
               <ul className="space-y-4 text-white/60 text-sm">
                 <li className="hover:text-white cursor-pointer">talent insights reports</li>
                 <li className="hover:text-white cursor-pointer">employer brand research reports</li>
                 <li className="hover:text-white cursor-pointer">salary trends reports</li>
                 <li className="hover:text-white cursor-pointer">ed&i reports</li>
                 <li className="hover:text-white cursor-pointer">workmonitor reports</li>
                 <li className="hover:text-white cursor-pointer">startup hiring trends</li>
                 <li className="hover:text-white cursor-pointer">talent pulse surveys</li>
               </ul>
            </div>
            <div className="col-span-2 lg:col-span-1">
               <h4 className="text-xl font-bold mb-8">jobs</h4>
               <ul className="space-y-4 text-white/60 text-sm">
                 <li className="hover:text-white cursor-pointer">engineering jobs</li>
                 <li className="hover:text-white cursor-pointer">cxo jobs</li>
                 <li className="hover:text-white cursor-pointer">manufacturing jobs</li>
                 <li className="hover:text-white cursor-pointer">supply chain & logistics jobs</li>
                 <li className="hover:text-white cursor-pointer">education jobs</li>
                 <li className="hover:text-white cursor-pointer">finance & accounting jobs</li>
                 <li className="hover:text-white cursor-pointer">healthcare jobs</li>
                 <li className="hover:text-white cursor-pointer">hr & admin support jobs</li>
                 <li className="hover:text-white cursor-pointer">ites/gcc jobs</li>
                 <li className="hover:text-white cursor-pointer">legal & compliance jobs</li>
                 <li className="hover:text-white cursor-pointer">sales & marketing jobs</li>
               </ul>
            </div>
            <div className="col-span-2 lg:col-span-1">
               <h4 className="text-xl font-bold mb-8">for talents</h4>
               <ul className="space-y-4 text-white/60 text-sm">
                 <li className="hover:text-white cursor-pointer">specialisms</li>
                 <li className="hover:text-white cursor-pointer">testimonials</li>
                 <li className="hover:text-white cursor-pointer">career advice</li>
                 <li className="hover:text-white cursor-pointer">beware of job scams</li>
               </ul>
            </div>
            <div className="col-span-2 lg:col-span-1">
               <h4 className="text-xl font-bold mb-8">resources</h4>
               <ul className="space-y-4 text-white/60 text-sm">
                 <li className="hover:text-white cursor-pointer">case studies</li>
                 <li className="hover:text-white cursor-pointer">press room</li>
                 <li className="hover:text-white cursor-pointer">blogs</li>
               </ul>
            </div>
          </div>

          <div className="border-t border-white/10 pt-12">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-8 md:space-y-0">
              <div className="flex space-x-6">
                <Linkedin className="text-white/60 hover:text-white cursor-pointer" size={24} />
                <div className="text-white/60 hover:text-white cursor-pointer font-bold text-xl">X</div>
                <Facebook className="text-white/60 hover:text-white cursor-pointer" size={24} />
                <Youtube className="text-white/60 hover:text-white cursor-pointer" size={24} />
                <Instagram className="text-white/60 hover:text-white cursor-pointer" size={24} />
              </div>
              <div className="text-white/40 text-xs text-center md:text-left max-w-2xl">
                registered office: Randstad India Private Limited, CIN U74210TN1992PTC023097, Randstad House, Old No. 5 & 5A, New No. 9, Pycrofts Garden Road, Nungambakkam, Chennai, TN - 600 006
              </div>
            </div>
            
            <div className="mt-12 flex flex-col items-center">
               <div className="flex items-center space-x-2 mb-8">
                 <span className="text-white/60 text-xs">RANDSTAD,</span>
                 <div className="flex items-center space-x-1">
                    <div className="w-4 h-4 bg-blue-400 rounded-sm" />
                    <span className="text-white font-bold text-sm">randstad</span>
                 </div>
                 <span className="text-white/40 text-[10px] uppercase tracking-widest">human forward and shaping the world of work are registered trademarks of © Randstad N.V. 2023</span>
               </div>

               <div className="bg-white/5 p-8 rounded-lg text-xs text-white/60 space-y-6 max-w-5xl">
                 <p>
                   <span className="text-white font-bold">Security Advice:</span> Randstad India does not charge any fee at any stage of its recruitment process from the candidate nor allows their employees to collect any fees from any candidates. <a href="#" className="text-blue-400 hover:underline">Click here to know more</a>
                 </p>
                 <p>
                   <span className="text-white font-bold">EEO Statement:</span> Randstad India is an Equal Employment Opportunity Employer. All qualified applicants receive consideration for employment without regard to race, color, religion, sex, sexual orientation, gender identity or expression, appearance, national origin, age, marital status, veteran status, or disability status, or any other characteristics. Our global mission is to become the world's most equitable and specialized talent company, and we actively embrace diversity and inclusion as the cornerstones of our success. To read more of Randstad India's work in the space of equity, diversity and inclusion please <a href="#" className="text-blue-400 hover:underline">click here</a>
                 </p>
               </div>

               <div className="mt-12 flex flex-wrap justify-center gap-x-8 gap-y-4 text-xs text-white/60">
                 {['terms & conditions', 'cookies', 'misconduct reporting procedure', 'accessibility', 'be aware', 'sitemap', 'privacy statement'].map(link => (
                   <a key={link} href="#" className="hover:text-white transition-colors">{link}</a>
                 ))}
               </div>
            </div>
          </div>
        </div>

        {/* Floating Feedback Button */}
        <div className="fixed right-0 top-1/2 -translate-y-1/2 rotate-90 origin-right">
          <button className="bg-blue-500 text-white px-4 py-2 text-xs font-bold rounded-t-md hover:bg-blue-600 transition-colors">
            Feedback
          </button>
        </div>

        {/* Cookie Icon */}
        <div className="fixed bottom-6 left-6">
          <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white shadow-lg cursor-pointer hover:scale-110 transition-transform">
            <Info size={24} />
          </div>
        </div>
      </footer>
    </div>
  );
}
