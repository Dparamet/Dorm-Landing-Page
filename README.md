# Dorm Landing Page

Modern, conversion-focused landing page for dorm and room rental marketing.
Built with Next.js App Router and structured for easy content updates and fast feature expansion.

## Table of Contents

- [Overview](#overview)
- [Tech Stack](#tech-stack)
- [Getting Started](#getting-started)
- [Available Scripts](#available-scripts)
- [Project Structure](#project-structure)
- [Content Workflow](#content-workflow)
- [Image Workflow](#image-workflow)
- [Performance and SEO](#performance-and-seo)
- [Deployment](#deployment)
- [Development Guidelines](#development-guidelines)

## Overview

This project is designed to be:

- Easy to maintain: content is centralized in one data source.
- Easy to scale: each landing section is separated into reusable components.
- Production-ready: optimized build, responsive layout, and SEO metadata included.

## Tech Stack

- Next.js 16 (App Router)
- React 19
- CSS (modular structure via global import)

## Getting Started

### 1. Install dependencies

```bash
npm install
```

### 2. Run development server

```bash
npm run dev
```

Open `http://localhost:3000` in your browser.

### 3. Create production build

```bash
npm run build
npm run start
```

## Available Scripts

- `npm run dev` - Start local development server.
- `npm run build` - Build optimized production bundle.
- `npm run start` - Start production server.
- `npm run lint` - Run lint checks.

## Project Structure

```text
.
|- app/
|  |- layout.js            # App layout + metadata
|  |- page.js              # Landing page entry
|  |- globals.css          # Imports shared stylesheet
|- components/
|  |- landing/
|     |- LandingPage.jsx   # Section composition
|     |- sections/         # Individual page sections
|- data/
|  |- landing-page-content.js  # All editable landing copy/data
|- public/
|  |- images/
|     |- dorm/             # Dorm image assets
|     |- README.md         # Image usage guide
|- styles/
|  |- landing.css          # Design tokens + page styles
```

## Content Workflow

To update marketing content, edit only:

- `data/landing-page-content.js`

You can modify:

- Product name, type, target audience, and problem statement
- Hero headline, subheadline, and CTA labels
- Benefits, testimonials, and FAQ
- Pricing and promotion text
- CTA suggestions

This avoids editing JSX in multiple files.

## Image Workflow

### Add new images

1. Place images in `public/images/dorm/`
2. Update corresponding image path(s) in `data/landing-page-content.js`
3. Refresh the page

### Recommended image practices

- Prefer `webp` format for faster loading
- Keep hero image around 200-300KB
- Use clear file names (example: `hero-main.webp`)
- Always provide descriptive alt text in content data

## Performance and SEO

Included in current setup:

- Responsive layout for mobile/tablet/desktop
- Lightweight section architecture for easier optimization
- Metadata in `app/layout.js` (title, description, keywords, Open Graph, canonical)

Recommended next improvements:

- Use `next/image` for all real hero/gallery images
- Add structured data (JSON-LD) for richer search results
- Add Lighthouse CI in pipeline

## Deployment

Recommended: Vercel

1. Import repository to Vercel
2. Framework preset: Next.js
3. Build command: `npm run build`
4. Output: automatic by Next.js

## Development Guidelines

- Keep copy/content updates inside `data/landing-page-content.js`
- Keep styling updates inside `styles/landing.css`
- Add new sections in `components/landing/sections/`
- Keep components focused and small
- Run `npm run build` before pushing to ensure production integrity
