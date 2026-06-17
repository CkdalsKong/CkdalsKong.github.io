(function () {
  var header   = document.getElementById('site-header');
  var menuBtn  = document.getElementById('menu-toggle');
  var mobileNav = document.getElementById('mobile-nav');

  // sync theme icon on load
  var icon = document.querySelector('.theme-toggle__icon');
  if (icon) icon.textContent = document.documentElement.classList.contains('light-mode') ? '☀️' : '🌙';

  if (!header || !menuBtn || !mobileNav) return;

  // scroll → glass effect
  window.addEventListener('scroll', function () {
    header.classList.toggle('scrolled', window.scrollY > 30);
  }, { passive: true });

  // mobile menu toggle
  menuBtn.addEventListener('click', function () {
    mobileNav.classList.toggle('open');
    menuBtn.classList.toggle('open');
  });

  // scroll-spy
  var sections = document.querySelectorAll('.home-section[id]');
  var navLinks = document.querySelectorAll('.nav-link[data-section]');
  if (sections.length && navLinks.length) {
    var obs = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          navLinks.forEach(function (l) {
            l.classList.toggle('active', l.dataset.section === entry.target.id);
          });
        }
      });
    }, { rootMargin: '-30% 0px -60% 0px' });
    sections.forEach(function (s) { obs.observe(s); });
  }
})();
