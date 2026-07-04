/* ==========================================================================
   Animations — ScrollTrigger-based reveal animations for all sections.
   Each section animates only once on first scroll into view.
   ========================================================================== */

const SectionAnimations = (() => {
  'use strict';

  /**
   * Initialize all section animations.
   */
  function init() {
    // Skip if user prefers reduced motion
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      return;
    }

    // Register ScrollTrigger plugin
    gsap.registerPlugin(ScrollTrigger);

    animateAbout();
    animateFeatured();
    animateGallery();
    animateMenu();
    animateReviews();
    animateOrder();
    animateInstagram();
    animateFooter();
  }

  /* ── About Section ── */
  function animateAbout() {
    // Image slides from left
    gsap.fromTo(
      '.about__image-wrapper',
      { opacity: 0, x: -80 },
      {
        opacity: 1,
        x: 0,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '.about',
          start: 'top 70%',
          once: true,
        },
      }
    );

    // Content fades upward
    gsap.fromTo(
      '.about__content',
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: 'power3.out',
        delay: 0.2,
        scrollTrigger: {
          trigger: '.about',
          start: 'top 70%',
          once: true,
        },
      }
    );

    // SplitType heading animation
    const aboutTitle = document.getElementById('about-title');
    if (aboutTitle && typeof SplitType !== 'undefined') {
      const split = new SplitType(aboutTitle, { types: 'chars, words' });

      gsap.fromTo(
        split.chars,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          stagger: 0.02,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: '.about',
            start: 'top 65%',
            once: true,
          },
        }
      );
    }
  }

  /* ── Featured Dishes ── */
  function animateFeatured() {
    // Section header
    gsap.fromTo(
      '.featured .section__header',
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '.featured',
          start: 'top 75%',
          once: true,
        },
      }
    );

    // Cards stagger upward
    gsap.fromTo(
      '.featured__card',
      { opacity: 0, y: 60 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        stagger: 0.15,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '.featured__grid',
          start: 'top 75%',
          once: true,
        },
      }
    );
  }

  /* ── Gallery ── */
  function animateGallery() {
    // Section header
    gsap.fromTo(
      '.gallery .section__header',
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '.gallery',
          start: 'top 75%',
          once: true,
        },
      }
    );

    // Stagger reveal gallery items
    gsap.fromTo(
      '.gallery__item',
      { opacity: 0, y: 40, scale: 0.95 },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 0.7,
        stagger: 0.1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '.gallery__grid',
          start: 'top 75%',
          once: true,
        },
      }
    );
  }

  /* ── Menu ── */
  function animateMenu() {
    // Section header
    gsap.fromTo(
      '.menu .section__header',
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '.menu',
          start: 'top 75%',
          once: true,
        },
      }
    );

    // Sidebar
    gsap.fromTo(
      '.menu__sidebar',
      { opacity: 0, x: -30 },
      {
        opacity: 1,
        x: 0,
        duration: 0.8,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '.menu__layout',
          start: 'top 75%',
          once: true,
        },
      }
    );

    // Dish cards individual animation
    gsap.fromTo(
      '.menu__dish-card',
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 0.6,
        stagger: 0.08,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '.menu__dishes',
          start: 'top 75%',
          once: true,
        },
      }
    );
  }

  /* ── Reviews ── */
  function animateReviews() {
    // Section header
    gsap.fromTo(
      '.reviews .section__header',
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '.reviews',
          start: 'top 75%',
          once: true,
        },
      }
    );

    // Cards stagger reveal
    gsap.fromTo(
      '.reviews__card',
      { opacity: 0, y: 50, scale: 0.9 },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 0.8,
        stagger: 0.2,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '.reviews__grid',
          start: 'top 75%',
          once: true,
        },
      }
    );
  }

  /* ── Order ── */
  function animateOrder() {
    // Section header
    gsap.fromTo(
      '.order .section__header',
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '.order',
          start: 'top 75%',
          once: true,
        },
      }
    );

    // Order cards stagger
    gsap.fromTo(
      '.order__card',
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 0.6,
        stagger: 0.12,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '.order__grid',
          start: 'top 80%',
          once: true,
        },
      }
    );
  }

  /* ── Instagram ── */
  function animateInstagram() {
    // Section header
    gsap.fromTo(
      '.instagram .section__header',
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '.instagram',
          start: 'top 75%',
          once: true,
        },
      }
    );

    // Grid stagger reveal
    gsap.fromTo(
      '.instagram__item',
      { opacity: 0, scale: 0.85 },
      {
        opacity: 1,
        scale: 1,
        duration: 0.5,
        stagger: 0.08,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '.instagram__grid',
          start: 'top 80%',
          once: true,
        },
      }
    );

    // CTA
    gsap.fromTo(
      '.instagram__cta',
      { opacity: 0, y: 20 },
      {
        opacity: 1,
        y: 0,
        duration: 0.6,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '.instagram__cta',
          start: 'top 85%',
          once: true,
        },
      }
    );
  }

  /* ── Footer ── */
  function animateFooter() {
    gsap.fromTo(
      '.footer__grid > *',
      { opacity: 0, y: 25 },
      {
        opacity: 1,
        y: 0,
        duration: 0.7,
        stagger: 0.1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '.footer',
          start: 'top 85%',
          once: true,
        },
      }
    );
  }

  return { init };
})();
