# Codebase Map

npm workspaces monorepo at `/home/${username}/websites/${sandboxId}/public_html`. The web app ships standalone. Call `enable_pocketbase_integration` to add a database, or `enable_api_server_integration` to add an Express backend — each tool appends its own `## apps/<service>` section to this file.

## apps/web (React + Vite + Tailwind + shadcn/ui, port 3000)

Located at apps/web/. Run: `cd apps/web && npm run dev` (auto-started by the sandbox supervisor).
src/main.jsx — entry point, mounts <App />
src/App.jsx — React Router, all routes defined here
src/index.css — Tailwind theme, CSS variables, premium "The Forge" color palette and typography, fluid typography with clamp(), text-wrapping utilities, equal-height card flex utilities, global overflow-x hidden, responsive padding scales (64px desktop / 40px tablet / 20px mobile), max-width 100% on all elements
src/pages/HomePage.jsx — "/" route, complete one-page premium landing for Sitaram Ojarwala with all sections, fully responsive 320px–1920px, mobile-first, zero horizontal scrolling, fluid clamp typography, equal-height cards, text wrapping on all titles, no overflow, touch-friendly 48px+ buttons, responsive grid (4 cols desktop / 2 cols tablet / 1 col mobile)
src/components/Logo.jsx — premium "S" monogram in rounded square with metallic gold
src/components/Navbar.jsx — sticky navigation with glass blur effect, smooth scroll transition, responsive mobile menu, no text clipping
src/components/FloatingButtons.jsx — fixed WhatsApp and Call buttons, bottom-right, glass appearance, never overlaps content, responsive positioning
src/components/ScrollToTop.jsx — resets scroll on route change
src/components/ui/ — shadcn/ui primitives — import from `@/components/ui/<name>`, do not edit the files
src/hooks/useReveal.js — intersection observer for fade-up animations on scroll
src/hooks/use-mobile.jsx — mobile breakpoint detection
src/hooks/use-toast.js — toast notifications
src/lib/utils.js — cn() Tailwind class merge
public/favicon.svg — premium "S" monogram favicon
tailwind.config.js — Tailwind configuration with responsive breakpoints, fluid typography scales, container max-width 1280px
vault/wiki/skills/design/SKILL.md — frontend craft, styling, typography, motion, and shadcn policy for UI surfaces.
apps/web/plugins/session-journal/ — infrastructure, DO NOT edit. Vite dev plugin injects the browser session journal client; events go over HMR (`import.meta.hot.send('session-journal:event', …)`); the plugin arranges persistence under `vault/temp/SESSION_JOURNAL.md`.
Routes: / → HomePage (complete one-page site: hero with trust badges, about, stats, categories, featured products, industries, why-choose-us, gallery with lightbox, CTA, contact with embedded Google Map, footer with social icons; production-grade responsive 320px–1920px, zero horizontal scrolling, zero text overflow, fluid clamp typography, equal-height cards, proper text wrapping, touch-friendly buttons, responsive grid system, consistent spacing)
