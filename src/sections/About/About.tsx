import styled, { keyframes } from 'styled-components';
import { FaBriefcase, FaRocket, FaCode, FaStar } from 'react-icons/fa';

const shimmer = keyframes`
  0% { background-position: -200% center; }
  100% { background-position: 200% center; }
`;

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
  font-size: 0.8rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 3px;
  color: ${({ theme }) => theme.colors.primary};
  margin-bottom: 0.8rem;
  font-family: ${({ theme }) => theme.fonts.mono};
`;

const SectionTitle = styled.h2`
  font-size: clamp(2rem, 4vw, 2.8rem);
  font-weight: 800;
  font-family: ${({ theme }) => theme.fonts.heading};
  color: ${({ theme }) => theme.colors.white};
  margin-bottom: 1.5rem;
  letter-spacing: -1.5px;
  line-height: 1.1;

  span {
    background: ${({ theme }) => theme.colors.gradient};
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }
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
`;

const StatValue = styled.span`
  font-size: 1.8rem;
  font-weight: 700;
  font-family: ${({ theme }) => theme.fonts.heading};
  background: ${({ theme }) => theme.colors.gradient};
  background-size: 200% auto;
  animation: ${shimmer} 3s linear infinite;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  min-width: 60px;
`;

const StatLabel = styled.span`
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

const EXPERTISE = [
  { label: '🌍 Remote-first',    accent: '#00f0ff' },
  { label: '🇬🇧 English B2',     accent: '#7b61ff' },
  { label: '🚀 Open to hire',   accent: '#00e887' },
  { label: '🤝 Team player',     accent: '#f7b731' },
  { label: '🎯 Result-oriented', accent: '#00f0ff' },
  { label: '🔒 Security-minded', accent: '#7b61ff' },
  { label: '📐 Clean code',      accent: '#00e887' },
  // { label: '🚀 Open to hire',    accent: '#f7b731' },
];

const STATS = [
  { value: '2.5+', label: ['Years of professional', 'development experience'], accent: '#00f0ff', icon: <FaBriefcase /> },
  { value: '10+', label: ['Production projects', 'delivered to clients'], accent: '#7b61ff', icon: <FaRocket /> },
  { value: '20+', label: ['Technologies', 'in active use'], accent: '#00e887', icon: <FaCode /> },
  { value: '∞', label: ['Commitment to clean code', '& best practices'], accent: '#f7b731', icon: <FaStar /> },
];

const About = () => (
  <Section id="about">
    <Container>
      <Left>
        <SectionLabel>// About</SectionLabel>
        <SectionTitle>
          Building <span>digital products</span> that matter
        </SectionTitle>
        <Text>
          I’m a Full-Stack Developer with 2.5+ years of professional experience,
          working both freelance and as part of development teams. I specialize in
          building production-ready websites and web applications, focusing on
          clean architecture, performance, and real business use cases.
        </Text>
        <Text>
          My core expertise is full-cycle web development — from UI/UX and frontend
          implementation to backend services, databases, deployment, and maintenance.
          I primarily use TypeScript, React for responsive interfaces,
          and NestJS for robust, scalable backend systems.
        </Text>
        <Text>
          I place strong emphasis on scalability, maintainability, security, and
          performance — ensuring solutions are ready for real-world production
          environments.
        </Text>
        <ExpertiseRow>
          {EXPERTISE.map(({ label, accent }) => (
            <Tag key={label} $accent={accent}>{label}</Tag>
          ))}
        </ExpertiseRow>
      </Left>
      <Right>
        {STATS.map(({ value, label, accent, icon }) => (
          <StatCard key={value + label[0]} $accent={accent}>
            <IconBox $accent={accent}>{icon}</IconBox>
            <StatInfo>
              <StatValue>{value}</StatValue>
              <StatLabel>{label[0]}<br />{label[1]}</StatLabel>
            </StatInfo>
          </StatCard>
        ))}
      </Right>
    </Container>
  </Section>
);

export default About;
