---
name: Truvantik v2
description: Dark editorial marketing with clear actions and visible workflow outcomes.
colors:
  action: "#f2a64b"
  action-hover: "#ffc47e"
  action-ink: "#211507"
  outcome: "#79b991"
  outcome-ink: "#101d15"
  bg: "#0b0c0e"
  surface: "#17191c"
  surface-hover: "#202327"
  ink: "#f3f2ee"
  muted: "#c0c2c4"
  subtle: "#989da3"
  line: "#30353a"
  line-strong: "#687078"
  error: "#ffb1ad"
typography:
  display:
    fontFamily: "Outfit, system-ui, sans-serif"
    fontSize: "clamp(2.55rem, 4.1vw, 3.85rem)"
    fontWeight: 500
    lineHeight: 1.12
    letterSpacing: "-.035em"
  headline:
    fontFamily: "Outfit, system-ui, sans-serif"
    fontSize: "clamp(2rem, 3.1vw, 3rem)"
    fontWeight: 500
    lineHeight: 1.12
    letterSpacing: "-.035em"
  title:
    fontFamily: "Outfit, system-ui, sans-serif"
    fontSize: "clamp(1.3rem, 2vw, 1.7rem)"
    fontWeight: 500
    lineHeight: 1.12
    letterSpacing: "-.02em"
  body:
    fontFamily: "Outfit, system-ui, sans-serif"
    fontSize: "1.0625rem"
    fontWeight: 400
    lineHeight: 1.6
  lead:
    fontFamily: "Outfit, system-ui, sans-serif"
    fontSize: "clamp(1.1rem, 1.55vw, 1.35rem)"
    lineHeight: 1.55
  label:
    fontFamily: "Outfit, system-ui, sans-serif"
    fontSize: ".97rem"
  caption:
    fontFamily: "Outfit, system-ui, sans-serif"
    fontSize: ".8rem"
rounded:
  control: "6px"
  panel: "14px"
spacing:
  gutter: "clamp(1.25rem, 4vw, 4rem)"
  section: "clamp(4rem, 7vw, 7rem)"
  field-gap: "1.25rem"
  heading-gap: "2.5rem"
components:
  button-primary:
    backgroundColor: "{colors.action}"
    textColor: "{colors.action-ink}"
    rounded: "{rounded.control}"
    padding: ".75rem 1.25rem"
  button-primary-hover:
    backgroundColor: "{colors.action-hover}"
  button-secondary:
    backgroundColor: "transparent"
    textColor: "{colors.ink}"
    rounded: "{rounded.control}"
    padding: ".75rem 1.25rem"
  button-secondary-hover:
    backgroundColor: "{colors.surface-hover}"
  button-closing:
    backgroundColor: "{colors.outcome-ink}"
    textColor: "{colors.ink}"
    rounded: "{rounded.control}"
    padding: ".75rem 1.25rem"
  input:
    backgroundColor: "{colors.bg}"
    textColor: "{colors.ink}"
    rounded: "{rounded.control}"
    padding: ".75rem .9rem"
  navigation:
    backgroundColor: "{colors.bg}"
    textColor: "{colors.ink}"
  clinical-panel:
    rounded: "{rounded.panel}"
    padding: "clamp(1.25rem, 3vw, 2.5rem)"
---

# Design System: Truvantik v2

## Overview

**Creative North Star: "Work made visible"**

A dark, composed editorial system makes engineering work understandable through clear typography, ruled sections and labelled workflow diagrams. Saffron identifies action; green identifies outcomes and review. Outfit and the settled multicolor diamond carry the brand across every page.

This guide records the implemented system inside `/v2`. The original site's root `design.md` remains its authority. The selected home composition and its rationale belong in `brief.md`; they are not a template that every page must repeat.

**Key Characteristics:**

- Soft-white editorial headings on charcoal, with generous reading space.
- Ruled content groups and restrained rounding instead of pervasive cards.
- Saffron actions, green outcomes and a stationary, exact brand mark.
- Responsive diagrams with useful static content and visibility-gated motion.

## Colors

The palette combines warm actions and muted green outcomes with neutral charcoal surfaces. Frontmatter keys map directly to the matching `--v2-*` properties in `styles.css`; preserve that correspondence when editing either source.

### Primary

- **Saffron action** (`action`): primary buttons, active navigation, sequence numbers and incoming workflow signals. `action-hover` brightens buttons on hover; `action-ink` supplies their dark text.

### Secondary

- **Outcome green** (`outcome`): output labels, reviewed workflow steps, list markers and the closing section. `outcome-ink` supplies text and the dark closing action.

### Neutral

- **Charcoal** (`bg`): page canvas, sticky header and form fields. `surface` supports notices and the standards section; `surface-hover` supports secondary-button hover.
- **Soft white** (`ink`): headings, principal text and the logo's top beam. `muted` supports paragraphs; `subtle` supports captions and supporting labels.
- **Quiet rule** (`line`): section dividers, orbit lines and panel borders. `line-strong` outlines controls and workflow connections.
- **Error rose** (`error`): invalid-field borders and their explanatory text. It is a feedback color, not another brand accent.

**The Color Meaning Rule.** Keep saffron associated with action and green associated with outcomes; the logo retains all three approved colors together.

## Typography

Outfit is the display, body and label family, with `system-ui, sans-serif` fallback. `Layout.astro` requests weights 400, 500, 600 and 700 with `display=swap`; the principal heading weight is 500 and the wordmark uses 700. There is no separate serif or monospace role.

Use the frontmatter display/headline/title hierarchy for h1/h2/h3. Headings balance their lines; body text keeps a comfortable line height. Paragraphs generally stop at 68ch, main headings at 21ch and section headings at 23ch. The home heading is narrower at 16ch on desktop and 18ch below the menu breakpoint. Page-specific heading variants are already defined in `styles.css`; avoid imposing one oversized heading on every context.

Lead text introduces a page or section. Labels remain sentence case and visually attached to their controls. Captions identify illustrative material beside the figure. Do not shrink workflow labels to preserve a desktop composition on a narrow screen.

## Layout

The shared container is at most 1280px wide, inset by the fluid `gutter` spacing. Sections use fluid `section` spacing and grow with content. The home hero has a desktop minimum height of 570px; it does not establish a full-viewport-height rule for other sections.

The home opening uses an asymmetric copy/diagram split, followed by three ruled Assess/Build/Deploy links. Other pages use reading columns, service rows and split content. Shared section headings have a 2.5rem bottom gap; controls and content groups use local spacing already defined in the stylesheet rather than a fabricated universal scale.

| Maximum viewport width | Implemented change |
| --- | --- |
| 1000px | Service and industry content becomes two columns; their introductory/index row spans both. The hero tightens its split and minimum height. |
| 760px | Navigation becomes a disclosure; header minimum height changes from 84px to 72px. The hero, main content grids and form rows stack. Footer becomes two columns with its note spanning both. |
| 560px | The horizontal orbital illustration is replaced by a vertical inputs-to-core-to-outputs composition. Its labels retain readable sizes. |

The workflow remains horizontal between 561px and 760px within the stacked hero. The delivery strip stays three columns on mobile. Legal reading content is capped at 760px. Preserve these specific transitions when adding content; test long labels and narrow widths before adding another breakpoint.

## Elevation & Depth

The implementation uses no box shadows, blur or decorative glow. Charcoal surface changes, thin borders, whitespace and SVG linework establish depth. The proof section has a slightly lifted local background (`#111315`); the broad green closing section supplies emphasis through contrast rather than elevation. Neither is a new palette mode.

The opaque header stays above page content at z-index 20; the keyboard skip link sits above it at 100. Focus is an explicit outline, not a shadow: 2px saffron with a 5px offset, changing to dark outcome ink inside the green closing section.

## Shapes

Controls and notices use the `control` radius. Clinical and brand-structure panels use the larger `panel` radius. Most content is open or separated by a 1px rule. Circles belong to diagram nodes, workflow steps and small outcome markers; they are not a general pill-button system.

The approved mark in `components/Mark.astro` is a deliberate isolated snapshot: a rounded dark diamond with a soft-white top beam, saffron chevron and green anchor. Preserve its SVG paths, proportions, fills and outline. Keep the mark stationary while signals move around it.

## Components

### Actions and links

Primary buttons are saffron with dark text, medium weight and a minimum height of 50px. The compact header variant uses a 44px minimum height and `.65rem 1rem` padding. Secondary buttons are transparent with a strong neutral border; hover fills them with `surface-hover`. Disabled buttons use opacity .5 and a not-allowed cursor. The closing action uses dark outcome ink on the green section and a local hover background of `#263c2d`.

Buttons transition background over .18s with the shared easing. Text links use an underline with a 5px offset and turn saffron on hover. Route changes remain anchors; actions such as preparing or copying a draft remain buttons. Arrow icons are decorative inline SVG.

### Navigation

The shared shell includes a skip link, labelled navigation, one main landmark and a compact footer. Current non-button navigation links combine saffron with an underline. Desktop links have a 44px minimum height; mobile navigation links use 48px. Footer links currently have a 38px minimum height, so do not describe every link as a 44px control.

At 760px and below, JavaScript enhances the navigation into an inline disclosure with `aria-expanded` and `aria-controls`. Escape closes it and returns focus to Menu; an outside click or breakpoint change also closes it. This is not a modal and does not trap focus. Without JavaScript, links remain visible and the unused Menu button stays hidden.

### Fields and email draft

Fields have dark backgrounds, strong 1px borders, a 48px minimum height and the shared control radius. Labels explicitly identify required or optional values; help and error text stays next to the field. Invalid name, email or message input receives an error border, explanatory text and `aria-invalid`; submission focuses the first invalid field.

Successful validation reveals an email draft and focuses its heading. The visible state says nothing has been sent. Opening the email app uses `mailto:`; copying reports its result through a polite status message, with selected text as the clipboard-failure fallback. Editing any form value invalidates the prepared preview. Without JavaScript, the composer stays hidden and direct email instructions remain available. Preserve these states and keep contact data in memory only.

### Ruled groups and panels

Starting-point links, service deliverables, principles and scenarios use dividers and text hierarchy. The clinical panel is a bordered ordered sequence: small connected nodes, a green clinician-review step and an explicit illustrative caption. The brand-structure panel uses the same larger corner radius and internal rules. Neither uses a card lift or hover transform.

### Workflow illustration and motion

`components/Workflow.astro` owns both responsive compositions. The figure has a text alternative and an illustrative caption; duplicated visual labels and SVG are hidden from assistive technology. Static connections, output nodes and labels remain useful without moving signals.

Saffron input signals precede green output signals on a 7.2s linear repeating cycle. `--v2-motion` defaults to paused. The shell runs animation only while the figure intersects the viewport and the document is visible; without the observer or JavaScript, it stays paused. Reduced-motion CSS removes animations and transitions. There is no visible pause control or motion preference storage. Do not present source support as a completed assistive-technology or accessibility certification.

## Do's and Don'ts

- Do use the scoped `Layout.astro` and `styles.css` for every v2 page; keep route construction in `routes.ts` and shared factual content in `content.ts`.
- Do keep this lowercase `design.md` canonical; `/v2/design.md` serves this source, and `.impeccable/design.json` extends it with motion, states and component previews.
- Do update the guide and sidecar together when intentionally changing a durable v2 rule, and keep page composition decisions in `brief.md`.
- Do retain explicit illustrative labels, product relationships and the distinction between preparing and sending an email.
- Do run the build and scoped verification in `README.md`, then check representative desktop/mobile layouts and affected keyboard, contact and motion states.
- Don't import v1 layout, components, scripts or CSS into v2, or change the incumbent hash baseline to conceal an isolation failure.
- Don't redesign the approved mark, introduce a light palette, add a picker or persist a theme or motion preference.
- Don't let animation carry essential information, shrink desktop diagrams into illegible mobile labels or add a visible pause button to this delegated direction.
- Don't add storage, telemetry, backend submission, invented results or a fake sent state as part of a visual change.
- Don't promote or redirect v2 to the original routes without a separate user decision.
