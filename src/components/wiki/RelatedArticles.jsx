import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { useLanguage } from '../../utils/LanguageContext.jsx'
import { getAllSectionsSync } from '../../utils/contentAdapter.js'
import { getSectionMeta } from '../../utils/sectionMeta.js'

export default function RelatedArticles({ sections }) {
  const { t, lang } = useLanguage()
  const all = getAllSectionsSync(lang)

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

      <div style={{ display: 'grid', gap: '0.6rem' }}>
        {sections.map(section => {
          const m = getSectionMeta(section.id, all.findIndex(s => s.id === section.id))
          return (
            <Link
              key={section.id}
              to={section.slug === 'about' ? '/wiki/about' : `/wiki/${section.slug}`}
              className="side-link"
              style={{ background: 'var(--card)', borderColor: 'var(--gray-300)', padding: '0.5rem' }}
            >
              <span className={`tint-${m.color}`} style={{ width: '38px', height: '38px', borderRadius: '8px', border: 'var(--line)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, overflow: 'hidden' }}>
                <img src={m.src} alt="" style={m.fit === 'cover' ? { width: '100%', height: '100%', objectFit: 'cover' } : { width: '70%', height: '70%', objectFit: 'contain' }} />
              </span>
              <span style={{ minWidth: 0, flex: 1 }}>
                <span className="side-link__code" style={{ display: 'block', width: 'auto' }}>{m.code}</span>
                <span style={{ fontFamily: 'Instrument Sans, sans-serif', fontWeight: 700, fontSize: '0.8rem', textTransform: 'uppercase', color: 'var(--ink)' }}>{section.title}</span>
              </span>
              <ArrowRight size={14} style={{ color: m.accent, flexShrink: 0 }} />
            </Link>
          )
        })}
      </div>
    </div>
  )
}
