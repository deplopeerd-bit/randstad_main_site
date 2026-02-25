import randstad_logo from "../assets/randstad_logo.png";
import { ChevronDown, Heart, Menu, User, X } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

export const MENU_DATA = {
  "find a job": [
    {
      title: "job search",
      links: [
        "submit your cv",
        "contract roles",
        "current job openings",
        "cxo roles",
        "job fairs",
        "permanent roles",
      ],
    },
    {
      title: "operational jobs",
      links: ["engineering", "manufacturing", "supply chain & logistics"],
    },
    {
      title: "professional jobs",
      links: [
        "banking sales",
        "education",
        "finance & accounting",
        "healthcare",
        "hr & admin support",
        "ites/gcc",
        "legal & compliance",
        "sales & marketing",
      ],
    },
    {
      title: "work with randstad",
      links: ["join our team", "my randstad", "refer a friend"],
    },
    {
      title: "ongoing hiring drives",
      links: ["banking finance and sales jobs", "financial product sales jobs"],
    },
  ],
  "for talent": [
    {
      title: "operational",
      links: ["engineering", "manufacturing", "supply chain & logistics"],
    },
    {
      title: "professional",
      links: [
        "banking finance sales",
        "finance & accounting",
        "hr & support",
        "ites/gcc",
        "legal & compliance",
        "pharma, healthcare & lifesciences",
        "sales & trade marketing",
        "wholesale & retail",
      ],
    },
    {
      title: "executive (cxo roles)",
      links: ["faqs", "join talent pool", "latest jobs"],
    },
    {
      title: "digital",
      links: [
        "cloud & infrastructure",
        "customer experience",
        "data & analytics",
        "digital product & engineering",
      ],
    },
    {
      title: "career advice",
      links: [
        "beware of job scams",
        "career tests",
        "career tips",
        "interview tips",
        "job profiles",
        "job search advice",
        "job seeker toolkit",
        "resume tips",
      ],
    },
    {
      title: "randstad bridging futures program",
      links: ["join our talent community", "register your institute"],
    },
  ],
  "for employer": [
    {
      title: "submit a vacancy",
      links: ["request a callback"],
    },
    {
      title: "operational",
      links: ["engineering", "manufacturing", "supply chain & logistics"],
    },
    {
      title: "professional",
      links: [
        "banking finance sales",
        "finance & accounting",
        "hr & support",
        "ites/gcc",
        "legal & compliance",
        "pharma, healthcare & lifesciences",
        "sales & trade marketing",
        "wholesale & retail",
      ],
    },
    {
      title: "digital",
      links: ["global talent centers", "managed solutions", "talent services"],
    },
    {
      title: "enterprise",
      links: [
        "advisory",
        "talent acquisition",
        "talent development",
        "talent transition",
      ],
    },
    {
      title: "our services",
      links: [
        "executive search",
        "hire-to-retire",
        "managed services",
        "payroll",
        "perm recruitment",
        "talent acquisition",
        "talent export",
        "temp recruitment",
        "workforce advisory",
      ],
    },
  ],
  resources: [
    {
      title: "workforce insights",
      links: [
        "ed&i",
        "employer brand research",
        "salary trends",
        "startup hiring",
        "talent insights",
        "talent pulse surveys",
        "workmonitor",
      ],
    },
    {
      title: "testimonials",
      links: ["for employer", "for talent"],
    },
    {
      title: "audio library",
      links: ["diversity series", "mind matters series"],
    },
    {
      title: "blogs",
      links: ["employer branding", "hr trends", "workforce management"],
    },
    {
      title: "press room",
      links: ["industry insights", "randstad in the news"],
    },
    {
      title: "case studies",
      links: [],
    },
  ],
  "about us": [
    {
      title: "",
      links: ["our history", "ed&i", "our sponsorships", "sustainability"],
    },
    {
      title: "offices",
      links: [
        "bengaluru",
        "chennai",
        "hyderabad",
        "kolkata",
        "mumbai",
        "new delhi",
        "view all",
      ],
    },
  ],
};

// Helper to format the category for the URL
export const formatCategory = (category: string) => {
  return category.toLowerCase().replace(/\s+/g, "");
};

// Helper to format the link for the URL
export const formatLink = (link: string) => {
  return link.toLowerCase().replace(/\s+/g, "-");
};

export function Header() {
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [expandedMobileSection, setExpandedMobileSection] = useState<
    string | null
  >(null);
  const location = useLocation();

  useEffect(() => {
    setActiveMenu(null);
    setIsMobileMenuOpen(false);
  }, [location]);

  const toggleMenu = (menu: string) => {
    if (activeMenu === menu) {
      setActiveMenu(null);
    } else {
      setActiveMenu(menu);
    }
  };

  return (
    <header className="bg-white border-b border-gray-100 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center gap-8">
            <Link to="/" className="flex items-center">
              <img
                src={randstad_logo}
                alt="Randstad Logo"
                className="h-42 w-auto object-contain"
              />
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-6">
              {Object.keys(MENU_DATA).map((item) => (
                <button
                  key={item}
                  onClick={() => toggleMenu(item)}
                  className={`text-sm font-medium flex items-center gap-1 transition-colors hover:text-[#2175e3] ${
                    activeMenu === item ? "text-[#2175e3]" : "text-gray-600"
                  }`}
                >
                  {item}{" "}
                  <ChevronDown
                    size={14}
                    className={`transition-transform duration-300 ${activeMenu === item ? "rotate-180" : ""}`}
                  />
                </button>
              ))}
            </nav>
          </div>

          <div className="flex items-center gap-4 md:gap-6">
            <Link
              to="/contact"
              className="hidden sm:block text-xs font-medium text-gray-500 uppercase tracking-wider hover:text-[#2175e3]"
            >
              contact us
            </Link>
            <div className="flex items-center gap-4 border-l pl-4 md:pl-6 border-gray-200">
              <button className="text-gray-600 hover:text-[#2175e3]">
                <Heart size={20} />
              </button>
              <Link
                to="/login"
                className="hidden sm:flex items-center gap-2 text-sm font-medium text-gray-600 hover:text-[#2175e3]"
              >
                <User size={20} />
                <span>my randstad</span>
              </Link>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="md:hidden text-gray-600 hover:text-[#2175e3] p-2"
              >
                {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Desktop Mega Menu */}
      <AnimatePresence>
        {activeMenu && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setActiveMenu(null)}
              className="hidden md:block fixed inset-0 bg-black/5 backdrop-blur-[1px] top-20 z-40"
            />
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="hidden md:block absolute top-20 left-0 w-full bg-white border-b border-gray-200 shadow-2xl z-50 overflow-hidden"
            >
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 relative">
                <button
                  onClick={() => setActiveMenu(null)}
                  className="absolute top-8 right-8 text-gray-400 hover:text-[#2175e3] transition-colors"
                >
                  <X size={24} />
                </button>

                {/* Mega Menu Content - Aligned to Left */}
                <div className="flex flex-row gap-16 justify-start">
                  {MENU_DATA[activeMenu as keyof typeof MENU_DATA].map(
                    (section, idx) => (
                      <div
                        key={idx}
                        className="flex flex-col gap-4 min-w-[160px]"
                      >
                        {section.title && (
                          <h3 className="text-[#2175e3] text-sm font-light border-b border-gray-100 pb-2">
                            {section.title}
                          </h3>
                        )}
                        <ul className="flex flex-col gap-3">
                          {section.links.map((link, lIdx) => (
                            <li key={lIdx}>
                              <Link
                                to={`/${formatCategory(activeMenu)}/${formatLink(link)}`}
                                className="text-sm text-gray-600 hover:text-[#2175e3] transition-colors font-light"
                              >
                                {link}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ),
                  )}
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Mobile Menu Drawer */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="md:hidden fixed inset-0 top-20 bg-white z-50 overflow-y-auto"
          >
            <div className="flex flex-col p-4 gap-2">
              {Object.keys(MENU_DATA).map((item) => (
                <div key={item} className="border-b border-gray-50">
                  <button
                    onClick={() =>
                      setExpandedMobileSection(
                        expandedMobileSection === item ? null : item,
                      )
                    }
                    className="w-full flex justify-between items-center py-4 text-gray-700 font-medium"
                  >
                    <span className="capitalize">{item}</span>
                    <ChevronDown
                      size={18}
                      className={`transition-transform duration-300 ${expandedMobileSection === item ? "rotate-180" : ""}`}
                    />
                  </button>
                  <AnimatePresence>
                    {expandedMobileSection === item && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="overflow-hidden bg-gray-50/50 px-4 pb-4"
                      >
                        {MENU_DATA[item as keyof typeof MENU_DATA].map(
                          (section, sIdx) => (
                            <div key={sIdx} className="mt-4">
                              <h4 className="text-[#2175e3] text-xs font-semibold uppercase tracking-wider mb-2">
                                {section.title}
                              </h4>
                              <ul className="flex flex-col gap-2">
                                {section.links.map((link, lIdx) => (
                                  <li key={lIdx}>
                                    <Link
                                      to={`/${formatCategory(item)}/${formatLink(link)}`}
                                      className="text-sm text-gray-600 block py-1"
                                    >
                                      {link}
                                    </Link>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          ),
                        )}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
              <div className="mt-6 flex flex-col gap-4">
                <Link
                  to="/contact"
                  className="text-sm font-medium text-gray-600 py-2 border-b border-gray-50"
                >
                  Contact Us
                </Link>
                <Link
                  to="/login"
                  className="flex items-center gap-2 text-sm font-medium text-[#2175e3] py-2"
                >
                  <User size={20} />
                  <span>My Randstad</span>
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
