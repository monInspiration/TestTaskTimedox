/**
 * Name: ./src/components/Button.js
 * Author: Anton Vodoriz
 * Date: 25.03.22
 * Email: vodorez.anton07@gmail.com
 *
 * Button component
 */

import React from 'react';

import {View, Text, TouchableWithoutFeedback} from 'react-native';

import {useThemeState} from '../context';

/**
 * props:
 * @param text - text that is displaying on button
 * @param isActive - is button active. If not - it's opacity is 0.3 and onPress is disabled.
 * Default value - true
 * @param onClicked - function for handling onPress event.
 */
export default ({text = '', isActive = true, onClicked}) => {
  const themeContext = useThemeState();

  return (
    <TouchableWithoutFeedback
      onPress={() => {
        if (isActive) {
          onClicked();
        }
      }}>
      <View
        style={
          isActive
            ? themeContext.styles.buttonActive
            : Object.assign({opacity: 0.3}, themeContext.styles.buttonActive)
        }>
        <Text style={themeContext.styles.buttonText}>{text}</Text>
      </View>
    </TouchableWithoutFeedback>
  );
};
