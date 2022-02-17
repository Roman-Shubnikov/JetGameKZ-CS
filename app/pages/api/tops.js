import { dbGetCS, getUsers, passport_middleware } from '../../api_tools';
import nextConnect from 'next-connect'
export default nextConnect()
    .use(passport_middleware)
    .get(async (req, res) => {
    let is_site_users = 'steam IN (SELECT steam_id FROM jetgaming_site.users)';
    let top_rank = await dbGetCS('SELECT steam, rank, kills, deaths FROM lvl_base WHERE '+is_site_users+' ORDER BY rank DESC LIMIT 6');
    let top_value = await dbGetCS('SELECT steam, value FROM lvl_base WHERE '+is_site_users+' ORDER BY value DESC LIMIT 6')
    let steam_ids = [];
    top_rank = top_rank.map((v,i) => {
        let KD = v.deaths && +((v.kills / v.deaths).toFixed(2));
        if(steam_ids.indexOf(v.steam) === -1) steam_ids.push(v.steam);
        return ({
            steam_id: v.steam,
            rank: v.rank,
            deaths: v.deaths,
            kd: KD,
        })
    })
    top_value = top_value.map((v,i) => {
        if(steam_ids.indexOf(v.steam) === -1) steam_ids.push(v.steam);
        return ({
            steam_id: v.steam,
            value: v.value,
        })
    })
    let users = await getUsers(steam_ids);
    let users_dict = {};
    for(let i=0; i<users.length; i++) {
        let user = users[i];
        users_dict[user.steam_id] = user;
    }
    res.json({
        top_rank,
        top_value,
        users: users_dict,
    })

})