// Replace Instagram embeds with a clean curated thumbnail grid.
const miccoliInstagram = document.querySelector('#instagram');
if (miccoliInstagram) {
  const reels = [
    { href: 'https://www.instagram.com/reel/DT0sc_lgn_-/', label: 'Open Miccoli Reel 1' },
    { href: 'https://www.instagram.com/reel/DPd5umnDRp1/', label: 'Open Miccoli Reel 2' },
    { href: 'https://www.instagram.com/reel/DOylRVUgsQI/', label: 'Open Miccoli Reel 3' },
    { href: 'https://www.instagram.com/reel/DOEVRw5ghSS/', label: 'Open Miccoli Reel 4' },
    { href: 'https://www.instagram.com/reel/DWjuMCDiCvV/', label: 'Open Miccoli Reel 5' },
    { href: 'https://www.instagram.com/reel/DQcrK_YAuSs/', label: 'Open Miccoli Reel 6' }
  ];

  miccoliInstagram.innerHTML = `
    <div class="section-heading reveal is-visible">
      <p class="eyebrow">Instagram</p>
      <h2 id="instagram-title">From the Miccoli world</h2>
      <p>Recent reels, performances and behind-the-scenes moments from Miccoli.</p>
    </div>
    <div class="instagram-thumb-grid reveal is-visible">
      ${reels.map((reel, index) => `
        <a class="instagram-thumb instagram-thumb-${index + 1}" href="${reel.href}" target="_blank" rel="noopener noreferrer" aria-label="${reel.label}">
          <span class="instagram-reel-icon" aria-hidden="true">▶</span>
          <span class="instagram-hover-text">View Reel</span>
        </a>`).join('')}
    </div>
    <div class="center instagram-cta reveal is-visible">
      <a class="btn btn-secondary" href="https://www.instagram.com/miccoliband" target="_blank" rel="noopener noreferrer">Follow Miccoli on Instagram</a>
    </div>`;
}
