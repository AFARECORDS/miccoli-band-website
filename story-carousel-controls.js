document.addEventListener('DOMContentLoaded', () => {
  const carousel = document.querySelector('.miccoli-story-section');
  if (!carousel || carousel.closest('.story-carousel-shell')) return;

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

  const slides = Array.from(carousel.children).filter((slide) => {
    const style = window.getComputedStyle(slide);
    return style.display !== 'none';
  });

  const updateCount = () => {
    if (!slides.length) return;
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

    count.textContent = `${activeIndex + 1} / ${slides.length}`;
    previous.disabled = activeIndex === 0;
    next.disabled = activeIndex === slides.length - 1;
  };

  const move = (direction) => {
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

    const targetIndex = Math.max(0, Math.min(slides.length - 1, activeIndex + direction));
    slides[targetIndex]?.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
  };

  carousel.parentNode.insertBefore(shell, carousel);
  shell.append(previous, carousel, next, count);

  previous.addEventListener('click', () => move(-1));
  next.addEventListener('click', () => move(1));
  carousel.addEventListener('scroll', updateCount, { passive: true });
  window.addEventListener('resize', updateCount);
  updateCount();
});
