import React from "react";
import { motion } from "motion/react";

import { 
  Search, 
  MapPin, 
  ChevronRight, 
  Heart, 
  User, 
  Linkedin, 
  Twitter, 
  Facebook, 
  Youtube, 
  Instagram,
  ArrowRight
} from 'lucide-react';

const WholesaleRetailPage: React.FC = () => {
  return (
    <div className="min-h-screen font-sans text-[#141414] bg-white">
      {/* Top Bar */}
      <div className="border-bottom border-gray-100 py-2 px-4 md:px-12 flex justify-end text-xs font-medium text-gray-600">
        <a href="#" className="hover:underline">contact us</a>
      </div>

      {/* Navigation */}
      

      {/* Breadcrumbs */}
      <div className="px-4 md:px-12 py-4 text-xs text-gray-500 flex gap-2">
        <a href="#" className="hover:underline">home</a>
        <span>&gt;</span>
        <a href="#" className="hover:underline">professional career</a>
        <span>&gt;</span>
        <span className="font-semibold text-gray-800">wholesale & retail</span>
      </div>

      {/* Hero Section */}
      <section className="bg-[#0a1633] text-white py-20 px-4 md:px-12 relative overflow-hidden">
        <div className="max-w-4xl relative z-10">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-bold leading-tight mb-8"
          >
            a partner for wholesale and retail professionals.
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl md:text-2xl mb-12 max-w-2xl opacity-90"
          >
            Find the right job, love what you do, and develop your career. With access to a wide range of roles with top employers, a global community of professional peers, and specialized training and support, we'll be your guiding partner and help you build a rewarding career.
          </motion.p>
          <motion.button 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="border-2 border-white px-8 py-3 rounded-md font-semibold hover:bg-white hover:text-[#0a1633] transition-colors"
          >
            explore available jobs
          </motion.button>
        </div>
        
        {/* Abstract Graphics */}
        <div className="absolute right-[-10%] top-1/2 -translate-y-1/2 flex items-center gap-4 opacity-80">
          <div className="w-16 h-16 rounded-full bg-[#8a2be2]"></div>
          <div className="w-24 h-24 rounded-full bg-[#a020f0]"></div>
          <div className="w-[400px] h-[400px] rounded-full border-[60px] border-[#8a2be2] flex items-center justify-center">
            <div className="w-full h-full rounded-full border-[1px] border-white/20"></div>
          </div>
          <div className="w-32 h-32 rounded-full bg-[#4b0082]"></div>
        </div>
      </section>

      {/* What We Do Section */}
      <section className="flex flex-col md:flex-row min-h-[600px]">
        <div className="flex-1 p-8 md:p-24 flex flex-col justify-center">
          <h2 className="text-5xl font-bold mb-8">what we do.</h2>
          <p className="text-lg text-gray-700 leading-relaxed max-w-lg">
            India's wholesale and retail landscape offers dynamic, rewarding opportunities for driven professionals. Whether you're in sales, management, or operations, we understand the unique skills and industry knowledge required for success. Our expert recruiters match talent to roles that align with your expertise and career goals, ensuring the perfect fit for both clients and candidates.
          </p>
        </div>
        <div className="flex-1 relative bg-gray-100 overflow-hidden min-h-[400px]">
          <img 
            src="https://picsum.photos/seed/retail1/1200/800" 
            alt="Retail professional" 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute top-1/4 left-1/4 w-48 h-48 bg-[#8a2be2] rounded-3xl opacity-90 mix-blend-multiply"></div>
          <div className="absolute bottom-1/4 right-1/4 w-32 h-32 bg-[#a020f0] rounded-2xl opacity-70 mix-blend-screen"></div>
          <div className="absolute bottom-10 right-10 w-16 h-16 bg-[#4b0082] rounded-xl"></div>
        </div>
      </section>

      {/* What We Offer Section */}
      <section className="flex flex-col md:flex-row-reverse min-h-[600px]">
        <div className="flex-1 p-8 md:p-24 flex flex-col justify-center bg-[#0a1633] text-white">
          <h2 className="text-5xl font-bold mb-8">what we offer you.</h2>
          <p className="text-lg opacity-90 leading-relaxed max-w-lg">
            Your career in wholesale and retail sales is about building relationships, industry expertise, and hitting targets. We support your growth with tailored guidance, top-tier training, and insights into the latest trends. Join our network to connect with peers, share strategies, and stay ahead in this competitive field.
          </p>
        </div>
        <div className="flex-1 relative bg-gray-100 overflow-hidden min-h-[400px]">
          <img 
            src="https://picsum.photos/seed/retail2/1200/800" 
            alt="Retail team" 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] rounded-full border-[50px] border-[#8a2be2] opacity-80"></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] rounded-full border-[1px] border-white/30"></div>
        </div>
      </section>

      {/* Learn More Section */}
      <section className="flex flex-col md:flex-row min-h-[600px]">
        <div className="flex-1 p-8 md:p-24 flex flex-col justify-center bg-[#0a1633] text-white">
          <h2 className="text-5xl font-bold mb-8">learn more about job roles in wholesale and retail.</h2>
          <p className="text-lg opacity-90 leading-relaxed max-w-lg mb-12">
            Our job profiles have been created to familiarize you with the responsibilities and day-to-day activities of a number of key job roles, so you can make the right decision before applying for a job. Start exploring qualifications, responsibilities, pay rates and more in each job.
          </p>
          <button className="w-fit border-2 border-white px-8 py-3 rounded-md font-semibold hover:bg-white hover:text-[#0a1633] transition-colors">
            learn more
          </button>
        </div>
        <div className="flex-1 relative bg-gray-100 overflow-hidden min-h-[400px]">
          <img 
            src="https://picsum.photos/seed/retail3/1200/800" 
            alt="Retail manager" 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute top-1/2 right-10 -translate-y-1/2 w-64 h-64 rounded-full bg-[#8a2be2] opacity-80 flex items-center justify-center">
             <div className="w-full h-full rounded-full border-[1px] border-white/20 scale-125"></div>
          </div>
          <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-16 h-16 rounded-full bg-[#a020f0]"></div>
        </div>
      </section>

      {/* Latest Updates Section */}
      <section className="py-24 px-4 md:px-12 bg-white">
        <div className="flex justify-between items-end mb-12">
          <h2 className="text-4xl font-bold">latest updates</h2>
          <a href="#" className="text-[#0070ad] font-semibold flex items-center gap-1 hover:underline">
            see all articles
          </a>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              date: "02 August 2023",
              title: "randstad with heart.",
              image: "https://picsum.photos/seed/update1/600/400"
            },
            {
              date: "17 January 2023",
              title: "how to stand out in an interview.",
              image: "https://picsum.photos/seed/update2/600/400"
            },
            {
              date: "17 January 2023",
              title: "5 tips to ace your video interview.",
              image: "https://picsum.photos/seed/update3/600/400"
            },
            {
              date: "17 January 2023",
              title: "declining a job offer.",
              image: "https://picsum.photos/seed/update4/600/400"
            },
            {
              date: "17 January 2023",
              title: "how to negotiate and accept your job offer.",
              image: "https://picsum.photos/seed/update5/600/400"
            },
            {
              date: "12 January 2023",
              title: "prepare answers for tough interview questions.",
              image: "https://picsum.photos/seed/update6/600/400"
            }
          ].map((item, idx) => (
            <motion.div 
              key={idx}
              whileHover={{ y: -5 }}
              className="group cursor-pointer"
            >
              <div className="aspect-video overflow-hidden rounded-lg mb-4">
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
              </div>
              <p className="text-sm text-gray-500 mb-2">{item.date}</p>
              <h3 className="text-2xl font-bold group-hover:text-[#0070ad] transition-colors">{item.title}</h3>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Join Talent Pool Section */}
      <section className="flex flex-col md:flex-row min-h-[600px] bg-[#fdfaf6]">
        <div className="flex-1 p-8 md:p-24 flex flex-col justify-center">
          <h2 className="text-5xl font-bold mb-8 leading-tight">join our talent pool for future opportunities in wholesale and retail.</h2>
          <p className="text-lg text-gray-700 leading-relaxed max-w-lg mb-12">
            Can't find a job in the wholesale and retail sector that matches your interests? Submit your application and resume, and our team will contact you when a suitable opportunity arises.
          </p>
          <button className="w-fit border-2 border-[#141414] px-8 py-3 rounded-md font-semibold hover:bg-[#141414] hover:text-white transition-colors">
            submit resume now
          </button>
        </div>
        <div className="flex-1 relative overflow-hidden min-h-[400px]">
          <img 
            src="https://picsum.photos/seed/talent/1200/800" 
            alt="Talent pool" 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full border-[1px] border-[#8a2be2]/40"></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] rounded-full border-[1px] border-[#8a2be2]/20"></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-[#8a2be2] rounded-full opacity-90"></div>
        </div>
      </section>

      {/* FAQs Section */}
      <section className="bg-[#0a1633] text-white py-24 px-4 md:px-12 relative overflow-hidden">
        <div className="max-w-xl relative z-10">
          <p className="text-xl mb-4">FAQs</p>
          <h2 className="text-5xl font-bold mb-8">frequently asked questions and answers.</h2>
          <p className="text-lg opacity-80 mb-12">
            We provide answers to the most common questions that applicants and companies ask us about working with Randstad.
          </p>
          <button className="border-2 border-white px-8 py-3 rounded-md font-semibold hover:bg-white hover:text-[#0a1633] transition-colors">
            learn more
          </button>
        </div>
        
        {/* Abstract Speech Bubbles */}
        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-1/2 h-full flex items-center justify-center opacity-40">
           <div className="relative w-[500px] h-[350px]">
              <div className="absolute top-0 left-0 w-[400px] h-[250px] border-[40px] border-[#8a2be2] rounded-[100px]"></div>
              <div className="absolute bottom-0 right-0 w-[400px] h-[250px] bg-[#a020f0]/30 rounded-[100px] backdrop-blur-sm"></div>
           </div>
        </div>
      </section>

      {/* Branch Locator Section */}
      <section className="py-24 px-4 md:px-12 bg-[#fdfaf6] flex flex-col md:flex-row items-center justify-between gap-12">
        <div className="flex-1">
          <h2 className="text-6xl font-bold mb-6">we'd love to have you over.</h2>
          <p className="text-xl text-gray-600">find a branch close to you.</p>
          
          <div className="mt-12 flex max-w-md">
            <input 
              type="text" 
              placeholder="postcode / city" 
              className="flex-1 bg-white border border-gray-200 px-6 py-4 rounded-l-md focus:outline-none focus:border-[#0070ad]"
            />
            <button className="bg-[#0070ad] text-white px-6 py-4 rounded-r-md hover:bg-[#005a8c] transition-colors">
              <ArrowRight />
            </button>
          </div>
        </div>
        <div className="flex-1 flex justify-center">
          <div className="relative w-80 h-80">
            <MapPin size={320} className="text-[#8a2be2]" strokeWidth={1} />
            <div className="absolute bottom-10 left-1/2 -translate-x-1/2 w-48 h-4 bg-[#8a2be2]/20 rounded-full blur-md"></div>
          </div>
        </div>
      </section>

      {/* Footer */}
      

      {/* Floating Feedback Button */}
      <div className="fixed right-0 top-1/2 -translate-y-1/2 z-50">
        <button className="bg-[#0070ad] text-white py-4 px-2 rounded-l-md [writing-mode:vertical-rl] text-xs font-bold tracking-widest hover:bg-[#005a8c] transition-colors">
          FEEDBACK
        </button>
      </div>

      {/* Cookie Icon */}
      <div className="fixed bottom-6 left-6 z-50">
        <button className="w-12 h-12 bg-[#0070ad] text-white rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform">
          <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2a10 10 0 1 0 10 10 4 4 0 0 1-5-5 4 4 0 0 1-5-5"></path><path d="M8.5 8.5v.01"></path><path d="M16 15.5v.01"></path><path d="M12 12v.01"></path><path d="M11 17v.01"></path><path d="M7 14v.01"></path></svg>
        </button>
      </div>
    </div>
  );
};

export default WholesaleRetailPage;
