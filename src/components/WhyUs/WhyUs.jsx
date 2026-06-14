import './WhyUs.css'

const items = [
  { img: '/assets/icon-man.png', alt: 'עובד מוסמך', label: 'צוות מוסמך ומנוסה' },
  { img: '/assets/icon-helmet.png', alt: 'קסדת מגן', label: 'ציוד מתקדם ובטיחותי' },
  { img: '/assets/icon-shekel.png', alt: 'שקל — שקיפות מחירים', label: 'מחירים הוגנים ושקיפות מלאה' },
  { img: '/assets/icon-clock.png', alt: 'שעון — זמינות', label: 'זמינות גבוהה בכל גוש דן' },
]

export default function WhyUs() {
  return (
    <section className="block why" id="why">
      <div className="container">
        <div className="section-head reveal">
          <h2 className="section-title">למה לבחור בנו</h2>
          <p className="section-sub">הסיבות שמאות לקוחות עבדו איתנו</p>
        </div>

        <div className="why-grid">
          {items.map((item) => (
            <div className="why-item reveal" key={item.label}>
              <img className="why-icon-img" src={item.img} alt={item.alt} />
              <div className="why-pill">{item.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
