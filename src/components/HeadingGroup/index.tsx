import { HeadingGroup, Heading, Subheading } from './styles';

const HeadingGroupComponent = (props: typeof HeadingGroup['defaultProps']) => {
  return (
    <HeadingGroup {...props}>
      <Heading>Muzy app</Heading>
      <Subheading>Reduzindo o lixo calórico do seu dia a dia</Subheading>
    </HeadingGroup>
  );
}

export default HeadingGroupComponent;