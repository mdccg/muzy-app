import { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../context/UserContext';
import { Form, Input, Button, MagnifyingGlass, SearchBar, Checkboxes, CheckboxBox, Checkbox, Check, CheckboxLabel } from './styles';
import MagnifyingGlassSolid from './../../assets/icons/magnifying-glass-solid.svg';
import CheckSolid from './../../assets/icons/check-solid.svg';

type FilterOptionType = {
  label: string;
  isChecked: boolean;
  setIsChecked: (value: boolean) => void;
}

type CheckboxProps = {
  filterOptions: FilterOptionType[];
  filterOption: FilterOptionType;
  handleClick?: () => void;
  handleKeyUp?: (event: React.KeyboardEvent<HTMLDivElement>) => void;
  index: number;
}

const CheckboxComponent = ({ filterOptions, filterOption: { label, isChecked, setIsChecked }, ...props }: CheckboxProps) => {
  /**
   * Makes checkboxes accessible in full screen via Tab and Spacebar for accessibility purposes
   */
  const handleKeyUp = (event: React.KeyboardEvent<HTMLDivElement>) => {
    if (event.key === ' ') {
      handleClick();
    }
  }
  
  const handleClick = () => {
    setIsChecked(!isChecked);
  }

  const checkIfAllIsChecked = () => {
    const { setIsChecked: setIsAllChecked } = filterOptions.at(0) as FilterOptionType;

    if (!isChecked) {
      setIsAllChecked(false);
      return;
    }

    let isAllChecked = !filterOptions.slice(1).map(({ isChecked }) => isChecked).includes(false);
    setIsAllChecked(isAllChecked);
  }

  useEffect(() => {
    checkIfAllIsChecked();
  }, [isChecked]);

  return (
    <CheckboxBox
      onKeyUp={props.handleKeyUp || handleKeyUp}
      onClick={props.handleClick || handleClick}
      tabIndex={props.index}>
      <Checkbox>
        {isChecked && <Check src={CheckSolid} alt={`Opção ${label} marcada`} />}
      </Checkbox>

      <CheckboxLabel>{label}</CheckboxLabel>
    </CheckboxBox>
  );
}

const SearchBarComponent = () => {
  const [fruitName, setFruitName] = useState<string>('');
  const { isAllChecked, isCaloriesChecked, isProteinsChecked, isCarbohydratesChecked, isFatChecked, isSugarChecked, setIsAllChecked, setIsCaloriesChecked, setIsProteinsChecked, setIsCarbohydratesChecked, setIsFatChecked, setIsSugarChecked } = useContext(UserContext);
  const filterOptions: FilterOptionType[] = [
    { label: 'Todas',        isChecked: isAllChecked,           setIsChecked: setIsAllChecked },
    { label: 'Calorias',     isChecked: isCaloriesChecked,      setIsChecked: setIsCaloriesChecked },
    { label: 'Proteínas',    isChecked: isProteinsChecked,      setIsChecked: setIsProteinsChecked },
    { label: 'Carboidratos', isChecked: isCarbohydratesChecked, setIsChecked: setIsCarbohydratesChecked },
    { label: 'Gorduras',     isChecked: isFatChecked,           setIsChecked: setIsFatChecked },
    { label: 'Açúcares',     isChecked: isSugarChecked,         setIsChecked: setIsSugarChecked }
  ];

  const handleKeyUp = (event: React.KeyboardEvent<HTMLDivElement>) => {
    if (event.key === ' ') {
      handleClick();
    }
  }

  const handleClick = () => {
    filterOptions.forEach(({ setIsChecked }) => setIsChecked(!isAllChecked));
  }

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  }

  return (
    <>
      <SearchBar>
        <Form onSubmit={handleSubmit}>
          <Input
            value={fruitName}
            onChange={(event) => setFruitName(event.target.value)}
            placeholder="Digite o nome de uma fruta" />
          
          <Button>
            <MagnifyingGlass
              src={MagnifyingGlassSolid}
              alt="Pressione Enter para pesquisar ou pressione Tab para editar" />
          </Button>
        </Form>

        <Checkboxes>
          <CheckboxComponent
            index={0}
            handleClick={handleClick}
            handleKeyUp={handleKeyUp}
            filterOptions={filterOptions}
            filterOption={filterOptions.at(0) as FilterOptionType} />

          {filterOptions.slice(1).map((value, index) => (
            <CheckboxComponent
              filterOptions={filterOptions}
              filterOption={value}
              index={index + 1}
              key={index} />
          ))}
        </Checkboxes>
      </SearchBar>

      <img src={CheckSolid} alt="Preload" style={{ display: 'none' }} />
    </>
  );
}

export default SearchBarComponent;