import connectMongo from "@/database/connection";
import { Endpoints, Submissions } from "@/model/Schema"

export default async function handler(req, res) {
    await connectMongo().catch(error => res.json({ error: "Connection Failed"}))
    const { slug } = req.query
    
    await Submissions.deleteMany({ "key": slug[0] }).catch(err => res.status(400).json(err))
    return res.json(await Endpoints.deleteOne({  "key": slug[0] }).catch(err => res.status(400).json(err)))
}