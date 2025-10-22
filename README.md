Revinetics — Profitable Ad Systems for B2B SaaS

Tech stack
- Next.js 14+ (App Router)
- Tailwind CSS 4
- Framer Motion
- Deployed on Vercel

Getting started (Windows PowerShell)
1. Install dependencies
```powershell
npm install
```
2. Run the dev server
```powershell
npm run dev
```
3. Open http://localhost:3000

Project structure
- `src/app/page.tsx` — Landing page assembling all sections
- `src/components/` — Section components and hero
- `src/app/book` — CTA target route (placeholder)
- `src/app/layout.tsx` — Global layout, Inter font, SEO metadata
- `src/app/globals.css` — Tailwind base + theme variables and utilities
- `public/` — Assets (logo, favicon)

Environment & SEO
- Metadata title/description set in `src/app/layout.tsx`
- Favicon at `public/favicon.ico`
- Social image `src/app/og.png` placeholder (replace with a real 1200x630 image)

Deploying to Vercel
1. Push this folder to a Git repository (GitHub/GitLab/Bitbucket)
2. In Vercel, import the repo and accept defaults
   - Framework: Next.js
   - Build command: `next build`
   - Output: auto-detected
3. Set your custom domain in Vercel Domains

Brand & theme
- Background: `#0C0C0E`
- Accent: `#2A7FFF`
- Text: `#EAEAEA`
- Font: Inter (loaded via next/font)

Notes
- Animations use Framer Motion and are optimized for smooth scroll and fade-up reveals.
- Replace `/book` with your scheduling link or embed.
