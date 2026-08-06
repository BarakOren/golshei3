import { Link } from 'react-router-dom'
import './Header.css'
import WhiteLogo from "../../../public/assets/surfers-logo-white.png"

const navLinks = [
  { label: 'ראשי', href: '#hero' },
  { label: 'שירותים', href: '#services' },
  { label: 'למה אנחנו', href: '#why' },
  { label: 'ביקורות', href: '#reviews' },
  { label: 'גלריה', href: '#gallery' },
  { label: 'אודות', href: '#about' },
  { label: 'צור קשר', href: '#contact' },
]

const scrollTo = (href) => {
  const el = document.querySelector(href)
  if (el) el.scrollIntoView({ behavior: 'smooth' })
}

export default function Header() {
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

        <nav className="header-nav">
          {navLinks.map(link => (
            <button
              key={link.href}
              className="header-nav-link"
              onClick={() => scrollTo(link.href)}
            >
              {link.label}
            </button>
          ))}
        </nav>
      </div>
    </header>
  )
}