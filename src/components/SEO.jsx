import { Helmet } from 'react-helmet-async'
import { SITE, absUrl } from '../site'

export default function SEO({ title, description, path = '/', image = SITE.ogImage, noindex = false, jsonLd }) {
  const fullTitle = !title ? SITE.defaultTitle : title.includes(SITE.name) ? title : `${title} | ${SITE.name}`
  const url = absUrl(path)

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="robots" content={noindex ? 'noindex, follow' : 'index, follow'} />
      {!noindex && <link rel="canonical" href={url} />}

      {/* Open Graph: שיתוף בוואטסאפ ופייסבוק */}
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content={SITE.name} />
      <meta property="og:locale" content="he_IL" />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={absUrl(image)} />
      <meta name="twitter:card" content="summary_large_image" />

      {jsonLd && <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>}
    </Helmet>
  )
}
