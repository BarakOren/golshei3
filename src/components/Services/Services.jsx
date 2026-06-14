import { Link } from 'react-router-dom'
import { services } from '../../data/services'
import './Services.css'

const ArrowIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round">
    <path d="M19 12H5M12 19l-7-7 7-7"/>
  </svg>
)

export default function Services() {
  return (
    <section className="block services" id="services">
      <div className="container">
        <div className="section-head reveal">
          <span className="section-eyebrow">השירותים שלנו</span>
          <h2 className="section-title">פתרון מקיף לכל עבודה בגובה</h2>
          <p className="section-sub">צוות מוסמך, ציוד מתקדם, וניסיון של שנים בעבודות הכי מורכבות במבנים גבוהים</p>
        </div>

        <div className="services-grid">
          {services.map((s) => (
            <Link className="service-card reveal" to={`/service/${s.id}`} key={s.id}>
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
    </section>
  )
}
