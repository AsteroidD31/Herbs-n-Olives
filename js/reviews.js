/* ==========================================================================
   Reviews — GSAP stagger reveal + hover straighten.
   ========================================================================== */

const ReviewsInteractions = (() => {
  'use strict';

  /**
   * Initialize reviews interactions.
   */
  function init() {
    // Additional hover handling is done via CSS.
    // Star animation on scroll is handled in animations.js.
    // Nothing extra needed here beyond what CSS provides.
    setupStarAnimation();
  }

  /**
   * Animate stars popping in when reviews become visible.
   */
  function setupStarAnimation() {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const stars = document.querySelectorAll('.reviews__star');

    ScrollTrigger.create({
      trigger: '.reviews',
      start: 'top 70%',
      once: true,
      onEnter: () => {
        gsap.fromTo(
          stars,
          { scale: 0, opacity: 0 },
          {
            scale: 1,
            opacity: 1,
            duration: 0.4,
            stagger: 0.05,
            ease: 'back.out(2)',
          }
        );
      },
    });
  }

  return { init };
})();
