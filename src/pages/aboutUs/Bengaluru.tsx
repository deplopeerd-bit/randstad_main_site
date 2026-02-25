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

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      {/* Top Utility Nav */}
      <div className="border-b border-gray-100">
        <div className="max-w-[1440px] mx-auto px-6 h-10 flex items-center justify-end">
          <a href="#" className="text-[13px] text-gray-600 hover:text-randstad-blue transition-colors">contact us</a>
        </div>
      </div>

      {/* Main Header */}
      <header className="sticky top-0 z-50 bg-white border-b border-gray-100">
        <div className="max-w-[1440px] mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-12">
            {/* Logo */}
            <div className="flex items-center">
              <svg width="140" height="32" viewBox="0 0 140 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12.5 8.5C12.5 6.567 10.933 5 9 5C7.067 5 5.5 6.567 5.5 8.5V23.5H0V8.5C0 3.806 3.806 0 8.5 0C13.194 0 17 3.806 17 8.5V23.5H12.5V8.5Z" fill="#2175D9"/>
                <path d="M28.5 8.5C28.5 6.567 26.933 5 25 5C23.067 5 21.5 6.567 21.5 8.5V23.5H16V8.5C16 3.806 19.806 0 24.5 0C29.194 0 33 3.806 33 8.5V23.5H28.5V8.5Z" fill="#2175D9"/>
                <text x="38" y="24" fontFamily="Inter" fontWeight="700" fontSize="24" fill="#2175D9">randstad</text>
              </svg>
            </div>

            {/* Navigation */}
            <nav className="hidden lg:flex items-center gap-8">
              {['find a job', 'for talent', 'for employer', 'resources', 'about us'].map((item) => (
                <a 
                  key={item} 
                  href="#" 
                  className="text-[15px] font-medium text-gray-700 hover:text-randstad-blue flex items-center gap-1"
                >
                  {item}
                  <ChevronRight className="w-4 h-4 rotate-90" />
                </a>
              ))}
            </nav>
          </div>

          {/* Right Actions */}
          <div className="flex items-center gap-6">
            <button className="flex items-center gap-2 text-gray-700 hover:text-randstad-blue">
              <Heart className="w-5 h-5" />
              <span className="text-[15px]">0</span>
            </button>
            <button className="flex items-center gap-2 text-gray-700 hover:text-randstad-blue">
              <User className="w-5 h-5" />
              <span className="text-[15px] font-medium">my randstad</span>
            </button>
          </div>
        </div>
      </header>

      {/* Breadcrumbs & Hero */}
      <main>
        <div className="bg-randstad-navy text-white pt-6 pb-20">
          <div className="max-w-[1440px] mx-auto px-6">
            <nav className="flex items-center gap-2 text-[13px] text-gray-400 mb-12">
              <a href="#" className="hover:text-white">home</a>
              <ChevronRight className="w-3 h-3" />
              <a href="#" className="hover:text-white">offices</a>
              <ChevronRight className="w-3 h-3" />
              <span className="text-white">bengaluru</span>
            </nav>
            <h1 className="text-[56px] font-medium leading-tight tracking-tight">
              Recruitment Agency Bengaluru
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
                          Randstad India Private Limited,<br />
                          Randstad Tower, No.1, Main Guard<br />
                          Cross Road, Bengaluru 560001 KA<br />
                          India
                        </p>
                        <a href="#" className="text-randstad-blue text-[15px] hover:underline mt-2 inline-block">get directions</a>
                      </div>
                    </div>

                    <div className="flex gap-4">
                      <Briefcase className="w-5 h-5 text-gray-400 shrink-0 mt-1" />
                      <div>
                        <p className="text-[15px] text-gray-700">
                          education, engineering, finance & accounting
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
                    India's best job consultancy is now in Bangalore, matching thousands of job seekers with well-paying roles in their industry. Randstad is one of the most experienced recruitment agencies in Bangalore, leveraging cutting-edge technology to help you land the right job. With our innovative workforce solutions, we help candidates find meaningful work from our wide pool of job opportunities. Randstad's top-notch job consultancy services guarantee a successful career in a competent organization, offering complete support and close consultation throughout the job search. Stay ahead of the curve with updated career resources and industry information from one of the foremost recruitment agencies in Bangalore. One of the most seasoned placement consultants in Bangalore today, we help you navigate the turbulent seas of the job market. In search of a job? Browse through the attractive job opportunities at Randstad today!
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
      <footer className="bg-randstad-navy text-white pt-20 pb-10">
        <div className="max-w-[1440px] mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-6 gap-12 mb-20">
            {/* Find a job */}
            <div>
              <h4 className="text-[18px] font-bold mb-6">find a job</h4>
              <ul className="space-y-4 text-[15px] text-gray-400">
                <li><a href="#" className="hover:text-white">explore all jobs</a></li>
                <li><a href="#" className="hover:text-white">submit your cv</a></li>
                <li><a href="#" className="hover:text-white">join our team</a></li>
                <li><a href="#" className="hover:text-white">refer a friend</a></li>
              </ul>
              <h4 className="text-[18px] font-bold mt-12 mb-6">for talents</h4>
              <ul className="space-y-4 text-[15px] text-gray-400">
                <li><a href="#" className="hover:text-white">specialisms</a></li>
                <li><a href="#" className="hover:text-white">testimonials</a></li>
                <li><a href="#" className="hover:text-white">career advice</a></li>
                <li><a href="#" className="hover:text-white">beware of job scams</a></li>
              </ul>
            </div>

            {/* For employers */}
            <div>
              <h4 className="text-[18px] font-bold mb-6">for employers</h4>
              <ul className="space-y-4 text-[15px] text-gray-400">
                <li><a href="#" className="hover:text-white">submit a vacancy</a></li>
                <li><a href="#" className="hover:text-white">request a callback</a></li>
                <li><a href="#" className="hover:text-white">our services</a></li>
                <li><a href="#" className="hover:text-white">specialisms</a></li>
                <li><a href="#" className="hover:text-white">case studies</a></li>
                <li><a href="#" className="hover:text-white">testimonials</a></li>
              </ul>
              <h4 className="text-[18px] font-bold mt-12 mb-6">resources</h4>
              <ul className="space-y-4 text-[15px] text-gray-400">
                <li><a href="#" className="hover:text-white">case studies</a></li>
                <li><a href="#" className="hover:text-white">press room</a></li>
                <li><a href="#" className="hover:text-white">blogs</a></li>
              </ul>
            </div>

            {/* Workforce insights */}
            <div>
              <h4 className="text-[18px] font-bold mb-6">workforce insights</h4>
              <ul className="space-y-4 text-[15px] text-gray-400">
                <li><a href="#" className="hover:text-white">talent insights reports</a></li>
                <li><a href="#" className="hover:text-white">employer brand research reports</a></li>
                <li><a href="#" className="hover:text-white">salary trends reports</a></li>
                <li><a href="#" className="hover:text-white">ed&i reports</a></li>
                <li><a href="#" className="hover:text-white">workmonitor reports</a></li>
                <li><a href="#" className="hover:text-white">startup hiring trends</a></li>
                <li><a href="#" className="hover:text-white">talent pulse surveys</a></li>
              </ul>
            </div>

            {/* Jobs */}
            <div className="lg:col-span-2">
              <h4 className="text-[18px] font-bold mb-6">jobs</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4 text-[15px] text-gray-400">
                <a href="#" className="hover:text-white">engineering jobs</a>
                <a href="#" className="hover:text-white">cxo jobs</a>
                <a href="#" className="hover:text-white">manufacturing jobs</a>
                <a href="#" className="hover:text-white">supply chain & logistics jobs</a>
                <a href="#" className="hover:text-white">education jobs</a>
                <a href="#" className="hover:text-white">finance & accounting jobs</a>
                <a href="#" className="hover:text-white">healthcare jobs</a>
                <a href="#" className="hover:text-white">hr & admin support jobs</a>
                <a href="#" className="hover:text-white">ites/gcc jobs</a>
                <a href="#" className="hover:text-white">legal & compliance jobs</a>
                <a href="#" className="hover:text-white">sales & marketing jobs</a>
              </div>
            </div>
          </div>

          {/* Social & Legal */}
          <div className="border-t border-gray-800 pt-10">
            <div className="flex flex-wrap gap-4 mb-8">
              {[Linkedin, Twitter, Facebook, Youtube, Instagram].map((Icon, i) => (
                <a key={i} href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-randstad-blue transition-colors">
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>

            <div className="space-y-6 text-[12px] text-gray-500 leading-relaxed">
              <p>registered office: Randstad India Private Limited, CIN U74210TN1992PTC023097, Randstad House, Old No. 5 & 5A, New No. 9, Pycrofts Garden Road, Nungambakkam, Chennai, TN - 600 006</p>
              
              <div className="flex items-center gap-4">
                <span className="text-white font-bold tracking-widest">RANDSTAD,</span>
                <svg width="30" height="20" viewBox="0 0 30 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M10 5C10 2.23858 7.76142 0 5 0C2.23858 0 0 2.23858 0 5V15H4V5C4 4.44772 4.44772 4 5 4C5.55228 4 6 4.44772 6 5V15H10V5Z" fill="#2175D9"/>
                  <path d="M22 5C22 2.23858 19.7614 0 17 0C14.2386 0 12 2.23858 12 5V15H16V5C16 4.44772 16.4477 4 17 4C17.5523 4 18 4.44772 18 5V15H22V5Z" fill="#2175D9"/>
                </svg>
                <span className="text-[11px] uppercase tracking-wider">HUMAN FORWARD and SHAPING THE WORLD OF WORK are registered trademarks of © Randstad N.V.2023</span>
              </div>

              <div className="space-y-4">
                <p>
                  <span className="font-bold text-gray-400">Security Advice:</span> Randstad India does not charge any fee at any stage of its recruitment process from the candidate nor allows their employees to collect any fees from any candidates. <a href="#" className="text-gray-400 underline">Click here to know more</a>
                </p>
                <p>
                  <span className="font-bold text-gray-400">EEO Statement:</span> Randstad India is an Equal Employment Opportunity Employer. All qualified applicants receive consideration for employment without regard to race, color, religion, sex, sexual orientation, gender identity or expression, appearance, national origin, age, marital status, veteran status, or disability status, or any other characteristics. Our global mission is to become the world's most equitable and specialized talent company, and we actively embrace diversity and inclusion as the cornerstones of our success. To read more of Randstad India's work in the space of equity, diversity and inclusion please <a href="#" className="text-gray-400 underline">click here</a>
                </p>
              </div>

              <div className="flex flex-wrap gap-x-6 gap-y-2 pt-8">
                {['terms & conditions', 'cookies', 'misconduct reporting procedure', 'accessibility', 'be aware', 'sitemap', 'privacy statement'].map((link) => (
                  <a key={link} href="#" className="hover:text-white transition-colors">{link}</a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </footer>

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
