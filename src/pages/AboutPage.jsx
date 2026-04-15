import { useLanguage } from '../utils/LanguageContext.jsx'
import Breadcrumb from '../components/ui/Breadcrumb.jsx'

export default function AboutPage() {
  const { lang } = useLanguage()
  const isPt = lang === 'pt'

  return (
    <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
      <article style={{
        flex: 1,
        minWidth: 0,
        padding: 'clamp(2rem, 4vw, 3.5rem) clamp(1.5rem, 4vw, 3rem)',
        maxWidth: '760px',
      }}>

        <Breadcrumb items={[
          { label: 'numawiki', href: '/' },
          { label: isPt ? 'Sobre o Projeto' : 'About the Project' },
        ]} />

        {/* Header */}
        <header style={{ marginBottom: '2.5rem' }}>
          <p style={{
            fontFamily: 'Space Mono, monospace',
            fontSize: '0.65rem',
            textTransform: 'uppercase',
            letterSpacing: '0.12em',
            color: 'var(--orange)',
            marginBottom: '0.75rem',
          }}>
            {isPt ? 'Pesquisa & história' : 'Research & history'}
          </p>
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
            {isPt ? 'Sobre o Projeto' : 'About the Project'}
          </h1>
          <p style={{
            fontFamily: 'DM Sans, sans-serif',
            fontSize: '1.05rem',
            color: 'var(--gray-500)',
            lineHeight: 1.6,
            maxWidth: '540px',
          }}>
            {isPt
              ? 'A origem do projeto, a pesquisa por trás dele e as pessoas que o construíram.'
              : 'The origin of the project, the research behind it, and the people who built it.'
            }
          </p>
        </header>

        <div style={{ height: '1px', background: 'var(--gray-200)', marginBottom: '2.5rem' }} />

        {/* Numa profile card */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '1.25rem',
          padding: '1.25rem 1.5rem',
          borderRadius: '14px',
          border: '1px solid var(--gray-200)',
          marginBottom: '2.5rem',
          background: 'var(--gray-50)',
          flexWrap: 'wrap',
        }}>
          <div style={{
            width: '64px',
            height: '64px',
            borderRadius: '50%',
            background: 'var(--orange)',
            flexShrink: 0,
            overflow: 'hidden',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '1.5rem',
          }}>
            <img
              src="https://numadessas.com.br/assets/img/android-chrome-512x512.png"
              alt="Numa"
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              onError={e => { e.target.style.display = 'none'; e.target.parentNode.innerHTML = '◈'; }}
            />
          </div>
          <div style={{ flex: 1, minWidth: '180px' }}>
            <p style={{
              fontFamily: 'Instrument Sans, sans-serif',
              fontWeight: 700,
              fontSize: '1rem',
              textTransform: 'uppercase',
              color: 'var(--gray-900)',
              marginBottom: '0.25rem',
            }}>Numa</p>
            <p style={{
              fontFamily: 'DM Sans, sans-serif',
              fontSize: '0.85rem',
              color: 'var(--gray-600)',
              lineHeight: 1.5,
              marginBottom: '0.75rem',
            }}>
              {isPt
                ? 'Artista, pesquisadora e designer. Mestranda em Design de Artefatos Digitais na UFPE. Trabalha na interseção entre arte, tecnologia e comunidade.'
                : 'Artist, researcher, and designer. Master\'s student in Digital Artifact Design at UFPE. Works at the intersection of art, technology, and community.'
              }
            </p>
            <a
              href="https://numadessas.com.br"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.35rem',
                padding: '0.35rem 0.75rem',
                border: '1px solid var(--orange)',
                color: 'var(--orange)',
                fontFamily: 'Space Mono, monospace',
                fontSize: '0.65rem',
                textTransform: 'uppercase',
                letterSpacing: '0.08em',
                borderRadius: '6px',
                textDecoration: 'none',
                transition: 'all 0.2s',
              }}
            >
              numadessas.com.br →
            </a>
          </div>
        </div>

        {/* About the wiki */}
        <Section>
          <Body>
            {isPt
              ? <>Este wiki é parte dos resultados de uma pesquisa de mestrado em <strong>Design de Artefatos Digitais</strong> na Universidade Federal de Pernambuco (UFPE), financiada pelo programa MAI/DAI do CNPq. Reúne conteúdo sobre Blockchain, Web3, NFTs e comunidades digitais de arte — desenvolvido ao longo de atividades de pesquisa, ensino e extensão.</>
              : <>This wiki is part of the results of a master's research in <strong>Digital Artifact Design</strong> at the Universidade Federal de Pernambuco (UFPE), funded by the MAI/DAI program of the CNPq. It brings together content on Blockchain, Web3, NFTs, and digital art communities — developed across research, teaching, and extension activities.</>
            }
          </Body>
        </Section>

        <Divider />

        {/* The Name */}
        <Section>
          <SectionTitle>{isPt ? 'A Origem do Nome' : 'The Origin of the Name'}</SectionTitle>
          <Body>
            {isPt
              ? <>Este wiki nasceu com o nome <strong>Computadores Fazem Arte</strong> — uma referência à música homônima, composta por <strong>Fred Zero Quatro</strong> e interpretada com <strong>Chico Science e Nação Zumbi</strong>. O verso captura algo essencial sobre a relação entre tecnologia e criação artística:</>
              : <>This wiki was born under the name <strong>Computadores Fazem Arte</strong> — a reference to the song of the same name, written by <strong>Fred Zero Quatro</strong> and performed with <strong>Chico Science e Nação Zumbi</strong>. The verse captures something essential about the relationship between technology and artistic creation:</>
            }
          </Body>

          <blockquote style={{
            borderLeft: '3px solid var(--orange)',
            padding: '1rem 1.5rem',
            margin: '1.5rem 0',
            background: 'var(--gray-50)',
            borderRadius: '0 8px 8px 0',
            fontFamily: 'DM Sans, sans-serif',
            fontStyle: 'italic',
            color: 'var(--gray-600)',
            lineHeight: 1.8,
          }}>
            "Computadores avançam<br/>
            Artistas pegam carona<br/>
            Cientistas criam o novo<br/>
            Artistas levam a fama"
            <footer style={{
              marginTop: '0.5rem',
              fontFamily: 'Space Mono, monospace',
              fontSize: '0.65rem',
              textTransform: 'uppercase',
              letterSpacing: '0.08em',
              fontStyle: 'normal',
              color: 'var(--orange)',
            }}>
              — Fred Zero Quatro
            </footer>
          </blockquote>

          <Body>
            {isPt
              ? 'A música é ao mesmo tempo uma observação e uma provocação — e deu nome a um projeto que tenta pensar criticamente o que significa para artistas habitar espaços tecnológicos.'
              : 'The song is both an observation and a provocation — and gave name to a project that tries to think critically about what it means for artists to inhabit technological spaces.'
            }
          </Body>

          {/* YouTube embed */}
          <div style={{
            position: 'relative',
            paddingBottom: '56.25%',
            height: 0,
            overflow: 'hidden',
            borderRadius: '12px',
            margin: '1.5rem 0',
            background: 'var(--gray-100)',
          }}>
            <iframe
              style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', border: 0 }}
              src="https://www.youtube.com/embed/KZg_m0z4NLI"
              title="Computadores Fazem Arte - Fred Zero Quatro com Chico Science e Nação Zumbi"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </Section>

        <Divider />

        {/* Scientific Initiation */}
        <Section>
          <SectionTitle>{isPt ? 'Iniciação Científica' : 'Scientific Initiation'}</SectionTitle>
          <Body>
            {isPt
              ? <>Como orientadora, Numa acompanhou três estudantes de graduação em diferentes áreas do conhecimento — uma escolha interdisciplinar deliberada que reflete os próprios valores do projeto.</>
              : <>As advisor, Numa mentored three undergraduate students across different areas of knowledge — a deliberate interdisciplinary choice that reflects the project's own values.</>
            }
          </Body>

          {/* Researchers side by side */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
            gap: '0.75rem',
            margin: '1.25rem 0',
          }}>
            {[
              { name: 'Milena Gomes', area: isPt ? 'Pedagogia' : 'Pedagogy', color: '#3b82f6' },
              { name: 'Vitória Farias', area: 'Design', color: 'var(--purple)' },
            ].map(r => (
              <div key={r.name} style={{
                padding: '1rem 1.25rem',
                borderRadius: '10px',
                border: '1px solid var(--gray-200)',
                borderLeft: `3px solid ${r.color}`,
              }}>
                <p style={{
                  fontFamily: 'Instrument Sans, sans-serif',
                  fontWeight: 700,
                  fontSize: '0.95rem',
                  textTransform: 'uppercase',
                  color: 'var(--gray-900)',
                  marginBottom: '0.35rem',
                }}>{r.name}</p>
                <span style={{
                  fontFamily: 'Space Mono, monospace',
                  fontSize: '0.6rem',
                  textTransform: 'uppercase',
                  letterSpacing: '0.08em',
                  color: r.color,
                  border: `1px solid ${r.color}`,
                  padding: '0.1rem 0.45rem',
                  borderRadius: '100px',
                }}>{r.area}</span>
              </div>
            ))}
          </div>

          {/* Artur — in memoriam */}
          <div style={{
            padding: '1.25rem 1.5rem',
            borderRadius: '12px',
            border: '1px solid var(--gray-200)',
            background: 'var(--gray-50)',
            borderLeft: '3px solid var(--gray-400)',
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.75rem', flexWrap: 'wrap' }}>
              <p style={{
                fontFamily: 'Instrument Sans, sans-serif',
                fontWeight: 700,
                fontSize: '0.95rem',
                textTransform: 'uppercase',
                color: 'var(--gray-900)',
              }}>Artur Couto</p>
              <span style={{
                fontFamily: 'Space Mono, monospace',
                fontSize: '0.6rem',
                textTransform: 'uppercase',
                letterSpacing: '0.08em',
                color: 'var(--gray-400)',
                border: '1px solid var(--gray-300)',
                padding: '0.1rem 0.45rem',
                borderRadius: '100px',
              }}>
                {isPt ? 'Ciência da Computação' : 'Computer Science'}
              </span>
              <span style={{
                fontFamily: 'Space Mono, monospace',
                fontSize: '0.6rem',
                color: 'var(--gray-400)',
                fontStyle: 'italic',
              }}>✦ in memoriam</span>
            </div>
            <p style={{
              fontFamily: 'DM Sans, sans-serif',
              fontSize: '0.9rem',
              color: 'var(--gray-600)',
              lineHeight: 1.7,
            }}>
              {isPt
                ? 'Artur entrou na pesquisa como voluntário. Sua curiosidade, entusiasmo e dedicação deixaram uma marca nesse projeto que vai além do que qualquer texto pode descrever. Este wiki carrega um pedaço dele.'
                : 'Artur joined the research as a volunteer. His curiosity, enthusiasm, and dedication left a mark on this project that goes beyond what any text can describe. This wiki carries a piece of him.'
              }
            </p>
          </div>
        </Section>

        <Divider />

        {/* CTG Course */}
        <Section>
          <SectionTitle>{isPt ? 'Curso Presencial — CTG/UFPE, 2024' : 'Presential Course — CTG/UFPE, 2024'}</SectionTitle>
          <Body>
            {isPt
              ? 'Em 2024, um curso presencial de quatro semanas foi realizado no Centro de Tecnologia e Geociências (CTG) da UFPE — reunindo estudantes de diferentes áreas para aprender sobre Blockchain, NFTs e comunidades digitais de arte.'
              : 'In 2024, a four-week presential course was held at the Centro de Tecnologia e Geociências (CTG) of UFPE — bringing together students from different areas to learn about Blockchain, NFTs, and digital art communities.'
            }
          </Body>
          <Body>
            {isPt
              ? <>O encerramento do curso foi interrompido pelo <strong>bloqueio do Twitter/X no Brasil</strong> — um momento que se tornou parte da própria história do projeto. A regulação das plataformas de redes sociais não é um tema secundário: é central para qualquer conversa honesta sobre direitos digitais e as condições nas quais artistas criam e distribuem seu trabalho.</>
              : <>The course closing was interrupted by the <strong>blocking of Twitter/X in Brazil</strong> — a moment that became part of the project's own story. The regulation of social media platforms is not a secondary topic: it is central to any honest conversation about digital rights and the conditions under which artists create and distribute their work.</>
            }
          </Body>
        </Section>

        <Divider />

        {/* UFSJ extension */}
        <Section>
          <SectionTitle>{isPt ? 'Formação Intensiva — UFSJ, 2024' : 'Intensive Training — UFSJ, 2024'}</SectionTitle>
          <Body>
            {isPt
              ? <>Uma formação intensiva foi realizada para alunos de Ciência da Computação da <strong>Universidade Federal de São João Del-Rei (UFSJ)</strong>, em Minas Gerais. O convite partiu do <strong>Professor Darlinton Carvalho</strong>, que conheceu Numa no WebMedia 2024 e trouxe o conteúdo como parte de um projeto de extensão que coordena na universidade.</>
              : <>An intensive training was held for Computer Science students at the <strong>Universidade Federal de São João Del-Rei (UFSJ)</strong>, in Minas Gerais. The invitation came from <strong>Professor Darlinton Carvalho</strong>, who met Numa at WebMedia 2024 and brought the content as part of an extension project he coordinates at the university.</>
            }
          </Body>
        </Section>

        <Divider />

        {/* Design for Web3 UFPE */}
        <Section>
          <SectionTitle>{isPt ? 'Disciplina — Design para Web3, UFPE 2025' : 'Course — Design for Web3, UFPE 2025'}</SectionTitle>
          <Body>
            {isPt
              ? <>Em 2025, a convite do <strong>Professor Leonardo Castillo</strong>, Numa ministrou a disciplina <em>Design para Web3</em> no curso de Design da UFPE — levando o conteúdo deste projeto diretamente para a educação formal em design.</>
              : <>In 2025, invited by <strong>Professor Leonardo Castillo</strong>, Numa taught the course <em>Design para Web3</em> within the Design undergraduate program at UFPE — bringing this project's content directly into formal design education.</>
            }
          </Body>
        </Section>

        <Divider />

        {/* Publications */}
        <Section>
          <SectionTitle>{isPt ? 'Publicações' : 'Publications'}</SectionTitle>

          {/* WebMedia 2024 */}
          <div style={{
            padding: '1.25rem 1.5rem',
            borderRadius: '12px',
            border: '1px solid var(--gray-200)',
            marginBottom: '0.75rem',
          }}>
            <p style={{
              fontFamily: 'Space Mono, monospace',
              fontSize: '0.6rem',
              textTransform: 'uppercase',
              letterSpacing: '0.08em',
              color: 'var(--orange)',
              marginBottom: '0.5rem',
            }}>WebMedia 2024 — UFJF</p>
            <p style={{
              fontFamily: 'Instrument Sans, sans-serif',
              fontWeight: 600,
              fontSize: '0.95rem',
              color: 'var(--gray-900)',
              marginBottom: '0.5rem',
              lineHeight: 1.3,
            }}>
              {isPt
                ? 'Material didático sobre Blockchain, Web3 e NFTs para comunidades de arte digital'
                : 'Educational material on Blockchain, Web3, and NFTs for digital art communities'
              }
            </p>
            <a
              href="https://books-sol.sbc.org.br/index.php/sbc/catalog/view/177/779/1513"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.35rem',
                padding: '0.35rem 0.75rem',
                background: 'var(--orange)',
                color: 'white',
                fontFamily: 'Space Mono, monospace',
                fontSize: '0.65rem',
                textTransform: 'uppercase',
                letterSpacing: '0.06em',
                borderRadius: '6px',
                textDecoration: 'none',
                marginTop: '0.25rem',
              }}
            >
              {isPt ? 'Acessar →' : 'Access →'}
            </a>
          </div>

          {/* IMX 2024 */}
          <div style={{
            padding: '1.25rem 1.5rem',
            borderRadius: '12px',
            border: '1px solid var(--gray-200)',
            marginBottom: '0.75rem',
          }}>
            <p style={{
              fontFamily: 'Space Mono, monospace',
              fontSize: '0.6rem',
              textTransform: 'uppercase',
              letterSpacing: '0.08em',
              color: 'var(--orange)',
              marginBottom: '0.5rem',
            }}>IMX Workshop 2024</p>
            <p style={{
              fontFamily: 'Instrument Sans, sans-serif',
              fontWeight: 600,
              fontSize: '0.95rem',
              color: 'var(--gray-900)',
              marginBottom: '0.5rem',
              lineHeight: 1.3,
            }}>
              Art and XR: Experiences With 3D Scanning and NFTs in Web 3.0 Education
            </p>
            <a
              href="https://sol.sbc.org.br/index.php/imxw/article/view/35239"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.35rem',
                padding: '0.35rem 0.75rem',
                background: 'var(--orange)',
                color: 'white',
                fontFamily: 'Space Mono, monospace',
                fontSize: '0.65rem',
                textTransform: 'uppercase',
                letterSpacing: '0.06em',
                borderRadius: '6px',
                textDecoration: 'none',
                marginTop: '0.25rem',
              }}
            >
              {isPt ? 'Acessar →' : 'Access →'}
            </a>
          </div>
        </Section>

        <Divider />

        {/* Contact */}
        <Section>
          <SectionTitle>{isPt ? 'Contato' : 'Contact'}</SectionTitle>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
            {[
              { label: 'Site', value: 'numadessas.com.br', href: 'https://numadessas.com.br' },
              { label: 'Twitter', value: '@numadessas', href: 'https://twitter.com/numadessas' },
              { label: 'Email', value: 'contato@numadessas.com.br', href: 'mailto:contato@numadessas.com.br' },
            ].map(item => (
              <div key={item.label} style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <span style={{
                  fontFamily: 'Space Mono, monospace',
                  fontSize: '0.6rem',
                  textTransform: 'uppercase',
                  letterSpacing: '0.08em',
                  color: 'var(--gray-400)',
                  width: '50px',
                  flexShrink: 0,
                }}>{item.label}</span>
                <a href={item.href} target="_blank" rel="noopener noreferrer" style={{
                  fontFamily: 'DM Sans, sans-serif',
                  fontSize: '0.9rem',
                  color: 'var(--orange)',
                  textDecoration: 'underline',
                  textUnderlineOffset: '3px',
                }}>{item.value}</a>
              </div>
            ))}
          </div>
        </Section>

      </article>
    </div>
  )
}

function Section({ children }) {
  return <section style={{ marginBottom: '0.5rem' }}>{children}</section>
}

function SectionTitle({ children }) {
  return (
    <h2 style={{
      fontFamily: 'Instrument Sans, sans-serif',
      fontWeight: 700,
      fontSize: '1.4rem',
      textTransform: 'uppercase',
      letterSpacing: '-0.02em',
      color: 'var(--gray-900)',
      marginBottom: '1rem',
    }}>{children}</h2>
  )
}

function Body({ children }) {
  return (
    <p style={{
      fontFamily: 'DM Sans, sans-serif',
      fontSize: '1rem',
      color: 'var(--gray-700)',
      lineHeight: 1.75,
      marginBottom: '1rem',
    }}>{children}</p>
  )
}

function Divider() {
  return <div style={{ height: '1px', background: 'var(--gray-200)', margin: '2.5rem 0' }} />
}
