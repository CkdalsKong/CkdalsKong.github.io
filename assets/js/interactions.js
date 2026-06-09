(function () {
  'use strict';

  /* Scroll reveal */
  var revealObs = new IntersectionObserver(function (entries) {
    entries.forEach(function (e) {
      if (e.isIntersecting) {
        e.target.classList.add('is-visible');
        revealObs.unobserve(e.target);
      }
    });
  }, { threshold: 0.08 });
  document.querySelectorAll('[data-animate]').forEach(function (el) {
    revealObs.observe(el);
  });

  /* Publication abstract toggle */
  document.querySelectorAll('.pub-abstract-toggle').forEach(function (btn) {
    btn.addEventListener('click', function () {
      var id  = btn.getAttribute('data-target');
      var box = document.getElementById(id);
      if (!box) return;
      var open = box.classList.toggle('is-open');
      btn.textContent = open ? 'Abstract ▲' : 'Abstract ▼';
    });
  });

  /* Typewriter */
  var typedEl = document.querySelector('.typed-text');
  if (typedEl) {
    var phrases = [
      'Personalized RAG.',
      'On-Device AI.',
      'Efficient LLMs.',
      'AI Agents & Memory.',
    ];
    var pi = 0, ci = 0, deleting = false;
    function tick() {
      var phrase = phrases[pi];
      typedEl.textContent = deleting ? phrase.slice(0, ci--) : phrase.slice(0, ci++);
      var wait = deleting ? 45 : 90;
      if (!deleting && ci > phrase.length)     { wait = 1800; deleting = true; }
      else if (deleting && ci < 0)             { deleting = false; ci = 0; pi = (pi + 1) % phrases.length; wait = 300; }
      setTimeout(tick, wait);
    }
    tick();
  }

})();
