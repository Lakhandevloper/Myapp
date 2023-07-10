import i18next from 'i18next';
import { initReactI18next } from "react-i18next"
import AsyncStorage from '@react-native-async-storage/async-storage';
import en from './en.json'

import ar from './ar.json'

const STORAGE_KEY = '@APP:languageCode';

const languageDetector = {
    init: Function.prototype,
    type: 'languageDetector',
    async: true,
    detect: async (callback) => {
        const savedDataJSON = await AsyncStorage.getItem(STORAGE_KEY);
        const lng = (savedDataJSON) ? savedDataJSON : null;
        const selectLanguage = lng 
        // const selectLanguage = lng || locale;
        callback(selectLanguage);
    },
    cacheUserLanguage: () => { }
};

i18next
    .use(languageDetector)
    .use(initReactI18next)
    .init({
        compatibilityJSON: 'v3',
        fallbackLng: 'en',
        resources: { en, ar },
        debug: true,
        interpolation: {
            escapeValue: false,
        },
        react: {
            useSuspense: false,
        }
    });


export default i18next;