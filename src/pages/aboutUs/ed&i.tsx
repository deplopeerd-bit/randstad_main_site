import React, { useState } from "react";
import { AnimatePresence, motion } from "motion/react";

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { 
  Search, 
  Heart, 
  User, 
  ChevronRight, 
  Mail, 
  Linkedin, 
  Twitter, 
  Facebook, 
  Youtube, 
  Instagram,
  ArrowRight,
  Play,
  Volume2,
  Check,
  Megaphone,
  Users,
  BarChart3,
  Share2,
  Menu,
  X
} from 'lucide-react';

// --- Constants & Types ---

const COLORS = {
  navy: '#051937',
  offWhite: '#f5f2ed',
  blue: '#2b73d9',
  yellow: '#ffb81c',
  red: '#e54122',
  lightBlue: '#8bb8c2',
  teal: '#6a9fb5',
  orange: '#f27d26'
};

// --- Components ---

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white border-b border-gray-100 sticky top-0 z-50">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="flex items-center">
              <div className="w-8 h-8 bg-[#2b73d9] rounded-tr-full rounded-bl-full"></div>
              <div className="w-8 h-8 bg-[#2b73d9] rounded-tl-full rounded-br-full -ml-4 opacity-50"></div>
            </div>
            <span className="text-2xl font-bold text-[#051937] tracking-tighter">randstad</span>
          </div>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center space-x-8">
            {['find a job', 'for talent', 'for employer', 'resources', 'about us'].map((item) => (
              <div key={item} className="group relative cursor-pointer">
                <span className="text-[15px] font-medium text-[#051937] flex items-center">
                  {item}
                  <ChevronRight className="w-4 h-4 ml-1 rotate-90 group-hover:rotate-[-90deg] transition-transform" />
                </span>
              </div>
            ))}
          </div>

          {/* Icons */}
          <div className="flex items-center space-x-6">
            <Search className="w-5 h-5 text-[#051937] cursor-pointer" />
            <div className="relative cursor-pointer">
              <Heart className="w-5 h-5 text-[#051937]" />
              <span className="absolute -top-2 -right-2 bg-[#e54122] text-white text-[10px] rounded-full w-4 h-4 flex items-center justify-center">0</span>
            </div>
            <div className="hidden md:flex items-center space-x-2 cursor-pointer">
              <User className="w-5 h-5 text-[#051937]" />
              <span className="text-[14px] font-medium text-[#051937]">my randstad</span>
            </div>
            <button className="lg:hidden" onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white border-t border-gray-100 overflow-hidden"
          >
            <div className="px-6 py-4 space-y-4">
              {['find a job', 'for talent', 'for employer', 'resources', 'about us'].map((item) => (
                <div key={item} className="text-[16px] font-medium text-[#051937] py-2 border-b border-gray-50 last:border-0">
                  {item}
                </div>
              ))}
              <div className="flex items-center space-x-2 py-4">
                <User className="w-5 h-5 text-[#051937]" />
                <span className="text-[16px] font-medium text-[#051937]">my randstad</span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = () => {
  return (
    <section className="bg-[#f5f2ed] pt-12 pb-24 overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
        {/* Breadcrumbs */}
        <div className="flex items-center space-x-2 text-[12px] text-gray-500 mb-12">
          <span>home</span>
          <ChevronRight className="w-3 h-3" />
          <span>about us</span>
          <ChevronRight className="w-3 h-3" />
          <span className="text-[#051937]">ed&i</span>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-[48px] lg:text-[64px] font-bold text-[#051937] leading-[1.1] tracking-tight mb-8">
              equity, diversity, inclusion & belonging at randstad india.
            </h1>
            <p className="text-[18px] text-[#051937] leading-relaxed mb-10 max-w-xl">
              We want to be held accountable to listen, learn and make progress. Join Randstad's Talent Leadership Council by clicking on the link below.
            </p>
            <div className="flex flex-wrap gap-4">
              <button className="px-8 py-3 border-2 border-[#051937] text-[#051937] font-bold rounded-sm hover:bg-[#051937] hover:text-white transition-colors">
                join the community
              </button>
              <button className="px-8 py-3 border-2 border-[#051937] text-[#051937] font-bold rounded-sm hover:bg-[#051937] hover:text-white transition-colors">
                request a callback
              </button>
            </div>
          </div>

          {/* Graphic Elements */}
          <div className="relative h-[400px] flex items-center justify-center lg:justify-end">
            <div className="relative w-full max-w-[500px] h-full">
              {/* Yellow Circle */}
              <motion.div 
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.2 }}
                className="absolute top-1/4 left-0 w-32 h-32 bg-[#ffb81c] rounded-full"
              />
              {/* Blue Square */}
              <motion.div 
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.4 }}
                className="absolute top-1/4 left-36 w-32 h-32 bg-[#2b73d9]"
              />
              {/* Navy Circle */}
              <motion.div 
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.6 }}
                className="absolute top-1/4 left-72 w-32 h-32 bg-[#051937] rounded-full"
              />
              {/* Teal Pill */}
              <motion.div 
                initial={{ scale: 0, width: 0 }}
                animate={{ scale: 1, width: 64 }}
                transition={{ delay: 0.8 }}
                className="absolute top-1/4 left-[440px] w-16 h-32 bg-[#8bb8c2] rounded-full"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const PromiseSection = () => {
  return (
    <section className="bg-[#051937] py-24 text-white">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-24 items-center">
          <div>
            <h2 className="text-[48px] font-bold leading-[1.1] mb-12">
              promise of belongingness at randstad.
            </h2>
            <div className="space-y-8 text-[18px] leading-relaxed opacity-90">
              <p>
                Equity is about taking action to make sure all groups have the same access to opportunities and closing the pay gap.
              </p>
              <p>
                Diversity is about difference. Our global teams not only respect, but also welcome and celebrate the differences among them.
              </p>
              <p>
                Inclusion is diversity in action. It's about making sure that every person can bring their whole self to work. belonging.
              </p>
              <p>
                Belonging is our end goal. It's how we want every single person across our teams to feel.
              </p>
            </div>
          </div>

          <div className="relative flex flex-col items-center">
            <div className="text-[#2b73d9] text-[20px] mb-8 font-medium">equity@work: india in action</div>
            
            <div className="relative w-[400px] h-[400px]">
              {/* Venn Diagram Circles */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-56 h-56 bg-[#ffb81c] rounded-full flex items-center justify-center text-[#051937] font-bold text-center p-4 leading-tight">
                inclusive leadership
              </div>
              <div className="absolute bottom-12 left-0 w-56 h-56 bg-[#051937] border-2 border-white rounded-full flex items-center justify-center text-white font-bold text-center p-4 leading-tight">
                equity over equality
              </div>
              <div className="absolute bottom-12 right-0 w-56 h-56 bg-[#e54122] rounded-full flex items-center justify-center text-white font-bold text-center p-4 leading-tight">
                belongingness for all
              </div>
            </div>

            <div className="mt-12 text-[24px] font-medium">true self forward</div>
          </div>
        </div>
      </div>
    </section>
  );
};

const DifferentiatorsSection = () => {
  const cards = [
    { color: '#ffb81c', text: 'we are a disability-friendly organization.', icon: <User className="w-12 h-12" /> },
    { color: '#e54122', text: 'we celebrate uniqueness and differences.', icon: <User className="w-12 h-12" /> },
    { color: '#ffffff', text: 'we believe that no voice should go unheard.', icon: <Megaphone className="w-12 h-12 text-[#ffb81c]" />, textColor: '#051937' },
    { color: '#051937', text: 'independent thought and collaborative effort.', icon: <Users className="w-12 h-12 text-[#ffb81c]" /> },
    { color: '#6a9fb5', text: 'recognizing the variety within the diversity.', icon: <Users className="w-12 h-12 text-[#051937]" /> },
    { color: '#ffb81c', text: 'advancing equity by ensuring a just workplace.', icon: <BarChart3 className="w-12 h-12 text-[#2b73d9]" />, textColor: '#051937' },
  ];

  return (
    <section className="bg-[#f5f2ed] py-24">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
        <h2 className="text-[40px] font-bold text-[#051937] mb-16">key differentiators</h2>
        
        <div className="flex overflow-x-auto pb-8 gap-6 no-scrollbar">
          {cards.map((card, idx) => (
            <motion.div 
              key={idx}
              whileHover={{ y: -10 }}
              className="min-w-[320px] h-[400px] p-10 flex flex-col justify-between rounded-sm shadow-sm"
              style={{ backgroundColor: card.color, color: card.textColor || 'white' }}
            >
              <p className="text-[24px] font-bold leading-tight">{card.text}</p>
              <div className="flex justify-end">
                {card.icon}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const AchievementsSection = () => {
  const awards = [
    { color: '#ffb81c', title: 'IWEI Award Bronze', img: 'https://picsum.photos/seed/award1/300/200' },
    { color: '#051937', title: 'Great Place to Work for Health & Wellness', img: 'https://picsum.photos/seed/award2/300/200' },
    { color: '#e54122', title: 'Great Place to Work for Women', img: 'https://picsum.photos/seed/award3/300/200' },
  ];

  return (
    <section className="bg-[#f5f2ed] py-24">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
        <h2 className="text-[40px] font-bold text-[#051937] mb-16">our achievements speak for us.</h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          {awards.map((award, idx) => (
            <div key={idx} className="flex flex-col">
              <div 
                className="h-[400px] flex items-center justify-center p-8 rounded-sm"
                style={{ backgroundColor: award.color }}
              >
                <img src={award.img} alt={award.title} className="max-w-full max-h-full object-contain mix-blend-multiply opacity-80" referrerPolicy="no-referrer" />
              </div>
              <p className="mt-6 text-[18px] font-medium text-[#051937] text-center">{award.title}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const ERGSection = () => {
  const ergs = [
    { name: 'access forward', icon: '♿' },
    { name: 'care forward', icon: '❤️' },
    { name: 'rainbow forward', icon: '🌈' },
    { name: 'women forward', icon: '👩' },
    { name: 'sane forward', icon: '🧠' },
    { name: 'men forward', icon: '👨' },
  ];

  return (
    <section className="bg-white py-24">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
        <h2 className="text-[40px] font-bold text-[#051937] mb-8">our employee resource groups: aligned to randstad global business groups</h2>
        <p className="text-[18px] text-gray-600 mb-16 max-w-4xl">
          At Randstad India, we have six thriving Employee Resource Groups aligned to Randstad Global Business Resource Groups (BRG) that offer employees support for a range of topics concerning accessibility, gender identity and sexual orientation, caregiving, mental health, and women empowerment, inclusivity and diversity.
        </p>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {ergs.map((erg, idx) => (
            <div key={idx} className="group cursor-pointer">
              <div className="aspect-square bg-gradient-to-b from-gray-100 to-gray-300 rounded-sm mb-4 flex items-center justify-center text-6xl group-hover:scale-105 transition-transform">
                {erg.icon}
              </div>
              <p className="text-[20px] font-bold text-[#051937] text-center">{erg.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const ReportsSection = () => {
  const reports = [
    { 
      title: 'embracing all abilities', 
      desc: 'employment experiences of people with disabilities & the way forward in India.',
      img: 'https://picsum.photos/seed/report1/400/300'
    },
    { 
      title: 'inclusion without exception report - 2021', 
      desc: 'where India Inc. stands with respect to the LGBTQ + community.',
      img: 'https://picsum.photos/seed/report2/400/300'
    },
    { 
      title: 'diversity & inclusion report - 2020', 
      desc: 'What are the expectations & aspirations of working women in India? How are employers driving business goals while meeting these through their Diversity & Inclusion policies?',
      img: 'https://picsum.photos/seed/report3/400/300'
    },
  ];

  return (
    <section className="bg-white py-24">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
        <h2 className="text-[40px] font-bold text-[#051937] mb-2">being data forward to stay human forward.</h2>
        <p className="text-[18px] text-gray-500 mb-16">access our exclusive ED&I reports here</p>

        <div className="grid md:grid-cols-3 gap-12">
          {reports.map((report, idx) => (
            <div key={idx} className="flex flex-col">
              <img src={report.img} alt={report.title} className="w-full aspect-[4/3] object-cover rounded-sm mb-8" referrerPolicy="no-referrer" />
              <h3 className="text-[24px] font-bold text-[#051937] mb-4">{report.title}</h3>
              <div className="flex items-start space-x-3 mb-8">
                <Check className="w-5 h-5 text-gray-400 mt-1 flex-shrink-0" />
                <p className="text-gray-600 leading-relaxed">{report.desc}</p>
              </div>
              <a href="#" className="text-[#2b73d9] font-bold underline underline-offset-4 flex items-center group">
                download report
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const HeartSection = () => {
  return (
    <section className="bg-white py-24 border-t border-gray-100">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-24 items-center">
          <div>
            <h2 className="text-[56px] font-bold text-[#051937] leading-[1.1] mb-8">randstad with heart</h2>
            <p className="text-[18px] text-gray-600 leading-relaxed mb-12">
              Randstad with Heart (RwH) is our global corporate citizenship framework, which encompasses all corporate citizenship initiatives, large and small. This new framework embodies the passion and commitment of our employees and our trusted business partners who go above and beyond in bringing decent work closer to those who might otherwise be overlooked.
            </p>
            <button className="px-10 py-4 border-2 border-[#2b73d9] text-[#2b73d9] font-bold rounded-sm hover:bg-[#2b73d9] hover:text-white transition-colors">
              learn more
            </button>
          </div>
          <div className="flex justify-center">
            <div className="relative w-[400px] h-[400px]">
              {/* Heart Graphic */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-full h-full bg-[#e54122] rounded-full rotate-45 -translate-x-12"></div>
                <div className="w-full h-full bg-[#051937] rounded-full rotate-45 translate-x-12 -translate-y-12"></div>
              </div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-48 h-48 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                  <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center">
                    <Heart className="w-12 h-12 text-[#e54122] fill-[#e54122]" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const ArticlesSection = () => {
  const articles = [
    "allies by force or by choice",
    "equity versus equality",
    "inclusion includes all",
    "leadership matters",
    "making glocal work for the LGB...",
    "senior leaders drive the culture ...",
    "accessible Infrastructure is the ...",
    "inclusive communication - how..."
  ];

  return (
    <section className="bg-[#2b73d9] py-24 text-white">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-3 gap-12">
          <h2 className="text-[32px] font-medium leading-tight">read our latest EDI specific articles.</h2>
          <div className="lg:col-span-2 grid md:grid-cols-2 gap-x-12 gap-y-8">
            {articles.map((article, idx) => (
              <div key={idx} className="border-b border-white/30 pb-4 flex justify-between items-center group cursor-pointer">
                <span className="text-[20px] font-light">{article}</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const PodcastSection = () => {
  return (
    <section className="bg-[#f5f2ed] py-24">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-3 gap-12">
          <h2 className="text-[32px] font-medium text-[#051937] leading-tight">podcast: diversity series - listen to our leaders.</h2>
          
          <div className="lg:col-span-2 space-y-12">
            {[1, 2].map((i) => (
              <div key={i} className="bg-white p-10 rounded-sm shadow-sm flex flex-col md:flex-row gap-8">
                <div className="flex-1">
                  <p className="text-gray-400 text-[14px] mb-4">08 November 2022</p>
                  <h3 className="text-[28px] font-bold text-[#051937] leading-tight mb-4">Diversity series: ED&I experts talk - insight into their life as an EDI&B leader.</h3>
                  <p className="text-gray-600 mb-8">Ankita Banerjee, General Manager - Talent Management - CSR and EDI&B, Randstad India</p>
                  
                  {/* Audio Player Mock */}
                  <div className="bg-gray-50 p-4 rounded-full flex items-center space-x-4 mb-8">
                    <Play className="w-5 h-5 text-[#051937] fill-[#051937]" />
                    <div className="flex-1 h-1 bg-gray-200 rounded-full relative">
                      <div className="absolute top-0 left-0 w-1/3 h-full bg-[#2b73d9] rounded-full"></div>
                    </div>
                    <span className="text-[12px] text-gray-500">0:00 / 21:11</span>
                    <Volume2 className="w-5 h-5 text-gray-400" />
                  </div>

                  <p className="text-gray-600 mb-4 line-clamp-2">
                    In our second episode, listen to Ankita Banerjee, General Manager - Talent Management - CSR and EDI&B, Randstad India as they give us an insight into their life as an EDI&B leader, an LGBTQIA+ ally.
                  </p>
                  <a href="#" className="text-[#2b73d9] font-bold underline underline-offset-4">read me</a>
                </div>
                <div className="w-full md:w-48 h-48 bg-gray-100 rounded-sm overflow-hidden">
                  <img src={`https://picsum.photos/seed/leader${i}/200/200`} alt="Leader" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const CommitmentSection = () => {
  return (
    <section className="bg-[#051937] py-32 text-white">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-3 gap-12 items-center">
          <div className="text-[24px] font-medium">let's connect</div>
          <div className="lg:col-span-2">
            <h2 className="text-[40px] lg:text-[48px] font-bold leading-[1.1] mb-12">
              join us in our commitment to creating a more diverse, inclusive, and equitable workplace for all. Fill the form and our consultant will connect with you soon.
            </h2>
            <button className="px-10 py-4 border-2 border-white text-white font-bold rounded-sm hover:bg-white hover:text-[#051937] transition-colors">
              request a callback
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

const ContactSection = () => {
  return (
    <section className="bg-white py-24">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-3 gap-12 items-center">
          <div className="text-[24px] font-medium text-[#051937]">contact person for further queries</div>
          <div className="lg:col-span-2 flex flex-col md:flex-row items-center gap-12">
            <div className="w-48 h-48 rounded-full overflow-hidden border-4 border-[#f5f2ed]">
              <img src="https://picsum.photos/seed/ankita/200/200" alt="Ankita Banerjee" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
            </div>
            <div className="flex-1 text-center md:text-left">
              <h3 className="text-[32px] font-bold text-[#2b73d9] mb-2">ankita banerjee</h3>
              <p className="text-gray-500 text-[18px] mb-8">VP - EDI&B APAC, Head - EDI&B India, CSR and Talent Management</p>
              <p className="text-gray-600 leading-relaxed mb-8 max-w-2xl">
                Our beliefs and ideas lead our actions. For us, equity, diversity, and inclusion mean that every individual regardless of who they are, their backgrounds, truths and experiences are valued, celebrated and included as their whole true selves. To become the world's most equitable and specialized talent company, we ensure that our people and talents have equitable opportunities, with a special focus on historically and currently marginalized groups, powered by our global EDI&B vision. I welcome you to find more about how we see the possible in people.
              </p>
              <div className="flex flex-col md:flex-row items-center gap-6">
                <a href="mailto:ankita.banerjee@randstad.in" className="flex items-center text-[#2b73d9] font-medium">
                  <Mail className="w-5 h-5 mr-2" />
                  ankita.banerjee@randstad.in
                </a>
                <a href="#" className="w-10 h-10 bg-[#051937] text-white rounded-full flex items-center justify-center">
                  <Linkedin className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  const columns = [
    { title: 'find a job', links: ['explore all jobs', 'submit your cv', 'join our team', 'refer a friend'] },
    { title: 'for talents', links: ['specialisms', 'testimonials', 'career advice', 'beware of job scams'] },
    { title: 'for employers', links: ['submit a vacancy', 'request a callback', 'our services', 'specialisms', 'case studies', 'testimonials'] },
    { title: 'resources', links: ['case studies', 'press room', 'blogs'] },
    { title: 'workforce insights', links: ['talent insights reports', 'employer brand research reports', 'salary trends reports', 'ed&i reports', 'workmonitor reports', 'startup hiring trends', 'talent pulse surveys'] },
    { title: 'jobs', links: ['engineering jobs', 'cxo jobs', 'manufacturing jobs', 'supply chain & logistics jobs', 'education jobs', 'finance & accounting jobs', 'healthcare jobs', 'hr & admin support jobs', 'ites/gcc jobs', 'legal & compliance jobs', 'sales & marketing jobs'] },
  ];

  return (
    <footer className="bg-[#051937] pt-24 pb-12 text-white">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-12 mb-24">
          {columns.map((col, idx) => (
            <div key={idx}>
              <h4 className="text-[18px] font-bold mb-8">{col.title}</h4>
              <ul className="space-y-4">
                {col.links.map((link, lIdx) => (
                  <li key={lIdx} className="text-gray-400 hover:text-white cursor-pointer transition-colors text-[15px]">
                    {link}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-white/10 pt-12">
          <div className="flex flex-wrap justify-between items-center gap-8 mb-12">
            <div className="flex space-x-6">
              {[Linkedin, Twitter, Facebook, Youtube, Instagram].map((Icon, i) => (
                <Icon key={i} className="w-6 h-6 text-gray-400 hover:text-white cursor-pointer transition-colors" />
              ))}
            </div>
            <div className="text-gray-500 text-[12px]">
              registered office: Randstad India Private Limited, CIN U74210TN1992PTC023097/Randstad House, Old No. 5 & 5A, New No. 9, Pycrofts Garden Road, Nungambakkam, Chennai, TN - 600 006
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-4 mb-12">
            <span className="text-[12px] font-bold tracking-widest">RANDSTAD,</span>
            <div className="w-8 h-8 bg-[#2b73d9] rounded-tr-full rounded-bl-full opacity-50"></div>
            <span className="text-[12px] text-gray-400">HUMAN FORWARD and SHAPING THE WORLD OF WORK are registered trademarks of © Randstad N.V.2023</span>
          </div>

          <div className="space-y-6 text-[14px] text-gray-400 leading-relaxed max-w-6xl mb-12">
            <p>
              <span className="font-bold text-white">Security Advice:</span> Randstad India does not charge any fee at any stage of its recruitment process from the candidate nor allows their employees to collect any fees from any candidates. <a href="#" className="text-[#2b73d9] underline">Click here to know more</a>
            </p>
            <p>
              <span className="font-bold text-white">EEO Statement:</span> Randstad India is an Equal Employment Opportunity Employer. All qualified applicants receive consideration for employment without regard to race, color, religion, sex, sexual orientation, gender identity or expression, appearance, national origin, age, marital status, veteran status, or disability status, or any other characteristics. Our global mission is to become the world's most equitable and specialized talent company, and we actively embrace diversity and inclusion as the cornerstones of our success. To read more of Randstad India's work in the space of equity, diversity and inclusion please <a href="#" className="text-[#2b73d9] underline">click here</a>
            </p>
          </div>

          <div className="flex flex-wrap gap-x-8 gap-y-4 text-[14px] text-gray-500">
            {['terms & conditions', 'cookies', 'misconduct reporting procedure', 'accessibility', 'be aware', 'sitemap', 'privacy statement'].map((item) => (
              <span key={item} className="hover:text-white cursor-pointer transition-colors">{item}</span>
            ))}
          </div>
        </div>
      </div>

      {/* Sticky Feedback Button */}
      <div className="fixed right-0 top-1/2 -translate-y-1/2 z-40">
        <div className="bg-[#2b73d9] text-white px-2 py-6 rounded-l-md cursor-pointer [writing-mode:vertical-rl] text-[14px] font-bold tracking-widest">
          feedback
        </div>
      </div>
    </footer>
  );
};

export default function App() {
  return (
    <div className="min-h-screen font-sans selection:bg-[#2b73d9] selection:text-white">
      <Navbar />
      <main>
        <Hero />
        <PromiseSection />
        <DifferentiatorsSection />
        <AchievementsSection />
        <ERGSection />
        <ReportsSection />
        <HeartSection />
        <ArticlesSection />
        <PodcastSection />
        <CommitmentSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
