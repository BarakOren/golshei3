import { useEffect, useState } from 'react'
import { flushSync } from 'react-dom'
import { Link } from 'react-router-dom'
import { cityById, cityPath, cityTitle, inCity } from '../data/cityIndex'
import { getCityContent, hasCityContent, loadCityContent } from '../data/cityContent'
import { localServices, localServiceByKey } from '../data/localServices'
import { services } from '../data/services'
import { useReveal } from '../hooks/useReveal'
import Contact from '../components/Contact/Contact'
import NotFound from '../components/NotFound/NotFound'
import SEO from '../components/SEO'
import { cityPageSchema } from '../schema'
import { AREAS } from '../site'
import '../components/ServiceDetail/ServiceDetail.css'
import './CityPage.css'

const CheckIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round">
    <path d="M20 6L9 17l-5-5"/>
  </svg>
)
const ArrowIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
    <path d="M5 12h14M12 19l7-7-7-7"/>
  </svg>
)
const PhoneIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.37 1.9.72 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.35 1.85.59 2.81.72A2 2 0 0 1 22 16.92z"/>
  </svg>
)
const ChevronIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
    <path d="M6 9l6 6 6-6"/>
  </svg>
)
const PinIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
    <circle cx="12" cy="10" r="3"/>
  </svg>
)

const serviceById = Object.fromEntries(services.map((s) => [s.id, s]))

// The page's sections in order. The headings are fixed here; each city file supplies the text.
const sectionsFor = (inName) => [
  { id: 'need', title: `הצורך בעבודות בגובה ${inName}` },
  { id: 'challenges', title: `אתגרים בעבודה בגובה ${inName}` },
  { id: 'innovation', title: `הזדמנויות וחדשנות ${inName}` },
  { id: 'impact', title: 'השפעה על העיר' },
  { id: 'includes', title: `מה כוללות עבודות גובה ${inName}?` },
  { id: 'why-pro', title: `למה חשוב לבחור חברה מקצועית לעבודות גובה ${inName}?` },
  { id: 'how-to-choose', title: `איך לבחור חברה מתאימה לעבודות גובה ${inName}?` },
  { id: 'common', title: `אילו עבודות בגובה נפוצות ${inName}?` },
  { id: 'dont-delay', title: 'למה חשוב לא לדחות טיפול?' },
]

const paragraphs = (items) => items.map((p, i) => <p key={i}>{p}</p>)
const serviceName = (s) => (s.to ? <Link to={s.to}>{s.name}</Link> : s.name)
const serviceItem = (s, text) => (
  <li key={s.key}>
    <CheckIcon />
    <span><b>{serviceName(s)}:</b> {text}</span>
  </li>
)

const sectionBody = {
  need: (c) => paragraphs(c.need),
  challenges: (c) => paragraphs(c.challenges),
  innovation: (c) => paragraphs(c.innovation),
  impact: (c) => paragraphs(c.impact),
  includes: (c) => (
    <>
      <p>{c.includes}</p>
      <ul className="sd-list">{localServices.map((s) => serviceItem(s, s.text))}</ul>
    </>
  ),
  'why-pro': (c) => paragraphs(c.whyPro),
  'how-to-choose': (c) => (
    <>
      <p>{c.howToChoose.intro}</p>
      <ol className="sd-steps">
        {c.howToChoose.points.map(([title, text]) => (
          <li key={title}><b>{title}</b> {text}</li>
        ))}
      </ol>
      {c.howToChoose.outro && <p>{c.howToChoose.outro}</p>}
    </>
  ),
  common: (c) => (
    <>
      <p>{c.common.intro}</p>
      <ul className="sd-list">{c.common.items.map((item) => serviceItem(localServiceByKey[item.service], item.text))}</ul>
    </>
  ),
  'dont-delay': (c) => paragraphs(c.dontDelay),
}

// Table of contents: always open on desktop, collapsed behind a toggle on phones. Links keep their
// #id for crawlers, but clicks scroll without adding it to the address bar.
function Toc({ sections }) {
  const [open, setOpen] = useState(false)
  const jump = (e, id) => {
    const el = document.getElementById(id)
    if (!el) return
    e.preventDefault()
    flushSync(() => setOpen(false)) // close the phone list first, so the scroll target is measured without it
    el.scrollIntoView({ behavior: 'smooth' })
  }
  return (
    <nav className="city-toc" aria-label="תוכן עניינים">
      <p className="city-toc-title">תוכן עניינים</p>
      <button type="button" className="city-toc-toggle" aria-expanded={open} aria-controls="city-toc-list" onClick={() => setOpen(!open)}>
        תוכן עניינים
        <ChevronIcon />
      </button>
      <ol id="city-toc-list" className={open ? 'is-open' : undefined}>
        {sections.map((s) => (
          <li key={s.id}><a href={`#${s.id}`} onClick={(e) => jump(e, s.id)}>{s.title}</a></li>
        ))}
      </ol>
    </nav>
  )
}

// Each city has its own route (App.jsx), which passes the city's id.
export default function CityPage({ id }) {
  const city = cityById[id]
  const exists = Boolean(city) && hasCityContent(id)
  const content = exists ? getCityContent(id) : undefined
  const [, setLoads] = useState(0)
  const [failedId, setFailedId] = useState(null)

  useReveal()

  // Only client-side navigation gets here without the text: load it, then render again.
  // If the load fails, a deploy has most likely replaced the file this tab knows about, so
  // reload the page once to pick up the new files; after that, show a link instead.
  useEffect(() => {
    if (!exists || content) return
    const key = `city-reload:${id}`
    loadCityContent(id)
      .then(() => {
        try { sessionStorage.removeItem(key) } catch { /* no storage */ }
        setLoads((n) => n + 1)
      })
      .catch(() => {
        let reloaded = true
        try {
          reloaded = sessionStorage.getItem(key) === '1'
          sessionStorage.setItem(key, '1')
        } catch { /* no storage: don't risk a reload loop */ }
        if (reloaded) setFailedId(id)
        else window.location.reload()
      })
  }, [id, exists, content])

  if (!exists) return <NotFound />

  const inName = inCity(city)
  const sections = sectionsFor(inName)
  const photo = serviceById[city.photo]
  const nearby = city.nearby.map((n) => cityById[n]).filter((c) => c && hasCityContent(c.id))

  return (
    <>
      <SEO
        title={cityTitle(city)}
        description={content?.seoDescription ?? `עבודות גובה ${inName} בסנפלינג, בלי פיגומים. גולשי המתכת.`}
        path={cityPath(id)}
        image={`/og/services/${city.photo}.jpg`}
        jsonLd={content && cityPageSchema(city, content)}
      />
      <section className="block service-detail city-page">
        <div className="container">
          <Link to={AREAS} className="sd-back">
            <ArrowIcon />
            לכל הערים
          </Link>

          <div className="sd-grid">
            <div className="sd-body">
              <span className="section-eyebrow">עבודות גובה בישראל</span>
              <h1 className="sd-title">{cityTitle(city)}</h1>

              {content ? (
                <>
                  {content.intro.map((p, i) => <p className="sd-lead" key={i}>{p}</p>)}
                  <Toc sections={sections} />
                  {sections.map((s) => (
                    <section id={s.id} key={s.id}>
                      <h2>{s.title}</h2>
                      {sectionBody[s.id](content)}
                    </section>
                  ))}
                  <div className="sd-inline-cta">
                    <div className="t">
                      צריכים עבודות גובה {inName}? <span>דברו איתנו</span> עוד היום.
                    </div>
                    <a href="tel:+972542692087" className="btn btn-primary">
                      <PhoneIcon />
                      054-269-2087
                    </a>
                  </div>
                </>
              ) : failedId === id ? (
                <p className="sd-lead city-loading">
                  לא הצלחנו לטעון את העמוד. <a href={cityPath(id)}>נסו שוב</a>
                </p>
              ) : (
                <p className="sd-lead city-loading">טוען את העמוד…</p>
              )}
            </div>

            <div className="sd-media">
              {photo && (
                <img
                  src={`${import.meta.env.BASE_URL}${photo.image.replace(/^\.?\//, '')}`}
                  alt={photo.title}
                  className="sd-photo"
                />
              )}
            </div>
          </div>

          {nearby.length > 0 && (
            <nav className="city-nearby" aria-label="ערים סמוכות">
              <h2>עבודות גובה בערים סמוכות</h2>
              <ul>
                {nearby.map((c) => (
                  <li key={c.id}>
                    <Link to={cityPath(c.id)}>
                      <PinIcon />
                      {cityTitle(c)}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          )}
        </div>
      </section>
      <Contact />
    </>
  )
}
