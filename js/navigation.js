/* ==========================================================================
   Navigation — Navbar scroll effects, active section tracking, mobile menu.
   ========================================================================== */

const Navigation = (() => {
  'use strict';

  // DOM references
  const navbar = document.getElementById('navbar');
  const hamburger = document.getElementById('hamburger');
  const mobileOverlay = document.getElementById('mobile-overlay');
  const navLinks = document.querySelectorAll('.navbar__link');
  const mobileLinks = document.querySelectorAll('.navbar__mobile-link');
  const sections = document.querySelectorAll('section[id]');

  /**
   * Initialize navigation module.
   */
  function init() {
    setupScrollEffect();
    setupActiveTracking();
    setupMobileMenu();
    setupSmoothLinks();
  }

  /**
   * Toggle glassmorphism on scroll.
   */
  function setupScrollEffect() {
    const SCROLL_THRESHOLD = 50;

    ScrollTrigger.create({
      start: SCROLL_THRESHOLD,
      end: 99999,
      onToggle: (self) => {
        navbar.classList.toggle('is-scrolled', self.isActive);
      },
    });
  }

  /**
   * Track active section using IntersectionObserver.
   */
  function setupActiveTracking() {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = entry.target.getAttribute('id');
            setActiveLink(id);
          }
        });
      },
      {
        rootMargin: '-30% 0px -70% 0px', // trigger at 30% from top
        threshold: 0,
      }
    );

    sections.forEach((section) => observer.observe(section));
  }

  /**
   * Set the active navigation link.
   * @param {string} sectionId - The id of the active section.
   */
  function setActiveLink(sectionId) {
    navLinks.forEach((link) => {
      const isMatch = link.getAttribute('data-section') === sectionId;
      link.classList.toggle('is-active', isMatch);
    });
  }

  /**
   * Setup mobile hamburger menu.
   */
  function setupMobileMenu() {
    if (!hamburger || !mobileOverlay) return;

    hamburger.addEventListener('click', toggleMobileMenu);

    // Close on mobile link click
    mobileLinks.forEach((link) => {
      link.addEventListener('click', () => {
        closeMobileMenu();
      });
    });

    // Close on escape key
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && mobileOverlay.classList.contains('is-open')) {
        closeMobileMenu();
      }
    });
  }

  function toggleMobileMenu() {
    const isOpen = mobileOverlay.classList.contains('is-open');
    if (isOpen) {
      closeMobileMenu();
    } else {
      openMobileMenu();
    }
  }

  function openMobileMenu() {
    hamburger.classList.add('is-active');
    hamburger.setAttribute('aria-expanded', 'true');
    mobileOverlay.classList.add('is-open');
    mobileOverlay.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';

    // Animate links in
    gsap.fromTo(
      '.navbar__mobile-link',
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 0.5, stagger: 0.08, ease: 'power3.out', delay: 0.1 }
    );
  }

  function closeMobileMenu() {
    hamburger.classList.remove('is-active');
    hamburger.setAttribute('aria-expanded', 'false');
    mobileOverlay.classList.remove('is-open');
    mobileOverlay.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  }

  /**
   * Setup smooth scrolling for all anchor links.
   */
  function setupSmoothLinks() {
    const allLinks = document.querySelectorAll('a[href^="#"]');

    allLinks.forEach((link) => {
      link.addEventListener('click', (e) => {
        e.preventDefault();
        const target = link.getAttribute('href');
        if (target && target !== '#') {
          ScrollManager.scrollTo(target);
        }
      });
    });
  }

  return { init };
})();
