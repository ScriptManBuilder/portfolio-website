import { useState } from 'react';
import styled, { keyframes } from 'styled-components';
import diplomaPdf from "../../assets/Bachelor's Diploma-B25159502-09.04.2026, 12_15_27.pdf.pdf";

const EDUCATION = [
  {
    degree: "Bachelor's in Computer Science",
    institution: 'Odesa I.I. Mechnikov National University',
    period: '2021 — 2025',
    type: 'University',
    color: '#00f0ff',
    diplomaUrl: diplomaPdf as string,
    highlights: [
      'Developed full-stack applications and system design projects',
      'Focused on algorithms, databases, and scalable architectures',
      "Bachelor's thesis: building a production-ready web platform",
      'Team collaboration using Git and modern development workflows',
    ],
  },
  {
    degree: 'Secondary Education in Computer Science',
    institution: 'Kherson Academic Lyceum',
    period: '2019 — 2021',
    type: 'Lyceum',
    color: '#7b61ff',
    highlights: [
      'Participant in programming olympiads and IT competitions',
      'Strong foundation in algorithms, logic, and problem-solving',
      'Early start in software development and coding practices',
    ],
  },
  {
    degree: 'Professional Course in Web Development',
    institution: 'IT STEP Academy',
    period: '2018 — 2019',
    type: 'Course',
    color: '#00e887',
    highlights: [
      'Built first full-stack web projects',
      'Learned core web technologies (HTML, CSS, JavaScript)',
      'Hands-on experience with real-world development basics',
    ],
  },
];

const draw = keyframes`
  from { height: 0; }
  to   { height: 100%; }
`;

const fadeUp = keyframes`
  from { opacity: 0; transform: translateY(16px); }
  to   { opacity: 1; transform: translateY(0); }
`;

const Section = styled.section`
  padding: 7rem 2rem;
  position: relative;
  background: ${({ theme }) => theme.colors.bg};

  @media (max-width: 480px) {
    padding: 5rem 1rem;
  }

  &::before {
    content: '';
    position: absolute;
    top: 0; left: 0; right: 0;
    height: 1px;
    background: linear-gradient(90deg, transparent, rgba(0, 240, 255, 0.12), transparent);
  }
`;

const Container = styled.div`
  max-width: ${({ theme }) => theme.maxWidth};
  margin: 0 auto;
`;

/* ── Header ── */
const SectionLabel = styled.p`
  font-size: 0.75rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 3px;
  color: ${({ theme }) => theme.colors.primary};
  margin-bottom: 0.6rem;
  font-family: ${({ theme }) => theme.fonts.mono};
`;

const SectionTitle = styled.h2`
  font-size: clamp(2rem, 4vw, 2.6rem);
  font-weight: 800;
  font-family: ${({ theme }) => theme.fonts.heading};
  color: ${({ theme }) => theme.colors.white};
  letter-spacing: -1.5px;
  margin-bottom: 3.5rem;

  span {
    background: ${({ theme }) => theme.colors.gradient};
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }
`;

/* ── Timeline ── */
const Timeline = styled.div`
  position: relative;
  max-width: 760px;

  /* vertical line */
  &::before {
    content: '';
    position: absolute;
    left: 18px;
    top: 8px;
    bottom: 0;
    width: 1px;
    background: linear-gradient(
      to bottom,
      rgba(0, 240, 255, 0.35),
      rgba(123, 97, 255, 0.2),
      transparent
    );
    animation: ${draw} 1s ease both;
  }
`;

const Item = styled.div<{ $delay: number }>`
  position: relative;
  padding-left: 56px;
  padding-bottom: 2.8rem;
  animation: ${fadeUp} 0.5s ease both;
  animation-delay: ${({ $delay }) => $delay}ms;

  &:last-child {
    padding-bottom: 0;
  }

  @media (max-width: 480px) {
    padding-left: 42px;
    padding-bottom: 2rem;
  }
`;

/* Dot on the line */
const Dot = styled.div<{ $color: string }>`
  position: absolute;
  left: 10px;
  top: 6px;
  width: 17px;
  height: 17px;
  border-radius: 50%;
  background: ${({ theme }) => theme.colors.bg};
  border: 2px solid ${({ $color }) => $color};
  box-shadow: 0 0 10px ${({ $color }) => $color}55;
  z-index: 1;
`;

/* Card */
const Card = styled.div<{ $color: string }>`
  background: ${({ theme }) => theme.colors.bgCard};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: 14px;
  padding: 1.4rem 1.6rem;

  @media (max-width: 480px) {
    padding: 1rem 0.9rem;
  }
  transition: all ${({ theme }) => theme.transition};
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0; left: 0;
    width: 3px; height: 100%;
    background: ${({ $color }) => $color};
    opacity: 0.5;
    transition: opacity ${({ theme }) => theme.transition};
  }

  &:hover {
    border-color: ${({ $color }) => $color}30;
    box-shadow: 0 6px 28px ${({ $color }) => $color}0d;
    transform: translateX(4px);
  }

  &:hover::before {
    opacity: 1;
  }
`;

const CardTop = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 1rem;
  margin-bottom: 0.35rem;
  flex-wrap: wrap;
`;

const Degree = styled.h3`
  font-size: 1rem;
  font-weight: 700;
  font-family: ${({ theme }) => theme.fonts.heading};
  color: ${({ theme }) => theme.colors.white};
  line-height: 1.3;
`;

const Period = styled.span`
  font-size: 0.72rem;
  font-family: ${({ theme }) => theme.fonts.mono};
  color: ${({ theme }) => theme.colors.textSecondary};
  white-space: nowrap;
  padding-top: 2px;
`;

const Institution = styled.p`
  font-size: 0.88rem;
  color: ${({ theme }) => theme.colors.textSecondary};
  margin-bottom: 0.55rem;
`;

const TypeTag = styled.span<{ $color: string }>`
  font-size: 0.68rem;
  font-family: ${({ theme }) => theme.fonts.mono};
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  color: ${({ $color }) => $color};
  background: ${({ $color }) => $color}12;
  border: 1px solid ${({ $color }) => $color}25;
  padding: 0.18rem 0.6rem;
  border-radius: 20px;
`;

const CardBottom = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.5rem;
  flex-wrap: wrap;

  @media (max-width: 420px) {
    row-gap: 0.45rem;
  }
`;

const CardBottomRight = styled.div`
  display: flex;
  align-items: center;
  gap: 0.45rem;
`;

const DownloadBtn = styled.a<{ $color: string }>`
  display: inline-flex;
  align-items: center;
  gap: 0.3rem;
  padding: 0.18rem 0.55rem;
  border-radius: 20px;
  font-size: 0.65rem;
  font-family: ${({ theme }) => theme.fonts.mono};
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  cursor: pointer;
  background: transparent;
  border: 1px solid ${({ $color }) => $color}30;
  color: ${({ $color }) => $color};
  text-decoration: none;
  transition: all ${({ theme }) => theme.transition};
  flex-shrink: 0;

  &::before {
    content: '↓';
    font-size: 0.7rem;
  }

  &:hover {
    background: ${({ $color }) => $color}12;
    border-color: ${({ $color }) => $color}55;
  }
`;

const ToggleBtn = styled.button<{ $color: string; $open: boolean }>`
  display: inline-flex;
  align-items: center;
  gap: 0.3rem;
  padding: 0.18rem 0.55rem;
  border-radius: 20px;
  font-size: 0.65rem;
  font-family: ${({ theme }) => theme.fonts.mono};
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  cursor: pointer;
  background: transparent;
  border: 1px solid ${({ $color }) => $color}30;
  color: ${({ $color }) => $color};
  transition: all ${({ theme }) => theme.transition};
  flex-shrink: 0;

  &::after {
    content: '';
    display: inline-block;
    width: 0;
    height: 0;
    border-left: 4px solid transparent;
    border-right: 4px solid transparent;
    border-top: 4px solid currentColor;
    transform: ${({ $open }) => ($open ? 'rotate(180deg)' : 'rotate(0deg)')};
    transition: transform 0.3s ease;
  }

  &:hover {
    background: ${({ $color }) => $color}12;
    border-color: ${({ $color }) => $color}55;
  }
`;

const HighlightsWrapper = styled.div<{ $open: boolean }>`
  display: grid;
  grid-template-rows: ${({ $open }) => ($open ? '1fr' : '0fr')};
  transition: grid-template-rows 0.35s cubic-bezier(0.4, 0, 0.2, 1);
  margin-top: ${({ $open }) => ($open ? '0.9rem' : '0')};
  transition: grid-template-rows 0.35s cubic-bezier(0.4, 0, 0.2, 1),
              margin-top 0.35s ease;
`;

const HighlightsInner = styled.div`
  overflow: hidden;
`;

const HighlightsList = styled.ul<{ $color: string }>`
  list-style: none;
  margin: 0;
  padding: 0.75rem 0.9rem;
  border-radius: 8px;
  background: ${({ $color }) => $color}06;
  border: 1px solid ${({ $color }) => $color}18;
  display: flex;
  flex-direction: column;
  gap: 0.45rem;
`;

const HighlightItem = styled.li<{ $color: string }>`
  font-size: 0.83rem;
  color: ${({ theme }) => theme.colors.textSecondary};
  line-height: 1.5;
  display: flex;
  align-items: flex-start;
  gap: 0.55rem;

  &::before {
    content: '▸';
    color: ${({ $color }) => $color};
    font-size: 0.7rem;
    margin-top: 0.18rem;
    flex-shrink: 0;
  }
`;

const Education = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (i: number) => setOpenIndex(prev => (prev === i ? null : i));

  return (
    <Section id="education">
      <Container>
        <SectionLabel>// Education</SectionLabel>
        <SectionTitle>
          Academic <span>background</span>
        </SectionTitle>

        <Timeline>
          {EDUCATION.map((item, i) => {
            const isOpen = openIndex === i;
            return (
              <Item key={item.institution} $delay={i * 120}>
                <Dot $color={item.color} />
                <Card $color={item.color}>
                  <CardTop>
                    <Degree>{item.degree}</Degree>
                    <Period>{item.period}</Period>
                  </CardTop>
                  <Institution>{item.institution}</Institution>
                  <CardBottom>
                    <TypeTag $color={item.color}>{item.type}</TypeTag>
                    <CardBottomRight>
                      {'diplomaUrl' in item && (
                        <DownloadBtn
                          $color={item.color}
                          href={(item as typeof item & { diplomaUrl: string }).diplomaUrl}
                          download
                        >
                          Diploma
                        </DownloadBtn>
                      )}
                      <ToggleBtn
                        $color={item.color}
                        $open={isOpen}
                        onClick={() => toggle(i)}
                      >
                        {isOpen ? 'Hide' : 'Details'}
                      </ToggleBtn>
                    </CardBottomRight>
                  </CardBottom>

                  <HighlightsWrapper $open={isOpen}>
                    <HighlightsInner>
                      <HighlightsList $color={item.color}>
                        {item.highlights.map(h => (
                          <HighlightItem key={h} $color={item.color}>
                            {h}
                          </HighlightItem>
                        ))}
                      </HighlightsList>
                    </HighlightsInner>
                  </HighlightsWrapper>
                </Card>
              </Item>
            );
          })}
        </Timeline>
      </Container>
    </Section>
  );
};

export default Education;