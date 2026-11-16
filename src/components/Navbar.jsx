import React, { useState, useEffect } from 'react';
import { BRAND_CONFIG } from '../config';
import { ShoppingBag, MessageCircle, Phone, Menu, X, Shield, Sparkles, FileText, ArrowUpRight } from 'lucide-react';

export default function Navbar({ quoteCount, onOpenQuote, onOpenCompanyProfile }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-[#05070B]/85 backdrop-blur-2xl border-b border-white/[0.08] shadow-[0_10px_30px_-10px_rgba(0,0,0,0.8)] py-3'
          : 'bg-gradient-to-b from-[#05070B]/90 via-[#05070B]/40 to-transparent py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo & DuraCoat Badge */}
        <a
          href="#hero"
          className="flex items-center gap-3.5 group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#E5A93C] rounded-xl"
        >
          <div className="relative w-10 h-10 rounded-xl bg-gradient-to-br from-[#F7CA68] via-[#E5A93C] to-[#C68924] flex items-center justify-center font-display font-extrabold text-black shadow-[0_4px_16px_rgba(229,169,60,0.25)] group-hover:scale-105 transition-transform duration-300">
            <span className="text-sm font-black tracking-tight">CB</span>
            <div className="absolute inset-0 rounded-xl border border-white/40 pointer-events-none" />
          </div>
          <div className="flex flex-col">
            <div className="flex items-center gap-2">
              <span className="font-display font-bold text-white text-base sm:text-lg tracking-tight leading-none group-hover:text-amber-300/90 transition-colors">
                {BRAND_CONFIG.clientName}
              </span>
              <span className="hidden sm:inline-flex items-center gap-1 text-[10px] font-bold uppercase tracking-widest px-2.5 py-0.5 rounded-full bg-[#E5A93C]/10 text-[#F7CA68] border border-[#E5A93C]/25">
                <Shield className="w-2.5 h-2.5 text-[#E5A93C]" />
                {BRAND_CONFIG.centreName}
              </span>
            </div>
            <span className="text-xs text-gray-400 font-medium tracking-wide mt-1">
              {BRAND_CONFIG.tagline}
            </span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav
          className="hidden md:flex items-center gap-7 text-xs sm:text-sm font-medium tracking-wide text-gray-300"
          aria-label="Main Navigation"
        >
          <a
            href="#walkthrough"
            className="hover:text-[#F7CA68] transition-colors focus:outline-none focus-visible:text-[#F7CA68]"
          >
            Walkthrough
          </a>
          <a
            href="#company-profile"
            className="hover:text-[#F7CA68] transition-colors focus:outline-none focus-visible:text-[#F7CA68]"
          >
            Company Profile
          </a>
          <a
            href="#duracoat-systems"
            className="hover:text-[#F7CA68] transition-colors focus:outline-none focus-visible:text-[#F7CA68]"
          >
            Coatings
          </a>
          <a
            href="#products"
            className="hover:text-[#F7CA68] transition-colors focus:outline-none focus-visible:text-[#F7CA68]"
          >
            Catalog
          </a>
          <a
            href="#location"
            className="hover:text-[#F7CA68] transition-colors focus:outline-none focus-visible:text-[#F7CA68]"
          >
            Showroom
          </a>
        </nav>

        {/* Action CTAs */}
        <div className="flex items-center gap-2.5 sm:gap-3">
          {/* Company Profile Quick Modal Trigger */}
          <button
            onClick={onOpenCompanyProfile}
            className="hidden lg:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 hover:border-[#E5A93C]/40 text-gray-300 hover:text-white transition-all text-xs font-semibold"
            title="View Company Profile PDF"
          >
            <FileText className="w-3.5 h-3.5 text-[#E5A93C]" />
            <span>Profile Dossier</span>
          </button>

          {/* Quote Drawer Button */}
          <button
            onClick={onOpenQuote}
            className="relative flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-white/[0.05] hover:bg-white/[0.09] border border-white/10 hover:border-[#E5A93C]/40 text-gray-200 hover:text-white transition-all text-xs sm:text-sm font-medium focus:outline-none focus-visible:ring-2 focus-visible:ring-[#E5A93C]"
            aria-label={`View quote list with ${quoteCount} items`}
          >
            <ShoppingBag className="w-4 h-4 text-[#E5A93C]" />
            <span className="hidden sm:inline">Quote List</span>
            {quoteCount > 0 && (
              <span className="flex items-center justify-center min-w-[18px] h-4.5 px-1.5 rounded-full bg-[#E5A93C] text-black text-[11px] font-black shadow-md shadow-[#E5A93C]/40 animate-pulse">
                {quoteCount}
              </span>
            )}
          </button>

          {/* WhatsApp Primary Contact */}
          <a
            href={BRAND_CONFIG.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex items-center gap-2 px-4 py-1.5 rounded-xl bg-gradient-to-r from-emerald-600 to-emerald-500 hover:from-emerald-500 hover:to-emerald-400 text-white font-bold text-xs sm:text-sm shadow-[0_4px_16px_rgba(16,185,129,0.25)] hover:shadow-[0_6px_20px_rgba(16,185,129,0.35)] hover:scale-[1.02] active:scale-[0.98] transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400"
          >
            <MessageCircle className="w-3.5 h-3.5 fill-white" />
            <span>Concierge Desk</span>
          </a>

          {/* Mobile menu trigger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-xl bg-white/5 border border-white/10 text-gray-300 hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-[#E5A93C]"
            aria-expanded={mobileMenuOpen}
            aria-label="Toggle mobile menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#0A0E17]/95 backdrop-blur-2xl border-b border-white/10 px-6 py-6 space-y-4 animate-in slide-in-from-top-4 duration-300">
          <div className="flex flex-col space-y-3 font-medium text-gray-200 text-sm">
            <a
              href="#walkthrough"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 hover:text-[#F7CA68] transition-colors"
            >
              Walkthrough Tour
            </a>
            <a
              href="#company-profile"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 hover:text-[#F7CA68] transition-colors flex items-center justify-between"
            >
              <span>Official Company Profile</span>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#E5A93C]/15 text-amber-300">PDF</span>
            </a>
            <a
              href="#duracoat-systems"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 hover:text-[#F7CA68] transition-colors"
            >
              DuraCoat Centre Paint Systems
            </a>
            <a
              href="#products"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 hover:text-[#F7CA68] transition-colors"
            >
              Browse Hardware &amp; Materials
            </a>
            <a
              href="#location"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 hover:text-[#F7CA68] transition-colors"
            >
              Shop Location &amp; Hours
            </a>
          </div>

          <div className="pt-4 border-t border-white/10 flex flex-col gap-2.5">
            <a
              href={BRAND_CONFIG.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full py-3 rounded-xl bg-emerald-600 text-white font-bold text-xs shadow-lg shadow-emerald-600/25"
            >
              <MessageCircle className="w-4 h-4 fill-white" />
              WhatsApp Master Technician
            </a>
            <a
              href={`tel:${BRAND_CONFIG.phoneTel}`}
              className="flex items-center justify-center gap-2 w-full py-3 rounded-xl bg-white/5 border border-white/10 text-white font-semibold text-xs"
            >
              <Phone className="w-4 h-4 text-[#E5A93C]" />
              Call {BRAND_CONFIG.phone}
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
