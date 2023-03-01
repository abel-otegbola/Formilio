import connectMongo from "@/database/connection";
import { Endpoints } from "@/model/Schema"

export default async function handler(req, res) {
    await connectMongo().catch(error => res.json({ error: "Connection Failed"}))
    const { slug } = req.query
    
    return res.json(await Endpoints.deleteOne({  "key": slug[0] }).catch(err => res.status(400).json(err)))
}