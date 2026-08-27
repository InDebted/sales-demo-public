# InDebted Design System

The canonical design system for **InDebted** — AI-native collections infrastructure for the world's leading brands. This project turns InDebted's brand, tokens, components and product surfaces into a system a design agent can build with: real logos, the Manrope type system, the full colour and spacing token set, reusable React primitives, and click-through recreations of the customer portal and marketing site.

> InDebted helps banks, fintechs and utilities modernise collections — better outcomes for businesses, a calmer experience for customers. The platform is **a system, not a suite**: four products — *Receive*, *Collect*, *Release* and *Comply* — designed to work together across the account lifecycle.

---

## Sources

Everything here was extracted from material InDebted provided. If you have access, go deeper in the originals:

- **GitHub — [`InDebted/brand-essentials`](https://github.com/InDebted/brand-essentials)** — the canonical, machine-readable design system (W3C design tokens, brand rules, voice + design skills, component specs, logo SVGs). Tokens and brand rules in this project were lifted directly from it. **Explore this repo to build with higher fidelity** — it carries per-component variant matrices and the always-current token values.
  - `tokens/` — colours, typography, spacing, shadows, corner-radius, gradients, breakpoints (W3C JSON)
  - `docs/brand-rules.md`, `docs/design-principles.md` — colour/type/logo/WCAG + the 4px grid
  - `skills/voice/SKILL.md`, `skills/design/SKILL.md` — the authoritative voice and visual skills
  - `docs/components/` — production component inventory + specs
  - Browsable site: **brand.indebted.co**
- **Figma — InDebted Marketing Bible 2025** (attached `.fig`) — the marketing/product surface library: website pages, *Collect* and *Receive* product mockups, campaign and report layouts. Source of truth for marketing-side composition. *(The product formerly labelled "Receeve" in this file is now **Receive**.)*
- **Figma — [InDebted Product Bible 2025](https://www.figma.com/design/Nd4ormSkjEzEE1y9SAjTsp/InDebted-Product-Bible-2025)** — the upstream the tokens were synced from.
- **Uploads** — Manrope font binaries (weights 200–800) and the 3D logomark render (`assets/brand/logomark-3d-teal.png`).

The raw token JSON imported from `brand-essentials` is kept in `tokens-raw/` for reference; the shipped tokens are the CSS in `tokens/`.

---

## Index

| Path | What it is |
|---|---|
| `styles.css` | Global entry point — `@import` manifest only. Consumers link this one file. |
| `tokens/` | CSS custom properties: `colors`, `typography`, `spacing`, `shadows`, `gradients`, `themes`, `fonts`, `base`. |
| `tokens-raw/` | Original W3C token JSON from `brand-essentials` (reference). |
| `components/core/` | `Button`, `Badge`, `Icon`, `Avatar`, `Divider` |
| `components/forms/` | `Input`, `Select`, `Checkbox`, `Radio`, `SegmentedControl`, `Slider` |
| `components/surfaces/` | `Card` (+ `CardHeader`), `Accordion` |
| `components/feedback/` | `Banner`, `Alert`, `ProgressIndicator` |
| `ui_kits/customer-portal/` | Consumer payment-plan flow (4 screens, interactive). |
| `ui_kits/marketing-site/` | InDebted.com marketing homepage. |
| `templates/slide-deck/` | **Presentation shell** — standardised cover, section dividers and footer; flexible content. Copy this to start any deck. |
| `guidelines/` | Foundation specimen cards (Colors, Type, Spacing, Brand) **+ the Social Media rules (`social-01`→`social-09`) — read first for any social/LinkedIn asset.** |
| `assets/logos/` | Logo + logomark SVGs (colour, navy, black, white). |
| `assets/fonts/` | Manrope `.ttf` (200–800). |
| `assets/brand/` | 3D logomark renders — `logomark-3d-teal.png` (on Tiffany) and `logomark-3d-transparent.png` (cut-out PNG for navy/dark surfaces). |
| `SKILL.md` | Agent-Skills entry point for downloadable use. |

The compiled component library is exposed at `window.InDebtedDesignSystem_78ee3b` in any page that loads `_ds_bundle.js`.

---

## CONTENT FUNDAMENTALS — how InDebted writes

The voice is **empathetic, warm, expert and plainspoken — all at once**. The bar to clear: *would a confident, informed human friend say this out loud?* If not, rewrite. (Full rules: `brand-essentials/skills/voice/SKILL.md`.)

**Person & framing.** Address the reader as "you"; speak as "we". The framing flexes by audience but the voice never does:
- **B2C (customers)** — lead with the path forward, *never* the debt. Warm, calm, no threat or escalation. "Let's find a way forward", "Nothing to pay today", "We're here to help you find a path forward".
- **B2B (clients)** — lead with outcomes, infrastructure and scale. Precise and authoritative. "We help organisations modernise collections", not "we make debt collection better".

**Casing & tone.** Sentence case everywhere — headlines, buttons, labels. No ALL-CAPS shouting, no Title Case Marketing Speak. Confident, no hedging, no filler.

**Words to use → not.** collections infrastructure (not debt-collection software) · customer / consumer (never *debtor*) · recover value (not collect debts) · modernise (not disrupt / revolutionise) · AI-native / AI-powered (not AI-driven) · partner with (not sell to). **clients** = the businesses we work with; **customers** = the individuals using our services — never mix them.

**Banned.** "disrupt", "revolutionary", "game-changing", "world-class", "best-in-class", "leading", "pioneering", "leverage" (verb), "ecosystem", "synergy", "end-to-end", "solution" on its own. Avoid the "Not X, we're Y" construction — lead with what we are. Avoid AI-tells: "In today's world", "It's worth noting", "At its core", "We're excited to announce".

**Conventions.** British/Australian English (favour, colour, organisation, modernise). **No Oxford comma** ("banks, fintechs and utilities"). Zero or one em dash per piece. Active voice. Numbers: one–nine spelled out, 10+ as numerals. Always "InDebted" (capital D). Product names capitalised, *italicised on first mention*. CTAs say what happens: "Book a demo", "See how it works" — never "Learn more".

**Readability.** Flesch Reading Ease 70+, sentences averaging 15–20 words, mixed deliberately for rhythm.

---

## VISUAL FOUNDATIONS

**Colour.** Three brand anchors, each used at its **900** step: **Endless Galaxy** `#000244` (body + headings), **Warm Blue** `#474cde` (buttons + primary CTAs), **Tiffany Blue** `#76ebe2` (the logo highlight — emphasis, used sparingly). Lighter steps (25–800) are for tints, surfaces and hover states — never substitutes for the anchor. Backgrounds skew cool and soft: white, `--gray-50`, and **Purple Illusion 100** `#ecedfc` is the signature product surface. Secondary palettes (Space Battle Blue, Blue Mana, Heron, Summer Mist…) carry charts and illustration. Semantic = Error/Warning/Success/Info on the standard scale. The system ships **4 theme modes** (Pastel/Bright × Light/Dark), implemented in `tokens/themes.css` as `data-theme` scopes over `--theme-*` app tokens — apply with `<html data-theme="bright-dark">`.

**Type.** **Manrope** exclusively, weights 200–800. Display scale (72→24) for headings — ExtraBold/Bold with **−2% tracking** on Display 2xl–md, 0% below. Text scale (20→12) for body/UI in Regular/Medium. Headlines lean ExtraBold and tight; body is Regular and roomy. No second typeface.

**Spacing & layout.** 4px **soft grid** — every value divisible by 4, prefer multiples of 8, drop to 4 only to fine-tune. Container widths sm/md/lg/xl (640/768/1024/1280). Density modes (Condensed −4 / Standard / Expanded +4/+8) scale spacing, radius and icon sizes uniformly. Generous vertical rhythm; things line up.

**Shape & elevation.** Corner radius 4/8/12/16 and `r-full` (pill). **Buttons, badges, tags and segmented controls are pills.** Cards use radius 12–16. Shadows are soft and blue-grey (base `#195987`): a `xs→3xl` component scale, plus *product* shadows for in-app surfaces and *website* shadows for marketing. Cards are white with either a website shadow (elevated) or a hairline `--gray-200` border (outlined) — not both heavy. Glassmorphism appears on sticky nav (background blur 16px + translucent white).

**Imagery & backgrounds.** Cool, calm, optimistic. Brand **gradients** run mint→sky→warm-blue→deep-galaxy (`--gradient-brand-1..7`); `brand-7` (periwinkle→mint) is the hero favourite. The 3D logomark render is the dimensional brand moment, reserved for hero/campaign use. No warm/grainy photography; surfaces stay clean.

**Motion & states.** Restrained. Transitions ~120–220ms ease on background/colour/shadow. **Hover:** primary buttons darken (900→800), secondary fill with `--gray-50`, cards lift 2px and deepen shadow, links underline. **Focus:** a 4px Warm-Blue ring (`--warm-blue-50`) on inputs/selects. **Press/disabled:** disabled drops to ~45% opacity. Accordions rotate the chevron and animate panel height. No bounces, no infinite decorative loops.

**Accessibility.** Designed to WCAG 2.1 AA — 4.5:1 normal text, 3:1 large. Keep brand pairings within their approved background (colour-on-light, white-on-navy).

---

## SOCIAL MEDIA

> **Gate:** before designing ANY social or LinkedIn asset, read the **Social Media** specimen cards (`guidelines/social-01`→`social-09`) and design against them. This covers single tiles, carousels, social video, page banners and event/announcement graphics. The rules below differ from generic brand usage, so don't skip them.

Every post belongs to one of **six content pillars**, and the pillar — not aesthetic preference — sets the colour anchor: **Product** (warm-blue.900), **Company** (endless-galaxy.900), **Culture & people** (purple-illusion.500), **Thought leadership** (tiffany-blue.900), **Client stories** (space-battle-blue.500), **Events & partnerships** (blue-mana.500). Each pillar also has a recommended gradient option.

**Anchoring guidelines, not a straitjacket.** The point is recognisable InDebted creative tailored to the content — not a grid of identical flat tiles. Compose from the toolkit: pill badges, floating product-UI-card insets, eyebrow labels, em-dash lists, stat lockups, and five valid background treatments (solid pillar, full-bleed gradient, gradient-to-white fade, photo+tint, abstract/mesh). Don't default every tile to flat, and don't crowd the canvas — one dominant element per asset.

**Locked rules:** gradients only from `brand.gradient-1`→`gradient-7` (no off-palette colour, ever); Manrope only; logo bottom-left with variant by background brightness, never top-right; default canvas **1200×1200**; video always captioned. Pick the format and recommended style from the content-type guide, then run the asset against the pre-flight checklist. Name files `IND_LI_[PILLAR]_[FORMAT]_[slug]_[YYYYMMDD]`. **Avoid** article-link posts and angle-less event announcements — lowest engagement in our data.

---

## SLIDE DECKS

Decks are a first-class surface in this system — documented in their own **Slide decks** group in the Design System tab (Deck anatomy · Cover layouts · Section breakers & dividers · Deck principles), with a copyable kit at **`templates/slide-deck/`**. The kit is a *layout library*: a `<deck-stage>` of inline-styled `<section>` slides with generic placeholders. Copy it, delete what you don't need, edit in place.

The system already produces strong, varied decks. The job of the standard is **consistency where it counts** — a shared songsheet — without boxing in the content. So we lock the chrome and leave everything else open.

**Standardise — identical deck to deck:**
- **Logo.** The **primary colour lockup** (mint logomark + wordmark), **bottom-left**, ~28px tall, 100px in. Dark slides use `InDebted Logo Colour DarkBG.svg` (white wordmark); light slides use `InDebted Logo Colour LightBG.svg` (navy wordmark). Never the all-white wordmark, never recoloured.
- **Footer.** Presentation title + page number, **bottom-right**. On covers, logo only — no page number.
- **Covers.** Title block stacked: **eyebrow** (Tiffany on dark / Warm Blue on light, uppercase) → **presentation title** (Manrope ExtraBold, −2% tracking) → **subtitle/date**. Six moods ship — navy, gradient, light, split, mint, full-bleed image — same skeleton, different surface.
- **Section breakers** carry an oversized **section number** + **section title**. **Sub-section dividers** are lighter — a small kicker + title, no number.
- **Header zone.** Content leads top-left: optional **eyebrow** (Warm Blue) → **header** (Endless Galaxy, ExtraBold) → **subheader** (Heron).
- **Margins** 100px. One idea per slide. Generous white space.

**Flex — optimise per audience:** body layout (single/two column, cards, stats, image+text, quote, table, agenda — all in the kit), slide count and order, light vs navy, charts, imagery, density. The **hero can be anything** — an image, a chart, a stat, or nothing. The **3D logomark** (`logomark-3d-transparent.png`) is in the assets for when it fits a hero or campaign moment; it is *not* the default cover hero.

**Visual discipline** (the PowerPoint design-ideas lessons, on-brand): lead with the headline so a slide works without a presenter; one insight per chart, labelled directly, colour used to point not decorate; size type for the back of the room (slide body ≥ ~18px at 1920×1080); placeholders read `00`, `Header`, `Body copy goes here` until filled. Manrope only, sentence case, tokens not hex, the voice rules below. Decks print and export one-page-per-slide out of the box.

---

## ICONOGRAPHY

InDebted uses a **thin-to-medium outline icon style** — rounded line caps and joins, ~2px stroke, on a 24×24 grid (icon size tokens 16/20/24/28/32/40/48). The set is Feather/Lucide lineage — the exact glyphs shipping in the `brand-essentials` product preview.

- **The icon set is in the system.** The `Icon` component (`components/core/Icon.jsx`) carries a curated dictionary of these glyphs lifted from `brand-essentials` — navigation (chevrons, arrows, menu), status (check, x, alert-triangle, info), people/comms (user, mail, phone, bell), money/product (credit-card, dollar-sign, calendar, trending-up) and security (shield, lock, eye). Use `<Icon name="arrow-right" />`; it inherits `currentColor` so it tints with its container. The full list is exported as `iconNames` and rendered on the **Icon set** card.
- **Extending it:** add new glyphs to the `PATHS` map in `Icon.jsx` using the same source set. For anything not yet in the dictionary, pull the matching glyph from **[Lucide](https://lucide.dev/)** (Feather's successor) — it's the same line, weight and grid — and paste its path in.
- **Logos** are real SVGs in `assets/logos/` — full wordmark and square logomark, in Colour / Navy / Black / White. Pick by background, never aesthetic: colour-LightBG on light, colour-DarkBG or White on navy. Maintain clear space equal to the logomark height; never recolour, skew or add effects.
- **Emoji:** not part of the brand UI. Don't use emoji as icons.

---

## Using the system

1. Link `styles.css` for tokens + fonts.
2. Load `_ds_bundle.js` and read components from `window.InDebtedDesignSystem_78ee3b`.
3. Reference tokens by name (`var(--warm-blue-900)`, `var(--space-6)`) — never hardcode hex/px.
4. Compose from the component inventory before building anything custom.
5. Write copy to the voice rules above. Verify colour pairings against WCAG.

Components available: **Button, Badge, Icon, Avatar, Divider, Input, Select, Checkbox, Radio, SegmentedControl, Slider, Card, CardHeader, Accordion, Banner, Alert, ProgressIndicator.**
