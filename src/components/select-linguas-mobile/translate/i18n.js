import i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import { initReactI18next } from 'react-i18next';

import {messages} from './linguages'

i18n 
    
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        debug: false,
        defaultNS: ['translations'],
        fallbackLng: 'br',
        ns: ['translations'],
        resources:messages,
        returnObjects:true,
    })
    
    export {i18n}

