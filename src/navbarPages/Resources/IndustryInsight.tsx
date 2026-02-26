import { ChevronDown, Facebook, Heart, Linkedin, Search, Twitter, User } from "lucide-react";

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */


const articles = [
  {
    month: "March 2025",
    title: "How companies are invoking women power in AI era",
    source: "Times of India | Viswanath PS"
  },
  {
    title: "GCCs evolve beyond IT, ramp up hiring for specialized tech",
    source: "Economic Times | Milind Shah"
  },
  {
    title: "IT industry - Coimbatore - APR",
    source: "Times of India | Milind Shah"
  },
  {
    title: "GCCs, mid and small caps may top IT hiring as larger firms step back",
    source: "Economic Times | Milind Shah"
  },
  {
    title: "How India's new-age digital platforms fare on gig worker conditions",
    source: "Hindu Business Line | Viswanath PS"
  },
  {
    title: "Economic Survey 2024-25 highlights need for reskilling as AI reshapes India's labour market",
    source: "Hindu Business Line | Milind Shah"
  },
  {
    title: "Economic Survey 2024-25: Workers need safeguards against AI disruption",
    source: "Business Standard | Milind Shah"
  },
  {
    title: "Decoding Silent Firing: an emerging career trend in 2025",
    source: "ETHR World | Viswanath PS"
  },
  {
    title: "Maha Kumbh 2025: Ecosystem of gigs builds up, creating 1 million jobs, including social media & new-age roles",
    source: "Economic Times | Viswanath PS"
  },
  {
    title: "CXO pay in India inches close to that of US peers",
    source: "Economic Times | Milind Shah"
  },
  {
    title: "Trump's return will boost IT hiring, GCC expansion and FDI in India, but tariffs a concern, say CFOs",
    source: "ET CFO | Nagesh Bailur"
  },
  {
    title: "A career dead end may be just around the corner. Be ready to navigate it",
    source: "Economic Times | Viswanath PS"
  },
  {
    title: "Campus hiring soars as GCCs seek freshers skilled in data science and AI",
    source: "Business Standard | Milind Shah"
  },
  {
    title: "Temporary staff demand spikes ahead of Diwali",
    source: "Economic Times | Yeshab Giri"
  },
  {
    title: "Death of EY employee raises questions about work-life balance in India Inc",
    source: "Business Standard | Randstad India"
  },
  {
    title: "Staffing firm CFOs say Indian companies need to increase budgets for people management, retaining talent",
    source: "ET CFO | Nagesh Bailur"
  },
  {
    title: "India Inc gears up for festive season hiring surge for temporary jobs",
    source: "ETHR World | Nagesh Bailur"
  },
  {
    title: "GCCs in India to raise hiring 20-25% in next six months on BFSI, manufacturing push",
    source: "ET CFO | Nagesh Bailur"
  },
  {
    title: "CTC vs take-home pay: How new tax regime gives better visibility",
    source: "Live Mint | Arpita Sarkar"
  },
  {
    title: "Hiring for festive season to jump 30 per cent in tier-2,3 cities",
    source: "New Indian Express | Yeshab Giri"
  },
  {
    title: "IIM-A PGPX highest salary offer falls to 6-year low at Rs 54.8 lakh",
    source: "Business Standard | Randstad India"
  },
  {
    title: "Behind Every Great CHRO: The Mentors Who Made a Difference",
    source: "BW People | Anjali Raghuvanshi"
  },
  {
    title: "Q-commerce players in quick hiring mode amid boom",
    source: "Economic Times | Yeshab Giri"
  },
  {
    title: "Work pressure is intense in IT and consulting sectors",
    source: "New Indian Express | Viswanath PS"
  },
  {
    title: "High Festive Sales Pitch Sets Tempo for Temp Hiring",
    source: "Economic Times | Yeshab Giri"
  },
  {
    title: "Hiring trends indicate revival for white collar jobs",
    source: "Times of India | Viswanath PS"
  },
  {
    title: "Festive hiring trends",
    source: "Money Control | Yeshab Giri"
  },
  {
    title: "Etail, Logistics Cos Prepare Package for Non-metro Boom",
    source: "Economic Times | Yeshab Giri"
  },
  {
    title: "India Inc extends gender diversity push to temporary hiring for festive season",
    source: "Economic Times | Yeshab Giri"
  },
  {
    title: "70-hour work week to sleeping in offices: Golden words on hustle culture from NR Narayana Murthy, Elon Musk, and other billionaires",
    source: "Business Insider | Randstad India"
  },
  {
    title: "Demystifier: Here’s Everything You Need To Know About The Recently Proposed, Controversial Karnataka Bill Which Has Created An Uproar In The Region",
    source: "ED Times | Viswanath PS"
  },
  {
    title: "Redefining rewards: The Gen Z way",
    source: "Times of India | Milind Shah"
  },
  {
    title: "AI & ML skills taking over the role system engineers in IT firms",
    source: "Financial Express | Milind Shah"
  },
  {
    title: "Manufacturing push is drawing expat CXOs home",
    source: "Economic Times | Yeshab Giri"
  },
  {
    title: "Gen Z effect: Companies gamify employee rewards",
    source: "Times of India | Milind Shah"
  },
  {
    title: "Wipro, Coforge among firms with highest paid IT CEOs in FY24: Check list",
    source: "Business Standard | Randstad India"
  },
  {
    title: "Job-for-locals bill: Skilling, not legislation key to meet evolving industry demands, say experts",
    source: "Press Trust of India | Viswanath PS"
  },
  {
    title: "AI's impact on job market will be a key factor for future growth: Economic Survey",
    source: "Hindu Business Line | Milind Shah"
  },
  {
    title: "How to tell a fraudulent job offer from a real one",
    source: "Deccan Herald | Viswanath PS"
  },
  {
    title: "From 7 Working Days To 5; A Nod To Western Influence?",
    source: "BW People | Viswanath PS"
  },
  {
    title: "Diversity initiatives are bringing more women to certain roles: Survey",
    source: "Economic Times | Anjali Raghuvanshi"
  },
  {
    title: "Beyond Pay: Companies are introducing four-day work weeks, skilling, and mental wellness to retain talent; is it enough?",
    source: "Business Today | Yeshab Giri"
  },
  {
    title: "Empowering youth by bridging the skills gap with AI and collaborative strategies",
    source: "People Matters | Rohit Kishore"
  },
  {
    title: "Salary hikes at IT cos drop to single digits",
    source: "Times of India | Milind Shah"
  },
  {
    title: "Karnataka jobs quota row: Govt puts bill to provide reservation in private sector on hold after backlash",
    source: "Deccan Herald | Viswanath PS"
  },
  {
    title: "ETtech in-depth: decoding India’s ambition to become an electronics manufacturing powerhouse",
    source: "Economic Times | Yeshab Giri"
  },
  {
    title: "Extreme summer heat & loss of productivity lead to an all-time high demand for delivery personnel",
    source: "Economic Times | Yeshab Giri"
  },
  {
    title: "Global capability centres go big on hiring gig employees",
    source: "Economic Times | Yeshab Giri"
  },
  {
    title: "Mid, senior level startup executives hunt for stable jobs",
    source: "Times of India | Viswanath PS"
  },
  {
    title: "Challenges of skill shortage, regulatory complexities await new Labour Minister",
    source: "Money Control | Viswanath PS"
  },
  {
    title: "Budget 2024: Staffing industry, HR leaders eye tax reductions, skill development boosts",
    source: "Money Control | Nagesh Bailur"
  },
  {
    title: "Growth of women in manufacturing sector: Highlights & Trends",
    source: "ETHR | Yeshab Giri"
  },
  {
    title: "Job offer-shopping in niche roles rises as talent seeks more pay",
    source: "Money Control | Anjali Raghuvanshi"
  },
  {
    title: "India’s budding semiconductor industry braces for talent crunch, looks for ways to close the gap",
    source: "Money Control | Yeshab Giri"
  },
  {
    title: "Cambodia fake job scam: Here’s how you can identify fake listings",
    source: "CNBC | Viswanath PS"
  },
  {
    title: "Can Traditional Varsities Keep Pace With AI Change?",
    source: "Free Press Journal | Randstad India"
  },
  {
    title: "Signs of optimism in job market: White-collar mandates up for June quarter",
    source: "Economic Times | Sanjay Shetty"
  },
  {
    title: "Q1 2024 saw signs of recovery in tech hiring; trend to get stronger in H2: industry players",
    source: "The Hindu | Rohit Kishore"
  },
  {
    title: "HR's Mega Makeover",
    source: "Fortune | Anjali Raghuvanshi"
  },
  {
    title: "Tech titans love Modi's economic powerhouse India — despite mass unemployment and abject poverty",
    source: "Business Standard | Sanjay Shetty"
  },
  {
    title: "Small cities home to big dream jobs: Hiring scene in tier 2, 3 cities gets busy",
    source: "Economic Times | Sanjay Shetty"
  },
  {
    title: "Increasing penetration of top brands to create more retail jobs in smaller cities: Experts",
    source: "Press Trust of India | Sanjay Shetty"
  },
  {
    title: "Going Beyond the Call of Duty to Help Bring in Better Increments, Faster Career Growth",
    source: "Economic Times | Viswanath PS"
  },
  {
    title: "AI jobs grow twice as fast as other digital roles",
    source: "Times of India | Rohit Kishore"
  },
  {
    title: "Seasonal manpower demand soars, 2024 looks set to be a record year for temporary summer jobs",
    source: "Economic Times | Yeshab Giri"
  },
  {
    title: "Semiconductor Mega Trends and Career Opportunities",
    source: "Times Tech | Randstad India"
  },
  {
    title: "Mobile phone makers hire 55,000 trainees in 2024",
    source: "Economic Times | Yeshab Giri"
  },
  {
    title: "Expat impact: The story of India Inc's brushes with expat CEOs a mixed bag",
    source: "Business Standard | Gibin Jayaprakash"
  },
  {
    title: "Entry-level coders must specialise to minimise risk of job loss: Experts",
    source: "Business Standard | Rohit Kishore"
  },
  {
    title: "How to organise your work life like a monk",
    source: "Mint Lounge | Anjali Raghuvanshi"
  },
  {
    title: "Looking for a mid-career shift? Ask these questions before taking a decision",
    source: "Economic Times | Anjali Raghuvanshi"
  },
  {
    title: "C-suite hiring trends open doors to new roles in non-tech industries",
    source: "Economic Times | Gibin Jayaprakash"
  },
  {
    title: "3 in 5 workers in India will not accept job that does not offer AI, tech upskilling: Survey",
    source: "Economic Times | Viswanath PS"
  },
  {
    title: "IT hiring down 40%, may start picking up after June: Randstad India CEO",
    source: "Money Control | Viswanath PS"
  },
  {
    title: "Authored Article - Boost Women Leadership, Transform the Business Landscape",
    source: "Times Ascent | Anjali Raghuvanshi"
  },
  {
    title: "Startups, SMEs increasingly covet so-called fractional CXOs",
    source: "Mint | Gibin Jayaprakash"
  },
  {
    title: "In India's semiconductor moment, spotlight on talent",
    source: "Economic Times | Yeshab Giri"
  },
  {
    title: "Outlook 2024: What will reshape the culture of reward and recognition trends",
    source: "People Matters | Anjali Raghuvanshi"
  },
  {
    title: "Ram temple tourism: Hospitality, travel industries create up to 20,000 jobs in Ayodhya",
    source: "Economic Times | Yeshab Giri"
  },
  {
    title: "Budget 2024: HR leaders rally for tax incentives and skill development focus",
    source: "People Matters | Viswanath PS"
  },
  {
    title: "India mobile phone manufacturing industry likely to create up to 2,50,000 jobs in next 12-16 months",
    source: "Economic Times | Yeshab Giri"
  },
  {
    title: "CEA to deliver inaugural address at MMA Convention",
    source: "Hindu Business Line | Viswanath PS"
  },
  {
    title: "Indians More Afraid of AI Taking Away Jobs Than Their Global Peers",
    source: "Economic Times | Viswanath PS"
  },
  {
    title: "In a disruptive world, CEOs need to be nimble-footed",
    source: "Times Ascent | Viswanath PS"
  },
  {
    title: "From Conventional To Specialised: India's HR Industry In Transition",
    source: "BW Businessworld | Viswanath PS"
  },
  {
    title: "Treat employees like your customers, says Randstad India’s Anjali Raghuvanshi",
    source: "People Matters | Anjali Raghuvanshi"
  },
  {
    title: "Bengaluru retains top spot in hiring charts",
    source: "Economic Times | Viswanath PS"
  },
  {
    title: "Marketing Top 30 Under 30 Stars",
    source: "BW Businessworld | Revathi Raghunath"
  },
  {
    title: "Budget 2024-25: Staffing firms anticipate tax relief and 9% PF interest rate",
    source: "Money Control | Viswanath PS"
  },
  {
    title: "Teachers' wisdom for life: 6 valuable lessons for successful HR leadership",
    source: "People Matters | Anjali Raghuvanshi"
  },
  {
    title: "Meet goals early, enjoy 4-day work week",
    source: "Times of India | Anjali Raghuvanshi"
  },
  {
    title: "Cracking the training code: Tools and tricks to overcome employee L&D failures",
    source: "People Matters | Anjali Raghuvanshi"
  },
  {
    title: "Global compensation strategies for mobile workforce",
    source: "People Matters | Anjali Raghuvanshi"
  },
  {
    title: "Impact of Mentorship and Networking on Women's Empowerment",
    source: "Women Entrepreneur Magazine | Revathi Raghunath"
  },
  {
    title: "Demand for delivery staff to surge as Cricket World Cup kicks in from October 5",
    source: "Economic Times | Viswanath PS"
  },
  {
    title: "Randstad's CEO, Viswanath P. S., Advocates Holistic Business Approach And UN SDGs For A Sustainable Future",
    source: "BW People | Viswanath PS"
  },
  {
    title: "India Inc hunts for Data Protection Officers to align with regulation",
    source: "Money Control | Viswanath PS"
  },
  {
    title: "Airtel, Vi give 7-8% salary hikes, up to 110% bonuses as competition to retain talent heats up",
    source: "Economic Times | Viswanath PS"
  },
  {
    title: "Strong employer brand key to thriving amidst current workspace disruptions",
    source: "People Matters | Viswanath PS"
  },
  {
    title: "Corporate India Gets Used to Women On Shop Floor",
    source: "Fortune India | Viswanath PS"
  },
  {
    title: "How Inclusive Is India Inc.?",
    source: "Fortune India | Viswanath PS"
  },
  {
    title: "Dimensions of Diversity in Workplaces - Cover",
    source: "BW People | Viswanath PS"
  },
  {
    title: "As hiring slows and cos tighten belts, inhouse recruiters face heat",
    source: "Economic Times | Viswanath PS"
  }
];

const sidebarLinks = [
  "randstad in the news & leader bytes.",
  "sacked twitter india employees on job hunt; may land new employment easily, even within a week; here's why",
  "Randstad Netherland : recognised as only HR services provider in dow jones sustainability world index for the 8th year in a row.",
  "will the layoff spree continue in 2023?",
  "jobs market outlook 2023: specialised IT, telecom and service-oriented sectors to drive hiring."
];

export default function ResIndustryInsight() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      {/* Top Bar */}
      <div className="w-full bg-white border-b border-gray-100 py-2 px-4 md:px-8 lg:px-16 flex justify-end">
        <a href="#" className="text-[12px] text-randstad-blue hover:underline">contact us</a>
      </div>

      {/* Navigation */}

      {/* Hero Section */}
      <section className="bg-randstad-navy text-white py-16 px-4 md:px-8 lg:px-16 relative overflow-hidden">
        <div className="max-w-[1440px] mx-auto relative z-10">
          {/* Breadcrumbs */}
          <nav className="flex items-center gap-2 text-[13px] mb-8 opacity-80">
            <a href="#" className="hover:underline">home</a>
            <span>&gt;</span>
            <a href="#" className="hover:underline">about us</a>
            <span>&gt;</span>
            <a href="#" className="hover:underline">press room</a>
            <span>&gt;</span>
            <span className="font-semibold">industry insights</span>
          </nav>

          <h1 className="text-[56px] md:text-[64px] font-normal leading-[1.1] mb-12 tracking-tight">
            industry insights.
          </h1>

          <div className="flex flex-col sm:flex-row sm:items-center gap-8">
            <span className="text-[16px] font-medium">18 March 2025</span>
            
            <div className="flex items-center gap-4">
              <span className="text-[14px] opacity-80">share article:</span>
              <div className="flex gap-2">
                <a href="#" className="w-8 h-8 rounded-full bg-white flex items-center justify-center hover:bg-gray-200 transition-colors">
                  <Linkedin size={16} className="text-black" />
                </a>
                <a href="#" className="w-8 h-8 rounded-full bg-white flex items-center justify-center hover:bg-gray-200 transition-colors">
                  <Twitter size={16} className="text-black" />
                </a>
                <a href="#" className="w-8 h-8 rounded-full bg-white flex items-center justify-center hover:bg-gray-200 transition-colors">
                  <Facebook size={16} className="text-black" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Cloud Graphic */}
        <div className="absolute right-0 top-1/2 -translate-y-1/2 hidden lg:block opacity-40">
          <svg width="400" height="200" viewBox="0 0 400 200" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M100 150C100 122.386 122.386 100 150 100C177.614 100 200 122.386 200 150H100Z" fill="#2161AC" />
            <path d="M180 150C180 105.817 215.817 70 260 70C304.183 70 340 105.817 340 150H180Z" fill="#2161AC" />
            <circle cx="150" cy="150" r="50" stroke="white" strokeWidth="2" strokeDasharray="4 4" />
            <circle cx="260" cy="150" r="80" stroke="white" strokeWidth="2" strokeDasharray="4 4" />
          </svg>
        </div>
      </section>

      {/* Main Content */}
      <main className="max-w-[1440px] mx-auto w-full py-16 px-4 md:px-8 lg:px-16 grid grid-cols-1 lg:grid-cols-12 gap-16">
        
        {/* Left Column: Articles */}
        <div className="lg:col-span-8">
          {articles.map((article, index) => (
            <div key={index} className="mb-10 last:mb-0">
              {article.month && (
                <h2 className="text-[24px] font-normal text-randstad-blue mb-6">
                  {article.month}
                </h2>
              )}
              <div className="group">
                <a href="#" className="text-[18px] md:text-[20px] font-normal text-randstad-blue leading-snug hover:underline block mb-1">
                  {article.title}
                </a>
                <p className="text-[16px] text-[#141414] font-normal">
                  {article.source}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Right Column: Sidebar */}
        <aside className="lg:col-span-4 space-y-12">
          {/* Callback Box */}
          <div className="bg-randstad-beige rounded-[4px] p-8 text-center">
            <h3 className="text-[24px] font-normal mb-8">got any queries?</h3>
            <button className="w-full bg-white border border-[#141414] py-3 px-6 text-[16px] font-medium hover:bg-gray-50 transition-colors uppercase tracking-wider">
              request a callback
            </button>
          </div>

          {/* More Articles */}
          <div>
            <h3 className="text-[24px] font-normal mb-6">more press articles.</h3>
            <div className="space-y-6">
              {sidebarLinks.map((link, index) => (
                <div key={index} className="border-b border-gray-200 pb-6 last:border-0">
                  <a href="#" className="text-[16px] text-randstad-blue leading-relaxed hover:underline">
                    {link}
                  </a>
                </div>
              ))}
            </div>
          </div>
        </aside>
      </main>

      {/* Footer */}
      

      {/* Floating Feedback Button */}
      <div className="fixed right-0 top-1/2 -translate-y-1/2 z-50">
        <button className="bg-randstad-blue text-white py-4 px-2 rounded-l-md flex flex-col items-center gap-2 shadow-lg hover:bg-blue-700 transition-colors">
          <span className="[writing-mode:vertical-rl] rotate-180 text-[12px] font-bold tracking-widest uppercase">Feedback</span>
        </button>
      </div>

      {/* Cookie Icon */}
      <div className="fixed bottom-4 left-4 z-50">
        <button className="w-10 h-10 bg-randstad-blue rounded-full flex items-center justify-center text-white shadow-lg hover:scale-110 transition-transform">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 2a10 10 0 1 0 10 10 4 4 0 0 1-5-5 4 4 0 0 1-5-5" />
            <path d="M8.5 8.5v.01" />
            <path d="M16 15.5v.01" />
            <path d="M12 12v.01" />
            <path d="M11 17v.01" />
            <path d="M7 14v.01" />
          </svg>
        </button>
      </div>
    </div>
  );
}
