import React, { type ReactNode } from 'react';
import styled from 'styled-components';

interface CardProps {
  icon: ReactNode;
  title: string;
  description: string;
  isDark: boolean;
}

const Card = styled.div`
  background: {isDark ? '#1e293b' : '#ffffff'};
  color: {isDark ? '#ffffff' : '#1e293b'};
  padding: 24px;
  border-radius: 16px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: all 0.3s;
  border: none;
  &:hover {
    box-shadow: 0 6px 8px rgba(0, 0, 0, 0.1);
  }
`;

const IconWrapper = styled.div`
  margin-bottom: 16px;
`;

const Title = styled.h3`
  font-size: 1.125rem;
  font-weight: bold;
  margin-bottom: 8px;
  color: #1e293b;
`;

const Description = styled.p`
  color: #64748b;
`;

const FeatureCard: React.FC<CardProps> = ({ icon, title, description, isDark }) => {
  return (
    <Card>
      <IconWrapper>{icon}</IconWrapper>
      <Title>{title}</Title>
      <Description>{description}</Description>
    </Card>
  );
};

export default FeatureCard;