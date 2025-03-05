import React, { type ReactNode } from 'react';
import styled from 'styled-components';
import Card from './Card';

interface CardProps {
  icon: ReactNode;
  title: string;
  description: string;
  isDark: boolean;
}

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
  color: #ffffff;
`;

const FeatureCard: React.FC<CardProps> = ({ icon, title, description, isDark }) => {
  return (
    <Card isDark={isDark}>
      <IconWrapper>{icon}</IconWrapper>
      <Title>{title}</Title>
      <Description style={{color:isDark?'#ffffff':'#64748b'}}>{description}</Description>
    </Card>
  );
};

export default FeatureCard;