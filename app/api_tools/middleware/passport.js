import nextConnect from 'next-connect'
import steamPassport from '../pasport-steam'
import exprSession from 'cookie-session'
import rateLimit from 'express-rate-limit'
import { LANGUAGES, updateLastLogin } from '..'
const limiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes
	max: 100, // Limit each IP to 100 requests per `window` (here, per 15 minutes)
	standardHeaders: true, // Return rate limit info in the `RateLimit-*` headers
	legacyHeaders: false, // Disable the `X-RateLimit-*` headers
    keyGenerator: (request) => request.ip
})
export const passport_middleware = nextConnect()
    // .use(limiter)
    .use(exprSession({
        secret: 'fuhI73iqtrdsah',
        resave: false,
        saveUninitialized: false,
        
    }))
    .use(steamPassport.initialize())
    .use(steamPassport.session())
    .use(async (req, res, next) => {
        let user = await req.user;
        if (user) {
            updateLastLogin(user.id)
        }
        next();
    })
    .use(async (req, res, next) => {
        let region = 'ru';
        let region_cookie = req.cookies.language;
        let region_query = req.query.reg;
        if(region_query && LANGUAGES.indexOf(region_query) !== -1) region = region_query;
        if(region_cookie && LANGUAGES.indexOf(region_cookie) !== -1) region = region_cookie;
        req.region = region;
        next()
    })
    .use(async (req, res, next) => {
        req.is_auth = Boolean(await req.user);
        next();
    })

export const checkAuth = (req, res, next) => {
    if(!req.is_auth) return res.status(401).send('UnAuthorized');
    next();
}
