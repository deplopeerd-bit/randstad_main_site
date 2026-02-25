import { Facebook, Instagram, Linkedin, MessageSquare, Twitter, Youtube } from "lucide-react";
import { Link } from "react-router-dom";

export function Footer() {
  return (
    <footer className="bg-[#00214c] text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 mb-16">
          <div>
            <h3 className="text-lg font-bold mb-6">find a job</h3>
            <ul className="space-y-3 text-sm text-gray-300">
              <li><Link to="/findajob/explore-all-jobs" className="hover:text-white">explore all jobs</Link></li>
              <li><Link to="/findajob/submit-your-cv" className="hover:text-white">submit your cv</Link></li>
              <li><Link to="/findajob/join-our-team" className="hover:text-white">join our team</Link></li>
              <li><Link to="/findajob/refer-a-friend" className="hover:text-white">refer a friend</Link></li>
            </ul>
            <h3 className="text-lg font-bold mt-12 mb-6">for talents</h3>
            <ul className="space-y-3 text-sm text-gray-300">
              <li><Link to="/fortalent/specialisms" className="hover:text-white">specialisms</Link></li>
              <li><Link to="/fortalent/testimonials" className="hover:text-white">testimonials</Link></li>
              <li><Link to="/fortalent/career-advice" className="hover:text-white">career advice</Link></li>
              <li><Link to="/fortalent/beware-of-job-scams" className="hover:text-white text-red-400">beware of job scams</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-6">for employers</h3>
            <ul className="space-y-3 text-sm text-gray-300">
              <li><Link to="/foremployer/submit-a-vacancy" className="hover:text-white">submit a vacancy</Link></li>
              <li><Link to="/foremployer/request-a-callback" className="hover:text-white">request a callback</Link></li>
              <li><Link to="/foremployer/our-services" className="hover:text-white">our services</Link></li>
              <li><Link to="/foremployer/specialisms" className="hover:text-white">specialisms</Link></li>
              <li><Link to="/foremployer/case-studies" className="hover:text-white">case studies</Link></li>
              <li><Link to="/foremployer/testimonials" className="hover:text-white">testimonials</Link></li>
            </ul>
            <h3 className="text-lg font-bold mt-12 mb-6">resources</h3>
            <ul className="space-y-3 text-sm text-gray-300">
              <li><Link to="/resources/case-studies" className="hover:text-white">case studies</Link></li>
              <li><Link to="/resources/press-room" className="hover:text-white">press room</Link></li>
              <li><Link to="/resources/blogs" className="hover:text-white">blogs</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-6">workforce insights</h3>
            <ul className="space-y-3 text-sm text-gray-300">
              <li><Link to="/resources/talent-insights-reports" className="hover:text-white">talent insights reports</Link></li>
              <li><Link to="/resources/employer-brand-research-reports" className="hover:text-white">employer brand research reports</Link></li>
              <li><Link to="/resources/salary-trends-reports" className="hover:text-white">salary trends reports</Link></li>
              <li><Link to="/resources/ed-i-reports" className="hover:text-white">ed&i reports</Link></li>
              <li><Link to="/resources/workmonitor-reports" className="hover:text-white">workmonitor reports</Link></li>
              <li><Link to="/resources/startup-hiring-trends" className="hover:text-white">startup hiring trends</Link></li>
              <li><Link to="/resources/talent-pulse-surveys" className="hover:text-white">talent pulse surveys</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-6">jobs</h3>
            <ul className="space-y-3 text-sm text-gray-300">
              <li><Link to="/findajob/engineering-jobs" className="hover:text-white">engineering jobs</Link></li>
              <li><Link to="/findajob/cxo-jobs" className="hover:text-white">cxo jobs</Link></li>
              <li><Link to="/findajob/manufacturing-jobs" className="hover:text-white">manufacturing jobs</Link></li>
              <li><Link to="/findajob/supply-chain-logistics-jobs" className="hover:text-white">supply chain & logistics jobs</Link></li>
              <li><Link to="/findajob/education-jobs" className="hover:text-white">education jobs</Link></li>
              <li><Link to="/findajob/finance-accounting-jobs" className="hover:text-white">finance & accounting jobs</Link></li>
              <li><Link to="/findajob/healthcare-jobs" className="hover:text-white">healthcare jobs</Link></li>
              <li><Link to="/findajob/hr-admin-support-jobs" className="hover:text-white">hr & admin support jobs</Link></li>
              <li><Link to="/findajob/ites-gcc-jobs" className="hover:text-white">ites/gcc jobs</Link></li>
              <li><Link to="/findajob/legal-compliance-jobs" className="hover:text-white">legal & compliance jobs</Link></li>
              <li><Link to="/findajob/sales-marketing-jobs" className="hover:text-white">sales & marketing jobs</Link></li>
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
