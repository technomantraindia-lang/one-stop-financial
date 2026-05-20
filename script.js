/* ===== VIDEO MODAL ===== */
const videoModal = document.getElementById('videoModal');
const modalVideo = document.getElementById('modalVideo');

function openModal(src) {
  modalVideo.src = src;
  videoModal.classList.add('open');
  document.body.style.overflow = 'hidden';
  modalVideo.play();
}

function closeModal(e) {
  // If called from backdrop click, only close if clicking the backdrop itself
  if (e && e.target !== videoModal) return;
  modalVideo.pause();
  modalVideo.src = '';
  videoModal.classList.remove('open');
  document.body.style.overflow = '';
}

// Close on Escape key
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    modalVideo.pause();
    modalVideo.src = '';
    videoModal.classList.remove('open');
    document.body.style.overflow = '';
  }
});

/* ===== NAVBAR SCROLL ===== */
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  if (window.scrollY > 20) navbar.classList.add('scrolled');
  else navbar.classList.remove('scrolled');
});

/* ===== ACTIVE NAV LINK ON SCROLL ===== */
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-link');
window.addEventListener('scroll', () => {
  let current = '';
  sections.forEach(sec => {
    const top = sec.offsetTop - 90;
    if (window.scrollY >= top) current = sec.id;
  });
  navLinks.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href') === '#' + current) link.classList.add('active');
  });
});

/* ===== HAMBURGER MENU ===== */
const hamburger = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobileMenu');
hamburger.addEventListener('click', () => {
  mobileMenu.classList.toggle('open');
  const icon = hamburger.querySelector('.material-symbols-outlined');
  icon.textContent = mobileMenu.classList.contains('open') ? 'close' : 'menu';
});
document.querySelectorAll('.mob-link').forEach(link => {
  link.addEventListener('click', () => {
    mobileMenu.classList.remove('open');
    hamburger.querySelector('.material-symbols-outlined').textContent = 'menu';
  });
});

/* ===== SCROLL REVEAL ===== */
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.10 });
document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));

/* ===== SMOOTH SCROLL FOR NAV LINKS ===== */
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      e.preventDefault();
      const top = target.getBoundingClientRect().top + window.scrollY - 70;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  });
});

/* ===== COUNTER ANIMATION (Trust Bar) ===== */
function animateValue(el, start, end, duration, suffix) {
  let startTimestamp = null;
  const step = (timestamp) => {
    if (!startTimestamp) startTimestamp = timestamp;
    const progress = Math.min((timestamp - startTimestamp) / duration, 1);
    const val = Math.floor(progress * (end - start) + start);
    el.textContent = val + suffix;
    if (progress < 1) window.requestAnimationFrame(step);
  };
  window.requestAnimationFrame(step);
}
const trustTitles = document.querySelectorAll('.trust-title');
let countersRun = false;
const counterObserver = new IntersectionObserver((entries) => {
  if (entries[0].isIntersecting && !countersRun) {
    countersRun = true;
    if (trustTitles[0]) animateValue(trustTitles[0], 0, 12, 1400, '+ Years');
  }
}, { threshold: 0.5 });
const trustBar = document.querySelector('.trust-bar');
if (trustBar) counterObserver.observe(trustBar);
