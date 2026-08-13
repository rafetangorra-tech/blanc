import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

// Build switches (set by GitHub Actions):
//   default (no env)                        → rafetangorra-tech.github.io/blanc (project pages)
//   USE_BASE_PATH=false + PUBLIC_SITE_URL=… → custom domain (drop the /blanc base)
const useBasePath = process.env.USE_BASE_PATH !== 'false';
const defaultSite = useBasePath
  ? 'https://rafetangorra-tech.github.io'
  : 'https://songsbyblanc.com';
const siteUrl = process.env.PUBLIC_SITE_URL || defaultSite;

export default defineConfig({
  site: siteUrl,
  base: useBasePath ? '/blanc' : '/',
  trailingSlash: 'ignore',
  integrations: [sitemap()],
  vite: {
    plugins: [tailwindcss()],
  },
});
