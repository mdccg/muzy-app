import styled from 'styled-components';
import Wallpaper from './../../assets/images/wallpaper.jpg';
import { Link } from 'react-router-dom';

export const Container = styled.main`
  background: linear-gradient(to left, rgba(0, 0, 0, .5) 0%, rgba(0, 0, 0, .5) 100%),  url(${Wallpaper});
  background-position-y: 20%;
  background-size: cover;
  min-height: 100vh;
  padding: 0 8vw;
  justify-content: space-between;
  align-items: center;
  display: flex;

  @media (max-width: 768px) {
    justify-content: space-evenly;
    flex-direction: column;
  }
`;

export const Anchor = styled(Link)`
  text-decoration: none;
  color: inherit;
  align-items: center;
  display: flex;
`;

export const AnchorText = styled.span`
  color: white;
  font-size: 137.5%;
  font-weight: 900;
`;

export const Icon = styled.img`
  margin-left: 16px;
  width:  24px;
  height: 24px;
  filter: invert(100%);
  position: relative;
  top: 2px;
`;