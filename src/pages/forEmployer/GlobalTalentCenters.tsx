import { motion } from "motion/react";

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { 
  Linkedin, 
  Youtube, 
  ChevronRight, 
  ArrowLeft, 
  ArrowRight,
  Target,
  Users,
  Zap,
  UserCircle,
  Twitter
} from "lucide-react";

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-brand-navy text-white sticky top-0 z-50 border-b border-white/10">
        <div className="container-custom py-4 flex items-center justify-between">
          <div className="flex items-center gap-12">
            <div className="flex items-center gap-2">
              <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-white">
                <path d="M10 10C10 10 15 10 15 15C15 20 10 20 10 20" stroke="currentColor" strokeWidth="3" strokeLinecap="round"/>
                <path d="M30 10C30 10 25 10 25 15C25 20 30 20 30 20" stroke="currentColor" strokeWidth="3" strokeLinecap="round"/>
                <path d="M20 20V30" stroke="currentColor" strokeWidth="3" strokeLinecap="round"/>
              </svg>
              <div className="flex flex-col leading-none">
                <span className="text-xl font-bold tracking-tight">randstad</span>
                <span className="text-xs font-medium opacity-80">digital</span>
              </div>
            </div>
            <nav className="hidden lg:flex items-center gap-8 text-sm font-medium">
              <a href="#" className="hover:text-brand-blue transition-colors">expertise</a>
              <a href="#" className="text-brand-blue border-b-2 border-brand-blue pb-1">approach</a>
              <a href="#" className="hover:text-brand-blue transition-colors">industries</a>
              <a href="#" className="hover:text-brand-blue transition-colors">about</a>
              <a href="#" className="hover:text-brand-blue transition-colors">insights</a>
              <a href="#" className="hover:text-brand-blue transition-colors">careers</a>
            </nav>
          </div>
          <div className="flex items-center gap-6 text-xs font-medium">
            <a href="#" className="opacity-70 hover:opacity-100">contact us</a>
            <div className="flex gap-2">
              <span className="text-brand-blue">EN</span>
              <span className="opacity-50">FR</span>
              <span className="opacity-50">DE</span>
            </div>
          </div>
        </div>
        <div className="bg-brand-navy/50 border-t border-white/5">
          <div className="container-custom py-3 flex items-center gap-8 text-xs font-medium overflow-x-auto whitespace-nowrap">
            <a href="#" className="opacity-70 hover:opacity-100">talent services</a>
            <a href="#" className="text-white border-b border-white">global talent centers</a>
            <a href="#" className="opacity-70 hover:opacity-100">managed solutions</a>
            <a href="#" className="opacity-70 hover:opacity-100">talent sourcing platform</a>
            <a href="#" className="opacity-70 hover:opacity-100">randstad digital academy</a>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-brand-navy text-white pt-12 pb-24">
        <div className="container-custom">
          <div className="flex items-center gap-2 text-xs font-medium opacity-60 mb-12">
            <span>home</span>
            <ChevronRight size={12} />
            <span>approach</span>
            <ChevronRight size={12} />
            <span className="text-white opacity-100">global talent centers</span>
          </div>
          
          <div className="max-w-4xl">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-6xl md:text-7xl font-medium tracking-tight mb-8"
            >
              global talent centers.
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-xl md:text-2xl font-light opacity-90 mb-12 max-w-2xl leading-relaxed"
            >
              Helping you leverage a ready-made global delivery model.
            </motion.p>
            <motion.button 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="px-8 py-4 border border-brand-blue text-brand-blue font-medium hover:bg-brand-blue hover:text-white transition-all duration-300"
            >
              get in touch
            </motion.button>
          </div>
        </div>
      </section>

      {/* Digital First Section */}
      <section className="flex flex-col lg:flex-row min-h-[600px]">
        <div className="flex-1 bg-brand-blue text-white p-12 md:p-20 flex flex-col justify-center">
          <div className="max-w-xl">
            <h2 className="text-5xl md:text-6xl font-medium tracking-tight mb-8 leading-tight">
              digital-first global talent.
            </h2>
            <p className="text-lg md:text-xl font-light opacity-90 leading-relaxed">
              We firmly believe that fostering talent and enabling continuous learning, collaboration, and best practice development lead to remarkable outcomes. Our global talent centers span various global delivery locations, ensuring we can provide dedicated, ready-made teams to seamlessly create your digital-first global delivery model, delivering unmatched efficiency and results.
            </p>
          </div>
        </div>
        <div className="flex-1 relative min-h-[400px]">
          <img 
            src="https://picsum.photos/seed/randstad1/1200/800" 
            alt="Digital talent team" 
            className="absolute inset-0 w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
        </div>
      </section>

      {/* Talent Without Borders */}
      <section className="bg-brand-cream py-24 md:py-32">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <h2 className="text-4xl md:text-5xl font-medium tracking-tight">
              talent without borders.
            </h2>
            <p className="text-lg md:text-xl font-light leading-relaxed text-brand-navy/80">
              You're looking to scale your capacity to deliver on your digital ambition. You need to create a team that has the skills and experience you need but do so in the most efficient way possible. We enable you to do this by utilizing our digital talent centers to leverage a ready-made global delivery model.
            </p>
          </div>
        </div>
      </section>

      {/* Value You Gain */}
      <section className="bg-brand-cream pb-32">
        <div className="container-custom">
          <div className="mb-16">
            <h2 className="text-4xl md:text-5xl font-medium tracking-tight mb-8">
              the value you gain.
            </h2>
            <p className="text-lg md:text-xl font-light leading-relaxed text-brand-navy/80 max-w-3xl">
              by partnering with Randstad Digital you gain instant access to an established global delivery model that is centered around digital talent and this provides some unique advantages:
            </p>
          </div>

          <div className="relative">
            <div className="flex gap-6 overflow-x-auto pb-8 snap-x no-scrollbar">
              {/* Card 1: Talent */}
              <div className="min-w-[320px] md:min-w-[450px] bg-brand-navy text-white p-10 md:p-14 snap-start flex flex-col justify-between min-h-[450px]">
                <div>
                  <h3 className="text-3xl md:text-4xl font-medium mb-6">talent</h3>
                  <p className="text-lg font-light opacity-80 leading-relaxed">
                    Our centers are brimming with the world's best digital talent with expertise across every aspect of digital enablement.
                  </p>
                </div>
                <div className="flex justify-end">
                  <UserCircle size={100} className="text-brand-blue opacity-50" />
                </div>
              </div>

              {/* Card 2: Team */}
              <div className="min-w-[320px] md:min-w-[450px] bg-brand-navy text-white p-10 md:p-14 snap-start flex flex-col justify-between min-h-[450px]">
                <div>
                  <h3 className="text-3xl md:text-4xl font-medium mb-6">team</h3>
                  <p className="text-lg font-light opacity-80 leading-relaxed">
                    We provide you with ready-made teams, talent that have worked together and complement each other with skills and experience.
                  </p>
                </div>
                <div className="flex justify-end">
                  <Users size={100} className="text-brand-blue opacity-50" />
                </div>
              </div>

              {/* Card 3: Elasticity */}
              <div className="min-w-[320px] md:min-w-[450px] bg-brand-navy text-white p-10 md:p-14 snap-start flex flex-col justify-between min-h-[450px]">
                <div>
                  <h3 className="text-3xl md:text-4xl font-medium mb-6">elasticity</h3>
                  <p className="text-lg font-light opacity-80 leading-relaxed">
                    You gain the luxury of elasticity, the ability to scale-up and scale-down your global delivery team as needs require.
                  </p>
                </div>
                <div className="flex justify-end">
                  <Zap size={100} className="text-brand-blue opacity-50" />
                </div>
              </div>

              {/* Card 4: Efficiency */}
              <div className="min-w-[320px] md:min-w-[450px] bg-brand-navy text-white p-10 md:p-14 snap-start flex flex-col justify-between min-h-[450px]">
                <div>
                  <h3 className="text-3xl md:text-4xl font-medium mb-6">efficiency</h3>
                  <p className="text-lg font-light opacity-80 leading-relaxed">
                    By thinking globally and utilizing our centers of talent that have specifically been located in strategic labor markets.
                  </p>
                </div>
                <div className="flex justify-end">
                  <Target size={100} className="text-brand-blue opacity-50" />
                </div>
              </div>
            </div>
            
            <div className="flex gap-4 mt-8">
              <button className="w-12 h-12 rounded-full border border-brand-navy flex items-center justify-center hover:bg-brand-navy hover:text-white transition-colors">
                <ArrowLeft size={20} />
              </button>
              <button className="w-12 h-12 rounded-full border border-brand-navy flex items-center justify-center hover:bg-brand-navy hover:text-white transition-colors">
                <ArrowRight size={20} />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Uncertain Times Section */}
      <section className="bg-brand-navy text-white py-24 md:py-32 overflow-hidden">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div>
              <h2 className="text-5xl md:text-6xl font-medium tracking-tight mb-8 leading-tight">
                how do you deliver on digitalization in uncertain times.
              </h2>
              <p className="text-lg md:text-xl font-light opacity-80 leading-relaxed mb-12 max-w-xl">
                Economic and political uncertainty is slowing decisions on headcount and investment, but the need to accelerate digital enablement remains - there must be a different approach.
              </p>
              <button className="px-8 py-4 border border-brand-blue text-brand-blue font-medium hover:bg-brand-blue hover:text-white transition-all duration-300">
                read our article
              </button>
            </div>
            <div className="relative flex justify-center">
              <div className="w-[400px] h-[400px] md:w-[600px] md:h-[600px] border border-white/10 rounded-full flex items-center justify-center">
                <div className="w-[300px] h-[300px] md:w-[450px] md:h-[450px] border border-white/20 rounded-full flex items-center justify-center">
                  <div className="w-[200px] h-[200px] md:w-[300px] md:h-[300px] border border-white/30 rounded-full flex items-center justify-center">
                    <div className="w-full h-1 bg-gradient-to-r from-transparent via-brand-blue to-transparent absolute"></div>
                    <div className="w-12 h-12 bg-white rounded-full shadow-[0_0_30px_rgba(255,255,255,0.8)] z-10"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Scaling Digital Enablement */}
      <section className="flex flex-col lg:flex-row-reverse min-h-[600px]">
        <div className="flex-1 bg-white text-brand-navy p-12 md:p-20 flex flex-col justify-center">
          <div className="max-w-xl">
            <h2 className="text-5xl md:text-6xl font-medium tracking-tight mb-8 leading-tight">
              scaling digital enablement.
            </h2>
            <p className="text-lg md:text-xl font-light text-brand-navy/80 leading-relaxed">
              You are under pressure to accelerate the operationalization of your digital ambition and our global talent centers provide you with a way to do that. You are able to augment your in-house team with ready-made teams of digital talent that can inject expertise, scale your capability and accelerate the delivery of your enablement objectives.
            </p>
          </div>
        </div>
        <div className="flex-1 relative min-h-[400px]">
          <img 
            src="https://picsum.photos/seed/randstad2/1200/800" 
            alt="Scaling digital enablement" 
            className="absolute inset-0 w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
        </div>
      </section>

      {/* Ready to Partner */}
      <section className="bg-brand-blue text-white py-24 md:py-32">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row items-center justify-between gap-12">
            <h2 className="text-5xl md:text-6xl font-medium tracking-tight max-w-2xl leading-tight">
              ready to partner with randstad digital?
            </h2>
            <button className="px-10 py-5 border-2 border-white text-white font-medium text-lg hover:bg-white hover:text-brand-blue transition-all duration-300 shrink-0">
              get in touch
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-brand-darker text-white pt-24 pb-12">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-12 mb-20">
            <div>
              <h4 className="text-lg font-medium mb-8">careers</h4>
              <ul className="space-y-4 text-sm opacity-70">
                <li><a href="#" className="hover:text-brand-blue">working at randstad digital</a></li>
                <li><a href="#" className="hover:text-brand-blue">current opportunities</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-medium mb-8">expertise</h4>
              <ul className="space-y-4 text-sm opacity-70">
                <li><a href="#" className="hover:text-brand-blue">customer experience</a></li>
                <li><a href="#" className="hover:text-brand-blue">digital & product engineering</a></li>
                <li><a href="#" className="hover:text-brand-blue">data & analytics</a></li>
                <li><a href="#" className="hover:text-brand-blue">cloud & infrastructure</a></li>
                <li><a href="#" className="hover:text-brand-blue">creative & marketing</a></li>
                <li><a href="#" className="hover:text-brand-blue">consulting services</a></li>
              </ul>
              <h4 className="text-lg font-medium mt-12 mb-8">solutions</h4>
              <ul className="space-y-4 text-sm opacity-70">
                <li><a href="#" className="hover:text-brand-blue">ServiceNow</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-medium mb-8">about randstad digital</h4>
              <ul className="space-y-4 text-sm opacity-70">
                <li><a href="#" className="hover:text-brand-blue">experience</a></li>
                <li><a href="#" className="hover:text-brand-blue">leadership</a></li>
                <li><a href="#" className="hover:text-brand-blue">partnerships</a></li>
                <li><a href="#" className="hover:text-brand-blue">locations</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-medium mb-8">contact us</h4>
              <ul className="space-y-4 text-sm opacity-70">
                <li><a href="#" className="hover:text-brand-blue">get in touch</a></li>
                <li><a href="#" className="hover:text-brand-blue">about our team</a></li>
              </ul>
            </div>
          </div>

          <div className="flex gap-6 mb-12">
            <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-brand-blue transition-colors">
              <Linkedin size={20} />
            </a>
            <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-brand-blue transition-colors">
              <Twitter size={20} />
            </a>
            <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-brand-blue transition-colors">
              <Youtube size={20} />
            </a>
          </div>

          <div className="border-t border-white/10 pt-12">
            <p className="text-xs opacity-50 mb-8">
              Randstad Digital B.V (91235944), Diemermere 25, 1112 TC, Diemen, The Netherlands.
            </p>
            <div className="flex flex-wrap gap-x-8 gap-y-4 text-xs font-medium opacity-70">
              <a href="#" className="hover:text-white">terms & conditions</a>
              <a href="#" className="hover:text-white">cookie policy</a>
              <button className="bg-brand-blue px-6 py-2 rounded-sm text-white hover:bg-brand-blue/80 transition-colors">customize</button>
              <a href="#" className="hover:text-white">legal information</a>
              <a href="#" className="hover:text-white">privacy policy</a>
              <a href="#" className="hover:text-white">misconduct reporting procedure</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
