import React, {createContext, useState} from 'react';

export const AppStateContext = createContext();

export const AppStateProvider = ({children}) => {
  const [contextValue, setContextValue] = useState({context: true});
  const updateContext = data => {
    setContextValue(data);
  };

  return (
    <AppStateContext.Provider value={{contextValue, updateContext}}>
      {children}
    </AppStateContext.Provider>
  );
};
