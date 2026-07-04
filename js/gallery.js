/* ==========================================================================
   Gallery — Hover tilt effect and lazy loading via IntersectionObserver.
   ========================================================================== */

const GalleryInteractions = (() => {
  'use strict';

  /**
   * Initialize gallery interactions.
   */
  function init() {
    setupTiltEffect();
    setupLazyLoading();
  }

  /**
   * 3D tilt effect on hover for gallery items.
   * Calculates tilt based on mouse position relative to the item.
   */
  function setupTiltEffect() {
    // Skip on mobile / reduced motion
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    if (window.innerWidth < 768) return;

    const items = document.querySelectorAll('.gallery__item');

    items.forEach((item) => {
      item.addEventListener('mousemove', (e) => {
        const rect = item.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        // Calculate rotation (max ±8 degrees)
        const rotateX = ((y - centerY) / centerY) * -8;
        const rotateY = ((x - centerX) / centerX) * 8;

        gsap.to(item, {
          rotateX: rotateX,
          rotateY: rotateY,
          transformPerspective: 800,
          duration: 0.3,
          ease: 'power2.out',
        });
      });

      item.addEventListener('mouseleave', () => {
        gsap.to(item, {
          rotateX: 0,
          rotateY: 0,
          duration: 0.5,
          ease: 'power2.out',
        });
      });
    });
  }

  /**
   * Lazy loading images using IntersectionObserver.
   */
  function setupLazyLoading() {
    const lazyImages = document.querySelectorAll('img[loading="lazy"]');

    if ('IntersectionObserver' in window) {
      const imageObserver = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              const img = entry.target;
              // Image is already loaded by the browser's native lazy loading,
              // but we add a class for potential CSS transitions
              img.classList.add('is-loaded');
              imageObserver.unobserve(img);
            }
          });
        },
        { rootMargin: '100px' }
      );

      lazyImages.forEach((img) => imageObserver.observe(img));
    }
  }

  return { init };
})();
