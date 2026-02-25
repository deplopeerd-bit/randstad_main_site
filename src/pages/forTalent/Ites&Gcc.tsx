import { motion } from "motion/react";
import { useState } from "react";

import { 
  Search, 
  Heart, 
  User, 
  ChevronDown, 
  ArrowRight, 
  Linkedin, 
  Facebook, 
  Youtube, 
  Instagram,
  MapPin,
  Menu,
  X
} from "lucide-react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
};

const Hero = () => (
  <section className="bg-[#0a1435] text-white py-24 relative overflow-hidden">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      <div className="max-w-2xl">
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-sm font-medium mb-4 text-gray-300"
        >
          home &gt; job seekers &gt; areas of expertise &gt; ites/gcc
        </motion.p>
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-5xl md:text-7xl font-bold mb-8 leading-tight"
        >
          a partner for ITES & <br />GCC professionals.
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-xl text-gray-300 mb-10 leading-relaxed"
        >
          Find the right job, love what you do, and develop your career. With access to a wide range of roles with top employers, a global community of professional peers, and specialised training and support, we'll be your guiding partner and help you build a rewarding career.
        </motion.p>
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="flex flex-wrap gap-4"
        >
          <button className="px-8 py-4 border-2 border-white text-white font-bold hover:bg-white hover:text-[#0a1435] transition-colors">
            explore available jobs
          </button>
          <button className="px-8 py-4 border-2 border-white text-white font-bold hover:bg-white hover:text-[#0a1435] transition-colors">
            submit your resume
          </button>
        </motion.div>
      </div>
    </div>
    
    {/* Decorative Circles */}
    <div className="absolute right-[-10%] top-1/2 -translate-y-1/2 hidden lg:block">
      <div className="relative">
        <div className="w-[400px] h-[400px] border-[40px] border-[#a855f7] rounded-full opacity-80"></div>
        <div className="w-[150px] h-[150px] bg-[#a855f7] rounded-full absolute -left-20 top-1/2 -translate-y-1/2"></div>
        <div className="w-[80px] h-[80px] bg-[#d8b4fe] rounded-full absolute -left-40 top-1/2 -translate-y-1/2"></div>
      </div>
    </div>
  </section>
);

const SplitSection = ({ title, content, image, reverse = false, dark = false, buttonText = "" }: any) => (
  <section className={`flex flex-col lg:flex-row ${reverse ? 'lg:flex-row-reverse' : ''}`}>
    <div className={`flex-1 p-12 lg:p-24 flex flex-col justify-center ${dark ? 'bg-[#0a1435] text-white' : 'bg-[#f5f2ed] text-[#0a1435]'}`}>
      <motion.h2 
        initial={{ opacity: 0, x: reverse ? 20 : -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        className="text-4xl md:text-5xl font-bold mb-8"
      >
        {title}
      </motion.h2>
      <motion.p 
        initial={{ opacity: 0, x: reverse ? 20 : -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1 }}
        className="text-lg leading-relaxed mb-8 opacity-90"
      >
        {content}
      </motion.p>
      {buttonText && (
        <motion.button 
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className={`self-start px-8 py-4 border-2 font-bold transition-colors ${dark ? 'border-white text-white hover:bg-white hover:text-[#0a1435]' : 'border-[#0a1435] text-[#0a1435] hover:bg-[#0a1435] hover:text-white'}`}
        >
          {buttonText}
        </motion.button>
      )}
    </div>
    <div className="flex-1 min-h-[400px] relative">
      <img src={image} alt={title} className="absolute inset-0 w-full h-full object-cover" referrerPolicy="no-referrer" />
    </div>
  </section>
);

const RecruitingSection = () => {
  const roles = [
    "back-office operations",
    "contact centre services or call centres",
    "legal databases",
    "data processing and data mining",
    "insurance claim processing/payroll",
    "creation and maintenance of medical transcription, except medical advice",
    "remote maintenance",
    "website services",
    "revenue accounting",
    "data search integration and analysis"
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-12">
          <div className="lg:w-1/3">
            <h2 className="text-4xl font-bold text-[#0a1435]">roles we're currently recruiting for.</h2>
          </div>
          <div className="lg:w-2/3 space-y-4">
            {roles.map((role, idx) => (
              <div key={idx} className="border-b border-gray-200 py-6 flex justify-between items-center group cursor-pointer">
                <span className="text-xl text-[#0a1435] group-hover:text-[#2b7ab9] transition-colors">see all roles in {role}</span>
                <ChevronDown className="w-6 h-6 text-gray-400 group-hover:text-[#2b7ab9] transition-transform group-hover:rotate-180" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const LatestUpdates = () => {
  const articles = [
    {
      date: "02 August 2023",
      title: "randstad with heart.",
      image: "https://picsum.photos/seed/heart/600/400"
    },
    {
      date: "17 January 2023",
      title: "how to stand out in an interview.",
      image: "https://picsum.photos/seed/interview/600/400"
    },
    {
      date: "17 January 2023",
      title: "5 tips to ace your video interview.",
      image: "https://picsum.photos/seed/video/600/400"
    }
  ];

  return (
    <section className="py-24 bg-[#f5f2ed]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-end mb-12">
          <h2 className="text-4xl font-bold text-[#0a1435]">latest updates</h2>
          <a href="#" className="text-[#2b7ab9] font-bold flex items-center hover:underline">
            see all articles <ArrowRight className="ml-2 w-5 h-5" />
          </a>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {articles.map((article, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="group cursor-pointer"
            >
              <div className="overflow-hidden rounded-lg mb-4 aspect-[3/2]">
                <img src={article.image} alt={article.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" referrerPolicy="no-referrer" />
              </div>
              <p className="text-sm text-gray-500 mb-2">{article.date}</p>
              <h3 className="text-2xl font-bold text-[#0a1435] group-hover:text-[#2b7ab9] transition-colors">{article.title}</h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const FAQSection = () => (
  <section className="bg-[#0a1435] text-white py-24 relative overflow-hidden">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center gap-12">
      <div className="lg:w-1/2">
        <p className="text-sm font-bold uppercase tracking-widest mb-4 opacity-70">FAQs</p>
        <h2 className="text-5xl md:text-6xl font-bold mb-8">frequently asked questions and answers.</h2>
        <p className="text-xl mb-10 opacity-80 leading-relaxed">
          We provide answers to the most common questions that applicants and companies ask us about working with Randstad.
        </p>
        <button className="px-8 py-4 border-2 border-white font-bold hover:bg-white hover:text-[#0a1435] transition-colors">
          learn more
        </button>
      </div>
      <div className="lg:w-1/2 relative flex justify-center">
        <div className="relative w-full max-w-[500px] aspect-square">
          <div className="absolute inset-0 border-[30px] border-[#a855f7] rounded-full opacity-80"></div>
          <div className="absolute top-1/4 left-1/4 w-1/2 h-1/2 border-[20px] border-[#d8b4fe] rounded-full opacity-60"></div>
          <div className="absolute bottom-10 right-10 w-24 h-24 bg-[#a855f7] rounded-full"></div>
        </div>
      </div>
    </div>
  </section>
);

const BranchLocator = () => (
  <section className="py-24 bg-[#f5f2ed]">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center gap-12">
      <div className="lg:w-1/2">
        <h2 className="text-5xl md:text-6xl font-bold text-[#0a1435] mb-4">we'd love to have you over.</h2>
        <p className="text-2xl text-[#0a1435] mb-12 opacity-80">find a branch close to you.</p>
        <div className="flex max-w-md">
          <input 
            type="text" 
            placeholder="postcode / city" 
            className="flex-1 px-6 py-4 bg-white border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#2b7ab9]"
          />
          <button className="bg-[#2b7ab9] text-white px-6 py-4 hover:bg-[#1e5a8a] transition-colors">
            <ArrowRight className="w-6 h-6" />
          </button>
        </div>
      </div>
      <div className="lg:w-1/2 flex justify-center">
        <div className="relative">
          <MapPin className="w-48 h-48 text-[#a855f7]" strokeWidth={1} />
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 w-32 h-4 bg-[#a855f7] rounded-full opacity-30 blur-sm"></div>
        </div>
      </div>
    </div>
  </section>
);


export default function ForTalentItesGcc() {
  return (
    <div className="min-h-screen font-sans bg-white selection:bg-[#2b7ab9] selection:text-white">
      <Navbar />
      <main>
        <Hero />
        
        <SplitSection 
          title="what we do."
          content="The ITES/GCC (global capability centre) sector is a thriving hub of opportunities in India, offering a diverse range of roles that leverage your skills and expertise. Whether you're a customer service representative, data analyst, legal researcher, medical transcriptionist, IT support specialist, or any other professional seeking a fulfilling career in ITES/GCC, we understand the unique appeal of this dynamic sector. Our consultants are specialists in matching talent with ITES/GCC needs, ensuring you find roles that align with your qualifications, interests, and career aspirations."
          image="https://picsum.photos/seed/whatwedo/1200/800"
        />

        <SplitSection 
          title="what we offer you."
          content="Your career in ITES/GCC is a journey of continuous learning and growth. We're dedicated to supporting your professional development through tailored career guidance, access to industry-leading training and certifications, and insights into the latest ITES/GCC trends and technologies. Join our community of ITES/GCC professionals to network with like-minded individuals, exchange ideas, and stay ahead of the curve in this ever-evolving field."
          image="https://picsum.photos/seed/offer/1200/800"
          reverse
          dark
        />

        <SplitSection 
          title="learn more about job roles in ITES & GCC."
          content="Our job profiles have been created to familiarise you with the responsibilities and day-to-day activities of a number of key job roles, so you can make the right decision before applying for a job. Start exploring qualifications, responsibilities, pay rates and more in each job."
          image="https://picsum.photos/seed/roles/1200/800"
          dark
          buttonText="learn more"
        />

        <RecruitingSection />

        <SplitSection 
          title="join our talent pool for future opportunities in ITES/GCC."
          content="Can't find a job in the ITES/GCC sector that matches your interests? Submit your application and resume, and our team will contact you when a suitable opportunity arises."
          image="https://picsum.photos/seed/talentpool/1200/800"
          dark
          buttonText="submit resume now"
        />

        <LatestUpdates />
        <FAQSection />
        <BranchLocator />
      </main>
    </div>
  );
}
