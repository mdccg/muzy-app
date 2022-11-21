import styled, { css } from 'styled-components';
import DiagonalStripes from './../../assets/icons/diagonal-stripes.svg';

const shared = () => css`
  border-radius: 16px;
`;

export const ProgressBar = styled.div`
  ${shared};
  height: 32px;
`;

export const Portion = styled.div`
  ${shared};
  height: 100%;
  min-width: 32px;
  background-image: url(${DiagonalStripes});
  transition: width 1.5s;
`;
