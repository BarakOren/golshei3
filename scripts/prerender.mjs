// Runs after `vite build` + `vite build --ssr`: writes one static HTML file per route,
// plus 404.html and sitemap.xml, so crawlers get full content without running JavaScript.
import fs from 'node:fs'
import path from 'node:path'
import { pathToFileURL } from 'node:url'

const SITE_URL = 'https://www.metalsurfers.co.il'
const dist = path.resolve('dist')
const template = fs.readFileSync(path.join(dist, 'index.html'), 'utf8')
const { render, routes } = await import(pathToFileURL(path.resolve('dist-ssr/entry-server.js')).href)

// React 19 emits <title>/<meta>/<link> from <Helmet> at the start of the markup; move them into <head>.
const HEAD_TAG = /^(?:<title>[^<]*<\/title>|<meta [^>]*\/?>|<link [^>]*\/?>)/

function page(url) {
  let body = render(url)
  let head = ''
  for (let m; (m = body.match(HEAD_TAG)); body = body.slice(m[0].length)) head += m[0]
  return template
    .replace('</head>', () => `${head}\n  </head>`)
    .replace('<div id="root"></div>', () => `<div id="root">${body}</div>`)
}

const write = (file, html) => {
  fs.mkdirSync(path.dirname(path.join(dist, file)), { recursive: true })
  fs.writeFileSync(path.join(dist, file), html)
}

for (const url of routes) write(url === '/' ? 'index.html' : `${url.slice(1)}.html`, page(url))
write('404.html', page('/404'))

write('sitemap.xml', `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${routes.map((r) => `  <url><loc>${encodeURI(SITE_URL + r)}</loc></url>`).join('\n')}
</urlset>
`)
console.log(`prerendered ${routes.length} routes + 404.html + sitemap.xml`)
