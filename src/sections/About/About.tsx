import styled, { keyframes } from 'styled-components';

const shimmer = keyframes`
  0% { background-position: -200% center; }
  100% { background-position: 200% center; }
`;

const Section = styled.section`
  padding: 7rem 2rem;
  position: relative;

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
  font-size: 2.4rem;
  font-weight: 700;
  font-family: ${({ theme }) => theme.fonts.heading};
  color: ${({ theme }) => theme.colors.white};
  margin-bottom: 1.5rem;
  letter-spacing: -1px;
  line-height: 1.15;

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

const StatCard = styled.div`
  padding: 1.2rem 1.5rem;
  background: ${({ theme }) => theme.colors.bgCard};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: 12px;
  display: flex;
  align-items: center;
  gap: 1.2rem;
  transition: all ${({ theme }) => theme.transition};

  &:hover {
    border-color: rgba(0, 240, 255, 0.2);
    box-shadow: 0 4px 20px rgba(0, 240, 255, 0.05);
  }
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

const About = () => (
  <Section id="about">
    <Container>
      <Left>
        <SectionLabel>// About</SectionLabel>
        <SectionTitle>
          Building <span>digital products</span> that matter
        </SectionTitle>
        <Text>
          I'm a Full-Stack Developer with 2.5+ years of professional experience,
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
      </Left>
      <Right>
        <StatCard>
          <StatValue>2.5+</StatValue>
          <StatLabel>Years of professional<br />development experience</StatLabel>
        </StatCard>
        <StatCard>
          <StatValue>10+</StatValue>
          <StatLabel>Production projects<br />delivered to clients</StatLabel>
        </StatCard>
        <StatCard>
          <StatValue>20+</StatValue>
          <StatLabel>Technologies<br />in active use</StatLabel>
        </StatCard>
        <StatCard>
          <StatValue>∞</StatValue>
          <StatLabel>Commitment to clean code<br />& best practices</StatLabel>
        </StatCard>
      </Right>
    </Container>
  </Section>
);

export default About;
