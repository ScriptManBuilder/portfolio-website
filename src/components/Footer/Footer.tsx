import styled from 'styled-components';

const SOCIAL = [
  { label: 'GitHub',   short: 'GH', href: 'https://github.com/ScriptManBuilder' },
  { label: 'LinkedIn', short: 'LI', href: 'https://www.linkedin.com/in/daniil-hora/' },
  { label: 'Telegram', short: 'TG', href: 'https://t.me/wellCoderDmg' },
  { label: 'Email',    short: '@',  href: 'mailto:shadowProgrammer@proton.me' },
];

const NAV = [
  { label: 'Home',      href: '#home' },
  { label: 'About',     href: '#about' },
  { label: 'Skills',    href: '#skills' },
  { label: 'Projects',  href: '#projects' },
  { label: 'Education', href: '#education' },
  { label: 'Contact',   href: '#contact' },
];

/* ── Shell ── */
const FooterWrapper = styled.footer`
  position: relative;
  padding: 0 2rem;
  background: ${({ theme }) => theme.colors.bgSecondary};
`;

const TopBar = styled.div`
  position: absolute;
  top: 0; left: 0; right: 0;
  height: 1px;
  background: linear-gradient(90deg, transparent, rgba(0, 240, 255, 0.15), rgba(123, 97, 255, 0.12), transparent);
`;

const Inner = styled.div`
  max-width: ${({ theme }) => theme.maxWidth};
  margin: 0 auto;
  padding: 3rem 0 2rem;
`;

/* ── Top row ── */
const TopRow = styled.div`
  display: grid;
  grid-template-columns: 1fr auto 1fr;
  align-items: start;
  gap: 2rem;
  margin-bottom: 2.5rem;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    grid-template-columns: 1fr;
    text-align: center;
  }
`;

/* Brand block */
const Brand = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const Name = styled.p`
  font-size: 1.3rem;
  font-weight: 800;
  font-family: ${({ theme }) => theme.fonts.heading};
  letter-spacing: -0.5px;
  color: ${({ theme }) => theme.colors.white};

  span {
    background: ${({ theme }) => theme.colors.gradient};
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }
`;

const Tagline = styled.p`
  font-size: 0.78rem;
  color: ${({ theme }) => theme.colors.textSecondary};
  font-family: ${({ theme }) => theme.fonts.mono};
  letter-spacing: 0.05em;
`;

const EmailLink = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 0.35rem;
  font-size: 0.8rem;
  color: ${({ theme }) => theme.colors.textSecondary};
  font-family: ${({ theme }) => theme.fonts.mono};
  transition: color ${({ theme }) => theme.transition};
  margin-top: 0.2rem;

  &:hover {
    color: ${({ theme }) => theme.colors.primary};
  }
`;

/* Nav block */
const NavGrid = styled.nav`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  align-items: center;
`;

const NavLabel = styled.p`
  font-size: 0.65rem;
  font-family: ${({ theme }) => theme.fonts.mono};
  color: ${({ theme }) => theme.colors.textSecondary};
  text-transform: uppercase;
  letter-spacing: 0.18em;
  margin-bottom: 0.4rem;
`;

const NavLinks = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.35rem 1.2rem;
  justify-content: center;
`;

const NavLink = styled.a`
  font-size: 0.82rem;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.textSecondary};
  position: relative;
  transition: color ${({ theme }) => theme.transition};

  &::after {
    content: '';
    position: absolute;
    bottom: -2px;
    left: 0; right: 0;
    height: 1px;
    background: ${({ theme }) => theme.colors.gradient};
    transform: scaleX(0);
    transition: transform 0.25s ease;
  }

  &:hover {
    color: ${({ theme }) => theme.colors.text};
  }

  &:hover::after {
    transform: scaleX(1);
  }
`;

/* Social block */
const SocialBlock = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 0.75rem;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    align-items: center;
  }
`;

const SocialLabel = styled.p`
  font-size: 0.65rem;
  font-family: ${({ theme }) => theme.fonts.mono};
  color: ${({ theme }) => theme.colors.textSecondary};
  text-transform: uppercase;
  letter-spacing: 0.18em;
`;

const SocialRow = styled.div`
  display: flex;
  gap: 0.5rem;
`;

const SocialLink = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 38px;
  height: 38px;
  border-radius: 10px;
  border: 1px solid ${({ theme }) => theme.colors.border};
  color: ${({ theme }) => theme.colors.textSecondary};
  font-size: 0.72rem;
  font-weight: 700;
  font-family: ${({ theme }) => theme.fonts.mono};
  transition: all ${({ theme }) => theme.transition};
  background: ${({ theme }) => theme.colors.bgCard};

  &:hover {
    border-color: ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.primary};
    box-shadow: 0 0 16px rgba(0, 240, 255, 0.12);
    transform: translateY(-2px);
  }
`;

/* ── Bottom bar ── */
const BottomBar = styled.div`
  border-top: 1px solid ${({ theme }) => theme.colors.border};
  padding-top: 1.25rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 0.5rem;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    justify-content: center;
    text-align: center;
  }
`;

const Copyright = styled.p`
  font-size: 0.73rem;
  color: ${({ theme }) => theme.colors.textMuted};
  font-family: ${({ theme }) => theme.fonts.mono};
`;

const MadeWith = styled.p`
  font-size: 0.73rem;
  color: ${({ theme }) => theme.colors.textMuted};
  font-family: ${({ theme }) => theme.fonts.mono};

  span {
    color: ${({ theme }) => theme.colors.primary};
  }
`;

/* ── Component ── */
const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <FooterWrapper>
      <TopBar />
      <Inner>
        <TopRow>
          {/* Left: brand */}
          <Brand>
            <Name>Daniil <span>Hora</span></Name>
            <Tagline>Full-Stack Developer &middot; Ukraine</Tagline>
            <EmailLink href="mailto:shadowProgrammer@proton.me">
              @ shadowProgrammer@proton.me
            </EmailLink>
          </Brand>

          {/* Center: nav */}
          <NavGrid>
            <NavLabel>Navigation</NavLabel>
            <NavLinks>
              {NAV.map(({ label, href }) => (
                <NavLink key={href} href={href}>{label}</NavLink>
              ))}
            </NavLinks>
          </NavGrid>

          {/* Right: socials */}
          <SocialBlock>
            <SocialLabel>Find me on</SocialLabel>
            <SocialRow>
              {SOCIAL.map(({ label, short, href }) => (
                <SocialLink
                  key={label}
                  href={href}
                  title={label}
                  target={href.startsWith('mailto') ? undefined : '_blank'}
                  rel={href.startsWith('mailto') ? undefined : 'noopener noreferrer'}
                >
                  {short}
                </SocialLink>
              ))}
            </SocialRow>
          </SocialBlock>
        </TopRow>

        <BottomBar>
          <Copyright>&copy; {year} Daniil Hora. All rights reserved.</Copyright>
          <MadeWith>Built with React &amp; <span>TypeScript</span></MadeWith>
        </BottomBar>
      </Inner>
    </FooterWrapper>
  );
};

export default Footer;