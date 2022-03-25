import React from 'react';

import {
  View,
  Text,
  Image,
  TouchableWithoutFeedback,
  FlatList,
  Alert,
} from 'react-native';

import Button from '../components/Button';

import LanguageItem from '../components/LanguageItem';

import {
  useThemeState,
  useThemeDispatch,
  setTheme,
  useLanguageState,
  useLanguageDispatch,
  setLanguage,
} from '../context';

// Array of available languages for displaying
import LANGUAGES_LIST from '../../res/constants/languagesList';

export default () => {
  /** CONTEXTS */
  /********************************************************************************************* */
  const themeContext = useThemeState();
  const themeDispatch = useThemeDispatch();

  const languageContext = useLanguageState();
  const languageDispatch = useLanguageDispatch();
  /********************************************************************************************* */

  // Function for changing theme value in ThemeContext
  // This operation changes theme globally, for all components that are childrens of ThemeProvider
  changeTheme = theme => {
    setTheme(themeDispatch, theme);
  };

  // Function for changing language value in LanguageContext
  // This operation changes language globally, for all components that are childrens of LanguageProvider
  changeLanguage = language => {
    setLanguage(languageDispatch, language);
  };

  // Handle button click
  onButtonClicked = () => {
    Alert.alert(
      `${languageContext.currentLanguage} is selected`,
      languageContext.text.alert_text,
    );
  };

  return (
    <View style={themeContext.styles.background}>
      <View style={themeContext.styles.topDataContainer}>
        <Text style={themeContext.styles.title}>
          {languageContext.text.title}
        </Text>

        <TouchableWithoutFeedback
          onPress={() =>
            changeTheme(themeContext.theme === 'light' ? 'dark' : 'light')
          }>
          <Image
            source={
              themeContext.theme === 'light'
                ? themeContext.icons.night
                : themeContext.icons.day
            }
            style={Object.assign(
              {tintColor: themeContext.colors.text},
              themeContext.styles.themeIcon,
            )}
          />
        </TouchableWithoutFeedback>
      </View>

      <View style={themeContext.styles.listContainer}>
        <FlatList
          style={{flex: 1}}
          data={LANGUAGES_LIST}
          showsVerticalScrollIndicator={false}
          keyExtractor={item => item.id}
          renderItem={({item}) => (
            <LanguageItem
              data={item}
              onClicked={changeLanguage}
              isActive={languageContext.currentLanguage === item.language}
            />
          )}
        />
      </View>

      <View style={themeContext.styles.buttonContainer}>
        <Button
          text={languageContext.text.button_text}
          onClicked={onButtonClicked}
          isActive={languageContext.currentLanguage !== 'Default'}
        />
      </View>
    </View>
  );
};
