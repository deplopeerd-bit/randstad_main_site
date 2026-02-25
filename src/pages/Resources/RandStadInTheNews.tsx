/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { 
  Search, 
  Heart, 
  User, 
  ChevronDown, 
  Linkedin, 
  Twitter, 
  Facebook, 
  Youtube, 
  Instagram, 
  Mail, 
  Printer,
  MessageSquare
} from 'lucide-react';

const NavItem = ({ label, hasDropdown = true }: { label: string; hasDropdown?: boolean }) => (
  <div className="flex items-center gap-1 cursor-pointer hover:text-randstad-blue transition-colors py-4 group">
    <span className="text-[15px] font-normal">{label}</span>
    {hasDropdown && <ChevronDown size={14} className="group-hover:rotate-180 transition-transform duration-300" />}
  </div>
);

const FooterColumn = ({ title, items }: { title: string; items: string[] }) => (
  <div className="flex flex-col gap-3">
    <h3 className="text-white font-semibold text-[16px] mb-2">{title}</h3>
    {items.map((item, idx) => (
      <a key={idx} href="#" className="text-[#999999] hover:text-white text-[14px] transition-colors">
        {item}
      </a>
    ))}
  </div>
);

export default function ResRandStadInTheNews() {
  const articles = [
    {
      title: "The future of work is about impact, not the hours",
      source: "Times Ascent | Viswanath PS",
      date: "March 2025"
    },
    {
      title: "Govt faces an uphill task in providing social protections to gig workers",
      source: "Business Standard | Viswanath PS"
    },
    {
      title: "Why major banks continue to face high attrition",
      source: "Money Control | Randstad India"
    },
    {
      title: "India's top 4 IT firms lose over 17,700 employees in a quarter — When will tech hiring pick up?",
      source: "CNBC TV18 | Randstad India"
    },
    {
      title: "Salary hikes low at handset companies",
      source: "Economic Times | Randstad India"
    },
    {
      title: "From defense dreams of TASL to the rights of the LGBTQ+ community, here are our most-read stories of the week",
      source: "Forbes | Randstad India"
    },
    {
      title: "Randstad India appoints Revathi Raghunath as Chief Marketing Officer",
      source: "CXO Today | Randstad India"
    },
    {
      title: "A Short History Of Workplace Inclusion of LGBTQ+ In India",
      source: "Women's Web | Randstad India"
    },
    {
      title: "The hiring trend is shifting from MNCs to early-age startups. But what’s the reason?",
      source: "The Economic Times | Randstad India"
    },
    {
      title: "Future of workplaces: Machines will be your colleagues",
      source: "New Indian Express | Randstad India"
    },
    {
      title: "India Inc takes giant leaps in empowering women",
      source: "New Indian Express | Randstad India"
    },
    {
      title: "Ghost jobs haunt candidates amid a spooky job market",
      source: "Money Control | Randstad India"
    },
    {
      title: "In Q1, headcount at India’s top IT companies shrinks sharpest over past three years",
      source: "Economic Times | Randstad India"
    },
    {
      title: "Explained: What accepting ESOPs, especially if joining a start-up, might entail",
      source: "Business Insider | Randstad India"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      {/* Top Bar */}
      <div className="border-b border-gray-100">
        <div className="container-custom flex justify-end items-center py-2 gap-6">
          <a href="#" className="text-[12px] text-randstad-grey hover:text-randstad-blue">contact us</a>
        </div>
      </div>

      {/* Header */}
    

      {/* Hero Section */}
      <section className="bg-randstad-navy text-white py-16 relative overflow-hidden">
        <div className="container-custom flex flex-col md:flex-row justify-between items-center relative z-10">
          <div className="max-w-2xl">
            <h1 className="text-[48px] md:text-[64px] font-bold leading-[1.1] mb-8 tracking-tight">
              randstad in the news &<br />leader bytes.
            </h1>
            <div className="flex flex-col md:flex-row md:items-center gap-8 text-[16px]">
              <span className="font-medium">18 March 2025</span>
              <div className="flex items-center gap-4">
                <span className="text-gray-400">share article:</span>
                <div className="flex gap-4">
                  <Linkedin size={20} className="cursor-pointer hover:text-randstad-blue transition-colors" />
                  <Twitter size={20} className="cursor-pointer hover:text-randstad-blue transition-colors" />
                  <Facebook size={20} className="cursor-pointer hover:text-randstad-blue transition-colors" />
                </div>
              </div>
            </div>
          </div>
          
          {/* Hero Illustration */}
          <div className="hidden md:block w-[300px] h-[300px] relative">
            <div className="absolute inset-0 border-4 border-randstad-blue rounded-sm opacity-50"></div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full flex flex-col justify-center items-center gap-4">
               <div className="w-1/2 h-4 bg-randstad-blue/30"></div>
               <div className="w-3/4 h-4 bg-randstad-blue"></div>
               <div className="w-1/2 h-4 bg-randstad-blue/30"></div>
               <div className="w-3/4 h-4 bg-randstad-blue"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Breadcrumbs */}
      <div className="bg-white py-4 border-b border-gray-100">
        <div className="container-custom">
          <div className="flex items-center gap-2 text-[13px] text-randstad-grey">
            <a href="#" className="hover:text-randstad-blue">home</a>
            <span>&gt;</span>
            <a href="#" className="hover:text-randstad-blue">about us</a>
            <span>&gt;</span>
            <a href="#" className="hover:text-randstad-blue">press room</a>
            <span>&gt;</span>
            <span className="text-randstad-dark-grey font-medium">randstad in the news</span>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <main className="flex-grow bg-white py-12">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            
            {/* Articles List */}
            <div className="lg:col-span-8">
              <div className="space-y-10">
                {articles.map((article, idx) => (
                  <div key={idx} className="group">
                    {article.date && (
                      <h2 className="text-[24px] font-semibold text-randstad-blue mb-6">{article.date}</h2>
                    )}
                    <div className="space-y-2">
                      <a href="#" className="text-[20px] font-medium text-randstad-blue hover:underline leading-tight block">
                        {article.title}
                      </a>
                      <p className="text-[16px] text-randstad-dark-grey">
                        {article.source}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Tags Section */}
              <div className="mt-16 pt-8 border-t border-gray-100">
                <div className="flex flex-wrap items-center gap-4 text-[16px]">
                  <span className="font-semibold">tags:</span>
                  <a href="#" className="text-randstad-blue hover:underline">press</a>
                  <span className="text-gray-300">,</span>
                  <a href="#" className="text-randstad-blue hover:underline">skills</a>
                  <span className="text-gray-300">,</span>
                  <a href="#" className="text-randstad-blue hover:underline">workforce optimization</a>
                </div>
              </div>

              {/* Bottom Share */}
              <div className="mt-12 flex items-center gap-6">
                <Mail size={24} className="text-randstad-navy cursor-pointer hover:text-randstad-blue" />
                <Printer size={24} className="text-randstad-navy cursor-pointer hover:text-randstad-blue" />
                <div className="flex-grow"></div>
                <div className="flex gap-6">
                  <Linkedin size={24} className="text-randstad-navy cursor-pointer hover:text-randstad-blue" />
                  <Twitter size={24} className="text-randstad-navy cursor-pointer hover:text-randstad-blue" />
                  <Facebook size={24} className="text-randstad-navy cursor-pointer hover:text-randstad-blue" />
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <aside className="lg:col-span-4 space-y-12">
              {/* Query Card */}
              <div className="bg-[#f8f9fa] p-8 rounded-sm">
                <h3 className="text-[24px] font-medium mb-6">got any queries?</h3>
                <button className="w-full py-4 border border-randstad-navy text-randstad-navy font-medium hover:bg-randstad-navy hover:text-white transition-all duration-300">
                  request a callback
                </button>
              </div>

              {/* More Press Articles */}
              <div>
                <h3 className="text-[24px] font-medium mb-8">more press articles.</h3>
                <div className="space-y-8">
                  {[
                    "industry insights.",
                    "sacked twitter india employees on job hunt; may land new employment easily, even within a week; here’s why",
                    "Randstad Netherland : recognised as only HR services provider in dow jones sustainability world index for the 8th year in a row.",
                    "will the layoff spree continue in 2023?",
                    "jobs market outlook 2023: specialised IT, telecom and service-oriented sectors to drive hiring."
                  ].map((item, idx) => (
                    <div key={idx} className="pb-6 border-b border-gray-100 last:border-0">
                      <a href="#" className="text-[18px] text-randstad-blue hover:underline leading-snug block">
                        {item}
                      </a>
                    </div>
                  ))}
                </div>
              </div>
            </aside>
          </div>
        </div>
      </main>

      {/* Footer */}
      

      {/* Floating Feedback Button */}
      <div className="fixed right-0 top-1/2 -translate-y-1/2 z-[100]">
        <div className="bg-randstad-blue text-white py-4 px-2 rounded-l-md cursor-pointer flex flex-col items-center gap-2 shadow-lg">
          <span className="[writing-mode:vertical-lr] rotate-180 text-[14px] font-medium tracking-wider">Feedback</span>
        </div>
      </div>

      {/* Cookie Icon */}
      <div className="fixed bottom-6 left-6 z-[100]">
        <div className="w-10 h-10 bg-randstad-blue rounded-full flex items-center justify-center text-white shadow-lg cursor-pointer hover:scale-110 transition-transform">
          <div className="w-6 h-6 border-2 border-white rounded-full border-dashed"></div>
        </div>
      </div>
    </div>
  );
}
