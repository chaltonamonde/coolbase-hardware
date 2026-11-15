import React from 'react';
import { HOW_IT_WORKS } from '../config';
import { ClipboardList } from 'lucide-react';

export default function HowItWorks() {
  return (
    <section className="relative py-20 bg-[#0A0E17] border-t border-white/5" aria-labelledby="hiw-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/25 text-amber-400 text-xs font-bold uppercase tracking-widest mb-3">
            <ClipboardList className="w-3.5 h-3.5 text-amber-400" />
            Simple 3-Step Process
          </div>
          <h2 id="hiw-heading" className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            How It Works
          </h2>
          <p className="mt-3 text-base text-gray-400">
            Streamlined order-to-site workflow designed for contractors and homeowners in Siaya.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {HOW_IT_WORKS.map((step) => (
            <div
              key={step.step}
              className="relative rounded-2xl bg-gradient-to-br from-slate-900/80 to-slate-950/80 border border-white/10 p-8 flex flex-col justify-between hover:border-amber-500/40 transition-all duration-300 hover:-translate-y-1"
            >
              <div className="flex items-center justify-between mb-6">
                <span className="w-12 h-12 rounded-xl bg-amber-500/15 border border-amber-500/30 flex items-center justify-center font-extrabold text-xl text-amber-400">
                  {step.step}
                </span>
                <span className="text-xs uppercase tracking-widest font-semibold text-gray-500">
                  Step 0{step.step}
                </span>
              </div>
              <div>
                <h3 className="text-xl font-bold text-white mb-2">
                  {step.title}
                </h3>
                <p className="text-sm text-gray-400 leading-relaxed">
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

