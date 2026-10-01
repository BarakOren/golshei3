// Single source of truth for URLs and business facts used in <head> and JSON-LD.
export const SITE = {
  url: 'https://www.metalsurfers.co.il',
  name: 'גולשי המתכת',
  alternateName: 'Metal Surfers',
  defaultTitle: 'עבודות גובה וסנפלינג בגוש דן | גולשי המתכת',
  ogImage: '/assets/hero-worker.jpg',
  logo: '/assets/surfers-logo-white.png',
  phones: [
    { name: 'עופר', tel: '+972542692087' },
    { name: 'להב', tel: '+972546912113' },
  ],
  areaServed: ['תל אביב', 'רמת גן', 'בני ברק', 'גבעתיים', 'חולון', 'בת ים', 'ראשון לציון', 'פתח תקווה', 'הרצליה'],
}

export const absUrl = (path = '/') => new URL(path, SITE.url).href
