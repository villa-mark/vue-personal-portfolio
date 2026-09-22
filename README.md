# Personal Developer Portfolio

A production-ready personal developer portfolio built around a "developer workspace / personal operating system" concept. Vue 3 + TypeScript + Vite, Tailwind CSS for layout utilities, dark mode by default with an equally-polished light mode.

Built from `pdf.pdf`'s PRD (see `UI-studio-membership/pdf.pdf`).

## Getting started

```bash
npm install
npm run dev      # start the dev server
npm run build     # type-check (vue-tsc) + production build
npm run preview   # preview the production build
```

> If you hit `ENOTSUP: operation not supported on socket, symlink` during `npm install` (sandboxed environments that block the `symlink` syscall), run `npm install --no-bin-links` instead and invoke tools via `node node_modules/<pkg>/bin/...`.

## Replacing placeholder content

Everything personal lives in `src/data/` — no component needs to change:

| File | Contains |
|---|---|
| `src/data/portfolio.ts` | Name, title, bio, location, availability, quick stats, "how I build" steps |
| `src/data/skills.ts` | Every technology, grouped by category, with descriptions and cross-links to projects |
| `src/data/experience.ts` | Work history timeline |
| `src/data/projects.ts` | Projects (one marked `featured: true`), categories, architecture, features, challenges |
| `src/data/education.ts` | Education history |
| `src/data/certifications.ts` | Certifications (empty by default — shows a professional empty state) |
| `src/data/achievements.ts` | Achievements / awards |
| `src/data/github.ts` | Static GitHub profile data, structured to swap for a real API call later |
| `src/data/nav.ts` | Nav bar links |

Search for `[NAME]`, `[LOCATION]`, `[COMPANY NAME]`, etc. across `src/data/` and `index.html` to find every placeholder that needs real content.

## Images and the resume

- **Avatar**: drop a real photo at `public/images/avatar.webp`. Until then, the hero shows an intentional "AVATAR" placeholder — never a broken image.
- **Project screenshots**: drop images at the paths referenced in `src/data/projects.ts` (e.g. `public/images/projects/inventory-management.webp`). Missing images fall back to a "PROJECT PREVIEW" placeholder.
- **Resume**: drop the file at `public/resume.pdf`. The Resume section checks for it on load (`HEAD` request) and only shows the download button if it actually exists — otherwise it shows "Resume coming soon" instead of a broken link.

## What's implemented

Every section from the PRD: sticky nav with mobile menu and active-section highlighting, hero with avatar + at-a-glance card, quick stats, about, development philosophy timeline, data-driven skills grid with an interactive skill explorer (no fake proficiency percentages), experience timeline, featured project + filterable project grid + project detail modal, education, certifications (empty-state ready), achievements, GitHub/open-source section, resume section with existence check, contact section with a validated form (idle/submitting/success/error states, mailto-based submit), and footer.

Dark/light theme persists to `localStorage` under the `theme` key, follows system preference when no explicit choice is stored, and defaults to dark if neither is available. `prefers-reduced-motion` is respected globally.

## Verification performed

- `vue-tsc -b` — clean, no errors.
- `vite build` — clean production build.
- Live-rendered in headless Chrome (desktop, mobile, dark, light) with zero console errors and zero failed network requests: nav, hero, skill explorer, project filter, project detail modal, contact form validation, mobile hamburger menu, and theme persistence across reload were all exercised directly.

## Not yet done

- Real personal content (photo, resume PDF, project screenshots, real bio/experience/links) — intentionally left as placeholders per the PRD.
- Lighthouse scoring and a full accessibility audit were not run in this environment; the structural basics (semantic HTML, focus-visible states, ARIA labels, alt text, reduced-motion support) are in place but a real audit pass is still worth doing before shipping.
