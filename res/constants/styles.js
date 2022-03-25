/**
 * Name: ./res/constants/styles.js
 * Author: Anton Vodoriz
 * Date: 25.03.22
 * Email: vodorez.anton07@gmail.com
 *
 * Exporting styles object
 */

export default function getStyles(colors) {
  return {
    background: {
      flex: 1,
      backgroundColor: colors.background,
    },

    title: {
      marginLeft: 'auto',
      marginRight: 'auto',
      color: colors.text,
      fontSize: 20,
    },

    topDataContainer: {
        height: 30,
        marginTop: 24,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },

    themeIcon: {
        position: 'absolute',
        top: 0,
        right: 20,
        width: 30,
        height: 30,
    }
  };
}
