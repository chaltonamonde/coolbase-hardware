import React, { useState } from 'react';
import { TESTIMONIALS, FAQS } from '../config';
import { MessageSquareQuote, ChevronDown, HelpCircle } from 'lucide-react';

export default function TestimonialsAndFaq() {
  const [openFaq, setOpenFaq] = useState(null);

  const toggleFaq = (idx) => {
    setOpenFaq(openFaq === idx ? null : idx);
  };

  return (
    <section className="relative py-28 sm:py-36 bg-[#070B13] border-t border-white/[0.06] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Testimonials */}
        <div className="mb-24 sm:mb-32">
          <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#E5A93C]/10 border border-[#E5A93C]/25 text-[#F7CA68] text-xs font-bold uppercase tracking-widest mb-4">
              <MessageSquareQuote className="w-3.5 h-3.5 text-[#E5A93C]" />
              Verified Contractor Proof
            </div>
            <h2 className="text-3xl sm:text-5xl font-display font-bold text-white tracking-tight leading-[1.15]">
              Built on Trust in Siaya
            </h2>
            <p className="mt-4 text-base sm:text-lg text-gray-400 font-normal leading-relaxed">
              Real feedback from local structural foremen, master painters, and commercial builders.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-7">
            {TESTIMONIALS.map((t, idx) => (
              <blockquote
                key={idx}
                className="rounded-2xl bg-[#0C121E]/80 border border-white/[0.08] p-8 flex flex-col justify-between hover:border-[#E5A93C]/30 transition-all duration-300"
              >
                <p className="text-gray-300 text-sm leading-relaxed italic mb-8">
                  "{t.text}"
                </p>
                <footer className="border-t border-white/[0.06] pt-4">
                  <div className="font-display font-bold text-white text-sm">{t.name}</div>
                  <div className="text-xs text-[#F7CA68] font-medium mt-0.5">{t.role}</div>
                </footer>
              </blockquote>
            ))}
          </div>
        </div>

        {/* FAQs */}
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#E5A93C]/10 border border-[#E5A93C]/25 text-[#F7CA68] text-xs font-bold uppercase tracking-widest mb-4">
              <HelpCircle className="w-3.5 h-3.5 text-[#E5A93C]" />
              Direct Answers
            </div>
            <h2 className="text-3xl sm:text-4xl font-display font-bold text-white tracking-tight">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="space-y-3">
            {FAQS.slice(0, 6).map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div
                  key={idx}
                  className="rounded-2xl border border-white/[0.08] bg-[#0C121E]/70 overflow-hidden transition-all duration-200"
                >
                  <button
                    onClick={() => toggleFaq(idx)}
                    className="w-full px-6 py-5 flex items-center justify-between text-left font-display font-semibold text-sm sm:text-base text-white hover:text-[#F7CA68] transition-colors cursor-pointer"
                    aria-expanded={isOpen}
                  >
                    <span>{faq.q}</span>
                    <div className="w-8 h-8 rounded-full bg-white/[0.03] flex items-center justify-center shrink-0 ml-4">
                      <ChevronDown
                        className={`w-4 h-4 text-gray-400 transition-transform duration-300 ${
                          isOpen ? 'rotate-180 text-[#F7CA68]' : ''
                        }`}
                      />
                    </div>
                  </button>
                  {isOpen && (
                    <div className="px-6 pb-6 pt-1 text-xs sm:text-sm text-gray-400 leading-relaxed border-t border-white/[0.05]">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          <div className="text-center mt-10">
            <a
              href="faq.html"
              className="text-xs sm:text-sm font-semibold text-[#F7CA68] hover:text-amber-300 underline underline-offset-4"
            >
              Read complete ordering and delivery FAQ &rarr;
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
