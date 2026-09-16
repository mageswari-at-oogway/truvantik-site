---
name: Truvantik / dark editorial
description: The original dark, animated Truvantik identity, refined with coordinated logo colors and readable motion.
---

# Truvantik design system

## Brand context and direction

Preserve the original dark editorial website: Outfit typography, compact headline
scale, generous full-height desktop sections, thin rules, subtle grids and animated
workflow graphics. The user explicitly preferred this direction to the subsequent
Mineral/Graphite light-and-static redesign. Do not reintroduce that redesign.

The two requested improvements are specific: make the logo palette belong to the
page, and make the animated graphics clearer and more purposeful. Keep the settled
T–V diamond geometry. The approved multicolor mark uses a soft-white top beam, saffron chevron and
green bottom anchor on a dark diamond. The page echoes those colors by role.

This document is the canonical visual reference. Its organization draws from
[Vercel's design.md](https://vercel.com/design.md), without adopting Vercel's brand.
Read PRODUCT.md for product context and factual constraints.

## Priority order

1. Preserve the chosen dark editorial identity, layouts, logo geometry and content.
2. Use saffron for actions, white for text and green for workflow outcomes.
3. Make graphics readable at every point in the animation.
4. Preserve keyboard access, reduced motion, responsive behavior and truthful copy.
5. Refine within the existing Astro/CSS implementation.

Do not interpret a request to improve motion as permission to remove the visual
character. Likewise, do not interpret a palette refinement as a new brand exercise.

## Integrate with the project

| File | Responsibility |
| --- | --- |
| src/styles/tokens.css | Colors, type scale, radii, container width and easing |
| src/styles/global.css | Layout primitives, buttons, focus, grids and shared motion governance |
| src/layouts/Base.astro | Shell, Outfit loading, visibility observers |
| src/components/Logo.astro | Canonical T–V monogram and wordmark |
| src/components/WorkflowOrbit.astro | Active hero diagram |
| src/components/CtaBand.astro | Original dark closing section |
| src/pages/index.astro | Original hero, choices, process and clinical example |
| src/pages/design.md.ts | Serves this same file at /design.md |

Keep plain CSS and small browser scripts. Do not add a motion library for effects
that CSS already handles. The unused DeliveryDiagram component (an artifact of the
rejected static direction) and the unused exploratory BrandGraphic component have
been removed; do not reintroduce them as design references. The former logo picker
route and source have also been removed; do not reintroduce /logo-preview or
/logo-picker without a user request.

## Composition and typography

Preserve the original page structures and section order. The home hero has text
on the left and orbital workflow art on the right. Three engagement choices,
Assess–Build–Deploy graphics and the clinical example follow. Inner pages keep
their established editorial compositions.

Use Outfit at weights 400–700, with the existing system fallbacks. Display and
body share the family. The legacy mono token also resolves to Outfit.

| Role | Runtime token |
| --- | --- |
| Page title | --page-title / --step-5: clamp(2.4rem, 1.9rem + 2.2vw, 3.9rem) |
| Major heading | --step-4: clamp(2rem, 1.6rem + 1.6vw, 3rem) |
| Item heading | --step-2: clamp(1.3rem, 1.15rem + .6vw, 1.7rem) |
| Lead | --step-1: clamp(1.1rem, 1.02rem + .32vw, 1.28rem) |
| Body | --step-0: clamp(.96rem, .93rem + .16vw, 1.05rem) |

Headings are compact, balanced and closely tracked; body copy uses comfortable
line spacing. Preserve the original section labels and numbering where they
belong to that identity. Do not enlarge typography into the rejected redesign.

The shared container is 1180px, with gutters
clamp(1.15rem, .5rem + 3vw, 3rem). Desktop sections retain the original 100svh
rhythm and proximity snapping. Mobile retains the original stacked layouts with
normal scrolling; header navigation collapses at 860px. Service chapters stack
at 1100px to prevent their three-column layout from crowding.

## Palette and surfaces

Saffron & green on neutral charcoal is the one and only palette. Saffron owns
primary actions and emphasis; soft white owns text; muted green identifies
supporting workflow outputs. There is no theme switching: `tokens.css` holds a
single `:root` block and nothing reads or writes a saved theme.

| Palette role | Value |
| --- | --- |
| Canvas / secondary canvas | #0b0c0e / #111315 |
| Surface / hover / raised | #17191c / #202327 / #2b3035 |
| Primary / supporting / metadata text | #f3f2ee / #c0c2c4 / #989da3 |
| Border / strong border / section rule | #30353a / #687078 / #24282d |
| Saffron action / hover / text on action | #f2a64b / #ffc47e / #211507 |
| Green workflow output / text on green | #79b991 / #101d15 |
| Validation error | #ffb1ad |

Use --accent for saffron and --highlight for muted green. The retired aliases
--orange, --orange-2, --teal, --surface-solid and --glass are gone: use --accent,
--accent-hover, --highlight and --surface instead. Do not distribute saffron and
green equally across every section. Use neutral charcoal surfaces rather than
green- or orange-tinted canvases.

Keep fills near black with gently tinted elevated surfaces. Grid lines are faint
at 2.5% foreground opacity. No grain overlay is used. Borders and spacing carry
most of the structure. Keep the original modest corner radii: 6px controls,
10px cards, 14px large surfaces and 18px extra-large surfaces.

## Logo color contract

Logo geometry is fixed. The mark is multicolor by design.

| Token / component | Value |
| --- | --- |
| --logo-face / dark diamond | #17191c |
| --logo-corner / top beam | #f3f2ee |
| --logo-mark / upward chevron | #f2a64b |
| --logo-anchor / bottom anchor | #79b991 |
| --logo-stroke / diamond outline | #687078 |

The wordmark uses current text color. Header, footer, hero center and closing
mark use the canonical Logo component. The favicon uses the same colors and
geometry. Do not collapse the beam and anchor into one token: their distinct
white and green roles are intentional.

## Motion design

### Hero workflow

The orbital frame stays, but motion explains a process rather than spinning the
brand mark. The hero uses a 7.2-second repeating cycle:

- Two incoming signals travel from customer requests and documents toward the core.
- A restrained outline response shows the core receiving the information.
- Three green outgoing signals travel into CRM, operations and the knowledge base.
- A quiet rest gives the visitor time to read before the next cycle.

The logo does not rotate or flip. Input labels, system labels and the final
workflow caption stay visible throughout. Signal movement uses stroke-dashoffset;
the bounded core outline uses opacity and transform. No canvas or extra runtime
is needed.

### Supporting graphics

Keep the original point/line/plane progression, service micro-graphics, clinical
review sequence and gentle closing-mark motion. Supporting graphics remain
subordinate to their adjacent content. Clinical copy and review status have
readable resting states; motion is emphasis, not access to the information.

### Control and visibility

The user has approved the current animation and requested no visible playback
control. Keep the graphic free of pause/resume buttons. Reduced-motion settings
still disable animation.

Shared section observers set --motion-state. CSS animations pause offscreen and
when the document is hidden. Returning to view resumes them. Do not add an
uncontrolled infinite animation outside this mechanism.

Honor prefers-reduced-motion: reduce. The hero resolves to a static connection
diagram with all text intact; CSS motion and smooth scrolling stop. Default
content remains visible when JavaScript fails. Retain the original brief
interaction feedback, but no moving label may become unreadable.

## Controls and accessibility

Keep the original solid/ghost button treatments and their existing modest hover
feedback. Solid accent buttons use --accent with --accent-ink text and hover to
--accent-hover, never unconditional white. Focus stays visible on every surface.
Small controls target at least 44px.

The mobile menu exposes expanded state and Escape returns focus to its toggle.
Preserve aria-current on navigation.

Keep the contact preview's accessibility repairs: field error associations,
polite announcements, first-invalid-field focus and visible danger colors.
The form does not deliver messages; never show a sent confirmation without a
real endpoint. Preserve the illustrative clinical label and all case-study
qualifications.

## Verification

- Build all routes and confirm /design.md matches this file.
- Inspect the original compositions at desktop and mobile widths.
- Check that logo colors harmonize with the page and no obsolete logo drawing appears.
- Watch a complete hero cycle: inputs, core response, outputs and rest.
- Test offscreen pause, document visibility and reduced-motion behavior.
- Check reduced-motion and no-JavaScript resting states.
- Check navigation, mobile menu keyboard interaction and contact validation.
- Verify body text at 4.5:1 and control/focus boundaries at 3:1 where applicable.
- Preserve claims, routes and the user's existing artwork when refining further.
