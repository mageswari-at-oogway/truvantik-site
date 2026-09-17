import assert from 'node:assert/strict';
import { readFileSync, existsSync, readdirSync } from 'node:fs';
import { createHash } from 'node:crypto';
import { resolve } from 'node:path';

// Run from the repository root after npm run build. No dependencies or network.
const baseline = JSON.parse(readFileSync(new URL('./incumbent.json', import.meta.url), 'utf8'));
const digest = (file) => createHash('sha256').update(readFileSync(file)).digest('hex');
for (const [file, expected] of Object.entries(baseline.source)) {
  assert.equal(digest(file), expected, `Original source changed: ${file}`);
}
for (const [file, expected] of Object.entries(baseline.build)) {
  assert.equal(digest(file), expected, `Original production output changed: ${file}`);
}
const pages = ['', 'services', 'industries', 'work', 'why-truvantik', 'about', 'contact', 'privacy', 'terms'];
assert.deepEqual(readdirSync('dist/v2').sort(), [...pages.filter(Boolean), 'index.html', 'design.md'].sort(), 'Only intended v2 routes are emitted');
let links = 0;
for (const page of pages) {
  const file = resolve('dist/v2', page, 'index.html');
  const html = readFileSync(file, 'utf8');
  assert.equal((html.match(/<h1(?:\s|>)/g) || []).length, 1, `${page}: one h1`);
  assert.match(html, /name="robots" content="noindex, nofollow"/, `${page}: noindex preview`);
  assert.match(html, /499f0107/, `${page}: design contract persists`);
  assert.match(html, /id="main"/, `${page}: skip target`);
  assert.doesNotMatch(html, /Kron Health|logo-preview|logo-picker|tv-theme|Pause animation/i);
  const ids = [...html.matchAll(/\sid="([^"]+)"/g)].map((m) => m[1]);
  assert.equal(ids.length, new Set(ids).size, `${page}: unique IDs`);
  for (const [, href] of html.matchAll(/href="([^"]+)"/g)) {
    if (!href.startsWith('/') && !href.startsWith('#')) continue;
    if (href.startsWith('/_astro/') || href === '/favicon.svg') continue;
    const url = new URL(href, `https://truvantik.com/v2/${page}`);
    // The explicit original-site comparison link is the only navigation escape.
    if (url.pathname === '/') continue;
    assert.ok(url.pathname.startsWith('/v2'), `${page}: escaped v2: ${href}`);
    const target = url.pathname.endsWith('.md') ? resolve('dist', '.' + url.pathname) : resolve('dist', '.' + url.pathname, 'index.html');
    assert.ok(existsSync(target), `${page}: missing ${href}`);
    if (url.hash) assert.ok(readFileSync(target, 'utf8').includes(`id="${url.hash.slice(1)}"`), `${page}: broken anchor ${href}`);
    links++;
  }
}
assert.equal(readFileSync('dist/v2/design.md', 'utf8'), readFileSync('src/v2/design.md', 'utf8'));
assert.ok(!existsSync('dist/logo-preview/index.html'));
assert.ok(!existsSync('dist/logo-picker/index.html'));
const css = readFileSync('src/v2/styles.css', 'utf8');
const layout = readFileSync('src/v2/Layout.astro', 'utf8');
const contact = readFileSync('dist/v2/contact/index.html', 'utf8');
assert.match(css, /@media \(prefers-reduced-motion: reduce\)/, 'Reduced-motion fallback exists');
assert.match(css, /animation-play-state: var\(--v2-motion, paused\)/, 'Motion defaults to paused without JS');
assert.match(layout, /visibilitychange/, 'Hidden-document motion handling exists');
assert.match(contact, /<form\b[^>]*\bhidden\b/, 'No-JS composer does not expose an unusable submit');
assert.match(contact, /<noscript>/, 'No-JS alternative exists');
assert.match(contact, /mailto:hello@truvantik.com/, 'Direct-email alternative exists');
const luminance = hex => {
  const rgb = hex.match(/[\da-f]{2}/gi).map(v => parseInt(v, 16) / 255).map(v => v <= .04045 ? v / 12.92 : ((v + .055) / 1.055) ** 2.4);
  return rgb[0] * .2126 + rgb[1] * .7152 + rgb[2] * .0722;
};
const token = name => css.match(new RegExp(`--v2-${name}:\\s*(#[\\da-f]{6})`, 'i'))[1];
for (const [fg, bg, minimum] of [['ink','bg',4.5],['muted','bg',4.5],['subtle','surface',4.5],['action-ink','action',4.5],['outcome-ink','outcome',4.5],['error','bg',4.5],['line-strong','bg',3],['action','bg',3]]) {
  const values = [luminance(token(fg)), luminance(token(bg))].sort((a,b) => b-a);
  const ratio = (values[0]+.05) / (values[1]+.05);
  assert.ok(ratio >= minimum, `${fg} on ${bg}: contrast ${ratio.toFixed(2)} < ${minimum}`);
}
console.log(`PASS: ${Object.keys(baseline.source).length} original source files and ${Object.keys(baseline.build).length} original build files unchanged; ${pages.length} v2 pages, ${links} local links, semantic structure, token contrast, fallback contracts, preview isolation and design.md verified.`);
