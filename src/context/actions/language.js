/**
 * Name: ./src/context/actions/language.js
 * Author: Anton Vodoriz
 * Date: 25.03.22
 * Email: vodorez.anton07@gmail.com
 *
 * Functions for working with app language
 */

// Set app theme
export function setLanguage(dispatch, language) {
  dispatch({
    type: 'CHANGE_LANGUAGE',
    payload: {
      language: language,
    },
  });
}
