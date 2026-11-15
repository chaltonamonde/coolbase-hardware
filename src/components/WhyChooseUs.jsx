import React from 'react';
import { WHY_CHOOSE_US } from '../config';
import { Award } from 'lucide-react';

export default function WhyChooseUs() {
  return (
    <section className="relative py-20 bg-[#07090E] border-t border-white/5" aria-labelledby="why-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/25 text-amber-400 text-xs font-bold uppercase tracking-widest mb-3">
            <Award className="w-3.5 h-3.5 text-amber-400" />
            Reliable Local Partner
          </div>
          <h2 id="why-heading" className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Why Contractors Choose Us
          </h2>
          <p className="mt-3 text-base text-gray-400">
            Trusted by construction teams, foremen, and property developers across Siaya County.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {WHY_CHOOSE_US.map((item, idx) => (
            <div
              key={idx}
              className="rounded-2xl bg-gradient-to-br from-slate-900/80 to-slate-950/80 border border-white/10 hover:border-amber-500/40 p-6 flex flex-col items-start transition-all duration-300 hover:-translate-y-1"
            >
              <span className="text-4xl mb-4 p-3 rounded-xl bg-white/5 border border-white/10">
                {item.icon}
              </span>
              <h3 className="text-lg font-bold text-white mb-2">
                {item.title}
              </h3>
              <p className="text-sm text-gray-400 leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

