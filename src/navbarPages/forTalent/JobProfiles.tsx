import React from "react";

import { 
  Search, 
  ChevronDown, 
  Heart, 
  User, 
  Cloud, 
  Linkedin, 
  Twitter, 
  Facebook, 
  Youtube, 
  Instagram,
  ExternalLink,
  MessageSquare
} from 'lucide-react';

const jobData = {
  A: [
    'accountant', 'account manager', 'administrative assistant', 'advisor', 
    'analyst', 'architect', 'assistant manager', 'auditor', 
    'architectural technologist', 'accounts assistant', 'aircraft engineer', 'architectural assistant'
  ],
  B: [
    'back-end developer', 'business analyst', 'business development manager', 'brand manager', 'business development repre...'
  ],
  C: [
    'clerk', 'cloud engineer', 'civil engineer', 'content writer', 
    'consultant', 'controller', 'cnc operator', 'customer service representative',
    'cyber security expert', 'category manager', 'CAD designer', 'construction project manager',
    'community nurse', 'customer service support', 'contracts manager'
  ],
  D: [
    'data analyst', 'data engineer', 'data scientist', 'dietitian',
    'delivery executive', 'deputy manager', 'development engineer', 'dot net developer',
    'digital marketing manager', 'data entry clerk'
  ],
  E: [
    'ecologist', 'electrical engineer', 'engineer', 'event coordinator',
    'executive assistant', 'electrical technician', 'electronics technician'
  ],
  F: [
    'finance analyst', 'finance controller', 'front end developer', 'full stack developer',
    'field engineer', 'facilities coordinator', 'finance assistant'
  ],
  G: [
    'game developer', 'general nurse'
  ],
  H: [
    'HR manager', 'head of sales', 'HVAC technician', 'healthcare assistant',
    'head of marketing', 'head of communications', 'hr administrator', 'heavy equipment operator'
  ],
  I: [
    'inside sales representative', 'interior decorator', 'Industrial designer', 'IT technician',
    'insurance consultant', 'industrial electrician'
  ],
  L: [
    'logistics manager', 'legal secretary'
  ],
  M: [
    'maintenance engineer', 'manager', 'marketing executive', 'marketing manager',
    'mechanical engineer', 'mobile developer', 'mechanical technician', 'management accountant'
  ],
  O: [
    'occupational therapist', 'operations manager', 'optometrist', 'office manager', 'office administrator'
  ],
  P: [
    'personal assistant', 'personal secretary', 'pharmacist', 'physiotherapist',
    'plant operator', 'primary school teacher', 'product manager', 'project manager',
    'pt teacher', 'pharmacy assistant', 'procurement manager', 'project director',
    'program manager', 'paediatric nurse', 'payroll administrator', 'planning officer',
    'physiotherapy assistant'
  ],
  Q: [
    'quantity surveyor'
  ],
  R: [
    'recruiter', 'research associate', 'receptionist', 'researcher',
    'radiographer', 'recruitment consultant', 'registered general nurse'
  ],
  S: [
    'sales assistant', 'sales associate', 'sales executive', 'sales representative',
    'scientist', 'security developer', 'service desk analyst', 'service manager',
    'social media manager', 'software developer', 'software engineer', 'systems engineer',
    'supervisor', 'structural engineer', 'social worker', 'security guard',
    'store manager', 'site supervisor', 'SEO specialist', 'service technician',
    'sales director', 'secondary school teacher', 'sales administrator', 'school coordinator',
    'site administrator', 'shift manager'
  ],
  T: [
    'team leader', 'technician', 'technical lead', 'test engineer',
    'travel agent', 'typist', 'telesales executive', 'teaching assistant', 'technical coordinator'
  ],
  U: [
    'ux designer'
  ],
  W: [
    'web developer', 'warehouse worker'
  ]
};

const ForTalentJobProfiles: React.FC = () => {
  return (
    <div className="min-h-screen bg-white font-sans text-[#141414]">
      {/* Top Bar */}
      <div className="border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 py-2 flex justify-end items-center space-x-6 text-xs text-gray-500">
          <a href="#" className="hover:text-blue-600">contact us</a>
        </div>
      </div>

      {/* Header */}
      

      {/* Hero Section */}
      <section className="bg-[#051937] text-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center space-x-2 text-xs mb-8 opacity-70">
            <a href="#" className="hover:underline">home</a>
            <span>&gt;</span>
            <a href="#" className="hover:underline">job seekers</a>
            <span>&gt;</span>
            <span className="font-semibold">job profiles</span>
          </div>

          <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
            <div className="max-w-2xl">
              <h1 className="text-3xl font-light mb-2">job profiles.</h1>
              <h2 className="text-5xl font-semibold text-blue-400 mb-6 leading-tight">
                see some of the popular job profiles <ChevronDown className="inline-block ml-2" size={32} />
              </h2>
              <p className="text-lg opacity-90 max-w-md">
                Here you can find everything from areas of expertise to varied job roles. Start exploring today!
              </p>
            </div>
            <div className="mt-12 md:mt-0">
              <div className="relative">
                <Cloud size={120} className="text-blue-400 opacity-20" />
                <Cloud size={80} className="absolute -bottom-4 -right-4 text-blue-400 opacity-40" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-20 bg-[#f9f7f2]">
        <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-12 items-start">
          <h2 className="text-3xl font-medium text-[#051937]">see roles in every industry.</h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            Whether you're looking for a career change, planning your next steps or just curious to see what people in other job roles do, you've come to the right place. Just click on a job profile below to start exploring qualifications, responsibilities, pay rates and more in each job.
          </p>
        </div>
      </section>

      {/* Alphabetical Job List */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4">
          {Object.entries(jobData).map(([letter, jobs]) => (
            <div key={letter} className="flex flex-col md:flex-row border-t border-gray-100 py-12">
              <div className="md:w-1/4 mb-8 md:mb-0">
                <span className="text-4xl font-light text-gray-400">{letter}</span>
              </div>
              <div className="md:w-3/4 grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-4">
                {jobs.map((job) => (
                  <a 
                    key={job} 
                    href="#" 
                    className="text-xl text-blue-600 hover:text-blue-800 border-b border-gray-100 pb-2 transition-colors"
                  >
                    {job}
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section 1 */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="bg-[#051937] rounded-3xl overflow-hidden flex flex-col md:flex-row">
            <div className="md:w-1/2 p-12 md:p-20 flex flex-col justify-center">
              <h2 className="text-5xl font-semibold text-white mb-8 leading-tight">join randstad today.</h2>
              <p className="text-xl text-white/80 mb-10">
                Upload your CV to our network and get job opportunities sent straight to your inbox.
              </p>
              <button className="w-fit px-10 py-4 border border-white text-white rounded-lg hover:bg-white hover:text-[#051937] transition-all font-medium">
                let's do this
              </button>
            </div>
            <div className="md:w-1/2 h-64 md:h-auto relative">
              <img 
                src="https://picsum.photos/seed/randstad1/800/600" 
                alt="Join Randstad" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-blue-600/20 mix-blend-multiply"></div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section 2 */}
      <section className="py-20 bg-[#f9f7f2]">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2">
              <h2 className="text-5xl font-semibold text-[#051937] mb-8 leading-tight">let's find job.</h2>
              <p className="text-xl text-gray-600 mb-10">
                Explore all open positions and upload your resume. Our team will diligently match you with the perfect job.
              </p>
              <button className="w-fit px-10 py-4 border border-[#051937] text-[#051937] rounded-lg hover:bg-[#051937] hover:text-white transition-all font-medium">
                explore available jobs
              </button>
            </div>
            <div className="md:w-1/2">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <img 
                  src="https://picsum.photos/seed/randstad2/800/600" 
                  alt="Find Job" 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-blue-600/10"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Career Tips */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-end mb-12">
            <h2 className="text-4xl font-medium text-[#051937]">career tips</h2>
            <a href="#" className="text-blue-600 hover:underline text-xl">see all articles</a>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                date: '02 August 2023',
                title: 'randstad with heart.',
                img: 'https://picsum.photos/seed/tip1/400/300'
              },
              {
                date: '22 June 2023',
                title: 'the future of work after coronavirus.',
                img: 'https://picsum.photos/seed/tip2/400/300'
              },
              {
                date: '22 June 2023',
                title: 'bangalore remains india\'s highest paying city.',
                img: 'https://picsum.photos/seed/tip3/400/300'
              }
            ].map((tip, i) => (
              <div key={i} className="group cursor-pointer">
                <div className="rounded-2xl overflow-hidden mb-6 aspect-[4/3]">
                  <img 
                    src={tip.img} 
                    alt={tip.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <p className="text-sm text-gray-500 mb-2">{tip.date}</p>
                <h3 className="text-2xl font-medium text-[#051937] group-hover:text-blue-600 transition-colors">
                  {tip.title}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      

      {/* Sticky Feedback */}
      <div className="fixed right-0 top-1/2 -translate-y-1/2 z-[60]">
        <button className="bg-blue-600 text-white px-4 py-2 rounded-l-lg flex items-center space-x-2 shadow-lg hover:bg-blue-700 transition-colors [writing-mode:vertical-rl] rotate-180">
          <span className="text-sm font-medium">Feedback</span>
        </button>
      </div>

      {/* Cookie Icon */}
      <div className="fixed bottom-6 left-6 z-[60]">
        <button className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center shadow-xl hover:scale-110 transition-transform">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-6 h-6">
            <path d="M12 2a10 10 0 1 0 10 10 4 4 0 0 1-5-5 4 4 0 0 1-5-5" />
            <circle cx="12" cy="12" r="1" fill="currentColor" />
            <circle cx="15" cy="15" r="1" fill="currentColor" />
            <circle cx="9" cy="16" r="1" fill="currentColor" />
            <circle cx="8" cy="11" r="1" fill="currentColor" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default ForTalentJobProfiles;
