/**
 * Name: ./src/components/LanguageItem.js
 * Author: Anton Vodoriz
 * Date: 25.03.22
 * Email: vodorez.anton07@gmail.com
 *
 * Component for displaying language item
 */

import React from 'react';

import {View, Text, Image, TouchableWithoutFeedback} from 'react-native';

import {useThemeState} from '../context';

/**
 * props:
 * @param data - object that contains language name, icon and id
 * @param isActive - is language item active. Default value - false
 * @param onClicked - function for handling onPress event.
 */
export default ({data, isActive = false, onClicked}) => {
  const themeContext = useThemeState();

  return (
    <TouchableWithoutFeedback onPress={() => onClicked(data.language)}>
      <View
        style={
          isActive
            ? Object.assign(
                {backgroundColor: themeContext.colors.accent},
                themeContext.styles.languageItemContainer,
              )
            : Object.assign(
                {backgroundColor: themeContext.colors.backgroundSecondary},
                themeContext.styles.languageItemContainer,
              )
        }>
        <Image
          source={data.icon}
          style={themeContext.styles.languageItemIcon}
        />

        <Text style={themeContext.styles.languageItemText}>
          {data.language}
        </Text>

        <Image
          source={themeContext.icons.done}
          style={
            isActive
              ? themeContext.styles.languageItemCheckbox
              : Object.assign(
                  {opacity: 0},
                  themeContext.styles.languageItemCheckbox,
                )
          }
        />
      </View>
    </TouchableWithoutFeedback>
  );
};
