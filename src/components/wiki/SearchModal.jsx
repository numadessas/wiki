import { useState, useEffect, useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import { Search, X, FileText, BookOpen } from 'lucide-react'
import { wikiSections } from '../../content/en/wiki.js'
import { useLanguage } from '../../utils/LanguageContext.jsx'

// Simple search — filter by title, description, tags
function searchContent(query) {
  if (!query.trim()) return []
  const q = query.toLowerCase()
  const results = []

  wikiSections.forEach(section => {
    const matchTitle = section.title.toLowerCase().includes(q)
    const matchDesc = section.description?.toLowerCase().includes(q)
    const matchTags = section.tags?.some(t => t.toLowerCase().includes(q))
    const matchContent = section.content?.toLowerCase().includes(q)

    if (matchTitle || matchDesc || matchTags || matchContent) {
      results.push({
        ...section,
        score: matchTitle ? 0 : matchDesc ? 1 : matchTags ? 2 : 3
      })
    }

    // Search glossary terms
    if (section.glossaryTerms) {
      section.glossaryTerms.forEach(term => {
        if (term.term.toLowerCase().includes(q) || term.definition.toLowerCase().includes(q)) {
          results.push({
            id: `term-${term.term}`,
            title: term.term,
            description: term.definition.substring(0, 100) + '...',
            slug: 'glossary',
            isGlossary: true,
            score: 0.5,
          })
        }
      })
    }
  })

  return results.sort((a, b) => a.score - b.score).slice(0, 8)
}

export default function SearchModal({ isOpen, onClose }) {
  const [query, setQuery] = useState('')
  const [results, setResults] = useState([])
  const [selected, setSelected] = useState(0)
  const inputRef = useRef(null)
  const navigate = useNavigate()
  const { t } = useLanguage()

  useEffect(() => {
    if (isOpen) {
      inputRef.current?.focus()
      setQuery('')
      setResults([])
      setSelected(0)
    }
  }, [isOpen])

  useEffect(() => {
    const handler = () => { if (!isOpen) onClose(); }
    document.addEventListener('open-search', handler)
    return () => document.removeEventListener('open-search', handler)
  }, [isOpen, onClose])

  useEffect(() => {
    setResults(searchContent(query))
    setSelected(0)
  }, [query])

  const handleKeyDown = (e) => {
    if (e.key === 'Escape') onClose()
    if (e.key === 'ArrowDown') setSelected(s => Math.min(s + 1, results.length - 1))
    if (e.key === 'ArrowUp') setSelected(s => Math.max(s - 1, 0))
    if (e.key === 'Enter' && results[selected]) {
      navigate(`/wiki/${results[selected].slug}`)
      onClose()
    }
  }

  if (!isOpen) return null

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 200,
        display: 'flex',
        alignItems: 'flex-start',
        justifyContent: 'center',
        paddingTop: '8vh',
      }}
    >
      {/* Backdrop */}
      <div
        onClick={onClose}
        style={{
          position: 'fixed',
          inset: 0,
          background: 'rgba(0,0,0,0.4)',
          backdropFilter: 'blur(8px)',
        }}
      />

      {/* Modal */}
      <div
        style={{
          position: 'relative',
          width: '100%',
          maxWidth: '580px',
          margin: '0 1rem',
          background: 'var(--white)',
          borderRadius: '16px',
          border: '1px solid var(--gray-200)',
          overflow: 'hidden',
          boxShadow: '0 24px 64px rgba(0,0,0,0.15)',
        }}
      >
        {/* Search input */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.75rem',
            padding: '1rem 1.25rem',
            borderBottom: results.length ? '1px solid var(--gray-200)' : 'none',
          }}
        >
          <Search size={18} style={{ color: 'var(--gray-400)', flexShrink: 0 }} />
          <input
            ref={inputRef}
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder={t.nav.search}
            style={{
              flex: 1,
              border: 'none',
              outline: 'none',
              background: 'transparent',
              fontFamily: 'DM Sans, sans-serif',
              fontSize: '1rem',
              color: 'var(--gray-900)',
            }}
          />
          <button onClick={onClose} style={{ color: 'var(--gray-400)' }}>
            <X size={16} />
          </button>
        </div>

        {/* Results */}
        {results.length > 0 && (
          <ul style={{ maxHeight: '420px', overflowY: 'auto' }}>
            {results.map((result, i) => (
              <li key={result.id}>
                <button
                  onClick={() => {
                    navigate(`/wiki/${result.slug}`)
                    onClose()
                  }}
                  style={{
                    width: '100%',
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: '0.75rem',
                    padding: '0.875rem 1.25rem',
                    background: i === selected ? 'var(--gray-50)' : 'transparent',
                    textAlign: 'left',
                    cursor: 'pointer',
                    borderBottom: '1px solid var(--gray-100)',
                    transition: 'background 0.15s',
                  }}
                >
                  <span style={{ marginTop: '0.15rem', color: result.isGlossary ? 'var(--purple)' : 'var(--orange)', flexShrink: 0 }}>
                    {result.isGlossary ? <BookOpen size={16} /> : <FileText size={16} />}
                  </span>
                  <div>
                    <p style={{
                      fontFamily: 'Instrument Sans, sans-serif',
                      fontWeight: 600,
                      fontSize: '0.9rem',
                      textTransform: 'uppercase',
                      color: 'var(--gray-900)',
                      marginBottom: '0.15rem',
                    }}>
                      {result.title}
                      {result.isGlossary && (
                        <span style={{
                          marginLeft: '0.5rem',
                          fontFamily: 'Space Mono, monospace',
                          fontSize: '0.6rem',
                          color: 'var(--purple)',
                          textTransform: 'uppercase',
                          border: '1px solid var(--purple)',
                          padding: '0.1rem 0.4rem',
                          borderRadius: '4px',
                          verticalAlign: 'middle',
                        }}>
                          Glossary
                        </span>
                      )}
                    </p>
                    <p style={{
                      fontFamily: 'DM Sans, sans-serif',
                      fontSize: '0.8rem',
                      color: 'var(--gray-500)',
                      lineHeight: 1.4,
                    }}>
                      {result.description?.substring(0, 80)}...
                    </p>
                  </div>
                </button>
              </li>
            ))}
          </ul>
        )}

        {/* Empty state */}
        {query && results.length === 0 && (
          <div style={{ padding: '2rem', textAlign: 'center', color: 'var(--gray-400)' }}>
            <p style={{ fontFamily: 'Space Mono, monospace', fontSize: '0.75rem' }}>
              No results for "{query}"
            </p>
          </div>
        )}

        {/* Footer hint */}
        {!query && (
          <div style={{ padding: '1rem 1.25rem' }}>
            <p style={{
              fontFamily: 'Space Mono, monospace',
              fontSize: '0.6rem',
              textTransform: 'uppercase',
              letterSpacing: '0.08em',
              color: 'var(--gray-400)',
            }}>
              Search sections, concepts, and glossary terms
            </p>
          </div>
        )}
      </div>
    </div>
  )
}
