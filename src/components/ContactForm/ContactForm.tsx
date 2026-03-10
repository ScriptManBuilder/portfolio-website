import { useState } from 'react';
import type { FormEvent } from 'react';
import styled, { keyframes, css } from 'styled-components';

const BOT_TOKEN = import.meta.env.VITE_TELEGRAM_BOT_TOKEN;
const CHAT_ID   = import.meta.env.VITE_TELEGRAM_CHAT_ID;

const sendToTelegram = async (name: string, email: string, message: string) => {
  const text = [
    `\u{1F4EC} *New Portfolio Message*`,
    `\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500`,
    `\u{1F464} *Name:* ${name}`,
    `\u{1F4E7} *Email:* ${email}`,
    `\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500`,
    `\u{1F4AC} *Message:*`,
    message,
  ].join('\n');

  const res = await fetch(
    `https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`,
    {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ chat_id: CHAT_ID, text, parse_mode: 'Markdown' }),
    }
  );

  if (!res.ok) throw new Error('Telegram API error');
};

/* ── Animations ── */
const spin = keyframes`
  to { transform: rotate(360deg); }
`;

const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(-6px); }
  to   { opacity: 1; transform: translateY(0); }
`;

/* ── Wrappers ── */
const Wrapper = styled.div`
  width: 100%;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.1rem;
  width: 100%;
`;

const Row = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    grid-template-columns: 1fr;
  }
`;

const Group = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.35rem;
`;

const Label = styled.label`
  font-size: 0.72rem;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.textSecondary};
  font-family: ${({ theme }) => theme.fonts.mono};
  text-transform: uppercase;
  letter-spacing: 0.1em;
`;

const fieldBase = css`
  padding: 0.85rem 1rem;
  border-radius: 10px;
  border: 1px solid ${({ theme }) => theme.colors.border};
  background: ${({ theme }) => theme.colors.bgCard};
  color: ${({ theme }) => theme.colors.text};
  font-size: 0.92rem;
  font-family: inherit;
  width: 100%;
  transition: all ${({ theme }) => theme.transition};
  outline: none;

  &::placeholder {
    color: ${({ theme }) => theme.colors.textSecondary};
    opacity: 0.5;
  }

  &:focus {
    border-color: ${({ theme }) => theme.colors.primary};
    box-shadow: 0 0 0 3px rgba(0, 240, 255, 0.08),
                0 0 20px rgba(0, 240, 255, 0.04);
    background: rgba(0, 240, 255, 0.02);
  }
`;

const Input = styled.input`${fieldBase}`;

const MAX_MSG = 500;

const TextArea = styled.textarea`
  ${fieldBase}
  min-height: 140px;
  max-height: 220px;
  resize: vertical;
  line-height: 1.6;
`;

const MsgFooter = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: -0.15rem;
`;

const CharCount = styled.span<{ $over: boolean }>`
  font-size: 0.68rem;
  font-family: ${({ theme }) => theme.fonts.mono};
  color: ${({ $over }) => ($over ? '#f87171' : ({ theme }: any) => theme.colors.textSecondary)};
  transition: color 0.2s;
`;

const ErrorText = styled.span`
  font-size: 0.73rem;
  color: #f87171;
  font-family: ${({ theme }) => theme.fonts.mono};
  animation: ${fadeIn} 0.2s ease;
`;

/* ── Submit button ── */
const SubmitBtn = styled.button<{ $loading: boolean }>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  padding: 0.85rem 2rem;
  border-radius: 50px;
  background: #0f0f24;
  border: 1.5px solid rgba(0, 240, 255, 0.15);
  color: ${({ theme }) => theme.colors.primary};
  font-size: 0.9rem;
  font-weight: 700;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  align-self: flex-start;
  box-shadow: 0 0 20px rgba(0, 240, 255, 0.05), inset 0 1px 0 rgba(0, 240, 255, 0.06);
  cursor: ${({ $loading }) => ($loading ? 'not-allowed' : 'pointer')};
  opacity: ${({ $loading }) => ($loading ? 0.75 : 1)};

  &:hover:not(:disabled) {
    background: linear-gradient(135deg, #00f0ff 0%, #5ef5d2 50%, #00e887 100%);
    color: #060611;
    border-color: transparent;
    box-shadow: 0 8px 32px rgba(0, 240, 255, 0.4), 0 0 60px rgba(0, 240, 255, 0.12);
    transform: translateY(-2px) scale(1.03);
  }
`;

const Spinner = styled.span`
  width: 14px;
  height: 14px;
  border: 2px solid rgba(0, 240, 255, 0.2);
  border-top-color: #00f0ff;
  border-radius: 50%;
  animation: ${spin} 0.7s linear infinite;
`;

/* ── Status messages ── */
const SuccessBox = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 0.75rem;
  padding: 1rem 1.1rem;
  border-radius: 10px;
  background: rgba(0, 232, 135, 0.05);
  border: 1px solid rgba(0, 232, 135, 0.2);
  animation: ${fadeIn} 0.3s ease;
`;

const SuccessIcon = styled.span`
  font-size: 1.1rem;
  flex-shrink: 0;
  margin-top: 1px;
`;

const SuccessText = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.2rem;
`;

const SuccessTitle = styled.strong`
  font-size: 0.88rem;
  color: ${({ theme }) => theme.colors.accent};
  font-weight: 600;
`;

const SuccessBody = styled.p`
  font-size: 0.82rem;
  color: ${({ theme }) => theme.colors.textSecondary};
  font-family: ${({ theme }) => theme.fonts.mono};
`;

const ErrorBox = styled.div`
  display: flex;
  align-items: center;
  gap: 0.65rem;
  padding: 0.8rem 1rem;
  border-radius: 10px;
  background: rgba(248, 113, 113, 0.05);
  border: 1px solid rgba(248, 113, 113, 0.2);
  font-size: 0.83rem;
  color: #f87171;
  font-family: ${({ theme }) => theme.fonts.mono};
  animation: ${fadeIn} 0.2s ease;
`;

/* ── Component ── */
interface FormErrors {
  name?: string;
  email?: string;
  message?: string;
}

type SubmitState = 'idle' | 'loading' | 'success' | 'error';

const ContactForm = () => {
  const [name,    setName]    = useState('');
  const [email,   setEmail]   = useState('');
  const [message, setMessage] = useState('');
  const [errors,  setErrors]  = useState<FormErrors>({});
  const [status,  setStatus]  = useState<SubmitState>('idle');

  const validate = (): boolean => {
    const e: FormErrors = {};
    if (!name.trim())    e.name    = 'Name is required';
    if (!email.trim())   e.email   = 'Email is required';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) e.email = 'Invalid email';
    if (!message.trim()) e.message = 'Message is required';
    else if (message.length > MAX_MSG) e.message = `Max ${MAX_MSG} characters`;
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!validate() || status === 'loading') return;

    setStatus('loading');
    try {
      await sendToTelegram(name, email, message);
      setStatus('success');
      setName(''); setEmail(''); setMessage(''); setErrors({});
    } catch {
      setStatus('error');
    }
  };

  return (
    <Wrapper>
      {status === 'success' && (
        <SuccessBox style={{ marginBottom: '1.1rem' }}>
          <SuccessIcon>&#10003;</SuccessIcon>
          <SuccessText>
            <SuccessTitle>Message sent!</SuccessTitle>
            <SuccessBody>Thanks for reaching out. I'll get back to you soon.</SuccessBody>
          </SuccessText>
        </SuccessBox>
      )}

      {status === 'error' && (
        <ErrorBox style={{ marginBottom: '1.1rem' }}>
          &#9888; Failed to send. Try emailing me directly instead.
        </ErrorBox>
      )}

      <Form onSubmit={handleSubmit} noValidate>
        <Row>
          <Group>
            <Label htmlFor="cf-name">Name</Label>
            <Input
              id="cf-name"
              type="text"
              placeholder="Your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            {errors.name && <ErrorText>{errors.name}</ErrorText>}
          </Group>
          <Group>
            <Label htmlFor="cf-email">Email</Label>
            <Input
              id="cf-email"
              type="email"
              placeholder="your@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            {errors.email && <ErrorText>{errors.email}</ErrorText>}
          </Group>
        </Row>

        <Group>
          <Label htmlFor="cf-message">Message</Label>
          <TextArea
            id="cf-message"
            placeholder="What can I help you with?"
            value={message}
            maxLength={MAX_MSG}
            onChange={(e) => setMessage(e.target.value)}
          />
          <MsgFooter>
            <CharCount $over={message.length >= MAX_MSG}>
              {message.length} / {MAX_MSG}
            </CharCount>
          </MsgFooter>
          {errors.message && <ErrorText>{errors.message}</ErrorText>}
        </Group>

        <SubmitBtn type="submit" $loading={status === 'loading'} disabled={status === 'loading'}>
          {status === 'loading' ? (
            <><Spinner /> Sending...</>
          ) : (
            'Send Message'
          )}
        </SubmitBtn>
      </Form>
    </Wrapper>
  );
};

export default ContactForm;