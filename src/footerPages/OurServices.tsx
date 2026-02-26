import React, { useState } from "react";
import { motion } from "motion/react";

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { 
  Heart, 
  User, 
  ChevronDown, 
  Linkedin, 
  Facebook, 
  Youtube, 
  Instagram, 
  Check,
  Mail,
  ArrowDown
} from 'lucide-react';

// Custom X icon (formerly Twitter)
const XIcon = () => (
  <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current" aria-hidden="true">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

const RandstadLogo = ({ className = "h-8" }: { className?: string }) => (
  <svg viewBox="0 0 160 40" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M14.5 10C14.5 4.47715 10.0228 0 4.5 0C1.46243 0 0 1.46243 0 4.5V35.5C0 38.5376 1.46243 40 4.5 40C10.0228 40 14.5 35.5228 14.5 30V10Z" fill="#247ba0" />
    <path d="M35.5 0C29.9772 0 25.5 4.47715 25.5 10V30C25.5 35.5228 29.9772 40 35.5 40C38.5376 40 40 38.5376 40 35.5V4.5C40 1.46243 38.5376 0 35.5 0Z" fill="#247ba0" />
    <text x="50" y="28" fill="#247ba0" style={{ font: 'bold 24px sans-serif' }}>randstad</text>
  </svg>
);

const NavItem = ({ label, hasDropdown = true }: { label: string; hasDropdown?: boolean }) => (
  <div className="flex items-center gap-1 cursor-pointer hover:text-[#247ba0] transition-colors py-4 px-2 text-[15px] font-medium text-[#141414]">
    {label}
    {hasDropdown && <ChevronDown size={14} className="mt-0.5" />}
  </div>
);

const ServiceCard = ({ title, image }: { title: string; image: string }) => (
  <motion.div 
    whileHover={{ y: -5 }}
    className="relative group cursor-pointer overflow-hidden rounded-sm aspect-[4/5]"
  >
    <img 
      src={image} 
      alt={title} 
      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
      referrerPolicy="no-referrer"
    />
    <div className="absolute inset-0 bg-gradient-to-t from-[#0a1931]/90 via-transparent to-transparent" />
    <div className="absolute bottom-6 left-6 right-6">
      <h3 className="text-white text-[22px] font-medium leading-tight">{title}</h3>
    </div>
  </motion.div>
);

export default function FooterOurServices() {
  return (
    <div className="min-h-screen bg-white font-sans text-[#141414]">
      {/* Top Bar */}
      <div className="bg-white border-b border-gray-100">
        <div className="max-w-[1440px] mx-auto px-6 flex justify-end py-2">
          <a href="#" className="text-[12px] text-[#666666] hover:underline">contact us</a>
        </div>
      </div>

      {/* Header */}
      

      {/* Hero Section */}
      <section className="bg-[#0a1931] text-white py-20 overflow-hidden relative">
        <div className="max-w-[1440px] mx-auto px-6 grid lg:grid-cols-2 items-center gap-12">
          <div className="z-10">
            <div className="flex gap-2 text-[12px] text-gray-400 mb-8">
              <span className="hover:underline cursor-pointer">home</span>
              <span>&gt;</span>
              <span className="hover:underline cursor-pointer">employers</span>
              <span>&gt;</span>
              <span className="text-white">our services</span>
            </div>
            <h1 className="text-[56px] lg:text-[72px] font-medium leading-[1.1] tracking-tight mb-8">
              our services and <br />unique products.
            </h1>
            <p className="text-[18px] text-gray-300 mb-10 max-w-lg leading-relaxed">
              Here you can find out quickly and concisely which services Randstad offers you.
            </p>
            <button className="px-8 py-4 border border-white text-white font-medium hover:bg-white hover:text-[#0a1931] transition-all duration-300">
              request a callback
            </button>
          </div>
          
          <div className="relative flex justify-center lg:justify-end">
            <div className="relative w-[400px] h-[400px]">
              {/* Abstract Graphic */}
              <div className="absolute inset-0 border border-white/10 rounded-full" />
              <div className="absolute inset-[40px] border border-white/20 rounded-full" />
              <div className="absolute inset-[80px] border border-white/30 rounded-full" />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 bg-[#247ba0]/20 rounded-full blur-xl" />
              <div className="absolute top-[120px] left-[280px] w-16 h-16 bg-[#00d1ff] rounded-full flex items-center justify-center">
                <div className="w-4 h-4 bg-white rounded-full" />
              </div>
              <div className="absolute bottom-[100px] left-[40px] w-4 h-4 bg-white rounded-full" />
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section className="py-24 bg-white">
        <div className="max-w-[1440px] mx-auto px-6 grid lg:grid-cols-[1fr_2fr] gap-12">
          <h2 className="text-[32px] font-medium">our portfolio.</h2>
          <div>
            <p className="text-[18px] text-[#141414] leading-relaxed mb-8">
              As the largest personnel service provider in India, we bring companies of all industries and sizes together with the right employees within the framework of temporary employment and personnel placement. In addition, we support and advise you in all aspects of HR management and offer solutions that make HR processes in your company more efficient.
            </p>
            <ul className="space-y-4">
              <li className="flex items-center gap-3 text-[#247ba0] font-medium cursor-pointer hover:underline">
                <div className="w-1.5 h-1.5 bg-[#247ba0] rounded-full" />
                products and services
              </li>
              <li className="flex items-center gap-3 text-[#247ba0] font-medium cursor-pointer hover:underline">
                <div className="w-1.5 h-1.5 bg-[#247ba0] rounded-full" />
                specialisations
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Products and Services Grid */}
      <section className="py-24 bg-white">
        <div className="max-w-[1440px] mx-auto px-6">
          <div className="mb-16">
            <h2 className="text-[42px] font-medium mb-4">products and services.</h2>
            <p className="text-[16px] text-[#666666] mb-2">Which products can we support you with?</p>
            <p className="text-[16px] text-[#666666]">Get an overview here and learn more about our products and services.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <ServiceCard title="executive search" image="https://picsum.photos/seed/exec/600/800" />
            <ServiceCard title="permanent recruitment" image="https://picsum.photos/seed/perm/600/800" />
            <ServiceCard title="rpo and msp" image="https://picsum.photos/seed/rpo/600/800" />
            <ServiceCard title="hire to retire" image="https://picsum.photos/seed/hire/600/800" />
            
            <ServiceCard title="talent export" image="https://picsum.photos/seed/export/600/800" />
            <ServiceCard title="workforce advisory" image="https://picsum.photos/seed/advisory/600/800" />
            <ServiceCard title="talent acquisition" image="https://picsum.photos/seed/acq/600/800" />
            <ServiceCard title="sales & trade marketing" image="https://picsum.photos/seed/sales/600/800" />
            
            <ServiceCard title="payroll transfer services" image="https://picsum.photos/seed/payroll/600/800" />
            <ServiceCard title="temporary staffing" image="https://picsum.photos/seed/temp/600/800" />
            <ServiceCard title="managed services" image="https://picsum.photos/seed/managed/600/800" />
          </div>
        </div>
      </section>

      {/* Randstad Enterprise Section */}
      <section className="py-24 bg-[#f5f5f2]">
        <div className="max-w-[1440px] mx-auto px-6 grid lg:grid-cols-2 items-center gap-16">
          <div>
            <p className="text-[18px] text-[#141414] mb-4">introducing</p>
            <h2 className="text-[56px] font-medium leading-tight mb-8">randstad <br />enterprise.</h2>
            <p className="text-[18px] text-[#141414] leading-relaxed mb-10 max-w-lg">
              Delivering complex, large-scale talent advisory, acquisition, development and transition solutions, Randstad Enterprise empowers you to unlock what's at the heart of your business success — your people.
            </p>
            <button className="px-8 py-4 border border-[#141414] text-[#141414] font-medium hover:bg-[#141414] hover:text-white transition-all duration-300">
              explore our solutions
            </button>
          </div>
          <div className="relative">
            <img 
              src="https://picsum.photos/seed/enterprise/800/600" 
              alt="Randstad Enterprise" 
              className="w-full h-full object-cover rounded-sm shadow-xl"
              referrerPolicy="no-referrer"
            />
            {/* Yellow Dots Overlay */}
            <div className="absolute -left-10 top-1/2 -translate-y-1/2 w-[300px] h-[300px] pointer-events-none">
              <svg viewBox="0 0 100 100" className="w-full h-full">
                <circle cx="50" cy="50" r="45" fill="none" stroke="#eaff00" strokeWidth="2" strokeDasharray="1 8" />
                {[...Array(12)].map((_, i) => (
                  <circle 
                    key={i} 
                    cx={50 + 45 * Math.cos((i * 30 * Math.PI) / 180)} 
                    cy={50 + 45 * Math.sin((i * 30 * Math.PI) / 180)} 
                    r="3" 
                    fill="#eaff00" 
                  />
                ))}
              </svg>
            </div>
          </div>
        </div>
      </section>

      {/* Looking for Employees Call to Action */}
      <section className="bg-[#0a1931] text-white py-24">
        <div className="max-w-[1440px] mx-auto px-6 grid lg:grid-cols-[1fr_2fr] items-center gap-12">
          <h2 className="text-[32px] font-medium">looking for employees?</h2>
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
            <p className="text-[32px] font-medium leading-tight max-w-xl">
              tell us a few details - we'll take care of it. free and without obligation.
            </p>
            <button className="px-8 py-4 border border-white text-white font-medium hover:bg-white hover:text-[#0a1931] transition-all duration-300 whitespace-nowrap">
              request a callback
            </button>
          </div>
        </div>
      </section>

      {/* Workforce Insights Section */}
      <section className="py-24 bg-white">
        <div className="max-w-[1440px] mx-auto px-6 grid lg:grid-cols-2 items-center gap-16">
          <div>
            <h2 className="text-[56px] font-medium leading-tight mb-8">workforce insights delivered to your inbox.</h2>
            <p className="text-[16px] text-[#666666] leading-relaxed mb-10 max-w-lg">
              Want to reduce your turnover rate, improve your company culture, or be inspired on improving employability for young people? Sign up to the monthly workforce insights newsletter and stay up to date with the latest recruitment and labor market news, tips, trends and reports for business leaders across the globe.
            </p>
            <button className="px-8 py-4 border border-[#247ba0] text-[#247ba0] font-medium hover:bg-[#247ba0] hover:text-white transition-all duration-300">
              subscribe now
            </button>
          </div>
          <div className="flex justify-center relative">
            <div className="relative w-full max-w-md aspect-square flex items-center justify-center">
              <div className="absolute inset-0 bg-[#247ba0]/5 rounded-full" />
              <div className="relative z-10 w-[80%] h-[60%] border-[12px] border-[#247ba0] rounded-[40px] flex items-center justify-center">
                <div className="absolute -top-16 left-1/2 -translate-x-1/2">
                  <ArrowDown size={80} className="text-[#00d1ff]" />
                </div>
                <Mail size={120} className="text-[#247ba0]" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="py-24 bg-[#f5f5f2]">
        <div className="max-w-[1440px] mx-auto px-6 grid lg:grid-cols-[1fr_2fr] gap-12">
          <h2 className="text-[24px] font-medium leading-tight">
            industries: we are expert in providing recruitment for
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6">
            {[
              "industrial, manufacturing, engi...",
              "information technology",
              "fmcg",
              "banking, financial services & in...",
              "pharma, healthcare, life sciences",
              "finance & accounting"
            ].map((industry, i) => (
              <div key={i} className="border-b border-gray-300 pb-4 text-[18px] font-medium text-[#141414] cursor-pointer hover:text-[#247ba0]">
                {industry}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Principles Section */}
      <section className="py-24 bg-white">
        <div className="max-w-[1440px] mx-auto px-6">
          <h2 className="text-[42px] font-medium mb-16">our principles.</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {/* Card 1 */}
            <div className="flex flex-col">
              <div className="bg-[#0a1931] rounded-lg p-12 mb-8 aspect-video flex items-center justify-center">
                <div className="flex gap-4">
                  <div className="w-16 h-24 bg-[#00d1ff] rounded-full" />
                  <div className="w-16 h-24 bg-[#00d1ff] rounded-full mt-4" />
                  <div className="w-16 h-24 bg-[#00d1ff] rounded-full" />
                </div>
              </div>
              <h3 className="text-[24px] font-medium mb-4">sustainable commitment</h3>
              <div className="flex gap-4 items-start mb-6">
                <Check size={20} className="text-gray-400 mt-1 shrink-0" />
                <p className="text-[16px] text-[#666666] leading-relaxed">
                  We assume responsibility in business and for society. We are committed to sustainable action in many areas - from diversity and inclusion to supporting charitable causes.
                </p>
              </div>
              <a href="#" className="text-[#247ba0] font-medium hover:underline">learn more</a>
            </div>

            {/* Card 2 */}
            <div className="flex flex-col">
              <div className="bg-[#0a1931] rounded-lg p-12 mb-8 aspect-video flex items-center justify-center">
                <div className="w-32 h-40 bg-[#247ba0]/40 rounded-lg relative overflow-hidden p-4">
                  <div className="w-full h-2 bg-white/20 mb-2" />
                  <div className="w-full h-2 bg-white/20 mb-2" />
                  <div className="w-1/2 h-2 bg-white/20" />
                  <div className="absolute bottom-4 right-4 w-12 h-12 bg-[#eaff00] rounded-full" />
                </div>
              </div>
              <h3 className="text-[24px] font-medium mb-4">forward looking qualification measures</h3>
              <div className="flex gap-4 items-start mb-6">
                <Check size={20} className="text-gray-400 mt-1 shrink-0" />
                <p className="text-[16px] text-[#666666] leading-relaxed">
                  Our answer to the shortage of skilled workers is qualification. The Randstad Academy supports and encourages applicants and employees through practice-oriented offers in the fulfillment of their tasks.
                </p>
              </div>
              <a href="#" className="text-[#247ba0] font-medium hover:underline">learn more</a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      

      {/* Floating Feedback Button */}
      <div className="fixed right-0 top-1/2 -translate-y-1/2 z-[100] origin-right rotate-90">
        <button className="bg-[#247ba0] text-white px-6 py-2 text-[14px] font-medium rounded-t-md shadow-lg">
          Feedback
        </button>
      </div>

      {/* Cookie Consent Button */}
      <div className="fixed bottom-6 left-6 z-[100]">
        <button className="w-12 h-12 bg-[#247ba0] text-white rounded-full flex items-center justify-center shadow-xl hover:scale-110 transition-transform">
          <div className="w-6 h-6 border-2 border-white rounded-full border-dashed animate-spin-slow" />
        </button>
      </div>
    </div>
  );
}
