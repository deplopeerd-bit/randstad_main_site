import React from "react";
import { motion } from "motion/react";

import { 
  Search, 
  User, 
  ChevronDown, 
  ArrowRight, 
  Linkedin, 
  Twitter, 
  Facebook, 
  Youtube, 
  Instagram,
  MapPin,
  Heart
} from 'lucide-react';

const SupplyChainAndLogistic: React.FC = () => {
  return (
    <div className="font-sans text-[#1a1a1a] bg-white selection:bg-[#00ff88] selection:text-[#0a1a3c]">
      {/* Top Bar */}
      <div className="bg-white border-bottom border-gray-100 py-2 px-6 flex justify-end items-center text-xs space-x-4">
        <a href="#" className="hover:underline text-gray-600">contact us</a>
      </div>

      {/* Header */}
      

      {/* Breadcrumbs */}
      <div className="px-6 py-4 text-[10px] uppercase tracking-wider text-gray-400 flex space-x-2">
        <span>home</span>
        <span>&gt;</span>
        <span>operational career</span>
        <span>&gt;</span>
        <span className="text-gray-600">supply chain & logistics</span>
      </div>

      {/* Hero Section */}
      <section className="bg-[#0a1a3c] text-white px-6 md:px-12 py-20 relative overflow-hidden">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between relative z-10">
          <div className="md:w-1/2 space-y-8">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-5xl md:text-7xl font-light leading-tight"
            >
              a reliable partner for a career in logistics.
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-lg font-light opacity-90 max-w-lg"
            >
              Secure a job that complements your skills, supports work-life balance, and powers your goals. Get access to a range of job opportunities through permanent, temp, or contract roles with the best employers, plus ongoing training from a trusted partner who cares about your working life and well-being.
            </motion.p>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="flex flex-wrap gap-4"
            >
              <button className="border border-white px-8 py-3 rounded-sm hover:bg-white hover:text-[#0a1a3c] transition-colors text-sm font-medium">
                explore available jobs
              </button>
              <button className="border border-white px-8 py-3 rounded-sm hover:bg-white hover:text-[#0a1a3c] transition-colors text-sm font-medium">
                submit your resume
              </button>
            </motion.div>
          </div>
          <div className="md:w-1/2 mt-12 md:mt-0 flex justify-center">
            {/* Abstract Graphic */}
            <div className="relative w-full max-w-md aspect-square">
               <div className="absolute inset-0 flex items-center justify-center">
                  <div className="flex space-x-2 items-end h-64">
                    {[40, 60, 80, 100, 80, 60, 40, 30, 50, 70, 90, 70, 50].map((h, i) => (
                      <div 
                        key={i} 
                        className={`w-4 rounded-full ${i % 3 === 0 ? 'bg-[#00ff88]' : i % 3 === 1 ? 'bg-[#2175D9]' : 'bg-white/20'}`}
                        style={{ height: `${h}%` }}
                      />
                    ))}
                  </div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* What we do */}
      <section className="flex flex-col md:flex-row">
        <div className="md:w-1/2 bg-[#f5f2ed] p-12 md:p-24 flex flex-col justify-center space-y-6">
          <h2 className="text-4xl font-light">what we do.</h2>
          <p className="text-lg font-light leading-relaxed">
            Time is of the essence when seeking a career in logistics. Our consultants and platform prioritise speed, swiftly connecting you with the best matching logistics career opportunities. Our agile hiring process ensures you won't be left waiting in uncertainty; we value your time and strive to provide a seamless experience from start to finish, catering to your preference for digital or personal interaction.
          </p>
        </div>
        <div className="md:w-1/2 h-[400px] md:h-auto overflow-hidden">
          <img 
            src="https://picsum.photos/seed/logistics1/1200/800" 
            alt="Logistics worker" 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
        </div>
      </section>

      {/* What we offer you */}
      <section className="flex flex-col md:flex-row-reverse">
        <div className="md:w-1/2 bg-[#0a1a3c] text-white p-12 md:p-24 flex flex-col justify-center space-y-6">
          <h2 className="text-4xl font-light">what we offer you.</h2>
          <p className="text-lg font-light leading-relaxed opacity-90">
            We believe in fairly rewarding our employees for their significant contributions to logistics functions, ensuring that with us, you can rest assured knowing that your salary is competitive in the marketplace. Beyond competitive pay, we offer a supportive environment conducive to your personal and professional development in your logistics career.
          </p>
        </div>
        <div className="md:w-1/2 h-[400px] md:h-auto overflow-hidden">
          <img 
            src="https://picsum.photos/seed/logistics2/1200/800" 
            alt="Warehouse team" 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
        </div>
      </section>

      {/* Partner for talent */}
      <section className="flex flex-col md:flex-row">
        <div className="md:w-1/2 bg-[#f5f2ed] p-12 md:p-24 flex flex-col justify-center space-y-6">
          <h2 className="text-4xl font-light">partner for talent.</h2>
          <p className="text-lg font-light leading-relaxed">
            Whether you're just starting or seeking advancement, we provide the resources and opportunities to help you thrive in the logistics sector. Looking for more? Embark on a transformative logistics career path that aligns with your aspirations and exceeds your expectations. Don't settle for anything less than what you deserve – unlock your full potential with us in the logistics functions and beyond. Randstad, partner for talent.
          </p>
        </div>
        <div className="md:w-1/2 h-[400px] md:h-auto overflow-hidden">
          <img 
            src="https://picsum.photos/seed/logistics3/1200/800" 
            alt="Smiling worker" 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
        </div>
      </section>

      {/* Learn more about job roles */}
      <section className="flex flex-col md:flex-row-reverse">
        <div className="md:w-1/2 bg-[#0a1a3c] text-white p-12 md:p-24 flex flex-col justify-center space-y-6">
          <h2 className="text-4xl font-light">learn more about job roles in logistics.</h2>
          <p className="text-lg font-light leading-relaxed opacity-90">
            Our job profiles have been created to familiarise you with the responsibilities and day-to-day activities of a number of key job roles, so you can make the right decision before applying for a job. Start exploring qualifications, responsibilities, pay rates and more in each job.
          </p>
          <button className="self-start border border-white px-8 py-3 rounded-sm hover:bg-white hover:text-[#0a1a3c] transition-colors text-sm font-medium">
            learn more
          </button>
        </div>
        <div className="md:w-1/2 h-[400px] md:h-auto overflow-hidden">
          <img 
            src="https://picsum.photos/seed/logistics4/1200/800" 
            alt="Office discussion" 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
        </div>
      </section>

      {/* Recruiting For */}
      <section className="px-6 md:px-24 py-20 bg-white">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start">
          <h2 className="text-3xl font-light md:w-1/3">roles we're currently recruiting for.</h2>
          <div className="md:w-2/3 w-full mt-8 md:mt-0 space-y-4">
            <div className="border-b border-gray-200 py-6 flex justify-between items-center cursor-pointer group">
              <span className="text-2xl font-light group-hover:text-[#2175D9] transition-colors">see all supply chain jobs.</span>
              <ChevronDown className="text-gray-400 group-hover:text-[#2175D9]" />
            </div>
            <div className="border-b border-gray-200 py-6 flex justify-between items-center cursor-pointer group">
              <span className="text-2xl font-light group-hover:text-[#2175D9] transition-colors">see all logistics jobs.</span>
              <ChevronDown className="text-gray-400 group-hover:text-[#2175D9]" />
            </div>
          </div>
        </div>
      </section>

      {/* Join Talent Pool */}
      <section className="bg-[#0a1a3c] text-white overflow-hidden">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 p-12 md:p-24 space-y-8">
            <h2 className="text-5xl font-light leading-tight">
              join our talent pool for future opportunities in supply chain and logistics jobs.
            </h2>
            <button className="border border-white px-8 py-3 rounded-sm hover:bg-white hover:text-[#0a1a3c] transition-colors text-sm font-medium">
              submit resume now
            </button>
          </div>
          <div className="md:w-1/2 relative h-[400px] md:h-[600px] w-full">
            <img 
              src="https://picsum.photos/seed/logistics5/1200/800" 
              alt="Worker" 
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
            {/* Overlay graphic */}
            <div className="absolute inset-0 flex items-center justify-start p-12">
               <div className="flex space-x-2 items-end h-64">
                    {[30, 50, 70, 90, 100, 80, 60, 40, 50, 70, 90, 70, 50].map((h, i) => (
                      <div 
                        key={i} 
                        className={`w-4 rounded-full ${i % 2 === 0 ? 'bg-[#00ff88]' : 'bg-[#2175D9]'}`}
                        style={{ height: `${h}%` }}
                      />
                    ))}
                  </div>
            </div>
          </div>
        </div>
      </section>

      {/* Latest Updates */}
      <section className="px-6 md:px-24 py-20 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-end mb-12">
            <h2 className="text-4xl font-light">latest updates</h2>
            <a href="#" className="text-[#2175D9] hover:underline flex items-center space-x-1">
              <span>see all articles</span>
            </a>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { date: '02 August 2023', title: 'randstad with heart.', img: 'https://picsum.photos/seed/art1/600/400' },
              { date: '17 January 2023', title: 'how to stand out in an interview.', img: 'https://picsum.photos/seed/art2/600/400' },
              { date: '17 January 2023', title: '5 tips to ace your video interview.', img: 'https://picsum.photos/seed/art3/600/400' },
              { date: '17 January 2023', title: 'declining a job offer.', img: 'https://picsum.photos/seed/art4/600/400' },
              { date: '17 January 2023', title: 'how to negotiate and accept your job offer.', img: 'https://picsum.photos/seed/art5/600/400' },
              { date: '12 January 2023', title: 'prepare answers for tough interview questions.', img: 'https://picsum.photos/seed/art6/600/400' },
            ].map((article, i) => (
              <motion.div 
                key={i}
                whileHover={{ y: -5 }}
                className="space-y-4 cursor-pointer group"
              >
                <div className="overflow-hidden rounded-sm aspect-[3/2]">
                  <img src={article.img} alt={article.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" referrerPolicy="no-referrer" />
                </div>
                <div className="space-y-2">
                  <p className="text-xs text-gray-400 uppercase tracking-wider">{article.date}</p>
                  <h3 className="text-2xl font-light group-hover:text-[#2175D9] transition-colors leading-tight">{article.title}</h3>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="bg-[#0a1a3c] text-white px-6 md:px-24 py-20 overflow-hidden">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-1/2 space-y-8">
            <div className="space-y-2">
              <p className="text-sm font-medium opacity-80">FAQs</p>
              <h2 className="text-5xl font-light leading-tight">frequently asked questions and answers.</h2>
            </div>
            <p className="text-lg font-light opacity-80 max-w-md">
              We provide answers to the most common questions that applicants and companies ask us about working with Randstad.
            </p>
            <button className="border border-white px-8 py-3 rounded-sm hover:bg-white hover:text-[#0a1a3c] transition-colors text-sm font-medium">
              learn more
            </button>
          </div>
          <div className="md:w-1/2 mt-12 md:mt-0 flex justify-center relative">
             {/* Phone Graphic */}
             <div className="relative w-64 h-[500px] bg-[#00ff88] rounded-[40px] border-8 border-[#0a1a3c] shadow-2xl overflow-hidden flex items-center justify-center">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-6 bg-[#0a1a3c] rounded-b-2xl" />
                <div className="flex space-x-2 items-center">
                   <div className="w-3 h-12 bg-white/40 rounded-full animate-pulse" />
                   <div className="w-3 h-24 bg-white/60 rounded-full animate-pulse" />
                   <div className="w-3 h-16 bg-white/40 rounded-full animate-pulse" />
                </div>
             </div>
             {/* Floating waves */}
             <div className="absolute right-0 top-1/2 -translate-y-1/2 flex space-x-2 items-center opacity-40">
                {[20, 40, 60, 80, 60, 40, 20].map((h, i) => (
                  <div key={i} className="w-2 bg-[#00ff88] rounded-full" style={{ height: `${h * 2}px` }} />
                ))}
             </div>
          </div>
        </div>
      </section>

      {/* Location Section */}
      <section className="bg-[#f5f2ed] px-6 md:px-24 py-24 text-center overflow-hidden">
        <div className="max-w-4xl mx-auto relative">
          <h2 className="text-6xl font-light mb-8">we'd love to have you over.</h2>
          <p className="text-xl font-light mb-12">find a branch close to you.</p>
          
          <div className="flex max-w-md mx-auto bg-white rounded-sm shadow-sm overflow-hidden">
            <input 
              type="text" 
              placeholder="postcode / city" 
              className="flex-1 px-6 py-4 outline-none text-lg font-light"
            />
            <button className="bg-[#2175D9] text-white px-6 flex items-center justify-center hover:bg-[#1a5fb3] transition-colors">
              <ArrowRight size={24} />
            </button>
          </div>

          {/* Large Pin Graphic */}
          <div className="absolute -right-24 -top-12 opacity-10 pointer-events-none">
             <MapPin size={400} strokeWidth={0.5} />
          </div>
          <div className="absolute right-0 top-0 text-[#00ff88] opacity-80 pointer-events-none translate-x-1/2 -translate-y-1/4">
             <svg width="300" height="400" viewBox="0 0 100 130">
                <path d="M50 0C22.4 0 0 22.4 0 50C0 87.5 50 130 50 130C50 130 100 87.5 100 50C100 22.4 77.6 0 50 0ZM50 75C36.2 75 25 63.8 25 50C25 36.2 36.2 25 50 25C63.8 25 75 36.2 75 50C75 63.8 63.8 75 50 75Z" fill="currentColor"/>
                <circle cx="50" cy="50" r="15" fill="white" />
             </svg>
          </div>
        </div>
      </section>

      {/* Footer */}
      

      {/* Floating Cookie Icon */}
      <div className="fixed bottom-6 left-6 z-50">
        <button className="bg-[#2175D9] text-white p-3 rounded-full shadow-lg hover:scale-110 transition-transform">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 2a10 10 0 1 0 10 10 4 4 0 0 1-5-5 4 4 0 0 1-5-5" />
            <path d="M8.5 8.5v.01" />
            <path d="M16 15.5v.01" />
            <path d="M12 12v.01" />
            <path d="M11 17v.01" />
            <path d="M7 14v.01" />
          </svg>
        </button>
      </div>

      {/* Floating Feedback Button */}
      <div className="fixed right-0 top-1/2 -translate-y-1/2 z-50 rotate-90 origin-right">
        <button className="bg-[#2175D9] text-white px-4 py-2 text-xs font-medium rounded-t-lg shadow-lg">
          Feedback
        </button>
      </div>
    </div>
  );
};

export default SupplyChainAndLogistic;
