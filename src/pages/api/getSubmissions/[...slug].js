import connectMongo from "@/database/connection";
import { Endpoints, Submissions } from "@/model/Schema"

export default async function handler(req, res) {
    await connectMongo().catch(error => {
        return res.json({ error: "Connection Failed"})
    })
    const { slug } = req.query

    
    if(slug[0] === "all") {
        if(slug[1]) {
            Submissions.find({ "user": slug[1] }, function(err, data){
                if(err) return res.status(404).json({ error: err });
                return res.status(200).json({data})
            })
        }
    }
    else  {
        Submissions.find({ "key": slug[0] }, function(err, data){
            if(err) {
                return res.status(405).json({ error: err }); 
            } else {
                return res.status(200).json({ data })
            }
        })
    }
}