(function () {
  // iOS bfcache: page restored from cache fires pageshow with persisted=true
  window.addEventListener('pageshow', function (e) {
    if (e.persisted) {
      var l = document.getElementById('cm-loader');
      if (l) l.remove();
    }
  });

  // on any reload (Cmd+R / Cmd+Shift+R), reset so animation plays again
  if ((performance.getEntriesByType('navigation')[0] || {}).type === 'reload') {
    sessionStorage.removeItem('cm-loaded');
  }

  var loader = document.getElementById('cm-loader');
  if (sessionStorage.getItem('cm-loaded')) {
    if (loader) loader.remove();
    return;
  }

  var bar    = document.getElementById('cm-bar');
  var status = document.getElementById('cm-status');
  var pool   = document.getElementById('cm-fragments');
  if (!loader || !bar || !status || !pool) return;

  var frags = [
    { icon: '📄', text: 'EPIC · ICML 2026' },
    { icon: '⚡', text: 'On-Device AI' },
    { icon: '🎓', text: 'UAI Lab · UNIST' },
    { icon: '🔬', text: 'Personalized RAG' },
    { icon: '🏆', text: 'NRF Fellowship' },
    { icon: '🤖', text: 'AI Agents & Memory' },
    { icon: '📊', text: '2,404× memory reduction' },
    { icon: '🏅', text: 'Outstanding Paper Award' },
    { icon: '🧠', text: 'Preference-Aligned Memory' },
    { icon: '📱', text: 'ΔAgent · Mobile GUI' },
    { icon: '💡', text: 'Edge Intelligence' },
    { icon: '🎯', text: 'Personalized AI' },
  ];

  var positions = [
    {top:'7%',  left:'3%'},   {top:'9%',  left:'60%'},  {top:'6%',  left:'33%'},
    {top:'20%', left:'75%'},  {top:'32%', left:'1%'},   {top:'68%', left:'2%'},
    {top:'80%', left:'60%'},  {top:'83%', left:'26%'},  {top:'70%', left:'77%'},
    {top:'56%', left:'81%'},  {top:'43%', left:'80%'},  {top:'44%', left:'0%'},
  ];

  var steps = [
    { pct: 10,  msg: 'Retrieving Changmin from distributed memory…' },
    { pct: 28,  msg: 'Compressing 3 years of work (2,404× ratio)…' },
    { pct: 46,  msg: 'Fetching paper acceptance emails…' },
    { pct: 64,  msg: 'Preference-aligning your visit…' },
    { pct: 82,  msg: 'Almost there — defragmenting memories…' },
    { pct: 100, msg: '✦  Welcome.' },
  ];

  var els = frags.map(function (f, i) {
    var el = document.createElement('span');
    el.className = 'cm-frag';
    el.innerHTML = f.icon + ' ' + f.text;
    var p = positions[i];
    el.style.top  = p.top;
    el.style.left = p.left;
    pool.appendChild(el);
    return el;
  });

  var fragIdx = 0;
  function popFrag() {
    if (fragIdx < els.length) { els[fragIdx++].classList.add('in'); }
  }

  function convergeAll() {
    // move each fragment toward the viewport center
    var cx = window.innerWidth  / 2;
    var cy = window.innerHeight / 2;
    els.forEach(function (el) {
      var rect = el.getBoundingClientRect();
      var dx = cx - (rect.left + rect.width  / 2);
      var dy = cy - (rect.top  + rect.height / 2);
      el.style.transform = 'translate(' + dx + 'px, ' + dy + 'px) scale(0.5)';
      el.classList.add('converge');
    });
  }

  var stepIdx = 0;
  function tick() {
    if (stepIdx >= steps.length) return;
    var s = steps[stepIdx++];
    bar.style.width    = s.pct + '%';
    status.textContent = s.msg;
    popFrag(); popFrag();
    if (stepIdx < steps.length) {
      setTimeout(tick, 420);
    } else {
      setTimeout(function () {
        convergeAll();
        setTimeout(function () {
          loader.classList.add('done');
          sessionStorage.setItem('cm-loaded', '1');
          setTimeout(function () { loader.remove(); }, 700);
        }, 500);
      }, 400);
    }
  }

  setTimeout(tick, 180);
})();
