import nextConnect from 'next-connect'
import { passport_middleware } from "../../../api_tools"

export default nextConnect()
.use(passport_middleware)
.get(async (req, res) => {
    req.logout();
    res.writeHead(302, { Location: '/' })
    res.end()
})