import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { cityList, cityPath, cityTitle, regions } from '../data/cityIndex'
import { hasCityContent } from '../data/cityContent'
import { localServices } from '../data/localServices'
import { useReveal } from '../hooks/useReveal'
import Contact from '../components/Contact/Contact'
import SEO from '../components/SEO'
import { areasPageSchema } from '../schema'
import { AREAS } from '../site'
import '../components/Services/Services.css'
import '../components/ServiceDetail/ServiceDetail.css'
import './ServicesPage.css'
import './CityPage.css'

const PinIcon = () => (
  <svg className="pin" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
    <circle cx="12" cy="10" r="3"/>
  </svg>
)
const ArrowIcon = () => (
  <svg className="arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round">
    <path d="M19 12H5M12 19l-7-7 7-7"/>
  </svg>
)
const SearchIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <circle cx="11" cy="11" r="7"/>
    <path d="M20 20l-3.5-3.5"/>
  </svg>
)
const CheckIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round">
    <path d="M20 6L9 17l-5-5"/>
  </svg>
)

// Forgiving city search: ignores spaces, hyphens and quote marks, treats יי/וו as י/ו
// (קרית = קריית, פתח תקוה = פתח תקווה), and also matches the English URL name (tel aviv).
const normalize = (s) => s.toLowerCase().replace(/[\s\-־'"׳״]/g, '').replace(/יי/g, 'י').replace(/וו/g, 'ו')
const cityMatches = (city, q) => !q || normalize(city.name).includes(q) || normalize(city.id).includes(q)

// Scrolls to the contact form at the bottom of the page without adding #contact to the address.
function toContact(e) {
  const form = document.getElementById('contact')
  if (!form) return
  e.preventDefault()
  form.scrollIntoView({ behavior: 'smooth' })
  form.querySelector('input')?.focus({ preventScroll: true })
}

export default function AreasPage() {
  useReveal()
  const navigate = useNavigate()
  const [query, setQuery] = useState('')
  const q = normalize(query)

  // Only cities whose text exists get a card (and a route and sitemap entry, in entry-server.jsx).
  const listed = cityList.filter((c) => hasCityContent(c.id))
  const groups = regions
    .map((r) => ({ ...r, cities: listed.filter((c) => c.region === r.id) }))
    .filter((g) => g.cities.length)
  const found = listed.filter((c) => cityMatches(c, q))

  return (
    <>
      <SEO
        title="עבודות גובה בישראל"
        description={`עבודות גובה וסנפלינג ב-${listed.length} ערים, מתל אביב-יפו ורמת גן ועד אשדוד, נתניה ואריאל: שיקום חזיתות ובטון, חיזוק אריחים והסרת צו מבנה מסוכן.`}
        path={AREAS}
        jsonLd={areasPageSchema(listed)}
      />
      <section className="block services services-page areas-page">
        <div className="container">
          <div className="section-head reveal">
            <span className="section-eyebrow">אזורי שירות</span>
            <h1 className="section-title">עבודות גובה בישראל</h1>
            <p className="section-sub">בחרו עיר וקראו מה מאפיין את הבניינים בה, אילו עבודות נפוצות שם ואיך לבחור חברה שתבצע אותן נכון.</p>
            <div className="areas-search" role="search">
              <SearchIcon />
              <input
                type="search"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                onKeyDown={(e) => { if (e.key === 'Enter' && q && found.length === 1) navigate(cityPath(found[0].id)) }}
                placeholder="חפשו את העיר שלכם"
                aria-label="חיפוש עיר"
                aria-describedby="areas-search-status"
              />
            </div>
            <p id="areas-search-status" className="areas-search-status" aria-live="polite">
              {q && found.length === 0 && <>לא מצאת? לא נורא, <a href="#contact" onClick={toContact}>צור קשר!</a></>}
              {q && found.length > 0 && <span className="visually-hidden">{found.length === 1 ? 'נמצאה עיר אחת' : `נמצאו ${found.length} ערים`}</span>}
            </p>
          </div>

          <div className="areas-intro reveal" hidden={Boolean(q)}>
            <p>כל עיר מציבה לבניינים שלה אתגרים אחרים. בערי החוף, אוויר הים מחליד את הברזל שבתוך הבטון ומפורר מרפסות. בערים הוותיקות, אריחים וטיח שהותקנו לפני עשרות שנים מתרופפים ומתקלפים. ובשכונות החדשות, מגדלים עם חזיתות זכוכית וחיפוי צריכים תחזוקה קבועה.</p>
            <p>בגולשי המתכת אנחנו מבצעים עבודות גובה בגישה בחבלים (סנפלינג), בלי להקים פיגום סביב הבניין. בעמוד של כל עיר ריכזנו את מה שמאפיין אותה, את העבודות הנפוצות בה ואת השאלות שכדאי לשאול לפני שבוחרים חברה.</p>
          </div>

          {/* Search hides groups and cards instead of removing them: useReveal only watches what was there on the first render. */}
          {groups.map((g) => (
            <div className="services-group" key={g.id} hidden={!g.cities.some((c) => cityMatches(c, q))}>
              <div className="services-group-head reveal">
                <h2>{g.title}</h2>
              </div>
              <ul className="areas-grid">
                {g.cities.map((c) => (
                  <li key={c.id} hidden={!cityMatches(c, q)}>
                    <Link className="area-card reveal" to={cityPath(c.id)}>
                      <PinIcon />
                      <span>{cityTitle(c)}</span>
                      <ArrowIcon />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div className="services-group areas-services">
            <div className="services-group-head reveal">
              <h2>מה כוללות עבודות הגובה שלנו</h2>
              <p>אלה העבודות שאנחנו מבצעים בכל הערים, כולן בסנפלינג:</p>
            </div>
            <ul className="sd-list reveal">
              {localServices.map((s) => (
                <li key={s.key}>
                  <CheckIcon />
                  <span><b>{s.to ? <Link to={s.to}>{s.name}</Link> : s.name}:</b> {s.text}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
      <Contact />
    </>
  )
}
