# v2 verification — 6 September 2026

## Passed

- Production build: nine existing pages, nine v2 pages, both design.md endpoints.
- Exact SHA-256 preservation of 29 original source files and all 16 original build files.
- 188 v2 local links and fragments resolve; route output contains only the intended pages.
- Original picker routes remain absent; no obsolete brand name in the v2 output.
- Static semantic checks: one h1, unique IDs, skip target and explicit preview noindex.
- Contrast checks on primary/supporting/metadata text, action fills, green close,
  error text and control/focus boundaries.
- Strict TypeScript check of `content.ts`, `routes.ts`, and both embedded browser scripts.
- Desktop 1440px and mobile 390px page-family review; 320px checks of all nine
  pages and 768px navigation boundary: no horizontal page overflow.
- Mobile menu opens, Escape closes it and returns focus to its toggle.
- Contact starting-point query preselects a known option.
- Empty required fields and invalid email show associated messages and focus the first error.
- Valid local test data prepares an encoded mailto draft; the form does not send it.
- Copy draft works; editing details invalidates the stale draft without discarding inputs.
- Orbital signals run onscreen and pause offscreen.
- No browser console errors observed in the checked production pages.
- Impeccable scoped detector: no findings. Independent finish review: accepted;
  no material UI or code defects identified.

## Limits and launch decisions

Reduced-motion and no-JavaScript fallbacks were verified in source and static
checks, not by live browser emulation. The copy-permission-denied fallback was
inspected in code, not forced in the browser. This is not comprehensive
screen-reader, cross-browser or accessibility certification.

No email was sent, no external backend was added, and no deployment was made.
Legal placeholders still require owner review. v2 is a public-capable static
preview marked noindex, not an authenticated/private environment. Promotion to
the original routes is a separate user decision.

Visual references and screenshot evidence are in `.impeccable/mocks/v2/`.
