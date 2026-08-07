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
      if (paragraphs[1])