# Bookify Landing Page

A modern landing page for Bookify - an AI-powered platform that helps you write non-fiction books 5x faster without the overwhelm.

## Features

- Modern, responsive design with Tailwind CSS
- Interactive wave animation background
- Optimized for conversions with multiple CTAs
- Built with Next.js 15 and TypeScript

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

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

## Tech Stack

- **Framework:** Next.js 15
- **Language:** TypeScript
- **Styling:** Tailwind CSS v4
- **Components:** Custom React components
- **Animation:** Custom canvas-based wave animations

## Project Structure

```
src/
├── app/
│   ├── layout.tsx      # Root layout
│   ├── page.tsx        # Landing page
│   └── globals.css     # Global styles
├── components/
│   └── waves.tsx       # Wave animation component
└── lib/
    └── utils.ts        # Utility functions
```

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
