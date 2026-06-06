// GitHub Pages serves this project from a repo sub-path in production, so files
// in /public must carry the basePath prefix. next/link and next/image add it
// automatically; plain <img> and CSS url() do not, so prefix those with asset().
const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export function asset(path: string) {
  return `${BASE_PATH}${path}`;
}
