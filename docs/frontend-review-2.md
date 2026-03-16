# Frontend Code Review (Second Pass)

**Date:** March 16, 2025

---

## Summary

- **Substantial progress:** Many issues from the first review are resolved: duplicate IDs, ImageLightbox keyboard/ARIA, skip link, metadata, Next.js Image usage, project data centralization, breadcrumb Link, external link security, responsive layout, scroll throttling, and alt text improvements.
- **New functionality:** Year-in-Review carousel on material-search page is well structured (aria-roledescription, labelled controls, Escape/arrows in overlay); overlay nav may be off-screen on narrow viewports.
- **Remaining gaps:** Focus trapping in modals/overlays, carousel overlay nav positioning on phones, placeholder project pages still duplicated, and header CV/LinkedIn links still non-functional.
- **Code quality:** `sections` array in material-search is retained for future use with explicit eslint-disable; structure is cleaner with `data/projects.ts`.

---

## Changes Since Previous Review

### Fixed

| Previous issue | Status |
|----------------|--------|
| Duplicate `id="changes"` | **Fixed.** Unique IDs: `ux-redesign`, `ux-table-search`, `ux-analogs`, `ux-new-year-stats`, `result` |
| ImageLightbox not keyboard-accessible | **Fixed.** Escape to close, focus return, `role="dialog"`, `aria-modal="true"`, `tabIndex={-1}` on overlay |
| Lightbox not announced as modal | **Fixed.** `role="dialog"`, `aria-modal="true"`, `aria-label` on overlay |
| External link missing `rel="noopener"` | **Fixed.** Hero Consta link uses `rel="noopener noreferrer"` |
| No skip link | **Fixed.** Skip link in layout, targets `#main-content`, styled with `:focus` visibility |
| Breadcrumb separator not hidden | **Fixed.** Separator has `aria-hidden="true"` |
| Native `<img>` instead of Next.js `Image` | **Fixed.** ProjectCard, ImageLightbox, YearReviewCarousel use `next/image` with `sizes` |
| Scroll listener causes re-renders | **Fixed.** AnimatedBackground uses `requestAnimationFrame` throttling |
| Unused font imports | **Fixed.** Geist/Geist_Mono removed; only Inter used |
| Project data hardcoded | **Fixed.** Centralized in `data/projects.ts` |
| Breadcrumb uses `<a href="/">` | **Fixed.** Uses `Link` from Next.js |
| Placeholder metadata | **Fixed.** Real title and description in layout |
| Alt text inconsistency | **Fixed.** Unique alt text per ImageLightbox |
| Limited breakpoints | **Fixed.** Header, Hero, ProjectCard, ProjectsSection, material-search have 768px and 1024px breakpoints |
| `minHeight: 200vh` / inline styles on main | **Fixed.** `mainRoot` uses CSS class; `min-height: 100vh` |
| Dead code (IntersectionObserver) | **Partially fixed.** `sections` kept for future TOC; IntersectionObserver removed |

### Still present

| Previous issue | Status |
|----------------|--------|
| Focus trap in modal overlay | **Still absent.** ImageLightbox and YearReviewCarousel dialogs do not trap focus; Tab can move focus outside |
| Placeholder pages duplicated | **Still present.** ServiceDD, DesignSystem, arc, corp-search share identical placeholder |
| Header links to `#` | **Still present.** CV and LinkedIn non-functional |

### Not rechecked (lower priority)

- Tailwind usage (still configured but not used)
- Image optimization / compression of source PNGs

---

## New Strengths

- **YearReviewCarousel:** Good base accessibility: `aria-roledescription="carousel"`, labelled prev/next buttons, Escape/Arrow keys in overlay, focus return on close, `role="dialog"` on overlay. Dots correctly marked `aria-hidden="true"`.
- **ImageLightbox as button trigger:** Trigger is a `<button>` with screen-reader-only text («Открыть изображение в полноэкранном режиме»), improving clarity for assistive tech.
- **Responsive implementation:** Responsive plan applied: Header, Hero, ProjectCard, material-search use consistent breakpoints; cards stack info on phones, hide side images, show description without hover.
- **Centralized projects:** `data/projects.ts` provides single source of truth; ProjectsSection maps over it cleanly.
- **Semantic structure:** Material-search sections use clear heading hierarchy; `<ul>` replaced with structured `<br/>` patterns, but semantic list usage could be reconsidered for lists.
- **HTML lang:** Layout uses `lang="ru"` to match content.

---

## Remaining Issues and Risks

### Accessibility

| Issue | Location | Impact |
|-------|----------|--------|
| No focus trap in dialogs | `ImageLightbox.tsx`, `YearReviewCarousel.tsx` | When modal is open, Tab can move focus to underlying page; violates modal pattern. |
| Carousel overlay nav may be off-screen on phones | `YearReviewCarousel.module.css` – `.overlayNavLeft` / `.overlayNavRight` with `left: -48px` / `right: -48px` | Nav buttons sit outside overlay content; on narrow screens they can be off-viewport or clipped. |
| Carousel frame button lacks explicit label | `YearReviewCarousel.tsx` | Button uses current image `alt`; «Открыть галерею» or similar may be clearer for the open action. |
| YearReviewCarousel `useEffect` dependencies | `YearReviewCarousel.tsx` | `showNext`/`showPrev` used in effect but not in dependency array; works due to closures but could confuse future maintainers. |

### Code quality and UX

| Issue | Location | Impact |
|-------|----------|--------|
| Placeholder pages duplicated | ServiceDD, DesignSystem, arc, corp-search | Same placeholder in four files; consider shared component. |
| Header links non-functional | `Header.tsx` | CV and LinkedIn `href="#"`; need real URLs or removal. |
| `sections` array unused | `material-search/page.tsx` | Kept for future TOC; currently unused with eslint-disable. |
| Inline style on StatsGrid wrapper | `material-search/page.tsx` | `style={{ marginBottom: "48px" }}`; better in CSS module. |

### Minor / optional

| Issue | Location | Impact |
|-------|----------|--------|
| No `aria-live` for carousel slide changes | `YearReviewCarousel.tsx` | Screen reader users may not hear when slide changes via arrows. |
| ImageLightbox `aria-label` when `alt` is empty | `ImageLightbox.tsx` | Dialog gets `aria-label=""`; fallback like «Просмотр изображения» would help. |

---

## Recommendations

### High priority

1. **Focus trap in dialogs** – When ImageLightbox or YearReviewCarousel overlay is open, trap focus inside (e.g. `focus-trap-react` or custom Tab/Shift+Tab handling). Ensure last tab wraps to first focusable.
2. **Carousel overlay nav on mobile** – At `max-width: 768px`, move overlay prev/next inside visible area (e.g. overlay the image with `left: 8px` / `right: 8px` instead of `-48px`).

### Medium priority

3. **Shared placeholder component** – Extract placeholder into `components/ProjectPlaceholder.tsx` and reuse on ServiceDD, DesignSystem, arc, corp-search.
4. **Wire or hide header links** – Add real URLs for CV and LinkedIn, or hide them until ready.
5. **Move StatsGrid margin to CSS** – Add `.statsWrapper` or similar in `page.module.css` instead of inline style.

### Lower priority

6. **Carousel frame button label** – Add `aria-label="Открыть галерею экранов статистики"` (or similar) to the frame button for clearer intent.
7. **ImageLightbox `aria-label` fallback** – Use `aria-label={alt || "Просмотр изображения"}` on the dialog.
8. **Optional `aria-live` in carousel** – Add `aria-live="polite"` region announcing current slide (e.g. «Экран 3 из 10») when slides change.
