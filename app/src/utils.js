import Cookies from "js-cookie"

export const getLanguage = () => {
    let lang = Cookies.get('language');
    if (lang === undefined) {
        Cookies.set('language', 'ru', {expires: 300});
        lang = 'ru';
    }
    return lang;
}

export const monthsConvert = (text) => {
    let mounts = [
        "января",
        "февраля",
        "марта",
        "апреля",
        "мая",
        "июня",
        "июля",
        "августа",
        "сентября",
        "октября",
        "ноября",
        "декабря"
    ];
    return mounts[text]
}

export const normalizeTime = (time) => {
    if (time < 10) {
        return "0" + time
    } else {
        return time
    }
}

export const getHumanyTime = (unixtime) => {
    let date, time, year, month, day, hours, minutes, datetime;
    if (unixtime !== null) {
        unixtime = unixtime * 1e3;
        let dateObject = new Date(unixtime);
        month = monthsConvert(dateObject.getMonth())
        year = dateObject.getFullYear()
        day = dateObject.getDate()
        date = day + " " + month + " " + year;
        hours = normalizeTime(dateObject.getHours())
        minutes = normalizeTime(dateObject.getMinutes())
        time = hours + ":" + minutes;
        datetime = date + " " + time
    }
    return ({ date, time, year, month, day, hours, minutes, datetime })
}