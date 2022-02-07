
import nextConnect from 'next-connect'
import { passport_middleware, steamPassport } from "../../../api_tools";

export default nextConnect()
.use(passport_middleware)
.use(steamPassport.authenticate('steam', {session: true}))
.post(() => {})