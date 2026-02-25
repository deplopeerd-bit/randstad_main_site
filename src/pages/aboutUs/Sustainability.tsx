import React from "react";
import { motion } from "motion/react";

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { 
  Heart, 
  User, 
  ChevronDown, 
  Linkedin, 
  Twitter, 
  Facebook, 
  Youtube, 
  Instagram,
  MessageSquare
} from 'lucide-react';

const RandstadLogo = () => (
  <svg width="140" height="32" viewBox="0 0 140 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12.5 10C12.5 10 16 10 18.5 12.5C21 15 21 18.5 21 18.5" stroke="#2175D9" strokeWidth="3" strokeLinecap="round"/>
    <path d="M21 13.5C21 13.5 21 10 18.5 7.5C16 5 12.5 5 12.5 5" stroke="#2175D9" strokeWidth="3" strokeLinecap="round"/>
    <text x="30" y="22" fill="#000" fontSize="20" fontWeight="700" fontFamily="Inter">randstad</text>
  </svg>
);

const NavItem = ({ label }: { label: string }) => (
  <div className="flex items-center gap-1 cursor-pointer hover:text-[#2175D9] transition-colors py-4">
    <span className="text-[15px] font-normal">{label}</span>
    <ChevronDown size={14} className="mt-0.5" />
  </div>
);

const FooterColumn = ({ title, links }: { title: string, links: string[] }) => (
  <div className="flex flex-col gap-3">
    <h3 className="text-white font-bold text-[16px] mb-2">{title}</h3>
    {links.map((link, i) => (
      <a key={i} href="#" className="text-white/70 hover:text-white text-[14px] transition-colors">
        {link}
      </a>
    ))}
  </div>
);

export default function App() {
  return (
    <div className="min-h-screen bg-white selection:bg-[#4bb4e6] selection:text-white">
      {/* Top Utility Nav */}
      <div className="border-b border-gray-100">
        <div className="container-custom flex justify-end py-2">
          <a href="#" className="text-[12px] text-[#666] hover:underline">contact us</a>
        </div>
      </div>

      {/* Main Header */}
      <header className="sticky top-0 z-50 bg-white border-b border-gray-100 shadow-sm">
        <div className="container-custom flex items-center justify-between h-[72px]">
          <div className="flex items-center gap-12">
            <RandstadLogo />
            <nav className="hidden lg:flex items-center gap-8">
              <NavItem label="find a job" />
              <NavItem label="for talent" />
              <NavItem label="for employer" />
              <NavItem label="resources" />
              <NavItem label="about us" />
            </nav>
          </div>
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2 cursor-pointer group">
              <Heart size={20} className="text-[#666] group-hover:text-[#2175D9]" />
              <span className="text-[14px] font-medium text-[#666] group-hover:text-[#2175D9]">0</span>
            </div>
            <div className="flex items-center gap-2 cursor-pointer group">
              <User size={20} className="text-[#666] group-hover:text-[#2175D9]" />
              <span className="text-[14px] font-medium text-[#666] group-hover:text-[#2175D9]">my randstad</span>
            </div>
          </div>
        </div>
      </header>

      {/* Breadcrumbs & Hero Title */}
      <section className="bg-[#0a1a3a] text-white pt-12 pb-24">
        <div className="container-custom">
          <div className="flex items-center gap-2 text-[13px] text-white/60 mb-12">
            <a href="#" className="hover:text-white">home</a>
            <span>&gt;</span>
            <a href="#" className="hover:text-white">about us</a>
            <span>&gt;</span>
            <span className="text-white">sustainability</span>
          </div>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-[64px] font-normal leading-[1.1] tracking-tight max-w-3xl"
          >
            simultaneous promotion <br />
            <span className="text-[#4bb4e6]">of all interests.</span>
          </motion.h1>
        </div>
      </section>

      {/* Volunteer Section */}
      <section className="py-24 bg-white">
        <div className="container-custom grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="max-w-xl">
            <h2 className="text-[56px] font-normal leading-[1.1] mb-8 text-[#0a1a3a]">
              volunteer with <br />
              randstad overseas.
            </h2>
            <p className="text-[18px] leading-[1.6] text-[#666]">
              Randstad has a far-reaching partnership with Voluntary Service Overseas (VSO). This public – private partnership is fully in line with Randstad’s long-standing commitment to Corporate Social Responsibility. Randstad offer employees the opportunity to volunteer their services and skills for extended assignments in developing countries.
            </p>
          </div>
          <div className="relative">
            <div className="rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src="https://picsum.photos/seed/randstad-volunteer/800/600" 
                alt="Volunteer" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            {/* Decorative circles */}
            <div className="absolute top-1/4 -left-8 w-24 h-24 bg-[#4bb4e6] rounded-full opacity-80 blur-sm"></div>
            <div className="absolute bottom-1/4 -right-4 w-16 h-16 bg-[#2175D9] rounded-full opacity-60"></div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 border-4 border-white/30 rounded-full"></div>
          </div>
        </div>
      </section>

      {/* Building Sustainable Future Section */}
      <section className="py-24 bg-[#f9f9f9]">
        <div className="container-custom grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-4">
            <h2 className="text-[40px] font-normal leading-[1.2] text-[#0a1a3a]">
              building a sustainable <br />
              future.
            </h2>
          </div>
          <div className="lg:col-span-8 space-y-12">
            <div className="space-y-4">
              <p className="text-[18px] leading-[1.6] text-[#333]">
                It’s everyone’s job to give back to the society and we take pride in our ability to find suitable jobs for workers, and ideal candidates for our clients; but our commitment to society does not stop there.
              </p>
            </div>

            <div className="space-y-4">
              <span className="text-[12px] uppercase tracking-wider text-[#666] font-semibold">simultaneous promotion of all interests</span>
              <p className="text-[18px] leading-[1.6] text-[#333]">
                This is one of our core business values and highlights the responsibility we feel towards the people and communities we serve, worldwide.
              </p>
            </div>

            <div className="space-y-4">
              <span className="text-[12px] uppercase tracking-wider text-[#666] font-semibold">voluntary service overseas (VSO)</span>
              <p className="text-[18px] leading-[1.6] text-[#333]">
                Randstad has a far-reaching partnership with VSO. This public – private partnership started in 2004 and is fully in line with Randstad’s long-standing commitment to sustainability. Together, we have achieved a lot and we will continue to work towards building a more inclusive and sustainable society.
              </p>
            </div>

            <div className="space-y-4">
              <span className="text-[12px] uppercase tracking-wider text-[#666] font-semibold">towards a better future</span>
              <p className="text-[18px] leading-[1.6] text-[#333]">
                Our desire to apply our knowledge and skills to help alleviate poverty in communities outside our regular remit have pushed many of our operating companies to take up activities that help raise awareness of VSO, increase volunteer numbers, and offer the possibility to volunteer to their staff.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#0a1a3a] pt-20 pb-12">
        <div className="container-custom">
          {/* Footer Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
            <FooterColumn 
              title="find a job" 
              links={["explore all jobs", "submit your cv", "join our team", "refer a friend"]} 
            />
            <FooterColumn 
              title="for talents" 
              links={["specialisms", "testimonials", "career advice", "beware of job scams"]} 
            />
            <FooterColumn 
              title="for employers" 
              links={["submit a vacancy", "request a callback", "our services", "specialisms", "case studies", "testimonials"]} 
            />
            <FooterColumn 
              title="resources" 
              links={["case studies", "press room", "blogs"]} 
            />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20 border-t border-white/10 pt-12">
            <FooterColumn 
              title="workforce insights" 
              links={["talent insights reports", "employer brand research reports", "salary trends reports", "ed&i reports", "workmonitor reports", "startup hiring trends", "talent pulse surveys"]} 
            />
            <FooterColumn 
              title="jobs" 
              links={["engineering jobs", "cxo jobs", "manufacturing jobs", "supply chain & logistics jobs", "education jobs", "finance & accounting jobs", "healthcare jobs", "hr & admin support jobs", "ites/gcc jobs", "legal & compliance jobs", "sales & marketing jobs"]} 
            />
          </div>

          {/* Social & Legal */}
          <div className="border-t border-white/10 pt-12 space-y-12">
            <div className="flex flex-wrap items-center justify-between gap-8">
              <div className="flex items-center gap-6">
                <a href="#" className="text-white/60 hover:text-white transition-colors"><Linkedin size={24} /></a>
                <a href="#" className="text-white/60 hover:text-white transition-colors"><Twitter size={24} /></a>
                <a href="#" className="text-white/60 hover:text-white transition-colors"><Facebook size={24} /></a>
                <a href="#" className="text-white/60 hover:text-white transition-colors"><Youtube size={24} /></a>
                <a href="#" className="text-white/60 hover:text-white transition-colors"><Instagram size={24} /></a>
              </div>
              <p className="text-white/40 text-[12px] max-w-md">
                registered office: Randstad India Private Limited, CIN U74210TN1992PTC023097/Randstad House, Old No. 5 & 5A, New No. 9, Pycrofts Garden Road, Nungambakkam, Chennai, TN - 600 006
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <span className="text-white font-bold text-[18px]">RANDSTAD,</span>
                <div className="w-8 h-8 flex items-center justify-center">
                  <svg viewBox="0 0 24 24" fill="none" className="w-full h-full">
                    <path d="M4 12C4 12 7 12 9 14C11 16 11 19 11 19" stroke="#4bb4e6" strokeWidth="3" strokeLinecap="round"/>
                    <path d="M11 15C11 15 11 12 9 10C7 8 4 8 4 8" stroke="#4bb4e6" strokeWidth="3" strokeLinecap="round"/>
                  </svg>
                </div>
                <span className="text-white/60 text-[12px] uppercase tracking-widest">HUMAN FORWARD and SHAPING THE WORLD OF WORK are registered trademarks of © Randstad N.V.2023</span>
              </div>

              <div className="space-y-4 text-white/60 text-[13px] leading-relaxed">
                <p>
                  <span className="text-white font-semibold">Security Advice:</span> Randstad India does not charge any fee at any stage of its recruitment process from the candidate nor allows their employees to collect any fees from any candidates. <a href="#" className="text-[#4bb4e6] hover:underline">Click here to know more</a>
                </p>
                <p>
                  <span className="text-white font-semibold">EEO Statement:</span> Randstad India is an Equal Employment Opportunity Employer. All qualified applicants receive consideration for employment without regard to race, color, religion, sex, sexual orientation, gender identity or expression, appearance, national origin, age, marital status, veteran status, or disability status, or any other characteristics. Our global mission is to become the world's most equitable and specialized talent company, and we actively embrace diversity and inclusion as the cornerstones of our success. To read more of Randstad India's work in the space of equity, diversity and inclusion please <a href="#" className="text-[#4bb4e6] hover:underline">click here</a>
                </p>
              </div>
            </div>

            {/* Bottom Links */}
            <div className="flex flex-wrap gap-x-8 gap-y-4 pt-8 border-t border-white/5">
              {["terms & conditions", "cookies", "misconduct reporting procedure", "accessibility", "be aware", "sitemap", "privacy statement"].map((link, i) => (
                <a key={i} href="#" className="text-white/40 hover:text-white text-[12px] transition-colors">
                  {link}
                </a>
              ))}
            </div>
          </div>
        </div>
      </footer>

      {/* Floating Feedback Button */}
      <div className="fixed right-0 top-1/2 -translate-y-1/2 z-50">
        <button className="bg-[#2175D9] text-white py-3 px-1 rounded-l-md flex flex-col items-center gap-2 shadow-lg hover:bg-[#1a5eb0] transition-colors">
          <span className="[writing-mode:vertical-rl] text-[12px] font-medium uppercase tracking-wider">Feedback</span>
        </button>
      </div>

      {/* Floating Chat Button */}
      <div className="fixed bottom-6 left-6 z-50">
        <button className="bg-[#2175D9] text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-transform">
          <MessageSquare size={24} />
        </button>
      </div>
    </div>
  );
}
