import { Search, MapPin, ArrowRight, ChevronRight } from "lucide-react";
import { motion } from "motion/react";
import { Link } from "react-router-dom";

export function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="bg-[#00214c] text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-6xl md:text-7xl font-light mb-12 tracking-tight"
          >
            partner for talent.
          </motion.h1>
          
          <div className="grid grid-cols-1 md:grid-cols-12 gap-1 items-end">
            <div className="md:col-span-4">
              <label className="block text-xs font-medium mb-2 uppercase tracking-wider opacity-80">search for</label>
              <div className="relative">
                <input 
                  type="text" 
                  placeholder="job title or keyword" 
                  className="w-full bg-white text-gray-900 py-4 px-6 rounded-l-sm focus:outline-none h-16"
                />
              </div>
            </div>
            <div className="md:col-span-4">
              <label className="block text-xs font-medium mb-2 uppercase tracking-wider opacity-80">where?</label>
              <div className="relative">
                <input 
                  type="text" 
                  placeholder="location or postcode" 
                  className="w-full bg-white text-gray-900 py-4 px-6 focus:outline-none h-16 border-l border-gray-200"
                />
              </div>
            </div>
            <div className="md:col-span-2">
              <label className="block text-xs font-medium mb-2 uppercase tracking-wider opacity-80">range</label>
              <select className="w-full bg-white text-gray-900 py-4 px-6 focus:outline-none h-16 border-l border-gray-200 appearance-none">
                <option>10 km</option>
                <option>25 km</option>
                <option>50 km</option>
                <option>100 km</option>
              </select>
            </div>
            <div className="md:col-span-2">
              <button className="w-full bg-[#2175e3] hover:bg-[#1a5eb8] text-white font-medium h-16 transition-colors rounded-r-sm">
                search 1480 jobs
              </button>
            </div>
          </div>
          
          <div className="mt-6 flex items-center gap-2 text-sm opacity-90 cursor-pointer hover:opacity-100">
            <MapPin size={16} className="text-[#2175e3]" />
            <span className="underline underline-offset-4">use current location</span>
          </div>
        </div>
      </section>

      {/* Quick Links Section */}
      <section className="bg-[#f5f5f0] py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
            <div>
              <h2 className="text-2xl font-light leading-snug mb-8">
                are you a job seeker? <br />
                choose the appropriate <br />
                option based on your <br />
                needs.
              </h2>
            </div>
            <div className="md:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-12">
              <Link to="/submit-cv" className="group border-b border-gray-300 pb-8 flex justify-between items-center">
                <span className="text-xl font-light group-hover:text-[#2175e3] transition-colors">submit your resume</span>
                <ArrowRight className="text-gray-400 group-hover:text-[#2175e3] transition-all transform group-hover:translate-x-1" />
              </Link>
              <Link to="/refer-friend" className="group border-b border-gray-300 pb-8 flex justify-between items-center">
                <span className="text-xl font-light group-hover:text-[#2175e3] transition-colors">refer a friend</span>
                <ArrowRight className="text-gray-400 group-hover:text-[#2175e3] transition-all transform group-hover:translate-x-1" />
              </Link>
              <Link to="/jobs/trending" className="group border-b border-gray-300 pb-8 flex justify-between items-center">
                <span className="text-xl font-light group-hover:text-[#2175e3] transition-colors">apply for trending jobs</span>
                <ArrowRight className="text-gray-400 group-hover:text-[#2175e3] transition-all transform group-hover:translate-x-1" />
              </Link>
              <Link to="/jobs" className="group border-b border-gray-300 pb-8 flex justify-between items-center">
                <span className="text-xl font-light group-hover:text-[#2175e3] transition-colors">view all current job openings</span>
                <ArrowRight className="text-gray-400 group-hover:text-[#2175e3] transition-all transform group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Specialized Partner Section */}
      <section className="bg-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-light mb-8">your specialised and equitable work partner.</h2>
          <p className="max-w-4xl text-lg text-gray-600 font-light leading-relaxed mb-16">
            We focus on connecting with talent, because we understand the importance of a job in a person's life. Focusing on the relationship with our talent will also contribute to our clients' success. Matching the right talent to the right job will in turn help both talent and clients achieve their goals and ambitions.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="relative group overflow-hidden rounded-lg aspect-[16/10]">
              <img 
                src="https://picsum.photos/seed/talent/800/500" 
                alt="For job seekers" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#00214c]/80 to-transparent"></div>
              <div className="absolute bottom-12 left-12">
                <h3 className="text-3xl font-light text-white mb-4">for job seekers</h3>
                <div className="w-16 h-16 rounded-full border border-white/30 flex items-center justify-center group-hover:bg-[#2175e3] group-hover:border-[#2175e3] transition-all">
                  <div className="w-8 h-8 rounded-full border-2 border-[#2175e3] flex items-center justify-center group-hover:border-white">
                    <div className="w-2 h-2 bg-[#2175e3] rounded-full group-hover:bg-white"></div>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative group overflow-hidden rounded-lg aspect-[16/10]">
              <img 
                src="https://picsum.photos/seed/clients/800/500" 
                alt="For clients" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#00214c]/80 to-transparent"></div>
              <div className="absolute bottom-12 left-12">
                <h3 className="text-3xl font-light text-white mb-4">for clients</h3>
                <div className="w-16 h-16 rounded-full border border-white/30 flex items-center justify-center group-hover:bg-[#2175e3] group-hover:border-[#2175e3] transition-all">
                   <div className="w-8 h-8 rounded-full border-2 border-[#2175e3] flex items-center justify-center group-hover:border-white">
                    <div className="w-2 h-2 bg-[#2175e3] rounded-full group-hover:bg-white"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tailored Solutions Section */}
      <section className="bg-white py-24 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-light mb-16">discover how we deliver tailored talent solutions.</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              { title: "operational talent solutions", img: "https://picsum.photos/seed/op/400/600" },
              { title: "professional talent solutions", img: "https://picsum.photos/seed/prof/400/600" },
              { title: "global talent solutions", img: "https://picsum.photos/seed/global/400/600" },
              { title: "digital talent solutions", img: "https://picsum.photos/seed/digital/400/600" }
            ].map((item, idx) => (
              <div key={idx} className="relative group overflow-hidden rounded-lg aspect-[3/4]">
                <img 
                  src={item.img} 
                  alt={item.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#00214c]/90 via-transparent to-transparent"></div>
                <div className="absolute bottom-8 left-8 right-8">
                  <h3 className="text-xl font-light text-white leading-tight">{item.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What's New Section */}
      <section className="bg-white py-24 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-light mb-16">what's new.</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              { title: "access our latest randstad india workmonitor 2024 report", img: "https://picsum.photos/seed/news1/400/600" },
              { title: "case studies/impact stories", img: "https://picsum.photos/seed/news2/400/600" },
              { title: "blogs", img: "https://picsum.photos/seed/news3/400/600" },
              { title: "FAQs", img: "https://picsum.photos/seed/news4/400/600" }
            ].map((item, idx) => (
              <div key={idx} className="relative group overflow-hidden rounded-lg aspect-[3/4]">
                <img 
                  src={item.img} 
                  alt={item.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#00214c]/90 via-transparent to-transparent"></div>
                <div className="absolute bottom-8 left-8 right-8">
                  <h3 className="text-xl font-light text-white leading-tight">{item.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reach Out Section */}
      <section className="bg-[#00214c] py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-12">
            <div>
              <h2 className="text-5xl font-light text-white mb-4">reach out to us</h2>
              <p className="text-5xl font-light text-[#2175e3]">do you have a request? feel free to contact us.</p>
            </div>
            <Link to="/contact" className="px-12 py-4 border border-white text-white hover:bg-white hover:text-[#00214c] transition-all text-lg font-light">
              contact us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
