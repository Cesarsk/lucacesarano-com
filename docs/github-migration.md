# GitHub Migration Guide

This project can run fully from GitHub (code hosting + CI/CD + Firebase deploys).

## 1) Move the git remote to GitHub

If you want GitHub as your main remote, run:

```bash
git remote rename origin gitlab
git remote add origin git@github.com:Cesarsk/lucacesarano-com.git
git fetch origin
```

Push branches and tags:

```bash
git push -u origin develop
git push -u origin master
git push --all origin
git push --tags origin
```

## 2) Enable GitHub Actions

Workflow file:

- `.github/workflows/ci-cd.yml`

Behavior:

- `push` + `pull_request`: run unit + e2e + build
- `push` on `feature/*` with open PR: deploy to alpha (`alpha-lucacesarano-com`)
- `push` on `develop`: deploy to beta (`beta-lucacesarano-com`)
- `push` on `master`: deploy to production (`lucacesarano-com`)

## 3) Configure GitHub Secrets and Variables

Repository settings -> **Secrets and variables** -> **Actions**.

### Required secret

- `FIREBASE_SERVICE_ACCOUNT` (recommended)
  - Value: full JSON of the Google service account key

### Optional legacy fallback

- `FIARD_PRIVATE_KEY`
  - Kept for compatibility with existing setup

The workflow accepts either `FIREBASE_SERVICE_ACCOUNT` or `FIARD_PRIVATE_KEY`.

### Permissions needed for the service account

In Google Cloud / Firebase IAM, grant enough privileges to deploy Hosting:

- `Firebase Hosting Admin`
- `Firebase Viewer` (optional but useful)

## 4) Branch protection in GitHub

Recommended branch rules:

- `master`: require PR + passing checks
- `develop`: require PR + passing checks
- `feature/*`: optional rule, usually allow direct push for contributors

## 5) DNS / custom domains

Hosting is deployed to Firebase sites. Custom domains should be attached in Firebase Hosting:

- `alpha.lucacesarano.com` -> site `alpha-lucacesarano-com`
- `beta.lucacesarano.com` (optional) -> site `beta-lucacesarano-com`
- `lucacesarano.com` -> site `lucacesarano-com`

Use DNS records exactly as Firebase provides (usually CNAME `ghs.googlehosted.com`) and keep Cloudflare as DNS-only until certificate is active.
