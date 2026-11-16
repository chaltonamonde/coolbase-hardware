import React from 'react';
import { DURACOAT_CATEGORIES } from '../config';
import { ArrowUpRight, Sparkles } from 'lucide-react';

export default function CategoryGrid({ onSelectCategory }) {
  // Exclude 'all' for the showcase category cards
  const displayCats = DURACOAT_CATEGORIES.filter((c) => c.id !== 'all');

  return (
    <section
      id="categories"
      className="relative py-28 sm:py-36 bg-[#070B13] border-t border-white/[0.06] overflow-hidden"
      aria-labelledby="cats-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#E5A93C]/10 border border-[#E5A93C]/25 text-[#F7CA68] text-xs font-bold uppercase tracking-widest mb-4">
            <Sparkles className="w-3.5 h-3.5 text-[#E5A93C]" />
            Curated Showroom Departments
          </div>
          <h2
            id="cats-heading"
            className="text-3xl sm:text-5xl font-display font-bold text-white tracking-tight leading-[1.15]"
          >
            Explore Materials &amp; Finishes
          </h2>
          <p className="mt-4 text-base sm:text-lg text-gray-400 font-normal leading-relaxed">
            From structural foundation rebar and crushed aggregates to master computerized architectural DuraCoat coatings.
          </p>
        </div>

        {/* Category Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7">
          {displayCats.map((cat) => (
            <div
              key={cat.id}
              onClick={() => onSelectCategory(cat.id)}
              className="group relative rounded-2xl overflow-hidden bg-[#0C121E]/90 border border-white/[0.08] hover:border-[#E5A93C]/40 p-7 sm:p-8 flex flex-col justify-between cursor-pointer transition-all duration-400 hover:-translate-y-1.5 hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.85),0_0_25px_rgba(229,169,60,0.12)]"
            >
              {/* Category Background Thumbnail with Subtle Gradient Overlay */}
              {cat.img && (
                <div className="absolute inset-0 opacity-15 group-hover:opacity-25 transition-opacity duration-500 pointer-events-none">
                  <img
                    src={cat.img}
                    alt={cat.label}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0C121E] via-[#0C121E]/80 to-transparent" />
                </div>
              )}

              {/* Card Header: Icon & Category Chip */}
              <div className="relative z-10 flex items-center justify-between mb-10">
                <span className="text-3xl filter drop-shadow-sm group-hover:scale-110 transition-transform duration-300">
                  {cat.icon}
                </span>
                <span
                  className="px-3 py-1 rounded-full text-[11px] font-bold tracking-wide"
                  style={{
                    backgroundColor: `${cat.color || '#E5A93C'}15`,
                    color: cat.color || '#F7CA68',
                    border: `1px solid ${cat.color || '#E5A93C'}35`,
                  }}
                >
                  {cat.label}
                </span>
              </div>

              {/* Card Body */}
              <div className="relative z-10">
                <h3 className="text-lg sm:text-xl font-display font-bold text-white group-hover:text-[#F7CA68] transition-colors flex items-center justify-between">
                  <span>{cat.label}</span>
                  <div className="w-8 h-8 rounded-full bg-white/[0.04] group-hover:bg-[#E5A93C] flex items-center justify-center transition-all duration-300">
                    <ArrowUpRight className="w-4 h-4 text-gray-400 group-hover:text-black group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                  </div>
                </h3>
                <p className="mt-2.5 text-xs sm:text-sm text-gray-400 line-clamp-2 leading-relaxed">
                  {cat.description}
                </p>
              </div>

              {/* Bottom Subtle Accent Glow Line */}
              <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-[#E5A93C]/0 group-hover:via-[#E5A93C] to-transparent transition-all duration-500" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
