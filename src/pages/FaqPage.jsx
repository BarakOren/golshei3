import { faqParts } from '../data/faq'
import { useReveal } from '../hooks/useReveal'
import Contact from '../components/Contact/Contact'
import SEO from '../components/SEO'
import { faqPageSchema } from '../schema'
import { FAQ } from '../site'
import { toContact } from '../toContact'
import '../components/ServiceDetail/ServiceDetail.css'
import './FaqPage.css'

const TITLE = 'שאלות נפוצות'
const DESCRIPTION = 'תשובות לשאלות הנפוצות על שיקום מבנים, עבודות בגובה וסנפלינג: הצעות מחיר, ביטוחים והסמכות, שיטות גישה, ניקוי חלונות, ציורי קיר ועבודה בבתים פרטיים.'

const ChevronIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M6 9l6 6 6-6"/>
  </svg>
)

// The FAQ, one heading per part. Each answer sits in a <details>, so it is in the page (and in
// the FAQPage schema) but collapsed until opened.
export default function FaqPage() {
  useReveal()
  return (
    <>
      <SEO title="שאלות נפוצות על שיקום מבנים ועבודות בגובה" description={DESCRIPTION} path={FAQ} jsonLd={faqPageSchema({ path: FAQ, name: TITLE, description: DESCRIPTION, parts: faqParts })} />
      <section className="block service-detail faq-page">
        <div className="container">
          <div className="sd-body faq-body">
            <span className="section-eyebrow">גולשי המתכת · שיקום מבנים, עבודות בגובה וסנפלינג</span>
            <h1 className="sd-title">{TITLE}</h1>
            <p className="sd-lead">
              ריכזנו כאן את השאלות שאנחנו נשאלים הכי הרבה, על ההתקשרות ועל העבודה עצמה.
              לא מצאתם תשובה? <a href="#contact" onClick={toContact}>נשמח שתפנו אלינו</a>.
            </p>

            {faqParts.map((part) => (
              <section key={part.title} className="faq-part">
                <h2>{part.title}</h2>
                <div className="faq-list">
                  {part.items.map(([q, a]) => (
                    <details key={q} className="faq-item">
                      <summary>
                        <h3>{q}</h3>
                        <ChevronIcon />
                      </summary>
                      <p>{a}</p>
                    </details>
                  ))}
                </div>
              </section>
            ))}
          </div>
        </div>
      </section>
      <Contact />
    </>
  )
}
