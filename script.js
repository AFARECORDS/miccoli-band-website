// Miccoli official website interactions. Keep this file lightweight and framework-free.
const header = document.querySelector('[data-header]');
const navToggle = document.querySelector('[data-nav-toggle]');
const navPanel = document.querySelector('[data-nav-panel]');
const year = document.querySelector('[data-year]');

if (year) {
  year.textContent = new Date().getFullYear();
}

function updateHeaderState() {
  header?.classList.toggle('is-scrolled', window.scrollY > 24);
}

updateHeaderState();
window.addEventListener('scroll', updateHeaderState, { passive: true });

navToggle?.addEventListener('click', () => {
  const isOpen = navPanel?.classList.toggle('is-open');
  navToggle.setAttribute('aria-expanded', String(Boolean(isOpen)));
});

navPanel?.addEventListener('click', (event) => {
  const target = event.target;
  if (target instanceof HTMLAnchorElement && navPanel.classList.contains('is-open')) {
    navPanel.classList.remove('is-open');
    navToggle?.setAttribute('aria-expanded', 'false');
  }
});

// Reveal sections as they enter the viewport. Falls back gracefully if unsupported.
const revealItems = document.querySelectorAll('.reveal');
if ('IntersectionObserver' in window) {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.16 });

  revealItems.forEach((item) => observer.observe(item));
} else {
  revealItems.forEach((item) => item.classList.add('is-visible'));
}
