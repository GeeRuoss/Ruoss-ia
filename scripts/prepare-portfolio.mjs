// Explicit asset preparation: preserve every original artwork and its proportions.
import fs from 'node:fs/promises';
import sharp from 'sharp';
const artwork = JSON.parse(await fs.readFile('src/data/portfolio-artworks.json', 'utf8'));
const { projects } = JSON.parse(await fs.readFile('public/experience/api/projects.json', 'utf8'));
await fs.mkdir('public/img/portfolio', { recursive: true });
for (const item of artwork) {
  const { width, height } = await sharp('public/img/' + item.file).metadata();
  item.width = width; item.height = height;
  const pixel = await sharp('public/img/' + item.file).extract({ left: 0, top: 0, width: 1, height: 1 }).removeAlpha().raw().toBuffer();
  item.background = '#' + [...pixel].map(channel => channel.toString(16).padStart(2, '0')).join('');
  for (const size of [640, 1200]) {
    await sharp('public/img/' + item.file).resize({ width: size, withoutEnlargement: true }).webp({ quality: 84 }).toFile(`public/img/portfolio/${item.file.replace('.jpg', '')}-${size}.webp`);
  }
}
for (const project of projects) {
  await sharp('public' + project.cover).resize({ width: 1000, withoutEnlargement: true }).webp({ quality: 83 }).toFile(`public/img/portfolio/site-${project.id}.webp`);
}
await fs.writeFile('src/data/portfolio-artworks.json', JSON.stringify(artwork, null, 2) + '\n');
console.log(`${artwork.length} original artworks and ${projects.length} site previews prepared.`);
