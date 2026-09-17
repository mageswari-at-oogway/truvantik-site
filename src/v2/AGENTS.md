# Work on v2 without changing v1

This directory and `../pages/v2/` are an isolated, user-approved design experiment.
The user has not authorised replacing or redirecting the original site.

Read `design.md` here for v2 visual rules, `README.md` for architecture and checks,
and root `PRODUCT.md` for product truth. Root design guidance describes v1;
this scoped guide overrides its full-height sections, palette switching and
shared-style requirements only inside v2.

- Keep all implementation under `src/v2/` and `src/pages/v2/`.
- Never import v1 layouts, scripts, components or CSS. The approved logo is an
  intentional isolated snapshot in `components/Mark.astro`; do not redesign it.
- Add links through `routes.ts`; content shared across pages belongs in `content.ts`.
- Keep `/v2/design.md` derived from the one local design file, not a second copy.
- No theme persistence, cookies, telemetry, backend form submission, dependencies,
  original-route links or global configuration changes without explicit approval.
  The footer's clearly labelled original-site comparison link is intentional.
- CSS motion must have static content, reduced-motion support and visibility gating.
- Contact data stays in memory. Do not add storage, logs or a fake sent state.
- Keep representative scenarios labelled. Do not invent performance or legal claims.
- Run `npm run build` and `node src/v2/checks/verify.mjs`; never refresh the
  incumbent hash baseline merely to make a failing isolation check pass.
- Run `node src/v2/checks/typecheck.mjs` for content, route and browser-script types.
- Check mobile/desktop, keyboard menu, contact errors/draft, no-JS and reduced motion.
- A design promotion to `/` is a separate user decision, not cleanup.
