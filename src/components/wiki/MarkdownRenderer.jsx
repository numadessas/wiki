import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import { useState } from 'react'
import { Copy, Check } from 'lucide-react'

function slugify(text) {
  return String(text)
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '')
}

function HeadingWithAnchor({ level, children, ...props }) {
  const Tag = `h${level}`
  const text = typeof children === 'string' ? children :
    Array.isArray(children) ? children.join('') : ''
  const id = slugify(text)

  return (
    <Tag id={id} {...props} style={{ scrollMarginTop: '80px' }}>
      <a
        href={`#${id}`}
        style={{
          textDecoration: 'none',
          color: 'inherit',
        }}
        className="group"
      >
        {children}
        <span
          style={{
            marginLeft: '0.5rem',
            color: 'var(--orange)',
            opacity: 0,
            fontSize: '0.75em',
            transition: 'opacity 0.2s',
          }}
          className="group-hover:opacity-100"
        >
          #
        </span>
      </a>
    </Tag>
  )
}

function CodeBlock({ children }) {
  const [copied, setCopied] = useState(false)

  const handleCopy = () => {
    navigator.clipboard.writeText(String(children))
    setCopied(true)
    setTimeout(() => setCopied(false), 1500)
  }

  return (
    <div className="copy-group" style={{ position: 'relative' }}>
      <pre>
        <code>{children}</code>
      </pre>
      <button
        onClick={handleCopy}
        className="copy-btn"
        style={{
          position: 'absolute',
          top: '0.75rem',
          right: '0.75rem',
          padding: '0.35rem',
          borderRadius: '6px',
          background: 'var(--gray-700)',
          color: copied ? 'var(--green)' : 'var(--gray-400)',
          transition: 'color 0.2s',
        }}
        title="Copy code"
      >
        {copied ? <Check size={13} /> : <Copy size={13} />}
      </button>
    </div>
  )
}

// Parse callout syntax: > ⚠️ or > ℹ️ etc.
function BlockquoteCallout({ children }) {
  const text = String(children)

  return (
    <blockquote>{children}</blockquote>
  )
}

const components = {
  h1: (props) => <HeadingWithAnchor level={1} {...props} />,
  h2: (props) => <HeadingWithAnchor level={2} {...props} />,
  h3: (props) => <HeadingWithAnchor level={3} {...props} />,
  h4: (props) => <HeadingWithAnchor level={4} {...props} />,
  pre: ({ children }) => {
    // Extract code content
    const code = children?.props?.children
    return <CodeBlock>{code}</CodeBlock>
  },
  code: ({ node, inline, className, children, ...props }) => {
    if (inline) {
      return <code {...props}>{children}</code>
    }
    return <code className={className} {...props}>{children}</code>
  },
  blockquote: BlockquoteCallout,
  a: ({ href, children }) => (
    <a
      href={href}
      target={href?.startsWith('http') ? '_blank' : undefined}
      rel={href?.startsWith('http') ? 'noopener noreferrer' : undefined}
    >
      {children}
    </a>
  ),
  img: ({ src, alt }) => (
    <figure style={{ margin: '2rem 0' }}>
      <img
        src={src}
        alt={alt}
        style={{
          width: '100%',
          borderRadius: '12px',
          border: '1px solid var(--gray-200)',
        }}
      />
      {alt && (
        <figcaption style={{
          fontFamily: 'Space Mono, monospace',
          fontSize: '0.65rem',
          textTransform: 'uppercase',
          letterSpacing: '0.08em',
          color: 'var(--gray-400)',
          marginTop: '0.5rem',
          textAlign: 'center',
        }}>
          {alt}
        </figcaption>
      )}
    </figure>
  ),
  hr: () => (
    <hr style={{
      border: 'none',
      borderTop: '1px solid var(--gray-200)',
      margin: '2.5rem 0',
    }} />
  ),
}

export default function MarkdownRenderer({ content }) {
  return (
    <div className="wiki-content">
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        components={components}
      >
        {content}
      </ReactMarkdown>
    </div>
  )
}
