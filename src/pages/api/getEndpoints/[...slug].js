import connectMongo from "@/database/connection";
import { Endpoints } from "@/model/Schema"

export default async function handler(req, res) {
    const { slug } = req.query
    await connectMongo()
    try {
        Endpoints.find({ user: slug[0] }, function(err, data){
            if(err) return res.status(404).json({ error: err });
            res.status(200).json({ data })
        })
    }
    catch (err) {
        res.status(500).json({ error: "Connection Failed"})
    }
    
}