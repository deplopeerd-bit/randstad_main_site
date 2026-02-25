import React from "react";

import { 
  Heart, 
  User, 
  ChevronRight, 
  Building2, 
  Briefcase, 
  Mail, 
  Clock, 
  Linkedin, 
  Twitter, 
  Facebook, 
  Youtube, 
  Instagram,
  MessageSquare
} from 'lucide-react';

export default function AboutChennai() {
  return (
    <div className="min-h-screen bg-white">
      {/* Top Utility Nav */}
      <div className="border-b border-gray-100">
        <div className="max-w-[1440px] mx-auto px-6 h-10 flex items-center justify-end">
          <a href="#" className="text-[13px] text-gray-600 hover:text-randstad-blue transition-colors">contact us</a>
        </div>
      </div>

      {/* Main Header */}
     

      {/* Breadcrumbs & Hero */}
      <main>
        <div className="bg-randstad-navy text-white pt-6 pb-20">
          <div className="max-w-[1440px] mx-auto px-6">
            <nav className="flex items-center gap-2 text-[13px] text-gray-400 mb-12">
              <a href="#" className="hover:text-white">home</a>
              <ChevronRight className="w-3 h-3" />
              <a href="#" className="hover:text-white">offices</a>
              <ChevronRight className="w-3 h-3" />
              <span className="text-white">Chennai</span>
            </nav>
            <h1 className="text-[56px] font-medium leading-tight tracking-tight">
              Recruitment Agency Chennai
            </h1>
          </div>
        </div>

        {/* Office Details Section */}
        <section className="py-20">
          <div className="max-w-[1440px] mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
              {/* Left Column: Office Card */}
              <div className="lg:col-span-4">
                <h2 className="text-[40px] font-light text-randstad-navy mb-10">office details</h2>
                <div className="bg-randstad-light p-8 rounded-sm">
                  <div className="space-y-6">
                    <div className="flex gap-4">
                      <Building2 className="w-5 h-5 text-gray-400 shrink-0 mt-1" />
                      <div>
                        <p className="text-[15px] leading-relaxed text-gray-700">
                          Randstad India Private Limited, Old no<br />
                          5 & 5 A , New No 9, Randstad House,<br />
                          Pycrofts Garden Road Chennai<br />
                          600006 India
                        </p>
                        <a href="#" className="text-randstad-blue text-[15px] hover:underline mt-2 inline-block">get directions</a>
                      </div>
                    </div>

                    <div className="flex gap-4">
                      <Briefcase className="w-5 h-5 text-gray-400 shrink-0 mt-1" />
                      <div>
                        <p className="text-[15px] text-gray-700">
                          education , engineering , finance & accounting
                        </p>
                        <button className="text-randstad-blue text-[15px] hover:underline mt-1">+ 7 more</button>
                      </div>
                    </div>

                    <div className="flex gap-4">
                      <Mail className="w-5 h-5 text-gray-400 shrink-0 mt-1" />
                      <a href="mailto:sales.enquiry@randstad.in" className="text-randstad-blue text-[15px] hover:underline">
                        sales.enquiry@randstad.in
                      </a>
                    </div>
                  </div>

                  <div className="mt-12 pt-8 border-t border-gray-200">
                    <h3 className="text-[22px] font-light text-randstad-navy mb-6">hours of operation</h3>
                    <div className="flex gap-4 items-center">
                      <Clock className="w-5 h-5 text-gray-400" />
                      <p className="text-[15px] text-gray-700">open from: 9:00 - 18:30</p>
                    </div>
                    <button className="text-randstad-blue text-[15px] hover:underline mt-4 flex items-center gap-1">
                      see all opening hours
                      <ChevronRight className="w-4 h-4 rotate-90" />
                    </button>
                  </div>
                </div>
              </div>

              {/* Right Column: Description */}
              <div className="lg:col-span-8 pt-20">
                <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed space-y-6">
                  <p>
                    India’s most prominent recruitment agency and employment firm, Randstad is now offering attractive opportunities in Chennai. With a wealth of recruitment experience, we match candidates with the right roles. One of the best placement consultants in Chennai, Randstad employs innovative technology along with human interaction to help qualified and talented job seekers find their dream role. Our job consultancy services ease the process of job hunting. We bring to you the best paying jobs in your field, offering helpful advice and tips throughout your job search. With our continuous professional development and recruitment advice, you can be sure to excel at your new job. Looking for high paying jobs in Chennai? Start browsing through hundreds of vacant positions at Randstad today!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Get in touch Section */}
        <section className="py-20 border-t border-gray-100">
          <div className="max-w-[1440px] mx-auto px-6">
            <div className="flex flex-col md:flex-row md:items-center gap-8">
              <h2 className="text-[32px] font-light text-randstad-navy">Get in touch with us</h2>
              <a href="#" className="text-randstad-blue text-[32px] font-light underline underline-offset-8 decoration-1">contact us</a>
            </div>
          </div>
        </section>

        {/* Sectors Section */}
        <section className="py-20 border-t border-gray-100">
          <div className="max-w-[1440px] mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
              <div className="lg:col-span-4">
                <h2 className="text-[32px] font-light text-randstad-navy">sectors</h2>
              </div>
              <div className="lg:col-span-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-0">
                  {[
                    'it - software', 'agro & seeds',
                    'banking and finance', 'construction & property',
                    'consulting & vc', 'consumer durables & electronics',
                    'digital, marketing & communic...', 'education',
                    'fmcg', 'hospitality & tourism',
                    'human resource', 'information technology',
                    'insurance', 'ites & bpo',
                    'legal, regulatory & intellectual p...', 'manufacturing',
                    'oil, gas, power & energy', 'media & entertainment',
                    'it', 'pharma, healthcare & lifescienc...',
                    'retail', 'supply chain & logistics',
                    'telecom'
                  ].map((sector) => (
                    <a 
                      key={sector} 
                      href="#" 
                      className="py-4 border-b border-gray-100 text-[20px] text-randstad-navy hover:text-randstad-blue transition-colors flex justify-between items-center group"
                    >
                      {sector}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      

      {/* Floating Feedback Button */}
      <button className="fixed right-0 top-1/2 -translate-y-1/2 bg-randstad-blue text-white px-3 py-6 rounded-l-md flex flex-col items-center gap-2 z-50 shadow-lg hover:bg-blue-600 transition-colors">
        <span className="[writing-mode:vertical-rl] text-[14px] font-medium tracking-wider">Feedback</span>
      </button>

      {/* Cookie Consent Icon */}
      <button className="fixed bottom-6 left-6 w-10 h-10 bg-randstad-blue rounded-full flex items-center justify-center text-white shadow-lg z-50 hover:scale-110 transition-transform">
        <MessageSquare className="w-5 h-5" />
      </button>
    </div>
  );
}
