import connectMongo from "@/database/connection";
import { Templates } from "@/model/Schema"

export default async function handler(req, res) {
    await connectMongo().catch(error => {
        return res.status(404).json({ error: "Connection Failed"})
    })
    const { slug } = req.query
    
    if(slug[0] === "one") {
        return res.json(await Templates.findOne({ 'type': slug[1], "key": slug[2] }).catch(err => res.status(400).json(err)))
    }
    else  {        
        return res.json(await Templates.find({ 'type': slug[1] }).catch(err => res.status(400).json(err)))
    }
}