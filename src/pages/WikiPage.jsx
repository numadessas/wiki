import { useEffect, useState } from 'react'
import { useParams, Link, useNavigate } from 'react-router-dom'
import { Copy, Check, ChevronLeft, ChevronRight } from 'lucide-react'
import { fetchSection, fetchRelated, getAllSectionsSync } from '../utils/contentAdapter.js'
import { useLanguage } from '../utils/LanguageContext.jsx'
import MarkdownRenderer from '../components/wiki/MarkdownRenderer.jsx'
import GlossaryList from '../components/wiki/GlossaryList.jsx'
import TableOfContents from '../components/wiki/TableOfContents.jsx'
import RelatedArticles from '../components/wiki/RelatedArticles.jsx'
import Breadcrumb from '../components/ui/Breadcrumb.jsx'
import TagPill from '../components/ui/TagPill.jsx'
import { getSectionMeta } from '../utils/sectionMeta.js'

function estimateReadTime(content) {
  const words = content?.split(/\s+/).length || 0
  return Math.max(1, Math.round(words / 200))
}

// Climate Crisis is very wide (~1.1em per glyph): size the title so its longest word fits.
function fitBanner(title) {
  const longest = Math.max(...title.split(/\s+/).map(w => w.length))
  return (100 / (longest * 1.12)).toFixed(2)
}

export default function WikiPage() {
  const { slug } = useParams()
  const { lang, t } = useLanguage()
  const navigate = useNavigate()
  const [section, setSection] = useState(null)
  const [related, setRelated] = useState([])
  const [copied, setCopied] = useState(false)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(false)
    setSection(null)

    fetchSection(slug, lang).then(data => {
      if (!data) {
        navigate('/404', { replace: true })
        return
      }
      setSection(data)
      if (data.related) {
        fetchRelated(data.related, lang).then(setRelated)
      }
      setTimeout(() => setMounted(true), 50)
      window.scrollTo({ top: 0 })
    })
  }, [slug, lang])

  // Prev/next navigation — usa o idioma atual
  const allSections = getAllSectionsSync(lang)
  const currentIndex = allSections.findIndex(s => s.slug === slug)
  const prevSection = currentIndex > 0 ? allSections[currentIndex - 1] : null
  const nextSection = currentIndex < allSections.length - 1 ? allSections[currentIndex + 1] : null
  const meta = getSectionMeta(slug, currentIndex)

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
          <span style={{ display: 'inline-block' }}>◌</span>
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
      <article
        style={{
          flex: 1,
          minWidth: 0,
          padding: 'clamp(2rem, 4vw, 3.5rem) clamp(1.5rem, 4vw, 3rem)',
          maxWidth: '820px',
          opacity: mounted ? 1 : 0,
          transform: mounted ? 'none' : 'translateY(12px)',
          transition: 'opacity 0.4s ease, transform 0.4s ease',
        }}
      >
        <Breadcrumb items={[
          { label: 'numawiki', href: '/' },
          { label: section.title },
        ]} />

        <header className="entry-hero">
          <div className="entry-hero__body" style={{ containerType: 'inline-size' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', flexWrap: 'wrap', marginBottom: '1rem' }}>
              <span className={`chip chip--${meta.color}`}>{meta.code}</span>
              <span className="label" style={{ color: 'var(--gray-500)', fontSize: '0.62rem' }}>
                {section.subtitle}
              </span>
            </div>

            <h1 className="banner" style={{
              fontSize: `min(2.6rem, ${fitBanner(section.title)}cqi)`,
              color: 'var(--ink)',
              marginBottom: '0.9rem',
            }}>
              {section.title}
            </h1>

            {section.description && (
              <p style={{
                fontSize: '1.05rem',
                color: 'var(--gray-600)',
                lineHeight: 1.55,
                marginBottom: '1.25rem',
                maxWidth: '520px',
              }}>
                {section.description}
              </p>
            )}

            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', flexWrap: 'wrap' }}>
              <span className="chip" style={{ background: 'var(--ink)', color: 'var(--white)' }}>
                ◷ {estimateReadTime(section.content)} {t.nav.readingTime}
              </span>
              {section.tags?.map(tag => (
                <TagPill key={tag} tag={tag} asLink />
              ))}
              <button
                onClick={handleCopyLink}
                className="chip"
                style={{ cursor: 'pointer', background: copied ? 'var(--green)' : 'var(--card)', color: copied ? '#0a0a0a' : 'var(--ink)' }}
                title={t.nav.copyLink}
              >
                {copied ? <Check size={11} /> : <Copy size={11} />}
                {copied ? t.nav.copied : t.nav.copyLink}
              </button>
            </div>
          </div>
          <div className={`entry-hero__art tint-${meta.color} stripes`}>
            <img src={meta.src} alt="" className={meta.fit === 'cover' ? 'cover' : ''} />
          </div>
        </header>

        {section.id === 'glossary' ? (
          <>
            <MarkdownRenderer content={section.content} />
            <GlossaryList terms={section.glossaryTerms || []} />
          </>
        ) : (
          <MarkdownRenderer content={section.content} />
        )}

        <nav
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 220px), 1fr))',
            gap: '1rem',
            marginTop: '4.5rem',
          }}
        >
          {prevSection ? <PageLink section={prevSection} meta={getSectionMeta(prevSection.id, currentIndex - 1)} label={lang === 'pt' ? 'Anterior' : 'Previous'} dir="prev" /> : <div />}
          {nextSection && <PageLink section={nextSection} meta={getSectionMeta(nextSection.id, currentIndex + 1)} label={lang === 'pt' ? 'Próximo' : 'Next'} dir="next" />}
        </nav>
      </article>

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

function PageLink({ section, meta, label, dir }) {
  const next = dir === 'next'
  const to = section.slug === 'about' ? '/wiki/about' : `/wiki/${section.slug}`
  return (
    <Link to={to} className="index-card" style={{ flexDirection: next ? 'row-reverse' : 'row', alignItems: 'stretch' }}>
      <div className={`tint-${meta.color} stripes`} style={{
        width: '84px', flexShrink: 0, display: 'flex', alignItems: 'center', justifyContent: 'center',
        borderRight: next ? 'none' : 'var(--line)', borderLeft: next ? 'var(--line)' : 'none',
      }}>
        <img src={meta.src} alt="" style={{ width: '62%', maxHeight: '64px', objectFit: meta.fit === 'cover' ? 'cover' : 'contain', borderRadius: meta.fit === 'cover' ? '8px' : 0 }} />
      </div>
      <div style={{ padding: '0.9rem 1.1rem', display: 'flex', flexDirection: 'column', gap: '0.3rem', alignItems: next ? 'flex-end' : 'flex-start', textAlign: next ? 'right' : 'left', flex: 1, minWidth: 0 }}>
        <span className="label" style={{ display: 'flex', alignItems: 'center', gap: '0.3rem', fontSize: '0.6rem', color: 'var(--gray-500)' }}>
          {!next && <ChevronLeft size={12} />} {label} · {meta.code} {next && <ChevronRight size={12} />}
        </span>
        <span style={{ fontFamily: 'Instrument Sans, sans-serif', fontWeight: 700, fontSize: '0.95rem', textTransform: 'uppercase', color: 'var(--ink)', lineHeight: 1.2 }}>
          {section.title}
        </span>
      </div>
    </Link>
  )
}
