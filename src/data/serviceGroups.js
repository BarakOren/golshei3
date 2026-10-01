// Categories for the /services page. Each id must exist in services.jsx;
// a service missing from every group is still listed, under "שירותים נוספים".
export const serviceGroups = [
  {
    title: 'בטיחות החזית וצו מבנה מסוכן',
    intro: 'חלקי חזית רופפים, אריחים ובטון סדוק מסכנים את העוברים ושבים. מטפלים בהם בגובה, ומלווים אתכם עד הסרת הצו.',
    ids: ['danger-notice', 'stone-fixing', 'tile-replacement', 'concrete-restoration'],
  },
  {
    title: 'איטום ורטיבות',
    intro: 'מאתרים את מקור הרטיבות ואוטמים גגות, קירות חוץ ונקודות בתוך הדירה.',
    ids: ['leak-detection', 'waterproofing', 'roof-wall-sealing', 'spot-sealing'],
  },
  {
    title: 'שיפוץ וחיפוי חזיתות',
    intro: 'חידוש חזיתות, החלפת אבני חיפוי והתקנת לוחות HPL, בלי להקים פיגום.',
    ids: ['building-renovation', 'stone-replacement', 'hpl-cladding'],
  },
  {
    title: 'צביעה, ציורי קיר ושילוט',
    intro: 'צביעת קירות פנים וחוץ, ציורי קיר על חזיתות גבוהות ושילוט לעסקים.',
    ids: ['plaster-paint', 'wall-painting-height', 'paint-and-signage'],
  },
  {
    title: 'חלונות, זכוכית ואלומיניום',
    intro: 'החלפת זכוכית ותיקון חלונות ותריסי אלומיניום, גם מבחוץ בקומות גבוהות.',
    ids: ['glass-replacement', 'aluminum-work'],
  },
  {
    title: 'ניקיון ותחזוקה בגובה',
    intro: 'ניקוי חלונות לבניינים ומגדלים, ורשתות שמרחיקות יונים ממרפסות וגגות.',
    ids: ['window-cleaning', 'pigeon-nets'],
  },
]
