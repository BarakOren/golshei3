import './Reviews.css'

const StarIcon = () => (
  <svg viewBox="0 0 24 24">
    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
  </svg>
)

const Stars = () => (
  <div className="stars">
    {[...Array(5)].map((_, i) => <StarIcon key={i} />)}
  </div>
)


const reviews = [
  {
    text: 'עופר מאוד מקצועי! אני עובד איתו בשוטף בהרבה פרויקטים והוא נותן אחלה שירות.',
    initials: 'נ.נ',
    name: 'ניסים נחום',
    meta: 'איטום באמצעות סנפלינג · בת ים',
  },
  {
    text: 'עופר הוא מלך! הוא בחור אמין, עומד בזמנים והניסיון ניכר עליו. מקצוען אמיתי. הכול עשר!',
    initials: 'י.ג',
    name: 'יובל גבעון',
    meta: 'חיזוק אריחים באמצעות סנפלינג · תל אביב',
  },
  {
    text: 'אנשי החברה הוכיחו מקצועיות גבוהה, אמינות ועמידה בלוחות זמנים, תוך ביצוע עבודות גובה מורכבות בסנפלינג ברמה הגבוהה ביותר. העבודה מתבצעת בקפדנות, בניקיון ותוך הקפדה מלאה על כללי הבטיחות. אנו ממליצים על גולשי המתכת לכל גוף המחפש שיפוצים ועבודות גובה אמין ומקצועי.',
    initials: 'י.ל',
    name: 'יריב לוי',
    meta: 'מנכ"ל הומיז — ניהול ואחזקת מבנים',
  },
]

export default function Reviews() {
  return (
    <section className="block reviews" id="reviews">
      <div className="container">
        <div className="section-head reveal">
          <span className="section-eyebrow">לקוחות מספרים</span>
          <h2 className="section-title">המלצות שמדברות בעד עצמן</h2>
        </div>

        <div className="reviews-grid">
          {reviews.map((r) => (
            <article className="review-card reveal" key={r.name}>
              <span className="quote-mark">"</span>
              <Stars />
              <p className="review-text">{r.text}</p>
              <div className="reviewer">
                <div className="reviewer-avatar">{r.initials}</div>
                <div className="reviewer-info">
                  <span className="reviewer-name">{r.name}</span>
                  <span className="reviewer-meta">{r.meta}</span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
