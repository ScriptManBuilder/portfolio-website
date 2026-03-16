import styled from 'styled-components';
import ProjectCard from '../../components/ProjectCard';

const PROJECTS = [
  {
    title: 'Digital Shop & E-Commerce Platform',
    description:
      'Production-ready digital store with user authentication, personal profiles, product catalog, shopping cart, order tracking, and a full-featured admin dashboard with analytics (users, orders, revenue,order status).',
    technologies: ['TypeScript', 'React', 'NestJS', 'PostgreSQL', 'Prisma', 'Docker'],
    github: 'https://github.com/ScriptManBuilder/DigitalOnlineStoreClient',
    demo: null,
    demoLabel: 'Demo Private',
  },
  {
    title: 'Cryptocurrency Exchange Platform',
    description:
      'Web platform for a crypto exchange with JWT authentication, personal user profiles, admin panel for content and system management. Deployed with Docker ensuring performance, security, and scalability.',
    technologies: ['TypeScript', 'React','Styled Components', 'NestJS', 'PostgreSQL','Prisma', 'Docker'],
    github: 'https://github.com/ScriptManBuilder/CryptoMonytorWebsitePulseChain',
    demo: 'https://crypto-monytor-website-pulse-chain.vercel.app/',
  },
  {
    title: 'Twin Medical Website',
    description:
      'Web platform for medical devices and healthcare products, providing structured product catalogs, category navigation, and an administrative interface for managing medical equipment listings and content.',
    technologies: [
      'React','TypeScript','Tailwind CSS','NestJS','PostgreSQL','Vercel','Render'
    ],
    github: 'https://github.com/ScriptManBuilder/TwinMedicalClient',
    demo: 'https://www.twinmedicals.com',
  },
  {
    title: 'FinTech & Banking Websites',
    description:
      'FinTech and banking-oriented websites for international clients with compliance-ready structures, secure authentication, admin panels, and scalable frontend architectures suitable for enterprise use.',
    technologies: ['TypeScript', 'React', 'NestJS', 'PostgreSQL', 'Docker'],
    github: null,
    demo: null,
    demoLabel: '🔒 NDA',
  },
    
  {
  title: 'TopRange — Corporate Landing',
  description:
    'High-converting corporate landing page for an international business partner network. Features a modern, polished UI with smooth animations, strategic call-to-action sections, and a responsive layout crafted to reflect brand authority and drive engagement.',
  technologies: [
    'TypeScript',
    'React',
    'Styled Components',
    'Vercel',
    
    'Telegram API',
    
  ],
  github: 'https://github.com/ScriptManBuilder/TopRangeMainLanding',
  demo: 'https://www.toprangepartners.com/',
},
  {
  title: 'Various Commercial Projects (NDA)',
  description:
    'Contributed to multiple commercial projects under NDA across fintech, e-commerce, healthcare, and marketing platforms. Responsibilities included full-stack feature development, API integrations, admin dashboards, and scalable web applications for production environments.',
  technologies: ['TypeScript', 'React', 'NestJS', '.NET', 'PostgreSQL', 'MongoDB', 'Railway', 'Other'],
  github: null,
  demo: null,
  githubLabel: '🔒 Confidential',
  demoLabel: '🔒 NDA',
},
];

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
`;

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
  margin-bottom: 3rem;
  letter-spacing: -1px;

  span {
    background: ${({ theme }) => theme.colors.gradient};
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(340px, 1fr));
  gap: 1.5rem;

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    grid-template-columns: 1fr;
  }
`;

const Projects = () => (
  <Section id="projects">
    <Container>
      <SectionLabel>// Portfolio</SectionLabel>
      <SectionTitle>
        Featured <span>projects</span>
      </SectionTitle>
      <Grid>
        {PROJECTS.map((project) => (
          <ProjectCard key={project.title} {...project} />
        ))}
      </Grid>
    </Container>
  </Section>
);

export default Projects;
