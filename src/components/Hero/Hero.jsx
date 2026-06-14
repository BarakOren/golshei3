import './Hero.css'

const CheckIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round">
    <path d="M20 6L9 17l-5-5"/>
  </svg>
)
const PhoneIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.37 1.9.72 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.35 1.85.59 2.81.72A2 2 0 0 1 22 16.92z"/>
  </svg>
)
const ArrowLIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M19 12H5M12 19l-7-7 7-7"/>
  </svg>
)
const ArrowDIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 5v14M19 12l-7 7-7-7"/>
  </svg>
)

const pills = ['בטיחות בלתי מתפשרת', 'איכות עליונה', 'תוצאות ללא פשרות', 'שקיפות מלאה']

export default function Hero() {
  return (
    <section className="hero">
      <video
        className="hero-media"
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        poster="/assets/hero-worker.jpg"
      >
        <source src="/assets/hero-video.mp4" type="video/mp4" />
      </video>
      <div className="hero-overlay" />

      <div className="hero-content">
        <div className="hero-eyebrow">
          <span className="dot" />
          זמינים לקריאות בכל גוש דן · 24/7
        </div>
        <h1>
          פתרון מקצועי<br />
          לכל <span className="accent-word">עבודה בגובה</span>
        </h1>

        <div className="hero-pills">
          {pills.map((p) => (
            <span className="hero-pill" key={p}>
              <CheckIcon />{p}
            </span>
          ))}
        </div>

        <p className="hero-sub">גולשי המתכת · בנייה ויזמות — מרימים כל פרויקט לגבהים חדשים</p>

        <div className="hero-cta">
          <a href="tel:+972542692087" className="btn btn-primary">
            <PhoneIcon />
            התקשרו עכשיו
          </a>
          <a href="#services" className="btn btn-ghost">
            השירותים שלנו
            <ArrowLIcon />
          </a>
        </div>
      </div>

      <div className="hero-scroll">
        גלילה
        <ArrowDIcon />
      </div>
    </section>
  )
}
