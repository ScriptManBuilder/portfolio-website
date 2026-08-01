import styled, { keyframes } from 'styled-components';
import cvFile from '../../assets/Daniil_Hora_FullStack_Developer.pdf';
import photo from '../../assets/photo_2026-02-12_21-56-05.jpg';
import { useLanguage } from '../../i18n/LanguageContext';

const float = keyframes`
  0%, 100% { transform: translateY(0px); }
  50% { transform: translateY(-12px); }
`;

const pulse = keyframes`
  0%, 100% { opacity: 0.4; transform: scale(1); }
  50% { opacity: 1; transform: scale(1.2); }
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

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    min-height: auto;
    padding: 5.5rem 1.25rem 3rem;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    padding: 5rem 0.9rem 2.6rem;
    background-size: 22px 22px;
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
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0;
    text-align: center;
  }
`;

/* ── Left column ────────────────────────────────────────────────── */

const Left = styled.div`
  display: flex;
  flex-direction: column;
  animation: ${fadeUp} 0.65s ease both;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    display: contents;
  }
`;

/* Row 1: status badge + location */
const TopLine = styled.div`
  display: flex;
  align-items: center;
  gap: 0.85rem;
  margin-bottom: 1.5rem;
  flex-wrap: wrap;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    order: 1;
    width: 100%;
    justify-content: center;
    margin-bottom: 0.95rem;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    gap: 0.5rem;
    margin-bottom: 0.55rem;
    flex-wrap: nowrap;
  }

  @media (max-width: 380px) {
    gap: 0.4rem;
  }
`;

const StatusBadge = styled.span`
  display: inline-flex;
  align-items: center;
  gap: 0.45rem;
  padding: 0.32rem 0.85rem;
  border-radius: 20px;
  border: 1px solid rgba(123, 97, 255, 0.35);
  background: rgba(123, 97, 255, 0.1);
  font-size: 0.77rem;
  white-space: nowrap;
  color: #b3a4ff;
  font-weight: 600;
  font-family: ${({ theme }) => theme.fonts.mono};
  letter-spacing: 0.02em;

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    font-size: 0.68rem;
    padding: 0.28rem 0.65rem;
  }

  @media (max-width: 380px) {
    font-size: 0.58rem;
    gap: 0.32rem;
    padding: 0.24rem 0.5rem;
  }

  &::before {
    content: '';
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background: #9d8bff;
    flex-shrink: 0;
    animation: ${pulse} 2s ease-in-out infinite;
  }
`;

const LocationTag = styled.span`
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  padding: 0.32rem 0.85rem;
  border-radius: 20px;
  border: 1px solid rgba(255, 255, 255, 0.14);
  background: rgba(255, 255, 255, 0.03);
  font-size: 0.77rem;
  white-space: nowrap;
  color: ${({ theme }) => theme.colors.textSecondary};
  font-family: ${({ theme }) => theme.fonts.mono};

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    font-size: 0.68rem;
    padding: 0.28rem 0.65rem;
  }

  @media (max-width: 380px) {
    font-size: 0.58rem;
    gap: 0.3rem;
    padding: 0.24rem 0.5rem;
  }
`;

/* Row 2: name */
const Name = styled.h1`
  font-size: clamp(2.5rem, 5.2vw, 4rem);
  font-weight: 700;
  font-family: ${({ theme }) => theme.fonts.display};
  line-height: 0.98;
  letter-spacing: -2.2px;
  margin-bottom: 0.7rem;
  color: ${({ theme }) => theme.colors.white};
  text-wrap: balance;

  span {
    background: ${({ theme }) => theme.colors.brandGradient};
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    filter: drop-shadow(0 8px 22px rgba(0, 240, 255, 0.14));
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    display: flex;
    align-items: baseline;
    flex-wrap: wrap;
    justify-content: center;
    column-gap: 0.45rem;
    row-gap: 0.1rem;
    font-size: clamp(1.05rem, 5.5vw, 1.25rem);
    letter-spacing: -0.3px;
    margin-bottom: 0.3rem;
  }

  @media (max-width: 380px) {
    font-size: clamp(0.95rem, 5.5vw, 1.1rem);
    margin-bottom: 0.25rem;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    order: 2;
    width: 100%;
    margin-bottom: 0.55rem;
  }
`;

const RoleLeadMobile = styled.span`
  display: none;

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    display: inline-flex;
    font-size: 0.8rem;
    font-family: ${({ theme }) => theme.fonts.mono};
    font-weight: 500;
    letter-spacing: 0;
    color: ${({ theme }) => theme.colors.textSecondary};
  }

  @media (max-width: 380px) {
    font-size: 0.72rem;
  }
`;

/* Row 3: role */
const Role = styled.div`
  display: flex;
  align-items: center;
  gap: 0.6rem;
  flex-wrap: wrap;
  margin-bottom: 1.3rem;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    order: 3;
    width: 100%;
    justify-content: center;
    margin-bottom: 1rem;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    flex-direction: column;
    gap: 0.3rem;
    margin-bottom: 0.7rem;
  }

  @media (max-width: 380px) {
    margin-bottom: 0.55rem;
  }
`;

const RoleLead = styled.span`
  font-size: 0.96rem;
  font-family: ${({ theme }) => theme.fonts.mono};
  color: ${({ theme }) => theme.colors.textSecondary};

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    display: none;
  }
`;

const RoleTechs = styled.div`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.35rem;
  flex-wrap: wrap;

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    gap: 0.18rem;
    max-width: 260px;
  }
`;

const RoleTech = styled.strong`
  display: inline-flex;
  align-items: center;
  color: ${({ theme }) => theme.colors.primary};
  font-weight: 600;
  font-size: 0.96rem;

  & + &::before {
    content: '·';
    color: ${({ theme }) => theme.colors.textMuted};
    margin-right: 0.35rem;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    font-size: 0.78rem;

    & + &::before {
      margin-right: 0.18rem;
    }
  }

  @media (max-width: 380px) {
    font-size: 0.7rem;
  }
`;

/* Divider */
const Rule = styled.div`
  height: 1px;
  background: rgba(255, 255, 255, 0.12);
  margin-bottom: 1.6rem;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    display: none;
  }
`;

/* Row 5: intro */
const Intro = styled.p`
  font-size: 1rem;
  color: ${({ theme }) => theme.colors.textSecondary};
  line-height: 1.75;
  margin-bottom: 1.35rem;
  max-width: 500px;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    order: 5;
    width: 100%;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 1.15rem;
    max-width: 34ch;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    font-size: 0.93rem;
    line-height: 1.72;
    margin-bottom: 1rem;
  }
`;

/* Row 6: work modes — compact individual tags, no container panel */
const WorkModes = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.45rem;
  margin-bottom: 1.75rem;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    order: 6;
    justify-content: center;
    margin-bottom: 1.1rem;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    gap: 0.4rem;
    margin-bottom: 0.9rem;
  }
`;

const WorkTag = styled.span`
  display: inline-flex;
  align-items: center;
  padding: 0.32rem 0.7rem;
  border-radius: 6px;
  border: 1px solid rgba(255, 255, 255, 0.12);
  background: rgba(255, 255, 255, 0.02);
  color: ${({ theme }) => theme.colors.textSecondary};
  font-family: ${({ theme }) => theme.fonts.mono};
  font-size: 0.7rem;
  font-weight: 500;
  letter-spacing: 0.04em;
  text-transform: uppercase;
  white-space: nowrap;
  transition: all ${({ theme }) => theme.transition};

  &:hover {
    border-color: rgba(255, 255, 255, 0.24);
    color: ${({ theme }) => theme.colors.text};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    font-size: 0.64rem;
    padding: 0.28rem 0.6rem;
  }
`;

/* Row 7: actions */
const Actions = styled.div`
  display: flex;
  align-items: center;
  gap: 0.7rem;
  flex-wrap: wrap;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    order: 7;
    width: 100%;
    justify-content: center;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    flex-wrap: wrap;
    gap: 0.5rem;
  }
`;

/* Primary action — solid fill, clearly the main CTA */
const PrimaryBtn = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.4rem;
  padding: 0.8rem 1.8rem;
  border-radius: 50px;
  background: ${({ theme }) => theme.colors.primary};
  border: 1.5px solid transparent;
  color: #06101a;
  font-weight: 700;
  font-size: 0.88rem;
  transition: all 0.35s cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: 0 8px 26px rgba(0, 240, 255, 0.22);

  &:hover {
    background: #5ef5d2;
    box-shadow: 0 10px 34px rgba(0, 240, 255, 0.32);
    transform: translateY(-2px);
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    flex: 1 1 0;
    min-width: 0;
    padding: 0.65rem 0.8rem;
    font-size: 0.82rem;
  }
`;

/* Secondary action — outline */
const OutlineBtn = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.4rem;
  padding: 0.73rem 1.3rem;
  border-radius: 50px;
  border: 1.5px solid rgba(255, 255, 255, 0.22);
  background: rgba(255, 255, 255, 0.03);
  color: ${({ theme }) => theme.colors.text};
  font-weight: 600;
  font-size: 0.88rem;
  transition: all ${({ theme }) => theme.transition};

  &:hover {
    border-color: rgba(0, 240, 255, 0.5);
    color: ${({ theme }) => theme.colors.primary};
    background: rgba(0, 240, 255, 0.06);
    transform: translateY(-2px);
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    flex: 1 1 0;
    min-width: 0;
    padding: 0.63rem 0.8rem;
    font-size: 0.82rem;
  }
`;

/* Tertiary action — quiet text link, no border/fill, underline signals it's clickable */
const TextLink = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 0.35rem;
  font-size: 0.86rem;
  color: ${({ theme }) => theme.colors.text};
  font-weight: 600;
  padding: 0.73rem 0.6rem;
  text-decoration: underline;
  text-decoration-color: rgba(255, 255, 255, 0.28);
  text-underline-offset: 3px;
  transition: color ${({ theme }) => theme.transition}, text-decoration-color ${({ theme }) => theme.transition};

  &:hover {
    color: ${({ theme }) => theme.colors.primary};
    text-decoration-color: ${({ theme }) => theme.colors.primary};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    flex-basis: 100%;
    justify-content: center;
    padding-top: 0.15rem;
  }
`;

const Cursor = styled.span`
  display: inline-block;
  width: 2px;
  height: 0.85em;
  background: ${({ theme }) => theme.colors.primary};
  margin-left: 3px;
  vertical-align: middle;
  animation: ${blink} 1.1s step-end infinite;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    display: none;
  }
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
    order: 4;
    animation: none;
    width: 100%;
    gap: 0.85rem;
    margin: 0.2rem 0 1rem;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    gap: 0.7rem;
    margin: 0.15rem 0 0.9rem;
  }
`;

const PhotoWrapper = styled.div`
  position: relative;
  width: min(100%, 300px);
  aspect-ratio: 1;

  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    width: 260px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    width: min(100%, 250px);
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    width: min(100%, 220px);
  }
`;

const PhotoGlow = styled.div`
  position: absolute;
  inset: -20px;
  border-radius: 36px;
  background: radial-gradient(circle, rgba(0, 240, 255, 0.1) 0%, transparent 68%);
  pointer-events: none;
`;

const PhotoFrame = styled.div`
  position: relative;
  z-index: 1;
  width: 100%;
  height: 100%;
  padding: 3px;
  border-radius: 30px;
  background: ${({ theme }) => theme.colors.brandGradientBold};
  box-shadow: 0 24px 60px rgba(2, 6, 23, 0.55), 0 0 0 1px rgba(255, 255, 255, 0.04);
`;

const PhotoInner = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  border-radius: 27px;
  overflow: hidden;
  background: ${({ theme }) => theme.colors.bg};
`;

const Photo = styled.img`
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center top;
  filter: saturate(1.04) contrast(1.03);
`;

const PhotoCorner = styled.span<{ $pos: 'tl' | 'br' }>`
  position: absolute;
  z-index: 2;
  width: 22px;
  height: 22px;
  pointer-events: none;

  ${({ $pos, theme }) => ($pos === 'tl'
    ? `
      top: -9px;
      left: -9px;
      border-top: 2px solid ${theme.colors.primary};
      border-left: 2px solid ${theme.colors.primary};
      border-radius: 8px 0 0 0;
    `
    : `
      bottom: -9px;
      right: -9px;
      border-bottom: 2px solid ${theme.colors.primary};
      border-right: 2px solid ${theme.colors.primary};
      border-radius: 0 0 8px 0;
    `)}
`;

/* Stat panel below photo — one grouped card, divided into columns */
const StatsPanel = styled.div`
  display: flex;
  width: 100%;
  border-radius: 14px;
  border: 1px solid ${({ theme }) => theme.colors.border};
  background: ${({ theme }) => theme.colors.bgCard};
  overflow: hidden;
  transition: border-color ${({ theme }) => theme.transition};

  &:hover {
    border-color: rgba(0, 240, 255, 0.22);
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    max-width: 320px;
  }
`;

const StatItem = styled.div`
  position: relative;
  flex: 1;
  padding: 1rem 0.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.3rem;
  text-align: center;

  & + &::before {
    content: '';
    position: absolute;
    left: 0;
    top: 22%;
    bottom: 22%;
    width: 1px;
    background: ${({ theme }) => theme.colors.border};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    padding: 0.85rem 0.35rem;
  }
`;

const StatValue = styled.div`
  display: block;
  font-size: 1.7rem;
  font-weight: 800;
  font-family: ${({ theme }) => theme.fonts.display};
  letter-spacing: -0.04em;
  color: ${({ theme }) => theme.colors.primary};
  line-height: 1;

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    font-size: clamp(1.3rem, 6vw, 1.5rem);
  }
`;

const StatLabel = styled.div`
  display: block;
  font-size: 0.68rem;
  font-family: ${({ theme }) => theme.fonts.mono};
  text-transform: uppercase;
  letter-spacing: 0.08em;
  color: ${({ theme }) => theme.colors.textSecondary};
  line-height: 1.3;
  text-wrap: balance;

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    font-size: 0.6rem;
    letter-spacing: 0.05em;
  }
`;

/* ── Component ──────────────────────────────────────────────────── */

const Hero = () => {
  const { t } = useLanguage();
  const profile = t.common.profile;

  return (
    <Section id="home">
      <Container>
        <Left>
          <TopLine>
            <StatusBadge>{t.hero.status}</StatusBadge>
            <LocationTag>{t.hero.location}</LocationTag>
          </TopLine>

          <Name>
            {profile.firstName} <span>{profile.lastName}</span>
            <RoleLeadMobile>{t.hero.role}</RoleLeadMobile>
          </Name>

          <Role>
            <RoleLead>{t.hero.role}</RoleLead>
            <RoleTechs>
              <RoleTech>TypeScript</RoleTech>
              <RoleTech>React</RoleTech>
              <RoleTech>NestJS</RoleTech>
              <RoleTech>C#</RoleTech>
              <Cursor />
            </RoleTechs>
          </Role>

          <Rule />

          <Intro>{t.hero.intro}</Intro>

          <WorkModes>
            {t.hero.workModes.map((mode) => (
              <WorkTag key={mode}>{mode}</WorkTag>
            ))}
          </WorkModes>

          <Actions>
            <PrimaryBtn href="#projects">{t.hero.primaryCta}</PrimaryBtn>
            <OutlineBtn href="#contact">{t.hero.secondaryCta}</OutlineBtn>
            <TextLink href={cvFile} download>{t.hero.cvCta}</TextLink>
          </Actions>
        </Left>

        <Right>
          <PhotoWrapper>
            <PhotoGlow />
            <PhotoCorner $pos="tl" />
            <PhotoCorner $pos="br" />
            <PhotoFrame>
              <PhotoInner>
                <Photo src={photo} alt={t.hero.photoAlt} fetchPriority="high" loading="eager" />
              </PhotoInner>
            </PhotoFrame>
          </PhotoWrapper>

          <StatsPanel>
            <StatItem>
              <StatValue>2.5+</StatValue>
              <StatLabel>{t.hero.stats.experience}</StatLabel>
            </StatItem>
            <StatItem>
              <StatValue>10+</StatValue>
              <StatLabel>{t.hero.stats.projects}</StatLabel>
            </StatItem>
            <StatItem>
              <StatValue>20+</StatValue>
              <StatLabel>{t.hero.stats.technologies}</StatLabel>
            </StatItem>
          </StatsPanel>
        </Right>
      </Container>

      <ScrollHint href="#about">
        {t.hero.scrollHint}
        <ScrollArrow />
      </ScrollHint>
    </Section>
  );
};

export default Hero;