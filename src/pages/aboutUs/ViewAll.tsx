import React, { useState } from "react";
import { motion } from "motion/react";

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { 
  Heart, 
  User, 
  MapPin, 
  Clock, 
  Mail, 
  Linkedin, 
  LocateFixed, 
  ChevronDown, 
  List, 
  Map as MapIcon,
  Search,
  Plus
} from 'lucide-react';

const offices = [
  {
    city: 'ahmedabad',
    address: 'randstad india private limited, 603, 6th floor, addor aspire,opp. passport office,near jahanvee restaurant,ambawadi, ahmedabad, 380015 ahmedabad',
    hours: '9:00 - 18:30',
    email: 'sales.enquiry@randstad.in'
  },
  {
    city: 'baroda',
    address: 'randstad india private limited, 210, 2nd floor, panorama complex, opp welcome hotel,r c dutt road, alkapuri,baroda-390007, opp. welcome hotel, r c dutt road, alkapuri, 390007 baroda',
    hours: '9:00 - 18:30',
    email: 'sales.enquiry@randstad.in'
  },
  {
    city: 'bengaluru',
    address: 'randstad india private limited, randstad tower,, no.1, main guard cross road,, 560001 bengaluru',
    hours: '9:00 - 18:30',
    email: 'sales.enquiry@randstad.in'
  },
  {
    city: 'bhubaneswar',
    address: 'randstad india private limited, space no. dcb – 412, 4th floor, dlf cyber city,, patia, chandaka industrial estate, chandrasekharpur, 751024 bhubaneswar',
    hours: '9:00 - 18:30',
    email: 'sales.enquiry@randstad.in'
  },
  {
    city: 'chennai',
    address: 'randstad india private limited, old no 5 & 5 a , new no 9, randstad house,, pycrofts garden road, 600006 chennai',
    hours: '9:00 - 18:30',
    email: 'sales.enquiry@randstad.in'
  },
  {
    city: 'cochin',
    address: 'randstad india private limited, business communication centre, 2nd floor, chiramel chambers,, kurisupally road, ravipuram,, 682015 cochin',
    hours: '9:00 - 18:30',
    email: 'sales.enquiry@randstad.in'
  },
  {
    city: 'gurgaon',
    address: 'randstad india private limited,1st floor, tower b,, unitech business park, near huda metro station,, 122001 gurgaon',
    hours: '9:00 - 18:30',
    email: 'sales.enquiry@randstad.in'
  },
  {
    city: 'hyderabad',
    address: 'randstad india private limited, my home twitza, unit no. 301 and 302, 3rd floor, raidurg panmaqtha village, , serilingampally mandal, hyderabad , 500081 hyderabad',
    hours: '9:00 - 18:30',
    email: 'sales.enquiry@randstad.in'
  },
  {
    city: 'indore',
    address: 'randstad india private limited, 204 -205, 2nd floor, apollo premiere, vijay nagar, indore, 452010 indore',
    hours: '9:00 - 18:30',
    email: 'sales.enquiry@randstad.in'
  },
  {
    city: 'jaipur',
    address: 'randstad india private limited, s-13, second floor,geejgarh tower, hawa sadak, civil lines, jaipur, 302006 jaipur',
    hours: '9:00 - 18:30',
    email: 'sales.enquiry@randstad.in'
  },
  {
    city: 'jamshedpur',
    address: 'randstad india private limited, bhadani trade centre, room no - b-1/6 2nd floor, r-road,bistupur, 831001 jamshedpur',
    hours: '9:00 - 18:30',
    email: 'sales.enquiry@randstad.in'
  },
  {
    city: 'kolkata',
    address: 'randstad india private limited, unimark asian- 15th floor, 52/1 shakespeare sarani, kolkata, 700017 kolkata',
    hours: '9:00 - 18:30',
    email: 'sales.enquiry@randstad.in'
  },
  {
    city: 'mumbai',
    address: 'randstad india private limited, 4th floor, techweb centre,, new link road, oshiwara, jogeshwari (w), mumbai, 400102 mumbai',
    hours: '9:00 - 18:30',
    email: 'sales.enquiry@randstad.in'
  },
  {
    city: 'new delhi',
    address: 'randstad india private limited, suit no.001 & 002, ground floor, copia corporate suites,, building no.9, jasola district centre, new delhi, 110025 new delhi',
    hours: '9:00 - 18:30',
    email: 'sales.enquiry@randstad.in'
  },
  {
    city: 'pune',
    address: 'randstad india private limited, 8th floor, amar avinash corporate plaza,, bund garden road, near inox theatre, 411001 pune',
    hours: '9:00 - 18:30',
    email: 'sales.enquiry@randstad.in'
  }
];

export default function AboutRandViewAll() {
  const [view, setView] = useState<'list' | 'map'>('list');

  return (
    <div className="min-h-screen flex flex-col font-sans">
      {/* Top Navigation Bar */}
      

      {/* Hero Section */}
      <section className="bg-randstad-navy text-white pt-12 pb-20 px-6 lg:px-12">
        <div className="max-w-[1440px] mx-auto">
          <nav className="text-[13px] mb-8 flex items-center gap-2 opacity-70">
            <a href="#" className="hover:underline">home</a>
            <span>&gt;</span>
            <span>contact us</span>
          </nav>

          <h1 className="text-6xl lg:text-7xl font-bold mb-8 tracking-tight">find a branch near you.</h1>
          
          <p className="text-lg lg:text-xl max-w-3xl mb-12 leading-relaxed opacity-90">
            Looking for our nearest branch? Use our branch locator to find our locations, opening hours and contact information. Get in touch and get our human touch!
          </p>

          {/* Search Form */}
          <div className="flex flex-col gap-4">
            <div className="flex flex-col lg:flex-row gap-0 bg-white/10 p-0 rounded-sm overflow-hidden border border-white/20 max-w-5xl">
              <div className="flex-1 flex flex-col p-4 bg-white">
                <label className="text-[11px] uppercase font-bold text-randstad-navy mb-1">where</label>
                <input 
                  type="text" 
                  placeholder="city, state or zip code" 
                  className="w-full text-randstad-navy outline-none text-lg placeholder:text-gray-400"
                />
              </div>
              <div className="w-px bg-gray-200 hidden lg:block"></div>
              <div className="flex-1 flex flex-col p-4 bg-white">
                <label className="text-[11px] uppercase font-bold text-randstad-navy mb-1">specialisms <span className="font-normal opacity-50">optional</span></label>
                <button className="w-full flex items-center justify-between text-gray-400 text-lg">
                  <span className="flex items-center gap-2"><Plus className="w-5 h-5" /> select specialism</span>
                  <ChevronDown className="w-5 h-5" />
                </button>
              </div>
              <button className="bg-randstad-blue hover:bg-blue-600 transition-colors px-12 py-6 text-lg font-bold">
                search for branch
              </button>
            </div>
            
            <button className="flex items-center gap-2 text-sm font-medium hover:underline w-fit">
              <LocateFixed className="w-4 h-4" />
              use current location
            </button>
          </div>
        </div>
      </section>

      {/* Main Content Area */}
      <main className="bg-randstad-light flex-1 py-16 px-6 lg:px-12">
        <div className="max-w-[1440px] mx-auto">
          <div className="flex items-center justify-between mb-12">
            <h2 className="text-3xl font-bold text-randstad-navy">16 recruitment & staffing agencies in india</h2>
            <div className="flex items-center bg-white rounded-sm border border-gray-200 p-1">
              <button 
                onClick={() => setView('list')}
                className={`flex items-center gap-2 px-4 py-2 text-sm font-bold rounded-sm transition-colors ${view === 'list' ? 'bg-randstad-navy text-white' : 'text-randstad-navy hover:bg-gray-100'}`}
              >
                <List className="w-4 h-4" />
                list
              </button>
              <button 
                onClick={() => setView('map')}
                className={`flex items-center gap-2 px-4 py-2 text-sm font-bold rounded-sm transition-colors ${view === 'map' ? 'bg-randstad-navy text-white' : 'text-randstad-navy hover:bg-gray-100'}`}
              >
                <MapIcon className="w-4 h-4" />
                map
              </button>
            </div>
          </div>

          {/* Grid of Office Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {offices.map((office, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05 }}
                className="bg-white p-8 flex flex-col shadow-sm border border-gray-100"
              >
                <h3 className="text-2xl font-bold text-randstad-blue mb-6 hover:underline cursor-pointer">
                  {office.city}
                </h3>
                
                <div className="space-y-6 flex-1">
                  <div className="flex gap-4">
                    <MapPin className="w-5 h-5 text-randstad-navy shrink-0 mt-1" />
                    <div className="text-[15px] leading-relaxed text-randstad-navy">
                      <p className="mb-2">{office.address}</p>
                      <a href="#" className="text-randstad-blue font-bold hover:underline">get directions</a>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <Clock className="w-5 h-5 text-randstad-navy shrink-0" />
                    <span className="text-[15px] text-randstad-navy">now open: {office.hours}</span>
                  </div>

                  <div className="flex items-center gap-4">
                    <Mail className="w-5 h-5 text-randstad-navy shrink-0" />
                    <a href={`mailto:${office.email}`} className="text-[15px] text-randstad-blue hover:underline">
                      {office.email}
                    </a>
                  </div>
                </div>

                <button className="mt-10 w-full bg-randstad-blue hover:bg-blue-600 text-white font-bold py-4 rounded-sm transition-colors">
                  more information
                </button>
              </motion.div>
            ))}
          </div>

          {/* Progress and View More */}
          <div className="flex flex-col items-center gap-8">
            <div className="w-full max-w-md">
              <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                <div className="h-full bg-randstad-blue w-[93.75%]"></div>
              </div>
              <p className="text-center mt-4 text-sm font-medium text-randstad-navy opacity-70">
                15 of 16 agencies seen
              </p>
            </div>
            
            <button className="bg-white border border-randstad-navy text-randstad-navy font-bold px-12 py-4 hover:bg-gray-50 transition-colors rounded-sm">
              view 1 more
            </button>
          </div>
        </div>
      </main>

      {/* Footer */}
      

      {/* Floating Feedback Button */}
      <button className="fixed right-0 top-1/2 -translate-y-1/2 bg-randstad-blue text-white px-4 py-12 rounded-l-md font-bold text-xs [writing-mode:vertical-rl] rotate-180 flex items-center justify-center gap-2 hover:bg-blue-600 transition-colors shadow-lg z-40">
        Feedback
      </button>

      {/* Cookie Consent Icon */}
      <button className="fixed left-6 bottom-6 w-12 h-12 bg-randstad-blue text-white rounded-full flex items-center justify-center shadow-lg hover:bg-blue-600 transition-colors z-40">
        <div className="w-6 h-6 border-2 border-white rounded-full border-dashed"></div>
      </button>
    </div>
  );
}
