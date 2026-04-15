import { NavLink, Link, useLocation } from 'react-router-dom'
import { useLanguage } from '../../utils/LanguageContext.jsx'
import { X } from 'lucide-react'

export default function Sidebar({ isOpen, onClose }) {
  const { lang } = useLanguage()
  const location = useLocation()

  return (
    <>
      {isOpen && (
        <div className="sidebar-overlay lg:hidden" onClick={onClose} />
      )}
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
        <button
          onClick={onClose}
          className="lg:hidden absolute top-4 right-4 p-1.5 rounded-lg hover:bg-gray-200 transition-colors"
          style={{ color: 'var(--gray-500)' }}
        >
          <X size={18} />
        </button>

        <nav className="p-6">
          <Link
            to="/"
            onClick={onClose}
            style={{
              fontFamily: 'Space Mono, monospace',
              fontSize: '0.65rem',
              textTransform: 'uppercase',
              letterSpacing: '0.12em',
              color: 'var(--gray-400)',
              textDecoration: 'none',
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem',
              marginBottom: '1.5rem',
            }}
          >
            ← {lang === 'pt' ? 'Início' : 'Home'}
          </Link>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.25rem' }}>
            <Link
              to="/"
              onClick={onClose}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.75rem',
                padding: '0.6rem 0.75rem',
                borderRadius: '8px',
                textDecoration: 'none',
                background: location.pathname === '/' ? 'rgba(238,111,34,0.1)' : 'transparent',
                color: location.pathname === '/' ? 'var(--orange)' : 'var(--gray-600)',
                transition: 'all 0.2s',
                fontFamily: 'DM Sans, sans-serif',
                fontSize: '0.875rem',
                fontWeight: location.pathname === '/' ? '600' : '400',
              }}
            >
              <span style={{ fontSize: '0.85rem', opacity: 0.7 }}>◈</span>
              Wiki
            </Link>

            <div style={{ height: '1px', background: 'var(--gray-200)', margin: '0.75rem 0' }} />

            <NavLink
              to="/wiki/about"
              onClick={onClose}
              style={({ isActive }) => ({
                display: 'flex',
                alignItems: 'center',
                gap: '0.75rem',
                padding: '0.6rem 0.75rem',
                borderRadius: '8px',
                textDecoration: 'none',
                background: isActive ? 'rgba(238,111,34,0.1)' : 'transparent',
                color: isActive ? 'var(--orange)' : 'var(--gray-600)',
                transition: 'all 0.2s',
                fontFamily: 'DM Sans, sans-serif',
                fontSize: '0.875rem',
                fontWeight: isActive ? '600' : '400',
              })}
            >
              <span style={{ fontSize: '0.85rem', opacity: 0.7 }}>✦</span>
              {lang === 'pt' ? 'Sobre o Projeto' : 'About the Project'}
            </NavLink>
          </div>

          <div style={{ height: '1px', background: 'var(--gray-200)', margin: '1.5rem 0' }} />

          <p style={{
            fontFamily: 'Space Mono, monospace',
            fontSize: '0.6rem',
            textTransform: 'uppercase',
            letterSpacing: '0.1em',
            color: 'var(--gray-400)',
            lineHeight: 1.8,
          }}>
            numawiki<br />
            Computadores Fazem Arte<br />
            v2.0 — 2026<br />
            <a href="https://numadessas.com.br" target="_blank" rel="noopener noreferrer"
              style={{ color: 'var(--orange)', textDecoration: 'underline' }}>
              numadessas.com.br
            </a>
          </p>
        </nav>
      </aside>
    </>
  )
}
