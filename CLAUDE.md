# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Clone/study of the Awwwards SOTD-winning "Capsule" luxury hotel site (capsule.moyra.co). Single-page React app with heavy scroll-driven GSAP animations and smooth scrolling. Built for learning advanced frontend animation techniques.

## Commands

All commands run from the `frontend/` directory:

```bash
cd frontend
npm install        # install dependencies
npm run dev        # start dev server (vite --host)
npm run build      # production build to frontend/dist/
npm run preview    # preview production build
npm run lint       # eslint (flat config, JS/JSX only)
```

There are no tests configured.

## Architecture

**Monorepo-lite structure:** Root `package.json` only has `react-responsive`. All app code lives in `frontend/`.

**Stack:** React 19 + Vite + Tailwind CSS v4 (via `@tailwindcss/vite` plugin) + GSAP + Lenis smooth scroll.

**Routing:** React Router v7 with `createBrowserRouter`. Single route at `/` (root). `MainLayout` wraps all pages via `<Outlet />`.

**Smooth Scrolling:** Dual system — GSAP `ScrollSmoother` (wraps content in `#smooth-wrapper` / `#smooth-content`) and Lenis (`frontend/src/lib/lenis.js`). Both are initialized in `MainLayout`. Note: `ScrollTrigger.refresh()` fires after a 4-second delay to account for the preloader animation completing before scroll positions are calculated.

**Layout hierarchy:**
- `MainLayout` — persistent shell: PreloaderII, Logo, ReserveBtn, Navbar, Footer, FooterTitle. Registers GSAP `ScrollTrigger` + `ScrollSmoother` plugins.
- `Home` — page-level section composition in order: Hero → Welcome → Choose → Gallery → MapLink → MarqueeSticky → StickyCols → Activities → Showcase → Feedback → FooterBanner.

**Preloaders:** Two components exist — `Preloader.jsx` (unused) and `PreloaderII.jsx` (active, rendered in MainLayout).

**Data:** Static content lives in `frontend/src/constants/` — `activites.js`, `feedback.js`, `welcome.js`.

**Styling approach:** Mix of Tailwind utility classes and section-specific CSS files (`index.css` for globals, plus per-component `.css` files). CSS custom properties defined in `:root`:
- `--base-100` (#050505), `--base-200` (#111111), `--base-300` (#f5f5f5) — dark/light backgrounds and text
- `--gold` (#BFA77A), `--silver` (#E2E2E2) — luxury accent colours
- `--gold-glow`, `--gold-glow-strong` — box-shadow presets for glowing effects

**Fonts (Google Fonts CDN):** Inter (body), Montserrat (accent), Playfair Display (all headings h1–h3, serif with negative letter-spacing).

**Animations:** GSAP with `@gsap/react` (`useGSAP` hook) and ScrollTrigger throughout components. Animations are scroll-driven, not time-based. Always import plugins from `gsap/all` or `gsap/ScrollTrigger` and register with `gsap.registerPlugin()` before use.

**Deployment:** GitHub Pages via GitHub Actions (`.github/workflows/deploy.yml`). Builds from `frontend/`, deploys `frontend/dist/`. Vercel deployment also configured (see git history).

## Key Conventions

- Components are in `frontend/src/components/{ComponentName}/` with `.jsx` + optional `.css` file
- Pages in `frontend/src/pages/{PageName}/`
- Single layout in `frontend/src/layouts/`
- ESLint ignores unused vars starting with uppercase or underscore (`varsIgnorePattern: '^[A-Z_]'`)
- `Intro.jsx` and `Outro.jsx` exist in components but are not currently used
