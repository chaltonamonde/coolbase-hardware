import React from 'react';
import { BRAND_CONFIG } from '../config';
import { MapPin, Clock, Phone, MessageCircle, ArrowRight } from 'lucide-react';

export default function MapAndFinalCta() {
  return (
    <>
      {/* FINAL CTA BAND */}
      <section className="relative py-28 sm:py-36 bg-gradient-to-b from-[#070B13] to-[#05070B] border-t border-white/[0.06] overflow-hidden">
        {/* Subtle ambient light */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-[#E5A93C]/[0.04] rounded-full blur-[140px] pointer-events-none" />

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#E5A93C]/10 border border-[#E5A93C]/25 text-[#F7CA68] text-xs font-bold uppercase tracking-widest mb-6">
            Direct Contractor Desk
          </div>
          <h2 className="text-3xl sm:text-5xl font-display font-bold text-white tracking-tight leading-[1.15] mb-5">
            Ready to Supply Your Next Build?
          </h2>
          <p className="text-base sm:text-lg text-gray-400 max-w-2xl mx-auto mb-10 leading-relaxed font-normal">
            Send us your architectural specifications, materials bill of quantities, or custom paint shade numbers on WhatsApp. We generate formal itemized quotes within minutes.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <a
              href={BRAND_CONFIG.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 px-8 py-4 rounded-xl bg-gradient-to-r from-emerald-600 to-emerald-500 hover:from-emerald-500 hover:to-emerald-400 text-white font-bold text-sm sm:text-base shadow-[0_8px_24px_rgba(16,185,129,0.3)] transition-all hover:scale-105 active:scale-95"
            >
              <MessageCircle className="w-5 h-5 fill-white" />
              <span>WhatsApp Direct ({BRAND_CONFIG.phone})</span>
            </a>
            <a
              href={`tel:${BRAND_CONFIG.phoneTel}`}
              className="btn-ghost inline-flex items-center gap-2 px-8 py-4 text-sm sm:text-base font-semibold"
            >
              <Phone className="w-4 h-4 text-[#F7CA68]" />
              <span>Call Showroom</span>
            </a>
          </div>
        </div>
      </section>

      {/* MAP & LOCATION */}
      <section id="location" className="relative py-28 sm:py-36 bg-[#05070B] border-t border-white/[0.06] overflow-hidden" aria-label="Store Location">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 sm:gap-12 items-center">
            <div className="lg:col-span-1 space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#E5A93C]/10 border border-[#E5A93C]/25 text-[#F7CA68] text-xs font-bold uppercase tracking-widest">
                <MapPin className="w-3.5 h-3.5 text-[#E5A93C]" />
                Showroom &amp; Tinting Lab
              </div>
              <h2 className="text-3xl sm:text-4xl font-display font-bold text-white tracking-tight leading-tight">
                Visit Our Siaya Store
              </h2>
              <div className="space-y-4 text-xs sm:text-sm text-gray-400">
                <div className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-[#F7CA68] shrink-0 mt-0.5" />
                  <span>{BRAND_CONFIG.location}</span>
                </div>
                <div className="flex items-start gap-3">
                  <Clock className="w-4 h-4 text-[#F7CA68] shrink-0 mt-0.5" />
                  <span>{BRAND_CONFIG.hours}</span>
                </div>
                <div className="flex items-start gap-3">
                  <Phone className="w-4 h-4 text-[#F7CA68] shrink-0 mt-0.5" />
                  <span>Direct Hotline: {BRAND_CONFIG.phone}</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-2 rounded-2xl overflow-hidden border border-white/[0.08] shadow-2xl h-80 sm:h-96">
              <iframe
                title="Cool Base Hardware & DuraCoat Centre Location"
                src="https://www.google.com/maps?q=Cool+Base+Hardware+Siaya&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
