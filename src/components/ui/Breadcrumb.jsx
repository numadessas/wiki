import { Link } from 'react-router-dom'
import { ChevronRight } from 'lucide-react'

export default function Breadcrumb({ items }) {
  return (
    <nav
      aria-label="Breadcrumb"
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: '0.35rem',
        marginBottom: '2rem',
        flexWrap: 'wrap',
      }}
    >
      {items.map((item, i) => (
        <span
          key={i}
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.35rem',
          }}
        >
          {i > 0 && (
            <ChevronRight
              size={12}
              style={{ color: 'var(--gray-300)', flexShrink: 0 }}
            />
          )}
          {item.href ? (
            <Link
              to={item.href}
              style={{
                fontFamily: 'Space Mono, monospace',
                fontSize: '0.65rem',
                textTransform: 'uppercase',
                letterSpacing: '0.08em',
                color: 'var(--gray-400)',
                textDecoration: 'none',
              }}
              className="hover:text-orange-500 transition-colors"
            >
              {item.label}
            </Link>
          ) : (
            <span
              style={{
                fontFamily: 'Space Mono, monospace',
                fontSize: '0.65rem',
                textTransform: 'uppercase',
                letterSpacing: '0.08em',
                color: 'var(--gray-600)',
              }}
            >
              {item.label}
            </span>
          )}
        </span>
      ))}
    </nav>
  )
}
