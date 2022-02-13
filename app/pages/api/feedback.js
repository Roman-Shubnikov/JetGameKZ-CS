import { dbGet, getCourseByRegion, passport_middleware } from "../../api_tools";
import nextConnect from 'next-connect'
export default nextConnect()
    .use(passport_middleware)
    .get(async (req, res) => {
        let feedback = dbGet('SELECT f.id, u.name, u.avatar, f.text, f.rating, f.time' +
        'FROM feedback as f' + 
        'LEFT JOIN users as u ON u.id = f.author_id' + 
        'ORDER BY rating DESC, time DESC LIMIT 8')
        let user_feedback;
        user_feedback = req.is_auth ? await dbGet('SELECT f.id, f.text, f.rating, f.time FROM feedback WHERE author_id=?', [await req.user.id]) : null;
        return res.json({
            feedback,
            my_feedback: user_feedback,
            is_auth: req.is_auth,
        })
    })
    .use((req, res, next) => {
        if(!req.is_auth) return res.status(401);
        next();
    })
    .post(async (req, res) => {
        return res.json({
            ok: '090908978'
        })
    })