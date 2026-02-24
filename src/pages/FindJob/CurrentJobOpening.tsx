import React from "react";
import { ArrowRight, ChevronDown, Facebook, Heart, Instagram, Linkedin, Search, Twitter, User, Youtube } from "lucide-react";

const RandstadPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-white font-sans text-[#141414]">
      {/* Top Header */}
      <header className="border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-end py-2 text-xs text-gray-500">
            <a href="#" className="hover:underline">contact us</a>
          </div>
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-8">
              <div className="flex items-center">
                <svg width="120" height="30" viewBox="0 0 120 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M15.5 5C10.5 5 6.5 9 6.5 14C6.5 19 10.5 23 15.5 23H22V26H15.5C8.5 26 3.5 21 3.5 14C3.5 7 8.5 2 15.5 2H22V5H15.5Z" fill="#0072BC"/>
                  <path d="M26 2H29V26H26V2Z" fill="#0072BC"/>
                  <text x="35" y="22" fill="#0072BC" style={{ font: 'bold 20px sans-serif' }}>randstad</text>
                </svg>
              </div>
              <nav className="hidden md:flex space-x-6 text-sm font-medium text-gray-600">
                <a href="#" className="flex items-center hover:text-blue-600">find a job <ChevronDown className="ml-1 w-4 h-4" /></a>
                <a href="#" className="flex items-center hover:text-blue-600">for talent <ChevronDown className="ml-1 w-4 h-4" /></a>
                <a href="#" className="flex items-center hover:text-blue-600">for employer <ChevronDown className="ml-1 w-4 h-4" /></a>
                <a href="#" className="flex items-center hover:text-blue-600">resources <ChevronDown className="ml-1 w-4 h-4" /></a>
                <a href="#" className="flex items-center hover:text-blue-600">about us <ChevronDown className="ml-1 w-4 h-4" /></a>
              </nav>
            </div>
            <div className="flex items-center space-x-6 text-sm font-medium">
              <a href="#" className="flex items-center hover:text-blue-600">
                <Heart className="w-5 h-5 mr-1" />
                <span>0</span>
              </a>
              <a href="#" className="flex items-center hover:text-blue-600">
                <User className="w-5 h-5 mr-1" />
                <span>my randstad</span>
              </a>
            </div>
          </div>
        </div>
      </header>

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
      <footer className="bg-[#051937] text-white pt-20 pb-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-12 mb-16">
            <div>
              <h3 className="text-lg font-bold mb-6">find a job</h3>
              <ul className="space-y-3 text-sm opacity-70">
                <li><a href="#" className="hover:opacity-100">explore all jobs</a></li>
                <li><a href="#" className="hover:opacity-100">submit your cv</a></li>
                <li><a href="#" className="hover:opacity-100">join our team</a></li>
                <li><a href="#" className="hover:opacity-100">refer a friend</a></li>
              </ul>
              <h3 className="text-lg font-bold mt-12 mb-6">for talents</h3>
              <ul className="space-y-3 text-sm opacity-70">
                <li><a href="#" className="hover:opacity-100">specialisms</a></li>
                <li><a href="#" className="hover:opacity-100">testimonials</a></li>
                <li><a href="#" className="hover:opacity-100">career advice</a></li>
                <li><a href="#" className="hover:opacity-100">beware of job scams</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-6">for employers</h3>
              <ul className="space-y-3 text-sm opacity-70">
                <li><a href="#" className="hover:opacity-100">submit a vacancy</a></li>
                <li><a href="#" className="hover:opacity-100">request a callback</a></li>
                <li><a href="#" className="hover:opacity-100">our services</a></li>
                <li><a href="#" className="hover:opacity-100">specialisms</a></li>
                <li><a href="#" className="hover:opacity-100">case studies</a></li>
                <li><a href="#" className="hover:opacity-100">testimonials</a></li>
              </ul>
              <h3 className="text-lg font-bold mt-12 mb-6">resources</h3>
              <ul className="space-y-3 text-sm opacity-70">
                <li><a href="#" className="hover:opacity-100">case studies</a></li>
                <li><a href="#" className="hover:opacity-100">press room</a></li>
                <li><a href="#" className="hover:opacity-100">blogs</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-6">workforce insights</h3>
              <ul className="space-y-3 text-sm opacity-70">
                <li><a href="#" className="hover:opacity-100">talent insights reports</a></li>
                <li><a href="#" className="hover:opacity-100">employer brand research reports</a></li>
                <li><a href="#" className="hover:opacity-100">salary trends reports</a></li>
                <li><a href="#" className="hover:opacity-100">ed&i reports</a></li>
                <li><a href="#" className="hover:opacity-100">workmonitor reports</a></li>
                <li><a href="#" className="hover:opacity-100">startup hiring trends</a></li>
                <li><a href="#" className="hover:opacity-100">talent pulse surveys</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-6">jobs</h3>
              <ul className="space-y-3 text-sm opacity-70">
                <li><a href="#" className="hover:opacity-100">engineering jobs</a></li>
                <li><a href="#" className="hover:opacity-100">cxo jobs</a></li>
                <li><a href="#" className="hover:opacity-100">manufacturing jobs</a></li>
                <li><a href="#" className="hover:opacity-100">supply chain & logistics jobs</a></li>
                <li><a href="#" className="hover:opacity-100">education jobs</a></li>
                <li><a href="#" className="hover:opacity-100">finance & accounting jobs</a></li>
                <li><a href="#" className="hover:opacity-100">healthcare jobs</a></li>
                <li><a href="#" className="hover:opacity-100">hr & admin support jobs</a></li>
                <li><a href="#" className="hover:opacity-100">ites/gcc jobs</a></li>
                <li><a href="#" className="hover:opacity-100">legal & compliance jobs</a></li>
                <li><a href="#" className="hover:opacity-100">sales & marketing jobs</a></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-white/10 pt-10 flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
            <div className="flex space-x-4">
              <a href="#" className="p-2 bg-white/10 rounded-full hover:bg-white/20 transition-colors"><Linkedin className="w-5 h-5" /></a>
              <a href="#" className="p-2 bg-white/10 rounded-full hover:bg-white/20 transition-colors"><Twitter className="w-5 h-5" /></a>
              <a href="#" className="p-2 bg-white/10 rounded-full hover:bg-white/20 transition-colors"><Facebook className="w-5 h-5" /></a>
              <a href="#" className="p-2 bg-white/10 rounded-full hover:bg-white/20 transition-colors"><Youtube className="w-5 h-5" /></a>
              <a href="#" className="p-2 bg-white/10 rounded-full hover:bg-white/20 transition-colors"><Instagram className="w-5 h-5" /></a>
            </div>
            <div className="text-[10px] opacity-50 text-center md:text-left max-w-2xl">
              registered office: Randstad India Private Limited, CIN U74210TN1992PTC023097,/Randstad House, Old No. 5 & 5A, New No. 9, Pycrofts Garden Road, Nungambakkam, Chennai, TN - 600 006
            </div>
          </div>

          <div className="mt-10 flex items-center space-x-2">
            <svg width="100" height="25" viewBox="0 0 120 30" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M15.5 5C10.5 5 6.5 9 6.5 14C6.5 19 10.5 23 15.5 23H22V26H15.5C8.5 26 3.5 21 3.5 14C3.5 7 8.5 2 15.5 2H22V5H15.5Z" fill="white"/>
              <path d="M26 2H29V26H26V2Z" fill="white"/>
              <text x="35" y="22" fill="white" style={{ font: 'bold 20px sans-serif' }}>randstad</text>
            </svg>
            <span className="text-[10px] opacity-50">, HUMAN FORWARD and SHAPING THE WORLD OF WORK are registered trademarks of © Randstad N.V.2023</span>
          </div>

          <div className="mt-10 space-y-4 text-xs opacity-70">
            <p>
              Security Advice: Randstad India does not charge any fee at any stage of its recruitment process from the candidate nor allows their employees to collect any fees from any candidates. <a href="#" className="underline">Click here to know more</a>
            </p>
            <p>
              EEO Statement: Randstad India is an Equal Employment Opportunity Employer. All qualified applicants receive consideration for employment without regard to race, color, religion, sex, sexual orientation, gender identity or expression, appearance, national origin, age, marital status, veteran status, or disability status, or any other characteristics. Our global mission is to become the world's most equitable and specialized talent company, and we actively embrace diversity and inclusion as the cornerstones of our success. To read more of Randstad India's work in the space of equity, diversity and inclusion please <a href="#" className="underline">click here</a>
            </p>
          </div>

          <div className="mt-12 flex flex-wrap gap-6 text-xs opacity-50 justify-center md:justify-start">
            <a href="#" className="hover:underline">terms & conditions</a>
            <a href="#" className="hover:underline">cookies</a>
            <a href="#" className="hover:underline">misconduct reporting procedure</a>
            <a href="#" className="hover:underline">accessibility</a>
            <a href="#" className="hover:underline">be aware</a>
            <a href="#" className="hover:underline">sitemap</a>
            <a href="#" className="hover:underline">privacy statement</a>
          </div>
        </div>
      </footer>

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
