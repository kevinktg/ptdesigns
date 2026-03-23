# GEMINI.md - ktg-scaff05-lux (PTDesigns)

## Project Overview
**PTDesigns (Parm Tjhung Designs)** is a high-end React architecture portfolio website. It is a faithful clone/study of the Awwwards SOTD-winning "Capsule" website, adapted for a Perth-based luxury architect. The project is currently in the **Foundation/Polish phase** of a multi-scaffold portfolio deployment strategy.

- **Purpose:** Production-ready luxury architectural portfolio.
- **Key Brand:** Parm Tjhung Designs (Gold #BFA77A, Dark #131313).
- **Core Experience:** Heavy scroll-driven animations (GSAP) and smooth scrolling (Lenis + ScrollSmoother).

## Tech Stack (LOCKED)
- **Framework:** React 19 + Vite 6.3 (Single Page Application)
- **Routing:** React Router v7 (Base path: `/ptdesigns/`)
- **Styling:** Tailwind CSS v4 + Custom CSS (CSS Variables for themes)
- **Animations:** GSAP 3.13 + ScrollTrigger + ScrollSmoother
- **Smooth Scroll:** Lenis
- **Fonts:** Inter (Body), Playfair Display (Headings), Montserrat (Brand tagline)

## Architecture
- **Monorepo-lite:** Core application lives in the `frontend/` directory. Root `package.json` is minimal.
- **Layout:** `MainLayout` provides the persistent shell (Preloader, Logo, Navbar, Footer) and initializes smooth scrolling plugins.
- **Composition:** `Home` page is composed of sequential sections: `Hero` → `Welcome` → `Choose` → `Gallery` → `MapLink` → `MarqueeSticky` → `StickyCols` → `Activities` → `Showcase` → `Feedback` → `FooterBanner`.
- **Constants:** Site content is managed via JS constants in `frontend/src/constants/`.

## Building and Running
All commands must be executed from the `frontend/` directory:

```bash
cd frontend
npm install        # Install locked dependencies
npm run dev        # Local development server (Vite)
npm run build      # Production build to frontend/dist/
npm run preview    # Preview production build locally
npm run lint       # ESLint check
```

## Development Conventions
- **Component Structure:** `frontend/src/components/{ComponentName}/` containing `.jsx` and optional `.css`.
- **Animations:** Use the `useGSAP` hook from `@gsap/react`. Animations are primarily scroll-driven via `ScrollTrigger`.
- **GSAP Registration:** Plugins must be registered in `MainLayout.jsx` (ScrollTrigger, ScrollSmoother).
- **Styling:** Prefer Tailwind v4 utility classes. Use CSS custom properties (`--base-100`, etc.) for theme consistency.
- **Strict Mode:** Do NOT add new dependencies or refactor tuned GSAP logic without explicit instruction.

## Current Project Status
- **Foundation:** Complete. Text content is branded for Parm Tjhung.
- **Next Steps:** 
  - Replace placeholder images in `frontend/src/assets/` with real architectural photos.
  - Refactor `generateCapsules()` to `generateProjectCards()` in `Gallery.jsx`.
  - Update Favicon and clean up unused assets.
  - Final verification via `npm run build` and `react-doctor`.

## Constraints & Hard Rules
1. **Search Before Asking:** Use `grep_search`, `glob`, and `ls` to find code and assets.
2. **Locked Stack:** Do NOT add new libraries or dependencies.
3. **Preserve Animations:** Do NOT touch GSAP animations or smooth scroll configurations; they are precisely tuned.
4. **No Refactoring:** If code works and meets brand requirements, leave it alone.
5. **Pathing:** Vite `base` is locked to `/ptdesigns/` for GitHub Pages compatibility.
