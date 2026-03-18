# lucacesarano.com

Personal presentation website built with React and hosted on Firebase.

## Overview

- Single page React app with sections for About, Work, and Contact
- CI/CD via GitLab pipelines
- Firebase Hosting with prod and beta sites

## Tech Stack

- React (Vite)
- React Bootstrap
- React Scroll
- Firebase Hosting
- GitHub Actions

## Local Development

Prerequisites:

- Node.js LTS (18+ recommended, 20 LTS preferred)

Run:

```bash
npm install
npm start
```

Then open `http://localhost:5173`.

## Scripts

- `npm start` - run local dev server
- `npm run build` - build production assets
- `npm run preview` - preview the production build
- `npm test` - run the test suite

## Deployment

Deployments are performed in CI using the Firebase CLI Docker image. If you
need to deploy locally, install the CLI globally:

```bash
npm install -g firebase-tools
```

## Security checks

- `npm audit` - review dependency advisories

## CI/CD

GitHub Actions workflow:

- `.github/workflows/ci-cd.yml`

Behavior by branch/event:

- `pull_request` and `push`: unit + e2e + build
- `feature/*` pushes with open PR: deploy to `alpha-lucacesarano-com`
- `develop` pushes: deploy to `beta-lucacesarano-com`
- `master` pushes: deploy to `lucacesarano-com`

Migration details and required secrets are documented in:

- `docs/github-migration.md`

## Hosting and Security

Firebase Hosting settings are defined in `firebase.json`. It includes security
headers (CSP, HSTS, and related policies) for both prod and beta sites.

## Content

Work items are stored in `src/components/work/data.json`.

Blog posts are stored in `src/content/blog` as Markdown files.

## Blog Authoring

For post format, frontmatter fields, local preview, and publishing steps, see:

- `docs/blog-authoring.md`

## Contact

Website: https://lucacesarano.com
Email: luca.cesarano1@gmail.com
