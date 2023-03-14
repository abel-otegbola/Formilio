import connectMongo from "@/database/connection";
import { Messages } from "@/model/Schema"

export default async function handler(req, res) {
    await connectMongo().catch(error => {
        return res.status(404).json({error: "Connection Failed"})
    })

    const { slug } = req.query
    
    return res.json(await Messages.find({ 'user': slug[0] }).sort({ _id: -1 }).catch(err => res.status(404).json(err)))
}