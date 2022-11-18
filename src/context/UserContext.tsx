import { createContext, ReactNode, useState } from 'react';

type UserContextType = {
  isAllChecked: boolean;
  isCaloriesChecked: boolean;
  isProteinsChecked: boolean;
  isCarbohydratesChecked: boolean;
  isFatChecked: boolean;
  isSugarChecked: boolean;
  setIsAllChecked: (all: boolean) => void;
  setIsCaloriesChecked: (calories: boolean) => void;
  setIsProteinsChecked: (proteins: boolean) => void;
  setIsCarbohydratesChecked: (carbohydrates: boolean) => void;
  setIsFatChecked: (fat: boolean) => void;
  setIsSugarChecked: (sugar: boolean) => void;
}

const initialValue: UserContextType = {
  isAllChecked: false,
  isCaloriesChecked: false,
  isProteinsChecked: false,
  isCarbohydratesChecked: false,
  isFatChecked: false,
  isSugarChecked: false,
  setIsAllChecked: () => {},
  setIsCaloriesChecked: () => {},
  setIsProteinsChecked: () => {},
  setIsCarbohydratesChecked: () => {},
  setIsFatChecked: () => {},
  setIsSugarChecked: () => {}
};

type UserContextProps = {
  children: ReactNode;
}

export const UserContextProvider = ({ children }: UserContextProps) => {
  const [isAllChecked, setIsAllChecked] = useState<boolean>(initialValue.isAllChecked);
  const [isCaloriesChecked, setIsCaloriesChecked] = useState<boolean>(initialValue.isCaloriesChecked);
  const [isProteinsChecked, setIsProteinsChecked] = useState<boolean>(initialValue.isProteinsChecked);
  const [isCarbohydratesChecked, setIsCarbohydratesChecked] = useState<boolean>(initialValue.isCarbohydratesChecked);
  const [isFatChecked, setIsFatChecked] = useState<boolean>(initialValue.isFatChecked);
  const [isSugarChecked, setIsSugarChecked] = useState<boolean>(initialValue.isSugarChecked);

  return (
    <UserContext.Provider value={{ isAllChecked, isCaloriesChecked, isProteinsChecked, isCarbohydratesChecked, isFatChecked, isSugarChecked, setIsAllChecked, setIsCaloriesChecked, setIsProteinsChecked, setIsCarbohydratesChecked, setIsFatChecked, setIsSugarChecked, }}>
      {children}
    </UserContext.Provider>
  );
}

export const UserContext = createContext<UserContextType>(initialValue);