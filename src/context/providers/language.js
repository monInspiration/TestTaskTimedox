/**
 * Name: ./src/context/providers/language.js
 * Author: Anton Vodoriz
 * Date: 25.03.22
 * Email: vodorez.anton07@gmail.com
 * 
 * Creating context and provider for app language
*/

import React, { createContext, useContext } from 'react';
import { useLanguageReducer } from '../reducers';

const LanguageStateContext = createContext();
const LanguageDispatchContext = createContext();


export const LanguageProvider = ({ children }) => {
  // Getting state and dispatcher from reducer
  const [ state, dispatch ] = useLanguageReducer();
  
  return (
    <LanguageStateContext.Provider value={state}>
      <LanguageDispatchContext.Provider value={dispatch}>
        {children}
      </LanguageDispatchContext.Provider>
    </LanguageStateContext.Provider>
  );
};


// Utility for extracting values from a context 
export const useLanguageState = () => useContext(LanguageStateContext);
export const useLanguageDispatch = () => useContext(LanguageDispatchContext);
