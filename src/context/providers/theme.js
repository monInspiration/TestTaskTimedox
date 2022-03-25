/**
 * Name: ./src/context/providers/theme.js
 * Author: Anton Vodoriz
 * Date: 25.03.22
 * Email: vodorez.anton07@gmail.com
 *
 * Creating context and provider for app styling
 */

import React, {createContext, useContext} from 'react';
import {useThemeReducer} from '../reducers';

const ThemeStateContext = createContext();
const ThemeDispatchContext = createContext();

export const ThemeProvider = ({children}) => {
  // Getting state and dispatcher from reducer
  const [state, dispatch] = useThemeReducer();

  return (
    <ThemeStateContext.Provider value={state}>
      <ThemeDispatchContext.Provider value={dispatch}>
        {children}
      </ThemeDispatchContext.Provider>
    </ThemeStateContext.Provider>
  );
};

// Utility for extracting values from a context
export const useThemeState = () => useContext(ThemeStateContext);
export const useThemeDispatch = () => useContext(ThemeDispatchContext);
