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
  // Analytics IDs are public (they show in every page's code). src/analytics.js loads them only
  // on the live domain, so local builds, staging and Vercel previews never send data.
  analytics: { ga4: 'G-VG2MCXYF7N', mixpanel: '9742f40ef0befb6e977d81a5ee4f8709' },
}

// The legal pages and the city hub (with its city pages under it) use Hebrew URLs.
export const LEGAL = { privacy: '/מדיניות-פרטיות', accessibility: '/הצהרת-נגישות' }
export const AREAS = '/עבודות-בגובה-אזורי-שירות'

export const absUrl = (path = '/') => new URL(path, SITE.url).href
