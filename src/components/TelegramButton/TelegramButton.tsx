import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { FaTelegramPlane } from 'react-icons/fa';
import { useLanguage } from '../../i18n/LanguageContext';

const ButtonContainer = styled.div<{ $showBadge: boolean }>`
  position: fixed;
  bottom: 24px;
  right: 24px;
  z-index: 1000;
  background-color: #111128;
  border-radius: 50%;
  width: 52px;
  height: 52px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1.5px solid rgba(0, 240, 255, 0.15);
  cursor: pointer;
  box-shadow: 0 4px 24px rgba(0, 240, 255, 0.08);
  transition: background 0.3s ease, border-color 0.3s ease, box-shadow 0.3s ease, transform 0.3s ease;

  svg {
    color: #fff;
    font-size: 22px;
    transition: color 0.3s ease;
  }

  &:hover {
    background: linear-gradient(135deg, #00f0ff 0%, #7b61ff 100%);
    border-color: transparent;
    box-shadow: 0 8px 32px rgba(0, 240, 255, 0.35);
    transform: scale(1.1);

    svg {
      color: #060611;
    }
  }

  &::after {
    content: '1';
    position: absolute;
    top: -5px;
    right: -5px;
    background-color: #ff3333;
    color: white;
    border-radius: 50%;
    width: 18px;
    height: 18px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 11px;
    font-weight: bold;
    opacity: ${({ $showBadge }) => ($showBadge ? 1 : 0)};
    transform: ${({ $showBadge }) => ($showBadge ? 'scale(1)' : 'scale(0)')};
    transition: opacity 0.3s ease-out, transform 0.3s ease-out;
  }
`;

const TelegramButton: React.FC = () => {
  const [showBadge, setShowBadge] = useState(false);
  const { t } = useLanguage();

  useEffect(() => {
    const showTimer = setTimeout(() => setShowBadge(true), 3000);
    const hideTimer = setTimeout(() => setShowBadge(false), 13000);
    return () => {
      clearTimeout(showTimer);
      clearTimeout(hideTimer);
    };
  }, []);

  return (
    <ButtonContainer
      $showBadge={showBadge}
      onClick={() => window.open('https://t.me/wellCoderDmg', '_blank', 'noopener,noreferrer')}
      aria-label={t.telegramButton.ariaLabel}
      role="link"
    >
      <FaTelegramPlane />
    </ButtonContainer>
  );
};

export default TelegramButton;
