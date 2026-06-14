import { Link } from 'react-router-dom'
import './ServiceDetail.css'

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
const BuildingIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
    <path d="M3 21h18M5 21V7l8-4 8 4v14M9 9h.01M9 13h.01M9 17h.01M15 9h.01M15 13h.01M15 17h.01"/>
  </svg>
)

export default function ServiceDetail({ service }) {
  return (
    <section className="block service-detail">
      <div className="container">
        <Link to="/#services" className="sd-back">
          <ArrowIcon />
          חזרה לכל השירותים
        </Link>

        <div className="sd-grid">
          <div className="sd-body reveal">
            <span className="section-eyebrow">השירותים שלנו</span>
            <h1 className="sd-title">{service.title}</h1>
            <p className="sd-lead">{service.lead}</p>

            {service.sections.map((sec) => (
              <div key={sec.heading}>
                <h2>{sec.heading}</h2>
                {sec.paragraphs.map((p, i) => <p key={i}>{p}</p>)}
              </div>
            ))}

            <h2>שלבי התהליך</h2>
            <ol className="sd-steps">
              {service.steps.map((step) => (
                <li key={step.title}>
                  <b>{step.title}.</b> {step.desc}
                </li>
              ))}
            </ol>

            <h2>למה לבחור בגולשי המתכת</h2>
            <ul className="sd-list">
              {service.benefits.map((b) => (
                <li key={b.bold}>
                  <CheckIcon />
                  <span><b>{b.bold}</b> {b.rest}</span>
                </li>
              ))}
            </ul>

            <div className="sd-inline-cta">
              <div className="t">
                {service.ctaText}{' '}
                {service.ctaAccent && <span>{service.ctaAccent}</span>}{' '}
                {service.ctaEnd}
              </div>
              <a href="tel:+972542692087" className="btn btn-primary">
                <PhoneIcon />
                054-269-2087
              </a>
            </div>
          </div>

          <div className="sd-media reveal">
            {service.image
              ? <img src={service.image} alt={service.title} className="sd-photo" />
              : <div className="sd-photo sd-photo--placeholder"><BuildingIcon /></div>
            }
          </div>
        </div>
      </div>
    </section>
  )
}
