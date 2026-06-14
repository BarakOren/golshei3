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
    text: 'פניתי לגולשי המתכת לאיטום חזית הבניין ולא ידעתי מה לצפות. מההתחלה הרגשתי שמתייחסים אליי ברצינות. הסבירו לי מה הולך לקרות, הגיעו בזמן שסיכמנו ועבדו בצורה נקייה ומסודרת. בסוף העבודה המחיר היה בדיוק כמו שדיברנו מראש, בלי הפתעות. ממליצה בחום לכל מי שמחפש אנשי מקצוע שאפשר לסמוך עליהם.',
    initials: 'מ.ל',
    name: 'מיכל לוי',
    meta: 'ועד בית · רמת גן',
  },
  {
    text: 'עברנו תקופה לא פשוטה עם צו מבנה מסוכן שתלה מעלינו חודשים ארוכים. לא ידענו לאן לפנות ומה בכלל אפשר לעשות. פנינו לעופר והצוות שלו וכבר בשיחה הראשונה הרגשנו שמישהו באמת מבין את הבעיה ורוצה לעזור. תוך שבועיים האבנים חוזקו, החזית טופלה והצו ירד. לא רק עבודה מקצועית אלא גם שקט נפשי אמיתי.',
    initials: 'י.כ',
    name: 'יוסי כהן',
    meta: 'מנהל נכסים · תל אביב',
  },
  {
    text: 'סבלנו מנזילה שאף אחד לא הצליח לאתר במשך שנה שלמה. כבר התייאשנו. הצוות של גולשי המתכת הגיע, ישב איתנו, הקשיב, ותוך שעה אבחן את המקור. יומיים אחר כך הכל היה פתור. מה שהכי רשם אותי זה לא רק המקצועיות אלא היחס. אנשים נעימים, תקשורת פתוחה לאורך כל הדרך, והכל נקי ומסודר בסיום. שווה כל שקל.',
    initials: 'ש.פ',
    name: 'שירה פרץ',
    meta: 'בעלת דירה · גבעתיים',
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
