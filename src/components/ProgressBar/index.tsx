import { useEffect, useState } from 'react';
import { parseRgba } from '../../utils/colours_utils';
import { Portion, ProgressBar } from './styles';

type ProgressBarProps = {
  min: number;
  max: number;
  label: string;
}

const synesthesia = {
  'calories': '#e74c3c',
  'proteins': '#f1c40f',
  'carbohydrates': '#e67e22',
  'fat': '#e17055',
  'sugar': '#b2bec3'
};

const ProgressBarComponent = ({ min, max, label }: ProgressBarProps) => {
  const [width, setWidth] = useState<string>('0%');
  const [backgroundColor, setBackgroundColor] = useState<string>('');
  
  useEffect(() => {
    setWidth(min / max * 1e2 + '%');
    setBackgroundColor(synesthesia[label as keyof typeof synesthesia]);
  }, [min, max, label]);

  return (
    <ProgressBar style={{ backgroundColor: parseRgba(backgroundColor, .375) }}>
      <Portion style={{ backgroundColor, width }}>&nbsp;</Portion>
    </ProgressBar>
  );
}

export default ProgressBarComponent;