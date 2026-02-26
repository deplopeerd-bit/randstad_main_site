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

export default function ForTalentJobSeekerToolkit() {
  return (
    <div className="min-h-screen bg-[#f5f2ed] font-sans text-[#0a1a3c]">
      {/* Header */}
      

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
      
    </div>
  );
}
