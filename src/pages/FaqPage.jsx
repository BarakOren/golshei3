import { faqParts } from '../data/faq'
import { useReveal } from '../hooks/useReveal'
import Contact from '../components/Contact/Contact'
import FaqList from '../components/FaqList/FaqList'
import SEO from '../components/SEO'
import { faqPageSchema } from '../schema'
import { FAQ } from '../site'
import { toContact } from '../toContact'
import '../components/ServiceDetail/ServiceDetail.css'
import './FaqPage.css'

const TITLE = 'שאלות נפוצות'
const DESCRIPTION = 'תשובות לשאלות הנפוצות על שיקום מבנים, עבודות בגובה וסנפלינג: הצעות מחיר, ביטוחים והסמכות, שיטות גישה, ניקוי חלונות, ציורי קיר ועבודה בבתים פרטיים.'

// The FAQ, one heading per part. Each question is anchored (#q<number>) so the schema can give it
// one @id that the service pages reuse.
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
                <FaqList items={part.items} anchored />
              </section>
            ))}
          </div>
        </div>
      </section>
      <Contact />
    </>
  )
}
