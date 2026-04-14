import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Menu, Moon, Sun, Search, Globe } from 'lucide-react'
import { useTheme } from '../../utils/ThemeContext.jsx'
import { useLanguage } from '../../utils/LanguageContext.jsx'
import SearchModal from '../wiki/SearchModal.jsx'
import { useReadingProgress } from '../../hooks/useReadingProgress.js'

export default function Header({ onMenuClick }) {
  const { dark, toggle } = useTheme()
  const { lang, setLang, t } = useLanguage()
  const [searchOpen, setSearchOpen] = useState(false)
  const progress = useReadingProgress()

  return (
    <>
      {/* Reading progress bar */}
      <div
        className="reading-progress"
        style={{ width: `${progress}%` }}
      />

      <header
        style={{
          height: 'var(--header-height)',
          background: 'var(--white)',
          borderBottom: '1px solid var(--gray-200)',
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 60,
          display: 'flex',
          alignItems: 'center',
          paddingLeft: '1.25rem',
          paddingRight: '1.25rem',
          gap: '1rem',
        }}
      >
        {/* Menu toggle (mobile) */}
        <button
          onClick={onMenuClick}
          className="lg:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
          style={{ color: 'var(--gray-600)' }}
          aria-label="Toggle menu"
        >
          <Menu size={20} />
        </button>

        {/* Logo */}
        <Link
          to="/"
          style={{
            fontFamily: 'Instrument Sans, sans-serif',
            fontWeight: 700,
            fontSize: '0.9rem',
            textTransform: 'uppercase',
            letterSpacing: '-0.02em',
            color: 'var(--gray-900)',
            textDecoration: 'none',
            flexShrink: 0,
          }}
        >
          numa<span style={{ color: 'var(--orange)' }}>wiki</span>
        </Link>

        {/* Spacer */}
        <div style={{ flex: 1 }} />

        {/* Search trigger */}
        <button
          onClick={() => setSearchOpen(true)}
          className="flex items-center gap-2 px-3 py-1.5 rounded-lg border transition-colors"
          style={{
            borderColor: 'var(--gray-200)',
            color: 'var(--gray-400)',
            background: 'var(--gray-50)',
            fontFamily: 'DM Sans, sans-serif',
            fontSize: '0.8rem',
          }}
        >
          <Search size={14} />
          <span className="hidden sm:block">{t.nav.search}</span>
          <kbd
            className="hidden sm:block text-xs"
            style={{
              fontFamily: 'Space Mono, monospace',
              fontSize: '0.6rem',
              background: 'var(--gray-200)',
              color: 'var(--gray-500)',
              padding: '0.1rem 0.35rem',
              borderRadius: '4px',
            }}
          >
            ⌘K
          </kbd>
        </button>

        {/* Language toggle */}
        <button
          onClick={() => setLang(l => l === 'en' ? 'pt' : 'en')}
          className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg hover:bg-gray-100 transition-colors"
          style={{
            color: 'var(--gray-500)',
            fontFamily: 'Space Mono, monospace',
            fontSize: '0.7rem',
            textTransform: 'uppercase',
          }}
          title={t.nav.language}
        >
          <Globe size={14} />
          {lang.toUpperCase()}
        </button>

        {/* Theme toggle */}
        <button
          onClick={toggle}
          className="p-2 rounded-lg hover:bg-gray-100 transition-colors"
          style={{ color: 'var(--gray-500)' }}
          title={dark ? t.nav.lightMode : t.nav.darkMode}
        >
          {dark ? <Sun size={16} /> : <Moon size={16} />}
        </button>
      </header>

      {/* Search modal */}
      <SearchModal isOpen={searchOpen} onClose={() => setSearchOpen(false)} />
    </>
  )
}
