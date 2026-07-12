# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with this repository.

## Commands
```bash
npm run dev      # Start dev server (localhost:3000)
npm run build    # Production build
npm run start    # Start production server
npm run lint     # Run Next.js lint
```

## Tech Stack
- **Framework**: Next.js 15 (App Router) + TypeScript
- **Styling**: Tailwind CSS v4 (CSS config via @theme)
- **UI**: shadcn/ui-style components (Button, Card, Badge)
- **Dark Mode**: next-themes with class strategy
- **Deployment**: Vercel (auto-deploy from GitHub)

## Architecture
- Pages in `src/app/`: home, about, projects/[slug], blog/[slug]
- Components in `src/components/`: ui/, navbar, footer, theme-toggle, markdown-renderer
- Data in `src/data/`: projects.ts, blog.ts (static build-time content)
- Theme: CSS variables in globals.css, toggled via next-themes
- All content in Chinese, author: 王梓杰
