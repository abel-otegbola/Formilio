import connectMongo from "@/database/connection";
import { Submissions } from "@/model/Schema"

export default async function handler(req, res) {
    await connectMongo().catch(error => res.json({ error: "Connection Failed"}))
    const { slug } = req.query
    
    Submissions.find({ user: slug[0] }, function(err, data){
        if(err) return res.status(404).json({ error: err });
        res.status(200).json({ data })
    })
}