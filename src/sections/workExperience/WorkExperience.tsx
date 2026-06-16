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
    id: 'moun',
    color: '#00f0ff',
  },
  {
    id: 'fireGroup',
    color: '#7b61ff',
  },
];

const fadeUp = keyframes`
  from { opacity: 0; transform: translateY(16px); }
  to { opacity: 1; transform: translateY(0); }
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
`;

const CurrentCard = styled.div`
  max-width: 860px;
  margin-bottom: 1.25rem;
  padding: 1rem 1.15rem;
  border-radius: 14px;
  border: 1px solid rgba(255, 84, 84, 0.22);
  background: linear-gradient(135deg, rgba(255, 84, 84, 0.09), rgba(255, 84, 84, 0.03));
  box-shadow: 0 8px 28px rgba(255, 84, 84, 0.06);
`;

const CurrentTop = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  flex-wrap: wrap;
  margin-bottom: 0.45rem;
`;

const CurrentLabel = styled.span`
  font-size: 0.72rem;
  font-family: ${({ theme }) => theme.fonts.mono};
  text-transform: uppercase;
  letter-spacing: 0.1em;
  color: #ff6b6b;
`;

const CurrentPeriod = styled.span`
  font-size: 0.72rem;
  font-family: ${({ theme }) => theme.fonts.mono};
  color: ${({ theme }) => theme.colors.textSecondary};
`;

const CurrentNote = styled.p`
  font-size: 0.92rem;
  color: ${({ theme }) => theme.colors.textSecondary};
  line-height: 1.55;
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
    padding-left: 42px;
    padding-bottom: 2rem;
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
`;

const Role = styled.h3`
  font-size: 1rem;
  font-weight: 700;
  font-family: ${({ theme }) => theme.fonts.heading};
  color: ${({ theme }) => theme.colors.white};
  line-height: 1.3;
`;

const Period = styled.span`
  font-size: 0.72rem;
  font-family: ${({ theme }) => theme.fonts.mono};
  color: ${({ theme }) => theme.colors.textSecondary};
  white-space: nowrap;
  padding-top: 2px;
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
`;

const MetaLine = styled.p`
  font-size: 0.88rem;
  color: ${({ theme }) => theme.colors.textSecondary};
  margin-bottom: 0.85rem;
`;

const Summary = styled.p`
  font-size: 0.93rem;
  color: ${({ theme }) => theme.colors.text};
  line-height: 1.65;
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
  gap: 1rem;
  flex-wrap: wrap;
  margin-top: 0.95rem;
`;

const Stack = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.45rem;
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
`;

const SourceLink = styled.a<{ $color: string }>`
  font-size: 0.72rem;
  font-family: ${({ theme }) => theme.fonts.mono};
  color: ${({ $color }) => $color};
  text-decoration: none;
  border: 1px solid ${({ $color }) => $color}30;
  border-radius: 999px;
  padding: 0.22rem 0.65rem;
  transition: all ${({ theme }) => theme.transition};
  white-space: nowrap;

  &:hover {
    background: ${({ $color }) => $color}12;
    border-color: ${({ $color }) => $color}55;
  }
`;

const WorkExperience = () => {
  const { t } = useLanguage();
  const current = t.workExperience.current;

  return (
    <Section id="experience">
      <Container>
        <SectionLabel>{`// ${t.workExperience.sectionLabel}`}</SectionLabel>
        <SectionTitle>
          {t.workExperience.titleLead}<span>{t.workExperience.titleAccent}</span>
        </SectionTitle>

        {current ? (
          <CurrentCard>
            <CurrentTop>
              <CurrentLabel>{current.label}</CurrentLabel>
              <CurrentPeriod>{current.period}</CurrentPeriod>
            </CurrentTop>
            <CurrentNote>{current.note}</CurrentNote>
          </CurrentCard>
        ) : null}

        <Timeline>
          {WORK_EXPERIENCE.map((item, index) => {
            const content = t.workExperience.items[item.id];

            return (
              <Item key={item.id} $delay={index * 120}>
                <Dot $color={item.color} />
                <Card $color={item.color}>
                  <CardTop>
                    <Role>{content.role}</Role>
                    <Period>{content.period}</Period>
                  </CardTop>

                  <CompanyRow>
                    <Company>{content.company}</Company>
                    <Separator>·</Separator>
                    <TypeTag $color={item.color}>{content.type}</TypeTag>
                  </CompanyRow>

                  <MetaLine>{content.location}</MetaLine>
                  <Summary>{content.summary}</Summary>

                  <HighlightsList $color={item.color}>
                    {content.highlights.map((highlight) => (
                      <HighlightItem key={highlight} $color={item.color}>
                        {highlight}
                      </HighlightItem>
                    ))}
                  </HighlightsList>

                  <Footer>
                    <Stack>
                      {content.stack.map((tech) => (
                        <StackTag key={tech} $color={item.color}>
                          {tech}
                        </StackTag>
                      ))}
                    </Stack>

                    {'sourceUrl' in content && content.sourceUrl ? (
                      <SourceLink
                        $color={item.color}
                        href={content.sourceUrl}
                        target="_blank"
                        rel="noreferrer"
                      >
                        {content.sourceLabel}
                      </SourceLink>
                    ) : null}
                  </Footer>
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