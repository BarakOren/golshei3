import { BrowserRouter, Routes, Route } from 'react-router-dom'
import LeadBar from './components/LeadBar/LeadBar'
import Footer from './components/Footer/Footer'
import StickyButtons from './components/StickyButtons/StickyButtons'
import HomePage from './pages/HomePage'
import ServicePage from './pages/ServicePage'
import NotFound from './components/NotFound/NotFound'

export default function App() {
  return (
    <BrowserRouter basename="/">
      <LeadBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/service/:id" element={<ServicePage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
      <StickyButtons />
    </BrowserRouter>
  )
}
