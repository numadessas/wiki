import { useState, useEffect } from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import { ArrowRight, ArrowUpRight, ExternalLink } from 'lucide-react'
import { useLanguage } from '../utils/LanguageContext.jsx'
import { getAllSectionsSync } from '../utils/contentAdapter.js'
import { getSectionMeta, stickers, artThumbs } from '../utils/sectionMeta.js'
import TagPill from '../components/ui/TagPill.jsx'

const pad = 'clamp(1.25rem, 5vw, 4rem)'

export default function HomePage() {
  const { lang } = useLanguage()
  const [searchParams] = useSearchParams()
  const [activeTag, setActiveTag] = useState(searchParams.get('tag') || '')
  const [mounted, setMounted] = useState(false)

  const sections = getAllSectionsSync(lang)
  const tags = [...new Set(sections.flatMap(s => s.tags))]

  useEffect(() => {
    setTimeout(() => setMounted(true), 50)
  }, [])

  const filtered = activeTag
    ? sections.filter(s => s.tags.includes(activeTag))
    : sections

  const totalTerms = sections.reduce(
    (acc, s) => acc + (s.glossaryTerms?.length || 0), 0
  )

  const isPt = lang === 'pt'
  const titleLines = isPt ? ['Computadores', 'Fazem', 'Arte'] : ['Computers', 'Make', 'Art']
  const subtitle = isPt
    ? 'Um espaço de conhecimento sobre Blockchain, Web3, NFTs e comunidades digitais de arte.'
    : 'A knowledge space about Blockchain, Web3, NFTs, and digital art communities.'

  const ticker = sections.map(s => s.title)

  return (
    <div style={{ minHeight: '100vh' }}>
      {/* Hero */}
      <section style={{ padding: `clamp(2rem, 6vh, 4.5rem) ${pad} clamp(2.5rem, 6vh, 4rem)`, maxWidth: '1280px', margin: '0 auto' }}>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 380px), 1fr))',
            gap: 'clamp(2rem, 4vw, 3.5rem)',
            alignItems: 'center',
            opacity: mounted ? 1 : 0,
            transform: mounted ? 'none' : 'translateY(20px)',
            transition: 'opacity 0.6s ease, transform 0.6s ease',
          }}
        >
          <div style={{ minWidth: 0, containerType: 'inline-size' }}>
            {/* Eyebrow */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1.5rem', flexWrap: 'wrap' }}>
              <span className="chip chip--green">● {isPt ? 'Wiki educativa' : 'Educational wiki'}</span>
              <span className="chip">
                {isPt ? 'por ' : 'by '}
                <a href="https://numadessas.com.br" target="_blank" rel="noopener noreferrer"
                  style={{ color: 'inherit', textDecoration: 'underline', textDecorationColor: 'var(--orange)', textDecorationThickness: '2px' }}>
                  Numa
                </a>
              </span>
            </div>

            {/* Title */}
            <h1 className="banner" style={{
              fontSize: isPt ? 'min(4.6rem, 7.8cqi)' : 'min(4.8rem, 10.4cqi)',
              color: 'var(--ink)',
              marginBottom: '1.75rem',
            }}>
              <span style={{ display: 'block' }}>{titleLines[0]}</span>
              <span style={{ display: 'flex', alignItems: 'center', gap: '0.25em', flexWrap: 'wrap' }}>
                {titleLines[1]}
                <span style={{
                  display: 'inline-block',
                  background: 'var(--orange)',
                  color: '#0a0a0a',
                  border: 'var(--line)',
                  borderRadius: '999px',
                  padding: '0.02em 0.32em 0.06em',
                  boxShadow: 'var(--shadow)',
                  transform: 'rotate(-3deg)',
                }}>{titleLines[2]}</span>
              </span>
            </h1>

            <p style={{
              fontSize: '1.15rem',
              color: 'var(--gray-600)',
              maxWidth: '470px',
              lineHeight: 1.6,
              marginBottom: '1.75rem',
            }}>
              {subtitle}
            </p>

            {/* CTA */}
            <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap', marginBottom: '2rem' }}>
              <Link to={`/wiki/${sections[0].slug}`} className="nw-btn nw-btn--orange">
                {isPt ? 'Explorar o wiki' : 'Explore the wiki'}
                <ArrowRight size={15} />
              </Link>
              <a href="https://numadessas.com.br" target="_blank" rel="noopener noreferrer" className="nw-btn">
                numadessas.com.br
                <ExternalLink size={13} />
              </a>
            </div>

            {/* Stats */}
            <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
              {[
                { value: sections.length, label: isPt ? 'tópicos' : 'topics', cls: 'tint-orange' },
                { value: totalTerms, label: isPt ? 'termos' : 'terms', cls: 'tint-purple' },
                { value: '∞', label: isPt ? 'livre' : 'free', cls: 'tint-green' },
              ].map(stat => (
                <div key={stat.label} className={stat.cls} style={{
                  border: 'var(--line)',
                  borderRadius: '12px',
                  padding: '0.6rem 1rem',
                  minWidth: '92px',
                }}>
                  <p className="banner" style={{ fontSize: '1.6rem', color: 'var(--ink)', lineHeight: 1, marginBottom: '0.3rem' }}>
                    {stat.value}
                  </p>
                  <p className="label" style={{ fontSize: '0.58rem', color: 'var(--gray-600)' }}>
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <HeroArt isPt={isPt} />
        </div>
      </section>

      {/* Ticker */}
      <div className="marquee" style={{ transform: 'rotate(-1.2deg)', margin: '0 -2rem', background: 'var(--ink)' }}>
        <div className="marquee__track">
          {[0, 1].map(k => (
            <span key={k} aria-hidden={k === 1} style={{ display: 'inline-flex' }}>
              {ticker.map((w, i) => (
                <span key={i} className="banner" style={{ fontSize: '1.05rem', padding: '0.85rem 0', display: 'inline-flex', alignItems: 'center' }}>
                  <span style={{ padding: '0 1.1rem' }}>{w}</span>
                  <span style={{ color: ['var(--orange)', 'var(--green)', '#c9a0cf'][i % 3] }}>✦</span>
                </span>
              ))}
            </span>
          ))}
        </div>
      </div>

      {/* Index header + tags */}
      <section style={{ padding: `clamp(3rem, 7vh, 4.5rem) ${pad} 1.5rem`, maxWidth: '1280px', margin: '0 auto' }}>
        <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', gap: '1.5rem', flexWrap: 'wrap', marginBottom: '1.5rem' }}>
          <div>
            <p className="label" style={{ color: 'var(--orange)', fontWeight: 700, marginBottom: '0.5rem' }}>
              {isPt ? 'Índice enciclopédico' : 'Encyclopedic index'}
            </p>
            <h2 className="banner" style={{ fontSize: 'clamp(1.6rem, 3.6vw, 2.6rem)', color: 'var(--ink)' }}>
              {isPt ? 'Verbetes' : 'Entries'}
            </h2>
          </div>
          <p className="label" style={{ color: 'var(--gray-500)' }}>
            {String(filtered.length).padStart(2, '0')} / {String(sections.length).padStart(2, '0')}
          </p>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', flexWrap: 'wrap' }}>
          <TagPill tag="all" active={!activeTag} onClick={() => setActiveTag('')} />
          {tags.map(tag => (
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
      <section style={{ padding: `1rem ${pad} 5rem`, maxWidth: '1280px', margin: '0 auto' }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 270px), 1fr))',
          gap: '1.5rem',
        }}>
          {filtered.map((section, i) => (
            <SectionCard
              key={section.id}
              section={section}
              meta={getSectionMeta(section.id, sections.indexOf(section))}
              delay={i * 40}
              mounted={mounted}
            />
          ))}
        </div>
      </section>

      {/* Art strip */}
      <section style={{ borderTop: 'var(--line)', background: 'var(--purple)', overflow: 'hidden' }}>
        <div style={{
          maxWidth: '1280px', margin: '0 auto', padding: `2.25rem ${pad} 1.5rem`,
          display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', gap: '1rem', flexWrap: 'wrap',
        }}>
          <div>
            <p className="label" style={{ color: 'var(--green)', fontWeight: 700, marginBottom: '0.4rem' }}>
              {isPt ? 'Na prática' : 'In practice'}
            </p>
            <h2 className="banner" style={{ fontSize: 'clamp(1.3rem, 3vw, 2rem)', color: '#f3f1ea' }}>
              {isPt ? 'Arte on-chain da Numa' : "Numa's on-chain art"}
            </h2>
          </div>
          <a href="https://numadessas.com.br/art.html" target="_blank" rel="noopener noreferrer" className="nw-btn nw-btn--green">
            {isPt ? 'Ver coleção' : 'See collection'} <ArrowUpRight size={15} />
          </a>
        </div>
        <div className="marquee marquee--slow" style={{ background: 'transparent', border: 'none', paddingBottom: '2.5rem' }}>
          <div className="marquee__track">
            {[0, 1].map(k => (
              <span key={k} aria-hidden={k === 1} style={{ display: 'inline-flex', gap: '1rem', paddingRight: '1rem' }}>
                {artThumbs.map((src, i) => (
                  <img key={i} src={src} alt="" loading="lazy" style={{
                    width: '170px', height: '170px', objectFit: 'cover',
                    border: '1.5px solid #0a0a0a', borderRadius: '12px',
                    boxShadow: '4px 4px 0 #0a0a0a', background: '#1a1a1a',
                    transform: `rotate(${[-2, 1.5, -1, 2][i % 4]}deg)`,
                  }} />
                ))}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Footer quote */}
      <footer style={{ background: 'var(--orange)', borderTop: 'var(--line)', color: '#0a0a0a', position: 'relative', overflow: 'hidden' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto', padding: `clamp(3rem, 8vh, 5rem) ${pad}`, position: 'relative' }}>
          <img src={stickers.bitcoin} alt="" aria-hidden="true" className="sticker hidden md:block"
            style={{ width: '120px', right: '2%', top: '18%', borderRadius: '50%', border: '1.5px solid #0a0a0a', '--r': '8deg' }} />
          <blockquote className="banner" style={{ fontSize: 'clamp(1.2rem, 3.2vw, 2.3rem)', lineHeight: 1.15, maxWidth: '820px' }}>
            {isPt
              ? <>Computadores avançam<br />Artistas pegam carona<br />Cientistas criam o novo<br />Artistas levam a fama</>
              : <>Computers advance<br />Artists hitchhike<br />Scientists create the new<br />Artists take the fame</>}
          </blockquote>
          <p className="label" style={{ marginTop: '1.5rem', fontWeight: 700 }}>— Fred Zero Quatro</p>
        </div>
        <div style={{ borderTop: '1.5px solid #0a0a0a', padding: `1rem ${pad}`, display: 'flex', justifyContent: 'space-between', gap: '1rem', flexWrap: 'wrap' }}>
          <span className="label" style={{ fontSize: '0.6rem' }}>numawiki · Computadores Fazem Arte · 2026</span>
          <a href="https://numadessas.com.br" target="_blank" rel="noopener noreferrer" className="label" style={{ fontSize: '0.6rem', color: '#0a0a0a', fontWeight: 700 }}>
            numadessas.com.br ↗
          </a>
        </div>
      </footer>
    </div>
  )
}

function HeroArt({ isPt }) {
  return (
    <div style={{ position: 'relative', minHeight: 'clamp(340px, 42vw, 480px)' }} aria-hidden="true">
      {/* Back card */}
      <div className="nw-card" style={{
        position: 'absolute', inset: '8% 6% 4% 10%',
        background: 'var(--green)', transform: 'rotate(4deg)',
      }} />
      {/* Main card */}
      <div className="nw-card stripes" style={{
        position: 'absolute', inset: '4% 10% 8% 4%',
        background: 'var(--purple)', overflow: 'hidden',
        display: 'flex', alignItems: 'flex-end', justifyContent: 'center',
      }}>
        <div style={{
          position: 'absolute', width: '70%', aspectRatio: '1', borderRadius: '50%',
          background: 'var(--orange)', border: '1.5px solid #0a0a0a', top: '14%', left: '15%',
        }} />
        <img src={stickers.busto} alt="" style={{ position: 'relative', width: '72%', maxWidth: '360px', display: 'block' }} />
        <span className="chip" style={{ position: 'absolute', top: '1rem', left: '1rem', background: '#fffdf7', color: '#0a0a0a', borderColor: '#0a0a0a' }}>
          NW · {isPt ? 'verbete 00' : 'entry 00'}
        </span>
      </div>

      <img src={stickers.phantom} alt="" className="sticker" style={{ width: '17%', left: '-2%', top: '50%', '--r': '-10deg' }} />
      <img src={stickers.pepe} alt="" className="sticker" style={{ width: '20%', right: '0%', top: '2%', '--r': '8deg', animationDelay: '-2s' }} />
      <img src={stickers.shiba} alt="" className="sticker" style={{ width: '18%', right: '2%', bottom: '4%', '--r': '-6deg', animationDelay: '-4s' }} />
      <img src={stickers.emoji} alt="" className="sticker" style={{ width: '16%', left: '2%', top: '0%', '--r': '-8deg', animationDelay: '-1s' }} />

      <span className="chip chip--orange" style={{ position: 'absolute', right: '6%', top: '40%', transform: 'rotate(6deg)', fontSize: '0.7rem' }}>web3 ✦</span>
      <span className="chip chip--green" style={{ position: 'absolute', left: '8%', bottom: '2%', transform: 'rotate(-5deg)', fontSize: '0.7rem' }}>NFT · blockchain</span>
    </div>
  )
}

function SectionCard({ section, meta, delay, mounted }) {
  const to = section.slug === 'about' ? '/wiki/about' : `/wiki/${section.slug}`
  return (
    <Link
      to={to}
      className="index-card"
      style={{
        opacity: mounted ? 1 : 0,
        transform: mounted ? undefined : 'translateY(16px)',
        transitionDelay: mounted ? '0ms' : `${delay}ms`,
      }}
    >
      <div className={`index-card__art tint-${meta.color} stripes`}>
        <span className={`chip chip--${meta.color} index-card__code`}>{meta.code}</span>
        <img src={meta.src} alt="" loading="lazy" className={meta.fit === 'cover' ? 'cover' : ''} />
      </div>

      <div style={{ padding: '1.15rem 1.25rem 1.25rem', display: 'flex', flexDirection: 'column', flex: 1 }}>
        <p className="label" style={{ fontSize: '0.6rem', color: 'var(--gray-500)', marginBottom: '0.35rem' }}>
          {section.subtitle}
        </p>
        <h3 style={{ fontSize: '1.15rem', color: 'var(--ink)', marginBottom: '0.5rem', lineHeight: 1.15 }}>
          {section.title}
        </h3>
        <p style={{ fontSize: '0.85rem', color: 'var(--gray-600)', lineHeight: 1.55, flex: 1 }}>
          {section.description}
        </p>

        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginTop: '1.1rem' }}>
          <div style={{ display: 'flex', gap: '0.35rem', flexWrap: 'wrap', flex: 1 }}>
            {section.tags.slice(0, 2).map(tag => (
              <span key={tag} className="tag" style={{ pointerEvents: 'none', fontSize: '0.56rem', padding: '0.18rem 0.55rem' }}>
                {tag}
              </span>
            ))}
          </div>
          <span className="index-card__arrow"><ArrowRight size={15} /></span>
        </div>
      </div>
    </Link>
  )
}
