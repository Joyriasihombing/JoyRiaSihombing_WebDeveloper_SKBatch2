# Sekolah Karir — Recruitment Landing Page

A responsive recruitment landing page section for **Sekolah Karir**, built as part of the Web Developer Assignment (SK Batch 2). The page features a hero headline, animated stats bar, filterable role cards, a job detail modal, and a call-to-action section — all fully responsive from desktop to mobile.

---

## Quick Start

This project uses **plain HTML, CSS, and JavaScript** — no build tools, no dependencies, no framework.

```bash
# Option 1: Just open the file
open index.html

# Option 2: Serve locally (recommended, ensures fonts/paths resolve correctly)
# Python 3
python3 -m http.server 8000
# Then visit http://localhost:8000

# Option 3: Node (if installed)
npx serve
```

Open `index.html` in any modern browser. That's it.

---

## Project Structure

```
JoyRiaSihombing_WebDeveloper_SKBatch2/
├── index.html      # Markup, semantic structure, modal & nav
├── style.css       # Full design system, responsive breakpoints
├── script.js       # Mock data, card rendering, filtering, modal, animations
├── README.md       # This file
└── assets/
    └── images/     # (reserved for future image assets)
```

---

## Features

| Feature | Description |
|---|---|
| Responsive Layout | Desktop 3-col grid → tablet 2-col → mobile 1-col, with a mobile hamburger menu |
| Role Cards | 6 mock roles across Engineering, Design, Product, and Quality |
| Category Filter | Tabs to filter roles by category with live count update |
| Job Detail Modal | Click "View Role" to see responsibilities and an apply link |
| Animated Counters | Stats count up when scrolled into view |
| Scroll Reveal | Cards and sections fade in on scroll via Intersection Observer |
| Sticky Navbar | Glass-blur navbar that gains a border/shadow on scroll |
| Mobile Menu | Hamburger toggle with smooth animation |
| Accessibility | Skip link, ARIA labels, focus-visible outlines, `prefers-reduced-motion` support, keyboard ESC to close modal |
| Toast Notifications | Non-blocking feedback instead of `alert()` |

---

## Key Decisions

### Why no framework?
The brief says "gunakan stack web yang kamu kuasai; tidak ada framework wajib." For a single landing page section, vanilla HTML/CSS/JS keeps the project zero-dependency, instantly runnable, and fast to load. Adding React or Vue would add build complexity without proportional benefit at this scope.

### Design language
A sage-green and deep-navy palette to evoke growth and professionalism — fitting for a career/education brand. Typography uses **Inter** for body text and **Plus Jakarta Sans** for headings, both loaded from Google Fonts with `preconnect` for performance.

### CSS Architecture
Used CSS custom properties (design tokens) for colors, spacing, radii, and shadows. This keeps the design system consistent and easy to theme. Sections are numbered in comments for navigation. Mobile-first responsive approach with breakpoints at 960px, 768px, and 480px.

### JavaScript approach
- **Mock data** stored in a `ROLES` array — easy to swap for a real API later.
- **Filtering** re-renders cards and updates the count dynamically.
- **Modal** replaces `alert()` for a professional UX. Closes on overlay click, ESC key, or close button.
- **Intersection Observer** for scroll reveals and counter animations — more performant than scroll event listeners.
- All interactions respect `prefers-reduced-motion`.

### Accessibility
- Semantic HTML (`<section>`, `<article>`, `<header>`, `<footer>`, `<nav>`)
- Skip-to-content link
- ARIA attributes on tabs, dialog, and live regions
- Keyboard navigation (focus management in modal, ESC to close)
- Visible focus outlines via `:focus-visible`

---

## Tech Stack

| Layer | Technology |
|---|---|
| Markup | HTML5 (semantic) |
| Styling | CSS3 (custom properties, grid, flexbox, clamp) |
| Interactivity | Vanilla JavaScript (ES6+) |
| Fonts | Google Fonts (Inter, Plus Jakarta Sans) |
| Icons | Inline SVG (no icon library dependency) |

No npm packages. No build step. No external runtime dependencies beyond Google Fonts.

---

## AI / Tool Usage Notes

As permitted by the assignment's AI policy, the following tools were used:

| Tool | How it helped |
|---|---|
| **Kiro (AI coding assistant)** | Helped scaffold the project structure, generate the HTML/CSS/JS, write this README, and review code quality. All code was reviewed and understood before inclusion. |
| **Google Fonts** | Provided the Inter and Plus Jakarta Sans typefaces. |

All code produced with AI assistance was reviewed, understood, and can be explained by the candidate.

---

## Browser Support

Tested on modern Chromium, Firefox, and Safari. Uses standard features: CSS Grid, Flexbox, `clamp()`, `backdrop-filter`, Intersection Observer, and CSS custom properties.

---

## What I'd Add Next

- Real API integration to fetch live job postings
- Dark mode toggle
- Search input for filtering roles by keyword
- Application form with validation
- Page transitions / route-based navigation for full careers site

---

© 2026 Joy Ria Sihombing — Web Developer Assignment, Sekolah Karir Batch 2.
