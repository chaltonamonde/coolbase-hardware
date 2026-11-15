import React, { useState } from 'react';
import { FileText, Download, ShieldCheck, CheckCircle2, Building2, Phone, Mail, MapPin, Eye, ExternalLink } from 'lucide-react';
import { BRAND_CONFIG } from '../config';

export default function CompanyProfileSection({ onOpenModal }) {
  const [activeTab, setActiveTab] = useState('overview');

  return (
    <section id="company-profile" className="relative py-24 bg-[#0A0E17] border-t border-white/5" aria-labelledby="profile-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/25 text-amber-400 text-xs font-bold uppercase tracking-widest mb-3">
            <FileText className="w-3.5 h-3.5 text-amber-400" />
            Official Corporate Documentation
          </div>
          <h2 id="profile-heading" className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Company Profile &amp; Capabilities
          </h2>
          <p className="mt-4 text-base sm:text-lg text-gray-400 leading-relaxed">
            Formal business overview, verified product lines, commercial supply capacity, and logistics coverage across Kenya.
          </p>
          <div className="mt-6 flex flex-wrap justify-center items-center gap-4">
            <a
              href="/assets/Cool_Base_Hardware_Company_Profile.pdf"
              download="Cool_Base_Hardware_Company_Profile.pdf"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-amber-500 hover:bg-amber-400 text-black font-extrabold text-sm tracking-wide transition-all shadow-lg shadow-amber-500/20 hover:scale-105"
            >
              <Download className="w-4 h-4" />
              <span>Download Official PDF Document</span>
            </a>
            <button
              onClick={onOpenModal}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white/10 hover:bg-white/15 text-white border border-white/15 font-bold text-sm tracking-wide transition-all"
            >
              <Eye className="w-4 h-4 text-amber-400" />
              <span>Open Document Viewer</span>
            </button>
          </div>
        </div>

        {/* Profile Card Container */}
        <div className="rounded-3xl bg-gradient-to-br from-slate-900 via-slate-900/90 to-slate-950 border border-amber-500/25 shadow-2xl p-6 sm:p-10 relative overflow-hidden">
          {/* Subtle Accent Glow */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-amber-500/5 rounded-full filter blur-3xl pointer-events-none" />

          {/* Navigation Tabs */}
          <div className="flex flex-wrap gap-2 border-b border-white/10 pb-4 mb-8">
            <button
              onClick={() => setActiveTab('overview')}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold tracking-wide transition-all cursor-pointer ${
                activeTab === 'overview'
                  ? 'bg-amber-500 text-black shadow-md shadow-amber-500/20'
                  : 'bg-white/5 hover:bg-white/10 text-gray-300'
              }`}
            >
              1. Company Overview
            </button>
            <button
              onClick={() => setActiveTab('products')}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold tracking-wide transition-all cursor-pointer ${
                activeTab === 'products'
                  ? 'bg-amber-500 text-black shadow-md shadow-amber-500/20'
                  : 'bg-white/5 hover:bg-white/10 text-gray-300'
              }`}
            >
              2. Products &amp; Coatings
            </button>
            <button
              onClick={() => setActiveTab('services')}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold tracking-wide transition-all cursor-pointer ${
                activeTab === 'services'
                  ? 'bg-amber-500 text-black shadow-md shadow-amber-500/20'
                  : 'bg-white/5 hover:bg-white/10 text-gray-300'
              }`}
            >
              3. Services &amp; Logistics
            </button>
            <button
              onClick={() => setActiveTab('contacts')}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold tracking-wide transition-all cursor-pointer ${
                activeTab === 'contacts'
                  ? 'bg-amber-500 text-black shadow-md shadow-amber-500/20'
                  : 'bg-white/5 hover:bg-white/10 text-gray-300'
              }`}
            >
              4. Corporate Directory
            </button>
          </div>

          {/* Tab 1: Overview */}
          {activeTab === 'overview' && (
            <div className="space-y-6 text-left">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                <div className="lg:col-span-2 space-y-4">
                  <h3 className="text-2xl font-bold text-white tracking-tight">
                    Established Supplier for Building &amp; Construction across Kenya
                  </h3>
                  <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
                    Cool Base Hardware (operating as Cool Base Enterprises) was founded in 2020 as a full-service building materials provider and authorized DuraCoat Colour Centre headquartered in Siaya town, Kenya. We bridge high-grade structural supplies directly to construction projects, private home builders, and public infrastructure works.
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                    <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                      <div className="text-xs uppercase font-mono text-amber-400">Founded</div>
                      <div className="text-lg font-bold text-white mt-1">2020</div>
                      <div className="text-xs text-gray-400 mt-1">Commercial operations established</div>
                    </div>
                    <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                      <div className="text-xs uppercase font-mono text-amber-400">Headquarters</div>
                      <div className="text-lg font-bold text-white mt-1">Siaya Town</div>
                      <div className="text-xs text-gray-400 mt-1">Opposite Siaya Law Courts</div>
                    </div>
                  </div>
                </div>

                <div className="rounded-2xl bg-slate-950/80 border border-white/10 p-6 flex flex-col justify-between">
                  <div>
                    <span className="text-xs font-mono uppercase text-gray-400">Procurement Vetting</span>
                    <h4 className="text-lg font-bold text-white mt-1 mb-3">Institutional Readiness</h4>
                    <ul className="space-y-2 text-xs text-gray-300">
                      <li className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                        <span>M-Pesa Business &amp; Bank Settlement</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                        <span>Contractor Bulk Billing Invoices</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                        <span>Certified KS EAS Standards (Cement &amp; Rebar)</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                        <span>Authorized DuraCoat Colour Formulation</span>
                      </li>
                    </ul>
                  </div>
                  <div className="mt-6 pt-4 border-t border-white/10 text-xs text-amber-300 font-semibold">
                    Formal company profile PDF available for tender packs.
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Tab 2: Products */}
          {activeTab === 'products' && (
            <div className="space-y-6 text-left">
              <h3 className="text-2xl font-bold text-white tracking-tight">
                Verified Product Categories Stocked
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-5 rounded-2xl bg-white/5 border border-white/10">
                  <h4 className="text-amber-400 font-bold text-base mb-2">🧱 Building Materials</h4>
                  <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">
                    High-strength Simba &amp; Bamburi 42.5N Ordinary Portland Cement, Gauge 28 anti-rust corrugated iron sheets (3.0m), seasoned treated 2x2 and 2x4 cypress timber, structural TMT rebar (Y10, Y12), annealed 16G binding wire, and roofing nails with rubber washers.
                  </p>
                </div>
                <div className="p-5 rounded-2xl bg-white/5 border border-white/10">
                  <h4 className="text-teal-400 font-bold text-base mb-2">🔧 Plumbing Equipment &amp; Storage</h4>
                  <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">
                    Class B, C &amp; D PVC pressure pipes, PPR hot water conduits, heavy brass bib taps and sink mixers, 1000L to 2500L UV-treated water storage tanks, and complete ceramic sanitary ware.
                  </p>
                </div>
                <div className="p-5 rounded-2xl bg-white/5 border border-white/10">
                  <h4 className="text-orange-400 font-bold text-base mb-2">⛏️ Concrete Aggregates</h4>
                  <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">
                    Sharp river building sand, machine-graded ballast (1/2" &amp; 3/4"), foundation hardcore stones, river boulders, stone dust, and decorative pea gravel sold per tonne or full tipper load.
                  </p>
                </div>
                <div className="p-5 rounded-2xl bg-white/5 border border-white/10">
                  <h4 className="text-indigo-400 font-bold text-base mb-2">🏗️ Precast Concrete Blocks</h4>
                  <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">
                    6-inch machine-vibrated solid building blocks, hollow partition blocks, heavy road kerbs, and standard interlocking paving blocks (cabro 60mm &amp; 80mm).
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* Tab 3: Services */}
          {activeTab === 'services' && (
            <div className="space-y-6 text-left">
              <h3 className="text-2xl font-bold text-white tracking-tight">
                Commercial Capabilities &amp; Logistics Reach
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                <div className="p-6 rounded-2xl bg-white/5 border border-white/10">
                  <div className="text-3xl mb-3">🚚</div>
                  <h4 className="text-lg font-bold text-white mb-2">Countywide Site Drops</h4>
                  <p className="text-xs sm:text-sm text-gray-400 leading-relaxed">
                    Full logistics fleet ensuring direct on-site drop-offs across Siaya town, Ugunja, Bondo, Ugenya, Yala, Usenge, Sega, and wider Kenya.
                  </p>
                </div>
                <div className="p-6 rounded-2xl bg-white/5 border border-white/10">
                  <div className="text-3xl mb-3">🎨</div>
                  <h4 className="text-lg font-bold text-white mb-2">Computerized Tinting</h4>
                  <p className="text-xs sm:text-sm text-gray-400 leading-relaxed">
                    Official automated DuraCoat Colour tinting dispenser mixing 10,000+ custom shades with precision color matching in under 5 minutes.
                  </p>
                </div>
                <div className="p-6 rounded-2xl bg-white/5 border border-white/10">
                  <div className="text-3xl mb-3">📋</div>
                  <h4 className="text-lg font-bold text-white mb-2">Contractor WhatsApp BOQ</h4>
                  <p className="text-xs sm:text-sm text-gray-400 leading-relaxed">
                    Send your architectural materials schedule or bill of quantities via WhatsApp to get formal itemized quotations with trade discounts.
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* Tab 4: Contacts */}
          {activeTab === 'contacts' && (
            <div className="space-y-6 text-left">
              <h3 className="text-2xl font-bold text-white tracking-tight">
                Corporate Directory &amp; Operating Details
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                <div className="p-5 rounded-2xl bg-white/5 border border-white/10">
                  <div className="text-gray-400 text-xs uppercase font-mono">Customer Hotline</div>
                  <div className="text-base font-bold text-white mt-1">+254 708 292558</div>
                  <a href={`tel:${BRAND_CONFIG.phoneTel}`} className="text-xs text-amber-400 hover:underline mt-2 inline-block">
                    Click to Call Now &rarr;
                  </a>
                </div>
                <div className="p-5 rounded-2xl bg-white/5 border border-white/10">
                  <div className="text-gray-400 text-xs uppercase font-mono">Corporate Email</div>
                  <div className="text-base font-bold text-white mt-1 break-all">coolbasehardware2020@gmail.com</div>
                  <a href="mailto:coolbasehardware2020@gmail.com" className="text-xs text-amber-400 hover:underline mt-2 inline-block">
                    Send Email &rarr;
                  </a>
                </div>
                <div className="p-5 rounded-2xl bg-white/5 border border-white/10">
                  <div className="text-gray-400 text-xs uppercase font-mono">Showroom Address</div>
                  <div className="text-base font-bold text-white mt-1">Opposite Siaya Law Courts</div>
                  <span className="text-xs text-gray-400 mt-2 block">Siaya Town, Kenya</span>
                </div>
                <div className="p-5 rounded-2xl bg-white/5 border border-white/10">
                  <div className="text-gray-400 text-xs uppercase font-mono">Business Hours</div>
                  <div className="text-base font-bold text-white mt-1">Mon–Sat 7:30 AM – 6:30 PM</div>
                  <span className="text-xs text-amber-400 mt-2 block">Sunday: Closed</span>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

