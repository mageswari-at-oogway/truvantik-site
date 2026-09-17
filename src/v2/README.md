# Truvantik v2

An additive preview of the entire marketing site. Open `/v2/` using the existing
`npm run dev` server. No install, dependency or configuration changes are needed.

## Ownership map

| Concern | Source |
| --- | --- |
| Page entry points | `../pages/v2/` |
| Shell, navigation, visibility-gated motion | `Layout.astro` |
| Typed routes and contact-link construction | `routes.ts` |
| Shared service, industry and scenario content | `content.ts` |
| Design tokens, layout, responsive states | `styles.css` |
| Reusable UI and exact approved logo snapshot | `components/` |
| Human-readable design contract | `design.md` (served at `/v2/design.md`) |
| Original-site preservation and route checks | `checks/verify.mjs` |

The v2 module graph does not import the original layout, components or CSS.
The logo snapshot is intentionally duplicated to prevent shared build-asset
factoring from changing v1. The existing favicon is a read-only dependency.
The Outfit font is loaded with `display=swap`, matching the approved identity.

## Routes and behaviour

All nine original content areas have v2 counterparts: home, services, industries,
work, why-truvantik, about, contact, privacy and terms. Navigation stays under
`/v2` except for mail, Tapioca Health and the footer's explicit original-site link.
Pages are `noindex, nofollow`; this is not an access-control mechanism.
There are no redirects, rewrites or changes to existing theme storage.

The contact form is an email composer, not a delivery endpoint. It validates and
prepares a `mailto:` draft; the visitor must send it in their email app. Copy and
selectable text provide an alternative when a mail handler or Clipboard API is
unavailable. No form contents are sent to a server, stored persistently or logged.
The form is hidden without JavaScript, with direct email guidance visible instead.
Changing details invalidates a prepared draft. Legal copy remains owner-review
placeholder text; it has not been certified for launch.

## Verify

```sh
npm run build
node src/v2/checks/verify.mjs
node src/v2/checks/typecheck.mjs
```

The check compares SHA-256 hashes of 26 incumbent source files and all 16
pre-v2 production files. It also checks nine routes, internal links and anchor
targets, unique IDs, one h1 per page, skip targets, noindex, absent picker routes,
the markdown endpoint, token contrast, and static fallback contracts. The focused
TypeScript command checks the shared content and route modules plus the embedded
browser scripts, not Astro template markup. It uses the existing locked TypeScript
installation; no package changes are needed.
A future intentional v1 edit will fail this snapshot
check; review that change explicitly instead of silently updating the baseline.

For visual checks, `npm run preview -- --port 4322` serves the production build
without the development toolbar. Inspect desktop and mobile, narrow widths,
keyboard navigation, required/invalid contact input, email draft/copy/edit,
offscreen motion pause and the reduced-motion/static fallback.

## Remove or promote

Rollback is deletion of the two isolated source directories, `src/pages/v2/`
and `src/v2/`, followed by a rebuild. Nothing in v1 imports them. Optional design
references and QA captures are in `.impeccable/mocks/v2/`; removing those has no
runtime effect. The surface brief at `.impeccable/surfaces/src-pages-v2-index-astro.md`
is also v2-only documentation. Keep these while the design is being reviewed.

Promoting v2 to the primary routes needs a separate approval and migration review,
including canonical URLs, indexing, legal text and actual contact delivery.
