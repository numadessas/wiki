import { Routes, Route } from 'react-router-dom'
import { ThemeProvider } from './utils/ThemeContext.jsx'
import { LanguageProvider } from './utils/LanguageContext.jsx'
import Layout from './components/layout/Layout.jsx'
import HomePage from './pages/HomePage.jsx'
import WikiPage from './pages/WikiPage.jsx'
import AboutPage from './pages/AboutPage.jsx'
import NotFound from './pages/NotFound.jsx'

export default function App() {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <Layout>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/wiki/:slug" element={<WikiPage />} />
            <Route path="/wiki/about" element={<AboutPage />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Layout>
      </LanguageProvider>
    </ThemeProvider>
  )
}
