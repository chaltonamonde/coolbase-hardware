import React from 'react';
import { BRAND_CONFIG } from '../config';
import { MapPin, Clock, Phone, MessageCircle } from 'lucide-react';

export default function MapAndFinalCta() {
  return (
    <>
      {/* FINAL CTA BAND */}
      <section className="relative py-20 bg-gradient-to-b from-[#0A0E17] to-[#07090E] border-t border-white/5">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight leading-tight mb-4">
            Ready to Start Building or Painting?
          </h2>
          <p className="text-base sm:text-lg text-gray-400 max-w-2xl mx-auto mb-8">
            Send us your architectural specifications, materials bill of quantities, or custom paint shade numbers on WhatsApp. We generate full quotes in minutes.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <a
              href={BRAND_CONFIG.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 px-8 py-4 rounded-xl bg-gradient-to-r from-emerald-500 to-green-600 hover:from-emerald-400 hover:to-green-500 text-white font-bold text-base shadow-xl shadow-green-500/25 transition-all hover:scale-105"
            >
              <MessageCircle className="w-5 h-5" />
              Chat on WhatsApp ({BRAND_CONFIG.phone})
            </a>
            <a
              href={`tel:${BRAND_CONFIG.phoneTel}`}
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-white/10 hover:bg-white/15 text-white border border-white/15 font-bold text-base transition-all"
            >
              <Phone className="w-5 h-5 text-amber-400" />
              Call Now
            </a>
          </div>
        </div>
      </section>

      {/* MAP & LOCATION */}
      <section className="relative py-20 bg-[#07090E] border-t border-white/5" aria-label="Store Location">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
            <div className="lg:col-span-1">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/25 text-amber-400 text-xs font-bold uppercase tracking-widest mb-3">
                <MapPin className="w-3.5 h-3.5 text-amber-400" />
                Physical Showroom
              </div>
              <h2 className="text-3xl font-extrabold text-white mb-4">
                Visit Our Siaya Store
              </h2>
              <div className="space-y-4 text-sm text-gray-400">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                  <span>{BRAND_CONFIG.location}</span>
                </div>
                <div className="flex items-start gap-3">
                  <Clock className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                  <span>{BRAND_CONFIG.hours}</span>
                </div>
                <div className="flex items-start gap-3">
                  <Phone className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                  <span>Direct Hotline: {BRAND_CONFIG.phone}</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-2 rounded-2xl overflow-hidden border border-white/15 shadow-2xl h-80 sm:h-96">
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

