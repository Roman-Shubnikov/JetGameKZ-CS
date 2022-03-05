import { checkAuth, dbGet, getCourseByRegion, getUnixTime, ok, passport_middleware } from "../../api_tools";
import nextConnect from 'next-connect'
import { body,validationResult } from 'express-validator';
export default nextConnect()
    .use(passport_middleware)
    .use(checkAuth)
    .get(async (req, res) => {
        let feedback = await dbGet('SELECT f.id, u.name, u.avatar, f.text, f.rating, f.time ' +
        'FROM feedback as f ' + 
        'LEFT JOIN users as u ON u.id = f.author_id ' + 
        // 'WHERE f.author_id != ? ' +
        'ORDER BY rating DESC, time DESC LIMIT 8', [await req.user.id])
        let user_feedback;
        user_feedback = req.is_auth ? await dbGet('SELECT id, text, rating, time FROM feedback WHERE author_id=? LIMIT 1', [await req.user.id]) : null;
        return res.json({
            feedback,
            my_feedback: user_feedback[0],
            is_auth: req.is_auth,
        })
    })
    .post(
        body('text', 'Text must be a length between 5 and 200').isLength({min: 5, max: 200}),
        body('rating', 'Rating must be a number between 0 and 5').isFloat({min: 0, max: 5}),
        async (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        const json = req.body;
        let time = getUnixTime();
        let resp = await dbGet("INSERT IGNORE INTO feedback (author_id, text, rating, time) VALUES (?, ?, ?, ?)  ON DUPLICATE KEY UPDATE text = ?, rating = ?, time = ?", 
        [await req.user.id, json.text, json.rating, time, 
            json.text, json.rating, time])

        res.json({
            author_id: await req.user.id,
            id: resp.insertId,
            time,
        })
    })
    