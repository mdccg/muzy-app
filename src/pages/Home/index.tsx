import { Container, Anchor, AnchorText, Icon } from './styles';
import HeadingGroup from './../../components/HeadingGroup';
import AnglesRightSolid from './../../assets/icons/angles-right-solid.svg';

const Home = () => {

  return (
    <Container>
      <HeadingGroup />

      <Anchor to="/nutritional-table">
        <AnchorText>Clique aqui para começar</AnchorText>
        <Icon src={AnglesRightSolid} alt="Avançar" />
      </Anchor>
    </Container>
  );
}

export default Home;