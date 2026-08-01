import { css } from 'styled-components';

export const sectionLabelStyles = css`
  display: inline-flex;
  align-items: center;
  gap: 0.6rem;
  font-size: 0.7rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.28em;
  color: ${({ theme }) => theme.colors.text};
  margin-bottom: 1.1rem;
  padding: 0.48rem 0.95rem;
  border-radius: 999px;
  border: 1px solid rgba(0, 240, 255, 0.22);
  background: rgba(0, 240, 255, 0.05);
  font-family: ${({ theme }) => theme.fonts.mono};
  width: fit-content;

  &::before {
    content: '';
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background: ${({ theme }) => theme.colors.primary};
    box-shadow: 0 0 10px rgba(0, 240, 255, 0.6);
    flex-shrink: 0;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    font-size: 0.66rem;
    letter-spacing: 0.22em;
    padding: 0.42rem 0.8rem;
  }
`;

export const sectionTitleStyles = css`
  font-size: clamp(2.1rem, 4.5vw, 3.1rem);
  font-weight: 700;
  font-family: ${({ theme }) => theme.fonts.display};
  color: ${({ theme }) => theme.colors.white};
  letter-spacing: -0.05em;
  line-height: 0.98;
  text-wrap: balance;

  span {
    background: ${({ theme }) => theme.colors.brandGradient};
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    filter: drop-shadow(0 8px 20px rgba(0, 240, 255, 0.12));
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    letter-spacing: -0.04em;
    line-height: 1.01;
  }
`;