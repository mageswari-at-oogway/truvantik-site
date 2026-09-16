/** All experiment navigation stays inside /v2. Never import into the original site. */
export const pages = ['', 'services', 'industries', 'work', 'why-truvantik', 'about', 'contact', 'privacy', 'terms'] as const;
export type Page = typeof pages[number];
export const path = (page: Page = '') => `/v2${page ? `/${page}` : '/'}`;
export const contact = (start = '') => `${path('contact')}${start ? `?start=${encodeURIComponent(start)}` : ''}`;
export const navigation: { page: Page; label: string }[] = [
  { page: 'services', label: 'Services' },
  { page: 'industries', label: 'Industries' },
  { page: 'work', label: 'Work' },
  { page: 'about', label: 'About' },
];
