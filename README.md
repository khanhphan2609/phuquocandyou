# Main Page - phuquocandyou.com

## Introduction
This document describes the Main Page of the Next.js application.
The `main-page` is responsible for:
- Dashboard: Overview and key information for users
- Navigation: Entry points to main modules such as `news`, `career`, `auth`, and other core features
- Layout orchestration: Composing shared UI components (header, footer, sidebar, ...)

## Technical
- Next.js (Pages Router)
- React
- TypeScript
- Tailwind CSS (tuỳ chọn)
- Vercel (deploy)
- SEO Metadata (Open Graph, Meta Tags)

## Folder structure

/app
├── layout.tsx
├── globals.css
│
├── vi
│   ├── page.tsx
│   │
│   ├── components
│   │   ├── sections
│   │   │   ├── Hero.tsx
│   │   │   ├── Services.tsx
│   │   │   ├── SocialProof.tsx
│   │   │   ├── Partners.tsx
│   │   │   ├── Feedback.tsx
│   │   │   └── CTA.tsx
│   │   │
│   │   ├── ui
│   │   │   ├── Button.tsx
│   │   │   ├── Card.tsx
│   │   │   ├── Badge.tsx
│   │   │   └── Icon.tsx
│   │   │
│   │   └── layout
│   │       ├── Header.tsx
│   │       ├── Footer.tsx
│   │       └── SectionWrapper.tsx
│
/public
└── images

## Explore Components
### Sections
Each section is a content block of main-page
- `Hero.tsx`
The top section of the page. Communicates the core value proposition with a headline, short description, and primary call-to-action.

- `Services.tsx`
Presents the main services of phuquocandyou.com like as news, career,.... Commonly displayed using cards or grid layouts.

- `SocialProof.tsx`
Builds trust through metrics, ratings, social signals, or credibility indicators (users, reviews, followers).

- `Partners.tsx`
Displays partner or client logos to reinforce brand credibility.

- `Feedback.tsx`
Showcases customer testimonials, quotes, or a lightweight feedback form.

- `CTA.tsx`
A strong call-to-action section, usually placed near the bottom of the page to drive conversions.

### UIs
- `Button.tsx`
- `Card.tsx`
- `Badge.tsx`
- `Icon.tsx`

### Layouts
- `Header.tsx`
The top navigation bar, including: logo, navigation links, login...

- `Footer.tsx`
The bottom section of the page containing company information, quick links, and social media references.

- `SectionWrapper.tsx`
A shared wrapper used across sections to apply consistent spacing, max-width, and background styles.

## Basic SEO (Search Engine Optimization)
- Title & Description must be clear
- 1 page = 1 main keyword
- Heading must be true structure (H1 → H2 → H3)
- Optimize images (alt, size)

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```
Then, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open http://localhost:3000 in your browser to see the result.

## Deploy by Vercel
- Connect to github which contains this project
- Auto build & deploy

