import { motion } from "motion/react";
import { useState } from "react";

import { 
  Search, 
  User, 
  Heart, 
  ChevronDown, 
  MapPin, 
  ArrowRight, 
  Facebook, 
  Twitter, 
  Linkedin, 
  Instagram, 
  Youtube,
  Menu,
  X
} from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <></>
  );
};

const Hero = () => (
  <section className="bg-[#0a1a3c] text-white py-20 overflow-hidden relative">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center">
      <div className="md:w-1/2 z-10">
        <nav className="text-xs text-gray-400 mb-8 flex gap-2">
          <span>home</span> <span>&gt;</span> <span>operational career</span> <span>&gt;</span> <span className="text-white">manufacturing</span>
        </nav>
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-5xl md:text-7xl font-bold leading-tight mb-8"
        >
          a reliable partner for talent in manufacturing.
        </motion.h1>
        <p className="text-lg text-gray-300 mb-10 max-w-lg leading-relaxed">
          Secure a job that complements your skills, supports work-life balance, and powers your goals. Get access to a range of job opportunities through permanent, temp, or contract roles with the best employers, plus ongoing training from a trusted partner who cares about your working life and well-being.
        </p>
        <div className="flex flex-wrap gap-4">
          <button className="px-8 py-3 border border-white hover:bg-white hover:text-[#0a1a3c] transition-all font-medium">
            explore available jobs
          </button>
          <button className="px-8 py-3 border border-white hover:bg-white hover:text-[#0a1a3c] transition-all font-medium">
            submit your resume
          </button>
        </div>
      </div>
      <div className="md:w-1/2 mt-12 md:mt-0 relative flex justify-center">
        <div className="relative w-full max-w-md">
          {/* Abstract Graphic */}
          <svg viewBox="0 0 200 200" className="w-full h-auto text-[#00ff88]">
            <motion.path
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 2, ease: "easeInOut" }}
              fill="none"
              stroke="currentColor"
              strokeWidth="12"
              d="M 20,100 C 20,100 60,20 100,20 C 140,20 180,100 180,100 C 180,100 140,180 100,180 C 60,180 20,100 20,100 Z"
            />
            <motion.circle
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 1, duration: 0.5 }}
              cx="100" cy="100" r="30"
              fill="currentColor"
            />
            <rect x="140" y="80" width="40" height="40" rx="20" fill="#00ff88" opacity="0.5" />
            <rect x="20" y="40" width="20" height="20" rx="10" fill="#00ff88" opacity="0.3" />
          </svg>
        </div>
      </div>
    </div>
  </section>
);

const SectionWithImage = ({ title, description, image, reverse = false, bgColor = "bg-white", dark = false }) => (
  <section className={`${bgColor} ${dark ? 'text-white' : 'text-gray-900'} py-0 overflow-hidden`}>
    <div className={`flex flex-col ${reverse ? 'md:flex-row-reverse' : 'md:flex-row'}`}>
      <div className="md:w-1/2 p-12 md:p-24 flex flex-col justify-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-8 leading-tight">{title}</h2>
        <p className={`text-lg ${dark ? 'text-gray-300' : 'text-gray-600'} leading-relaxed mb-8`}>
          {description}
        </p>
        {dark && (
          <button className="self-start px-8 py-3 border border-white hover:bg-white hover:text-[#0a1a3c] transition-all font-medium">
            learn more
          </button>
        )}
      </div>
      <div className="md:w-1/2 h-[400px] md:h-auto">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
      </div>
    </div>
  </section>
);

const TalentPool = () => (
  <section className="bg-[#0a1a3c] text-white py-0 overflow-hidden">
    <div className="flex flex-col md:flex-row">
      <div className="md:w-1/2 p-12 md:p-24 flex flex-col justify-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-8 leading-tight">join our talent pool for future opportunities in manufacturing.</h2>
        <p className="text-lg text-gray-300 leading-relaxed mb-8">
          Can't find a job in the manufacturing sector that matches your interests? Submit your application and resume, and our team will contact you when a suitable opportunity arises.
        </p>
        <button className="self-start px-8 py-3 border border-white hover:bg-white hover:text-[#0a1a3c] transition-all font-medium">
          submit resume now
        </button>
      </div>
      <div className="md:w-1/2 h-[400px] md:h-auto relative">
        <img 
          src="https://picsum.photos/seed/manufacturing/1200/800" 
          alt="Talent Pool" 
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 flex items-center justify-center">
           <div className="w-48 h-48 border-8 border-[#00ff88] rounded-full opacity-50 animate-pulse"></div>
        </div>
      </div>
    </div>
  </section>
);

const LatestUpdates = () => {
  const articles = [
    { date: "02 August 2023", title: "randstad with heart.", image: "https://picsum.photos/seed/heart/400/300" },
    { date: "17 January 2023", title: "how to stand out in an interview.", image: "https://picsum.photos/seed/interview/400/300" },
    { date: "17 January 2023", title: "5 tips to ace your video interview.", image: "https://picsum.photos/seed/video/400/300" },
    { date: "17 January 2023", title: "declining a job offer.", image: "https://picsum.photos/seed/offer/400/300" },
    { date: "17 January 2023", title: "how to negotiate and accept your job offer.", image: "https://picsum.photos/seed/negotiate/400/300" },
    { date: "12 January 2023", title: "prepare answers for tough interview questions.", image: "https://picsum.photos/seed/answers/400/300" },
  ];

  return (
    <section className="bg-white py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-end mb-12">
          <h2 className="text-4xl font-bold">latest updates</h2>
          <button className="text-blue-600 font-medium flex items-center gap-2 hover:underline">
            see all articles <ArrowRight size={16} />
          </button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {articles.map((article, idx) => (
            <motion.div 
              key={idx}
              whileHover={{ y: -5 }}
              className="group cursor-pointer"
            >
              <div className="aspect-video overflow-hidden rounded-lg mb-6">
                <img 
                  src={article.image} 
                  alt={article.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
              </div>
              <p className="text-xs text-gray-400 mb-2">{article.date}</p>
              <h3 className="text-2xl font-bold group-hover:text-blue-600 transition-colors">{article.title}</h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const FAQ = () => (
  <section className="bg-[#0a1a3c] text-white py-24 overflow-hidden relative">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center">
      <div className="md:w-1/2 z-10">
        <p className="text-sm font-medium mb-4">FAQs</p>
        <h2 className="text-5xl font-bold mb-8 leading-tight">frequently asked questions and answers.</h2>
        <p className="text-lg text-gray-300 mb-10 max-w-lg">
          We provide answers to the most common questions that applicants and companies ask us about working with Randstad.
        </p>
        <button className="px-8 py-3 border border-white hover:bg-white hover:text-[#0a1a3c] transition-all font-medium">
          learn more
        </button>
      </div>
      <div className="md:w-1/2 mt-12 md:mt-0 flex justify-center">
        <div className="relative w-full max-w-md">
          <svg viewBox="0 0 200 200" className="w-full h-auto text-[#00ff88]">
             <rect x="40" y="40" width="120" height="120" rx="20" fill="none" stroke="currentColor" strokeWidth="8" />
             <line x1="70" y1="80" x2="130" y2="80" stroke="currentColor" strokeWidth="8" strokeLinecap="round" />
             <line x1="70" y1="100" x2="110" y2="100" stroke="currentColor" strokeWidth="8" strokeLinecap="round" />
             <line x1="70" y1="120" x2="120" y2="120" stroke="currentColor" strokeWidth="8" strokeLinecap="round" />
          </svg>
        </div>
      </div>
    </div>
  </section>
);

const BranchFinder = () => (
  <section className="bg-white py-24">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center">
      <div className="md:w-1/2">
        <h2 className="text-5xl font-bold mb-4">we'd love to have you over.</h2>
        <p className="text-xl text-gray-600 mb-12">find a branch close to you.</p>
        <div className="flex max-w-md">
          <input 
            type="text" 
            placeholder="postcode / city" 
            className="flex-1 border border-gray-300 px-6 py-4 focus:outline-none focus:border-blue-600"
          />
          <button className="bg-blue-600 text-white px-6 py-4 hover:bg-blue-700 transition-colors">
            <ArrowRight size={24} />
          </button>
        </div>
      </div>
      <div className="md:w-1/2 mt-12 md:mt-0 flex justify-center">
        <div className="relative">
          <MapPin size={200} className="text-[#00ff88] opacity-20" />
          <MapPin size={120} className="text-[#00ff88] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
        </div>
      </div>
    </div>
  </section>
);


export default function TalentManufacturing() {
  return (
    <div className="min-h-screen font-sans selection:bg-blue-100 selection:text-blue-900">
      <Navbar />
      <Hero />
      
      <SectionWithImage 
        title="learn more about manufacturing jobs and roles."
        description="Our job profiles have been created to familiarise you with the responsibilities and day-to-day activities of a number of key job roles, so you can make the right decision before applying for a job. Start exploring qualifications, responsibilities, pay rates and more in each job."
        image="https://picsum.photos/seed/roles/1200/800"
        dark
        bgColor="bg-[#0a1a3c]"
      />

      <SectionWithImage 
        title="what we offer you."
        description="Beyond competitive pay, we offer a supportive environment conducive to your personal and professional development. Whether you're starting your career or seeking advancement, we provide the resources and opportunities to help you thrive. Looking for more? Embark on a transformative career path that aligns with your aspirations and exceeds your expectations. Don't settle for anything less than what you deserve – unlock your full potential with us."
        image="https://picsum.photos/seed/offer-you/1200/800"
        reverse
      />

      <SectionWithImage 
        title="what we do."
        description="Time is of the essence when seeking employment. Our consultants prioritise speed, connecting you with the best matching job opportunities swiftly and efficiently. Our agile hiring process ensures you won't be left waiting in uncertainty, we value your time and strive to provide a seamless experience from start to finish. Digital or personal, in the way you prefer. We believe in fairly rewarding our employees for their contributions, with us, you can rest assured knowing that your salary is competitive in the marketplace."
        image="https://picsum.photos/seed/what-we-do/1200/800"
      />

      <TalentPool />
      <LatestUpdates />
      <FAQ />
      <BranchFinder />
      
      {/* Sticky Feedback Button */}
      <div className="fixed right-0 top-1/2 -translate-y-1/2 z-40 hidden lg:block">
        <button className="bg-blue-500 text-white py-4 px-2 rounded-l-md vertical-text text-xs font-bold tracking-widest uppercase hover:bg-blue-600 transition-colors">
          Feedback
        </button>
      </div>

      {/* Cookie Icon */}
      <div className="fixed bottom-6 left-6 z-40">
        <button className="bg-blue-600 text-white p-3 rounded-full shadow-lg hover:bg-blue-700 transition-all">
          <div className="w-6 h-6 border-2 border-dashed border-white rounded-full flex items-center justify-center">
            <div className="w-2 h-2 bg-white rounded-full"></div>
          </div>
        </button>
      </div>

      <style>{`
        .vertical-text {
          writing-mode: vertical-rl;
          transform: rotate(180deg);
        }
      `}</style>
    </div>
  );
}
