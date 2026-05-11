import { useState, useEffect } from 'react';
import styled, { css, keyframes } from 'styled-components';
import { useLanguage } from '../../i18n/LanguageContext';

export interface GitHubRepo {
  label?: string;
  labelKey?: 'client' | 'server';
  url: string;
}

export type ProjectAvailabilityState = 'unavailable' | 'private' | 'nda' | 'confidential';
export type ProjectDetailsBadgeVariant = 'default' | 'fire' | 'pin';

interface ProjectCardProps {
  title: string;
  description: string;
  fullDescription?: string;
  detailsBadgeVariant?: ProjectDetailsBadgeVariant;
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

const badgePulse = keyframes`
  0%, 100% { transform: scale(1); opacity: 0.85; }
  50% { transform: scale(1.25); opacity: 1; }
`;

const badgeShimmer = keyframes`
  0% { transform: translateX(-120%); }
  100% { transform: translateX(140%); }
`;

const DetailsBadge = styled.button<{ $isOpen: boolean; $variant: ProjectDetailsBadgeVariant }>`
  position: absolute;
  top: 0.75rem;
  right: 0.75rem;
  border: 1px solid rgba(0, 240, 255, 0.5);
  background: linear-gradient(135deg, rgba(0, 240, 255, 0.18), rgba(62, 182, 255, 0.1));
  color: ${({ theme }) => theme.colors.primary};
  border-radius: 999px 999px 10px 999px;
  padding: 0.24rem 0.6rem 0.24rem 0.5rem;
  font-size: 0.6rem;
  font-weight: 700;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  font-family: ${({ theme }) => theme.fonts.mono};
  cursor: pointer;
  transition: all ${({ theme }) => theme.transition};
  z-index: 2;
  display: inline-flex;
  align-items: center;
  gap: 0.32rem;
  overflow: hidden;
  max-width: min(48%, 8.3rem);
  white-space: nowrap;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    width: 42%;
    background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.32), transparent);
    animation: ${badgeShimmer} 2.2s ease-in-out infinite;
    pointer-events: none;
  }

  &:focus-visible {
    outline: 2px solid rgba(0, 240, 255, 0.65);
    outline-offset: 2px;
  }

  &:hover {
    transform: translateY(-1px) scale(1.02);
    background: linear-gradient(135deg, rgba(0, 240, 255, 0.24), rgba(62, 182, 255, 0.16));
    border-color: rgba(0, 240, 255, 0.8);
    box-shadow:
      0 0 16px rgba(0, 240, 255, 0.32),
      0 6px 18px rgba(0, 0, 0, 0.25);
  }

  ${({ $isOpen }) =>
    $isOpen &&
    css`
      border-color: rgba(0, 240, 255, 0.85);
      background: linear-gradient(135deg, rgba(0, 240, 255, 0.27), rgba(62, 182, 255, 0.2));
    `}

  @media (prefers-reduced-motion: reduce) {
    &::before {
      animation: none;
    }

    &:hover {
      transform: none;
    }
  }

  @media (max-width: 480px) {
    top: 0.58rem;
    right: 0.58rem;
    font-size: 0.53rem;
    padding: 0.2rem 0.5rem 0.2rem 0.43rem;
    gap: 0.25rem;
    max-width: min(52%, 7rem);
  }

  @media (max-width: 380px) {
    top: 0.5rem;
    right: 0.5rem;
    font-size: 0.5rem;
    padding: 0.18rem 0.42rem 0.18rem 0.36rem;
    max-width: min(54%, 6.3rem);
  }
`;

const BadgePulseDot = styled.span`
  width: 5px;
  height: 5px;
  border-radius: 50%;
  background: #71fff5;
  box-shadow: 0 0 10px rgba(113, 255, 245, 0.65);
  flex-shrink: 0;
  animation: ${badgePulse} 1.7s ease-in-out infinite;

  @media (max-width: 480px) {
    width: 4px;
    height: 4px;
  }

  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }
`;

const ModalBackdrop = styled.div`
  position: fixed;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(4, 6, 17, 0.72);
  backdrop-filter: blur(4px);
  z-index: 1200;
  padding: 1.2rem;
`;

const ModalCard = styled.article`
  width: min(640px, 100%);
  border-radius: 18px;
  border: 1px solid rgba(0, 240, 255, 0.2);
  background: linear-gradient(160deg, rgba(17, 17, 40, 0.98) 0%, rgba(11, 11, 30, 0.98) 100%);
  box-shadow:
    0 24px 50px rgba(0, 0, 0, 0.5),
    0 0 40px rgba(0, 240, 255, 0.08);
  padding: 1.3rem 1.35rem 1.2rem;
  position: relative;

  @media (max-width: 480px) {
    border-radius: 14px;
    padding: 1rem 0.95rem;
  }
`;

const ModalClose = styled.button`
  position: absolute;
  top: 0.65rem;
  right: 0.7rem;
  width: 32px;
  height: 32px;
  border-radius: 50%;
  border: 1px solid ${({ theme }) => theme.colors.border};
  background: transparent;
  color: ${({ theme }) => theme.colors.textSecondary};
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.1rem;
  line-height: 1;
  cursor: pointer;
  transition: all ${({ theme }) => theme.transition};

  &:hover {
    color: ${({ theme }) => theme.colors.white};
    border-color: rgba(0, 240, 255, 0.35);
    background: rgba(0, 240, 255, 0.08);
  }
`;

const ModalLabel = styled.p`
  margin: 0;
  font-size: 0.72rem;
  font-family: ${({ theme }) => theme.fonts.mono};
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.primary};
`;

const ModalTitle = styled.h4`
  margin: 0.35rem 0 0.7rem;
  font-size: 1.18rem;
  color: ${({ theme }) => theme.colors.white};
  font-family: ${({ theme }) => theme.fonts.heading};

  @media (max-width: 480px) {
    font-size: 1.06rem;
    margin-right: 1.8rem;
  }
`;

const ModalText = styled.p`
  margin: 0;
  color: ${({ theme }) => theme.colors.textSecondary};
  line-height: 1.72;
  font-size: 0.95rem;
  white-space: pre-line;
  max-height: min(62vh, 620px);
  overflow: auto;
  padding-right: 0.25rem;

  @media (max-width: 480px) {
    font-size: 0.88rem;
    line-height: 1.64;
    max-height: 58vh;
  }
`;

const Title = styled.h3`
  font-size: 1.15rem;
  font-weight: 600;
  font-family: ${({ theme }) => theme.fonts.heading};
  color: ${({ theme }) => theme.colors.white};
  padding-right: 3.9rem;
  line-height: 1.34;

  @media (max-width: 480px) {
    font-size: 1.05rem;
    padding-right: 3.3rem;
  }

  @media (max-width: 380px) {
    padding-right: 2.9rem;
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

const UnavailableLink = styled.a<UnavailableBtnProps>`
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
  cursor: pointer;
  transition: all 0.25s ease;
  user-select: none;
  text-decoration: none;
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

function useCyclingLabel(options: readonly string[], delayMs = 0, cycleMs = 3000) {
  const [index, setIndex] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    if (options.length < 2) {
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
      }, cycleMs);
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
  }, [cycleMs, delayMs, options]);

  const isSingleOption = options.length < 2;

  return {
    displayLabel: options[index] ?? options[0],
    visible: isSingleOption ? true : visible,
  };
}

const ProjectCard = ({ title, description, fullDescription, detailsBadgeVariant = 'default', technologies, github, demo, githubState = 'unavailable', demoState = 'unavailable' }: ProjectCardProps) => {
  const { t } = useLanguage();
  const [isDetailsOpen, setIsDetailsOpen] = useState(false);
  const detailsBadgeLabels = t.projectCard.detailsBadgeLabels ?? [t.projectCard.detailsBadge];
  const { displayLabel: displayDetailsBadgeLabel, visible: detailsBadgeVisible } = useCyclingLabel(detailsBadgeLabels, 350, 5000);
  const { displayLabel: displayGithubLabel, visible: githubVisible } = useCyclingLabel(t.projectCard.states[githubState], 0);
  const { displayLabel: displayDemoLabel, visible: demoVisible } = useCyclingLabel(t.projectCard.states[demoState], 1000);
  const { displayLabel: displayDemoLinkLabel, visible: demoLinkVisible } = useCyclingLabel(t.projectCard.liveDemoLabels, 500);

  useEffect(() => {
    if (!isDetailsOpen) {
      return;
    }

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsDetailsOpen(false);
      }
    };

    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', onKeyDown);

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', onKeyDown);
    };
  }, [isDetailsOpen]);

  return (
    <>
      <Card>
        <DetailsBadge
          type="button"
          $isOpen={isDetailsOpen}
          $variant={detailsBadgeVariant}
          onClick={() => setIsDetailsOpen(true)}
          aria-label={t.projectCard.detailsBadgeAria}
          title={t.projectCard.detailsBadgeAria}
        >
          <BadgePulseDot aria-hidden="true" />
          <span style={{ opacity: detailsBadgeVisible ? 1 : 0 }}>{displayDetailsBadgeLabel}</span>
        </DetailsBadge>
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
          ) : demoState === 'private' ? (
            <UnavailableLink href="#contact" $variant={getVariant(demoState)}>
              <span style={{ opacity: demoVisible ? 1 : 0 }}>{displayDemoLabel}</span>
            </UnavailableLink>
          ) : (
            <UnavailableBtn $variant={getVariant(demoState)}>
              <span style={{ opacity: demoVisible ? 1 : 0 }}>{displayDemoLabel}</span>
            </UnavailableBtn>
          )}
        </Links>
      </Card>

      {isDetailsOpen && (
        <ModalBackdrop onClick={() => setIsDetailsOpen(false)}>
          <ModalCard onClick={(event) => event.stopPropagation()} role="dialog" aria-modal="true" aria-label={title}>
            <ModalClose type="button" onClick={() => setIsDetailsOpen(false)} aria-label={t.projectCard.closeDetailsAria}>
              ×
            </ModalClose>
            <ModalLabel>{t.projectCard.detailsModalLabel}</ModalLabel>
            <ModalTitle>{title}</ModalTitle>
            <ModalText>{fullDescription || description}</ModalText>
          </ModalCard>
        </ModalBackdrop>
      )}
    </>
  );
};

export default ProjectCard;
