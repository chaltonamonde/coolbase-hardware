import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import WalkthroughHero from './components/WalkthroughHero';
import CategoryGrid from './components/CategoryGrid';
import CompanyProfileSection from './components/CompanyProfileSection';
import DuraCoatFeatures from './components/DuraCoatFeatures';
import ProductCatalog from './components/ProductCatalog';
import HowItWorks from './components/HowItWorks';
import WhyChooseUs from './components/WhyChooseUs';
import EstimatorAndDelivery from './components/EstimatorAndDelivery';
import TestimonialsAndFaq from './components/TestimonialsAndFaq';
import MapAndFinalCta from './components/MapAndFinalCta';
import Footer from './components/Footer';
import QuoteDrawer from './components/QuoteDrawer';
import CompanyProfileModal from './components/CompanyProfileModal';

export default function App() {
  const [isQuoteOpen, setIsQuoteOpen] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [quoteItems, setQuoteItems] = useState(() => {
    try {
      const saved = localStorage.getItem('cbh_duracoat_quote');
      return saved ? JSON.parse(saved) : [];
    } catch (e) {
      return [];
    }
  });

  // Save quote items to localStorage
  useEffect(() => {
    try {
      localStorage.setItem('cbh_duracoat_quote', JSON.stringify(quoteItems));
    } catch (e) {}
  }, [quoteItems]);

  const handleAddToQuote = (product) => {
    setQuoteItems((prev) => {
      const existing = prev.find((item) => item.id === product.id);
      if (existing) {
        return prev.map((item) =>
          item.id === product.id ? { ...item, qty: item.qty + 1 } : item
        );
      }
      return [...prev, { ...product, qty: 1 }];
    });
  };

  const handleUpdateQty = (id, delta) => {
    setQuoteItems((prev) =>
      prev
        .map((item) => {
          if (item.id === id) {
            const newQty = item.qty + delta;
            return newQty > 0 ? { ...item, qty: newQty } : null;
          }
          return item;
        })
        .filter(Boolean)
    );
  };

  const handleRemoveItem = (id) => {
    setQuoteItems((prev) => prev.filter((item) => item.id !== id));
  };

  const handleClearAll = () => {
    setQuoteItems([]);
  };

  const scrollToProducts = () => {
    const productsEl = document.getElementById('products');
    if (productsEl) {
      productsEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSelectCategory = (catId) => {
    setSelectedCategory(catId);
    scrollToProducts();
  };

  return (
    <div className="min-h-screen bg-[#05070B] text-slate-100 selection:bg-[#E5A93C] selection:text-black font-sans">
      {/* Navigation */}
      <Navbar
        quoteCount={quoteItems.reduce((acc, i) => acc + i.qty, 0)}
        onOpenQuote={() => setIsQuoteOpen(true)}
        onOpenCompanyProfile={() => setIsProfileOpen(true)}
      />

      {/* Main Content */}
      <main id="hero">
        {/* Pinned 450vh Scroll-Driven Store Walkthrough with GSAP ScrollTrigger & Company Profile HUD */}
        <WalkthroughHero
          onShopNow={scrollToProducts}
          onOpenCompanyProfile={() => setIsProfileOpen(true)}
        />

        {/* Official Company Profile & Capabilities Dossier */}
        <CompanyProfileSection onOpenModal={() => setIsProfileOpen(true)} />

        {/* Shop by Category Showcase */}
        <CategoryGrid onSelectCategory={handleSelectCategory} />

        {/* DuraCoat Technical Features & Color Advisory */}
        <DuraCoatFeatures />

        {/* Product Catalog & Complete Materials Floor (52 products) */}
        <ProductCatalog
          onAddToQuote={handleAddToQuote}
          initialCategory={selectedCategory}
        />

        {/* Simple 3-Step Process */}
        <HowItWorks />

        {/* Why Contractors Choose Us */}
        <WhyChooseUs />

        {/* Construction Calculators & Countywide Delivery */}
        <EstimatorAndDelivery />

        {/* Verified Customer Reviews & FAQ Accordion */}
        <TestimonialsAndFaq />

        {/* Final CTA & Google Maps Physical Showroom */}
        <MapAndFinalCta />
      </main>

      {/* Footer */}
      <Footer />

      {/* Slide-out Quote Drawer */}
      <QuoteDrawer
        isOpen={isQuoteOpen}
        onClose={() => setIsQuoteOpen(false)}
        quoteItems={quoteItems}
        onUpdateQty={handleUpdateQty}
        onRemoveItem={handleRemoveItem}
        onClearAll={handleClearAll}
      />

      {/* Full Company Profile Document Modal */}
      <CompanyProfileModal
        isOpen={isProfileOpen}
        onClose={() => setIsProfileOpen(false)}
      />
    </div>
  );
}
