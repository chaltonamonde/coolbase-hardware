// ============================================================
// Cool Base Hardware – app.js
// Shared: header, footer, ticker, quote drawer, floating buttons
// Loaded on every page. Reads from CBH object in data.js.
// ============================================================

(function () {
  'use strict';

  // ── Quote storage ─────────────────────────────────────────
  var QUOTE_KEY = 'cbh_quote';

  function getQuote() {
    try { return JSON.parse(localStorage.getItem(QUOTE_KEY)) || []; }
    catch(e) { return []; }
  }

  function saveQuote(items) {
    localStorage.setItem(QUOTE_KEY, JSON.stringify(items));
  }

  function addToQuote(item) {
    var quote = getQuote();
    var existing = null;
    for (var i = 0; i < quote.length; i++) {
      if (quote[i].id === item.id) { existing = quote[i]; break; }
    }

    var price = item.price;
    var img = item.img;
    if ((price === undefined || price === null || !img) && window.CBH && Array.isArray(window.CBH.products)) {
      var found = window.CBH.products.find(function(p){ return p.id === item.id; });
      if (found) {
        if (price === undefined || price === null) price = found.price;
        if (!img) img = found.img;
      }
    }

    if (existing) {
      existing.qty += (item.qty || 1);
      if (price && !existing.price) existing.price = price;
      if (img && !existing.img) existing.img = img;
    } else {
      quote.push({
        id: item.id,
        name: item.name,
        unit: item.unit || '',
        qty: item.qty || 1,
        price: price || null,
        img: img || null
      });
    }
    saveQuote(quote);
    updateQuoteCount();
    renderQuoteDrawerContent();
    showToast('"' + item.name + '" added to your quote list');
  }

  function removeFromQuote(id) {
    saveQuote(getQuote().filter(function(i){ return i.id !== id; }));
    updateQuoteCount();
    renderQuoteDrawerContent();
  }

  function updateQty(id, delta) {
    var quote = getQuote();
    for (var i = 0; i < quote.length; i++) {
      if (quote[i].id === id) {
        quote[i].qty = Math.max(1, quote[i].qty + delta);
        break;
      }
    }
    saveQuote(quote);
    renderQuoteDrawerContent();
    updateQuoteCount();
  }

  function clearQuote() {
    saveQuote([]);
    updateQuoteCount();
    renderQuoteDrawerContent();
  }

  function updateQuoteCount() {
    var count = getQuote().length;
    document.querySelectorAll('.quote-count').forEach(function(el) {
      el.textContent = count;
      el.style.display = count > 0 ? 'inline-flex' : 'none';
      el.classList.remove('bounce');
      void el.offsetWidth;
      if (count > 0) el.classList.add('bounce');
    });
  }

  // Expose globally so product pages can call it
  window.CBH_addToQuote = addToQuote;
  window.CBH_getQuote = getQuote;
  window.CBH_removeFromQuote = removeFromQuote;
  window.CBH_clearQuote = clearQuote;
  window.CBH_updateQty = updateQty;

  // ── WhatsApp message builder ──────────────────────────────
  function buildWhatsAppMessage(name, phone, location, deliveryType, extraNotes, pastedList) {
    var quote = getQuote();
    var msg = 'Hello Cool Base Hardware, I would like a quote.\n';
    msg += 'Name: ' + (name || 'Not provided') + '\n';
    msg += 'Phone: ' + (phone || 'Not provided') + '\n';
    if (deliveryType === 'pickup') {
      msg += 'Collection: Pickup from shop\n';
    } else {
      msg += 'Delivery to: ' + (location || 'Not provided') + '\n';
    }
    if (quote.length > 0) {
      msg += '\nItems:\n';
      var estimatedTotal = 0;
      var hasAnyPrices = false;
      quote.forEach(function(item, i) {
        var pricePart = '';
        if (item.price) {
          hasAnyPrices = true;
          var subtotal = item.price * item.qty;
          estimatedTotal += subtotal;
          pricePart = ' @ KSh ' + Number(item.price).toLocaleString() + ' = KSh ' + Number(subtotal).toLocaleString();
        }
        msg += (i + 1) + '. ' + item.name + ' \u2013 ' + item.qty + ' ' + (item.unit || 'unit') + pricePart + '\n';
      });
      if (hasAnyPrices && estimatedTotal > 0) {
        msg += '\nEstimated Total: KSh ' + Number(estimatedTotal).toLocaleString() + '\n(Subject to confirmation & delivery fees)\n';
      }
    }
    if (pastedList && pastedList.trim()) {
      msg += '\nPasted list:\n' + pastedList.trim() + '\n';
    }
    if (extraNotes && extraNotes.trim()) {
      msg += '\nNotes: ' + extraNotes.trim();
    }
    return encodeURIComponent(msg);
  }
  window.CBH_buildWhatsAppMessage = buildWhatsAppMessage;

  // ── Open / Closed status ──────────────────────────────────
  function getOpenStatus() {
    var now = new Date();
    var utc = now.getTime() + now.getTimezoneOffset() * 60000;
    var nbi = new Date(utc + 3 * 3600000);
    var day = nbi.getDay();
    var mins = nbi.getHours() * 60 + nbi.getMinutes();
    if (day === 0) return { open: false, label: 'Closed today (Sunday)' };
    var opens = 7 * 60 + 30;
    var closes = 18 * 60 + 30;
    if (mins >= opens && mins < closes) return { open: true, label: 'Open Now' };
    if (mins < opens) return { open: false, label: 'Opens at 7:30 am' };
    return { open: false, label: 'Closed for today' };
  }

  // ── Toast ─────────────────────────────────────────────────
  function showToast(msg) {
    var toast = document.getElementById('toast');
    if (!toast) return;
    toast.textContent = msg;
    toast.classList.add('show');
    clearTimeout(toast._timer);
    toast._timer = setTimeout(function() { toast.classList.remove('show'); }, 3000);
  }
  window.CBH_showToast = showToast;

  // ── Scroll progress ───────────────────────────────────────
  function initScrollProgress() {
    var bar = document.getElementById('scroll-progress');
    if (!bar) return;
    window.addEventListener('scroll', function() {
      var pct = window.scrollY / (document.body.scrollHeight - window.innerHeight) * 100;
      bar.style.width = Math.min(100, pct) + '%';
    }, { passive: true });
  }

  // ── Ticker ────────────────────────────────────────────────
  function buildTicker() {
    var ticker = document.getElementById('ticker');
    if (!ticker) return;
    var items = (window.CBH && CBH.business && CBH.business.ticker) ? CBH.business.ticker : [
      'Siaya town, opposite Siaya Law Courts',
      'We supply and deliver',
      'Get a quote on WhatsApp in minutes',
      'Bulk and contractor prices available'
    ];
    var inner = document.createElement('div');
    inner.className = 'ticker-inner';
    var all = items.concat(items);
    inner.innerHTML = all.map(function(t) {
      return '<span class="ticker-item">\u25C6 ' + escHtml(t) + '</span>';
    }).join('');
    ticker.appendChild(inner);
  }

  // ── Header ────────────────────────────────────────────────
  function buildHeader() {
    var header = document.getElementById('site-header');
    if (!header) return;
    var currentPage = window.location.pathname.split('/').pop() || 'index.html';
    if (!currentPage || currentPage === '') currentPage = 'index.html';
    var navLinks = [
      { href: 'index.html',      label: 'Home' },
      { href: 'shop.html',       label: 'Products' },
      { href: 'calculator.html', label: 'Calculators' },
      { href: 'delivery.html',   label: 'Delivery' },
      { href: 'about.html',      label: 'About' },
      { href: 'contact.html',    label: 'Contact' },
      { href: 'faq.html',        label: 'FAQ' }
    ];
    var navHtml = navLinks.map(function(l) {
      var cls = currentPage === l.href ? 'nav-link active' : 'nav-link';
      return '<a href="' + l.href + '" class="' + cls + '">' + l.label + '</a>';
    }).join('');

    header.innerHTML = '\
      <div class="header-inner">\
        <a href="index.html" class="site-logo" aria-label="Cool Base Hardware Home">\
          <span class="logo-mono" aria-hidden="true">CB</span>\
          <span class="logo-text">Cool Base <span class="logo-accent">Hardware</span></span>\
        </a>\
        <nav class="site-nav" id="site-nav" aria-label="Main navigation">' + navHtml + '</nav>\
        <div class="header-actions">\
          <a href="tel:+254708292558" class="header-phone" aria-label="Call us">\
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1-9.4 0-17-7.6-17-17 0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.3 0 .7-.2 1L6.6 10.8z"/></svg>\
            0708 292558\
          </a>\
          <button class="btn-quote-open" id="quote-open-btn" aria-label="Open quote list" aria-expanded="false">\
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M9 5H7a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-2"/><rect x="9" y="3" width="6" height="4" rx="1"/><path d="M9 12h6M9 16h4"/></svg>\
            Quote List\
            <span class="quote-count badge" aria-live="polite" style="display:none">0</span>\
          </button>\
          <button class="hamburger" id="hamburger" aria-label="Open menu" aria-expanded="false" aria-controls="site-nav">\
            <span></span><span></span><span></span>\
          </button>\
        </div>\
      </div>';
  }

  // ── Quote Drawer ──────────────────────────────────────────
  function buildQuoteDrawer() {
    var drawer = document.getElementById('quote-drawer');
    if (!drawer) {
      drawer = document.createElement('div');
      drawer.id = 'quote-drawer';
      drawer.setAttribute('role', 'dialog');
      drawer.setAttribute('aria-modal', 'true');
      drawer.setAttribute('aria-label', 'Your quote list');
      document.body.appendChild(drawer);
    }
    drawer.innerHTML = '\
      <div class="drawer-header">\
        <h2 class="drawer-title">Your Quote List</h2>\
        <button class="drawer-close" id="quote-close-btn" aria-label="Close quote drawer">\
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 6 6 18M6 6l12 12"/></svg>\
        </button>\
      </div>\
      <div class="drawer-body" id="drawer-body"></div>\
      <div class="drawer-footer" id="drawer-footer"></div>';
    renderQuoteDrawerContent();
  }

  function waIcon() {
    return '<svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/><path d="M11.998 2C6.477 2 2 6.477 2 12c0 1.738.449 3.37 1.236 4.788L2 22l5.339-1.21A9.954 9.954 0 0 0 11.998 22c5.523 0 10-4.477 10-10S17.52 2 11.998 2z"/></svg>';
  }

  function renderQuoteDrawerContent() {
    var body = document.getElementById('drawer-body');
    var footer = document.getElementById('drawer-footer');
    if (!body || !footer) return;
    var quote = getQuote();

    if (quote.length === 0) {
      body.innerHTML = '<div class="drawer-empty"><svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" opacity=".35"><path d="M9 5H7a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-2"/><rect x="9" y="3" width="6" height="4" rx="1"/></svg><p>Your quote list is empty.</p><a href="shop.html" class="btn-primary" style="display:inline-block;margin-top:12px">Browse Products</a></div>';
      footer.innerHTML = '';
      return;
    }

    var estimatedTotal = 0;
    var hasPrices = false;
    var itemsHtml = quote.map(function(item) {
      var itemPriceHtml = '';
      if (item.price) {
        hasPrices = true;
        var subtotal = item.price * item.qty;
        estimatedTotal += subtotal;
        itemPriceHtml = '<div style="font-size:0.8rem;color:var(--gold);margin-top:2px;">KSh ' + Number(item.price).toLocaleString() + ' &times; ' + item.qty + ' = <strong>KSh ' + Number(subtotal).toLocaleString() + '</strong></div>';
      } else {
        itemPriceHtml = '<div style="font-size:0.78rem;color:var(--text-muted);margin-top:2px;">Ask for price</div>';
      }

      var thumbHtml = '';
      if (item.img) {
        thumbHtml = '<img src="' + escHtml(item.img) + '" alt="" style="width:44px;height:44px;object-fit:cover;border-radius:8px;border:1px solid var(--border);flex-shrink:0;">';
      } else {
        thumbHtml = '<div style="width:44px;height:44px;border-radius:8px;background:var(--surface);border:1px solid var(--border);display:flex;align-items:center;justify-content:center;font-size:1.2rem;flex-shrink:0;">📦</div>';
      }

      return '<li class="quote-item" data-id="' + escHtml(item.id) + '">' +
        '<div style="display:flex;align-items:center;gap:0.75rem;flex:1;min-width:0;">' +
          thumbHtml +
          '<div class="qi-info" style="min-width:0;flex:1;">' +
            '<span class="qi-name" style="white-space:nowrap;overflow:hidden;text-overflow:ellipsis;display:block;">' + escHtml(item.name) + '</span>' +
            '<span class="qi-unit">per ' + escHtml(item.unit) + '</span>' +
            itemPriceHtml +
          '</div>' +
        '</div>' +
        '<div class="qi-controls">' +
          '<button class="qty-btn" data-action="dec" data-id="' + escHtml(item.id) + '" aria-label="Decrease quantity">\u2212</button>' +
          '<span class="qi-qty">' + item.qty + '</span>' +
          '<button class="qty-btn" data-action="inc" data-id="' + escHtml(item.id) + '" aria-label="Increase quantity">+</button>' +
          '<button class="qty-btn remove-btn" data-action="remove" data-id="' + escHtml(item.id) + '" aria-label="Remove item"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 6 6 18M6 6l12 12"/></svg></button>' +
        '</div></li>';
    }).join('');

    body.innerHTML = '\
      <ul class="quote-list" aria-label="Items in your quote">' + itemsHtml + '</ul>\
      <div class="quote-contact-form">\
        <h3 class="form-section-title">Your Details</h3>\
        <label class="form-label" for="q-name">Name</label>\
        <input id="q-name" class="form-input" type="text" placeholder="Your name" autocomplete="name">\
        <label class="form-label" for="q-phone">Phone</label>\
        <input id="q-phone" class="form-input" type="tel" placeholder="Your phone number" autocomplete="tel">\
        <div class="delivery-toggle" role="group" aria-label="Collection method">\
          <button class="toggle-btn active" data-type="delivery" id="toggle-delivery">🚚 Delivery</button>\
          <button class="toggle-btn" data-type="pickup" id="toggle-pickup">🏪 Pickup</button>\
        </div>\
        <div id="delivery-loc-row">\
          <label class="form-label" for="q-location">Delivery Location</label>\
          <input id="q-location" class="form-input" type="text" placeholder="Town / area / directions">\
        </div>\
        <label class="form-label" for="q-notes">Additional Notes</label>\
        <textarea id="q-notes" class="form-input" rows="3" placeholder="Sizes, quantities, special requirements\u2026"></textarea>\
      </div>';

    footer.innerHTML = '\
      ' + (hasPrices && estimatedTotal > 0 ? '<div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:0.75rem;padding:0.5rem 0.25rem;"><span style="color:var(--text-muted);font-size:0.85rem;">Estimated Total:</span><strong style="color:var(--gold);font-size:1.25rem;font-family:var(--font-heading);">KSh ' + Number(estimatedTotal).toLocaleString() + '</strong></div>' : '') + '\
      <button class="btn-whatsapp full-width" id="send-quote-btn">' + waIcon() + ' Send Quote on WhatsApp</button>\
      <div class="drawer-footer-actions">\
        <a href="quote.html" class="btn-outline" style="flex:1;text-align:center">View Full Quote</a>\
        <button class="btn-ghost" id="clear-quote-btn">Clear All</button>\
      </div>';

    // Delivery toggle
    var deliveryType = 'delivery';
    var locRow = document.getElementById('delivery-loc-row');
    document.querySelectorAll('.toggle-btn').forEach(function(btn) {
      btn.addEventListener('click', function() {
        deliveryType = btn.dataset.type;
        document.querySelectorAll('.toggle-btn').forEach(function(b){ b.classList.remove('active'); });
        btn.classList.add('active');
        if (locRow) locRow.style.display = deliveryType === 'pickup' ? 'none' : 'block';
      });
    });

    // Qty controls
    body.addEventListener('click', function(e) {
      var btn = e.target.closest('[data-action]');
      if (!btn) return;
      var action = btn.dataset.action;
      var id = btn.dataset.id;
      if (action === 'inc') updateQty(id, 1);
      else if (action === 'dec') updateQty(id, -1);
      else if (action === 'remove') removeFromQuote(id);
    });

    // Send on WhatsApp
    var sendBtn = document.getElementById('send-quote-btn');
    if (sendBtn) {
      sendBtn.addEventListener('click', function() {
        var name = (document.getElementById('q-name') || {}).value || '';
        var phone = (document.getElementById('q-phone') || {}).value || '';
        var location = (document.getElementById('q-location') || {}).value || '';
        var notes = (document.getElementById('q-notes') || {}).value || '';
        var msg = buildWhatsAppMessage(name.trim(), phone.trim(), location.trim(), deliveryType, notes.trim(), '');
        window.open('https://wa.me/254708292558?text=' + msg, '_blank', 'noopener');
      });
    }

    // Clear
    var clearBtn = document.getElementById('clear-quote-btn');
    if (clearBtn) {
      clearBtn.addEventListener('click', function() {
        if (window.confirm('Clear your entire quote list?')) clearQuote();
      });
    }
  }

  // ── Mobile bottom bar ─────────────────────────────────────
  function buildMobileBar() {
    var bar = document.getElementById('mobile-bottom-bar');
    if (!bar) return;
    bar.innerHTML = '\
      <a href="tel:+254708292558" class="mob-btn mob-call" aria-label="Call us">\
        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1-9.4 0-17-7.6-17-17 0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.3 0 .7-.2 1L6.6 10.8z"/></svg>\
        <span>Call</span>\
      </a>\
      <a href="https://wa.me/254708292558" class="mob-btn mob-wa" target="_blank" rel="noopener" aria-label="Chat on WhatsApp">\
        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/><path d="M11.998 2C6.477 2 2 6.477 2 12c0 1.738.449 3.37 1.236 4.788L2 22l5.339-1.21A9.954 9.954 0 0 0 11.998 22c5.523 0 10-4.477 10-10S17.52 2 11.998 2z"/></svg>\
        <span>WhatsApp</span>\
      </a>\
      <button class="mob-btn mob-quote" id="mob-quote-btn" aria-label="Open quote list">\
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M9 5H7a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-2"/><rect x="9" y="3" width="6" height="4" rx="1"/></svg>\
        <span>Quote <span class="quote-count" style="display:none"></span></span>\
      </button>';
  }

  // ── Floating buttons ──────────────────────────────────────
  function buildFloatingButtons() {
    var fb = document.getElementById('floating-buttons');
    if (!fb) return;
    fb.innerHTML = '\
      <a href="https://wa.me/254708292558" class="float-btn float-wa" target="_blank" rel="noopener" aria-label="Chat on WhatsApp">\
        <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/><path d="M11.998 2C6.477 2 2 6.477 2 12c0 1.738.449 3.37 1.236 4.788L2 22l5.339-1.21A9.954 9.954 0 0 0 11.998 22c5.523 0 10-4.477 10-10S17.52 2 11.998 2z"/></svg>\
        WhatsApp\
      </a>\
      <a href="tel:+254708292558" class="float-btn float-call" aria-label="Call 0708 292558">\
        <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor"><path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1-9.4 0-17-7.6-17-17 0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.3 0 .7-.2 1L6.6 10.8z"/></svg>\
        Call 0708 292558\
      </a>';
  }

  // ── Footer ────────────────────────────────────────────────
  function buildFooter() {
    var footer = document.getElementById('site-footer');
    if (!footer) return;
    var year = new Date().getFullYear();
    footer.innerHTML = '\
      <div class="footer-inner container">\
        <div class="footer-col footer-brand">\
          <a href="index.html" class="site-logo footer-logo" aria-label="Cool Base Hardware">\
            <span class="logo-mono" aria-hidden="true">CB</span>\
            <span class="logo-text">Cool Base <span class="logo-accent">Hardware</span></span>\
          </a>\
          <p class="footer-tagline">Everything you need to build. Delivered in Siaya.</p>\
          <a href="https://www.facebook.com/Cool-Base-Hardware" target="_blank" rel="noopener" class="footer-social" aria-label="Facebook page">\
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>\
            Facebook\
          </a>\
        </div>\
        <div class="footer-col">\
          <h3 class="footer-heading">Navigate</h3>\
          <ul class="footer-links">\
            <li><a href="index.html">Home</a></li>\
            <li><a href="shop.html">Products</a></li>\
            <li><a href="calculator.html">Calculators</a></li>\
            <li><a href="delivery.html">Delivery</a></li>\
            <li><a href="about.html">About Us</a></li>\
            <li><a href="contact.html">Contact</a></li>\
            <li><a href="faq.html">FAQ</a></li>\
          </ul>\
        </div>\
        <div class="footer-col">\
          <h3 class="footer-heading">Categories</h3>\
          <ul class="footer-links">\
            <li><a href="shop.html?category=building-materials">Building Materials</a></li>\
            <li><a href="shop.html?category=plumbing">Plumbing</a></li>\
            <li><a href="shop.html?category=concrete-aggregates">Concrete Aggregates</a></li>\
            <li><a href="shop.html?category=concrete-blocks">Concrete Blocks</a></li>\
            <li><a href="shop.html?category=deals">Deals &amp; Bundles</a></li>\
          </ul>\
        </div>\
        <div class="footer-col">\
          <h3 class="footer-heading">Contact</h3>\
          <ul class="footer-contact">\
            <li>\
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>\
              Siaya town, opposite the Siaya Law Courts\
            </li>\
            <li>\
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1-9.4 0-17-7.6-17-17 0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.3 0 .7-.2 1L6.6 10.8z"/></svg>\
              <a href="tel:+254708292558">0708 292558</a>\
            </li>\
            <li>\
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>\
              <a href="mailto:coolbasehardware2020@gmail.com">coolbasehardware2020@gmail.com</a>\
            </li>\
            <li>\
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>\
              Mon \u2013 Sat: 7:30 am \u2013 6:30 pm<br>Sunday: Closed\
            </li>\
          </ul>\
        </div>\
      </div>\
      <div class="footer-bottom container">\
        <p>&copy; ' + year + ' Cool Base Hardware. All rights reserved.</p>\
        <p class="footer-credit">Website by Charlton Onyango, <a href="tel:+254182589206">0182 589206</a></p>\
        <p class="footer-links-inline"><a href="faq.html#privacy">Privacy</a> &middot; <a href="faq.html#terms">Terms</a></p>\
      </div>';
  }

  // ── Scroll animations ──────────────────────────────────────
  var _scrollObserver = null;
  function initScrollAnimations() {
    if (window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      document.querySelectorAll('.fade-in').forEach(function(el){ el.classList.add('visible'); });
      return;
    }
    var els = document.querySelectorAll('.fade-in:not(.visible)');
    if (!els.length) return;
    if (!window.IntersectionObserver) {
      els.forEach(function(el){ el.classList.add('visible'); });
      return;
    }
    if (!_scrollObserver) {
      _scrollObserver = new IntersectionObserver(function(entries) {
        entries.forEach(function(e) {
          if (e.isIntersecting) {
            e.target.classList.add('visible');
            _scrollObserver.unobserve(e.target);
          }
        });
      }, { threshold: 0.05, rootMargin: '60px' });
    }
    els.forEach(function(el){ _scrollObserver.observe(el); });
    initSuperPremiumCards();
  }
  window.CBH_initScrollAnimations = initScrollAnimations;

  // ── Super Premium Live Cards (3D Tilt & Cursor Spotlight) ──
  function initSuperPremiumCards() {
    var cardSelector = '.product-card, .cat-card, .step-card, .why-card, .testimonial-card, .about-visit-card, .delivery-note-card';
    var cards = document.querySelectorAll(cardSelector);
    if (!cards.length) return;

    var canHover = window.matchMedia && window.matchMedia('(hover: hover) and (pointer: fine)').matches;
    var prefersReduced = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    cards.forEach(function(card) {
      if (card._tiltInitialized) return;
      card._tiltInitialized = true;

      var rafId = null;
      var curX = 0, curY = 0;
      var targetTiltX = 0, targetTiltY = 0;

      function updateCardTransform() {
        card.style.setProperty('--mouse-x', curX + 'px');
        card.style.setProperty('--mouse-y', curY + 'px');
        if (canHover && !prefersReduced) {
          card.style.setProperty('--tilt-x', targetTiltX + 'deg');
          card.style.setProperty('--tilt-y', targetTiltY + 'deg');
        }
        rafId = null;
      }

      card.addEventListener('mousemove', function(e) {
        var rect = card.getBoundingClientRect();
        curX = e.clientX - rect.left;
        curY = e.clientY - rect.top;

        if (canHover && !prefersReduced) {
          var normX = (curX / rect.width) - 0.5;
          var normY = (curY / rect.height) - 0.5;
          targetTiltX = (normY * -7).toFixed(2);
          targetTiltY = (normX * 7).toFixed(2);
        }

        if (!rafId) {
          rafId = requestAnimationFrame(updateCardTransform);
        }
      });

      card.addEventListener('mouseleave', function() {
        if (rafId) {
          cancelAnimationFrame(rafId);
          rafId = null;
        }
        card.style.setProperty('--tilt-x', '0deg');
        card.style.setProperty('--tilt-y', '0deg');
      });
    });
  }
  window.CBH_initSuperPremiumCards = initSuperPremiumCards;

  // ── Event wiring ──────────────────────────────────────────
  function wireEvents() {
    var openBtn = document.getElementById('quote-open-btn');
    var closeBtn = document.getElementById('quote-close-btn');
    var drawer = document.getElementById('quote-drawer');
    var overlay = document.getElementById('drawer-overlay');
    var mobQuoteBtn = document.getElementById('mob-quote-btn');

    function openDrawer() {
      if (drawer) drawer.classList.add('open');
      if (overlay) overlay.classList.add('show');
      document.body.style.overflow = 'hidden';
      if (openBtn) openBtn.setAttribute('aria-expanded', 'true');
      renderQuoteDrawerContent();
    }
    function closeDrawer() {
      if (drawer) drawer.classList.remove('open');
      if (overlay) overlay.classList.remove('show');
      document.body.style.overflow = '';
      if (openBtn) openBtn.setAttribute('aria-expanded', 'false');
    }

    if (openBtn) openBtn.addEventListener('click', openDrawer);
    if (mobQuoteBtn) mobQuoteBtn.addEventListener('click', openDrawer);
    if (closeBtn) closeBtn.addEventListener('click', closeDrawer);
    if (overlay) overlay.addEventListener('click', closeDrawer);
    document.addEventListener('keydown', function(e) { if (e.key === 'Escape') closeDrawer(); });

    // Hamburger
    var hamburger = document.getElementById('hamburger');
    var nav = document.getElementById('site-nav');
    if (hamburger && nav) {
      hamburger.addEventListener('click', function() {
        var open = nav.classList.toggle('open');
        hamburger.setAttribute('aria-expanded', String(open));
        hamburger.classList.toggle('active', open);
      });
      nav.querySelectorAll('a').forEach(function(a) {
        a.addEventListener('click', function() {
          nav.classList.remove('open');
          hamburger.setAttribute('aria-expanded', 'false');
          hamburger.classList.remove('active');
        });
      });
    }
  }

  // ── Utility ───────────────────────────────────────────────
  function escHtml(str) {
    return String(str)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#39;');
  }
  window.CBH_escHtml = escHtml;

  // ── Animated Background Video (Scroll-Driven Scrubbing) ───
  function buildBackgroundVideo() {
    if (document.getElementById('bg-video-container')) return;

    var container = document.createElement('div');
    container.id = 'bg-video-container';
    container.className = 'bg-video-container';
    container.setAttribute('aria-hidden', 'true');

    container.innerHTML = '\
      <video id="bg-scroll-video" class="bg-scroll-video" preload="auto" muted playsinline webkit-playsinline poster="assets/video/poster.jpg">\
        <source src="assets/video/store-walkthrough.mp4" type="video/mp4">\
        <source src="assets/video/scroll-bg.mp4" type="video/mp4">\
      </video>\
      <div class="bg-video-overlay"></div>\
      <div class="bg-video-grid-pattern"></div>';

    document.body.prepend(container);

    var video = document.getElementById('bg-scroll-video');
    if (!video) return;

    video.muted = true;
    video.defaultMuted = true;
    video.playsInline = true;

    var duration = 10;
    var targetTime = 0.01;
    var currentTime = 0.01;
    var isTicking = false;
    var prefersReduced = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    video.addEventListener('loadedmetadata', function() {
      if (video.duration && !isNaN(video.duration)) {
        duration = video.duration;
      }
      try {
        video.currentTime = 0.01;
      } catch (e) {}
    });

    try {
      video.load();
      video.currentTime = 0.01;
    } catch (e) {}

    function onScroll() {
      var scrollY = window.pageYOffset || document.documentElement.scrollTop || 0;
      var docHeight = (document.documentElement.scrollHeight || document.body.scrollHeight) - window.innerHeight;
      if (docHeight <= 0) return;

      var progress = Math.min(Math.max(scrollY / docHeight, 0), 1);
      targetTime = progress * (duration || 10);

      // Expose dynamic scroll metrics to CSS
      document.documentElement.style.setProperty('--scroll-progress', progress.toFixed(4));
      document.documentElement.style.setProperty('--scroll-y', scrollY + 'px');

      // ── Information Motion With Animations ────────────────
      // Hero content smooth parallax elevation & fade as user descends into store
      var hero = document.querySelector('.hero-content');
      if (hero && !prefersReduced) {
        var heroProgress = Math.min(scrollY / (window.innerHeight * 0.75), 1);
        hero.style.transform = 'translateY(' + (scrollY * 0.22) + 'px)';
        hero.style.opacity = String(Math.max(1 - heroProgress * 1.25, 0));
      }

      // Dynamic parallax float on cards as you scroll past
      var cards = document.querySelectorAll('.cat-card, .product-card, .duracoat-card, .step-card, .why-card, .testimonial-card');
      if (!prefersReduced && cards.length) {
        var vh = window.innerHeight;
        for (var i = 0; i < cards.length; i++) {
          var rect = cards[i].getBoundingClientRect();
          if (rect.top < vh && rect.bottom > 0) {
            var centerDelta = (rect.top + rect.height / 2) - (vh / 2);
            var factor = (i % 2 === 0) ? 0.045 : -0.035;
            var offset = centerDelta * factor;
            cards[i].style.setProperty('--scroll-shift', offset.toFixed(2) + 'px');
          }
        }
      }

      // Background video subtle cinematic scale (1.0 -> 1.12) as camera pushes inside
      if (video && !prefersReduced) {
        var zoom = 1.0 + (progress * 0.12);
        video.style.transform = 'translate(-50%, -50%) scale(' + zoom.toFixed(3) + ')';
      }

      // Fade out scroll prompt as user scrolls
      var prompt = document.querySelector('.scroll-prompt-indicator');
      if (prompt) {
        if (scrollY > 60) {
          prompt.style.opacity = '0';
          prompt.style.pointerEvents = 'none';
        } else {
          prompt.style.opacity = '0.85';
          prompt.style.pointerEvents = 'auto';
        }
      }

      if (!isTicking) {
        isTicking = true;
        requestAnimationFrame(renderVideoFrame);
      }
    }

    function renderVideoFrame() {
      if (prefersReduced) {
        isTicking = false;
        return;
      }

      var diff = targetTime - currentTime;
      if (Math.abs(diff) > 0.008) {
        currentTime += diff * 0.14; // smooth, responsive lerp easing
        if (video.readyState >= 2) {
          try {
            if ('fastSeek' in video) {
              video.fastSeek(currentTime);
            } else {
              video.currentTime = currentTime;
            }
          } catch (e) {}
        }
        requestAnimationFrame(renderVideoFrame);
      } else {
        currentTime = targetTime;
        if (video.readyState >= 2) {
          try {
            if ('fastSeek' in video) {
              video.fastSeek(targetTime);
            } else {
              video.currentTime = targetTime;
            }
          } catch (e) {}
        }
        isTicking = false;
      }
    }

    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll, { passive: true });

    // Initial sync
    setTimeout(onScroll, 150);
    setTimeout(onScroll, 500);
  }

  // ── Init ──────────────────────────────────────────────────
  function init() {
    buildBackgroundVideo();
    buildTicker();
    buildHeader();
    buildQuoteDrawer();
    buildMobileBar();
    buildFloatingButtons();
    buildFooter();
    wireEvents();
    initScrollProgress();
    initScrollAnimations();
    initSuperPremiumCards();
    updateQuoteCount();

    // Auto-detect dynamic content injection (.fade-in elements added after init)
    if (window.MutationObserver) {
      var mutObs = new MutationObserver(function() {
        initScrollAnimations();
        initSuperPremiumCards();
      });
      mutObs.observe(document.body, { childList: true, subtree: true });
    }
    // Backup sweep to ensure all initial elements reveal
    setTimeout(function() {
      initScrollAnimations();
      initSuperPremiumCards();
    }, 200);
    setTimeout(function() {
      initScrollAnimations();
      initSuperPremiumCards();
    }, 600);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

})();
