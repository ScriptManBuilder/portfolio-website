import styled from 'styled-components';
import ContactForm from '../../components/ContactForm';

const EMAIL = 'shadowProgrammer@proton.me';
const TG    = 'https://t.me/wellCoderDmg';

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
    background: linear-gradient(90deg, transparent, rgba(0, 232, 135, 0.15), transparent);
  }
`;

const Container = styled.div`
  max-width: ${({ theme }) => theme.maxWidth};
  margin: 0 auto;
  display: grid;
  grid-template-columns: 380px 1fr;
  gap: 5rem;
  align-items: start;

  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    grid-template-columns: 320px 1fr;
    gap: 3.5rem;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    grid-template-columns: 1fr;
    gap: 3rem;
  }
`;

/* ── Left panel ── */
const InfoPanel = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

const SectionLabel = styled.p`
  font-size: 0.75rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 3px;
  color: ${({ theme }) => theme.colors.accent};
  margin-bottom: 0.6rem;
  font-family: ${({ theme }) => theme.fonts.mono};
`;

const SectionTitle = styled.h2`
  font-size: clamp(2rem, 4vw, 2.8rem);
  font-weight: 800;
  font-family: ${({ theme }) => theme.fonts.heading};
  color: ${({ theme }) => theme.colors.white};
  letter-spacing: -1.5px;
  line-height: 1.05;
  margin-bottom: 0.8rem;

  @media (max-width: 480px) {
    font-size: 1.9rem;
    letter-spacing: -1px;
  }

  span {
    background: ${({ theme }) => theme.colors.gradient};
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }
`;

const Subtitle = styled.p`
  font-size: 0.95rem;
  color: ${({ theme }) => theme.colors.textSecondary};
  line-height: 1.75;
`;

const ContactCards = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.7rem;
`;

const ContactCard = styled.a`
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 0.9rem 1.1rem;
  border-radius: 12px;
  border: 1px solid ${({ theme }) => theme.colors.border};
  background: ${({ theme }) => theme.colors.bgCard};
  transition: all ${({ theme }) => theme.transition};
  cursor: pointer;
  text-decoration: none;
  min-width: 0;

  @media (max-width: 420px) {
    padding: 0.75rem 0.85rem;
    gap: 0.75rem;
  }

  &:hover {
    border-color: rgba(0, 240, 255, 0.25);
    background: rgba(0, 240, 255, 0.03);
    transform: translateX(4px);
  }
`;

const CardIcon = styled.div<{ $color: string }>`
  width: 36px;
  height: 36px;
  border-radius: 10px;
  background: ${({ $color }) => $color}14;
  border: 1px solid ${({ $color }) => $color}25;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1rem;
  flex-shrink: 0;
`;

const CardText = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.1rem;
  min-width: 0;
`;

const CardLabel = styled.span`
  font-size: 0.7rem;
  font-family: ${({ theme }) => theme.fonts.mono};
  color: ${({ theme }) => theme.colors.textSecondary};
  text-transform: uppercase;
  letter-spacing: 0.1em;
`;

const CardValue = styled.span`
  font-size: 0.88rem;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.text};
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;

  @media (max-width: 420px) {
    font-size: 0.78rem;
    white-space: normal;
    word-break: break-all;
  }
`;

const Notice = styled.p`
  font-size: 0.78rem;
  color: ${({ theme }) => theme.colors.textSecondary};
  font-family: ${({ theme }) => theme.fonts.mono};
  line-height: 1.6;
  padding: 0.8rem 1rem;
  border-left: 2px solid ${({ theme }) => theme.colors.accent};
  background: rgba(0, 232, 135, 0.03);
  border-radius: 0 8px 8px 0;

  @media (max-width: 420px) {
    font-size: 0.7rem;
    padding: 0.65rem 0.75rem;
    word-break: break-word;
  }
`;

const Contact = () => (
  <Section id="contact">
    <Container>
      <InfoPanel>
        <div>
          <SectionLabel>// Contact</SectionLabel>
          <SectionTitle>
            Let's <span>work together</span>
          </SectionTitle>
          <Subtitle>
            Have a project, an opportunity, or just want to chat?
            I'm available for freelance, part-time, and full-time roles.
          </Subtitle>
        </div>

        <ContactCards>
          <ContactCard href={`mailto:${EMAIL}`}>
            <CardIcon $color="#00f0ff">@</CardIcon>
            <CardText>
              <CardLabel>Email</CardLabel>
              <CardValue>{EMAIL}</CardValue>
            </CardText>
          </ContactCard>

          <ContactCard href={TG} target="_blank" rel="noopener noreferrer">
            <CardIcon $color="#7b61ff">&#9992;</CardIcon>
            <CardText>
              <CardLabel>Telegram</CardLabel>
              <CardValue>@wellCoderDmg</CardValue>
            </CardText>
          </ContactCard>
        </ContactCards>

        <Notice>
          Prefer fast replies? Telegram is the quickest way to reach me.
          I usually respond within a few hours.
        </Notice>
      </InfoPanel>

      <ContactForm />
    </Container>
  </Section>
);

export default Contact;