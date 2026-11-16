import React, { useState, useEffect } from 'react';
import { BRAND_CONFIG } from '../config';
import { MessageCircle, X } from 'lucide-react';

export default function FloatingWhatsApp() {
  const [showTooltip, setShowTooltip] = useState(false);
  const [hasInteracted, setHasInteracted] = useState(false);

  useEffect(() => {
    // Show subtle prompt after 4 seconds
    const timer = setTimeout(() => {
      if (!hasInteracted) {
        setShowTooltip(true);
      }
    }, 4000);

    return () => clearTimeout(timer);
  }, [hasInteracted]);

  const handleDismissTooltip = (e) => {
    e.stopPropagation();
    e.preventDefault();
    setShowTooltip(false);
    setHasInteracted(true);
  };

  return (
    <div className="fixed bottom-6 right-6 z-40 flex items-end flex-col gap-2 pointer-events-auto select-none">
      {/* Interactive Tooltip Bubble */}
      {showTooltip && (
        <div className="relative mb-1 p-3.5 pr-8 rounded-2xl bg-[#0C121E]/95 backdrop-blur-xl border border-emerald-500/30 text-left shadow-[0_15px_30px_rgba(0,0,0,0.85)] max-w-[260px] animate-in fade-in slide-in-from-bottom-2 duration-300">
          <button
            onClick={handleDismissTooltip}
            className="absolute top-2 right-2 p-1 rounded-md text-gray-400 hover:text-white transition-colors cursor-pointer"
            aria-label="Dismiss message"
          >
            <X className="w-3.5 h-3.5" />
          </button>
          <div className="flex items-center gap-2 mb-1">
            <span className="w-2 h-2 rounded-full bg-emerald-400 radar-dot" />
            <span className="text-[11px] font-bold text-emerald-400 uppercase tracking-wider">
              Technical Desk Online
            </span>
          </div>
          <p className="text-xs text-gray-200 leading-snug">
            Need pricing, a paint color code, or site delivery rates? Chat with us directly on WhatsApp.
          </p>
        </div>
      )}

      {/* Floating Action Button */}
      <a
        href={BRAND_CONFIG.whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        onClick={() => setHasInteracted(true)}
        className="group relative flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-gradient-to-br from-emerald-500 via-emerald-600 to-green-700 text-white shadow-[0_10px_25px_rgba(16,185,129,0.4)] hover:shadow-[0_14px_35px_rgba(16,185,129,0.6)] hover:scale-108 active:scale-95 transition-all duration-300 focus:outline-none focus-visible:ring-4 focus-visible:ring-emerald-400/50 cursor-pointer"
        aria-label="Chat on WhatsApp with Cool Base DuraCoat Technical Team"
        title="Chat on WhatsApp"
      >
        {/* Subtle breathing ambient ripple */}
        <span className="absolute inset-0 rounded-full bg-emerald-400/30 animate-ping opacity-50 pointer-events-none" />

        {/* WhatsApp Icon */}
        <MessageCircle className="w-7 h-7 sm:w-8 sm:h-8 fill-white text-white drop-shadow-md group-hover:rotate-6 transition-transform duration-300" />

        {/* Online Indicator Badge */}
        <span className="absolute top-0 right-0 w-4 h-4 rounded-full bg-emerald-400 border-2 border-[#05070B] shadow-md flex items-center justify-center">
          <span className="w-1.5 h-1.5 rounded-full bg-white" />
        </span>
      </a>
    </div>
  );
}
