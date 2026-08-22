# Truvantik — marketing site

AI consulting brand site for **Truvantik** (the AI consulting brand of Prabhaavi Solutions).
Static, fast, accessible. Built with **Astro** + vanilla CSS. No runtime framework, no external
calls except Google Fonts.

Positioning: *AI strategy, shipped. Results, not prototypes.* — one partner from first assessment
to live deployment, engineering-led, cross-industry.

---

## Run it

```bash
npm install
npm run dev      # local dev server (http://localhost:4321)
npm run build    # production build -> dist/
npm run preview  # serve the production build
```

Node 18+ recommended (built and tested on Node 26).

---

## Pages

| Route | File | What it is |
| --- | --- | --- |
| `/` | `src/pages/index.astro` | Home — hero, differentiators, live roadmap, entry points, Assess·Build·Deploy, Kron Health proof, CTA |
| `/services` | `src/pages/services.astro` | Four service lines, each with its own product-moment visual |
| `/industries` | `src/pages/industries.astro` | Four sectors with animated count-up outcome ranges |
| `/work` | `src/pages/work.astro` | Case studies — Kron Health + 3 representative scenarios |
| `/about` | `src/pages/about.astro` | Story, corporate structure, four commitments, "what we will not do" |
| `/contact` | `src/pages/contact.astro` | Qualification form (client-side validation) + "what happens next" |
| `/privacy`, `/terms` | `src/pages/{privacy,terms}.astro` | Legal placeholders (see "Needs real content") |

---

## Design system

### Design thesis
1. **Editorial, not templated** — warm near-black canvas, generous air, one signature
   orange→teal gradient as the only recurring "colour event" (headlines, glows, strokes, the mark).
2. **Depth over boxes** — glass panels floating over a soft animated aurora + fine grain;
   motion is physical (spring, stagger, glow).
3. **One geometric language** — the diamond / grid / phase-flow recurs so every product moment
   reads as one system across all three themes.

### Tokens — `src/styles/tokens.css`
Everything reads CSS custom properties. Categories: type (`--font-*`, fluid `--step-*`),
geometry (`--radius-*`, `--maxw`, `--gutter`, easings), brand hues (`--teal`, `--orange`,
`--grad`), and per-theme surfaces/ink/border/glow/shadow.

### Themes
Three themes, switched by `data-theme` on `<html>`, persisted to `localStorage` (`tv-theme`),
with a no-flash inline script in `Base.astro`:

- **dark** (default) — warm near-black + gradient signature
- **light** — warm editorial off-white
- **bauhaus** — flat, sharp-cornered, hard offset shadows, primary red/blue/yellow

**Adding a theme is one block:** copy a `[data-theme="x"] { … }` block in `tokens.css` and add
the name to the `order`/`names` arrays in `src/components/ThemeToggle.astro`.

### Motion (all respect `prefers-reduced-motion`)
- Reveal-on-scroll (IntersectionObserver, `.reveal` / `.reveal-clip`)
- Animated aurora backdrop + gradient text pan
- Signature roadmap state machine (`RoadmapBoard.astro`) — a card advances Assess→Build→Deploy on a timer, only while in view
- Magnetic primary buttons (`[data-magnetic]`, pointer:fine only)
- Count-up stats (`[data-count-to]`) on the industries page
- Phase-flow rail fills on scroll; sprint/orbit/node micro-visuals on services

### Layout
Full-viewport **scroll-snap** (`scroll-snap-type: y proximity`, `.snap` sections at
`min-height: 100svh`) on desktop; disabled under reduced-motion and on small screens so tall
content scrolls normally.

### Components — `src/components/`
`Logo.astro` (theme-aware diamond mark), `Header.astro` (sticky nav + mobile menu),
`Footer.astro`, `ThemeToggle.astro`, `RoadmapBoard.astro`, `CtaBand.astro`.

---

## Accessibility & performance
- Semantic HTML, skip link, labelled form controls with inline validation and `aria-invalid`,
  visible focus rings, `aria-expanded` on the mobile menu, descriptive `aria-label`s.
- All three themes checked for contrast; motion gated behind `prefers-reduced-motion`.
- No horizontal overflow at 375 / 768 / desktop.
- Self-contained: fonts from Google Fonts (preconnected); noise/aurora are inline CSS/data-URI;
  no images to ship yet (visuals are CSS/SVG).

---

## Needs real content / confirmation before launch
- **Form endpoint** — `contact.astro` validates and shows a success state client-side only.
  Wire the marked `NOTE:` to the CRM/form endpoint, then redirect to the real scheduling URL.
- **Scheduling URL** (Calendly or equivalent) for the "book a call" paths.
- **Industry outcome ranges** (15–25% clinical time, 5–15% conversion, 20–35% downtime,
  sub-100ms latency) — confirm defensible as published, or soften.
- **Case studies** — sign-off on the Kron Health / 3BP Labs wording; approval to keep the three
  composites labelled as *representative scenarios*, or replace with real published ones.
- **Data-handling / security wording** for procurement (residency, certifications, model-training
  policy) — currently absent in the source material.
- **Team / founder bios** if a "meet the team" element is wanted.
- **Privacy Policy & Terms** — real legal copy (current pages are flagged placeholders).
- **Logo** — the diamond mark is reconstructed from the live brand as inline SVG; swap for the
  official vector if one exists.

---

## Notes
- Copy is sourced from the real brand and edited with the seven-sweeps copy pass. The brand's
  ethos is deliberately *no invented numbers* — keep it that way.
- The full content/structure rationale lives in `Truvantik website build brief.md`.
