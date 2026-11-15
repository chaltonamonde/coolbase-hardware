import React, { useState } from 'react';
import { BRAND_CONFIG } from '../config';
import { X, Trash2, Plus, Minus, MessageCircle, Send, MapPin, Truck, Store } from 'lucide-react';

export default function QuoteDrawer({ isOpen, onClose, quoteItems, onUpdateQty, onRemoveItem, onClearAll }) {
  const [customerName, setCustomerName] = useState('');
  const [customerPhone, setCustomerPhone] = useState('');
  const [deliveryMethod, setDeliveryMethod] = useState('delivery'); // 'delivery' | 'pickup'
  const [deliveryLocation, setDeliveryLocation] = useState('');
  const [extraNotes, setExtraNotes] = useState('');

  if (!isOpen) return null;

  const totalEstimate = quoteItems.reduce((acc, item) => acc + (item.price || 0) * (item.qty || 1), 0);

  const handleSendWhatsApp = (e) => {
    e.preventDefault();

    let msg = `*NEW QUOTE REQUEST — COOL BASE ENTERPRISES / DURACOAT CENTRE*\n\n`;
    msg += `*Customer:* ${customerName.trim() || 'Valued Builder'}\n`;
    if (customerPhone) msg += `*Phone:* ${customerPhone.trim()}\n`;
    msg += `*Method:* ${deliveryMethod === 'delivery' ? '🚚 Site Delivery' : '🏪 Shop Pickup'}\n`;
    if (deliveryMethod === 'delivery' && deliveryLocation) {
      msg += `*Location:* ${deliveryLocation.trim()}\n`;
    }
    msg += `\n*Requested Materials & Coatings:*\n`;

    quoteItems.forEach((item, index) => {
      const lineTotal = item.price ? ` — KSh ${(item.price * item.qty).toLocaleString()}` : '';
      msg += `${index + 1}. ${item.name} (${item.qty} ${item.unit}${lineTotal})\n`;
    });

    if (totalEstimate > 0) {
      msg += `\n*Estimated Materials Total:* KSh ${totalEstimate.toLocaleString()} (Excl. transport/negotiated bulk discount)\n`;
    }

    if (extraNotes.trim()) {
      msg += `\n*Special Instructions:* ${extraNotes.trim()}\n`;
    }

    msg += `\n_Generated via Cool Base DuraCoat Walkthrough Experience_`;

    const url = `${BRAND_CONFIG.whatsappUrl}?text=${encodeURIComponent(msg)}`;
    window.open(url, '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden" role="dialog" aria-modal="true" aria-labelledby="quote-drawer-title">
      {/* Backdrop */}
      <div
        onClick={onClose}
        className="absolute inset-0 bg-black/80 backdrop-blur-md transition-opacity animate-in fade-in duration-300"
      />

      <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-[#0C111C] border-l border-white/10 shadow-2xl flex flex-col justify-between overflow-y-auto">
          {/* Header */}
          <div className="p-6 border-b border-white/10 flex items-center justify-between bg-[#121927]">
            <div className="flex items-center gap-2.5">
              <div className="w-3 h-3 rounded-full bg-amber-400" />
              <h2 id="quote-drawer-title" className="text-lg font-black text-white tracking-tight">
                Your Project Quote List
              </h2>
            </div>
            <button
              onClick={onClose}
              className="p-2 rounded-xl bg-white/5 hover:bg-white/10 text-gray-400 hover:text-white transition-colors"
              aria-label="Close quote list"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* List Content */}
          <div className="p-6 flex-grow overflow-y-auto space-y-6">
            {quoteItems.length === 0 ? (
              <div className="text-center py-12 px-4">
                <div className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mx-auto mb-4 text-amber-400 text-2xl">
                  📦
                </div>
                <h3 className="text-base font-bold text-white mb-1">Your quote list is empty</h3>
                <p className="text-xs text-gray-400 mb-6">
                  Browse our inventory of DuraCoat paint systems, structural cement, and aggregates to add items.
                </p>
                <button
                  onClick={onClose}
                  className="px-6 py-2.5 rounded-xl bg-amber-500 text-black font-extrabold text-xs shadow-lg"
                >
                  Explore Showroom Floor
                </button>
              </div>
            ) : (
              <>
                <div className="flex items-center justify-between text-xs font-bold text-gray-400 uppercase tracking-wider pb-2 border-b border-white/5">
                  <span>Selected Items ({quoteItems.length})</span>
                  <button onClick={onClearAll} className="text-red-400 hover:text-red-300 transition-colors">
                    Clear All
                  </button>
                </div>

                <div className="space-y-3">
                  {quoteItems.map((item) => (
                    <div
                      key={item.id}
                      className="p-3.5 rounded-2xl bg-white/5 border border-white/5 flex items-center justify-between gap-3"
                    >
                      <div className="flex items-center gap-3 min-w-0">
                        {item.img ? (
                          <img
                            src={item.img}
                            alt=""
                            className="w-12 h-12 rounded-xl object-cover border border-white/10 flex-shrink-0"
                          />
                        ) : (
                          <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center flex-shrink-0 text-lg">
                            🧱
                          </div>
                        )}
                        <div className="min-w-0">
                          <p className="text-xs font-bold text-white truncate">{item.name}</p>
                          <p className="text-[11px] text-amber-400 font-semibold">
                            {item.price ? `KSh ${item.price.toLocaleString()} / ${item.unit}` : 'Custom Quote'}
                          </p>
                          {item.price && (
                            <p className="text-[10px] text-gray-400">
                              Subtotal: KSh {(item.price * item.qty).toLocaleString()}
                            </p>
                          )}
                        </div>
                      </div>

                      {/* Quantity Controls */}
                      <div className="flex items-center gap-2 flex-shrink-0">
                        <button
                          onClick={() => onUpdateQty(item.id, -1)}
                          className="w-7 h-7 rounded-lg bg-white/10 hover:bg-white/20 flex items-center justify-center text-white text-xs"
                          aria-label="Decrease quantity"
                        >
                          <Minus className="w-3 h-3" />
                        </button>
                        <span className="text-xs font-bold text-white w-5 text-center">{item.qty}</span>
                        <button
                          onClick={() => onUpdateQty(item.id, 1)}
                          className="w-7 h-7 rounded-lg bg-white/10 hover:bg-white/20 flex items-center justify-center text-white text-xs"
                          aria-label="Increase quantity"
                        >
                          <Plus className="w-3 h-3" />
                        </button>
                        <button
                          onClick={() => onRemoveItem(item.id)}
                          className="w-7 h-7 rounded-lg text-red-400 hover:bg-red-500/20 flex items-center justify-center transition-colors ml-1"
                          aria-label="Remove item"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Dispatch Form Details */}
                <form onSubmit={handleSendWhatsApp} className="pt-4 border-t border-white/10 space-y-3.5">
                  <span className="text-[11px] uppercase font-bold tracking-wider text-amber-400 block">
                    Your Dispatch Details
                  </span>

                  <div>
                    <label className="block text-xs font-semibold text-gray-300 mb-1">Your Full Name *</label>
                    <input
                      type="text"
                      required
                      value={customerName}
                      onChange={(e) => setCustomerName(e.target.value)}
                      placeholder="e.g. Architect John / Contractor Omondi"
                      className="w-full px-3.5 py-2 rounded-xl bg-white/5 border border-white/10 text-xs text-white placeholder-gray-500 focus:outline-none focus:border-amber-500"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-gray-300 mb-1">Phone Number (Optional)</label>
                    <input
                      type="tel"
                      value={customerPhone}
                      onChange={(e) => setCustomerPhone(e.target.value)}
                      placeholder="e.g. 0712 345678"
                      className="w-full px-3.5 py-2 rounded-xl bg-white/5 border border-white/10 text-xs text-white placeholder-gray-500 focus:outline-none focus:border-amber-500"
                    />
                  </div>

                  {/* Delivery / Pickup Toggle */}
                  <div className="grid grid-cols-2 gap-2 pt-1">
                    <button
                      type="button"
                      onClick={() => setDeliveryMethod('delivery')}
                      className={`flex items-center justify-center gap-1.5 py-2 rounded-xl text-xs font-bold transition-all ${
                        deliveryMethod === 'delivery'
                          ? 'bg-amber-500 text-black shadow-md'
                          : 'bg-white/5 text-gray-400 border border-white/10'
                      }`}
                    >
                      <Truck className="w-3.5 h-3.5" />
                      Site Delivery
                    </button>
                    <button
                      type="button"
                      onClick={() => setDeliveryMethod('pickup')}
                      className={`flex items-center justify-center gap-1.5 py-2 rounded-xl text-xs font-bold transition-all ${
                        deliveryMethod === 'pickup'
                          ? 'bg-amber-500 text-black shadow-md'
                          : 'bg-white/5 text-gray-400 border border-white/10'
                      }`}
                    >
                      <Store className="w-3.5 h-3.5" />
                      Shop Pickup
                    </button>
                  </div>

                  {deliveryMethod === 'delivery' && (
                    <div>
                      <label className="block text-xs font-semibold text-gray-300 mb-1">Delivery Site in Siaya</label>
                      <input
                        type="text"
                        value={deliveryLocation}
                        onChange={(e) => setDeliveryLocation(e.target.value)}
                        placeholder="e.g. Siaya Town, Ugunja, Bondo, Yala, Usenge"
                        className="w-full px-3.5 py-2 rounded-xl bg-white/5 border border-white/10 text-xs text-white placeholder-gray-500 focus:outline-none focus:border-amber-500"
                      />
                    </div>
                  )}

                  <div>
                    <label className="block text-xs font-semibold text-gray-300 mb-1">Additional Notes</label>
                    <textarea
                      rows={2}
                      value={extraNotes}
                      onChange={(e) => setExtraNotes(e.target.value)}
                      placeholder="Tint color codes, urgent delivery timing, or BOQ notes…"
                      className="w-full px-3.5 py-2 rounded-xl bg-white/5 border border-white/10 text-xs text-white placeholder-gray-500 focus:outline-none focus:border-amber-500 resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full mt-4 py-3.5 rounded-xl bg-gradient-to-r from-emerald-600 to-emerald-500 hover:from-emerald-500 hover:to-emerald-400 text-white font-extrabold text-sm shadow-xl shadow-emerald-600/30 flex items-center justify-center gap-2 cursor-pointer transition-all hover:scale-[1.01]"
                  >
                    <MessageCircle className="w-4 h-4 fill-white" />
                    <span>Send Quote to WhatsApp Desk</span>
                  </button>
                </form>
              </>
            )}
          </div>

          {/* Footer Total */}
          {quoteItems.length > 0 && (
            <div className="p-6 border-t border-white/10 bg-[#07090E]/90 flex items-center justify-between">
              <div>
                <span className="text-[10px] uppercase font-bold text-gray-400 block">Estimated Materials</span>
                <span className="text-xl font-black text-gold-gradient">
                  KSh {totalEstimate.toLocaleString()}
                </span>
              </div>
              <span className="text-[11px] text-amber-400/80 font-medium">Wholesale Pricing Applied</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

