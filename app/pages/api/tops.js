import { dbGetCS, passport_middleware } from '../../api_tools';
import nextConnect from 'next-connect'
export default nextConnect()
    .use(passport_middleware)
    .get(async (req, res) => {
    let top_rank = dbGetCS('SELECT ') 
    res.json(await req.user)

})