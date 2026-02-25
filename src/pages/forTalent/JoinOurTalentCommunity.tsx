import React, { useState } from "react";
import { AnimatePresence, motion } from "motion/react";

import { 
  ChevronDown, 
  ChevronRight, 
  Search, 
  Heart, 
  User, 
  Linkedin, 
  Twitter, 
  Facebook, 
  Youtube, 
  Instagram,
  Menu,
  X
} from 'lucide-react';

// --- Components ---



const Hero = () => {
  return (
    <section className="bg-[#0a192f] text-white py-20 overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Breadcrumbs */}
        <div className="flex items-center space-x-2 text-xs text-gray-400 mb-12">
          <a href="#" className="hover:text-white">home</a>
          <ChevronRight className="w-3 h-3" />
          <a href="#" className="hover:text-white">for talent</a>
          <ChevronRight className="w-3 h-3" />
          <a href="#" className="hover:text-white">randstad bridging futures program</a>
          <ChevronRight className="w-3 h-3" />
          <span className="text-white">randstad bridging futures program for talent</span>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-5xl md:text-7xl font-light leading-tight mb-8">
              randstad bridging <br />
              futures program for <br />
              talent.
            </h1>
            <p className="text-lg text-gray-300 mb-10 max-w-lg leading-relaxed">
              Submit your details and resume: If your skills match our opportunities, 
              We'll reach out to you. Thank you for choosing randstad as your career partner. 
              Wishing you the best in your career journey.
            </p>
            <button className="border border-white px-10 py-4 text-sm font-medium hover:bg-white hover:text-[#0a192f] transition-colors">
              know more
            </button>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex justify-center md:justify-end"
          >
            <div className="relative w-64 h-64 md:w-96 md:h-96">
              {/* Circular Graphic */}
              <div className="absolute inset-0 border-4 border-blue-500/30 rounded-full"></div>
              <div className="absolute inset-4 border-4 border-blue-400/20 rounded-full"></div>
              <div className="absolute inset-0 border-t-4 border-blue-400 rounded-full animate-spin-slow"></div>
              
              {/* Dots on the circle */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-white rounded-full shadow-[0_0_15px_rgba(255,255,255,0.8)]"></div>
              <div className="absolute bottom-1/4 right-0 translate-x-1/2 w-3 h-3 bg-blue-300 rounded-full"></div>
              
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-3/4 h-3/4 bg-gradient-to-br from-blue-600/20 to-transparent rounded-full backdrop-blur-sm"></div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const CTASection = () => {
  return (
    <section className="bg-white py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <h2 className="text-4xl md:text-6xl font-light text-gray-900 leading-tight">
            if you're a college student or recent graduate, <br />
            <span className="text-blue-600">submit your resume and take the first step toward your career.</span>
          </h2>
          <div className="flex md:justify-end">
            <button className="border border-blue-600 text-blue-600 px-10 py-4 text-sm font-medium hover:bg-blue-600 hover:text-white transition-colors">
              submit your resume
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

const BenefitsSection = () => {
  const benefits = [
    "access to Randstad's broad network of employers opportunity to network with industry professionals, alumni and peers",
    "expert career guidance and skill development",
    "continuous career development and growth",
    "resume building and interview preparation support",
    "enhanced Job search experience through a streamlined application process"
  ];

  return (
    <section className="bg-[#f5f5f5] py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-12">
          <div className="md:col-span-1">
            <h2 className="text-3xl font-light text-[#0a192f] leading-tight">
              join randstad talent <br /> community.
            </h2>
          </div>
          <div className="md:col-span-2">
            <p className="text-lg text-gray-700 mb-8">Randstad Talent Community offers:</p>
            <ul className="space-y-6">
              {benefits.map((benefit, index) => (
                <motion.li 
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-start"
                >
                  <span className="text-blue-600 mr-4 mt-1.5">•</span>
                  <span className="text-gray-800 text-lg leading-relaxed">{benefit}</span>
                </motion.li>
              ))}
            </ul>
            <p className="mt-12 text-lg text-gray-700">Join by simply filling out the form!</p>
          </div>
        </div>
      </div>
    </section>
  );
};

const FAQSection = () => {
  const faqs = [
    {
      question: "what is a Randstad Talent Community?",
      answer: "The Randstad Talent Community is a platform designed to connect students and recent graduates with potential employers and career opportunities."
    },
    {
      question: "why should I join Randstad talent community?",
      answer: "Joining gives you access to a vast network, expert guidance, and tools to help you navigate your early career path effectively."
    },
    {
      question: "how to register ?",
      answer: "You can register by clicking the 'submit your resume' button and filling out the required details in our application form."
    },
    {
      question: "what is the way forward ?",
      answer: "Once you submit your details, our team will review your profile and match it with suitable opportunities from our partner employers."
    },
    {
      question: "is it a paid programme?",
      answer: "No, joining the Randstad Talent Community is completely free for students and job seekers."
    },
    {
      question: "how is my personal information used?",
      answer: "Your information is used solely for the purpose of matching you with career opportunities and providing relevant career guidance."
    },
    {
      question: "what happens after I join the talent community?",
      answer: "You will receive updates on job openings, career tips, and may be contacted by our recruiters for specific roles that match your profile."
    }
  ];

  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="bg-white py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-12">
          <div className="md:col-span-1">
            <h2 className="text-3xl font-light text-[#0a192f] leading-tight">
              frequently asked <br /> questions.
            </h2>
          </div>
          <div className="md:col-span-2">
            <div className="divide-y divide-gray-200">
              {faqs.map((faq, index) => (
                <div key={index} className="py-6">
                  <button 
                    onClick={() => setOpenIndex(openIndex === index ? null : index)}
                    className="flex justify-between items-center w-full text-left group"
                  >
                    <span className="text-xl text-gray-800 group-hover:text-blue-600 transition-colors">
                      {faq.question}
                    </span>
                    <ChevronDown className={`w-6 h-6 text-blue-600 transition-transform duration-300 ${openIndex === index ? 'rotate-180' : ''}`} />
                  </button>
                  <AnimatePresence>
                    {openIndex === index && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="overflow-hidden"
                      >
                        <p className="pt-4 text-gray-600 leading-relaxed">
                          {faq.answer}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};



const ForTalentJoinOurCommunity = () => {
  return (
    <div className="min-h-screen font-sans selection:bg-blue-100 selection:text-blue-900">
   
      <main>
        <Hero />
        <CTASection />
        <BenefitsSection />
        <FAQSection />
      </main>
    
      
      {/* Floating Feedback Button */}
      <div className="fixed right-0 top-1/2 -translate-y-1/2 z-40 hidden lg:block">
        <button className="bg-blue-500 text-white py-4 px-2 rounded-l-md text-xs font-bold uppercase tracking-widest [writing-mode:vertical-rl] rotate-180 hover:bg-blue-600 transition-colors">
          Feedback
        </button>
      </div>

      {/* Cookie Consent Icon */}
      <div className="fixed bottom-6 left-6 z-40">
        <button className="bg-blue-600 text-white p-3 rounded-full shadow-lg hover:bg-blue-700 transition-transform hover:scale-110">
          <div className="w-6 h-6 border-2 border-white rounded-full border-dashed animate-spin-slow"></div>
        </button>
      </div>
    </div>
  );
};

export default ForTalentJoinOurCommunity;
