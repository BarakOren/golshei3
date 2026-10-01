// Single source of truth for URLs and business facts used in <head> and JSON-LD.
export const SITE = {
  url: 'https://www.metalsurfers.co.il',
  name: 'גולשי המתכת',
  alternateName: 'Metal Surfers',
  defaultTitle: 'עבודות גובה וסנפלינג בגוש דן | גולשי המתכת',
  ogImage: '/og/og-home.jpg', // 1200×630 share image (WhatsApp, Facebook)
  logo: '/assets/logo-square.png', // 512×512, readable on white (Google's logo rule)
  phones: [
    { name: 'עופר', tel: '+972542692087' },
    { name: 'להב', tel: '+972546912113' },
  ],
  areaServed: ['תל אביב', 'רמת גן', 'בני ברק', 'גבעתיים', 'חולון', 'בת ים', 'ראשון לציון', 'פתח תקווה', 'הרצליה'],
}

// The legal pages and the city hub (with its city pages under it) use Hebrew URLs.
export const LEGAL = { privacy: '/מדיניות-פרטיות', accessibility: '/הצהרת-נגישות' }
export const AREAS = '/עבודות-בגובה-איזורי-שירות'
export const cityPath = (id) => `${AREAS}/${id}`

export const absUrl = (path = '/') => new URL(path, SITE.url).href
