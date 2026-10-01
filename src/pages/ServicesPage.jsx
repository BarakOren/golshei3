import { Link } from 'react-router-dom'
import { services } from '../data/services'
import { serviceGroups } from '../data/serviceGroups'
import { useReveal } from '../hooks/useReveal'
import Contact from '../components/Contact/Contact'
import SEO from '../components/SEO'
import '../components/Services/Services.css'
import './ServicesPage.css'

const ArrowIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round">
    <path d="M19 12H5M12 19l-7-7 7-7"/>
  </svg>
)

const byId = Object.fromEntries(services.map((s) => [s.id, s]))
const grouped = new Set(serviceGroups.flatMap((g) => g.ids))
const others = services.filter((s) => !grouped.has(s.id))
const groups = [
  ...serviceGroups.map((g) => ({ ...g, items: g.ids.map((id) => byId[id]).filter(Boolean) })),
  ...(others.length ? [{ title: 'שירותים נוספים', intro: '', items: others }] : []),
]

export default function ServicesPage() {
  useReveal()

  return (
    <>
      <SEO
        title="שירותי עבודות גובה וסנפלינג"
        description="כל השירותים של גולשי המתכת במקום אחד: איטום, שיקום בטון וחזיתות, קיבוע שיש ואריחים, החלפת זכוכית, צביעה ורשתות ליונים. עבודה בסנפלינג, בלי פיגומים."
        path="/services"
      />
      <section className="block services services-page">
        <div className="container">
          <div className="section-head reveal">
            <span className="section-eyebrow">השירותים שלנו</span>
            <h1 className="section-title">שירותי עבודות גובה וסנפלינג</h1>
            <p className="section-sub">{services.length} שירותים שמבוצעים בגישה בחבלים (סנפלינג), בלי פיגומים, בכל גוש דן.</p>
          </div>

          {groups.map((g) => (
            <div className="services-group" key={g.title}>
              <div className="services-group-head reveal">
                <h2>{g.title}</h2>
                {g.intro && <p>{g.intro}</p>}
              </div>
              <div className="services-grid">
                {g.items.map((s) => (
                  <Link className="service-card reveal" to={`/services/${s.id}`} key={s.id}>
                    <div className="service-icon">{s.icon}</div>
                    <h3>{s.title}</h3>
                    <p>{s.shortDesc}</p>
                    <span className="sc-more">
                      לעמוד השירות
                      <ArrowIcon />
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
      <Contact />
    </>
  )
}
