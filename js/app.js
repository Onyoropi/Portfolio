/* =====================================================
   APP.JS — Portfolio Cléo Le Bastard
   ===================================================== */

// ---- CANVAS : réseau de points animé ----
(function () {
  const canvas = document.getElementById('bg-canvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');

  const COUNT    = 55;
  const MAX_DIST = 155;
  let W, H, pts;

  function resize() {
    W = canvas.width  = window.innerWidth;
    H = canvas.height = window.innerHeight;
  }

  function init() {
    pts = Array.from({ length: COUNT }, () => ({
      x:  Math.random() * W,
      y:  Math.random() * H,
      vx: (Math.random() - 0.5) * 0.28,
      vy: (Math.random() - 0.5) * 0.28,
      r:  Math.random() * 1.4 + 0.5,
    }));
  }

  function draw() {
    ctx.clearRect(0, 0, W, H);

    for (let i = 0; i < pts.length; i++) {
      for (let j = i + 1; j < pts.length; j++) {
        const dx = pts[i].x - pts[j].x;
        const dy = pts[i].y - pts[j].y;
        const d  = Math.hypot(dx, dy);
        if (d < MAX_DIST) {
          const a = (1 - d / MAX_DIST) * 0.22;
          ctx.beginPath();
          ctx.moveTo(pts[i].x, pts[i].y);
          ctx.lineTo(pts[j].x, pts[j].y);
          ctx.strokeStyle = `rgba(0,212,255,${a})`;
          ctx.lineWidth   = 0.5;
          ctx.stroke();
        }
      }
    }

    for (const p of pts) {
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
      ctx.fillStyle = 'rgba(0,212,255,0.75)';
      ctx.fill();

      ctx.beginPath();
      ctx.arc(p.x, p.y, p.r * 2.8, 0, Math.PI * 2);
      ctx.fillStyle = 'rgba(0,212,255,0.07)';
      ctx.fill();
    }
  }

  function update() {
    for (const p of pts) {
      p.x += p.vx;
      p.y += p.vy;
      if (p.x < -12) p.x = W + 12;
      if (p.x > W + 12) p.x = -12;
      if (p.y < -12) p.y = H + 12;
      if (p.y > H + 12) p.y = -12;
    }
  }

  function loop() { update(); draw(); requestAnimationFrame(loop); }

  resize();
  init();
  loop();

  window.addEventListener('resize', () => { resize(); init(); }, { passive: true });
})();


// ---- NAV : fond au scroll ----
const nav = document.getElementById('nav');
window.addEventListener('scroll', () => {
  nav.classList.toggle('scrolled', window.scrollY > 20);
}, { passive: true });


// ---- NAV : lien actif selon section visible ----
const sections  = document.querySelectorAll('section[id]');
const navLinks  = document.querySelectorAll('.nav__link');

const sectionObs = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      navLinks.forEach(l =>
        l.classList.toggle('active', l.getAttribute('href') === '#' + e.target.id)
      );
    }
  });
}, { threshold: 0.35 });

sections.forEach(s => sectionObs.observe(s));


// ---- NAV mobile (burger) ----
const burger   = document.getElementById('nav-burger');
const navList  = document.getElementById('nav-links');

burger.addEventListener('click', () => {
  const open = navList.classList.toggle('open');
  burger.classList.toggle('open', open);
  burger.setAttribute('aria-expanded', String(open));
});

navLinks.forEach(l => l.addEventListener('click', () => {
  navList.classList.remove('open');
  burger.classList.remove('open');
  burger.setAttribute('aria-expanded', 'false');
}));


// ---- SCROLL REVEAL ----
const revealEls = document.querySelectorAll('[data-reveal]');

// Stagger pour les enfants de grille/liste
document.querySelectorAll('.skills-grid, .bento, .contact-cards').forEach(parent => {
  parent.querySelectorAll('[data-reveal]').forEach((el, i) => {
    el.style.transitionDelay = `${i * 0.07}s`;
  });
});

const revealObs = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.classList.add('in-view');
      revealObs.unobserve(e.target);
    }
  });
}, { threshold: 0.08, rootMargin: '0px 0px -32px 0px' });

revealEls.forEach(el => {
  if (!el.closest('.hero')) revealObs.observe(el);
});


// ---- FOOTER : année courante ----
const yearEl = document.getElementById('footer-year');
if (yearEl) yearEl.textContent = new Date().getFullYear();
