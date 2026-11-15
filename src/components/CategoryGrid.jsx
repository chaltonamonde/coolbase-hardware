import React from 'react';
import { DURACOAT_CATEGORIES } from '../config';
import { ArrowRight, Sparkles } from 'lucide-react';

export default function CategoryGrid({ onSelectCategory }) {
  // Exclude 'all' for the showcase category cards
  const displayCats = DURACOAT_CATEGORIES.filter((c) => c.id !== 'all');

  return (
    <section className="relative py-20 bg-[#07090E] border-t border-white/5" aria-labelledby="cats-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/25 text-amber-400 text-xs font-bold uppercase tracking-widest mb-3">
            <Sparkles className="w-3.5 h-3.5 text-amber-400" />
            Extensive Building &amp; Coating Range
          </div>
          <h2 id="cats-heading" className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Shop by Category
          </h2>
          <p className="mt-3 text-base text-gray-400">
            From foundation reinforcement and masonry aggregates to certified architectural DuraCoat finishes.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {displayCats.map((cat) => (
            <div
              key={cat.id}
              onClick={() => onSelectCategory(cat.id)}
              className="group relative rounded-2xl overflow-hidden bg-gradient-to-br from-slate-900/90 to-slate-950/90 border border-white/10 hover:border-amber-500/50 p-6 flex flex-col justify-between cursor-pointer transition-all duration-300 hover:-translate-y-1.5 hover:shadow-2xl hover:shadow-amber-500/10"
            >
              {/* Category Background Thumbnail with Gradient Fade */}
              {cat.img && (
                <div className="absolute inset-0 opacity-20 group-hover:opacity-35 transition-opacity duration-500 pointer-events-none">
                  <img
                    src={cat.img}
                    alt={cat.label}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#07090E] via-[#07090E]/80 to-transparent" />
                </div>
              )}

              {/* Card Header: Icon & Chip */}
              <div className="relative z-10 flex items-center justify-between mb-8">
                <span className="text-3xl filter drop-shadow-md">{cat.icon}</span>
                <span
                  className="px-3 py-1 rounded-full text-xs font-bold tracking-wide"
                  style={{
                    backgroundColor: `${cat.color || '#F59E0B'}20`,
                    color: cat.color || '#F59E0B',
                    border: `1px solid ${cat.color || '#F59E0B'}40`,
                  }}
                >
                  {cat.label}
                </span>
              </div>

              {/* Card Body */}
              <div className="relative z-10">
                <h3 className="text-xl font-bold text-white group-hover:text-amber-400 transition-colors flex items-center justify-between">
                  {cat.label}
                  <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-amber-400 group-hover:translate-x-1 transition-all" />
                </h3>
                <p className="mt-2 text-sm text-gray-400 line-clamp-2">
                  {cat.description}
                </p>
              </div>

              {/* Bottom Glowing Accent Line */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-amber-500/0 group-hover:via-amber-500 to-transparent transition-all duration-500" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

