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
| `/` | `src/pages/index.astro` | Home — hero, animated workflow, differentiators, entry points, Assess·Build·Deploy, Tapioca Health proof, CTA |
| `/services` | `src/pages/services.astro` | Four service lines, each with its own product-moment visual |
| `/industries` | `src/pages/industries.astro` | Four sectors with animated count-up outcome ranges |
| `/work` | `src/pages/work.astro` | Case studies — Tapioca Health + 3 representative scenarios |
| `/about` | `src/pages/about.astro` | Story, corporate structure, four commitments, "what we will not do" |
| `/contact` | `src/pages/contact.astro` | Qualification form (client-side validation) + "what happens next" |
| `/privacy`, `/terms` | `src/pages/{privacy,terms}.astro` | Legal placeholders (see "Needs real content") |

---

## Design system

[design.md](./design.md), also served at [/design.md](http://localhost:4321/design.md),
is the canonical visual reference. It preserves the earlier dark editorial design:
Outfit, original layouts, full-height desktop sections and animated graphics.

Saffron & green on neutral charcoal is the site's single palette — one `:root`
block in `tokens.css`, no theme switcher and no `data-theme` attribute. The
multicolor logo uses a soft-white top beam, saffron chevron and muted-green
anchor. Saffron marks actions; green supports workflow outputs. Logo geometry and
animation timing are unchanged.

The hero keeps its orbital composition with an improved input → core → systems
sequence. Labels remain visible. There is no visible playback control; animations
pause offscreen and while the document is hidden. Reduced
motion uses static diagrams.

- `src/styles/tokens.css`: canonical theme and geometry values.
- `src/styles/global.css`: original primitives and shared motion governance.
- `src/components/WorkflowOrbit.astro`: animated workflow.
- `src/components/Logo.astro`: canonical shared mark.

The unused BrandGraphic and DeliveryDiagram components have been removed along
with the theme picker. The former logo picker route and source are also gone.

## Verification

Run `npm run build` for all routes. Check mobile navigation, keyboard focus,
contact validation and narrow-screen overflow after UI changes.
The main contact form posts to `https://formspree.io/f/xnpnqpow` using vanilla JavaScript AJAX,
with a native HTML POST fallback when JavaScript is unavailable. No server adapter,
API key or additional package is required. Recipient routing is managed in Formspree.
The `/v2/contact` route remains an email-draft preview.

---

## Needs real content / confirmation before launch
- **Form delivery** — verify the recipient configuration in Formspree and confirm a
  real submission reaches the intended inbox after deployment.
- **Scheduling URL** (Calendly or equivalent) for the "book a call" paths.
- **Industry outcome ranges** (15–25% clinical time, 5–15% conversion, 20–35% downtime,
  sub-100ms latency) — confirm defensible as published, or soften.
- **Case studies** — sign-off on the Tapioca Health / 3BP Labs wording; approval to keep the three
  composites labelled as *representative scenarios*, or replace with real published ones.
- **Data-handling / security wording** for procurement (residency, certifications, model-training
  policy) — currently absent in the source material.
- **Team / founder bios** if a "meet the team" element is wanted.
- **Privacy Policy & Terms** — real legal copy (current pages are flagged placeholders).
- **Logo** — the current T–V vector monogram is settled. Preserve the canonical component
  and favicon when changing interface colors.

---

## Notes
- Copy is sourced from the real brand and edited with the seven-sweeps copy pass. The brand's
  ethos is deliberately *no invented numbers* — keep it that way.
- The full content/structure rationale lives in `Truvantik website build brief.md`.
