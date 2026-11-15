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
    <section id="products" className="relative py-24 sm:py-32 bg-[#07090E] border-t border-white/10" aria-label="Hardware and DuraCoat Product Inventory">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-500/15 border border-amber-500/30 text-amber-400 text-xs font-bold uppercase tracking-widest mb-4">
            <ShieldCheck className="w-4 h-4 text-amber-400" />
            Verified Construction & Paint Inventory
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
            Certified Hardware & DuraCoat Paints
          </h2>
          <p className="mt-4 text-base sm:text-lg text-gray-400 leading-relaxed">
            Order genuine materials direct from our Siaya DuraCoat Centre. Add items to your quote list or message our technical desk on WhatsApp for contractor pricing.
          </p>
        </div>

        {/* Filter Controls: Category Chips + Live Search */}
        <div className="flex flex-col md:flex-row gap-4 items-center justify-between mb-12">
          {/* Category Chips */}
          <div className="flex flex-wrap gap-2 justify-center md:justify-start" role="tablist" aria-label="Product Categories">
            {DURACOAT_CATEGORIES.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCat(cat.id)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold tracking-wide transition-all cursor-pointer ${
                  selectedCat === cat.id
                    ? 'bg-amber-500 text-black shadow-lg shadow-amber-500/30 scale-105'
                    : 'bg-white/5 hover:bg-white/10 text-gray-300 hover:text-white border border-white/10'
                }`}
                role="tab"
                aria-selected={selectedCat === cat.id}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Search Box */}
          <div className="relative w-full md:w-72">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search coatings, rebar, cement…"
              className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-white/5 border border-white/10 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-amber-500/60 focus:ring-1 focus:ring-amber-500"
              aria-label="Search products"
            />
          </div>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 sm:gap-8">
          {filteredProducts.map((product) => {
            const isJustAdded = addedId === product.id;

            return (
              <article
                key={product.id}
                className="group relative rounded-2xl bg-[#0D121B]/80 backdrop-blur-md border border-white/10 hover:border-amber-500/50 flex flex-col overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_20px_45px_-12px_rgba(0,0,0,0.85)] hover:shadow-amber-500/10"
              >
                {/* Product Image Stage */}
                <div className="relative h-56 w-full bg-gradient-to-br from-[#141B2A] to-[#0A0E17] overflow-hidden flex items-center justify-center border-b border-white/5">
                  <img
                    src={product.img}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-500 ease-out"
                    loading="lazy"
                  />
                  {/* Subtle Light Sheen Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0D121B] via-transparent to-transparent opacity-60" />

                  {/* Floating Category Tag */}
                  <span className="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-black/80 backdrop-blur-md text-[10px] font-extrabold uppercase tracking-wider text-amber-400 border border-white/15">
                    {product.badge}
                  </span>

                  {/* Live Radar Stock Beacon */}
                  <div className="absolute top-3 right-3 flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-black/80 backdrop-blur-md border border-emerald-500/30 text-[10px] font-bold text-emerald-400">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 radar-dot" />
                    <span>In Stock</span>
                  </div>
                </div>

                {/* Card Body */}
                <div className="p-5 flex flex-col flex-grow">
                  {/* Rating */}
                  <div className="flex items-center gap-1.5 mb-2">
                    <div className="flex text-amber-400">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-3.5 h-3.5 fill-amber-400" />
                      ))}
                    </div>
                    <span className="text-xs text-gray-400 font-medium">
                      {product.rating} ({product.reviews})
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-base font-extrabold text-white group-hover:text-amber-400 transition-colors leading-snug tracking-tight mb-2">
                    {product.name}
                  </h3>

                  {/* Description */}
                  <p className="text-xs text-gray-400 leading-relaxed mb-4 line-clamp-2">
                    {product.desc}
                  </p>

                  {/* Specs Pill List */}
                  {product.specs && (
                    <div className="mb-4 pt-3 border-t border-white/5 flex flex-wrap gap-1.5 text-[10px] text-gray-300">
                      {Object.entries(product.specs).map(([key, val]) => (
                        <span key={key} className="px-2 py-0.5 rounded-md bg-white/5 border border-white/5">
                          <strong className="text-gray-400 capitalize">{key}:</strong> {val}
                        </span>
                      ))}
                    </div>
                  )}

                  {/* Price & Unit */}
                  <div className="mt-auto pt-3 border-t border-white/10 flex items-baseline justify-between mb-4">
                    <div>
                      <span className="text-lg font-black text-gold-gradient tracking-tight">
                        KSh {product.price.toLocaleString()}
                      </span>
                      <span className="text-xs text-gray-400 ml-1">/ {product.unit}</span>
                    </div>
                    <span className="text-[11px] font-semibold text-amber-400/90 flex items-center gap-1">
                      <Tag className="w-3 h-3" /> Wholesale Ready
                    </span>
                  </div>

                  {/* Action Buttons */}
                  <div className="grid grid-cols-2 gap-2">
                    <button
                      onClick={() => handleAdd(product)}
                      className={`flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl font-bold text-xs transition-all cursor-pointer ${
                        isJustAdded
                          ? 'bg-emerald-600 text-white'
                          : 'bg-amber-500 hover:bg-amber-400 text-black shadow-lg shadow-amber-500/20 active:scale-95'
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
                      className="flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl bg-white/5 hover:bg-emerald-600/20 border border-white/10 hover:border-emerald-500/40 text-gray-200 hover:text-emerald-400 font-semibold text-xs transition-all active:scale-95"
                    >
                      <MessageCircle className="w-3.5 h-3.5 text-emerald-400 fill-emerald-400/30" />
                      <span>WhatsApp</span>
                    </a>
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        {filteredProducts.length === 0 && (
          <div className="text-center py-16 px-4 bg-white/5 rounded-3xl border border-white/10 max-w-md mx-auto">
            <p className="text-gray-300 font-bold text-lg mb-2">No matching products found</p>
            <p className="text-sm text-gray-500 mb-6">Try adjusting your category filter or search keywords.</p>
            <button
              onClick={() => {
                setSelectedCat('all');
                setSearchQuery('');
              }}
              className="px-5 py-2 rounded-xl bg-amber-500 text-black font-bold text-xs"
            >
              Reset Filters
            </button>
          </div>
        )}
      </div>
    </section>
  );
}

