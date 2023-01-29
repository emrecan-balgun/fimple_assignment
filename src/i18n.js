import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import en from './i18n/en.json';
import tr from './i18n/tr.json';

const translationsEn = en;
const translationsTr = tr;

i18n
.use(initReactI18next)
.init({
  resources: {
    en: { translation: translationsEn },
    tr: { translation: translationsTr },
  },
  lng: 'en',
  fallbackLng: 'en',
  interpolation: { escapeValue: false },
});

  export default i18n;