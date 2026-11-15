import React, { useState, useEffect } from 'react';
import { X, Download, FileText, ExternalLink, ShieldCheck, CheckCircle2, Building2, Phone, Mail, MapPin } from 'lucide-react';
import { BRAND_CONFIG } from '../config';

export default function CompanyProfileModal({ isOpen, onClose }) {
  const [activeTab, setActiveTab] = useState('doc'); // 'doc' or 'pdf'

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto bg-black/80 backdrop-blur-xl animate-fadeIn"
      role="dialog"
      aria-modal="true"
      aria-labelledby="company-profile-title"
    >
      <div
        className="relative w-full max-w-4xl max-h-[92vh] flex flex-col rounded-3xl bg-[#090E1A] border border-amber-500/30 shadow-[0_25px_70px_rgba(0,0,0,0.95)] overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Header */}
        <div className="flex items-center justify-between px-6 py-4.5 border-b border-white/10 bg-slate-900/80">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-amber-500/15 border border-amber-500/30 flex items-center justify-center text-amber-400">
              <FileText className="w-5 h-5" />
            </div>
            <div>
              <h3 id="company-profile-title" className="text-base sm:text-lg font-extrabold text-white">
                Cool Base Hardware – Company Profile
              </h3>
              <p className="text-xs text-gray-400">
                Official Corporate Dossier &amp; Commercial Capabilities
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            {/* Download PDF button */}
            <a
              href="/assets/Cool_Base_Hardware_Company_Profile.pdf"
              download="Cool_Base_Hardware_Company_Profile.pdf"
              className="flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-amber-500 hover:bg-amber-400 text-black text-xs font-black tracking-wide transition-all shadow-md shadow-amber-500/20"
            >
              <Download className="w-4 h-4" />
              <span className="hidden sm:inline">Download PDF</span>
            </a>

            {/* Close button */}
            <button
              onClick={onClose}
              className="p-2 rounded-xl text-gray-400 hover:text-white hover:bg-white/10 transition-colors"
              aria-label="Close Profile Dialog"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* View Switcher Tabs */}
        <div className="flex items-center gap-2 px-6 py-2.5 bg-black/40 border-b border-white/5 text-xs font-bold">
          <button
            onClick={() => setActiveTab('doc')}
            className={`px-3.5 py-1.5 rounded-lg transition-all ${
              activeTab === 'doc'
                ? 'bg-amber-500/20 text-amber-300 border border-amber-500/40'
                : 'text-gray-400 hover:text-white'
            }`}
          >
            Structured Executive Brief
          </button>
          <button
            onClick={() => setActiveTab('pdf')}
            className={`px-3.5 py-1.5 rounded-lg transition-all ${
              activeTab === 'pdf'
                ? 'bg-amber-500/20 text-amber-300 border border-amber-500/40'
                : 'text-gray-400 hover:text-white'
            }`}
          >
            Direct PDF Document Viewer
          </button>
        </div>

        {/* Modal Scrollable Content */}
        <div className="flex-1 overflow-y-auto p-6 sm:p-8 space-y-8 text-left text-sm text-gray-300">
          {activeTab === 'doc' ? (
            <>
              {/* Executive Header Banner */}
              <div className="rounded-2xl bg-gradient-to-r from-amber-500/10 via-amber-500/5 to-transparent border border-amber-500/20 p-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div>
                  <span className="inline-block px-3 py-1 rounded-full bg-amber-500/20 border border-amber-500/30 text-amber-400 text-xs font-bold uppercase tracking-wider mb-2">
                    Commercial Profile • Siaya, Kenya
                  </span>
                  <h4 className="text-2xl font-black text-white">Cool Base Hardware</h4>
                  <p className="text-gray-300 text-sm mt-1 max-w-xl">
                    A well-established supplier for all things building, civil construction, and protective coatings across Kenya, supplying and delivering to contractors and homeowners.
                  </p>
                </div>
                <div className="flex flex-col gap-1 text-xs text-amber-200/90 font-mono">
                  <span>EST: 2020</span>
                  <span>LOCATION: SIAYA TOWN</span>
                  <span>STATUS: VERIFIED SUPPLIER</span>
                </div>
              </div>

              {/* 1. Company Overview */}
              <div className="space-y-3">
                <h5 className="text-base font-extrabold text-white flex items-center gap-2 border-b border-white/10 pb-2">
                  <Building2 className="w-4 h-4 text-amber-400" />
                  1. Company Overview
                </h5>
                <div className="overflow-x-auto">
                  <table className="w-full text-xs sm:text-sm text-left border-collapse border border-white/10 rounded-xl overflow-hidden">
                    <tbody className="divide-y divide-white/5">
                      <tr className="bg-white/5">
                        <td className="py-2.5 px-4 font-bold text-gray-200 w-1/3">Business Name</td>
                        <td className="py-2.5 px-4 text-white font-semibold">Cool Base Hardware (also written Coolbase Hardware / Cool Base Enterprises)</td>
                      </tr>
                      <tr>
                        <td className="py-2.5 px-4 font-bold text-gray-200">Business Type</td>
                        <td className="py-2.5 px-4 text-gray-300">Hardware store / Building and construction supplier / DuraCoat Centre</td>
                      </tr>
                      <tr className="bg-white/5">
                        <td className="py-2.5 px-4 font-bold text-gray-200">Self-Description</td>
                        <td className="py-2.5 px-4 text-gray-300">A well-established supplier for all things building and construction across Kenya, supplying and delivering to customers.</td>
                      </tr>
                      <tr>
                        <td className="py-2.5 px-4 font-bold text-gray-200">Physical Location</td>
                        <td className="py-2.5 px-4 text-amber-300 font-semibold">Siaya Town, Opposite the Siaya Law Courts, Siaya County, Kenya</td>
                      </tr>
                      <tr className="bg-white/5">
                        <td className="py-2.5 px-4 font-bold text-gray-200">Year Founded</td>
                        <td className="py-2.5 px-4 text-gray-300">Established 2020 (email &amp; commercial records verified)</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              {/* 2. Products Sold */}
              <div className="space-y-3">
                <h5 className="text-base font-extrabold text-white flex items-center gap-2 border-b border-white/10 pb-2">
                  <ShieldCheck className="w-4 h-4 text-amber-400" />
                  2. Products Sold &amp; Certified Lines
                </h5>
                <div className="overflow-x-auto">
                  <table className="w-full text-xs sm:text-sm text-left border-collapse border border-white/10 rounded-xl overflow-hidden">
                    <tbody className="divide-y divide-white/5">
                      <tr className="bg-white/5">
                        <td className="py-2.5 px-4 font-bold text-amber-400 w-1/3">Building Materials</td>
                        <td className="py-2.5 px-4 text-gray-200">Ordinary Portland Cement 42.5N (Simba/Bamburi), Gauge 28 corrugated iron sheets, structural rebar (Y10/Y12), annealed binding wire, treated cypress timber.</td>
                      </tr>
                      <tr>
                        <td className="py-2.5 px-4 font-bold text-teal-400">Plumbing &amp; Sanitary</td>
                        <td className="py-2.5 px-4 text-gray-200">PVC pressure pipes &amp; drainage, brass gate valves &amp; bib taps, roto-molded water storage tanks (1000L - 2500L), wash basins &amp; sanitary fixtures.</td>
                      </tr>
                      <tr className="bg-white/5">
                        <td className="py-2.5 px-4 font-bold text-orange-400">Concrete Aggregates</td>
                        <td className="py-2.5 px-4 text-gray-200">Clean building sand, machine-crushed ballast, hardcore boulders, pea gravel, and stone dust for high-load structural mixes.</td>
                      </tr>
                      <tr>
                        <td className="py-2.5 px-4 font-bold text-indigo-400">Concrete Blocks</td>
                        <td className="py-2.5 px-4 text-gray-200">Solid 6-inch load-bearing blocks, hollow blocks, road kerbs, and high-density paving blocks (cabro).</td>
                      </tr>
                      <tr className="bg-white/5">
                        <td className="py-2.5 px-4 font-bold text-amber-300">DuraCoat Paints</td>
                        <td className="py-2.5 px-4 text-gray-200">Official certified DuraCoat Colour Centre with computerized exact-match tinting (10,000+ shades), silicone weatherproofing, textured wall coatings, and anti-efflorescence primers.</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              {/* 3. Services Offered */}
              <div className="space-y-3">
                <h5 className="text-base font-extrabold text-white flex items-center gap-2 border-b border-white/10 pb-2">
                  <CheckCircle2 className="w-4 h-4 text-amber-400" />
                  3. Services Offered
                </h5>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="rounded-xl bg-white/5 border border-white/10 p-4">
                    <h6 className="font-bold text-white text-sm mb-1">Direct Construction Supply</h6>
                    <p className="text-xs text-gray-400">Supply of all structural, civil, plumbing, and finishing construction materials in bulk or unit quantities.</p>
                  </div>
                  <div className="rounded-xl bg-white/5 border border-white/10 p-4">
                    <h6 className="font-bold text-white text-sm mb-1">Countywide &amp; National Delivery</h6>
                    <p className="text-xs text-gray-400">Fleet delivery covering Siaya town, Ugunja, Bondo, Ugenya, Yala, Usenge, Sega, and cross-county Kenya drops.</p>
                  </div>
                  <div className="rounded-xl bg-white/5 border border-white/10 p-4">
                    <h6 className="font-bold text-white text-sm mb-1">Computerized Paint Tinting</h6>
                    <p className="text-xs text-gray-400">On-the-spot robotic tinting for DuraCoat architectural paints matching designer palettes in 5 minutes.</p>
                  </div>
                  <div className="rounded-xl bg-white/5 border border-white/10 p-4">
                    <h6 className="font-bold text-white text-sm mb-1">Contractor Terms &amp; WhatsApp Quotes</h6>
                    <p className="text-xs text-gray-400">Fast bill-of-quantities estimates, verified M-Pesa business accounts, and institutional procurement invoicing.</p>
                  </div>
                </div>
              </div>

              {/* 4. Contact Details */}
              <div className="space-y-3">
                <h5 className="text-base font-extrabold text-white flex items-center gap-2 border-b border-white/10 pb-2">
                  <Phone className="w-4 h-4 text-amber-400" />
                  4. Contact &amp; Vetting Details
                </h5>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                  <div className="flex items-center gap-3 p-3 rounded-xl bg-white/5 border border-white/10">
                    <Phone className="w-4 h-4 text-amber-400 shrink-0" />
                    <div>
                      <div className="text-gray-400">Phone Hotline</div>
                      <div className="font-bold text-white">+254 708 292558</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 p-3 rounded-xl bg-white/5 border border-white/10">
                    <Mail className="w-4 h-4 text-amber-400 shrink-0" />
                    <div>
                      <div className="text-gray-400">Official Email</div>
                      <div className="font-bold text-white">coolbasehardware2020@gmail.com</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 p-3 rounded-xl bg-white/5 border border-white/10">
                    <MapPin className="w-4 h-4 text-amber-400 shrink-0" />
                    <div>
                      <div className="text-gray-400">Location</div>
                      <div className="font-bold text-white">Opposite Siaya Law Courts, Siaya Town</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 p-3 rounded-xl bg-white/5 border border-white/10">
                    <Building2 className="w-4 h-4 text-amber-400 shrink-0" />
                    <div>
                      <div className="text-gray-400">Operating Hours</div>
                      <div className="font-bold text-white">Mon–Sat: 7:30 AM – 6:30 PM (Sun: Closed)</div>
                    </div>
                  </div>
                </div>
              </div>
            </>
          ) : (
            <div className="w-full h-[65vh] rounded-2xl overflow-hidden border border-white/15 bg-slate-950 flex flex-col items-center justify-center">
              <iframe
                src="/assets/Cool_Base_Hardware_Company_Profile.pdf"
                title="Company Profile PDF Preview"
                className="w-full h-full"
              />
            </div>
          )}
        </div>

        {/* Footer Actions */}
        <div className="px-6 py-4 border-t border-white/10 bg-slate-900/80 flex flex-wrap items-center justify-between gap-3">
          <span className="text-xs text-gray-400">
            Document: <strong className="text-white">Cool_Base_Hardware_Company_Profile.pdf</strong> (Compiled &amp; Verified)
          </span>
          <div className="flex items-center gap-3">
            <a
              href="/assets/Cool_Base_Hardware_Company_Profile.pdf"
              download="Cool_Base_Hardware_Company_Profile.pdf"
              className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-black text-xs font-black tracking-wide transition-all shadow-md"
            >
              <Download className="w-4 h-4" />
              <span>Download PDF Document</span>
            </a>
            <button
              onClick={onClose}
              className="px-4 py-2.5 rounded-xl bg-white/10 hover:bg-white/15 text-white text-xs font-bold transition-all"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

