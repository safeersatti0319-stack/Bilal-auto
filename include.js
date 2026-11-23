// include.js — loads header.html & footer.html, re-runs their inline <script> tags
(function () {
  function runScripts(container) {
    container.querySelectorAll('script').forEach(old => {
      const s = document.createElement('script');
      for (const attr of old.attributes) s.setAttribute(attr.name, attr.value);
      s.textContent = old.textContent;
      old.parentNode.replaceChild(s, old);
    });
  }

  function loadComponent(url, slotId) {
    fetch(url)
      .then(res => {
        if (!res.ok) throw new Error('Failed to load ' + url);
        return res.text();
      })
      .then(html => {
        const slot = document.getElementById(slotId);
        if (!slot) return;
        slot.innerHTML = html;
        runScripts(slot);
      })
      .catch(err => {
        console.error(err);
        const slot = document.getElementById(slotId);
        if (slot) slot.innerHTML =
          '<p style="color:#E63946;text-align:center;padding:20px;font-family:sans-serif">' +
          '⚠️ Could not load ' + url + '. Please run this site on a local server (e.g. VS Code Live Server) — opening index.html via file:// blocks fetch().</p>';
      });
  }

  document.addEventListener('DOMContentLoaded', function () {
    loadComponent('header.html', 'header-slot');
    loadComponent('footer.html', 'footer-slot');
  });
})();
