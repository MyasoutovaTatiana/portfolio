# Frontend Code Review

**Date:** March 16, 2025

---

## Summary

- **Architecture:** Clear App Router structure with page-level routes and reusable components. Project data is currently hardcoded in `ProjectsSection`; no shared data layer yet.
- **Code quality:** Consistent use of CSS modules and TypeScript. Some duplication (placeholder project pages), dead code (unused fonts, unused IntersectionObserver state), and mixed patterns (inline styles vs. CSS modules).
- **Accessibility:** Several gaps: duplicate `id` attributes, missing keyboard support for lightbox/modal, no skip link, external links need `rel="noopener"`, and focus handling not implemented for overlays.
- **Performance:** Images use native `<img>` instead of Next.js `Image`; several PNGs are 2–4 MB. No lazy loading. Scroll listener runs on every scroll.
- **Responsiveness:** Limited breakpoints (mainly 900px and 960px). Fixed-width elements (e.g. 720px, 900px) may cause horizontal scroll or cramped layouts on smaller screens.

---

## Strengths

- **Clear component structure:** Separation between layout (Header, AnimatedBackground), content (Hero, ProjectsSection, ProjectCard), and UI primitives (Tag, StatsGrid) is easy to follow.
- **Semantic HTML:** Good use of `<header>`, `<main>`, `<section>`, `<h1>`–`<h3>`, `<nav>`, `<article>` for content hierarchy.
- **Consistent styling approach:** CSS modules used across components; design tokens (colors, spacing) are reused via shared classes.
- **TypeScript usage:** Props are typed (e.g. `ProjectCard`, `StatsGrid`, `Tag`); no `any` in the reviewed files.
- **Decorative images marked correctly:** Side/hover images in `ProjectCard` use `aria-hidden="true"` and `alt=""`, which is correct for decorative content.
- **Passive scroll listener:** `AnimatedBackground` uses `{ passive: true }` for the scroll handler, which helps scroll performance.

---

## Issues and Risks

### Accessibility

| Issue | Location | Impact |
|-------|----------|--------|
| Duplicate `id="changes"` | `material-search/page.tsx` – multiple sections | Invalid HTML; breaks anchor links, screen readers, and `getElementById`. |
| Lightbox not keyboard-accessible | `ImageLightbox.tsx` | No Escape to close, no focus trap, no focus return. Users cannot close without mouse. |
| Lightbox not announced as modal | `ImageLightbox.tsx` | Missing `role="dialog"`, `aria-modal="true"`, `aria-label`. |
| External link missing `rel="noopener"` | `Hero.tsx` – Consta link | Minor security risk; `rel="noreferrer"` is present but `noopener` is recommended for `target="_blank"`. |
| No skip link | Root layout / page | Keyboard users must tab through header before main content. |
| Breadcrumb separator not hidden from screen readers | `material-search/page.tsx` | Decorative `›` may be announced; consider `aria-hidden` on separator. |

### Performance

| Issue | Location | Impact |
|-------|----------|--------|
| Native `<img>` instead of Next.js `Image` | `ProjectCard.tsx`, `ImageLightbox.tsx`, project pages | No automatic optimization, sizing, or format conversion; large PNGs served as-is. |
| Large unoptimized images | `public/` (e.g. CorpSearch-Main ~2.4 MB, SearchMaterial-Main-NG ~3.8 MB) | Slow initial load, especially on mobile. |
| No lazy loading for images | Project cards, lightbox content | All above-the-fold images load immediately. |
| Scroll listener causes re-renders | `AnimatedBackground.tsx` | `setScrollY` on every scroll; consider throttling/RAF or CSS-only alternative. |
| Unused font imports | `layout.tsx` | `Geist` and `Geist_Mono` loaded but not used; adds unnecessary requests and bundle weight. |

### Code Quality and Maintainability

| Issue | Location | Impact |
|-------|----------|--------|
| Dead code: `active` state unused | `material-search/page.tsx` | IntersectionObserver updates `active`, but TOC is commented out; observer adds work and re-renders for no effect. |
| Placeholder pages duplicated | ServiceDD, DesignSystem, arc, corp-search | Same placeholder content in four files; consider a shared component or template. |
| Project data hardcoded | `ProjectsSection.tsx` | No single source of truth; harder to add CMS or API later. |
| Inline styles mixed with CSS modules | `page.tsx` (minHeight, paddingBottom), project pages | Inconsistent styling approach; harder to theme or change globally. |
| Breadcrumb uses `<a href="/">` | `material-search/page.tsx` | Full page reload instead of client-side navigation; should use `Link` from Next.js. |

### Styling and Responsiveness

| Issue | Location | Impact |
|-------|----------|--------|
| Fixed widths | `ProjectCard` (720px images), `Header` (900px), `Hero` (900px) | Risk of overflow or cramped layout on narrow viewports. |
| Limited breakpoints | Most components | Only `StatsGrid` and `material-search` layout have media queries; header, hero, and project cards lack responsive adjustments. |
| Tailwind configured but unused | `postcss.config.mjs`, `package.json` | Tailwind is a dependency but utility classes are not used; could remove or adopt. |
| `minHeight: 200vh` | Home `page.tsx` | Arbitrary value; purpose unclear and may affect layout on different screens. |

### Correctness and UX

| Issue | Location | Impact |
|-------|----------|--------|
| Placeholder metadata | `layout.tsx` | Title and description still "Create Next App"; poor SEO and sharing. |
| Alt text inconsistency | `material-search` ImageLightbox usage | Several images use alt "старый интерфейс" where content differs (e.g. table search, analogies, New Year stats). |
| Header links to `#` | `Header.tsx` | CV and LinkedIn point to `href="#"`; non-functional until wired. |

---

## Recommendations

### High priority

1. **Fix duplicate IDs** – Give each section in `material-search` a unique `id` (e.g. `changes-1`, `changes-2`, or semantic names like `redesign`, `table-search`).
2. **Add keyboard and ARIA to ImageLightbox** – Implement Escape to close, focus trap when open, focus return on close, and `role="dialog"` with `aria-modal="true"`.
3. **Use Next.js `Image`** – Replace `<img>` with `next/image` for project and lightbox images; add `sizes` for responsive behavior.
4. **Remove or use fonts** – Either remove `Geist` and `Geist_Mono` from `layout.tsx` or apply them; avoid loading unused assets.

### Medium priority

5. **Centralize project data** – Move project definitions to a shared module (e.g. `data/projects.ts`) and render from that; simplifies updates and future CMS integration.
6. **Optimize images** – Compress PNGs, consider WebP/AVIF, and use Next.js image optimization.
7. **Add skip link** – Add a "Skip to main content" link at the top of the page for keyboard users.
8. **Replace breadcrumb `<a>` with `Link`** – Use Next.js `Link` for internal navigation in breadcrumbs.
9. **Throttle or replace scroll handler** – Use `requestAnimationFrame` or CSS `transform` for AnimatedBackground to reduce re-renders.

### Lower priority

10. **Add `rel="noopener"`** – Include `rel="noopener noreferrer"` on all `target="_blank"` links.
11. **Update metadata** – Set real title and description in `layout.tsx` for SEO.
12. **Improve responsive design** – Add media queries for header, hero, and project cards; consider fluid image widths.
13. **Resolve Tailwind usage** – Either remove Tailwind or start using it where it adds value.
14. **Fix alt text** – Provide accurate, unique `alt` for each ImageLightbox image in material-search.
15. **Remove dead code** – Remove the IntersectionObserver and `active` state in material-search, or restore the TOC sidebar.
