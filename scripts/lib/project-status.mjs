// Build-time checks only: no runtime server or proxy is required.
export async function inspectProject(project, allowedHosts, fetchSite = fetch) {
  try {
    let url = project.url;
    for (let hop = 0; hop < 4; hop++) {
      const parsed = new URL(url);
      if (parsed.protocol !== 'https:' || parsed.username || parsed.password || !allowedHosts.has(parsed.host)) throw new Error('Redirect denied');
      const response = await fetchSite(url, { method: 'HEAD', redirect: 'manual', signal: AbortSignal.timeout(5000) });
      if (response.status >= 300 && response.status < 400 && response.headers.has('location')) {
        url = new URL(response.headers.get('location'), url).href;
        continue;
      }
      const xfo = response.headers.get('x-frame-options');
      const csp = response.headers.get('content-security-policy') || '';
      const ancestors = csp.match(/(?:^|;)\s*frame-ancestors\s+([^;]+)/i)?.[1];
      return { id: project.id, url, status: response.status, reachable: response.ok, embeddable: response.ok && !xfo && (!ancestors || ancestors.trim() === '*'), checkedAt: new Date().toISOString() };
    }
    throw new Error('Too many redirects');
  } catch {
    return { id: project.id, url: project.url, reachable: null, embeddable: project.embeddable, checkedAt: null, error: 'Site check unavailable' };
  }
}
