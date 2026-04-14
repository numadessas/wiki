import { createContext, useContext, useState } from 'react'
import { en } from '../content/en/ui.js'
import { pt } from '../content/pt/ui.js'

const LanguageContext = createContext(null)

const uiStrings = { en, pt }

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState('en')
  const t = uiStrings[lang]

  return (
    <LanguageContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const ctx = useContext(LanguageContext)
  if (!ctx) throw new Error('useLanguage must be used within LanguageProvider')
  return ctx
}
