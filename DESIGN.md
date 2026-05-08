# Gulag DAO White Paper Design System

## Purpose & Tone
Narrative-driven, classified-aesthetic informational portal. Covert liberation narrative — dark, operatic, patriotic. Conveys secure zone entry philosophy.

## Visual Direction
Dark metallic with cyan (#00FFFF/L:0.55 C:0.28 H:195) and gold (#FFD700/L:0.65 C:0.26 H:65) accents. Heavy geometric typography. Circuit-board overlays. Portal borders with cyan glow. Classified header badges. Anti-generic operational severity.

## Palette
| Token | Role | OKLCH | Usage |
|-------|------|-------|-------|
| Primary | Cyan CTA, portal glow | 0.55 0.28 195 | "Launch The Gate", portal borders, accents |
| Secondary | Gold accent | 0.65 0.26 65 | "Exit" button, classified badges, highlights |
| Background | Near-black | 0.10 0 0 | Dark mode base |
| Card | Dark steel gray | 0.16 0 0 | Portal sections, elevated surfaces |
| Foreground | Off-white | 0.95 0 0 | Body text, high contrast |
| Muted | Dim gray | 0.20 0 0 | Secondary text, disabled states |
| Destructive | Red | 0.65 0.22 20 | Warnings, errors |

## Typography
| Role | Font | Weight | Usage |
|------|------|--------|-------|
| Display | Bricolage Grotesque | 400–700 | Page headings, hero text, section titles |
| Body | General Sans | 400–600 | Navigation, body copy, UI labels |
| Mono | Geist Mono | 400 | Data values, classified labels, dossier text |

## Elevation & Depth
- Hero: Gradient overlay (cyan–gold), circuit-board texture 5% opacity
- Portal Cards: 1px primary border, inset cyan glow (5% opacity), hover outer glow
- Buttons: CTA glow on hover (20–32px radius), inner edge highlight
- Data Zones: Monospace muted text, no background lift

## Structural Zones
| Zone | Background | Border | Texture | Purpose |
|------|------------|--------|---------|----------|
| Hero | Gradient 0.10→0.16 | None | Circuit overlay | Immediate impact, lore hook |
| Nav Portals | 0.16 0 0 card | 1px primary/0.6 | None | Section entry points |
| Content | 0.10 0 0 base | None | None | Body text, dossier prose |
| Data / Treasury | 0.16 0 0 card | 1px border/0.3 | None | Tables, token info |
| Footer | 0.15 0 0 | 1px border/0.3 | Subtle circuit | CTAs, exit state |

## Component Patterns
- **Buttons**: `cta-glow` class for hover state. Cyan primary, gold secondary. 8px radius, heavy weight. Glows to 32px on hover.
- **Portal Borders**: `portal-border` class. 1px cyan, inset+outer glow on hover. Used on all section entry cards.
- **Gradient Text**: `gradient-text` class. Cyan→gold on hero, headings. Clip text fill.
- **Classified Badge**: `classified-badge` class. Monospace, all-caps, 0.625rem, gold color, 0.15em letter-spacing. Header of each portal.
- **Circuit Texture**: `circuit-texture` class. Grid overlay, 20px spacing, 2% opacity cyan.

## Motion & Timing
- `portal-pulse`: 3s infinite, breathing glow on portal cards (0.2→0.3 shadow amplitude)
- `gate-shine`: 2s infinite, shimmer on hero or loading state
- `transition-smooth`: 0.3s cubic-bezier(0.4, 0, 0.2, 1) for all interactive elements
- No bouncy animations. Smooth, deliberate, operatic.

## Constraints
- No light mode. Dark only.
- Never use raw hex or RGB. All colors via OKLCH CSS variables.
- Min 0.7 L-difference for foreground-on-background (AA+).
- Radius: 0 (none), 4px (inputs), 8px (buttons), 12px (cards) — no uniformity.
- No drop shadows. Prefer inset glow + border + background lift.
- Monospace for all data, numbers, classified labels — never mix with sans-serif for emphasis.

## Signature Detail
Geometric reinvented Hammer & Sickle motif — abstract interlocking shapes in hero, patriotic NOT Soviet. Cyan glow on symbol. Portal borders breathe with `portal-pulse` animation. Classified header badges on every section signal secure zone entry.

## Responsive
Mobile-first. Portal cards stack on `sm:`. Hero text scales `lg:text-5xl sm:text-3xl`. Data tables horizontal scroll on mobile. Minimal breakpoint usage — design is mostly fluid.

## Accessibility
- All cyan/gold glows support `prefers-reduced-motion:none animations`
- Border contrast ≥ 3:1 on portal-border (primary/0.6 on 0.10 L bg)
- Buttons use `aria-label` for icon buttons
- Monospace data is semantic `<data>` or `<time>` elements, not `<span>`
- Hero symbol is `<figure>` with `<figcaption>` legend

