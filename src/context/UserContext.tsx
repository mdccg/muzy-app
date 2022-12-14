import { createContext, ReactNode, useState } from 'react';

type UserContextType = {
  isAllChecked: boolean;
  isCaloriesChecked: boolean;
  isProteinsChecked: boolean;
  isCarbohydratesChecked: boolean;
  isFatChecked: boolean;
  isSugarChecked: boolean;
  setIsAllChecked: (isAllChecked: boolean) => void;
  setIsCaloriesChecked: (isCaloriesChecked: boolean) => void;
  setIsProteinsChecked: (isProteinsChecked: boolean) => void;
  setIsCarbohydratesChecked: (isCarbohydratesChecked: boolean) => void;
  setIsFatChecked: (isFatChecked: boolean) => void;
  setIsSugarChecked: (isSugarChecked: boolean) => void;
}

const initialValue: UserContextType = {
  isAllChecked: true,
  isCaloriesChecked: true,
  isProteinsChecked: true,
  isCarbohydratesChecked: true,
  isFatChecked: true,
  isSugarChecked: true,
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