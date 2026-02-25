import YellowBanner from "@/src/components/YellowBanner";
import { motion } from "motion/react";
import { useState } from "react";
import { Link } from "react-router-dom";

import {
  MapPin,
  ChevronDown,
  Heart,
  User,
  Mail,
  ChevronRight,
  Info,
} from "lucide-react";

export default function ContractRoles() {
  const [searchTerm, setSearchTerm] = useState("");
  const [location, setLocation] = useState("");
  const [range, setRange] = useState("10 km");

  return (
    <div className="bg-white text-[#141414]">

      {/* ================= Breadcrumb ================= */}
      <div className="bg-[#001a3d] text-white px-4 md:px-8 py-3 text-xs flex items-center space-x-2">
        <Link to="/" className="opacity-70 hover:opacity-100">
          home
        </Link>
        <ChevronRight className="w-3 h-3 opacity-50" />
        <Link to="/jobs" className="opacity-70 hover:opacity-100">
          jobs
        </Link>
        <ChevronRight className="w-3 h-3 opacity-50" />
        <span className="font-semibold">contract</span>
      </div>

      {/* ================= Search Section ================= */}
      <section className="bg-[#001a3d] text-white px-4 md:px-8 pt-8 pb-12">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-6">

          {/* Search For */}
          <div className="md:col-span-4 space-y-2">
            <label className="text-sm opacity-90">search for</label>
            <input
              type="text"
              placeholder="job title or keyword"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full bg-white text-gray-900 px-4 py-3 rounded-sm focus:outline-none focus:ring-2 focus:ring-[#2175d9]"
            />
          </div>

          {/* Where */}
          <div className="md:col-span-4 space-y-2">
            <label className="text-sm opacity-90">where</label>
            <input
              type="text"
              placeholder="city, state or postcode"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              className="w-full bg-white text-gray-900 px-4 py-3 rounded-sm focus:outline-none focus:ring-2 focus:ring-[#2175d9]"
            />
            <button className="flex items-center text-xs mt-2 hover:underline">
              <MapPin className="w-3 h-3 mr-1" />
              use current location
            </button>
          </div>

          {/* Range */}
          <div className="md:col-span-2 space-y-2">
            <label className="text-sm opacity-90">range</label>
            <div className="relative">
              <select
                value={range}
                onChange={(e) => setRange(e.target.value)}
                className="w-full bg-white text-gray-900 px-4 py-3 rounded-sm appearance-none focus:outline-none focus:ring-2 focus:ring-[#2175d9]"
              >
                <option>10 km</option>
                <option>25 km</option>
                <option>50 km</option>
                <option>100 km</option>
              </select>
              <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 pointer-events-none" />
            </div>
          </div>

          {/* Search Button */}
          <div className="md:col-span-2 flex items-end">
            <button className="w-full bg-[#2175d9] hover:bg-[#1a5eb0] text-white font-bold py-3 rounded-sm transition-colors">
              search jobs
            </button>
          </div>
        </div>
      </section>

      {/* ================= Filters Bar ================= */}
      <div className="bg-white border-b border-gray-200 px-4 md:px-8 py-4">
        <div className="max-w-6xl mx-auto flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center space-x-4">
            <span className="text-sm font-medium text-gray-600">filters:</span>

            <button className="flex items-center px-4 py-2 border border-gray-300 rounded-full text-sm hover:bg-gray-50">
              location <ChevronDown className="ml-2 w-4 h-4" />
            </button>

            <button className="px-4 py-2 border border-gray-300 rounded-full text-sm hover:bg-gray-50">
              all filters
            </button>
          </div>

          <div className="flex items-center space-x-4">
            <button className="bg-[#2175d9] hover:bg-[#1a5eb0] text-white text-sm font-bold px-6 py-2 rounded-sm transition-colors">
              save this search & get alerts
            </button>

            <div className="flex items-center space-x-3 text-gray-400">
              <Heart className="w-6 h-6 cursor-pointer hover:text-[#2175d9]" />
              <User className="w-6 h-6 cursor-pointer hover:text-[#2175d9]" />
            </div>
          </div>
        </div>
      </div>

      {/* ================= No Results Section ================= */}
      <main className="max-w-6xl mx-auto px-4 md:px-8 py-16">
        <div className="flex flex-col md:flex-row gap-12">
          <div className="md:w-1/3">
            <h1 className="text-4xl font-light text-gray-800">
              no results found
            </h1>
          </div>

          <div className="md:w-2/3 space-y-6">
            <p className="text-lg text-gray-700">
              We did not find any jobs with these filters. Try adjusting your
              search criteria.
            </p>

            <ul className="space-y-4">
              <li>✓ consider removing some filters.</li>
              <li>✓ expand your location range.</li>
              <li>✓ check spelling of job title.</li>
            </ul>
          </div>
        </div>
      </main>

      {/* ================= Alert Banner ================= */}
      <YellowBanner/>

      {/* ================= Floating Buttons ================= */}
      <div className="fixed right-0 top-1/2 -translate-y-1/2 z-40">
        <button
          className="bg-[#2175d9] text-white text-xs font-bold py-3 px-1 rounded-l-md"
          style={{ writingMode: "vertical-rl" }}
        >
          feedback
        </button>
      </div>

      <div className="fixed bottom-6 left-6 z-40">
        <button className="bg-[#2175d9] text-white p-3 rounded-full shadow-lg hover:scale-110 transition-transform">
          <Info className="w-6 h-6" />
        </button>
      </div>
    </div>
  );
}