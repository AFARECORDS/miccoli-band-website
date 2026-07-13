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

// Add a clean general streaming call-to-action after the releases section.
const musicSection = document.querySelector('#music');
if (musicSection && !document.querySelector('.stream-download-section')) {
  const streamSection = document.createElement('section');
  streamSection.className = 'section stream-download-section';
  streamSection.setAttribute('aria-labelledby', 'stream-download-title');
  streamSection.innerHTML = `
    <div class="stream-download-inner">
      <h2 id="stream-download-title">STREAM / DOWNLOAD</h2>
      <a class="btn btn-primary stream-download-button" href="https://linktr.ee/miccoliband" target="_blank" rel="noopener noreferrer">LISTEN TO MICCOLI</a>
    </div>
  `;
  musicSection.insertAdjacentElement('afterend', streamSection);

  const streamStyles = document.createElement('style');
  streamStyles.textContent = `
    .stream-download-section {
      min-height: 280px;
      display: grid;
      place-items: center;
      text-align: center;
      padding-top: clamp(4rem, 8vw, 7rem);
      padding-bottom: clamp(4rem, 8vw, 7rem);
      background: linear-gradient(180deg, rgba(9,31,24,.98), rgba(11,29,24,.98));
    }
    .stream-download-inner {
      display: grid;
      justify-items: center;
      gap: 1.6rem;
    }
    .stream-download-section h2 {
      margin: 0;
      font-family: "IM Fell English SC", "Cormorant Garamond", serif;
      font-size: clamp(2rem, 5vw, 3.7rem);
      letter-spacing: .035em;
      color: var(--text);
    }
    .stream-download-button {
      min-width: min(310px, 82vw);
      padding: .95rem 1.6rem;
      letter-spacing: .11em;
    }
  `;
  document.head.appendChild(streamStyles);
}

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
