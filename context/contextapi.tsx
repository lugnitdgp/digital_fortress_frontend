import React, { createContext, useState, ReactNode } from 'react';

interface MyContextType {
  rulesopen: boolean;
  setRulesopen: (newState: boolean) => void;
}

const defaultContextValue: MyContextType = {
  rulesopen: false,
  setRulesopen: () => {}, // no-op function
};

const MyContext = createContext<MyContextType>(defaultContextValue);

interface MyContextProviderProps {
  children: ReactNode;
}

const MyContextProvider: React.FC<MyContextProviderProps> = ({ children }) => {
  const [rulesopen, setRulesopen] = useState<boolean>(false);

  return (
    <MyContext.Provider value={{ rulesopen, setRulesopen }}>
      {children}
    </MyContext.Provider>
  );
};

export { MyContext, MyContextProvider };
