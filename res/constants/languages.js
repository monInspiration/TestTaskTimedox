/**
 * Name: ./res/constants/languages.js
 * Author: Anton Vodoriz
 * Date: 25.03.22
 * Email: vodorez.anton07@gmail.com
 *
 * Exporting text
 */

export const english = require('../languages/english.json');
export const russian = require('../languages/russian.json');
export const spanish = require('../languages/spanish.json');
export const defaultLanguage = require('../languages/default.json');

const TEXT = {
  russian,
  english,
  spanish,
  defaultLanguage,
};

export default TEXT;
