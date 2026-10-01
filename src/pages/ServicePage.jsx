import { useParams, Navigate } from 'react-router-dom'
import { services } from '../data/services'
import { useReveal } from '../hooks/useReveal'
import ServiceDetail from '../components/ServiceDetail/ServiceDetail'
import Contact from '../components/Contact/Contact'
import SEO from '../components/SEO'

export default function ServicePage() {
  const { id } = useParams()
  const service = services.find((s) => s.id === id)

  useReveal()

  if (!service) return <Navigate to="/" replace />

  return (
    <>
    <SEO
      title={service.seoTitle}
      description={service.seoDescription}
      path={`/services/${service.id}`}
      image={service.image.replace(/^\.?\//, '/')}
    />
      <ServiceDetail service={service} />
      <Contact />
    </>
  )
}
