import React, { type ReactNode } from 'react';
import styled from 'styled-components';

interface CardProps {
  isDark: boolean;
}

const Card = styled.div<CardProps>`
  background: ${({ isDark }) => (!isDark ? 'white' : '#64748b')};
  padding: 24px;
  border-radius: 16px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: all 0.3s;
  border: none;
  &:hover {
    box-shadow: 0 6px 8px rgba(0, 0, 0, 0.1);
  }
`;

export default Card;