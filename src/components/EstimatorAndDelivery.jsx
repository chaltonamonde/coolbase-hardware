import React from 'react';
import { Calculator, Truck, ArrowRight } from 'lucide-react';

export default function EstimatorAndDelivery() {
  return (
    <section className="relative py-28 sm:py-36 bg-[#05070B] border-t border-white/[0.06] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-7 sm:gap-8">
          {/* Estimator Teaser */}
          <div className="glass-card p-8 sm:p-10 lg:p-12 flex flex-col justify-between group">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#E5A93C]/10 border border-[#E5A93C]/25 text-[#F7CA68] text-xs font-bold uppercase tracking-wider mb-5">
                <Calculator className="w-3.5 h-3.5 text-[#E5A93C]" />
                Contractor Calculators
              </div>
              <h3 className="text-2xl sm:text-3xl font-display font-bold text-white mb-3 tracking-tight">
                Accurate Material Estimation
              </h3>
              <p className="text-xs sm:text-sm text-gray-400 leading-relaxed mb-8">
                Compute foundation concrete mix ratios, masonry block quantities, corrugated roofing sheets, and mortar before placing your order. Then transmit your estimated schedule directly to our WhatsApp concierge.
              </p>
            </div>
            <div>
              <a
                href="calculator.html"
                className="btn-gold inline-flex items-center gap-2 px-6 py-3 text-xs sm:text-sm"
              >
                <span>Launch Construction Calculators</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Delivery Teaser */}
          <div className="glass-card p-8 sm:p-10 lg:p-12 flex flex-col justify-between group">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/25 text-cyan-400 text-xs font-bold uppercase tracking-wider mb-5">
                <Truck className="w-3.5 h-3.5" />
                Prompt Site Logistics
              </div>
              <h3 className="text-2xl sm:text-3xl font-display font-bold text-white mb-3 tracking-tight">
                Daily Countywide Site Drops
              </h3>
              <p className="text-xs sm:text-sm text-gray-400 leading-relaxed mb-8">
                Dedicated fleet serving Siaya town, Ugunja, Bondo, Ugenya, Yala, Usenge, Sega, and surrounding rural construction sites. Direct site drops for bulk cement, river sand tippers, and rebar bundles.
              </p>
            </div>
            <div>
              <a
                href="delivery.html"
                className="btn-ghost inline-flex items-center gap-2 px-6 py-3 text-xs sm:text-sm font-semibold"
              >
                <span>View Logistics Zones &amp; Rates</span>
                <ArrowRight className="w-4 h-4 text-[#F7CA68]" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
