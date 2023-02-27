import connectMongo from "@/database/connection";
import { Endpoints } from "@/model/Schema"

export default async function handler(req, res) {
    await connectMongo().catch(error => {
        return res.json({ error: "Connection Failed"})
    })
    const { slug } = req.query
    
    Endpoints.find({ "user": slug[0] }, function(err, data){
        if(err) return res.status(404).json({ error: err });
        return res.status(200).json({ data })
    }) 
}