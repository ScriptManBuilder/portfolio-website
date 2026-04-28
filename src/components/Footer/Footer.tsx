import styled, { keyframes } from 'styled-components';
import { FaGithub, FaLinkedin, FaTelegramPlane, FaEnvelope } from 'react-icons/fa';
import { useLanguage } from '../../i18n/LanguageContext';

const SOCIAL = [
  { id: 'github', label: 'GitHub', Icon: FaGithub, href: 'https://github.com/ScriptManBuilder' },
  { id: 'linkedin', label: 'LinkedIn', Icon: FaLinkedin, href: 'https://www.linkedin.com/in/daniil-hora/' },
  { id: 'telegram', label: 'Telegram', Icon: FaTelegramPlane, href: 'https://t.me/wellCoderDmg' },
  { id: 'email', label: 'Email', Icon: FaEnvelope, href: 'mailto:dan.gora2004@gmail.com' },
];

const NAV = [
  { id: 'home', href: '#home' },
  { id: 'about', href: '#about' },
  { id: 'skills', href: '#skills' },
  { id: 'projects', href: '#projects' },
  { id: 'education', href: '#education' },
  { id: 'contact', href: '#contact' },
] as const;

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
  width: 40px;
  height: 40px;
  border-radius: 12px;
  border: 1px solid ${({ theme }) => theme.colors.border};
  color: ${({ theme }) => theme.colors.textSecondary};
  font-size: 1.05rem;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  background: ${({ theme }) => theme.colors.bgCard};

  &:hover {
    border-color: ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.primary};
    background: rgba(0, 240, 255, 0.07);
    box-shadow: 0 0 20px rgba(0, 240, 255, 0.15);
    transform: translateY(-3px);
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

const pulse = keyframes`
  0%, 100% { opacity: 1; box-shadow: 0 0 0 0 rgba(0, 232, 135, 0.5); }
  50% { opacity: 0.7; box-shadow: 0 0 0 5px rgba(0, 232, 135, 0); }
`;

const StatusBadge = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.35rem 0.85rem;
  border-radius: 9999px;
  border: 1px solid rgba(0, 232, 135, 0.2);
  background: rgba(0, 232, 135, 0.06);
  font-size: 0.72rem;
  font-family: ${({ theme }) => theme.fonts.mono};
  color: ${({ theme }) => theme.colors.accent};
  letter-spacing: 0.04em;

  &::before {
    content: '';
    display: block;
    width: 7px;
    height: 7px;
    border-radius: 50%;
    background: ${({ theme }) => theme.colors.accent};
    animation: ${pulse} 2.2s ease infinite;
    flex-shrink: 0;
  }
`;

/* ── Component ── */
const Footer = () => {
  const year = new Date().getFullYear();
  const { t } = useLanguage();
  const navigation = t.common.navigation;
  const profile = t.common.profile;

  return (
    <FooterWrapper>
      <TopBar />
      <Inner>
        <TopRow>
          {/* Left: brand */}
          <Brand>
            <Name>{profile.firstName} <span>{profile.lastName}</span></Name>
            <Tagline>{t.footer.tagline}</Tagline>
            <EmailLink href="mailto:dan.gora2004@gmail.com">
              @ dan.gora2004@gmail.com
            </EmailLink>
          </Brand>

          {/* Center: nav */}
          <NavGrid>
            <NavLabel>{t.footer.navigationLabel}</NavLabel>
            <NavLinks>
              {NAV.map(({ id, href }) => (
                <NavLink key={href} href={href}>{navigation[id]}</NavLink>
              ))}
            </NavLinks>
          </NavGrid>

          {/* Right: socials */}
          <SocialBlock>
            <SocialLabel>{t.footer.socialLabel}</SocialLabel>
            <SocialRow>
              {SOCIAL.map(({ id, label, Icon, href }) => (
                <SocialLink
                  key={id}
                  href={href}
                  title={label}
                  aria-label={label}
                  target={href.startsWith('mailto') ? undefined : '_blank'}
                  rel={href.startsWith('mailto') ? undefined : 'noopener noreferrer'}
                >
                  <Icon />
                </SocialLink>
              ))}
            </SocialRow>
          </SocialBlock>
        </TopRow>

        <BottomBar>
          <Copyright>&copy; {year} {profile.fullName}. {t.footer.copyrightSuffix}</Copyright>
          <StatusBadge>{t.footer.status}</StatusBadge>
        </BottomBar>
      </Inner>
    </FooterWrapper>
  );
};

export default Footer;