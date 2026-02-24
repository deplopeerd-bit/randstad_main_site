import React, { useRef, useState } from "react";
import { AnimatePresence, motion } from "motion/react";

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { 
  Upload, 
  ChevronRight, 
  ChevronLeft, 
  CheckCircle2, 
  User, 
  Briefcase, 
  MapPin, 
  FileText, 
  Send,
  Info
} from 'lucide-react';

// Types for form data
interface FormData {
  email: string;
  firstName: string;
  lastName: string;
  whatsappNumber: string;
  gender: string;
  industry: string;
  experience: string;
  collegeName: string;
  companyName: string;
  currentCTC: string;
  keySkills: string;
  state: string;
  city: string;
  pincode: string;
  resume: File | null;
  referralSource: string;
  jobFairLocation: string;
  consent: boolean | null;
}

const INITIAL_DATA: FormData = {
  email: '',
  firstName: '',
  lastName: '',
  whatsappNumber: '',
  gender: '',
  industry: '',
  experience: '',
  collegeName: '',
  companyName: '',
  currentCTC: '',
  keySkills: '',
  state: '',
  city: '',
  pincode: '',
  resume: null,
  referralSource: '',
  jobFairLocation: '',
  consent: null,
};

const INDUSTRIES = [
  "Banking Finance Sales", "Engineering", "Finance & Accounting", 
  "HR & Support", "ITES/GCC", "Legal & Compliance", 
  "Manufacturing", "Pharma, Healthcare & Lifesciences", 
  "Sales & Trade Marketing", "Supply Chain & Logistics", "Wholesale & Retail"
];

const EXPERIENCE_LEVELS = [
  "Fresher", "0-2 years", "2-5 years", "5-10 years", "10+ years"
];

const SOURCES = [
  "Randstad India Website", "LinkedIn", "Facebook", "Instagram", 
  "Twitter", "Email", "College/Campus", "Whatsapp", 
  "Referral", "Job Fair", "Other"
];

const STATES = [
  "Andhra Pradesh", "Arunachal Pradesh", "Assam", "Bihar", "Chhattisgarh", 
  "Goa", "Gujarat", "Haryana", "Himachal Pradesh", "Jharkhand", 
  "Karnataka", "Kerala", "Madhya Pradesh", "Maharashtra", "Manipur", 
  "Meghalaya", "Mizoram", "Nagaland", "Odisha", "Punjab", 
  "Rajasthan", "Sikkim", "Tamil Nadu", "Telangana", "Tripura", 
  "Uttar Pradesh", "Uttarakhand", "West Bengal"
];

export default function ApplicationForm() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState<FormData>(INITIAL_DATA);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const totalSteps = 5;

  const updateField = (field: keyof FormData, value: any) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const nextStep = () => setStep(s => Math.min(s + 1, totalSteps));
  const prevStep = () => setStep(s => Math.max(s - 1, 1));

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      updateField('resume', e.target.files[0]);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Submitting form data:', formData);
    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-[#F0F2F5] flex items-center justify-center p-4 font-sans">
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="bg-white rounded-2xl shadow-xl p-8 max-w-md w-full text-center border border-black/5"
        >
          <div className="w-20 h-20 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle2 className="w-10 h-10 text-emerald-600" />
          </div>
          <h1 className="text-2xl font-bold text-gray-900 mb-2">Application Submitted!</h1>
          <p className="text-gray-600 mb-8">
            Thank you for your interest in Randstad. We have received your resume and will process your application smoothly.
          </p>
          <button 
            onClick={() => { setIsSubmitted(false); setStep(1); setFormData(INITIAL_DATA); }}
            className="w-full py-3 bg-[#0070AD] text-white rounded-xl font-semibold hover:bg-[#005a8c] transition-colors"
          >
            Submit Another Response
          </button>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#F0F2F5] pb-12 font-sans selection:bg-[#0070AD]/20">
      {/* Header Banner */}
      <div className="bg-[#0070AD] h-48 relative overflow-hidden">
        <div className="max-w-4xl mx-auto h-full flex flex-col justify-center px-6 relative z-10">
          <div className="flex items-center gap-4 mb-2">
            <div className="bg-white p-2 rounded-lg shadow-lg">
              <svg width="40" height="40" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M20 20H45V45H20V20Z" fill="#0070AD"/>
                <path d="M55 20H80V45H55V20Z" fill="#0070AD"/>
                <path d="M20 55H45V80H20V55Z" fill="#0070AD"/>
                <path d="M55 55H80V80H55V55Z" fill="#0070AD"/>
                <path d="M32.5 32.5H67.5V67.5H32.5V32.5Z" fill="white"/>
                <path d="M40 40H60V60H40V40Z" fill="#0070AD"/>
              </svg>
            </div>
            <h1 className="text-white text-3xl font-bold tracking-tight">randstad</h1>
          </div>
          <p className="text-white/80 text-xl font-light italic">partner for talent.</p>
        </div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full -mr-24 -mt-24 blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-black/5 rounded-full -ml-12 -mb-12 blur-2xl"></div>
      </div>

      <div className="max-w-4xl mx-auto -mt-12 px-4 relative z-20">
        <div className="bg-white rounded-2xl shadow-2xl border border-black/5 overflow-hidden">
          <div className="bg-gray-50 border-bottom border-gray-100 px-8 py-4 flex items-center justify-between">
            <div className="flex gap-2">
              {[1, 2, 3, 4, 5].map((i) => (
                <div 
                  key={i}
                  className={`h-1.5 w-12 rounded-full transition-all duration-500 ${
                    i <= step ? 'bg-[#0070AD]' : 'bg-gray-200'
                  }`}
                />
              ))}
            </div>
            <span className="text-xs font-semibold text-gray-400 uppercase tracking-widest">
              Step {step} of {totalSteps}
            </span>
          </div>

          <form onSubmit={handleSubmit} className="p-8 md:p-12">
            <AnimatePresence mode="wait">
              {step === 1 && (
                <motion.div
                  key="step1"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="space-y-8"
                >
                  <div className="border-l-4 border-[#0070AD] pl-6 mb-8">
                    <h2 className="text-2xl font-bold text-gray-900">Personal Information</h2>
                    <p className="text-gray-500 mt-1">Please fill out your basic contact details.</p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-semibold text-gray-700 flex items-center gap-2">
                        <User className="w-4 h-4 text-[#0070AD]" /> First Name *
                      </label>
                      <input 
                        required
                        type="text"
                        placeholder="e.g. Rahul"
                        value={formData.firstName}
                        onChange={(e) => updateField('firstName', e.target.value)}
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#0070AD] focus:ring-2 focus:ring-[#0070AD]/20 outline-none transition-all"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-semibold text-gray-700 flex items-center gap-2">
                        <User className="w-4 h-4 text-[#0070AD]" /> Last Name *
                      </label>
                      <input 
                        required
                        type="text"
                        placeholder="e.g. Sharma"
                        value={formData.lastName}
                        onChange={(e) => updateField('lastName', e.target.value)}
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#0070AD] focus:ring-2 focus:ring-[#0070AD]/20 outline-none transition-all"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-gray-700">Email Address *</label>
                    <input 
                      required
                      type="email"
                      placeholder="yourname@example.com"
                      value={formData.email}
                      onChange={(e) => updateField('email', e.target.value)}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#0070AD] focus:ring-2 focus:ring-[#0070AD]/20 outline-none transition-all"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-gray-700">10-digit WhatsApp Number *</label>
                    <div className="relative">
                      <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 font-medium">+91</span>
                      <input 
                        required
                        type="tel"
                        pattern="[0-9]{10}"
                        placeholder="9876543210"
                        value={formData.whatsappNumber}
                        onChange={(e) => updateField('whatsappNumber', e.target.value.replace(/\D/g, '').slice(0, 10))}
                        className="w-full pl-14 pr-4 py-3 rounded-xl border border-gray-200 focus:border-[#0070AD] focus:ring-2 focus:ring-[#0070AD]/20 outline-none transition-all"
                      />
                    </div>
                  </div>

                  <div className="space-y-3">
                    <label className="text-sm font-semibold text-gray-700">Gender *</label>
                    <div className="flex flex-wrap gap-4">
                      {['Male', 'Female', 'Other'].map((g) => (
                        <label key={g} className="flex items-center gap-3 cursor-pointer group">
                          <input 
                            type="radio" 
                            name="gender" 
                            required
                            checked={formData.gender === g}
                            onChange={() => updateField('gender', g)}
                            className="w-5 h-5 text-[#0070AD] border-gray-300 focus:ring-[#0070AD]" 
                          />
                          <span className="text-gray-600 group-hover:text-gray-900 transition-colors">{g}</span>
                        </label>
                      ))}
                    </div>
                  </div>
                </motion.div>
              )}

              {step === 2 && (
                <motion.div
                  key="step2"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="space-y-8"
                >
                  <div className="border-l-4 border-[#0070AD] pl-6 mb-8">
                    <h2 className="text-2xl font-bold text-gray-900">Professional Background</h2>
                    <p className="text-gray-500 mt-1">Tell us about your industry and experience.</p>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-gray-700 flex items-center gap-2">
                      <Briefcase className="w-4 h-4 text-[#0070AD]" /> Industry *
                    </label>
                    <select 
                      required
                      value={formData.industry}
                      onChange={(e) => updateField('industry', e.target.value)}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#0070AD] focus:ring-2 focus:ring-[#0070AD]/20 outline-none transition-all bg-white"
                    >
                      <option value="">Choose Industry</option>
                      {INDUSTRIES.map(ind => <option key={ind} value={ind}>{ind}</option>)}
                    </select>
                  </div>

                  <div className="space-y-3">
                    <label className="text-sm font-semibold text-gray-700">Experience Level *</label>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {EXPERIENCE_LEVELS.map((exp) => (
                        <label 
                          key={exp} 
                          className={`flex items-center gap-3 p-4 rounded-xl border-2 cursor-pointer transition-all ${
                            formData.experience === exp 
                              ? 'border-[#0070AD] bg-[#0070AD]/5 text-[#0070AD]' 
                              : 'border-gray-100 hover:border-gray-200 text-gray-600'
                          }`}
                        >
                          <input 
                            type="radio" 
                            name="experience" 
                            required
                            checked={formData.experience === exp}
                            onChange={() => updateField('experience', exp)}
                            className="hidden" 
                          />
                          <span className="font-medium">{exp}</span>
                        </label>
                      ))}
                    </div>
                  </div>

                  {formData.experience === 'Fresher' ? (
                    <div className="space-y-2">
                      <label className="text-sm font-semibold text-gray-700">College/University Name *</label>
                      <input 
                        required
                        type="text"
                        placeholder="Enter full name of your institution"
                        value={formData.collegeName}
                        onChange={(e) => updateField('collegeName', e.target.value)}
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#0070AD] focus:ring-2 focus:ring-[#0070AD]/20 outline-none transition-all"
                      />
                    </div>
                  ) : formData.experience && (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-sm font-semibold text-gray-700">Current Company Name *</label>
                        <input 
                          required
                          type="text"
                          placeholder="Enter current employer"
                          value={formData.companyName}
                          onChange={(e) => updateField('companyName', e.target.value)}
                          className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#0070AD] focus:ring-2 focus:ring-[#0070AD]/20 outline-none transition-all"
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-semibold text-gray-700">Current CTC (INR/Annum) *</label>
                        <input 
                          required
                          type="text"
                          placeholder="e.g. 800000"
                          value={formData.currentCTC}
                          onChange={(e) => updateField('currentCTC', e.target.value.replace(/\D/g, ''))}
                          className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#0070AD] focus:ring-2 focus:ring-[#0070AD]/20 outline-none transition-all"
                        />
                      </div>
                    </div>
                  )}

                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-gray-700">Key Skills (Comma separated) *</label>
                    <textarea 
                      required
                      rows={3}
                      placeholder="e.g. Python, Java, SEO, Project Management"
                      value={formData.keySkills}
                      onChange={(e) => updateField('keySkills', e.target.value)}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#0070AD] focus:ring-2 focus:ring-[#0070AD]/20 outline-none transition-all resize-none"
                    />
                    <p className="text-xs text-gray-400 italic">Avoid dots, slashes, or special characters.</p>
                  </div>
                </motion.div>
              )}

              {step === 3 && (
                <motion.div
                  key="step3"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="space-y-8"
                >
                  <div className="border-l-4 border-[#0070AD] pl-6 mb-8">
                    <h2 className="text-2xl font-bold text-gray-900">Location Details</h2>
                    <p className="text-gray-500 mt-1">Where are you currently based?</p>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-gray-700 flex items-center gap-2">
                      <MapPin className="w-4 h-4 text-[#0070AD]" /> State *
                    </label>
                    <select 
                      required
                      value={formData.state}
                      onChange={(e) => updateField('state', e.target.value)}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#0070AD] focus:ring-2 focus:ring-[#0070AD]/20 outline-none transition-all bg-white"
                    >
                      <option value="">Choose State</option>
                      {STATES.map(s => <option key={s} value={s}>{s}</option>)}
                    </select>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-semibold text-gray-700">City *</label>
                      <input 
                        required
                        type="text"
                        placeholder="Enter full city name"
                        value={formData.city}
                        onChange={(e) => updateField('city', e.target.value)}
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#0070AD] focus:ring-2 focus:ring-[#0070AD]/20 outline-none transition-all"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-semibold text-gray-700">Pincode *</label>
                      <input 
                        required
                        type="text"
                        pattern="[0-9]{6}"
                        placeholder="6-digit Pincode"
                        value={formData.pincode}
                        onChange={(e) => updateField('pincode', e.target.value.replace(/\D/g, '').slice(0, 6))}
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#0070AD] focus:ring-2 focus:ring-[#0070AD]/20 outline-none transition-all"
                      />
                    </div>
                  </div>
                </motion.div>
              )}

              {step === 4 && (
                <motion.div
                  key="step4"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="space-y-8"
                >
                  <div className="border-l-4 border-[#0070AD] pl-6 mb-8">
                    <h2 className="text-2xl font-bold text-gray-900">Resume Upload</h2>
                    <p className="text-gray-500 mt-1">Please provide your latest professional resume.</p>
                  </div>

                  <div 
                    onClick={() => fileInputRef.current?.click()}
                    className={`border-2 border-dashed rounded-2xl p-12 text-center cursor-pointer transition-all ${
                      formData.resume 
                        ? 'border-emerald-200 bg-emerald-50' 
                        : 'border-gray-200 hover:border-[#0070AD] hover:bg-gray-50'
                    }`}
                  >
                    <input 
                      type="file" 
                      ref={fileInputRef}
                      onChange={handleFileChange}
                      className="hidden" 
                      accept=".pdf,.doc,.docx"
                    />
                    {formData.resume ? (
                      <div className="space-y-4">
                        <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto">
                          <FileText className="w-8 h-8 text-emerald-600" />
                        </div>
                        <div>
                          <p className="text-emerald-700 font-semibold">{formData.resume.name}</p>
                          <p className="text-emerald-500 text-sm">{(formData.resume.size / 1024 / 1024).toFixed(2)} MB</p>
                        </div>
                        <button 
                          type="button"
                          onClick={(e) => { e.stopPropagation(); updateField('resume', null); }}
                          className="text-sm text-red-500 font-medium hover:underline"
                        >
                          Remove and re-upload
                        </button>
                      </div>
                    ) : (
                      <div className="space-y-4">
                        <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto">
                          <Upload className="w-8 h-8 text-gray-400" />
                        </div>
                        <div>
                          <p className="text-gray-700 font-semibold">Click to upload or drag and drop</p>
                          <p className="text-gray-400 text-sm">PDF, DOC, or DOCX (Max 10MB)</p>
                        </div>
                      </div>
                    )}
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-gray-700">Where did you find this link? *</label>
                    <select 
                      required
                      value={formData.referralSource}
                      onChange={(e) => updateField('referralSource', e.target.value)}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#0070AD] focus:ring-2 focus:ring-[#0070AD]/20 outline-none transition-all bg-white"
                    >
                      <option value="">Select Source</option>
                      {SOURCES.map(s => <option key={s} value={s}>{s}</option>)}
                    </select>
                  </div>

                  {formData.referralSource === 'Job Fair' && (
                    <div className="space-y-2">
                      <label className="text-sm font-semibold text-gray-700">Location of Job Fair *</label>
                      <input 
                        required
                        type="text"
                        placeholder="Enter the city/venue of the job fair"
                        value={formData.jobFairLocation}
                        onChange={(e) => updateField('jobFairLocation', e.target.value)}
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#0070AD] focus:ring-2 focus:ring-[#0070AD]/20 outline-none transition-all"
                      />
                    </div>
                  )}
                </motion.div>
              )}

              {step === 5 && (
                <motion.div
                  key="step5"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="space-y-8"
                >
                  <div className="border-l-4 border-[#0070AD] pl-6 mb-8">
                    <h2 className="text-2xl font-bold text-gray-900">Final Confirmation</h2>
                    <p className="text-gray-500 mt-1">Review and provide consent to submit.</p>
                  </div>

                  <div className="bg-blue-50 border border-blue-100 rounded-2xl p-6 flex gap-4">
                    <Info className="w-6 h-6 text-[#0070AD] shrink-0" />
                    <div className="text-sm text-blue-800 leading-relaxed">
                      <p className="font-bold mb-2">Please note:</p>
                      Randstad will NEVER ask for any fees or payment at any stage of the recruitment process or for employment. Please do not make payments to anyone claiming to represent Randstad.
                    </div>
                  </div>

                  <div className="space-y-4">
                    <p className="text-sm text-gray-700 leading-relaxed">
                      By applying here you <strong>provide consent</strong> to share your personal data with Randstad India. The personal data would be processed for employment purposes and would be within Randstad data protection notice.
                    </p>
                    <div className="flex gap-6">
                      {['Yes', 'No'].map((choice) => (
                        <label key={choice} className="flex items-center gap-3 cursor-pointer group">
                          <input 
                            type="radio" 
                            name="consent" 
                            required
                            checked={formData.consent === (choice === 'Yes')}
                            onChange={() => updateField('consent', choice === 'Yes')}
                            className="w-5 h-5 text-[#0070AD] border-gray-300 focus:ring-[#0070AD]" 
                          />
                          <span className="text-gray-700 font-medium group-hover:text-gray-900">{choice}</span>
                        </label>
                      ))}
                    </div>
                  </div>

                  <div className="bg-gray-50 rounded-2xl p-6 border border-gray-100">
                    <h3 className="font-bold text-gray-900 mb-4">Summary Review</h3>
                    <div className="grid grid-cols-2 gap-y-3 text-sm">
                      <span className="text-gray-500">Name:</span>
                      <span className="text-gray-900 font-medium">{formData.firstName} {formData.lastName}</span>
                      <span className="text-gray-500">Email:</span>
                      <span className="text-gray-900 font-medium truncate">{formData.email}</span>
                      <span className="text-gray-500">Industry:</span>
                      <span className="text-gray-900 font-medium">{formData.industry}</span>
                      <span className="text-gray-500">Experience:</span>
                      <span className="text-gray-900 font-medium">{formData.experience}</span>
                      <span className="text-gray-500">Location:</span>
                      <span className="text-gray-900 font-medium">{formData.city}, {formData.state}</span>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            <div className="mt-12 pt-8 border-t border-gray-100 flex items-center justify-between">
              {step > 1 ? (
                <button 
                  type="button"
                  onClick={prevStep}
                  className="flex items-center gap-2 px-6 py-3 text-gray-600 font-semibold hover:text-gray-900 transition-colors"
                >
                  <ChevronLeft className="w-5 h-5" /> Back
                </button>
              ) : (
                <div></div>
              )}

              {step < totalSteps ? (
                <button 
                  type="button"
                  onClick={nextStep}
                  className="flex items-center gap-2 px-8 py-3 bg-[#0070AD] text-white rounded-xl font-semibold hover:bg-[#005a8c] transition-all shadow-lg shadow-[#0070AD]/20 active:scale-95"
                >
                  Next <ChevronRight className="w-5 h-5" />
                </button>
              ) : (
                <button 
                  type="submit"
                  disabled={!formData.consent}
                  className={`flex items-center gap-2 px-10 py-4 rounded-xl font-bold transition-all shadow-xl ${
                    formData.consent 
                      ? 'bg-emerald-600 text-white hover:bg-emerald-700 shadow-emerald-600/20 active:scale-95' 
                      : 'bg-gray-200 text-gray-400 cursor-not-allowed'
                  }`}
                >
                  Submit Application <Send className="w-5 h-5" />
                </button>
              )}
            </div>
          </form>
        </div>

        <div className="mt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-gray-400 font-medium uppercase tracking-widest px-4">
          <div className="flex gap-6">
            <a href="#" className="hover:text-[#0070AD] transition-colors">Privacy Statement</a>
            <a href="#" className="hover:text-[#0070AD] transition-colors">Terms & Conditions</a>
          </div>
          <p>© 2024 Randstad Worldwide. All rights reserved.</p>
        </div>
      </div>
    </div>
  );
}
