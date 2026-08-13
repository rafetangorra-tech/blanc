// Prefix an internal path with Astro's configured base (e.g. "/blanc")
// so links work on project pages and on a custom domain alike.
export function withBase(path: string): string {
  const base = import.meta.env.BASE_URL.replace(/\/$/, '');
  const clean = path.startsWith('/') ? path : `/${path}`;
  return `${base}${clean}` || '/';
}
