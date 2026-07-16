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

document.querySelectorAll('.streaming-links').forEach((streamingLinks) => {
  streamingLinks.innerHTML = '<a class="btn btn-primary listen-miccoli-btn" href="https://linktr.ee/miccoliband" target="_blank" rel="noopener noreferrer">Listen to Miccoli</a>';
});

const tourSection = document.querySelector('#live');
const tourPanel = tourSection?.querySelector('.tour-panel');
if (tourPanel) {
  tourPanel.innerHTML = `
    <a class="bit-widget-initializer"
      data-artist-name="id_236152"
      data-background-color="transparent"
      data-separator-color="rgba(208,173,99,.28)"
      data-text-color="#f6f0e8"
      data-font="Cormorant Garamond"
      data-auto-style="false"
      data-display-local-dates="true"
      data-local-dates-position="tab"
      data-display-past-dates="false"
      data-display-details="true"
      data-display-lineup="false"
      data-display-start-time="true"
      data-social-share-icon="false"
      data-display-limit="8"
      data-date-format="MMM. D, YYYY"
      data-date-orientation="horizontal"
      data-date-border-color="#d0ad63"
      data-date-border-width="1px"
      data-date-capital-color="#d0ad63"
      data-date-capital-text-color="#111111"
      data-date-month-color="#f6f0e8"
      data-date-month-text-color="#111111"
      data-date-day-color="#f6f0e8"
      data-date-day-text-color="#111111"
      data-event-ticket-cta-size="medium"
      data-event-custom-ticket-text="Tickets"
      data-event-ticket-text="Tickets"
      data-event-ticket-icon="false"
      data-event-ticket-cta-text-color="#111111"
      data-event-ticket-cta-bg-color="#d0ad63"
      data-event-ticket-cta-border-color="#d0ad63"
      data-event-ticket-cta-border-width="1px"
      data-event-ticket-cta-border-radius="0px"
      data-sold-out-button-text-color="#111111"
      data-sold-out-button-background-color="#f6f0e8"
      data-sold-out-button-border-color="#f6f0e8"
      data-sold-out-button-clickable="true"
      data-event-rsvp-position="left"
      data-event-rsvp-cta-size="medium"
      data-event-rsvp-only-show-icon="false"
      data-event-rsvp-text="Remind Me"
      data-event-rsvp-icon="false"
      data-event-rsvp-cta-text-color="#f6f0e8"
      data-event-rsvp-cta-bg-color="transparent"
      data-event-rsvp-cta-border-color="#d0ad63"
      data-event-rsvp-cta-border-width="1px"
      data-event-rsvp-cta-border-radius="0px"
      data-follow-section-position="top"
      data-follow-section-alignment="center"
      data-follow-section-header-text="Track Miccoli for tour announcements"
      data-follow-section-cta-size="medium"
      data-follow-section-cta-text="Track Artist"
      data-follow-section-cta-icon="true"
      data-follow-section-cta-text-color="#111111"
      data-follow-section-cta-bg-color="#d0ad63"
      data-follow-section-cta-border-color="#d0ad63"
      data-follow-section-cta-border-width="1px"
      data-follow-section-cta-border-radius="0px"
      data-play-my-city-position="bottom"
      data-play-my-city-alignment="center"
      data-play-my-city-header-text="Don't see your city?"
      data-play-my-city-cta-size="medium"
      data-play-my-city-cta-text="Request a Show"
      data-play-my-city-cta-icon="true"
      data-play-my-city-cta-text-color="#f6f0e8"
      data-play-my-city-cta-bg-color="transparent"
      data-play-my-city-cta-border-color="#d0ad63"
      data-play-my-city-cta-border-width="1px"
      data-play-my-city-cta-border-radius="0px"
      data-language="en"
      data-layout-breakpoint="900"
      data-app-id="miccoli-official-site"
      data-affil-code=""
      data-bit-logo-position="bottomRight"
      data-bit-logo-color="#d0ad63">
    </a>
    <p class="tour-fallback"><a href="https://www.bandsintown.com/a/236152-miccoli" target="_blank" rel="noopener noreferrer">View Miccoli on Bandsintown</a></p>`;

  const tourStyles = document.createElement('style');
  tourStyles.textContent = `
    #live .tour-panel { padding: clamp(1.25rem, 3vw, 2rem); }
    #live .tour-fallback { text-align: center; margin: 1.25rem 0 0; }
    #live .tour-fallback a { color: var(--gold); text-decoration: none; }
    #live .tour-fallback a:hover { text-decoration: underline; }
    #live .bit-widget { font-family: "Cormorant Garamond", serif !important; }
  `;
  document.head.appendChild(tourStyles);

  const widgetScript = document.createElement('script');
  widgetScript.src = 'https://widgetv3.bandsintown.com/main.min.js';
  widgetScript.async = true;
  document.body.appendChild(widgetScript);
}

const instagramSection = document.querySelector('#instagram');
if (instagramSection) {
  const instagramStylesheet = document.createElement('link');
  instagramStylesheet.rel = 'stylesheet';
  instagramStylesheet.href = 'instagram-layout.css?v=5';
  document.head.appendChild(instagramStylesheet);

  const reelLinks = [
    'https://www.instagram.com/reel/DT0sc_lgn_-/',
    'https://www.instagram.com/reel/DPd5umnDRp1/',
    'https://www.instagram.com/reel/DOylRVUgsQI/',
    'https://www.instagram.com/reel/DOEVRw5ghSS/',
    'https://www.instagram.com/reel/DWjuMCDiCvV/',
    'https://www.instagram.com/reel/DQcrK_YAuSs/'
  ];

  instagramSection.innerHTML = `
    <div class="section-heading reveal">
      <p class="eyebrow">Instagram</p>
      <h2 id="instagram-title">From the Miccoli world</h2>
      <p>Recent reels, performances and behind-the-scenes moments from Miccoli.</p>
    </div>
    <div class="instagram-embed-grid">
      ${reelLinks.map((link) => `
        <article class="instagram-embed-card reveal">
          <a class="instagram-media" href="${link}" target="_blank" rel="noopener noreferrer" aria-label="View Miccoli Reel on Instagram"></a>
        </article>`).join('')}
    </div>
    <div class="center instagram-cta reveal">
      <a class="btn btn-secondary" href="https://www.instagram.com/miccoliband" target="_blank" rel="noopener noreferrer">Follow Miccoli on Instagram</a>
    </div>`;
}

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
