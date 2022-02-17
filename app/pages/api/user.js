
import { checkAuth, passport_middleware } from '../../api_tools';
import nextConnect from 'next-connect'
export default nextConnect()
    .use(passport_middleware)
    .use(checkAuth)
    .get(async (req, res) => {
    res.json(await req.user)

})