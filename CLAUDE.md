# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project

Marketing site and knowledge base for Revanite (revanite.io). Static Astro site: every page is pre-rendered HTML, there is no backend. Content is blog posts and guides written in Markdown, gathered by topic.

## Commands

| Task | Command |
| --- | --- |
| Install deps | `npm install` (or `make install`) |
| Dev server | `npm run dev` (or `make start`; opens browser). Drafts are visible here, and the release clock is set to 2026-12-24 05:00 UTC. |
| Production build | `npm run build` (or `make build`), outputs `dist/` |
| Preview built site | `npm run preview` (or `make preview`) |
| Simulate CI build | `npm run test:build` (runs `./test-build.sh`) |

There is no test suite or linter. `npm run build` is the check: it validates every content file's frontmatter against `src/content.config.ts` and fails naming the file and field. `astro check` is not wired in because `@astrojs/check` does not yet accept TypeScript 7.

## Deployment

Pushing to `main` triggers `.github/workflows/pages.yaml`, which builds and deploys to production. There is no staging environment. `.github/workflows/ci.yaml` builds every pull request. Both workflows pin every action to a commit SHA, and Dependabot maintains the pins; keep that convention.

## Content model

- `src/content/blog/<slug>.md` serves `/blog/<slug>`: dated posts. Announcements carry the `news` tag.
- `src/content/guides/<slug>.md` serves `/guides/<slug>`: dated like posts (`date`, optional `updated`); `layout: how-to` (numbered H2 steps, prerequisites, outcome) or `layout: explainer` (prose).
- `src/content/topics/<slug>.md` serves `/topics/<slug>`: intro copy plus every post and guide tagged with that topic. **Every tag must be a topic file**; the schema enforces it.
- `src/content/authors.yaml`: author ids for `authors:`.
- `aliases:` in any frontmatter lists old URLs; `src/pages/[...alias].astro` builds a redirect page for each, and the sitemap leaves them out. Use it whenever a page moves.
- `draft: true` keeps an entry out of the production build.
- An entry dated in the future also stays out of the production build until 05:00 UTC on its `date:` (midnight US Eastern), when the Pages workflow's daily scheduled run rebuilds. `BUILD_DATE=2026-12-01T05:00Z npm run build` previews a given release. The dev server instead defaults to `2026-12-24T05:00Z`, so every Advent of Gemara day is active (set `BUILD_DATE` to override; drafts still show); production builds use the real clock.
- **Scheduled releases are checked, not trusted.** `scripts/test-release.sh` (CI) builds at each release edge and asserts which Advent day pages exist, how many calendar days are locked and whether the homepage banner shows; the Pages workflow's `verify` job runs `scripts/check-live.sh` after every deploy and fails if the live site does not match the release rule for that build's time. GitHub's limits on the daily `schedule:` run: it only fires from the default branch (`main`), it can start late (often by minutes, sometimes much more under load) and is occasionally dropped, and GitHub pauses it in a repo with no activity for 60 days. If a release morning shows no `schedule` run in Actions, rebuild by hand with **Run workflow** (`workflow_dispatch`) on the Pages workflow.
- Guides only: a series intro (`/guides/advent-of-gemara`) sets `start:` (day 1's date) and `days:`, and shows a calendar where each day is locked until its guide (`series: <intro id>`, `day: N`) is released. The homepage Advent banner comes down at 05:00 UTC on 2027-01-02 by the same rule (`isReleased` in `src/lib/content.ts`). `scripts/vet-advent.sh` (CI) checks Advent code blocks opened as ```` ```yaml vet=#Definition ```` and the Day 2 puzzle file with `cue vet`.
- Templates: `blog/_template.md`, `guides/_template.md` (files starting with `_` are not content).

## Architecture

**Stack:** Astro 7 (with `@astrojs/react` for the one island, the scrolling logo strip `src/components/PartnersSection.tsx`), Tailwind CSS 4 (via `@tailwindcss/vite`) with `@tailwindcss/typography` for rendered Markdown, `astro-icon` (Lucide), `@astrojs/sitemap`, `@astrojs/rss`.

**Pages:** `src/pages/index.astro` (home; project and founder copy lives as arrays at the top), `blog/`, `guides/`, `topics/`, `404.astro`, `rss.xml.ts`, `robots.txt.ts`. Output uses `build.format: 'file'` and `trailingSlash: 'never'`, so `/blog/x` is `dist/blog/x.html`.

**Layouts:** `Layout.astro` owns per-page meta (title, description, canonical, Open Graph, JSON-LD). `Article.astro` renders posts and guides, `Listing.astro` the index and topic pages.

**Design:** based on the Meridian marketing site (`~/dev/rev/meridian-site`): light stone palette, Inter body, Source Serif 4 headings, tokens as `--color-*` in `@theme` in `src/styles/global.css`. The accent is Revanite teal (`--color-accent`, a darker cut of the logo cyan `--color-brand`). Use the tokens, not hard-coded colours. This replaces the earlier "Sharp Contrast" dark theme in `design-doc.md`.

**Assets:** static files in `public/` (absolute URLs); partner logos in `src/assets/images/partners/` are optimised by `astro:assets` on the home page. `unused-assets/` is not imported.

**Legacy:** the previous React/Vite SPA has been removed. `tsconfig.json` still excludes its old paths; `src/vite-env.d.ts` is left from it.
