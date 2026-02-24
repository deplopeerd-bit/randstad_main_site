import React from "react";
import { ArrowRight, ChevronDown, Facebook, Heart, Instagram, Linkedin, MapPin, Search, Twitter, User, Youtube } from "lucide-react";
import { motion } from "motion/react";

const RandstadPage: React.FC = () => {
  return (
    <div className="font-sans text-[#0a192f] bg-white selection:bg-purple-200">
      {/* Top Navigation Bar */}
      <nav className="fixed top-0 left-0 right-0 bg-white z-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <div className="flex-shrink-0 flex items-center">
              <div className="flex items-center space-x-1">
                <div className="w-8 h-8 flex flex-col justify-center">
                  <div className="h-1 w-6 bg-[#2175d9] rounded-full mb-1"></div>
                  <div className="h-1 w-8 bg-[#2175d9] rounded-full"></div>
                </div>
                <span className="text-2xl font-bold tracking-tight text-[#0a192f]">randstad</span>
              </div>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              <div className="group relative">
                <button className="flex items-center text-sm font-medium hover:text-[#2175d9] transition-colors">
                  find a job <ChevronDown className="ml-1 w-4 h-4" />
                </button>
              </div>
              <div className="group relative">
                <button className="flex items-center text-sm font-medium hover:text-[#2175d9] transition-colors">
                  for talent <ChevronDown className="ml-1 w-4 h-4" />
                </button>
              </div>
              <div className="group relative">
                <button className="flex items-center text-sm font-medium hover:text-[#2175d9] transition-colors">
                  for employer <ChevronDown className="ml-1 w-4 h-4" />
                </button>
              </div>
              <div className="group relative">
                <button className="flex items-center text-sm font-medium hover:text-[#2175d9] transition-colors">
                  resources <ChevronDown className="ml-1 w-4 h-4" />
                </button>
              </div>
              <div className="group relative">
                <button className="flex items-center text-sm font-medium hover:text-[#2175d9] transition-colors">
                  about us <ChevronDown className="ml-1 w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Right Side Icons */}
            <div className="flex items-center space-x-6">
              <button className="text-gray-500 hover:text-[#2175d9] transition-colors">
                <Search className="w-5 h-5" />
              </button>
              <div className="flex items-center space-x-1 text-gray-500 hover:text-[#2175d9] transition-colors cursor-pointer">
                <Heart className="w-5 h-5" />
                <span className="text-sm font-medium">0</span>
              </div>
              <button className="flex items-center space-x-2 text-gray-500 hover:text-[#2175d9] transition-colors">
                <User className="w-5 h-5" />
                <span className="text-sm font-medium">my randstad</span>
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-[#0a192f] text-white overflow-hidden relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <nav className="flex mb-8 text-xs text-gray-400 space-x-2">
                <span className="hover:text-white cursor-pointer">home</span>
                <span>&gt;</span>
                <span className="hover:text-white cursor-pointer">job seekers</span>
                <span>&gt;</span>
                <span className="hover:text-white cursor-pointer">areas of expertise</span>
                <span>&gt;</span>
                <span className="text-white">finance & accounting</span>
              </nav>
              <h1 className="text-5xl md:text-7xl font-light leading-tight mb-8">
                find your next finance & accounting role.
              </h1>
              <p className="text-lg text-gray-300 mb-10 max-w-lg leading-relaxed">
                Find the right job, love what you do, and develop your career. With access to a wide range of roles with top employers, a global community of professional peers, and specialised training and support, we'll be your guiding partner and help you build a rewarding career.
              </p>
              <div className="flex flex-wrap gap-4">
                <button className="px-8 py-4 border border-white rounded-md hover:bg-white hover:text-[#0a192f] transition-all duration-300 font-medium">
                  explore available jobs
                </button>
                <button className="px-8 py-4 border border-white rounded-md hover:bg-white hover:text-[#0a192f] transition-all duration-300 font-medium">
                  submit your resume
                </button>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="relative hidden lg:block"
            >
              <div className="relative w-full aspect-square flex items-center justify-center">
                {/* Decorative Circles */}
                <div className="absolute w-64 h-64 rounded-full border-8 border-purple-600 opacity-80 -right-10"></div>
                <div className="absolute w-48 h-48 rounded-full bg-purple-500 opacity-60 left-10 bottom-10"></div>
                <div className="absolute w-32 h-32 rounded-full bg-purple-400 opacity-40 right-20 top-20"></div>
                <div className="absolute w-16 h-16 rounded-full bg-purple-300 opacity-20 left-40 top-40"></div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* What We Do Section */}
      <section className="py-24 bg-[#f9f8f4]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1">
              <h2 className="text-4xl md:text-6xl font-light mb-8">what we do.</h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                In the world of numbers, your meticulous analysis and financial acumen can shape the future of businesses. Our consultants know this; they are experts within their specialisation and really understand your needs and preferences. This, combined with our wide range of finance & accounting job opportunities in the best companies in the market, provides you the guarantee that there are always jobs that are a perfect match for you.
              </p>
            </div>
            <div className="order-1 lg:order-2">
              <img 
                src="https://picsum.photos/seed/finance1/800/600" 
                alt="Professional in finance" 
                className="rounded-lg shadow-xl w-full object-cover h-[400px]"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
        </div>
      </section>

      {/* What We Offer You Section */}
      <section className="py-24 bg-[#0a192f] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <img 
                src="https://picsum.photos/seed/finance2/800/600" 
                alt="Team working" 
                className="rounded-lg shadow-xl w-full object-cover h-[400px]"
                referrerPolicy="no-referrer"
              />
            </div>
            <div>
              <h2 className="text-4xl md:text-6xl font-light mb-8">what we offer you.</h2>
              <p className="text-lg text-gray-300 leading-relaxed">
                We provide you with a wonderful experience as we will be your guiding partner throughout every stage of your finance & accounting career. With timely and honest feedback, we aim to build a lasting relationship, even during the stages you don't work for us. By becoming a member of our lively communities, you will have the opportunity to develop your skills and build valuable relationships and networks within your industry.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Learn More Section */}
      <section className="py-24 bg-[#0a192f] text-white border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl md:text-6xl font-light mb-8">learn more about job roles in accounting.</h2>
              <p className="text-lg text-gray-300 leading-relaxed mb-10">
                Our job profiles have been created to familiarise you with the responsibilities and day-to-day activities of a number of key job roles, so you can make the right decision before applying for a job. Start exploring qualifications, responsibilities, pay rates and more in each job.
              </p>
              <button className="px-10 py-4 border border-white rounded-md hover:bg-white hover:text-[#0a192f] transition-all duration-300 font-medium">
                learn more
              </button>
            </div>
            <div>
              <img 
                src="https://picsum.photos/seed/finance3/800/600" 
                alt="Job roles" 
                className="rounded-lg shadow-xl w-full object-cover h-[400px]"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Latest Jobs Section */}
      <section className="py-24 bg-[#f9f8f4]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-end mb-12">
            <h2 className="text-4xl md:text-5xl font-light">our latest jobs in finance & accounting.</h2>
            <button className="text-[#0a192f] font-medium flex items-center hover:underline underline-offset-4">
              see all jobs <ArrowRight className="ml-2 w-4 h-4" />
            </button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
              <div key={i} className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow border border-gray-100 flex flex-col h-full">
                <div className="flex justify-between items-start mb-6">
                  <h3 className="text-xl font-medium text-[#2175d9] hover:underline cursor-pointer">account analyst</h3>
                  <Heart className="w-5 h-5 text-gray-400 hover:text-red-500 cursor-pointer" />
                </div>
                <div className="space-y-3 mb-8 flex-grow">
                  <div className="flex items-center text-gray-600 text-sm">
                    <MapPin className="w-4 h-4 mr-2" />
                    {i === 1 ? 'powai iit, maharashtra' : i === 2 ? 'mumbai, maharashtra' : 'domlur, karnataka'}
                  </div>
                  <div className="flex items-center text-gray-600 text-sm">
                    <div className="w-4 h-4 mr-2 border border-gray-400 rounded-sm"></div>
                    temporary
                  </div>
                </div>
                <div className="flex justify-between items-center pt-6 border-t border-gray-100 text-xs text-gray-400">
                  <span>posted {i === 1 ? '17 february 2026' : i === 2 ? '12 february 2026' : '23 january 2026'}</span>
                  <div className="w-5 h-5 rounded-full border border-gray-300 flex items-center justify-center text-[10px] cursor-pointer hover:bg-gray-50">i</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Roles Recruiting For Section */}
      <section className="py-20 bg-[#0a192f] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
            <h2 className="text-3xl md:text-4xl font-light max-w-md">roles we're currently recruiting for.</h2>
            <div className="w-full md:w-2/3 border-b border-gray-700 pb-4 flex justify-between items-center cursor-pointer group">
              <span className="text-xl md:text-2xl font-light">see all roles in finance & accounting</span>
              <ChevronDown className="w-6 h-6 group-hover:translate-y-1 transition-transform" />
            </div>
          </div>
        </div>
      </section>

      {/* Latest Updates Section */}
      <section className="py-24 bg-[#f9f8f4]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-end mb-12">
            <h2 className="text-4xl md:text-5xl font-light">latest updates</h2>
            <button className="text-[#0a192f] font-medium flex items-center hover:underline underline-offset-4">
              see all articles <ArrowRight className="ml-2 w-4 h-4" />
            </button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { date: '02 August 2023', title: 'randstad with heart.', img: 'update1' },
              { date: '17 January 2023', title: 'how to stand out in an interview.', img: 'update2' },
              { date: '17 January 2023', title: '5 tips to ace your video interview.', img: 'update3' }
            ].map((article, i) => (
              <div key={i} className="group cursor-pointer">
                <div className="overflow-hidden rounded-lg mb-6">
                  <img 
                    src={`https://picsum.photos/seed/${article.img}/600/400`} 
                    alt={article.title} 
                    className="w-full aspect-[3/2] object-cover group-hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <span className="text-sm text-gray-500 mb-2 block">{article.date}</span>
                <h3 className="text-2xl font-light group-hover:text-[#2175d9] transition-colors">{article.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs Section */}
      <section className="py-24 bg-[#0a192f] text-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-sm uppercase tracking-widest text-gray-400 mb-4 block">FAQs</span>
              <h2 className="text-5xl md:text-7xl font-light mb-8 leading-tight">frequently asked questions and answers.</h2>
              <p className="text-lg text-gray-300 mb-10 leading-relaxed">
                We provide answers to the most common questions that applicants and companies ask us about working with Randstad.
              </p>
              <button className="px-10 py-4 border border-white rounded-md hover:bg-white hover:text-[#0a192f] transition-all duration-300 font-medium">
                learn more
              </button>
            </div>
            <div className="relative">
              {/* Speech Bubble Graphic */}
              <div className="relative w-full aspect-square flex items-center justify-center">
                <div className="absolute w-full h-full border-[16px] border-purple-600 rounded-[100px] opacity-80 rotate-12"></div>
                <div className="absolute w-3/4 h-3/4 border-[16px] border-purple-400 rounded-[100px] opacity-60 -rotate-12"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Find Branch Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-5xl md:text-7xl font-light mb-8 leading-tight">we'd love to have you over.</h2>
              <p className="text-xl text-gray-600 mb-12">find a branch close to you.</p>
              <div className="flex max-w-md">
                <input 
                  type="text" 
                  placeholder="postcode / city" 
                  className="flex-grow px-6 py-4 border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-[#2175d9] focus:border-transparent"
                />
                <button className="bg-[#2175d9] text-white px-6 py-4 rounded-r-md hover:bg-[#1a5fb1] transition-colors">
                  <ArrowRight className="w-6 h-6" />
                </button>
              </div>
            </div>
            <div className="flex justify-center">
              <div className="relative">
                <MapPin className="w-64 h-64 text-purple-600" />
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-48 h-4 bg-purple-600/20 rounded-full blur-xl"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#0a192f] text-white pt-20 pb-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-12 mb-20">
            <div>
              <h4 className="text-lg font-medium mb-8">find a job</h4>
              <ul className="space-y-4 text-sm text-gray-400">
                <li className="hover:text-white cursor-pointer">explore all jobs</li>
                <li className="hover:text-white cursor-pointer">submit your cv</li>
                <li className="hover:text-white cursor-pointer">join our team</li>
                <li className="hover:text-white cursor-pointer">refer a friend</li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-medium mb-8">for employers</h4>
              <ul className="space-y-4 text-sm text-gray-400">
                <li className="hover:text-white cursor-pointer">submit a vacancy</li>
                <li className="hover:text-white cursor-pointer">request a callback</li>
                <li className="hover:text-white cursor-pointer">our services</li>
                <li className="hover:text-white cursor-pointer">specialisms</li>
                <li className="hover:text-white cursor-pointer">case studies</li>
                <li className="hover:text-white cursor-pointer">testimonials</li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-medium mb-8">workforce insights</h4>
              <ul className="space-y-4 text-sm text-gray-400">
                <li className="hover:text-white cursor-pointer">talent insights reports</li>
                <li className="hover:text-white cursor-pointer">employer brand research reports</li>
                <li className="hover:text-white cursor-pointer">salary trends reports</li>
                <li className="hover:text-white cursor-pointer">ed&i reports</li>
                <li className="hover:text-white cursor-pointer">workmonitor reports</li>
                <li className="hover:text-white cursor-pointer">startup hiring trends</li>
                <li className="hover:text-white cursor-pointer">talent pulse surveys</li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-medium mb-8">jobs</h4>
              <ul className="space-y-4 text-sm text-gray-400">
                <li className="hover:text-white cursor-pointer">engineering jobs</li>
                <li className="hover:text-white cursor-pointer">cxo jobs</li>
                <li className="hover:text-white cursor-pointer">manufacturing jobs</li>
                <li className="hover:text-white cursor-pointer">supply chain & logistics jobs</li>
                <li className="hover:text-white cursor-pointer">education jobs</li>
                <li className="hover:text-white cursor-pointer">finance & accounting jobs</li>
                <li className="hover:text-white cursor-pointer">healthcare jobs</li>
                <li className="hover:text-white cursor-pointer">hr & admin support jobs</li>
                <li className="hover:text-white cursor-pointer">ites/gcc jobs</li>
                <li className="hover:text-white cursor-pointer">legal & compliance jobs</li>
                <li className="hover:text-white cursor-pointer">sales & marketing jobs</li>
              </ul>
            </div>
          </div>

          <div className="pt-10 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="flex space-x-6">
              <Linkedin className="w-6 h-6 text-gray-400 hover:text-white cursor-pointer" />
              <Twitter className="w-6 h-6 text-gray-400 hover:text-white cursor-pointer" />
              <Facebook className="w-6 h-6 text-gray-400 hover:text-white cursor-pointer" />
              <Youtube className="w-6 h-6 text-gray-400 hover:text-white cursor-pointer" />
              <Instagram className="w-6 h-6 text-gray-400 hover:text-white cursor-pointer" />
            </div>
            <div className="text-xs text-gray-500 text-center md:text-left">
              <p className="mb-2">registered office: Randstad India Private Limited, CIN U74210TN1992PTC023097,/Randstad House, Old No. 5 & 5A, New No. 9, Pycrofts Garden Road, Nungambakkam, Chennai, TN - 600 006</p>
              <p>RANDSTAD, HUMAN FORWARD and SHAPING THE WORLD OF WORK are registered trademarks of © Randstad N.V.2023</p>
            </div>
          </div>

          <div className="mt-12 text-sm text-gray-400 leading-relaxed max-w-5xl">
            <p className="mb-4">Security Advice: Randstad India does not charge any fee at any stage of its recruitment process from the candidate nor allows their employees to collect any fees from any candidates. <span className="underline cursor-pointer">Click here to know more</span></p>
            <p>EEO Statement: Randstad India is an Equal Employment Opportunity Employer. All qualified applicants receive consideration for employment without regard to race, color, religion, sex, sexual orientation, gender identity or expression, appearance, national origin, age, marital status, veteran status, or disability status, or any other characteristics. Our global mission is to become the world’s most equitable and specialized talent company, and we actively embrace diversity and inclusion as the cornerstones of our success. To read more of Randstad India's work in the space of equity, diversity and inclusion please <span className="underline cursor-pointer">click here</span></p>
          </div>

          <div className="mt-12 pt-8 border-t border-gray-800 flex flex-wrap justify-center md:justify-start gap-x-8 gap-y-4 text-xs text-gray-500">
            <span className="hover:text-white cursor-pointer">terms & conditions</span>
            <span className="hover:text-white cursor-pointer">cookies</span>
            <span className="hover:text-white cursor-pointer">misconduct reporting procedure</span>
            <span className="hover:text-white cursor-pointer">accessibility</span>
            <span className="hover:text-white cursor-pointer">be aware</span>
            <span className="hover:text-white cursor-pointer">sitemap</span>
            <span className="hover:text-white cursor-pointer">privacy statement</span>
          </div>
        </div>
      </footer>

      {/* Sticky Feedback Button */}
      <div className="fixed right-0 top-1/2 -translate-y-1/2 z-40">
        <button className="bg-[#2175d9] text-white py-4 px-2 rounded-l-md vertical-text text-xs font-medium tracking-widest hover:bg-[#1a5fb1] transition-colors shadow-lg" style={{ writingMode: 'vertical-rl' }}>
          FEEDBACK
        </button>
      </div>

      {/* Cookie Consent Icon */}
      <div className="fixed bottom-6 left-6 z-40">
        <button className="w-12 h-12 bg-[#2175d9] text-white rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform">
          <div className="w-6 h-6 border-2 border-white rounded-full relative overflow-hidden">
            <div className="absolute top-1 left-1 w-1 h-1 bg-white rounded-full"></div>
            <div className="absolute top-3 left-2 w-1 h-1 bg-white rounded-full"></div>
            <div className="absolute top-2 left-4 w-1 h-1 bg-white rounded-full"></div>
          </div>
        </button>
      </div>
    </div>
  );
};

export default RandstadPage;
