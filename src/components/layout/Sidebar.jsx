import { NavLink, Link } from 'react-router-dom'
import { useLanguage } from '../../utils/LanguageContext.jsx'
import { getAllSectionsSync } from '../../utils/contentAdapter.js'
import { getSectionMeta, stickers } from '../../utils/sectionMeta.js'
import { X } from 'lucide-react'

export default function Sidebar({ isOpen, persistent, onClose }) {
  const { lang } = useLanguage()
  const sections = getAllSectionsSync(lang)

  return (
    <>
      {isOpen && (
        <div className={`sidebar-overlay${persistent ? ' lg:hidden' : ''}`} onClick={onClose} />
      )}
      <aside
        style={{
          width: 'var(--sidebar-width)',
          background: 'var(--gray-50)',
          borderRight: 'var(--line)',
          position: 'fixed',
          top: 'var(--header-height)',
          left: 0,
          bottom: 0,
          overflowY: 'auto',
          zIndex: 50,
        }}
        className={`sidebar${isOpen ? ' open' : ''}${persistent ? ' persist' : ''}`}
      >
        <button
          onClick={onClose}
          className={`${persistent ? 'lg:hidden ' : ''}icon-btn`}
          style={{ position: 'absolute', top: '0.9rem', right: '0.9rem' }}
          aria-label="Close"
        >
          <X size={16} />
        </button>

        <nav style={{ padding: '1.25rem 1rem 2rem' }}>
          <Link to="/" onClick={onClose} className="label" style={{
            color: 'var(--gray-500)',
            textDecoration: 'none',
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.5rem',
            marginBottom: '1.25rem',
            paddingLeft: '0.6rem',
          }}>
            ← {lang === 'pt' ? 'Índice' : 'Index'}
          </Link>

          <p className="label" style={{ color: 'var(--ink)', fontWeight: 700, padding: '0 0.6rem', marginBottom: '0.5rem' }}>
            {lang === 'pt' ? 'Verbetes' : 'Entries'} · {sections.length}
          </p>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.15rem' }}>
            {sections.map((s, i) => {
              const m = getSectionMeta(s.id, i)
              const to = s.slug === 'about' ? '/wiki/about' : `/wiki/${s.slug}`
              return (
                <NavLink
                  key={s.id}
                  to={to}
                  onClick={onClose}
                  className={({ isActive }) => `side-link${isActive ? ' active' : ''}`}
                >
                  <span className="side-link__code">{m.code}</span>
                  <span style={{ minWidth: 0 }}>{s.title}</span>
                  <span className="side-link__dot" style={{ background: m.accent }} />
                </NavLink>
              )
            })}
          </div>

          <div className="nw-card stripes" style={{
            marginTop: '2rem',
            padding: '1rem',
            position: 'relative',
            overflow: 'hidden',
            boxShadow: '3px 3px 0 var(--ink)',
          }}>
            <img src={stickers.busto} alt="" aria-hidden="true" style={{
              position: 'absolute', right: '-14px', bottom: '-6px', width: '86px',
            }} />
            <p className="label" style={{ fontSize: '0.58rem', color: 'var(--gray-600)', lineHeight: 1.8, maxWidth: '150px', position: 'relative' }}>
              numawiki<br />
              Computadores Fazem Arte<br />
              v3.0 — 2026<br />
              <a href="https://numadessas.com.br" target="_blank" rel="noopener noreferrer"
                style={{ color: 'var(--ink)', fontWeight: 700, textDecoration: 'underline', textDecorationColor: 'var(--orange)', textDecorationThickness: '2px' }}>
                numadessas.com.br
              </a>
            </p>
          </div>
        </nav>
      </aside>
    </>
  )
}
