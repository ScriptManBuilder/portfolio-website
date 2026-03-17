import styled, { keyframes } from 'styled-components';

interface SkillCategory {
  id: string;
  num: string;
  title: string;
  color: string;
  skills: string[];
}

const SKILL_DATA: SkillCategory[] = [
  {
    id: 'frontend',
    num: '01',
    title: 'Frontend',
    color: '#00f0ff',
    skills: ['React', 'TypeScript', 'JavaScript', 'HTML5', 'CSS3', 'Tailwind CSS', 'Styled Components', 'Bootstrap'],
  },
  {
    id: 'backend',
    num: '02',
    title: 'Backend',
    color: '#7b61ff',
    skills: ['Node.js', 'NestJS', 'C#', 'REST API'],
  },
  {
    id: 'databases',
    num: '03',
    title: 'Databases',
    color: '#00e887',
    skills: ['PostgreSQL', 'MongoDB', 'MS SQL', 'Prisma'],
  },
  {
    id: 'devops',
    num: '04',
    title: 'DevOps & Tools',
    color: '#f59e0b',
    skills: ['Git', 'Postman', 'Swagger', 'CI/CD', 'Docker', 'VPS','Vercel', 'Render', 'Railway'],
  },
];

const shimmer = keyframes`
  0%   { background-position: -200% center; }
  100% { background-position:  200% center; }
`;

const Section = styled.section`
  padding: 7rem 2rem;
  position: relative;
  background: ${({ theme }) => theme.colors.bgSecondary};

  &::before {
    content: '';
    position: absolute;
    top: 0; left: 0; right: 0;
    height: 1px;
    background: linear-gradient(90deg, transparent, rgba(123, 97, 255, 0.15), transparent);
  }
`;

const Container = styled.div`
  max-width: ${({ theme }) => theme.maxWidth};
  margin: 0 auto;
`;

/* ── Header ── */
const Header = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  gap: 1rem;
  margin-bottom: 3rem;
  flex-wrap: wrap;
`;

const HeaderLeft = styled.div``;

const SectionLabel = styled.p`
  font-size: 0.75rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 3px;
  color: ${({ theme }) => theme.colors.secondary};
  margin-bottom: 0.6rem;
  font-family: ${({ theme }) => theme.fonts.mono};
`;

const SectionTitle = styled.h2`
  font-size: clamp(2rem, 4vw, 2.6rem);
  font-weight: 800;
  font-family: ${({ theme }) => theme.fonts.heading};
  color: ${({ theme }) => theme.colors.white};
  letter-spacing: -1.5px;
  line-height: 1;

  span {
    background: ${({ theme }) => theme.colors.gradient};
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }
`;

const TotalBadge = styled.div`
  font-size: 0.78rem;
  font-family: ${({ theme }) => theme.fonts.mono};
  color: ${({ theme }) => theme.colors.textSecondary};
  padding: 0.35rem 0.9rem;
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: 20px;
  background: ${({ theme }) => theme.colors.bgCard};
  white-space: nowrap;

  strong {
    color: ${({ theme }) => theme.colors.primary};
  }
`;

/* ── Grid ── */
const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1.25rem;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    grid-template-columns: 1fr;
  }
`;

const Card = styled.div<{ $color: string }>`
  background: ${({ theme }) => theme.colors.bgCard};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: 16px;
  padding: 1.75rem 1.75rem 1.5rem;
  position: relative;
  overflow: hidden;
  transition: all ${({ theme }) => theme.transition};

  /* Colored left accent bar */
  &::before {
    content: '';
    position: absolute;
    top: 0; left: 0;
    width: 3px;
    height: 100%;
    background: ${({ $color }) => $color};
    opacity: 0.55;
    transition: opacity ${({ theme }) => theme.transition};
  }

  /* Big decorative number bg */
  &::after {
    content: attr(data-num);
    position: absolute;
    top: -0.8rem;
    right: 1.2rem;
    font-size: 5.5rem;
    font-weight: 900;
    font-family: ${({ theme }) => theme.fonts.heading};
    color: ${({ $color }) => $color};
    opacity: 0.04;
    line-height: 1;
    pointer-events: none;
    transition: opacity ${({ theme }) => theme.transition};
  }

  &:hover {
    border-color: ${({ $color }) => $color}33;
    transform: translateY(-3px);
    box-shadow: 0 8px 32px ${({ $color }) => $color}0f;
  }

  &:hover::before { opacity: 1; }
  &:hover::after  { opacity: 0.07; }
`;

const CardTop = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 1.2rem;
`;

const CardTitleGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.15rem;
`;

const CardNum = styled.span`
  font-size: 0.7rem;
  font-family: ${({ theme }) => theme.fonts.mono};
  color: ${({ theme }) => theme.colors.textSecondary};
  letter-spacing: 0.1em;
`;

const CardTitle = styled.h3`
  font-size: 1.05rem;
  font-weight: 700;
  font-family: ${({ theme }) => theme.fonts.heading};
  color: ${({ theme }) => theme.colors.white};
`;

const SkillCount = styled.span<{ $color: string }>`
  font-size: 0.7rem;
  font-family: ${({ theme }) => theme.fonts.mono};
  color: ${({ $color }) => $color};
  background: ${({ $color }) => $color}14;
  border: 1px solid ${({ $color }) => $color}30;
  padding: 0.18rem 0.6rem;
  border-radius: 20px;
  font-weight: 600;
  letter-spacing: 0.05em;
`;

const TagList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.45rem;
`;

const Tag = styled.span<{ $color: string }>`
  background: ${({ $color }) => $color}0a;
  color: ${({ $color }) => $color};
  border: 1px solid ${({ $color }) => $color}20;
  padding: 0.28rem 0.75rem;
  border-radius: 6px;
  font-size: 0.8rem;
  font-weight: 500;
  font-family: ${({ theme }) => theme.fonts.mono};
  transition: all ${({ theme }) => theme.transition};
  cursor: default;

  &:hover {
    background: ${({ $color }) => $color}18;
    border-color: ${({ $color }) => $color}45;
    box-shadow: 0 0 10px ${({ $color }) => $color}18;
  }
`;

/* ── Shimmer strip ── */
const ShimmerStrip = styled.div`
  margin-top: 2.5rem;
  display: flex;
  align-items: center;
  gap: 0.6rem;
  overflow: hidden;

  &::before, &::after {
    content: '';
    flex: 1;
    height: 1px;
    background: linear-gradient(90deg, transparent, ${({ theme }) => theme.colors.border}, transparent);
  }
`;

const ShimmerText = styled.span`
  font-size: 0.72rem;
  font-family: ${({ theme }) => theme.fonts.mono};
  letter-spacing: 0.2em;
  text-transform: uppercase;
  background: linear-gradient(
    90deg,
    ${({ theme }) => theme.colors.textSecondary} 0%,
    ${({ theme }) => theme.colors.primary} 50%,
    ${({ theme }) => theme.colors.textSecondary} 100%
  );
  background-size: 200% auto;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  animation: ${shimmer} 4s linear infinite;
  white-space: nowrap;
`;

const TOTAL_SKILLS = SKILL_DATA.reduce((acc, c) => acc + c.skills.length, 0);

const Skills = () => (
  <Section id="skills">
    <Container>
      <Header>
        <HeaderLeft>
          <SectionLabel>// Tech Stack</SectionLabel>
          <SectionTitle>
            Built with <span>purpose</span>
          </SectionTitle>
        </HeaderLeft>
        <TotalBadge>
          <strong>{TOTAL_SKILLS}</strong> technologies
        </TotalBadge>
      </Header>

      <Grid>
        {SKILL_DATA.map((cat) => (
          <Card key={cat.id} $color={cat.color} data-num={cat.num}>
            <CardTop>
              <CardTitleGroup>
                <CardNum>{cat.num} /</CardNum>
                <CardTitle>{cat.title}</CardTitle>
              </CardTitleGroup>
              <SkillCount $color={cat.color}>{cat.skills.length} skills</SkillCount>
            </CardTop>
            <TagList>
              {cat.skills.map((skill) => (
                <Tag key={skill} $color={cat.color}>{skill}</Tag>
              ))}
            </TagList>
          </Card>
        ))}
      </Grid>

      <ShimmerStrip>
        <ShimmerText>always learning &middot; always shipping</ShimmerText>
      </ShimmerStrip>
    </Container>
  </Section>
);

export default Skills;