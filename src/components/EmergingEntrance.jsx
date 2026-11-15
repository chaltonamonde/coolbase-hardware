import React from 'react';

/**
 * EmergingEntrance
 * ----------------
 * Provides the visual sensation of crossing the threshold from the outside
 * into the DuraCoat Centre showroom:
 * 
 * 1. Doorway Portals: Split left/right architectural frames that part outwards (scale + translate).
 * 2. Progressive Depth-of-Field: Blur-to-sharp cue where interior shelves emerge into crystal focus.
 * 3. Threshold Ambient Light: Warm golden light beam that sweeps as the entrance opens.
 */
export default function EmergingEntrance({ progress = 0, isReducedMotion = false }) {
  if (isReducedMotion) return null;

  const p = Math.min(Math.max(progress, 0), 1);

  // Entrance opening phase happens in the first 0.0 -> 0.45 of the scroll track
  const entrancePhase = Math.min(p / 0.45, 1);

  // Left frame translates left and scales
  const leftX = -entrancePhase * 60; // 0% -> -60%
  const leftScale = 1.0 + entrancePhase * 0.4;
  const leftOpacity = Math.max(0, 1 - entrancePhase * 1.2);

  // Right frame translates right and scales
  const rightX = entrancePhase * 60; // 0% -> +60%
  const rightScale = 1.0 + entrancePhase * 0.4;
  const rightOpacity = Math.max(0, 1 - entrancePhase * 1.2);

  // Depth-of-field blur decay: Starts slightly atmospheric and resolves to razor sharp
  const apertureBlur = Math.max(0, (1 - entrancePhase) * 10);

  return (
    <div
      className="absolute inset-0 w-full h-full pointer-events-none overflow-hidden z-20"
      style={{
        backdropFilter: apertureBlur > 0.5 ? `blur(${apertureBlur}px)` : 'none',
        WebkitBackdropFilter: apertureBlur > 0.5 ? `blur(${apertureBlur}px)` : 'none',
        transition: 'backdrop-filter 0.1s linear',
      }}
    >
      {/* Left Entrance Portal Pillar */}
      <div
        className="absolute top-0 bottom-0 left-0 w-[18vw] min-w-[90px] max-w-[220px] will-change-transform"
        style={{
          transform: `translate3d(${leftX}%, 0, 0) scale(${leftScale})`,
          opacity: leftOpacity,
          transformOrigin: 'left center',
          transition: 'transform 0.08s linear',
        }}
      >
        <div className="w-full h-full bg-gradient-to-r from-[#07090E] via-[#0C111C]/90 to-transparent border-r border-amber-500/20 shadow-2xl flex flex-col justify-between py-12 px-3">
          <div className="w-1.5 h-24 bg-gradient-to-b from-amber-500/80 to-transparent rounded-full" />
          <div className="writing-mode-vertical text-[10px] font-bold uppercase tracking-[0.3em] text-amber-400/60 rotate-180">
            Showroom Entrance
          </div>
          <div className="w-1.5 h-16 bg-gradient-to-t from-amber-500/80 to-transparent rounded-full" />
        </div>
      </div>

      {/* Right Entrance Portal Pillar */}
      <div
        className="absolute top-0 bottom-0 right-0 w-[18vw] min-w-[90px] max-w-[220px] will-change-transform"
        style={{
          transform: `translate3d(${rightX}%, 0, 0) scale(${rightScale})`,
          opacity: rightOpacity,
          transformOrigin: 'right center',
          transition: 'transform 0.08s linear',
        }}
      >
        <div className="w-full h-full bg-gradient-to-l from-[#07090E] via-[#0C111C]/90 to-transparent border-l border-amber-500/20 shadow-2xl flex flex-col justify-between py-12 px-3 items-end">
          <div className="w-1.5 h-24 bg-gradient-to-b from-amber-500/80 to-transparent rounded-full" />
          <div className="text-[10px] font-bold uppercase tracking-[0.3em] text-amber-400/60 rotate-90">
            DuraCoat Centre
          </div>
          <div className="w-1.5 h-16 bg-gradient-to-t from-amber-500/80 to-transparent rounded-full" />
        </div>
      </div>

      {/* Threshold Floor Light Beam: Disperses as visitor steps in */}
      <div
        className="absolute bottom-0 left-0 right-0 h-32 will-change-transform"
        style={{
          background: 'linear-gradient(to top, rgba(245, 158, 11, 0.15) 0%, transparent 100%)',
          opacity: Math.max(0, 1 - entrancePhase * 1.5),
          transform: `scaleY(${1 + entrancePhase})`,
          transformOrigin: 'bottom',
        }}
      />
    </div>
  );
}

