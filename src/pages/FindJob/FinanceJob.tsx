import { motion } from "motion/react";

import { 
  Search, 
  User, 
  Heart, 
  ChevronDown, 
  Linkedin, 
  Twitter, 
  Facebook, 
  Youtube, 
  Instagram,
  Cookie
} from "lucide-react";

export default function JobPortal() {
  return (
    <div className="min-h-screen bg-white font-sans text-[#141414]">
      {/* Top Navigation Bar */}
      <header className="sticky top-0 z-50 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo and Main Nav */}
            <div className="flex items-center space-x-8">
              <div className="flex-shrink-0 flex items-center">
                <svg width="140" height="32" viewBox="0 0 140 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12.5 5C8.35786 5 5 8.35786 5 12.5C5 16.6421 8.35786 20 12.5 20H15V25H12.5C5.59644 25 0 19.4036 0 12.5C0 5.59644 5.59644 0 12.5 0H25V5H12.5Z" fill="#007DBA"/>
                  <path d="M30 0H42.5C49.4036 0 55 5.59644 55 12.5C55 19.4036 49.4036 25 42.5 25H40V20H42.5C46.6421 20 50 16.6421 50 12.5C50 8.35786 46.6421 5 42.5 5H30V0Z" fill="#007DBA"/>
                  <text x="60" y="20" className="text-2xl font-bold fill-[#007DBA]" style={{ fontFamily: 'Arial, sans-serif' }}>randstad</text>
                </svg>
              </div>
              <nav className="hidden md:flex space-x-6">
                <button className="flex items-center text-sm font-medium hover:text-[#007DBA] transition-colors">
                  find a job <ChevronDown className="ml-1 w-4 h-4" />
                </button>
                <button className="flex items-center text-sm font-medium hover:text-[#007DBA] transition-colors">
                  for talent <ChevronDown className="ml-1 w-4 h-4" />
                </button>
                <button className="flex items-center text-sm font-medium hover:text-[#007DBA] transition-colors">
                  for employer <ChevronDown className="ml-1 w-4 h-4" />
                </button>
                <button className="flex items-center text-sm font-medium hover:text-[#007DBA] transition-colors">
                  resources <ChevronDown className="ml-1 w-4 h-4" />
                </button>
                <button className="flex items-center text-sm font-medium hover:text-[#007DBA] transition-colors">
                  about us <ChevronDown className="ml-1 w-4 h-4" />
                </button>
              </nav>
            </div>

            {/* Right Side Nav */}
            <div className="flex items-center space-x-6">
              <button className="hidden lg:block text-xs uppercase tracking-wider font-semibold text-gray-500 hover:text-[#007DBA]">
                contact us
              </button>
              <div className="flex items-center space-x-4">
                <button className="flex items-center space-x-1 text-gray-600 hover:text-[#007DBA]">
                  <Heart className="w-5 h-5" />
                  <span className="text-sm font-medium">0</span>
                </button>
                <button className="flex items-center space-x-2 text-gray-600 hover:text-[#007DBA]">
                  <User className="w-5 h-5" />
                  <span className="text-sm font-medium">my randstad</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative bg-[#0E1B3D] text-white overflow-hidden py-20 lg:py-32">
        {/* Abstract Background Elements */}
        <div className="absolute top-0 right-0 w-1/2 h-full pointer-events-none opacity-40">
          <div className="absolute top-1/4 right-1/4 w-[400px] h-[60px] bg-gradient-to-r from-purple-600 to-blue-500 rounded-full rotate-[-45deg] blur-sm"></div>
          <div className="absolute top-1/3 right-1/3 w-[300px] h-[40px] bg-gradient-to-r from-purple-500 to-indigo-500 rounded-full rotate-[-45deg] opacity-60"></div>
          <div className="absolute top-1/2 right-1/2 w-[200px] h-[30px] bg-purple-400 rounded-full rotate-[-45deg] opacity-40"></div>
          <div className="absolute bottom-1/4 right-1/4 w-4 h-4 bg-white rounded-full"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <nav className="flex items-center space-x-2 text-xs mb-12 opacity-80">
            <a href="#" className="hover:underline">home</a>
            <span>›</span>
            <a href="#" className="hover:underline">find a job</a>
            <span>›</span>
            <a href="#" className="hover:underline">ongoing hiring drives</a>
            <span>›</span>
            <span className="font-semibold">financial product sales jobs</span>
          </nav>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl"
          >
            <h1 className="text-5xl lg:text-7xl font-bold leading-tight mb-8">
              looking for a job in financial product sales?
            </h1>
            <p className="text-xl lg:text-2xl mb-10 opacity-90 leading-relaxed">
              Just clicked on our ad? That means you're looking for exciting career opportunities! Upload Your Resume in just 2 minutes & get noticed!
            </p>
            <button className="bg-white text-[#0E1B3D] px-10 py-4 rounded-md font-bold text-lg hover:bg-gray-100 transition-all shadow-lg">
              upload resume
            </button>
          </motion.div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="bg-white py-24 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row justify-between items-center gap-12">
            <motion.h2 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-4xl lg:text-6xl font-bold text-[#0E1B3D] max-w-3xl leading-tight"
            >
              It takes less than 2 minutes! Submit your resume & let top recruiters find you.
            </motion.h2>
            <motion.button 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="border-2 border-[#007DBA] text-[#007DBA] px-12 py-4 rounded-md font-bold text-lg hover:bg-[#007DBA] hover:text-white transition-all whitespace-nowrap"
            >
              apply now
            </motion.button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#0E1B3D] text-white pt-20 pb-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-12 mb-20">
            {/* Column 1 */}
            <div>
              <h3 className="text-xl font-bold mb-6">find a job</h3>
              <ul className="space-y-4 text-gray-400 text-sm">
                <li><a href="#" className="hover:text-white transition-colors">explore all jobs</a></li>
                <li><a href="#" className="hover:text-white transition-colors">submit your cv</a></li>
                <li><a href="#" className="hover:text-white transition-colors">join our team</a></li>
                <li><a href="#" className="hover:text-white transition-colors">refer a friend</a></li>
              </ul>

              <h3 className="text-xl font-bold mt-12 mb-6">for talents</h3>
              <ul className="space-y-4 text-gray-400 text-sm">
                <li><a href="#" className="hover:text-white transition-colors">specialisms</a></li>
                <li><a href="#" className="hover:text-white transition-colors">testimonials</a></li>
                <li><a href="#" className="hover:text-white transition-colors">career advice</a></li>
                <li><a href="#" className="hover:text-white transition-colors">beware of job scams</a></li>
              </ul>
            </div>

            {/* Column 2 */}
            <div>
              <h3 className="text-xl font-bold mb-6">for employers</h3>
              <ul className="space-y-4 text-gray-400 text-sm">
                <li><a href="#" className="hover:text-white transition-colors">submit a vacancy</a></li>
                <li><a href="#" className="hover:text-white transition-colors">request a callback</a></li>
                <li><a href="#" className="hover:text-white transition-colors">our services</a></li>
                <li><a href="#" className="hover:text-white transition-colors">specialisms</a></li>
                <li><a href="#" className="hover:text-white transition-colors">case studies</a></li>
                <li><a href="#" className="hover:text-white transition-colors">testimonials</a></li>
              </ul>

              <h3 className="text-xl font-bold mt-12 mb-6">resources</h3>
              <ul className="space-y-4 text-gray-400 text-sm">
                <li><a href="#" className="hover:text-white transition-colors">case studies</a></li>
                <li><a href="#" className="hover:text-white transition-colors">press room</a></li>
                <li><a href="#" className="hover:text-white transition-colors">blogs</a></li>
              </ul>
            </div>

            {/* Column 3 */}
            <div>
              <h3 className="text-xl font-bold mb-6">workforce insights</h3>
              <ul className="space-y-4 text-gray-400 text-sm">
                <li><a href="#" className="hover:text-white transition-colors">talent insights reports</a></li>
                <li><a href="#" className="hover:text-white transition-colors">employer brand research reports</a></li>
                <li><a href="#" className="hover:text-white transition-colors">salary trends reports</a></li>
                <li><a href="#" className="hover:text-white transition-colors">ed&i reports</a></li>
                <li><a href="#" className="hover:text-white transition-colors">workmonitor reports</a></li>
                <li><a href="#" className="hover:text-white transition-colors">startup hiring trends</a></li>
                <li><a href="#" className="hover:text-white transition-colors">talent pulse surveys</a></li>
              </ul>
            </div>

            {/* Column 4 */}
            <div>
              <h3 className="text-xl font-bold mb-6">jobs</h3>
              <ul className="space-y-4 text-gray-400 text-sm">
                <li><a href="#" className="hover:text-white transition-colors">engineering jobs</a></li>
                <li><a href="#" className="hover:text-white transition-colors">cxo jobs</a></li>
                <li><a href="#" className="hover:text-white transition-colors">manufacturing jobs</a></li>
                <li><a href="#" className="hover:text-white transition-colors">supply chain & logistics jobs</a></li>
                <li><a href="#" className="hover:text-white transition-colors">education jobs</a></li>
                <li><a href="#" className="hover:text-white transition-colors">finance & accounting jobs</a></li>
                <li><a href="#" className="hover:text-white transition-colors">healthcare jobs</a></li>
                <li><a href="#" className="hover:text-white transition-colors">hr & admin support jobs</a></li>
                <li><a href="#" className="hover:text-white transition-colors">ites/gcc jobs</a></li>
                <li><a href="#" className="hover:text-white transition-colors">legal & compliance jobs</a></li>
                <li><a href="#" className="hover:text-white transition-colors">sales & marketing jobs</a></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-700 pt-10">
            <div className="flex flex-col md:flex-row justify-between items-center gap-8">
              <div className="flex space-x-6">
                <a href="#" className="bg-gray-700 p-2 rounded-full hover:bg-[#007DBA] transition-colors"><Linkedin className="w-5 h-5" /></a>
                <a href="#" className="bg-gray-700 p-2 rounded-full hover:bg-[#007DBA] transition-colors"><Twitter className="w-5 h-5" /></a>
                <a href="#" className="bg-gray-700 p-2 rounded-full hover:bg-[#007DBA] transition-colors"><Facebook className="w-5 h-5" /></a>
                <a href="#" className="bg-gray-700 p-2 rounded-full hover:bg-[#007DBA] transition-colors"><Youtube className="w-5 h-5" /></a>
                <a href="#" className="bg-gray-700 p-2 rounded-full hover:bg-[#007DBA] transition-colors"><Instagram className="w-5 h-5" /></a>
              </div>
              <p className="text-xs text-gray-500 text-center md:text-left">
                registered office: Randstad India Private Limited, CIN U74210TN1992PTC023097, Randstad House, Old No. 5 & 5A, New No. 9, Pycrofts Garden Road, Nungambakkam, Chennai, TN - 600 006
              </p>
            </div>

            <div className="mt-12 flex flex-col items-center">
              <div className="flex items-center space-x-2 mb-6">
                <span className="text-xs font-bold tracking-widest uppercase">RANDSTAD,</span>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 4C8 4 5 7 5 11C5 15 8 18 12 18H14V22H12C6 22 1 17 1 11C1 5 6 0 12 0H23V4H12Z" fill="#007DBA"/>
                </svg>
                <span className="text-[10px] text-gray-500 uppercase tracking-tighter">HUMAN FORWARD and SHAPING THE WORLD OF WORK are registered trademarks of © Randstad N.V.2023</span>
              </div>

              <div className="max-w-4xl text-center">
                <p className="text-xs text-gray-400 leading-relaxed mb-4">
                  Security Advice: Randstad India does not charge any fee at any stage of its recruitment process from the candidate nor allows their employees to collect any fees from any candidates. <a href="#" className="text-[#007DBA] hover:underline">Click here to know more</a>
                </p>
                <p className="text-xs text-gray-400 leading-relaxed">
                  EEO Statement: Randstad India is an Equal Employment Opportunity Employer. All qualified applicants receive consideration for employment without regard to race, color, religion, sex, sexual orientation, gender identity or expression, appearance, national origin, age, marital status, veteran status, or disability status, or any other characteristics. Our global mission is to become the world's most equitable and specialized talent company, and we actively embrace diversity and inclusion as the cornerstones of our success. To read more of Randstad India's work in the space of equity, diversity and inclusion please <a href="#" className="text-[#007DBA] hover:underline">click here</a>
                </p>
              </div>
            </div>

            <div className="mt-12 flex flex-wrap justify-center gap-6 text-xs text-gray-400">
              <a href="#" className="hover:text-white">terms & conditions</a>
              <a href="#" className="hover:text-white">cookies</a>
              <a href="#" className="hover:text-white">misconduct reporting procedure</a>
              <a href="#" className="hover:text-white">accessibility</a>
              <a href="#" className="hover:text-white">be aware</a>
              <a href="#" className="hover:text-white">sitemap</a>
              <a href="#" className="hover:text-white">privacy statement</a>
            </div>
          </div>
        </div>
      </footer>

      {/* Floating Elements */}
      <div className="fixed right-0 top-1/2 -translate-y-1/2 z-50">
        <button className="bg-[#4F86F7] text-white px-3 py-6 rounded-l-md font-bold text-xs uppercase tracking-widest [writing-mode:vertical-rl] rotate-180 flex items-center justify-center hover:bg-[#3b6edb] transition-colors shadow-lg">
          Feedback
        </button>
      </div>

      <div className="fixed bottom-6 left-6 z-50">
        <button className="bg-[#007DBA] text-white p-3 rounded-full shadow-2xl hover:bg-[#006699] transition-transform hover:scale-110">
          <Cookie className="w-6 h-6" />
        </button>
      </div>
    </div>
  );
}
