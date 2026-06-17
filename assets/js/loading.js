(function () {
  var bar    = document.getElementById('cm-bar');
  var status = document.getElementById('cm-status');
  var pool   = document.getElementById('cm-fragments');
  var loader = document.getElementById('cm-loader');
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
    {top:'7%', left:'3%'},   {top:'9%',  left:'58%'},  {top:'6%',  left:'32%'},
    {top:'20%',left:'74%'},  {top:'30%', left:'1%'},   {top:'68%', left:'2%'},
    {top:'80%',left:'62%'},  {top:'83%', left:'28%'},  {top:'70%', left:'76%'},
    {top:'56%',left:'80%'},  {top:'42%', left:'79%'},  {top:'44%', left:'0%'},
  ];

  var steps = [
    { pct: 10,  msg: 'Waking up one sleep-deprived researcher…' },
    { pct: 28,  msg: 'Compressing 3 years of work (2,404× ratio)…' },
    { pct: 46,  msg: 'Fetching paper acceptance emails…' },
    { pct: 64,  msg: 'Preference-aligning your visit…' },
    { pct: 82,  msg: 'Almost there — defragmenting memories…' },
    { pct: 100, msg: '✦  Welcome.' },
  ];

  var els = frags.map(function(f, i) {
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
      setTimeout(function() {
        els.forEach(function(e){ e.classList.add('out'); });
        setTimeout(function() {
          loader.classList.add('done');
          setTimeout(function(){ loader.remove(); }, 750);
        }, 350);
      }, 550);
    }
  }

  setTimeout(tick, 180);
})();
