import { useState, useEffect } from 'react'
import { useLanguage } from '../../utils/LanguageContext.jsx'

function extractHeadings(markdown) {
  const lines = markdown.split('\n')
  const headings = []
  lines.forEach(line => {
    const h2 = line.match(/^## (.+)/)
    const h3 = line.match(/^### (.+)/)
    if (h2) {
      const text = h2[1].trim()
      headings.push({ level: 2, text, id: slugify(text) })
    } else if (h3) {
      const text = h3[1].trim()
      headings.push({ level: 3, text, id: slugify(text) })
    }
  })
  return headings
}

function slugify(text) {
  return text.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '')
}

export default function TableOfContents({ content }) {
  const { t } = useLanguage()
  const [active, setActive] = useState('')
  const headings = extractHeadings(content || '')

  useEffect(() => {
    if (!headings.length) return
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) setActive(entry.target.id)
        })
      },
      { rootMargin: '-80px 0px -70% 0px' }
    )
    headings.forEach(h => {
      const el = document.getElementById(h.id)
      if (el) observer.observe(el)
    })
    return () => observer.disconnect()
  }, [content])

  if (!headings.length) return null

  return (
    <nav>
      <p style={{
        fontFamily: 'Space Mono, monospace',
        fontSize: '0.6rem',
        textTransform: 'uppercase',
        letterSpacing: '0.12em',
        color: 'var(--gray-400)',
        marginBottom: '0.75rem',
      }}>
        {t.nav.tableOfContents}
      </p>
      <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
        {headings.map(h => (
          <li key={h.id} style={{ marginBottom: '0.25rem' }}>
            <a
              href={`#${h.id}`}
              style={{
                display: 'block',
                fontFamily: 'DM Sans, sans-serif',
                fontSize: h.level === 2 ? '0.8rem' : '0.75rem',
                color: active === h.id ? 'var(--orange)' : 'var(--gray-500)',
                textDecoration: 'none',
                paddingLeft: h.level === 3 ? '1rem' : '0.5rem',
                paddingTop: '0.2rem',
                paddingBottom: '0.2rem',
                borderLeft: active === h.id ? '2px solid var(--orange)' : '2px solid transparent',
                transition: 'all 0.2s',
                lineHeight: 1.4,
              }}
            >
              {h.text}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  )
}
