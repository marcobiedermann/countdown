import i18n from 'i18next';
import Backend from 'i18next-http-backend';
import { initReactI18next } from 'react-i18next';

const options = {
  fallbackLng: 'en',
  interpolation: {
    escapeValue: false,
  },
  lng: 'en',
};

i18n.use(initReactI18next).use(Backend).init(options);

export { options };
export default i18n;
