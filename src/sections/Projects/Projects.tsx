import { useState } from 'react';
import styled, { css, keyframes } from 'styled-components';
import ProjectCard from '../../components/ProjectCard';

const ITEMS_PER_PAGE = 6;

const PROJECTS = [
  {
    title: 'Digital Shop & E-Commerce Platform',
    description:
      'Production-ready digital store with user authentication, personal profiles, product catalog, shopping cart, order tracking, and a full-featured admin dashboard with analytics (users, orders, revenue,order status).',
    technologies: ['TypeScript', 'React', 'NestJS', 'PostgreSQL', 'Prisma', 'Docker'],
    github: [
  { label: 'Client', url: 'https://github.com/ScriptManBuilder/DigitalOnlineStoreClient' },
  { label: 'Server', url: 'https://github.com/ScriptManBuilder/DigitalOnlineStoreServer' },
],
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
    technologies: ['TypeScript', 'React', 'NestJS', 'PostgreSQL','Prisma', 'Docker'],
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

 {
  title: 'Calendar Application',
  description:
    'Full-stack calendar application featuring task management, drag-and-drop scheduling, search, and integrated holiday support. ',
  technologies: ['TypeScript','React', 'Styled-components','Node.js','MongoDB', 'Vercel'],
  github: [
  { label: 'Client', url: 'https://github.com/ScriptManBuilder/calendar-app-client' },
  { label: 'Server', url: 'https://github.com/ScriptManBuilder/calendar-app-server' },
],
  demo: 'https://calendar-app-client.vercel.app/',

},

 {
  title: 'Gmail Sender — Email Outreach Platform',
  description:
    'Full-stack email outreach platform with a custom admin panel for managing recipients, templates, and campaigns. Includes secure Gmail API integration, bulk sending with rate limiting, campaign tracking, and delivery logs.',
  technologies: ['TypeScript','React', 'React-Admin','NestJS', 'PostgreSQL','Gmail API'],
  github: null,
  
  demoLabel: 'Demo Private',
  githubLabel: '🔒 Confidential',
  
},
 {
  title: 'Andonito portfolio website',
  description:
    'A portfolio website for a Ukrainian client, developed using HTML, CSS, and vanilla JavaScript.',
  technologies: ['HTML','CSS','JavaScript','Vanilla JS', 'Vercel'],
  github: 'https://github.com/ScriptManBuilder/clientAlex-portfolio-web',
  demo: 'https://client-alex-portfolio-web.vercel.app/',

},






];

const Section = styled.section`
  padding: 7rem 2rem;
  position: relative;

  @media (max-width: 480px) {
    padding: 4rem 1rem;
  }

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

  @media (max-width: 480px) {
    font-size: 1.8rem;
    margin-bottom: 2rem;
  }

  span {
    background: ${({ theme }) => theme.colors.gradient};
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }
`;

const CarouselWrapper = styled.div`
  position: relative;
`;

const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(12px); }
  to   { opacity: 1; transform: translateY(0); }
`;

const GridOuter = styled.div`
  overflow: hidden;
  padding: 10px 0;
  margin: -10px 0;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(340px, 1fr));
  gap: 1.5rem;
  animation: ${fadeIn} 0.4s ease;

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    grid-template-columns: 1fr;
    gap: 1rem;
  }
`;

const ArrowButton = styled.button<{ $disabled?: boolean; $direction: 'left' | 'right' }>`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  ${({ $direction }) => $direction === 'left' ? 'left: -68px;' : 'right: -68px;'}
  width: 48px;
  height: 48px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid ${({ theme }) => theme.colors.border};
  background: ${({ theme }) => theme.colors.bgCard};
  color: ${({ theme }) => theme.colors.primary};
  cursor: pointer;
  transition: all ${({ theme }) => theme.transition};
  z-index: 2;

  &::before {
    content: '';
    position: absolute;
    inset: -1px;
    border-radius: 50%;
    padding: 1px;
    background: ${({ theme }) => theme.colors.gradient};
    -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
    -webkit-mask-composite: xor;
    mask-composite: exclude;
    opacity: 0;
    transition: opacity ${({ theme }) => theme.transition};
  }

  svg {
    width: 20px;
    height: 20px;
    transition: transform ${({ theme }) => theme.transition};
  }

  &:hover:not(:disabled) {
    border-color: rgba(0, 240, 255, 0.4);
    background: rgba(0, 240, 255, 0.06);
    box-shadow:
      0 0 20px rgba(0, 240, 255, 0.12),
      0 0 40px rgba(0, 240, 255, 0.04);

    &::before { opacity: 1; }
    svg { transform: scale(1.15); }
  }

  ${({ $disabled }) =>
    $disabled &&
    css`
      opacity: 0.25;
      pointer-events: none;
      cursor: default;
    `}

  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    ${({ $direction }) => $direction === 'left' ? 'left: -52px;' : 'right: -52px;'}
    width: 40px;
    height: 40px;
    svg { width: 16px; height: 16px; }
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    ${({ $direction }) => $direction === 'left' ? 'left: auto; right: 52px;' : 'right: 0;'}
    top: auto;
    bottom: -60px;
    transform: none;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    width: 36px;
    height: 36px;
    ${({ $direction }) => $direction === 'left' ? 'left: auto; right: 44px;' : 'right: 0;'}
    bottom: -52px;
    svg { width: 14px; height: 14px; }
  }
`;

const PageDots = styled.div`
  display: flex;
  justify-content: center;
  gap: 0.5rem;
  margin-top: 2rem;
`;

const Dot = styled.button<{ $active: boolean }>`
  width: 8px;
  height: 8px;
  border-radius: 50%;
  border: 1px solid ${({ theme, $active }) =>
    $active ? theme.colors.primary : theme.colors.border};
  background: ${({ theme, $active }) =>
    $active ? theme.colors.primary : 'transparent'};
  cursor: pointer;
  transition: all ${({ theme }) => theme.transition};
  padding: 0;

  ${({ $active }) =>
    $active &&
    css`
      box-shadow: 0 0 8px rgba(0, 240, 255, 0.4);
    `}

  &:hover {
    border-color: ${({ theme }) => theme.colors.primary};
  }
`;

const ChevronLeft = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="15 18 9 12 15 6" />
  </svg>
);

const ChevronRight = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="9 6 15 12 9 18" />
  </svg>
);

const totalPages = Math.ceil(PROJECTS.length / ITEMS_PER_PAGE);

const Projects = () => {
  const [page, setPage] = useState(0);

  const start = page * ITEMS_PER_PAGE;
  const visible = PROJECTS.slice(start, start + ITEMS_PER_PAGE);

  return (
    <Section id="projects">
      <Container>
        <SectionLabel>// Portfolio</SectionLabel>
        <SectionTitle>
          Featured <span>projects</span>
        </SectionTitle>
        <CarouselWrapper>
          <ArrowButton
            $direction="left"
            $disabled={page === 0}
            onClick={() => setPage((p) => Math.max(0, p - 1))}
            aria-label="Previous projects"
          >
            <ChevronLeft />
          </ArrowButton>

          <GridOuter>
            <Grid key={page}>
              {visible.map((project) => (
                <ProjectCard key={project.title} {...project} />
              ))}
            </Grid>
          </GridOuter>

          <ArrowButton
            $direction="right"
            $disabled={page === totalPages - 1}
            onClick={() => setPage((p) => Math.min(totalPages - 1, p + 1))}
            aria-label="Next projects"
          >
            <ChevronRight />
          </ArrowButton>
        </CarouselWrapper>

        {totalPages > 1 && (
          <PageDots>
            {Array.from({ length: totalPages }, (_, i) => (
              <Dot key={i} $active={i === page} onClick={() => setPage(i)} aria-label={`Page ${i + 1}`} />
            ))}
          </PageDots>
        )}
      </Container>
    </Section>
  );
};

export default Projects;
