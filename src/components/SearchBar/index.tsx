import { Form, Input, Button, MagnifyingGlass, SearchBar, Checkboxes, CheckboxBox, Checkbox, Check, CheckboxLabel } from './styles';
import { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../context/UserContext';
import CheckSolid from './../../assets/icons/check-solid.svg';
import { FilterOptionType } from './../../types/FilterOptionType';
import MagnifyingGlassSolid from './../../assets/icons/magnifying-glass-solid.svg';
import { sanitizeSearchedFruitName, verifyIfStringIsEmpty } from '../../utils/string_utils';

type CheckboxProps = {
  filterOptions: FilterOptionType[];
  filterOption: FilterOptionType;
  handleClick?: () => void;
  handleKeyUp?: (event: React.KeyboardEvent<HTMLDivElement>) => void;
  tabIndex: number;
}

type SearchBarProps = {
  getFruit: (fruitName: string) => void;
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
      tabIndex={props.tabIndex}>
      <Checkbox>
        {isChecked && <Check src={CheckSolid} alt={`Opção ${label} marcada`} />}
      </Checkbox>

      <CheckboxLabel>{label}</CheckboxLabel>
    </CheckboxBox>
  );
}

const SearchBarComponent = ({ getFruit }: SearchBarProps) => {
  const { isAllChecked, isCaloriesChecked, isProteinsChecked, isCarbohydratesChecked, isFatChecked, isSugarChecked, setIsAllChecked, setIsCaloriesChecked, setIsProteinsChecked, setIsCarbohydratesChecked, setIsFatChecked, setIsSugarChecked } = useContext(UserContext);
  const [fruitName, setFruitName] = useState<string>('');
  const [filterOptions, setFilterOptions] = useState<FilterOptionType[]>([
    { label: 'Todas', isChecked: isAllChecked, setIsChecked: setIsAllChecked }
  ]);

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
    const sanitizedFruitName = sanitizeSearchedFruitName(fruitName);
    const isSanitizedFruitNameEmpty = verifyIfStringIsEmpty(sanitizedFruitName);
    if (isSanitizedFruitNameEmpty) return;
    getFruit(sanitizedFruitName);
  }

  useEffect(() => {
    setFilterOptions([
      { label: 'Todas',        isChecked: isAllChecked,           setIsChecked: setIsAllChecked },
      { label: 'Calorias',     isChecked: isCaloriesChecked,      setIsChecked: setIsCaloriesChecked },
      { label: 'Proteínas',    isChecked: isProteinsChecked,      setIsChecked: setIsProteinsChecked },
      { label: 'Carboidratos', isChecked: isCarbohydratesChecked, setIsChecked: setIsCarbohydratesChecked },
      { label: 'Gorduras',     isChecked: isFatChecked,           setIsChecked: setIsFatChecked },
      { label: 'Açúcares',     isChecked: isSugarChecked,         setIsChecked: setIsSugarChecked }
    ]);
  }, [isAllChecked, isCaloriesChecked, isProteinsChecked, isCarbohydratesChecked, isFatChecked, isSugarChecked, setIsAllChecked, setIsCaloriesChecked, setIsProteinsChecked, setIsCarbohydratesChecked, setIsFatChecked, setIsSugarChecked]);

  return (
    <>
      <SearchBar>
        <Form onSubmit={handleSubmit}>
          <Input
            name="fruit"
            value={fruitName}
            onChange={(event) => setFruitName(event.target.value)}
            placeholder="Digite o nome de uma fruta"
            tabIndex={2} />
          
          <Button tabIndex={3}>
            <MagnifyingGlass
              src={MagnifyingGlassSolid}
              alt="Pressione Enter para pesquisar ou pressione Tab para editar" />
          </Button>
        </Form>

        <Checkboxes>
          <CheckboxComponent
            tabIndex={4}
            handleClick={handleClick}
            handleKeyUp={handleKeyUp}
            filterOptions={filterOptions}
            filterOption={filterOptions.at(0) as FilterOptionType} />

          {filterOptions.slice(1).map((value, index) => (
            <CheckboxComponent
              filterOptions={filterOptions}
              filterOption={value}
              tabIndex={index + 5}
              key={index} />
          ))}
        </Checkboxes>
      </SearchBar>

      <img src={CheckSolid} alt="Preload" style={{ display: 'none' }} />
    </>
  );
}

export default SearchBarComponent;