import passport from 'passport';
import Steam from 'passport-steam';
import { userGetBySteamId } from '.';
import SteamID from 'steamid';
import { STEAM_AUTH } from './config'

passport.use(new Steam({
    returnURL: STEAM_AUTH.redirect,
    realm: STEAM_AUTH.host,
    apiKey: STEAM_AUTH.token
}, (link, profile, cb) => {
    return cb(null, profile)
}))


passport.serializeUser((user, done) => {
    let sid = new SteamID(user.id).getSteam2RenderedID(true);
    done(null, sid); 
});

passport.deserializeUser((id, done) => {
    let sid = new SteamID(id).getSteam2RenderedID(true);
    userGetBySteamId(sid)
    .then(data => {
        done(null, data)
    })
    
}); 

export default passport