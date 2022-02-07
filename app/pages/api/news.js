import { dbGet, passport_middleware } from "../../api_tools";
import nextConnect from 'next-connect'
export default nextConnect()
    .use(passport_middleware)
    .get(async (req, res) => {
      
      const res_db = await dbGet('SELECT id, header, created_at, author_id FROM news WHERE region=? ORDER BY created_at DESC LIMIT 20', [req.region]);
      res.json(res_db)

})