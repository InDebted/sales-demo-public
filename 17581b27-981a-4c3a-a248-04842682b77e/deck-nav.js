/* deck-nav.js — section navigation layer for <deck-stage>.
   Adds a persistent section bar and a full-screen contents overlay.
   Reads data-section / data-label off the slotted <section> slides and
   drives the stage through its public goTo() API. Chrome only: marked
   data-omelette-chrome and hidden in print/export. */
(function () {
  if (window.__deckNavLoaded) return;
  window.__deckNavLoaded = true;

  var NAVY = '#000244', WARM = '#474cde', MINT = '#76ebe2', HERON = '#5b6178';

  function css() {
    return '\
#deck-nav,#deck-nav-toc{font-family:Manrope,system-ui,sans-serif;-webkit-font-smoothing:antialiased;}\
#deck-nav{position:fixed;top:0;left:0;right:0;z-index:2147483000;display:flex;align-items:center;gap:16px;\
padding:14px 20px;box-sizing:border-box;background:rgba(255,255,255,0.82);backdrop-filter:blur(16px);\
-webkit-backdrop-filter:blur(16px);border-bottom:1px solid rgba(0,2,68,0.08);\
transition:opacity 180ms ease,transform 180ms ease;}\
#deck-nav[data-hidden]{opacity:0;transform:translateY(-100%);pointer-events:none;}\
#deck-nav-tools{position:fixed;left:14px;bottom:12px;z-index:2147483000;display:flex;align-items:center;gap:6px;\
transition:opacity 180ms ease;}\
#deck-nav-tools[data-hidden]{opacity:0;pointer-events:none;}\
#deck-nav-tools .dn-btn{flex:none;display:flex;align-items:center;gap:7px;height:28px;padding:0 11px;border:1px solid rgba(0,2,68,0.10);\
background:rgba(255,255,255,0.72);backdrop-filter:blur(10px);-webkit-backdrop-filter:blur(10px);color:' + HERON + ';\
font:600 12px/1 Manrope,sans-serif;border-radius:999px;cursor:pointer;opacity:0.72;\
transition:opacity 140ms ease,background 140ms ease,color 140ms ease;}\
#deck-nav-tools .dn-btn:hover{opacity:1;background:#fff;color:' + NAVY + ';}\
#deck-nav .dn-secs{flex:1;display:flex;align-items:center;gap:4px;overflow:hidden;justify-content:center;}\
#deck-nav .dn-sec{position:relative;flex:none;display:flex;flex-direction:column;gap:6px;padding:6px 14px 5px;border:0;background:none;\
cursor:pointer;border-radius:8px;transition:background 140ms ease;}\
#deck-nav .dn-sec:hover{background:rgba(71,76,222,0.07);}\
#deck-nav .dn-sec span{font:600 13.5px/1 Manrope,sans-serif;color:' + HERON + ';white-space:nowrap;transition:color 140ms ease;}\
#deck-nav .dn-sec i{display:block;height:3px;border-radius:2px;background:rgba(0,2,68,0.12);overflow:hidden;}\
#deck-nav .dn-sec i b{display:block;height:100%;width:0;background:' + WARM + ';border-radius:2px;transition:width 200ms ease;}\
#deck-nav .dn-sec[data-active] span{color:' + NAVY + ';font-weight:800;}\
#deck-nav .dn-count{flex:none;font:600 13.5px/1 Manrope,sans-serif;color:' + HERON + ';font-variant-numeric:tabular-nums;min-width:58px;text-align:right;}\
#deck-nav .dn-step{flex:none;display:flex;gap:4px;}\
#deck-nav .dn-step button{width:36px;height:36px;display:grid;place-items:center;border:1px solid rgba(0,2,68,0.14);background:#fff;\
border-radius:999px;cursor:pointer;color:' + NAVY + ';transition:background 140ms ease;}\
#deck-nav .dn-step button:hover{background:#f6f7fb;}\
#deck-nav-toc{position:fixed;inset:0;z-index:2147483001;background:' + NAVY + ';color:#fff;display:flex;flex-direction:column;\
padding:56px 64px 40px;box-sizing:border-box;overflow:auto;opacity:0;pointer-events:none;transition:opacity 160ms ease;}\
#deck-nav-toc[data-open]{opacity:1;pointer-events:auto;}\
#deck-nav-toc .dn-head{display:flex;align-items:flex-end;justify-content:space-between;margin-bottom:36px;flex:none;}\
#deck-nav-toc .dn-eyebrow{font:700 12px/1 Manrope,sans-serif;letter-spacing:0.14em;text-transform:uppercase;color:' + MINT + ';}\
#deck-nav-toc h2{margin:10px 0 0;font:800 38px/1.05 Manrope,sans-serif;letter-spacing:-0.02em;}\
#deck-nav-toc .dn-close{height:38px;padding:0 18px;border-radius:999px;border:1px solid rgba(255,255,255,0.3);background:none;color:#fff;\
font:600 14px/1 Manrope,sans-serif;cursor:pointer;transition:background 140ms ease;}\
#deck-nav-toc .dn-close:hover{background:rgba(255,255,255,0.1);}\
#deck-nav-toc .dn-grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(240px,1fr));gap:28px 32px;align-content:start;}\
#deck-nav-toc .dn-col h3{margin:0 0 12px;padding-bottom:10px;border-bottom:1px solid rgba(255,255,255,0.18);\
font:800 12px/1 Manrope,sans-serif;letter-spacing:0.14em;text-transform:uppercase;color:' + MINT + ';}\
#deck-nav-toc .dn-item{display:flex;gap:12px;align-items:baseline;width:100%;text-align:left;border:0;background:none;color:rgba(255,255,255,0.82);\
font:500 15px/1.35 Manrope,sans-serif;padding:7px 10px;margin-left:-10px;border-radius:8px;cursor:pointer;transition:background 130ms ease,color 130ms ease;}\
#deck-nav-toc .dn-item:hover{background:rgba(255,255,255,0.09);color:#fff;}\
#deck-nav-toc .dn-item[data-current]{background:' + WARM + ';color:#fff;font-weight:700;}\
#deck-nav-toc .dn-item em{font-style:normal;font-variant-numeric:tabular-nums;font-weight:700;color:rgba(255,255,255,0.45);min-width:22px;}\
#deck-nav-toc .dn-item[data-current] em{color:' + MINT + ';}\
@media print{#deck-nav,#deck-nav-toc,#deck-nav-tools{display:none !important;}}';
  }

  function findStage() { return document.querySelector('deck-stage'); }

  function label(slide, i) {
    var l = slide.getAttribute('data-label') || ('Slide ' + (i + 1));
    return l.replace(/^\d+\s+/, '').replace(/\s*·\s*/, ' — ');
  }

  function init(stage) {
    var style = document.createElement('style');
    style.textContent = css();
    document.head.appendChild(style);

    var bar = document.createElement('nav');
    bar.id = 'deck-nav';
    bar.setAttribute('data-omelette-chrome', '');
    var tools = document.createElement('div');
    tools.id = 'deck-nav-tools';
    tools.setAttribute('data-omelette-chrome', '');
    document.body.appendChild(tools);
    var toc = document.createElement('div');
    toc.id = 'deck-nav-toc';
    toc.setAttribute('data-omelette-chrome', '');
    document.body.appendChild(bar);
    document.body.appendChild(toc);

    if (!sessionStorage.getItem('deckNavRailTouched')) stage.setAttribute('no-rail', '');

    var slides = [], groups = [], secOf = [];

    function collect() {
      slides = Array.prototype.slice.call(stage.querySelectorAll(':scope > section'));
      groups = []; secOf = [];
      slides.forEach(function (s, i) {
        var name = s.getAttribute('data-section') || 'Slides';
        var g = groups[groups.length - 1];
        if (!g || g.name !== name) { g = { name: name, items: [] }; groups.push(g); }
        g.items.push(i);
        secOf[i] = groups.length - 1;
      });
    }

    function go(i) { if (stage.goTo) stage.goTo(i); }

    function toggleFull() {
      if (document.fullscreenElement) {
        if (document.exitFullscreen) document.exitFullscreen();
      } else if (document.documentElement.requestFullscreen) {
        document.documentElement.requestFullscreen().catch(function () {});
      }
    }

    function buildBar() {
      bar.innerHTML = '';
      var btn = document.createElement('button');
      btn.className = 'dn-btn';
      btn.type = 'button';
      btn.innerHTML = '<svg width="14" height="14" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"><path d="M2 4h12M2 8h12M2 12h12"/></svg>Contents';
      btn.onclick = function (e) { e.stopPropagation(); openToc(true); };
      tools.innerHTML = '';
      tools.appendChild(btn);

      var thumbs = document.createElement('button');
      thumbs.className = 'dn-btn';
      thumbs.type = 'button';
      thumbs.title = 'Show or hide the slide thumbnails';
      var syncThumbs = function () {
        var off = stage.hasAttribute('no-rail');
        thumbs.innerHTML = '<svg width="14" height="14" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.5"><rect x="1.5" y="2" width="4" height="4" rx="1"/><rect x="1.5" y="10" width="4" height="4" rx="1"/><rect x="8" y="2" width="6.5" height="12" rx="1"/></svg>' + (off ? 'Thumbnails' : 'Hide thumbnails');
      };
      thumbs.onclick = function (e) {
        e.stopPropagation();
        if (stage.hasAttribute('no-rail')) stage.removeAttribute('no-rail');
        else stage.setAttribute('no-rail', '');
        sessionStorage.setItem('deckNavRailTouched', '1');
        syncThumbs();
        window.dispatchEvent(new Event('resize'));
      };
      syncThumbs();
      tools.appendChild(thumbs);

      var full = document.createElement('button');
      full.className = 'dn-btn';
      full.type = 'button';
      full.title = 'Present full screen (F)';
      var syncFull = function () {
        var on = !!document.fullscreenElement;
        full.innerHTML = on
          ? '<svg width="14" height="14" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M6 1.5v3.5H2.5M10 14.5V11h3.5M1.5 10H5v3.5M14.5 6H11V2.5"/></svg>Exit full screen'
          : '<svg width="14" height="14" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M2 5.5V2h3.5M14 10.5V14h-3.5M10.5 2H14v3.5M5.5 14H2v-3.5"/></svg>Full screen';
      };
      full.onclick = function (e) { e.stopPropagation(); toggleFull(); };
      syncFull();
      document.addEventListener('fullscreenchange', function () {
        syncFull();
        if (document.fullscreenElement) { stage.setAttribute('no-rail', ''); syncThumbs(); }
        window.dispatchEvent(new Event('resize'));
      });
      tools.appendChild(full);

      var secs = document.createElement('div');
      secs.className = 'dn-secs';
      groups.forEach(function (g, gi) {
        var b = document.createElement('button');
        b.className = 'dn-sec';
        b.type = 'button';
        b.dataset.gi = String(gi);
        b.title = g.name + ' — ' + g.items.length + (g.items.length === 1 ? ' slide' : ' slides');
        b.innerHTML = '<span></span><i><b></b></i>';
        b.querySelector('span').textContent = g.name;
        b.onclick = function (e) { e.stopPropagation(); go(g.items[0]); };
        secs.appendChild(b);
      });
      bar.appendChild(secs);

      var step = document.createElement('div');
      step.className = 'dn-step';
      step.innerHTML = '<button type="button" aria-label="Previous slide"><svg width="14" height="14" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><path d="M10 3L5 8l5 5"/></svg></button>' +
        '<button type="button" aria-label="Next slide"><svg width="14" height="14" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><path d="M6 3l5 5-5 5"/></svg></button>';
      step.children[0].onclick = function (e) { e.stopPropagation(); stage.prev && stage.prev(); };
      step.children[1].onclick = function (e) { e.stopPropagation(); stage.next && stage.next(); };
      bar.appendChild(step);

      var count = document.createElement('div');
      count.className = 'dn-count';
      bar.appendChild(count);
    }

    function buildToc() {
      toc.innerHTML = '';
      var head = document.createElement('div');
      head.className = 'dn-head';
      head.innerHTML = '<div><div class="dn-eyebrow">Block / Afterpay RFP</div><h2>Jump to any part of the presentation</h2></div>' +
        '<button class="dn-close" type="button">Close (Esc)</button>';
      head.querySelector('.dn-close').onclick = function (e) { e.stopPropagation(); openToc(false); };
      toc.appendChild(head);

      var grid = document.createElement('div');
      grid.className = 'dn-grid';
      groups.forEach(function (g) {
        var col = document.createElement('div');
        col.className = 'dn-col';
        var h = document.createElement('h3');
        h.textContent = g.name;
        col.appendChild(h);
        g.items.forEach(function (idx) {
          var it = document.createElement('button');
          it.className = 'dn-item';
          it.type = 'button';
          it.dataset.idx = String(idx);
          it.innerHTML = '<em></em><span></span>';
          it.querySelector('em').textContent = String(idx + 1);
          it.querySelector('span').textContent = label(slides[idx], idx);
          it.onclick = function (e) { e.stopPropagation(); go(idx); openToc(false); };
          col.appendChild(it);
        });
        grid.appendChild(col);
      });
      toc.appendChild(grid);
    }

    function sync(i) {
      var gi = secOf[i];
      bar.querySelectorAll('.dn-sec').forEach(function (b) {
        var j = +b.dataset.gi, g = groups[j], fill = b.querySelector('b');
        if (j === gi) {
          b.setAttribute('data-active', '');
          fill.style.width = ((g.items.indexOf(i) + 1) / g.items.length * 100) + '%';
        } else {
          b.removeAttribute('data-active');
          fill.style.width = j < gi ? '100%' : '0%';
        }
      });
      var c = bar.querySelector('.dn-count');
      if (c) c.textContent = (i + 1) + ' / ' + slides.length;
      toc.querySelectorAll('.dn-item').forEach(function (el) {
        if (+el.dataset.idx === i) el.setAttribute('data-current', '');
        else el.removeAttribute('data-current');
      });
    }

    function openToc(on) {
      if (on) toc.setAttribute('data-open', '');
      else toc.removeAttribute('data-open');
      show();
    }

    var hideTimer = null;
    function show() {
      bar.removeAttribute('data-hidden');
      tools.removeAttribute('data-hidden');
      clearTimeout(hideTimer);
      hideTimer = setTimeout(function () {
        if (!toc.hasAttribute('data-open')) {
          bar.setAttribute('data-hidden', '');
          tools.setAttribute('data-hidden', '');
        }
      }, 2600);
    }
    document.addEventListener('mousemove', show, true);
    document.addEventListener('keydown', function (e) {
      var t = e.target;
      if (t && (t.isContentEditable || /^(INPUT|TEXTAREA|SELECT)$/.test(t.tagName || ''))) return;
      if (e.key === 'Escape') { openToc(false); return; }
      if ((e.key === 'f' || e.key === 'F') && !e.metaKey && !e.ctrlKey) {
        e.preventDefault();
        toggleFull();
        return;
      }
      if ((e.key === 'c' || e.key === 'C') && !e.metaKey && !e.ctrlKey) {
        e.preventDefault();
        openToc(!toc.hasAttribute('data-open'));
        return;
      }
      show();
    });

    function rebuild() {
      collect();
      buildBar();
      buildToc();
      sync(stage.index || 0);
    }

    rebuild();
    stage.addEventListener('slidechange', function (e) { sync(e.detail.index); show(); });
    new MutationObserver(function () {
      if (stage.querySelectorAll(':scope > section').length !== slides.length) rebuild();
    }).observe(stage, { childList: true });
  }

  var tries = 0;
  (function wait() {
    var s = findStage();
    if (s && s.goTo) { init(s); return; }
    if (tries++ < 300) setTimeout(wait, 100);
  })();
})();
