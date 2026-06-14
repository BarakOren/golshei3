import { BrowserRouter, Routes, Route } from 'react-router-dom'
import LeadBar from './components/LeadBar/LeadBar'
import Footer from './components/Footer/Footer'
import StickyButtons from './components/StickyButtons/StickyButtons'
import HomePage from './pages/HomePage'
import ServicePage from './pages/ServicePage'

export default function App() {
  return (
    <BrowserRouter>
      <LeadBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/service/:id" element={<ServicePage />} />
      </Routes>
      <Footer />
      <StickyButtons />
    </BrowserRouter>
  )
}
