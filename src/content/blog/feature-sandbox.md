---
title: "Feature Sandbox: Markdown, Fonts, and Snippets"
date: "2026-02-11"
summary: "A single article that exercises headings, lists, quotes, tables, links, code blocks, and font previews."
tags:
  - test
  - markdown
  - typography
slug: "feature-sandbox"
---

This is a test article to validate blog rendering end-to-end.

## Typography preview

<p class="Blog-fontSample Blog-fontSample--sans">IBM Plex Sans sample: clear editorial body text for long-form notes.</p>

<p class="Blog-fontSample Blog-fontSample--mono">JetBrains Mono sample: calm and precise for commands and snippets.</p>

## Formatting

You can mix **bold**, *italic*, and `inline code` in the same sentence.

> Reliability is less about heroics and more about calm, repeatable systems.

---

## Lists

### Unordered list

- Keep posts short and practical.
- Prefer examples over abstract explanations.
- Include one concrete takeaway.

### Ordered list

1. Identify the problem.
2. Pick a simple baseline.
3. Improve one thing at a time.

### Checklist

- [x] Markdown parsing works
- [x] Frontmatter is read correctly
- [ ] RSS (added later)

## Code snippets

```bash
# local checks
npm test
npm run test:e2e
npm run build
```

```js
export function calculateErrorBudget(availabilityTarget, totalMinutes) {
  const downtimeFraction = 1 - availabilityTarget
  return Math.round(downtimeFraction * totalMinutes)
}

console.log(calculateErrorBudget(0.999, 30 * 24 * 60))
```

```json
{
  "title": "Feature Sandbox",
  "slug": "feature-sandbox",
  "published": true
}
```

## Table

| Area | Status | Notes |
| --- | --- | --- |
| Markdown | OK | Headings, lists, links, code |
| Styling | OK | Typography and spacing look consistent |
| RSS | Pending | Not enabled yet by design |

## Links

- [Back to blog index](/blog)
- [Main website](/)

## Final note

If you can read this page with proper spacing, typography, and code formatting, the blog foundation is ready.
