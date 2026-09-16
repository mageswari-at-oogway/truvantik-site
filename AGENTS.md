# Working on Truvantik

Read [design.md](./design.md) before changing the interface. It owns the visual
system across all marketing routes. Read [PRODUCT.md](./PRODUCT.md) for product
context and factual constraints.

Use the shared tokens in `src/styles/tokens.css` and primitives in
`src/styles/global.css`. Preserve the settled logo. Saffron & green on neutral
charcoal is the single palette: `tokens.css` has one `:root` block, there is no
theme switching and no `data-theme` attribute. New pages must work in that
palette and support mobile layouts, keyboard use and reduced motion. Keep the
logo multicolor: soft-white top beam, saffron chevron, green anchor on a dark
diamond.
The earlier dark editorial design and animated character are the user's chosen
direction. Refine them; do not replace them with a light/static redesign.
Keep logo geometry and its multicolor identity intact; echo saffron in actions
and green in workflow outcomes.

The former logo picker route and source, the theme picker, and the unused
BrandGraphic and DeliveryDiagram components have been removed. Do not recreate
them without a user request.

After UI changes, run `npm run build` and check representative desktop and mobile
views. Update `design.md` when intentionally changing a durable design rule.
