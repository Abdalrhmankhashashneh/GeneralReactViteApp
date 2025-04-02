import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import HttpBackend from 'i18next-http-backend';

i18n
  .use(HttpBackend) // 🔌 Load translations from JSON files
  .use(LanguageDetector) // 🌍 Detect user's language
  .use(initReactI18next) // 🔁 Pass i18n to React
  .init({
    fallbackLng: 'en',
    debug: false,
    interpolation: {
      escapeValue: false, // React already protects from XSS
    },
    backend: {
      loadPath: '/locales/{{lng}}/{{ns}}.json', // Path to JSON files
    }
  });

export default i18n;
