/* ==========================================================================
   Menu — Category filtering with smooth transitions.
   ========================================================================== */

const MenuInteractions = (() => {
  'use strict';

  let activeCategory = 'all';

  /**
   * Initialize menu interactions.
   */
  function init() {
    setupCategoryFiltering();
    setupWishlist();
  }

  /**
   * Setup category tab filtering.
   */
  function setupCategoryFiltering() {
    const categoryBtns = document.querySelectorAll('.menu__category-btn');
    const dishCards = document.querySelectorAll('.menu__dish-card');

    // Show all dishes initially
    showAllDishes(dishCards);

    categoryBtns.forEach((btn) => {
      btn.addEventListener('click', () => {
        const category = btn.getAttribute('data-category');

        // Update active button
        categoryBtns.forEach((b) => {
          b.classList.remove('is-active');
          b.setAttribute('aria-selected', 'false');
        });
        btn.classList.add('is-active');
        btn.setAttribute('aria-selected', 'true');

        activeCategory = category;

        // Filter dishes with animation
        filterDishes(dishCards, category);
      });
    });
  }

  /**
   * Filter dishes by category with GSAP animations.
   */
  function filterDishes(cards, category) {
    // First, fade out all cards
    gsap.to(cards, {
      opacity: 0,
      y: 20,
      scale: 0.95,
      duration: 0.25,
      stagger: 0.03,
      ease: 'power2.in',
      onComplete: () => {
        // Show/hide based on category
        cards.forEach((card) => {
          const cardCategory = card.getAttribute('data-category');
          if (category === 'all' || cardCategory === category) {
            card.style.display = '';
          } else {
            card.style.display = 'none';
          }
        });

        // Animate visible cards in
        const visibleCards = Array.from(cards).filter(
          (card) => card.style.display !== 'none'
        );

        gsap.fromTo(
          visibleCards,
          { opacity: 0, y: 20, scale: 0.95 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.4,
            stagger: 0.06,
            ease: 'power3.out',
          }
        );
      },
    });
  }

  /**
   * Show all dishes initially.
   */
  function showAllDishes(cards) {
    cards.forEach((card) => {
      card.style.display = '';
    });
  }

  /**
   * Setup wishlist heart toggle.
   */
  function setupWishlist() {
    const wishlistBtns = document.querySelectorAll('.menu__dish-wishlist');

    wishlistBtns.forEach((btn) => {
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        const isActive = btn.classList.toggle('is-active');

        if (isActive) {
          btn.style.fill = 'currentColor';
          gsap.fromTo(btn, { scale: 1.4 }, { scale: 1, duration: 0.4, ease: 'elastic.out(1, 0.3)' });
        } else {
          btn.style.fill = 'none';
          gsap.fromTo(btn, { scale: 0.8 }, { scale: 1, duration: 0.3, ease: 'power2.out' });
        }
      });
    });
  }

  return { init };
})();
