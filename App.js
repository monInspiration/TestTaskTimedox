import React from 'react';

// Context providers
import {
  ThemeProvider, 
  LanguageProvider,
} from './src/context';

import ChooseLanguagePage from './src/pages/ChooseLanguagePage';

export default App = () => {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <ChooseLanguagePage />
      </LanguageProvider>
    </ThemeProvider>
  );
};
