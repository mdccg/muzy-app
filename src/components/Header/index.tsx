import { Header } from './styles';
import SearchBar from './../SearchBar';
import HeadingGroup from './../HeadingGroup';

const HeaderComponent = () => {
  return (
    <Header>
      <HeadingGroup style={{ alignSelf: 'center' }} />
      <SearchBar />
    </Header>
  );
}

export default HeaderComponent;