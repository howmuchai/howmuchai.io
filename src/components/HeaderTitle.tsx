import styled from 'styled-components';

interface HeaderTitleProps {
  isDark: boolean;
}

const HeaderTitle = styled.h1<HeaderTitleProps>`
  font-size: 2.25rem;
  font-weight: bold;
  margin-bottom: 16px;
  background: ${({ isDark }) => (isDark ? 'white' : 'black')};
  -webkit-background-clip: text;
  color: transparent;
  animation: gradient-fast 3s infinite;
  letter-spacing: -0.025em;
`;

export default HeaderTitle;