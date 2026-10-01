import { StrictMode } from 'react'
import { createRoot, hydrateRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async'
import './index.css'
import App from './App.jsx'
import { initAnalytics } from './analytics'
import { loadCityContent } from './data/cityContent'
import { cityBySlug } from './data/cityIndex'

const app = (
  <StrictMode>
    <HelmetProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </HelmetProvider>
  </StrictMode>
)

const root = document.getElementById('root')
// A city page's text is its own module (data/cityContent.js): load it first so hydration
// finds the same markup the prerender wrote.
// City pages sit at the site root, and the browser reports their Hebrew path percent-encoded.
let path = location.pathname
try { path = decodeURIComponent(path) } catch { /* malformed: leave it */ }
const city = cityBySlug[path.slice(1)]
const ready = city ? loadCityContent(city.id) : Promise.resolve()

// Prerendered pages arrive with markup inside #root: hydrate it. `npm run dev` serves an empty #root: render.
ready.finally(() => {
  if (root.hasChildNodes()) hydrateRoot(root, app)
  else createRoot(root).render(app)
})

initAnalytics()
