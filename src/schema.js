import { SITE, absUrl } from './site'

const BUSINESS_ID = absUrl('/#business')
const cities = () => SITE.areaServed.map((name) => ({ '@type': 'City', name }))
const breadcrumbs = (trail) => ({
  '@type': 'BreadcrumbList',
  itemListElement: trail.map(([name, path], i) => ({ '@type': 'ListItem', position: i + 1, name, item: absUrl(path) })),
})

// Homepage: the business itself. Hours, email, street address and sameAs profile links stay
// out until the owners confirm them (content workbook, "Owner inputs").
export function businessSchema(services) {
  return {
    '@context': 'https://schema.org',
    '@type': 'HomeAndConstructionBusiness',
    '@id': BUSINESS_ID,
    name: SITE.name,
    alternateName: SITE.alternateName,
    url: absUrl('/'),
    logo: absUrl(SITE.logo),
    image: absUrl(SITE.ogImage),
    telephone: SITE.phones[0].tel,
    foundingDate: '2019',
    founder: SITE.phones.map((p) => ({ '@type': 'Person', name: p.name })),
    contactPoint: SITE.phones.map((p) => ({
      '@type': 'ContactPoint', name: p.name, telephone: p.tel,
      contactType: 'customer service', availableLanguage: 'he',
    })),
    address: { '@type': 'PostalAddress', addressRegion: 'גוש דן', addressCountry: 'IL' },
    areaServed: cities(),
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'עבודות גובה וסנפלינג',
      itemListElement: services.map((s) => ({
        '@type': 'Offer',
        itemOffered: { '@type': 'Service', name: s.title, url: absUrl(`/services/${s.id}`) },
      })),
    },
  }
}

// /services: the list of services, in page order, and the page's place in the site.
export function servicesPageSchema(services) {
  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'ItemList',
        name: 'שירותי עבודות גובה וסנפלינג',
        itemListElement: services.map((s, i) => ({
          '@type': 'ListItem', position: i + 1, name: s.title, url: absUrl(`/services/${s.id}`),
        })),
      },
      breadcrumbs([['דף הבית', '/'], ['שירותים', '/services']]),
    ],
  }
}

// /services/<id>: the service, its breadcrumb and, once a page has FAQs, its FAQPage.
export function servicePageSchema(service) {
  const path = `/services/${service.id}`
  const url = absUrl(path)
  const graph = [
    {
      '@type': 'Service',
      '@id': `${url}#service`,
      name: service.title,
      serviceType: service.title,
      description: service.seoDescription,
      url,
      image: absUrl(service.image.replace(/^\.?\//, '/')),
      areaServed: cities(),
      provider: { '@type': 'HomeAndConstructionBusiness', '@id': BUSINESS_ID, name: SITE.name, url: absUrl('/'), telephone: SITE.phones[0].tel },
    },
    breadcrumbs([['דף הבית', '/'], ['שירותים', '/services'], [service.title, path]]),
  ]
  if (service.faqs?.length) {
    graph.push({
      '@type': 'FAQPage',
      mainEntity: service.faqs.map((f) => ({
        '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a },
      })),
    })
  }
  return { '@context': 'https://schema.org', '@graph': graph }
}
