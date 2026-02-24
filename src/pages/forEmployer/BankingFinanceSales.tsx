import React from "react";
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
  Instagram,
  Phone,
  MapPin,
  Mail
} from 'lucide-react';

const RandstadPage: React.FC = () => {
  return (
    <div className="font-sans text-[#141414] bg-white selection:bg-blue-100">
      {/* Top Bar */}
      <div className="border-b border-gray-100 py-2 px-4 md:px-12 flex justify-end">
        <a href="#" className="text-xs text-blue-600 hover:underline">contact us</a>
      </div>

      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100 px-4 md:px-12 py-4 flex items-center justify-between">
        <div className="flex items-center gap-8">
          {/* Logo Placeholder */}
          <div className="flex items-center gap-1">
            <div className="w-8 h-4 bg-blue-500 rounded-sm"></div>
            <span className="text-2xl font-bold tracking-tighter text-blue-600">randstad</span>
          </div>
          
          <nav className="hidden lg:flex items-center gap-6">
            <button className="flex items-center gap-1 text-sm font-medium hover:text-blue-600 transition-colors">
              find a job <ChevronDown size={14} />
            </button>
            <button className="flex items-center gap-1 text-sm font-medium hover:text-blue-600 transition-colors">
              for talent <ChevronDown size={14} />
            </button>
            <button className="flex items-center gap-1 text-sm font-medium hover:text-blue-600 transition-colors">
              for employer <ChevronDown size={14} />
            </button>
            <button className="flex items-center gap-1 text-sm font-medium hover:text-blue-600 transition-colors">
              resources <ChevronDown size={14} />
            </button>
            <button className="flex items-center gap-1 text-sm font-medium hover:text-blue-600 transition-colors">
              about us <ChevronDown size={14} />
            </button>
          </nav>
        </div>

        <div className="flex items-center gap-4">
          <button className="p-2 hover:bg-gray-100 rounded-full transition-colors">
            <Heart size={20} className="text-gray-600" />
          </button>
          <button className="flex items-center gap-2 px-3 py-1.5 hover:bg-gray-100 rounded-full transition-colors">
            <User size={20} className="text-gray-600" />
            <span className="text-sm font-medium hidden sm:inline">my randstad</span>
          </button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-[#0a1a3a] text-white py-20 px-4 md:px-12 overflow-hidden relative">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <nav className="flex items-center gap-2 text-xs text-gray-400 mb-8">
              <span>home</span>
              <span>&gt;</span>
              <span>professional services</span>
              <span>&gt;</span>
              <span className="text-white">banking finance sales</span>
            </nav>
            <h1 className="text-5xl md:text-7xl font-light leading-tight mb-8 tracking-tight">
              a partner for talent in <br />
              <span className="font-normal">banking finance sales.</span>
            </h1>
            <p className="text-lg text-gray-300 max-w-xl mb-10 leading-relaxed">
              Find in-demand, professional talent — when you need it. By offering a 
              comprehensive set of solutions, backed by our innovative 
              technologies and global footprint, with deep insights into market 
              dynamics, a vast pool of pre-screened candidates, and specialised 
              recruiting and talent management processes, we'll help you fill 
              crucial roles to bolster growth and agility.
            </p>
            <button className="px-8 py-3 border border-white rounded-md hover:bg-white hover:text-[#0a1a3a] transition-all font-medium">
              get in touch
            </button>
          </motion.div>

          <div className="relative h-[400px] hidden lg:block">
            {/* Abstract Graphics */}
            <motion.div 
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="absolute right-0 top-1/2 -translate-y-1/2 flex items-center gap-4"
            >
              <div className="w-12 h-12 rounded-full bg-purple-600"></div>
              <div className="w-24 h-24 rounded-full bg-purple-500"></div>
              <div className="w-48 h-48 rounded-full border-4 border-purple-400 flex items-center justify-center">
                 <div className="w-40 h-40 rounded-full bg-purple-700/30"></div>
              </div>
              <div className="w-32 h-32 rounded-full bg-purple-900"></div>
            </motion.div>
            <div className="absolute left-0 top-1/2 w-full h-[2px] bg-gray-500/30 -z-10"></div>
          </div>
        </div>
      </section>

      {/* Overcoming the Competition */}
      <section className="py-20 px-4 md:px-12">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <div className="order-2 md:order-1">
            <h2 className="text-4xl md:text-5xl font-light mb-8 tracking-tight">
              overcoming the <br />
              <span className="font-normal">competition.</span>
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              In a rapidly growing financial sector, attracting and 
              retaining top banking finance sales talent is crucial for 
              achieving sales targets, expanding customer base, and 
              driving revenue growth. Randstad leverages our 
              extensive network and deep understanding of the Indian 
              banking landscape to source the professionals who will 
              exceed your sales goals and deliver exceptional 
              customer experiences.
            </p>
          </div>
          <div className="order-1 md:order-2">
            <img 
              src="https://picsum.photos/seed/office1/800/600" 
              alt="Professional at work" 
              className="rounded-lg shadow-xl w-full object-cover h-[400px]"
              referrerPolicy="no-referrer"
            />
          </div>
        </div>
      </section>

      {/* Understanding Your Needs */}
      <section className="bg-[#0a1a3a] text-white py-20 px-4 md:px-12">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <div>
            <img 
              src="https://picsum.photos/seed/office2/800/600" 
              alt="Office environment" 
              className="rounded-lg shadow-xl w-full object-cover h-[400px]"
              referrerPolicy="no-referrer"
            />
          </div>
          <div>
            <h2 className="text-4xl md:text-5xl font-light mb-8 tracking-tight">
              understanding <br />
              <span className="font-normal">your needs.</span>
            </h2>
            <p className="text-lg text-gray-300 leading-relaxed">
              Every banking institution has unique sales objectives and 
              target customer segments. We take a personalised 
              approach to understand your specific needs, whether it's 
              expanding your retail banking sales force, building a 
              team of corporate relationship managers, or 
              strengthening your digital sales channels. Our 
              specialised recruiters are well-versed in banking sales 
              strategies and will identify the individuals who perfectly 
              align with your sales goals and company culture.
            </p>
          </div>
        </div>
      </section>

      {/* More Than Just Recruitment */}
      <section className="py-20 px-4 md:px-12">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-light mb-8 tracking-tight">
              more than just <br />
              <span className="font-normal">recruitment.</span>
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              We offer comprehensive workforce solutions tailored to 
              the banking sales sector in India. We understand the 
              importance of sales training, performance management, 
              and building a high-performing sales culture. Our 
              services extend beyond simple placement, 
              encompassing workforce management, on-site support, 
              and consulting to optimise your sales operations and 
              ensure your team is equipped with the skills and 
              resources needed to achieve success.
            </p>
          </div>
          <div>
            <img 
              src="https://picsum.photos/seed/team/800/600" 
              alt="Team collaboration" 
              className="rounded-lg shadow-xl w-full object-cover h-[400px]"
              referrerPolicy="no-referrer"
            />
          </div>
        </div>
      </section>

      {/* Contact Banner */}
      <section className="bg-blue-600 text-white py-12 px-4 md:px-12">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
          <h2 className="text-4xl md:text-5xl font-light tracking-tight">
            contact us to start a conversation <br />
            <span className="font-normal">about your talent needs.</span>
          </h2>
          <button className="px-8 py-3 border border-white rounded-md hover:bg-white hover:text-blue-600 transition-all font-medium whitespace-nowrap">
            let's meet
          </button>
        </div>
      </section>

      {/* Unlock More Insights */}
      <section className="py-20 px-4 md:px-12 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-light mb-12 tracking-tight">
            unlock more <span className="font-normal">insights.</span>
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "the true cost of poor onboarding", img: "https://picsum.photos/seed/insight1/400/500" },
              { title: "the onboarding process, explained.", img: "https://picsum.photos/seed/insight2/400/500" },
              { title: "start calculating the costs of poor onboarding.", img: "https://picsum.photos/seed/insight3/400/500" },
              { title: "get your onboarding process under control.", img: "https://picsum.photos/seed/insight4/400/500" }
            ].map((card, i) => (
              <motion.div 
                key={i}
                whileHover={{ y: -10 }}
                className="relative group cursor-pointer overflow-hidden rounded-xl h-[400px]"
              >
                <img 
                  src={card.img} 
                  alt={card.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end p-6">
                  <h3 className="text-white text-xl font-medium leading-tight group-hover:underline">
                    {card.title}
                  </h3>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="bg-[#0a1a3a] text-white py-20 px-4 md:px-12">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <div className="relative">
             <div className="w-64 h-64 rounded-full border-4 border-purple-500/30 absolute -top-10 -left-10"></div>
             <img 
              src="https://picsum.photos/seed/typing/800/600" 
              alt="Typing on keyboard" 
              className="rounded-lg shadow-xl w-full object-cover h-[400px] relative z-10"
              referrerPolicy="no-referrer"
            />
          </div>
          <div>
            <h2 className="text-4xl md:text-5xl font-light mb-6 tracking-tight">
              workforce insights <br />
              <span className="font-normal">delivered to your inbox.</span>
            </h2>
            <p className="text-lg text-gray-300 mb-8 leading-relaxed">
              Want to reduce your turnover rate, improve your 
              company culture, or be inspired on improving 
              employability for young people? Sign up to the monthly 
              workforce insights newsletter and stay up to date with 
              the latest recruitment and labor market news, tips, 
              trends and reports for business leaders across the globe.
            </p>
            <button className="px-8 py-3 border border-white rounded-md hover:bg-white hover:text-[#0a1a3a] transition-all font-medium">
              subscribe
            </button>
          </div>
        </div>
      </section>

      {/* Submit Vacancy */}
      <section className="py-20 px-4 md:px-12 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-6xl font-light mb-10 tracking-tight">
            looking for the <span className="font-normal">right candidate?</span>
          </h2>
          <button className="px-8 py-3 border border-blue-600 text-blue-600 rounded-md hover:bg-blue-600 hover:text-white transition-all font-medium">
            submit a vacancy
          </button>
        </div>
      </section>

      {/* Why Partner With Us */}
      <section className="bg-[#0a1a3a] text-white py-20 px-4 md:px-12">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl md:text-6xl font-light mb-10 tracking-tight">
              why partner <span className="font-normal">with us?</span>
            </h2>
            <ul className="space-y-6">
              {['targeted search', 'fast onboarding', 'focus on diversity'].map((item, i) => (
                <li key={i} className="flex items-center gap-4 text-xl font-light">
                  <div className="w-2 h-2 rounded-full bg-blue-400"></div>
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="relative">
            {/* Abstract X Graphic */}
            <div className="relative w-full aspect-square max-w-[400px] mx-auto">
              <div className="absolute inset-0 bg-purple-600 rotate-45 rounded-xl opacity-80"></div>
              <div className="absolute inset-0 bg-purple-800 -rotate-45 rounded-xl opacity-60"></div>
              <img 
                src="https://picsum.photos/seed/partners/400/400" 
                alt="Partnership" 
                className="absolute inset-0 w-full h-full object-cover rounded-xl z-10 mix-blend-overlay"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Callback Section */}
      <section className="py-20 px-4 md:px-12 text-center bg-gray-50">
        <div className="max-w-3xl mx-auto">
          <div className="mb-8 flex justify-center">
            <div className="p-6 bg-blue-50 rounded-full">
              <Phone size={48} className="text-blue-600" />
            </div>
          </div>
          <h2 className="text-4xl md:text-6xl font-light mb-10 tracking-tight">
            want to know <span className="font-normal">more?</span>
          </h2>
          <button className="px-8 py-3 border border-blue-600 text-blue-600 rounded-md hover:bg-blue-600 hover:text-white transition-all font-medium">
            request a callback
          </button>
        </div>
      </section>

      {/* Branch Locator */}
      <section className="py-20 px-4 md:px-12">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl md:text-6xl font-light mb-6 tracking-tight">
              we'd love to <span className="font-normal">have you over.</span>
            </h2>
            <p className="text-xl text-gray-600 mb-10">find a branch close to you.</p>
            <div className="flex gap-2 max-w-md">
              <input 
                type="text" 
                placeholder="postcode / city" 
                className="flex-1 px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button className="p-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors">
                <ArrowRight size={24} />
              </button>
            </div>
          </div>
          <div className="flex justify-center">
            <div className="relative">
              <MapPin size={200} className="text-purple-600" strokeWidth={1} />
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-32 h-2 bg-purple-200 rounded-full blur-sm"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#0a1a3a] text-white pt-20 pb-10 px-4 md:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-12 mb-20">
            <div>
              <h4 className="text-lg font-bold mb-6">find a job</h4>
              <ul className="space-y-3 text-sm text-gray-400">
                <li><a href="#" className="hover:text-white">explore all jobs</a></li>
                <li><a href="#" className="hover:text-white">submit your cv</a></li>
                <li><a href="#" className="hover:text-white">join our team</a></li>
                <li><a href="#" className="hover:text-white">refer a friend</a></li>
              </ul>
              <h4 className="text-lg font-bold mt-10 mb-6">for talents</h4>
              <ul className="space-y-3 text-sm text-gray-400">
                <li><a href="#" className="hover:text-white">specialisms</a></li>
                <li><a href="#" className="hover:text-white">testimonials</a></li>
                <li><a href="#" className="hover:text-white">career advice</a></li>
                <li><a href="#" className="hover:text-white">beware of job scams</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-bold mb-6">for employers</h4>
              <ul className="space-y-3 text-sm text-gray-400">
                <li><a href="#" className="hover:text-white">submit a vacancy</a></li>
                <li><a href="#" className="hover:text-white">request a callback</a></li>
                <li><a href="#" className="hover:text-white">our services</a></li>
                <li><a href="#" className="hover:text-white">specialisms</a></li>
                <li><a href="#" className="hover:text-white">case studies</a></li>
                <li><a href="#" className="hover:text-white">testimonials</a></li>
              </ul>
              <h4 className="text-lg font-bold mt-10 mb-6">resources</h4>
              <ul className="space-y-3 text-sm text-gray-400">
                <li><a href="#" className="hover:text-white">case studies</a></li>
                <li><a href="#" className="hover:text-white">press room</a></li>
                <li><a href="#" className="hover:text-white">blogs</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-bold mb-6">workforce insights</h4>
              <ul className="space-y-3 text-sm text-gray-400">
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
              <h4 className="text-lg font-bold mb-6">jobs</h4>
              <ul className="space-y-3 text-sm text-gray-400">
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

          <div className="flex flex-col md:flex-row items-center justify-between gap-8 pt-10 border-t border-gray-800">
            <div className="flex gap-6">
              <Linkedin size={24} className="text-gray-400 hover:text-white cursor-pointer" />
              <Twitter size={24} className="text-gray-400 hover:text-white cursor-pointer" />
              <Facebook size={24} className="text-gray-400 hover:text-white cursor-pointer" />
              <Youtube size={24} className="text-gray-400 hover:text-white cursor-pointer" />
              <Instagram size={24} className="text-gray-400 hover:text-white cursor-pointer" />
            </div>
            <div className="text-xs text-gray-500 text-center md:text-right">
              <p className="mb-2">registered office: Randstad India Private Limited, CIN U74210TN1992PTC023097,/Randstad House, Old No. 5 & 5A, New No. 9, Pycrofts Garden Road, Nungambakkam, Chennai, TN - 600 006</p>
              <p>RANDSTAD, HUMAN FORWARD and SHAPING THE WORLD OF WORK are registered trademarks of © Randstad N.V.2023</p>
            </div>
          </div>

          <div className="mt-12 p-6 bg-black/20 rounded-lg text-xs text-gray-400 leading-relaxed">
            <p className="mb-4">
              <span className="font-bold text-white">Security Advice:</span> Randstad India does not charge any fee at any stage of its recruitment process from the candidate nor allows their employees to collect any fees from any candidates. <a href="#" className="text-blue-400 hover:underline">Click here to know more</a>
            </p>
            <p>
              <span className="font-bold text-white">EEO Statement:</span> Randstad India is an Equal Employment Opportunity Employer. All qualified applicants receive consideration for employment without regard to race, color, religion, sex, sexual orientation, gender identity or expression, appearance, national origin, age, marital status, veteran status, or disability status, or any other characteristics. Our global mission is to become the world's most equitable and specialized talent company, and we actively embrace diversity and inclusion as the cornerstones of our success. To read more of Randstad India's work in the space of equity, diversity and inclusion please <a href="#" className="text-blue-400 hover:underline">click here</a>
            </p>
          </div>

          <div className="mt-10 flex flex-wrap justify-center md:justify-start gap-x-8 gap-y-4 text-xs text-gray-500">
            <a href="#" className="hover:text-white">terms & conditions</a>
            <a href="#" className="hover:text-white">cookies</a>
            <a href="#" className="hover:text-white">misconduct reporting procedure</a>
            <a href="#" className="hover:text-white">accessibility</a>
            <a href="#" className="hover:text-white">be aware</a>
            <a href="#" className="hover:text-white">sitemap</a>
            <a href="#" className="hover:text-white">privacy statement</a>
          </div>
        </div>
      </footer>

      {/* Floating Feedback Button */}
      <div className="fixed right-0 top-1/2 -translate-y-1/2 z-50">
        <button className="bg-blue-500 text-white px-2 py-6 rounded-l-md text-xs font-bold [writing-mode:vertical-rl] rotate-180 flex items-center gap-2 hover:bg-blue-600 transition-colors">
          Feedback
        </button>
      </div>

      {/* Cookie Icon */}
      <div className="fixed bottom-4 left-4 z-50">
        <button className="w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center shadow-lg hover:bg-blue-700 transition-colors">
          <div className="w-6 h-6 border-2 border-white rounded-full border-dashed"></div>
        </button>
      </div>
    </div>
  );
};

export default RandstadPage;
