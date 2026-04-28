import { css } from 'styled-components';

export const sectionLabelStyles = css`
  display: inline-flex;
  align-items: center;
  gap: 0.8rem;
  font-size: 0.7rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.34em;
  color: ${({ theme }) => theme.colors.white};
  margin-bottom: 1rem;
  padding: 0.48rem 0.9rem 0.48rem 0.95rem;
  border-radius: 999px;
  border: 1px solid rgba(111, 247, 242, 0.12);
  background:
    linear-gradient(180deg, rgba(255, 255, 255, 0.03), rgba(255, 255, 255, 0.01)),
    rgba(9, 17, 35, 0.72);
  box-shadow:
    inset 0 1px 0 rgba(255, 255, 255, 0.05),
    0 10px 24px rgba(5, 10, 24, 0.26);
  font-family: ${({ theme }) => theme.fonts.mono};
  width: fit-content;

  &::before {
    content: '';
    width: 7px;
    height: 7px;
    border-radius: 50%;
    background: ${({ theme }) => theme.colors.brandGradientBold};
    box-shadow: 0 0 12px rgba(72, 196, 255, 0.45);
    flex-shrink: 0;
  }

  &::after {
    content: '';
    width: 56px;
    height: 1px;
    background: ${({ theme }) => theme.colors.labelGradient};
    opacity: 0.75;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    font-size: 0.66rem;
    letter-spacing: 0.28em;
    padding: 0.42rem 0.75rem 0.42rem 0.8rem;

    &::after {
      width: 34px;
    }
  }
`;

export const sectionTitleStyles = css`
  font-size: clamp(2.1rem, 4.5vw, 3.1rem);
  font-weight: 800;
  font-family: ${({ theme }) => theme.fonts.display};
  color: ${({ theme }) => theme.colors.white};
  letter-spacing: -0.06em;
  line-height: 0.98;
  text-wrap: balance;

  span {
    background: ${({ theme }) => theme.colors.brandGradientBold};
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    filter: drop-shadow(0 10px 24px rgba(72, 196, 255, 0.14));
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    letter-spacing: -0.05em;
    line-height: 1.01;
  }
`;