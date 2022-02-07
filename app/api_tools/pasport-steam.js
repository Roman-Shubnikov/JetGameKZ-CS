import passport from 'passport';
import Steam from 'passport-steam';
import { userGetBySteamId } from '.';

passport.use(new Steam({
    returnURL: 'http://localhost:3000/api/auth/steam/return',
    realm: 'http://localhost:3000/',
    apiKey: 'D5CEA1BABC84D3104D3197FDCB1F1A8A'
}, (link, profile, cb) => {
    return cb(null, profile)
}))


passport.serializeUser((user, done) => {
    done(null, parseInt(user.id)); 
});

passport.deserializeUser((id, done) => {
    userGetBySteamId(id)
    .then(data => {
        done(null, data)
    })
    
}); 

export default passport