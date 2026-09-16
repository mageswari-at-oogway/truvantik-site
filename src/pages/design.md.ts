import design from "../../design.md?raw";

// Serve the canonical repository document without maintaining a second copy.
export function GET() {
  return new Response(design, {
    headers: { "Content-Type": "text/markdown; charset=utf-8" },
  });
}
