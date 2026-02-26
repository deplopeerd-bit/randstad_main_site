import React, { useState } from "react";
import { AnimatePresence, motion } from "motion/react";

import { 
  ChevronDown, 
  Linkedin, 
  Youtube, 
  ArrowRight,
  Menu,
  X as CloseIcon
} from 'lucide-react';



const AccordionItem = ({ title, content }: { title: string; content: string }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-gray-200 py-6">
      <button 
        className="w-full flex justify-between items-center text-left group"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="text-2xl font-light text-[#0a1128] group-hover:text-blue-600 transition-colors">{title}</span>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
        >
          <ChevronDown className="text-blue-600" size={24} />
        </motion.div>
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
            <p className="mt-4 text-gray-600 leading-relaxed max-w-3xl">
              {content}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const ForTalentDataAndAnalytics = () => {
  return (
    <div className="min-h-screen bg-white font-sans text-[#0a1128]">
      

      {/* Hero Section */}
      <section className="relative h-[80vh] flex items-center bg-[#0a1128] overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://picsum.photos/seed/randstad1/1920/1080" 
            alt="Hero background" 
            className="w-full h-full object-cover opacity-40"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0a1128] via-[#0a1128]/80 to-transparent"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl"
          >
            <h1 className="text-6xl md:text-7xl font-light tracking-tight text-white mb-8 leading-tight">
              turning data into intelligent insights.
            </h1>
            <button className="px-8 py-3 border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-[#0a1128] transition-all duration-300 rounded-sm text-sm font-medium">
              get in touch.
            </button>
          </motion.div>
        </div>
      </section>

      {/* Section 2: Advantage through intelligence */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-5xl font-light mb-8 leading-tight">
                advantage through intelligence.
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-8">
                We help you to think differently about data - viewing this as an invaluable asset. By applying our expertise across the end-to-end data lifecycle, we turn this information into value intelligence - insights that you can use to make faster and better-informed decisions, and it is this that creates your advantage.
              </p>
              <button className="px-8 py-3 border border-cyan-600 text-cyan-600 hover:bg-cyan-600 hover:text-white transition-all duration-300 rounded-sm text-sm font-medium">
                let's talk
              </button>
            </div>
            <div className="relative">
              <img 
                src="https://picsum.photos/seed/randstad2/800/600" 
                alt="Data visualization" 
                className="rounded-lg shadow-2xl"
                referrerPolicy="no-referrer"
              />
              <div className="absolute -bottom-8 -left-8 w-48 h-48 bg-blue-600/10 rounded-full blur-3xl -z-10"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: Capabilities Accordion */}
      <section className="py-24 bg-[#f8f9fa]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-12">
            <div className="md:col-span-1">
              <h2 className="text-4xl font-light sticky top-32">capabilities.</h2>
            </div>
            <div className="md:col-span-2">
              <p className="text-lg text-gray-600 mb-12">
                We have deep expertise in data and analytics that span many sectors; this enables us to offer you a comprehensive range of capabilities either filling a specific skills gap or helping you across the full lifecycle of their data.
              </p>
              <div className="space-y-2">
                <AccordionItem 
                  title="data creation & integration" 
                  content="We help you capture the right data from the right sources and integrate it seamlessly into your systems."
                />
                <AccordionItem 
                  title="data quality & assurance" 
                  content="Ensuring your data is accurate, complete, and reliable is at the core of what we do."
                />
                <AccordionItem 
                  title="data management" 
                  content="Trusting your data is key to being able to act on the intelligence it provides. We help you to plan, build and run your data management from ensuring quality at source to assuring governance and compliance at every stage of its lifecycle."
                />
                <AccordionItem 
                  title="governance & compliance" 
                  content="We ensure your data practices meet all regulatory requirements and internal standards."
                />
                <AccordionItem 
                  title="data modelling" 
                  content="Creating robust data models that reflect your business logic and enable powerful analytics."
                />
                <AccordionItem 
                  title="data migration & modernization" 
                  content="Moving your data to modern platforms while maintaining integrity and minimizing downtime."
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 4: Data Analytics Blue Box */}
      <section className="bg-blue-600 text-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-6xl font-light mb-8">data analytics.</h2>
              <p className="text-xl opacity-90 leading-relaxed mb-8">
                We help you turn information into actionable insights. We do this by applying context to data, leveraging AI and ML, and then presenting this in usable forms whether that be predefined reports and dashboards or self-service business intelligence.
              </p>
              <button className="px-8 py-3 border border-white text-white hover:bg-white hover:text-blue-600 transition-all duration-300 rounded-sm text-sm font-medium">
                get in touch
              </button>
            </div>
            <div className="flex justify-center">
              <div className="w-64 h-64 relative">
                <svg viewBox="0 0 200 200" className="w-full h-full">
                  <rect x="40" y="100" width="20" height="60" fill="white" opacity="0.4" />
                  <rect x="80" y="60" width="20" height="100" fill="white" opacity="0.6" />
                  <rect x="120" y="80" width="20" height="80" fill="white" />
                  <path d="M40 140 L80 100 L120 120 L160 60" stroke="white" strokeWidth="4" fill="none" />
                  <circle cx="160" cy="60" r="6" fill="white" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 5: Data Engineering */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="order-2 md:order-1">
              <img 
                src="https://picsum.photos/seed/randstad3/800/600" 
                alt="Microchip" 
                className="rounded-lg shadow-xl"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="order-1 md:order-2">
              <h2 className="text-5xl font-light mb-8">data engineering.</h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                We can inject specialist data engineers to help you to structure your data and build powerful models and repositories that are aligned to how you want to leverage it. With expertise in data warehousing and data lakes, we can assist you to consolidate, modernize, and integrate your data.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 6: Generative AI */}
      <section className="py-24 bg-[#f8f9fa]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-5xl font-light mb-8">generative AI.</h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-8">
                Unlock the benefits of GenAI - from sourcing the right skills to tackling ethical concerns, making the adoption process seamless for long-term outcomes.
              </p>
              <button className="px-8 py-3 border border-[#0a1128] text-[#0a1128] hover:bg-[#0a1128] hover:text-white transition-all duration-300 rounded-sm text-sm font-medium">
                learn more
              </button>
            </div>
            <div>
              <img 
                src="https://picsum.photos/seed/randstad4/800/600" 
                alt="Generative AI" 
                className="rounded-lg shadow-xl"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-16">
            <div className="md:col-span-1">
              <h2 className="text-4xl font-light mb-4">ready to partner with randstad digital?</h2>
              <p className="text-2xl text-blue-600 font-light">get in touch.</p>
            </div>
            <div className="md:col-span-2">
              <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs uppercase font-bold text-gray-500">First name*</label>
                  <input type="text" className="w-full border-b border-gray-300 py-2 focus:border-blue-600 outline-none transition-colors" />
                </div>
                <div className="space-y-2">
                  <label className="text-xs uppercase font-bold text-gray-500">Last name*</label>
                  <input type="text" className="w-full border-b border-gray-300 py-2 focus:border-blue-600 outline-none transition-colors" />
                </div>
                <div className="space-y-2">
                  <label className="text-xs uppercase font-bold text-gray-500">Work Email*</label>
                  <input type="email" className="w-full border-b border-gray-300 py-2 focus:border-blue-600 outline-none transition-colors" />
                </div>
                <div className="space-y-2">
                  <label className="text-xs uppercase font-bold text-gray-500">Job title*</label>
                  <input type="text" className="w-full border-b border-gray-300 py-2 focus:border-blue-600 outline-none transition-colors" />
                </div>
                <div className="space-y-2 md:col-span-2">
                  <label className="text-xs uppercase font-bold text-gray-500">Company name*</label>
                  <input type="text" className="w-full border-b border-gray-300 py-2 focus:border-blue-600 outline-none transition-colors" />
                </div>
                <div className="space-y-2">
                  <label className="text-xs uppercase font-bold text-gray-500">Country*</label>
                  <select className="w-full border-b border-gray-300 py-2 focus:border-blue-600 outline-none transition-colors bg-transparent">
                    <option>Please Select</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="text-xs uppercase font-bold text-gray-500">Staffing or Solutions*</label>
                  <select className="w-full border-b border-gray-300 py-2 focus:border-blue-600 outline-none transition-colors bg-transparent">
                    <option>Please Select</option>
                  </select>
                </div>
                <div className="space-y-2 md:col-span-2">
                  <label className="text-xs uppercase font-bold text-gray-500">How can we help you?*</label>
                  <textarea className="w-full border-b border-gray-300 py-2 focus:border-blue-600 outline-none transition-colors min-h-[100px]"></textarea>
                </div>
                <div className="md:col-span-2 flex items-start space-x-3">
                  <input type="checkbox" className="mt-1" id="comms" />
                  <label htmlFor="comms" className="text-sm text-gray-600">
                    I agree to receive other communications from Randstad Digital.
                  </label>
                </div>
                <div className="md:col-span-2">
                  <p className="text-xs text-gray-500 mb-6">
                    Randstad Digital is committed to protecting and respecting your privacy... <a href="#" className="underline">Privacy Policy</a>.
                  </p>
                  <button type="submit" className="bg-blue-600 text-white px-10 py-3 rounded-sm hover:bg-blue-700 transition-colors font-medium">
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      
    </div>
  );
};

export default ForTalentDataAndAnalytics;
