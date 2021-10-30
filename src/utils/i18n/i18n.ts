import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import translationEN from "../../assets/translations/en.json";
import translationHU from "../../assets/translations/hu.json";


const resources = {
    en: { translation: translationEN, },
    hu: { translation: translationHU, },
};

i18n
    .use(initReactI18next)
    .init({
        resources,
        lng: "hu",
        keySeparator: false,
        interpolation: { escapeValue: false }
    });

export default i18n;