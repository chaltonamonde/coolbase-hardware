import React from 'react';

/**
 * ParallaxMidground
 * -----------------
 * Mid-ground layer floating at medium parallax velocity between
 * the background walkthrough video and the foreground copy.
 * 
 * Includes transparent PNG cut-outs:
 * - DuraCoat Master Paint Can
 * - Precision Paint Roller & Application Tray
 * - Builder Spirit Level & Masonry Trowel
 * 
 * Animate ONLY transform and opacity to maintain 60fps.
 */
export default function ParallaxMidground({ progress = 0, isReducedMotion = false }) {
  if (isReducedMotion) return null;

  // Midground velocity multipliers
  const p = Math.min(Math.max(progress, 0), 1);

  // Paint Can: Enters around 0.15, peaks around 0.55, glides off around 0.9
  const canY = -120 * p;
  const canRotate = -6 + p * 12;
  const canOpacity = p < 0.1 ? p * 10 : p > 0.85 ? Math.max(0, 1 - (p - 0.85) * 6) : 1;

  // Paint Roller: Floats on left side at slightly different speed
  const rollerY = -160 * p;
  const rollerRotate = 10 - p * 18;
  const rollerOpacity = p < 0.2 ? Math.max(0, (p - 0.05) * 6) : p > 0.88 ? Math.max(0, 1 - (p - 0.88) * 7) : 0.95;

  // Tools cut-out: Rises from bottom right
  const toolsY = -220 * p;
  const toolsOpacity = p < 0.35 ? 0 : p < 0.5 ? (p - 0.35) * 6 : p > 0.9 ? Math.max(0, 1 - (p - 0.9) * 8) : 0.9;

  return (
    <div className="absolute inset-0 w-full h-full pointer-events-none overflow-hidden z-10">
      {/* 1. Left Mid-ground: Paint Roller & Application Tray */}
      <div
        className="absolute left-[3%] sm:left-[8%] top-[45%] w-36 sm:w-56 md:w-64 will-change-transform filter drop-shadow-[0_15px_30px_rgba(0,0,0,0.85)]"
        style={{
          transform: `translate3d(0, ${rollerY}px, 0) rotate(${rollerRotate}deg) scale(${0.85 + p * 0.2})`,
          opacity: rollerOpacity,
          transition: 'transform 0.1s linear',
        }}
      >
        <img
          src="/assets/midground/paint-roller.png"
          alt="DuraCoat Precision Roller & Application Tray Cutout"
          className="w-full h-auto object-contain select-none"
          loading="lazy"
        />
        {/* Swappable placeholder indicator */}
        <div className="mt-2 text-[10px] uppercase font-bold tracking-widest text-[#F7CA68] bg-black/60 backdrop-blur-sm px-2.5 py-0.5 rounded-full inline-block border border-[#E5A93C]/20">
          Roller & Tray Cutout
        </div>
      </div>

      {/* 2. Right Mid-ground: DuraCoat Master Paint Can */}
      <div
        className="absolute right-[4%] sm:right-[10%] top-[35%] w-44 sm:w-64 md:w-72 will-change-transform filter drop-shadow-[0_20px_40px_rgba(0,0,0,0.9)]"
        style={{
          transform: `translate3d(0, ${canY}px, 0) rotate(${canRotate}deg) scale(${0.9 + p * 0.25})`,
          opacity: canOpacity,
          transition: 'transform 0.1s linear',
        }}
      >
        <img
          src="/assets/midground/duracoat-can.png"
          alt="DuraCoat High Sheen WeatherGuard Cutout"
          className="w-full h-auto object-contain select-none"
          loading="lazy"
        />
        <div className="mt-2 text-[10px] uppercase font-bold tracking-widest text-[#F7CA68] bg-black/60 backdrop-blur-sm px-2.5 py-0.5 rounded-full inline-block border border-[#E5A93C]/20">
          DuraCoat Can Cutout
        </div>
      </div>

      {/* 3. Lower Mid-ground: Builder Level & Trowel */}
      <div
        className="hidden md:block absolute right-[22%] bottom-[12%] w-56 lg:w-72 will-change-transform filter drop-shadow-[0_15px_35px_rgba(0,0,0,0.8)]"
        style={{
          transform: `translate3d(0, ${toolsY}px, 0) rotate(${p * 8}deg) scale(${0.8 + p * 0.2})`,
          opacity: toolsOpacity,
          transition: 'transform 0.1s linear',
        }}
      >
        <img
          src="/assets/midground/hardware-tools.png"
          alt="Precision Spirit Level and Masonry Trowel Cutout"
          className="w-full h-auto object-contain select-none"
          loading="lazy"
        />
        <div className="mt-1 text-[10px] uppercase font-bold tracking-widest text-[#F7CA68] bg-black/60 backdrop-blur-sm px-2.5 py-0.5 rounded-full inline-block border border-[#E5A93C]/20">
          Hardware Tools Cutout
        </div>
      </div>

      {/* Floating Tint Swatches (Accenting DuraCoat Color Lab) */}
      <div
        className="hidden lg:flex absolute left-[18%] bottom-[25%] flex-col gap-2 p-3 rounded-2xl bg-black/60 backdrop-blur-md border border-white/10 will-change-transform shadow-2xl"
        style={{
          transform: `translate3d(0, ${-100 * p}px, 0) scale(${0.9 + p * 0.15})`,
          opacity: p > 0.25 && p < 0.85 ? 0.9 : 0,
          transition: 'transform 0.1s linear',
        }}
      >
        <span className="text-[9px] font-bold uppercase tracking-wider text-[#F7CA68]">DuraCoat RAL Tint Palette</span>
        <div className="flex gap-1.5">
          <div className="w-5 h-8 rounded-md bg-[#F59E0B] shadow-sm border border-white/20" title="Sunburst Amber" />
          <div className="w-5 h-8 rounded-md bg-[#E07A5F] shadow-sm border border-white/20" title="Terracotta Copper" />
          <div className="w-5 h-8 rounded-md bg-[#10B981] shadow-sm border border-white/20" title="Emerald Slate" />
          <div className="w-5 h-8 rounded-md bg-[#1E293B] shadow-sm border border-white/20" title="Obsidian Primer" />
          <div className="w-5 h-8 rounded-md bg-[#F3F4F6] shadow-sm border border-white/20" title="Alabaster White" />
        </div>
      </div>
    </div>
  );
}

