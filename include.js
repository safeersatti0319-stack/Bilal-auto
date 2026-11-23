// include.js — loads header.html and footer.html into index.html slots
(function () {
  function loadComponent(url, slotId) {
    fetch(url)
      .then(res => {
        if (!res.ok) throw new Error('Failed to load ' + url);
        return res.text();
      })
      .then(html => {
        const slot = document.getElementById(slotId);
        if (slot) slot.innerHTML = html;
      })
      .catch(err => {
        console.error(err);
        const slot = document.getElementById(slotId);
        if (slot) slot.innerHTML =
          '<p style="color:#E63946;text-align:center;padding:20px">' +
          '⚠️ Could not load ' + url + '. Please run this site on a local server (e.g. VS Code Live Server) — opening index.html directly via file:// will block fetch().' +
          '</p>';
      });
  }

  document.addEventListener('DOMContentLoaded', function () {
    loadComponent('header.html', 'header-slot');
    loadComponent('footer.html', 'footer-slot');
  });
})();