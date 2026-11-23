// ============ HEADER COMPONENT (Pure JS) ============
(function () {
  // ---------- 1. Inject CSS ----------
  const css = `
    .site-header {
      position: fixed;
      top: 0; left: 0; right: 0;
      z-index: 1000;
      background: rgba(10,10,10,0.85);
      backdrop-filter: blur(12px);
      border-bottom: 1px solid rgba(230,57,70,0.25);
      transition: background .3s, box-shadow .3s;
      font-family: 'Inter', sans-serif;
    }
    .site-header.scrolled {
      background: rgba(10,10,10,0.98);
      box-shadow: 0 4px 24px rgba(0,0,0,.6);
    }
    .header-wrap {
      max-width: 1200px;
      margin: 0 auto;
      padding: 14px 24px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 16px;
    }
    .brand {
      display: flex; align-items: center; gap: 10px;
      text-decoration: none; color: #fff;
      font-family: 'Oswald', sans-serif;
      font-size: 1.25rem; letter-spacing: 1px;
    }
    .brand-mark {
      display: grid; place-items: center;
      width: 38px; height: 38px;
      background: #E63946; color: #fff;
      font-weight: 700; border-radius: 8px;
      box-shadow: 0 0 18px rgba(230,57,70,.6);
    }
    .brand-text b { color: #E63946; }
    .nav { display: flex; gap: 26px; }
    .nav a {
      color: #cfd3d8; text-decoration: none;
      font-size: .92rem; font-weight: 600;
      letter-spacing: .5px; text-transform: uppercase;
      position: relative; transition: color .25s;
    }
    .nav a::after {
      content: ''; position: absolute;
      left: 0; bottom: -6px; height: 2px; width: 0;
      background: #E63946; transition: width .3s;
    }
    .nav a:hover { color: #fff; }
    .nav a:hover::after { width: 100%; }
    .header-call {
      background: #E63946; color: #fff;
      padding: 10px 18px; border-radius: 8px;
      text-decoration: none; font-weight: 700;
      font-size: .9rem;
      animation: callPulse 2s infinite;
    }
    @keyframes callPulse {
      0%,100% { box-shadow: 0 0 0 0 rgba(230,57,70,.7); }
      50%     { box-shadow: 0 0 0 10px rgba(230,57,70,0); }
    }
    .header-wa {
      background: #25D366; color: #fff;
      padding: 10px 18px; border-radius: 8px;
      text-decoration: none; font-weight: 700;
      font-size: .9rem;
      transition: transform .25s, box-shadow .25s;
    }
    .header-wa:hover {
      transform: translateY(-2px);
      box-shadow: 0 0 18px rgba(37,211,102,.6);
    }
    .nav-toggle {
      display: none; flex-direction: column; gap: 5px;
      background: none; border: none; cursor: pointer; padding: 6px;
    }
    .nav-toggle span {
      width: 26px; height: 2px; background: #fff; transition: .3s;
    }
    .nav-toggle.open span:nth-child(1){ transform: translateY(7px) rotate(45deg); }
    .nav-toggle.open span:nth-child(2){ opacity: 0; }
    .nav-toggle.open span:nth-child(3){ transform: translateY(-7px) rotate(-45deg); }
    @media (max-width: 900px) {
      .nav {
        position: fixed; top: 66px; right: 0;
        flex-direction: column; gap: 0;
        background: #0A0A0A; width: 220px;
        padding: 10px 0;
        transform: translateX(120%); transition: transform .35s;
        border-left: 1px solid rgba(230,57,70,.3);
        height: calc(100vh - 66px);
      }
      .nav.open { transform: translateX(0); }
      .nav a { padding: 14px 24px; }
      .nav-toggle { display: flex; }
      .header-call, .header-wa { display: none; }
    }
  `;
  const styleTag = document.createElement('style');
  styleTag.id = 'header-styles';
  styleTag.textContent = css;
  document.head.appendChild(styleTag);

  // ---------- 2. Inject HTML ----------
  const headerHTML = `
    <header class="site-header" id="siteHeader">
      <div class="header-wrap">
        <a href="#home" class="brand">
          <span class="brand-mark">B</span>
          <span class="brand-text">Bilal Auto <b>F-10</b></span>
        </a>
        <nav class="nav" id="mainNav">
          <a href="#home">Home</a>
          <a href="#services">Services</a>
          <a href="#why">Why Us</a>
          <a href="#reviews">Reviews</a>
          <a href="#contact">Contact</a>
        </nav>
        <a href="tel:03471305582" class="header-call">📞 0347 1305582</a>
        <a href="https://wa.me/923471305582?text=Assalam%20o%20Alaikum%20Bilal%20Auto%20F-10%2C%20mujhe%20car%20repair%20ki%20zarurat%20hai."
           target="_blank" rel="noopener"
           class="header-wa" aria-label="WhatsApp">💬 WhatsApp</a>
        <button class="nav-toggle" id="navToggle" aria-label="Menu">
          <span></span><span></span><span></span>
        </button>
      </div>
    </header>
  `;

  // Insert header at top of body (as first child)
  function mountHeader() {
    const wrapper = document.createElement('div');
    wrapper.innerHTML = headerHTML.trim();
    document.body.insertBefore(wrapper.firstChild, document.body.firstChild);

    // ---------- 3. Behaviour ----------
    const header = document.getElementById('siteHeader');
    const toggle = document.getElementById('navToggle');
    const nav = document.getElementById('mainNav');

    window.addEventListener('scroll', () => {
      header.classList.toggle('scrolled', window.scrollY > 40);
    });

    toggle.addEventListener('click', () => {
      nav.classList.toggle('open');
      toggle.classList.toggle('open');
    });

    nav.querySelectorAll('a').forEach(a =>
      a.addEventListener('click', () => {
        nav.classList.remove('open');
        toggle.classList.remove('open');
      })
    );
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', mountHeader);
  } else {
    mountHeader();
  }
})();
