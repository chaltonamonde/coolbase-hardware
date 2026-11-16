import React from 'react';
import { BRAND_CONFIG } from '../config';
import { Shield, Sparkles, ArrowDown, MessageCircle, FileText, Download, CheckCircle2, MapPin, Truck, Phone } from 'lucide-react';

/**
 * ScrollCopyTimeline
 * ------------------
 * Direct incorporation of the Cool Base Hardware Company Profile
 * into the 450vh scroll-driven walkthrough sequence.
 * 
 * Beats:
 * 1. Beat 1 (0.00 -> 0.25): Company Overview & Identity (Store Exterior)
 * 2. Beat 2 (0.24 -> 0.50): DuraCoat Centre & Paint Formulation (Entrance & Colour Racks)
 * 3. Beat 3 (0.49 -> 0.75): Core Products Stocked & Sold (Aisles, Shelves, Materials)
 * 4. Beat 4 (0.74 -> 1.00): Services Offered, Contractor Terms & Showroom Floor CTA
 */
export default function ScrollCopyTimeline({
  progress = 0,
  isReducedMotion = false,
  onShopNow,
  onOpenCompanyProfile,
}) {
  const p = Math.min(Math.max(progress, 0), 1);

  // If reduced motion is requested, show comprehensive consolidated static hero
  if (isReducedMotion) {
    return (
      <div className="absolute inset-0 flex items-center justify-center z-30 px-4 sm:px-6 text-center pointer-events-auto overflow-y-auto py-20">
        <div className="max-w-4xl space-y-6 bg-[#070B13]/95 p-8 sm:p-12 rounded-3xl border border-white/[0.1] backdrop-blur-2xl shadow-2xl text-left">
          <div className="flex flex-wrap items-center justify-between gap-3 border-b border-white/[0.08] pb-4">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#E5A93C]/10 border border-[#E5A93C]/25 text-[#F7CA68] text-xs font-bold uppercase tracking-wider">
              <Shield className="w-3.5 h-3.5" />
              Official Company Profile • Est. 2020
            </span>
            <span className="text-xs text-gray-400 font-mono">Opposite Siaya Law Courts</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-display font-bold text-white tracking-tight">
            {BRAND_CONFIG.clientName}
          </h1>

          <p className="text-sm sm:text-base text-gray-300 leading-relaxed font-normal">
            A well-established supplier for all things building and construction across Kenya. Supplying contractors, institutions, and builders with structural materials, aggregates, concrete blocks, and certified DuraCoat paints.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
            <div className="p-4 rounded-xl bg-white/[0.03] border border-white/[0.06]">
              <div className="font-display font-bold text-[#F7CA68] mb-1">Building Materials</div>
              <p className="text-gray-400">Simba/Bamburi 42.5N cement, G28 iron sheets, rebar, timber.</p>
            </div>
            <div className="p-4 rounded-xl bg-white/[0.03] border border-white/[0.06]">
              <div className="font-display font-bold text-teal-400 mb-1">DuraCoat Paints</div>
              <p className="text-gray-400">10,000+ computerized shades, silicone weatherproofing, textured finishes.</p>
            </div>
            <div className="p-4 rounded-xl bg-white/[0.03] border border-white/[0.06]">
              <div className="font-display font-bold text-orange-400 mb-1">Site Delivery</div>
              <p className="text-gray-400">Fleet delivery across Siaya County and wider Kenya.</p>
            </div>
          </div>

          <div className="pt-4 flex flex-wrap gap-3">
            <button
              onClick={onShopNow}
              className="btn-gold px-6 py-3 text-xs sm:text-sm font-bold"
            >
              Shop Inventory Now &rarr;
            </button>
            <a
              href="/assets/Cool_Base_Hardware_Company_Profile.pdf"
              download="Cool_Base_Hardware_Company_Profile.pdf"
              className="btn-ghost px-5 py-3 text-xs sm:text-sm font-semibold flex items-center gap-2"
            >
              <Download className="w-4 h-4 text-[#F7CA68]" />
              Download Profile (PDF)
            </a>
            <a
              href={BRAND_CONFIG.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-3 rounded-xl bg-emerald-600 text-white font-bold text-xs sm:text-sm flex items-center gap-2 shadow-lg shadow-emerald-600/25"
            >
              <MessageCircle className="w-4 h-4" />
              Chat on WhatsApp
            </a>
          </div>
        </div>
      </div>
    );
  }

  // Helper function to calculate phase opacity & vertical translation
  const calculatePhase = (enterStart, enterEnd, exitStart, exitEnd) => {
    if (p < enterStart) return { opacity: 0, y: 35, scale: 0.96, pointerEvents: 'none' };
    if (p <= enterEnd) {
      const frac = (p - enterStart) / (enterEnd - enterStart);
      return { opacity: frac, y: 35 * (1 - frac), scale: 0.96 + 0.04 * frac, pointerEvents: 'auto' };
    }
    if (p <= exitStart) {
      return { opacity: 1, y: 0, scale: 1.0, pointerEvents: 'auto' };
    }
    if (p <= exitEnd) {
      const frac = (p - exitStart) / (exitEnd - exitStart);
      return { opacity: 1 - frac, y: -35 * frac, scale: 1.0 + 0.04 * frac, pointerEvents: 'none' };
    }
    return { opacity: 0, y: -35, scale: 1.04, pointerEvents: 'none' };
  };

  // Beat 1: Company Profile - Overview & Identity (0.00 -> 0.25)
  const beat1 = calculatePhase(0.00, 0.07, 0.18, 0.25);

  // Beat 2: Company Profile - Official DuraCoat Centre & Paint Formulation (0.24 -> 0.50)
  const beat2 = calculatePhase(0.24, 0.32, 0.43, 0.50);

  // Beat 3: Company Profile - Core Products Sold (0.49 -> 0.75)
  const beat3 = calculatePhase(0.49, 0.57, 0.68, 0.75);

  // Beat 4: Company Profile - Services Offered, Directory & Shop Now CTA (0.74 -> 1.00)
  const beat4 = calculatePhase(0.74, 0.82, 1.00, 1.00);

  return (
    <div className="absolute inset-0 flex items-center justify-center z-30 px-4 sm:px-6 pointer-events-none">
      
      {/* ════════════════════════════════════════════════════════════════════════
          BEAT 1: Company Overview & Identity (Store Exterior / Arrival)
          ════════════════════════════════════════════════════════════════════════ */}
      <div
        className="absolute text-center max-w-4xl will-change-transform px-4"
        style={{
          opacity: beat1.opacity,
          transform: `translate3d(0, ${beat1.y}px, 0) scale(${beat1.scale})`,
          pointerEvents: beat1.pointerEvents,
          transition: 'transform 0.08s linear, opacity 0.08s linear',
        }}
      >
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-black/60 backdrop-blur-xl border border-white/[0.1] text-[#F7CA68] text-xs sm:text-sm font-bold uppercase tracking-widest mb-4 shadow-xl">
          <span className="w-2 h-2 rounded-full bg-[#E5A93C] animate-ping" />
          Company Profile • Section 1: Overview
        </div>

        <h1 className="text-4xl sm:text-6xl md:text-7xl font-display font-bold text-white tracking-tight leading-[1.05] drop-shadow-2xl">
          Cool Base Hardware
        </h1>

        <div className="mt-5 p-6 sm:p-8 rounded-3xl bg-[#070B13]/85 backdrop-blur-2xl border border-white/[0.08] max-w-2xl mx-auto shadow-2xl text-left">
          <div className="flex items-center gap-2 text-xs font-mono text-[#F7CA68] uppercase tracking-wider mb-2.5">
            <span>Established 2020</span>
            <span>•</span>
            <span>Siaya County, Kenya</span>
          </div>
          <p className="text-sm sm:text-base text-gray-200 leading-relaxed font-normal">
            A well-established supplier for all things building and construction across Kenya, supplying and delivering directly to contractors, builders, and developers.
          </p>
          <div className="mt-5 pt-3.5 border-t border-white/[0.08] flex flex-wrap items-center justify-between text-xs text-gray-400 gap-2">
            <span className="flex items-center gap-1.5 text-[#F7CA68] font-semibold">
              <MapPin className="w-3.5 h-3.5" /> Opposite Siaya Law Courts
            </span>
            <span className="flex items-center gap-1.5 text-emerald-400 font-semibold">
              <Truck className="w-3.5 h-3.5" /> Direct Site Fulfillment
            </span>
          </div>
        </div>
      </div>

      {/* ════════════════════════════════════════════════════════════════════════
          BEAT 2: DuraCoat Centre & Paint Formulation (Entrance / Threshold)
          ════════════════════════════════════════════════════════════════════════ */}
      <div
        className="absolute text-center max-w-4xl will-change-transform px-4"
        style={{
          opacity: beat2.opacity,
          transform: `translate3d(0, ${beat2.y}px, 0) scale(${beat2.scale})`,
          pointerEvents: beat2.pointerEvents,
          transition: 'transform 0.08s linear, opacity 0.08s linear',
        }}
      >
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#E5A93C]/15 backdrop-blur-xl border border-[#E5A93C]/35 text-[#F7CA68] text-xs sm:text-sm font-bold uppercase tracking-wider mb-3 shadow-xl">
          <Shield className="w-4 h-4 text-[#E5A93C]" />
          Official Authorized DuraCoat Colour Centre
        </div>

        <h2 className="text-4xl sm:text-6xl md:text-7xl font-display font-bold text-gold-gradient tracking-tight leading-none drop-shadow-2xl">
          “{BRAND_CONFIG.tagline}”
        </h2>

        <div className="mt-6 p-6 sm:p-8 rounded-3xl bg-[#070B13]/85 backdrop-blur-2xl border border-[#E5A93C]/25 max-w-2xl mx-auto shadow-2xl text-left">
          <h3 className="text-lg sm:text-xl font-display font-bold text-white mb-2">
            Certified Master Color Tinting &amp; Surface Protection
          </h3>
          <p className="text-xs sm:text-sm text-gray-300 leading-relaxed mb-4">
            Over 10,000+ computerized architectural custom shades formulated in 5 minutes. Weather Guard Silicone exterior coatings, textured finishes, and anti-efflorescence wall sealers engineered for western Kenya climate.
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 text-xs font-semibold text-[#F7CA68]">
            <span className="p-2.5 rounded-xl bg-white/[0.04] border border-white/[0.06] text-center">🎨 10,000+ Custom Shades</span>
            <span className="p-2.5 rounded-xl bg-white/[0.04] border border-white/[0.06] text-center">🛡️ 10-Yr Silicone Guard</span>
            <span className="p-2.5 rounded-xl bg-white/[0.04] border border-white/[0.06] text-center col-span-2 sm:col-span-1">✨ Textured Wall Finishes</span>
          </div>
        </div>
      </div>

      {/* ════════════════════════════════════════════════════════════════════════
          BEAT 3: Core Products Sold (Walking Down the Aisles & Shelves)
          ════════════════════════════════════════════════════════════════════════ */}
      <div
        className="absolute text-center max-w-4xl will-change-transform px-4"
        style={{
          opacity: beat3.opacity,
          transform: `translate3d(0, ${beat3.y}px, 0) scale(${beat3.scale})`,
          pointerEvents: beat3.pointerEvents,
          transition: 'transform 0.08s linear, opacity 0.08s linear',
        }}
      >
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-black/60 backdrop-blur-xl border border-white/[0.1] text-[#F7CA68] text-xs sm:text-sm font-bold uppercase tracking-widest mb-3 shadow-xl">
          <Sparkles className="w-4 h-4 text-[#E5A93C]" />
          Company Profile • Section 2: Products Sold
        </div>

        <h2 className="text-3xl sm:text-5xl font-display font-bold text-white tracking-tight leading-tight drop-shadow-2xl mb-5">
          Everything You Need To Build
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-3xl mx-auto text-left">
          {/* Card 1 */}
          <div className="p-5 rounded-2xl bg-[#070B13]/90 backdrop-blur-2xl border border-white/[0.08] shadow-xl">
            <div className="text-[#F7CA68] font-display font-bold text-sm mb-1.5 flex items-center gap-1.5">
              <span>🧱</span> Building Materials
            </div>
            <p className="text-xs text-gray-300 leading-relaxed">
              Simba &amp; Bamburi 42.5N Cement, Gauge 28 corrugated iron sheets, treated cypress timber, Y10/Y12 structural steel rebar, annealed tying wire.
            </p>
          </div>

          {/* Card 2 */}
          <div className="p-5 rounded-2xl bg-[#070B13]/90 backdrop-blur-2xl border border-white/[0.08] shadow-xl">
            <div className="text-orange-400 font-display font-bold text-sm mb-1.5 flex items-center gap-1.5">
              <span>⛏️</span> Blocks &amp; Aggregates
            </div>
            <p className="text-xs text-gray-300 leading-relaxed">
              Clean river building sand, machine-crushed ballast, foundation hardcore, pea gravel, solid 6" load-bearing blocks, and heavy paving blocks (cabro).
            </p>
          </div>

          {/* Card 3 */}
          <div className="p-5 rounded-2xl bg-[#070B13]/90 backdrop-blur-2xl border border-white/[0.08] shadow-xl">
            <div className="text-teal-400 font-display font-bold text-sm mb-1.5 flex items-center gap-1.5">
              <span>🔧</span> Plumbing &amp; Water
            </div>
            <p className="text-xs text-gray-300 leading-relaxed">
              PVC drainage and pressure pipes, PPR fittings, brass gate valves, 1,000L to 2,500L UV-treated water storage tanks, and bathroom sanitary ware.
            </p>
          </div>
        </div>
      </div>

      {/* ════════════════════════════════════════════════════════════════════════
          BEAT 4: Services Offered, Directory & Master Shop Now CTA (Checkout)
          ════════════════════════════════════════════════════════════════════════ */}
      <div
        className="absolute text-center max-w-3xl will-change-transform px-4"
        style={{
          opacity: beat4.opacity,
          transform: `translate3d(0, ${beat4.y}px, 0) scale(${beat4.scale})`,
          pointerEvents: beat4.pointerEvents,
          transition: 'transform 0.08s linear, opacity 0.08s linear',
        }}
      >
        <div className="p-7 sm:p-9 rounded-3xl bg-[#070B13]/95 backdrop-blur-2xl border border-white/[0.1] shadow-[0_25px_60px_-15px_rgba(0,0,0,0.95)]">
          <div className="flex flex-wrap items-center justify-between gap-2 border-b border-white/[0.08] pb-3.5 mb-4">
            <span className="text-xs font-display font-bold uppercase tracking-widest text-[#F7CA68] flex items-center gap-1.5">
              <FileText className="w-4 h-4" /> Company Profile: Services &amp; Contacts
            </span>
            <span className="text-xs text-emerald-400 font-bold flex items-center gap-1">
              <CheckCircle2 className="w-3.5 h-3.5" /> Verified Supplier
            </span>
          </div>

          <h3 className="text-2xl sm:text-4xl font-display font-bold text-white tracking-tight mb-2.5">
            Supplying &amp; Delivering Across Kenya
          </h3>

          <p className="text-xs sm:text-sm text-gray-300 leading-relaxed mb-6 max-w-xl mx-auto font-normal">
            Direct commercial supply, rapid site delivery across Siaya County and wider Kenya, itemized Bill of Quantities (BOQ) WhatsApp quotes, verified M-Pesa business accounts, and contractor credit terms.
          </p>

          {/* Contact Row */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs text-left bg-white/[0.03] rounded-2xl p-4 mb-6 border border-white/[0.06]">
            <div className="flex items-center gap-2">
              <Phone className="w-4 h-4 text-[#F7CA68] shrink-0" />
              <span className="text-gray-300">Hotline: <strong className="text-white">+254 708 292558</strong></span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4 text-[#F7CA68] shrink-0" />
              <span className="text-gray-300">Showroom: <strong className="text-white">Opposite Siaya Law Courts</strong></span>
            </div>
          </div>

          {/* Action CTAs */}
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <button
              onClick={onShopNow}
              className="btn-gold flex items-center justify-center gap-2 px-7 py-3.5 text-xs sm:text-sm font-bold cursor-pointer"
            >
              <span>Explore Products Floor</span>
              <ArrowDown className="w-4 h-4 animate-bounce" />
            </button>
            <a
              href="/assets/Cool_Base_Hardware_Company_Profile.pdf"
              download="Cool_Base_Hardware_Company_Profile.pdf"
              className="btn-ghost flex items-center justify-center gap-2 px-5 py-3.5 font-semibold text-xs sm:text-sm"
            >
              <Download className="w-4 h-4 text-[#F7CA68]" />
              <span>Download Profile (PDF)</span>
            </a>
            <a
              href={BRAND_CONFIG.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs sm:text-sm shadow-lg shadow-emerald-600/30 transition-all cursor-pointer"
            >
              <MessageCircle className="w-4 h-4 fill-white" />
              <span>WhatsApp BOQ</span>
            </a>
          </div>
        </div>
      </div>

      {/* Persistent Bottom Scroll Progress Line */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-1.5 opacity-85">
        <span className="text-[10px] uppercase font-bold tracking-[0.25em] text-[#F7CA68]">
          Walkthrough &amp; Profile Progression
        </span>
        <div className="w-48 h-1 bg-white/10 rounded-full overflow-hidden">
          <div
            className="h-full bg-gradient-to-r from-[#E5A93C] to-[#F7CA68] rounded-full will-change-transform transition-all duration-75"
            style={{ width: `${Math.round(p * 100)}%` }}
          />
        </div>
      </div>
    </div>
  );
}
