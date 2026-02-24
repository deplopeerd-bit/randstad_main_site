import { motion } from "motion/react";

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
  Instagram 
} from 'lucide-react';

const Navbar = () => (
  <nav className="bg-white border-b border-gray-100 sticky top-0 z-50">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex justify-between h-20 items-center">
        <div className="flex items-center gap-8">
          <div className="flex items-center">
            {/* Simple Randstad Logo Clone */}
            <div className="flex items-center text-blue-600 font-bold text-2xl">
              <span className="text-blue-500">ר</span>
              <span className="ml-1 text-blue-600">randstad</span>
            </div>
          </div>
          <div className="hidden md:flex items-center gap-6 text-sm font-medium text-gray-600">
            <a href="#" className="flex items-center gap-1 hover:text-blue-600 transition-colors">find a job <ChevronDown size={14} /></a>
            <a href="#" className="flex items-center gap-1 hover:text-blue-600 transition-colors">for talent <ChevronDown size={14} /></a>
            <a href="#" className="flex items-center gap-1 hover:text-blue-600 transition-colors">for employer <ChevronDown size={14} /></a>
            <a href="#" className="flex items-center gap-1 hover:text-blue-600 transition-colors">resources <ChevronDown size={14} /></a>
            <a href="#" className="flex items-center gap-1 hover:text-blue-600 transition-colors">about us <ChevronDown size={14} /></a>
          </div>
        </div>
        <div className="flex items-center gap-6 text-sm">
          <a href="#" className="text-gray-500 hover:text-blue-600 hidden lg:block">contact us</a>
          <div className="flex items-center gap-4">
            <button className="text-gray-500 hover:text-blue-600 flex items-center gap-1">
              <Heart size={20} />
              <span className="font-medium">0</span>
            </button>
            <button className="text-gray-500 hover:text-blue-600 flex items-center gap-1">
              <User size={20} />
              <span className="font-medium">my randstad</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  </nav>
);

const Hero = () => (
  <section className="bg-randstad-blue text-white py-20 lg:py-32 relative overflow-hidden">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      <div className="max-w-3xl">
        <nav className="flex items-center gap-2 text-xs mb-8 opacity-70">
          <a href="#">home</a>
          <span>&gt;</span>
          <a href="#">professional career</a>
          <span>&gt;</span>
          <span className="font-semibold">pharma healthcare & lifesciences</span>
        </nav>
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-5xl lg:text-7xl font-light leading-tight mb-8"
        >
          a partner for careers in pharma, healthcare and life sciences.
        </motion.h1>
        <p className="text-lg lg:text-xl opacity-90 mb-12 leading-relaxed">
          Find the right job, love what you do, and develop your career. With access to a wide range of roles with top employers, a global community of professional peers, and specialised training and support, we'll be your guiding partner and help you build a rewarding career.
        </p>
        <div className="flex flex-wrap gap-4">
          <button className="px-8 py-4 border border-white text-white font-medium hover:bg-white hover:text-randstad-blue transition-all">
            explore available jobs
          </button>
          <button className="px-8 py-4 border border-white text-white font-medium hover:bg-white hover:text-randstad-blue transition-all">
            submit your resume
          </button>
        </div>
      </div>
    </div>
    
    {/* Abstract Graphics */}
    <div className="absolute right-0 top-1/2 -translate-y-1/2 w-1/2 h-full pointer-events-none">
      <div className="relative w-full h-full">
        <div className="absolute right-20 top-1/2 -translate-y-1/2 w-64 h-64 rounded-full border-[20px] border-randstad-purple opacity-80" />
        <div className="absolute right-64 top-1/2 -translate-y-1/2 w-32 h-32 rounded-full bg-randstad-purple opacity-60" />
        <div className="absolute right-80 top-1/2 -translate-y-1/2 w-16 h-16 rounded-full bg-randstad-purple opacity-40" />
        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-48 h-48 rounded-full bg-randstad-purple/30" />
      </div>
    </div>
  </section>
);

const WhatWeDo = () => (
  <section className="grid lg:grid-cols-2 min-h-[500px]">
    <div className="bg-randstad-beige p-12 lg:p-24 flex flex-col justify-center">
      <h2 className="text-5xl font-light mb-8">what we do.</h2>
      <p className="text-lg leading-relaxed text-gray-700">
        In order to really understand your needs and preferences, our consultants are themselves experts within the healthcare specialisation. Combined with our wide range of interesting health career occupations where you will make a difference for patients and healthcare institutions, we offer you work-life balance, flexibility, and a seamless work experience with a personalised focus. With us, you will have the opportunity for professional development, personalised follow-up, and the chance to pursue health and education career opportunities.
      </p>
    </div>
    <div className="bg-randstad-gold hidden lg:block" />
  </section>
);

const WhatWeOffer = () => (
  <section className="grid lg:grid-cols-2 min-h-[500px]">
    <div className="relative h-[400px] lg:h-auto">
      <img 
        src="https://picsum.photos/seed/healthcare/1200/800" 
        alt="Healthcare professional"
        className="absolute inset-0 w-full h-full object-cover"
        referrerPolicy="no-referrer"
      />
    </div>
    <div className="bg-white p-12 lg:p-24 flex flex-col justify-center">
      <h2 className="text-5xl font-light mb-8">what we offer you.</h2>
      <p className="text-lg leading-relaxed text-gray-700">
        We provide you with a wonderful experience as we will be your guiding partner throughout every stage of your healthcare profession. We offer timely and honest feedback, aiming at a lasting relationship even during the stages you don't work for us. By becoming a member of our lively communities, you will have the opportunity to develop your skills and build valuable relationships and networks within your industry.
      </p>
    </div>
  </section>
);

const RecruitingRoles = () => (
  <section className="bg-randstad-blue text-white py-24">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid lg:grid-cols-2 gap-12">
        <div>
          <h2 className="text-4xl font-light leading-tight">roles we're currently recruiting for.</h2>
        </div>
        <div className="space-y-6">
          {[
            "see all roles pharma jobs.",
            "see all roles in hospital/diagnostics/clinics/fertility clinics",
            "see all roles in diagnostics labs",
            "see healthcare jobs"
          ].map((item, idx) => (
            <div key={idx} className="border-b border-white/20 pb-6 flex justify-between items-center cursor-pointer group">
              <span className="text-xl font-light group-hover:underline">{item}</span>
              <ChevronDown size={24} className="opacity-60" />
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

const LearnMore = () => (
  <section className="grid lg:grid-cols-2 min-h-[600px] bg-randstad-blue text-white">
    <div className="p-12 lg:p-24 flex flex-col justify-center">
      <h2 className="text-5xl font-light mb-8 leading-tight">learn more about job roles in pharma, healthcare and lifesciences.</h2>
      <p className="text-lg leading-relaxed opacity-80 mb-12">
        Our job profiles have been created to familiarise you with the responsibilities and day-to-day activities of a number of key job roles, so you can make the right decision before applying for a job. Start exploring qualifications, responsibilities, pay rates and more in each job.
      </p>
      <div>
        <button className="px-8 py-4 border border-white text-white font-medium hover:bg-white hover:text-randstad-blue transition-all">
          learn more
        </button>
      </div>
    </div>
    <div className="relative h-[400px] lg:h-auto">
      <img 
        src="https://picsum.photos/seed/office/1200/800" 
        alt="People talking"
        className="absolute inset-0 w-full h-full object-cover"
        referrerPolicy="no-referrer"
      />
    </div>
  </section>
);

const LatestUpdates = () => (
  <section className="py-24 bg-white">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex justify-between items-end mb-12">
        <h2 className="text-4xl font-light">latest updates</h2>
        <a href="#" className="text-blue-600 hover:underline text-lg">see all articles</a>
      </div>
      <div className="grid md:grid-cols-3 gap-8">
        {[
          {
            date: "02 August 2023",
            title: "randstad with heart.",
            img: "https://picsum.photos/seed/heart/600/400"
          },
          {
            date: "17 January 2023",
            title: "how to stand out in an interview.",
            img: "https://picsum.photos/seed/interview/600/400"
          },
          {
            date: "17 January 2023",
            title: "5 tips to ace your video interview.",
            img: "https://picsum.photos/seed/video/600/400"
          }
        ].map((article, idx) => (
          <div key={idx} className="group cursor-pointer">
            <div className="aspect-[3/2] overflow-hidden mb-6">
              <img 
                src={article.img} 
                alt={article.title} 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                referrerPolicy="no-referrer"
              />
            </div>
            <p className="text-sm text-gray-500 mb-2">{article.date}</p>
            <h3 className="text-2xl font-light group-hover:underline">{article.title}</h3>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const FAQSection = () => (
  <section className="bg-randstad-blue text-white py-24 relative overflow-hidden">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      <div className="max-w-xl">
        <p className="text-lg mb-4 opacity-80">FAQs</p>
        <h2 className="text-6xl font-light mb-8 leading-tight">frequently asked questions and answers.</h2>
        <p className="text-lg mb-12 opacity-80">
          We provide answers to the most common questions that applicants and companies ask us about working with Randstad.
        </p>
        <button className="px-8 py-4 border border-white text-white font-medium hover:bg-white hover:text-randstad-blue transition-all">
          learn more
        </button>
      </div>
    </div>
    
    {/* Speech Bubble Graphics */}
    <div className="absolute right-0 top-1/2 -translate-y-1/2 w-1/2 h-full pointer-events-none opacity-40">
      <div className="relative w-full h-full">
        <div className="absolute right-20 top-1/2 -translate-y-1/2 w-[400px] h-[250px] rounded-[100px] border-[15px] border-randstad-purple" />
        <div className="absolute right-64 top-[60%] -translate-y-1/2 w-[300px] h-[200px] rounded-[100px] bg-randstad-purple/40" />
      </div>
    </div>
  </section>
);

const BranchLocator = () => (
  <section className="py-24 bg-randstad-beige">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-6xl font-light mb-6">we'd love to have you over.</h2>
          <p className="text-xl mb-12 opacity-80">find a branch close to you.</p>
          <div className="flex max-w-md">
            <input 
              type="text" 
              placeholder="postcode / city" 
              className="flex-1 bg-white border-none px-6 py-4 text-lg focus:ring-2 focus:ring-blue-500 outline-none"
            />
            <button className="bg-blue-600 text-white p-4 hover:bg-blue-700 transition-colors">
              <ArrowRight size={24} />
            </button>
          </div>
        </div>
        <div className="flex justify-center">
          <div className="relative w-64 h-64">
             {/* Simple Location Pin Graphic */}
             <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-48 h-48 rounded-full border-[12px] border-randstad-purple relative">
                  <div className="absolute -bottom-12 left-1/2 -translate-x-1/2 w-0 h-0 border-l-[30px] border-l-transparent border-r-[30px] border-r-transparent border-t-[50px] border-t-randstad-purple" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-12 h-12 rounded-full bg-randstad-purple" />
                  </div>
                </div>
             </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const Footer = () => (
  <footer className="bg-randstad-blue text-white pt-24 pb-12">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-12 mb-20">
        <div>
          <h4 className="text-xl font-medium mb-8">find a job</h4>
          <ul className="space-y-4 opacity-70 text-sm">
            <li><a href="#" className="hover:underline">explore all jobs</a></li>
            <li><a href="#" className="hover:underline">submit your cv</a></li>
            <li><a href="#" className="hover:underline">join our team</a></li>
            <li><a href="#" className="hover:underline">refer a friend</a></li>
          </ul>
          
          <h4 className="text-xl font-medium mt-12 mb-8">for talents</h4>
          <ul className="space-y-4 opacity-70 text-sm">
            <li><a href="#" className="hover:underline">specialisms</a></li>
            <li><a href="#" className="hover:underline">testimonials</a></li>
            <li><a href="#" className="hover:underline">career advice</a></li>
            <li><a href="#" className="hover:underline">beware of job scams</a></li>
          </ul>
        </div>
        
        <div>
          <h4 className="text-xl font-medium mb-8">for employers</h4>
          <ul className="space-y-4 opacity-70 text-sm">
            <li><a href="#" className="hover:underline">submit a vacancy</a></li>
            <li><a href="#" className="hover:underline">request a callback</a></li>
            <li><a href="#" className="hover:underline">our services</a></li>
            <li><a href="#" className="hover:underline">specialisms</a></li>
            <li><a href="#" className="hover:underline">case studies</a></li>
            <li><a href="#" className="hover:underline">testimonials</a></li>
          </ul>
          
          <h4 className="text-xl font-medium mt-12 mb-8">resources</h4>
          <ul className="space-y-4 opacity-70 text-sm">
            <li><a href="#" className="hover:underline">case studies</a></li>
            <li><a href="#" className="hover:underline">press room</a></li>
            <li><a href="#" className="hover:underline">blogs</a></li>
          </ul>
        </div>
        
        <div>
          <h4 className="text-xl font-medium mb-8">workforce insights</h4>
          <ul className="space-y-4 opacity-70 text-sm">
            <li><a href="#" className="hover:underline">talent insights reports</a></li>
            <li><a href="#" className="hover:underline">employer brand research reports</a></li>
            <li><a href="#" className="hover:underline">salary trends reports</a></li>
            <li><a href="#" className="hover:underline">ed&i reports</a></li>
            <li><a href="#" className="hover:underline">workmonitor reports</a></li>
            <li><a href="#" className="hover:underline">startup hiring trends</a></li>
            <li><a href="#" className="hover:underline">talent pulse surveys</a></li>
          </ul>
        </div>
        
        <div>
          <h4 className="text-xl font-medium mb-8">jobs</h4>
          <ul className="space-y-4 opacity-70 text-sm">
            <li><a href="#" className="hover:underline">engineering jobs</a></li>
            <li><a href="#" className="hover:underline">cxo jobs</a></li>
            <li><a href="#" className="hover:underline">manufacturing jobs</a></li>
            <li><a href="#" className="hover:underline">supply chain & logistics jobs</a></li>
            <li><a href="#" className="hover:underline">education jobs</a></li>
            <li><a href="#" className="hover:underline">finance & accounting jobs</a></li>
            <li><a href="#" className="hover:underline">healthcare jobs</a></li>
            <li><a href="#" className="hover:underline">hr & admin support jobs</a></li>
            <li><a href="#" className="hover:underline">ites/gcc jobs</a></li>
            <li><a href="#" className="hover:underline">legal & compliance jobs</a></li>
            <li><a href="#" className="hover:underline">sales & marketing jobs</a></li>
          </ul>
        </div>
      </div>
      
      <div className="border-t border-white/10 pt-12">
        <div className="flex flex-wrap gap-6 mb-12">
          <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"><Linkedin size={20} /></a>
          <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"><Twitter size={20} /></a>
          <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"><Facebook size={20} /></a>
          <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"><Youtube size={20} /></a>
          <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"><Instagram size={20} /></a>
        </div>
        
        <div className="space-y-4 text-xs opacity-60 leading-relaxed max-w-4xl">
          <p>registered office: Randstad India Private Limited, CIN U74210TN1992PTC023097, Randstad House, Old No. 5 & 5A, New No. 9, Pycrofts Garden Road, Nungambakkam, Chennai, TN - 600 006</p>
          <p>RANDSTAD, ר, HUMAN FORWARD and SHAPING THE WORLD OF WORK are registered trademarks of © Randstad N.V. 2023</p>
          <p>Security Advice: Randstad India does not charge any fee at any stage of its recruitment process from the candidate nor allows their employees to collect any fees from any candidates. Click here to know more</p>
          <p>EEO Statement: Randstad India is an Equal Employment Opportunity Employer. All qualified applicants receive consideration for employment without regard to race, color, religion, sex, sexual orientation, gender identity or expression, appearance, national origin, age, marital status, veteran status, or disability status, or any other characteristics. Our global mission is to become the world's most equitable and specialized talent company, and we actively embrace diversity and inclusion as the cornerstones of our success. To read more of Randstad India's work in the space of equity, diversity and inclusion please click here</p>
        </div>
        
        <div className="mt-12 flex flex-wrap gap-x-8 gap-y-4 text-sm opacity-80">
          <a href="#" className="hover:underline">terms & conditions</a>
          <a href="#" className="hover:underline">cookies</a>
          <a href="#" className="hover:underline">misconduct reporting procedure</a>
          <a href="#" className="hover:underline">accessibility</a>
          <a href="#" className="hover:underline">be aware</a>
          <a href="#" className="hover:underline">sitemap</a>
          <a href="#" className="hover:underline">privacy statement</a>
        </div>
      </div>
    </div>
  </footer>
);

export default function RandstadPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <WhatWeDo />
      <WhatWeOffer />
      <RecruitingRoles />
      <LearnMore />
      <LatestUpdates />
      <FAQSection />
      <BranchLocator />
      <Footer />
      
      {/* Floating Feedback Button */}
      <div className="fixed right-0 top-1/2 -translate-y-1/2 z-40">
        <button className="bg-blue-500 text-white py-4 px-2 rounded-l-md text-xs font-bold [writing-mode:vertical-rl] rotate-180 hover:bg-blue-600 transition-colors">
          Feedback
        </button>
      </div>
      
      {/* Cookie Icon */}
      <div className="fixed bottom-6 left-6 z-40">
        <button className="bg-blue-600 text-white p-3 rounded-full shadow-lg hover:bg-blue-700 transition-colors">
          <div className="w-6 h-6 border-2 border-white rounded-full relative overflow-hidden">
            <div className="absolute top-1 left-1 w-1 h-1 bg-white rounded-full" />
            <div className="absolute top-3 left-2 w-1 h-1 bg-white rounded-full" />
            <div className="absolute top-2 left-3 w-1 h-1 bg-white rounded-full" />
            <div className="absolute bottom-1 right-2 w-1 h-1 bg-white rounded-full" />
          </div>
        </button>
      </div>
    </div>
  );
}
