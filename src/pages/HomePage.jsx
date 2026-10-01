import { useReveal } from '../hooks/useReveal'
import Hero from '../components/Hero/Hero'
import Services from '../components/Services/Services'
import WhyUs from '../components/WhyUs/WhyUs'
import Reviews from '../components/Reviews/Reviews'
import JoinUs from '../components/JoinUs/JoinUs'
import About from '../components/About/About'
import Contact from '../components/Contact/Contact'
import GallerySlider from "../components/SliderGallery/SilderGallery"
import SEO from '../components/SEO'
import { services } from '../data/services'
import { businessSchema } from '../schema'

export default function HomePage() {
  useReveal()

  return (
    <>
    <SEO
  description="גולשי המתכת: מומחים לעבודה בגובה וסנפלינג בגוש דן. שיפוצים, תיקונים, צביעה ואיטום חזיתות בניינים. התקשרו עכשיו!"
  path="/"
  jsonLd={businessSchema(services)}
/>
      <Hero />
      <Services />
      <WhyUs />
      <GallerySlider />
      <Reviews />
      <JoinUs />
      <About />
      <Contact />
    </>
  )
}
