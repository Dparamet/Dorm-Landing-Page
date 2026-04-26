# Dorm Landing Page

Conversion-focused landing page template for dorm and room rental campaigns, built with Next.js and optimized for maintainability, UX clarity, and static deployment.

## Preview

![Landing Page Preview](public/images/dorm/site-preview.png)

## Table of Contents

- [Highlights](#highlights)
- [Tech Stack](#tech-stack)
- [Getting Started](#getting-started)
- [Scripts](#scripts)
- [Project Structure](#project-structure)
- [Content Management](#content-management)
- [Asset Management](#asset-management)
- [SEO and Performance](#seo-and-performance)
- [Deployment (GitHub Pages)](#deployment-github-pages)
- [Roadmap](#roadmap)

## Highlights

- Modular section architecture for fast iteration
- Data-driven content model for non-technical updates
- Responsive UI tuned for mobile-first traffic
- Static export-ready setup for low-cost hosting
- CI/CD workflow for automatic GitHub Pages deployment

## Tech Stack

| Layer | Technology |
| --- | --- |
| Framework | Next.js 16 (App Router) |
| UI Library | React 19 |
| Styling | CSS (token-based theme in a shared stylesheet) |
| Build Target | Static export (`out/`) |
| Deployment | GitHub Pages + GitHub Actions |

## Getting Started

### Prerequisites

- Node.js 20+
- npm 10+

### Install

```bash
npm install
```

### Run Local Development

```bash
npm run dev
```

Default local URL:

- `http://localhost:5173`

### Build Production Output

```bash
npm run build
```

Generated static site output:

- `out/`

## Scripts

- `npm run dev`: Start local development server on port `5173`
- `npm run dev:3000`: Start local development server on port `3000`
- `npm run build`: Create production static export
- `npm run lint`: Run lint checks

## Project Structure

```text
.
|- app/
|  |- layout.js
|  |- page.js
|  |- globals.css
|- components/
|  |- landing/
|     |- LandingPage.jsx
|     |- TopNav.jsx
|     |- sections/
|- data/
|  |- landing-page-content.js
|- styles/
|  |- landing.css
|- public/
|  |- images/
|     |- dorm/
|     |- README.md
|- .github/
|  |- workflows/
|     |- deploy-pages.yml
```

## Content Management

Primary content source:

- `data/landing-page-content.js`

Update from one file:

- Hero copy and CTA labels
- Benefits, testimonials, and FAQ blocks
- Pricing and promotion texts
- Product details and audience targeting

This keeps JSX components stable while content evolves.

## Asset Management

Asset directory:

- `public/images/dorm/`

Recommended conventions:

- Prefer `webp` for large images
- Keep hero/preview assets compressed (typically under 300KB when possible)
- Use descriptive names (example: `site-preview.png`, `hero-main.jpg`)
- Keep alt text aligned with each visual intent

## SEO and Performance

Implemented:

- Responsive layout strategy
- Metadata configuration in `app/layout.js`
- Static export build for fast first load on CDN

Recommended next steps:

- Migrate major visuals to `next/image` where possible
- Add JSON-LD structured data for rich snippets
- Add Lighthouse checks in CI for regression tracking

## Deployment (GitHub Pages)

Deployment workflow:

- `.github/workflows/deploy-pages.yml`

Flow:

1. Push to `main`
2. GitHub Actions builds static export
3. `out/` artifact is published to GitHub Pages

Repository setting required once:

1. `Settings > Pages`
2. Source: `GitHub Actions`

## Roadmap

- Add theme switcher (multiple curated palettes)
- Add content validation schema for `landing-page-content.js`
- Add visual regression checks for critical sections
