import { useParams } from 'react-router-dom'
import { services } from '../data/services'
import { useReveal } from '../hooks/useReveal'
import ServiceDetail from '../components/ServiceDetail/ServiceDetail'
import Contact from '../components/Contact/Contact'
import NotFound from '../components/NotFound/NotFound'
import SEO from '../components/SEO'
import { servicePageSchema } from '../schema'

export default function ServicePage() {
  const { id } = useParams()
  const service = services.find((s) => s.id === id)

  useReveal()

  // An unknown service id shows the 404 page (noindex) rather than redirecting home,
  // which search engines would treat as a soft 404.
  if (!service) return <NotFound />

  return (
    <>
    <SEO
      title={service.seoTitle}
      description={service.seoDescription}
      path={`/services/${service.id}`}
      image={service.image.replace(/^\.?\//, '/')}
      jsonLd={servicePageSchema(service)}
    />
      <ServiceDetail service={service} />
      <Contact />
    </>
  )
}
