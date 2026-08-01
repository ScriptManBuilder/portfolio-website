import { useEffect, useState } from 'react';
import styled, { keyframes } from 'styled-components';
import { FaHome, FaUser, FaCode, FaGraduationCap, FaBriefcase, FaFolderOpen, FaEnvelope } from 'react-icons/fa';
import { useLanguage } from '../../i18n/LanguageContext';

const spin = keyframes`
  to { transform: rotate(360deg); }
`;

const Nav = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  background: rgba(6, 6, 17, 0.88);
  backdrop-filter: blur(24px);
  -webkit-backdrop-filter: blur(24px);
  border-bottom: 1px solid rgba(0, 240, 255, 0.07);
`;

const NavContainer = styled.div`
  max-width: ${({ theme }) => theme.maxWidth};
  margin: 0 auto;
  padding: 0 1.5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 64px;
`;

const LogoMark = styled.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  position: relative;
  width: 34px;
  height: 34px;
  border-radius: 10px;
  flex-shrink: 0;
  overflow: hidden;
  background: ${({ theme }) => theme.colors.bg};
  box-shadow: 0 6px 18px rgba(2, 6, 23, 0.5);

  &::before {
    content: '';
    position: absolute;
    inset: -60%;
    background: conic-gradient(
      from 0deg,
      transparent 0deg,
      rgba(0, 240, 255, 0.9) 40deg,
      transparent 100deg,
      rgba(123, 97, 255, 0.85) 190deg,
      transparent 250deg,
      rgba(0, 232, 135, 0.8) 320deg,
      transparent 360deg
    );
    animation: ${spin} 5s linear infinite;
    transition: animation-duration 0.3s ease;
  }

  &::after {
    content: '';
    position: absolute;
    inset: 1.5px;
    border-radius: 8px;
    background: ${({ theme }) => theme.colors.bg};
  }
`;

const LogoMarkText = styled.span`
  position: relative;
  z-index: 1;
  font-family: ${({ theme }) => theme.fonts.mono};
  font-size: 0.68rem;
  font-weight: 700;
  letter-spacing: -0.02em;
  color: ${({ theme }) => theme.colors.primary};
`;

const Logo = styled.a`
  font-size: 1.1rem;
  font-weight: 700;
  font-family: ${({ theme }) => theme.fonts.display};
  color: ${({ theme }) => theme.colors.white};
  letter-spacing: -0.7px;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  z-index: 1001;
  transition: opacity ${({ theme }) => theme.transition};

  &:hover { opacity: 0.85; }

  &:hover ${LogoMark}::before {
    animation-duration: 1.2s;
  }
`;

const LogoText = styled.span`
  color: ${({ theme }) => theme.colors.white};
  font-family: ${({ theme }) => theme.fonts.display};
  font-weight: 700;
  letter-spacing: -0.03em;

  em {
    font-style: normal;
    background: ${({ theme }) => theme.colors.brandGradient};
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }
`;

/* ─── Desktop nav links ─── */
const DesktopNav = styled.nav`
  display: flex;
  align-items: center;
  gap: 0.2rem;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    display: none;
  }
`;

const DesktopActions = styled.div`
  display: flex;
  align-items: center;
  gap: 0.65rem;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    display: none;
  }
`;

const NavLink = styled.a`
  position: relative;
  display: inline-flex;
  align-items: center;
  color: ${({ theme }) => theme.colors.textSecondary};
  font-size: 0.88rem;
  font-weight: 500;
  padding: 0.5rem 0.95rem;
  border-radius: 4px;
  transition: color 0.3s ease;

  .trace {
    position: absolute;
    background: ${({ theme }) => theme.colors.primary};
    transition: width 0.3s cubic-bezier(0.4, 0, 0.2, 1),
      height 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  }

  .trace-top,
  .trace-bottom {
    left: 0;
    width: 0;
    height: 1px;
  }
  .trace-top { top: 0; transition-delay: 0s; }
  .trace-bottom { bottom: 0; right: 0; left: auto; transition-delay: 0.24s; }

  .trace-right,
  .trace-left {
    top: 0;
    width: 1px;
    height: 0;
  }
  .trace-right { right: 0; transition-delay: 0.12s; }
  .trace-left { left: 0; top: auto; bottom: 0; transition-delay: 0.36s; }

  @media (hover: hover) and (pointer: fine) {
    &:hover {
      color: ${({ theme }) => theme.colors.primary};
    }

    &:hover .trace-top,
    &:hover .trace-bottom {
      width: 100%;
    }

    &:hover .trace-right,
    &:hover .trace-left {
      height: 100%;
    }
  }
`;

const HireMeBtn = styled.a`
  display: inline-flex;
  align-items: center;
  padding: 0.5rem 1.2rem;
  border-radius: 50px;
  background: #0f0f24;
  border: 1.5px solid rgba(0, 240, 255, 0.15);
  color: ${({ theme }) => theme.colors.primary};
  font-size: 0.82rem;
  font-weight: 600;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  white-space: nowrap;
  margin-left: 0.5rem;
  box-shadow: 0 0 16px rgba(0, 240, 255, 0.05);

  @media (hover: hover) and (pointer: fine) {
    &:hover {
      background: linear-gradient(135deg, #00f0ff 0%, #5ef5d2 50%, #00e887 100%);
      color: #060611;
      border-color: transparent;
      box-shadow: 0 6px 24px rgba(0, 240, 255, 0.4);
      transform: translateY(-1px) scale(1.04);
    }
  }
`;

const LanguageSwitcher = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 0.2rem;
  padding: 0.2rem;
  border-radius: 999px;
  border: 1px solid rgba(0, 240, 255, 0.14);
  background: rgba(0, 240, 255, 0.04);
`;

const LanguageButton = styled.button<{ $active: boolean }>`
  min-width: 42px;
  padding: 0.36rem 0.7rem;
  border: 0;
  border-radius: 999px;
  background: ${({ $active }) => ($active ? 'linear-gradient(135deg, #00f0ff 0%, #5ef5d2 100%)' : 'transparent')};
  color: ${({ $active, theme }) => ($active ? '#060611' : theme.colors.textSecondary)};
  font-size: 0.72rem;
  font-weight: 700;
  font-family: ${({ theme }) => theme.fonts.mono};
  letter-spacing: 0.06em;
  cursor: pointer;
  transition: all ${({ theme }) => theme.transition};

  &:hover {
    color: ${({ $active, theme }) => ($active ? '#060611' : theme.colors.primary)};
    background: ${({ $active }) => ($active ? 'linear-gradient(135deg, #00f0ff 0%, #5ef5d2 100%)' : 'rgba(0, 240, 255, 0.08)')};
  }
`;

/* ─── Hamburger ─── */
const Hamburger = styled.button<{ $open: boolean }>`
  display: none;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 5px;
  width: 44px;
  height: 44px;
  background: rgba(0, 240, 255, 0.06);
  border: 1px solid rgba(0, 240, 255, 0.12);
  border-radius: 10px;
  cursor: pointer;
  z-index: 1001;
  transition: background 0.25s ease, border-color 0.25s ease;

  &:hover {
    background: rgba(0, 240, 255, 0.12);
    border-color: rgba(0, 240, 255, 0.3);
  }

  span {
    display: block;
    width: 20px;
    height: 2px;
    background: ${({ theme }) => theme.colors.primary};
    border-radius: 2px;
    transition: all 0.35s cubic-bezier(0.4, 0, 0.2, 1);
    transform-origin: center;
  }

  span:nth-child(1) {
    transform: ${({ $open }) => ($open ? 'translateY(7px) rotate(45deg)' : 'none')};
  }

  span:nth-child(2) {
    opacity: ${({ $open }) => ($open ? 0 : 1)};
    transform: ${({ $open }) => ($open ? 'scaleX(0)' : 'scaleX(1)')};
  }

  span:nth-child(3) {
    transform: ${({ $open }) => ($open ? 'translateY(-7px) rotate(-45deg)' : 'none')};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    display: flex;
  }
`;

/* ─── Mobile drawer backdrop ─── */
const Backdrop = styled.div<{ $open: boolean }>`
  display: none;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    display: block;
    position: fixed;
    inset: 0;
    z-index: 998;
    background: rgba(0, 0, 0, 0.6);
    backdrop-filter: blur(4px);
    opacity: ${({ $open }) => ($open ? 1 : 0)};
    pointer-events: ${({ $open }) => ($open ? 'all' : 'none')};
    transition: opacity 0.35s ease;
  }
`;

/* ─── Mobile drawer ─── */
const MobileDrawer = styled.div<{ $open: boolean }>`
  display: none;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    display: flex;
    flex-direction: column;
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    width: min(80vw, 300px);
    z-index: 999;
    background: #0b0b1e;
    border-left: 1px solid rgba(0, 240, 255, 0.1);
    box-shadow: -12px 0 60px rgba(0, 0, 0, 0.5);
    padding: 90px 2rem 2.5rem;
    gap: 0.4rem;
    transform: translateX(${({ $open }) => ($open ? '0' : '100%')});
    transition: transform 0.4s cubic-bezier(0.4, 0, 0.2, 1);
    overflow-y: auto;
  }
`;

const MobileNavLink = styled.a`
  display: flex;
  align-items: center;
  gap: 0.85rem;
  color: ${({ theme }) => theme.colors.textSecondary};
  font-size: 1rem;
  font-weight: 500;
  padding: 0.85rem 1rem;
  border-radius: 10px;
  transition: all 0.25s ease;
  border: 1px solid transparent;
  font-family: ${({ theme }) => theme.fonts.heading};

  &:active {
    background: rgba(0, 240, 255, 0.08);
    transform: scale(0.98);
  }

  @media (hover: hover) and (pointer: fine) {
    &:hover {
      color: ${({ theme }) => theme.colors.primary};
      background: rgba(0, 240, 255, 0.06);
      border-color: rgba(0, 240, 255, 0.12);
      transform: translateX(4px);
    }
  }
`;

const MobileNavIcon = styled.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 20px;
  color: ${({ theme }) => theme.colors.primary};
  opacity: 0.75;
  font-size: 0.95rem;
  flex-shrink: 0;
`;

const MobileDivider = styled.div`
  height: 1px;
  background: rgba(0, 240, 255, 0.06);
  margin: 0.5rem 0;
`;

const MobileLanguageBlock = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.7rem;
  margin-top: 0.25rem;
  padding: 0.85rem 0.95rem 0.95rem;
  border-radius: 16px;
  border: 1px solid rgba(0, 240, 255, 0.08);
  background: rgba(10, 14, 36, 0.72);
`;

const MobileLanguageLabel = styled.span`
  font-size: 0.72rem;
  font-family: ${({ theme }) => theme.fonts.mono};
  text-transform: uppercase;
  letter-spacing: 0.12em;
  color: ${({ theme }) => theme.colors.textSecondary};
`;

const MobileLanguageSwitcher = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 0.45rem;
  padding: 0.28rem;
  border-radius: 18px;
  border: 1px solid rgba(0, 240, 255, 0.14);
  background: rgba(0, 18, 38, 0.72);
`;

const MobileLanguageButton = styled.button<{ $active: boolean }>`
  width: 100%;
  min-height: 42px;
  padding: 0.72rem 0.8rem;
  border: 0;
  border-radius: 14px;
  background: ${({ $active, theme }) => ($active ? theme.colors.primary : 'transparent')};
  color: ${({ $active, theme }) => ($active ? '#060611' : theme.colors.textSecondary)};
  font-size: 0.76rem;
  font-weight: 800;
  font-family: ${({ theme }) => theme.fonts.mono};
  letter-spacing: 0.08em;
  cursor: pointer;
  transition: all ${({ theme }) => theme.transition};

  &:hover {
    color: ${({ $active, theme }) => ($active ? '#060611' : theme.colors.primary)};
    background: ${({ $active, theme }) => ($active ? theme.colors.primary : 'rgba(0, 240, 255, 0.08)')};
  }
`;

const MobileHireBtn = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.4rem;
  margin-top: 0.75rem;
  padding: 0.9rem 1.5rem;
  border-radius: 50px;
  background: ${({ theme }) => theme.colors.primary};
  color: #06101a;
  font-size: 0.95rem;
  font-weight: 700;
  letter-spacing: 0.3px;
  transition: all 0.3s ease;
  box-shadow: 0 8px 26px rgba(0, 240, 255, 0.22);

  &:active {
    transform: scale(0.98);
  }

  @media (hover: hover) and (pointer: fine) {
    &:hover {
      background: #5ef5d2;
      transform: translateY(-2px);
      box-shadow: 0 10px 34px rgba(0, 240, 255, 0.32);
    }
  }
`;

const NAV_ITEMS = [
  { id: 'home', Icon: FaHome },
  { id: 'about', Icon: FaUser },
  { id: 'skills', Icon: FaCode },
  { id: 'education', Icon: FaGraduationCap },
  { id: 'experience', Icon: FaBriefcase },
  { id: 'projects', Icon: FaFolderOpen },
  { id: 'contact', Icon: FaEnvelope },
] as const;

const Header = () => {
  const [open, setOpen] = useState(false);
  const { language, setLanguage, t } = useLanguage();
  const navigation = t.common.navigation;
  const profile = t.common.profile;

  // Lock body scroll when drawer is open
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [open]);

  const close = () => setOpen(false);

  return (
    <>
      <Nav>
        <NavContainer>
          <Logo href="#home" onClick={close}>
            <LogoMark><LogoMarkText>DH</LogoMarkText></LogoMark>
            <LogoText>{profile.firstName} <em>{profile.lastName}</em></LogoText>
          </Logo>

          {/* Desktop */}
          <DesktopNav>
            {NAV_ITEMS.map(({ id }) => (
              <NavLink key={id} href={`#${id}`}>
                {navigation[id]}
                <span className="trace trace-top" />
                <span className="trace trace-right" />
                <span className="trace trace-bottom" />
                <span className="trace trace-left" />
              </NavLink>
            ))}
          </DesktopNav>
          <DesktopActions>
            <LanguageSwitcher role="group" aria-label={t.header.languageSwitcherLabel}>
              <LanguageButton
                type="button"
                $active={language === 'en'}
                onClick={() => setLanguage('en')}
                aria-label={t.header.switchToEnglish}
              >
                EN
              </LanguageButton>
              <LanguageButton
                type="button"
                $active={language === 'uk'}
                onClick={() => setLanguage('uk')}
                aria-label={t.header.switchToUkrainian}
              >
                UA
              </LanguageButton>
            </LanguageSwitcher>
            <HireMeBtn href="#contact">{t.header.contactCta}</HireMeBtn>
          </DesktopActions>

          {/* Mobile hamburger */}
          <Hamburger $open={open} onClick={() => setOpen(v => !v)} aria-label={t.header.menuLabel}>
            <span />
            <span />
            <span />
          </Hamburger>
        </NavContainer>
      </Nav>

      {/* Mobile drawer */}
      <Backdrop $open={open} onClick={close} />
      <MobileDrawer $open={open}>
        {NAV_ITEMS.map(({ id, Icon }) => (
          <MobileNavLink key={id} href={`#${id}`} onClick={close}>
            <MobileNavIcon><Icon /></MobileNavIcon>
            {navigation[id]}
          </MobileNavLink>
        ))}
        <MobileDivider />
        <MobileLanguageBlock>
          <MobileLanguageLabel>{t.header.mobileLanguageLabel}</MobileLanguageLabel>
          <MobileLanguageSwitcher role="group" aria-label={t.header.languageSwitcherLabel}>
            <MobileLanguageButton
              type="button"
              $active={language === 'en'}
              onClick={() => setLanguage('en')}
              aria-label={t.header.switchToEnglish}
            >
              EN
            </MobileLanguageButton>
            <MobileLanguageButton
              type="button"
              $active={language === 'uk'}
              onClick={() => setLanguage('uk')}
              aria-label={t.header.switchToUkrainian}
            >
              UA
            </MobileLanguageButton>
          </MobileLanguageSwitcher>
        </MobileLanguageBlock>
        <MobileHireBtn href="#contact" onClick={close}><FaEnvelope /> {t.header.contactCta}</MobileHireBtn>
      </MobileDrawer>
    </>
  );
};

export default Header;
