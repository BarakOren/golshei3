import { StrictMode } from 'react'
import { renderToString } from 'react-dom/server'
import { StaticRouter } from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async'
import App from './App.jsx'
import { services } from './data/services'
import { cityList, cityPath } from './data/cityIndex'
import { primeCityContent } from './data/cityContent'
import { AREAS, LEGAL } from './site'

// The prerender has every city's text up front; the browser loads one city at a time.
const cityFiles = import.meta.glob('./data/cities/*.js', { eager: true, import: 'default' })
const cityContent = Object.fromEntries(Object.values(cityFiles).map((c) => [c.id, c]))
primeCityContent(cityContent)

export const routes = [
  '/',
  '/services',
  ...services.map((s) => `/services/${s.id}`),
  AREAS,
  ...cityList.filter((c) => cityContent[c.id]).map((c) => cityPath(c.id)),
  LEGAL.privacy,
  LEGAL.accessibility,
]

export function render(url) {
  return renderToString(
    <StrictMode>
      <HelmetProvider>
        <StaticRouter location={url}>
          <App />
        </StaticRouter>
      </HelmetProvider>
    </StrictMode>
  )
}
