import React from 'react';
import { BRAND_CONFIG } from '../config';
import { MapPin, Phone, Clock, MessageCircle, Shield, Mail, FileText, Download, ArrowUpRight } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#030508] border-t border-white/[0.08] text-gray-400 text-xs sm:text-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">
          {/* Brand Info */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="relative w-10 h-10 rounded-xl bg-gradient-to-br from-[#F7CA68] via-[#E5A93C] to-[#C68924] flex items-center justify-center font-display font-black text-black shadow-md">
                <span>CB</span>
              </div>
              <div>
                <h3 className="font-display font-bold text-white text-base tracking-tight leading-none">
                  {BRAND_CONFIG.clientName}
                </h3>
                <span className="text-[11px] text-[#F7CA68] font-bold uppercase tracking-wider block mt-1">
                  {BRAND_CONFIG.centreName}
                </span>
              </div>
            </div>
            <p className="text-xs text-gray-400 leading-relaxed">
              Your authorized DuraCoat technical tinting partner and trusted hardware supplier in Siaya County. Engineered coatings, structural steel, and aggregates delivered direct to site.
            </p>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.04] border border-white/[0.08] text-[#F7CA68] text-[11px] font-bold">
              <Shield className="w-3.5 h-3.5" />
              “{BRAND_CONFIG.tagline}”
            </div>
          </div>

          {/* Location & Map */}
          <div className="space-y-3">
            <h4 className="text-xs font-display font-bold uppercase tracking-widest text-white">
              Physical Showroom
            </h4>
            <div className="space-y-2 text-xs leading-relaxed">
              <p className="flex items-start gap-2 text-gray-300">
                <MapPin className="w-4 h-4 text-[#F7CA68] shrink-0 mt-0.5" />
                <span>{BRAND_CONFIG.location}</span>
              </p>
              <p className="flex items-center gap-2 text-gray-300">
                <Clock className="w-4 h-4 text-[#F7CA68] shrink-0" />
                <span>{BRAND_CONFIG.hours}</span>
              </p>
              <p className="flex items-center gap-2 text-gray-300">
                <Phone className="w-4 h-4 text-[#F7CA68] shrink-0" />
                <a href={`tel:${BRAND_CONFIG.phoneTel}`} className="hover:text-[#F7CA68] transition-colors">
                  {BRAND_CONFIG.phone}
                </a>
              </p>
            </div>
          </div>

          {/* Delivery Coverage */}
          <div className="space-y-3">
            <h4 className="text-xs font-display font-bold uppercase tracking-widest text-white">
              Logistics Fleet
            </h4>
            <p className="text-xs text-gray-400 leading-relaxed">
              Daily tipper and pickup drops across all regional sub-counties:
            </p>
            <div className="flex flex-wrap gap-1.5 text-[11px] text-gray-300">
              <span className="px-2.5 py-0.5 rounded-md bg-white/[0.03] border border-white/[0.06]">Siaya Town</span>
              <span className="px-2.5 py-0.5 rounded-md bg-white/[0.03] border border-white/[0.06]">Ugunja</span>
              <span className="px-2.5 py-0.5 rounded-md bg-white/[0.03] border border-white/[0.06]">Bondo</span>
              <span className="px-2.5 py-0.5 rounded-md bg-white/[0.03] border border-white/[0.06]">Yala</span>
              <span className="px-2.5 py-0.5 rounded-md bg-white/[0.03] border border-white/[0.06]">Usenge</span>
              <span className="px-2.5 py-0.5 rounded-md bg-white/[0.03] border border-white/[0.06]">Sega</span>
              <span className="px-2.5 py-0.5 rounded-md bg-white/[0.03] border border-white/[0.06]">Gem</span>
            </div>
          </div>

          {/* WhatsApp Direct */}
          <div className="space-y-3">
            <h4 className="text-xs font-display font-bold uppercase tracking-widest text-white">
              Contractor BOQ Desk
            </h4>
            <p className="text-xs text-gray-400 leading-relaxed">
              Send your Bill of Quantities or architectural plans for swift calculation and material pricing:
            </p>
            <a
              href={BRAND_CONFIG.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs shadow-lg shadow-emerald-600/20 transition-all"
            >
              <MessageCircle className="w-4 h-4 fill-white" />
              <span>WhatsApp Concierge</span>
            </a>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-white/[0.06] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-500">
          <div>
            &copy; {new Date().getFullYear()} {BRAND_CONFIG.clientName} – {BRAND_CONFIG.centreName}. All rights reserved.
          </div>
          <div className="flex items-center gap-6">
            <a href="/assets/Cool_Base_Hardware_Company_Profile.pdf" download className="hover:text-gray-300 transition-colors">
              Company Profile (PDF)
            </a>
            <a href="faq.html" className="hover:text-gray-300 transition-colors">
              FAQ
            </a>
            <a href="delivery.html" className="hover:text-gray-300 transition-colors">
              Delivery
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
