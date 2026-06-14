import { useEffect } from 'react'
import { useReveal } from '../hooks/useReveal'
import Hero from '../components/Hero/Hero'
import Services from '../components/Services/Services'
import WhyUs from '../components/WhyUs/WhyUs'
import Reviews from '../components/Reviews/Reviews'
import JoinUs from '../components/JoinUs/JoinUs'
import About from '../components/About/About'
import Contact from '../components/Contact/Contact'

export default function HomePage() {
  useReveal()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <>
      <Hero />
      <Services />
      <WhyUs />
      <Reviews />
      <JoinUs />
      <About />
      <Contact />
    </>
  )
}
