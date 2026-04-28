import styled, { keyframes } from 'styled-components';
import cvFile from '../../assets/DaniilHoraCV.pdf';
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
    grid-template-columns: 1fr;
    gap: 2.2rem;
    text-align: center;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    gap: 1.8rem;
  }
`;

/* ── Left column ────────────────────────────────────────────────── */

const Left = styled.div`
  display: flex;
  flex-direction: column;
  animation: ${fadeUp} 0.65s ease both;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    align-items: center;
  }
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

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    border-left: 0;
    padding-left: 0;
    width: 100%;
    justify-content: center;
  }
`;

/* Row 2: name */
const Name = styled.h1`
  font-size: clamp(2.8rem, 6vw, 4.6rem);
  font-weight: 800;
  font-family: ${({ theme }) => theme.fonts.display};
  line-height: 0.96;
  letter-spacing: -2.8px;
  margin-bottom: 0.7rem;
  color: ${({ theme }) => theme.colors.white};
  text-wrap: balance;

  span {
    background: ${({ theme }) => theme.colors.brandGradientBold};
    background-size: 100% 100%;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    filter: drop-shadow(0 10px 26px rgba(72, 196, 255, 0.16));
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    font-size: clamp(2.35rem, 13vw, 3.15rem);
    letter-spacing: -1.6px;
    margin-bottom: 0.85rem;
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

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    font-size: 0.84rem;
    gap: 0.28rem;
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

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    font-size: 0.93rem;
    line-height: 1.72;
    margin-bottom: 1.25rem;
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

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    margin-bottom: 1.4rem;
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

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    width: 100%;
    flex-direction: column;
    gap: 0.6rem;
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

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    width: min(100%, 260px);
    justify-content: center;
    padding-inline: 1.2rem;
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

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    width: min(100%, 260px);
    justify-content: center;
    padding-inline: 1.2rem;
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
    width: 100%;
    gap: 1rem;
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

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    max-width: 320px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    gap: 0.45rem;
  }
`;

const StatCard = styled.div`
  flex: 1;
  padding: 0.8rem 0.6rem;
  border-radius: 10px;
  border: 1px solid ${({ theme }) => theme.colors.border};
  background: ${({ theme }) => theme.colors.bgCard};
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: border-color ${({ theme }) => theme.transition};

  &:hover {
    border-color: rgba(0, 240, 255, 0.2);
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    padding: 0.72rem 0.4rem;
    min-height: 92px;
  }
`;

const StatInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.38rem;

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    gap: 0.28rem;
  }
`;

const StatValue = styled.div`
  display: block;
  font-size: 1.95rem;
  font-weight: 800;
  font-family: ${({ theme }) => theme.fonts.display};
  letter-spacing: -0.06em;
  background: ${({ theme }) => theme.colors.brandGradientBold};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  line-height: 0.92;
  filter: drop-shadow(0 10px 22px rgba(72, 196, 255, 0.12));

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    font-size: clamp(1.58rem, 8vw, 1.82rem);
  }
`;

const StatLabel = styled.div`
  display: block;
  font-size: 0.88rem;
  color: ${({ theme }) => theme.colors.textSecondary};
  line-height: 1.4;
  text-wrap: balance;

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    font-size: 0.74rem;
    line-height: 1.32;
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
          </Name>

          <Role>
            {t.hero.role}&nbsp;·&nbsp;
            <strong>TypeScript</strong>&nbsp;·&nbsp;
            <strong>React</strong>&nbsp;·&nbsp;
            <strong>NestJS</strong>&nbsp;<Cursor />
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
            <OutlineBtn href={cvFile} download>{t.hero.cvCta}</OutlineBtn>
          </Actions>
        </Left>

        <Right>
          <PhotoWrapper>
            <PhotoGlow />
            <PhotoRing />
            <PhotoInner />
            <Photo src={photo} alt={t.hero.photoAlt} fetchPriority="high" loading="eager" />
          </PhotoWrapper>

          <StatsRow>
            <StatCard>
              <StatInfo>
                <StatValue>2.5+</StatValue>
                <StatLabel>{t.hero.stats.experience}</StatLabel>
              </StatInfo>
            </StatCard>
            <StatCard>
              <StatInfo>
                <StatValue>10+</StatValue>
                <StatLabel>{t.hero.stats.projects}</StatLabel>
              </StatInfo>
            </StatCard>
            <StatCard>
              <StatInfo>
                <StatValue>20+</StatValue>
                <StatLabel>{t.hero.stats.technologies}</StatLabel>
              </StatInfo>
            </StatCard>
          </StatsRow>
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