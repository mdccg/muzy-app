import { Banner, Icon, Message } from './styles';
import PeckishEmoji from './../../assets/icons/peckish-emoji.svg';
import CryingEmoji from './../../assets/icons/crying-emoji.svg';
import HuhEmoji from './../../assets/icons/huh-emoji.svg';
import PacMan from './../../assets/icons/pac-man.svg';

const dict = {
  'peckish-emoji': PeckishEmoji,
  'crying-emoji': CryingEmoji,
  'huh-emoji': HuhEmoji,
  'pac-man': PacMan
};

type Props = {
  icon: keyof typeof dict;
  children: any;
  tabIndex: number;
}

const BannerComponent = ({ icon, children, tabIndex }: Props) => {
  return (
    <Banner tabIndex={tabIndex}>
      <Icon src={dict[icon]} alt="Carinha de choro" />
      <Message>{children}</Message>
    </Banner>
  );
}

export default BannerComponent;