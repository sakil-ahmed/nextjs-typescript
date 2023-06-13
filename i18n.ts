import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import enTranslation from "./components/Translation/en.json";
import bdTranslation from "./components/Translation/bd.json";
import arTranslation from "./components/Translation/ar.json";

const resources = {
  en: {
    translation: enTranslation,
  },
  bn: {
    translation: bdTranslation,
  },
  ar: {
    translation: arTranslation,
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: "en",
  
  interpolation: {
    escapeValue: false,
  },
}).finally();

export default i18n;
