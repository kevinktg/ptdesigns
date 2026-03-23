# PTDesigns Reskin Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Reskin the Capsule scaffold with Parm Tjhung Designs brand — color palette, typography, text content, and logo.

**Architecture:** Find-and-replace color hex codes across 22 files (106 occurrences), swap brand text in components and constants, add Playlist Display font for headings, replace the SVG logo.

**Tech Stack:** React 19, Vite, Tailwind CSS v4, GSAP, Inter + Playlist Display (Google Fonts)

---

## Color Mapping

| Role | Old (Capsule) | New (PTDesigns) | Notes |
|------|--------------|-----------------|-------|
| Background/black | `#181717` | `#131313` | Also `--base-100` |
| Dark surface | `#292725`, `#2a2725`, `#2b2825` | `#1E1C1C` | Also `--base-200`, cards, buttons |
| Primary text (light) | `#f4efe7`, `#f2ede5`, `#f1ece4`, `#eae5dd` | `#f4f4f4` | Headings, body on dark bg |
| Accent/muted text | `#b1a696`, `#b3a694`, `#aca192`, `#aaa091`, `#a79c8d` | `#BFA77A` | Gold accent — links, labels, tags |
| Divider/border | `#4f4b48`, `#524e4b` | `#787D76` | Sage — progress bars, borders |
| Button border/hover | `#aaa090`, `#c4c1b9` | `#787D76` | Sage for borders, `#BFA77A` for hover |
| Section gradient mid | `#1f1d1b` | `#1E1C1C` | Choose section gradient |

---

### Task 1: CSS Variables and Global Styles

**Files:**
- Modify: `frontend/src/index.css`

**Step 1: Update CSS custom properties and body background**

Replace `:root` block and body styles:

```css
:root {
	--base-100: #131313;
	--base-200: #1E1C1C;
	--base-300: #f4f4f4;
}

html,
body {
	background-color: #131313;
```

**Step 2: Add Playlist Display font import**

Add to top of `index.css` (before tailwind import):

```css
@import url("https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&family=Playfair+Display:ital,wght@0,400..900;1,400..900&display=swap");
```

Note: Playlist Display is a Canva font — closest Google Fonts match is **Playfair Display** (serif display heading font). If Parm has the actual Playlist Display font files, self-host instead.

**Step 3: Update all hardcoded colors in index.css**

Apply these replacements throughout the file:
- `#2A2725` / `#2a2725` -> `#1E1C1C`
- `#f4efe7` -> `#f4f4f4`
- `#181717` -> `#131313`
- `#1f1d1b` -> `#1E1C1C`
- `#2b2825` -> `#1E1C1C`
- `#b1a696` -> `#BFA77A`

**Step 4: Verify dev server starts**

Run: `cd frontend && npm run dev`
Expected: Compiles without errors

**Step 5: Commit**

```bash
git add frontend/src/index.css
git commit -m "style: update CSS variables and global colors to PTDesigns palette"
```

---

### Task 2: Component Color Replacements — Batch 1 (JSX files)

**Files:**
- Modify: `frontend/src/components/Hero/Hero.jsx`
- Modify: `frontend/src/components/Welcome/Welcome.jsx`
- Modify: `frontend/src/components/Choose/Choose.jsx`
- Modify: `frontend/src/components/Activities/Activities.jsx`
- Modify: `frontend/src/components/Navbar/Navbar.jsx`
- Modify: `frontend/src/components/Buttons/ReserveBtn.jsx`
- Modify: `frontend/src/components/Buttons/Logo.jsx`
- Modify: `frontend/src/components/MapLink/MapLink.jsx`
- Modify: `frontend/src/components/MapLink/ClickIndicator.jsx`

**Step 1: Find-and-replace colors across all JSX files**

Apply these replacements in every file listed above (Tailwind classes and inline styles):

| Find | Replace |
|------|---------|
| `#f4efe7` | `#f4f4f4` |
| `#f2ede5` | `#f4f4f4` |
| `#f1ece4` | `#f4f4f4` |
| `#eae5dd` | `#f4f4f4` |
| `#b1a696` | `#BFA77A` |
| `#b3a694` | `#BFA77A` |
| `#aca192` | `#BFA77A` |
| `#aaa091` | `#BFA77A` |
| `#a79c8d` | `#BFA77A` |
| `#aaa090` | `#787D76` |
| `#2a2725` | `#1E1C1C` |
| `#2A2725` | `#1E1C1C` |
| `#181717` | `#131313` |
| `#4f4b48` | `#787D76` |
| `#524e4b` | `#787D76` |
| `#4e484e` | `#787D76` |
| `#c4c1b9` | `#787D76` |

**Step 2: Verify no old color hex codes remain**

Run: `cd frontend && grep -rn "#2a2725\|#b1a696\|#f4efe7\|#181717\|#eae5dd" src/components/`
Expected: No matches

**Step 3: Commit**

```bash
git add frontend/src/components/
git commit -m "style: apply PTDesigns color palette to component JSX files (batch 1)"
```

---

### Task 3: Component Color Replacements — Batch 2 (Remaining JSX + CSS)

**Files:**
- Modify: `frontend/src/components/Gallery/Gallery.jsx`
- Modify: `frontend/src/components/Gallery/gallery.css`
- Modify: `frontend/src/components/StickyCols/StickyCols.jsx`
- Modify: `frontend/src/components/Feedback/Feedback.jsx`
- Modify: `frontend/src/components/Footer/Footer.jsx`
- Modify: `frontend/src/components/Footer/FooterTitle.jsx`
- Modify: `frontend/src/components/Footer/footertitle.css`
- Modify: `frontend/src/components/Showcase/Showcase.jsx`
- Modify: `frontend/src/components/FooterBanner/FooterBanner.jsx`
- Modify: `frontend/src/components/Marquee/marqueetext.css`
- Modify: `frontend/src/components/Activities/activities.css`
- Modify: `frontend/src/components/MapLink/overlay.css`
- Modify: `frontend/src/components/Layouts/MarqueeSticky.jsx`

**Step 1: Apply same color mapping as Task 2 to all files above**

Same find-replace table. CSS files also need:
- `gallery.css`: `#f4efe7` -> `#f4f4f4`, `#2b2825` -> `#1E1C1C`
- `activities.css`: `#181717` -> `#131313`, `#f4efe7` -> `#f4f4f4`
- `footertitle.css`: `#f4efe7` -> `#f4f4f4`
- `marqueetext.css`: `#f4efe7` -> `#f4f4f4`
- `overlay.css`: `#f4efe7` -> `#f4f4f4`

**Step 2: Verify no old hex codes remain anywhere in src/**

Run: `cd frontend && grep -rn "#2a2725\|#2A2725\|#b1a696\|#f4efe7\|#181717\|#eae5dd\|#292725\|#2b2825\|#b3a694\|#aca192\|#aaa091\|#aaa090\|#4f4b48\|#c4c1b9\|#f2ede5\|#f1ece4\|#a79c8d\|#524e4b\|#4e484e\|#1f1d1b" src/`
Expected: No matches (0 results)

**Step 3: Commit**

```bash
git add frontend/src/
git commit -m "style: complete PTDesigns color palette migration across all files"
```

---

### Task 4: Logo Replacement

**Files:**
- Modify: `frontend/src/components/Buttons/Logo.jsx`

**Step 1: Replace the inline SVG**

The current Logo.jsx contains a Capsule "OR" logomark as inline SVG. Replace the entire SVG path data with Parm's "PT" script monogram.

Option A — If Parm's logo SVG is available at `D:/projects/sites/assets/` (none found with "pt" prefix — check with Kev), import it:

```jsx
import ptLogo from '../../assets/pt-logo.svg';

const Logo = () => {
    return (
        <div className='relative z-0'>
            <div className="w-14 absolute top-[2vw] left-7">
                <img src={ptLogo} alt="PT Designs" className="w-full" />
            </div>
        </div>
    )
}
```

Option B — Export the PT monogram SVG from the Canva brand guide, save as `frontend/src/assets/pt-logo.svg`, then use Option A.

**Step 2: Commit**

```bash
git add frontend/src/components/Buttons/Logo.jsx frontend/src/assets/pt-logo.svg
git commit -m "feat: replace Capsule logo with PTDesigns monogram"
```

---

### Task 5: Brand Text — Constants Files

**Files:**
- Modify: `frontend/src/constants/welcome.js`
- Modify: `frontend/src/constants/activites.js`
- Modify: `frontend/src/constants/feedback.js`

**Step 1: Update welcome.js**

Text is already PTDesigns-branded ("Parm is a Perth-based architect..."). Review and keep as-is, or update if Kev provides new copy.

**Step 2: Update activites.js**

Already says "Discover our design services" — keep or update.

**Step 3: Update feedback.js**

Already PTDesigns-branded with Perth clients. Keep or update with real client names/testimonials when available.

**Step 4: Commit (only if changes made)**

```bash
git add frontend/src/constants/
git commit -m "content: update constants with PTDesigns brand copy"
```

---

### Task 6: Brand Text — Inline Component Copy

**Files:**
- Modify: `frontend/src/components/Hero/Hero.jsx` (already says "PTDesigns")
- Modify: `frontend/src/components/Gallery/Gallery.jsx` (category labels)
- Modify: `frontend/src/components/Showcase/Showcase.jsx` (activity descriptions)
- Modify: `frontend/src/components/Footer/Footer.jsx` (footer links, Moyra attribution)
- Modify: `frontend/src/components/Footer/FooterTitle.jsx` (giant "PTDesigns" text)
- Modify: `frontend/src/components/FooterBanner/FooterBanner.jsx` (CTA)
- Modify: `frontend/src/components/MapLink/MapLink.jsx` (location)
- Modify: `frontend/src/components/Layouts/MarqueeSticky.jsx` (subtitle)
- Modify: `frontend/src/components/Marquee/MarqueeText.jsx` ("Why PTDesigns?")
- Modify: `frontend/src/components/Preloader/PreloaderII.jsx` (preloader brand)

**Step 1: Review — most text already says "PTDesigns"**

Already branded components (no change needed):
- Hero: "PTDesigns", "Design That Speaks—Before You Do"
- FooterTitle: "PTDesigns"
- FooterBanner: "PTDesigns", "Start Your Project"
- MapLink: "PTDesigns studio is located in Perth, WA"
- MarqueeText: "Why PTDesigns?"
- MarqueeSticky: "the PTDesigns difference"
- PreloaderII: "PTDesigns"

**Step 2: Update Showcase.jsx — replace desert/activity copy with architecture copy**

Current text references desert buggy tours, hikes, rock climbing. Replace with PTDesigns service categories:

Image 1 overlay text:
- Title: `Luxury Residential<br />Architecture` (was "Buggy tours in the desert")
- Tag: `Residential` (was "Easy")
- Description: `Bespoke homes designed around light, space, and the<br />way you live — crafted for Perth's unique landscape.`
- Counter: `01` / `03`

Image 2 overlay text:
- Title: `Commercial<br />Fit-Outs` (was "Breathtaking desert hikes")
- Tag: `Commercial` (was "Medium")
- Description: `Refined workspaces that elevate your brand —<br />from boutique offices to large-scale commercial interiors.`
- Counter: `02` / `03`

Image 3 overlay text:
- Title: `Interior<br />Architecture` (was "Exciting rock climbing")
- Tag: `Interior` (was "Hard")
- Description: `Material, light, and spatial composition —<br />interiors that feel considered in every detail.`
- Counter: `03` / `03`

**Step 3: Update Gallery.jsx — category labels already correct**

Already says "Residential", "Commercial", "Interior". Keep. Update bottom description text:
- Change `PTDesigns delivers refined aesthetics and considered interiors — creating architecture that endures in Perth and beyond` — this is already correct, keep.

**Step 4: Update Footer.jsx**

- Change Moyra attribution: `"This website is just the concept work done by—Moyra"` -> `"Website designed and developed by—Good AI Australia"` (or whatever Kev wants)
- Change `contact us` link to actual contact method
- Update nav links to match actual sections: Welcome, Services, Gallery, Projects, Testimonials, Contact

**Step 5: Commit**

```bash
git add frontend/src/components/
git commit -m "content: update component copy to PTDesigns architecture services"
```

---

### Task 7: Typography — Add Playfair Display for Headings

**Files:**
- Modify: `frontend/src/index.css`

**Step 1: Add heading font-family rule**

After the existing `font-family: "Inter"` body rule, add heading styles:

```css
h1, h2, h3 {
    font-family: "Playfair Display", serif;
}
```

This applies the display font to all headings while keeping Inter for body text, matching the brand guide's type hierarchy.

**Step 2: Verify visually**

Run: `npm run dev`
Check: Headings render in Playfair Display, body text in Inter.

**Step 3: Commit**

```bash
git add frontend/src/index.css
git commit -m "style: add Playfair Display heading typography"
```

---

### Task 8: Config — Base Path (if deploying under different name)

**Files:**
- Modify: `frontend/vite.config.js`
- Modify: `frontend/src/Router/Router.jsx`

**Step 1: Confirm base path with Kev**

Current base path is `/ptdesigns/`. If the GitHub repo name stays `ptdesigns`, no change needed. If changing:

`vite.config.js`:
```js
base: '/new-repo-name/',
```

`Router.jsx`:
```jsx
path: "/new-repo-name",
```

**Step 2: Commit (only if changed)**

```bash
git add frontend/vite.config.js frontend/src/Router/Router.jsx
git commit -m "config: update base path for deployment"
```

---

### Task 9: Build Verification

**Step 1: Run lint**

Run: `cd frontend && npm run lint`
Expected: No errors

**Step 2: Run production build**

Run: `cd frontend && npm run build`
Expected: Build succeeds, outputs to `frontend/dist/`

**Step 3: Preview build**

Run: `cd frontend && npm run preview`
Expected: Site loads with new colors, fonts, and text. Verify:
- Gold (#BFA77A) accent on links, tags, muted text
- Near-black (#131313) backgrounds
- Sage (#787D76) borders and dividers
- Off-white (#f4f4f4) primary text
- Playfair Display on headings
- PTDesigns branding throughout
- All GSAP animations still work (scroll-triggered)

**Step 4: Final commit**

```bash
git add -A
git commit -m "chore: PTDesigns reskin complete — colors, typography, content"
```

---

## Execution Notes

- Tasks 1-3 are pure find-replace — can be parallelized
- Task 4 (logo) is blocked until PT monogram SVG is exported from Canva
- Tasks 5-6 are text changes — straightforward
- Task 7 depends on font confirmation (Playfair Display vs actual Playlist Display)
- No tests exist in this project, so verification is visual
