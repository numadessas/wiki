import { useLanguage } from '../../utils/LanguageContext.jsx'

const variants = {
  info: {
    icon: '◉',
    className: 'callout-info',
    titleKey: 'info',
  },
  concept: {
    icon: '◈',
    className: 'callout-concept',
    titleKey: 'concept',
  },
  warning: {
    icon: '⚠',
    className: 'callout-warning',
    titleKey: 'warning',
  },
}

export default function Callout({ type = 'info', title, children }) {
  const { t } = useLanguage()
  const v = variants[type] || variants.info

  return (
    <div className={`callout ${v.className}`}>
      <span className="callout-icon">{v.icon}</span>
      <div>
        <p className="callout-title">
          {title || t.callout[v.titleKey]}
        </p>
        <div style={{
          fontFamily: 'DM Sans, sans-serif',
          fontSize: '0.875rem',
          color: 'var(--gray-600)',
          lineHeight: 1.6,
        }}>
          {children}
        </div>
      </div>
    </div>
  )
}
