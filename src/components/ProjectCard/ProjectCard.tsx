import { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useLanguage } from '../../i18n/LanguageContext';

export interface GitHubRepo {
  label?: string;
  labelKey?: 'client' | 'server';
  url: string;
}

export type ProjectAvailabilityState = 'unavailable' | 'private' | 'nda' | 'confidential';

interface ProjectCardProps {
  title: string;
  description: string;
  technologies: string[];
  github: string | GitHubRepo[] | null;
  demo?: string | null;
  githubState?: ProjectAvailabilityState;
  demoState?: ProjectAvailabilityState;
}

const Card = styled.div`
  background: ${({ theme }) => theme.colors.bgCard};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: 16px;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  position: relative;
  overflow: hidden;
  transition: all ${({ theme }) => theme.transition};

  @media (max-width: 480px) {
    padding: 1.4rem 1.2rem;
    gap: 0.8rem;
    border-radius: 12px;
  }

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 2px;
    background: ${({ theme }) => theme.colors.gradient};
    opacity: 0;
    transition: opacity ${({ theme }) => theme.transition};
  }

  &:hover {
    transform: translateY(-6px);
    border-color: rgba(0, 240, 255, 0.2);
    box-shadow:
      0 12px 40px rgba(0, 0, 0, 0.3),
      0 0 30px rgba(0, 240, 255, 0.05);
  }

  &:hover::before {
    opacity: 1;
  }
`;

const Title = styled.h3`
  font-size: 1.15rem;
  font-weight: 600;
  font-family: ${({ theme }) => theme.fonts.heading};
  color: ${({ theme }) => theme.colors.white};

  @media (max-width: 480px) {
    font-size: 1.05rem;
  }
`;

const Description = styled.p`
  font-size: 0.9rem;
  color: ${({ theme }) => theme.colors.textSecondary};
  line-height: 1.65;
  flex: 1;

  @media (max-width: 480px) {
    font-size: 0.84rem;
    line-height: 1.55;
  }
`;

const TechList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.4rem;

  @media (max-width: 480px) {
    gap: 0.3rem;
  }
`;

const TechTag = styled.span`
  background: rgba(123, 97, 255, 0.08);
  color: ${({ theme }) => theme.colors.secondary};
  border: 1px solid rgba(123, 97, 255, 0.12);
  padding: 0.2rem 0.6rem;
  border-radius: 5px;
  font-size: 0.73rem;
  font-weight: 500;
  font-family: ${({ theme }) => theme.fonts.mono};

  @media (max-width: 480px) {
    font-size: 0.67rem;
    padding: 0.15rem 0.45rem;
  }
`;

const Links = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.4rem;
  margin-top: 0.5rem;

  @media (max-width: 480px) {
    gap: 0.35rem;
    margin-top: 0.3rem;
  }
`;

const LinkPill = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 0.3rem;
  padding: 0.3rem 0.7rem;
  border-radius: 9999px;
  font-size: 0.78rem;
  font-weight: 500;
  font-family: ${({ theme }) => theme.fonts.mono};
  white-space: nowrap;
  background: rgba(80, 255, 120, 0.10);
  border: 1px solid rgba(80, 255, 120, 0.35);
  color: #4be38a;
  cursor: pointer;
  transition: all 0.25s ease;
  user-select: none;
  text-decoration: none;

  @media (max-width: 480px) {
    font-size: 0.72rem;
    padding: 0.25rem 0.55rem;
  }

  span {
    display: inline-block;
    transition: opacity 0.4s ease;
  }

  &:hover {
    background: rgba(80, 255, 120, 0.18);
    border-color: rgba(80, 255, 120, 0.6);
    box-shadow: 0 0 10px rgba(80, 255, 120, 0.18);
    color: #4be38a;
  }
`;

const GitHubPill = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 0.3rem;
  padding: 0.3rem 0.7rem;
  border-radius: 9999px;
  font-size: 0.78rem;
  font-weight: 500;
  font-family: ${({ theme }) => theme.fonts.mono};
  white-space: nowrap;
  background: rgba(0, 240, 255, 0.07);
  border: 1px solid rgba(0, 240, 255, 0.25);
  color: ${({ theme }) => theme.colors.primary};
  cursor: pointer;
  transition: all 0.25s ease;
  text-decoration: none;

  @media (max-width: 480px) {
    font-size: 0.72rem;
    padding: 0.25rem 0.55rem;
  }

  &:hover {
    background: rgba(0, 240, 255, 0.14);
    border-color: rgba(0, 240, 255, 0.5);
    box-shadow: 0 0 10px rgba(0, 240, 255, 0.15);
    color: ${({ theme }) => theme.colors.primary};
  }
`;

interface UnavailableBtnProps {
  $variant?: 'red' | 'green' | 'yellow';
}

const UnavailableBtn = styled.span<UnavailableBtnProps>`
  display: inline-flex;
  align-items: center;
  gap: 0.3rem;
  padding: 0.3rem 0.7rem;
  border-radius: 9999px;
  font-size: 0.78rem;
  font-weight: 500;
  font-family: ${({ theme }) => theme.fonts.mono};
  min-width: 5.5rem;
  justify-content: center;
  background: ${({ $variant }) =>
    $variant === 'green'
      ? 'rgba(80, 255, 120, 0.10)'
      : $variant === 'yellow'
      ? 'rgba(255, 220, 80, 0.10)'
      : 'rgba(255, 80, 80, 0.08)'};
  border: 1px solid
    ${({ $variant }) =>
      $variant === 'green'
        ? 'rgba(80, 255, 120, 0.35)'
        : $variant === 'yellow'
        ? 'rgba(255, 220, 80, 0.35)'
        : 'rgba(255, 80, 80, 0.35)'};
  color: ${({ $variant }) =>
    $variant === 'green'
      ? '#4be38a'
      : $variant === 'yellow'
      ? '#ffd43b'
      : '#ff6b6b'};
  white-space: nowrap;
  cursor: not-allowed;
  transition: all 0.25s ease;
  user-select: none;
  position: relative;

  span {
    display: inline-block;
    transition: opacity 0.4s ease;
  }

  &:hover {
    background: ${({ $variant }) =>
      $variant === 'green'
        ? 'rgba(80, 255, 120, 0.18)'
        : $variant === 'yellow'
        ? 'rgba(255, 220, 80, 0.18)'
        : 'rgba(255, 80, 80, 0.14)'};
    border-color: ${({ $variant }) =>
      $variant === 'green'
        ? 'rgba(80, 255, 120, 0.6)'
        : $variant === 'yellow'
        ? 'rgba(255, 220, 80, 0.6)'
        : 'rgba(255, 80, 80, 0.6)'};
    box-shadow: 0 0 10px
      ${({ $variant }) =>
        $variant === 'green'
          ? 'rgba(80, 255, 120, 0.18)'
          : $variant === 'yellow'
          ? 'rgba(255, 220, 80, 0.18)'
          : 'rgba(255, 80, 80, 0.2)'};
  }

  @media (max-width: 480px) {
    font-size: 0.72rem;
    padding: 0.25rem 0.55rem;
    min-width: 4.8rem;
  }
`;

const getVariant = (state: ProjectAvailabilityState) => {
  if (state === 'private') return 'green';
  if (state === 'nda' || state === 'confidential') return 'yellow';
  return 'red';
};

function useCyclingLabel(options: readonly string[], delayMs = 0) {
  const [index, setIndex] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    if (options.length < 2) {
      setIndex(0);
      setVisible(true);
      return;
    }

    let interval: ReturnType<typeof setInterval> | undefined;
    let fadeTimeout: ReturnType<typeof setTimeout> | undefined;
    const timeout = setTimeout(() => {
      interval = setInterval(() => {
        setVisible(false);
        fadeTimeout = setTimeout(() => {
          setIndex((i) => (i + 1) % options.length);
          setVisible(true);
        }, 500);
      }, 3000);
    }, delayMs);

    return () => {
      clearTimeout(timeout);
      if (interval) {
        clearInterval(interval);
      }
      if (fadeTimeout) {
        clearTimeout(fadeTimeout);
      }
    };
  }, [delayMs, options]);

  return {
    displayLabel: options[index] ?? options[0],
    visible,
  };
}

const ProjectCard = ({ title, description, technologies, github, demo, githubState = 'unavailable', demoState = 'unavailable' }: ProjectCardProps) => {
  const { t } = useLanguage();
  const { displayLabel: displayGithubLabel, visible: githubVisible } = useCyclingLabel(t.projectCard.states[githubState], 0);
  const { displayLabel: displayDemoLabel, visible: demoVisible } = useCyclingLabel(t.projectCard.states[demoState], 1000);
  const { displayLabel: displayDemoLinkLabel, visible: demoLinkVisible } = useCyclingLabel(t.projectCard.liveDemoLabels, 500);

  return (
    <Card>
      <Title>{title}</Title>
      <Description>{description}</Description>
      <TechList>
        {technologies.map((tech) => (
          <TechTag key={tech}>{tech}</TechTag>
        ))}
      </TechList>
      <Links>
        {github ? (
          Array.isArray(github) ? (
            github.map((repo) => (
              <GitHubPill key={repo.url} href={repo.url} target="_blank" rel="noopener noreferrer">
                {(repo.labelKey ? t.projectCard.repoLabels[repo.labelKey] : repo.label) || repo.label} →
              </GitHubPill>
            ))
          ) : (
            <GitHubPill href={github} target="_blank" rel="noopener noreferrer">
              {t.projectCard.githubLabel}
            </GitHubPill>
          )
        ) : (
          <UnavailableBtn $variant={getVariant(githubState)}>
            <span style={{ opacity: githubVisible ? 1 : 0 }}>{displayGithubLabel}</span>
          </UnavailableBtn>
        )}
        {demo ? (
          <LinkPill href={demo} target="_blank" rel="noopener noreferrer">
            <span style={{ opacity: demoLinkVisible ? 1 : 0 }}>
              {displayDemoLinkLabel}
            </span>
          </LinkPill>
        ) : (
          <UnavailableBtn $variant={getVariant(demoState)}>
            <span style={{ opacity: demoVisible ? 1 : 0 }}>{displayDemoLabel}</span>
          </UnavailableBtn>
        )}
      </Links>
    </Card>
  );
};

export default ProjectCard;
