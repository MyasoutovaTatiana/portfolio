# Responsive Plan: Tablets & Phones

## 1. Summary of Responsive Problems

| Block | Problems on tablets (768–1024px) & phones (≤768px) |
|-------|-----------------------------------------------------|
| **Header** | Name + 3 links can crowd; fixed 24px top padding may eat vertical space; 900px max-width leaves narrow content on tablets. |
| **Hero** | 36px title too large on small screens; 64px top margin excessive; 24px lateral margins reduce usable width. |
| **Project cards** | Fixed height 497px and image 450px are too tall on phones; hover effect (3 images) is useless on touch; info overlay may overflow or truncate; description hover-reveal breaks on touch. |
| **Material-search** | 120px top padding wastes space; 48px content margin too wide on phones; 36px/24px typography could scale down; breadcrumbs may wrap awkwardly; StatsGrid drops to 1 column at 900px (no tablet-specific layout). |

---

## 2. Implementation Recommendations

### Header (`Header.module.css`)

**Breakpoint: max-width 768px (phones)**

- `.wrapper`: Reduce `top` from `24px` to `16px`.
- `.header`: Reduce lateral padding: `padding: 8px 12px`; add `flex-wrap: wrap`; `gap: 8px` to separate name and links when wrapped.
- `.links`: Add `flex-wrap: wrap`; reduce `gap` from `16px` to `12px`.
- `.name`: Optionally reduce `font-size` to `13px` if needed.

**Breakpoint: max-width 1024px (tablets)**

- `.header`: Optionally reduce padding to `8px 12px` if layout feels tight.
- `.wrapper`: Keep `top: 24px` or reduce slightly to `20px` if desired.

---

### Hero (`Hero.module.css`)

**Breakpoint: max-width 768px (phones)**

- `.hero`: Reduce `margin-top` from `64px` to `40px`; change `max-width` to `calc(100% - 32px)` (16px each side).
- `.title`: Reduce `font-size` from `36px` to `28px` (or `clamp(28px, 8vw, 36px)`).
- `.description`: Reduce `margin-top` from `20px` to `16px`.
- `.meta`: Keep 14px or reduce to `13px` if cramped.

**Breakpoint: max-width 1024px (tablets)**

- `.hero`: Reduce `margin-top` to `48px`; optionally `max-width: calc(100% - 40px)`.
- `.title`: Reduce to `32px` if desired.
- `.description`: `width: 670px` is fine with `max-width: 100%`.

---

### Project cards (`ProjectCard.module.css`)

**Breakpoint: max-width 768px (phones)**

- `.card`: Change `height: 497px` to `min-height: auto` or a smaller value (e.g. `min-height: 380px`); allow card to grow with content.
- `.imageWrap`: Reduce `height` from `450px` to `280px`; reduce `margin-top` from `24px` to `16px`.
- `.image`: Heights follow `.imageWrap`; consider hiding `.sideImage` on touch (`display: none` for `.leftImage` and `.rightImage`) to avoid loading 3 images.
- `.info`: Reduce `padding` from `20px` to `16px` (or `12px 16px`).
- `.title`: Reduce `font-size` from `20px` to `18px`.
- `.description`: Override hover-reveal—make description always visible: `opacity: 1`, `max-height: none`, remove `transform`. Touch users cannot hover.
- `.period`: Allow wrap with `white-space: normal` or reduce font size to `12px`.
- `.info`: Consider `flex-direction: column`; stack `.leftSide` and `.rightSide` so title/tags and period stack vertically when cramped.

**Breakpoint: max-width 1024px (tablets)**

- `.card`: Keep fixed height or reduce to `450px`.
- `.imageWrap`: Reduce `height` to `360px`; keep `max-width: 720px`.
- `.info`: Optionally reduce `padding` to `16px`.
- `.description`: Keep hover behavior; optionally increase `max-height` to `96px` for tablets.

---

### ProjectsSection (`ProjectsSection.module.css`)

**Breakpoint: max-width 768px**

- `.section`: Change `max-width` to `calc(100% - 32px)`; reduce `margin-top` from `60px` to `40px`.
- `.title`: Reduce `font-size` from `36px` to `28px`.
- `.cards`: Reduce `gap` from `20px` to `16px`.

**Breakpoint: max-width 1024px**

- `.section`: Optionally `max-width: calc(100% - 40px)`; reduce `margin-top` to `48px`.
- `.title`: Optionally `32px`.

---

### Material-search page (`page.module.css`)

**Breakpoint: max-width 768px (phones)**

- `.page`: Reduce `padding` from `120px 0 80px` to `80px 0 60px` (or `96px 0 64px`).
- `.layout`: Change `max-width` to `calc(100% - 32px)`; reduce `gap` from `40px` to `24px`.
- `.breadcrumbs`: Reduce `gap` to `6px`; consider `font-size: 13px` for `.breadcrumbMuted`, `.breadcrumbCurrent`, `.breadcrumbSeparator` if wrapping.
- `.hero .title`: Reduce from `36px` to `28px`.
- `.period`: Keep or reduce to `13px`.
- `.section`: Reduce `margin-bottom` from `48px` to `32px`.
- `.sectionTitle`: Reduce from `24px` to `20px`.
- `.sectionText`: Reduce from `16px` to `15px`; optionally reduce `p` and `ul` margins.
- `.imageBlock`: Reduce `margin-bottom` from `20px` to `16px`.

**Breakpoint: max-width 1024px (tablets)**

- `.page`: Reduce `padding` to `100px 0 72px`.
- `.layout`: `max-width: calc(100% - 40px)`; `gap: 32px`.
- `.sectionTitle`: Optionally `22px`.
- (Sidebar already hidden at 960px.)

---

### Home page main

- If the main element uses `minHeight: 200vh` or similar, consider reducing or making it responsive (e.g. `min-height: 100vh` on phones).

---

### Shared margins

- Use consistent lateral spacing: `calc(100% - 32px)` for phones, `calc(100% - 40px)` for tablets, `calc(100% - 48px)` for desktop when targeting ~900px content width.
