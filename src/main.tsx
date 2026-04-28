import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { ThemeProvider } from 'styled-components'
import { theme } from './styles/theme'
import GlobalStyles from './styles/GlobalStyles'
import { LanguageProvider } from './i18n/LanguageContext'
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <LanguageProvider>
        <GlobalStyles />
        <App />
      </LanguageProvider>
    </ThemeProvider>
  </StrictMode>,
)
