import { Link } from 'react-router-dom'

export default function TagPill({ tag, active, onClick, asLink }) {
  if (asLink) {
    return (
      <Link to={`/?tag=${tag}`} className={`tag ${active ? 'active' : ''}`}>
        {tag}
      </Link>
    )
  }
  return (
    <button
      onClick={onClick}
      className={`tag ${active ? 'active' : ''}`}
    >
      {tag}
    </button>
  )
}
