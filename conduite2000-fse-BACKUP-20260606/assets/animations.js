/* =========================================================
   CONDUITE 2000 — Animations runtime
   Count-up numbers + auto scroll-reveal w/ stagger
   ========================================================= */

(() => {
  const prefersReducedMotion =
    window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (prefersReducedMotion) return;

  // ─── 1) Count-up numbers ──────────────────────────────────────────────
  // For each target element, find the first text-node that begins with a
  // number, replace just that numeric chunk with a <span.count-up>, and
  // animate from 0 → target when it scrolls into view. Other content
  // inside the parent (unit spans, currency symbols, etc.) stays put.

  const fmtFR = new Intl.NumberFormat('fr-FR');

  function buildCounter(host) {
    // Skip if the text contains a range like "15–25"
    if (/\d[\u2013\u2014\-]\d/.test(host.textContent)) return null;

    const walker = document.createTreeWalker(host, NodeFilter.SHOW_TEXT);
    let node;
    while ((node = walker.nextNode())) {
      const m = node.textContent.match(/(\d[\d\s\u00a0,.]*)/);
      if (!m) continue;
      const raw = m[1].trim();
      const num = parseInt(raw.replace(/[\s\u00a0,.]/g, ''), 10);
      if (!Number.isFinite(num)) continue;

      const before = node.textContent.slice(0, m.index);
      const after  = node.textContent.slice(m.index + m[0].length);
      const parent = node.parentNode;
      const span = document.createElement('span');
      span.className = 'count-up';
      span.dataset.target = String(num);
      span.dataset.thousands = /[\s\u00a0]/.test(raw) ? '1' : '0';
      span.textContent = '0';

      const frag = document.createDocumentFragment();
      if (before) frag.appendChild(document.createTextNode(before));
      frag.appendChild(span);
      if (after)  frag.appendChild(document.createTextNode(after));
      parent.replaceChild(frag, node);
      return span;
    }
    return null;
  }

  function animateCount(span) {
    const target = parseInt(span.dataset.target, 10);
    const useThousands = span.dataset.thousands === '1';
    const fmt = useThousands ? (n => fmtFR.format(n)) : (n => String(n));
    // Larger numbers get a longer runway so they don't blur past
    const duration = Math.min(2200, 900 + Math.log10(Math.max(1, target)) * 350);
    const start = performance.now();
    span.classList.add('counting');
    function step(now) {
      const t = Math.min(1, (now - start) / duration);
      const eased = 1 - Math.pow(1 - t, 3);
      const value = Math.round(target * eased);
      span.textContent = fmt(value);
      if (t < 1) requestAnimationFrame(step);
      else {
        span.textContent = fmt(target);
        span.classList.remove('counting');
      }
    }
    requestAnimationFrame(step);
  }

  const counterObserver = new IntersectionObserver((entries) => {
    entries.forEach((e) => {
      if (!e.isIntersecting) return;
      animateCount(e.target);
      counterObserver.unobserve(e.target);
    });
  }, { threshold: 0.4 });

  const COUNT_SELECTORS = [
    '.tarif .price b',
  ];

  document.querySelectorAll(COUNT_SELECTORS.join(',')).forEach((host) => {
    const span = buildCounter(host);
    if (span) counterObserver.observe(span);
  });

  // ─── 2) Auto scroll-reveal w/ stagger ─────────────────────────────────

  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach((e) => {
      if (!e.isIntersecting) return;
      e.target.classList.add('in');
      revealObserver.unobserve(e.target);
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

  // [selector, extra classes] — order matters; first applies, later sets
  // can still tweak classes on the same element.
  const REVEAL_RULES = [
    ['.section-head',           'anim'],
    ['.formation',              'anim'],
    ['.tarif',                  'anim'],
    ['.bento',                  'anim'],
    ['.agency',                 'anim'],
    ['.docs',                   'anim slide-left'],
    ['.label',                  'anim slide-right'],
    ['.contact-form',           'anim slide-left'],
    ['.contact-side > *',       'anim slide-right'],
    ['.perm1',                  'anim scale'],
    ['.marquee',                'anim fade'],
    ['.tarifs-foot',            'anim'],
    ['.footer-grid > *',        'anim'],
  ];

  REVEAL_RULES.forEach(([sel, cls]) => {
    document.querySelectorAll(sel).forEach((el) => {
      cls.split(/\s+/).forEach((c) => el.classList.add(c));
      revealObserver.observe(el);
    });
  });

  // Stagger children inside grids by setting --i on each
  const GRIDS = [
    '.formations-grid',
    '.tarifs-grid',
    '.agencies-grid',
    '.about-bento',
    '.contact-side',
    '.footer-grid',
  ];
  GRIDS.forEach((sel) => {
    document.querySelectorAll(sel).forEach((grid) => {
      [...grid.children].forEach((child, i) => {
        if (child.classList.contains('anim')) {
          child.style.setProperty('--i', String(Math.min(i, 6)));
        }
      });
    });
  });

  // ─── 3) Hero h1 line splitting ────────────────────────────────────────
  // Wrap each visual line (separated by <br>) into a .line span so the
  // CSS staggered rise can animate per line.
  document.querySelectorAll('.hero h1').forEach((h1) => {
    if (h1.dataset.split === '1') return;
    h1.dataset.split = '1';
    const out = document.createDocumentFragment();
    let buf = document.createElement('span');
    buf.className = 'line';
    [...h1.childNodes].forEach((n) => {
      if (n.nodeName === 'BR') {
        out.appendChild(buf);
        out.appendChild(document.createElement('br'));
        buf = document.createElement('span');
        buf.className = 'line';
      } else {
        buf.appendChild(n.cloneNode(true));
      }
    });
    if (buf.childNodes.length) out.appendChild(buf);
    h1.innerHTML = '';
    h1.appendChild(out);
  });

  // ─── 4) Parallax-lite on hero visual ──────────────────────────────────
  // Tilt the iso scene a touch in response to mouse — only at the top
  // of the page so it doesn't fight with scroll. Disabled on touch.
  const visual = document.querySelector('.hero-visual');
  const scene  = visual && visual.querySelector('.scene');
  if (visual && scene && !matchMedia('(hover: none)').matches) {
    let rafId = null;
    let targetX = -35, targetY = 55;          // base scene rotation
    let currentX = -35, currentY = 55;
    const base = { x: -35, y: 55 };
    function loop() {
      currentX += (targetX - currentX) * 0.08;
      currentY += (targetY - currentY) * 0.08;
      scene.style.transform =
        `rotateX(${currentY}deg) rotateZ(${currentX}deg)`;
      if (Math.abs(targetX - currentX) > 0.05 ||
          Math.abs(targetY - currentY) > 0.05) {
        rafId = requestAnimationFrame(loop);
      } else { rafId = null; }
    }
    visual.addEventListener('mousemove', (e) => {
      if (window.scrollY > 600) return;
      const r = visual.getBoundingClientRect();
      const dx = (e.clientX - r.left) / r.width - 0.5;
      const dy = (e.clientY - r.top)  / r.height - 0.5;
      targetX = base.x + dx * 8;
      targetY = base.y + dy * 4;
      if (!rafId) rafId = requestAnimationFrame(loop);
    });
    visual.addEventListener('mouseleave', () => {
      targetX = base.x; targetY = base.y;
      if (!rafId) rafId = requestAnimationFrame(loop);
    });
  }
})();
