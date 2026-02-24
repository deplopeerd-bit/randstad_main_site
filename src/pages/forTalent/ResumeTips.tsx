import React, { useState } from "react";
import { AnimatePresence, motion } from "motion/react";

import { 
  ChevronDown, 
  Search, 
  Heart, 
  User, 
  Play, 
  Linkedin, 
  Twitter, 
  Facebook, 
  Youtube, 
  Instagram,
  Menu,
  X
} from 'lucide-react';

interface AccordionItemProps {
  title: string;
  content: string;
  isOpen: boolean;
  onClick: () => void;
}

const AccordionItem: React.FC<AccordionItemProps> = ({ title, content, isOpen, onClick }) => {
  return (
    <div className="border-b border-gray-200">
      <button 
        className="w-full py-6 flex justify-between items-center text-left hover:text-blue-600 transition-colors group"
        onClick={onClick}
      >
        <span className="text-xl md:text-2xl font-light tracking-tight">{title}</span>
        <ChevronDown className={`w-6 h-6 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="overflow-hidden"
          >
            <div className="pb-6 text-gray-600 leading-relaxed">
              {content}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default function ResumePage() {
  const [openTip, setOpenTip] = useState<number | null>(null);
  const [openRelated, setOpenRelated] = useState<number | null>(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const resumeTips = [
    { title: "1. tailor your resume for each job.", content: "Customize your resume for every application by highlighting the skills and experiences most relevant to the specific job description. Use keywords found in the posting." },
    { title: "2. choose the right resume format.", content: "Decide between chronological, functional, or hybrid formats based on your career history and the role you're targeting." },
    { title: "3. start with a strong summary or objective.", content: "A concise, impactful statement at the top of your resume should immediately communicate your value proposition to recruiters." },
    { title: "4. focus on achievements, not just duties.", content: "Instead of just listing tasks, use data and specific examples to show the impact you had in your previous roles." },
    { title: "5. use action verbs.", content: "Start bullet points with strong verbs like 'managed', 'developed', 'increased', or 'coordinated' to make your experience sound more dynamic." },
    { title: "6. keep it concise.", content: "Aim for 1-2 pages. Be ruthless with editing to ensure every word earns its place on the page." },
    { title: "7. highlight relevant skills.", content: "Create a dedicated section for technical and soft skills that align with the job requirements." },
    { title: "8. include keywords from the job posting.", content: "Many companies use Applicant Tracking Systems (ATS). Using the right keywords helps your resume get seen by human eyes." },
    { title: "9. include education and certifications.", content: "List your academic background and any professional certifications that bolster your qualifications." },
    { title: "10. proofread thoroughly.", content: "Typos and grammatical errors can be deal-breakers. Check your resume multiple times and ask someone else to review it too." },
    { title: "11. add a link to your portfolio (if relevant).", content: "For creative or technical roles, a link to your work can provide tangible proof of your abilities." },
    { title: "12. optimize contact information.", content: "Ensure your phone number, professional email, and LinkedIn profile link are accurate and easy to find." },
  ];

  const relatedArticles = [
    { title: "how to write a winning resume.", content: "Deep dive into the structural elements that make a resume stand out in today's competitive job market." },
    { title: "tips for a standout cover letter.", content: "Learn how to complement your resume with a compelling narrative that connects your background to the company's needs." },
  ];

  const latestUpdates = [
    {
      date: "02 August 2023",
      title: "randstad with heart.",
      image: "https://picsum.photos/seed/heart/800/500"
    },
    {
      date: "09 June 2023",
      title: "keep your cv real and avoid fake claims.",
      image: "https://picsum.photos/seed/cv/800/500"
    },
    {
      date: "17 January 2023",
      title: "declining a job offer.",
      image: "https://picsum.photos/seed/decline/800/500"
    }
  ];

  return (
    <div className="min-h-screen bg-white font-sans text-[#141414]">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <div className="flex items-center gap-8">
              <div className="flex items-center">
                <div className="text-[#21409a] font-bold text-3xl tracking-tighter flex items-center">
                  <span className="mr-1">ר</span>
                  <span>randstad</span>
                </div>
              </div>
              
              {/* Desktop Nav */}
              <nav className="hidden lg:flex items-center gap-6">
                {['find a job', 'for talent', 'for employer', 'resources', 'about us'].map((item) => (
                  <button key={item} className="text-sm font-medium hover:text-blue-600 flex items-center gap-1">
                    {item} <ChevronDown className="w-4 h-4" />
                  </button>
                ))}
              </nav>
            </div>

            {/* Right Actions */}
            <div className="flex items-center gap-6">
              <div className="hidden md:flex items-center gap-6 text-sm font-medium">
                <button className="hover:text-blue-600">contact us</button>
                <button className="flex items-center gap-1 hover:text-blue-600">
                  <Heart className="w-5 h-5" /> <span>0</span>
                </button>
                <button className="flex items-center gap-1 hover:text-blue-600">
                  <User className="w-5 h-5" /> <span>my randstad</span>
                </button>
              </div>
              <button className="lg:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                {isMenuOpen ? <X /> : <Menu />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-[#002147] text-white py-16 md:py-24 overflow-hidden relative">
        <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
          <div className="text-sm mb-8 opacity-70">
            home &nbsp; &gt; &nbsp; career advice &nbsp; &gt; &nbsp; <span className="opacity-100">resume tips</span>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-2xl md:text-3xl font-light mb-4">career advice.</h2>
              <h1 className="text-5xl md:text-7xl font-light mb-8 tracking-tight">
                learn more about:<br />
                <span className="flex items-center gap-4">
                  resume <ChevronDown className="w-12 h-12 md:w-16 md:h-16 text-blue-400" />
                </span>
              </h1>
              <p className="text-xl md:text-2xl font-light opacity-80">
                Discover how to improve your career.
              </p>
            </div>
            
            <div className="hidden lg:flex justify-end">
              <div className="relative w-80 h-80">
                <motion.div 
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.8 }}
                  className="absolute top-0 right-0 w-64 h-40 bg-white/10 rounded-full blur-3xl"
                />
                <svg viewBox="0 0 200 200" className="w-full h-full text-blue-400/30">
                  <path fill="currentColor" d="M40,80 Q40,40 80,40 L120,40 Q160,40 160,80 L160,120 Q160,160 120,160 L80,160 Q40,160 40,120 Z" />
                  <path fill="white" fillOpacity="0.2" d="M60,100 Q60,70 90,70 L110,70 Q140,70 140,100 L140,110 Q140,140 110,140 L90,140 Q60,140 60,110 Z" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tips Section */}
      <section className="py-20 bg-[#f9f9f7]">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="grid lg:grid-cols-12 gap-12">
            <div className="lg:col-span-4">
              <h2 className="text-4xl md:text-5xl font-light tracking-tight leading-tight">
                top resume building tips.
              </h2>
            </div>
            <div className="lg:col-span-8">
              <p className="text-xl mb-12 text-gray-600">craft the perfect resume to land your dream job.</p>
              <div className="space-y-0">
                {resumeTips.map((tip, index) => (
                  <AccordionItem 
                    key={index}
                    title={tip.title}
                    content={tip.content}
                    isOpen={openTip === index}
                    onClick={() => setOpenTip(openTip === index ? null : index)}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Video Section */}
      <section className="relative h-[600px] flex items-center overflow-hidden">
        <img 
          src="https://picsum.photos/seed/career/1920/1080" 
          alt="Career background" 
          className="absolute inset-0 w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-black/30" />
        
        <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10 w-full">
          <div className="max-w-2xl bg-white p-10 md:p-16 rounded-tr-[80px]">
            <h2 className="text-5xl md:text-6xl font-light tracking-tighter mb-8 leading-none">
              create a perfect resume <br />
              <span className="text-blue-600 bg-blue-50 px-2">in 5 minutes.</span>
            </h2>
            <p className="text-lg text-gray-600 mb-10 leading-relaxed">
              getting the right set of information on resume increases the chances of selection very much.
            </p>
            <button className="flex items-center gap-4 group">
              <div className="w-16 h-16 rounded-full border border-gray-300 flex items-center justify-center group-hover:bg-blue-600 group-hover:border-blue-600 transition-all">
                <Play className="w-6 h-6 fill-current group-hover:text-white" />
              </div>
              <span className="text-lg font-medium group-hover:text-blue-600 transition-colors">play the video</span>
            </button>
          </div>
        </div>
      </section>

      {/* Related Section */}
      <section className="py-24 bg-[#002147] text-white">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="grid lg:grid-cols-12 gap-12">
            <div className="lg:col-span-4">
              <h2 className="text-5xl font-light tracking-tight">resume.</h2>
            </div>
            <div className="lg:col-span-8">
              <h3 className="text-2xl font-light mb-12 opacity-80">related articles.</h3>
              <div className="space-y-0 border-t border-white/20">
                {relatedArticles.map((article, index) => (
                  <div key={index} className="border-b border-white/20">
                    <button 
                      className="w-full py-8 flex justify-between items-center text-left hover:text-blue-400 transition-colors"
                      onClick={() => setOpenRelated(openRelated === index ? null : index)}
                    >
                      <span className="text-3xl font-light tracking-tight">{article.title}</span>
                      <ChevronDown className={`w-8 h-8 transition-transform duration-300 ${openRelated === index ? 'rotate-180' : ''}`} />
                    </button>
                    <AnimatePresence>
                      {openRelated === index && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          className="overflow-hidden"
                        >
                          <div className="pb-8 text-lg opacity-70 leading-relaxed">
                            {article.content}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Latest Updates */}
      <section className="py-24 bg-[#f9f9f7]">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="flex justify-between items-end mb-16">
            <h2 className="text-5xl font-light tracking-tight">latest updates</h2>
            <button className="text-xl font-light border-b border-gray-400 hover:border-blue-600 hover:text-blue-600 transition-all">
              see all articles
            </button>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {latestUpdates.map((update, index) => (
              <motion.div 
                key={index}
                whileHover={{ y: -10 }}
                className="group cursor-pointer"
              >
                <div className="aspect-[16/10] overflow-hidden rounded-lg mb-6">
                  <img 
                    src={update.image} 
                    alt={update.title} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="text-sm text-gray-500 mb-3">{update.date}</div>
                <h3 className="text-2xl font-light leading-tight group-hover:text-blue-600 transition-colors">
                  {update.title}
                </h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-6xl md:text-7xl font-light tracking-tighter leading-none mb-12">
                get in touch or <br />
                explore available <br />
                jobs.
              </h2>
              <button className="px-12 py-4 border border-blue-600 text-blue-600 text-lg font-medium hover:bg-blue-600 hover:text-white transition-all rounded-sm">
                contact us
              </button>
            </div>
            <div className="flex justify-center lg:justify-end">
              <div className="relative">
                <div className="w-64 h-[500px] border-[12px] border-blue-600 rounded-[40px] relative overflow-hidden bg-white shadow-2xl">
                   <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-6 bg-blue-600 rounded-b-2xl" />
                   <div className="absolute bottom-4 left-1/2 -translate-x-1/2 w-10 h-10 bg-blue-600 rounded-full" />
                </div>
                {/* Decorative waves */}
                <div className="absolute -top-10 -right-10 w-40 h-40 text-blue-400 opacity-40">
                  <svg viewBox="0 0 100 100" className="w-full h-full">
                    <circle cx="100" cy="0" r="40" fill="none" stroke="currentColor" strokeWidth="2" strokeDasharray="4 4" />
                    <circle cx="100" cy="0" r="60" fill="none" stroke="currentColor" strokeWidth="2" strokeDasharray="4 4" />
                    <circle cx="100" cy="0" r="80" fill="none" stroke="currentColor" strokeWidth="2" strokeDasharray="4 4" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#002147] text-white pt-24 pb-12">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-y-16 gap-x-8 mb-24">
            <div>
              <h4 className="text-xl font-medium mb-8">find a job</h4>
              <ul className="space-y-4 text-gray-400 text-sm">
                <li><a href="#" className="hover:text-white">explore all jobs</a></li>
                <li><a href="#" className="hover:text-white">submit your cv</a></li>
                <li><a href="#" className="hover:text-white">join our team</a></li>
                <li><a href="#" className="hover:text-white">refer a friend</a></li>
              </ul>
              <h4 className="text-xl font-medium mt-12 mb-8">for talents</h4>
              <ul className="space-y-4 text-gray-400 text-sm">
                <li><a href="#" className="hover:text-white">specialisms</a></li>
                <li><a href="#" className="hover:text-white">testimonials</a></li>
                <li><a href="#" className="hover:text-white">career advice</a></li>
                <li><a href="#" className="hover:text-white">beware of job scams</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-xl font-medium mb-8">for employers</h4>
              <ul className="space-y-4 text-gray-400 text-sm">
                <li><a href="#" className="hover:text-white">submit a vacancy</a></li>
                <li><a href="#" className="hover:text-white">request a callback</a></li>
                <li><a href="#" className="hover:text-white">our services</a></li>
                <li><a href="#" className="hover:text-white">specialisms</a></li>
                <li><a href="#" className="hover:text-white">case studies</a></li>
                <li><a href="#" className="hover:text-white">testimonials</a></li>
              </ul>
              <h4 className="text-xl font-medium mt-12 mb-8">resources</h4>
              <ul className="space-y-4 text-gray-400 text-sm">
                <li><a href="#" className="hover:text-white">case studies</a></li>
                <li><a href="#" className="hover:text-white">press room</a></li>
                <li><a href="#" className="hover:text-white">blogs</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-xl font-medium mb-8">workforce insights</h4>
              <ul className="space-y-4 text-gray-400 text-sm">
                <li><a href="#" className="hover:text-white">talent insights reports</a></li>
                <li><a href="#" className="hover:text-white">employer brand research reports</a></li>
                <li><a href="#" className="hover:text-white">salary trends reports</a></li>
                <li><a href="#" className="hover:text-white">ed&i reports</a></li>
                <li><a href="#" className="hover:text-white">workmonitor reports</a></li>
                <li><a href="#" className="hover:text-white">startup hiring trends</a></li>
                <li><a href="#" className="hover:text-white">talent pulse surveys</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-xl font-medium mb-8">jobs</h4>
              <ul className="space-y-4 text-gray-400 text-sm">
                <li><a href="#" className="hover:text-white">engineering jobs</a></li>
                <li><a href="#" className="hover:text-white">cxo jobs</a></li>
                <li><a href="#" className="hover:text-white">manufacturing jobs</a></li>
                <li><a href="#" className="hover:text-white">supply chain & logistics jobs</a></li>
                <li><a href="#" className="hover:text-white">education jobs</a></li>
                <li><a href="#" className="hover:text-white">finance & accounting jobs</a></li>
                <li><a href="#" className="hover:text-white">healthcare jobs</a></li>
                <li><a href="#" className="hover:text-white">hr & admin support jobs</a></li>
                <li><a href="#" className="hover:text-white">ites/gcc jobs</a></li>
                <li><a href="#" className="hover:text-white">legal & compliance jobs</a></li>
                <li><a href="#" className="hover:text-white">sales & marketing jobs</a></li>
              </ul>
            </div>
          </div>

          <div className="pt-12 border-t border-white/10">
            <div className="flex flex-wrap gap-6 mb-12">
              {[Linkedin, Twitter, Facebook, Youtube, Instagram].map((Icon, i) => (
                <a key={i} href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-blue-600 transition-colors">
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
            
            <div className="text-xs text-gray-400 space-y-6">
              <p>registered office: Randstad India Private Limited, CIN U74210TN1992PTC023097, Randstad House, Old No. 5 & 5A, New No. 9, Pycrofts Garden Road, Nungambakkam, Chennai, TN - 600 006</p>
              <p>RANDSTAD, ר, HUMAN FORWARD and SHAPING THE WORLD OF WORK are registered trademarks of © Randstad N.V. 2023</p>
              
              <div className="bg-white/5 p-6 rounded-lg space-y-4">
                <p><span className="text-white font-medium">Security Advice:</span> Randstad India does not charge any fee at any stage of its recruitment process from the candidate nor allows their employees to collect any fees from any candidates. <a href="#" className="text-blue-400 underline">Click here to know more</a></p>
                <p><span className="text-white font-medium">EEO Statement:</span> Randstad India is an Equal Employment Opportunity Employer. All qualified applicants receive consideration for employment without regard to race, color, religion, sex, sexual orientation, gender identity or expression, appearance, national origin, age, marital status, veteran status, or disability status, or any other characteristics. Our global mission is to become the world's most equitable and specialized talent company, and we actively embrace diversity and inclusion as the cornerstones of our success. To read more of Randstad India's work in the space of equity, diversity and inclusion please <a href="#" className="text-blue-400 underline">click here</a></p>
              </div>

              <div className="flex flex-wrap gap-x-8 gap-y-4 pt-8">
                {['terms & conditions', 'cookies', 'misconduct reporting procedure', 'accessibility', 'be aware', 'sitemap', 'privacy statement'].map((link) => (
                  <a key={link} href="#" className="hover:text-white transition-colors">{link}</a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </footer>

      {/* Floating Cookie Button (as seen in screenshot) */}
      <button className="fixed bottom-6 left-6 w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white shadow-lg hover:bg-blue-700 transition-colors z-50">
        <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z" />
        </svg>
      </button>

      {/* Feedback Button (as seen in screenshot) */}
      <button className="fixed right-0 top-1/2 -translate-y-1/2 bg-blue-500 text-white py-3 px-1 rounded-l-md text-xs font-bold [writing-mode:vertical-rl] rotate-180 z-50">
        Feedback
      </button>
    </div>
  );
}
