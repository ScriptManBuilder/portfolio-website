import { useState } from 'react';
import styled, { keyframes } from 'styled-components';
import { useLanguage } from '../../i18n/LanguageContext';
import type { Translation } from '../../i18n/translations';
import { sectionLabelStyles, sectionTitleStyles } from '../../styles/sectionHeading';

type WorkExperienceId = keyof Translation['workExperience']['items'];

interface WorkExperienceItem {
  id: WorkExperienceId;
  color: string;
}

const WORK_EXPERIENCE: WorkExperienceItem[] = [
  {
    id: 'current',
    color: '#00e887',
  },
  {
    id: 'moun',
    color: '#00f0ff',
  },
  {
    id: 'fireGroup',
    color: '#7b61ff',
  },
  {
    id: 'freelance',
    color: '#38bdf8',
  },
];

const fadeUp = keyframes`
  from { opacity: 0; transform: translateY(16px); }
  to { opacity: 1; transform: translateY(0); }
`;

const pulseRing = keyframes`
  0% { transform: scale(0.9); opacity: 0.7; }
  70%, 100% { transform: scale(1.9); opacity: 0; }
`;

const dotPulse = keyframes`
  0%, 100% { opacity: 0.5; transform: scale(1); }
  50% { opacity: 1; transform: scale(1.25); }
`;

const draw = keyframes`
  from { height: 0; }
  to { height: 100%; }
`;

const Section = styled.section`
  padding: 7rem 2rem;
  position: relative;
  background: ${({ theme }) => theme.colors.bg};

  @media (max-width: 480px) {
    padding: 5rem 1rem;
  }

  @media (max-width: 380px) {
    padding: 4.5rem 0.75rem;
  }

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 1px;
    background: linear-gradient(90deg, transparent, rgba(0, 240, 255, 0.12), transparent);
  }
`;

const Container = styled.div`
  max-width: ${({ theme }) => theme.maxWidth};
  margin: 0 auto;
`;

const SectionLabel = styled.p`
  ${sectionLabelStyles}
  margin-bottom: 0.85rem;
`;

const SectionTitle = styled.h2`
  ${sectionTitleStyles}
  margin-bottom: 3.5rem;

  @media (max-width: 480px) {
    margin-bottom: 2.5rem;
  }
`;

const Timeline = styled.div`
  position: relative;
  max-width: 860px;

  &::before {
    content: '';
    position: absolute;
    left: 18px;
    top: 8px;
    bottom: 0;
    width: 1px;
    background: linear-gradient(
      to bottom,
      rgba(0, 240, 255, 0.35),
      rgba(123, 97, 255, 0.2),
      transparent
    );
    animation: ${draw} 1s ease both;
  }

  @media (max-width: 380px) {
    &::before {
      left: 13px;
    }
  }
`;

const Item = styled.div<{ $delay: number }>`
  position: relative;
  padding-left: 56px;
  padding-bottom: 2.6rem;
  animation: ${fadeUp} 0.5s ease both;
  animation-delay: ${({ $delay }) => $delay}ms;

  &:last-child {
    padding-bottom: 0;
  }

  @media (max-width: 480px) {
    padding-left: 38px;
    padding-bottom: 2rem;
  }

  @media (max-width: 380px) {
    padding-left: 30px;
  }
`;

const Dot = styled.div<{ $color: string }>`
  position: absolute;
  left: 10px;
  top: 6px;
  width: 17px;
  height: 17px;
  border-radius: 50%;
  background: ${({ theme }) => theme.colors.bg};
  border: 2px solid ${({ $color }) => $color};
  box-shadow: 0 0 10px ${({ $color }) => $color}55;
  z-index: 1;

  @media (max-width: 380px) {
    left: 6px;
    width: 14px;
    height: 14px;
  }
`;

const PulseRing = styled.span<{ $color: string }>`
  position: absolute;
  inset: -4px;
  border-radius: 50%;
  border: 1.5px solid ${({ $color }) => $color};
  animation: ${pulseRing} 2s ease-out infinite;
  pointer-events: none;
`;

const Card = styled.div<{ $color: string }>`
  background: ${({ theme }) => theme.colors.bgCard};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: 14px;
  padding: 1.4rem 1.6rem;
  position: relative;
  overflow: hidden;
  transition: all ${({ theme }) => theme.transition};

  @media (max-width: 480px) {
    padding: 1rem 0.9rem;
  }

  @media (max-width: 380px) {
    padding: 0.9rem 0.7rem;
    border-radius: 12px;
  }

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 3px;
    height: 100%;
    background: ${({ $color }) => $color};
    opacity: 0.5;
    transition: opacity ${({ theme }) => theme.transition};
  }

  &:hover {
    border-color: ${({ $color }) => $color}30;
    box-shadow: 0 6px 28px ${({ $color }) => $color}0d;
    transform: translateX(4px);
  }

  &:hover::before {
    opacity: 1;
  }
`;

const CardTop = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 1rem;
  margin-bottom: 0.35rem;
  flex-wrap: wrap;

  @media (max-width: 480px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 0.4rem;
  }
`;

const RoleGroup = styled.div`
  display: flex;
  align-items: center;
  gap: 0.6rem;
  flex-wrap: wrap;

  @media (max-width: 480px) {
    gap: 0.4rem;
  }

  @media (max-width: 380px) {
    gap: 0.32rem;
  }
`;

const Role = styled.h3`
  font-size: 1rem;
  font-weight: 700;
  font-family: ${({ theme }) => theme.fonts.heading};
  color: ${({ theme }) => theme.colors.white};
  line-height: 1.3;

  @media (max-width: 480px) {
    font-size: 0.94rem;
  }

  @media (max-width: 380px) {
    font-size: 0.88rem;
  }
`;

const CurrentBadge = styled.span<{ $color: string }>`
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  padding: 0.2rem 0.6rem;
  border-radius: 20px;
  border: 1px solid ${({ $color }) => $color}45;
  background: ${({ $color }) => $color}12;
  color: ${({ $color }) => $color};
  font-size: 0.66rem;
  font-weight: 600;
  font-family: ${({ theme }) => theme.fonts.mono};
  text-transform: uppercase;
  letter-spacing: 0.06em;

  @media (max-width: 480px) {
    gap: 0.3rem;
    font-size: 0.58rem;
    padding: 0.16rem 0.5rem;
  }

  @media (max-width: 380px) {
    font-size: 0.52rem;
    padding: 0.14rem 0.42rem;
  }

  &::before {
    content: '';
    width: 5px;
    height: 5px;
    border-radius: 50%;
    background: ${({ $color }) => $color};
    flex-shrink: 0;
    animation: ${dotPulse} 2s ease-in-out infinite;
  }
`;

const Period = styled.span`
  font-size: 0.72rem;
  font-family: ${({ theme }) => theme.fonts.mono};
  color: ${({ theme }) => theme.colors.textSecondary};
  white-space: nowrap;
  padding-top: 2px;

  @media (max-width: 480px) {
    padding-top: 0;
  }
`;

const CompanyRow = styled.div`
  display: flex;
  align-items: center;
  gap: 0.45rem;
  flex-wrap: wrap;
  margin-bottom: 0.45rem;
`;

const Company = styled.p`
  font-size: 0.92rem;
  color: ${({ theme }) => theme.colors.textSecondary};

  @media (max-width: 380px) {
    font-size: 0.84rem;
  }
`;

const Separator = styled.span`
  color: ${({ theme }) => theme.colors.textSecondary};
  opacity: 0.7;
`;

const TypeTag = styled.span<{ $color: string }>`
  font-size: 0.68rem;
  font-family: ${({ theme }) => theme.fonts.mono};
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  color: ${({ $color }) => $color};
  background: ${({ $color }) => $color}12;
  border: 1px solid ${({ $color }) => $color}25;
  padding: 0.18rem 0.6rem;
  border-radius: 20px;

  @media (max-width: 480px) {
    font-size: 0.6rem;
    padding: 0.16rem 0.5rem;
    letter-spacing: 0.06em;
  }

  @media (max-width: 380px) {
    font-size: 0.54rem;
    padding: 0.14rem 0.42rem;
  }
`;

const MetaLine = styled.span`
  font-size: 0.88rem;
  color: ${({ theme }) => theme.colors.textSecondary};

  @media (max-width: 380px) {
    font-size: 0.8rem;
  }
`;

const Summary = styled.p`
  font-size: 0.93rem;
  color: ${({ theme }) => theme.colors.text};
  line-height: 1.65;
  margin-top: 0.85rem;
  margin-bottom: 0.95rem;
`;

const HighlightsList = styled.ul<{ $color: string }>`
  list-style: none;
  margin: 0;
  padding: 0.75rem 0.9rem;
  border-radius: 8px;
  background: ${({ $color }) => $color}06;
  border: 1px solid ${({ $color }) => $color}18;
  display: flex;
  flex-direction: column;
  gap: 0.45rem;
`;

const HighlightItem = styled.li<{ $color: string }>`
  font-size: 0.84rem;
  color: ${({ theme }) => theme.colors.textSecondary};
  line-height: 1.5;
  display: flex;
  align-items: flex-start;
  gap: 0.55rem;

  &::before {
    content: '▸';
    color: ${({ $color }) => $color};
    font-size: 0.7rem;
    margin-top: 0.18rem;
    flex-shrink: 0;
  }
`;

const Footer = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 0.75rem;
  margin-top: 0.95rem;

  @media (max-width: 480px) {
    flex-direction: column;
  }
`;

const Actions = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 0.5rem;
  flex-shrink: 0;

  @media (max-width: 480px) {
    width: 100%;
  }
`;

const ToggleBtn = styled.button<{ $color: string; $open: boolean }>`
  display: inline-flex;
  align-items: center;
  gap: 0.3rem;
  padding: 0.18rem 0.55rem;
  border-radius: 25px;
  font-size: 0.65rem;
  font-family: ${({ theme }) => theme.fonts.mono};
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  cursor: pointer;
  background: transparent;
  border: 1px solid ${({ $color }) => $color}30;
  color: ${({ $color }) => $color};
  transition: all ${({ theme }) => theme.transition};
  flex-shrink: 0;

  @media (max-width: 480px) {
    padding: 0.32rem 0.75rem;
    font-size: 0.7rem;
  }

  &::after {
    content: '';
    display: inline-block;
    width: 0;
    height: 0;
    border-left: 4px solid transparent;
    border-right: 4px solid transparent;
    border-top: 4px solid currentColor;
    transform: ${({ $open }) => ($open ? 'rotate(180deg)' : 'rotate(0deg)')};
    transition: transform 0.3s ease;
  }

  &:hover {
    background: ${({ $color }) => $color}12;
    border-color: ${({ $color }) => $color}55;
  }
`;

const HighlightsWrapper = styled.div<{ $open: boolean }>`
  display: grid;
  grid-template-rows: ${({ $open }) => ($open ? '1fr' : '0fr')};
  margin-top: ${({ $open }) => ($open ? '0.95rem' : '0')};
  transition: grid-template-rows 0.35s cubic-bezier(0.4, 0, 0.2, 1),
              margin-top 0.35s ease;
`;

const HighlightsInner = styled.div`
  overflow: hidden;
`;

const Stack = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.45rem;

  @media (max-width: 480px) {
    gap: 0.32rem;
  }

  @media (max-width: 380px) {
    gap: 0.26rem;
  }
`;

const StackTag = styled.span<{ $color: string }>`
  font-size: 0.66rem;
  font-family: ${({ theme }) => theme.fonts.mono};
  color: ${({ $color }) => $color};
  background: ${({ $color }) => $color}10;
  border: 1px solid ${({ $color }) => $color}1f;
  border-radius: 999px;
  padding: 0.2rem 0.55rem;
  letter-spacing: 0.06em;
  text-transform: uppercase;

  @media (max-width: 480px) {
    font-size: 0.58rem;
    padding: 0.16rem 0.45rem;
    letter-spacing: 0.03em;
  }

  @media (max-width: 380px) {
    font-size: 0.52rem;
    padding: 0.14rem 0.4rem;
  }
`;

const SourceLink = styled.a<{ $color: string }>`
  font-size: 0.68rem;
  font-family: ${({ theme }) => theme.fonts.mono};
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  color: ${({ $color }) => $color};
  background: ${({ $color }) => $color}12;
  text-decoration: none;
  border: 1px solid ${({ $color }) => $color}25;
  border-radius: 20px;
  padding: 0.18rem 0.6rem;
  transition: all ${({ theme }) => theme.transition};
  white-space: nowrap;

  @media (max-width: 480px) {
    font-size: 0.58rem;
    padding: 0.16rem 0.5rem;
    letter-spacing: 0.06em;
  }

  @media (max-width: 380px) {
    font-size: 0.52rem;
    padding: 0.14rem 0.42rem;
  }

  &:hover {
    background: ${({ $color }) => $color}20;
    border-color: ${({ $color }) => $color}55;
  }
`;

const WorkExperience = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const { t } = useLanguage();

  const toggle = (i: number) => setOpenIndex(prev => (prev === i ? null : i));

  return (
    <Section id="experience">
      <Container>
        <SectionLabel>{`// ${t.workExperience.sectionLabel}`}</SectionLabel>
        <SectionTitle>
          {t.workExperience.titleLead}<span>{t.workExperience.titleAccent}</span>
        </SectionTitle>

        <Timeline>
          {WORK_EXPERIENCE.map((item, index) => {
            const content = t.workExperience.items[item.id];
            const isOpen = openIndex === index;
            const hasHighlights = content.highlights.length > 0;

            return (
              <Item key={item.id} $delay={index * 120}>
                <Dot $color={item.color}>
                  {item.id === 'current' ? <PulseRing $color={item.color} /> : null}
                </Dot>
                <Card $color={item.color}>
                  <CardTop>
                    <RoleGroup>
                      <Role>{content.role}</Role>
                      <TypeTag $color={item.color}>{content.type}</TypeTag>
                      {item.id === 'current' ? (
                        <CurrentBadge $color={item.color}>{t.hero.status}</CurrentBadge>
                      ) : null}
                      {'sourceLabel' in content && content.sourceLabel ? (
                        <SourceLink
                          $color={item.color}
                          href={content.sourceUrl || '#'}
                          target={content.sourceUrl ? '_blank' : undefined}
                          rel="noreferrer"
                        >
                          {content.sourceLabel}
                        </SourceLink>
                      ) : null}
                    </RoleGroup>
                    <Period>{content.period}</Period>
                  </CardTop>

                  <CompanyRow>
                    <Company>{content.company}</Company>
                    <Separator>·</Separator>
                    <MetaLine>{content.location}</MetaLine>
                  </CompanyRow>

                  <Summary>{content.summary}</Summary>

                  <Footer>
                    <Stack>
                      {content.stack.map((tech) => (
                        <StackTag key={tech} $color={item.color}>
                          {tech}
                        </StackTag>
                      ))}
                    </Stack>

                    {hasHighlights ? (
                      <Actions>
                        <ToggleBtn
                          $color={item.color}
                          $open={isOpen}
                          onClick={() => toggle(index)}
                        >
                          {isOpen ? t.workExperience.hide : t.workExperience.details}
                        </ToggleBtn>
                      </Actions>
                    ) : null}
                  </Footer>

                  {hasHighlights ? (
                    <HighlightsWrapper $open={isOpen}>
                      <HighlightsInner>
                        <HighlightsList $color={item.color}>
                          {content.highlights.map((highlight) => (
                            <HighlightItem key={highlight} $color={item.color}>
                              {highlight}
                            </HighlightItem>
                          ))}
                        </HighlightsList>
                      </HighlightsInner>
                    </HighlightsWrapper>
                  ) : null}
                </Card>
              </Item>
            );
          })}
        </Timeline>
      </Container>
    </Section>
  );
};

export default WorkExperience;