import { dbGet, getUsers, passport_middleware } from "../../api_tools";
import nextConnect from 'next-connect'
export default nextConnect()
    .use(passport_middleware)
    .get(async (req, res) => {
      let users_info = await getUsers('76561199171119282,76561199171119286');
      console.log(users_info);

})