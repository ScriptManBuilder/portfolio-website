import { useState } from 'react';
import styled from 'styled-components';

const Nav = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  background: rgba(6, 6, 17, 0.85);
  backdrop-filter: blur(24px);
  -webkit-backdrop-filter: blur(24px);
  border-bottom: 1px solid rgba(0, 240, 255, 0.07);
`;

const NavContainer = styled.div`
  max-width: ${({ theme }) => theme.maxWidth};
  margin: 0 auto;
  padding: 0 2rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 68px;
`;

const Logo = styled.a`
  font-size: 1.15rem;
  font-weight: 700;
  font-family: ${({ theme }) => theme.fonts.heading};
  color: ${({ theme }) => theme.colors.white};
  letter-spacing: -0.5px;
  display: flex;
  align-items: center;
  gap: 0.5rem;
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
  font-family: ${({ theme }) => theme.fonts.heading};
  flex-shrink: 0;
`;

const LogoText = styled.span`
  color: ${({ theme }) => theme.colors.white};

  em {
    font-style: normal;
    color: ${({ theme }) => theme.colors.primary};
  }
`;

const NavRight = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    gap: 0.8rem;
  }
`;

const NavLinks = styled.nav<{ $open: boolean }>`
  display: flex;
  align-items: center;
  gap: 0.2rem;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    position: fixed;
    top: 68px;
    left: 0;
    right: 0;
    bottom: 0;
    flex-direction: column;
    justify-content: center;
    gap: 0.5rem;
    background: rgba(6, 6, 17, 0.97);
    backdrop-filter: blur(24px);
    transform: translateX(${({ $open }) => ($open ? '0' : '100%')});
    transition: transform 0.4s cubic-bezier(0.4, 0, 0.2, 1);
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

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: 1.3rem;
    padding: 0.8rem 1.5rem;
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
    box-shadow: 0 6px 24px rgba(0, 240, 255, 0.4), 0 0 50px rgba(0, 240, 255, 0.1);
    transform: translateY(-1px) scale(1.04);
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    display: none;
  }
`;

const Hamburger = styled.button<{ $open: boolean }>`
  display: none;
  flex-direction: column;
  gap: 5px;
  background: none;
  padding: 4px;

  span {
    display: block;
    width: 22px;
    height: 2px;
    background: ${({ theme }) => theme.colors.primary};
    border-radius: 2px;
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  }

  span:nth-child(1) {
    transform: ${({ $open }) => ($open ? 'rotate(45deg) translate(5px, 5px)' : 'none')};
  }

  span:nth-child(2) {
    opacity: ${({ $open }) => ($open ? 0 : 1)};
  }

  span:nth-child(3) {
    transform: ${({ $open }) => ($open ? 'rotate(-45deg) translate(5px, -5px)' : 'none')};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    display: flex;
  }
`;

const NAV_ITEMS = ['Home', 'About', 'Skills', 'Projects', 'Education', 'Contact'] as const;

const Header = () => {
  const [open, setOpen] = useState(false);
  const handleClick = () => setOpen(false);

  return (
    <Nav>
      <NavContainer>
        <Logo href="#home">
          <LogoMark>DH</LogoMark>
          <LogoText>Daniil <em>Hora</em></LogoText>
        </Logo>

        <NavRight>
          <NavLinks $open={open}>
            {NAV_ITEMS.map((item) => (
              <NavLink
                key={item}
                href={`#${item.toLowerCase()}`}
                onClick={handleClick}
              >
                {item}
              </NavLink>
            ))}
          </NavLinks>
          <HireMeBtn href="#contact">Hire Me</HireMeBtn>
          <Hamburger $open={open} onClick={() => setOpen(!open)} aria-label="Toggle menu">
            <span />
            <span />
            <span />
          </Hamburger>
        </NavRight>
      </NavContainer>
    </Nav>
  );
};

export default Header;
