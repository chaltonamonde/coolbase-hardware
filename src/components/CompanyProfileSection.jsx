import React, { useState } from 'react';
import { FileText, Download, ShieldCheck, CheckCircle2, Building2, Phone, Mail, MapPin, Eye, ExternalLink, ArrowRight } from 'lucide-react';
import { BRAND_CONFIG } from '../config';

export default function CompanyProfileSection({ onOpenModal }) {
  const [activeTab, setActiveTab] = useState('overview');

  const tabs = [
    { id: 'overview', label: '1. Overview & Heritage' },
    { id: 'products', label: '2. Certified Materials' },
    { id: 'services', label: '3. Logistics & Systems' },
    { id: 'contacts', label: '4. Executive Directory' },
  ];

  return (
    <section
      id="company-profile"
      className="relative py-28 sm:py-36 bg-[#05070B] border-t border-white/[0.06] overflow-hidden"
      aria-labelledby="profile-heading"
    >
      {/* Subtle ambient light orb */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-[#E5A93C]/[0.03] rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#E5A93C]/10 border border-[#E5A93C]/25 text-[#F7CA68] text-xs font-bold uppercase tracking-widest mb-4">
            <FileText className="w-3.5 h-3.5 text-[#E5A93C]" />
            Corporate Capabilities Dossier
          </div>
          <h2
            id="profile-heading"
            className="text-3xl sm:text-5xl font-display font-bold text-white tracking-tight leading-[1.15]"
          >
            Cool Base Hardware Profile
          </h2>
          <p className="mt-4 text-base sm:text-lg text-gray-400 font-normal leading-relaxed">
            Institutional overview, authorized DuraCoat Centre tinting capacity, certified structural inventory, and countywide logistics reach across Kenya.
          </p>

          <div className="mt-8 flex flex-wrap justify-center items-center gap-3.5">
            <a
              href="/assets/Cool_Base_Hardware_Company_Profile.pdf"
              download="Cool_Base_Hardware_Company_Profile.pdf"
              className="btn-gold inline-flex items-center gap-2 px-6 py-3 text-xs sm:text-sm font-bold tracking-wide"
            >
              <Download className="w-4 h-4" />
              <span>Download Official PDF Dossier</span>
            </a>
            <button
              onClick={onOpenModal}
              className="btn-ghost inline-flex items-center gap-2 px-6 py-3 text-xs sm:text-sm font-semibold tracking-wide"
            >
              <Eye className="w-4 h-4 text-[#F7CA68]" />
              <span>Interactive Document Viewer</span>
            </button>
          </div>
        </div>

        {/* Profile Card Container */}
        <div className="glass-card p-6 sm:p-10 lg:p-12 relative overflow-hidden">
          {/* Top Tabs */}
          <div className="flex flex-wrap gap-2 border-b border-white/[0.08] pb-5 mb-10">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-4 sm:px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold tracking-wide transition-all cursor-pointer ${
                  activeTab === tab.id
                    ? 'bg-[#E5A93C] text-black shadow-[0_4px_16px_rgba(229,169,60,0.3)] font-bold'
                    : 'bg-white/[0.03] hover:bg-white/[0.07] text-gray-400 hover:text-white border border-white/[0.06]'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Tab 1: Overview */}
          {activeTab === 'overview' && (
            <div className="space-y-8 text-left animate-in fade-in duration-300">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
                <div className="lg:col-span-2 space-y-5">
                  <span className="text-[11px] font-bold uppercase tracking-widest text-[#F7CA68]">
                    Origin &amp; Mission
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-display font-bold text-white tracking-tight">
                    Trusted Partner for Structural Construction Across Kenya
                  </h3>
                  <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
                    Cool Base Hardware (operating as Cool Base Enterprises) was founded in 2020 as a full-service building materials provider and authorized DuraCoat Colour Centre in Siaya town, Kenya. We connect master structural supplies, certified aggregates, and computerized paint formulation directly to contractors, institutional builders, and residential home developers.
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-3">
                    <div className="p-5 rounded-2xl bg-white/[0.03] border border-white/[0.06]">
                      <div className="text-[11px] uppercase tracking-wider text-gray-400">Founded</div>
                      <div className="text-2xl font-display font-bold text-white mt-1">2020</div>
                      <div className="text-xs text-gray-400 mt-1">Established commercial supply footprint</div>
                    </div>
                    <div className="p-5 rounded-2xl bg-white/[0.03] border border-white/[0.06]">
                      <div className="text-[11px] uppercase tracking-wider text-gray-400">Headquarters</div>
                      <div className="text-xl font-display font-bold text-white mt-1">Siaya Town</div>
                      <div className="text-xs text-gray-400 mt-1">Opposite Siaya Law Courts</div>
                    </div>
                  </div>
                </div>

                <div className="rounded-2xl bg-[#090E17] border border-white/[0.08] p-6 sm:p-7 flex flex-col justify-between shadow-xl">
                  <div>
                    <span className="text-[11px] font-bold uppercase tracking-widest text-[#F7CA68]">
                      Institutional Readiness
                    </span>
                    <h4 className="text-base sm:text-lg font-display font-bold text-white mt-2 mb-4">
                      Procurement Vetting &amp; Compliance
                    </h4>
                    <ul className="space-y-3 text-xs sm:text-sm text-gray-300">
                      <li className="flex items-center gap-2.5">
                        <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                        <span>M-Pesa Business &amp; Direct Bank Settlement</span>
                      </li>
                      <li className="flex items-center gap-2.5">
                        <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                        <span>Contractor Itemized BOQ Invoices</span>
                      </li>
                      <li className="flex items-center gap-2.5">
                        <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                        <span>Certified KS EAS Standards (Cement &amp; Rebar)</span>
                      </li>
                      <li className="flex items-center gap-2.5">
                        <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                        <span>Authorized DuraCoat Architectural Mixing</span>
                      </li>
                    </ul>
                  </div>

                  <div className="mt-8 pt-4 border-t border-white/[0.08] text-xs text-[#F7CA68] font-semibold flex items-center justify-between">
                    <span>Ready for institutional tender submissions</span>
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Tab 2: Products */}
          {activeTab === 'products' && (
            <div className="space-y-6 text-left animate-in fade-in duration-300">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-2">
                <div>
                  <span className="text-[11px] font-bold uppercase tracking-widest text-[#F7CA68]">
                    Stocked Material Categories
                  </span>
                  <h3 className="text-2xl font-display font-bold text-white tracking-tight mt-1">
                    Certified Construction Materials &amp; Coatings
                  </h3>
                </div>
                <span className="text-xs text-gray-400">All products KEBS &amp; manufacturer certified</span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div className="p-6 rounded-2xl bg-white/[0.03] border border-white/[0.06] hover:border-[#E5A93C]/30 transition-colors">
                  <h4 className="text-[#F7CA68] font-display font-bold text-base mb-2">
                    🧱 Building Materials &amp; Reinforcement
                  </h4>
                  <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">
                    High-strength Simba &amp; Bamburi 42.5N Ordinary Portland Cement, Gauge 28 anti-rust corrugated iron sheets (3.0m), seasoned treated cypress timber (2x2, 2x4, 2x6), high-yield structural TMT rebar (Y10, Y12), annealed 16G binding wire, and washer roofing nails.
                  </p>
                </div>

                <div className="p-6 rounded-2xl bg-white/[0.03] border border-white/[0.06] hover:border-[#E5A93C]/30 transition-colors">
                  <h4 className="text-teal-400 font-display font-bold text-base mb-2">
                    🔧 Plumbing Systems &amp; Water Storage
                  </h4>
                  <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">
                    Class B, C &amp; D PVC pressure pipes, PPR hot water conduits, heavy brass gate valves, taps, 1,000L to 2,500L UV-stabilized rotational-molded water storage tanks, and complete ceramic sanitary ware.
                  </p>
                </div>

                <div className="p-6 rounded-2xl bg-white/[0.03] border border-white/[0.06] hover:border-[#E5A93C]/30 transition-colors">
                  <h4 className="text-orange-400 font-display font-bold text-base mb-2">
                    ⛏️ Concrete Aggregates &amp; Quarried Stone
                  </h4>
                  <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">
                    Clean river building sand, machine-graded ballast (1/2" &amp; 3/4"), foundation hardcore boulders, fine stone dust, and pea gravel supplied by tonne or full tipper lorry dispatch.
                  </p>
                </div>

                <div className="p-6 rounded-2xl bg-white/[0.03] border border-white/[0.06] hover:border-[#E5A93C]/30 transition-colors">
                  <h4 className="text-indigo-400 font-display font-bold text-base mb-2">
                    🏗️ Precast Masonry &amp; Paving Blocks
                  </h4>
                  <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">
                    6-inch machine-vibrated solid building blocks, hollow partition blocks, heavy road kerbs, and standard interlocking paving cabro (60mm &amp; 80mm) for commercial compounds.
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* Tab 3: Services */}
          {activeTab === 'services' && (
            <div className="space-y-6 text-left animate-in fade-in duration-300">
              <span className="text-[11px] font-bold uppercase tracking-widest text-[#F7CA68]">
                Capabilities &amp; Value-Add
              </span>
              <h3 className="text-2xl font-display font-bold text-white tracking-tight">
                Logistics, Formulation &amp; Advisory Services
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-2">
                <div className="p-6 rounded-2xl bg-white/[0.03] border border-white/[0.06] hover:border-[#E5A93C]/30 transition-colors">
                  <div className="w-10 h-10 rounded-xl bg-[#E5A93C]/10 border border-[#E5A93C]/20 flex items-center justify-center text-lg mb-4">
                    🚚
                  </div>
                  <h4 className="text-base font-display font-bold text-white mb-2">Direct Site Delivery</h4>
                  <p className="text-xs sm:text-sm text-gray-400 leading-relaxed">
                    Daily tipper and pickup lorry logistics ensuring prompt on-site drops across Siaya, Ugunja, Bondo, Yala, Usenge, Sega, and western Kenya.
                  </p>
                </div>

                <div className="p-6 rounded-2xl bg-white/[0.03] border border-white/[0.06] hover:border-[#E5A93C]/30 transition-colors">
                  <div className="w-10 h-10 rounded-xl bg-[#E5A93C]/10 border border-[#E5A93C]/20 flex items-center justify-center text-lg mb-4">
                    🎨
                  </div>
                  <h4 className="text-base font-display font-bold text-white mb-2">Computerized Tinting</h4>
                  <p className="text-xs sm:text-sm text-gray-400 leading-relaxed">
                    Automated DuraCoat dispenser formulating over 10,000+ RAL and custom architectural shades with sub-millimeter spectrophotometer accuracy.
                  </p>
                </div>

                <div className="p-6 rounded-2xl bg-white/[0.03] border border-white/[0.06] hover:border-[#E5A93C]/30 transition-colors">
                  <div className="w-10 h-10 rounded-xl bg-[#E5A93C]/10 border border-[#E5A93C]/20 flex items-center justify-center text-lg mb-4">
                    📋
                  </div>
                  <h4 className="text-base font-display font-bold text-white mb-2">Contractor BOQ Review</h4>
                  <p className="text-xs sm:text-sm text-gray-400 leading-relaxed">
                    Send architectural bill of quantities via WhatsApp for expert material estimation, phase breakdown, and competitive trade discount pricing.
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* Tab 4: Contacts */}
          {activeTab === 'contacts' && (
            <div className="space-y-6 text-left animate-in fade-in duration-300">
              <span className="text-[11px] font-bold uppercase tracking-widest text-[#F7CA68]">
                Direct Contacts &amp; Location
              </span>
              <h3 className="text-2xl font-display font-bold text-white tracking-tight">
                Executive &amp; Customer Directory
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-2">
                <div className="p-6 rounded-2xl bg-white/[0.03] border border-white/[0.06]">
                  <div className="text-gray-400 text-[11px] uppercase tracking-wider">Hotline</div>
                  <div className="text-base font-display font-bold text-white mt-1">+254 708 292558</div>
                  <a
                    href={`tel:${BRAND_CONFIG.phoneTel}`}
                    className="text-xs text-[#F7CA68] hover:underline mt-3 inline-flex items-center gap-1 font-semibold"
                  >
                    Call Showroom <ArrowRight className="w-3 h-3" />
                  </a>
                </div>

                <div className="p-6 rounded-2xl bg-white/[0.03] border border-white/[0.06]">
                  <div className="text-gray-400 text-[11px] uppercase tracking-wider">Corporate Email</div>
                  <div className="text-sm font-display font-bold text-white mt-1 break-all">
                    coolbasehardware2020@gmail.com
                  </div>
                  <a
                    href="mailto:coolbasehardware2020@gmail.com"
                    className="text-xs text-[#F7CA68] hover:underline mt-3 inline-flex items-center gap-1 font-semibold"
                  >
                    Send Email <ArrowRight className="w-3 h-3" />
                  </a>
                </div>

                <div className="p-6 rounded-2xl bg-white/[0.03] border border-white/[0.06]">
                  <div className="text-gray-400 text-[11px] uppercase tracking-wider">Showroom Address</div>
                  <div className="text-sm font-display font-bold text-white mt-1">Opposite Siaya Law Courts</div>
                  <span className="text-xs text-gray-400 mt-2 block">Siaya Town, Kenya</span>
                </div>

                <div className="p-6 rounded-2xl bg-white/[0.03] border border-white/[0.06]">
                  <div className="text-gray-400 text-[11px] uppercase tracking-wider">Business Hours</div>
                  <div className="text-sm font-display font-bold text-white mt-1">Mon–Sat 7:30 AM – 6:30 PM</div>
                  <span className="text-xs text-emerald-400 mt-2 block">Sunday: Closed</span>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
