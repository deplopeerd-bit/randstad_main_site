import React from "react";
import { ChevronDown, Mail } from "lucide-react";

export default function YellowBanner() {
  return (
    <section className="relative w-full bg-[#ffc600] py-16">
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-8">
        
        {/* Left Content */}
        <div className="flex-1">
          <h2 className="text-5xl font-light mb-4">
            let similar jobs come to you
          </h2>
          <p className="text-xl mb-8">
            we will keep you updated when we have similar job postings.
          </p>

          <button className="bg-[#141b3d] text-white font-medium py-4 px-8 rounded-sm hover:bg-opacity-90 transition-all">
            set a saved search & alert
          </button>
        </div>

        {/* Right Design Box */}
        <div className="relative w-64 h-64 flex items-center justify-center">
          <div className="absolute inset-0 bg-blue-500 rounded-sm rotate-12"></div>

          <div className="relative z-10 bg-white p-8 rounded-sm shadow-xl">
            <Mail className="w-24 h-24 text-blue-500" />

            <div className="absolute -top-4 -right-4 bg-[#141b3d] p-2 rounded-full">
              <ChevronDown className="w-8 h-8 text-white rotate-180" />
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}