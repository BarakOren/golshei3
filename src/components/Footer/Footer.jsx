import { Link } from 'react-router-dom'
import './Footer.css'

const LogoIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 2v20M5 8l7-6 7 6M7 14h10M9 20h6"/>
  </svg>
)
const PhoneIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.37 1.9.72 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.35 1.85.59 2.81.72A2 2 0 0 1 22 16.92z"/>
  </svg>
)
const PinIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
    <circle cx="12" cy="10" r="3"/>
  </svg>
)
const ClockIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="9"/>
    <path d="M12 6v6l4 2"/>
  </svg>
)

const navLinks = [
  { href: '#services', label: 'השירותים שלנו' },
  { href: '#why', label: 'למה לבחור בנו' },
  { href: '#reviews', label: 'המלצות לקוחות' },
  { href: '#join', label: 'הצטרפו אלינו' },
  { href: '#about', label: 'אודות החברה' },
  { href: '#contact', label: 'יצירת קשר' },
]

export default function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <Link to="/" className="logo">
              <span className="logo-mark" style={{ width: 36, height: 36, borderRadius: 10 }}>
                <LogoIcon />
              </span>
              <span className="logo-text">
                <span>גולשי המתכת</span>
                <span>עבודות גובה וסנפלינג</span>
              </span>
            </Link>
            <p>חברה ישראלית המתמחה בעבודות גובה וסנפלינג מקצועי. שיפוצים, איטום, צביעה ותיקונים במבנים גבוהים בכל גוש דן.</p>
          </div>

          <div className="footer-col">
            <h4>ניווט מהיר</h4>
            <ul>
              {navLinks.map((l) => (
                <li key={l.href}>
                  <a href={l.href}>{l.label}</a>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer-col">
            <h4>צרו קשר</h4>
            <ul>
              <li className="footer-contact-row">
                <PhoneIcon />
                <a href="tel:+972542692087">עופר · 054-269-2087</a>
              </li>
              <li className="footer-contact-row">
                <PhoneIcon />
                <a href="tel:+972546912113">להב · 054-691-2113</a>
              </li>
              <li className="footer-contact-row">
                <PinIcon />
                <span>אזור שירות: גוש דן והמרכז</span>
              </li>
              <li className="footer-contact-row">
                <ClockIcon />
                <span>זמינות 24/6</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <span>© 2026 גולשי המתכת. כל הזכויות שמורות.</span>
          <span>עיצוב ובנייה · אתר תדמית מקצועי</span>
        </div>
      </div>
    </footer>
  )
}
