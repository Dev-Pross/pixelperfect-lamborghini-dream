

# Lamborghini Website Rebuild — Full Design Replication

## Overview

Rebuild the site to match the Lamborghini.com design language and structure, including all major sections on the homepage and subpage routes.

## Homepage Sections (matching their layout order)

### 1. NavBar Redesign
- **Left**: Hamburger icon + "MENU" text
- **Center**: Lamborghini bull logo (SVG)
- **Right**: Chat icon + Search icon
- Always visible (not scroll-triggered like current)
- Black background, fixed top

### 2. Hero Section
- Full-screen static image background (dark, cinematic car shot)
- Bottom-left aligned text: "INSPIRING FUTURE SINCE 1963" (small caps, spaced) + "DRIVEN BY DREAMS" (large bold heading)
- "Discover More" link below
- Remove current centered "Scroll to ignite" design

### 3. Models Section (full-screen vertical slides)
- "Models" heading with "Discover all Models" link
- Each model is a full-viewport card with:
  - Full-bleed car image
  - Tagline (e.g., "You can't hide who you are")
  - Model name overlay
  - "Explore the model" + "Download brochure" buttons
  - Sub-model tabs for families (Urus: SE, S, Performante; Huracán: Sterrato, Tecnica, STO)
- Models: Temerario, Urus, Revuelto, Huracán

### 4. Dealer Locator Banner
- Dark section with "Dealer Locator" heading and "FIND YOUR DEALER" button
- Background image of a car on road

### 5. Configurator Section
- Tab bar: Temerario | Revuelto | Urus SE
- Each tab shows car image + "Configure your [Model]" heading
- "Start configuration" + "Explore the model" buttons
- Energy consumption disclaimer text

### 6. News Section
- "News Lamborghini world" heading + "Read more" link
- Horizontal scrolling cards with:
  - Thumbnail image
  - Category tag (Corporate, After Sales, Arena, etc.)
  - Date
  - Article title

### 7. Footer
- Lamborghini logo
- Legal disclaimers for each model
- Minimal, dark

## Subpage Routes

| Route | Content |
|-------|---------|
| `/models` | Grid of all models |
| `/models/:slug` | Model detail page (hero image, specs, gallery) |
| `/news` | News listing with category filters |
| `/news/:slug` | Individual article page |
| `/dealerships` | Dealer locator with search |
| `/configurator` | Configurator landing |

## Design System Changes

- **NavBar**: Switch from text-based "LAMBORGHINI" to centered bull logo SVG, hamburger menu pattern
- **Typography**: Keep Roboto Condensed for headings. Match their very large, condensed heading style
- **Colors**: Keep black/white. Replace yellow accent with white (their site is primarily black + white, no yellow)
- **Buttons**: Outlined white buttons with uppercase text, matching their "Explore the model" style
- **Remove**: snap-scroll behavior (their site uses normal scrolling), current SpecsSection, BrandSection (replaced by their actual sections)

## Technical Approach

- Add routes in `App.tsx` for all subpages
- Create reusable components: `ModelCard`, `NewsCard`, `ConfiguratorTab`
- Use framer-motion for scroll-triggered animations
- Replace snap-scroll with smooth normal scrolling
- Generate placeholder images for new model cards
- Build responsive mobile menu (slide-out drawer)

## Implementation Order
1. Redesign NavBar + Hero to match their layout
2. Rebuild Models section as vertical full-bleed cards
3. Add Dealer Locator + Configurator + News sections
4. Update Footer
5. Add subpage routes and pages
6. Polish responsive/mobile design

