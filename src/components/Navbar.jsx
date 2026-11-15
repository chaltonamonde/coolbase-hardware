import React, { useState, useEffect } from 'react';
import { BRAND_CONFIG } from '../config';
import { ShoppingBag, MessageCircle, Phone, Menu, X, Shield, Sparkles, FileText } from 'lucide-react';

export default function Navbar({ quoteCount, onOpenQuote, onOpenCompanyProfile }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#07090E]/90 backdrop-blur-xl border-b border-white/10 shadow-2xl py-3'
          : 'bg-gradient-to-b from-[#07090E]/90 via-[#07090E]/60 to-transparent py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo & DuraCoat Badge */}
        <a href="#hero" className="flex items-center gap-3 group focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 rounded-lg">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-amber-400 via-amber-500 to-amber-700 flex items-center justify-center font-black text-black shadow-lg shadow-amber-500/20 group-hover:scale-105 transition-transform duration-300">
            CB
          </div>
          <div className="flex flex-col">
            <div className="flex items-center gap-2">
              <span className="font-extrabold text-white text-base sm:text-lg tracking-tight leading-none">
                {BRAND_CONFIG.clientName}
              </span>
              <span className="hidden sm:inline-flex items-center gap-1 text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-amber-500/15 text-amber-400 border border-amber-500/30">
                <Shield className="w-2.5 h-2.5" />
                {BRAND_CONFIG.centreName}
              </span>
            </div>
            <span className="text-xs text-amber-400/90 font-medium tracking-wide mt-0.5">
              {BRAND_CONFIG.tagline}
            </span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-6 text-sm font-semibold tracking-wide text-gray-300" aria-label="Main Navigation">
          <a href="#walkthrough" className="hover:text-amber-400 transition-colors focus:outline-none focus-visible:text-amber-400">
            Walkthrough
          </a>
          <a href="#company-profile" className="hover:text-amber-400 transition-colors focus:outline-none focus-visible:text-amber-400">
            Company Profile
          </a>
          <a href="#duracoat-systems" className="hover:text-amber-400 transition-colors focus:outline-none focus-visible:text-amber-400">
            DuraCoat Systems
          </a>
          <a href="#products" className="hover:text-amber-400 transition-colors focus:outline-none focus-visible:text-amber-400">
            Hardware & Paints
          </a>
          <a href="#experts" className="hover:text-amber-400 transition-colors focus:outline-none focus-visible:text-amber-400">
            Expert Advisory
          </a>
          <a href="#location" className="hover:text-amber-400 transition-colors focus:outline-none focus-visible:text-amber-400">
            Visit Shop
          </a>
        </nav>

        {/* Action CTAs */}
        <div className="flex items-center gap-2.5">
          {/* Company Profile Quick Modal Trigger */}
          <button
            onClick={onOpenCompanyProfile}
            className="hidden lg:flex items-center gap-1.5 px-3 py-2 rounded-xl bg-amber-500/10 hover:bg-amber-500/20 border border-amber-500/30 text-amber-300 transition-all text-xs font-bold"
            title="View Company Profile PDF"
          >
            <FileText className="w-3.5 h-3.5 text-amber-400" />
            <span>Profile PDF</span>
          </button>
          {/* Quote Drawer Button */}
          <button
            onClick={onOpenQuote}
            className="relative flex items-center gap-2 px-3.5 py-2 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 hover:border-amber-500/40 text-gray-200 hover:text-white transition-all text-xs sm:text-sm font-semibold focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-500"
            aria-label={`View quote list with ${quoteCount} items`}
          >
            <ShoppingBag className="w-4 h-4 text-amber-400" />
            <span className="hidden sm:inline">Quote List</span>
            {quoteCount > 0 && (
              <span className="flex items-center justify-center min-w-[20px] h-5 px-1.5 rounded-full bg-amber-500 text-black text-xs font-black shadow-md shadow-amber-500/40 animate-bounce">
                {quoteCount}
              </span>
            )}
          </button>

          {/* WhatsApp Primary Contact */}
          <a
            href={BRAND_CONFIG.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-gradient-to-r from-emerald-600 to-emerald-500 hover:from-emerald-500 hover:to-emerald-400 text-white font-bold text-xs sm:text-sm shadow-lg shadow-emerald-600/30 hover:shadow-emerald-500/50 hover:scale-[1.02] active:scale-[0.98] transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400"
          >
            <MessageCircle className="w-4 h-4 fill-white" />
            <span>Chat Experts</span>
          </a>

          {/* Mobile menu trigger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-lg bg-white/5 text-gray-300 hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-500"
            aria-expanded={mobileMenuOpen}
            aria-label="Toggle mobile menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#0C111C]/95 backdrop-blur-2xl border-b border-white/10 px-6 py-6 space-y-4 animate-in slide-in-from-top-4 duration-200">
          <div className="flex flex-col space-y-3 font-semibold text-gray-200 text-base">
            <a
              href="#walkthrough"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 hover:text-amber-400 transition-colors"
            >
              Walkthrough Tour
            </a>
            <a
              href="#company-profile"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 hover:text-amber-400 transition-colors flex items-center justify-between"
            >
              <span>Official Company Profile</span>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-amber-500/15 text-amber-300">PDF</span>
            </a>
            <a
              href="#duracoat-systems"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 hover:text-amber-400 transition-colors"
            >
              DuraCoat Centre Paint Systems
            </a>
            <a
              href="#products"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 hover:text-amber-400 transition-colors"
            >
              Browse Hardware & Materials
            </a>
            <a
              href="#experts"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 hover:text-amber-400 transition-colors"
            >
              Ask the Experts
            </a>
            <a
              href="#location"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 hover:text-amber-400 transition-colors"
            >
              Shop Location & Hours
            </a>
          </div>

          <div className="pt-4 border-t border-white/10 flex flex-col gap-3">
            <a
              href={BRAND_CONFIG.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full py-3 rounded-xl bg-emerald-600 text-white font-bold text-sm shadow-lg shadow-emerald-600/30"
            >
              <MessageCircle className="w-4 h-4 fill-white" />
              WhatsApp Master Technician
            </a>
            <a
              href={`tel:${BRAND_CONFIG.phoneTel}`}
              className="flex items-center justify-center gap-2 w-full py-3 rounded-xl bg-white/5 border border-white/10 text-white font-semibold text-sm"
            >
              <Phone className="w-4 h-4 text-amber-400" />
              Call {BRAND_CONFIG.phone}
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

