import { useState } from 'react'
import './JoinUs.css'

const ShieldIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
  </svg>
)
const ArrowIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
    <path d="M5 12h14M12 5l-7 7 7 7"/>
  </svg>
)

export default function JoinUs() {
  const [success, setSuccess] = useState(false)

  function handleSubmit(e) {
    e.preventDefault()
    const name = e.target.elements['f-name'].value.trim()
    const phone = e.target.elements['f-phone'].value.trim()
    if (!name || !phone) return
    setSuccess(true)
    e.target.reset()
    setTimeout(() => setSuccess(false), 6000)
  }

  return (
    <section className="block join" id="join">
      <div className="container">
        <div className="join-grid">
          <div className="join-side join-side-image reveal">
            <img className="join-worker" src="./assets/about-worker.png" alt="צוות גולשי המתכת" />
          </div>

          <div className="join-side join-side-content reveal">
            <h2 className="join-statement">
              בין אם מדובר בחברת בנייה, ועד בית או לקוח פרטי —
              <span className="em">עבורנו כל פרויקט הוא שותפות.</span>
              אצלנו תהנו משקיפות מלאה לכל אורך הדרך, עמידה מדויקת בזמנים ותוצאה סופית ברמה הגבוהה ביותר.
            </h2>

            <form className="join-form" onSubmit={handleSubmit} noValidate>
              <div className="join-form-title">השאירו פרטים</div>

              <div className="form-row">
                <div className="field">
                  <label htmlFor="f-name">שם מלא</label>
                  <input id="f-name" name="f-name" type="text" placeholder="השם שלכם" required />
                </div>
                <div className="field">
                  <label htmlFor="f-phone">טלפון</label>
                  <input id="f-phone" name="f-phone" type="tel" placeholder="050-0000000" required />
                </div>
              </div>

              <div className="field field-full">
                <label htmlFor="f-msg">פרטים נוספים (אופציונלי)</label>
                <textarea id="f-msg" name="message" placeholder="ספרו לנו בקצרה על הפרויקט, כתובת המבנה, גובה משוער וכו'" />
              </div>

              <div className="form-actions">
                <span className="form-note">
                  <ShieldIcon />
                  הפרטים שלכם שמורים ולא יועברו לאף גורם
                </span>
                <button type="submit" className="form-submit">
                  שליחת פרטים
                  <ArrowIcon />
                </button>
              </div>

              {success && (
                <div className="form-success show">
                  ✓ תודה! הפרטים נשלחו בהצלחה — נחזור אליכם בהקדם.
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
