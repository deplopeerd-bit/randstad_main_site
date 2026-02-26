import { ArrowRight, ChevronDown, Facebook, Heart, Instagram, Linkedin, MessageSquare, Search, User, Youtube } from "lucide-react";
import { motion } from "motion/react";

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */


export default function Specialism() {
  const navItems = [
    { name: 'find a job', hasDropdown: true },
    { name: 'for talent', hasDropdown: true },
    { name: 'for employer', hasDropdown: true },
    { name: 'resources', hasDropdown: true },
    { name: 'about us', hasDropdown: true },
  ];

  const jumpLinks = [
    { name: 'education', href: '#' },
    { name: 'engineering', href: '#' },
    { name: 'finance & accounting', href: '#' },
    { name: 'healthcare', href: '#' },
    { name: 'hr & admin support', href: '#' },
    { name: 'ites/gcc', href: '#' },
    { name: 'legal & compliance', href: '#' },
    { name: 'manufacturing', href: '#' },
    { name: 'sales & marketing', href: '#' },
    { name: 'supply chain & logistics', href: '#' },
    { name: 'cxo roles hiring', href: '#' },
    { name: 'banking sales', href: '#' }
  ];

  const updates = [
    {
      date: '02 August 2023',
      title: 'randstad with heart.',
      image: 'https://picsum.photos/seed/rand1/800/500'
    },
    {
      date: '20 April 2023',
      title: '‘tips n tricks’ – to use the right communication channels and skills.',
      image: 'https://picsum.photos/seed/rand2/800/500'
    },
    {
      date: '17 April 2023',
      title: 'what you should be aware of your performance management measures for remote work?',
      image: 'https://picsum.photos/seed/rand3/800/500'
    }
  ];

  return (
    <div className="min-h-screen bg-white font-sans text-[#141414] selection:bg-[#2175d9] selection:text-white">
      {/* Top Utility Nav */}
      <div className="bg-white border-b border-gray-100">
        <div className="max-w-[1400px] mx-auto px-8 py-2 flex justify-end">
          <a href="#" className="text-[12px] text-[#2175d9] hover:underline font-medium">contact us</a>
        </div>
      </div>

      {/* Main Header */}
     

      {/* Breadcrumbs */}
      <div className="bg-white">
        <div className="max-w-[1400px] mx-auto px-8 py-5">
          <div className="flex items-center gap-2 text-[13px] text-gray-500 font-medium">
            <a href="#" className="hover:text-[#2175d9]">home</a>
            <span className="text-gray-300">/</span>
            <a href="#" className="hover:text-[#2175d9]">job seekers</a>
            <span className="text-gray-300">/</span>
            <span className="text-gray-900">areas of expertise</span>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section className="bg-[#001937] text-white overflow-hidden min-h-[520px] flex items-center relative">
        <div className="max-w-[1400px] mx-auto px-8 w-full grid lg:grid-cols-[1.2fr_0.8fr] gap-12 items-center py-24">
          <div className="z-10">
            <h1 className="text-[64px] leading-[1.05] font-light mb-10 max-w-2xl tracking-tight">
              build the career you deserve in the area of your choice.
            </h1>
            <p className="text-[20px] font-light mb-12 max-w-xl opacity-80 leading-relaxed">
              We help candidates find great opportunities across sectors, regions and designations with some of the best organizations in the country.
            </p>
            <button className="px-10 py-4 border-2 border-white text-[18px] font-medium hover:bg-white hover:text-[#001937] transition-all duration-300 tracking-wide">
              find a job now
            </button>
          </div>
          
          {/* Concentric Circles Graphic */}
          <div className="relative hidden lg:flex justify-center items-center">
            <div className="relative w-[480px] h-[480px]">
              {[...Array(5)].map((_, i) => (
                <div 
                  key={i}
                  className="absolute inset-0 border-[24px] rounded-full opacity-20"
                  style={{ 
                    borderColor: '#2175d9',
                    margin: `${i * 48}px`,
                    opacity: 1 - (i * 0.15)
                  }}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Jump to Section */}
      <section className="py-28 bg-white">
        <div className="max-w-[1400px] mx-auto px-8 grid lg:grid-cols-[400px_1fr] gap-20">
          <div>
            <h2 className="text-[36px] font-light text-[#141414] leading-tight">
              jump to a specific section.
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-x-16 gap-y-0">
            {jumpLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                className="group flex items-center justify-between py-6 border-b border-gray-100 text-[22px] text-[#2175d9] hover:text-[#001937] transition-colors"
              >
                <span className="group-hover:underline decoration-1 underline-offset-4">{link.name}</span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Say G'day Section */}
      <section className="bg-[#001937] text-white py-28 relative overflow-hidden">
        <div className="max-w-[1400px] mx-auto px-8 grid lg:grid-cols-2 gap-20 items-center">
          <div>
            <h2 className="text-[64px] font-light mb-6 tracking-tight">say g'day</h2>
            <p className="text-[22px] font-light mb-12 opacity-80 leading-relaxed max-w-lg">
              Ready for a recruiter who listens? We're ready for you, too.
            </p>
            <div className="flex max-w-md h-[64px]">
              <input 
                type="text" 
                placeholder="postcode / city" 
                className="flex-1 bg-white text-gray-900 px-8 text-[18px] outline-none placeholder:text-gray-400"
              />
              <button className="bg-white text-[#001937] px-6 border-l border-gray-100 hover:bg-gray-50 transition-colors flex items-center justify-center">
                <ArrowRight size={28} />
              </button>
            </div>
          </div>

          {/* Location Pins Graphic */}
          <div className="hidden lg:flex justify-end relative">
            <div className="relative w-[400px] h-[300px]">
              {/* Main Pin */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-28 h-28 bg-[#2175d9] rounded-full rounded-bl-none rotate-45 flex items-center justify-center shadow-2xl z-20">
                <div className="w-10 h-10 bg-[#001937] rounded-full -rotate-45"></div>
              </div>
              {/* Left Pin */}
              <div className="absolute top-20 left-1/4 w-20 h-20 bg-[#3c5098] rounded-full rounded-bl-none rotate-45 flex items-center justify-center opacity-80 z-10">
                <div className="w-7 h-7 bg-[#001937] rounded-full -rotate-45"></div>
              </div>
              {/* Right Pin */}
              <div className="absolute top-20 right-1/4 w-20 h-20 bg-[#5a76d2] rounded-full rounded-bl-none rotate-45 flex items-center justify-center opacity-80 z-10">
                <div className="w-7 h-7 bg-[#001937] rounded-full -rotate-45"></div>
              </div>
              {/* Bottom Line */}
              <div className="absolute bottom-10 left-0 right-0 h-[2px] bg-[#2175d9] opacity-30"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Latest Updates */}
      <section className="py-28 bg-white">
        <div className="max-w-[1400px] mx-auto px-8">
          <div className="flex justify-between items-end mb-16">
            <h2 className="text-[44px] font-light tracking-tight">latest updates</h2>
            <a href="#" className="text-[#2175d9] text-[20px] font-medium hover:underline flex items-center gap-2 group">
              see all articles
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
          
          <div className="grid md:grid-cols-3 gap-10">
            {updates.map((update, idx) => (
              <motion.div 
                key={idx}
                whileHover={{ y: -10 }}
                className="group cursor-pointer"
              >
                <div className="aspect-[16/10] overflow-hidden mb-8 rounded-sm">
                  <img 
                    src={update.image} 
                    alt={update.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <p className="text-[14px] text-gray-500 font-medium mb-3 tracking-wide">{update.date}</p>
                <h3 className="text-[24px] leading-[1.3] font-medium text-[#141414] group-hover:text-[#2175d9] transition-colors">
                  {update.title}
                </h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Get in Touch Section */}
      <section className="py-32 bg-[#f8f9fa] border-t border-gray-100">
        <div className="max-w-[1400px] mx-auto px-8 flex flex-col lg:flex-row justify-between items-center gap-16">
          <div className="text-center lg:text-left">
            <h2 className="text-[64px] font-light leading-[1] mb-2 tracking-tight">get in touch</h2>
            <p className="text-[64px] font-light leading-[1] text-[#2175d9] tracking-tight">we are here to help.</p>
          </div>
          <button className="px-14 py-5 border-2 border-[#141414] text-[20px] font-medium hover:bg-[#141414] hover:text-white transition-all duration-300 min-w-[280px]">
            connect with us
          </button>
        </div>
      </section>

      {/* Footer */}
      

      {/* Fixed Feedback Button */}
      <div className="fixed right-0 top-1/2 -translate-y-1/2 z-[60]">
        <button className="bg-[#2175d9] text-white px-2 py-10 rounded-l-sm flex flex-col items-center gap-2 [writing-mode:vertical-rl] text-[15px] font-bold hover:bg-[#1a5eb1] transition-all shadow-2xl tracking-widest uppercase">
          Feedback
        </button>
      </div>

      {/* Fixed Chat Button */}
      <div className="fixed bottom-8 left-8 z-[60]">
        <button className="w-16 h-16 bg-[#2175d9] text-white rounded-full flex items-center justify-center shadow-[0_10px_40px_rgba(33,117,217,0.4)] hover:scale-110 transition-all active:scale-95 group">
          <MessageSquare size={32} className="group-hover:rotate-12 transition-transform" />
        </button>
      </div>
    </div>
  );
}
