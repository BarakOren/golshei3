import { faqNumber } from '../../data/faq'
import './FaqList.css'

const ChevronIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M6 9l6 6 6-6"/>
  </svg>
)

// `items` are [question, answer] pairs. Each answer sits in a <details>, so it is in the page
// but collapsed until opened. `anchored` (the FAQ page) gives each question its #q<number> id,
// which the schema's Question @ids point to.
export default function FaqList({ items, anchored = false }) {
  return (
    <div className="faq-list">
      {items.map((item) => (
        <details key={item[0]} id={anchored ? `q${faqNumber(item)}` : undefined} className="faq-item">
          <summary>
            <h3>{item[0]}</h3>
            <ChevronIcon />
          </summary>
          <p>{item[1]}</p>
        </details>
      ))}
    </div>
  )
}
