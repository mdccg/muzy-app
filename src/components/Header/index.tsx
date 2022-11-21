import { Header } from './styles';
import SearchBar from './../SearchBar';
import HeadingGroup from './../HeadingGroup';

type HeaderProps = {
  getFruit: (fruitName: string) => void;
}

const HeaderComponent = ({ getFruit }: HeaderProps) => {
  return (
    <Header>
      <HeadingGroup style={{ alignSelf: 'center' }} />
      <SearchBar getFruit={getFruit} />
    </Header>
  );
}

export default HeaderComponent;