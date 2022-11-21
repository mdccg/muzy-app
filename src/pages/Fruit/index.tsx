import { Anchor, Container, FruitInformation, FruitInformationList, FruitLabel, FruitName, FruitSheet, FruitStatistics, LinkIcon, Page, UniqueNutritionFact, UniqueNutritionFactValue, UniqueStat } from './styles';
import ArrowUpRightFromSquareSolid from './../../assets/icons/arrow-up-right-from-square-solid.svg';
import { NutritionFactType } from '../../types/NutritionFactType';
import ComparativePanel from './../../components/ComparativePanel';
import { UserContext } from '../../context/UserContext';
import FruitService from './../../services/FruitService';
import { useContext, useEffect, useState } from 'react';
import Header from './../../components/Header';
import Banner from './../../components/Banner';
import Fruit from './../../classes/Fruit';

type AnchorProps = {
  tabIndex: number;
  preffix: string;
  children: string;
}

const AnchorComponent = ({ tabIndex, preffix, children }: AnchorProps) => {
  return <Anchor tabIndex={tabIndex} href={`https://www.google.com/search?q=${preffix}+${children}`} target="_blank">
    <span>{children}</span>
    <LinkIcon src={ArrowUpRightFromSquareSolid} alt="Pesquisar no Google" />
  </Anchor>;
}

const FruitScreen = () => {
  const { isCaloriesChecked, isProteinsChecked, isCarbohydratesChecked, isFatChecked, isSugarChecked } = useContext(UserContext);
  const [fruit, setFruit] = useState<Fruit | null>(null);
  const [didUserSearch, setDidUserSearch] = useState<boolean>(false);
  const [wasFruitFetched, setWasFruitFetched] = useState<boolean>(false);
  const [propertiesCount, setPropertiesCount] = useState<number>(0);
  const [nutritionFacts, setNutritionFacts] = useState<NutritionFactType[]>([]);

  const getFruit = async (sanitizedFruitName: string) => {
    setDidUserSearch(true);
    setWasFruitFetched(false);
    const fruitService = new FruitService();
    const fruit = await fruitService.loadFruit(sanitizedFruitName);
    setFruit(fruit);
    setWasFruitFetched(true);
  }

  useEffect(() => {
    setPropertiesCount([isCaloriesChecked, isProteinsChecked, isCarbohydratesChecked, isFatChecked, isSugarChecked].filter(Boolean).length);
    setNutritionFacts([
      { label: 'calories',      isChecked: isCaloriesChecked,      displayName: 'Calorias' },
      { label: 'proteins',      isChecked: isProteinsChecked,      displayName: 'Proteínas' },
      { label: 'carbohydrates', isChecked: isCarbohydratesChecked, displayName: 'Carboidratos' },
      { label: 'fat',           isChecked: isFatChecked,           displayName: 'Gorduras' },
      { label: 'sugar',         isChecked: isSugarChecked,         displayName: 'Açúcares' }
    ]);
  }, [isCaloriesChecked, isProteinsChecked, isCarbohydratesChecked, isFatChecked, isSugarChecked]);

  return (
    <Page>
      <Header getFruit={getFruit} />
      
      {!didUserSearch && (
        <Banner tabIndex={11} icon="peckish-emoji">
          Pronto para começar?
        </Banner>
      )}

      {didUserSearch && wasFruitFetched && fruit === null && (
        <Banner tabIndex={11} icon="crying-emoji">
          Oh, puxa vida&hellip; parece que não há nenhuma fruta com esse nome na nossa feira
        </Banner>
      )}

      {didUserSearch && !wasFruitFetched && (
        <Banner tabIndex={11} icon="pac-man">
          Aguarde enquanto roubamos seus da&mdash; quer dizer,<br />enquanto procuramos por essa fruta na nossa feira
        </Banner>
      )}

      {didUserSearch && wasFruitFetched && fruit !== null && (
        <Container>
          <FruitSheet>
            <FruitName tabIndex={11}>{fruit.name}</FruitName>

            <FruitInformationList>
              <FruitLabel tabIndex={12}>Gênero</FruitLabel>

              <FruitInformation>
                <AnchorComponent tabIndex={13} preffix="Gênero">{fruit.genus}</AnchorComponent>
              </FruitInformation>

              <FruitLabel tabIndex={14}>Ordem</FruitLabel>
              <FruitInformation>
                <AnchorComponent tabIndex={15} preffix="Ordem">{fruit.order}</AnchorComponent>
              </FruitInformation>

              <FruitLabel tabIndex={16}>Família</FruitLabel>
              <FruitInformation>
                <AnchorComponent tabIndex={17} preffix="Família">{fruit.family}</AnchorComponent>
              </FruitInformation>
            </FruitInformationList>
          </FruitSheet>

          <FruitStatistics>
            {propertiesCount === 0 && (
              <Banner icon="huh-emoji" tabIndex={18}>
                Vai meter o shape como se não quer nem saber quantas gramas de proteína têm 100g de {fruit.name.toLowerCase()}?
              </Banner>
            )}

            {propertiesCount === 1 && (
              nutritionFacts.filter(({ isChecked }) => isChecked).map(({ label, displayName }) => (
                <UniqueStat>
                  <UniqueNutritionFact tabIndex={18}>{displayName}</UniqueNutritionFact>
                  <UniqueNutritionFactValue tabIndex={19}>{(fruit[label as keyof typeof fruit] as number).toLocaleString() + 'g'}</UniqueNutritionFactValue>
                </UniqueStat>
              ))
            )}

            {propertiesCount > 1 && <ComparativePanel fruit={fruit} nutritionFacts={nutritionFacts.filter(({ isChecked }) => isChecked)} />}
          </FruitStatistics>
        </Container>
      )}
    </Page>
  );
}

export default FruitScreen;