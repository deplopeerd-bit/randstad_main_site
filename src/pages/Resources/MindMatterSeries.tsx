import React from "react";

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { 
  Search, 
  Heart, 
  User, 
  ChevronDown, 
  ArrowRight, 
  Linkedin, 
  Twitter, 
  Facebook, 
  Youtube, 
  Instagram,
  Play
} from 'lucide-react';

// Colors from screenshots
const COLORS = {
  navy: '#0d173c',
  blue: '#1c75d2',
  offWhite: '#f7f6f2',
  textGray: '#555555',
  borderLight: 'rgba(255,255,255,0.2)',
};

const NavItem = ({ label, hasDropdown = false }: { label: string; hasDropdown?: boolean }) => (
  <div className="flex items-center gap-1 cursor-pointer hover:text-blue-600 transition-colors py-4">
    <span className="text-[15px] font-normal text-[#333]">{label}</span>
    {hasDropdown && <ChevronDown size={14} className="text-[#333]" />}
  </div>
);

const FooterLinkGroup = ({ title, links }: { title: string; links: string[] }) => (
  <div className="flex flex-col gap-3">
    <h3 className="text-white font-bold text-[18px] mb-2">{title}</h3>
    {links.map((link, i) => (
      <a key={i} href="#" className="text-white/70 hover:text-white text-[14px] transition-colors">
        {link}
      </a>
    ))}
  </div>
);

const EpisodeCard = ({ 
  speaker, 
  role, 
  date, 
  title, 
  subtitle, 
  description, 
  image,
  audioDuration = "0:00 / 15:00"
}: { 
  speaker: string; 
  role: string; 
  date: string; 
  title: string; 
  subtitle: string; 
  description: string; 
  image: string;
  audioDuration?: string;
}) => (
  <div className="flex flex-col md:flex-row gap-12 py-16 border-t border-black/5">
    <div className="md:w-1/4">
      <h4 className="text-[22px] font-normal text-[#0d173c] leading-tight">
        {speaker},<br />
        {role}
      </h4>
    </div>
    <div className="md:w-3/4 bg-[#f7f6f2] p-10 rounded-lg flex flex-col md:flex-row gap-8">
      <div className="flex-1">
        <p className="text-[#666] text-[14px] mb-4">{date}</p>
        <h3 className="text-[32px] font-medium text-[#0d173c] leading-tight mb-2">{title}</h3>
        <p className="text-[18px] text-[#0d173c] mb-6">{subtitle}</p>
        
        {/* Mock Audio Player */}
        <div className="bg-white rounded-full px-4 py-2 flex items-center gap-4 mb-8 shadow-sm border border-black/5">
          <button className="w-8 h-8 flex items-center justify-center">
            <Play size={16} fill="currentColor" />
          </button>
          <span className="text-[12px] text-[#666]">{audioDuration}</span>
          <div className="flex-1 h-1 bg-gray-200 rounded-full relative">
            <div className="absolute left-0 top-0 h-full w-1/3 bg-gray-400 rounded-full"></div>
          </div>
          <button className="w-8 h-8 flex items-center justify-center">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon><path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07"></path></svg>
          </button>
        </div>

        <p className="text-[#333] text-[16px] leading-relaxed mb-4">{description}</p>
        <a href="#" className="text-[#1c75d2] font-medium underline underline-offset-4">read me</a>
      </div>
      <div className="md:w-1/3">
        <img 
          src={image} 
          alt={speaker} 
          className="w-full aspect-square object-cover rounded-lg grayscale hover:grayscale-0 transition-all duration-500"
          referrerPolicy="no-referrer"
        />
      </div>
    </div>
  </div>
);

const LinkRow = ({ label, dark = false }: { label: string; dark?: boolean }) => (
  <div className={`flex items-center justify-between py-6 border-b ${dark ? 'border-white/20' : 'border-black/10'} cursor-pointer group`}>
    <span className={`text-[20px] ${dark ? 'text-white' : 'text-[#0d173c]'} font-normal`}>{label}</span>
    <ArrowRight size={20} className={`${dark ? 'text-white' : 'text-[#1c75d2]'} transform group-hover:translate-x-2 transition-transform`} />
  </div>
);

export default function ResMindMatter() {
  return (
    <div className="min-h-screen font-sans text-[#333] selection:bg-blue-100">
      {/* Top Utility Bar */}
      <div className="border-b border-gray-100">
        <div className="max-w-[1440px] mx-auto px-10 flex justify-end py-2 gap-6">
          <a href="#" className="text-[12px] text-[#666] hover:text-blue-600">contact us</a>
        </div>
      </div>

      {/* Main Header */}
      

      {/* Breadcrumbs */}
      <div className="bg-white py-4">
        <div className="max-w-[1440px] mx-auto px-10 flex items-center gap-2 text-[12px] text-[#666]">
          <a href="#" className="hover:text-blue-600">home</a>
          <span>›</span>
          <a href="#" className="hover:text-blue-600">about us</a>
          <span>›</span>
          <span className="text-[#0d173c] font-medium">audio library</span>
        </div>
      </div>

      {/* Hero Section */}
      <section className="bg-[#0d173c] text-white py-24 relative overflow-hidden">
        <div className="max-w-[1440px] mx-auto px-10 flex flex-col md:flex-row items-center justify-between relative z-10">
          <div className="md:w-1/2">
            <h1 className="text-[72px] font-medium leading-[0.9] tracking-tighter mb-8">
              the randstad india<br />talent pod
            </h1>
            <p className="text-[20px] font-normal text-white/80 mb-10 max-w-md">
              The Randstad India Talent Pod is a one-of-a-kind podcast for any of you looking to kickstart, upgrade, and/or switch your career.
            </p>
            <button className="border-2 border-white rounded-md px-10 py-4 text-[18px] font-medium hover:bg-white hover:text-[#0d173c] transition-all">
              tune in now
            </button>
          </div>
          <div className="md:w-1/2 flex justify-end">
            <div className="relative">
              <svg width="400" height="400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="text-white/20 w-full h-auto max-w-[400px]">
                <path d="M3 18v-6a9 9 0 0 1 18 0v6"></path>
                <path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3z"></path>
                <path d="M3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z"></path>
              </svg>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-32 h-64 bg-blue-600 rounded-full blur-[80px] opacity-50"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Objective Section */}
      <section className="bg-white py-24">
        <div className="max-w-[1440px] mx-auto px-10 flex flex-col md:flex-row gap-20">
          <div className="md:w-1/2">
            <h2 className="text-[64px] font-medium text-[#0d173c] mb-10 tracking-tighter">objective.</h2>
            <p className="text-[18px] leading-relaxed text-[#333] mb-8">
              To nurture and engage with our candidate community and establish Randstad as a brand they can reckon with for all things related to hiring and jobs.
            </p>
            <p className="text-[18px] leading-relaxed text-[#333] mb-12">
              The podcast features leaders and SMEs who provide valuable insights on various career aspects - job searches, interview skills, upskilling, reskilling, growth mindset, negotiation skills, and much more.
            </p>
            <button className="border-2 border-[#1c75d2] text-[#1c75d2] rounded-md px-10 py-4 text-[18px] font-medium hover:bg-[#1c75d2] hover:text-white transition-all">
              view the channel now
            </button>
          </div>
          <div className="md:w-1/2 flex items-center justify-center">
            <div className="bg-[#0d173c] p-12 rounded-2xl relative overflow-hidden">
              <div className="flex flex-col items-center text-center">
                <img src="https://www.randstad.in/images/randstad-logo-white.svg" alt="Randstad" className="h-6 mb-8" />
                <h3 className="text-white text-[32px] font-medium leading-tight mb-4">the<br />randstad india<br />talent pod</h3>
                <div className="w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center mb-6">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#0d173c" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z"></path><path d="M19 10v2a7 7 0 0 1-14 0v-2"></path><line x1="12" y1="19" x2="12" y2="23"></line><line x1="8" y1="23" x2="16" y2="23"></line></svg>
                </div>
                <p className="text-yellow-400 font-bold tracking-widest text-[14px] uppercase">leading the human forward way</p>
              </div>
              {/* Decorative elements */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/20 rounded-full -mr-16 -mt-16"></div>
              <div className="absolute bottom-0 left-0 w-32 h-32 bg-blue-500/20 rounded-full -ml-16 -mb-16"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Career Tips Section */}
      <section className="bg-[#f7f6f2] py-24">
        <div className="max-w-[1440px] mx-auto px-10 flex flex-col md:flex-row gap-20">
          <div className="md:w-1/3">
            <h2 className="text-[32px] font-normal text-[#0d173c] leading-tight">career tips for job seekers.</h2>
          </div>
          <div className="md:w-2/3">
            <LinkRow label="The art of effective communication" />
            <LinkRow label="Empathy in leadership" />
            <LinkRow label="How to effectively approach leaders" />
            <LinkRow label="Winning the interviewer's trust" />
            <LinkRow label="Inclusivity in interviews" />
            <LinkRow label="Developing a growth mindset" />
            <LinkRow label="The importance of upskilling" />
          </div>
        </div>
      </section>

      {/* Mind Matters Series Section */}
      <section className="bg-[#1c75d2] py-24">
        <div className="max-w-[1440px] mx-auto px-10 flex flex-col md:flex-row gap-20">
          <div className="md:w-1/3">
            <h2 className="text-[32px] font-normal text-white leading-tight">mind matters series</h2>
          </div>
          <div className="md:w-2/3">
            <LinkRow label="First episode" dark />
            <LinkRow label="Third episode" dark />
          </div>
        </div>
      </section>

      {/* Diversity Series Section */}
      <section className="bg-[#f7f6f2] py-24">
        <div className="max-w-[1440px] mx-auto px-10 flex flex-col md:flex-row gap-20">
          <div className="md:w-1/3">
            <h2 className="text-[32px] font-normal text-[#0d173c] leading-tight">diversity series.</h2>
          </div>
          <div className="md:w-2/3">
            <LinkRow label="Diversity Series: ED&I experts talk" />
            <LinkRow label="Diversity Series: ED&I experts talk" />
          </div>
        </div>
      </section>

      {/* Podcast Episodes Container */}
      <section className="bg-white py-10">
        <div className="max-w-[1440px] mx-auto px-10">
          
          <EpisodeCard 
            speaker="Bhuvana Subramanyan"
            role="ex-CMO, Randstad India"
            date="21 February 2022"
            title="The art of effective communication"
            subtitle="many advantages for applicants"
            description="A series starter which basically addresses the different aspects of effective communication."
            image="https://picsum.photos/seed/bhuvana/400/400"
            audioDuration="0:00 / 12:21"
          />

          <EpisodeCard 
            speaker="Viswanath PS"
            role="MD & CEO, Randstad India"
            date="19 April 2022"
            title="Empathy in leadership"
            subtitle="leaders who demonstrate empathy are better equipped to build strong relationships with their team members"
            description="In the second episode of the Randstad India Talent Pod, we have with us Viswanath PS, MD & CEO, Randstad India talking to us about what it takes to be a great leader"
            image="https://picsum.photos/seed/viswanath/400/400"
            audioDuration="0:00 / 8:12"
          />

          <EpisodeCard 
            speaker="Deepali Naair"
            role="CMO and Digital Sales Leader, IBM India"
            date="10 April 2022"
            title="How to effectively approach leaders"
            subtitle="through social media platforms."
            description="In the third episode of the Randstad India Talent Pod, listen to Deepali Naair, CMO and Digital Sales Leader, IBM India talk about best practices"
            image="https://picsum.photos/seed/deepali/400/400"
            audioDuration="0:00 / 14:18"
          />

          <EpisodeCard 
            speaker="Sanjay Shetty"
            role="Director – Search & Selection and Strategic Accounts, Randstad India"
            date="21 April 2022"
            title="Winning the interviewer's trust"
            subtitle="and benefit in the competition."
            description="In the 4th episode of The Randstad India Talent Pod, we have with us Sanjay Shetty - Director – Search & Selection and Strategic Accounts, Randstad India discussing how we can ensure we gain the interviewer's trust"
            image="https://picsum.photos/seed/sanjay/400/400"
            audioDuration="0:00 / 12:15"
          />

          <EpisodeCard 
            speaker="Anjali Raghuvanshi"
            role="CPO, Randstad India"
            date="25 April 2022"
            title="Inclusivity in interviews"
            subtitle="ensure that all candidates have an equal opportunity to showcase their skills and qualifications."
            description="In the 5th episode of The Randstad India Talent Pod, we have with us Anjali Raghuvanshi, CPO, Randstad India discuss how diversity and inclusion are more than just cultural issues"
            image="https://picsum.photos/seed/anjali/400/400"
            audioDuration="0:00 / 18:59"
          />

          <EpisodeCard 
            speaker="Harshal Goyal"
            role="General Manager - Sales - Randstad Technologies"
            date="04 May 2022"
            title="Developing a growth mindset"
            subtitle="and have a sustainable competitive advantage."
            description="In the 5th episode of The Randstad India Talent Pod, listen to Harshal Goyal, General Manager - Sales - Randstad Technologies share with us the meaning of the Growth Mindset’"
            image="https://picsum.photos/seed/harshal/400/400"
            audioDuration="0:00 / 9:33"
          />

          <EpisodeCard 
            speaker="Yeshab Giri"
            role="CCO, Randstad India, and Director - Staffing And Randstad Technologies"
            date="04 May 2022"
            title="The importance of upskilling"
            subtitle="and staying head in the competition."
            description="In episode 7 of the Randstad India Talent Pod, listen to Yeshab Giri, CCO, Randstad India, and Director - Staffing And Randstad Technologies as speaks on upskilling and reskilling"
            image="https://picsum.photos/seed/yeshab/400/400"
            audioDuration="0:00 / 15:19"
          />

          <EpisodeCard 
            speaker="Ankita Banerjee"
            role="General Manager - Talent Management - CSR and EDI&B, Randstad India"
            date="08 November 2022"
            title="Diversity series: ED&I experts talk"
            subtitle="insight into their life as an EDI&B leader."
            description="In our second episode, listen to Ankita Banerjee, General Manager - Talent Management - CSR and EDI&B, Randstad India as they give us an insight into their life as an EDI&B leader, an LGBTQIA+ ally."
            image="https://picsum.photos/seed/ankita/400/400"
            audioDuration="0:00 / 21:11"
          />

          <EpisodeCard 
            speaker="Rovin"
            role="Senior Manager - EDI&B, Randstad India"
            date="05 December 2022"
            title="Diversity series: ED&I experts talk"
            subtitle="insight into their life as an EDI&B leader"
            description="In our second episode, listen to Rovin, Senior Manager - EDI&B, Randstad India as they give us an insight into their life as an EDI&B leader, an LGBTQIA+ ally and a drag artist."
            image="https://picsum.photos/seed/rovin/400/400"
            audioDuration="0:00 / 15:46"
          />

          <EpisodeCard 
            speaker="mind matters series"
            role="Episode 1"
            date="09 July 2023"
            title="Mind Matters - Episode 1"
            subtitle="This series is an effort to normalize conversations around mental health and well-being - paving the way for open and honest interactions."
            description="Welcome to the Mind Matters exclusive podcast series, presented by Randstad India Talent Pod. Through this podcast, Randstad India, intends to showcase meaningful conversations specifically related to unspoken topics around mental health and wellness, aiming to create a safe and relatable space for the listeners."
            image="https://picsum.photos/seed/mind1/400/400"
            audioDuration="0:00 / 22:17"
          />

          <EpisodeCard 
            speaker="mind matters series"
            role="Episode 3"
            date="20 October 2023"
            title="Mind Matters - Episode 3"
            subtitle="how does the daily grind impact the mental health of CXOs? - Anshul Raj Khurana, Booking Holding: India TA Leader"
            description="The 3rd episode of the Mind Matters podcast with Anshul Raj Khurana, Booking Holding: India TA Leader explores the nuances of leadership burnout - how does the daily grind impact the mental health of CXOs?"
            image="https://picsum.photos/seed/mind3/400/400"
            audioDuration="0:00 / 15:30"
          />
        </div>
      </section>

      {/* HR Portal Section */}
      <section className="bg-[#1c75d2] py-24">
        <div className="max-w-[1440px] mx-auto px-10 flex flex-col md:flex-row gap-20">
          <div className="md:w-1/3">
            <h2 className="text-[32px] font-normal text-white leading-tight">randstad HR portal</h2>
          </div>
          <div className="md:w-2/3">
            <h3 className="text-[48px] font-medium text-white leading-[1.1] mb-10 tracking-tighter">
              Dive into our comprehensive collection of articles, catering to candidates and clients alike, spanning a diverse array of topics to boost your knowledge and achievements
            </h3>
            <button className="border-2 border-white text-white rounded-md px-10 py-4 text-[18px] font-medium hover:bg-white hover:text-[#1c75d2] transition-all">
              to the blogs
            </button>
          </div>
        </div>
      </section>

      {/* Career Guide Section */}
      <section className="bg-white py-24">
        <div className="max-w-[1440px] mx-auto px-10 flex flex-col md:flex-row gap-20">
          <div className="md:w-1/3">
            <h2 className="text-[32px] font-normal text-[#0d173c] leading-tight">randstad career guide</h2>
          </div>
          <div className="md:w-2/3">
            <h3 className="text-[48px] font-medium text-[#0d173c] leading-[1.1] mb-10 tracking-tighter">
              Get inspiration for your career and the best tips for the application process.
            </h3>
            <button className="border-2 border-[#0d173c] text-[#0d173c] rounded-md px-10 py-4 text-[18px] font-medium hover:bg-[#0d173c] hover:text-white transition-all">
              to the career guide
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      

      {/* Floating Feedback Button */}
      <div className="fixed right-0 top-1/2 -translate-y-1/2 z-[60]">
        <button className="bg-[#1c75d2] text-white px-4 py-8 rounded-l-lg flex flex-col items-center gap-2 shadow-lg transform rotate-180 [writing-mode:vertical-rl]">
          <span className="text-[14px] font-medium tracking-widest uppercase">Feedback</span>
        </button>
      </div>

      {/* Floating Cookie/Bot Button */}
      <div className="fixed bottom-6 left-6 z-[60]">
        <button className="w-12 h-12 bg-[#1c75d2] text-white rounded-full flex items-center justify-center shadow-xl hover:scale-110 transition-transform">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2a10 10 0 1 0 10 10H12V2z"></path><path d="M12 12L2.69 6.5"></path><path d="M12 12l9.31-5.5"></path><path d="M12 12v10"></path></svg>
        </button>
      </div>
    </div>
  );
}
