import React from 'react';
import { WHY_CHOOSE_US } from '../config';
import { Award, ShieldCheck } from 'lucide-react';

export default function WhyChooseUs() {
  return (
    <section
      id="experts"
      className="relative py-28 sm:py-36 bg-[#070B13] border-t border-white/[0.06] overflow-hidden"
      aria-labelledby="why-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#E5A93C]/10 border border-[#E5A93C]/25 text-[#F7CA68] text-xs font-bold uppercase tracking-widest mb-4">
            <Award className="w-3.5 h-3.5 text-[#E5A93C]" />
            Regional Excellence
          </div>
          <h2
            id="why-heading"
            className="text-3xl sm:text-5xl font-display font-bold text-white tracking-tight leading-[1.15]"
          >
            Why Siaya Contractors Partner With Us
          </h2>
          <p className="mt-4 text-base sm:text-lg text-gray-400 font-normal leading-relaxed">
            Trusted by construction teams, institutional developers, and private homeowners across Siaya County.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-7">
          {WHY_CHOOSE_US.map((item, idx) => (
            <div
              key={idx}
              className="rounded-2xl bg-[#0C121E]/80 border border-white/[0.08] hover:border-[#E5A93C]/40 p-7 sm:p-8 flex flex-col items-start transition-all duration-400 hover:-translate-y-1.5 hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.85),0_0_25px_rgba(229,169,60,0.1)] group"
            >
              <span className="text-3xl mb-6 p-3.5 rounded-xl bg-white/[0.03] border border-white/[0.08] group-hover:scale-105 transition-transform duration-300">
                {item.icon}
              </span>
              <h3 className="text-lg font-display font-bold text-white mb-2.5 group-hover:text-[#F7CA68] transition-colors">
                {item.title}
              </h3>
              <p className="text-xs sm:text-sm text-gray-400 leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
