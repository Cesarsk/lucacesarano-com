---
title: "Why I Started This Blog (First Article)"
date: "2026-02-12"
summary: "Why I chose an independent blog and how I will use it to share ideas with fewer constraints."
tags:
  - intro
  - blog
  - independence
slug: "welcome-to-my-notes"
---

Welcome to the first article of this blog.

This first post is also a simple guide for myself on how to write new articles here.

Since this is a custom blog system I developed, I am still defining my own standards as I go.

I will keep updating this article as a personal reminder of the workflow and conventions I want to follow.

I wrote this article because I want to move away from platforms designed to capture attention, extract value, and keep people locked in.

I wanted something more independent, where I can express ideas freely without algorithmic pressure or format constraints.

I also enjoy this older approach to the web: simple pages, direct writing, and ownership of your own space. It reminds me of how the internet used to feel.

## What this blog is for

This blog is fully customizable: layout, typography, colors, and content structure are all controlled directly in this codebase.

I will share different kinds of articles depending on my mood and what I am learning at the moment: engineering notes, reliability topics, practical lessons, and occasional personal reflections.

I will probably publish rarely, since most of my time goes to family and work, but this space will stay open for thoughtful writing over time.

## How I publish a new article

1. Create a new Markdown file in `src/content/blog/`.
2. Add frontmatter with `title`, `date`, `summary`, `tags`, and `slug`.
3. Write your content using regular Markdown.
4. Run tests and build:

```bash
npm test
npm run test:e2e
npm run build
```

5. Commit, push, and open an MR.

## What can be customized

- The blog index and post layout.
- Fonts and design tokens.
- Markdown rendering and code highlighting.
- Extra features like RSS, tag filters, and search.

## Color examples

You can apply colors in two ways: with reusable CSS classes or with inline styles.

### 1) Reusable classes (recommended)

<div class="Blog-colorDemo">
  <span class="Blog-colorChip Blog-colorChip--accent">Accent text</span>
  <span class="Blog-colorChip Blog-colorChip--success">Success text</span>
  <span class="Blog-colorChip Blog-colorChip--warning">Warning text</span>
</div>

```html
<span class="Blog-colorChip Blog-colorChip--accent">Accent text</span>
<span class="Blog-colorChip Blog-colorChip--success">Success text</span>
<span class="Blog-colorChip Blog-colorChip--warning">Warning text</span>
```

### 2) Inline styles (quick tests)

```html
<span style="color: var(--muted-color);">Muted sentence</span>
<span style="color: var(--code-token-keyword);">Accent sentence</span>
```

For production posts, prefer reusable classes so style stays consistent.

If you are reading this page, the blog pipeline is working and ready for real articles.
