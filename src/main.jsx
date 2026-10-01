import { StrictMode } from 'react'
import { createRoot, hydrateRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async'
import './index.css'
import App from './App.jsx'
import { initAnalytics } from './analytics'

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
// Prerendered pages arrive with markup inside #root: hydrate it. `npm run dev` serves an empty #root: render.
if (root.hasChildNodes()) hydrateRoot(root, app)
else createRoot(root).render(app)

initAnalytics()
