import { motion } from "motion/react";

import { 
  Search, 
  User, 
  ChevronDown, 
  Linkedin, 
  Twitter, 
  Facebook, 
  Youtube, 
  Instagram,
  ChevronRight,
  Phone
} from "lucide-react";

const NavItem = ({ label, hasDropdown = false }: { label: string; hasDropdown?: boolean }) => (
  <div className="flex items-center gap-1 cursor-pointer hover:text-blue-400 transition-colors">
    <span className="text-sm font-medium">{label}</span>
    {hasDropdown && <ChevronDown size={14} />}
  </div>
);

const ArticleCard = ({ date, title, imageId }: { date: string; title: string; imageId: number }) => (
  <motion.div 
    whileHover={{ y: -5 }}
    className="flex flex-col gap-4 cursor-pointer group"
  >
    <div className="overflow-hidden rounded-lg aspect-[16/10]">
      <img 
        src={`https://picsum.photos/seed/${imageId}/800/500`} 
        alt={title}
        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        referrerPolicy="no-referrer"
      />
    </div>
    <div className="flex flex-col gap-2">
      <span className="text-xs text-gray-500 font-medium">{date}</span>
      <h3 className="text-xl font-semibold leading-tight group-hover:underline decoration-2 underline-offset-4">
        {title}
      </h3>
    </div>
  </motion.div>
);

const AccordionItem = ({ title }: { title: string }) => (
  <div className="border-b border-white/20 py-6 flex justify-between items-center cursor-pointer group">
    <span className="text-lg md:text-xl font-light">{title}</span>
    <ChevronDown className="text-white/60 group-hover:text-white transition-colors" />
  </div>
);

export default function ForTalentInterviewTips() {
  return (
    <div className="min-h-screen bg-white font-sans text-[#141414]">
      {/* Top Bar */}
      <div className="bg-white border-b border-gray-100 px-6 py-2 flex justify-end items-center gap-6 text-xs font-medium text-gray-600">
        <a href="#" className="hover:underline">contact us</a>
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-1 cursor-pointer hover:underline">
            <Search size={14} />
            <span>0</span>
          </div>
          <div className="flex items-center gap-1 cursor-pointer hover:underline">
            <User size={14} />
            <span>my randstad</span>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      

      {/* Breadcrumbs */}
      <div className="px-6 py-4 bg-[#0a1432] text-white/60 text-xs flex gap-2 items-center">
        <a href="#" className="hover:underline">home</a>
        <ChevronRight size={10} />
        <a href="#" className="hover:underline">career advice</a>
        <ChevronRight size={10} />
        <span className="text-white">interview tips</span>
      </div>

      {/* Hero Section */}
      <section className="bg-[#0a1432] text-white px-6 py-20 md:py-32 overflow-hidden relative">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col gap-4"
          >
            <span className="text-xl md:text-2xl font-light opacity-80">career advice.</span>
            <h1 className="text-5xl md:text-7xl font-light leading-tight">
              learn more about: <br />
              <span className="flex items-center gap-4">
                job interview <ChevronDown className="w-10 h-10 md:w-16 md:h-16 text-blue-400" />
              </span>
            </h1>
            <p className="text-lg opacity-80 mt-4">Discover how to improve your career.</p>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative flex justify-center"
          >
            <div className="flex gap-4 items-end">
              <div className="w-20 h-40 bg-blue-500 rounded-t-full opacity-40"></div>
              <div className="w-20 h-52 bg-blue-400 rounded-t-full opacity-60"></div>
              <div className="w-20 h-32 bg-blue-300 rounded-t-full opacity-80"></div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Ace Your Interview Section */}
      <section className="px-6 py-24 bg-white">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-12">
          <h2 className="text-4xl md:text-6xl font-light max-w-2xl leading-tight">
            ace your interview! explore top common questions and expert answers wow!
          </h2>
          <button className="px-8 py-4 border border-[#2175d9] text-[#2175d9] rounded-sm hover:bg-[#2175d9] hover:text-white transition-all duration-300 font-medium whitespace-nowrap">
            know more
          </button>
        </div>
      </section>

      {/* Interview Tips Section */}
      <section className="bg-[#0a1432] text-white px-6 py-24">
        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-12">
          <div className="md:col-span-1">
            <h2 className="text-3xl font-light">interview tips</h2>
          </div>
          <div className="md:col-span-2 flex flex-col">
            <AccordionItem title="3 quick ways on how to be confident during an interview" />
            <AccordionItem title="3 R's to make an impression during a job interview" />
            <AccordionItem title="5 last minute interview tips to perform better" />
            <AccordionItem title="your guide to answering the most common interview questions" />
            <AccordionItem title="ask these 2 questions at the end of a job interview" />
          </div>
        </div>
      </section>

      {/* Ready for Next Opportunity Section */}
      <section className="px-6 py-24 bg-white">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-12">
          <h2 className="text-4xl md:text-6xl font-light max-w-3xl leading-tight">
            ready for your next opportunity? explore available jobs and apply now!
          </h2>
          <button className="px-8 py-4 border border-[#2175d9] text-[#2175d9] rounded-sm hover:bg-[#2175d9] hover:text-white transition-all duration-300 font-medium whitespace-nowrap">
            explore now
          </button>
        </div>
      </section>

      {/* Latest Updates Section */}
      <section className="bg-[#f5f2ed] px-6 py-24">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-end mb-12">
            <h2 className="text-4xl font-light">latest updates</h2>
            <a href="#" className="text-lg hover:underline decoration-1 underline-offset-4">see all articles</a>
          </div>
          
          <div className="grid md:grid-cols-3 gap-x-8 gap-y-16">
            <ArticleCard 
              date="17 January 2023" 
              title="how to stand out in an interview." 
              imageId={101}
            />
            <ArticleCard 
              date="17 January 2023" 
              title="5 tips to ace your video interview." 
              imageId={102}
            />
            <ArticleCard 
              date="12 January 2023" 
              title="prepare answers for tough interview questions." 
              imageId={103}
            />
            <ArticleCard 
              date="11 January 2019" 
              title="5 tips to face an exit interview." 
              imageId={104}
            />
            <ArticleCard 
              date="11 January 2019" 
              title="top 9 job interview questions you should be prepared to answer." 
              imageId={105}
            />
            <ArticleCard 
              date="28 November 2018" 
              title="4 ways to deal with a counter offer." 
              imageId={106}
            />
          </div>
        </div>
      </section>

      {/* Get in Touch Section */}
      <section className="px-6 py-24 bg-white">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div className="flex flex-col gap-8 items-start">
            <h2 className="text-5xl md:text-7xl font-light leading-tight">
              get in touch or explore available jobs.
            </h2>
            <button className="px-8 py-4 border border-[#2175d9] text-[#2175d9] rounded-sm hover:bg-[#2175d9] hover:text-white transition-all duration-300 font-medium">
              contact us
            </button>
          </div>
          <div className="flex justify-center md:justify-end">
            <div className="relative w-64 h-[400px] border-4 border-blue-500 rounded-[40px] flex items-center justify-center">
              <div className="absolute -top-10 -right-10 flex flex-col gap-2">
                <div className="w-20 h-2 bg-blue-400 rounded-full opacity-20"></div>
                <div className="w-24 h-2 bg-blue-400 rounded-full opacity-40"></div>
                <div className="w-28 h-2 bg-blue-400 rounded-full opacity-60"></div>
              </div>
              <Phone size={80} className="text-blue-500" />
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      

      {/* Floating Cookie Icon */}
      <div className="fixed bottom-6 left-6 w-12 h-12 bg-[#2175d9] rounded-full flex items-center justify-center text-white shadow-lg cursor-pointer hover:scale-110 transition-transform">
        <div className="w-6 h-6 border-2 border-white rounded-full relative overflow-hidden">
          <div className="absolute top-1 left-1 w-1 h-1 bg-white rounded-full"></div>
          <div className="absolute top-3 left-2 w-1 h-1 bg-white rounded-full"></div>
          <div className="absolute top-2 left-4 w-1 h-1 bg-white rounded-full"></div>
          <div className="absolute top-4 left-4 w-1 h-1 bg-white rounded-full"></div>
        </div>
      </div>

      {/* Floating Feedback Tab */}
      <div className="fixed right-0 top-1/2 -translate-y-1/2 bg-[#2175d9] text-white px-2 py-6 rounded-l-md cursor-pointer hover:pr-4 transition-all" style={{ writingMode: 'vertical-rl' }}>
        <span className="text-xs font-medium tracking-widest uppercase">Feedback</span>
      </div>
    </div>
  );
}
