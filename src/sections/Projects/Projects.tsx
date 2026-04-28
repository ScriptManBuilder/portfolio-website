import { useState, useRef } from 'react';
import styled, { css, keyframes } from 'styled-components';
import ProjectCard, { type GitHubRepo, type ProjectAvailabilityState } from '../../components/ProjectCard';
import { useLanguage } from '../../i18n/LanguageContext';
import type { Translation } from '../../i18n/translations';
import { sectionLabelStyles, sectionTitleStyles } from '../../styles/sectionHeading';

const ITEMS_PER_PAGE = 6;

type ProjectId = keyof Translation['projects']['items'];

interface ProjectData {
  id: ProjectId;
  technologies: string[];
  github: string | GitHubRepo[] | null;
  demo?: string | null;
  githubState?: ProjectAvailabilityState;
  demoState?: ProjectAvailabilityState;
}

const PROJECTS: ProjectData[] = [
  {
    id: 'digitalShop',
    technologies: ['TypeScript', 'React', 'NestJS', 'PostgreSQL', 'Prisma', 'Docker'],
    github: [
      { labelKey: 'client', label: 'Client', url: 'https://github.com/ScriptManBuilder/DigitalOnlineStoreClient' },
      { labelKey: 'server', label: 'Server', url: 'https://github.com/ScriptManBuilder/DigitalOnlineStoreServer' },
    ],
    demo: null,
    demoState: 'private',
  },
  {
    id: 'cryptoExchange',
    technologies: ['TypeScript', 'React','Styled Components', 'NestJS', 'PostgreSQL','Prisma', 'Docker'],
    github: 'https://github.com/ScriptManBuilder/CryptoMonytorWebsitePulseChain',
    demo: 'https://crypto-monytor-website-pulse-chain.vercel.app/',
  },
  {
    id: 'twinMedical',
    technologies: [
      'React','TypeScript','Tailwind CSS','NestJS','PostgreSQL','Vercel','Render'
    ],
    github: 'https://github.com/ScriptManBuilder/TwinMedicalClient',
    demo: 'https://www.twinmedicals.com',
  },
  {
    id: 'fintechWebsites',
    technologies: ['TypeScript', 'React', 'NestJS', 'PostgreSQL','Prisma', 'Docker'],
    github: null,
    demo: null,
    demoState: 'nda',
  },
    
  {
    id: 'topRange',
    technologies: ['TypeScript', 'React', 'Styled Components', 'Vercel', 'Telegram API'],
    github: 'https://github.com/ScriptManBuilder/TopRangeMainLanding',
    demo: 'https://www.toprangepartners.com/',
  },
  {
    id: 'ndaProjects',
    technologies: ['TypeScript', 'React', 'NestJS', '.NET', 'PostgreSQL', 'MongoDB', 'Railway', 'Other'],
    github: null,
    demo: null,
    githubState: 'confidential',
    demoState: 'nda',
  },

  {
    id: 'emailOutreach',
    technologies: ['TypeScript','React', 'React-Admin','NestJS', 'PostgreSQL','Gmail API'],
    github: null,
    demoState: 'private',
    githubState: 'confidential',
  },

  {
    id: 'calendarApp',
    technologies: ['TypeScript','React', 'Styled-components','Node.js','MongoDB', 'Vercel'],
    github: [
      { labelKey: 'client', label: 'Client', url: 'https://github.com/ScriptManBuilder/calendar-app-client' },
      { labelKey: 'server', label: 'Server', url: 'https://github.com/ScriptManBuilder/calendar-app-server' },
    ],
    demo: 'https://calendar-app-client.vercel.app/',
  },
  {
    id: 'videoMaker',
    technologies: ['TypeScript','Node.js','HTML','CSS','FFmpeg'],
    github: 'https://github.com/ScriptManBuilder/video-maker-factory-tool',
    demo: null,
    demoState: 'private',
  },
  {
    id: 'scientificPortfolio',
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
  ${sectionLabelStyles}
`;

const SectionTitle = styled.h2`
  ${sectionTitleStyles}
  margin-bottom: 3rem;

  @media (max-width: 480px) {
    font-size: 1.8rem;
    margin-bottom: 2rem;
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
    display: none;
  }
`;

const NavRow = styled.div`
  display: none;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    display: flex;
    justify-content: flex-end;
    gap: 0.5rem;
    margin-top: 1.25rem;
  }
`;

const MobileArrowButton = styled.button<{ $disabled?: boolean }>`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid ${({ theme }) => theme.colors.border};
  background: ${({ theme }) => theme.colors.bgCard};
  color: ${({ theme }) => theme.colors.primary};
  cursor: pointer;
  transition: all ${({ theme }) => theme.transition};

  svg {
    width: 16px;
    height: 16px;
  }

  &:hover:not(:disabled) {
    border-color: rgba(0, 240, 255, 0.4);
    background: rgba(0, 240, 255, 0.06);
  }

  ${({ $disabled }) =>
    $disabled &&
    css`
      opacity: 0.25;
      pointer-events: none;
      cursor: default;
    `}

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    width: 36px;
    height: 36px;
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
  const sectionRef = useRef<HTMLElement>(null);
  const { t } = useLanguage();

  const goToPage = (newPage: number) => {
    setPage(newPage);
    sectionRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const start = page * ITEMS_PER_PAGE;
  const visible = PROJECTS.slice(start, start + ITEMS_PER_PAGE);

  return (
    <Section id="projects" ref={sectionRef}>
      <Container>
        <SectionLabel>{`// ${t.projects.sectionLabel}`}</SectionLabel>
        <SectionTitle>
          {t.projects.titleLead}<span>{t.projects.titleAccent}</span>
        </SectionTitle>
        <CarouselWrapper>
          <ArrowButton
            $direction="left"
            $disabled={page === 0}
            onClick={(e) => { (e.currentTarget as HTMLButtonElement).blur(); goToPage(Math.max(0, page - 1)); }}
            aria-label={t.projects.previousAria}
          >
            <ChevronLeft />
          </ArrowButton>

          <GridOuter>
            <Grid key={page}>
              {visible.map((project) => {
                const content = t.projects.items[project.id];

                return (
                  <ProjectCard
                    key={project.id}
                    title={content.title}
                    description={content.description}
                    technologies={project.technologies}
                    github={project.github}
                    demo={project.demo}
                    githubState={project.githubState}
                    demoState={project.demoState}
                  />
                );
              })}
            </Grid>
          </GridOuter>

          <ArrowButton
            $direction="right"
            $disabled={page === totalPages - 1}
            onClick={(e) => { (e.currentTarget as HTMLButtonElement).blur(); goToPage(Math.min(totalPages - 1, page + 1)); }}
            aria-label={t.projects.nextAria}
          >
            <ChevronRight />
          </ArrowButton>
        </CarouselWrapper>

        <NavRow>
          <MobileArrowButton
            $disabled={page === 0}
            onClick={() => goToPage(Math.max(0, page - 1))}
            aria-label={t.projects.previousAria}
          >
            <ChevronLeft />
          </MobileArrowButton>
          <MobileArrowButton
            $disabled={page === totalPages - 1}
            onClick={() => goToPage(Math.min(totalPages - 1, page + 1))}
            aria-label={t.projects.nextAria}
          >
            <ChevronRight />
          </MobileArrowButton>
        </NavRow>

        {totalPages > 1 && (
          <PageDots>
            {Array.from({ length: totalPages }, (_, i) => (
              <Dot key={i} $active={i === page} onClick={() => goToPage(i)} aria-label={`${t.projects.pageAria} ${i + 1}`} />
            ))}
          </PageDots>
        )}
      </Container>
    </Section>
  );
};

export default Projects;
