import Cookies from "js-cookie"

export const getLanguage = () => {
    let lang = Cookies.get('language');
    if (lang === undefined) {
        Cookies.set('language', 'ru', {expires: 300});
        lang = 'ru';
    }
    return lang;
}