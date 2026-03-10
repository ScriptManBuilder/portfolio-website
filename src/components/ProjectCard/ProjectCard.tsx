import styled from 'styled-components';

interface ProjectCardProps {
  title: string;
  description: string;
  technologies: string[];
  github: string;
  demo: string;
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

const ProjectCard = ({ title, description, technologies, github, demo }: ProjectCardProps) => (
  <Card>
    <Title>{title}</Title>
    <Description>{description}</Description>
    <TechList>
      {technologies.map((tech) => (
        <TechTag key={tech}>{tech}</TechTag>
      ))}
    </TechList>
    <Links>
      <LinkBtn href={github} target="_blank" rel="noopener noreferrer">
        GitHub →
      </LinkBtn>
      <LinkBtn href={demo} target="_blank" rel="noopener noreferrer">
        Live Demo →
      </LinkBtn>
    </Links>
  </Card>
);

export default ProjectCard;
