import { useState } from 'react'
import './Contact.css'

const PhoneIcon = ({ size = 2.4 }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={size} strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.37 1.9.72 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.35 1.85.59 2.81.72A2 2 0 0 1 22 16.92z"/>
  </svg>
)
const ArrowIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
    <path d="M5 12h14M12 5l-7 7 7 7"/>
  </svg>
)

export default function Contact() {
  const [success, setSuccess] = useState(false)

  function handleSubmit(e) {
    e.preventDefault()
    const name = document.getElementById('ql-name').value.trim()
    const phone = document.getElementById('ql-phone').value.trim()
    if (!name || !phone) return
    setSuccess(true)
    e.target.reset()
    setTimeout(() => setSuccess(false), 6000)
  }

  return (
    <section className="block contact" id="contact">
      <div className="container">
        <div className="contact-inner">
          <div className="reveal">
            <span className="section-eyebrow">יצירת קשר</span>
            <h2>התקשרו אלינו לייעוץ ללא עלות</h2>
            <p className="contact-sub">קריאה ראשונית ובדיקת מצב — חינם וללא התחייבות.</p>
          </div>

          <div className="contact-cards">
            <a href="tel:+972542692087" className="contact-card reveal">
              <div className="contact-icon"><PhoneIcon /></div>
              <div className="contact-card-info">
                <span className="contact-card-meta">להתקשר ל</span>
                <span className="contact-card-name">עופר</span>
              </div>
              <div className="contact-phone">054-269-2087</div>
            </a>
            <a href="tel:+972546912113" className="contact-card reveal">
              <div className="contact-icon"><PhoneIcon /></div>
              <div className="contact-card-info">
                <span className="contact-card-meta">להתקשר ל</span>
                <span className="contact-card-name">להב</span>
              </div>
              <div className="contact-phone">054-691-2113</div>
            </a>
          </div>

          <form className="quick-lead reveal" onSubmit={handleSubmit} noValidate>
            <div className="quick-lead-title">או השאירו פרטים ונחזור אליכם</div>
            <input className="quick-lead-input" id="ql-name" type="text" placeholder="שם מלא" required />
            <input className="quick-lead-input" id="ql-phone" type="tel" placeholder="טלפון" required />
            <input className="quick-lead-input" id="ql-email" type="email" placeholder="אימייל" />
            <button type="submit" className="quick-lead-submit">
              תשלחו לנו פרטים
              <ArrowIcon />
            </button>
            {success && <div className="quick-lead-success show">✓ תודה! נחזור אליכם בהקדם</div>}
          </form>
        </div>
      </div>
    </section>
  )
}
