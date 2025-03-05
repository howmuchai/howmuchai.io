import styled from 'styled-components';

const Grid = styled.div`
  display: grid;
  gap: 24px;

  /* 默认 1x6 布局 */
  grid-template-columns: repeat(1, 1fr);

  /* 屏幕宽度大于 600px 时使用 2x3 布局 */
  @media (min-width: 600px) {
    grid-template-columns: repeat(2, 1fr);
  }

  /* 屏幕宽度大于 900px 时使用 3x2 布局 */
  @media (min-width: 900px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

export default Grid;