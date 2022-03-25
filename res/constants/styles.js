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
      fontWeight: 'bold',
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
    },

    buttonContainer: {
      marginTop: 'auto',
      marginBottom: 32,
    },

    buttonActive: {
      marginLeft: 'auto',
      marginRight: 'auto',
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 8,
      backgroundColor: colors.accent,
      overflow: 'hidden',
      paddingLeft: 28,
      paddingRight: 28,
      height: 34,
    },

    buttonInactive: {
      marginLeft: 'auto',
      marginRight: 'auto',
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 8,
      backgroundColor: colors.accent,
      overflow: 'hidden',
      paddingLeft: 28,
      paddingRight: 28,
      height: 34,
      opacity: 0.3,
    },

    buttonText: {
      color: colors.text,
      fontSize: 16,
    },

    languageItemContainer: {
      height: 58,
      flex: 1,
      marginLeft: 18,
      marginRight: 18,
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      overflow: 'hidden',
      borderRadius: 8,
      paddingLeft: 16,
      paddingRight: 16,
      marginBottom: 10,
    },

    languageItemIcon: {
      height: 32,
      width: 32,
    },

    languageItemText: {
      fontSize: 16,
      color: colors.text,
      marginLeft: 22,
      marginRight: 'auto',
    },

    languageItemCheckbox: {
      width: 24,
      height: 24,
      tintColor: colors.text,
    },

    listContainer: {
      flex: 1,
      marginTop: 24,
      marginBottom: 24,
    },
  };
}
