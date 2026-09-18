import http from 'node:http';
import { readFile, stat } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
const root = process.env.RUOSS_PREVIEW_ROOT || fileURLToPath(new URL('../dist', import.meta.url));
const types = { '.html':'text/html; charset=utf-8', '.js':'text/javascript; charset=utf-8', '.css':'text/css; charset=utf-8', '.json':'application/json; charset=utf-8', '.png':'image/png', '.jpg':'image/jpeg', '.jpeg':'image/jpeg', '.svg':'image/svg+xml', '.webp':'image/webp', '.woff2':'font/woff2', '.mp4':'video/mp4', '.xml':'application/xml' };
http.createServer(async (req, res) => {
  res.setHeader('X-Content-Type-Options', 'nosniff');
  res.setHeader('Cache-Control', 'no-store');
  let pathname;
  try { pathname = decodeURIComponent(new URL(req.url, 'http://127.0.0.1:4338').pathname); }
  catch { res.writeHead(400); res.end(); return; }
  if (!['GET','HEAD'].includes(req.method)) { res.writeHead(405); res.end(); return; }
  let file = path.resolve(root, '.'+pathname);
  if (!file.startsWith(root+path.sep) && file !== root) { res.writeHead(404); res.end(); return; }
  try {
    if ((await stat(file)).isDirectory()) {
      if (!pathname.endsWith('/')) { res.writeHead(302,{Location:pathname+'/'}); res.end(); return; }
      file = path.join(file, 'index.html');
    }
    const data = await readFile(file);
    res.setHeader('Content-Type', types[path.extname(file)] || 'application/octet-stream');
    res.end(req.method === 'HEAD' ? undefined : data);
  } catch { res.writeHead(404); res.end('Not found'); }
}).listen(4338,'127.0.0.1',()=>console.log('Ruoss, dépôt compilé : http://127.0.0.1:4338/experience/'));
