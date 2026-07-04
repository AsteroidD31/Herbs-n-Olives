# Italian Restaurant Website - Implementation Plan

## Project Goal

Develop a premium, responsive restaurant website inspired by the provided UI reference located in the project folder.

The objective is NOT to redesign the UI.

The objective is to faithfully recreate the provided reference while implementing premium animations and maintaining excellent code architecture.

---

# Tech Stack

Frontend
- HTML5
- CSS3
- Vanilla JavaScript (ES6)

Animation Libraries
- GSAP
- GSAP ScrollTrigger
- Lenis
- SplitType

Deployment
- Firebase Hosting

NO FRAMEWORKS

Do NOT use

- React
- Next.js
- Vue
- Angular
- TypeScript
- TailwindCSS
- Bootstrap
- jQuery

Everything should be written using semantic HTML, modular CSS and Vanilla JavaScript.

---

# Folder Structure

project/

│

├── index.html

├── css/

│     reset.css

│     variables.css

│     global.css

│     navbar.css

│     hero.css

│     about.css

│     featured.css

│     gallery.css

│     menu.css

│     reviews.css

│     order.css

│     instagram.css

│     footer.css

│     animations.css

│     responsive.css

│

├── js/

│     main.js

│     navigation.js

│     hero.js

│     scroll.js

│     menu.js

│     gallery.js

│     reviews.js

│     animations.js

│

├── assets/

│     images/

│     icons/

│     logo/

│

├── vendor/

│     gsap/

│     lenis/

│     splittype/

│

└── firebase.json

---

# Website Structure

Navigation

↓

Hero

↓

About Us

↓

Featured Dishes

↓

Gallery

↓

Interactive Menu

↓

Reviews

↓

Order Online

↓

Instagram

↓

Footer

---

# Color Palette

Cream
#F8F4EC

Ivory
#F5EFE3

Pastel Green
#B8C7A3

Olive Green
#58664B

Dark Text
#2C2A28

Accent Gold
#C79A4B

Tomato Accent
#C85A3E

---

# Typography

Headings

Cormorant Garamond

Body

Poppins

Buttons

Inter

---

# Navbar

Transparent initially.

Changes into blurred cream glassmorphism while scrolling.

Sticky.

Instagram button permanently highlighted.

Reserve Table CTA.

Smooth active section indicator.

Hover underline animation.

---

# Hero

Requirements

Large cinematic hero.

Background image.

Floating basil leaves.

Subtle moving grain texture.

Steam effect.

Large typography.

GSAP intro animation.

Buttons reveal.

Parallax movement while scrolling.

Scroll indicator animation.

---

# Hero Animation Timeline

Logo fades

↓

Navigation slides

↓

Headline split animation

↓

Subtitle fade

↓

Buttons slide upward

↓

Pizza image zoom

↓

Floating leaves begin

↓

Steam loops

↓

Scroll indicator starts

---

# About Section

Image slides from left.

Content fades upward.

Decorative illustrations.

SplitType heading animation.

---

# Featured Dishes

Cards stagger upward.

Hover

scale

shadow

slight lift

---

# Gallery

Pinterest masonry style.

Scroll reveal.

Hover zoom.

Hover tilt.

Lazy loading.

---

# Menu

Sticky left category navigation.

Categories

- Zuppe Soup

- Insalata

- Antipasti

- Between The Breads

- Pizza Napolitano

- Pasta & Risotto

- Entree

- Dolce

Each category expands smoothly.

Dish cards animate individually.

Price fade animation.

Hover elevation.

---

# Reviews

Pinned paper style cards.

GSAP stagger reveal.

Hover straightens card.

Star rating animation.

---

# Order Section

Four premium cards

Swiggy

Zomato

District

EasyDiner

Hover

lift

shadow

gradient

icon movement

---

# Instagram

Dedicated section.

Image grid.

Hover zoom.

Follow CTA.

Animated button.

---

# Footer

Opening hours.

Location.

Contact.

Social icons.

Minimal animation.

---

# Scroll Animations

GSAP ScrollTrigger

Every section

Fade

Translate

Opacity

Scale

Stagger

Parallax

No abrupt animations.

Everything should feel premium.

---

# Smooth Scroll

Lenis

60fps

No jitter.

---

# Loading Screen

Cream background.

Restaurant logo.

Simple loading progress.

Fade into hero.

---

# Performance

Use WebP.

Lazy loading.

Intersection Observer.

Compressed assets.

Avoid layout shifts.

Maintain Lighthouse score above 90.

---

# Responsive

Desktop

1440+

Laptop

1024

Tablet

768

Mobile

480

Animations remain smooth.

No horizontal scrolling.

---

# Accessibility

Semantic HTML.

ARIA labels.

Keyboard navigation.

Reduced motion support.

Proper contrast.

Alt text.

---

# Coding Standards

No inline CSS.

No inline JS.

No duplicated styles.

Reusable utility classes.

Modular JavaScript.

Meaningful comments.

Readable code.

Consistent naming.

---

# Final Deliverables

Responsive website

Modular architecture

Smooth animations

Premium interactions

Optimized assets

Firebase ready

Clean Vanilla JS codebase

No TypeScript

No frontend frameworks

Faithful recreation of provided UI reference