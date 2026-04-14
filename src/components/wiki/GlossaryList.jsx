import { useState } from 'react'
import { ChevronDown, Copy, Check } from 'lucide-react'
import { useLanguage } from '../../utils/LanguageContext.jsx'

function GlossaryItem({ term, definition }) {
  const [open, setOpen] = useState(false)
  const [copied, setCopied] = useState(false)
  const { t } = useLanguage()

  const handleCopy = (e) => {
    e.stopPropagation()
    navigator.clipboard.writeText(`${term}: ${definition}`)
    setCopied(true)
    setTimeout(() => setCopied(false), 1500)
  }

  return (
    <div
      style={{
        border: '1px solid var(--gray-200)',
        borderRadius: '10px',
        overflow: 'hidden',
        marginBottom: '0.5rem',
        transition: 'border-color 0.2s',
        borderColor: open ? 'var(--orange)' : 'var(--gray-200)',
      }}
    >
      <button
        onClick={() => setOpen(o => !o)}
        style={{
          width: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '1rem',
          padding: '0.875rem 1rem',
          background: open ? 'rgba(238,111,34,0.04)' : 'var(--white)',
          cursor: 'pointer',
          textAlign: 'left',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', flex: 1 }}>
          <span style={{
            fontFamily: 'Space Mono, monospace',
            fontSize: '0.7rem',
            color: 'var(--orange)',
            opacity: open ? 1 : 0.5,
            transition: 'opacity 0.2s',
          }}>
            {open ? '▼' : '▶'}
          </span>
          <span style={{
            fontFamily: 'Instrument Sans, sans-serif',
            fontWeight: 600,
            fontSize: '0.95rem',
            textTransform: 'uppercase',
            letterSpacing: '-0.01em',
            color: 'var(--gray-900)',
          }}>
            {term}
          </span>
        </div>

        <button
          onClick={handleCopy}
          title={t.nav.copyDefinition}
          style={{
            padding: '0.25rem',
            color: copied ? 'var(--green)' : 'var(--gray-300)',
            flexShrink: 0,
            transition: 'color 0.2s',
          }}
        >
          {copied ? <Check size={14} /> : <Copy size={14} />}
        </button>
      </button>

      {open && (
        <div style={{
          padding: '0 1rem 1rem 2.5rem',
          fontFamily: 'DM Sans, sans-serif',
          fontSize: '0.9rem',
          color: 'var(--gray-600)',
          lineHeight: 1.7,
          borderTop: '1px solid var(--gray-100)',
          paddingTop: '0.75rem',
        }}>
          {definition}
        </div>
      )}
    </div>
  )
}

export default function GlossaryList({ terms }) {
  const [expandAll, setExpandAll] = useState(false)
  const [filter, setFilter] = useState('')
  const { t } = useLanguage()

  const filtered = terms.filter(
    item =>
      item.term.toLowerCase().includes(filter.toLowerCase()) ||
      item.definition.toLowerCase().includes(filter.toLowerCase())
  )

  return (
    <div>
      {/* Filter input */}
      <div style={{ marginBottom: '1.5rem', display: 'flex', gap: '0.75rem', alignItems: 'center', flexWrap: 'wrap' }}>
        <input
          type="text"
          value={filter}
          onChange={e => setFilter(e.target.value)}
          placeholder="Filter terms..."
          style={{
            flex: 1,
            minWidth: '200px',
            padding: '0.6rem 0.9rem',
            borderRadius: '8px',
            border: '1px solid var(--gray-200)',
            background: 'var(--gray-50)',
            fontFamily: 'DM Sans, sans-serif',
            fontSize: '0.875rem',
            color: 'var(--gray-900)',
            outline: 'none',
          }}
        />
        <span style={{
          fontFamily: 'Space Mono, monospace',
          fontSize: '0.65rem',
          color: 'var(--gray-400)',
          textTransform: 'uppercase',
          letterSpacing: '0.08em',
          flexShrink: 0,
        }}>
          {filtered.length} terms
        </span>
      </div>

      {/* Terms list */}
      <div>
        {filtered.map(item => (
          <GlossaryItem
            key={item.term}
            term={item.term}
            definition={item.definition}
          />
        ))}
      </div>

      {filtered.length === 0 && (
        <p style={{
          fontFamily: 'Space Mono, monospace',
          fontSize: '0.75rem',
          color: 'var(--gray-400)',
          textAlign: 'center',
          padding: '2rem',
        }}>
          No terms match "{filter}"
        </p>
      )}
    </div>
  )
}
