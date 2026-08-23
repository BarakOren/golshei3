import { Helmet } from 'react-helmet-async'

export default function SEO({ title, description, path = '' }) {
  const siteName = 'גולשי המתכת'
  const baseUrl = 'https://www.golshei-hamatehet.co.il'
  const fullTitle = title ? `${title} | ${siteName}` : `${siteName} — מומחים לעבודה בגובה וסנפלינג`
  const fullUrl = `${baseUrl}${path}`

  return (
    <Helmet>
      <html lang="he" dir="rtl" />
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="robots" content="index, follow" />
      <link rel="canonical" href={fullUrl} />

      {/* Open Graph — שיתוף בוואטסאפ ופייסבוק */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={fullUrl} />
      <meta property="og:type" content="website" />
      <meta property="og:locale" content="he_IL" />
      <meta property="og:site_name" content={siteName} />

      {/* Schema Markup — עסק מקומי */}
      <script type="application/ld+json">{`
        {
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          "name": "גולשי המתכת",
          "description": "מומחים לעבודה בגובה וסנפלינג — שיפוצים, תיקונים, צביעה ואיטום בגוש דן",
          "url": "${baseUrl}",
          "telephone": "+972542692087",
          "areaServed": ["תל אביב", "רמת גן", "בני ברק", "גבעתיים", "חולון", "בת ים", "ראשון לציון", "פתח תקווה", "הרצליה"],
          "address": {
            "@type": "PostalAddress",
            "addressCountry": "IL",
            "addressRegion": "גוש דן"
          },
          "openingHours": "Mo-Fr 08:00-18:00",
          "priceRange": "$$"
        }
      `}</script>
    </Helmet>
  )
}