import React, { useState } from 'react';
import { FileText, Download, ChevronRight, Eye, ShieldCheck, X, Maximize2 } from 'lucide-react';
import { BRAND_CONFIG } from '../config';

/**
 * CompanyProfileHUD
 * -----------------
 * An interactive, scroll-synced heads-up display overlay integrated
 * directly into the pinned 450vh walkthrough stage.
 * 
 * As the visitor scrolls, the company profile narrative advances in sync:
 * 1. Overview & Establishment (0.00 -> 0.25)
 * 2. Product Lines & DuraCoat Formulation (0.25 -> 0.50)
 * 3. Verified Supply & Logistics Services (0.50 -> 0.75)
 * 4. Corporate Directory & Procurement Desk (0.75 -> 1.00)
 */
export default function CompanyProfileHUD({ progress = 0, onOpenFullProfile }) {
  const [isMinimized, setIsMinimized] = useState(false);
  const p = Math.min(Math.max(progress, 0), 1);

  // Determine current active section of the profile based on scroll progression
  let currentSection = {
    step: '1/4',
    title: 'Company Overview & Identity',
    badge: 'Established 2020 • Siaya, Kenya',
    text: 'Cool Base Hardware (Cool Base Enterprises) is a premier supplier for all building and construction materials across Kenya, delivering verified structural supplies and architectural finishes directly to job sites.',
    highlight: 'Headquarters: Opposite Siaya Law Courts, Siaya Town',
  };

  if (p >= 0.25 && p < 0.50) {
    currentSection = {
      step: '2/4',
      title: 'Products & Paint Formulation',
      badge: 'Official DuraCoat Colour Centre',
      text: 'Specializing in Ordinary Portland Cement 42.5N, Gauge 28 corrugated iron sheets, structural rebar, treated timber, precision concrete blocks, aggregates, and certified DuraCoat computerized color tinting.',
      highlight: 'Over 10,000+ custom architectural paint formulations mixed in minutes.',
    };
  } else if (p >= 0.50 && p < 0.75) {
    currentSection = {
      step: '3/4',
      title: 'Verified Supply & Logistics',
      badge: 'Countywide Fleet Delivery',
      text: 'Comprehensive commercial supply with direct site drops across Siaya Town, Ugunja, Bondo, Ugenya, Yala, Usenge, Sega, and wider Kenya. Contractor accounts, M-Pesa business payments, and instant WhatsApp BOQ quotations.',
      highlight: 'Rapid response delivery fleet for aggregates and heavy loads.',
    };
  } else if (p >= 0.75) {
    currentSection = {
      step: '4/4',
      title: 'Corporate Directory & Desk',
      badge: 'Official Procurement Contacts',
      text: 'Direct hotline: +254 708 292558 • Email: coolbasehardware2020@gmail.com • Mon–Sat 7:30 AM – 6:30 PM. Download our formal profile document for procurement vetting and corporate tenders.',
      highlight: 'Verified registration, supplier accounts, and invoice billing.',
    };
  }

  return (
    <aside
      className="absolute top-20 sm:top-24 right-4 sm:right-8 z-40 max-w-sm sm:max-w-md pointer-events-auto transition-all duration-300"
      aria-label="Live Company Profile Scroll Reader"
    >
      {isMinimized ? (
        <button
          onClick={() => setIsMinimized(false)}
          className="flex items-center gap-2.5 px-4 py-2.5 rounded-2xl bg-[#0C121E]/90 hover:bg-[#141E32] border border-amber-500/40 text-amber-300 shadow-2xl backdrop-blur-xl text-xs sm:text-sm font-bold tracking-wide transition-all hover:scale-105 cursor-pointer"
          title="Expand Company Profile Reader"
        >
          <FileText className="w-4 h-4 text-amber-400" />
          <span>Read Company Profile</span>
          <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
        </button>
      ) : (
        <div className="rounded-2xl sm:rounded-3xl bg-[#090E1A]/90 backdrop-blur-2xl border border-amber-500/30 p-5 sm:p-6 shadow-[0_20px_50px_rgba(0,0,0,0.85)] text-left relative overflow-hidden transition-all duration-300">
          {/* Subtle top amber highlight accent */}
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-amber-500 to-transparent" />

          {/* Header Row */}
          <div className="flex items-center justify-between gap-2 mb-3">
            <div className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-wider text-amber-400">
              <FileText className="w-4 h-4 text-amber-400 shrink-0" />
              <span>Company Profile</span>
              <span className="text-white/30">•</span>
              <span className="text-gray-400 font-mono text-[11px]">{currentSection.step}</span>
            </div>
            <div className="flex items-center gap-1.5">
              <button
                onClick={onOpenFullProfile}
                className="p-1.5 rounded-lg text-gray-400 hover:text-white hover:bg-white/10 transition-colors"
                title="Open Full Profile Modal"
              >
                <Maximize2 className="w-3.5 h-3.5" />
              </button>
              <button
                onClick={() => setIsMinimized(true)}
                className="p-1.5 rounded-lg text-gray-400 hover:text-white hover:bg-white/10 transition-colors"
                title="Minimize Reader"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Active Section Badge */}
          <div className="mb-2">
            <span className="inline-block px-2.5 py-0.5 rounded-md bg-amber-500/15 border border-amber-500/30 text-[11px] font-bold text-amber-300 uppercase tracking-wider">
              {currentSection.badge}
            </span>
          </div>

          {/* Section Title */}
          <h4 className="text-base sm:text-lg font-extrabold text-white tracking-tight leading-snug mb-2">
            {currentSection.title}
          </h4>

          {/* Scroll-Synced Narrative Text */}
          <p className="text-xs sm:text-sm text-gray-300 leading-relaxed mb-3">
            {currentSection.text}
          </p>

          {/* Verified Highlight Box */}
          <div className="rounded-xl bg-white/5 border border-white/10 px-3 py-2 text-[11px] sm:text-xs text-amber-200/90 font-medium mb-4 flex items-start gap-2">
            <ShieldCheck className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
            <span>{currentSection.highlight}</span>
          </div>

          {/* Interactive Actions */}
          <div className="flex items-center gap-2 pt-1 border-t border-white/10">
            <button
              onClick={onOpenFullProfile}
              className="flex-1 flex items-center justify-center gap-1.5 px-3 py-2 rounded-xl bg-amber-500 hover:bg-amber-400 text-black text-xs font-black tracking-wide transition-all shadow-md shadow-amber-500/20 cursor-pointer"
            >
              <Eye className="w-3.5 h-3.5" />
              <span>Full Document</span>
            </button>
            <a
              href="/assets/Cool_Base_Hardware_Company_Profile.pdf"
              download="Cool_Base_Hardware_Company_Profile.pdf"
              className="flex items-center justify-center gap-1.5 px-3 py-2 rounded-xl bg-white/10 hover:bg-white/15 text-white text-xs font-bold tracking-wide border border-white/15 transition-all"
              title="Download PDF"
            >
              <Download className="w-3.5 h-3.5 text-amber-400" />
              <span>PDF</span>
            </a>
          </div>

          {/* Mini Scroll Progress Track */}
          <div className="mt-3 flex items-center gap-2 text-[10px] text-gray-400">
            <span className="font-mono">Scroll to read more</span>
            <div className="flex-1 h-1 bg-white/10 rounded-full overflow-hidden">
              <div
                className="h-full bg-amber-500 rounded-full transition-all duration-150"
                style={{ width: `${Math.round(p * 100)}%` }}
              />
            </div>
            <span className="font-mono text-amber-400">{Math.round(p * 100)}%</span>
          </div>
        </div>
      )}
    </aside>
  );
}

