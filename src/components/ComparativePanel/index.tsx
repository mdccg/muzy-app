import Fruit from './../../classes/Fruit';
import ProgressBar from './../ProgressBar';
import { AmountLabel, ComparativePanel, DisplayName, Label, NutritionFact } from './styles';
import { NutritionFactType } from './../../types/NutritionFactType';
import { useEffect, useState } from 'react';

type BarProps = {
  fruit: Fruit;
  nutritionFacts: NutritionFactType[];
}

const ComparativePanelComponent = ({ fruit, nutritionFacts }: BarProps) => {
  const [max, setMax] = useState<number>(0);
  
  const getMaxValue = () => {
    return nutritionFacts.map(({ label }) => fruit[label as keyof typeof fruit]).sort((a: any, b: any) => a - b).pop() as number;
  }

  useEffect(() => {
    let max = getMaxValue();
    setMax(max);
  }, [nutritionFacts]);

  return (
    <ComparativePanel>
      {nutritionFacts.map(({ displayName, label }, index) => {
        const min = fruit[label as keyof typeof fruit] as number;
        /**
         * Units of measurement certified in <https://fruityvice.com/doc/index.html>
         */
        const unit = label === 'calories' ? 'kcal' : 'g';
        const amount = min.toLocaleString() + ' ' + unit;

        return (
          <NutritionFact>
            <Label tabIndex={18 + index}>
              <DisplayName>{displayName}</DisplayName>
              <AmountLabel>&nbsp;({amount} para cada 100g de {fruit.name.toLowerCase()})</AmountLabel>
            </Label>

            <ProgressBar min={min} max={max} label={label} />
          </NutritionFact>
        );
      })}
    </ComparativePanel>
  );
}

export default ComparativePanelComponent;