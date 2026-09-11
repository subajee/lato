# Lato Tours

A modern Sri Lanka travel marketplace built with Next.js (App Router), TypeScript, and Tailwind CSS. This document describes the **architecture**: how the app is routed, how files are organized, how content flows, and how the server/client split works.

## Tech stack

- **Next.js 16** (App Router) + **React 19**
- **TypeScript**
- **Tailwind CSS** for styling
- **next/font** (Inter for body site-wide; Sora loaded locally in the stats strip)
- Images via **next/image** from Unsplash (AVIF/WebP, lazy-loaded, quality-tuned)
- Output is fully **static** — every route is prerendered (SSG)

## Routes (`app/`)

| Route | File | Notes |
| --- | --- | --- |
| `/` | `app/page.tsx` | Home — composes the section components |
| `/tours/[slug]` | `app/tours/[slug]/page.tsx` | Tour detail pages (12), `generateStaticParams` + `generateMetadata` |
| `/destinations/[slug]` | `app/destinations/[slug]/page.tsx` | Destination detail pages (6), same pattern |
| `/partners` | `app/partners/page.tsx` | B2B / partner landing page |

`app/layout.tsx` is the root shell (loads Inter, wraps `Navbar` + `main` + `Footer`).
`app/globals.css` holds Tailwind layers and shared classes.

## Project structure

```
latotours/
├── app/
│   ├── layout.tsx                    # Root shell: Navbar + main + Footer
│   ├── page.tsx                      # Home (section stack)
│   ├── globals.css                   # Tailwind layers + shared classes
│   ├── tours/[slug]/page.tsx         # Tour detail (dynamic, SSG)
│   ├── destinations/[slug]/page.tsx  # Destination detail (dynamic, SSG)
│   └── partners/page.tsx             # B2B partners page
│
├── components/
│   ├── navbar.tsx            # Sticky bar (client) — search, WhatsApp/Book icon buttons, mobile menu
│   ├── footer.tsx            # Footer with company info + lotus floral background
│   ├── section-heading.tsx  # Eyebrow pill + title (reused site-wide)
│   ├── filter-bar.tsx        # Controlled category pill row (active + onChange)
│   ├── destination-card.tsx # Destination tile → links to /destinations/[slug]
│   ├── tour-card.tsx         # Tour tile → links to /tours/[slug]
│   ├── count-up.tsx          # Scroll-triggered number animation (client)
│   ├── icons.tsx             # Inline SVG icon set (shaded/duotone)
│   ├── motifs.tsx            # LotusMedallion — traditional Sri Lankan motif
│   ├── travel-art.tsx        # Modern travel line-art scatter (backgrounds)
│   └── sections/
│       ├── hero.tsx          # Slideshow banner + search + social proof (client)
│       ├── stats-strip.tsx   # Trust stats bar (server — loads Sora, uses CountUp)
│       ├── destinations.tsx  # Filterable destinations grid (client)
│       ├── tours.tsx         # Filter + sort + pagination grid (client)
│       ├── experiences.tsx   # "Why book with Lato" bento layout
│       ├── reviews.tsx       # Testimonial carousel (client)
│       └── booking-cta.tsx   # Split panel with request form
│
├── lib/
│   └── data.ts               # Single source of truth: content + slug/detail helpers
│
├── tailwind.config.ts        # Theme tokens (brand/accent/gray, shadows)
├── next.config.mjs           # Image formats (AVIF/WebP) + Unsplash remote pattern
└── tsconfig.json             # Path alias: @/* -> project root
```

## Data layer (`lib/data.ts`)

The single source of truth for all content and lookups.

- **Content arrays:** `destinations`, `tours`, `experiences`, `reviews`, `stats`,
  `heroSlides`, `partnerTypes`, `partnerBenefits`, `partnerStats`,
  `accreditations`, `company`, `socialProof` / `socialProofDisplay`.
- **Slug pattern:** raw literals (`destinationData`, `tourData`) are mapped through
  `slugify()` to produce `destinations` and `tours` with stable, URL-safe slugs.
- **Lookup + detail helpers used by the dynamic routes:**
  - `getTourBySlug(slug)`, `getTourDetails(tour)` — highlights, day-by-day itinerary, includes/excludes.
  - `getDestinationBySlug(slug)`, `getDestinationDetails(dest)` — about text, highlights, gallery, related tours. Destinations have hand-written About + gallery keyed by slug; tours generate detail content from templates.

**Content vs. presentation:** all copy and lists live here. Components only handle
layout, so editing content never touches JSX.

## App shell (`app/layout.tsx`)

```
<html>
  <body>
    <Navbar />              ← sticky, translucent, always on top
    <main>{children}</main> ← the routed page
    <Footer />
  </body>
</html>
```

## Home composition (`app/page.tsx`)

A vertical stack of section components, top to bottom:

1. **Hero** — full-bleed image slideshow (auto cross-fade, reduced-motion aware) with headline, segmented search bar, social proof, quick-search chips, and slide dots.
2. **StatsStrip** — trust bar with animated numbers and round icon tiles.
3. **Destinations** — eyebrow heading + category filter + responsive card grid.
4. **Tours** — heading + category filter + sort dropdown + pagination (6/page).
5. **Experiences** — "Why book with Lato" bento layout with a featured photo card.
6. **Reviews** — testimonial carousel with an overall-rating summary.
7. **BookingCta** — full-color panel with the itinerary request form.
8. **Footer** — company info, link columns, lotus floral background.

## Detail pages

Both `/tours/[slug]` and `/destinations/[slug]` share the same premium layout:
a full-bleed hero (image + gradient + back link + chips), a **quick-facts bar** that
overlaps the hero, eyebrow-labelled content sections, and a sticky **booking sidebar**
with a brand-gradient header, star rating, trust checklist, and CTA. Tour pages add a
day-by-day itinerary and an Included/Not-included block; destination pages add a photo
gallery and a "Tours visiting X" grid (reusing `TourCard`).

Each dynamic route uses `generateStaticParams` to prerender one page per item and
`generateMetadata` for per-page SEO title/description.

## Server vs. client components

Most components are **server components** (static, ship no JS). Only interactive pieces
opt into `"use client"`:

- `navbar.tsx` — mobile menu
- `hero.tsx` — slideshow rotation
- `destinations.tsx` — category filtering
- `tours.tsx` — filter + sort + pagination (randomizes order on mount)
- `reviews.tsx` — carousel
- `count-up.tsx` — scroll-triggered number animation

> **`next/font` constraint:** `next/font` cannot run inside a client component. Because
> the hero is client-side (slideshow), `stats-strip.tsx` — which loads Sora — is kept a
> **server** component and rendered from `page.tsx`, not nested inside the hero.

## Layout system

- **Width:** the `.container-page` helper centers content at `max-w-7xl` (1280px) with
  responsive padding (`px-4` → `px-8`). Full-bleed sections extend edge to edge; their
  inner content is still constrained by `.container-page`.
- **Responsive grids** reflow per breakpoint, e.g. Destinations `1 → 2 → 3` cols,
  Tours `1 → 2 → 3`, Stats `2 → 4`.
- **Breakpoints:** Tailwind defaults (`sm` 640, `md` 768, `lg` 1024, `xl` 1280).

## Design system

- **Section titles:** every section leads with a brand eyebrow pill + extrabold title
  (via `SectionHeading` or the same inline pattern).
- **Cards:** `.card` = bordered, rounded, lift-on-hover.
- **Shared classes** (in `globals.css`): `.container-page`, `.btn` / `.btn-primary` /
  `.btn-ghost`, `.card`, `.chip`, `.text-gradient`, `.blob`.
- **Motifs:** `LotusMedallion` (traditional Sri Lankan floral) and `TravelArtScatter`
  (modern travel line-art) provide subtle, on-theme backgrounds.

### Theme tokens (`tailwind.config.ts`)

- **brand** — energetic orange (`#f9531e` at 500) for primary actions/accents
- **accent** — amber (`#ffb200`) for highlights, badges, stars
- **gray** — warm-tinted neutral scale
- Custom `card` and `hover` shadows for the lift-on-hover card style

## Getting started

```bash
npm install
npm run dev      # http://localhost:3000
```

```bash
npm run build    # production build (prerenders all routes)
npm start        # serve the production build
npm run lint     # lint
```

## Notes / TODO before launch

- Trust figures (`socialProof`, ratings, review counts) and partner details
  (`accreditations`, `company` registration/license) are **placeholders** — replace
  with real data.
- Tour itinerary/includes and the "Save %" pricing are template-generated; swap for
  real per-tour content.
- Forms (booking, partner application, search) are UI-only — wire to a backend/API route.
- Images are hosted on Unsplash; self-host licensed photography for production.
