# ktg-scaff05-lux — PTDesigns (Parm Tjhung Designs)

## HARD RULES — VIOLATE THESE AND YOU FAIL

1. SEARCH before asking. Use ls, Glob, Grep. If it's in this project, find it yourself.
2. Do NOT add dependencies. The stack is locked.
3. Do NOT refactor working code. If it works, leave it.
4. Do NOT create new files unless a task below explicitly requires it.
5. Do NOT improvise features. Only work on tasks listed below.
6. If the plan is unclear, ASK — do not guess.

## Stack (LOCKED)

- React 19 + Vite 6.3
- React Router v7
- Tailwind CSS v4
- GSAP 3.13 + ScrollTrigger + ScrollSmoother
- Lenis (smooth scroll)
- Fonts: Inter (body), Playfair Display (headings), Montserrat (brand tagline)
- Deploy: GitHub Pages at /ptdesigns/

## Brand

- Name: Parm Tjhung Designs (PTDesigns)
- Industry: Luxury architecture portfolio
- Logo: frontend/src/assets/pt-logo.svg + pt-type.svg
- Colors:
  - Gold: #BFA77A
  - Dark: #131313, #1E1C1C
  - Light: #f4f4f4
- Style: Luxury minimal, gold accents on dark

## Status

All text content is branded. Logo in place. Fonts configured. 90% done.

## Current Tasks (ONLY THESE)

- [ ] Replace placeholder images in frontend/src/assets/ with Parm's architectural photos:
  - hero-main.jpg, hero-mobile.png (hero)
  - welcome-1.png, welcome-2.png (about section)
  - cap1.png, cap1-square.jpg, cap2-square.jpg, cap3-square.jpg (project cards)
  - activities-1.png, activities-2.png, activities-3.png (services)
  - showcase-1.jpg (showcase)
  - review-1.jpg, review-2.jpg, review-3.jpg (testimonials)
  - gallery-residential.jpg, gallery-commercial.jpg, gallery-interior.jpg, gallery-4.jpg
  - footer-banner.jpg
- [ ] Rename generateCapsules() to generateProjectCards() in frontend/src/components/Gallery/Gallery.jsx
- [ ] Replace favicon.ico with PTDesigns brand icon
- [ ] Delete frontend/public/vite.svg (unused template remnant)
- [ ] Run npm install in frontend/ and verify build

## DO NOT

- Touch GSAP animations — they're tuned
- Change the color scheme
- Change the font stack
- Modify the Lenis/ScrollSmoother setup
- Add new sections or routes
- Change the vite.config.js base path
