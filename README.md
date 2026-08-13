# blanc

The official site for **blanc** — a songwriting collective that refuses a single sound. A scroll-driven, cinematic site where visitors travel between the group's musical **worlds**.

- **House World** — electronic / house
- **Golden World** — pop singer-songwriter
- **Velvet World** — rock

## Stack

- [Astro 5](https://astro.build) + [Tailwind CSS 4](https://tailwindcss.com) (CSS-first, no config file)
- [GSAP + ScrollTrigger](https://gsap.com) for scroll-scrubbed animation
- [Lenis](https://github.com/darkroomengineering/lenis) for smooth-scroll inertia
- [Fontsource](https://fontsource.org) self-hosted fonts (Inter, Space Grotesk, Fraunces, Anton)
- Deployed to GitHub Pages via GitHub Actions

## Develop

```bash
npm install
npm run dev      # http://localhost:4321/blanc
npm run build    # outputs to dist/
npm run preview
```

## Editing content

Almost everything lives in **`src/data/site.ts`**:

- `site` — name, tagline, intro copy, booking email, social links
- `worlds[]` — each world's name, genre, blurb, palette, and font. Drop a
  Spotify / SoundCloud / YouTube embed URL into a world's `embed` field to
  replace the "track coming soon" placeholder with a real player.

## Deploy

Push to `main` → GitHub Actions builds and deploys to
`https://rafetangorra-tech.github.io/blanc`.

To move to a custom domain later, set repo/Actions env
`USE_BASE_PATH=false` and `PUBLIC_SITE_URL=https://yourdomain.com`
(this drops the `/blanc` base path). See `astro.config.mjs`.

## Accessibility

Respects `prefers-reduced-motion`: all scroll animation and smooth-scroll are
disabled and content renders as a clean static stack.
