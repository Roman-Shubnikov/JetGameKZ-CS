import nextConnect from 'next-connect'
import steamPassport from '../pasport-steam'
import exprSession from 'cookie-session'
import rateLimit from 'express-rate-limit'
import { updateLastLogin } from '..'
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
        let query = req.query;
        if ('reg' in query) region = query.reg;
        req.region = region;
        next()
    })
