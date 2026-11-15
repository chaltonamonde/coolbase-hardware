import React from 'react';
import { BRAND_CONFIG } from '../config';
import { MapPin, Phone, Clock, MessageCircle, Shield, Mail, FileText, Download } from 'lucide-react';

export default function Footer() {
  return (
    <footer id="location" className="bg-[#05070A] border-t border-white/10 text-gray-400 text-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">
          {/* Brand Info */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-amber-400 via-amber-500 to-amber-700 flex items-center justify-center font-black text-black shadow-md">
                CB
              </div>
              <div>
                <h3 className="font-extrabold text-white text-base tracking-tight leading-none">
                  {BRAND_CONFIG.clientName}
                </h3>
                <span className="text-xs text-amber-400 font-bold uppercase tracking-wider">
                  {BRAND_CONFIG.centreName}
                </span>
              </div>
            </div>
            <p className="text-xs text-gray-400 leading-relaxed">
              Your authorized DuraCoat technical tinting partner and trusted hardware merchant in Siaya County. Engineered coatings, structural steel, and aggregates delivered direct to site.
            </p>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-amber-400 text-xs font-bold">
              <Shield className="w-3.5 h-3.5" />
              “{BRAND_CONFIG.tagline}”
            </div>
          </div>

          {/* Location & Map */}
          <div className="space-y-3">
            <h4 className="text-xs font-black uppercase tracking-widest text-white">Visit Our Showroom</h4>
            <div className="space-y-2 text-xs leading-relaxed">
              <p className="flex items-start gap-2 text-gray-300">
                <MapPin className="w-4 h-4 text-amber-400 flex-shrink-0 mt-0.5" />
                <span>{BRAND_CONFIG.location}</span>
              </p>
              <p className="flex items-center gap-2 text-gray-300">
                <Clock className="w-4 h-4 text-amber-400 flex-shrink-0" />
                <span>{BRAND_CONFIG.hours}</span>
              </p>
              <p className="flex items-center gap-2 text-gray-300">
                <Phone className="w-4 h-4 text-amber-400 flex-shrink-0" />
                <a href={`tel:${BRAND_CONFIG.phoneTel}`} className="hover:text-amber-400 transition-colors">
                  {BRAND_CONFIG.phone}
                </a>
              </p>
            </div>
          </div>

          {/* Delivery Coverage */}
          <div className="space-y-3">
            <h4 className="text-xs font-black uppercase tracking-widest text-white">Site Delivery Fleet</h4>
            <p className="text-xs text-gray-400 leading-relaxed">
              Daily tipper and pickup lorry delivery across all major sub-counties:
            </p>
            <div className="flex flex-wrap gap-1.5 text-[11px] text-gray-300">
              <span className="px-2 py-0.5 rounded-md bg-white/5 border border-white/5">Siaya Town</span>
              <span className="px-2 py-0.5 rounded-md bg-white/5 border border-white/5">Ugunja</span>
              <span className="px-2 py-0.5 rounded-md bg-white/5 border border-white/5">Bondo</span>
              <span className="px-2 py-0.5 rounded-md bg-white/5 border border-white/5">Yala</span>
              <span className="px-2 py-0.5 rounded-md bg-white/5 border border-white/5">Usenge</span>
              <span className="px-2 py-0.5 rounded-md bg-white/5 border border-white/5">Sega</span>
              <span className="px-2 py-0.5 rounded-md bg-white/5 border border-white/5">Gem</span>
            </div>
          </div>

          {/* WhatsApp Direct */}
          <div className="space-y-3">
            <h4 className="text-xs font-black uppercase tracking-widest text-white">Contractor Desk</h4>
            <p className="text-xs text-gray-400 leading-relaxed">
              Send your Bill of Quantities (BOQ) or architectural drawings for swift calculation and material pricing:
            </p>
            <a
              href={BRAND_CONFIG.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs shadow-lg shadow-emerald-600/20 transition-all"
            >
              <MessageCircle className="w-4 h-4 fill-white" />
              <span>WhatsApp Direct Desk</span>
            </a>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between text-xs text-gray-500 gap-4">
          <p>© {new Date().getFullYear()} Cool Base Enterprises – DuraCoat Centre. All rights reserved.</p>
          <div className="flex flex-wrap items-center gap-6">
            <a href="#company-profile" className="hover:text-amber-400 transition-colors flex items-center gap-1.5 font-bold text-amber-400">
              <FileText className="w-3.5 h-3.5" /> Company Profile (PDF)
            </a>
            <a href="#walkthrough" className="hover:text-amber-400 transition-colors">Walkthrough Experience</a>
            <a href="#products" className="hover:text-amber-400 transition-colors">Catalog</a>
            <a href="index.legacy.html" className="hover:text-amber-400 transition-colors">Classic Site</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

