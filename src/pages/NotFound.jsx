import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'

export default function NotFound() {
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      minHeight: '80vh',
      padding: '2rem',
      textAlign: 'center',
    }}>
      <p style={{
        fontFamily: 'Space Mono, monospace',
        fontSize: '0.65rem',
        textTransform: 'uppercase',
        letterSpacing: '0.12em',
        color: 'var(--orange)',
        marginBottom: '1rem',
      }}>
        404 — Not Found
      </p>

      <h1 style={{
        fontFamily: 'Instrument Sans, sans-serif',
        fontWeight: 700,
        fontSize: 'clamp(3rem, 10vw, 6rem)',
        textTransform: 'uppercase',
        letterSpacing: '-0.04em',
        color: 'var(--gray-900)',
        marginBottom: '1.5rem',
        lineHeight: 0.9,
      }}>
        Page not<br />found
      </h1>

      <p style={{
        fontFamily: 'DM Sans, sans-serif',
        fontSize: '1rem',
        color: 'var(--gray-400)',
        marginBottom: '2.5rem',
        maxWidth: '360px',
        lineHeight: 1.7,
      }}>
        This page doesn't exist — yet. The blockchain is immutable, but this URL might just be wrong.
      </p>

      <Link
        to="/"
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
          transition: 'opacity 0.2s',
        }}
        className="hover:opacity-90"
      >
        Back to numawiki
        <ArrowRight size={14} />
      </Link>
    </div>
  )
}
