# Blog Authoring Guide

This project supports a Markdown blog inside the React/Vite app.

## Where posts live

- Folder: `src/content/blog/`
- One file per article: `my-article-slug.md`

## Post format

Each post must start with frontmatter, then Markdown content.

```md
---
title: "Your Post Title"
date: "2026-02-10"
summary: "One short sentence shown in the blog list."
tags:
  - sre
  - reliability
slug: "your-post-slug"
---

Write your article in Markdown here.
```

## Frontmatter fields

- `title` (required): post title shown on index and article page.
- `date` (required): ISO format (`YYYY-MM-DD`) used for sorting (newest first).
- `summary` (recommended): short preview text shown on `/blog`.
- `tags` (optional): list of labels shown as pills.
- `slug` (recommended): route path after `/blog/`.

If `slug` is missing, the filename is used.

## URL behavior

- Blog index: `/blog`
- Post page: `/blog/<slug>`

Example: `slug: "reliability-over-heroics"` -> `/blog/reliability-over-heroics`

## Writing tips

- Keep titles concise.
- Keep summaries to one sentence.
- Use kebab-case for slugs.
- Use valid Markdown headings (`##`, `###`) for structure.

## Color examples in posts

You can use HTML inside Markdown when you need custom color accents.

Recommended reusable classes (already available in blog styles):

```html
<span class="Blog-colorChip Blog-colorChip--accent">Accent text</span>
<span class="Blog-colorChip Blog-colorChip--success">Success text</span>
<span class="Blog-colorChip Blog-colorChip--warning">Warning text</span>
```

Quick inline test:

```html
<span style="color: var(--muted-color);">Muted sentence</span>
```

Prefer class-based styles over one-off inline colors for consistency.

## Local preview checklist

1. Run `npm start`.
2. Open `http://localhost:5173/blog`.
3. Open your article route and verify typography/spacing.

## Before pushing

Run all checks:

```bash
npm test
npm run test:e2e
npm run build
```

## Publish flow

- Merge into `develop` to deploy to beta.
- Merge `develop -> master` to deploy production.
