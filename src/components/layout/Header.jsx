import { useState, useEffect } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { Menu, Moon, Sun, Search, Globe } from 'lucide-react'
import { useTheme } from '../../utils/ThemeContext.jsx'
import { useLanguage } from '../../utils/LanguageContext.jsx'
import SearchModal from '../wiki/SearchModal.jsx'
import { useReadingProgress } from '../../hooks/useReadingProgress.js'
import { logoSrc } from '../../utils/sectionMeta.js'

export default function Header({ onMenuClick }) {
  const { dark, toggle } = useTheme()
  const { lang, setLang, t } = useLanguage()
  const [searchOpen, setSearchOpen] = useState(false)
  const progress = useReadingProgress()

  useEffect(() => {
    const handler = (e) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault()
        setSearchOpen(true)
      }
    }
    document.addEventListener('keydown', handler)
    return () => document.removeEventListener('keydown', handler)
  }, [])

  return (
    <>
      <div className="reading-progress" style={{ width: `${progress}%` }} />

      <header style={{
        height: 'var(--header-height)',
        background: 'var(--white)',
        borderBottom: 'var(--line)',
        position: 'fixed',
        top: 0, left: 0, right: 0,
        zIndex: 60,
        display: 'flex',
        alignItems: 'center',
        paddingLeft: '1rem',
        paddingRight: '1rem',
        gap: '0.6rem',
      }}>
        <button onClick={onMenuClick} className="lg:hidden icon-btn" aria-label="Menu">
          <Menu size={17} />
        </button>

        <Link to="/" aria-label="numawiki" style={{
          display: 'flex',
          alignItems: 'center',
          gap: '0.5rem',
          textDecoration: 'none',
          flexShrink: 0,
        }}>
          <span aria-hidden="true" style={{
            display: 'block',
            width: '66px',
            height: '22px',
            background: 'var(--ink)',
            WebkitMask: `url(${logoSrc}) center / contain no-repeat`,
            mask: `url(${logoSrc}) center / contain no-repeat`,
          }} />
          <span className="chip chip--orange" style={{ transform: 'rotate(-4deg)' }}>wiki</span>
        </Link>

        <nav className="hidden md:flex" style={{ alignItems: 'center', gap: '0.25rem', marginLeft: '1rem' }}>
          <NavLink to="/" end className={({ isActive }) => `top-link${isActive ? ' active' : ''}`}>
            {lang === 'pt' ? 'Índice' : 'Index'}
          </NavLink>
          <NavLink to="/wiki/about" className={({ isActive }) => `top-link${isActive ? ' active' : ''}`}>
            {lang === 'pt' ? 'Sobre' : 'About'}
          </NavLink>
          <a href="https://numadessas.com.br" target="_blank" rel="noopener noreferrer" className="top-link">
            numadessas ↗
          </a>
        </nav>

        <div style={{ flex: 1 }} />

        <button
          onClick={() => setSearchOpen(true)}
          className="icon-btn"
          style={{ paddingLeft: '0.8rem', paddingRight: '0.5rem', gap: '0.6rem' }}
          aria-label={t.nav.search}
        >
          <Search size={14} />
          <span className="hidden sm:block" style={{ fontFamily: 'DM Sans, sans-serif', textTransform: 'none', fontWeight: 400, fontSize: '0.8rem', minWidth: '90px', textAlign: 'left' }}>
            {t.nav.search}
          </span>
          <kbd className="hidden sm:block" style={{
            fontFamily: 'Space Mono, monospace',
            fontSize: '0.6rem',
            background: 'var(--ink)',
            color: 'var(--white)',
            padding: '0.1rem 0.4rem',
            borderRadius: '999px',
          }}>⌘K</kbd>
        </button>

        <button onClick={() => setLang(l => l === 'en' ? 'pt' : 'en')} className="icon-btn" aria-label={t.nav.language}>
          <Globe size={14} />
          {lang.toUpperCase()}
        </button>

        <button onClick={toggle} className="icon-btn" aria-label={dark ? t.nav.lightMode : t.nav.darkMode}>
          {dark ? <Sun size={15} /> : <Moon size={15} />}
        </button>
      </header>

      <SearchModal isOpen={searchOpen} onClose={() => setSearchOpen(false)} />
    </>
  )
}
