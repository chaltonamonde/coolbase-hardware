import React from 'react';
import { Palette, Shield, Droplets, Truck, CheckCircle2, Sparkles } from 'lucide-react';

export default function DuraCoatFeatures() {
  const features = [
    {
      icon: Palette,
      title: 'Computerized Color Tinting',
      desc: 'Our in-store DuraCoat automated spectrophotometer dispenses over 10,000+ RAL, NCS, and architectural designer shades within 5 minutes with millimeter consistency.',
      pill: 'Exact Shade Matching',
    },
    {
      icon: Droplets,
      title: 'Silicone WeatherGuard Systems',
      desc: 'Formulated for tropical high-rainfall zones. Silicone resins create an impenetrable moisture barrier while maintaining substrate breathability to prevent paint blistering.',
      pill: 'Tropical Moisture Defense',
    },
    {
      icon: Shield,
      title: 'Certified Substrate Moisture Testing',
      desc: 'Avoid costly peeling before application begins. Our certified technicians assess wall moisture levels and plaster alkalinity on-site or at our technical counter.',
      pill: 'Technical Advisory',
    },
    {
      icon: Truck,
      title: 'Direct-to-Site Transport Fleet',
      desc: 'From 20L commercial paint buckets to 7-tonne river sand tippers and Y12 high-yield rebar, our dispatch trucks deliver directly to construction sites across Siaya County.',
      pill: 'Guaranteed On-Site Drops',
    },
  ];

  return (
    <section
      id="duracoat-systems"
      className="relative py-28 sm:py-36 bg-[#05070B] border-t border-white/[0.06] overflow-hidden"
    >
      {/* Ambient background light */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[850px] h-[400px] bg-[#E5A93C]/[0.03] rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#E5A93C]/10 border border-[#E5A93C]/25 text-[#F7CA68] text-xs font-bold uppercase tracking-widest mb-4">
            <Sparkles className="w-3.5 h-3.5 text-[#E5A93C]" />
            DuraCoat Technical Centre
          </div>
          <h2 className="text-3xl sm:text-5xl font-display font-bold text-white tracking-tight leading-[1.15]">
            Engineered Paint Systems &amp; Technical Support
          </h2>
          <p className="mt-4 text-base sm:text-lg text-gray-400 font-normal leading-relaxed">
            We don’t just supply paint off a shelf. We formulate custom coating solutions and back them with structural warranties and master surface advice.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-7">
          {features.map((f, i) => {
            const Icon = f.icon;
            return (
              <div
                key={i}
                className="p-8 rounded-2xl bg-[#0C121E]/80 border border-white/[0.08] hover:border-[#E5A93C]/40 transition-all duration-400 hover:-translate-y-1.5 hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.85),0_0_25px_rgba(229,169,60,0.1)] flex flex-col justify-between group"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-white/[0.04] border border-white/[0.08] flex items-center justify-center text-[#F7CA68] mb-6 group-hover:scale-105 group-hover:bg-[#E5A93C] group-hover:text-black group-hover:border-[#E5A93C] transition-all duration-300">
                    <Icon className="w-5 h-5" />
                  </div>
                  <span className="text-[10px] font-bold uppercase tracking-widest text-[#F7CA68] block mb-2">
                    {f.pill}
                  </span>
                  <h3 className="text-lg font-display font-bold text-white mb-3 tracking-tight">
                    {f.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-400 leading-relaxed">
                    {f.desc}
                  </p>
                </div>

                <div className="mt-8 pt-4 border-t border-white/[0.06] flex items-center gap-2 text-xs text-gray-300 font-medium">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  <span>Certified Specification</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
