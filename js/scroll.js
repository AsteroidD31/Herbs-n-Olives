/* ==========================================================================
   Scroll — Lenis smooth scrolling + GSAP ScrollTrigger integration.
   ========================================================================== */

/**
 * Initialize Lenis smooth scrolling and sync with GSAP ScrollTrigger.
 * Exported as a global for other modules to use.
 */
const ScrollManager = (() => {
  'use strict';

  let lenis = null;

  /**
   * Initialize Lenis smooth scroll.
   */
  function init() {
    // Bail if user prefers reduced motion
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      return;
    }

    // Create Lenis instance
    lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // easeOutExpo
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 2,
    });

    // Connect Lenis to GSAP ScrollTrigger
    lenis.on('scroll', ScrollTrigger.update);

    // Use GSAP ticker for raf loop
    gsap.ticker.add((time) => {
      lenis.raf(time * 1000);
    });

    // Disable GSAP's default lag smoothing for Lenis compatibility
    gsap.ticker.lagSmoothing(0);
  }

  /**
   * Smooth scroll to a target element.
   * @param {string} target - CSS selector for the target element.
   * @param {Object} options - Lenis scrollTo options.
   */
  function scrollTo(target, options = {}) {
    if (lenis) {
      lenis.scrollTo(target, {
        offset: -80, // account for navbar height
        duration: 1.5,
        ...options,
      });
    } else {
      // Fallback for reduced motion
      const el = document.querySelector(target);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }

  /**
   * Get the Lenis instance.
   * @returns {Lenis|null}
   */
  function getInstance() {
    return lenis;
  }

  return { init, scrollTo, getInstance };
})();
