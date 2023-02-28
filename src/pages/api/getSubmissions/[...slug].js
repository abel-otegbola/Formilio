import connectMongo from "@/database/connection";
import { Submissions } from "@/model/Schema"

export default async function handler(req, res) {
    await connectMongo().catch(error => {
        return res.json({ error: "Connection Failed"})
    })
    const { slug } = req.query

    
    if(slug[0] === "all") {
        return res.json(await Submissions.find({ 'user': slug[1] }).catch(err => res.status(400).json(err)))
    }
    else  {        
        return res.json(await Submissions.find({ 'key': slug[0] }).catch(err => res.status(400).json(err)))
    }
}