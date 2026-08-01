import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  *, *::before, *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    scroll-behavior: smooth;
    font-size: 16px;
  }

  body {
    font-family: ${({ theme }) => theme.fonts.body};
    background-color: ${({ theme }) => theme.colors.bg};
    color: ${({ theme }) => theme.colors.text};
    line-height: 1.6;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    overflow-x: hidden;
    position: relative;
  }

  /* Aurora — soft drifting brand-color blobs behind every section */
  @keyframes auroraDrift {
    0%   { transform: translate3d(0, 0, 0) scale(1); }
    100% { transform: translate3d(-3%, 2%, 0) scale(1.05); }
  }

  body::before {
    content: '';
    position: fixed;
    inset: -10%;
    z-index: 9998;
    pointer-events: none;
    background-image:
      radial-gradient(circle at 16% 20%, rgba(0, 240, 255, 0.13), transparent 42%),
      radial-gradient(circle at 84% 14%, rgba(123, 97, 255, 0.12), transparent 44%),
      radial-gradient(circle at 78% 84%, rgba(0, 232, 135, 0.1), transparent 46%),
      radial-gradient(circle at 18% 86%, rgba(123, 97, 255, 0.08), transparent 42%);
    mix-blend-mode: screen;
    animation: auroraDrift 26s ease-in-out infinite alternate;
  }

  @media (prefers-reduced-motion: reduce) {
    body::before {
      animation: none;
    }
  }

  /* Film grain — breaks up flat color and gradient banding */
  body::after {
    content: '';
    position: fixed;
    inset: 0;
    z-index: 9999;
    pointer-events: none;
    opacity: 0.035;
    mix-blend-mode: overlay;
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='180' height='180'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E");
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  ul, ol {
    list-style: none;
  }

  img {
    max-width: 100%;
    display: block;
  }

  button {
    cursor: pointer;
    border: none;
    outline: none;
    font-family: inherit;
  }

  input, textarea {
    font-family: inherit;
    outline: none;
  }

  ::selection {
    background: rgba(0, 240, 255, 0.3);
    color: ${({ theme }) => theme.colors.white};
  }

  ::-webkit-scrollbar {
    width: 6px;
  }

  ::-webkit-scrollbar-track {
    background: ${({ theme }) => theme.colors.bg};
  }

  ::-webkit-scrollbar-thumb {
    background: ${({ theme }) => theme.colors.border};
    border-radius: 3px;
  }

  ::-webkit-scrollbar-thumb:hover {
    background: ${({ theme }) => theme.colors.primary};
  }
`;

export default GlobalStyles;
