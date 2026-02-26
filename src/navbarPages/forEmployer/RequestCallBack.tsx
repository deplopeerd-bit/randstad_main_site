import React, { useState } from "react";
import { AnimatePresence, motion } from "motion/react";

import { 
  Heart, 
  User, 
  ChevronDown, 
  ChevronUp, 
  Linkedin, 
  Facebook, 
  Youtube, 
  Instagram, 
  Twitter,
  Search,
  ArrowRight
} from 'lucide-react';

const FAQItem = ({ question, answer }: { question: string, answer: string }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-white/20">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full py-6 flex justify-between items-center text-left hover:opacity-80 transition-opacity"
      >
        <span className="text-xl font-medium">{question}</span>
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
            <p className="pb-6 text-white/80 leading-relaxed">
              {answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default function RequestCallBack() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    companyName: '',
    designation: '',
    industry: '',
    turnover: '',
    strength: '',
    services: '',
    discussion: '',
    source: '',
    consent: false
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    const val = type === 'checkbox' ? (e.target as HTMLInputElement).checked : value;
    setFormData(prev => ({ ...prev, [name]: val }));
  };

  return (
    <div className="min-h-screen font-sans text-[#001b3d] bg-white">
      {/* Top Bar */}
      <div className="bg-white border-b border-gray-100 py-2 px-6 flex justify-end text-xs text-gray-500">
        <a href="#" className="hover:underline">contact us</a>
      </div>

      {/* Navigation */}
      

      {/* Breadcrumbs */}
      <div className="px-6 py-4 bg-[#001b3d] text-white text-xs flex gap-2 items-center opacity-70">
        <a href="#" className="hover:underline">home</a>
        <span>&gt;</span>
        <a href="#" className="hover:underline">employers</a>
        <span>&gt;</span>
        <span className="font-bold">submit a vacancy</span>
      </div>

      {/* Hero Section */}
      <section className="bg-[#001b3d] text-white px-6 py-20 relative overflow-hidden">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="flex-1 space-y-8 z-10">
            <h1 className="text-6xl font-light tracking-tight">are you hiring?</h1>
            <p className="text-xl font-light max-w-xl leading-relaxed opacity-90">
              If you're an employer and would like to discuss your hiring needs, fill in the form below and we will call you back.
            </p>
            <div className="flex flex-wrap gap-4">
              <button className="px-8 py-3 border border-white rounded-sm hover:bg-white hover:text-[#001b3d] transition-colors font-medium">
                fill the form
              </button>
              <button className="px-8 py-3 border border-white rounded-sm hover:bg-white hover:text-[#001b3d] transition-colors font-medium">
                FAQs by clients
              </button>
            </div>
          </div>
          
          <div className="flex-1 flex justify-center z-10">
            <div className="relative w-80 h-80">
              {/* Concentric circles illustration */}
              <div className="absolute inset-0 border-4 border-[#2175d9]/30 rounded-full animate-pulse"></div>
              <div className="absolute inset-4 border-4 border-[#2175d9]/50 rounded-full"></div>
              <div className="absolute inset-8 border-4 border-[#2175d9]/70 rounded-full"></div>
              <div className="absolute inset-12 bg-[#2175d9] rounded-full flex items-center justify-center">
                <User size={80} className="text-white opacity-80" />
              </div>
            </div>
          </div>
        </div>
        
        {/* Abstract background shapes */}
        <div className="absolute -bottom-20 -right-20 w-96 h-96 bg-[#2175d9]/10 rounded-full blur-3xl"></div>
      </section>

      {/* Form Section */}
      <section className="max-w-7xl mx-auto px-6 py-24">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
          <div className="lg:col-span-1">
            <h2 className="text-3xl font-light leading-tight">I'm an employer looking to hire.</h2>
          </div>
          
          <div className="lg:col-span-2 space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-medium">First name</label>
                <input 
                  type="text" 
                  name="firstName"
                  className="w-full p-3 border border-gray-300 rounded-sm focus:border-[#2175d9] outline-none transition-colors"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium">Last name</label>
                <input 
                  type="text" 
                  name="lastName"
                  className="w-full p-3 border border-gray-300 rounded-sm focus:border-[#2175d9] outline-none transition-colors"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium">Business email</label>
              <input 
                type="email" 
                name="email"
                className="w-full p-3 border border-gray-300 rounded-sm focus:border-[#2175d9] outline-none transition-colors"
              />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium">Phone number</label>
              <input 
                type="tel" 
                name="phone"
                className="w-full p-3 border border-gray-300 rounded-sm focus:border-[#2175d9] outline-none transition-colors"
              />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium">Company name</label>
              <input 
                type="text" 
                name="companyName"
                className="w-full p-3 border border-gray-300 rounded-sm focus:border-[#2175d9] outline-none transition-colors"
              />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium">Designation</label>
              <input 
                type="text" 
                name="designation"
                className="w-full p-3 border border-gray-300 rounded-sm focus:border-[#2175d9] outline-none transition-colors"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-medium">Industry:</label>
                <select name="industry" className="w-full p-3 border border-gray-300 rounded-sm focus:border-[#2175d9] outline-none transition-colors appearance-none bg-white">
                  <option>Please Select</option>
                  <option>Technology</option>
                  <option>Finance</option>
                  <option>Healthcare</option>
                </select>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium">Company turnover</label>
                <select name="turnover" className="w-full p-3 border border-gray-300 rounded-sm focus:border-[#2175d9] outline-none transition-colors appearance-none bg-white">
                  <option>Please Select</option>
                  <option>Under 10Cr</option>
                  <option>10Cr - 100Cr</option>
                  <option>Above 100Cr</option>
                </select>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-medium">Employee strength</label>
                <select name="strength" className="w-full p-3 border border-gray-300 rounded-sm focus:border-[#2175d9] outline-none transition-colors appearance-none bg-white">
                  <option>Please Select</option>
                  <option>1-50</option>
                  <option>51-200</option>
                  <option>201-500</option>
                  <option>500+</option>
                </select>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium">Need your services in</label>
                <select name="services" className="w-full p-3 border border-gray-300 rounded-sm focus:border-[#2175d9] outline-none transition-colors appearance-none bg-white">
                  <option>Please Select</option>
                  <option>Permanent Hiring</option>
                  <option>Contract Staffing</option>
                  <option>Executive Search</option>
                </select>
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium">Upload job description/profile/role details</label>
              <div className="flex items-center gap-4">
                <input type="file" className="hidden" id="file-upload" />
                <label htmlFor="file-upload" className="px-4 py-2 border border-gray-300 rounded-sm cursor-pointer hover:bg-gray-50 text-sm">
                  Choose file
                </label>
                <span className="text-sm text-gray-500">No file chosen</span>
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium">Point of discussion for callback request</label>
              <textarea 
                name="discussion"
                rows={4}
                className="w-full p-3 border border-gray-300 rounded-sm focus:border-[#2175d9] outline-none transition-colors resize-none"
              ></textarea>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium">Where did you hear about us? (optional)</label>
              <select name="source" className="w-full p-3 border border-gray-300 rounded-sm focus:border-[#2175d9] outline-none transition-colors appearance-none bg-white">
                <option>Please Select</option>
                <option>Social Media</option>
                <option>Referral</option>
                <option>Search Engine</option>
              </select>
            </div>

            <div className="flex gap-4 items-start">
              <input 
                type="checkbox" 
                id="consent" 
                className="mt-1 w-5 h-5 border-gray-300 rounded-sm text-[#2175d9] focus:ring-[#2175d9]"
              />
              <label htmlFor="consent" className="text-sm leading-relaxed text-gray-600">
                Note: By applying here you provide consent to share your personal data with Randstad India. The personal data would be processed for employment purposes and would be within Randstad data protection notice. Read our <a href="#" className="text-[#2175d9] hover:underline">Privacy Statement</a> and <a href="#" className="text-[#2175d9] hover:underline">Website Terms and Conditions</a> for more information.
              </label>
            </div>

            <button className="px-12 py-4 border border-[#2175d9] text-[#2175d9] rounded-sm hover:bg-[#2175d9] hover:text-white transition-all font-medium">
              Submit
            </button>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-[#2175d9] text-white py-24 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-16">
          <div>
            <h2 className="text-4xl font-light leading-tight">frequently asked questions by clients.</h2>
          </div>
          <div className="lg:col-span-2">
            <FAQItem 
              question="If I submit hiring requirements, am I committed to something?"
              answer="No, submitting your requirements is completely free and does not commit you to any service. It's simply a way to start a conversation about how we can help you find the right talent."
            />
            <FAQItem 
              question="Can I register all profiles online?"
              answer="Yes, our platform allows you to manage the recruitment process digitally, from submitting requirements to reviewing candidate profiles."
            />
            <FAQItem 
              question="Why should I request a call back?"
              answer="A call back allows our specialist consultants to understand your specific needs, company culture, and technical requirements in detail, ensuring a better match."
            />
            <FAQItem 
              question="Who will connect with me once I request a call back?"
              answer="One of our dedicated recruitment consultants specializing in your industry will reach out to you."
            />
            <FAQItem 
              question="How long after I submit my request will I get a call back?"
              answer="Typically, one of our consultants will reach out to you within one business day."
            />
            <FAQItem 
              question="Can I choose a specific time for the call back?"
              answer="Yes, you can mention your preferred time in the 'Point of discussion' field in the form."
            />
            
            <button className="mt-12 px-8 py-3 border border-white rounded-sm hover:bg-white hover:text-[#2175d9] transition-colors font-medium">
              get more FAQs
            </button>
          </div>
        </div>
      </section>

      {/* Recruiting Process Section */}
      <section className="bg-white py-24 px-6">
        <div className="max-w-7xl mx-auto space-y-16">
          <div className="space-y-4">
            <h2 className="text-5xl font-light">the recruiting process.</h2>
            <p className="text-lg opacity-70">see what comes next after you submit hiring requirements.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gray-50 p-12 rounded-sm flex flex-col md:flex-row items-center gap-8 group hover:shadow-lg transition-shadow">
              <div className="flex-1 space-y-4">
                <h3 className="text-4xl font-light">1. submit your hiring requirements for free</h3>
                <p className="text-gray-600 leading-relaxed">
                  To submit is completely free & no strings attached. It's just an indication that you're looking for candidate(s).
                </p>
              </div>
              <div className="w-48 h-48 flex items-center justify-center">
                {/* Puzzle piece illustration */}
                <div className="relative w-32 h-32 border-4 border-[#2175d9] rounded-xl">
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-8 h-8 bg-white border-4 border-[#2175d9] rounded-full"></div>
                  <div className="absolute top-1/2 -right-4 -translate-y-1/2 w-8 h-8 bg-white border-4 border-[#2175d9] rounded-full"></div>
                </div>
              </div>
            </div>

            <div className="bg-[#2175d9] text-white p-12 rounded-sm flex flex-col md:flex-row items-center gap-8 group hover:shadow-lg transition-shadow relative overflow-hidden">
              <div className="flex-1 space-y-4 z-10">
                <h3 className="text-4xl font-light">2. we will contact you</h3>
                <p className="opacity-90 leading-relaxed">
                  sharing the services we have to offer, so we can determine if working with us is compatible with what you're looking for.
                </p>
              </div>
              <div className="w-12 h-12 flex items-center justify-center z-10">
                <ArrowRight size={48} className="group-hover:translate-x-2 transition-transform" />
              </div>
              {/* Abstract background */}
              <div className="absolute top-0 right-0 w-64 h-full bg-white/5 -skew-x-12 translate-x-12"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      

      {/* Floating Feedback Button */}
      <div className="fixed right-0 top-1/2 -translate-y-1/2 z-50">
        <button className="bg-[#2175d9] text-white px-2 py-6 rounded-l-md flex flex-col items-center gap-2 shadow-lg hover:bg-[#1a5eb0] transition-colors">
          <span className="[writing-mode:vertical-rl] text-xs font-bold tracking-widest">FEEDBACK</span>
        </button>
      </div>

      {/* Cookie Icon */}
      <div className="fixed bottom-6 left-6 z-50">
        <button className="w-12 h-12 bg-[#2175d9] text-white rounded-full flex items-center justify-center shadow-xl hover:scale-110 transition-transform">
          <div className="relative w-6 h-6 border-2 border-white rounded-full overflow-hidden">
            <div className="absolute top-1 left-1 w-1 h-1 bg-white rounded-full"></div>
            <div className="absolute top-3 left-2 w-1 h-1 bg-white rounded-full"></div>
            <div className="absolute top-2 left-4 w-1 h-1 bg-white rounded-full"></div>
            <div className="absolute top-4 left-4 w-1 h-1 bg-white rounded-full"></div>
          </div>
        </button>
      </div>
    </div>
  );
}
