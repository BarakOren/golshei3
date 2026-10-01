import SEO from '../SEO'
import './TextPage.css'

// Plain text pages (privacy policy, accessibility statement): a title, the last-updated date, then the text.
export default function TextPage({ title, description, path, updated, children }) {
  return (
    <>
      <SEO title={title} description={description} path={path} />
      <section className="block text-page">
        <div className="container">
          <article className="text-page-body">
            <h1>{title}</h1>
            <p className="text-page-updated">עודכן לאחרונה: {updated}</p>
            {children}
          </article>
        </div>
      </section>
    </>
  )
}

// A detail only the owners can supply. It shows as a highlighted [להשלמה: …] until it's filled in.
export function Fill({ children }) {
  return <mark className="text-page-fill">[להשלמה: {children}]</mark>
}
