import design from '../../v2/design.md?raw';
export function GET() {
  return new Response(design, { headers: { 'Content-Type': 'text/markdown; charset=utf-8', 'X-Robots-Tag': 'noindex, nofollow' } });
}
