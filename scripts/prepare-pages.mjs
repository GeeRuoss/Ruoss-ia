import { readFile, mkdir, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { inspectProject } from './lib/project-status.mjs';

export async function preparePages({ dir, logger }) {
  const output = fileURLToPath(dir);
  const catalogPath = path.join(output, 'experience/api/projects.json');
  const catalog = JSON.parse(await readFile(catalogPath, 'utf8'));
  const allowedHosts = new Set(catalog.projects.map(project => new URL(project.url).host));
  const checks = await Promise.all(catalog.projects.map(project => inspectProject(project, allowedHosts)));
  const statusDir = path.join(output, 'experience/api/site');
  await mkdir(statusDir, { recursive: true });
  await Promise.all(checks.map(check => writeFile(path.join(statusDir, check.id + '.json'), JSON.stringify(check))));
  catalog.projects = catalog.projects.map((project, index) => ({ ...project, embeddable: checks[index].embeddable }));
  catalog.checkedAt = new Date().toISOString();
  await writeFile(catalogPath, JSON.stringify(catalog, null, 2));
  await writeFile(path.join(output, '.nojekyll'), '');
  for (const check of checks) logger.info(`${check.id}: ${check.error ? 'dernier état connu conservé' : check.embeddable ? 'visite intégrée' : 'ouverture directe'}`);
}
