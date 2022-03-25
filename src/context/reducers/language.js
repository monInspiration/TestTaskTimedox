/**
 * Name: ./src/context/reducers/theme.js
 * Author: Anton Vodoriz
 * Date: 25.03.22
 * Email: vodorez.anton07@gmail.com
 *
 * Creating reducers for app language
 */

import {useReducer} from 'react';

import TEXT from '../../../res/constants/languages';

const initialLanguageState = {
  currentLanguage: 'Default',
  text: TEXT.defaultLanguage,
};

const reducer = (state, {type, payload}) => {
  switch (type) {
    case 'CHANGE_LANGUAGE': {
      let newLanguage = TEXT.defaultLanguage;
      switch (payload.language) {
        case 'English':
          newLanguage = TEXT.english;
          break;
        case 'Russian':
          newLanguage = TEXT.russian;
          break;
        case 'Spanish':
          newLanguage = TEXT.spanish;
          break;
        default:
          newLanguage = TEXT.defaultLanguage;
          break;
      }
      return {
        ...state,
        currentLanguage: payload.language,
        text: newLanguage,
      };
    }

    default:
      return state;
  }
};

export const useLanguageReducer = () =>
  useReducer(reducer, initialLanguageState);
