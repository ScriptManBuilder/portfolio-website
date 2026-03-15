import { useEffect, useState } from 'react';
import styled from 'styled-components';

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

const Logo = styled.a`
  font-size: 1.1rem;
  font-weight: 700;
  font-family: ${({ theme }) => theme.fonts.heading};
  color: ${({ theme }) => theme.colors.white};
  letter-spacing: -0.5px;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  z-index: 1001;
  transition: opacity ${({ theme }) => theme.transition};

  &:hover { opacity: 0.85; }
`;

const LogoMark = styled.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  border-radius: 8px;
  background: ${({ theme }) => theme.colors.gradient};
  font-size: 0.85rem;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.bg};
  flex-shrink: 0;
`;

const LogoText = styled.span`
  color: ${({ theme }) => theme.colors.white};
  em {
    font-style: normal;
    color: ${({ theme }) => theme.colors.primary};
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

const NavLink = styled.a`
  position: relative;
  color: ${({ theme }) => theme.colors.textSecondary};
  font-size: 0.88rem;
  font-weight: 500;
  padding: 0.45rem 0.85rem;
  border-radius: 6px;
  transition: color ${({ theme }) => theme.transition},
    background ${({ theme }) => theme.transition};

  &::after {
    content: '';
    position: absolute;
    bottom: 2px;
    left: 50%;
    transform: translateX(-50%) scaleX(0);
    width: 60%;
    height: 2px;
    background: ${({ theme }) => theme.colors.gradient};
    border-radius: 1px;
    transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  }

  &:hover {
    color: ${({ theme }) => theme.colors.primary};
    background: rgba(0, 240, 255, 0.04);
  }

  &:hover::after {
    transform: translateX(-50%) scaleX(1);
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

  &:hover {
    background: linear-gradient(135deg, #00f0ff 0%, #5ef5d2 50%, #00e887 100%);
    color: #060611;
    border-color: transparent;
    box-shadow: 0 6px 24px rgba(0, 240, 255, 0.4);
    transform: translateY(-1px) scale(1.04);
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    display: none;
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
  gap: 0.75rem;
  color: ${({ theme }) => theme.colors.textSecondary};
  font-size: 1rem;
  font-weight: 500;
  padding: 0.85rem 1rem;
  border-radius: 10px;
  transition: all 0.25s ease;
  border: 1px solid transparent;
  font-family: ${({ theme }) => theme.fonts.heading};

  &:hover {
    color: ${({ theme }) => theme.colors.primary};
    background: rgba(0, 240, 255, 0.06);
    border-color: rgba(0, 240, 255, 0.12);
    transform: translateX(4px);
  }
`;

const MobileDivider = styled.div`
  height: 1px;
  background: rgba(0, 240, 255, 0.06);
  margin: 0.5rem 0;
`;

const MobileHireBtn = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 0.75rem;
  padding: 0.9rem 1.5rem;
  border-radius: 50px;
  background: linear-gradient(135deg, #00f0ff 0%, #7b61ff 50%, #00e887 100%);
  color: #060611;
  font-size: 0.95rem;
  font-weight: 700;
  letter-spacing: 0.3px;
  transition: all 0.3s ease;
  box-shadow: 0 4px 20px rgba(0, 240, 255, 0.25);

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 30px rgba(0, 240, 255, 0.4);
  }
`;

const NAV_ITEMS = [
  { label: 'Home',      icon: '⌂' },
  { label: 'About',     icon: '◈' },
  { label: 'Skills',    icon: '◉' },
  { label: 'Projects',  icon: '▦' },
  { label: 'Education', icon: '◎' },
  { label: 'Contact',   icon: '✉' },
] as const;

const Header = () => {
  const [open, setOpen] = useState(false);

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
            <LogoMark>DH</LogoMark>
            <LogoText>Daniil <em>Hora</em></LogoText>
          </Logo>

          {/* Desktop */}
          <DesktopNav>
            {NAV_ITEMS.map(({ label }) => (
              <NavLink key={label} href={`#${label.toLowerCase()}`}>{label}</NavLink>
            ))}
          </DesktopNav>
          <HireMeBtn href="#contact">Hire Me</HireMeBtn>

          {/* Mobile hamburger */}
          <Hamburger $open={open} onClick={() => setOpen(v => !v)} aria-label="Toggle menu">
            <span />
            <span />
            <span />
          </Hamburger>
        </NavContainer>
      </Nav>

      {/* Mobile drawer */}
      <Backdrop $open={open} onClick={close} />
      <MobileDrawer $open={open}>
        {NAV_ITEMS.map(({ label, icon }) => (
          <MobileNavLink key={label} href={`#${label.toLowerCase()}`} onClick={close}>
            <span style={{ opacity: 0.5, fontFamily: 'monospace' }}>{icon}</span>
            {label}
          </MobileNavLink>
        ))}
        <MobileDivider />
        <MobileHireBtn href="#contact" onClick={close}>✦ Hire Me</MobileHireBtn>
      </MobileDrawer>
    </>
  );
};

export default Header;
