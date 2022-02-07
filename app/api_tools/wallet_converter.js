import { dbGet } from ".";

export const getCourse = async (name) => {
    let result = await dbGet('SELECT name, paytoMoney, region FROM money_cources WHERE name = ?', [name])
    if (!result) throw Error('Такой валюты не существует');
    return result[0]
}
export const getCourseByRegion = async (region) => {
    let result = await dbGet('SELECT name, paytoMoney, region FROM money_cources WHERE region = ?', [region])
    if (!result) throw Error('Такой валюты не существует')
    return result[0];
}
export const walletConvertToRealMoney = async (count, currency_name) => {
    let course = parseFloat(await getCourse(currency_name));
    let price = course * count;
    return price
    

}