import { useEffect, useState } from 'react'
import { useParams, Link, useNavigate } from 'react-router-dom'
import { Copy, Check, ChevronLeft, ChevronRight } from 'lucide-react'
import { fetchSection, fetchRelated } from '../utils/contentAdapter.js'
import { wikiSections } from '../content/en/wiki.js'
import { useLanguage } from '../utils/LanguageContext.jsx'
import MarkdownRenderer from '../components/wiki/MarkdownRenderer.jsx'
import GlossaryList from '../components/wiki/GlossaryList.jsx'
import TableOfContents from '../components/wiki/TableOfContents.jsx'
import RelatedArticles from '../components/wiki/RelatedArticles.jsx'
import Breadcrumb from '../components/ui/Breadcrumb.jsx'
import TagPill from '../components/ui/TagPill.jsx'

function estimateReadTime(content) {
  const words = content?.split(/\s+/).length || 0
  return Math.max(1, Math.round(words / 200))
}

export default function WikiPage() {
  const { slug } = useParams()
  const { t } = useLanguage()
  const navigate = useNavigate()
  const [section, setSection] = useState(null)
  const [related, setRelated] = useState([])
  const [copied, setCopied] = useState(false)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(false)
    setSection(null)

    fetchSection(slug).then(data => {
      if (!data) {
        navigate('/404', { replace: true })
        return
      }
      setSection(data)
      if (data.related) {
        fetchRelated(data.related).then(setRelated)
      }
      setTimeout(() => setMounted(true), 50)
      window.scrollTo({ top: 0 })
    })
  }, [slug])

  // Prev/next navigation
  const currentIndex = wikiSections.findIndex(s => s.slug === slug)
  const prevSection = currentIndex > 0 ? wikiSections[currentIndex - 1] : null
  const nextSection = currentIndex < wikiSections.length - 1 ? wikiSections[currentIndex + 1] : null

  const handleCopyLink = () => {
    navigator.clipboard.writeText(window.location.href)
    setCopied(true)
    setTimeout(() => setCopied(false), 1500)
  }

  if (!section) {
    return (
      <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: '60vh',
      }}>
        <div style={{
          fontFamily: 'Space Mono, monospace',
          fontSize: '0.7rem',
          textTransform: 'uppercase',
          letterSpacing: '0.1em',
          color: 'var(--gray-400)',
          display: 'flex',
          alignItems: 'center',
          gap: '0.5rem',
        }}>
          <span style={{ animation: 'spin 1s linear infinite', display: 'inline-block' }}>◌</span>
          Loading...
        </div>
      </div>
    )
  }

  return (
    <div style={{
      display: 'flex',
      maxWidth: '1400px',
      margin: '0 auto',
    }}>
      {/* Article */}
      <article
        style={{
          flex: 1,
          minWidth: 0,
          padding: 'clamp(2rem, 4vw, 3.5rem) clamp(1.5rem, 4vw, 3rem)',
          maxWidth: '760px',
          opacity: mounted ? 1 : 0,
          transform: mounted ? 'none' : 'translateY(12px)',
          transition: 'opacity 0.4s ease, transform 0.4s ease',
        }}
      >
        {/* Breadcrumb */}
        <Breadcrumb items={[
          { label: 'Wiki', href: '/' },
          { label: section.title },
        ]} />

        {/* Header */}
        <header style={{ marginBottom: '2.5rem' }}>
          {/* Subtitle */}
          <p style={{
            fontFamily: 'Space Mono, monospace',
            fontSize: '0.65rem',
            textTransform: 'uppercase',
            letterSpacing: '0.12em',
            color: 'var(--orange)',
            marginBottom: '0.75rem',
          }}>
            {section.subtitle}
          </p>

          {/* Title */}
          <h1 style={{
            fontFamily: 'Instrument Sans, sans-serif',
            fontWeight: 700,
            fontSize: 'clamp(2rem, 5vw, 3rem)',
            textTransform: 'uppercase',
            letterSpacing: '-0.03em',
            lineHeight: 0.95,
            color: 'var(--gray-900)',
            marginBottom: '1rem',
          }}>
            {section.title}
          </h1>

          {/* Description */}
          {section.description && (
            <p style={{
              fontFamily: 'DM Sans, sans-serif',
              fontSize: '1.05rem',
              color: 'var(--gray-500)',
              lineHeight: 1.6,
              marginBottom: '1.5rem',
              maxWidth: '540px',
            }}>
              {section.description}
            </p>
          )}

          {/* Meta row */}
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.75rem',
            flexWrap: 'wrap',
          }}>
            {/* Read time */}
            <span style={{
              fontFamily: 'Space Mono, monospace',
              fontSize: '0.6rem',
              textTransform: 'uppercase',
              letterSpacing: '0.08em',
              color: 'var(--gray-400)',
            }}>
              {estimateReadTime(section.content)} {t.nav.readingTime}
            </span>

            <span style={{ color: 'var(--gray-200)' }}>·</span>

            {/* Tags */}
            <div style={{ display: 'flex', gap: '0.4rem', flexWrap: 'wrap' }}>
              {section.tags?.map(tag => (
                <TagPill key={tag} tag={tag} asLink />
              ))}
            </div>

            {/* Spacer */}
            <div style={{ flex: 1 }} />

            {/* Copy link */}
            <button
              onClick={handleCopyLink}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.35rem',
                fontFamily: 'Space Mono, monospace',
                fontSize: '0.6rem',
                textTransform: 'uppercase',
                letterSpacing: '0.08em',
                color: copied ? 'var(--green)' : 'var(--gray-400)',
                transition: 'color 0.2s',
                cursor: 'pointer',
              }}
              title={t.nav.copyLink}
            >
              {copied ? <Check size={12} /> : <Copy size={12} />}
              {copied ? t.nav.copied : t.nav.copyLink}
            </button>
          </div>
        </header>

        {/* Content separator */}
        <div style={{
          height: '1px',
          background: 'var(--gray-200)',
          marginBottom: '2.5rem',
        }} />

        {/* Glossary section gets special treatment */}
        {section.id === 'glossary' ? (
          <>
            <MarkdownRenderer content={section.content} />
            <GlossaryList terms={section.glossaryTerms || []} />
          </>
        ) : (
          <MarkdownRenderer content={section.content} />
        )}

        {/* Navigation between pages */}
        <nav
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '0.75rem',
            marginTop: '4rem',
            paddingTop: '2rem',
            borderTop: '1px solid var(--gray-200)',
          }}
        >
          {prevSection ? (
            <Link
              to={`/wiki/${prevSection.slug}`}
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '0.25rem',
                padding: '0.875rem 1rem',
                borderRadius: '10px',
                border: '1px solid var(--gray-200)',
                textDecoration: 'none',
                transition: 'border-color 0.2s',
              }}
              className="hover:border-orange-400"
            >
              <span style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.35rem',
                fontFamily: 'Space Mono, monospace',
                fontSize: '0.6rem',
                textTransform: 'uppercase',
                color: 'var(--gray-400)',
              }}>
                <ChevronLeft size={11} /> Previous
              </span>
              <span style={{
                fontFamily: 'Instrument Sans, sans-serif',
                fontWeight: 600,
                fontSize: '0.85rem',
                textTransform: 'uppercase',
                color: 'var(--gray-800)',
              }}>
                {prevSection.title}
              </span>
            </Link>
          ) : <div />}

          {nextSection && (
            <Link
              to={`/wiki/${nextSection.slug}`}
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'flex-end',
                gap: '0.25rem',
                padding: '0.875rem 1rem',
                borderRadius: '10px',
                border: '1px solid var(--gray-200)',
                textDecoration: 'none',
                transition: 'border-color 0.2s',
              }}
              className="hover:border-orange-400"
            >
              <span style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.35rem',
                fontFamily: 'Space Mono, monospace',
                fontSize: '0.6rem',
                textTransform: 'uppercase',
                color: 'var(--gray-400)',
              }}>
                Next <ChevronRight size={11} />
              </span>
              <span style={{
                fontFamily: 'Instrument Sans, sans-serif',
                fontWeight: 600,
                fontSize: '0.85rem',
                textTransform: 'uppercase',
                color: 'var(--gray-800)',
              }}>
                {nextSection.title}
              </span>
            </Link>
          )}
        </nav>
      </article>

      {/* Right panel: TOC + Related */}
      <aside
        style={{
          width: '240px',
          flexShrink: 0,
          paddingTop: 'clamp(2rem, 4vw, 3.5rem)',
          paddingRight: 'clamp(1.5rem, 3vw, 2.5rem)',
          position: 'sticky',
          top: 'var(--header-height)',
          height: 'calc(100vh - var(--header-height))',
          overflowY: 'auto',
          display: 'none',
        }}
        className="xl:block"
      >
        <TableOfContents content={section.content} />

        <div style={{ marginTop: '2.5rem' }}>
          <RelatedArticles sections={related} />
        </div>
      </aside>
    </div>
  )
}
