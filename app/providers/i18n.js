import i18n from 'i18n-js';

import en from './locales/en.json';
import ru from './locales/ru.json';
import kz from './locales/kz.json';

i18n.defaultLocale = 'ru';
i18n.locale = 'ru';
i18n.fallbacks = true;
i18n.translations = { ru, en, kz };
i18n.changeLanguage = (locale) => {
    i18n.locale = locale
}
export default i18n;