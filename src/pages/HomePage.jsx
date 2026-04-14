import { useState, useEffect } from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import { ArrowRight, ExternalLink } from 'lucide-react'
import { useLanguage } from '../utils/LanguageContext.jsx'
import { wikiSections, allTags } from '../content/en/wiki.js'
import TagPill from '../components/ui/TagPill.jsx'

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

const accentColors = [
  'var(--orange)',
  'var(--purple)',
  '#3b82f6',
  'var(--orange)',
  '#ef4444',
  'var(--purple)',
  'var(--green)',
  '#0ea5e9',
  'var(--orange)',
  'var(--purple)',
  'var(--gray-400)',
]

export default function HomePage() {
  const { t, lang } = useLanguage()
  const [searchParams] = useSearchParams()
  const [activeTag, setActiveTag] = useState(searchParams.get('tag') || '')
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setTimeout(() => setMounted(true), 50)
  }, [])

  const filtered = activeTag
    ? wikiSections.filter(s => s.tags.includes(activeTag))
    : wikiSections

  const totalTerms = wikiSections.reduce(
    (acc, s) => acc + (s.glossaryTerms?.length || 0), 0
  )

  return (
    <div style={{ minHeight: '100vh' }}>
      {/* Hero */}
      <section
        style={{
          padding: 'clamp(3rem, 8vh, 6rem) clamp(1.5rem, 5vw, 4rem)',
          maxWidth: '1200px',
          margin: '0 auto',
        }}
      >
        <div
          style={{
            opacity: mounted ? 1 : 0,
            transform: mounted ? 'none' : 'translateY(20px)',
            transition: 'opacity 0.6s ease, transform 0.6s ease',
          }}
        >
          {/* Eyebrow */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.5rem' }}>
            <span style={{
              fontFamily: 'Space Mono, monospace',
              fontSize: '0.65rem',
              textTransform: 'uppercase',
              letterSpacing: '0.15em',
              color: 'var(--orange)',
            }}>
              numawiki
            </span>
            <div style={{ height: '1px', width: '40px', background: 'var(--orange)', opacity: 0.4 }} />
            <span style={{
              fontFamily: 'Space Mono, monospace',
              fontSize: '0.65rem',
              textTransform: 'uppercase',
              letterSpacing: '0.1em',
              color: 'var(--gray-400)',
            }}>
              {t.home.by}{' '}
              <a
                href="https://numadessas.com.br"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: 'var(--purple)', textDecoration: 'underline' }}
              >
                Numa
              </a>
            </span>
          </div>

          {/* Title */}
          <h1
            style={{
              fontFamily: 'Instrument Sans, sans-serif',
              fontWeight: 700,
              fontSize: 'clamp(3.5rem, 10vw, 7rem)',
              textTransform: 'uppercase',
              letterSpacing: '-0.04em',
              lineHeight: 0.92,
              color: 'var(--gray-900)',
              marginBottom: '2rem',
              maxWidth: '800px',
            }}
          >
            {lang === 'pt' ? 'Computadores\nFazem Arte' : 'Computers\nMake Art'}
          </h1>

          {/* Subtitle + stats */}
          <div style={{
            display: 'flex',
            alignItems: 'flex-start',
            gap: '3rem',
            flexWrap: 'wrap',
          }}>
            <p style={{
              fontFamily: 'DM Sans, sans-serif',
              fontSize: '1.1rem',
              color: 'var(--gray-500)',
              maxWidth: '480px',
              lineHeight: 1.7,
              flex: 1,
              minWidth: '240px',
            }}>
              {t.home.subtitle}
            </p>

            {/* Stats */}
            <div style={{ display: 'flex', gap: '2rem', flexShrink: 0 }}>
              {[
                { value: wikiSections.length, label: t.home.topics },
                { value: totalTerms, label: t.home.terms },
                { value: '∞', label: t.home.free },
              ].map(stat => (
                <div key={stat.label}>
                  <p style={{
                    fontFamily: 'Instrument Sans, sans-serif',
                    fontWeight: 700,
                    fontSize: '2rem',
                    color: 'var(--orange)',
                    lineHeight: 1,
                    marginBottom: '0.25rem',
                  }}>
                    {stat.value}
                  </p>
                  <p style={{
                    fontFamily: 'Space Mono, monospace',
                    fontSize: '0.6rem',
                    textTransform: 'uppercase',
                    letterSpacing: '0.1em',
                    color: 'var(--gray-400)',
                  }}>
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div style={{ marginTop: '2.5rem', display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
            <Link
              to={`/wiki/${wikiSections[0].slug}`}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                padding: '0.75rem 1.5rem',
                background: 'var(--orange)',
                color: 'white',
                fontFamily: 'Instrument Sans, sans-serif',
                fontWeight: 600,
                fontSize: '0.875rem',
                textTransform: 'uppercase',
                letterSpacing: '0.05em',
                borderRadius: '8px',
                textDecoration: 'none',
                transition: 'all 0.2s',
              }}
              className="hover:opacity-90"
            >
              {t.home.explore}
              <ArrowRight size={15} />
            </Link>

            <a
              href="https://numadessas.com.br"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                padding: '0.75rem 1.5rem',
                border: '1px solid var(--gray-200)',
                color: 'var(--gray-600)',
                fontFamily: 'Instrument Sans, sans-serif',
                fontWeight: 600,
                fontSize: '0.875rem',
                textTransform: 'uppercase',
                letterSpacing: '0.05em',
                borderRadius: '8px',
                textDecoration: 'none',
                transition: 'all 0.2s',
              }}
              className="hover:border-gray-400"
            >
              numadessas.com.br
              <ExternalLink size={13} />
            </a>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div style={{
        height: '1px',
        background: 'linear-gradient(to right, transparent, var(--gray-200) 20%, var(--gray-200) 80%, transparent)',
        margin: '0 clamp(1.5rem, 5vw, 4rem)',
      }} />

      {/* Tag filter */}
      <section style={{
        padding: '2rem clamp(1.5rem, 5vw, 4rem)',
        maxWidth: '1200px',
        margin: '0 auto',
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', flexWrap: 'wrap' }}>
          <span style={{
            fontFamily: 'Space Mono, monospace',
            fontSize: '0.6rem',
            textTransform: 'uppercase',
            letterSpacing: '0.12em',
            color: 'var(--gray-400)',
            flexShrink: 0,
          }}>
            {t.nav.allTopics}
          </span>
          <TagPill
            tag="all"
            active={!activeTag}
            onClick={() => setActiveTag('')}
          />
          {allTags.map(tag => (
            <TagPill
              key={tag}
              tag={tag}
              active={activeTag === tag}
              onClick={() => setActiveTag(t => t === tag ? '' : tag)}
            />
          ))}
        </div>
      </section>

      {/* Wiki grid */}
      <section style={{
        padding: '0 clamp(1.5rem, 5vw, 4rem) 5rem',
        maxWidth: '1200px',
        margin: '0 auto',
      }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
          gap: '1rem',
        }}>
          {filtered.map((section, i) => (
            <SectionCard
              key={section.id}
              section={section}
              accent={accentColors[i % accentColors.length]}
              delay={i * 40}
              mounted={mounted}
            />
          ))}
        </div>
      </section>

      {/* Footer quote */}
      <footer style={{
        borderTop: '1px solid var(--gray-200)',
        padding: '3rem clamp(1.5rem, 5vw, 4rem)',
        textAlign: 'center',
      }}>
        <blockquote style={{
          fontFamily: 'DM Sans, sans-serif',
          fontStyle: 'italic',
          fontSize: '1rem',
          color: 'var(--gray-400)',
          maxWidth: '480px',
          margin: '0 auto',
          lineHeight: 1.8,
        }}>
          "Computers advance / Artists hitchhike / Scientists create the new / Artists take the fame"
          <footer style={{ marginTop: '0.5rem' }}>
            <cite style={{
              fontFamily: 'Space Mono, monospace',
              fontSize: '0.65rem',
              textTransform: 'uppercase',
              letterSpacing: '0.1em',
              fontStyle: 'normal',
              color: 'var(--orange)',
            }}>
              — Fred Zero Quatro
            </cite>
          </footer>
        </blockquote>
      </footer>
    </div>
  )
}

function SectionCard({ section, accent, delay, mounted }) {
  return (
    <Link
      to={`/wiki/${section.slug}`}
      style={{
        display: 'flex',
        flexDirection: 'column',
        padding: '1.5rem',
        borderRadius: '14px',
        border: '1px solid var(--gray-200)',
        background: 'var(--white)',
        textDecoration: 'none',
        transition: 'all 0.25s ease',
        opacity: mounted ? 1 : 0,
        transform: mounted ? 'none' : 'translateY(16px)',
        transitionDelay: `${delay}ms`,
        cursor: 'pointer',
        position: 'relative',
        overflow: 'hidden',
      }}
      className="group hover:border-gray-300 hover:shadow-sm"
    >
      {/* Accent line */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        height: '2px',
        background: accent,
        opacity: 0,
        transition: 'opacity 0.25s',
      }} className="group-hover:opacity-100" />

      {/* Icon */}
      <div style={{
        width: '36px',
        height: '36px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: '8px',
        background: `${accent}15`,
        color: accent,
        fontSize: '1rem',
        marginBottom: '1rem',
        flexShrink: 0,
        fontFamily: 'Space Mono, monospace',
      }}>
        {sectionIcons[section.id] || '◦'}
      </div>

      {/* Content */}
      <div style={{ flex: 1 }}>
        <p style={{
          fontFamily: 'Space Mono, monospace',
          fontSize: '0.6rem',
          textTransform: 'uppercase',
          letterSpacing: '0.1em',
          color: 'var(--gray-400)',
          marginBottom: '0.4rem',
        }}>
          {section.subtitle}
        </p>
        <h2 style={{
          fontFamily: 'Instrument Sans, sans-serif',
          fontWeight: 700,
          fontSize: '1.1rem',
          textTransform: 'uppercase',
          letterSpacing: '-0.02em',
          color: 'var(--gray-900)',
          marginBottom: '0.5rem',
          lineHeight: 1.2,
        }}>
          {section.title}
        </h2>
        <p style={{
          fontFamily: 'DM Sans, sans-serif',
          fontSize: '0.8rem',
          color: 'var(--gray-500)',
          lineHeight: 1.6,
        }}>
          {section.description}
        </p>
      </div>

      {/* Tags */}
      <div style={{
        display: 'flex',
        gap: '0.4rem',
        flexWrap: 'wrap',
        marginTop: '1.25rem',
      }}>
        {section.tags.slice(0, 3).map(tag => (
          <span key={tag} className="tag" style={{ pointerEvents: 'none' }}>
            {tag}
          </span>
        ))}
      </div>

      {/* Arrow */}
      <div style={{
        position: 'absolute',
        bottom: '1.25rem',
        right: '1.25rem',
        color: accent,
        opacity: 0,
        transition: 'opacity 0.2s, transform 0.2s',
        transform: 'translateX(-4px)',
      }} className="group-hover:opacity-100 group-hover:translate-x-0">
        <ArrowRight size={16} />
      </div>
    </Link>
  )
}
