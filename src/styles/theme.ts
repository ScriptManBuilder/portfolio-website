export const theme = {
  colors: {
    bg: '#060611',
    bgSecondary: '#0c0c1d',
    bgCard: '#111128',
    primary: '#00f0ff',
    primaryDark: '#00b8c4',
    secondary: '#7b61ff',
    accent: '#00e887',
    gradient: 'linear-gradient(135deg, #00f0ff 0%, #7b61ff 50%, #00e887 100%)',
    gradientSubtle: 'linear-gradient(135deg, rgba(0,240,255,0.08) 0%, rgba(123,97,255,0.08) 100%)',
    glow: 'rgba(0, 240, 255, 0.15)',
    glowStrong: 'rgba(0, 240, 255, 0.35)',
    text: '#e4e8f1',
    textSecondary: '#8892a8',
    textMuted: '#515a6e',
    border: '#1a1a3e',
    borderLight: '#252550',
    white: '#ffffff',
  },
  fonts: {
    body: "'Space Grotesk', 'Inter', -apple-system, BlinkMacSystemFont, sans-serif",
    mono: "'JetBrains Mono', 'Fira Code', monospace",
    heading: "'Space Grotesk', sans-serif",
  },
  breakpoints: {
    sm: '480px',
    md: '768px',
    lg: '1024px',
    xl: '1280px',
  },
  maxWidth: '1200px',
  transition: '0.3s cubic-bezier(0.4, 0, 0.2, 1)',
} as const;

export type Theme = typeof theme;
