import { Link } from "react-router-dom";
import { Search, MapPin, User, Heart, MessageSquare, ChevronDown, Globe, Linkedin, Twitter, Facebook, Youtube, Instagram } from "lucide-react";

export function Header() {
  return (
    <header className="bg-white border-b border-gray-100 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center gap-8">
            <Link to="/" className="flex items-center">
              <span className="text-2xl font-bold text-[#00214c] flex items-center gap-1">
                <span className="text-[#2175e3]">r</span>randstad
              </span>
            </Link>
            <nav className="hidden md:flex items-center gap-6">
              <Link to="/jobs" className="text-sm font-medium text-gray-600 hover:text-[#2175e3] flex items-center gap-1">
                find a job <ChevronDown size={14} />
              </Link>
              <Link to="/talent" className="text-sm font-medium text-gray-600 hover:text-[#2175e3] flex items-center gap-1">
                for talent <ChevronDown size={14} />
              </Link>
              <Link to="/employer" className="text-sm font-medium text-gray-600 hover:text-[#2175e3] flex items-center gap-1">
                for employer <ChevronDown size={14} />
              </Link>
              <Link to="/resources" className="text-sm font-medium text-gray-600 hover:text-[#2175e3] flex items-center gap-1">
                resources <ChevronDown size={14} />
              </Link>
              <Link to="/about" className="text-sm font-medium text-gray-600 hover:text-[#2175e3] flex items-center gap-1">
                about us <ChevronDown size={14} />
              </Link>
            </nav>
          </div>
          <div className="flex items-center gap-6">
            <Link to="/contact" className="text-xs font-medium text-gray-500 uppercase tracking-wider hover:text-[#2175e3]">
              contact us
            </Link>
            <div className="flex items-center gap-4 border-l pl-6 border-gray-200">
              <button className="text-gray-600 hover:text-[#2175e3]">
                <Heart size={20} />
              </button>
              <Link to="/login" className="flex items-center gap-2 text-sm font-medium text-gray-600 hover:text-[#2175e3]">
                <User size={20} />
                <span>my randstad</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export function Footer() {
  return (
    <footer className="bg-[#00214c] text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 mb-16">
          <div>
            <h3 className="text-lg font-bold mb-6">find a job</h3>
            <ul className="space-y-3 text-sm text-gray-300">
              <li><Link to="/jobs" className="hover:text-white">explore all jobs</Link></li>
              <li><Link to="/submit-cv" className="hover:text-white">submit your cv</Link></li>
              <li><Link to="/join-team" className="hover:text-white">join our team</Link></li>
              <li><Link to="/refer-friend" className="hover:text-white">refer a friend</Link></li>
            </ul>
            <h3 className="text-lg font-bold mt-12 mb-6">for talents</h3>
            <ul className="space-y-3 text-sm text-gray-300">
              <li><Link to="/specialisms" className="hover:text-white">specialisms</Link></li>
              <li><Link to="/testimonials" className="hover:text-white">testimonials</Link></li>
              <li><Link to="/career-advice" className="hover:text-white">career advice</Link></li>
              <li><Link to="/job-scams" className="hover:text-white text-red-400">beware of job scams</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-6">for employers</h3>
            <ul className="space-y-3 text-sm text-gray-300">
              <li><Link to="/submit-vacancy" className="hover:text-white">submit a vacancy</Link></li>
              <li><Link to="/request-callback" className="hover:text-white">request a callback</Link></li>
              <li><Link to="/services" className="hover:text-white">our services</Link></li>
              <li><Link to="/specialisms" className="hover:text-white">specialisms</Link></li>
              <li><Link to="/case-studies" className="hover:text-white">case studies</Link></li>
              <li><Link to="/testimonials" className="hover:text-white">testimonials</Link></li>
            </ul>
            <h3 className="text-lg font-bold mt-12 mb-6">resources</h3>
            <ul className="space-y-3 text-sm text-gray-300">
              <li><Link to="/case-studies" className="hover:text-white">case studies</Link></li>
              <li><Link to="/press" className="hover:text-white">press room</Link></li>
              <li><Link to="/blogs" className="hover:text-white">blogs</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-6">workforce insights</h3>
            <ul className="space-y-3 text-sm text-gray-300">
              <li><Link to="/reports/workmonitor" className="hover:text-white">talent insights reports</Link></li>
              <li><Link to="/reports/employer-brand" className="hover:text-white">employer brand research reports</Link></li>
              <li><Link to="/reports/salary-trends" className="hover:text-white">salary trends reports</Link></li>
              <li><Link to="/reports/edi" className="hover:text-white">ed&i reports</Link></li>
              <li><Link to="/reports/workmonitor" className="hover:text-white">workmonitor reports</Link></li>
              <li><Link to="/reports/hiring-trends" className="hover:text-white">startup hiring trends</Link></li>
              <li><Link to="/reports/talent-pulse" className="hover:text-white">talent pulse surveys</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-6">jobs</h3>
            <ul className="space-y-3 text-sm text-gray-300">
              <li><Link to="/jobs/engineering" className="hover:text-white">engineering jobs</Link></li>
              <li><Link to="/jobs/cxo" className="hover:text-white">cxo jobs</Link></li>
              <li><Link to="/jobs/manufacturing" className="hover:text-white">manufacturing jobs</Link></li>
              <li><Link to="/jobs/supply-chain" className="hover:text-white">supply chain & logistics jobs</Link></li>
              <li><Link to="/jobs/education" className="hover:text-white">education jobs</Link></li>
              <li><Link to="/jobs/finance" className="hover:text-white">finance & accounting jobs</Link></li>
              <li><Link to="/jobs/healthcare" className="hover:text-white">healthcare jobs</Link></li>
              <li><Link to="/jobs/hr" className="hover:text-white">hr & admin support jobs</Link></li>
              <li><Link to="/jobs/ites" className="hover:text-white">ites/gcc jobs</Link></li>
              <li><Link to="/jobs/legal" className="hover:text-white">legal & compliance jobs</Link></li>
              <li><Link to="/jobs/sales" className="hover:text-white">sales & marketing jobs</Link></li>
            </ul>
          </div>
        </div>

        <div className="flex flex-wrap gap-4 mb-12">
          <Link to="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors">
            <Linkedin size={20} />
          </Link>
          <Link to="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors">
            <Twitter size={20} />
          </Link>
          <Link to="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors">
            <Facebook size={20} />
          </Link>
          <Link to="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors">
            <Youtube size={20} />
          </Link>
          <Link to="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors">
            <Instagram size={20} />
          </Link>
        </div>

        <div className="border-t border-white/10 pt-8 text-[11px] text-gray-400 leading-relaxed">
          <p className="mb-4">registered office: Randstad India Private Limited, CIN U74210TN1992PTC023097,/Randstad House, Old No. 5 & 5A, New No. 9, Pycrofts Garden Road, Nungambakkam, Chennai, TN - 600 006</p>
          <p className="mb-8 flex items-center gap-2">
            <span className="text-white font-bold">RANDSTAD,</span>
            <span className="text-[#2175e3] font-bold">r</span>
            <span>, HUMAN FORWARD and SHAPING THE WORLD OF WORK are registered trademarks of © Randstad N.V.2023</span>
          </p>
          
          <div className="space-y-4 mb-12">
            <p><span className="text-white font-semibold">Security Advice:</span> Randstad India does not charge any fee at any stage of its recruitment process from the candidate nor allows their employees to collect any fees from any candidates. <Link to="/security" className="underline">Click here to know more</Link></p>
            <p><span className="text-white font-semibold">EEO Statement:</span> Randstad India is an Equal Employment Opportunity Employer. All qualified applicants receive consideration for employment without regard to race, color, religion, sex, sexual orientation, gender identity or expression, appearance, national origin, age, marital status, veteran status, or disability status, or any other characteristics. Our global mission is to become the world’s most equitable and specialized talent company, and we actively embrace diversity and inclusion as the cornerstones of our success. To read more of Randstad India's work in the space of equity, diversity and inclusion please <Link to="/edi" className="underline">click here</Link></p>
          </div>

          <div className="flex flex-wrap gap-x-6 gap-y-2 text-[12px]">
            <Link to="/terms" className="hover:text-white">terms & conditions</Link>
            <Link to="/cookies" className="hover:text-white">cookies</Link>
            <Link to="/misconduct" className="hover:text-white">misconduct reporting procedure</Link>
            <Link to="/accessibility" className="hover:text-white">accessibility</Link>
            <Link to="/be-aware" className="hover:text-white">be aware</Link>
            <Link to="/sitemap" className="hover:text-white">sitemap</Link>
            <Link to="/privacy" className="hover:text-white">privacy statement</Link>
          </div>
        </div>
      </div>
      
      {/* Floating Chat Button */}
      <button className="fixed bottom-6 right-6 w-14 h-14 bg-[#2175e3] rounded-full flex items-center justify-center shadow-lg hover:bg-[#1a5eb8] transition-colors z-50">
        <MessageSquare className="text-white" size={24} />
      </button>
    </footer>
  );
}
