import { useState, useEffect } from 'react';
import styled from 'styled-components';

interface ProjectCardProps {
  title: string;
  description: string;
  technologies: string[];
  github: string | null;
  demo: string | null;
  githubLabel?: string;
  demoLabel?: string;
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
`;

const Description = styled.p`
  font-size: 0.9rem;
  color: ${({ theme }) => theme.colors.textSecondary};
  line-height: 1.65;
  flex: 1;
`;

const TechList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.4rem;
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
`;

const Links = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 0.5rem;
`;

const LinkPill = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 0.3rem;
  padding: 0.3rem 0.9rem;
  border-radius: 9999px;
  font-size: 0.78rem;
  font-weight: 500;
  font-family: ${({ theme }) => theme.fonts.mono};
  background: rgba(80, 255, 120, 0.10);
  border: 1px solid rgba(80, 255, 120, 0.35);
  color: #4be38a;
  cursor: pointer;
  transition: all 0.25s ease;
  user-select: none;
  text-decoration: none;

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
  padding: 0.3rem 0.9rem;
  border-radius: 9999px;
  font-size: 0.78rem;
  font-weight: 500;
  font-family: ${({ theme }) => theme.fonts.mono};
  background: rgba(0, 240, 255, 0.07);
  border: 1px solid rgba(0, 240, 255, 0.25);
  color: ${({ theme }) => theme.colors.primary};
  cursor: pointer;
  transition: all 0.25s ease;
  text-decoration: none;

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
  padding: 0.3rem 0.9rem;
  border-radius: 9999px;
  font-size: 0.78rem;
  font-weight: 500;
  font-family: ${({ theme }) => theme.fonts.mono};
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
`;

const getVariant = (label: string) => {
  if (/private/i.test(label)) return 'green';
  if (/nda|confidential/i.test(label)) return 'yellow';
  return 'red';
};

const CYCLING_MAP: Record<string, string[]> = {
  'Demo Private': ['Demo Private', 'Contact for access'],
  '🔒 NDA': ['🔒 NDA', 'Under NDA'],
  '🔒 Confidential': ['🔒 Confidential', 'Private Repo'],
  'Live Demo': ['Live Demo →', 'Click to open ↗'],
};

function useCyclingLabel(label: string, delayMs = 0) {
  const options = CYCLING_MAP[label];
  const [index, setIndex] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    if (!options) return;
    let interval: ReturnType<typeof setInterval>;
    const timeout = setTimeout(() => {
      interval = setInterval(() => {
        setVisible(false);
        setTimeout(() => {
          setIndex((i) => (i + 1) % options.length);
          setVisible(true);
        }, 500);
      }, 3000);
    }, delayMs);
    return () => {
      clearTimeout(timeout);
      clearInterval(interval);
    };
  }, [label, delayMs]);

  return {
    displayLabel: options ? options[index] : label,
    visible: options ? visible : true,
  };
}

const ProjectCard = ({ title, description, technologies, github, demo, githubLabel = '⛔ Unavailable', demoLabel = '⛔ Unavailable' }: ProjectCardProps) => {
  const { displayLabel: displayGithubLabel, visible: githubVisible } = useCyclingLabel(githubLabel, 0);
  const { displayLabel: displayDemoLabel, visible: demoVisible } = useCyclingLabel(demoLabel, 1000);
  const { displayLabel: displayDemoLinkLabel, visible: demoLinkVisible } = useCyclingLabel('Live Demo', 500);

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
          <GitHubPill href={github} target="_blank" rel="noopener noreferrer">
            GitHub →
          </GitHubPill>
        ) : (
          <UnavailableBtn $variant={getVariant(githubLabel)}>
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
          <UnavailableBtn $variant={getVariant(demoLabel)}>
            <span style={{ opacity: demoVisible ? 1 : 0 }}>{displayDemoLabel}</span>
          </UnavailableBtn>
        )}
      </Links>
    </Card>
  );
};

export default ProjectCard;
