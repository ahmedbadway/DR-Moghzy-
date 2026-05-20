# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project

DR. Moghazy — single-page React marketing site for a hair restoration & cosmetic surgery practice. Deployed to GitHub Pages.

**Stack:** React 19, Vite 8, react-router-dom (HashRouter), hand-rolled CSS (no Tailwind), gh-pages for deploys, GitHub Actions for CI.

## Commands

- `npm run dev` — Vite dev server (HMR)
- `npm run build` — Production build to `dist/`
- `npm run preview` — Serve the built `dist/` locally
- `npm run deploy` — Build + push `dist/` to the `gh-pages` branch (rarely needed manually; CI does this on every push to `main`)

## Architecture

Single-page-scroll site behind a `HashRouter`. The router exists only to keep gh-pages refresh-safe — there is one real route (`/`) plus a wildcard that also renders `Home`. Navigation between "pages" is just smooth-scroll to in-page anchors.

**Section IDs are the contract between Header and the page.** `Header.jsx` defines nav links pointing to `#hero`, `#about`, `#services`, `#results`, `#cta`. Components own the matching `id`:

| Nav link | Anchor | Component(s) |
|---|---|---|
| Home | `#hero` | `Hero.jsx` |
| About | `#about` | `DoctorProfile.jsx` (id owner) + `About.jsx` (no id, conceptually part of "about") |
| Services | `#services` | `Services.jsx` |
| Results | `#results` | `Testimonials.jsx` (id is `results`, not `testimonials`) |
| Contact Us | `#cta` | `CTA.jsx` |

If you rename a section's `id`, update `navLinks` in `Header.jsx` and any `scrollIntoView` callers in `Hero.jsx`.

Header has a scroll-spy that observes those section IDs via `IntersectionObserver` and applies `.active` to the current link. Adding a new section means: (a) give it an `id`, (b) add an entry to `navLinks`.

**Animations**

- Section-level entrance: `IntersectionObserver` toggles `.visible` on `.fade-in` elements. Each section component sets this up in its own `useEffect`. Reusable utility classes live in `global.css`.
- Page-level entrance: CSS `sectionRise` in `transitions.css` staggers `.page > section:nth-child(N)` on first mount. Don't double-apply this to children.
- Hero parallax: single scroll listener in `Hero.jsx` writes `translate3d(0, scrollY * 0.7, 0)` onto `.hero-bg`. The bg div is `140vh` tall starting at `top: -20vh` so the parallax doesn't expose empty space.
- Other sections get a subtle parallax via `background-attachment: fixed` on a `::before` decoration (`transitions.css`). All animations gate on `prefers-reduced-motion`.

**Vite base + asset paths**

`vite.config.js` sets `base: '/DR-Moghzy-/'` because gh-pages serves from a subpath. Any `public/` asset referenced from React must use `import.meta.env.BASE_URL` — never hard-code `/images/...` or use relative `./images/...`. Example: `` `${import.meta.env.BASE_URL}images/hero-bg.jpg` ``. The video and all image refs in components follow this pattern.

`HashRouter` is intentional: gh-pages can't serve client-side history routes without 404 fallback config, and the `#/path` form sidesteps that.

## Deploy

GitHub Actions (`.github/workflows/deploy.yml`) runs on every push to `main`:
1. `npm install` → `npm run build`
2. Rewrites `origin` to embed `GITHUB_TOKEN` (the `gh-pages` npm package clones to a temp dir and loses `actions/checkout`'s `extraheader` auth — without this step the push fails with 403)
3. `npm run deploy` pushes `dist/` to the `gh-pages` branch

Concurrency group `pages` cancels in-progress runs if you push again quickly. Live URL: `https://ggtxk9bkbf-glitch.github.io/DR-Moghzy-/`.

## Project conventions (from `DR_MOGHZY_STANDARDS.md`)

- Work directly on `main` — no feature branches.
- Commit messages and code comments in English. Conversational explanations in Arabic.
- Don't run `npm run deploy` manually; let Actions handle it. Just `git push origin main`.

## Design tokens

Defined in `src/styles/variables.css`. Brand palette: navy `#1e3a5f`, sky `#4da6d6`, lime `#c4e538`. Font: Inter via Google Fonts.

## Placeholder image fallback

`PlaceholderImg.jsx` swaps in an inline SVG illustration if the real image 404s (keyed by `type` prop). Useful while iterating before final assets are in place — but don't rely on it to hide truly broken references; fix the path instead.
