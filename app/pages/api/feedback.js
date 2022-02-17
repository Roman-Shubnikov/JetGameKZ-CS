import { checkAuth, dbGet, getCourseByRegion, passport_middleware } from "../../api_tools";
import nextConnect from 'next-connect'
export default nextConnect()
    .use(passport_middleware)
    .use(checkAuth)
    .get(async (req, res) => {
        let feedback = await dbGet('SELECT f.id, u.name, u.avatar, f.text, f.rating, f.time ' +
        'FROM feedback as f ' + 
        'LEFT JOIN users as u ON u.id = f.author_id ' + 
        'WHERE f.author_id != ? ' +
        'ORDER BY rating DESC, time DESC LIMIT 8', [await req.user.id])
        let user_feedback;
        user_feedback = req.is_auth ? await dbGet('SELECT id, text, rating, time FROM feedback WHERE author_id=? LIMIT 1', [await req.user.id]) : null;
        return res.json({
            feedback,
            my_feedback: user_feedback[0],
            is_auth: req.is_auth,
        })
    })
    