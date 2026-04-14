import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { useLanguage } from '../../utils/LanguageContext.jsx'

const sectionColors = {
  introduction: 'var(--orange)',
  glossary: 'var(--purple)',
  'internet-generations': '#3b82f6',
  blockchain: 'var(--orange)',
  security: '#ef4444',
  nfts: 'var(--purple)',
  communities: 'var(--green)',
  platforms: '#0ea5e9',
  communication: 'var(--orange)',
  marketing: 'var(--purple)',
  references: 'var(--gray-400)',
}

export default function RelatedArticles({ sections }) {
  const { t } = useLanguage()

  if (!sections || sections.length === 0) return null

  return (
    <div style={{ marginTop: '3rem' }}>
      <p style={{
        fontFamily: 'Space Mono, monospace',
        fontSize: '0.6rem',
        textTransform: 'uppercase',
        letterSpacing: '0.12em',
        color: 'var(--gray-400)',
        marginBottom: '1rem',
      }}>
        {t.nav.related}
      </p>

      <div style={{ display: 'grid', gap: '0.75rem' }}>
        {sections.map(section => (
          <Link
            key={section.id}
            to={`/wiki/${section.slug}`}
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              gap: '1rem',
              padding: '0.875rem 1rem',
              borderRadius: '10px',
              border: '1px solid var(--gray-200)',
              textDecoration: 'none',
              background: 'var(--white)',
              transition: 'all 0.2s',
            }}
            className="hover:border-orange-400 group"
          >
            <div>
              <p style={{
                fontFamily: 'Instrument Sans, sans-serif',
                fontWeight: 600,
                fontSize: '0.85rem',
                textTransform: 'uppercase',
                color: 'var(--gray-900)',
                marginBottom: '0.15rem',
              }}>
                {section.title}
              </p>
              <p style={{
                fontFamily: 'DM Sans, sans-serif',
                fontSize: '0.75rem',
                color: 'var(--gray-400)',
                lineHeight: 1.4,
              }}>
                {section.description}
              </p>
            </div>
            <ArrowRight
              size={14}
              style={{
                color: sectionColors[section.id] || 'var(--orange)',
                flexShrink: 0,
                transition: 'transform 0.2s',
              }}
              className="group-hover:translate-x-1"
            />
          </Link>
        ))}
      </div>
    </div>
  )
}
