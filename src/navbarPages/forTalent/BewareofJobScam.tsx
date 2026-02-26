import React, { useState } from "react";
import { motion } from "motion/react";

import { 
  Heart, 
  User, 
  Search, 
  Info, 
  MapPin, 
  Briefcase, 
  Linkedin, 
  Facebook, 
  Instagram, 
  Twitter, 
  Youtube,
  ChevronDown,
  ArrowRight,
  ShieldCheck,
  AlertTriangle,
  FileText,
  Phone,
  Mail,
  CheckCircle2
} from 'lucide-react';

const ForTalentJobScamsPage: React.FC = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    issue: '',
    agreePrivacy: false,
    agreeTerms: false
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    const val = type === 'checkbox' ? (e.target as HTMLInputElement).checked : value;
    setFormData(prev => ({ ...prev, [name]: val }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Thank you for reporting. We will review your submission.');
  };

  const jobs = [
    { id: 1, title: 'associate', location: 'hyderabad, telangana', type: 'permanent', posted: '24 february 2026' },
    { id: 2, title: 'sr data analyst', location: 'hyderabad, telangana', type: 'permanent', posted: '24 february 2026' },
    { id: 3, title: 'provider enrollement', location: 'hyderabad, telangana', type: 'permanent', posted: '24 february 2026' },
  ];

  return (
    <div className="font-sans text-[#1a1a1a] bg-white selection:bg-blue-100">
      {/* Top Header */}
      

      {/* Breadcrumbs */}
      <div className="bg-[#0a1931] text-white py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-[12px] opacity-70">
          <div className="flex items-center gap-2">
            <a href="#" className="hover:underline">home</a>
            <span>›</span>
            <a href="#" className="hover:underline">job seekers</a>
            <span>›</span>
            <span className="font-semibold">beware of job scams</span>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section className="bg-[#0a1931] text-white py-20 overflow-hidden relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center gap-12">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="md:w-1/2"
          >
            <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-8">
              how to avoid and <br /> report job scams.
            </h1>
            <button className="border-2 border-white px-8 py-3 rounded-md font-semibold hover:bg-white hover:text-[#0a1931] transition-all duration-300">
              report a scam
            </button>
          </motion.div>
          <div className="md:w-1/2 flex justify-center relative">
            <div className="w-64 h-64 md:w-80 md:h-80 border-[16px] border-blue-400/30 rounded-full flex items-center justify-center">
              <div className="w-48 h-48 md:w-60 md:h-60 border-[16px] border-blue-400/50 rounded-full"></div>
            </div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-white rounded-full"></div>
          </div>
        </div>
      </section>

      {/* Section 1: No Charge */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center gap-16">
          <div className="md:w-1/2">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              randstad doesn't charge candidates any money.
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed mb-8">
              Randstad will never ask candidates for any recruitment fees. Please be cautioned that individuals/organizations are misusing the Randstad brand name to demand money in exchange for interviews or jobs with Randstad or clients of Randstad.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              Do note that they wrongfully use the company's registered trademark on fake job advertisements and emails to harm innocent victims.
            </p>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <div className="relative w-full max-w-md">
              <div className="bg-blue-600 rounded-[40px] p-12 text-white relative z-10">
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-white/20 rounded-full"></div>
                  <div className="flex-1 space-y-2">
                    <div className="h-4 bg-white/30 rounded w-3/4"></div>
                    <div className="h-4 bg-white/30 rounded w-1/2"></div>
                  </div>
                </div>
              </div>
              <div className="absolute -bottom-8 -right-8 w-full h-full bg-blue-100 rounded-[40px] -z-10"></div>
              <div className="absolute -top-4 -left-4 w-24 h-24 border-4 border-blue-200 rounded-full -z-10"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: How to report */}
      <section className="py-20 bg-[#f5f5f0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row gap-16">
          <div className="md:w-1/3">
            <h2 className="text-3xl font-bold">how to report a scam?</h2>
          </div>
          <div className="md:w-2/3 space-y-6 text-lg text-gray-700">
            <p>
              Suppose you have been exposed to a fake job advertisement on a messaging platform or social media network, received a fake job offer in an email or fraudulent job opportunity from an individual and/or organisation or are an unfortunate victim of such a job scam. In that case, we advise you to file an official report with the local police immediately.
            </p>
            <p>
              File a report with the local authorities. By reporting a scammer to the police, you are helping us raise awareness of job scams and protecting your family and friends from becoming victims of scams.
            </p>
            <p className="font-semibold">please provide the local police with all the information you have, such as:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Sender's name and contact information</li>
              <li>A copy of the fraudulent job advertisement</li>
              <li>Your chat history with the individual and/or organization</li>
              <li>The bank account details that you've been asked to remit money to</li>
              <li>The banking remittance details (if payment has already been made)</li>
            </ul>
            <p className="text-sm text-gray-500 italic pt-4">
              At Randstad, we do not condone any illegal activities carried out by individuals and/or organizations based on local laws. If you come across a job post that looks suspicious and you...
            </p>
          </div>
        </div>
      </section>

      {/* Section 3: Beware of online hiring scam */}
      <section className="bg-[#0a1931] text-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-stretch">
          <div className="md:w-1/2 py-20 pr-12">
            <h2 className="text-4xl md:text-6xl font-bold mb-8">
              beware of online hiring scam.
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Social media and messaging platforms are the newest channels used by scammers.
            </p>
            <p className="text-xl opacity-90">
              They come in different styles and forms, so always stay vigilant!
            </p>
          </div>
          <div className="md:w-1/2 relative min-h-[400px]">
            <img 
              src="https://picsum.photos/seed/office1/800/600" 
              alt="People looking at tablet" 
              className="absolute inset-0 w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-blue-600/20 mix-blend-multiply"></div>
          </div>
        </div>
      </section>

      {/* Section 4: How to spot fake postings */}
      <section className="py-20 bg-[#f5f5f0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row gap-16">
          <div className="md:w-1/3">
            <h2 className="text-3xl font-bold">how to spot fake job postings?</h2>
          </div>
          <div className="md:w-2/3">
            <h3 className="text-xl font-semibold mb-8">identify fake job offers with these ten warning signs of scams.</h3>
            <ol className="space-y-6 text-lg text-gray-700">
              {[
                "If money is involved. You've been asked to transfer money for a medical check, work pass application or to attend the job interview.",
                "The company has no website or official/corporate social media account.",
                "The job offer was sent from a personal email, a \"no-reply\" email, and not from the Randstad email domain.",
                "You did not apply for the job.",
                "The job is too good to be true.",
                "The job description is unclear or too short.",
                "Poor use of the English language with multiple typos and grammatical errors in the job advertisement or text messages.",
                "You found the job posting in a random social media community.",
                "Communication channels are limited to social media and messaging platforms such as Facebook, Whatsapp, etc.",
                "On messaging platforms, they ask you for your personal information, such as your mobile number or ID photo."
              ].map((text, i) => (
                <li key={i} className="flex gap-4">
                  <span className="font-bold text-blue-600 shrink-0">{i + 1}.</span>
                  <span>{text}</span>
                </li>
              ))}
            </ol>
            <div className="mt-12 space-y-6 text-gray-600">
              <p>When looking for a job, please do not respond to fraudulent job advertisements often shared in unsolicited Facebook groups or messaging platforms.</p>
              <p>You should not respond to suspicious job offers in email or messaging platforms (Facebook Messenger, Whatsapp, etc.) or calls from unknown numbers.</p>
              <p className="font-semibold">Remember that disclosing your personal and banking details to anyone you do not know is never safe.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 5: What is a job scam? */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center gap-16">
          <div className="md:w-1/2 flex justify-center">
            <div className="relative">
              <div className="w-64 h-[450px] border-8 border-blue-400 rounded-[40px] relative">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-blue-400 rounded-full"></div>
              </div>
              <div className="absolute -top-10 -right-10 w-40 h-40 border-[12px] border-blue-100 rounded-full -z-10"></div>
            </div>
          </div>
          <div className="md:w-1/2">
            <h2 className="text-5xl md:text-7xl font-bold mb-8">what is a job scam?</h2>
            <div className="space-y-6 text-lg text-gray-600">
              <p>
                Recruitment scams often involve fake online job ads on social platforms and untrusted job portals offering high-paying jobs. Victims may also receive unsolicited text messages or messages from Facebook and Whatsapp that provides jobs that do not exist.
              </p>
              <p>
                Job scammers will ask victims to share personal information such as their mobile number OR transfer or remit a small sum of money to secure the fake interview or for more information about the fraudulent jobs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 6: Priority */}
      <section className="bg-[#0a1931] text-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-stretch">
          <div className="md:w-1/2 py-20 pr-12">
            <h2 className="text-4xl md:text-6xl font-bold mb-8">
              your safety during <br /> the job search <br /> process is our <br /> priority.
            </h2>
            <p className="text-xl opacity-90 leading-relaxed">
              At randstad, our candidates' safety during their job search process is our top priority. Unfortunately, some job seekers may accidentally fall victim to job scams in India. Our recruitment consultants adhere to a structured process to ensure we maintain the highest level of integrity.
            </p>
          </div>
          <div className="md:w-1/2 relative min-h-[500px]">
            <img 
              src="https://picsum.photos/seed/office2/800/800" 
              alt="People in office" 
              className="absolute inset-0 w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div className="w-24 h-24 bg-blue-500/40 rounded-full blur-xl"></div>
              <div className="w-32 h-32 bg-blue-400/30 rounded-full blur-2xl ml-20"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 7: Report Form */}
      <section className="py-20 bg-[#f5f5f0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row gap-16">
          <div className="md:w-1/3">
            <h2 className="text-3xl font-bold">report a job scam.</h2>
          </div>
          <div className="md:w-2/3">
            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-2">
                  <label className="block text-sm font-medium text-gray-700">First name</label>
                  <input 
                    type="text" 
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    className="w-full border border-gray-300 rounded-md p-3 focus:ring-2 focus:ring-blue-500 outline-none" 
                    required
                  />
                </div>
                <div className="space-y-2">
                  <label className="block text-sm font-medium text-gray-700">Last name</label>
                  <input 
                    type="text" 
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    className="w-full border border-gray-300 rounded-md p-3 focus:ring-2 focus:ring-blue-500 outline-none" 
                    required
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-700">Email</label>
                <input 
                  type="email" 
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full border border-gray-300 rounded-md p-3 focus:ring-2 focus:ring-blue-500 outline-none" 
                  required
                />
              </div>
              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-700">Phone number</label>
                <input 
                  type="tel" 
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="w-full border border-gray-300 rounded-md p-3 focus:ring-2 focus:ring-blue-500 outline-none" 
                  required
                />
              </div>
              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-700">Issue the individual has experienced</label>
                <textarea 
                  name="issue"
                  value={formData.issue}
                  onChange={handleInputChange}
                  rows={6} 
                  className="w-full border border-gray-300 rounded-md p-3 focus:ring-2 focus:ring-blue-500 outline-none resize-none"
                  required
                ></textarea>
              </div>
              <div className="space-y-4">
                <label className="block text-sm font-medium text-gray-700">Choose file and upload relevant proofs</label>
                <div className="flex items-center gap-4">
                  <input type="file" className="text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-gray-200 file:text-gray-700 hover:file:bg-gray-300" />
                </div>
              </div>
              <div className="space-y-4">
                <label className="flex items-center gap-3 cursor-pointer group">
                  <input 
                    type="checkbox" 
                    name="agreePrivacy"
                    checked={formData.agreePrivacy}
                    onChange={handleInputChange}
                    className="w-5 h-5 rounded border-gray-300 text-blue-600 focus:ring-blue-500" 
                    required
                  />
                  <span className="text-sm text-gray-700 group-hover:text-blue-600 transition-colors">I agree to privacy notice</span>
                </label>
                <label className="flex items-center gap-3 cursor-pointer group">
                  <input 
                    type="checkbox" 
                    name="agreeTerms"
                    checked={formData.agreeTerms}
                    onChange={handleInputChange}
                    className="w-5 h-5 rounded border-gray-300 text-blue-600 focus:ring-blue-500" 
                    required
                  />
                  <span className="text-sm text-gray-700 group-hover:text-blue-600 transition-colors">I agree to the terms & conditions</span>
                </label>
              </div>
              <button 
                type="submit"
                className="border-2 border-[#0a1931] px-12 py-3 rounded-md font-bold text-[#0a1931] hover:bg-[#0a1931] hover:text-white transition-all duration-300"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Section 8: Latest Jobs */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-end mb-12">
            <h2 className="text-4xl font-bold">view our latest jobs</h2>
            <a href="#" className="text-xl text-blue-600 hover:underline flex items-center gap-2">
              see all jobs
            </a>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {jobs.map(job => (
              <motion.div 
                key={job.id}
                whileHover={{ y: -10 }}
                className="bg-white border border-gray-100 rounded-xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 relative group"
              >
                <button className="absolute top-6 right-6 text-gray-400 hover:text-red-500 transition-colors">
                  <Heart size={24} />
                </button>
                <h3 className="text-2xl font-bold text-blue-600 mb-6 group-hover:underline cursor-pointer">
                  {job.title}
                </h3>
                <div className="space-y-4 text-gray-600 mb-12">
                  <div className="flex items-center gap-3">
                    <MapPin size={18} className="text-gray-400" />
                    <span>{job.location}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Briefcase size={18} className="text-gray-400" />
                    <span>{job.type}</span>
                  </div>
                </div>
                <div className="flex justify-between items-center pt-6 border-t border-gray-50 text-sm text-gray-400">
                  <span>posted {job.posted}</span>
                  <button className="hover:text-blue-600">
                    <Info size={18} />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 9: Social Media */}
      <section className="py-20 bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="md:w-1/3">
            <h2 className="text-2xl font-bold text-gray-800">
              Randstad India's only <br /> official social media <br /> accounts are:
            </h2>
          </div>
          <div className="md:w-2/3 grid grid-cols-3 md:grid-cols-5 gap-12">
            <a href="#" className="flex flex-col items-center gap-2 text-blue-700 hover:scale-110 transition-transform">
              <Linkedin size={48} />
            </a>
            <a href="#" className="flex flex-col items-center gap-2 text-blue-600 hover:scale-110 transition-transform">
              <Facebook size={48} />
            </a>
            <a href="#" className="flex flex-col items-center gap-2 text-pink-600 hover:scale-110 transition-transform">
              <Instagram size={48} />
            </a>
            <a href="#" className="flex flex-col items-center gap-2 text-sky-500 hover:scale-110 transition-transform">
              <Twitter size={48} />
            </a>
            <a href="#" className="flex flex-col items-center gap-2 text-red-600 hover:scale-110 transition-transform">
              <Youtube size={48} />
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      

      {/* Floating Feedback & Cookie */}
      <div className="fixed right-0 top-1/2 -translate-y-1/2 z-40">
        <button className="bg-blue-500 text-white py-4 px-2 rounded-l-md vertical-text text-sm font-bold tracking-widest hover:bg-blue-600 transition-colors shadow-lg">
          FEEDBACK
        </button>
      </div>
      <div className="fixed left-6 bottom-6 z-40">
        <button className="bg-blue-600 text-white p-3 rounded-full shadow-xl hover:scale-110 transition-transform">
          <ShieldCheck size={24} />
        </button>
      </div>

      <style>{`
        .vertical-text {
          writing-mode: vertical-rl;
          text-orientation: mixed;
        }
      `}</style>
    </div>
  );
};

export default ForTalentJobScamsPage;
