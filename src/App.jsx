import { useEffect } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
// import LeadBar from './components/LeadBar/LeadBar'
import Footer from './components/Footer/Footer'
import StickyButtons from './components/StickyButtons/StickyButtons'
import HomePage from './pages/HomePage'
import ServicesPage from './pages/ServicesPage'
import ServicePage from './pages/ServicePage'
import AreasPage from './pages/AreasPage'
import CityPage from './pages/CityPage'
import PrivacyPage from './pages/PrivacyPage'
import AccessibilityPage from './pages/AccessibilityPage'
import { AREAS, LEGAL } from './site'
import { cityList, cityPath } from './data/cityIndex'
import NotFound from './components/NotFound/NotFound'
import Header from './components/Header/Header'

// One place for scroll behaviour. Links to a homepage section pass { section } as router
// state, so the URL stays clean (no #); every other navigation starts at the top.
function ScrollManager() {
  const { key, state } = useLocation()
  useEffect(() => {
    const el = state?.section && document.getElementById(state.section)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
    else window.scrollTo(0, 0)
  }, [key, state])
  return null
}

// The router comes from main.jsx (BrowserRouter) or entry-server.jsx (StaticRouter, for prerendering).
export default function App() {
  return (
    <>
      <ScrollManager />
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/services/:id" element={<ServicePage />} />
        <Route path={AREAS} element={<AreasPage />} />
        {cityList.map((c) => <Route key={c.id} path={cityPath(c.id)} element={<CityPage id={c.id} />} />)}
        <Route path={LEGAL.privacy} element={<PrivacyPage />} />
        <Route path={LEGAL.accessibility} element={<AccessibilityPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
      <StickyButtons />
    </>
  )
}
