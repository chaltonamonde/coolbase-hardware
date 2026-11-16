import React, { useState, useEffect, useMemo } from 'react';
import { FEATURED_PRODUCTS, DURACOAT_CATEGORIES, BRAND_CONFIG } from '../config';
import { Plus, MessageCircle, Star, Search, CheckCircle2, ShieldCheck, Tag } from 'lucide-react';

export default function ProductCatalog({ onAddToQuote, initialCategory = 'all' }) {
  const [selectedCat, setSelectedCat] = useState(initialCategory);
  const [searchQuery, setSearchQuery] = useState('');
  const [addedId, setAddedId] = useState(null);

  useEffect(() => {
    if (initialCategory) {
      setSelectedCat(initialCategory);
    }
  }, [initialCategory]);

  const filteredProducts = useMemo(() => {
    return FEATURED_PRODUCTS.filter((product) => {
      const matchesCat = selectedCat === 'all' || product.category === selectedCat;
      const matchesSearch =
        product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.desc.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCat && matchesSearch;
    });
  }, [selectedCat, searchQuery]);

  const handleAdd = (product) => {
    onAddToQuote(product);
    setAddedId(product.id);
    setTimeout(() => setAddedId(null), 1800);
  };

  return (
    <section
      id="products"
      className="relative py-28 sm:py-36 bg-[#070B13] border-t border-white/[0.06] overflow-hidden"
      aria-label="Hardware and DuraCoat Product Inventory"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#E5A93C]/10 border border-[#E5A93C]/25 text-[#F7CA68] text-xs font-bold uppercase tracking-widest mb-4">
            <ShieldCheck className="w-3.5 h-3.5 text-[#E5A93C]" />
            Official Certified Showroom Inventory
          </div>
          <h2 className="text-3xl sm:text-5xl font-display font-bold text-white tracking-tight leading-[1.15]">
            Certified Hardware &amp; DuraCoat Paints
          </h2>
          <p className="mt-4 text-base sm:text-lg text-gray-400 font-normal leading-relaxed">
            Order genuine materials direct from our Siaya DuraCoat Centre. Add items to your quote list or message our technical desk on WhatsApp for contractor pricing.
          </p>
        </div>

        {/* Filter Controls: Category Chips + Minimal Live Search */}
        <div className="flex flex-col md:flex-row gap-4 items-center justify-between mb-12 sm:mb-14">
          {/* Category Chips */}
          <div className="flex flex-wrap gap-2 justify-center md:justify-start" role="tablist" aria-label="Product Categories">
            {DURACOAT_CATEGORIES.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCat(cat.id)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold tracking-wide transition-all cursor-pointer ${
                  selectedCat === cat.id
                    ? 'bg-[#E5A93C] text-black shadow-[0_4px_16px_rgba(229,169,60,0.3)] font-bold'
                    : 'bg-white/[0.03] hover:bg-white/[0.07] text-gray-400 hover:text-white border border-white/[0.06]'
                }`}
                role="tab"
                aria-selected={selectedCat === cat.id}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Search Box */}
          <div className="relative w-full md:w-80">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search coatings, rebar, cement…"
              className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-white/[0.04] border border-white/[0.08] text-sm text-white placeholder-gray-500 focus:outline-none focus:border-[#E5A93C]/50 focus:ring-1 focus:ring-[#E5A93C] transition-all"
              aria-label="Search products"
            />
          </div>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 sm:gap-7">
          {filteredProducts.map((product) => {
            const isJustAdded = addedId === product.id;

            return (
              <article
                key={product.id}
                className="group relative rounded-2xl bg-[#0C121E]/80 backdrop-blur-md border border-white/[0.08] hover:border-[#E5A93C]/40 flex flex-col overflow-hidden transition-all duration-400 hover:-translate-y-1.5 hover:shadow-[0_20px_45px_-12px_rgba(0,0,0,0.85),0_0_25px_rgba(229,169,60,0.1)]"
              >
                {/* Product Image Stage */}
                <div className="relative h-56 w-full bg-[#080D16] overflow-hidden flex items-center justify-center border-b border-white/[0.05]">
                  <img
                    src={product.img}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-600 ease-out"
                    loading="lazy"
                  />
                  {/* Subtle Light Sheen Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0C121E] via-transparent to-transparent opacity-50" />

                  {/* Floating Category Tag */}
                  <span className="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-black/75 backdrop-blur-md text-[10px] font-bold uppercase tracking-wider text-[#F7CA68] border border-white/10">
                    {product.badge}
                  </span>

                  {/* Live Radar Stock Beacon */}
                  <div className="absolute top-3 right-3 flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-black/75 backdrop-blur-md border border-emerald-500/25 text-[10px] font-semibold text-emerald-400">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 radar-dot" />
                    <span>In Stock</span>
                  </div>
                </div>

                {/* Card Body */}
                <div className="p-5 sm:p-6 flex flex-col flex-grow">
                  {/* Rating */}
                  <div className="flex items-center gap-1.5 mb-2.5">
                    <div className="flex text-[#E5A93C]">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-3.5 h-3.5 fill-[#E5A93C]" />
                      ))}
                    </div>
                    <span className="text-xs text-gray-400 font-medium">
                      {product.rating} ({product.reviews})
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-base font-display font-bold text-white group-hover:text-[#F7CA68] transition-colors leading-snug tracking-tight mb-2">
                    {product.name}
                  </h3>

                  {/* Description */}
                  <p className="text-xs text-gray-400 leading-relaxed mb-4 line-clamp-2">
                    {product.desc}
                  </p>

                  {/* Specs Pill List */}
                  {product.specs && (
                    <div className="mb-4 pt-3 border-t border-white/[0.05] flex flex-wrap gap-1.5 text-[10px] text-gray-300">
                      {Object.entries(product.specs).map(([key, val]) => (
                        <span key={key} className="px-2 py-0.5 rounded-md bg-white/[0.03] border border-white/[0.05]">
                          <strong className="text-gray-400 capitalize">{key}:</strong> {val}
                        </span>
                      ))}
                    </div>
                  )}

                  {/* Price & Unit */}
                  <div className="mt-auto pt-3 border-t border-white/[0.08] flex items-baseline justify-between mb-4">
                    <div>
                      <span className="text-lg font-display font-bold text-gold-gradient tracking-tight">
                        KSh {product.price.toLocaleString()}
                      </span>
                      <span className="text-xs text-gray-400 ml-1">/ {product.unit}</span>
                    </div>
                    <span className="text-[11px] font-semibold text-gray-400 flex items-center gap-1">
                      <Tag className="w-3 h-3 text-[#E5A93C]" /> Trade Ready
                    </span>
                  </div>

                  {/* Action Buttons */}
                  <div className="grid grid-cols-2 gap-2">
                    <button
                      onClick={() => handleAdd(product)}
                      className={`flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl font-bold text-xs transition-all cursor-pointer ${
                        isJustAdded
                          ? 'bg-emerald-600 text-white'
                          : 'btn-gold shadow-md active:scale-95'
                      }`}
                    >
                      {isJustAdded ? (
                        <>
                          <CheckCircle2 className="w-3.5 h-3.5" />
                          <span>Added!</span>
                        </>
                      ) : (
                        <>
                          <Plus className="w-3.5 h-3.5" />
                          <span>Add Quote</span>
                        </>
                      )}
                    </button>

                    <a
                      href={`${BRAND_CONFIG.whatsappUrl}?text=${encodeURIComponent(
                        `Hello Cool Base DuraCoat Centre, I am inquiring about: ${product.name} (KSh ${product.price.toLocaleString()} per ${product.unit}). Please advise on availability and bulk delivery.`
                      )}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-ghost flex items-center justify-center gap-1.5 py-2.5 px-3 font-semibold text-xs active:scale-95"
                    >
                      <MessageCircle className="w-3.5 h-3.5 text-emerald-400 fill-emerald-400/20" />
                      <span>WhatsApp</span>
                    </a>
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        {filteredProducts.length === 0 && (
          <div className="text-center py-16 px-4 bg-white/[0.03] rounded-2xl border border-white/[0.08] max-w-md mx-auto">
            <p className="text-white font-display font-bold text-lg mb-2">No matching products found</p>
            <p className="text-xs text-gray-400 mb-6">Try adjusting your category filter or search keywords.</p>
            <button
              onClick={() => {
                setSelectedCat('all');
                setSearchQuery('');
              }}
              className="btn-gold px-5 py-2 text-xs"
            >
              Reset Filters
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
