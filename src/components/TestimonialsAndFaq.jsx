import React, { useState } from 'react';
import { TESTIMONIALS, FAQS } from '../config';
import { MessageSquareQuote, ChevronDown, HelpCircle } from 'lucide-react';

export default function TestimonialsAndFaq() {
  const [openFaq, setOpenFaq] = useState(null);

  const toggleFaq = (idx) => {
    setOpenFaq(openFaq === idx ? null : idx);
  };

  return (
    <section className="relative py-24 bg-[#07090E] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Testimonials */}
        <div className="mb-24">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/25 text-amber-400 text-xs font-bold uppercase tracking-widest mb-3">
              <MessageSquareQuote className="w-3.5 h-3.5 text-amber-400" />
              Verified Contractor Proof
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              What Our Customers Say
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {TESTIMONIALS.map((t, idx) => (
              <blockquote
                key={idx}
                className="rounded-2xl bg-gradient-to-br from-slate-900/80 to-slate-950/80 border border-white/10 p-7 flex flex-col justify-between hover:border-amber-500/30 transition-all duration-300"
              >
                <p className="text-gray-300 text-sm sm:text-base leading-relaxed italic mb-6">
                  "{t.text}"
                </p>
                <footer className="border-t border-white/10 pt-4">
                  <div className="font-bold text-white text-sm">{t.name}</div>
                  <div className="text-xs text-amber-400 font-medium">{t.role}</div>
                </footer>
              </blockquote>
            ))}
          </div>
        </div>

        {/* FAQs */}
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/25 text-amber-400 text-xs font-bold uppercase tracking-widest mb-3">
              <HelpCircle className="w-3.5 h-3.5 text-amber-400" />
              Help &amp; Ordering Info
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="space-y-3">
            {FAQS.slice(0, 6).map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div
                  key={idx}
                  className="rounded-xl border border-white/10 bg-slate-900/60 overflow-hidden transition-all duration-200"
                >
                  <button
                    onClick={() => toggleFaq(idx)}
                    className="w-full px-6 py-4.5 flex items-center justify-between text-left font-bold text-sm sm:text-base text-white hover:text-amber-400 transition-colors cursor-pointer"
                    aria-expanded={isOpen}
                  >
                    <span>{faq.q}</span>
                    <ChevronDown
                      className={`w-5 h-5 text-gray-400 transition-transform duration-300 ${
                        isOpen ? 'rotate-180 text-amber-400' : ''
                      }`}
                    />
                  </button>
                  {isOpen && (
                    <div className="px-6 pb-5 pt-1 text-sm text-gray-400 leading-relaxed border-t border-white/5">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          <div className="text-center mt-8">
            <a
              href="faq.html"
              className="text-xs sm:text-sm font-bold text-amber-400 hover:text-amber-300 underline underline-offset-4"
            >
              View Full FAQ &amp; Policy Page →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

