import React from "react";
import { ArrowRight, ChevronDown, Facebook, Heart, Instagram, Linkedin, Search, Twitter, User, Youtube } from "lucide-react";

const RandstadPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-white font-sans text-[#141414]">
      {/* Top Header */}
      

      {/* Hero Section */}
      <section className="bg-[#051937] text-white py-16 overflow-hidden relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-xs uppercase tracking-widest mb-4 opacity-70">
            home {'>'} find a job {'>'} <span className="font-bold opacity-100">current job openings</span>
          </div>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
                current job openings.
              </h1>
              <p className="text-lg md:text-xl opacity-90 max-w-lg leading-relaxed">
                Explore our current job openings and join our dynamic team. We're looking for talented professionals across various fields to contribute to our exciting projects. Apply today and grow your career with us!
              </p>
            </div>
            <div className="flex justify-center md:justify-end">
              <div className="relative w-64 h-64 md:w-80 md:h-80">
                <div className="absolute inset-0 border-4 border-blue-400 rounded-full opacity-20"></div>
                <div className="absolute inset-4 border-4 border-blue-300 rounded-full opacity-40"></div>
                <div className="absolute inset-8 border-8 border-white rounded-full flex items-center justify-center">
                   <div className="w-1/2 h-1/2 border-t-8 border-r-8 border-blue-400 rounded-tr-full absolute top-0 right-0"></div>
                   <Search className="w-16 h-16 text-blue-400" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Hiring List Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="md:col-span-1">
              <h2 className="text-3xl font-bold">we're hiring.</h2>
            </div>
            <div className="md:col-span-2 space-y-0">
              {[
                "hiring machine operator & technician",
                "hiring pharmacists",
                "hiring retail pharmacists",
                "hiring fos for payment industry",
                "hiring field sales executive - QR business"
              ].map((job, idx) => (
                <a 
                  key={idx} 
                  href="#" 
                  className="group flex justify-between items-center py-8 border-b border-gray-200 hover:text-blue-600 transition-colors"
                >
                  <span className="text-2xl font-light text-blue-600 group-hover:text-blue-800">{job}</span>
                  <ArrowRight className="w-6 h-6 text-blue-400 transform group-hover:translate-x-2 transition-transform" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      
      {/* Floating Feedback Button */}
      <div className="fixed right-0 top-1/2 -translate-y-1/2 rotate-90 origin-right">
        <button className="bg-blue-500 text-white px-4 py-2 text-xs font-bold rounded-t-lg shadow-lg">
          Feedback
        </button>
      </div>

      {/* Cookie Icon */}
      <div className="fixed bottom-6 left-6">
        <button className="bg-blue-500 text-white p-2 rounded-full shadow-lg">
          <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4A8,8 0 0,1 20,12A8,8 0 0,1 12,20M12,6A1,1 0 0,0 11,7A1,1 0 0,0 12,8A1,1 0 0,0 13,7A1,1 0 0,0 12,6M12,16A1,1 0 0,0 11,17A1,1 0 0,0 12,18A1,1 0 0,0 13,17A1,1 0 0,0 12,16M16,11A1,1 0 0,0 15,12A1,1 0 0,0 16,13A1,1 0 0,0 17,12A1,1 0 0,0 16,11M8,11A1,1 0 0,0 7,12A1,1 0 0,0 8,13A1,1 0 0,0 9,12A1,1 0 0,0 8,11Z" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default RandstadPage;
