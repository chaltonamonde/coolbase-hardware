import React from 'react';
import { BRAND_CONFIG } from '../config';
import { Palette, Shield, Droplets, Truck, Wrench, Sparkles, CheckCircle2 } from 'lucide-react';

export default function DuraCoatFeatures() {
  const features = [
    {
      icon: Palette,
      title: 'Computerized Color Tinting',
      desc: 'Our in-store DuraCoat automated spectrophotometer and tinting lab accurately formulates over 10,000+ RAL, NCS, and custom architectural shades in minutes.',
      pill: 'Exact Match Guarantee',
    },
    {
      icon: Droplets,
      title: 'Anti-Fungal Silicone Systems',
      desc: 'Engineered specifically for high-rainfall tropical climates. WeatherGuard silicone resins repel driving rain while allowing interior masonry vapor to breathe freely.',
      pill: 'Tropical Moisture Defense',
    },
    {
      icon: Shield,
      title: 'Certified Surface Inspection',
      desc: 'Unsure of your substrate moisture levels or plaster alkalinity? Our technical specialists evaluate wall moisture before you apply primers to avoid peeling.',
      pill: 'Ask the Experts',
    },
    {
      icon: Truck,
      title: 'Direct-to-Site Lorry Transport',
      desc: 'From 20L paint buckets to 7-tonne river sand tippers and structural Y12 rebar, our fleet dispatches daily across Siaya, Ugunja, Bondo, Yala, and Sega.',
      pill: 'Reliable Site Delivery',
    },
  ];

  return (
    <section id="duracoat-systems" className="py-24 bg-[#0C111C]/80 border-t border-white/5 relative overflow-hidden">
      {/* Ambient background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-amber-500/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-amber-400 font-extrabold text-xs uppercase tracking-[0.25em]">
            Technical Excellence
          </span>
          <h2 className="mt-2 text-3xl sm:text-5xl font-black text-white tracking-tight">
            Why Siaya Contractors Rely on DuraCoat Centre
          </h2>
          <p className="mt-4 text-base text-gray-400">
            We don’t just sell cans off a shelf. We engineer complete coating systems and supply heavy construction materials with guaranteed structural integrity.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((f, i) => {
            const Icon = f.icon;
            return (
              <div
                key={i}
                className="p-8 rounded-3xl bg-[#121927]/90 border border-white/10 hover:border-amber-500/40 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl flex flex-col justify-between group"
              >
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400 mb-6 group-hover:scale-110 group-hover:bg-amber-500 group-hover:text-black transition-all duration-300">
                    <Icon className="w-6 h-6" />
                  </div>
                  <span className="text-[10px] font-extrabold uppercase tracking-wider text-amber-400/90 block mb-2">
                    {f.pill}
                  </span>
                  <h3 className="text-lg font-extrabold text-white mb-3 tracking-tight">
                    {f.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-400 leading-relaxed">
                    {f.desc}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-white/5 flex items-center gap-2 text-xs text-amber-400/90 font-bold">
                  <CheckCircle2 className="w-4 h-4 text-amber-400" />
                  <span>Certified Standard</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

