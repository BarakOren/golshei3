import { useReveal } from '../../hooks/useReveal'
import SEO from '../SEO'
import Contact from '../Contact/Contact'

// The 404 page: no dead end, just the contact section with its own intro as the page's H1.
export default function NotFound() {
  useReveal()

  return (
    <>
      <SEO title="הדף לא נמצא" description="הדף שחיפשתם לא קיים או הוזז למקום אחר." noindex />
      <Contact variant="blue" leadAs="h1" lead="לא מצאת את מה שאתה מחפש?" />
    </>
  )
}
