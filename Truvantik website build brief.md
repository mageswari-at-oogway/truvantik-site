# Final website build brief — Truvantik

## *Single source of truth for website design and development*

> **How this brief was built.** Content and structure are synthesized from a complete crawl of the two existing Truvantik references — [truvantik-site.vercel.app](https://truvantik-site.vercel.app) (a **single-page** boutique dev-shop direction) and [truvantik.lovable.app](https://truvantik.lovable.app) (a **full multi-page** consulting-firm site: home, services + 4 service detail pages, industries, case studies, why-us, about, contact, privacy, terms) — with visual inspiration from [deployment.inc](https://deployment.inc). Per direction agreed with the team: **blend both positionings** (consulting structure and depth + the boutique "talk to the builders" differentiators), **offer multiple visual themes** for selection (Section 3), and lead with **the free assessment / working session** as the primary conversion.

> **Key company facts (confirmed from the Lovable /about page and footer).** Truvantik is the **AI consulting brand of Prabhaavi Solutions** (the legal entity). Delivery is **alongside the 3BP Labs engineering team**, which gives engagements senior engineering capacity without a hiring cycle. **Tapioca Health** (digital clinic platform) was built by the team with 3BP Labs and is its own product brand, not a Truvantik service line. Brand name meaning: **Tru · vant · ik — true, vantage, intelligence & knowledge**, i.e. *"Your true advantage."* Contact: **hello@truvantik.com**.

---

# 1. Page mandate

### Objective

Build a focused site that converts organizations exploring AI into a scoped first engagement with Truvantik. The page must make one proposition immediately clear: **Truvantik turns AI strategy into deployed, used-in-production systems — one partner from first assessment to live deployment — and you talk directly to the people who build it.**

The core tension the site must resolve for the visitor: *most AI work stalls as demos and pilots.* Truvantik's promise is **results, not prototypes.**

### Primary audience, in order

1. Business and functional leaders who have been asked for "an AI plan" and suspect value but cannot yet name it (COO, Head of Ops, transformation leads)
2. Product and engineering leaders with a defined use case who need a team to ship it (CPO, VP Eng, Head of Product)
3. Leaders with a stalled pilot that works in a demo but not in the business (integration / adoption / ownership blockers)
4. Enterprise stakeholders validating a partner — procurement, data, security

### Primary conversion

**Start with a free assessment** (also phrased as *"Schedule a working session"*). A 30-minute call is positioned as usually enough to tell whether there is a real opportunity and what the first step should be.

### Secondary actions

- **Explore our approach** — anchors to the Assess · Build · Deploy section (ungated).
- **Read our case studies / See a proof point** — anchors to the featured proof point (Tapioca Health).

Both secondary CTAs are visually subordinate to the primary.

### Page-wide design rules

- The **Assess · Build · Deploy** spine is the backbone of the page. Every fold should be locatable on it.
- Lead with **outcomes and the partnership model**, not tooling or model names. Models are a means, chosen "by measurement, not fashion."
- Keep the **"you talk to the builders"** differentiator visible and repeated — it is the boutique edge inside the consulting frame. The person in your standup is the person whose code ships that afternoon.
- Use **real artifacts** where possible: the opportunity-roadmap board, phase diagrams, the Tapioca Health proof point. Label any representative UI **"Illustrative."**
- Keep the page to **eight folds**. Every fold must advance the story or the conversion.
- Choose **one** visual theme from Section 3 and apply it consistently. Restrained, purposeful motion only.
- The primary CTA label is always **"Start with a free assessment."** Do not introduce alternative CTA labels per fold.

### Navigation

`Truvantik (logo) | How we work | Services | Industries | Proof | FAQ | Start with a free assessment`

Sticky navigation on desktop; compact mobile header with the primary CTA always reachable.

---

# 2. Positioning and messaging spine

### One-line proposition

> **AI strategy, shipped. Results, not prototypes.**

### Supporting proposition

> For organizations figuring out where AI actually creates value, Truvantik turns AI strategy into deployed solutions — across industries, from first assessment to production — with nothing between you and the people doing the work.

### The three differentiators (repeat across the page)

1. **Engineering-led, not sales-led** — the people who scope your engagement are the people who build it.
2. **From first assessment to production** — one partner across strategy, build, integration and the deployment that follows.
3. **Cross-industry by design** — patterns proven in one sector, adapted rather than reinvented in yours.

### The spine every fold hangs from

**Assess · Build · Deploy** — every engagement sits somewhere on these three phases; service steps are the detail inside them.

- **Assess** — understand the work, the data and the constraints. Decide what is worth building and what is not.
- **Build** — build the smallest system that proves the outcome, then harden it against real data and real users.
- **Deploy** — deploy into your stack, measure it against the outcome, and hand over the knowledge to keep it running.

---

# 2b. Site architecture (single-page vs multi-page)

The two references sit at opposite ends here:

- **Vercel** = one long single page with anchor nav (`#services`, `#process`, `#principles`, `#contact`).
- **Lovable** = a full multi-page marketing site with dedicated, deep pages.

### Recommendation: multi-page site with a strong home page

The consulting positioning and enterprise audience are better served by dedicated pages (services, case studies, industries carry real depth that buyers and procurement will read). Proposed sitemap:

| Page | Route | Purpose |
| --- | --- | --- |
| Home | `/` | The 8-fold narrative in Section 4 — the full pitch, ending in the assessment CTA. |
| Services | `/services` | Overview of the four service lines. |
| Service detail ×4 | `/services/{slug}` | Deep page per service (template in Section 4b). |
| Industries | `/industries` | Sector patterns + per-industry outcome ranges, with hash anchors per sector. |
| Case Studies | `/work` | Tapioca Health + representative scenarios (Section 4c). |
| Why Us | `/why-truvantik` | Four commitments + "What we will not do". |
| About | `/about` | Founder-led story, corporate structure (Prabhaavi / 3BP Labs / Tapioca Health). |
| Contact | `/contact` | Qualification form + "what happens next" + book-a-call. |
| Privacy / Terms | `/privacy`, `/terms` | Legal. |

**Alternative (if a faster/lighter launch is wanted):** ship the **home page as a strong single-page site first** (Section 4 is written so it stands alone), then add inner pages in a second phase. The home-page fold spec below works for either choice.

---

# 3. Visual theme options (choose one)

Three complete, internally-consistent directions. Each is a full system, not just a palette. Pick one; the fold-by-fold spec (Section 4) is theme-agnostic and applies to whichever is chosen.

### Theme A — "Signal" (Premium dark + minimal) — *recommended for enterprise trust*

Lineage: the Lovable direction crossed with deployment.inc's confidence.

- **Base:** deep navy / near-black canvas (`#0B0F1A`), layered dark panels for depth.
- **Accent:** warm orange (`#E8622C` / coral-orange), used sparingly for CTAs, the diamond logo mark, and phase highlights.
- **Type:** large, confident sans (e.g. Inter / Geist / Söhne). Oversized headlines, tight tracking. High-contrast white body on dark.
- **Motion:** restrained scroll reveals; the opportunity-roadmap board animates once into view. deployment.inc-style bold entrance for the hero mark.
- **Feel:** modern, high-trust, "serious partner." Reads well to procurement and security.

### Theme B — "Composition" (Bauhaus / craft) — *boutique personality*

Lineage: the Vercel direction.

- **Base:** warm off-white with faint **grid-paper** background; generous margins.
- **Accent:** Bauhaus primaries — red (`#D42A1E`), blue (`#2B4CC7`), yellow (`#F2C230`) — plus black type.
- **Type:** heavy geometric sans, near-black weight for headlines (think Helvetica/Neue Haas). Playful full-stops as red dots.
- **Motif:** circle / triangle / square composition blocks; "point · line · plane" as a visual language mapped onto Assess·Build·Deploy.
- **Motion:** shapes assemble into compositions on scroll.
- **Feel:** craft-forward, human, "small team that sweats the details." More distinctive, slightly less corporate.

### Theme C — "Blueprint" (Dark base + composition accents) — *the blend*

The hybrid — premium dark canvas with Bauhaus discipline for personality.

- **Base:** dark charcoal (`#111216`) with a subtle blueprint/grid texture.
- **Accent:** one primary (orange **or** electric blue) as the through-line, with restrained geometric red/yellow/blue accents on section markers and the phase diagram only.
- **Type:** confident sans headlines (as Theme A) with the geometric-composition motif (as Theme B) used for diagrams and section numbering (01 / 02 / 03).
- **Motion:** geometric shapes trace the Assess→Build→Deploy path on scroll.
- **Feel:** high-trust and modern, but with a memorable visual signature that isn't generic-dark-SaaS.

**Deliverable for this step:** produce a one-screen hero mock of the chosen theme (or a quick comparison of A/B/C) before full build.

---

# 4. Fold-by-fold build specification

## Fold 1 — Hero

### Objective

State the proposition and the tension in the first viewport, and route the visitor to the assessment.

### Copy

- Eyebrow: **Your true advantage**
- Headline: **AI strategy, shipped.**
- Subhead: **Results, not prototypes.**
- Description: For organizations figuring out where AI actually creates value, Truvantik turns AI strategy into deployed solutions — across industries, from first assessment to production. Nothing between you and the people doing the work.
- Primary CTA: **Start with a free assessment**
- Secondary link: **Explore our approach**
- Proof line (small): One partner · Assess → Build → Deploy · Engineering-led

### Representation

Desktop split: proposition on the left; on the right, a **signature visual** appropriate to the chosen theme (Theme A: the animated logo mark / a live-looking opportunity-roadmap sliver; Theme B/C: the composition motif). Keep it one coherent object, not a collage. No stock photography.

### Mobile

Eyebrow, headline, subhead, description and primary CTA inside the first viewport. Signature visual immediately below.

## Fold 2 — The differentiators (why Truvantik is different)

### Objective

Immediately answer "why you" with the three differentiators before any service detail.

### Copy — three cards

1. **Engineering-led, not sales-led** — The people who scope your engagement are the people who build it.
2. **From first assessment to production** — One partner across strategy, build, integration and the deployment that follows.
3. **Cross-industry by design** — Patterns proven in one sector, adapted rather than reinvented in yours.

### Representation

Three equal cards or a tight horizontal band. This is the one place three equal elements are acceptable — they are the pillars. Keep copy terse.

## Fold 3 — The opportunity roadmap (signature proof-of-method)

### Objective

Show, concretely, how Truvantik turns a vague "we should do AI" into a ranked, sequenced portfolio. This is the site's most distinctive asset — carry it over from the Lovable version.

### Copy

- Eyebrow: **One client · Opportunity roadmap** — *Illustrative*
- Section line: Every engagement runs on three phases: **Assess · Build · Deploy.**
- Ranking note: Ranked by value → effort, in that order.

### Board content (illustrative)

- **Assess · 5 this cycle:** Customer support triage · Contract & document review · Returns exception handling · Onboarding data entry · Internal knowledge retrieval
- **Build · in progress:** Support triage copilot *(from Customer support triage, this cycle — Sprint 4 of 8)*
- **Deploy · live:** Document review agent *(assessed the cycle before — in production)*

### Representation

A kanban-style board with three columns (Assess / Build / Deploy) showing items flowing left→right. Animate one item advancing on scroll. Label **Illustrative**. This is the visual anchor of the page — give it prominence.

## Fold 4 — Where are you today (entry points)

### Objective

Let visitors self-identify and route each to the right first engagement. Reduces friction before the CTA.

### Copy

Eyebrow: **Pick your starting point** — Most conversations start in one of three places.

1. **Not sure where AI fits** *(Start here)* — You've been asked for a plan, or suspect value but can't yet name it. Begin with an assessment that ends in a ranked, costed roadmap. **(4–6 weeks)** → *Assessment → Ranked Roadmap*
2. **You know what you want to build** *(Ready to build)* — The use case is clear and the business case is made. You need a team that takes it from data to a deployed product users rely on. **(3–5 months)** → *Build → Shipped Product*
3. **Your pilot has stalled or won't scale** *(Unstick it)* — It works in a demo but not in the business. Usually the blocker is integration, ownership or adoption — not the model. **(6–8 weeks)** → *Unstick → Production System*

### Representation

Three routing cards, each with duration and outcome pill. Each card CTA drops into the same assessment form with the entry point captured as a hidden field.

## Fold 5 — Services (four ways we work)

### Objective

Give the concrete engagement types, framed around business outcomes and mapped onto Assess·Build·Deploy.

### Copy

Eyebrow: **Services** — Engagements are scoped around a business outcome, from a first assessment through to the system running in production.

1. **AI strategy & assessment** — Find where AI creates measurable value before you commit budget. *(Assess)*
2. **Custom AI product development** — Build the product or feature, end to end, and get it into users' hands. *(Build)*
3. **AI integration & deployment** — Move a working model into the systems and workflows people actually use. *(Deploy)*
4. **Ongoing AI advisory** — A trusted technical partner on retainer as your AI portfolio grows. *(Across all phases)*

### Boutique differentiator to weave in here

A short supporting line reinforcing the dev-shop edge, e.g.: *"No account managers, no handoff decks. The person in your standup is the person whose code ships that afternoon."*

### Representation

Four cards or a two-by-two grid, each tagged with its phase. "Read more" reveals detail (accordion or subpage) — do not bury essential scope in hover.

## Fold 6 — Assess · Build · Deploy (how we work, in detail)

### Objective

Make the method tangible — the spine as a process, replacing/merging the boutique "point · line · plane" idea.

### Copy — three phases

- **01 Assess** — Understand the work, the data and the constraints. Decide what is worth building and what is not. *(The point: reduce the problem to its essential elements.)*
- **02 Build** — Build the smallest system that proves the outcome, then harden it against real data and real users. *(The line: the shortest path through the build, reviewed with you directly.)*
- **03 Deploy** — Deploy into your stack, measure it against the outcome, and hand over the knowledge to keep it running. *(The plane: the system running whole — deployed, observed, documented, handed over.)*

### Representation

A horizontal three-step sequence on desktop, vertical timeline on mobile. If Theme B/C is chosen, use the point/line/plane geometric motif here. Restrained scroll reveal traces one item through the phases; full meaning readable without motion.

## Fold 7 — Industries + featured proof point

### Objective

Establish credibility through cross-industry pattern-matching and one real, buildable proof point.

### Copy — industries

Eyebrow: **Industries · Cross-industry by design** — The same patterns show up in different sectors. We bring them with us and adapt them to your constraints.

Named sectors, each with an outcome range and typical work (carry these over — they make the industries page concrete):

| Sector | Outcome claim | Typical work |
| --- | --- | --- |
| **Healthcare** | Recover **15–25% of clinical time** for higher-value patient care | Clinical documentation & summarization support · patient intake/triage/scheduling · care-coordination & follow-up |
| **Retail & e-commerce** | Lift conversion **5–15%** and reduce cost per transaction | Catalogue enrichment & content at scale · demand/assortment forecasting · service triage & agent assist |
| **Manufacturing & industrial** | Reduce unplanned downtime **20–35%** via early detection | Quality inspection from images/sensor data · exception detection & resolution · capacity/ETA forecasting |
| **Consumer technology** | Ship AI features with **sub-100ms latency** and predictable per-user cost | In-product assistants & search · personalisation & ranking · content moderation & safety |

Supporting rationale: *Document-heavy review looks much the same in underwriting, clinical intake and customs clearance. We bring the working pattern and adapt it — instead of rediscovering it on your budget.*

"Don't see your sector?" line: *If your work involves repetitive judgement over messy data inside systems people already use, the method applies. Tell us the problem and we'll tell you honestly whether AI is the right tool.*

> **Claim rule.** The outcome ranges above come from the Lovable reference. Confirm each is defensible before publishing, or soften to qualitative language. Do not invent numbers (see the "What we will not do" commitment).

### Copy — featured proof point

- Eyebrow: **Featured proof point · Built by our team**
- Title: **Tapioca Health — a digital clinic platform** *(Healthcare)*
- Body: Delivering a clinic platform where AI-assisted workflows had to fit clinical reality: careful handling of patient information, review by a clinician at the right point, and behaviour that is auditable rather than opaque.
- CTA: **Read our case studies**

### Required disclaimer (verbatim intent)

> **Separate brand.** Tapioca Health is its own product brand, built by our team with 3BP Labs. It is not a Truvantik service line, and its healthcare-specific claims belong to that product.

### Representation

Industries as a compact tag row or grid. Proof point as a feature card with the separate-brand disclaimer clearly attached. Do not present Tapioca Health as a Truvantik service.

## Fold 8 — Why us (commitments) + FAQ + final CTA

### Objective

Close remaining doubt and convert.

### Copy — four commitments (each with evidence behind it)

Eyebrow: **Why us · Four commitments, each with something behind it.**

1. **Cross-industry depth** — Pattern-matching across sectors is the edge; expertise transfers rather than resetting each client.
2. **Practical AI** — Every engagement defines what "good enough to ship" means in numbers before building starts, and instruments that measure in production so adoption is visible, not assumed.
3. **Trusted partner** — We'll tell you to buy a tool, fix a process, or stop a project when that's the right answer. Assessments regularly end with a shorter funded list than the client arrived with.
4. **Outcome-driven** — Scope starts from the business measure — review time, exception rate, service load — and the same measure is reported after launch alongside model-level evaluation.

### "What we will not do" (strong trust signal — carry over verbatim in intent)

- Sell a build when a process fix or an existing tool solves the problem for a fraction of the cost.
- Ship a proof-of-concept as a finished result. If it is not integrated and being used, the engagement is not done.
- Quote a business case built on numbers we cannot substantiate — ours or anyone else's.

### FAQ (collapsed accordion; first item open)

- **What does a first assessment produce?** A ranked, costed roadmap of AI opportunities sequenced by value → effort — plus an honest read on what is not worth building. Typically 4–6 weeks.
- **Do we have to start with a strategy assessment?** No. If your use case is clear you can start at Build; if a pilot has stalled you can start with an Unstick engagement.
- **Who actually does the work?** The people who scope your engagement build it. No account managers or handoff decks between you and the builders.
- **Which industries do you work across?** Healthcare, retail & e-commerce, manufacturing & industrial, consumer technology and more — we adapt proven patterns to your constraints.
- **How do you make sure something actually ships and gets used?** We define "good enough to ship" in numbers up front and instrument that measure in production, so adoption is measured, not assumed.
- **How do you choose models and tools?** By measurement, not fashion. We'll recommend buying, reusing or not building at all when that is the right answer.
- **How is our data handled?** [To supply — data handling, residency, security posture, and any certifications. See Section 8.]

### Final CTA

- Headline: **Let's find your true advantage.**
- Description: A 30-minute call is usually enough to tell whether there is a real opportunity here, and what the first step should be.
- Primary CTA: **Start with a free assessment** / **Schedule a working session**
- Secondary: **Explore our approach**

### Representation

Commitments as four items (claim + the evidence line beneath). FAQ accordion, first item open, answers two–three sentences. End with a high-contrast CTA panel.

---

# 4b. Service detail page template (`/services/{slug}`)

Each of the four services gets its own page following this pattern (from the Lovable reference). Example fully spec'd below; replicate for the other three.

**Sections, in order:** Eyebrow "SERVICE" → Title + one-line promise → **Who it's for** (bulleted) → **How it works** (numbered steps) → **What you get** (deliverables) → **FAQ** (accordion) → **Proof point** (one honest line) → CTA ("Get a proposal for {service}" + "See our case studies").

### Example — AI strategy & assessment (`/services/ai-strategy-and-assessment`)

- **Promise:** A structured assessment of your operations, data and constraints that ends in a ranked, costed roadmap — not a slide deck of possibilities.
- **Who it's for:** Leadership asked for an AI plan and unsure where to start · orgs with competing AI ideas and no way to rank them · teams needing a defensible business case before funding a build · companies where data readiness is the real open question.
- **How it works:** 1) Discovery — interviews with operators and executives to map workflows and where time/margin leak. 2) Data & systems review — what data exists, where it lives, how clean, integration effort per opportunity. 3) Opportunity shaping — each use case written up with target outcome, evaluation method, honest feasibility. 4) Roadmap & decision — opportunities ranked by value and effort, sequenced with cost ranges and a recommended first build.
- **What you get:** Opportunity register (outcome + success measure per use case) · data & systems readiness assessment · build/buy/integrate recommendation per opportunity · sequenced roadmap with effort & cost ranges · executive summary + technical appendix.
- **Proof point:** *Assessments regularly end with fewer funded projects than the client expected — the value is in cutting the list to what will actually pay back.*

### The other three service slugs

- `/services/custom-ai-product-development` — Build the product/feature end to end and get it into users' hands. Engineering-led delivery from data pipeline and model selection through interface, evaluation and launch.
- `/services/ai-integration-and-deployment` — Move a working model into the systems and workflows people actually use: integration with core systems, access control, in-production evaluation, change management.
- `/services/ongoing-ai-advisory` — A trusted technical partner on retainer: architecture review, vendor/model decisions, evaluation discipline, and hiring the right people.

---

# 4c. Case studies content (`/work`)

Framing line: *Where clients have published figures, we cite them. Where they have not, we describe the shape of the work rather than invent numbers.* (This honesty is a differentiator — keep it.)

1. **Tapioca Health — a digital clinic platform** *(Healthcare · completed engagement)* — with the separate-brand disclaimer. Problem: a clinic platform where AI-assisted workflows had to fit clinical reality (careful PII handling, clinician review at the right point, auditable not opaque). Did: product & platform engineering across clinical and patient-facing workflows; AI-assisted documentation & intake with clinician-in-the-loop; evaluation & monitoring built in from the start. Outcome: a shipped, working product — the clearest illustration of the depth of build work the team takes on.
2. **Cutting manual review on document-heavy onboarding** *(Financial services · representative scenario, no figures attributed)* — extraction with confidence thresholds routing uncertain cases to a person; integrated into the existing case system; reviewers moved from transcription to judgement on exceptions, with an audit trail on every automated decision.
3. **Scaling catalogue operations without scaling the team** *(Retail & e-commerce · representative scenario)* — normalisation & enrichment pipeline over supplier feeds; generated copy/attributes held to a house style guide with merchandiser approval before publish; quality reported per supplier.
4. **Restarting a stalled quality-inspection pilot** *(Manufacturing · representative scenario)* — diagnosed the stall as integration/ownership not model quality; deployed inside the plant environment with monitoring & continuous evaluation; surfaced results in the operators' existing tool and named an owner; capability moved from parked notebook to routine shift use after handover.

Label the three composites clearly as **representative scenarios** (not specific client engagements). Only Tapioca Health is a named, real engagement.

---

# 4d. About page content (`/about`)

- Heading: **Founder-led, engineering-led, deliberately cross-industry.**
- Core story: too many AI projects stop at the demo, and the gap is rarely the model — it's integration, ownership, evaluation and adoption. Truvantik is built around the whole path instead of one slice.
- **How we're set up** (structure block): **Truvantik** (the AI consulting brand) · **Prabhaavi Solutions** (legal entity) · **3BP Labs** (engineering partnership — senior capacity without a hiring cycle) · **Tapioca Health** (product brand built with 3BP Labs, not a service line).
- Closing: *The people who scope an engagement are the people who build it.* Small enough that context doesn't get lost in handovers; success measure agreed before any code is written.

---

# 5. Form and scheduling flow

The primary CTA and all entry-point CTAs open the same short qualification form. Preserve the originating CTA, page section, and entry point (Fold 4) as hidden analytics fields.

### Form heading

**Tell us what you're trying to do.**

### Fields

- Name — required
- Work email — required (helper: "Please use your organization email.")
- Organization — required
- Your starting point — optional dropdown, pre-filled from the entry-point card if one was clicked:
  - Not sure where AI fits
  - I know what I want to build
  - My pilot has stalled
- What should exist? / What are you trying to do? — free text, required
- (Optional) prefer email link: **hello@truvantik.com** *(confirm address)*

### Submission flow

1. Save the lead to the agreed CRM / form endpoint.
2. Show a clear success state.
3. Redirect in the same tab to the scheduling page (Calendly or equivalent — **URL to supply**).
4. Retain the lead even if scheduling is not completed.
5. On capture failure, show an actionable error and do not redirect until submission succeeds.
6. Preserve campaign, referrer and CTA-source parameters.

### "What happens next" (show beside/after the form — from the reference)

1. We reply within **two business days.**
2. A **30-minute call** to understand the problem.
3. A **written view** on whether and how to proceed.

Plus a "Prefer to talk?" path: *Book a 30-minute introduction call with the people who would actually run your engagement.* And **hello@truvantik.com** for email.

### Form behavior

Inline validation, accessible labels, clear error text. Prompt for a work email but don't hard-reject public domains — allow a manual path. Link the privacy policy near the submit ("See our privacy policy for how we handle what you send.").

---

# 6. Responsive, accessibility and performance

- Desktop content width ~1200–1280 px, generous margins.
- Hero proposition + primary CTA visible in the first mobile viewport.
- Stack cards, phase flows and the roadmap board in intended reading order on mobile.
- Do not hide essential information in hover states.
- Avoid auto-playing carousels, autoplay audio and heavy background video. Respect reduced-motion preferences (the Lovable reference is motion-heavy — keep the new build lighter).
- Meet WCAG AA contrast and keyboard navigation (verify the orange-on-dark and any primary-color combos pass AA).
- Descriptive alt text for all diagrams and the roadmap board.
- Responsive WebP/AVIF, lazy-load below-fold media, reserve dimensions to avoid layout shift.
- Target Largest Contentful Paint under 2.5 s on a typical mobile connection.

---

# 7. Analytics requirements

### Track

- Nav CTA click · Hero CTA click
- Entry-point card click (which of the three)
- "Explore our approach" click
- Roadmap board view
- Service card expansion
- Proof-point / case-study click
- Form start · Form validation failure · Form submission
- Scheduling redirect · Booking completion (where integration permits)
- FAQ expansion by question

### Primary success measure

Qualified scheduled assessments / working sessions.

### Supporting measures

Form submissions, form completion rate, scheduling completion rate, entry-point distribution, roadmap-board engagement.

---

# 8. Truvantik must supply or confirm before build is finalized

- **Site scope decision** — multi-page (recommended, Section 2b) vs single-page-first.
- **Chosen visual theme** (A / B / C from Section 3) — or approval to produce comparison mocks.
- **Final logo / diamond mark** assets (SVG) and brand colors if fixed.
- **Scheduling URL** (Calendly or equivalent) for the "book a call" path. *(Email hello@truvantik.com is confirmed.)*
- **CRM / form endpoint** and field mapping.
- **Sign-off on the industry outcome ranges** (15–25% clinical time, 5–15% conversion, 20–35% downtime, sub-100ms latency) — defensible as published, or soften.
- **Case-study confirmation** — Tapioca Health separate-brand + 3BP Labs wording sign-off; approval to keep the 3 composites labelled as representative scenarios (or replace with real, publishable ones).
- **Data handling / security wording** for the FAQ and procurement (residency, certifications, model-training policy) — a gap in both references; needed for the enterprise audience.
- **Team / founder names & bios** if a "meet the team" element is wanted (the About page CTA implies one).
- **Privacy Policy and Terms** final copy.

### Launch guardrails

- Use only the claims and attributions specified or approved here.
- Do not present Tapioca Health as a Truvantik service line.
- Keep the primary CTA label consistent ("Start with a free assessment").
- Keep the Assess · Build · Deploy spine consistent across every fold.
- Keep the "you talk to the builders" differentiator present but honest to actual delivery model.

---

## Appendix — reference source map

**Pages crawled in full:** Lovable — `/`, `/services` (+ `/services/ai-strategy-and-assessment` as the detail-page pattern), `/industries`, `/work`, `/why-truvantik`, `/about`, `/contact`, footer (revealing `/privacy`, `/terms`, per-service and per-industry routes). Vercel — single page confirmed (anchor nav only). deployment.inc — single teaser page.

| Element | Source |
| --- | --- |
| "AI strategy, shipped. Results, not prototypes.", Assess·Build·Deploy, entry points, 4 services + detail pages, industries + metrics, case studies, why-us + "what we will not do", about/corporate structure, contact flow, FAQ spine | truvantik.lovable.app (multi-page) |
| "ai systems, shipped", boutique "talk to the builders", point·line·plane, 3 exercises framing (AI systems / data platforms / product engineering), small-team framing, Bauhaus/composition visual language | truvantik-site.vercel.app (single page) |
| Minimal high-confidence dark aesthetic, oversized manifesto typography, bold animated mark | deployment.inc |
| Overall brief structure and rigor | NeoCore for Enterprise brief (provided example) |
| Brand meaning (true·vantage·intelligence), Prabhaavi Solutions entity, 3BP Labs partnership, hello@truvantik.com | Lovable /about + footer |
