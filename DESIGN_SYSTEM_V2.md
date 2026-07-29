# NightCode Labs Design System v2

Status: Design definition only — implementation pending approval  
Scope: Official NightCode Labs website and future product experiences

## 1. Core Philosophy

NightCode is an engineering company. The design system should communicate thoughtful construction, reliable systems, and long-term intent before it communicates promotion.

The visual language is calm intelligence: precise structure, restrained contrast, useful motion, and enough whitespace for important ideas to carry weight.

Design decisions should answer one question: does this help a visitor understand the system, its purpose, or its state?

## 2. Visual Identity Principles

- Precision over decoration.
- Guidance over noise.
- Intelligence over spectacle.
- Innovation through disciplined iteration.
- Calm surfaces with deliberate depth.
- Strong hierarchy before visual effects.
- Every line, radius, glow, and transition has a job.

NightCode should feel memorable through consistency: a quiet dark field, engineered geometry, editorial typography, and a small number of meaningful signals.

## 3. Layout System

Use a centered content system with a maximum readable width of approximately 80rem. Sections may use full-bleed backgrounds, but content should remain aligned to the same shell.

- Outer gutter: fluid, approximately 1.25rem on mobile to 4rem on wide screens.
- Reading measure: 38–48rem for introductions and long-form copy.
- Wide composition: up to 80rem for timelines, consoles, and product layouts.
- Align headings, supporting copy, controls, and structural lines to a shared edge.
- Prefer asymmetry with clear logic over centered repetition.

## 4. Grid System

The base grid is a 12-column conceptual system, implemented with CSS grid or flex layouts as appropriate.

- Desktop: 12 columns with consistent gutters.
- Tablet: 6 columns or a reduced two-column composition.
- Mobile: one column with deliberate grouping.
- Use vertical alignment as a primary design tool.
- Keep structural lines, diagrams, and content blocks on grid boundaries.
- Never preserve desktop geometry at the expense of mobile comprehension.

## 5. Section Rhythm

Sections should feel like chapters in one engineered narrative:

Hero → Products → NightCore Philosophy → Roadmap → NightCore Console → Build with JARVIS → Footer.

Use generous section padding. The default section rhythm is approximately 5rem minimum and scales toward 10rem on large screens. Reduce padding only when a dense information panel requires closer grouping.

Each section should have:

1. An identifiable entry point.
2. One primary heading.
3. A controlled reading measure.
4. A clear visual or informational anchor.
5. A quiet exit into the next chapter.

## 6. Spacing Scale

Use a 4px base unit with larger values chosen for rhythm rather than arbitrary accumulation.

| Token | Size | Use |
|---|---:|---|
| 1 | 4px | Fine separation |
| 2 | 8px | Icon and label gaps |
| 3 | 12px | Compact control spacing |
| 4 | 16px | Base component spacing |
| 5 | 20px | Small content groups |
| 6 | 24px | Card and panel internals |
| 8 | 32px | Content group separation |
| 10 | 40px | Intro and control separation |
| 12 | 48px | Section subgroups |
| 16 | 64px | Large composition gaps |
| 20+ | 80px+ | Section-level whitespace |

Spacing should be consistent within a component and intentionally generous between components.

## 7. Typography System

Use the existing Geist-compatible sans and mono variables. Typography should feel technical without becoming terminal-like.

- Display: large, medium-weight, tight tracking; reserved for one statement per section.
- Section heading: 2.25–3.75rem fluid range, tight tracking, balanced wrapping.
- Subheading: 1.25–1.75rem, medium weight.
- Body: 1rem base, 1.6–1.75 line height, muted but readable.
- Small label: 0.65–0.75rem, mono, uppercase, measured tracking.
- Status and metadata: mono, compact, explicit, never color-only.

Headings are statements. Body copy explains. Mono type identifies state, category, or system context.

## 8. Color Language

Core palette:

- Night Black: primary background and deepest field.
- Deep Navy: structural contrast and elevated dark surfaces.
- Electric Cyan: active signal, focus, and precise accent.
- Royal Blue: restrained environmental lighting and depth.
- Soft Violet: secondary intelligence signal, used sparingly.
- Pure White: primary text and high-importance controls.

Semantic colors:

- Foreground: primary readable content.
- Muted foreground: supporting content.
- Subtle foreground: metadata and low-priority context.
- Border: quiet structural separation.
- Strong border: focused or emphasized separation.

Accent usage should be scarce. Cyan identifies interaction or active engineering state; it should not become a general decoration color.

## 9. Surface System

Use a three-level dark surface hierarchy:

1. Night Black — page field.
2. Surface — quiet information grouping.
3. Surface Raised — active or primary panel.

Surfaces should be distinguished by small changes in value, border treatment, and lighting. Avoid applying blur or translucency to every surface.

## 10. Lighting Rules

Lighting is structural, not atmospheric decoration.

- Use broad, low-opacity radial light to establish an anchor.
- Keep lighting behind content and below readable contrast thresholds.
- Use cyan for active focus and blue for environmental depth.
- Violet is a secondary note, never the dominant field.
- Do not use particles, stars, galaxies, random floating shapes, or neon halos.
- A glow should explain focus, hierarchy, or connection; otherwise remove it.

## 11. Border Language

Borders represent system boundaries and relationships.

- Default border: low-opacity slate.
- Strong border: deliberate emphasis or focus.
- Accent border: active engineering state only.
- Prefer one clear border over multiple nested outlines.
- Use structural dividers to create rhythm in consoles, timelines, and footers.

## 12. Corner Radius System

Keep geometry restrained and consistent:

- Small: 6px — controls, links, compact elements.
- Medium: 10px — standard panels and buttons.
- Large: 16px — primary product and information panels.
- Pill: reserved for statuses and compact state labels.

Avoid excessive rounding. NightCore geometry may use circles and orbital ellipses when they communicate a relationship, not as decoration.

## 13. Elevation Rules

NightCode uses tonal elevation before shadow elevation.

- First: change surface value.
- Second: add a restrained border.
- Third: use a soft, low-opacity shadow only when separation is unclear.
- Never use large black shadows on a black page.
- Primary panels may have subtle inset light or radial depth, but should remain calm.

## 14. Motion System

Motion exists to explain state, sequence, or relationship.

- Standard easing: smooth, controlled, non-bouncy.
- Fast: approximately 160ms for hover and focus color changes.
- Standard: approximately 280ms for component responses.
- Slow: approximately 600ms for section entry and assembly.
- Entry motion: opacity plus small upward translation.
- Diagram motion: assembly or path reveal once.
- Hover: slight emphasis, color, border, or 1–2px lift only when useful.
- End state: stillness. No continuous spinning, bouncing, or scrolling effects.

Respect `prefers-reduced-motion` by removing nonessential animation and preserving content visibility.

## 15. Illustration Language

Illustration should be diagrammatic and purposeful:

- Use lines, nodes, grids, rings, axes, and measured framing.
- Prefer CSS or inline SVG for structural marks.
- Use geometry to explain systems, dependencies, and progression.
- Avoid fake product screenshots, decorative dashboards, sci-fi interfaces, and generic AI imagery.
- Keep the number of visual primitives low enough that the relationship is legible immediately.

## 16. NightCore Integration Rules

NightCore is the visual grammar of the company, not merely a logo.

It may influence:

- Crossed axes and central anchors.
- Orbital relationships and measured rings.
- Section divider geometry.
- Repeated spacing intervals.
- Assembly and reveal transitions.
- Focus states and active connection lines.

Use NightCore deliberately. Do not repeat the mark in every component. A section should feel NightCode through its structure even when the mark is absent.

## 17. Component Philosophy

Components should be small, semantic, and composable.

- Prefer typed configuration for repeated content.
- Keep static content server-rendered.
- Create client components only for actual browser interaction.
- Make states explicit: active, planned, preview, inactive, unavailable.
- Avoid abstractions that hide content hierarchy.
- Prefer one well-defined panel pattern over many card variants.
- Keep focus, hover, reduced-motion, and mobile behavior inside the component contract.

Interaction patterns:

- Buttons: clear action, solid or outline treatment, visible focus.
- Links: quiet by default, readable on hover, no dramatic movement.
- Cards: editorial containers, not sales tiles.
- Information panels: label, value, context, and state.
- Timelines: ordered content first; connecting line second.
- Engineering panels: truthful state, replaceable data, no simulated activity.

## 18. Accessibility Rules

- Use semantic landmarks and heading order.
- Never communicate status through color alone.
- Maintain visible keyboard focus with high-contrast rings.
- Provide descriptive labels for icon-only controls.
- Keep body text readable against dark surfaces.
- Preserve link targets and anchor semantics.
- Ensure mobile content remains understandable without hover.
- Respect reduced motion and avoid content that depends on animation to appear.
- Test at keyboard, touch, zoom, and screen-reader interaction levels.

## 19. Responsive Philosophy

Responsive design is recomposition, not shrinkage.

- Desktop provides spatial relationships and editorial contrast.
- Tablet reduces columns while preserving hierarchy.
- Mobile becomes a clear sequence of readable groups.
- Preserve the order of the narrative and product priorities.
- Stack actions before shrinking them into unusable controls.
- Remove decorative geometry when it competes with mobile content.
- Avoid horizontal scroll, clipped text, and fixed-width panels.

## 20. Website Evolution Strategy

The current homepage remains the canonical narrative:

Hero → Products → NightCore Philosophy → Roadmap → NightCore Console → Build with JARVIS → Footer.

The v2 system should be adopted incrementally:

1. Normalize tokens and component states.
2. Align section containers, spacing, typography, and borders.
3. Refine lighting and structural geometry without adding new sections.
4. Audit motion for purpose, timing, and reduced-motion behavior.
5. Validate mobile composition and accessibility.
6. Introduce real product data only where it is available and maintain clear status language.

Future product surfaces should inherit this system rather than create independent visual identities. The website may evolve, but its recognizable signature should remain: dark precision, quiet depth, measured geometry, and calm intelligence.

## Approval Boundary

This document defines the NightCode Labs Design System v2 only. No React, CSS, or existing section implementation should be changed until the system is approved and an implementation milestone is explicitly authorized.
