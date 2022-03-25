/**
 * Name: ./src/context/reducers/theme.js
 * Author: Anton Vodoriz
 * Date: 25.03.22
 * Email: vodorez.anton07@gmail.com
 *
 * Creating reducers for app styling
 */

import {useReducer} from 'react';

import {Appearance} from 'react-native';

import {LIGHT, DARK} from '../../../res/constants/colors';

import ICONS from '../../../res/constants/icons';

import getStyles from '../../../res/constants/styles';

// Reading default color scheme from the system
const defaultTheme = Appearance.getColorScheme()
  ? Appearance.getColorScheme()
  : 'light';

const initialStyleState = {
  theme: defaultTheme,
  colors: defaultTheme === 'light' ? LIGHT : DARK,
  styles: getStyles(defaultTheme === 'light' ? LIGHT : DARK),
  icons: ICONS,
};

const reducer = (state, {type, payload}) => {
  switch (type) {
    case 'CHANGE_THEME': {
      return {
        ...state,
        theme: payload.theme,
        colors: payload.theme === 'light' ? LIGHT : DARK,
        styles: getStyles(payload.theme === 'light' ? LIGHT : DARK),
      };
    }

    default:
      return state;
  }
};

export const useThemeReducer = () => useReducer(reducer, initialStyleState);
