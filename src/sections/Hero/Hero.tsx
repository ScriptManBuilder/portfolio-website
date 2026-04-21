import styled, { keyframes } from 'styled-components';
import cvFile from '../../assets/Daniil Hora CV.pdf';
import photo from '../../assets/photo_2026-02-12_21-56-05.jpg';

const float = keyframes`
  0%, 100% { transform: translateY(0px); }
  50% { transform: translateY(-12px); }
`;

const pulse = keyframes`
  0%, 100% { opacity: 0.4; transform: scale(1); }
  50% { opacity: 1; transform: scale(1.2); }
`;

const rotateBorder = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

const fadeUp = keyframes`
  from { opacity: 0; transform: translateY(24px); }
  to   { opacity: 1; transform: translateY(0); }
`;

const blink = keyframes`
  0%, 49% { opacity: 1; }
  50%, 100% { opacity: 0; }
`;

const scrollBounce = keyframes`
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(7px); }
`;

/* ── Section shell ──────────────────────────────────────────────── */

const Section = styled.section`
  min-height: 100vh;
  display: flex;
  align-items: center;
  padding: 6rem 2rem 4rem;
  position: relative;
  overflow: hidden;
  background-image: radial-gradient(rgba(0, 240, 255, 0.045) 1px, transparent 1px);
  background-size: 28px 28px;

  &::before {
    content: '';
    position: absolute;
    top: -20%;
    right: 5%;
    width: 560px;
    height: 560px;
    background: radial-gradient(circle, rgba(0, 240, 255, 0.07) 0%, transparent 65%);
    border-radius: 50%;
    pointer-events: none;
  }

  &::after {
    content: '';
    position: absolute;
    bottom: -15%;
    left: -5%;
    width: 460px;
    height: 460px;
    background: radial-gradient(circle, rgba(123, 97, 255, 0.07) 0%, transparent 65%);
    border-radius: 50%;
    pointer-events: none;
  }
`;

const Container = styled.div`
  max-width: ${({ theme }) => theme.maxWidth};
  margin: 0 auto;
  width: 100%;
  position: relative;
  z-index: 1;
  display: grid;
  grid-template-columns: 1fr 380px;
  gap: 5rem;
  align-items: center;

  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    grid-template-columns: 1fr 310px;
    gap: 3.5rem;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    grid-template-columns: 1fr;
    gap: 3rem;
    text-align: center;
  }
`;

/* ── Left column ────────────────────────────────────────────────── */

const Left = styled.div`
  display: flex;
  flex-direction: column;
  animation: ${fadeUp} 0.65s ease both;
`;

/* Row 1: status badge + location */
const TopLine = styled.div`
  display: flex;
  align-items: center;
  gap: 0.85rem;
  margin-bottom: 1.75rem;
  flex-wrap: wrap;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    justify-content: center;
  }
`;

const StatusBadge = styled.span`
  display: inline-flex;
  align-items: center;
  gap: 0.45rem;
  padding: 0.32rem 0.85rem;
  border-radius: 20px;
  border: 1px solid rgba(0, 232, 135, 0.4);
  background: rgba(0, 232, 135, 0.08);
  font-size: 0.77rem;
  color: ${({ theme }) => theme.colors.accent};
  font-weight: 600;
  font-family: ${({ theme }) => theme.fonts.mono};
  letter-spacing: 0.02em;
  box-shadow: 0 0 14px rgba(0, 232, 135, 0.18), inset 0 1px 0 rgba(0, 232, 135, 0.1);

  &::before {
    content: '';
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background: ${({ theme }) => theme.colors.accent};
    flex-shrink: 0;
    animation: ${pulse} 2s ease-in-out infinite;
  }
`;

const LocationTag = styled.span`
  display: inline-flex;
  align-items: center;
  gap: 0.3rem;
  font-size: 0.77rem;
  color: ${({ theme }) => theme.colors.textSecondary};
  font-family: ${({ theme }) => theme.fonts.mono};
  border-left: 1px solid ${({ theme }) => theme.colors.border};
  padding-left: 0.85rem;
`;

/* Row 2: name */
const Name = styled.h1`
  font-size: clamp(2.8rem, 6vw, 4.6rem);
  font-weight: 800;
  font-family: ${({ theme }) => theme.fonts.heading};
  line-height: 1;
  letter-spacing: -2px;
  margin-bottom: 0.7rem;
  color: ${({ theme }) => theme.colors.white};

  span {
    background: ${({ theme }) => theme.colors.gradient};
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }
`;

/* Row 3: role */
const Role = styled.p`
  font-size: 0.96rem;
  font-family: ${({ theme }) => theme.fonts.mono};
  color: ${({ theme }) => theme.colors.textSecondary};
  margin-bottom: 1.5rem;
  display: flex;
  align-items: center;
  gap: 0.4rem;
  flex-wrap: wrap;

  strong {
    color: ${({ theme }) => theme.colors.primary};
    font-weight: 600;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    justify-content: center;
  }
`;

/* Gradient divider */
const Rule = styled.div`
  height: 1px;
  background: linear-gradient(
    to right,
    rgba(0, 240, 255, 0.3),
    rgba(123, 97, 255, 0.2),
    transparent
  );
  margin-bottom: 1.6rem;
`;

/* Row 5: intro */
const Intro = styled.p`
  font-size: 1rem;
  color: ${({ theme }) => theme.colors.textSecondary};
  line-height: 1.8;
  margin-bottom: 1.5rem;
  max-width: 500px;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    margin-left: auto;
    margin-right: auto;
  }
`;

/* Row 6: work modes */
const WorkModes = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.4rem;
  margin-bottom: 2rem;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    justify-content: center;
  }
`;

const WorkTag = styled.span`
  padding: 0.22rem 0.65rem;
  border-radius: 4px;
  font-size: 0.7rem;
  font-weight: 500;
  font-family: ${({ theme }) => theme.fonts.mono};
  border: 1px solid rgba(0, 240, 255, 0.1);
  background: rgba(0, 240, 255, 0.03);
  color: ${({ theme }) => theme.colors.textSecondary};
  cursor: default;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  transition: all ${({ theme }) => theme.transition};

  &:hover {
    background: rgba(0, 240, 255, 0.08);
    border-color: rgba(0, 240, 255, 0.25);
    color: ${({ theme }) => theme.colors.primary};
  }
`;

/* Row 7: actions */
const Actions = styled.div`
  display: flex;
  align-items: center;
  gap: 0.7rem;
  flex-wrap: wrap;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    justify-content: center;
  }
`;

const PrimaryBtn = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  padding: 0.8rem 1.8rem;
  border-radius: 50px;
  background: #0f0f24;
  border: 1.5px solid rgba(0, 240, 255, 0.15);
  color: ${({ theme }) => theme.colors.primary};
  font-weight: 700;
  font-size: 0.88rem;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: 0 0 20px rgba(0, 240, 255, 0.05), inset 0 1px 0 rgba(0, 240, 255, 0.06);

  &:hover {
    background: linear-gradient(135deg, #00f0ff 0%, #5ef5d2 50%, #00e887 100%);
    color: #060611;
    border-color: transparent;
    box-shadow: 0 8px 32px rgba(0, 240, 255, 0.4), 0 0 60px rgba(0, 240, 255, 0.12);
    transform: translateY(-2px) scale(1.03);
  }
`;

const OutlineBtn = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  padding: 0.73rem 1.3rem;
  border-radius: 8px;
  border: 1px solid ${({ theme }) => theme.colors.border};
  color: ${({ theme }) => theme.colors.text};
  font-weight: 500;
  font-size: 0.88rem;
  transition: all ${({ theme }) => theme.transition};

  &:hover {
    border-color: rgba(0, 240, 255, 0.4);
    color: ${({ theme }) => theme.colors.primary};
    background: rgba(0, 240, 255, 0.04);
    transform: translateY(-2px);
  }
`;

// const TextLink = styled.a`
//   display: inline-flex;
//   align-items: center;
//   gap: 0.35rem;
//   font-size: 0.84rem;
//   color: ${({ theme }) => theme.colors.textSecondary};
//   font-weight: 500;
//   padding: 0.73rem 0.4rem;
//   transition: color ${({ theme }) => theme.transition};

//   &:hover {
//     color: ${({ theme }) => theme.colors.primary};
//   }
// `;

const Cursor = styled.span`
  display: inline-block;
  width: 2px;
  height: 0.85em;
  background: ${({ theme }) => theme.colors.primary};
  margin-left: 3px;
  vertical-align: middle;
  animation: ${blink} 1.1s step-end infinite;
`;

const ScrollHint = styled.a`
  position: absolute;
  bottom: 2rem;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  color: ${({ theme }) => theme.colors.textMuted};
  font-size: 0.6rem;
  font-family: ${({ theme }) => theme.fonts.mono};
  letter-spacing: 0.15em;
  text-transform: uppercase;
  text-decoration: none;
  animation: ${fadeUp} 1s ease 1.2s both;
  transition: color ${({ theme }) => theme.transition};

  &:hover {
    color: ${({ theme }) => theme.colors.primary};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    display: none;
  }
`;

const ScrollArrow = styled.div`
  width: 18px;
  height: 18px;
  border-right: 1.5px solid currentColor;
  border-bottom: 1.5px solid currentColor;
  transform: rotate(45deg);
  animation: ${scrollBounce} 1.6s ease-in-out infinite;
`;

/* ── Right column ───────────────────────────────────────────────── */

const Right = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.2rem;
  animation: ${float} 7s ease-in-out infinite;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    order: -1;
    animation: none;
  }
`;

const PhotoWrapper = styled.div`
  position: relative;
  width: 300px;
  height: 300px;

  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    width: 260px;
    height: 260px;
  }
`;

const PhotoGlow = styled.div`
  position: absolute;
  inset: -24px;
  border-radius: 50%;
  background: radial-gradient(circle, rgba(0, 240, 255, 0.09) 0%, transparent 65%);
  pointer-events: none;
`;

const PhotoRing = styled.div`
  position: absolute;
  inset: -10px;
  border-radius: 50%;
  background: conic-gradient(
    from 0deg,
    transparent 0%,
    rgba(0, 240, 255, 0.6) 25%,
    rgba(123, 97, 255, 0.6) 55%,
    rgba(0, 232, 135, 0.35) 75%,
    transparent 100%
  );
  animation: ${rotateBorder} 5s linear infinite;
`;

const PhotoInner = styled.div`
  position: absolute;
  inset: -8px;
  border-radius: 50%;
  background: ${({ theme }) => theme.colors.bg};
`;

const Photo = styled.img`
  position: relative;
  z-index: 1;
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center top;
  border-radius: 50%;
`;

/* Stat cards below photo */
const StatsRow = styled.div`
  display: flex;
  gap: 0.65rem;
  width: 100%;
  justify-content: center;
`;

const StatCard = styled.div`
  flex: 1;
  padding: 0.8rem 0.6rem;
  border-radius: 10px;
  border: 1px solid ${({ theme }) => theme.colors.border};
  background: ${({ theme }) => theme.colors.bgCard};
  text-align: center;
  transition: border-color ${({ theme }) => theme.transition};

  &:hover {
    border-color: rgba(0, 240, 255, 0.2);
  }
`;

const StatValue = styled.div`
  font-size: 1.35rem;
  font-weight: 700;
  font-family: ${({ theme }) => theme.fonts.heading};
  background: ${({ theme }) => theme.colors.gradient};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  line-height: 1;
  margin-bottom: 0.25rem;
`;

const StatLabel = styled.div`
  font-size: 0.67rem;
  color: ${({ theme }) => theme.colors.textSecondary};
  font-family: ${({ theme }) => theme.fonts.mono};
  text-transform: uppercase;
  letter-spacing: 0.07em;
`;

/* ── Component ──────────────────────────────────────────────────── */

const WORK_MODES = ['Remote', 'Full-time', 'Part-time', 'Freelance', 'Office'];

const Hero = () => (
  <Section id="home">
    <Container>
      <Left>
        {/* 1. Status + location */}
        <TopLine>
          <StatusBadge>Available for work</StatusBadge>
          <LocationTag>📍 Ukraine · Remote</LocationTag>
        </TopLine>

        {/* 2. Name */}
        <Name>
          Daniil <span>Hora</span>
        </Name>

        {/* 3. Role */}
        <Role>
          Full-Stack Developer&nbsp;·&nbsp;
          <strong>TypeScript</strong>&nbsp;·&nbsp;
          <strong>React</strong>&nbsp;·&nbsp;
          <strong>NestJS</strong>&nbsp;<Cursor />
        </Role>

        {/* 4. Divider */}
        <Rule />

        {/* 5. Bio */}
        <Intro>
          2.5+ years delivering production websites, e-commerce platforms and
          scalable web apps — from UI design to backend architecture and cloud
          deployment.
        </Intro>

        {/* 6. Work modes */}
        <WorkModes>
          {WORK_MODES.map(m => (
            <WorkTag key={m}>{m}</WorkTag>
          ))}
        </WorkModes>

        {/* 7. CTA row */}
        <Actions>
          <PrimaryBtn href="#projects">View Projects</PrimaryBtn>
          <OutlineBtn href="#contact">Contact Me</OutlineBtn>
          <OutlineBtn href={cvFile} download>↓ CV</OutlineBtn>
        </Actions>
      </Left>

      <Right>
        {/* Photo */}
        <PhotoWrapper>
          <PhotoGlow />
          <PhotoRing />
          <PhotoInner />
          <Photo src={photo} alt="Daniil Hora — Full-Stack Developer" fetchPriority="high" loading="eager" />
        </PhotoWrapper>

        {/* Stats */}
        <StatsRow>
          <StatCard>
            <StatValue>2.5+</StatValue>
            <StatLabel>Years exp.</StatLabel>
          </StatCard>
          <StatCard>
            <StatValue>10+</StatValue>
            <StatLabel>Projects</StatLabel>
          </StatCard>
          <StatCard>
            <StatValue>20+</StatValue>
            <StatLabel>Technologies</StatLabel>
          </StatCard>
        </StatsRow>
      </Right>
    </Container>

    <ScrollHint href="#about">
      scroll
      <ScrollArrow />
    </ScrollHint>
  </Section>
);

export default Hero;