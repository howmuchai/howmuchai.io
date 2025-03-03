import React, { ReactNode } from 'react';
import styled from 'styled-components';

interface IndustryProps {
  image: string;
  title: string;
  description: string;
  icon?: ReactNode;
}

const Card = styled.div`
  position: relative;
  overflow: hidden;
  border-radius: 16px;
  transition: transform 0.3s;
  &:hover {
    transform: scale(1.05);
  }
`;

const Image = styled.img`
  width: 100%;
  height: 192px;
  object-fit: cover;
  transition: transform 0.7s;
  ${Card}:hover & {
    transform: scale(1.1);
  }
`;

const Overlay = styled.div`
  position: absolute;
  inset: 0;
  background: linear-gradient(to top, rgba(0, 0, 0, 0.6), transparent);
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding: 16px;
  transition: all 0.3s;
`;

const Title = styled.h3`
  font-size: 1.125rem;
  font-weight: bold;
  margin-bottom: 8px;
  color: #ffffff;
`;

const Description = styled.p`
  color: rgba(255, 255, 255, 0.9);
`;

const IndustryCard: React.FC<IndustryProps> = ({ image, title, description }) => {
  return (
    <Card>
      <Image src={image} alt={title} />
      <Overlay>
        <Title>{title}</Title>
        <Description>{description}</Description>
      </Overlay>
    </Card>
  );
};

export default IndustryCard;