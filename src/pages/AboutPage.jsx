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

        {/* Intro */}
        <Section>
          <Body>
            {isPt
              ? <><strong>Computadores Fazem Arte</strong> é um wiki educacional sobre Blockchain, Web3 e NFTs — desenvolvido como parte de uma pesquisa de mestrado em <strong>Design de Artefatos Digitais</strong> na Universidade Federal de Pernambuco (UFPE), financiada pelo programa MAI/DAI do CNPq.</>
              : <><strong>Computadores Fazem Arte</strong> is an educational wiki about Blockchain, Web3, and NFTs — developed as part of a master's research in <strong>Digital Artifact Design</strong> at the Universidade Federal de Pernambuco (UFPE), funded by the MAI/DAI program of the CNPq.</>
            }
          </Body>
        </Section>

        <Divider />

        {/* The Name */}
        <Section>
          <SectionTitle>{isPt ? 'O Nome' : 'The Name'}</SectionTitle>
          <Body>
            {isPt
              ? <>O nome do projeto vem de um verso de <strong>Fred Zero Quatro</strong>, vocalista da lendária banda recifense Mundo Livre S/A, da música <em>Computadores Fazem Arte</em>. O verso captura algo essencial sobre a relação entre tecnologia e criação artística:</>
              : <>The project's name comes from a verse by <strong>Fred Zero Quatro</strong>, frontman of the legendary Recife band Mundo Livre S/A, from the song <em>Computadores Fazem Arte</em>. The verse captures something essential about the relationship between technology and artistic creation:</>
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
              style={{
                position: 'absolute',
                top: 0, left: 0,
                width: '100%', height: '100%',
                border: 0,
              }}
              src="https://www.youtube.com/embed/KZg_m0z4NLI"
              title="Computadores Fazem Arte - Fred Zero Quatro"
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
              ? 'Como parte da pesquisa, três estudantes de graduação foram orientados em diferentes áreas do conhecimento — uma escolha interdisciplinar deliberada que reflete os próprios valores do projeto.'
              : 'As part of the research, three undergraduate students were mentored across different areas of knowledge — a deliberate interdisciplinary choice that reflects the project\'s own values.'
            }
          </Body>

          {/* Milena */}
          <ResearcherCard
            name="Milena"
            area={isPt ? 'Pedagogia' : 'Pedagogy'}
            color="#3b82f6"
            text={isPt
              ? 'Trouxe um olhar educacional ao projeto, ajudando a pensar como conceitos tecnológicos complexos podem ser tornados acessíveis a públicos diversos.'
              : 'Brought an educational lens to the project, helping think through how complex technological concepts could be made accessible to diverse audiences.'
            }
          />

          {/* Vitória */}
          <ResearcherCard
            name="Vitória"
            area={isPt ? 'Design' : 'Design'}
            color="var(--purple)"
            text={isPt
              ? 'Contribuiu com uma perspectiva visual e comunicacional, essencial para moldar como o wiki e seus materiais são apresentados.'
              : 'Contributed a visual and communicational perspective, essential for shaping how the wiki and its materials are presented.'
            }
          />

          {/* Artur — in memoriam */}
          <div style={{
            padding: '1.25rem 1.5rem',
            borderRadius: '12px',
            border: '1px solid var(--gray-200)',
            marginBottom: '0.75rem',
            background: 'var(--gray-50)',
            borderLeft: '3px solid var(--gray-400)',
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.5rem', flexWrap: 'wrap' }}>
              <p style={{
                fontFamily: 'Instrument Sans, sans-serif',
                fontWeight: 700,
                fontSize: '1rem',
                textTransform: 'uppercase',
                color: 'var(--gray-900)',
              }}>
                Artur
              </p>
              <span style={{
                fontFamily: 'Space Mono, monospace',
                fontSize: '0.6rem',
                textTransform: 'uppercase',
                letterSpacing: '0.08em',
                color: 'var(--gray-400)',
                border: '1px solid var(--gray-300)',
                padding: '0.15rem 0.5rem',
                borderRadius: '100px',
              }}>
                {isPt ? 'Ciência da Computação' : 'Computer Science'}
              </span>
              <span style={{
                fontFamily: 'Space Mono, monospace',
                fontSize: '0.6rem',
                textTransform: 'uppercase',
                letterSpacing: '0.08em',
                color: 'var(--gray-400)',
                fontStyle: 'italic',
              }}>
                ✦ in memoriam
              </span>
            </div>
            <p style={{
              fontFamily: 'DM Sans, sans-serif',
              fontSize: '0.9rem',
              color: 'var(--gray-600)',
              lineHeight: 1.7,
            }}>
              {isPt
                ? 'Artur entrou na pesquisa como voluntário — movido inteiramente pela própria curiosidade e entusiasmo. Foi um dos participantes mais engajados e ativos do projeto, trazendo rigor técnico e empolgação genuína a cada encontro. Sua presença deixou uma marca nessa pesquisa que não se mede. Este projeto carrega um pedaço dele.'
                : 'Artur joined the research as a volunteer — entirely out of his own curiosity and enthusiasm. He was one of the most engaged and active participants in the project, bringing technical rigor and genuine excitement to every meeting. His presence left a mark on this research that cannot be measured. This project carries a piece of him.'
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
              ? <>O encerramento do curso foi interrompido pelo <strong>bloqueio do Twitter/X no Brasil</strong> — um momento que se tornou parte da própria história do projeto e um estudo de caso ao vivo: um lembrete de que as mesmas plataformas que hospedam comunidades de arte digital estão sujeitas a decisões políticas, pressões regulatórias e poder corporativo.</>
              : <>The course's closing was interrupted by the <strong>blocking of Twitter/X in Brazil</strong> — a moment that became part of the project's own story and a live case study: a reminder that the same platforms that host digital art communities are subject to political decisions, regulatory pressures, and corporate power.</>
            }
          </Body>
          <div style={{
            padding: '1.25rem 1.5rem',
            borderRadius: '12px',
            background: 'rgba(238, 111, 34, 0.06)',
            border: '1px solid rgba(238, 111, 34, 0.2)',
            marginTop: '1rem',
          }}>
            <p style={{
              fontFamily: 'DM Sans, sans-serif',
              fontSize: '0.9rem',
              color: 'var(--gray-700)',
              lineHeight: 1.7,
            }}>
              {isPt
                ? 'A regulação das plataformas de redes sociais não é um tema secundário — é central para qualquer conversa honesta sobre direitos digitais, liberdade de expressão e as condições nas quais artistas criam e distribuem seu trabalho. As plataformas devem ser responsabilizadas por garantir os direitos fundamentais dos usuários.'
                : 'The regulation of social media platforms is not a secondary topic — it is central to any honest conversation about digital rights, freedom of expression, and the conditions under which artists create and distribute their work. Platforms must be held accountable for guaranteeing users\' fundamental rights.'
              }
            </p>
          </div>
        </Section>

        <Divider />

        {/* WebMedia */}
        <Section>
          <SectionTitle>{isPt ? 'Publicação — WebMedia 2024' : 'Publication — WebMedia 2024'}</SectionTitle>
          <Body>
            {isPt
              ? <>O material desenvolvido nesta pesquisa foi publicado e apresentado no <strong>WebMedia 2024</strong>, realizado na Universidade Federal de Juiz de Fora (UFJF) — uma das mais importantes conferências brasileiras sobre sistemas multimídia e tecnologias web.</>
              : <>The material developed in this research was published and presented at <strong>WebMedia 2024</strong>, held at the Universidade Federal de Juiz de Fora (UFJF) — one of the most important Brazilian conferences on multimedia systems and web technologies.</>
            }
          </Body>
          <a
            href="https://books-sol.sbc.org.br/index.php/sbc/catalog/view/177/779/1513"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              padding: '0.6rem 1.25rem',
              background: 'var(--orange)',
              color: 'white',
              fontFamily: 'Instrument Sans, sans-serif',
              fontWeight: 600,
              fontSize: '0.8rem',
              textTransform: 'uppercase',
              letterSpacing: '0.05em',
              borderRadius: '8px',
              textDecoration: 'none',
              marginTop: '0.5rem',
              transition: 'opacity 0.2s',
            }}
          >
            {isPt ? 'Acessar a publicação →' : 'Access the publication →'}
          </a>
        </Section>

        <Divider />

        {/* UFPE 2025 */}
        <Section>
          <SectionTitle>{isPt ? 'Disciplina — Design para Web3, UFPE 2025' : 'Guest Lecture — Design for Web3, UFPE 2025'}</SectionTitle>
          <Body>
            {isPt
              ? <>Em 2025, a pesquisa levou a um convite do <strong>Professor Leonardo Castillo</strong> para ministrar a disciplina <em>Design para Web3</em> no curso de Design da UFPE — levando o conteúdo deste projeto diretamente para a educação formal em design.</>
              : <>In 2025, the research led to an invitation from <strong>Professor Leonardo Castillo</strong> to teach a module called <em>Design para Web3</em> within the Design undergraduate course at UFPE — bringing this project's content directly into formal design education.</>
            }
          </Body>
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
                }}>
                  {item.label}
                </span>
                <a
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    fontFamily: 'DM Sans, sans-serif',
                    fontSize: '0.9rem',
                    color: 'var(--orange)',
                    textDecoration: 'underline',
                    textUnderlineOffset: '3px',
                  }}
                >
                  {item.value}
                </a>
              </div>
            ))}
          </div>
        </Section>

      </article>
    </div>
  )
}

// ─── Sub-components ───────────────────────────────────────────────────────────

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
    }}>
      {children}
    </h2>
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
    }}>
      {children}
    </p>
  )
}

function Divider() {
  return (
    <div style={{
      height: '1px',
      background: 'var(--gray-200)',
      margin: '2.5rem 0',
    }} />
  )
}

function ResearcherCard({ name, area, color, text }) {
  return (
    <div style={{
      padding: '1.25rem 1.5rem',
      borderRadius: '12px',
      border: '1px solid var(--gray-200)',
      marginBottom: '0.75rem',
      borderLeft: `3px solid ${color}`,
    }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.5rem', flexWrap: 'wrap' }}>
        <p style={{
          fontFamily: 'Instrument Sans, sans-serif',
          fontWeight: 700,
          fontSize: '1rem',
          textTransform: 'uppercase',
          color: 'var(--gray-900)',
        }}>
          {name}
        </p>
        <span style={{
          fontFamily: 'Space Mono, monospace',
          fontSize: '0.6rem',
          textTransform: 'uppercase',
          letterSpacing: '0.08em',
          color,
          border: `1px solid ${color}`,
          padding: '0.15rem 0.5rem',
          borderRadius: '100px',
        }}>
          {area}
        </span>
      </div>
      <p style={{
        fontFamily: 'DM Sans, sans-serif',
        fontSize: '0.9rem',
        color: 'var(--gray-600)',
        lineHeight: 1.7,
      }}>
        {text}
      </p>
    </div>
  )
}
