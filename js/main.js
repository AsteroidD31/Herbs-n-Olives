/* ==========================================================================
   Main — Application entry point. Loading screen + module orchestration.
   ========================================================================== */

(function () {
  'use strict';

  /**
   * Simulate loading progress and then initialize everything.
   */
  function handleLoading() {
    const loader = document.getElementById('loader');
    const loaderBar = document.getElementById('loader-bar');

    if (!loader || !loaderBar) {
      initApp();
      return;
    }

    let progress = 0;
    const interval = setInterval(() => {
      progress += Math.random() * 25 + 5;
      if (progress >= 100) {
        progress = 100;
        clearInterval(interval);

        loaderBar.style.width = '100%';

        // Fade out loader after brief pause
        setTimeout(() => {
          loader.classList.add('is-hidden');
          initApp();

          // Remove loader from DOM after transition
          setTimeout(() => {
            loader.remove();
          }, 700);
        }, 400);
      } else {
        loaderBar.style.width = progress + '%';
      }
    }, 200);
  }

  /**
   * Initialize all application modules in correct order.
   */
  function initApp() {
    // 1. Register GSAP plugins
    gsap.registerPlugin(ScrollTrigger);

    // 2. Initialize Lenis smooth scroll
    ScrollManager.init();

    // 3. Initialize navigation (scroll effects, active tracking, mobile menu)
    Navigation.init();

    // 4. Hero entrance animations (after loader completes)
    HeroAnimations.init();

    // 5. Gallery interactions (tilt, lazy loading)
    GalleryInteractions.init();

    // 6. Menu interactions (category filtering, wishlist)
    MenuInteractions.init();

    // 7. Reviews interactions (star animation)
    ReviewsInteractions.init();

    // 8. Section scroll animations (all sections)
    SectionAnimations.init();

    // Refresh ScrollTrigger after images load
    window.addEventListener('load', () => {
      ScrollTrigger.refresh();
    });
  }

  // ── Bootstrap ──
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', handleLoading);
  } else {
    handleLoading();
  }
})();
