import React from 'react';
import { HOW_IT_WORKS } from '../config';
import { ClipboardList, ArrowRight } from 'lucide-react';

export default function HowItWorks() {
  return (
    <section
      id="how-it-works"
      className="relative py-28 sm:py-36 bg-[#05070B] border-t border-white/[0.06] overflow-hidden"
      aria-labelledby="hiw-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#E5A93C]/10 border border-[#E5A93C]/25 text-[#F7CA68] text-xs font-bold uppercase tracking-widest mb-4">
            <ClipboardList className="w-3.5 h-3.5 text-[#E5A93C]" />
            Streamlined Procurement
          </div>
          <h2
            id="hiw-heading"
            className="text-3xl sm:text-5xl font-display font-bold text-white tracking-tight leading-[1.15]"
          >
            How We Supply Your Project
          </h2>
          <p className="mt-4 text-base sm:text-lg text-gray-400 font-normal leading-relaxed">
            A frictionless order-to-site workflow designed for contractors, foremen, and homeowners across Siaya County.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {HOW_IT_WORKS.map((step) => (
            <div
              key={step.step}
              className="relative rounded-2xl bg-[#0C121E]/80 border border-white/[0.08] hover:border-[#E5A93C]/40 p-8 sm:p-10 flex flex-col justify-between transition-all duration-400 hover:-translate-y-1.5 hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.85),0_0_25px_rgba(229,169,60,0.1)] group"
            >
              <div className="flex items-center justify-between mb-8">
                <span className="w-12 h-12 rounded-xl bg-white/[0.04] border border-white/[0.08] flex items-center justify-center font-display font-bold text-lg text-[#F7CA68] group-hover:bg-[#E5A93C] group-hover:text-black group-hover:border-[#E5A93C] transition-all duration-300">
                  {step.step}
                </span>
                <span className="text-[11px] uppercase tracking-widest font-semibold text-gray-400">
                  Phase 0{step.step}
                </span>
              </div>
              <div>
                <h3 className="text-xl font-display font-bold text-white mb-3 group-hover:text-[#F7CA68] transition-colors">
                  {step.title}
                </h3>
                <p className="text-xs sm:text-sm text-gray-400 leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
