// Miccoli official website interactions. Keep this file lightweight and framework-free.
const header = document.querySelector('[data-header]');
const navToggle = document.querySelector('[data-nav-toggle]');
const navPanel = document.querySelector('[data-nav-panel]');
const year = document.querySelector('[data-year]');

if (year) year.textContent = new Date().getFullYear();

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
          <a class="instagram-media" href="${link}" target="_blank" rel="noopener noreferrer" aria-label="View Miccoli Reel on Instagram">
            <span class="instagram-play" aria-hidden="true">▶</span>
            <span class="instagram-view">View Reel</span>
          </a>
        </article>`).join('')}
    </div>
    <div class="center instagram-cta reveal">
      <a class="btn btn-secondary" href="https://www.instagram.com/miccoliband" target="_blank" rel="noopener noreferrer">Follow Miccoli on Instagram</a>
    </div>`;

  const instagramStyles = document.createElement('style');
  instagramStyles.textContent = `
    .instagram-section .section-heading > p:last-child { max-width: 650px; }
    .instagram-embed-grid { display:grid; grid-template-columns:repeat(3,minmax(0,1fr)); gap:2px; max-width:980px; margin:2rem auto 0; border:1px solid rgba(208,173,99,.35); background:rgba(208,173,99,.35); }
    .instagram-embed-card { position:relative; aspect-ratio:1/1; overflow:hidden; background-image:url("assets/images/instagram-grid-sprite-uncropped%20(1).jpg?v=1"); background-size:300% 200%; background-repeat:no-repeat; background-color:#111; }
    .instagram-embed-card:nth-child(1) { background-position:0% 0%; }
    .instagram-embed-card:nth-child(2) { background-position:50% 0%; }
    .instagram-embed-card:nth-child(3) { background-position:100% 0%; }
    .instagram-embed-card:nth-child(4) { background-position:0% 100%; }
    .instagram-embed-card:nth-child(5) { background-position:50% 100%; }
    .instagram-embed-card:nth-child(6) { background-position:100% 100%; }
    .instagram-media { position:absolute; inset:0; display:block; color:#fff; text-decoration:none; }
    .instagram-media::after { content:""; position:absolute; inset:0; background:linear-gradient(180deg,transparent 58%,rgba(0,0,0,.72)); pointer-events:none; }
    .instagram-play { position:absolute; top:12px; right:12px; z-index:2; width:30px; height:30px; display:grid; place-items:center; border:1px solid rgba(255,255,255,.75); border-radius:50%; background:rgba(0,0,0,.45); font-size:11px; }
    .instagram-view { position:absolute; left:14px; bottom:12px; z-index:2; font-size:.67rem; letter-spacing:.12em; text-transform:uppercase; }
    .instagram-cta { margin-top:1.5rem; }
    @media (max-width:760px) { .instagram-embed-grid { grid-template-columns:repeat(2,minmax(0,1fr)); } }
  `;
  document.head.appendChild(instagramStyles);
}

const musicSection = document.querySelector('#music');
if (musicSection) {
  const singles = [
    ['Simply the Best — Acoustic', 'https://open.spotify.com/track/74eUpCCPSOJqfEC5LRVpR0?si=4a82d995295b4aa5'],
    ['Can You Hear Me — Acoustic', 'https://open.spotify.com/track/2njYCa2YALOx3IOW8eRi5h?si=bddb6dcb168243e0'],
    ['Silent — Acoustic', 'https://open.spotify.com/track/5JS78daV6NQraaiDRcVlC0?si=9f6e4f134934444b'],
    ['Night', 'https://open.spotify.com/track/1pMn0Tg7aIqM258f8zlN4N?si=9441de49ada14340'],
    ['Devices', 'https://open.spotify.com/track/5p4xV7N5ZQiw9ti7oFJbTL?si=4717dc763f274331'],
    ['Don’t You Worry', 'https://open.spotify.com/track/6dJh5L9IbFrGjxP2XpoJ4m?si=a14cb2ba4cab4ccb'],
    ['If I Could — Acoustic', 'https://open.spotify.com/track/4agUcHh3sbY0zUzCQaNoBa?si=edd118cb10f3407a'],
    ['Home — Stripped', 'https://open.spotify.com/track/7mJsGgzzusl1LrG4fjKtZS?si=9054a4cd30654fa4'],
    ['Lights — Stripped', 'https://open.spotify.com/track/4aop5moZxxYkhXcG7Omgdc?si=e659aa28181d40df'],
    ['Idle Stranger', 'https://open.spotify.com/track/11S6dH5Sklh1cE0UrmvlKl?si=9e009a963b9e4eb0'],
    ['Undo', 'https://open.spotify.com/track/5M3p81lNDVYaVYoIS38fTt?si=72446c60c29649ff']
  ];

  const singlesBlock = document.createElement('div');
  singlesBlock.className = 'singles-carousel-block reveal';
  singlesBlock.innerHTML = `
    <div class="singles-heading">
      <p class="eyebrow">Singles</p>
      <h3>Selected Singles</h3>
    </div>
    <div class="singles-carousel-shell">
      <button class="singles-arrow singles-prev" type="button" aria-label="Previous single">‹</button>
      <div class="singles-track" tabindex="0" aria-label="Miccoli singles carousel">
        ${singles.map(([title, link], index) => `
          <article class="single-slide">
            <div class="single-cover single-cover-${index + 1}" role="img" aria-label="${title} cover artwork"></div>
            <div class="single-copy">
              <p class="release-type">Single</p>
              <h4>${title}</h4>
              <a class="btn btn-primary" href="${link}" target="_blank" rel="noopener noreferrer">Listen on Spotify</a>
            </div>
          </article>`).join('')}
      </div>
      <button class="singles-arrow singles-next" type="button" aria-label="Next single">›</button>
    </div>
    <div class="singles-count" aria-live="polite"><span>1</span> / ${singles.length}</div>`;
  musicSection.appendChild(singlesBlock);

  const singlesStyles = document.createElement('style');
  singlesStyles.textContent = `
    .singles-carousel-block { max-width:940px; margin:4rem auto 0; }
    .singles-heading { text-align:center; margin-bottom:1.5rem; }
    .singles-heading h3 { margin:.3rem 0 0; font-size:clamp(2rem,4vw,3rem); }
    .singles-carousel-shell { position:relative; display:grid; grid-template-columns:46px minmax(0,1fr) 46px; align-items:center; gap:1rem; }
    .singles-track { display:flex; overflow-x:auto; scroll-snap-type:x mandatory; scrollbar-width:none; scroll-behavior:smooth; }
    .singles-track::-webkit-scrollbar { display:none; }
    .single-slide { flex:0 0 100%; scroll-snap-align:start; display:grid; grid-template-columns:minmax(250px,360px) minmax(0,1fr); align-items:center; gap:clamp(2rem,6vw,5rem); padding:clamp(1rem,3vw,2rem); min-height:410px; border:1px solid rgba(208,173,99,.24); background:rgba(246,240,232,.025); }
    .single-cover { width:100%; max-width:340px; aspect-ratio:1; justify-self:center; background-image:url("assets/images/miccoli-singles-carousel-sprite.jpg?v=1"); background-size:400% 300%; background-repeat:no-repeat; background-color:#111; box-shadow:0 18px 46px rgba(0,0,0,.42); }
    .single-cover-1 { background-position:0% 0%; } .single-cover-2 { background-position:33.333% 0%; } .single-cover-3 { background-position:66.667% 0%; } .single-cover-4 { background-position:100% 0%; }
    .single-cover-5 { background-position:0% 50%; } .single-cover-6 { background-position:33.333% 50%; } .single-cover-7 { background-position:66.667% 50%; } .single-cover-8 { background-position:100% 50%; }
    .single-cover-9 { background-position:0% 100%; } .single-cover-10 { background-position:33.333% 100%; } .single-cover-11 { background-position:66.667% 100%; }
    .single-copy { text-align:left; }
    .single-copy h4 { font-size:clamp(1.75rem,4vw,2.8rem); line-height:1.05; margin:.45rem 0 1.4rem; min-height:2.1em; display:flex; align-items:center; }
    .single-copy .btn { min-width:190px; text-align:center; }
    .singles-arrow { width:46px; height:46px; border:1px solid rgba(208,173,99,.65); border-radius:50%; background:rgba(10,14,12,.82); color:var(--gold); font:400 2rem/1 "Cormorant Garamond",serif; cursor:pointer; transition:background .2s ease,color .2s ease,transform .2s ease; }
    .singles-arrow:hover { background:var(--gold); color:#111; transform:scale(1.04); }
    .singles-count { margin-top:1rem; text-align:center; color:var(--gold); letter-spacing:.15em; font-size:.78rem; }
    @media (max-width:760px) {
      .singles-carousel-block { margin-top:3rem; }
      .singles-carousel-shell { grid-template-columns:34px minmax(0,1fr) 34px; gap:.45rem; }
      .singles-arrow { width:34px; height:34px; font-size:1.6rem; }
      .single-slide { grid-template-columns:1fr; gap:1.3rem; min-height:0; padding:1rem 1rem 1.4rem; }
      .single-cover { max-width:min(72vw,300px); }
      .single-copy { text-align:center; }
      .single-copy h4 { justify-content:center; min-height:0; margin:.35rem 0 1rem; }
      .single-copy .btn { width:100%; max-width:280px; }
    }
  `;
  document.head.appendChild(singlesStyles);

  const track = singlesBlock.querySelector('.singles-track');
  const count = singlesBlock.querySelector('.singles-count span');
  const move = (direction) => track?.scrollBy({ left: direction * track.clientWidth, behavior: 'smooth' });
  singlesBlock.querySelector('.singles-prev')?.addEventListener('click', () => move(-1));
  singlesBlock.querySelector('.singles-next')?.addEventListener('click', () => move(1));
  track?.addEventListener('scroll', () => {
    const index = Math.round(track.scrollLeft / Math.max(track.clientWidth, 1));
    if (count) count.textContent = String(Math.min(singles.length, Math.max(1, index + 1)));
  }, { passive: true });
}

const storeSection = document.querySelector('#store');
const videosSection = document.querySelector('#videos');
if (storeSection && videosSection) {
  videosSection.insertAdjacentElement('afterend', storeSection);
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