import { HeadingGroup, Heading, Subheading } from './styles';

const HeadingGroupComponent = (props: typeof HeadingGroup['defaultProps']) => {
  return (
    <HeadingGroup {...props}>
      <Heading tabIndex={0}>Muzy app</Heading>
      <Subheading tabIndex={1}>Reduzindo o lixo calórico do seu dia a dia</Subheading>
    </HeadingGroup>
  );
}

export default HeadingGroupComponent;