# Grow With Lakes — Frontend Technical Handover

**Project:** `growwithlakes`  
**Product brand:** Grow With Lakes · Powered by Dr Lakes  
**Document purpose:** Onboard a frontend developer taking ownership of this codebase  
**Scope:** Frontend SPA only (no backend / API layer)

---

## 1. Product overview

Grow With Lakes is a dark, gold-branded marketing site for Dr Lakes’ platform: music, conversation, opportunity, community, partnerships, coaching, and careers.

- **Home (`/`)** is a long single-page scroll with hash-based section navigation.
- **Careers (`/careers`)** is a separate route with its own header and content.
- Most CTAs open **mailto** links or **external URLs** (Calendly, Eventbrite, socials). There is **no form backend** — enquiry and applications rely on the user’s mail client.

The root `README.md` is still the default Vite template and is **not** product documentation. Prefer this file and `src/config/*` for project truth.

---

## 2. Tech stack

| Layer | Choice | Version (package.json) |
|--------|--------|-------------------------|
| Runtime | React | ^19.2.4 |
| Bundler | Vite | ^8.0.1 |
| Language | TypeScript | ~5.9.3 |
| Routing | react-router-dom | ^7.15.1 |
| Styling | styled-components | ^6.3.12 |
| UI kit | antd + @ant-design/icons | ^6.3.3 / ^6.1.0 |
| Motion | framer-motion | ^12.38.0 |
| Deploy | Vercel (`vercel.json`) | — |

**Fonts** (loaded in `index.html`): Cormorant Garamond (display), DM Sans (body).

---

## 3. Repository structure

```
growwithlakes/
├── index.html              # Fonts, meta, early audio bootstrap script
├── package.json
├── vite.config.ts          # React plugin, audio asset naming
├── vercel.json             # SPA rewrites + audio MIME / autoplay policy
├── public/                 # favicon.svg, icons.svg
├── docs/
│   └── DrLakes.md          # This handover document
└── src/
    ├── main.tsx            # React mount
    ├── App.tsx             # Providers + routes
    ├── index.css           # Nearly empty; globals live in styled-components
    ├── styled.d.ts         # Theme typing for styled-components
    ├── audio/              # Singleton audio + early bootstrap
    ├── assets/             # Images + hero audio (drlakes_audio.mp3)
    ├── components/         # Shared UI
    ├── config/             # Links, nav, careers, mailto, impact copy
    ├── context/            # DrLakesAudioContext
    ├── hooks/              # Hash scroll + section reveal
    ├── motion/             # Shared framer-motion variants
    ├── pages/              # Home sections + Careers route
    └── styles/             # theme, GlobalStyle, section primitives
```

**Important mental model:** Most folders under `src/pages/` are **home sections**, not separate routes. Only `Main` and `Careers` are route-level screens.

---

## 4. Bootstrap & providers

### Entry

1. `index.html` loads `/src/audio/bootstrap.ts` **before** `/src/main.tsx` (helps muted autoplay).
2. `src/main.tsx` mounts `<StrictMode><App /></StrictMode>`.

### Provider stack (`src/App.tsx`, outer → inner)

1. `ThemeProvider` (styled-components `theme`)
2. `MotionConfig reducedMotion="user"`
3. Ant Design `ConfigProvider` (dark algorithm + gold tokens from theme)
4. `GlobalStyle`
5. `BrowserRouter`
6. `DrLakesAudioProvider`
7. `Routes`

---

## 5. Routing

| Path | Component | Role |
|------|-----------|------|
| `/` | `src/pages/Main/index.tsx` | Home shell + all marketing sections |
| `/careers` | `src/pages/Careers/index.tsx` | Careers / open roles |
| `*` | `<Navigate to="/" replace />` | Catch-all |

`vercel.json` rewrites non-asset paths to `index.html` so client routes work on Vercel.

### Home section order & hash IDs

Defined in `src/pages/Main/index.tsx`:

| Order | Section | Hash / `id` |
|------:|---------|-------------|
| 1 | Hero | `#top` |
| 2 | AboutUs | `#about` |
| 3 | Quote | `#quote` |
| 4 | WhatIDo | `#what-i-do` |
| 5 | ImpactCommunity | `#impact` |
| 6 | Opportunities | `#opportunities` |
| 7 | Partners | `#partners` |
| 8 | WorkWithMe | `#work-with-me` |
| 9 | Events | `#events` |
| 10 | Contact | `#contact` |
| 11 | Footer | `#footer` |

Primary desktop nav (`src/config/navigation.ts`): About, Opportunities, Partners, Events, Careers. Contact appears as header CTA / mobile / secondary nav.

---

## 6. Pages & sections (inventory)

| Path | Purpose | Notes |
|------|---------|--------|
| `pages/Main` | Home shell | `PageBackdrop`, `SiteHeader`, hash scroll restore |
| `pages/SiteHeader` | Fixed home header | Scroll-spy, desktop nav, Contact CTA, mobile drawer |
| `pages/Hero` | Brand hero | CTAs, Listen control, orbit/wave motion, registers hero for audio |
| `pages/AboutUs` | Dr Lakes story | Portrait **placeholder**, mission / closing copy |
| `pages/Quote` | Featured quote | Single centered blockquote |
| `pages/WhatIDo` | Offerings grid | Wave Room, A&R, connector, coaching/events |
| `pages/ImpactCommunity` | Social proof | Testimonials, case studies, photo placeholders, stories (config-driven) |
| `pages/Opportunities` | Opportunity types | Horizontal bullet list + careers / contact / Eventbrite CTAs |
| `pages/Partners` | Partner logos | CSS marquee; logos under `src/assets/drlakes/` |
| `pages/WorkWithMe` | Collaboration services | Calendly CTA |
| `pages/Events` | Event types | Eventbrite CTA |
| `pages/Contact` | Enquiry | Ant Design form → mailto; email/phone/socials |
| `pages/Footer` | Closing chrome | Brand + copyright + socials |
| `pages/Careers` | Jobs page | Own mesh background + `CareersHeader` |
| `pages/Careers/CareersHeader` | Careers chrome | Back to home, Contact, mobile menu |
| `pages/Careers/CareerRoleItem` | Role row | Expand/collapse details + Apply mailto |

**Styling convention:** Each page/component typically has co-located `index.tsx` + `index.style.tsx`.

---

## 7. Shared components (`src/components`)

| Component | Role |
|-----------|------|
| `BrandLogo` | Wordmark link to `/` (SVG mark currently commented out) |
| `MobileNavMenu` | Ant Design `Drawer`; supports hash `href` or router `to` |
| `PageBackdrop` | Animated gold mesh / blobs + noise (home only) |
| `Reveal` | Section fade-in via `useSectionReveal` + framer-motion |
| `EnquiryForm` | Ant Design form → `enquiryMail()` mailto |
| `SocialLinks` | Instagram, YouTube, Spotify, Eventbrite icons |

---

## 8. Config layer (`src/config`) — edit content here first

### `links.ts`

Central outbound URLs and shortcuts:

- Internal: `careers`, `contactSection`, `opportunitiesSection`, `generalCareerApply`
- Mailto helpers / subjects for opportunities & partners
- Placeholders: `calendly`, `eventbrite`, `freeConsultation`, `viewEvents` (comments say replace with live URLs)
- Contact: `email` (`growwithlakes@gmail.com`), `phone`
- Socials: Instagram (live), YouTube / Spotify / Eventbrite (generic placeholders)

### `navigation.ts`

- `primaryNavItems` — desktop header
- `secondaryNavItems` — Contact
- `buildMobileNavLinks(pathname, isHome, activeId)` — drawer links with active state

### `careers.ts`

- `focusAreas` — hero pills on careers page
- `careerRoles[]` — title, type, summary, description, `applyHref` (mailto)

### `mailto.ts`

- Default contact email constant: **`jamaila@growwithlakes.com`**
- Helpers: `careerApplicationMail`, `workWithMeMail`, enquiry / consultation / events / general inquiry builders
- Query encoding uses `%20` (not `+`) so mail clients show spaces correctly

### `impactCommunity.ts`

- `testimonials`, `caseStudies`, `eventPhotos`, `impactStories`
- `impactPillars` exported but **currently unused** in the UI
- Placeholder lorem copy is intentional until real content is supplied

---

## 9. Styling system

### Theme (`src/styles/theme.ts`)

- **Palette:** near-black backgrounds (`#050505`), gold (`#d4af37` / `#e8c547`), muted greys
- **Layout:** `maxWidth: 1120px`, `headerHeight: 72px`
- **Breakpoints:** `sm` 640 · `md` 768 · `lg` 900 · `xl` 1024
- **Radii:** sm / md / lg / pill

Typed via `src/styled.d.ts` (`DefaultTheme extends GWLTheme`).

### Globals & primitives

- `src/styles/global.ts` — box model, body, overflow-x clip, reduced-motion CSS kill-switch
- `src/styles/sectionPrimitives.tsx` — `PageContainer`, `SectionShell` (includes `scroll-margin-top` for sticky header), `SectionRule`, `SectionLabel`, `SectionTitle`, `SectionLead`, `SectionDivider`

### Ant Design

Tokens in `App.tsx` are aligned to the styled theme (primary gold, dark surfaces, button hover states). Prefer theme tokens over one-off hex values when extending UI.

### Responsive notes

- Desktop nav shows from **900px** (`lg`); mobile menu shows below that.
- Careers role cards stack actions under content below **768px** (`md`), with **+** and **Apply** grouped together.
- Prefer `clamp()` and `theme.breakpoints.*` for new responsive work.

---

## 10. Motion

Shared variants live in `src/motion/variants.ts` (`revealFade`, `fadeUp`, `staggerFast`, `staggerHero`, `popIn`, etc.). Common ease: `[0.22, 1, 0.36, 1]`.

Patterns in use:

- Section enter: `Reveal` + `useInView` (once)
- Hero: stagger + continuous orbit / wave animations
- Careers: staggered role list + height expand/collapse
- Partners: CSS marquee (respects reduced motion)
- App-level: `MotionConfig reducedMotion="user"` + global CSS reduced-motion rules

---

## 11. Audio (hero Listen control)

| File | Role |
|------|------|
| `src/assets/drlakes_audio.mp3` | Source track |
| `src/audio/drlakesAudio.ts` | Singleton audio element, muted-autoplay fallback, retries |
| `src/audio/bootstrap.ts` | Early bootstrap (skipped on careers route) |
| `src/context/DrLakesAudioContext.tsx` | Play state, hero visibility, careers mute |

**Behaviour summary:**

- Autoplay when hero (`#top`) is roughly **≥35% visible** (header offset 72px).
- Pauses when hero leaves view (after it has been visible once).
- Forced off on `/careers`.
- Hero **Listen now / Pause** toggles via context hooks; hero registers its DOM node for visibility tracking.
- Vite build renames the file to `assets/drlakes_audio.mpeg`; `vercel.json` sets `Content-Type: audio/mpeg` and `Permissions-Policy: autoplay=(self)`.

---

## 12. Hooks

### `useScrollToHash` (`src/hooks/useScrollToHash.ts`)

On `/` with a hash, scrolls to the matching element with an ~86px offset. Retries across animation frames so returning from `/careers` with `/#section` still lands correctly.

### `useSectionReveal` (`src/hooks/useSectionReveal.ts`)

Combines `useInView` with hash awareness: if the URL hash matches `sectionId`, the section is forced visible so hash navigation does not leave a blank/hidden block.

---

## 13. Careers vs home

| Concern | Home (`/`) | Careers (`/careers`) |
|---------|------------|----------------------|
| Shell | `Main` + `PageBackdrop` + `SiteHeader` | Local mesh/grid + `CareersHeader` |
| Header | Brand + scroll-spy + Careers link | Back to home + “Careers” mark + Contact + menu |
| Audio | Active when hero in view | Forced off |
| Content | Marketing sections | Roles from `careers.ts` + CTA band |
| Footer | Shared `Footer` | Shared `Footer` |
| Mount scroll | Hash-aware + manual `scrollRestoration` | `window.scrollTo(0, 0)` on mount |

---

## 14. Assets

### `src/assets/`

- `drlakes_audio.mp3` — hero audio
- `drlakes/` — partner logos (jpeg/png used by Partners marquee)
- `hero.png` — **present but unused** in TSX
- `react.svg`, `vite.svg` — Vite template leftovers

### `public/`

- `favicon.svg`, `icons.svg`

---

## 15. Scripts & environment

```bash
npm run dev       # Vite dev server
npm run build     # tsc -b && vite build
npm run lint      # eslint .
npm run preview   # preview production build
```

**Environment variables:** external contact / booking / social URLs live in `.env` (`VITE_*`). See `.env.example`. Runtime access is via `src/config/env.ts` → `links.ts` / `mailto.ts`. Restart the Vite dev server after changing any `VITE_*` value.

---

## 16. Conventions for the next developer

1. **Content & URLs** — Change copy, roles, and outbound links in `src/config/*` before editing page components.
2. **New home section** — Add `pages/<Name>/index.tsx` + `index.style.tsx`, compose in `Main`, set a stable `id`, wrap with `<Reveal sectionId="...">`, reuse `sectionPrimitives`, register nav in `navigation.ts` if needed.
3. **Styling** — Use theme tokens and co-located styles; keep Ant Design themed to gold/dark.
4. **Motion** — Reuse `motion/variants`; respect reduced motion.
5. **CTAs** — Prefer Ant Design `Button` with `href` (mailto or external).
6. **Routing** — Keep marketing content on the home scroll page; use routes only for distinct experiences (careers pattern).
7. **Hash UX** — Follow `useScrollToHash` / `useSectionReveal` when adding new hash targets.

---


## 18. Quick mental model

> Dark gold marketing SPA: long home scroll with hash nav + sticky header, separate careers route, shared theme / Ant Design / Framer Motion stack, hero audio gated by visibility and careers, content and outbound URLs centralized under `src/config`.


---

