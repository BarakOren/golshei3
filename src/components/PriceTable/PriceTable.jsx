import { priceGroups, priceNotes } from '../../data/prices'
import './PriceTable.css'

const shekels = (n) => n.toLocaleString('en-US')
// "250–650 ₪", kept left-to-right so the range reads low to high.
const range = ({ min, max }) => <bdi dir="ltr">{shekels(min)}–{shekels(max)} ₪</bdi>

const row = (item) => (
  <tr key={item.key}>
    <th scope="row">{item.name}</th>
    <td>{item.unit}</td>
    <td>{range(item)}</td>
  </tr>
)

// The price list as a table, followed by its clarifications. With `items`, only those lines
// (a service page); without, the whole list under its group headings (a city page).
export default function PriceTable({ items }) {
  return (
    <div className="price-list">
      <div className="price-table-wrap">
        <table className="price-table">
          <thead>
            <tr>
              <th scope="col">עבודה</th>
              <th scope="col">יחידה</th>
              <th scope="col">טווח מחיר</th>
            </tr>
          </thead>
          {items ? (
            <tbody>{items.map(row)}</tbody>
          ) : (
            priceGroups.map((g) => (
              <tbody key={g.title}>
                <tr className="price-group">
                  <th scope="rowgroup" colSpan={3}>{g.title}</th>
                </tr>
                {g.items.map(row)}
              </tbody>
            ))
          )}
        </table>
      </div>
      <ul className="price-notes">
        {priceNotes.map((n) => <li key={n}>{n}</li>)}
      </ul>
    </div>
  )
}
