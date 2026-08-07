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
