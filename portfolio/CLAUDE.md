# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev      # Start dev server (localhost:3000)
npm run build    # Production build
npm run start    # Start production server
npm run lint     # Run Next.js lint
```

All commands run from the `portfolio/` directory.

## Tech Stack

- **Framework**: Next.js 15 (App Router) with TypeScript
- **Styling**: Tailwind CSS v4 — CSS-driven config via `@theme` in `globals.css`, no JS config file. Use `@custom-variant dark` for dark mode.
- **UI Components**: Custom shadcn/ui-style components in `src/components/ui/` (Button, Card, Badge) using `class-variance-authority` (CVA) + `cn()` utility
- **Dark Mode**: `next-themes` with `class` strategy. Light mode is default.
- **Icons**: `lucide-react`
- **Fonts**: Geist (Geist Sans + Geist Mono) via `next/font/google`

## Architecture

### Routing (App Router)

```
src/app/
  layout.tsx          # Root layout — ThemeProvider, Navbar, Footer, Geist font
  page.tsx            # Home — HeroSection + featured 3 project cards
  about/page.tsx      # Personal info, skills badges, contact
  projects/
    page.tsx          # All projects listing grid
    [slug]/page.tsx   # Project detail — generateStaticParams from data/projects.ts
  blog/
    page.tsx          # All blog posts listing grid
    [slug]/page.tsx   # Blog post — MarkdownRenderer renders post.content
```

### Component Architecture

```
src/components/
  ui/                 # Primitive UI components (button, card, badge) — CVA pattern
  theme-provider.tsx  # Wraps next-themes ThemeProvider
  theme-toggle.tsx    # Sun/Moon toggle button in navbar
  navbar.tsx          # Fixed top nav, responsive (mobile hamburger)
  footer.tsx          # Copyright + social links
  hero-section.tsx    # Home page hero with scroll indicator
  section-title.tsx   # Reusable section heading (title + optional subtitle)
  project-card.tsx    # Card linking to /projects/[slug], displays image gradient or image
  blog-card.tsx       # Card linking to /blog/[slug]
  markdown-renderer.tsx # Custom lightweight Markdown parser (headings, code, lists, tables)
```

### Data Layer

- **`src/data/projects.ts`** — Array of 3 `Project` objects:
  - 灵犀: Spring Boot + Vue 3 creative works management with AI search
  - 云康: Vue 2 + Element UI health management system (diet/sleep/exercise/vital signs)
  - 音爆: React 19 + FastAPI AI music source separation (Demucs)
  - Each has: `image` field pointing to `/images/{slug}.png` for screenshots
- **`src/data/blog.ts`** — Single blog post linking to CSDN article on Prompt Engineering
- **To add content**: Append to the array. Rebuild triggers via `generateStaticParams` in `[slug]/page.tsx`.
- No CMS, no database, no MDX pipeline — content is static and type-safe.

### Theme System

- CSS custom properties in `:root` (light) and `.dark` (dark) blocks in `globals.css`
- Tailwind v4 maps these via `@theme inline { --color-background: hsl(var(--background)); ... }`
- `ThemeProvider` wraps layout, `ThemeToggle` in navbar calls `setTheme()`
- Default theme is `light`; toggle switches between `light` and `dark`

### Key Conventions

- All text content is in **Chinese**.
- Author name: **王梓杰**.
- Path alias `@/` maps to `src/`.
- New UI primitives go in `src/components/ui/` following CVA pattern: variants via `cva()`, className merging via `cn()`.
- Blog posts use the custom `MarkdownRenderer` — supports `## h2`, `### h3`, code blocks, `- ` lists, tables, `---` dividers, and inline `**bold**`/`` `code` ``.
- Projects use gradient placeholder images. Replace with real screenshots at `public/images/{slug}.png`.
- Project screenshots are stored in `public/images/` — add new ones there and reference in `projects.ts` `image` field.

## Deployment

- Auto-deployed to Vercel from GitHub (`main` branch).
- Vercel project root: `portfolio/` subdirectory.
- `vercel.json` sets `NODE_OPTIONS="--max-old-space-size=4096"` for build memory.
- `.github/workflows/deploy.yml` runs `npm ci && npm run build` on push.
- For Vercel integration: connect repo in Vercel dashboard, set root directory to `portfolio`.

## Design Reference

- Figma source file: `design_ui/Portfolio Website Sample (Community).fig` in the repo root.
- Based on a community portfolio template with light-mode default, clean cards layout, and ample whitespace.
