import { dbGet } from "."

export const userGetBySteamId = async (steam_id) => {
    let info = await dbGet('SELECT id,name,vk_id,balance,avatar,reg_date,last_login FROM users WHERE steam_id=?', [steam_id])
    info = info.length != 0 ? info[0] : null;
    return info;
}

export const updateUserInfo = async (id, username, avatar, vk_id) => {
    let res = await dbGet('UPDATE users SET name=?, avatar=?, vk_id=? WHERE id=?', [username, avatar, vk_id, id])
    return res;
}

export const updateLastLogin = async (id, time_login=null) => {
    let time = time_login ? time_login : parseInt( new Date().getTime() / 1000 )
    let res = await dbGet('UPDATE users SET last_login=? WHERE id=?', [time, id])
    return res;
}

export const createUser = async (steam_id, username, avatar, region) => {
    let currTime = parseInt(new Date().getTime() / 1000)

    let res = await dbGet('INSERT IGNORE INTO users (name,steam_id,avatar,region,reg_date,last_login) VALUES (?,?,?,?,?,?)', [username, steam_id, avatar, region, currTime, currTime])
    return res;
}

export const getUsers = async (steam_ids) => {
    let ids = "'" + steam_ids.join("','") + "'";
    let res = await dbGet('SELECT name, steam_id, id, avatar, last_login FROM users WHERE steam_id IN (' + ids + ')')
    return res;
}