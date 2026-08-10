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
