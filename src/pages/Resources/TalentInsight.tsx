import React from "react";
import { ChevronDown, Facebook, Heart, Instagram, Linkedin, Twitter, User, Youtube } from "lucide-react";

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */


export default function ResTalentInsight() {
  return (
    <div className="min-h-screen font-sans text-[#141414] bg-white">
      {/* Top Header */}
     

      {/* Breadcrumbs */}
      <div className="bg-white py-4">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12 flex items-center gap-2 text-[12px] text-gray-500">
          <a href="#" className="hover:underline">home</a>
          <span>&gt;</span>
          <a href="#" className="hover:underline">hr news</a>
          <span>&gt;</span>
          <a href="#" className="hover:underline">workforce insights</a>
          <span>&gt;</span>
          <span className="text-gray-900">startup hiring</span>
        </div>
      </div>

      {/* Hero Section */}
      <section className="bg-[#051937] text-white py-20 lg:py-32 overflow-hidden relative">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
          <div className="max-w-3xl">
            <h2 className="text-[32px] lg:text-[48px] font-light leading-tight mb-2">
              randstad - FICCI
            </h2>
            <h1 className="text-[48px] lg:text-[72px] font-medium leading-[1.1] text-[#2167ad] mb-8">
              startup hiring trends report 2023.
            </h1>
            <p className="text-[18px] lg:text-[22px] font-light leading-relaxed mb-12 opacity-90 max-w-2xl">
              The 'Startup Hiring Trends 2023' report aims to gather insights on hiring and firing trends, talent acquisition and retention strategies in startups across locations and industries.
            </p>
            <button className="border border-white px-10 py-4 text-[16px] font-medium hover:bg-white hover:text-[#051937] transition-colors">
              download report
            </button>
          </div>
        </div>
        {/* Floating Feedback Tab */}
        <div className="absolute right-0 top-1/2 -translate-y-1/2 bg-[#2467CC] text-white py-3 px-1 rotate-90 origin-right cursor-pointer text-[12px] font-medium tracking-wider">
          Feedback
        </div>
      </section>

      {/* Insights Section */}
      <section className="flex flex-col lg:flex-row min-h-[600px]">
        <div className="flex-1 bg-[#f9f7f2] py-20 px-6 lg:px-24 flex flex-col justify-center">
          <div className="max-w-xl">
            <span className="text-[24px] font-light mb-4 block">2023.</span>
            <h2 className="text-[48px] lg:text-[64px] font-medium leading-[1.1] mb-8">
              startup hiring trends report.
            </h2>
            <p className="text-[16px] leading-relaxed text-gray-700 mb-8">
              The Federation of Indian Chambers of Commerce and Industry (FICCI) in partnership with Randstad India Private Limited has undertaken a "Startup Hiring Trends Survey" to understand and analyze the expected hiring trends for startups in India in 2023. Over 300 startups participated in the survey with 77% of the startups being in the early stage.
            </p>
            <ul className="space-y-6 text-[16px] leading-relaxed text-gray-800">
              <li className="flex gap-4">
                <span className="mt-2 w-1.5 h-1.5 rounded-full bg-gray-400 shrink-0"></span>
                <p>The survey depicts that almost 80% of the early stage startups currently having an employee strength of less than twenty are looking to increase their workforce in 2023</p>
              </li>
              <li className="flex gap-4">
                <span className="mt-2 w-1.5 h-1.5 rounded-full bg-gray-400 shrink-0"></span>
                <p>92% startups stated that their hiring decisions will chiefly be driven by new project orders, additional funding raised from investors and expansion strategies.</p>
              </li>
              <li className="flex gap-4">
                <span className="mt-2 w-1.5 h-1.5 rounded-full bg-gray-400 shrink-0"></span>
                <p>32% foresee increasing hiring by over 30% followed by 28% companies planning to increase the hiring in the range of 11-20%</p>
              </li>
              <li className="flex gap-4">
                <span className="mt-2 w-1.5 h-1.5 rounded-full bg-gray-400 shrink-0"></span>
                <p>Sectors which show the highest hiring intent are healthcare, aerospace & defence, energy where startups foresee increasing the workforce by over 30%. Other key sectors which predict hiring in the range of 11-20% are agri/agritech, AI/ML/deeptech, edtech, automotive, ecommerce/delivery services</p>
              </li>
              <li className="flex gap-4">
                <span className="mt-2 w-1.5 h-1.5 rounded-full bg-gray-400 shrink-0"></span>
                <p>38% startups stated that they will hire at junior level followed by 27% companies anticipating mid-level hiring.</p>
              </li>
            </ul>
          </div>
        </div>
        <div className="flex-1 relative min-h-[400px] lg:min-h-auto">
          <img 
            src="https://picsum.photos/seed/randstad1/1200/1000" 
            alt="Startup Hiring" 
            className="absolute inset-0 w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
        </div>
      </section>

      {/* Form Section */}
      <section className="py-24 px-6 lg:px-12 bg-white">
        <div className="max-w-[1440px] mx-auto flex flex-col lg:flex-row gap-20">
          <div className="lg:w-1/3">
            <h2 className="text-[32px] lg:text-[40px] font-medium leading-tight">
              startup hiring trends report 2023.
            </h2>
          </div>
          <div className="lg:w-2/3 max-w-2xl">
            <form className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-2">
                  <label className="text-[14px] text-gray-600">First name</label>
                  <input type="text" className="w-full border border-gray-300 p-3 focus:outline-none focus:border-[#2467CC]" />
                </div>
                <div className="space-y-2">
                  <label className="text-[14px] text-gray-600">Last name</label>
                  <input type="text" className="w-full border border-gray-300 p-3 focus:outline-none focus:border-[#2467CC]" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-[14px] text-gray-600">Business Email</label>
                <input type="email" className="w-full border border-gray-300 p-3 focus:outline-none focus:border-[#2467CC]" />
              </div>
              <div className="space-y-2">
                <label className="text-[14px] text-gray-600">Phone number</label>
                <input type="tel" className="w-full border border-gray-300 p-3 focus:outline-none focus:border-[#2467CC]" />
              </div>
              <div className="space-y-2">
                <label className="text-[14px] text-gray-600">Company name</label>
                <input type="text" className="w-full border border-gray-300 p-3 focus:outline-none focus:border-[#2467CC]" />
              </div>
              <div className="space-y-2">
                <label className="text-[14px] text-gray-600">Designation</label>
                <input type="text" className="w-full border border-gray-300 p-3 focus:outline-none focus:border-[#2467CC]" />
              </div>
              <div className="flex items-start gap-3">
                <input type="checkbox" id="notifications" className="mt-1 w-5 h-5 border-gray-300 rounded" />
                <label htmlFor="notifications" className="text-[14px] text-gray-600 leading-relaxed">
                  I would like to receive email notifications once a month with the latest workforce insights blogs (optional).
                </label>
              </div>
              <button type="submit" className="border border-[#2467CC] text-[#2467CC] px-12 py-3 text-[16px] font-medium hover:bg-[#2467CC] hover:text-white transition-colors">
                Submit
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Reference Check Section */}
      <section className="flex flex-col lg:flex-row min-h-[500px]">
        <div className="flex-1 bg-[#051937] text-white py-20 px-6 lg:px-24 flex flex-col justify-center">
          <div className="max-w-xl">
            <h2 className="text-[48px] lg:text-[56px] font-medium leading-[1.1] mb-8">
              what is a reference check and why are they important?
            </h2>
            <p className="text-[16px] leading-relaxed opacity-90 mb-12">
              To make the most of your reference checking process, it's important to understand exactly what this recruitment tool is, what value it adds to the hiring process and how to gather the insights you need to choose the right candidates.
            </p>
            <button className="border border-white px-10 py-3 text-[16px] font-medium hover:bg-white hover:text-[#051937] transition-colors">
              read more
            </button>
          </div>
        </div>
        <div className="flex-1 relative min-h-[400px] lg:min-h-auto">
          <img 
            src="https://picsum.photos/seed/randstad2/1200/1000" 
            alt="Reference Check" 
            className="absolute inset-0 w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          {/* Abstract circles overlay as seen in screenshot */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div className="w-[300px] h-[300px] border border-white/20 rounded-full"></div>
            <div className="absolute w-[450px] h-[450px] border border-white/10 rounded-full"></div>
            <div className="absolute w-[600px] h-[600px] border border-white/5 rounded-full"></div>
          </div>
        </div>
      </section>

      {/* Download Questions Section */}
      <section className="py-24 px-6 lg:px-12 bg-white">
        <div className="max-w-[1440px] mx-auto flex flex-col lg:flex-row items-center justify-between gap-12">
          <div className="max-w-3xl">
            <h2 className="text-[40px] lg:text-[56px] font-medium leading-[1.1] mb-2">
              what questions to ask during a reference check.
            </h2>
            <h3 className="text-[40px] lg:text-[56px] font-medium leading-[1.1] text-[#2467CC]">
              download your copy of our list of reference checking questions today.
            </h3>
          </div>
          <button className="border border-[#2467CC] text-[#2467CC] px-12 py-4 text-[16px] font-medium hover:bg-[#2467CC] hover:text-white transition-colors whitespace-nowrap">
            download now
          </button>
        </div>
      </section>

      {/* Footer */}
      

      {/* Cookie/Bot Icon Placeholder */}
      <div className="fixed bottom-6 left-6 w-12 h-12 bg-[#2467CC] rounded-full flex items-center justify-center text-white shadow-lg cursor-pointer z-50">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 20C7.59 20 4 16.41 4 12C4 7.59 7.59 4 12 4C16.41 4 20 7.59 20 12C20 16.41 16.41 20 12 20Z" fill="currentColor"/>
          <circle cx="12" cy="12" r="3" fill="currentColor"/>
        </svg>
      </div>
    </div>
  );
}
