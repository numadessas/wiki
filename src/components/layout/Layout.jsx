import { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import Header from './Header.jsx'
import Sidebar from './Sidebar.jsx'

export default function Layout({ children }) {
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const location = useLocation()

  // Close sidebar on navigation
  useEffect(() => {
    setSidebarOpen(false)
  }, [location.pathname])

  // Keyboard shortcut for search
  useEffect(() => {
    const handler = (e) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault()
        // Trigger search — handled in Header
        document.dispatchEvent(new CustomEvent('open-search'))
      }
    }
    document.addEventListener('keydown', handler)
    return () => document.removeEventListener('keydown', handler)
  }, [])

  const isWikiPage = location.pathname.startsWith('/wiki')

  return (
    <div
      className="grain"
      style={{ minHeight: '100vh' }}
    >
      <Header onMenuClick={() => setSidebarOpen(o => !o)} />

      <div
        style={{
          display: 'flex',
          paddingTop: 'var(--header-height)',
        }}
      >
        {/* Sidebar - only on wiki pages */}
        {isWikiPage && (
          <Sidebar
            isOpen={sidebarOpen}
            onClose={() => setSidebarOpen(false)}
          />
        )}

        {/* Main content */}
        <main
          style={{
            flex: 1,
            minWidth: 0,
            marginLeft: isWikiPage ? 'var(--sidebar-width)' : 0,
            transition: 'margin-left 0.3s ease',
          }}
          className={isWikiPage ? 'lg:ml-[280px]' : ''}
        >
          {children}
        </main>
      </div>
    </div>
  )
}
