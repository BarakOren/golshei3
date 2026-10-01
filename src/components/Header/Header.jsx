import { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import './Header.css'
import WhiteLogo from "../../../public/assets/surfers-logo-white.png"

// `section` = the id of a homepage section; App.jsx's ScrollManager scrolls to it.
const navLinks = [
  { label: 'ראשי', to: '/' },
  { label: 'שירותים', to: '/services' },
  { label: 'למה אנחנו', to: '/', section: 'why' },
  { label: 'ביקורות', to: '/', section: 'reviews' },
  { label: 'גלריה', to: '/', section: 'gallery' },
  { label: 'אודות', to: '/', section: 'about' },
  { label: 'צור קשר', to: '/', section: 'contact' },
]

export default function Header() {
  const { key } = useLocation()
  // The mobile menu stays open only on the page it was opened on, so any navigation
  // (a link tap, the logo, the back button) closes it.
  const [openOn, setOpenOn] = useState(null)
  const open = openOn === key

  useEffect(() => {
    if (!open) return
    const onKeyDown = (e) => { if (e.key === 'Escape') setOpenOn(null) }
    document.addEventListener('keydown', onKeyDown)
    return () => document.removeEventListener('keydown', onKeyDown)
  }, [open])

  return (
    <header className="lead-bar">
      <div className="container lead-bar-inner">
      <Link to="/" className="lead-logo" aria-label="גולשי המתכת">
  <img src={WhiteLogo} alt="גולשי המתכת" className="logo-mark" />
  <div className="lead-logo-text">
    <strong>גולשי המתכת</strong>
    <small>בנייה ויזמות</small>
  </div>
</Link>

        <button
          type="button"
          className="nav-toggle"
          aria-expanded={open}
          aria-controls="site-nav"
          aria-label={open ? 'סגירת התפריט' : 'פתיחת התפריט'}
          onClick={() => setOpenOn(open ? null : key)}
        >
          <span className="nav-toggle-bar" />
          <span className="nav-toggle-bar" />
          <span className="nav-toggle-bar" />
        </button>

        <nav id="site-nav" className={open ? 'header-nav is-open' : 'header-nav'} aria-label="ניווט ראשי">
          {navLinks.map(link => (
            <Link
              key={link.label}
              to={link.to}
              state={link.section && { section: link.section }}
              className="header-nav-link"
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  )
}
