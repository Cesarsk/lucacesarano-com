# AGENTS.md

This file is the working playbook for coding agents on `lucacesarano-com`.

## Project Snapshot

- **Type**: Personal presentation website
- **Frontend**: React 18 + Vite
- **Hosting**: Firebase Hosting (beta + prod targets)
- **CI/CD**: GitLab CI
- **Test stack**:
  - Unit/integration: Vitest + Testing Library
  - Responsive layout/e2e: Playwright

## Repo Conventions

- Prefer `.jsx` for React components that render JSX.
- Keep styles in component CSS files and shared tokens in `src/index.css`.
- Use CSS variables for all theme colors and spacing.
- Do not introduce one-off hardcoded colors unless intentional (example: red heart accent).
- Keep the website readable first: spacing, contrast, and mobile behavior matter.

## Commands

- Install deps: `npm install`
- Dev server: `npm start`
- Unit tests: `npm test`
- E2E tests: `npm run test:e2e`
- Full local checks: `npm run test:all`
- Build: `npm run build`

## Pre-commit and Quality Gates

- Husky pre-commit hook runs `npm test`.
- Before pushing UI changes, run:
  - `npm test`
  - `npm run test:e2e`

## Branching and Delivery Workflow

- Typical flow:
  1. Work on feature branch from `develop`.
  2. Open MR to `develop`.
  3. Once validated, open MR `develop -> master` for production release.
- Avoid direct edits on `master`.
- If GitLab reports branch behind due merge commits, sync branches intentionally (`master -> develop` or rebase/merge as needed).

## GitLab CI/CD (Current Strategy)

### Develop pipeline
- `develop:unit` (node:20)
- `develop:e2e` (Playwright Docker image)
- `develop:build` (depends on unit + e2e)
- `develop:deploy` (Firebase beta target)

### Master pipeline
- `prod:unit` (node:20)
- `prod:e2e` (Playwright Docker image)
- `prod:build` (depends on unit + e2e)
- `prod:deploy` (Firebase production target)

### CI details
- Cache `NPM_CONFIG_CACHE` with lockfile-based key.
- E2E jobs use `mcr.microsoft.com/playwright:v1.58.2-jammy`.
- `PLAYWRIGHT_BROWSERS_PATH` in e2e jobs: `/ms-playwright`.
- Keep Playwright artifacts (`playwright-report`, `test-results`) on failure.

## UI/UX Principles for This Site

From recent iterations, keep these decisions consistent unless intentionally redesigning:

- Strong editorial style with clean hierarchy.
- Black/white base palette, with minimal accent usage.
- Consistent section intro style (`.Section-intro`).
- Mobile-first behavior must be reliable.
- Header/nav must be visually centered and responsive at key widths (390 / 768 / 1024 / desktop).

## Navbar and Theme Toggle Rules

- Desktop/tablet:
  - Show `RESUME`, `BLOG`, `CONTACT` in top nav.
  - Show theme toggle icon on right.
- Mobile:
  - Hide desktop links and icon toggle.
  - Show centered menu icon.
  - Mobile menu opens from header interaction and provides:
    - Resume
    - Blog
    - Contact
    - Switch to Dark/Light (text)
- Keep menu item vertical alignment balanced between separators.

## Responsive Testing Requirements

Do not ship navbar/layout changes without passing responsive checks.

Playwright coverage should verify:

- Desktop (1280): nav links are centered.
- Tablet (768): nav stays inside viewport, theme toggle visible.
- Laptop/tablet edge (1024): theme toggle still visible, no clipping.
- Mobile (390): desktop nav hidden, menu usable, menu rows full width.

If behavior changes, update tests in:
- `tests/e2e/navbar-layout.spec.js`
- `src/components/navbar/navbar.test.jsx` (for component-level behavior)

## Copy and Metadata

Main metadata lives in `index.html`:

- `<title>`
- `meta name="description"`
- Open Graph fields (`og:title`, `og:description`, etc.)

Manifest metadata lives in `public/manifest.json`.

Favicon file:
- `public/favicon.ico`

Note: Favicons are aggressively cached by browsers. Hard refresh after updates.

## Firebase Targets

- Beta: `beta-lucacesarano-com`
- Production: `lucacesarano-com`

Hosting config and security headers are in `firebase.json`.

## Do / Don’t

### Do
- Keep semantic HTML (`a` for navigation, `button` for actions).
- Preserve accessibility basics (`aria-label`, focus-visible styles).
- Keep dark/light theme token-driven via CSS variables.

### Don’t
- Don’t bypass tests for UI changes.
- Don’t introduce layout regressions at 768/1024 breakpoints.
- Don’t hardcode behavior that should be responsive/tokenized.

---

When in doubt: prefer readability, predictable mobile behavior, and test-backed changes.
