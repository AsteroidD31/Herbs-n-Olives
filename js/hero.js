/* ==========================================================================
   Hero — GSAP master timeline for cinematic hero entrance + parallax.
   ========================================================================== */

const HeroAnimations = (() => {
  'use strict';

  /**
   * Initialize hero animations.
   */
  function init() {
    // Skip animations if user prefers reduced motion
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      revealInstantly();
      return;
    }

    createEntranceTimeline();
    createParallax();
  }

  /**
   * For reduced motion: show everything immediately.
   */
  function revealInstantly() {
    gsap.set('.navbar, .hero__content, .hero__leaf, .scroll-indicator', {
      opacity: 1,
      y: 0,
      scale: 1,
    });
  }

  /**
   * Build the master entrance timeline.
   * Sequence: Logo → Nav → Headline → Subtitle → Buttons → Image → Leaves → Steam → Scroll
   */
  /**
   * Build the master entrance timeline.
   * Sequence: Logo → Nav → Card → Headline → Subtitle → Buttons → Pizza → Pasta → Steam → Leaves → Branches → Scroll
   */
  function createEntranceTimeline() {
    const tl = gsap.timeline({
      defaults: { ease: 'power3.out' },
      delay: 0.2, // small delay after loader
    });

    // Make sure elements start invisible so there's no flash
    gsap.set('.hero-card', { opacity: 0, scale: 0.98 });
    gsap.set('.navbar', { opacity: 0, y: -50 });
    gsap.set('.navbar__logo', { opacity: 0 });
    gsap.set('.hero__steam', { opacity: 0 });
    gsap.set('.hero__leaf', { opacity: 0, scale: 0.5 });
    gsap.set('.hero__decor-branch', { opacity: 0, scale: 0.9 });
    gsap.set('.scroll-indicator', { opacity: 0, y: 15 });

    // 1) Logo fade
    tl.to('.navbar__logo', { opacity: 1, duration: 0.6 });

    // 2) Navbar slide down
    tl.to('.navbar', { opacity: 1, y: 0, duration: 0.6 }, '-=0.3');

    // 3) Floating card fades in
    tl.to('.hero-card', { 
      opacity: 1, 
      scale: 1, 
      duration: 1.2, 
      ease: 'power4.out',
      clearProps: 'transform'
    }, '-=0.4');

    // 4) Headline SplitType reveal
    const heroTitle = document.getElementById('hero-title');
    if (heroTitle && typeof SplitType !== 'undefined') {
      const split = new SplitType(heroTitle, { types: 'chars, words' });
      tl.fromTo(
        split.chars,
        { opacity: 0, y: 30, rotationX: -30 },
        {
          opacity: 1,
          y: 0,
          rotationX: 0,
          duration: 0.8,
          stagger: 0.02,
          ease: 'power3.out',
        },
        '-=0.6'
      );
    } else {
      tl.fromTo(
        '.hero__title',
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.8 },
        '-=0.6'
      );
    }

    // 5) Paragraph fade
    tl.fromTo(
      '.hero__subtitle',
      { opacity: 0, y: 15 },
      { opacity: 0.8, y: 0, duration: 0.6 },
      '-=0.4'
    );

    // 6) Buttons slide upward
    tl.fromTo(
      '.hero__buttons .btn',
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.6, stagger: 0.1 },
      '-=0.3'
    );



    // 9) Steam begins
    tl.to('.hero__steam', { opacity: 1, duration: 0.8 }, '-=0.4');

    // 10) Floating basil leaves begin
    tl.to('.hero__leaf', { opacity: 1, scale: 1, duration: 0.8, stagger: 0.1, ease: 'back.out(1.5)' }, '-=0.6');

    // 11) Olive branches slightly sway
    tl.to('.hero__decor-branch', { opacity: 0.9, scale: 1, duration: 0.8 }, '-=0.5');
    tl.fromTo(
      '.hero__decor-branch--top-right',
      { rotation: 10 },
      { rotation: 15, duration: 3, ease: 'sine.inOut', repeat: -1, yoyo: true },
      '-=0.8'
    );
    tl.fromTo(
      '.hero__decor-branch--bottom-left',
      { rotation: -10 },
      { rotation: -15, duration: 3, ease: 'sine.inOut', repeat: -1, yoyo: true },
      '<'
    );

    // 12) Scroll indicator starts
    tl.to('.scroll-indicator', { opacity: 1, y: 0, duration: 0.5 }, '-=0.3');
  }

  /**
   * Create parallax scrolling on hero elements.
   */
  function createParallax() {
    // Background parallax
    gsap.to('.hero__image', {
      yPercent: 15,
      ease: 'none',
      scrollTrigger: {
        trigger: '#hero',
        start: 'top top',
        end: 'bottom top',
        scrub: true,
      },
    });



    // Fade out hero content on scroll
    gsap.to('.hero__content', {
      opacity: 0,
      y: -30,
      ease: 'none',
      scrollTrigger: {
        trigger: '#hero',
        start: '50% top',
        end: 'bottom top',
        scrub: true,
      },
    });

    // Parallax on leaves
    gsap.to('.hero__leaf', {
      yPercent: -25,
      ease: 'none',
      scrollTrigger: {
        trigger: '#hero',
        start: 'top top',
        end: 'bottom top',
        scrub: true,
      },
    });
  }

  return { init };
})();
