import React from 'react';
import { Calculator, Truck, ArrowRight } from 'lucide-react';

export default function EstimatorAndDelivery() {
  return (
    <section className="relative py-20 bg-[#0A0E17] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Estimator Teaser */}
          <div className="rounded-3xl bg-gradient-to-br from-slate-900 to-slate-950 border border-white/10 p-8 sm:p-10 flex flex-col justify-between hover:border-amber-500/40 transition-all duration-300">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-bold uppercase tracking-wider mb-4">
                <Calculator className="w-3.5 h-3.5" />
                Free Contractor Calculators
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white mb-3">
                Estimate Your Materials
              </h3>
              <p className="text-sm sm:text-base text-gray-400 leading-relaxed mb-6">
                Calculate foundation concrete, masonry blocks, roof iron sheets, and mortar quantities before ordering. Then send your estimated list straight to our WhatsApp desk.
              </p>
            </div>
            <div>
              <a
                href="calculator.html"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-amber-500 hover:bg-amber-400 text-black font-bold text-sm tracking-wide transition-all shadow-lg shadow-amber-500/20"
              >
                Open Construction Calculators <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Delivery Teaser */}
          <div className="rounded-3xl bg-gradient-to-br from-slate-900 to-slate-950 border border-white/10 p-8 sm:p-10 flex flex-col justify-between hover:border-amber-500/40 transition-all duration-300">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-bold uppercase tracking-wider mb-4">
                <Truck className="w-3.5 h-3.5" />
                Prompt Site Logistics
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white mb-3">
                Delivery Across Siaya County
              </h3>
              <p className="text-sm sm:text-base text-gray-400 leading-relaxed mb-6">
                Dedicated fleet serving Siaya town, Ugunja, Bondo, Ugenya, Yala, Usenge, Sega, and surrounding rural construction sites. Direct site drops for bulk orders.
              </p>
            </div>
            <div>
              <a
                href="delivery.html"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white/10 hover:bg-white/15 text-white border border-white/15 font-bold text-sm tracking-wide transition-all"
              >
                Delivery Zones &amp; Rates <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

