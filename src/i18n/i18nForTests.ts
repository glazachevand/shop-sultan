import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const ns = ["translation"];
const supportedLngs = ["en", "ru"];
const resources = ns.reduce((acc: any, n) => {
  supportedLngs.forEach((lng) => {
    if (!acc[lng]) acc[lng] = {};
    acc[lng] = {
      ...acc[lng],
      [n]: require(`../../public/locales/${lng}/${n}.json`),
    };
  });
  return acc;
}, {});

i18n.use(initReactI18next).init({
  lng: "ru",
  fallbackLng: "ru",
  debug: true,
  interpolation: {
    escapeValue: false, // not needed for react!!
  },

  defaultNS: "translation",
  ns,
  supportedLngs,

  react: { useSuspense: false },

  resources,
});

export default i18n;
