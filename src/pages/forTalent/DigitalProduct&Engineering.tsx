import React, { useState } from "react";
import { AnimatePresence, motion } from "motion/react";

import { 
  ChevronDown, 
  ChevronRight, 
  Linkedin, 
  Youtube, 
  Twitter, 
  Menu, 
  X, 
  Globe,
  Search,
  ArrowRight
} from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-[#001135] text-white sticky top-0 z-50 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          <div className="flex items-center gap-8">
            <div className="flex-shrink-0 flex items-center gap-2">
              <div className="w-8 h-8 bg-white rounded-sm flex items-center justify-center">
                <div className="w-4 h-4 border-2 border-[#001135] rounded-full"></div>
              </div>
              <span className="text-xl font-bold tracking-tighter">randstad <span className="font-light">digital</span></span>
            </div>
            
            <div className="hidden lg:flex items-center space-x-8 text-sm font-medium">
              <a href="#" className="hover:text-blue-400 transition-colors border-b-2 border-blue-400 pb-1">expertise</a>
              <a href="#" className="hover:text-blue-400 transition-colors">approach</a>
              <a href="#" className="hover:text-blue-400 transition-colors">industries</a>
              <a href="#" className="hover:text-blue-400 transition-colors">about</a>
              <a href="#" className="hover:text-blue-400 transition-colors">insights</a>
              <a href="#" className="hover:text-blue-400 transition-colors">careers</a>
            </div>
          </div>

          <div className="hidden lg:flex items-center space-x-6 text-xs uppercase tracking-widest">
            <div className="flex items-center space-x-3">
              <a href="#" className="hover:text-blue-400">EN</a>
              <span className="opacity-30">|</span>
              <a href="#" className="hover:text-blue-400">FR</a>
              <span className="opacity-30">|</span>
              <a href="#" className="hover:text-blue-400">DE</a>
            </div>
            <a href="#" className="border border-blue-400 px-4 py-2 hover:bg-blue-400 hover:text-white transition-all">get in touch</a>
          </div>

          <div className="lg:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="p-2">
              {isOpen ? <X size={24} /> : <Menu size={24} />}
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
            className="lg:hidden bg-[#001135] border-t border-white/10"
          >
            <div className="px-4 pt-2 pb-6 space-y-4">
              <a href="#" className="block text-lg font-medium">expertise</a>
              <a href="#" className="block text-lg font-medium">approach</a>
              <a href="#" className="block text-lg font-medium">industries</a>
              <a href="#" className="block text-lg font-medium">about</a>
              <a href="#" className="block text-lg font-medium">insights</a>
              <a href="#" className="block text-lg font-medium">careers</a>
              <div className="pt-4 flex space-x-4 text-sm">
                <a href="#">EN</a>
                <a href="#">FR</a>
                <a href="#">DE</a>
              </div>
              <a href="#" className="block text-center border border-blue-400 py-3 mt-4">get in touch</a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Sub-nav */}
      <div className="hidden lg:block bg-[#001135] border-t border-white/5 py-3">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex space-x-8 text-xs text-gray-400 uppercase tracking-wider overflow-x-auto whitespace-nowrap scrollbar-hide">
            <a href="#" className="hover:text-white">consulting services</a>
            <a href="#" className="hover:text-white">cloud & infrastructure</a>
            <a href="#" className="hover:text-white">creative & marketing</a>
            <a href="#" className="hover:text-white">customer experience</a>
            <a href="#" className="hover:text-white">data & analytics</a>
            <a href="#" className="hover:text-white text-white font-bold">digital & product engineering</a>
          </div>
        </div>
      </div>
    </nav>
  );
};

const Hero = () => {
  return (
    <section className="bg-[#001135] text-white py-24 lg:py-32 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl">
          <nav className="flex items-center space-x-2 text-xs text-gray-400 mb-8 uppercase tracking-widest">
            <a href="#" className="hover:text-white">home</a>
            <ChevronRight size={12} />
            <a href="#" className="hover:text-white">expertise</a>
            <ChevronRight size={12} />
            <span className="text-white">digital & product engineering</span>
          </nav>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl lg:text-7xl font-bold leading-tight mb-12"
          >
            innovate and transform with advanced solutions.
          </motion.h1>
          <motion.button 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="border border-blue-400 text-blue-400 px-8 py-4 text-lg font-medium hover:bg-blue-400 hover:text-white transition-all"
          >
            get in touch
          </motion.button>
        </div>
      </div>
      
      {/* Abstract background element */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-1/3 h-full opacity-20 pointer-events-none">
        <div className="relative w-full h-full">
          <div className="absolute top-0 right-0 w-64 h-64 border-2 border-blue-400 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-20 w-96 h-96 border-2 border-blue-600 rounded-full blur-3xl"></div>
        </div>
      </div>
    </section>
  );
};

interface FeatureSectionProps {
  title: string;
  description: string;
  image: string;
  reverse?: boolean;
  bgColor?: string;
  textColor?: string;
  buttonText?: string | null;
  graphic?: React.ReactNode;
}

const FeatureSection = ({ 
  title, 
  description, 
  image, 
  reverse = false, 
  bgColor = "bg-white", 
  textColor = "text-gray-900",
  buttonText = null,
  graphic = null
}: FeatureSectionProps) => {
  return (
    <section className={`${bgColor} ${textColor} py-20 lg:py-32 overflow-hidden`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`flex flex-col ${reverse ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-center gap-16 lg:gap-24`}>
          <div className="flex-1 space-y-8">
            <motion.h2 
              initial={{ opacity: 0, x: reverse ? 20 : -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-4xl lg:text-5xl font-bold leading-tight"
            >
              {title}
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-lg opacity-80 leading-relaxed"
            >
              {description}
            </motion.p>
            {buttonText && (
              <motion.button 
                whileHover={{ scale: 1.05 }}
                className="border border-current px-8 py-3 text-sm font-bold uppercase tracking-widest hover:bg-current hover:text-white transition-all"
              >
                {buttonText}
              </motion.button>
            )}
          </div>
          <div className="flex-1 relative">
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative z-10 rounded-sm overflow-hidden shadow-2xl"
            >
              <img src={image} alt={title} className="w-full h-auto object-cover" referrerPolicy="no-referrer" />
              {graphic && (
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                  {graphic}
                </div>
              )}
            </motion.div>
            {/* Background decorative elements */}
            <div className={`absolute -inset-4 ${bgColor === 'bg-white' ? 'bg-gray-100' : 'bg-blue-900/20'} -z-10 rounded-sm`}></div>
          </div>
        </div>
      </div>
    </section>
  );
};

interface AccordionItemProps {
  title: string;
  content: string;
  isOpen: boolean;
  onClick: () => void;
}

const AccordionItem: React.FC<AccordionItemProps> = ({ title, content, isOpen, onClick }) => {
  return (
    <div className="border-b border-gray-200 last:border-0">
      <button 
        onClick={onClick}
        className="w-full py-6 flex justify-between items-center text-left hover:text-blue-600 transition-colors group"
      >
        <span className="text-xl font-medium">{title}</span>
        <div className={`transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}>
          <ChevronDown size={24} />
        </div>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden"
          >
            <div className="pb-8 text-gray-600 leading-relaxed">
              {content}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

interface AccordionSectionProps {
  title: string;
  description: string;
  items: { title: string; content: string }[];
  bgColor?: string;
}

const AccordionSection = ({ title, description, items, bgColor = "bg-[#f5f2ed]" }: AccordionSectionProps) => {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className={`${bgColor} py-24`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16">
          <div>
            <h2 className="text-4xl font-bold mb-8">{title}</h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              {description}
            </p>
          </div>
          <div className="bg-white/50 backdrop-blur-sm p-4 rounded-sm">
            {items.map((item, index) => (
              <AccordionItem 
                key={index}
                title={item.title}
                content={item.content}
                isOpen={openIndex === index}
                onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const ContactForm = () => {
  return (
    <section className="bg-white py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-24">
          <div>
            <h2 className="text-4xl font-bold mb-4">ready to partner with randstad digital?</h2>
            <p className="text-2xl text-gray-500 font-light">get in touch.</p>
          </div>
          <form className="space-y-6">
            <div className="grid sm:grid-cols-2 gap-6">
              <div className="space-y-1">
                <label className="text-xs font-bold uppercase tracking-wider">First name<span className="text-red-500">*</span></label>
                <input type="text" className="w-full bg-gray-50 border border-gray-200 p-3 focus:outline-none focus:border-blue-400" required />
              </div>
              <div className="space-y-1">
                <label className="text-xs font-bold uppercase tracking-wider">Last name<span className="text-red-500">*</span></label>
                <input type="text" className="w-full bg-gray-50 border border-gray-200 p-3 focus:outline-none focus:border-blue-400" required />
              </div>
            </div>
            <div className="space-y-1">
              <label className="text-xs font-bold uppercase tracking-wider">Work Email<span className="text-red-500">*</span></label>
              <input type="email" className="w-full bg-gray-50 border border-gray-200 p-3 focus:outline-none focus:border-blue-400" required />
            </div>
            <div className="space-y-1">
              <label className="text-xs font-bold uppercase tracking-wider">Job title<span className="text-red-500">*</span></label>
              <input type="text" className="w-full bg-gray-50 border border-gray-200 p-3 focus:outline-none focus:border-blue-400" required />
            </div>
            <div className="space-y-1">
              <label className="text-xs font-bold uppercase tracking-wider">Company name<span className="text-red-500">*</span></label>
              <input type="text" className="w-full bg-gray-50 border border-gray-200 p-3 focus:outline-none focus:border-blue-400" required />
            </div>
            <div className="space-y-1">
              <label className="text-xs font-bold uppercase tracking-wider">Country<span className="text-red-500">*</span></label>
              <select className="w-full bg-gray-50 border border-gray-200 p-3 focus:outline-none focus:border-blue-400" required>
                <option value="">Please Select</option>
                <option value="US">United States</option>
                <option value="UK">United Kingdom</option>
                <option value="FR">France</option>
                <option value="DE">Germany</option>
              </select>
            </div>
            <div className="space-y-1">
              <label className="text-xs font-bold uppercase tracking-wider">Staffing or Solutions?<span className="text-red-500">*</span></label>
              <select className="w-full bg-gray-50 border border-gray-200 p-3 focus:outline-none focus:border-blue-400" required>
                <option value="">Please Select</option>
                <option value="staffing">Staffing</option>
                <option value="solutions">Solutions</option>
              </select>
            </div>
            <div className="space-y-1">
              <label className="text-xs font-bold uppercase tracking-wider">How can we help you?<span className="text-red-500">*</span></label>
              <textarea className="w-full bg-gray-50 border border-gray-200 p-3 h-32 focus:outline-none focus:border-blue-400" required></textarea>
            </div>
            
            <div className="flex items-start gap-3">
              <input type="checkbox" id="consent" className="mt-1" />
              <label htmlFor="consent" className="text-sm text-gray-600">
                I agree to receive other communications from Randstad Digital.
              </label>
            </div>

            <p className="text-xs text-gray-500 leading-relaxed">
              Randstad Digital is committed to protecting and respecting your privacy, and we'll only use your personal information to administer your account and to provide the products and services you requested from us. For more information on how to unsubscribe, our privacy practices, and how we are committed to protecting and respecting your privacy, please review our <a href="#" className="underline">Privacy Policy</a>.
            </p>

            <button type="submit" className="bg-blue-600 text-white px-10 py-4 font-bold hover:bg-blue-700 transition-colors">
              Submit
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="bg-[#001135] text-white pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-12 mb-20">
          <div className="space-y-6">
            <h4 className="text-lg font-bold">careers</h4>
            <ul className="space-y-4 text-sm text-gray-400">
              <li><a href="#" className="hover:text-white">working at randstad digital</a></li>
              <li><a href="#" className="hover:text-white">current opportunities</a></li>
            </ul>
          </div>
          <div className="space-y-6">
            <h4 className="text-lg font-bold">expertise</h4>
            <ul className="space-y-4 text-sm text-gray-400">
              <li><a href="#" className="hover:text-white">customer experience</a></li>
              <li><a href="#" className="hover:text-white">digital & product engineering</a></li>
              <li><a href="#" className="hover:text-white">data & analytics</a></li>
              <li><a href="#" className="hover:text-white">cloud & infrastructure</a></li>
              <li><a href="#" className="hover:text-white">creative & marketing</a></li>
              <li><a href="#" className="hover:text-white">consulting services</a></li>
            </ul>
          </div>
          <div className="space-y-6">
            <h4 className="text-lg font-bold">about randstad digital</h4>
            <ul className="space-y-4 text-sm text-gray-400">
              <li><a href="#" className="hover:text-white">experience</a></li>
              <li><a href="#" className="hover:text-white">leadership</a></li>
              <li><a href="#" className="hover:text-white">partnerships</a></li>
              <li><a href="#" className="hover:text-white">locations</a></li>
            </ul>
          </div>
          <div className="space-y-6">
            <h4 className="text-lg font-bold">solutions</h4>
            <ul className="space-y-4 text-sm text-gray-400">
              <li><a href="#" className="hover:text-white">ServiceNow</a></li>
            </ul>
          </div>
          <div className="space-y-6">
            <h4 className="text-lg font-bold">contact us</h4>
            <ul className="space-y-4 text-sm text-gray-400">
              <li><a href="#" className="hover:text-white">get in touch</a></li>
              <li><a href="#" className="hover:text-white">about our team</a></li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center pt-10 border-t border-white/10 gap-8">
          <div className="flex space-x-6">
            <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors">
              <Linkedin size={20} />
            </a>
            <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors">
              <Twitter size={20} />
            </a>
            <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors">
              <Youtube size={20} />
            </a>
          </div>
          <div className="text-xs text-gray-500">
            Randstad Digital B.V (91235944), Diemermere 25, 1112 TC, Diemen, The Netherlands.
          </div>
        </div>

        <div className="flex flex-wrap justify-center md:justify-start gap-6 mt-10 text-xs text-gray-400 uppercase tracking-widest">
          <a href="#" className="hover:text-white">terms & conditions</a>
          <a href="#" className="hover:text-white">cookie policy</a>
          <button className="bg-blue-600 text-white px-4 py-1 rounded-sm hover:bg-blue-700">customize</button>
          <a href="#" className="hover:text-white">legal information</a>
          <a href="#" className="hover:text-white">privacy policy</a>
          <a href="#" className="hover:text-white">misconduct reporting procedure</a>
        </div>
      </div>
    </footer>
  );
};

const LandingPage = () => {
  return (
    <div className="font-sans text-gray-900 selection:bg-blue-100 selection:text-blue-900">
      <Navbar />
      <Hero />
      
      <FeatureSection 
        title="turning innovation into solutions."
        description="When you have an innovative idea and apply the best digital talent, you can deliver something truly amazing. This may be a new business application to step-up capability, productivity or customer experience; it may be an embedded application that differentiates your product. At Randstad Digital, we have created an exceptional talent pool of digital and product engineers that are ready to go."
        image="https://picsum.photos/seed/drone/800/600"
        graphic={
          <div className="w-64 h-64 border-4 border-blue-400/30 rounded-full animate-spin-slow flex items-center justify-center">
            <div className="w-48 h-48 border-4 border-blue-600/50 rounded-full"></div>
          </div>
        }
      />

      <FeatureSection 
        title="testing & validation."
        description="Your applications are business-critical, and your embedded software could be mission-critical, as such you need to ensure that they are robust, compliant and will perform. We operate in some of the most stringent sectors including defense, aerospace and finance; we understand the importance of testing and validation and can apply the methodology, tools and expertise to ensure quality."
        image="https://picsum.photos/seed/testing/800/600"
        bgColor="bg-blue-600"
        textColor="text-white"
        buttonText="get in touch"
        reverse
      />

      <FeatureSection 
        title="software & application development."
        description="You need a team of talented developers that are not just proficient in your development approach and environment but understand the specific requirements of your world. Our scale enables us to apply the exact skills required for each project, giving you the value of highly talented engineers that bring invaluable industry and cross-industry experience."
        image="https://picsum.photos/seed/circuit/800/600"
      />

      <FeatureSection 
        title="a step up in capabilities and quality of interactions."
        description="Read our case study."
        image="https://picsum.photos/seed/abstract/800/600"
        bgColor="bg-[#001135]"
        textColor="text-white"
        buttonText="learn more"
        reverse
      />

      <FeatureSection 
        title="design & specification."
        description="Whether you are looking for an app to manage logistics and supply chain, or need embedded software to control an airplane cockpit, our team has experience and expertise. We help you take your concepts and turn them into thorough designs, architecting the right solution and delivering clear and precise functional and technical specifications."
        image="https://picsum.photos/seed/design/800/600"
        bgColor="bg-blue-600"
        textColor="text-white"
      />

      <AccordionSection 
        title="top talent at every stage."
        description="You may be at the conceptual stage, or you could be nearing the end of development and require help in testing and validation. Regardless of where you are on your digital/product development cycle, we can inject the skills and experience to turn your vision into deliverable value."
        items={[
          { title: "design", content: "Our design experts focus on user-centric principles to create intuitive and engaging digital experiences. We bridge the gap between complex functionality and seamless user interaction." },
          { title: "specification", content: "We provide detailed technical and functional specifications that serve as a blueprint for successful implementation, ensuring all stakeholders are aligned." },
          { title: "development", content: "Our world-class engineers build robust, scalable, and high-performance applications using the latest technologies and agile methodologies." },
          { title: "validation", content: "Rigorous testing and quality assurance processes ensure your products meet the highest standards of reliability, security, and performance." },
          { title: "maintenance", content: "We provide ongoing support and optimization to ensure your digital solutions continue to deliver value and evolve with your business needs." }
        ]}
      />

      <AccordionSection 
        title="capabilities."
        description="Our capabilities span sector-specific experience and horizontal expertise in application and embedded software development. Our scale provides you with an unprecedented pool of digital development talent while our centers of excellence provide you with proven experience in key areas of technology. These capabilities include:"
        bgColor="bg-white"
        items={[
          { title: "application development", content: "Full-stack development for web, mobile, and desktop platforms using modern frameworks and cloud-native architectures." },
          { title: "embedded software development", content: "Specialized engineering for hardware-software integration, real-time operating systems, and IoT devices." },
          { title: "devops", content: "Streamlining development lifecycles through automation, continuous integration, and infrastructure as code." },
          { title: "enterprise application development", content: "Building complex, mission-critical systems that drive large-scale business operations and digital transformation." },
          { title: "embedded hardware development", content: "Designing and prototyping custom hardware solutions tailored to specific industrial and commercial requirements." },
          { title: "firmware validation", content: "Ensuring the integrity and performance of low-level software through comprehensive testing and verification." },
          { title: "certification validation", content: "Guiding products through regulatory compliance and industry-standard certifications for global markets." }
        ]}
      />

      <FeatureSection 
        title="enabling you to innovate faster."
        description="We help you turn your vision into applications that drive business success and solutions that differentiate your products and services. We enable you to innovate at scale, providing you with the flexibility of the talent you need to turn concepts into engineered and validated solutions. Whether we are augmenting your team with talent or acting as your engineering partner, we assist you to apply the right expertise, at the right time to deliver results."
        image="https://picsum.photos/seed/robot/800/600"
        bgColor="bg-[#001135]"
        textColor="text-white"
        buttonText="let's talk"
        reverse
      />

      <ContactForm />
      <Footer />
      
      {/* Accessibility Floating Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <button className="w-12 h-12 bg-blue-600 text-white rounded-full shadow-lg flex items-center justify-center hover:scale-110 transition-transform">
          <div className="w-6 h-6 border-2 border-white rounded-full flex items-center justify-center">
            <div className="w-2 h-2 bg-white rounded-full"></div>
          </div>
        </button>
      </div>

      {/* Cookie Floating Button */}
      <div className="fixed bottom-6 left-6 z-50">
        <button className="w-12 h-12 bg-blue-600 text-white rounded-full shadow-lg flex items-center justify-center hover:scale-110 transition-transform">
          <Globe size={24} />
        </button>
      </div>
    </div>
  );
};

export default LandingPage;
