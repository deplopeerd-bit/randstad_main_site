import React from "react";
import { motion } from "motion/react";

import { 
  Search, 
  Heart, 
  User, 
  ArrowRight, 
  Linkedin, 
  Twitter, 
  Facebook, 
  Youtube, 
  Instagram,
  ChevronRight,
  MessageSquare
} from 'lucide-react';

const RandstadPage = () => {
  return (
    <div className="font-sans text-[#141414] bg-white">
      {/* Top Navigation Bar */}
      <nav className="sticky top-0 z-50 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center space-x-8">
              {/* Logo */}
              <div className="flex-shrink-0 flex items-center">
                <div className="text-[#2175d9] font-bold text-2xl flex items-center">
                  <span className="mr-1 text-3xl">רר</span>
                  <span>randstad</span>
                </div>
              </div>
              
              {/* Desktop Nav */}
              <div className="hidden md:flex space-x-6 text-sm font-medium text-gray-600">
                <button className="hover:text-[#2175d9] flex items-center">find a job <ChevronRight className="w-4 h-4 ml-1 rotate-90" /></button>
                <button className="hover:text-[#2175d9] flex items-center">for talent <ChevronRight className="w-4 h-4 ml-1 rotate-90" /></button>
                <button className="hover:text-[#2175d9] flex items-center">for employer <ChevronRight className="w-4 h-4 ml-1 rotate-90" /></button>
                <button className="hover:text-[#2175d9] flex items-center">resources <ChevronRight className="w-4 h-4 ml-1 rotate-90" /></button>
                <button className="hover:text-[#2175d9] flex items-center">about us <ChevronRight className="w-4 h-4 ml-1 rotate-90" /></button>
              </div>
            </div>

            <div className="flex items-center space-x-6">
              <button className="text-xs font-medium text-gray-500 hover:text-[#2175d9] underline underline-offset-4">contact us</button>
              <div className="flex items-center space-x-4 text-gray-600">
                <button className="hover:text-[#2175d9] flex items-center text-sm">
                  <Heart className="w-5 h-5 mr-1" />
                  <span>0</span>
                </button>
                <button className="hover:text-[#2175d9] flex items-center text-sm">
                  <User className="w-5 h-5 mr-1" />
                  <span>my randstad</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Breadcrumbs */}
      <div className="bg-[#0a1a33] text-white py-2 text-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center space-x-2 opacity-70">
          <span>home</span>
          <ChevronRight className="w-3 h-3" />
          <span>employers</span>
          <ChevronRight className="w-3 h-3" />
          <span>industries</span>
          <ChevronRight className="w-3 h-3" />
          <span className="font-semibold opacity-100">supply chain & logistics</span>
        </div>
      </div>

      {/* Hero Section */}
      <section className="bg-[#0a1a33] text-white py-20 overflow-hidden relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-2xl">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-5xl md:text-7xl font-light leading-tight mb-8"
            >
              a partner for talent in logistics.
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-lg md:text-xl font-light opacity-90 mb-10 leading-relaxed"
            >
              Build your team with top operational talent. With the largest pool of pre-qualified candidates, industry expertise, deep insights into operational workforce dynamics, and proven talent validation processes in our specialised talent centres, we'll help you simplify your recruiting and scale your workforce on demand — quickly and cost-effectively.
            </motion.p>
            <motion.button 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="border border-white px-8 py-3 text-sm font-medium hover:bg-white hover:text-[#0a1a33] transition-colors"
            >
              get in touch
            </motion.button>
          </div>
        </div>

        {/* Abstract Shapes */}
        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-1/2 h-full pointer-events-none hidden lg:block">
          <div className="relative w-full h-full">
            <div className="absolute right-[-10%] top-[10%] w-[500px] h-[500px] bg-[#4ade80] rounded-full opacity-80"></div>
            <div className="absolute right-[15%] top-[40%] w-[300px] h-[100px] bg-[#4ade80] rounded-full opacity-90"></div>
            <div className="absolute right-[30%] top-[60%] w-[150px] h-[10px] bg-[#2175d9] rounded-full"></div>
            <div className="absolute right-[40%] top-[30%] w-[15px] h-[15px] bg-[#2175d9] rounded-full"></div>
          </div>
        </div>
      </section>

      {/* Split Sections */}
      <section className="grid grid-cols-1 md:grid-cols-2">
        {/* Attract Logistics Talent */}
        <div className="p-12 md:p-24 flex flex-col justify-center bg-[#f5f5f2]">
          <h2 className="text-4xl md:text-5xl font-light mb-8">attract logistics talent.</h2>
          <p className="text-lg font-light text-gray-700 leading-relaxed">
            Logistics companies are under more pressure than ever to keep supply chains running smoothly — making talented staff essential. Access top talent at speed, overcome your recruitment challenges and ensure immediate productivity with our strategic sourcing and branding approach.
          </p>
        </div>
        <div className="h-[400px] md:h-auto overflow-hidden">
          <img 
            src="https://picsum.photos/seed/logistics1/1200/800" 
            alt="Logistics worker" 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
        </div>

        {/* Scalable Workforce */}
        <div className="h-[400px] md:h-auto overflow-hidden order-last md:order-none">
          <img 
            src="https://picsum.photos/seed/logistics2/1200/800" 
            alt="Workers high-fiving" 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
        </div>
        <div className="p-12 md:p-24 flex flex-col justify-center bg-[#0a1a33] text-white">
          <h2 className="text-4xl md:text-5xl font-light mb-8">a scalable workforce.</h2>
          <p className="text-lg font-light opacity-90 leading-relaxed">
            Our adaptable workforce model allows you to scale your labor force effortlessly during high-demand seasons, ensuring that you always have the right number of hands on deck to get the job done.
          </p>
        </div>

        {/* Creating Resilience */}
        <div className="p-12 md:p-24 flex flex-col justify-center bg-white">
          <h2 className="text-4xl md:text-5xl font-light mb-8">creating resilience.</h2>
          <p className="text-lg font-light text-gray-700 leading-relaxed">
            Our comprehensive workforce services, specialised for the logistics sector, reduce the cost and disruption of high turnover rates and take the work out of managing your flexible workforce — leaving you to focus on your logistics operations.
          </p>
        </div>
        <div className="h-[400px] md:h-auto overflow-hidden">
          <img 
            src="https://picsum.photos/seed/logistics3/1200/800" 
            alt="Worker with crates" 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
        </div>

        {/* Driven by Technology */}
        <div className="h-[400px] md:h-auto overflow-hidden order-last md:order-none">
          <img 
            src="https://picsum.photos/seed/logistics4/1200/800" 
            alt="Forklift in warehouse" 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
        </div>
        <div className="p-12 md:p-24 flex flex-col justify-center bg-[#0a1a33] text-white">
          <h2 className="text-4xl md:text-5xl font-light mb-8">driven by technology.</h2>
          <p className="text-lg font-light opacity-90 leading-relaxed">
            In complex regulatory landscapes, peace of mind is key. Our detailed measurement and tracking tools make relevant workforce insights readily available, enabling cost-effective operations without sacrificing quality or compliance.
          </p>
        </div>
      </section>

      {/* Workforce Insights Section */}
      <section className="bg-[#f5f5f2] py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-5xl font-light mb-8 leading-tight">workforce insights delivered to your inbox.</h2>
              <p className="text-lg font-light text-gray-700 mb-10 leading-relaxed">
                Want to reduce your turnover rate, improve your company culture, or be inspired on improving employability for young people? Sign up to the monthly workforce insights newsletter and stay up to date with the latest recruitment and labor market news, tips, trends and reports for business leaders across the globe.
              </p>
              <button className="border border-[#141414] px-10 py-3 text-sm font-medium hover:bg-[#141414] hover:text-white transition-colors">
                subscribe
              </button>
            </div>
            <div className="relative">
              <div className="rounded-full overflow-hidden aspect-square relative">
                <img 
                  src="https://picsum.photos/seed/typing/800/800" 
                  alt="Hands typing" 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
                {/* Circular Graphic Overlay */}
                <div className="absolute inset-0 border-[30px] border-[#4ade80] rounded-full opacity-60 scale-90"></div>
                <div className="absolute inset-0 border-[15px] border-[#4ade80] rounded-full opacity-40 scale-75"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Connecting to Talent Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div className="relative flex justify-center">
              {/* Yellow Hard Hat Graphic */}
              <div className="relative w-80 h-80">
                <div className="absolute inset-0 bg-[#facc15] rounded-t-full"></div>
                <div className="absolute bottom-0 left-[-10%] right-[-10%] h-12 bg-[#facc15] rounded-full"></div>
                <div className="absolute bottom-[-10%] right-[10%] w-24 h-24 bg-[#0a1a33] rotate-45 rounded-lg"></div>
              </div>
            </div>
            <div>
              <h2 className="text-5xl font-light mb-8 leading-tight">connecting you to the right talent.</h2>
              <p className="text-lg font-light text-gray-700 mb-10 leading-relaxed">
                Looking to hire great operations talent that combines technical expertise with problem-solving skills and business thinking? You are just where you need to be.
              </p>
              <button className="border border-[#2175d9] text-[#2175d9] px-10 py-3 text-sm font-medium hover:bg-[#2175d9] hover:text-white transition-colors">
                speak to an expert
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Why Randstad Section */}
      <section className="bg-[#f5f5f2] py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <h2 className="text-4xl font-light">why Randstad.</h2>
            <div className="md:col-span-2 space-y-8">
              <p className="text-lg font-light text-gray-700 leading-relaxed">
                Operations and supply chain form the bedrock of your business infrastructure. We know how this function has evolved beyond infrastructure building, logistics management, supply synchronisation and performance measurement. And that's why we find you experts who drive your business forward, every single day.
              </p>
              <p className="text-lg font-light text-gray-700 leading-relaxed">
                Your operations are built by people who care about their craft and understand your business. Finding these people is at the core of our selection process. Our specialists identify great talent aligned to your business goals before ensuring a cultural fit that's designed to drive profits for you and satisfaction for your team.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Future Ready Talent Banner */}
      <section className="bg-[#2175d9] text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center">
          <h2 className="text-5xl font-light mb-8 md:mb-0">looking for future ready talent?</h2>
          <button className="border border-white px-10 py-3 text-sm font-medium hover:bg-white hover:text-[#2175d9] transition-colors">
            speak to us
          </button>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div className="flex justify-center">
              <div className="text-[#2175d9] text-[200px] leading-none font-serif opacity-80">
                ""
              </div>
            </div>
            <div>
              <p className="text-2xl font-light text-gray-800 mb-8 leading-relaxed italic">
                What Randstad did is to establish a regular hiring process, support us with our applicant tracking system and improved the quality of hiring. What we benefitted at the end of one year is largely on cost, on hiring efficacies and quality of candidates who come from the pipeline.
              </p>
              <p className="text-[#2175d9] text-xl font-medium mb-10">
                Rahul Maitra - Head HR, Merck Group (India)
              </p>
              <button className="border border-[#2175d9] text-[#2175d9] px-10 py-3 text-sm font-medium hover:bg-[#2175d9] hover:text-white transition-colors">
                talk to us
              </button>
              
              {/* Slider Dots */}
              <div className="flex space-x-2 mt-12">
                <div className="w-2 h-2 rounded-full bg-[#0a1a33]"></div>
                <div className="w-2 h-2 rounded-full border border-gray-400"></div>
                <div className="w-2 h-2 rounded-full border border-gray-400"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Salary Data Section */}
      <section className="py-24 bg-[#f5f5f2]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-6xl font-light mb-8 leading-tight">stay competitive with salary data.</h2>
              <p className="text-xl font-light text-gray-700 mb-10 leading-relaxed">
                compare salaries for core functions across India.
              </p>
              <button className="bg-white border border-gray-200 px-10 py-3 text-sm font-medium hover:bg-gray-50 transition-colors">
                download report
              </button>
              
              {/* Slider Dots */}
              <div className="flex space-x-2 mt-12">
                <div className="w-2 h-2 rounded-full bg-[#0a1a33]"></div>
                <div className="w-2 h-2 rounded-full border border-gray-400"></div>
                <div className="w-2 h-2 rounded-full border border-gray-400"></div>
              </div>
            </div>
            <div className="rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src="https://picsum.photos/seed/salary/800/600" 
                alt="Smiling professional" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Find Location Section */}
      <section className="bg-[#6b99a3] py-20 text-[#0a1a33]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-6xl font-light mb-6">find location</h2>
              <p className="text-xl font-light mb-10">Drop in and say "hi" at one of our branch locations.</p>
              <div className="flex max-w-md">
                <input 
                  type="text" 
                  placeholder="postcode / city" 
                  className="flex-grow bg-white px-6 py-4 text-sm focus:outline-none"
                />
                <button className="bg-[#0a1a33] text-white px-6 py-4">
                  <ArrowRight className="w-5 h-5" />
                </button>
              </div>
            </div>
            <div className="relative flex justify-center">
              {/* Pin Graphics */}
              <div className="relative w-64 h-64">
                <div className="absolute top-0 right-0 w-48 h-48 bg-[#0a1a33] rounded-full flex items-center justify-center">
                  <div className="w-24 h-24 bg-[#6b99a3] rounded-full"></div>
                </div>
                <div className="absolute bottom-0 left-0 w-32 h-32 bg-[#facc15] rounded-full flex items-center justify-center">
                  <div className="w-16 h-16 bg-[#6b99a3] rounded-full"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Latest Updates Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-end mb-12">
            <h2 className="text-4xl font-light">latest updates</h2>
            <button className="text-[#2175d9] text-xl font-light hover:underline">see all</button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { date: '19 January 2026', title: 'what is social media screening?', img: 'social' },
              { date: '12 January 2026', title: 'how to set up an effective reference-checking process.', img: 'process' },
              { date: '05 January 2026', title: 'how to ask the right questions during a reference check.', img: 'questions' },
              { date: '29 December 2025', title: 'what is an employment background check?', img: 'background' },
              { date: '22 December 2025', title: 'what is a reference check, and why is it important?', img: 'important' },
              { date: '15 December 2025', title: 'the role of AI in finance and accounting.', img: 'ai' },
            ].map((item, idx) => (
              <div key={idx} className="group cursor-pointer">
                <div className="aspect-[4/3] overflow-hidden rounded-lg mb-4">
                  <img 
                    src={`https://picsum.photos/seed/${item.img}/600/450`} 
                    alt={item.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <p className="text-gray-500 text-sm mb-2">{item.date}</p>
                <h3 className="text-2xl font-light group-hover:text-[#2175d9] transition-colors leading-tight">
                  {item.title}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Banner */}
      <section className="bg-[#2175d9] text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center">
          <h2 className="text-5xl font-light mb-8 md:mb-0">contact us to start a conversation about your talent needs.</h2>
          <button className="border border-white px-10 py-3 text-sm font-medium hover:bg-white hover:text-[#2175d9] transition-colors">
            let's meet
          </button>
        </div>
      </section>

      {/* Unlock More Insights Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-5xl font-light mb-16">unlock more insights on logistics.</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: 'find out which logistics recruitment strategies fit your organisation best.', img: 'strategy' },
              { title: 'what steps are you taking to attract logistics talent?', img: 'steps' },
              { title: 'AI in logistics and how it affects workforce skills and talent acquisition.', img: 'logistics-ai' },
            ].map((item, idx) => (
              <div key={idx} className="relative aspect-[3/4] overflow-hidden rounded-xl group cursor-pointer">
                <img 
                  src={`https://picsum.photos/seed/${item.img}/600/800`} 
                  alt={item.title} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a1a33]/90 via-transparent to-transparent flex items-end p-8">
                  <h3 className="text-white text-2xl font-light leading-tight">
                    {item.title}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#0a1a33] text-white pt-24 pb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-12 mb-20">
            {/* Column 1 */}
            <div>
              <h4 className="text-lg font-medium mb-6">find a job</h4>
              <ul className="space-y-4 text-sm opacity-70">
                <li><a href="#" className="hover:opacity-100">explore all jobs</a></li>
                <li><a href="#" className="hover:opacity-100">submit your cv</a></li>
                <li><a href="#" className="hover:opacity-100">join our team</a></li>
                <li><a href="#" className="hover:opacity-100">refer a friend</a></li>
              </ul>
              
              <h4 className="text-lg font-medium mt-12 mb-6">for talents</h4>
              <ul className="space-y-4 text-sm opacity-70">
                <li><a href="#" className="hover:opacity-100">specialisms</a></li>
                <li><a href="#" className="hover:opacity-100">testimonials</a></li>
                <li><a href="#" className="hover:opacity-100">career advice</a></li>
                <li><a href="#" className="hover:opacity-100">beware of job scams</a></li>
              </ul>
            </div>

            {/* Column 2 */}
            <div>
              <h4 className="text-lg font-medium mb-6">for employers</h4>
              <ul className="space-y-4 text-sm opacity-70">
                <li><a href="#" className="hover:opacity-100">submit a vacancy</a></li>
                <li><a href="#" className="hover:opacity-100">request a callback</a></li>
                <li><a href="#" className="hover:opacity-100">our services</a></li>
                <li><a href="#" className="hover:opacity-100">specialisms</a></li>
                <li><a href="#" className="hover:opacity-100">case studies</a></li>
                <li><a href="#" className="hover:opacity-100">testimonials</a></li>
              </ul>

              <h4 className="text-lg font-medium mt-12 mb-6">resources</h4>
              <ul className="space-y-4 text-sm opacity-70">
                <li><a href="#" className="hover:opacity-100">case studies</a></li>
                <li><a href="#" className="hover:opacity-100">press room</a></li>
                <li><a href="#" className="hover:opacity-100">blogs</a></li>
              </ul>
            </div>

            {/* Column 3 */}
            <div>
              <h4 className="text-lg font-medium mb-6">workforce insights</h4>
              <ul className="space-y-4 text-sm opacity-70">
                <li><a href="#" className="hover:opacity-100">talent insights reports</a></li>
                <li><a href="#" className="hover:opacity-100">employer brand research reports</a></li>
                <li><a href="#" className="hover:opacity-100">salary trends reports</a></li>
                <li><a href="#" className="hover:opacity-100">ed&i reports</a></li>
                <li><a href="#" className="hover:opacity-100">workmonitor reports</a></li>
                <li><a href="#" className="hover:opacity-100">startup hiring trends</a></li>
                <li><a href="#" className="hover:opacity-100">talent pulse surveys</a></li>
              </ul>
            </div>

            {/* Column 4 */}
            <div className="lg:col-span-2">
              <h4 className="text-lg font-medium mb-6">jobs</h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4 text-sm opacity-70">
                <a href="#" className="hover:opacity-100">engineering jobs</a>
                <a href="#" className="hover:opacity-100">cxo jobs</a>
                <a href="#" className="hover:opacity-100">manufacturing jobs</a>
                <a href="#" className="hover:opacity-100">supply chain & logistics jobs</a>
                <a href="#" className="hover:opacity-100">education jobs</a>
                <a href="#" className="hover:opacity-100">finance & accounting jobs</a>
                <a href="#" className="hover:opacity-100">healthcare jobs</a>
                <a href="#" className="hover:opacity-100">hr & admin support jobs</a>
                <a href="#" className="hover:opacity-100">ites/gcc jobs</a>
                <a href="#" className="hover:opacity-100">legal & compliance jobs</a>
                <a href="#" className="hover:opacity-100">sales & marketing jobs</a>
              </div>
            </div>
          </div>

          {/* Social Icons */}
          <div className="flex space-x-6 mb-12">
            <Linkedin className="w-6 h-6 opacity-70 hover:opacity-100 cursor-pointer" />
            <Twitter className="w-6 h-6 opacity-70 hover:opacity-100 cursor-pointer" />
            <Facebook className="w-6 h-6 opacity-70 hover:opacity-100 cursor-pointer" />
            <Youtube className="w-6 h-6 opacity-70 hover:opacity-100 cursor-pointer" />
            <Instagram className="w-6 h-6 opacity-70 hover:opacity-100 cursor-pointer" />
          </div>

          <div className="border-t border-white/10 pt-12">
            <p className="text-xs opacity-50 mb-4">registered office: Randstad India Private Limited, CIN U74210TN1992PTC023097,/Randstad House, Old No. 5 & 5A, New No. 9, Pycrofts Garden Road, Nungambakkam, Chennai, TN - 600 006</p>
            <div className="flex items-center space-x-2 mb-8">
              <div className="text-[#2175d9] font-bold text-lg flex items-center">
                <span className="mr-1 text-xl">רר</span>
                <span>randstad</span>
              </div>
              <span className="text-xs opacity-50">, HUMAN FORWARD and SHAPING THE WORLD OF WORK are registered trademarks of © Randstad N.V.2023</span>
            </div>

            <div className="space-y-4 text-xs opacity-70 max-w-5xl">
              <p>Security Advice: Randstad India does not charge any fee at any stage of its recruitment process from the candidate nor allows their employees to collect any fees from any candidates. <a href="#" className="underline">Click here to know more</a></p>
              <p>EEO Statement: Randstad India is an Equal Employment Opportunity Employer. All qualified applicants receive consideration for employment without regard to race, color, religion, sex, sexual orientation, gender identity or expression, appearance, national origin, age, marital status, veteran status, or disability status, or any other characteristics. Our global mission is to become the world's most equitable and specialized talent company, and we actively embrace diversity and inclusion as the cornerstones of our success. To read more of Randstad India's work in the space of equity, diversity and inclusion please <a href="#" className="underline">click here</a></p>
            </div>

            <div className="flex flex-wrap gap-x-8 gap-y-4 mt-12 text-xs opacity-70">
              <a href="#" className="hover:opacity-100">terms & conditions</a>
              <a href="#" className="hover:opacity-100">cookies</a>
              <a href="#" className="hover:opacity-100">misconduct reporting procedure</a>
              <a href="#" className="hover:opacity-100">accessibility</a>
              <a href="#" className="hover:opacity-100">be aware</a>
              <a href="#" className="hover:opacity-100">sitemap</a>
              <a href="#" className="hover:opacity-100">privacy statement</a>
            </div>
          </div>
        </div>
      </footer>

      {/* Floating Chat Button */}
      <div className="fixed bottom-8 right-8 z-50">
        <button className="bg-[#2175d9] text-white p-4 rounded-full shadow-xl hover:scale-110 transition-transform">
          <MessageSquare className="w-6 h-6" />
        </button>
      </div>

      {/* Cookie Consent Icon */}
      <div className="fixed bottom-8 left-8 z-50">
        <button className="bg-[#2175d9] text-white p-2 rounded-full shadow-lg opacity-80 hover:opacity-100">
          <div className="w-6 h-6 flex items-center justify-center font-bold text-xs">🍪</div>
        </button>
      </div>

      {/* Feedback Tab */}
      <div className="fixed right-0 top-1/2 -translate-y-1/2 z-40 hidden lg:block">
        <button className="bg-[#2175d9] text-white py-4 px-2 rounded-l-md shadow-lg [writing-mode:vertical-rl] text-xs font-medium tracking-widest">
          Feedback
        </button>
      </div>
    </div>
  );
};

export default RandstadPage;
