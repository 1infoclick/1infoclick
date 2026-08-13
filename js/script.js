// ============================================
// Magos Radar landing page — vanilla JS
// Mobile nav, footer year, contact form UX
// ============================================

document.addEventListener('DOMContentLoaded', function () {

  // Footer year
  var yearEl = document.getElementById('year');
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }

  // Mobile nav toggle
  var header = document.querySelector('.site-header');
  var navToggle = document.getElementById('navToggle');

  if (navToggle && header) {
    navToggle.addEventListener('click', function () {
      var isOpen = header.classList.toggle('nav-open');
      navToggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    });

    // Close mobile menu after a nav link is clicked
    document.querySelectorAll('.site-nav a, .header-cta').forEach(function (link) {
      link.addEventListener('click', function () {
        header.classList.remove('nav-open');
        navToggle.setAttribute('aria-expanded', 'false');
      });
    });
  }

  // Contact form: basic client-side feedback.
  // NOTE: GitHub Pages cannot run server code, so the form posts to a
  // form backend (Formspree by default — see README for setup).
  var form = document.getElementById('contactForm');
  var note = document.getElementById('formNote');

  if (form && note) {
    form.addEventListener('submit', function (event) {
      // Let a properly configured Formspree/Netlify-style endpoint handle
      // the actual submission. We only add a friendly inline message here.
      var action = form.getAttribute('action') || '';

      if (action.indexOf('YOUR_FORM_ID') !== -1) {
        // The action hasn't been configured yet — prevent a broken submit
        // and tell whoever is testing the site what to do next.
        event.preventDefault();
        note.textContent = 'Az űrlap még nincs bekötve. Lásd a README.md "Kapcsolatfelvételi űrlap" szakaszát a beállításhoz.';
        note.style.color = '#FF7A50';
        return;
      }

      note.textContent = 'Küldés folyamatban…';
      note.style.color = '';
    });
  }
});
