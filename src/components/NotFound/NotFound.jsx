import { Link } from 'react-router-dom'
import './NotFound.css'

export default function NotFound() {
  return (
    <div className="notfound">
      <div className="notfound-inner">
        <div className="notfound-code">404</div>
        <div className="notfound-divider" />
        <h1 className="notfound-title">הדף לא נמצא</h1>
        <p className="notfound-desc">
          נראה שהדף שחיפשתם לא קיים או הוזז למקום אחר.
        </p>
        <Link to="/" className="notfound-btn">
          חזרה לדף הבית
        </Link>
      </div>
    </div>
  )
}