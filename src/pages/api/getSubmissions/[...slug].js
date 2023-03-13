import connectMongo from "@/database/connection";
import { Submissions } from "@/model/Schema"

export default async function handler(req, res) {
    await connectMongo().catch(error => {
        return res.status(404).json({ error: "Couldn't get submissions"})
    })
    const { slug } = req.query
    
    if(slug[0] === "all") {
        return res.json(await Submissions.find({ 'user': slug[1] }).sort({ _id: -1 }).catch(err => res.status(400).json(err)))
    }
    else  {        
        return res.json(await Submissions.find({ 'key': slug[0] }).sort({ _id: -1 }).skip(slug[1]).limit(slug[2]).catch(err => res.status(400).json(err)))
    }
}