import connectMongo from "@/database/connection";
import { Endpoints } from "@/model/Schema"

export default async function handler(req, res) {
    const { slug } = req.query

    await connectMongo().catch(error => {
        return res.status(404).json({ error: "Connection Failed"})
    })
    
    return res.json(await Endpoints.find({ 'user': slug[0] }).sort({ _id:- 1 }).skip(slug[1]).limit(slug[2]).catch(err => res.status(400).json(err)))
}