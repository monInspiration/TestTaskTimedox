/**
 * Name: ./src/context/actions/theme.js
 * Author: Anton Vodoriz
 * Date: 25.03.22
 * Email: vodorez.anton07@gmail.com
 *
 * Functions for working with app theme
 */

// Set app theme
export function setTheme(dispatch, theme) {
  dispatch({
    type: 'CHANGE_THEME',
    payload: {
      theme: theme,
    },
  });
}
