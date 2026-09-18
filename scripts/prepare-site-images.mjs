import sharp from 'sharp';
import { mkdir, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { PROJECTS, OTHER_PROJECTS_CARD, CLIENT_LOGOS, REVIEWS, SERVICES, IMG } from '../src/data/site.ts';

// Explicit regeneration of responsive copies. Original portfolio files stay intact.
const cards = [...PROJECTS, OTHER_PROJECTS_CARD];
const sources = [
  ...cards.map(p => ({ src: p.cover, widths: [600, 1200], lossless: false })),
  ...cards.map(p => ({ src: p.logo, widths: [320, 640], lossless: true })),
  ...CLIENT_LOGOS.map(src => ({ src, widths: [320, 640], lossless: true })),
  ...REVIEWS.map(r => ({ src: r.avatar, widths: [96, 192], lossless: false })),
  ...SERVICES.flatMap(s => s.tiles).map(src => ({ src, widths: [240, 480], lossless: false })),
  { src: IMG.founder, widths: [320, 640], lossless: false },
];
await mkdir('public/img/responsive', { recursive: true });
const manifest = {};
for (const item of sources) {
  if (manifest[item.src]) continue;
  const variants = [];
  for (const width of item.widths) {
    const target = `/img/responsive/${path.parse(item.src).name}-${width}.webp`;
    const info = await sharp('public' + item.src).resize({ width, withoutEnlargement: true }).webp(item.lossless ? { lossless: true } : { quality: 84 }).toFile('public' + target);
    variants.push({ src: target, width: info.width, height: info.height });
  }
  const largest = variants.at(-1);
  const unique = variants.filter((v, i) => variants.findIndex(other => other.width === v.width) === i);
  manifest[item.src] = { ...largest, srcset: unique.map(v => `${v.src} ${v.width}w`).join(', ') };
}
await writeFile('src/data/responsive-images.json', JSON.stringify(manifest, null, 2) + '\n');
console.log(`Responsive copies generated for ${Object.keys(manifest).length} images.`);
