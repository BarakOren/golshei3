// The owners' price list (מחירון גולשי המתכת, updated 2026, valid until 1.1.2027). Prices are in ₪ per
// unit, before VAT. Each service page shows the lines in `servicePrices`; each city page shows them all.
export const PRICES_VALID_THROUGH = '2027-01-01'

export const priceGroups = [
  {
    title: 'שיקום ושיפוץ מעטפת',
    items: [
      { key: 'concrete', name: 'שיקום בטון', unit: 'מ״ר', min: 250, max: 650 },
      { key: 'concrete-rope', name: 'שיקום בטון מורכב בסנפלינג', unit: 'מ״ר', min: 400, max: 1200 },
      { key: 'stone', name: 'חיזוק אריחי אבן / שיש', unit: 'מ״ר', min: 130, max: 350 },
    ],
  },
  {
    title: 'איטום',
    items: [
      { key: 'facade-sealing', name: 'איטום חזיתות', unit: 'מ״ר', min: 150, max: 300 },
      { key: 'curtain-sealing', name: 'איטום קירות מסך', unit: 'מ״ר', min: 180, max: 350 },
    ],
  },
  {
    title: 'צביעה וניקוי',
    items: [
      { key: 'paint', name: 'צביעה חיצונית', unit: 'מ״ר', min: 35, max: 120 },
      { key: 'facade-cleaning', name: 'ניקוי חזיתות', unit: 'מ״ר', min: 60, max: 120 },
      { key: 'washing', name: 'שטיפות מבנים', unit: 'מ״ר', min: 15, max: 45 },
    ],
  },
  {
    title: 'חיפויים (כולל התקנה)',
    items: [
      { key: 'hpl', name: 'חיפוי HPL', unit: 'מ״ר', min: 650, max: 1400 },
      { key: 'alucobond', name: 'חיפוי אלומיניום / אלוקובונד', unit: 'מ״ר', min: 750, max: 1600 },
      { key: 'louvers', name: 'רפפות אלומיניום', unit: 'מ״ר', min: 900, max: 2500 },
    ],
  },
  {
    title: 'קירות מסך וזכוכית',
    items: [
      { key: 'curtain', name: 'קירות מסך', unit: 'מ״ר', min: 1800, max: 4500 },
      { key: 'glass', name: 'החלפת זכוכית חזית', unit: 'מ״ר', min: 800, max: 2500 },
    ],
  },
  {
    title: 'קונסטרוקציה',
    items: [
      { key: 'alu-frame', name: 'קונסטרוקציית אלומיניום', unit: 'מ״ר', min: 350, max: 900 },
      { key: 'steel', name: 'קונסטרוקציית פלדה קלה', unit: 'מ״ר', min: 450, max: 1200 },
    ],
  },
  {
    title: 'שירותי סנפלינג',
    items: [
      { key: 'rope-day', name: 'עבודות סנפלינג כלליות', unit: 'יום צוות', min: 2500, max: 5000 },
    ],
  },
]

export const priceItems = priceGroups.flatMap((g) => g.items)
const priceByKey = Object.fromEntries(priceItems.map((i) => [i.key, i]))

// The price list's own clarifications, shown under every table.
export const priceNotes = [
  'כל המחירים בש״ח, לפני מע״מ.',
  'הטווח משתנה לפי היקף העבודה, מורכבותה, הגובה והנגישות של אתר העבודה.',
  'לכל פרויקט נוציא הצעת מחיר מותאמת אחרי ביקור בשטח, ובה ייקבעו ההיקף המדויק והמחיר הסופי.',
  'המחירון תקף לעבודות בהיקף קבלני. לעבודות חד-פעמיות או נקודתיות עשוי לחול תמחור שונה.',
  'המחירון אינו כולל פיגומים מיוחדים, סגירת רחובות, אישורי משטרה ותיאומים מול רשויות, אלא אם צוין אחרת.',
  'המחירון מעודכן לשנת 2026 ובתוקף עד 1.1.2027.',
]

// The price lines that belong to each service page (services.jsx ids).
const servicePriceKeys = {
  'danger-notice': ['concrete', 'concrete-rope', 'stone', 'rope-day'],
  'building-renovation': ['concrete', 'facade-sealing', 'paint', 'facade-cleaning', 'washing'],
  'stone-fixing': ['stone', 'rope-day'],
  'stone-replacement': ['stone', 'facade-cleaning'],
  'glass-replacement': ['glass', 'curtain', 'curtain-sealing'],
  'aluminum-work': ['alu-frame', 'alucobond', 'louvers'],
  'leak-detection': ['facade-sealing', 'curtain-sealing'],
  'roof-wall-sealing': ['facade-sealing'],
  'spot-sealing': ['facade-sealing', 'curtain-sealing'],
  'plaster-paint': ['paint'],
  'wall-painting-height': ['paint', 'rope-day'],
  'window-cleaning': ['washing', 'facade-cleaning', 'rope-day'],
  'paint-and-signage': ['paint', 'alu-frame', 'steel'],
  'concrete-restoration': ['concrete', 'concrete-rope'],
  'hpl-cladding': ['hpl', 'alucobond', 'louvers', 'alu-frame', 'steel'],
  'tile-replacement': ['stone', 'concrete'],
  waterproofing: ['facade-sealing', 'curtain-sealing'],
  'pigeon-nets': ['rope-day'],
}

export const servicePrices = (id) => (servicePriceKeys[id] ?? []).map((k) => priceByKey[k])
