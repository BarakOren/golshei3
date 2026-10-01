// The services every city page lists under "מה כוללות עבודות גובה ב...?". City files refer to
// them by `key`. `to` is the service's own page; הוספת מרפסות has none yet.
export const localServices = [
  {
    key: 'danger',
    name: 'הסרת צו מבנה מסוכן',
    to: '/services/danger-notice',
    text: 'תיקון החלקים המסוכנים בחזית, ריכוז המסמכים וליווי מול הרשות עד שהצו מוסר.',
  },
  {
    key: 'facades',
    name: 'שיקום חזיתות',
    to: '/services/building-renovation',
    text: 'תיקון סדקים, טיח וחיפויים, ניקוי וחידוש של חזית שלמה בלי להקים פיגום.',
  },
  {
    key: 'painting',
    name: 'צביעה בסנפלינג',
    to: '/services/plaster-paint',
    text: 'הכנת הקיר, שפכטל וצבע חוץ עמיד, בכל קומה ובכל גובה.',
  },
  {
    key: 'concrete',
    name: 'שיקומי בטון',
    to: '/services/concrete-restoration',
    text: 'טיפול בבטון מתפורר ובברזל זיון חלוד במרפסות, בקורות, בעמודים ובמעקות.',
  },
  {
    key: 'balconies',
    name: 'הוספת מרפסות',
    to: null,
    text: 'תוספת מרפסות לבניין קיים, לפי תוכנית מהנדס והיתר בנייה.',
  },
  {
    key: 'tiles',
    name: 'חיזוקי אריחים בסנפלינג',
    to: '/services/tile-replacement',
    text: 'איתור אריחים רופפים בחזית, חיזוק והחלפה לפני שהם נופלים.',
  },
  {
    key: 'curtain',
    name: 'התקנה וטיפול בקירות מסך בגובה',
    to: '/services/glass-replacement',
    text: 'התקנה, החלפת זכוכיות ואיטום של קירות מסך מזכוכית ואלומיניום.',
  },
  {
    key: 'buildings',
    name: 'שיקום מבנים',
    to: '/services/building-renovation',
    text: 'שיקום מקיף של מעטפת הבניין: בטון, איטום, חזית וצבע, בפרויקט אחד.',
  },
]

export const localServiceByKey = Object.fromEntries(localServices.map((s) => [s.key, s]))
