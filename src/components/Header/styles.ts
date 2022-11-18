import styled from 'styled-components';
import WallpaperHeader from './../../assets/images/wallpaper-header.jpg';

export const Header = styled.header`
  background:
    linear-gradient(to left, rgba(0, 0, 0, .5) 0%, rgba(0, 0, 0, .5) 100%), 
    url(${WallpaperHeader});
  height: 256px;
  background-position-y: 32%;
  background-size: cover;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  padding: 0 32px;
`;