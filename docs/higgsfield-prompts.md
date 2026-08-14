# blanc — Higgsfield image-generation prompts

Prompts for generating art assets for the blanc site. The headline set is the
three **worlds as planets** that scroll into the world sections.

## How to use

- Use Higgsfield's photoreal image model. **Aspect ratio 1:1** for planets, max resolution.
- Render each planet **isolated on a PURE BLACK background, full planet centered with margin.**
  That way it drops straight onto the dark world sections — mask out the black or use a
  "Screen" / "Lighten" blend mode so only the planet + glow show.
- Keep the three planets a **matched set**: same camera distance, same lighting logic,
  same "isolated on black, 1:1." Generate them in one session for consistency.
- Append the **shared style suffix** (below) to each planet prompt.
- **Avoid / negative:** text, letters, numbers, watermark, UI, logos, borders, split frames.

### Shared style suffix — v2, grittier (paste at the end of each planet prompt)

> — a single full planet centered in frame with generous margin, isolated on a pure black
> background with a few sparse distant stars, hyper-photorealistic, shot like a real NASA /
> Hubble deep-space telescope photograph, cinematic volumetric lighting with deep shadows,
> fine weathered surface grit and texture, subtle film grain, 8k, square 1:1 composition,
> **no circuit-board patterns, no neon piping, no glossy plastic CGI look**, no text, no
> watermark, no border.

**Lesson from v1:** words like "circuit boards," "grids," and "neon light-lines" make the model
draw literal graphics on the sphere. Describe energy as **lightning, molten veins, aurora, and
storms** instead — that stays photoreal and gritty. (Velvet's lava world nailed this; House v1 did not.)

---

These are the **full, ready-to-run v2 prompts** — grit suffix baked in. Run all three in one
session at aspect **1:1**.

## 1) House World — the electric storm planet

> A hyper-photorealistic planet floating in deep space, seen full and centered — a real, gritty
> celestial body, not a graphic. A dark electric storm world: a charred blue-black rocky surface
> wrapped in turbulent storm clouds, split by glowing veins of molten cyan (#00E5FF) energy
> cracking through the crust like electric-blue lava. Vast forks of cyan lightning crackle across
> the shadowed night side; faint magenta (#FF2D95) aurora ribbons drift over the poles, and a thin
> magenta atmospheric rim-light glows on the edge. Weathered, cratered, high-detail surface, deep
> shadows, moody and cinematic. Isolated on a pure black background with sparse distant stars, shot
> like a real NASA/Hubble deep-space telescope photograph, cinematic volumetric lighting with deep
> shadows, fine weathered surface grit and texture, subtle film grain, 8k, square 1:1. No
> circuit-board patterns, no neon piping, no glossy plastic CGI look, no text, no watermark, no border.

## 2) Golden World — the singer-songwriter planet

> A hyper-photorealistic planet floating in deep space, seen full and centered — a real, gritty
> celestial body. A warm golden-hour gas giant: deep honey-amber (#C7761F / #E8A93C) atmosphere
> with turbulent rolling cloud bands in cream, caramel, marigold and burnt-orange, churning storms
> and fine wind-swept detail lit like a low sunset. A soft glowing golden atmospheric halo wraps
> the rim and warm light rakes across the clouds, casting deep shadow on the far side. Dreamy but
> weathered and real, intimate, cinematic. Isolated on a pure black background with sparse distant
> stars, shot like a real NASA/Hubble deep-space telescope photograph, cinematic volumetric lighting
> with deep shadows, fine atmospheric grit and texture, subtle film grain, 8k, square 1:1. No neon,
> no glossy plastic CGI look, no text, no watermark, no border.

*(Note: the Golden World section on the site has a light cream background, so a planet-on-black
won't sit on it naturally. Either I darken that section so all three planets share one cosmic look,
or you generate a second Golden version swapping "pure black background" for "soft cream #F6EAD3
background.")*

## 3) Velvet World — the rock planet  *(v1 already nailed this — this just adds grit + consistency)*

> A hyper-photorealistic planet floating in deep space, seen full and centered — a real, gritty
> celestial body. A moody volcanic rock world drenched in crimson: a charred oxblood-and-black
> rocky surface with molten crimson (#E23A55 / #7A1020) lava rivers glowing up through deep cracks,
> cooled magma plains, smoldering embers, and a dramatic blood-red atmospheric rim-light. Rugged
> craters and jagged texture, deep shadows, dangerous and cinematic. Isolated on a pure black
> background with sparse distant stars, shot like a real NASA/Hubble deep-space telescope
> photograph, cinematic volumetric lighting with deep shadows, fine weathered surface grit and
> texture, subtle film grain, 8k, square 1:1. No neon, no circuit-board patterns, no glossy plastic
> CGI look, no text, no watermark, no border.

---

## Optional extras

### Matching nebula backdrop (one per world, wide)

Use **16:9**, for a subtle moving/depth layer behind a world.

> A deep-space nebula field, soft and out of focus, in [WORLD COLORS: cyan+magenta / warm
> amber+cream / crimson+black], gentle volumetric clouds of colored gas with faint scattered
> stars, dark and moody, cinematic, ultra-wide, no planet, no text, no watermark, 16:9.

### blanc monogram emblem (logo mark, not text)

> A minimalist abstract emblem: a single elegant lowercase "b" formed from one continuous thin
> line, or a clean geometric circle-and-line monogram, matte white on pure black, high-end fashion
> branding, vector-like, centered, lots of negative space, no extra text, no watermark, square 1:1.

*(AI is unreliable at rendering exact letters — treat logo output as inspiration, and I can build
the final wordmark in clean CSS/SVG.)*

### Cosmic "blank page" transition (intro → space)

> An abstract expanse transitioning from pure white on the left to deep starry black on the right,
> a smooth clean gradient with a scattering of tiny stars emerging in the dark, minimal, elegant,
> cinematic, ultra-wide 21:9, no text, no watermark.
