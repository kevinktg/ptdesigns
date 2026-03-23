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

**Routing:** React Router v7 with `createBrowserRouter`. Single route at `/ptdesigns` (GitHub Pages base path). `MainLayout` wraps all pages via `<Outlet />`.

**Smooth Scrolling:** Dual system — GSAP `ScrollSmoother` (wraps content in `#smooth-wrapper` / `#smooth-content`) and Lenis (`frontend/src/lib/lenis.js`). Both are initialized in `MainLayout`.

**Layout hierarchy:**
- `MainLayout` — persistent shell: PreloaderII, Logo, ReserveBtn, Navbar, Footer, FooterTitle. Registers GSAP ScrollTrigger + ScrollSmoother plugins.
- `Home` — page-level section composition: Hero → Welcome → Choose → Gallery → MapLink → MarqueeSticky → StickyCols → Activities → Showcase → Feedback → FooterBanner.

**Styling approach:** Mix of Tailwind utility classes and section-specific CSS files (`index.css` for globals, plus per-component `.css` files in component directories). CSS custom properties defined in `:root` (`--base-100`, `--base-200`, `--base-300`). Font: Inter (Google Fonts CDN).

**Animations:** GSAP with `@gsap/react` (`useGSAP` hook) and ScrollTrigger throughout components. Animations are scroll-driven, not time-based.

**Deployment:** GitHub Pages via GitHub Actions (`.github/workflows/deploy.yml`). Builds from `frontend/`, deploys `frontend/dist/`. Base path is `/ptdesigns/` (configured in both `vite.config.js` and Router).

## Key Conventions

- Components are in `frontend/src/components/{ComponentName}/` with `.jsx` + optional `.css` file
- Pages in `frontend/src/pages/{PageName}/`
- Single layout in `frontend/src/layouts/`
- GSAP plugins must be registered with `gsap.registerPlugin()` before use
- ESLint ignores unused vars starting with uppercase or underscore (`varsIgnorePattern: '^[A-Z_]'`)
