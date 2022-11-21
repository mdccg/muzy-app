import styled from 'styled-components';
import WallpaperHeader from './../../assets/images/wallpaper-header.png';

export const Header = styled.header`
  background:
    linear-gradient(to left, rgba(0, 0, 0, .5) 0%, rgba(0, 0, 0, .5) 100%), 
    url(${WallpaperHeader});
  min-height: 256px;
  background-size: cover;
  background-position-y: 32%;
  justify-content: space-between;
  align-items: flex-end;
  padding: 0 32px;
  display: flex;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;