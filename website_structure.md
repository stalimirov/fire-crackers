# Fire Crackers — Website Structure

---

## Platform

**Shopify** with a custom theme built on the Dawn base. No off-the-shelf theme used as-is.

Integrations:
- **Printful** — print-on-demand merch fulfillment
- **Klaviyo** (or Shopify Email) — email capture, flows, segmentation
- **Google Maps / Mapbox** — bar finder map, styled to brand palette
- **Lottie** — lightweight character animations embedded via lottie-player web component
- **YouTube** — mini-series embeds on /the-archive

---

## Global Design Rules

| Element | Treatment |
|---|---|
| Page background | Kraft paper CSS texture tile (`#C4956A` family) |
| Film grain | Full-viewport SVG feTurbulence overlay, ~18% opacity, always on |
| Borders / outlines | Rough/hand-drawn SVG border assets — no clean geometric CSS borders |
| Buttons / CTAs | Rubber stamp style — Alfa Slab One, Fire Red `#CC2200` bg, Aged Cream `#F2E4C4` text |
| Headlines | Alfa Slab One, all-caps encouraged, +50–100 letter-spacing |
| Subheadings / Nav | Barlow Condensed Bold |
| Body copy | DM Sans Regular/Medium |
| Section dividers | Scorch mark SVG assets |
| Photography | Brand-produced only. No stock. Animation composited over real footage where used. |
| Mobile priority | Mobile-first layout. Primary users are on phones in bars. |

**Color usage (no exceptions):**
- `#1C1410` Char Black
- `#CC2200` Fire Red
- `#C4956A` Kraft
- `#F2E4C4` Aged Cream
- `#E8621A` Ember Orange
- `#C9933A` Wax Gold
- `#7A6E5F` Smoke
- `#E8EBE4` Ghost White
- `#2D5016` Deep Green

No `#FFFFFF`. No `#000000`. No off-palette colors anywhere in the UI.

---

## Navigation

### Desktop
```
[FIRE CRACKERS wordmark]    THE CREW / THE HEAT / MERCH / FIND US    [STOCK US]  [cart]  [JOIN THE LIST]
```
- Wordmark: left-aligned, links to `/`
- Center nav: Barlow Condensed Bold, spaced
- Right: STOCK US in smaller text, cart icon, JOIN THE LIST as a stamp CTA button

### Mobile
- Hamburger icon (top right) + wordmark (top left) + cart icon
- Tap hamburger → full-screen overlay menu
- Overlay background: random character illustration at 15% opacity (rotates on each open)
- Menu items stacked vertically, Alfa Slab One, large

### Sticky behavior
- Sticky on all pages
- On scroll-down: collapses to wordmark + cart icon only
- On scroll-up: full nav re-expands

---

## Site Map

```
/                         Homepage
/the-crew                 Character universe — full cast grid
/the-crew/blaze           Blaze individual page
/the-crew/matchstick      Matchstick individual page
/the-crew/ha-hank         Ha-Hank individual page
/the-crew/carolina        Carolina individual page
/the-crew/ghost           Ghost individual page
/the-crew/abi             Abi individual page
/the-crew/shipka          Shipka individual page
/the-crew/smoky           Smoky individual page
/the-heat                 Product listing — all crackers
/products/[handle]        Individual product page (Shopify standard route)
/merch                    Merch listing
/collections/merch/[slug] Individual merch product
/find-us                  Bar finder map + online order
/the-factory              Brand story / about
/the-archive              Mini-series + content hub
/stock-us                 B2B bar owner enquiry
/list                     Email signup
/cart                     Shopify cart
/checkout                 Shopify checkout
/policies/privacy-policy  Legal
/policies/terms-of-service Legal
/policies/shipping-policy  Legal
/policies/refund-policy    Legal
```

---

## Phase 1: Pre-Launch Landing Page

**Route:** `/` (replaces homepage until launch)
**Purpose:** Build email list. Create intrigue. Test brand aesthetic resonance.
**No navigation. No shop links. No product details.**

### Section Specs

| # | Section | Content | Notes |
|---|---|---|---|
| 1 | Hero / Hook | Lottie brand ident (5s loop) + headline + email form | Full viewport. Autoplay, no sound. |
| 2 | The Signal | 3 atmospheric image/video loops | No product explanation. |
| 3 | Cast Teaser | 8 character silhouettes, unnamed | JS-driven: silhouettes reveal on schedule matching social calendar |
| 4 | Footer | Seal logo, 18+, social icons, email | Minimal |

### Character Silhouette Reveal Schedule (matches content_strategy.md)
```
Week 3, Monday    → Blaze reveals (fill in silhouette 1)
Week 3, Wednesday → Matchstick reveals
Week 3, Friday    → Ha-Hank reveals
Week 4, Monday    → Carolina reveals
Week 4, Wednesday → Ghost reveals (silhouette 5 was slightly offset from others — Ghost "slipped in" early)
Week 4, Friday    → Abi reveals
Week 4, Sunday    → Shipka reveals
Week 5, Tuesday   → Smoky reveals
```
Implementation: JS reads current date against a reveal schedule config object; fills silhouettes progressively.

---

## Phase 2: Full Launch Site — Page Specs

---

### `/` — Homepage

**Purpose:** Brand entry point from social, QR codes, word of mouth. Communicates the full world in one scroll.

| Section | Type | Key Content | CTA |
|---|---|---|---|
| Hero | Full viewport | Blaze Lottie + headline + subhead | FIND A BAR / SHOP ONLINE |
| The Crew Strip | Horizontal scroll | 8 character idle animations + names | Each → /the-crew/[slug] |
| The Heat | Product cards (3–4) | Tilted pack-face cards | SEE ALL FLAVORS → /the-heat |
| The Mission | Dark narrative section | Brand story paragraph | THE FULL STORY → /the-factory |
| The Series | Video embed/still | Episode 1 thumbnail | WATCH → /the-archive |
| Merch Strip | Product cards (3) | Featured merch items | ALL MERCH → /merch |
| Find Us Map | Embedded map | Stocked bar pins | SEE ALL BARS / ORDER ONLINE |
| Email Capture | Full-width form | Headline + 1-field form | — |
| Footer | Standard | 4 columns | — |

**Product cards (The Heat section):** Each card is rotated a unique CSS angle (-3deg, +2deg, -1deg, +4deg). Hover: snaps to 0 rotation, slight scale-up. Gives "placed by hand" feel.

---

### `/the-crew` — Character Universe

**Purpose:** The brand universe hub. Audience builds loyalty to specific characters here.

| Element | Spec |
|---|---|
| Page header | `THE CREW` + subtext, full-width, scorch mark divider below |
| Character grid | 2×4 desktop, 1-col mobile. Each card: large illustration, name, ingredient, one-liner, MEET CTA |
| Card behavior | Slight tilt per card (CSS transform). Hover: character does a quick Lottie reaction (1-second burst). |
| Card order | Blaze first, then: Matchstick, Ha-Hank, Carolina, Ghost, Abi, Shipka, Smoky |

---

### `/the-crew/[slug]` — Individual Character Page

**Purpose:** Deep character profile. Universe building. Connects character to product and series.

| Section | Content |
|---|---|
| Character hero | Large illustration left, details right (desktop). Stacked mobile. |
| Bio | 2–3 paragraphs, brand voice |
| Stats strip | INGREDIENT / ROLE / HEAT LEVEL / SIGNATURE MOVE — displayed as labeled data blocks |
| First Appearance | Link to intro episode or social reveal post |
| Product CTA | `TRY THEIR CRACKER` → /products/[sku] or `COMING SOON` |
| Series CTA | `WATCH THE SERIES` → /the-archive |
| Crew scroll | Horizontal: 7 other characters with MEET links |

**Slug → Character mapping:**
```
/the-crew/blaze       → Blaze
/the-crew/matchstick  → Matchstick
/the-crew/ha-hank     → Ha-Hank
/the-crew/carolina    → Carolina
/the-crew/ghost       → Ghost
/the-crew/abi         → Abi
/the-crew/shipka      → Shipka
/the-crew/smoky       → Smoky
```

---

### `/the-heat` — Product Listing

**Purpose:** Shop for crackers. Styled as mission dossier / wanted poster wall.

| Element | Spec |
|---|---|
| Page header | `THE HEAT` + subtext |
| Filter strip | 5 heat tier buttons + ALL. Filters product grid client-side. Each button uses its tier color. |
| Product grid | 3-col desktop, 2-col tablet, 1-col mobile |
| Product card | Pack-face style: character illustration (dominant), flavor name, heat tier + flames, price, ADD TO CART |
| LTO section | Separate below core products. Header: `SPECIAL OPS — LIMITED EDITIONS`. Active LTO has countdown timer. Sold-out LTOs remain visible with `CLASSIFIED` stamp overlay. |

---

### `/products/[handle]` — Individual Product Page

| Section | Content |
|---|---|
| Image gallery | Pack front, pack back, character lifestyle shot, ingredient flat-lay |
| Product details | Flavor name, character + heat tier, price, weight, ADD TO CART |
| Description | 2–3 sentences, brand voice |
| Ingredients | Clean list — a feature, not fine print. Displayed prominently. |
| Allergens | Required EU labeling, DM Sans, clear |
| Pairs With | 2–3 drink/occasion pairings, written in character voice |
| Character quote | Illustration inset + quote from that character about the flavor |
| Related products | `FROM THE SAME CREW` — 3 related SKUs |
| Heat explainer | `HOW HOT IS [TIER]` — 5-tier visual system |

---

### `/merch` — Merch Listing

**Purpose:** Merch as standalone product line. Art first, brand second.

| Element | Spec |
|---|---|
| Page header | `WEAR THE HEAT` + subtext |
| Category tabs | APPAREL / ACCESSORIES / BAR GEAR — filters the grid |
| Product grid | Same layout as /the-heat |
| Card | Product image, item name, character/design name, price, ADD TO CART |
| Print-on-demand tag | `Ships in 5–7 days` label on POD items |
| Limited drop tag | Batch count + countdown on limited items |

---

### `/find-us` — Bar Finder

| Section | Content |
|---|---|
| Online section | Header + direct link to shop. Bulgaria + RO/GR shipping noted. |
| Map section | Full-width styled map. Custom Blaze-head pin markers. Click pin → bar name, address, SKUs stocked. |
| Bar list | Searchable/filterable list below map. City → Neighbourhood → Bar name. |
| Not on the map | CTA section → /stock-us |

**Map implementation:** Google Maps JavaScript API or Mapbox GL JS. Bar locations stored as a JSON data file in theme assets, loaded client-side. Map styled with custom JSON to match brand palette (dark roads, kraft-tone land, Char Black water).

**Bar data structure (per location):**
```json
{
  "name": "Bar Name",
  "address": "Street, Sofia",
  "neighbourhood": "Center",
  "city": "Sofia",
  "skus": ["blaze-wheat", "carolina-reaper"],
  "coordinates": [42.6977, 23.3219]
}
```

---

### `/the-factory` — Brand Story

**Purpose:** Not an about page. The origin story of the brand universe.

| Section | Content |
|---|---|
| Opening | Full-viewport dark section. Factory animation (Lottie or video loop). `Against All Blandness.` headline. |
| Chapter 1: THE FACTORY | 2–3 paragraphs. Where it started. What it is. |
| Chapter 2: THE CREW | 2–3 paragraphs. Who they are. What they're against. |
| Chapter 3: THE INGREDIENTS | 2–3 paragraphs. Bulgarian sourcing. Few ingredients. Why it matters. |
| Ingredients grid | Ingredient illustrations + 2-line origin notes |
| Values | BOLD / CRAFT / IRREVERENT / AUTHENTIC / CHARACTER — compact list with 1-sentence definitions |
| CTA | `TRY WHAT WE MAKE` → /the-heat |

---

### `/the-archive` — Content Hub

| Section | Content |
|---|---|
| Series header | `AGAINST ALL BLANDNESS — SEASON 1` |
| Featured episode | Latest episode, full-width, YouTube embed in modal or direct link |
| Episode grid | Each card: thumbnail, ep number, title, 1-line synopsis, duration |
| Shorts section | `DISPATCHES FROM THE FACTORY` — shorter content grid |
| Mission logs | Past LTO content as dossier cards: mission name, character, flavor, status badge |

**Episode card statuses:** WATCH NOW / COMING [DATE] / CLASSIFIED (unreleased/teased)

---

### `/stock-us` — B2B Enquiry

**Purpose:** Bar owners and independent retailers expressing interest.

| Element | Spec |
|---|---|
| Tone | Darker, more direct than rest of site. Still brand voice. Not corporate. |
| Header | `PUT FIRE CRACKERS BEHIND YOUR BAR.` |
| Pitch points | 4 bullet points: format, wholesale price, sale-or-return, direct delivery |
| Form | Bar name, contact name, city, phone or email, optional message |
| Submit CTA | `SEND IT` |
| Post-submit | Inline confirmation message in brand voice. Automated email sent. Manual follow-up within 48h. |

---

### `/list` — Email Signup

Standalone page for the email list. Used as the link-in-bio destination during Phase 1.

| Element | Spec |
|---|---|
| Header | `STAY IN THE FIRE.` |
| Body | 2 lines. What they'll get. |
| Form | 1 field (email). Button: `I'M IN`. |
| Fine print | `No bland emails. Unsubscribe anytime.` |

---

## Email Flows

| Flow | Trigger | Subject line |
|---|---|---|
| Waitlist welcome | Phase 1 signup | `You're on the list.` |
| Launch notification | Manual send at launch | `We're live. Limited. Here's where.` |
| LTO mission briefing | LTO product published | `MISSION BRIEFING — [FLAVOR NAME]` |
| Post-purchase | Order confirmed | `Good choice. Snack responsibly.` |
| Abandoned cart | Cart abandoned 1h | `[Character] is judging you.` |
| Restock alert | Product restocked | `[CHARACTER] is back.` |

All email templates: Aged Cream background, Char Black type, brand illustration per flow, Alfa Slab One for subject/headline, DM Sans for body.

---

## Shopify Theme Architecture

```
/theme
  /assets
    - firecrackers.css          (main stylesheet)
    - firecrackers.js            (main JS)
    - grain-overlay.svg          (film grain SVG filter)
    - kraft-texture.jpg          (seamless kraft background tile)
    - scorch-divider.svg         (section divider asset)
    - border-rough.svg           (rough border treatment)
    - bars.json                  (bar location data)
    - [character]-idle.json      (Lottie animation per character)
    - brand-ident.json           (Lottie brand ident animation)
    - flame-[1-5].svg            (heat tier flame icons)
  /sections
    - header.liquid
    - footer.liquid
    - hero.liquid
    - crew-strip.liquid
    - product-cards.liquid
    - mission-block.liquid
    - series-teaser.liquid
    - merch-strip.liquid
    - find-us-map.liquid
    - email-capture.liquid
    - character-hero.liquid
    - product-detail.liquid
    - bar-finder.liquid
    - factory-story.liquid
    - archive-grid.liquid
    - stock-us-form.liquid
  /templates
    - index.json
    - collection.json
    - product.json
    - page.the-crew.json
    - page.the-factory.json
    - page.the-archive.json
    - page.find-us.json
    - page.stock-us.json
    - page.list.json
  /snippets
    - character-card.liquid
    - product-card.liquid
    - heat-tier.liquid
    - lottie-embed.liquid
    - scorch-divider.liquid
  /layout
    - theme.liquid
    - password.liquid          (Phase 1 pre-launch page)
```

---

## Performance Targets

- Lighthouse mobile score: 85+
- LCP (Largest Contentful Paint): <2.5s
- Lottie animations: <150kb per file, lazy-loaded below fold
- Images: WebP, responsive srcset, lazy-loaded
- Fonts: Google Fonts loaded with `display=swap`, preconnect hints
- Grain overlay: SVG filter (not image), no additional HTTP request
