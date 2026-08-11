(() => {
  const initStoryCarousel = () => {
    const carousel = document.querySelector('.miccoli-story-section');
    if (!carousel || carousel.closest('.story-carousel-shell')) return;

    const chapterOne = carousel.querySelector('.story-chapter:not(.story-chapter-reverse):not(.story-chapter-control) .story-copy');
    if (chapterOne) {
      const paragraphs = chapterOne.querySelectorAll('p:not(.story-number):not(.eyebrow)');
      if (paragraphs[0]) {
        paragraphs[0].textContent = 'Miccoli are Francesca, Adriano and Alessio, a British-Italian sibling trio originally formed in Birmingham and now based in London.';
      }
      if (paragraphs[1]) {
        paragraphs[1].textContent = 'Creating together from an early age, they developed an instinctive musical connection shaped by classical training, their shared history and their British-Italian background.';
      }
      if (!chapterOne.querySelector('.chapter-one-final-line')) {
        const finalLine = document.createElement('p');
        finalLine.className = 'chapter-one-final-line';
        finalLine.textContent = 'Their sound is centred on emotionally direct songwriting, close sibling harmonies and atmospheric alternative production.';
        chapterOne.appendChild(finalLine);
      }
    }

    const chapterTwo = carousel.querySelector('.story-chapter.story-chapter-reverse .story-copy');
    if (chapterTwo) {
      const heading = chapterTwo.querySelector('h3');
      if (heading) heading.textContent = 'A life shaped beyond home';

      const paragraphs = chapterTwo.querySelectorAll('p:not(.story-number):not(.eyebrow):not(.story-pull):not(.chapter-two-final-line)');
      if (paragraphs[0]) {
        paragraphs[0].textContent = 'Miccoli’s story soon moved beyond the UK. The siblings spent several years working across Southeast Asia under sponsorship deals, performing at venues, promoting products and creating short-form advertising content alongside their music.';
      }
      if (paragraphs[1]) {
        paragraphs[1].textContent = 'That international chapter later took them to California, where they lived for a period while working under another sponsorship arrangement and touring across the state.';
      }

      let finalLine = chapterTwo.querySelector('.chapter-two-final-line');
      if (!finalLine) {
        finalLine = document.createElement('p');
        finalLine.className = 'chapter-two-final-line';
        const pull = chapterTwo.querySelector('.story-pull');
        if (pull) chapterTwo.insertBefore(finalLine, pull);
        else chapterTwo.appendChild(finalLine);
      }
      finalLine.textContent = 'Those experiences pushed the band into very different environments — part live act, part creative team, part brand collaborators — while they continued writing, recording and developing the sound and visual identity that would become distinctly Miccoli.';

      const pull = chapterTwo.querySelector('.story-pull');
      if (pull) pull.textContent = 'Different places changed the view, but the music remained the constant.';

      if (!document.querySelector('#chapter-two-fit-rules')) {
        const style = document.createElement('style');
        style.id = 'chapter-two-fit-rules';
        style.textContent = `
          .story-chapter-reverse .story-copy {
            justify-content: flex-start !important;
            padding: .85rem 1.7rem .9rem !important;
          }
          .story-chapter-reverse .story-number {
            font-size: 1rem !important;
            line-height: 1 !important;
            margin: 0 0 .35rem !important;
          }
          .story-chapter-reverse .eyebrow {
            font-size: .72rem !important;
            line-height: 1.1 !important;
            margin: 0 0 .45rem !important;
          }
          .story-chapter-reverse .story-copy h3 {
            font-size: clamp(1.55rem, 2.3vw, 2.05rem) !important;
            line-height: 1.02 !important;
            margin: 0 0 .55rem !important;
          }
          .story-chapter-reverse .story-copy p:not(.story-number):not(.eyebrow):not(.story-pull) {
            font-size: clamp(.74rem, .9vw, .82rem) !important;
            line-height: 1.34 !important;
            margin: 0 0 .5rem !important;
          }
          .story-chapter-reverse .story-pull {
            margin: .05rem 0 0 !important;
            padding: .35rem 0 .35rem .7rem !important;
            font-size: clamp(.78rem, .95vw, .88rem) !important;
            line-height: 1.3 !important;
          }
          @media (max-width:760px) {
            .story-chapter-reverse .story-copy {
              padding: .85rem !important;
            }
            .story-chapter-reverse .story-copy p:not(.story-number):not(.eyebrow):not(.story-pull) {
              font-size: .78rem !important;
              line-height: 1.32 !important;
              margin-bottom: .42rem !important;
            }
          }
        `;
        document.head.appendChild(style);
      }
    }

    const arrhythmiaChapter = carousel.querySelector('.story-arena .story-arena-copy');
    if (arrhythmiaChapter) {
      const body = arrhythmiaChapter.querySelector('p:not(.eyebrow):not(.story-number)');
      if (body) {
        body.innerHTML = 'While touring on a series of international mini-tours, Miccoli began reaching wider audiences and building momentum beyond the UK. Following the release of their debut album <em>Arrhythmia</em>, the band joined a 22-date UK arena tour, bringing their music to significantly larger crowds and marking an important step forward in their live career.';
      }
    }

    const covidChapter = carousel.querySelector('.story-break');
    if (covidChapter) {
      const heading = covidChapter.querySelector('h3');
      if (heading) heading.textContent = 'A defining interruption';

      const paragraphs = covidChapter.querySelectorAll('p:not(.story-number):not(.eyebrow)');
      if (paragraphs[0]) {
        paragraphs[0].innerHTML = 'Further touring was being scheduled when COVID brought the live entertainment industry to a standstill. Venues closed, planned dates were cancelled and the momentum surrounding <em>Arrhythmia</em> disappeared almost overnight.';
      }
      if (paragraphs[1]) {
        paragraphs[1].textContent = 'For Miccoli, it was more than a temporary pause. After years of work, international touring and a major UK arena run, the disruption felt like a sudden reversal of everything they had been building. It was a difficult period that halted their progress at a crucial moment.';
      }
      if (paragraphs[2]) {
        paragraphs[2].textContent = 'The siblings gradually rebuilt by returning to the studio, releasing new music and travelling again to create cinematic music videos as restrictions eased. Re-establishing that momentum took time, but the creative connection between them never disappeared.';
      }
    }

    const chapterFour = carousel.querySelector('.story-chapter.story-chapter-control .story-copy');
    if (chapterFour) {
      const eyebrow = chapterFour.querySelector('.eyebrow');
      const heading = chapterFour.querySelector('h3');
      const paragraphs = chapterFour.querySelectorAll('p:not(.story-number):not(.eyebrow):not(.story-pull)');
      const pull = chapterFour.querySelector('.story-pull');

      if (eyebrow) eyebrow.textContent = 'Creative Independence';
      if (heading) heading.textContent = 'Building the right structure around the music';
      if (paragraphs[0]) {
        paragraphs[0].textContent = 'After years of writing, recording and working across different parts of the music industry, Miccoli reached a point where protecting their creative direction became increasingly important. The siblings established AFA Records as their own independent label, creating a structure through which they could release music, develop projects and manage their long-term vision while keeping creative decisions within the band.';
      }
      if (paragraphs[1]) {
        paragraphs[1].innerHTML = 'Through <strong>AFA Records</strong>, Miccoli work with <strong>AWAL</strong>, part of <strong>Sony Music</strong>, giving their releases access to an established global distribution and music-services network while allowing the band to remain independently driven.';
      }
      if (pull) {
        pull.textContent = 'For Miccoli, the goal was never independence for its own sake. It was about building the right structure around the music — one that could support its growth without changing what made it Miccoli in the first place.';
      }

      const chapterFourPanel = carousel.querySelector('.story-chapter.story-chapter-control .story-control-visual');
      if (chapterFourPanel) {
        chapterFourPanel.setAttribute('aria-label', 'AFA Records, AWAL and Sony Music');
        chapterFourPanel.style.setProperty('background-image', 'url("data:image/jpeg;base64,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")', 'important');
        chapterFourPanel.style.setProperty('background-position', 'center', 'important');
        chapterFourPanel.style.setProperty('background-repeat', 'no-repeat', 'important');
        chapterFourPanel.style.setProperty('background-size', 'cover', 'important');
        Array.from(chapterFourPanel.children).forEach((child) => child.style.setProperty('display', 'none', 'important'));
      }
    }

    const shell = document.createElement('div');
    shell.className = 'story-carousel-shell';

    const previous = document.createElement('button');
    previous.className = 'story-carousel-arrow story-carousel-prev';
    previous.type = 'button';
    previous.setAttribute('aria-label', 'Previous Miccoli story chapter');
    previous.textContent = '‹';

    const next = document.createElement('button');
    next.className = 'story-carousel-arrow story-carousel-next';
    next.type = 'button';
    next.setAttribute('aria-label', 'Next Miccoli story chapter');
    next.textContent = '›';

    const count = document.createElement('div');
    count.className = 'story-carousel-count';
    count.setAttribute('aria-live', 'polite');

    const visibleSlides = () => Array.from(carousel.children).filter((slide) => {
      return window.getComputedStyle(slide).display !== 'none';
    });

    const getActiveIndex = () => {
      const slides = visibleSlides();
      const centre = carousel.scrollLeft + carousel.clientWidth / 2;
      let activeIndex = 0;
      let closestDistance = Number.POSITIVE_INFINITY;

      slides.forEach((slide, index) => {
        const slideCentre = slide.offsetLeft + slide.offsetWidth / 2;
        const distance = Math.abs(slideCentre - centre);
        if (distance < closestDistance) {
          closestDistance = distance;
          activeIndex = index;
        }
      });

      return { slides, activeIndex };
    };

    const updateCount = () => {
      const { slides, activeIndex } = getActiveIndex();
      if (!slides.length) return;
      count.textContent = `${activeIndex + 1} / ${slides.length}`;
      previous.disabled = activeIndex === 0;
      next.disabled = activeIndex === slides.length - 1;
    };

    const move = (direction) => {
      const { slides, activeIndex } = getActiveIndex();
      const targetIndex = Math.max(0, Math.min(slides.length - 1, activeIndex + direction));
      const target = slides[targetIndex];
      if (!target) return;

      carousel.scrollTo({
        left: target.offsetLeft - (carousel.clientWidth - target.offsetWidth) / 2,
        behavior: 'smooth'
      });
    };

    carousel.parentNode.insertBefore(shell, carousel);
    shell.append(previous, carousel, next, count);

    previous.addEventListener('click', () => move(-1));
    next.addEventListener('click', () => move(1));
    carousel.addEventListener('scroll', updateCount, { passive: true });
    window.addEventListener('resize', updateCount);

    requestAnimationFrame(updateCount);
  };

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initStoryCarousel, { once: true });
  } else {
    initStoryCarousel();
  }
})();
