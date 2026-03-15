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

const LinkBtn = styled.a`
  font-size: 0.85rem;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.primary};
  transition: all ${({ theme }) => theme.transition};
  display: inline-flex;
  align-items: center;
  gap: 0.3rem;

  &:hover {
    color: ${({ theme }) => theme.colors.accent};
    text-shadow: 0 0 8px rgba(0, 232, 135, 0.3);
  }
`;

interface UnavailableBtnProps {
  $variant?: 'red' | 'green' | 'yellow';
}

const UnavailableBtn = styled.span<UnavailableBtnProps & { $hoverText?: string }>`
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

  /* Hover text for green variant */
  ${({ $variant, $hoverText }) =>
    $variant === 'green' && $hoverText && `
      &:hover::after {
        content: '${'Contact for access'}';
        position: absolute;
        left: 50%;
        top: 100%;
        transform: translateX(-50%) translateY(8px);
        background: rgba(40, 40, 40, 0.98);
        color: #4be38a;
        border-radius: 8px;
        padding: 6px 16px;
        font-size: 0.85em;
        font-weight: 500;
        white-space: nowrap;
        box-shadow: 0 2px 12px rgba(0,0,0,0.18);
        z-index: 10;
        pointer-events: none;
        opacity: 1;
        transition: opacity 0.2s;
      }
    `}
`;

const getVariant = (label: string) => {
  if (/private/i.test(label)) return 'green';
  if (/nda|confidential/i.test(label)) return 'yellow';
  return 'red';
};

const ProjectCard = ({ title, description, technologies, github, demo, githubLabel = '⛔ Unavailable', demoLabel = '⛔ Unavailable' }: ProjectCardProps) => {
  // Only for Digital Shop & E-Commerce Platform
  const isDigitalShop = title === 'Digital Shop & E-Commerce Platform';
  const isDemoPrivate = /private/i.test(demoLabel);
  const demoHoverText = isDigitalShop && isDemoPrivate ? 'Contact for access' : undefined;

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
          <LinkBtn href={github} target="_blank" rel="noopener noreferrer">
            GitHub →
          </LinkBtn>
        ) : (
          <UnavailableBtn $variant={getVariant(githubLabel)}>{githubLabel}</UnavailableBtn>
        )}
        {demo ? (
          <LinkBtn href={demo} target="_blank" rel="noopener noreferrer">
            Live Demo →
          </LinkBtn>
        ) : (
          <UnavailableBtn $variant={getVariant(demoLabel)} $hoverText={demoHoverText}>{demoLabel}</UnavailableBtn>
        )}
      </Links>
    </Card>
  );
};

export default ProjectCard;
