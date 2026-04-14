import { NavLink, Link } from 'react-router-dom'
import { useLanguage } from '../../utils/LanguageContext.jsx'
import { wikiSections } from '../../content/en/wiki.js'
import { X } from 'lucide-react'

const sectionIcons = {
  introduction: '◎',
  glossary: '≋',
  'internet-generations': '⊕',
  blockchain: '⬡',
  security: '◈',
  nfts: '◆',
  communities: '⬭',
  platforms: '▣',
  communication: '◉',
  marketing: '▲',
  references: '◦',
}

export default function Sidebar({ isOpen, onClose }) {
  const { t } = useLanguage()

  return (
    <>
      {/* Mobile overlay */}
      {isOpen && (
        <div
          className="sidebar-overlay lg:hidden"
          onClick={onClose}
        />
      )}

      {/* Sidebar */}
      <aside
        style={{
          width: 'var(--sidebar-width)',
          background: 'var(--gray-50)',
          borderRight: '1px solid var(--gray-200)',
          position: 'fixed',
          top: 'var(--header-height)',
          left: 0,
          bottom: 0,
          overflowY: 'auto',
          zIndex: 50,
          transform: isOpen ? 'translateX(0)' : 'translateX(-100%)',
          transition: 'transform 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
        }}
        className="lg:translate-x-0"
      >
        {/* Mobile close button */}
        <button
          onClick={onClose}
          className="lg:hidden absolute top-4 right-4 p-1.5 rounded-lg hover:bg-gray-200 transition-colors"
          style={{ color: 'var(--gray-500)' }}
        >
          <X size={18} />
        </button>

        <nav className="p-6">
          {/* Home link */}
          <Link
            to="/"
            className="flex items-center gap-2 mb-8 group"
            onClick={onClose}
          >
            <span
              style={{
                fontFamily: 'Space Mono, monospace',
                fontSize: '0.65rem',
                textTransform: 'uppercase',
                letterSpacing: '0.12em',
                color: 'var(--gray-400)',
              }}
              className="group-hover:text-orange-500 transition-colors"
            >
              ← {t.nav.home}
            </span>
          </Link>

          {/* Label */}
          <p
            style={{
              fontFamily: 'Space Mono, monospace',
              fontSize: '0.6rem',
              textTransform: 'uppercase',
              letterSpacing: '0.15em',
              color: 'var(--gray-400)',
              marginBottom: '0.75rem',
            }}
          >
            Wiki
          </p>

          {/* Navigation links */}
          <ul className="space-y-0.5">
            {wikiSections.map((section) => (
              <li key={section.id}>
                <NavLink
                  to={`/wiki/${section.slug}`}
                  onClick={onClose}
                  className={({ isActive }) =>
                    `flex items-center gap-3 px-3 py-2.5 rounded-lg transition-all duration-200 group ${
                      isActive ? 'nav-link-active' : ''
                    }`
                  }
                  style={({ isActive }) => ({
                    color: isActive ? 'var(--orange)' : 'var(--gray-600)',
                  })}
                >
                  {({ isActive }) => (
                    <>
                      <span
                        style={{
                          fontSize: '0.85rem',
                          opacity: isActive ? 1 : 0.5,
                          transition: 'opacity 0.2s',
                          flexShrink: 0,
                        }}
                        className="group-hover:opacity-100"
                      >
                        {sectionIcons[section.id] || '◦'}
                      </span>
                      <span
                        style={{
                          fontFamily: 'DM Sans, sans-serif',
                          fontSize: '0.875rem',
                          fontWeight: isActive ? '600' : '400',
                        }}
                      >
                        {t.sections[section.id] || section.title}
                      </span>
                    </>
                  )}
                </NavLink>
              </li>
            ))}
          </ul>

          {/* Divider */}
          <div
            style={{
              height: '1px',
              background: 'var(--gray-200)',
              margin: '2rem 0 1.5rem',
            }}
          />

          {/* Footer info */}
          <div>
            <p
              style={{
                fontFamily: 'Space Mono, monospace',
                fontSize: '0.6rem',
                textTransform: 'uppercase',
                letterSpacing: '0.1em',
                color: 'var(--gray-400)',
                lineHeight: 1.8,
              }}
            >
              numawiki
              <br />
              Computadores Fazem Arte
              <br />
              v2.0 — 2026
              <br />
              <a
                href="https://numadessas.com.br"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: 'var(--orange)', textDecoration: 'underline' }}
              >
                numadessas.com.br
              </a>
            </p>
          </div>
        </nav>
      </aside>
    </>
  )
}
