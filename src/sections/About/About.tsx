import styled from 'styled-components';
import { FaBriefcase, FaRocket, FaCode, FaStar } from 'react-icons/fa';
import { useLanguage } from '../../i18n/LanguageContext';
import { sectionLabelStyles, sectionTitleStyles } from '../../styles/sectionHeading';

const Section = styled.section`
  padding: 7rem 2rem;
  position: relative;
  background: ${({ theme }) => theme.colors.bgSecondary};

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 1px;
    background: linear-gradient(90deg, transparent, rgba(0, 240, 255, 0.15), transparent);
  }
`;

const Container = styled.div`
  max-width: ${({ theme }) => theme.maxWidth};
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: start;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    grid-template-columns: 1fr;
    gap: 2.5rem;
  }
`;

const Left = styled.div``;

const SectionLabel = styled.p`
  ${sectionLabelStyles}
`;

const SectionTitle = styled.h2`
  ${sectionTitleStyles}
  margin-bottom: 1.65rem;
  max-width: 13ch;
`;

const Text = styled.p`
  font-size: 1rem;
  color: ${({ theme }) => theme.colors.textSecondary};
  line-height: 1.8;

  & + & {
    margin-top: 1rem;
  }
`;

const Right = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const StatCard = styled.div<{ $accent: string }>`
  padding: 1.2rem 1.5rem;
  background: ${({ theme }) => theme.colors.bgCard};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-left: 3px solid ${({ $accent }) => $accent};
  border-radius: 12px;
  display: flex;
  align-items: center;
  gap: 1.2rem;
  transition: all ${({ theme }) => theme.transition};

  &:hover {
    border-color: ${({ $accent }) => $accent}45;
    border-left-color: ${({ $accent }) => $accent};
    box-shadow: 0 4px 24px ${({ $accent }) => $accent}12, -2px 0 14px ${({ $accent }) => $accent}18;
    transform: translateX(5px);
  }
`;

const IconBox = styled.div<{ $accent: string }>`
  width: 46px;
  height: 46px;
  border-radius: 10px;
  background: ${({ $accent }) => $accent}10;
  border: 1px solid ${({ $accent }) => $accent}28;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  color: ${({ $accent }) => $accent};
  font-size: 1.15rem;
`;

const StatInfo = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 0.38rem;

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    gap: 0.28rem;
  }
`;

const StatValue = styled.span`
  display: block;
  font-size: 1.95rem;
  font-weight: 800;
  font-family: ${({ theme }) => theme.fonts.display};
  letter-spacing: -0.06em;
  background: ${({ theme }) => theme.colors.brandGradientBold};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  min-width: 60px;
  line-height: 0.92;
  filter: drop-shadow(0 10px 22px rgba(72, 196, 255, 0.12));
`;

const StatLabel = styled.span`
  display: block;
  font-size: 0.88rem;
  color: ${({ theme }) => theme.colors.textSecondary};
  line-height: 1.4;
`;

const ExpertiseRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.45rem;
  margin-top: 1.6rem;
`;

const Tag = styled.span<{ $accent?: string }>`
  padding: 0.28rem 0.75rem;
  border-radius: 20px;
  font-size: 0.73rem;
  font-family: ${({ theme }) => theme.fonts.mono};
  font-weight: 500;
  border: 1px solid ${({ $accent }) => $accent ? `${$accent}30` : 'rgba(0, 240, 255, 0.15)'};
  background: ${({ $accent }) => $accent ? `${$accent}08` : 'rgba(0, 240, 255, 0.04)'};
  color: ${({ $accent, theme }) => $accent ?? theme.colors.textSecondary};
  cursor: default;
`;

const EXPERTISE_ACCENTS = ['#00f0ff', '#7b61ff', '#00e887', '#f7b731', '#00f0ff', '#7b61ff', '#00e887'] as const;

const STATS = [
  { value: '2.5+', accent: '#00f0ff', icon: <FaBriefcase /> },
  { value: '10+', accent: '#7b61ff', icon: <FaRocket /> },
  { value: '20+', accent: '#00e887', icon: <FaCode /> },
  { value: '∞', accent: '#f7b731', icon: <FaStar /> },
];

const About = () => {
  const { t } = useLanguage();

  return (
    <Section id="about">
      <Container>
        <Left>
          <SectionLabel>{`// ${t.about.sectionLabel}`}</SectionLabel>
          <SectionTitle>
            {t.about.titleLead}<span>{t.about.titleAccent}</span>{t.about.titleTail}
          </SectionTitle>
          {t.about.paragraphs.map((paragraph) => (
            <Text key={paragraph}>{paragraph}</Text>
          ))}
          <ExpertiseRow>
            {t.about.expertise.map((label, index) => (
              <Tag key={label} $accent={EXPERTISE_ACCENTS[index]}>{label}</Tag>
            ))}
          </ExpertiseRow>
        </Left>
        <Right>
          {STATS.map(({ value, accent, icon }, index) => {
            const label = t.about.stats[index];

            return (
              <StatCard key={value + label[0]} $accent={accent}>
                <IconBox $accent={accent}>{icon}</IconBox>
                <StatInfo>
                  <StatValue>{value}</StatValue>
                  <StatLabel>{label[0]}<br />{label[1]}</StatLabel>
                </StatInfo>
              </StatCard>
            );
          })}
        </Right>
      </Container>
    </Section>
  );
};

export default About;
