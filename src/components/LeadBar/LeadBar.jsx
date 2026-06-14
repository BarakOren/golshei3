import { useState } from 'react'
import { Link } from 'react-router-dom'
import './LeadBar.css'

const LogoIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 2v20M5 8l7-6 7 6M7 14h10M9 20h6"/>
  </svg>
)
const PhoneIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.37 1.9.72 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.35 1.85.59 2.81.72A2 2 0 0 1 22 16.92z"/>
  </svg>
)
const ArrowIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round">
    <path d="M19 12H5M12 19l-7-7 7-7"/>
  </svg>
)

export default function LeadBar() {
  const [success, setSuccess] = useState(false)

  function handleSubmit(e) {
    e.preventDefault()
    const name = e.target.elements.name.value.trim()
    const phone = e.target.elements.phone.value.trim()
    if (!name || !phone) return
    setSuccess(true)
    e.target.reset()
    setTimeout(() => setSuccess(false), 6000)
  }

  return (
    <header className="lead-bar">
      <div className="container lead-bar-inner">
        <Link to="/" className="lead-logo" aria-label="גולשי המתכת">
          <span className="logo-mark"><LogoIcon /></span>
          <span className="lead-logo-text">
            <strong>גולשי המתכת</strong>
            <small>בנייה ויזמות</small>
          </span>
        </Link>

        <div className="lead-form-wrap">
          <div className="lead-form-title">
            רוצים <span className="accent-text">לקבל הצעת מחיר</span> / להתייעץ / לשאול שאלה?
          </div>
          <form className="lead-form" onSubmit={handleSubmit} noValidate>
            <input className="lead-input" name="name" type="text" placeholder="שם מלא" required />
            <input className="lead-input" name="phone" type="tel" placeholder="טלפון" required />
            <input className="lead-input" name="email" type="email" placeholder="אימייל" />
            <button type="submit" className="lead-submit">
              תחזרו אליי
              <ArrowIcon />
            </button>
          </form>
          {success && <div className="lead-success show">✓ תודה! נחזור אליכם בהקדם.</div>}
        </div>

        <a href="tel:+972542692087" className="lead-phone" aria-label="התקשרו להתייעצות">
          <span className="lead-phone-icon"><PhoneIcon /></span>
          <span className="lead-phone-text">
            <strong>054-269-2087</strong>
            <small>התקשרו להתייעצות חינם</small>
          </span>
        </a>
      </div>
    </header>
  )
}
