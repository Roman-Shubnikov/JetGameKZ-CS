
import nextConnect from 'next-connect'
import {
    userGetBySteamId,
    steamPassport,
    passport_middleware,
    createUser,
    updateUserInfo,
} from '../../../../api_tools';
import SteamID from 'steamid';


export default nextConnect()
    .use(passport_middleware)
    .use(steamPassport.authenticate('steam', { failureRedirect: '/login', session: true }))
    .get(async (req, res) => {
        const session = { ...req.user._json }
        let sid = new SteamID(session.steamid).getSteam2RenderedID(true);
        let user = await userGetBySteamId(sid);
        if (!user) {
            await createUser(sid, session.personaname, session.avatarmedium, session.loccountrycode)
        }else if(user.name !== session.personaname || user.avatar !== session.avatarmedium) {
            await updateUserInfo(user.id, session.personaname, session.avatarmedium, user.vk_id)
        }

        res.redirect(302, '/')
    })