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

// The Miccoli Story — deliberately placed after Music.
if (musicSection) {
  const storySection = document.createElement('section');
  storySection.className = 'section miccoli-story-section';
  storySection.id = 'about';
  storySection.setAttribute('aria-labelledby', 'miccoli-story-title');
  storySection.innerHTML = `
    <div class="story-hero reveal">
      <img src="assets/images/miccoli-story/Miccoli-Paris-Window-lighter.jpg" alt="Miccoli — Francesca, Adriano and Alessio — photographed together in Paris" loading="lazy">
      <div class="story-hero-shade"></div>
      <div class="story-hero-copy">
        <p class="eyebrow">About Miccoli</p>
        <h2 id="miccoli-story-title">The Miccoli Story</h2>
        <p>Three British-Italian siblings who built their lives around music — touring internationally, writing across continents and ultimately reclaiming control of their creative identity.</p>
      </div>
    </div>

    <div class="story-facts reveal" aria-label="Miccoli career highlights">
      <span>British-Italian sibling trio</span>
      <span>22-date UK arena tour</span>
      <span>International touring</span>
      <span>AFA Records · AWAL/Sony</span>
      <span>Award-winning music videos</span>
    </div>

    <article class="story-chapter reveal">
      <figure class="story-image"><img src="assets/images/miccoli-story/Paris%20b%20%26%20w%20final%20(2).jpg" alt="Miccoli photographed together on a staircase in Paris" loading="lazy"></figure>
      <div class="story-copy">
        <p class="story-number">01</p>
        <p class="eyebrow">Built Together</p>
        <h3>Three siblings. One creative language.</h3>
        <p>Miccoli are Francesca, Adriano and Alessio, a British-Italian sibling trio originally formed in Birmingham and now based in London. They have created together for most of their lives, developing an instinctive musical connection shaped by classical training, their dual-cultural background and years spent writing side by side.</p>
        <p>Their alternative indie sound is built around emotionally honest songwriting, haunting sibling harmonies, restraint and atmosphere — with themes of connection, vulnerability and quiet emotional tension at its centre.</p>
      </div>
    </article>

    <article class="story-chapter story-chapter-reverse reveal">
      <figure class="story-image"><img src="assets/images/miccoli-story/Bench%20Final%202%20(2).jpg" alt="Miccoli seated together during an international photography session" loading="lazy"></figure>
      <div class="story-copy">
        <p class="story-number">02</p>
        <p class="eyebrow">A Global Chapter</p>
        <h3>A life built around music.</h3>
        <p>Writing, recording and performing took Miccoli far beyond the UK. The band toured globally and spent several years living in Southeast Asia, followed by time in Los Angeles, while continuing to write, record and develop their sound.</p>
        <p>Those years gave the music a broader cultural and emotional perspective. Wherever they were based, the work continued: new songs, new recordings, live performances and the visual ideas that would become an increasingly important part of the Miccoli world.</p>
        <p class="story-pull">Wherever the band travelled, the creative process travelled with them.</p>
      </div>
    </article>

    <div class="story-arena reveal">
      <img src="assets/images/miccoli-story/wembey%20stage%203%20(1).jpg" alt="Miccoli preparing onstage inside a UK arena" loading="lazy">
      <div class="story-arena-copy">
        <p class="eyebrow">Arrhythmia</p>
        <h3>Momentum on a larger stage</h3>
        <p>Sponsorship partnerships supported a series of mini tours and helped introduce Miccoli to wider audiences. Following the release of their debut album <em>Arrhythmia</em>, the band joined a 22-date UK arena tour, bringing their music to significantly larger crowds and creating important momentum around the record.</p>
      </div>
    </div>

    <div class="story-live-grid reveal">
      <figure><img src="assets/images/miccoli-story/Miccoli%20Perform%20to%2010,000%20at%20the%2002%20Arena%20in%20London.jpg" alt="Miccoli performing live at the O2 Arena in London" loading="lazy"></figure>
      <figure><img src="assets/images/miccoli-story/Miccoli%20facing%20the%20crowds%20at%2002%20arena%20London%20photo%20by%20Rosie%20Smith.jpg" alt="Miccoli facing the audience from the stage at the O2 Arena in London" loading="lazy"></figure>
    </div>

    <article class="story-break reveal">
      <p class="story-number">03</p>
      <p class="eyebrow">When Everything Stopped</p>
      <h3>A defining interruption</h3>
      <p>Further touring was being scheduled when COVID brought the live entertainment industry to a standstill. Venues closed, planned dates were cancelled and the momentum surrounding <em>Arrhythmia</em> disappeared almost overnight.</p>
      <p>For Miccoli, it was more than a temporary pause. After years of work, international touring and a major UK arena run, the disruption felt as though the band had been knocked ten steps backwards. It was a difficult and deeply sad period that stopped their progress at a crucial moment.</p>
      <p>The siblings gradually rebuilt by returning to the studio, releasing new tracks and travelling again to create cinematic music videos as restrictions eased. Re-establishing that momentum took time, but the creative connection between them never disappeared.</p>
    </article>

    <article class="story-chapter story-chapter-control reveal">
      <div class="story-control-visual" role="img" aria-label="AFA Records and AWAL/Sony — artist-owned creative direction">
        <span>AFA</span>
        <small>Records</small>
        <i></i>
        <b>AWAL / Sony</b>
      </div>
      <div class="story-copy">
        <p class="story-number">04</p>
        <p class="eyebrow">Taking Back Creative Control</p>
        <h3>The industry could support the music — not redefine it.</h3>
        <p>As outside pressure grew to change the band’s appearance, sound and direction, Miccoli increasingly felt disconnected from work that had always been deeply personal. Creative decisions surrounding the music, production and visual identity were moving away from the siblings, and the result no longer felt real to them.</p>
        <p>Through their own label, <strong>AFA Records</strong>, and their relationship with <strong>AWAL/Sony</strong>, Miccoli built a professional structure that allowed them to retain control of songwriting, production, visuals and long-term artistic development while working within an established global music network.</p>
        <p class="story-pull">It was not a retreat from the industry. It was a decision to work within it without surrendering the identity of the band.</p>
      </div>
    </article>

    <div class="story-now reveal">
      <p class="eyebrow">Miccoli Today</p>
      <h3>The next chapter is being written now.</h3>
      <p>Miccoli continue to write and record new material through AFA Records and AWAL/Sony while shaping the next phase of their live work, with plans to return to the road once the right touring schedule is in place.</p>
      <p>Their visual output remains central to the band’s identity. Miccoli’s music videos have won awards across multiple international film festivals, recognising their cinematic direction, storytelling and production.</p>
      <a class="btn btn-primary" href="https://linktr.ee/miccoliband" target="_blank" rel="noopener noreferrer">Listen to Miccoli</a>
    </div>`;

  musicSection.insertAdjacentElement('afterend', storySection);

  const navList = document.querySelector('.nav-links');
  const videosNavItem = navList?.querySelector('a[href="#videos"]')?.closest('li');
  if (navList && videosNavItem && !navList.querySelector('a[href="#about"]')) {
    const aboutItem = document.createElement('li');
    aboutItem.innerHTML = '<a href="#about">About</a>';
    navList.insertBefore(aboutItem, videosNavItem);
  }

  const storyStyles = document.createElement('style');
  storyStyles.textContent = `
    .miccoli-story-section { max-width:1180px; padding-top:clamp(4rem,8vw,7rem); padding-bottom:clamp(4rem,8vw,7rem); }
    .story-hero { position:relative; min-height:clamp(470px,66vw,720px); overflow:hidden; border:1px solid rgba(208,173,99,.22); }
    .story-hero img { position:absolute; inset:0; width:100%; height:100%; object-fit:cover; object-position:center; }
    .story-hero-shade { position:absolute; inset:0; background:linear-gradient(180deg,rgba(5,8,7,.06) 28%,rgba(5,8,7,.9) 100%); }
    .story-hero-copy { position:absolute; left:clamp(1.5rem,6vw,5rem); right:clamp(1.5rem,6vw,5rem); bottom:clamp(1.6rem,5vw,4rem); max-width:760px; }
    .story-hero-copy h2 { margin:.25rem 0 .8rem; font-size:clamp(3rem,8vw,6.5rem); line-height:.88; }
    .story-hero-copy > p:last-child { max-width:680px; margin:0; font-size:clamp(1.05rem,2vw,1.35rem); color:#f6f0e8; }
    .story-facts { display:grid; grid-template-columns:repeat(5,minmax(0,1fr)); border:1px solid rgba(208,173,99,.24); border-top:0; }
    .story-facts span { display:grid; place-items:center; min-height:88px; padding:1rem; text-align:center; color:var(--gold); font-family:"IM Fell English SC","Cormorant Garamond",serif; letter-spacing:.08em; border-right:1px solid rgba(208,173,99,.18); }
    .story-facts span:last-child { border-right:0; }
    .story-chapter { display:grid; grid-template-columns:minmax(0,1.04fr) minmax(0,.96fr); align-items:center; gap:clamp(2rem,7vw,6rem); margin-top:clamp(5rem,10vw,9rem); }
    .story-chapter-reverse .story-image { order:2; }
    .story-image { margin:0; position:relative; }
    .story-image::after { content:""; position:absolute; inset:14px -14px -14px 14px; border:1px solid rgba(208,173,99,.28); z-index:-1; }
    .story-image img { display:block; width:100%; aspect-ratio:4/3; object-fit:cover; }
    .story-copy { max-width:540px; }
    .story-number { margin:0 0 .3rem; color:rgba(208,173,99,.48); font-size:clamp(2.2rem,5vw,4.5rem); line-height:1; font-family:"IM Fell English SC","Cormorant Garamond",serif; }
    .story-copy h3,.story-arena-copy h3,.story-break h3,.story-now h3 { margin:.3rem 0 1.2rem; font-size:clamp(2rem,4.5vw,3.7rem); line-height:1; }
    .story-copy p,.story-break p,.story-now p,.story-arena-copy p { font-size:1.06rem; }
    .story-pull { margin-top:1.6rem; padding:1.2rem 0 1.2rem 1.4rem; border-left:2px solid var(--gold); color:#f6f0e8; font-size:clamp(1.2rem,2.2vw,1.55rem) !important; font-style:italic; }
    .story-arena { position:relative; margin-top:clamp(5rem,10vw,9rem); min-height:clamp(460px,62vw,680px); overflow:hidden; border:1px solid rgba(208,173,99,.2); }
    .story-arena > img { position:absolute; inset:0; width:100%; height:100%; object-fit:cover; }
    .story-arena::after { content:""; position:absolute; inset:0; background:linear-gradient(90deg,rgba(4,6,5,.92) 0%,rgba(4,6,5,.72) 42%,rgba(4,6,5,.08) 75%); }
    .story-arena-copy { position:relative; z-index:1; max-width:560px; padding:clamp(2rem,6vw,5rem); }
    .story-live-grid { display:grid; grid-template-columns:1fr 1fr; gap:1rem; margin-top:1rem; }
    .story-live-grid figure { margin:0; overflow:hidden; }
    .story-live-grid img { display:block; width:100%; height:100%; min-height:320px; aspect-ratio:4/3; object-fit:cover; }
    .story-break { max-width:800px; margin:clamp(5rem,10vw,9rem) auto 0; padding:clamp(2rem,5vw,4rem); text-align:center; border-top:1px solid rgba(208,173,99,.28); border-bottom:1px solid rgba(208,173,99,.28); }
    .story-break p:not(.eyebrow):not(.story-number) { max-width:720px; margin-left:auto; margin-right:auto; }
    .story-chapter-control { grid-template-columns:minmax(280px,.8fr) minmax(0,1.2fr); }
    .story-control-visual { min-height:430px; display:flex; flex-direction:column; align-items:center; justify-content:center; text-align:center; border:1px solid rgba(208,173,99,.28); background:radial-gradient(circle at 50% 35%,rgba(208,173,99,.15),transparent 45%),rgba(246,240,232,.025); }
    .story-control-visual span { color:#f6f0e8; font-family:"IM Fell English SC",serif; font-size:clamp(4rem,9vw,7rem); line-height:.8; }
    .story-control-visual small { color:var(--gold); font-family:"IM Fell English SC",serif; font-size:1.15rem; letter-spacing:.35em; text-transform:uppercase; }
    .story-control-visual i { width:1px; height:74px; margin:1.5rem 0; background:linear-gradient(transparent,var(--gold),transparent); }
    .story-control-visual b { color:#f6f0e8; font-weight:500; letter-spacing:.12em; }
    .story-now { max-width:900px; margin:clamp(5rem,10vw,9rem) auto 0; padding:clamp(2rem,6vw,5rem); text-align:center; border:1px solid rgba(208,173,99,.3); background:linear-gradient(145deg,rgba(208,173,99,.08),rgba(246,240,232,.02)); }
    .story-now p { max-width:720px; margin-left:auto; margin-right:auto; }
    .story-now .btn { margin-top:1rem; }
    @media (max-width:900px) {
      .story-facts { grid-template-columns:repeat(2,minmax(0,1fr)); }
      .story-facts span { border-bottom:1px solid rgba(208,173,99,.18); }
      .story-facts span:last-child { grid-column:1/-1; border-bottom:0; }
      .story-chapter,.story-chapter-control { grid-template-columns:1fr; gap:2.2rem; }
      .story-chapter-reverse .story-image { order:0; }
      .story-copy { max-width:none; }
      .story-arena::after { background:linear-gradient(180deg,rgba(4,6,5,.3),rgba(4,6,5,.92) 72%); }
      .story-arena-copy { position:absolute; left:0; right:0; bottom:0; }
    }
    @media (max-width:620px) {
      .miccoli-story-section { padding-left:1rem; padding-right:1rem; }
      .story-hero { min-height:520px; }
      .story-hero img { object-position:55% center; }
      .story-hero-copy h2 { font-size:clamp(2.8rem,15vw,4.5rem); }
      .story-facts { grid-template-columns:1fr; }
      .story-facts span,.story-facts span:last-child { grid-column:auto; min-height:58px; border-right:0; border-bottom:1px solid rgba(208,173,99,.18); }
      .story-facts span:last-child { border-bottom:0; }
      .story-live-grid { grid-template-columns:1fr; }
      .story-live-grid img { min-height:250px; }
      .story-arena { min-height:600px; }
      .story-arena-copy { padding:1.5rem; }
      .story-control-visual { min-height:330px; }
    }
  `;
  document.head.appendChild(storyStyles);
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
