import catalog from '../../public/experience/api/projects.json' with { type: 'json' };
const allowedHosts = new Set(catalog.projects.map(p => new URL(p.url).host));
const cache = new Map();
const json = (data, status = 200) => new Response(JSON.stringify(data), { status, headers: { 'Content-Type': 'application/json; charset=utf-8', 'Cache-Control': status === 200 ? 'public, max-age=300' : 'no-store', 'X-Content-Type-Options': 'nosniff' } });
export default async (request, context) => {
  if (request.method !== 'GET') return json({ error: 'Method not allowed' }, 405);
  const project = catalog.projects.find(p => p.id === context.params.id);
  if (!project) return json({ error: 'Unknown project' }, 404);
  const cached = cache.get(project.id);
  if (cached && Date.now() - cached.at < 300000) return json(cached.data);
  try {
    let url = project.url, result;
    for (let hop = 0; hop < 4; hop++) {
      const parsed = new URL(url);
      if (parsed.protocol !== 'https:' || !allowedHosts.has(parsed.host)) throw new Error('Redirect denied');
      result = await fetch(url, { method: 'HEAD', redirect: 'manual', signal: AbortSignal.timeout(5000) });
      if (result.status >= 300 && result.status < 400 && result.headers.has('location')) {
        url = new URL(result.headers.get('location'), url).href;
        continue;
      }
      break;
    }
    const xfo = result.headers.get('x-frame-options');
    const csp = result.headers.get('content-security-policy') || '';
    const ancestors = csp.match(/(?:^|;)\s*frame-ancestors\s+([^;]+)/i)?.[1];
    const data = { id: project.id, url, status: result.status, reachable: result.ok, embeddable: result.ok && !xfo && (!ancestors || ancestors.trim() === '*'), checkedAt: new Date().toISOString() };
    cache.set(project.id, { at: Date.now(), data });
    return json(data);
  } catch { return json({ id: project.id, error: 'Site check unavailable' }, 502); }
};
export const config = { path: '/experience/api/site/:id', method: 'GET' };
