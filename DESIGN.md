# Design System: PTDesigns (Parm Tjhung Designs)

## 1. Visual Theme & Atmosphere
**"Architectural Silence"** — A restrained, gallery-airy interface (Density 2) with confident asymmetric layouts (Variance 8) and cinematic, high-inertia motion (Motion 8). The atmosphere is monolithic, expensive, and precise — mirroring the physical architectural output of Parm Tjhung.

## 2. Color Palette & Roles
- **OLED Black** (#050505) — Primary background surface.
- **Zinc Ink** (#09090B) — Card and container core fill.
- **Ghost White** (#F5F5F5) — Primary text, high contrast.
- **Muted Zinc** (#71717A) — Secondary text, metadata, telemetry.
- **Structural Line** (rgba(255,255,255,0.05)) — 1px hairlines, grid borders.
- **PT Gold** (#BFA77A) — Single accent for highlights, focus, and brand signals.
- **PT Silver** (#E2E2E2) — Rare secondary accent for technical details.

## 3. Typography Rules
- **Editorial Heading:** `Playfair Display` — Tight tracking (`-0.04em`), leading `0.95`. Used for emotional impact and section headers.
- **Utility Sans:** `Inter` (refined) — Tight tracking (`-0.02em`), leading `1.6`. Used for body copy and UI elements.
- **Tactical Mono:** `Geist Mono` — For metadata, project IDs, and coordinates. Uppercase, wide tracking (`0.1em`).
- **Directives:** Enforce `max-w-[65ch]` on paragraphs. No orphans (use `text-wrap: balance`).

## 4. Component Stylings (Double-Bezel Architecture)
* **Containers:** Never flat. Use **Double-Bezel** architecture:
    - *Outer:* `bg-white/5 border border-white/5 p-1.5 rounded-[2.5rem]`
    - *Inner:* `bg-zinc-950 rounded-[calc(2.5rem-0.375rem)] shadow-inner`
* **Buttons:** High-end "Island" architecture. Pills with nested circular icon wrappers. No neon glows — only subtle gold "breath" states.
* **Tags:** Micro-telemetry style. Uppercase, wide-tracked Mono text in 1px Zinc borders.

## 5. Layout Principles
- **Asymmetric Variance:** Rejection of centered AI bias. Force 60/40 splits and offset overlaps.
- **Spatial Rhythm:** Minimum `py-32` section padding. Let the work breathe.
- **Blueprint Grid:** Use visible 1px hairlines to compartmentalize data clusters.
- **Viewport Stability:** Exclusive use of `min-h-[100dvh]` for full-height sections.

## 6. Motion & Interaction
- **High-Inertia Scroll:** Lenis + GSAP ScrollSmoother at `1.5` intensity.
- **Staggered Mask Reveals:** Content enters through expanding wipes or heavy fade-ups (`translateY(2rem) + blur(10px)`).
- **Magnetic Physics:** Spring-based (`stiffness: 100, damping: 20`) pull on all CTAs.
- **Inline Image Typography:** Signature technique — small architectural photos embedded rounded within headline text.

## 7. Anti-Patterns (Banned)
- NO emojis.
- NO pure black (#000000).
- NO red shadows or neon outer glows.
- NO standard 3-column feature grids.
- NO "Scroll to explore" filler text or bouncing icons.
- NO AI clichés ("Elevate", "Seamless", "Unleash").
- NO oversized H1s that scream — hierarchy through weight/color.
