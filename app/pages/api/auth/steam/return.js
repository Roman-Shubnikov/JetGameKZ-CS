
import nextConnect from 'next-connect'
import {
    userGetBySteamId,
    steamPassport,
    passport_middleware,
    createUser,
    updateUserInfo,
} from '../../../../api_tools';



export default nextConnect()
    .use(passport_middleware)
    .use(steamPassport.authenticate('steam', { failureRedirect: '/login', session: true }))
    .get(async (req, res) => {
        const session = { ...req.user._json }
        console.log(session)
        let user = await userGetBySteamId(parseInt(session.steamid));
        if (!user) {
            await createUser(session.steamid, session.personaname, session.avatarmedium, session.loccountrycode)
        }
        if(user.name !== session.personaname || user.avatar !== session.avatarmedium) {
            await updateUserInfo(user.id, session.personaname, session.avatarmedium, user.vk_id)
        }

        res.redirect(302, '/')
    })