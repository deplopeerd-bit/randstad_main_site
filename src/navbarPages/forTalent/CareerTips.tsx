import React, { useState } from "react";
import { AnimatePresence, motion } from "motion/react";

import { 
  Search, 
  User, 
  ChevronDown, 
  Linkedin, 
  Twitter, 
  Facebook, 
  Youtube, 
  Instagram,
  Play,
  ArrowRight,
  Menu,
  X,
  Heart
} from 'lucide-react';

interface AccordionItemProps {
  title: string;
  children: React.ReactNode;
  isOpen: boolean;
  onClick: () => void;
}

const AccordionItem: React.FC<AccordionItemProps> = ({ title, children, isOpen, onClick }) => {
  return (
    <div className="border-b border-gray-200 py-4">
      <button 
        className="w-full flex justify-between items-center text-left group"
        onClick={onClick}
      >
        <span className="text-xl font-medium text-[#14213d] group-hover:text-blue-600 transition-colors">
          {title}
        </span>
        <ChevronDown className={`w-6 h-6 text-blue-600 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <div className="pt-4 text-gray-600 leading-relaxed">
              {children}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default function ForTalentCareerTips() {
  const [openTip, setOpenTip] = useState<number | null>(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const careerTips = [
    { title: "1. set clear career goals", content: "Defining your long-term and short-term objectives is the first step toward a successful career. Understand what you want to achieve and create a roadmap to get there." },
    { title: "2. continuously improve your skills", content: "The job market is ever-evolving. Stay relevant by learning new technologies, attending workshops, and seeking certifications in your field." },
    { title: "3. build a professional network", content: "Networking isn't just about finding jobs; it's about building relationships. Connect with peers, mentors, and industry leaders on platforms like LinkedIn." },
    { title: "4. create a personal brand.", content: "Your personal brand is how you present yourself to the world. Ensure your online presence reflects your professional values and expertise." },
    { title: "5. stay adaptable.", content: "Flexibility is key in today's workplace. Be open to new ways of working, whether it's remote, hybrid, or learning a completely new role." },
    { title: "6. prioritize work-life balance.", content: "Success isn't just about professional achievements. Taking care of your mental and physical health is crucial for long-term productivity." },
    { title: "7. seek mentorship", content: "A mentor can provide invaluable guidance, share their experiences, and help you navigate complex career decisions." },
    { title: "8. take initiative.", content: "Don't wait for opportunities to come to you. Volunteer for new projects, suggest improvements, and show your value to the organization." },
    { title: "9. be open to feedback.", content: "Constructive criticism is a gift. Use it to identify your weaknesses and turn them into strengths." },
    { title: "10. be open to feedback.", content: "Continuous learning involves listening to others. Even at the top, there's always room for growth and improvement." },
  ];

  const latestUpdates = [
    {
      date: "02 August 2023",
      title: "randstad with heart.",
      image: "https://picsum.photos/seed/heart/800/500",
    },
    {
      date: "20 April 2023",
      title: "‘tips n tricks’ – to use the right communication channels and skills.",
      image: "https://picsum.photos/seed/tips/800/500",
    },
    {
      date: "17 April 2023",
      title: "what you should be aware of your performance management measures for remote work?",
      image: "https://picsum.photos/seed/performance/800/500",
    },
    {
      date: "17 April 2023",
      title: "in-office or remote work - which is better?",
      image: "https://picsum.photos/seed/office/800/500",
    },
    {
      date: "17 April 2023",
      title: "what are your responsibilities as a remote worker?",
      image: "https://picsum.photos/seed/remote/800/500",
    },
    {
      date: "17 April 2023",
      title: "how to stay healthy working from home or remote?",
      image: "https://picsum.photos/seed/healthy/800/500",
    },
  ];

  return (
    <div className="min-h-screen bg-white font-sans text-[#14213d]">
      {/* Top Bar */}
      <div className="bg-white border-b border-gray-100 py-2 px-4 md:px-12 flex justify-end items-center space-x-6 text-sm">
        <a href="#" className="hover:text-blue-600 transition-colors">contact us</a>
      </div>

      {/* Header */}
      

      {/* Hero Section */}
      <section className="bg-[#14213d] text-white py-16 md:py-24 overflow-hidden relative">
        <div className="max-w-7xl mx-auto px-4 md:px-12">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="md:w-1/2 z-10">
              <div className="flex items-center space-x-2 text-sm mb-8 text-gray-400">
                <a href="#" className="hover:text-white">home</a>
                <span>&gt;</span>
                <a href="#" className="hover:text-white">career advice</a>
                <span>&gt;</span>
                <span className="text-white">career tips</span>
              </div>
              <h2 className="text-2xl mb-4 font-light">career advice.</h2>
              <h1 className="text-5xl md:text-7xl font-medium mb-4 leading-tight">
                learn more about: <br />
                <span className="text-blue-400 flex items-center">
                  career tips <ChevronDown className="ml-4 w-12 h-12" />
                </span>
              </h1>
              <p className="text-xl text-gray-300">Discover how to improve your career.</p>
            </div>
            <div className="md:w-1/2 mt-12 md:mt-0 relative">
              {/* Speech Bubble Illustration */}
              <div className="relative w-full max-w-md mx-auto">
                <div className="bg-white/10 backdrop-blur-sm rounded-[40px] p-8 aspect-square flex items-center justify-center">
                  <div className="relative w-full h-full">
                    <div className="absolute top-1/4 left-1/4 w-32 h-20 border-4 border-blue-400 rounded-full opacity-50"></div>
                    <div className="absolute top-1/2 right-1/4 w-40 h-24 border-4 border-white rounded-full"></div>
                    <div className="absolute bottom-1/4 left-1/3 w-24 h-16 border-4 border-blue-300 rounded-full opacity-30"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Floating Feedback Tab */}
        <div className="fixed right-0 top-1/2 -rotate-90 translate-x-1/2 z-40">
          <button className="bg-blue-600 text-white px-4 py-2 text-sm font-medium rounded-t-lg shadow-lg">
            Feedback
          </button>
        </div>
      </section>

      {/* Top 10 Tips Section */}
      <section className="py-20 max-w-7xl mx-auto px-4 md:px-12">
        <div className="grid md:grid-cols-3 gap-12">
          <div className="md:col-span-1">
            <h2 className="text-3xl font-medium leading-tight">
              top 10 career tips for success.
            </h2>
          </div>
          <div className="md:col-span-2">
            <p className="text-lg text-gray-600 mb-8">strategies to advance your professional journey.</p>
            <div className="space-y-2">
              {careerTips.map((tip, index) => (
                <AccordionItem 
                  key={index}
                  title={tip.title}
                  isOpen={openTip === index}
                  onClick={() => setOpenTip(openTip === index ? null : index)}
                >
                  {tip.content}
                </AccordionItem>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Video Section */}
      <section className="bg-[#f5f2ed] py-20">
        <div className="max-w-7xl mx-auto px-4 md:px-12">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-5xl md:text-6xl font-medium mb-6 leading-tight">
                3 hobbies of successful people.
              </h2>
              <p className="text-xl text-gray-600 mb-8">hobbies gives you an opportunity to enhance your life.</p>
              <button className="border-2 border-[#14213d] px-8 py-3 text-lg font-medium hover:bg-[#14213d] hover:text-white transition-all">
                play the video
              </button>
            </div>
            <div className="relative">
              <div className="aspect-video bg-white rounded-xl shadow-2xl overflow-hidden relative group cursor-pointer">
                <img 
                  src="https://picsum.photos/seed/success/1200/800" 
                  alt="Successful people" 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
                  <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                    <Play className="w-8 h-8 text-blue-600 fill-blue-600 ml-1" />
                  </div>
                </div>
                {/* Circular graphic overlay */}
                <div className="absolute -top-10 -right-10 w-40 h-40 border-8 border-blue-400 rounded-full opacity-20"></div>
                <div className="absolute -bottom-10 -left-10 w-60 h-60 border-8 border-blue-600 rounded-full opacity-10"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Articles Section */}
      <section className="py-20 max-w-7xl mx-auto px-4 md:px-12">
        <div className="grid md:grid-cols-3 gap-12">
          <div className="md:col-span-1">
            <h2 className="text-3xl font-medium">career tips.</h2>
          </div>
          <div className="md:col-span-2">
            <p className="text-lg text-gray-600 mb-8">related articles.</p>
            <div className="space-y-4">
              {[
                "i quit! your 7 point checklist on how to resign the right way.",
                "how to tell when it's the time to find a new job.",
                "build a winning personal brand on LinkedIn",
                "6 tips to make your online personal brand stand out."
              ].map((article, i) => (
                <div key={i} className="flex justify-between items-center py-4 border-b border-gray-100 group cursor-pointer">
                  <span className="text-xl group-hover:text-blue-600 transition-colors">{article}</span>
                  <ChevronDown className="w-6 h-6 text-blue-600" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Latest Updates Section */}
      <section className="bg-[#f5f2ed] py-20">
        <div className="max-w-7xl mx-auto px-4 md:px-12">
          <div className="flex justify-between items-end mb-12">
            <h2 className="text-4xl font-medium">latest updates</h2>
            <a href="#" className="text-xl flex items-center space-x-2 hover:text-blue-600 transition-colors">
              <span>see all articles</span>
            </a>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {latestUpdates.map((update, i) => (
              <div key={i} className="group cursor-pointer">
                <div className="aspect-[16/10] overflow-hidden rounded-lg mb-4">
                  <img 
                    src={update.image} 
                    alt={update.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <p className="text-sm text-gray-500 mb-2">{update.date}</p>
                <h3 className="text-xl font-medium group-hover:text-blue-600 transition-colors leading-snug">
                  {update.title}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 md:px-12">
          <div className="bg-[#f5f2ed] rounded-3xl p-12 md:p-20 flex flex-col md:flex-row items-center justify-between relative overflow-hidden">
            <div className="md:w-1/2 z-10">
              <h2 className="text-5xl md:text-7xl font-medium mb-8 leading-tight">
                get in touch or explore available jobs.
              </h2>
              <button className="border-2 border-[#14213d] px-10 py-4 text-xl font-medium hover:bg-[#14213d] hover:text-white transition-all">
                contact us
              </button>
            </div>
            <div className="md:w-1/2 mt-12 md:mt-0 flex justify-center">
              <div className="relative w-64 h-96 border-8 border-blue-400 rounded-[40px] flex items-center justify-center">
                <div className="w-12 h-1 bg-blue-400 rounded-full absolute top-8"></div>
                <div className="w-4 h-4 bg-blue-400 rounded-full absolute bottom-8"></div>
                <div className="w-full h-full flex items-center justify-center">
                   <div className="w-40 h-40 border-4 border-blue-400 rounded-full opacity-20 animate-ping"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      

      {/* Cookie Consent Floating Button */}
      <div className="fixed bottom-6 left-6 z-50">
        <button className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center shadow-xl hover:bg-blue-700 transition-colors">
          <div className="w-6 h-6 border-2 border-white rounded-full relative">
            <div className="absolute top-1 left-1 w-1 h-1 bg-white rounded-full"></div>
            <div className="absolute top-1 right-1 w-1 h-1 bg-white rounded-full"></div>
            <div className="absolute bottom-1 left-2 w-1 h-1 bg-white rounded-full"></div>
            <div className="absolute top-2 right-2 w-1 h-1 bg-white rounded-full"></div>
          </div>
        </button>
      </div>
    </div>
  );
}
