import React, { useState } from 'react';
import { BRAND_CONFIG } from '../config';
import { MessageSquare, Send, CheckCircle2, Phone, Mail, MapPin, AlertCircle, Clock } from 'lucide-react';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    projectType: 'DuraCoat Paint & Computerized Tinting',
    location: 'Siaya Town',
    message: '',
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim() || formData.name.trim().length < 2) {
      newErrors.name = 'Please enter your full name (minimum 2 characters)';
    }

    const cleanPhone = formData.phone.replace(/[\s-]/g, '');
    if (!cleanPhone || cleanPhone.length < 9) {
      newErrors.phone = 'Please enter a valid phone number (e.g. 0708 292558)';
    }

    if (formData.email.trim()) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(formData.email.trim())) {
        newErrors.email = 'Please enter a valid email address';
      }
    }

    if (!formData.message.trim() || formData.message.trim().length < 5) {
      newErrors.message = 'Please provide details about your materials or project requirements';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    // Build structured WhatsApp message
    let msg = `*NEW INQUIRY / BOQ SPECIFICATION — COOL BASE HARDWARE*\n\n`;
    msg += `*Name:* ${formData.name.trim()}\n`;
    msg += `*Phone:* ${formData.phone.trim()}\n`;
    if (formData.email.trim()) msg += `*Email:* ${formData.email.trim()}\n`;
    msg += `*Category:* ${formData.projectType}\n`;
    msg += `*Site Location:* ${formData.location}\n`;
    msg += `\n*Project Details & BOQ Requirements:*\n${formData.message.trim()}\n\n`;
    msg += `_Sent via coolbasehardware.co.ke contact portal_`;

    const whatsappUrl = `${BRAND_CONFIG.whatsappUrl}?text=${encodeURIComponent(msg)}`;

    setSubmitted(true);

    // Open WhatsApp in new tab
    setTimeout(() => {
      window.open(whatsappUrl, '_blank');
    }, 400);
  };

  const handleReset = () => {
    setSubmitted(false);
    setFormData({
      name: '',
      phone: '',
      email: '',
      projectType: 'DuraCoat Paint & Computerized Tinting',
      location: 'Siaya Town',
      message: '',
    });
    setErrors({});
  };

  return (
    <section id="contact" className="relative py-28 sm:py-36 bg-[#05070B] border-t border-white/[0.06] overflow-hidden">
      {/* Background ambient light */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[750px] h-[380px] bg-[#E5A93C]/[0.03] rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Direct Directory & Information */}
          <div className="lg:col-span-5 space-y-8">
            <div>
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#E5A93C]/10 border border-[#E5A93C]/25 text-[#F7CA68] text-xs font-bold uppercase tracking-widest mb-4">
                <MessageSquare className="w-3.5 h-3.5 text-[#E5A93C]" />
                Technical &amp; Quotation Desk
              </div>
              <h2 className="text-3xl sm:text-5xl font-display font-bold text-white tracking-tight leading-[1.15]">
                Get a Direct Quote in Minutes
              </h2>
              <p className="mt-4 text-sm sm:text-base text-gray-400 font-normal leading-relaxed">
                Whether you need a custom DuraCoat paint tint formulated, a 7-tonne sand tipper dispatched, or a full building Bill of Quantities priced, our technical estimators respond immediately.
              </p>
            </div>

            <div className="space-y-4 text-xs sm:text-sm">
              <div className="p-5 rounded-2xl bg-[#0C121E]/80 border border-white/[0.08] flex items-start gap-3.5">
                <MapPin className="w-5 h-5 text-[#F7CA68] shrink-0 mt-0.5" />
                <div>
                  <strong className="text-white block font-display">Showroom Address</strong>
                  <span className="text-gray-400 leading-relaxed block mt-0.5">
                    Opposite Siaya Law Courts, Siaya Town, Kenya
                  </span>
                </div>
              </div>

              <div className="p-5 rounded-2xl bg-[#0C121E]/80 border border-white/[0.08] flex items-start gap-3.5">
                <Phone className="w-5 h-5 text-[#F7CA68] shrink-0 mt-0.5" />
                <div>
                  <strong className="text-white block font-display">Contractor Hotline</strong>
                  <a
                    href={`tel:${BRAND_CONFIG.phoneTel}`}
                    className="text-[#F7CA68] hover:underline font-semibold block mt-0.5"
                  >
                    +254 708 292558
                  </a>
                </div>
              </div>

              <div className="p-5 rounded-2xl bg-[#0C121E]/80 border border-white/[0.08] flex items-start gap-3.5">
                <Mail className="w-5 h-5 text-[#F7CA68] shrink-0 mt-0.5" />
                <div>
                  <strong className="text-white block font-display">Official Email</strong>
                  <a
                    href="mailto:coolbasehardware2020@gmail.com"
                    className="text-gray-300 hover:text-white transition-colors block mt-0.5"
                  >
                    coolbasehardware2020@gmail.com
                  </a>
                </div>
              </div>

              <div className="p-5 rounded-2xl bg-[#0C121E]/80 border border-white/[0.08] flex items-start gap-3.5">
                <Clock className="w-5 h-5 text-[#F7CA68] shrink-0 mt-0.5" />
                <div>
                  <strong className="text-white block font-display">Operating Hours</strong>
                  <span className="text-gray-400 block mt-0.5">
                    Mon – Sat: 7:30 AM – 6:30 PM <span className="text-[#F7CA68]">(Sunday Closed)</span>
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Validated Contact / BOQ Request Form */}
          <div className="lg:col-span-7">
            <div className="glass-card p-8 sm:p-10 relative overflow-hidden">
              {submitted ? (
                <div className="text-center py-12 px-4 space-y-5 animate-in fade-in duration-300">
                  <div className="w-16 h-16 rounded-2xl bg-emerald-500/15 border border-emerald-500/30 flex items-center justify-center mx-auto text-emerald-400 text-3xl shadow-xl">
                    <CheckCircle2 className="w-8 h-8 text-emerald-400" />
                  </div>
                  <h3 className="text-2xl font-display font-bold text-white tracking-tight">
                    Inquiry Generated Successfully!
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-300 max-w-md mx-auto leading-relaxed">
                    Your details have been pre-formatted for WhatsApp. If WhatsApp didn't open automatically, click the button below to connect with our master estimator.
                  </p>
                  <div className="pt-2 flex flex-wrap justify-center gap-3">
                    <a
                      href={`${BRAND_CONFIG.whatsappUrl}?text=${encodeURIComponent(
                        `*INQUIRY FROM ${formData.name.toUpperCase()}*\nCategory: ${formData.projectType}\nSite: ${formData.location}\nDetails: ${formData.message}`
                      )}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-gold px-6 py-3 text-xs sm:text-sm font-bold inline-flex items-center gap-2"
                    >
                      <Send className="w-4 h-4" />
                      <span>Open WhatsApp Now</span>
                    </a>
                    <button
                      onClick={handleReset}
                      className="btn-ghost px-5 py-3 text-xs sm:text-sm font-semibold"
                    >
                      Send Another Request
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5 text-left" noValidate>
                  <div>
                    <h3 className="text-xl sm:text-2xl font-display font-bold text-white tracking-tight">
                      Send Us Your Project Requirements
                    </h3>
                    <p className="text-xs text-gray-400 mt-1">
                      Fill out the form below for fast quotation review and material scheduling.
                    </p>
                  </div>

                  {/* Name & Phone */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-gray-300 mb-1.5" htmlFor="c-name">
                        Full Name <span className="text-[#F7CA68]">*</span>
                      </label>
                      <input
                        id="c-name"
                        type="text"
                        value={formData.name}
                        onChange={(e) => {
                          setFormData({ ...formData, name: e.target.value });
                          if (errors.name) setErrors({ ...errors, name: null });
                        }}
                        placeholder="e.g. Contractor Omondi"
                        className={`w-full px-4 py-2.5 rounded-xl bg-white/[0.04] border ${
                          errors.name ? 'border-red-500/80 focus:border-red-500' : 'border-white/[0.08] focus:border-[#E5A93C]'
                        } text-sm text-white placeholder-gray-500 focus:outline-none transition-all`}
                      />
                      {errors.name && (
                        <p className="text-[11px] text-red-400 mt-1 flex items-center gap-1">
                          <AlertCircle className="w-3 h-3" /> {errors.name}
                        </p>
                      )}
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-gray-300 mb-1.5" htmlFor="c-phone">
                        Phone / WhatsApp Number <span className="text-[#F7CA68]">*</span>
                      </label>
                      <input
                        id="c-phone"
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => {
                          setFormData({ ...formData, phone: e.target.value });
                          if (errors.phone) setErrors({ ...errors, phone: null });
                        }}
                        placeholder="e.g. 0708 292558"
                        className={`w-full px-4 py-2.5 rounded-xl bg-white/[0.04] border ${
                          errors.phone ? 'border-red-500/80 focus:border-red-500' : 'border-white/[0.08] focus:border-[#E5A93C]'
                        } text-sm text-white placeholder-gray-500 focus:outline-none transition-all`}
                      />
                      {errors.phone && (
                        <p className="text-[11px] text-red-400 mt-1 flex items-center gap-1">
                          <AlertCircle className="w-3 h-3" /> {errors.phone}
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Email & Category */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-gray-300 mb-1.5" htmlFor="c-email">
                        Email Address <span className="text-gray-500">(Optional)</span>
                      </label>
                      <input
                        id="c-email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => {
                          setFormData({ ...formData, email: e.target.value });
                          if (errors.email) setErrors({ ...errors, email: null });
                        }}
                        placeholder="e.g. builder@gmail.com"
                        className={`w-full px-4 py-2.5 rounded-xl bg-white/[0.04] border ${
                          errors.email ? 'border-red-500/80 focus:border-red-500' : 'border-white/[0.08] focus:border-[#E5A93C]'
                        } text-sm text-white placeholder-gray-500 focus:outline-none transition-all`}
                      />
                      {errors.email && (
                        <p className="text-[11px] text-red-400 mt-1 flex items-center gap-1">
                          <AlertCircle className="w-3 h-3" /> {errors.email}
                        </p>
                      )}
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-gray-300 mb-1.5" htmlFor="c-category">
                        Material Category
                      </label>
                      <select
                        id="c-category"
                        value={formData.projectType}
                        onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-xl bg-[#090E17] border border-white/[0.08] text-sm text-white focus:outline-none focus:border-[#E5A93C] transition-all cursor-pointer"
                      >
                        <option value="DuraCoat Paint & Computerized Tinting">DuraCoat Paint &amp; Computerized Tinting</option>
                        <option value="Cement & Structural Steel Rebar">Cement &amp; Structural Steel Rebar</option>
                        <option value="River Sand & Crushed Ballast Tippers">River Sand &amp; Crushed Ballast Tippers</option>
                        <option value="Precast Concrete & Paving Blocks">Precast Concrete &amp; Paving Blocks</option>
                        <option value="Plumbing, PPR & Water Storage Tanks">Plumbing, PPR &amp; Water Storage Tanks</option>
                        <option value="Full Project BOQ Price Estimation">Full Project BOQ Price Estimation</option>
                      </select>
                    </div>
                  </div>

                  {/* Sub-County Location */}
                  <div>
                    <label className="block text-xs font-semibold text-gray-300 mb-1.5" htmlFor="c-loc">
                      Delivery Sub-County / Site Area
                    </label>
                    <select
                      id="c-loc"
                      value={formData.location}
                      onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl bg-[#090E17] border border-white/[0.08] text-sm text-white focus:outline-none focus:border-[#E5A93C] transition-all cursor-pointer"
                    >
                      <option value="Siaya Town (Showroom Pick-up or Drop)">Siaya Town (Showroom Pick-up or Drop)</option>
                      <option value="Ugunja Sub-County">Ugunja Sub-County</option>
                      <option value="Bondo Sub-County">Bondo Sub-County</option>
                      <option value="Yala / Gem Sub-County">Yala / Gem Sub-County</option>
                      <option value="Usenge / Bondo Beach Route">Usenge / Bondo Beach Route</option>
                      <option value="Sega / Ugenya Sub-County">Sega / Ugenya Sub-County</option>
                      <option value="Other Western Kenya Location">Other Western Kenya Location</option>
                    </select>
                  </div>

                  {/* Project Details */}
                  <div>
                    <label className="block text-xs font-semibold text-gray-300 mb-1.5" htmlFor="c-msg">
                      Project Details / Material Quantities <span className="text-[#F7CA68]">*</span>
                    </label>
                    <textarea
                      id="c-msg"
                      rows={3}
                      value={formData.message}
                      onChange={(e) => {
                        setFormData({ ...formData, message: e.target.value });
                        if (errors.message) setErrors({ ...errors, message: null });
                      }}
                      placeholder="e.g. 50 bags Simba 42.5N, 20 lengths Y12 rebar, and 4 x 20L DuraCoat WeatherGuard Classic Cream 101…"
                      className={`w-full px-4 py-2.5 rounded-xl bg-white/[0.04] border ${
                        errors.message ? 'border-red-500/80 focus:border-red-500' : 'border-white/[0.08] focus:border-[#E5A93C]'
                      } text-sm text-white placeholder-gray-500 focus:outline-none transition-all resize-none`}
                    />
                    {errors.message && (
                      <p className="text-[11px] text-red-400 mt-1 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" /> {errors.message}
                      </p>
                    )}
                  </div>

                  {/* Submit Button with Hover Glow & Ripple Feel */}
                  <button
                    type="submit"
                    className="btn-gold w-full py-4 text-xs sm:text-sm font-display font-bold flex items-center justify-center gap-2 cursor-pointer transition-all active:scale-[0.99]"
                  >
                    <Send className="w-4 h-4" />
                    <span>Submit &amp; Connect to WhatsApp Concierge</span>
                  </button>
                </form>
              )}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
