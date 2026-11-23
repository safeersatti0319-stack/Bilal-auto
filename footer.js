// ============ FOOTER COMPONENT (Pure JS) ============
(function () {
  // ---------- 1. Inject CSS ----------
  const css = `
    .site-footer {
      background: #070707;
      color: #b9bdc2;
      padding: 60px 0 120px;
      border-top: 2px solid #E63946;
      font-family: 'Inter', sans-serif;
    }
    .footer-wrap {
      max-width: 1200px; margin: 0 auto;
      padding: 0 24px;
      display: grid;
      grid-template-columns: 2fr 1fr 1.4fr;
      gap: 40px;
    }
    .footer-col h4 {
      color: #fff; font-family: 'Oswald', sans-serif;
      font-size: 1.15rem; letter-spacing: 1px;
      margin-bottom: 14px; text-transform: uppercase;
    }
    .footer-col p { margin: 6px 0; font-size: .92rem; line-height: 1.6; }
    .footer-col a {
      color: #b9bdc2;
      text-decoration: none;
      transition: color .25s;
    }
    .footer-col a:hover { color: #E63946; }
    .footer-rating { color: #E63946; font-weight: 700; margin-top: 12px; }
    .footer-bottom {
      max-width: 1200px; margin: 40px auto 0;
      padding: 20px 24px 0;
      border-top: 1px solid rgba(255,255,255,.08);
      display: flex; justify-content: space-between;
      flex-wrap: wrap; gap: 10px;
      font-size: .82rem; color: #7a7f86;
    }
    .credit { color: #5a5f66; }
    .mobile-bar {
      position: fixed; bottom: 0; left: 0; right: 0;
      display: none; z-index: 999;
      background: #0A0A0A;
      border-top: 1px solid rgba(230,57,70,.4);
    }
    .mobile-bar a {
      flex: 1; text-align: center;
      padding: 14px; color: #fff;
      text-decoration: none; font-weight: 700;
      font-size: .95rem;
    }
    .mb-call { background: #E63946; }
    .mb-wa   { background: #25D366; }
    .mb-dir  { background: #151515; }
    @media (max-width: 860px) {
      .footer-wrap { grid-template-columns: 1fr; gap: 30px; }
      .mobile-bar { display: flex; }
      .site-footer { padding-bottom: 80px; }
    }
  `;
  const styleTag = document.createElement('style');
  styleTag.id = 'footer-styles';
  styleTag.textContent = css;
  document.head.appendChild(styleTag);

  // ---------- 2. Inject HTML ----------
  const footerHTML = `
    <footer class="site-footer">
      <div class="footer-wrap">
        <div class="footer-col">
          <h4>Bilal Auto F-10</h4>
          <p>24/7 professional auto repair inside Malik Autos Parts &amp; Repair, F-10/4 Markaz, Islamabad.</p>
          <p class="footer-rating">⭐ 4.963 Google Rating</p>
        </div>
        <div class="footer-col">
          <h4>Quick Links</h4>
          <a href="#services">Services</a>
          <a href="#why">Why Us</a>
          <a href="#reviews">Reviews</a>
          <a href="#contact">Contact</a>
        </div>
        <div class="footer-col">
          <h4>Contact</h4>
          <p>📍 51, Street 51, Markaz F-10/4, Islamabad</p>
          <p>📞 <a href="tel:03471305582">0347 1305582</a></p>
          <p>💬 <a href="https://wa.me/923471305582?text=Assalam%20o%20Alaikum%20Bilal%20Auto%20F-10%2C%20mujhe%20car%20repair%20ki%20zarurat%20hai."
                   target="_blank" rel="noopener">WhatsApp</a></p>
          <p>🕐 Open 24 Hours</p>
        </div>
      </div>
      <div class="footer-bottom">
        <p>© <span id="year"></span> Bilal Auto F-10. All rights reserved.</p>
        <p class="credit">Images: Unsplash (free license)</p>
      </div>
      <div class="mobile-bar">
        <a href="tel:03471305582" class="mb-call">📞 Call</a>
        <a href="https://wa.me/923471305582?text=Assalam%20o%20Alaikum%20Bilal%20Auto%20F-10%2C%20mujhe%20car%20repair%20ki%20zarurat%20hai."
           target="_blank" rel="noopener" class="mb-wa">💬 WhatsApp</a>
        <a href="https://www.google.com/maps/search/?api=1&query=Malik+Autos+F-10+Markaz+Islamabad"
           target="_blank" rel="noopener" class="mb-dir">📍 Directions</a>
      </div>
    </footer>
  `;

  // Mount footer at end of body
  function mountFooter() {
    const wrapper = document.createElement('div');
    wrapper.innerHTML = footerHTML.trim();
    document.body.appendChild(wrapper.firstChild);

    // Year
    const y = document.getElementById('year');
    if (y) y.textContent = new Date().getFullYear();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', mountFooter);
  } else {
    mountFooter();
  }
})();
