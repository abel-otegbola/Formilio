import connectMongo from "@/database/connection";
import { Endpoints } from "@/model/Schema"

export default async function handler(req, res) {
    const { slug } = req.query

    await connectMongo().catch(error => {
        return res.status(404).json({ error: "Connection Failed"})
    })
    if (req.body.thankyouLink) {
        return res.json(await Endpoints.updateOne({ "key": slug[0] }, { $set: { "thankYou":  req.body.thankyouLink } }).catch(err => res.status(400).json(err)))
    }
    else if(req.body.autoRespond) {
        return res.json(await Endpoints.updateOne({ "key": slug[0] }, { $set: { "autoRespond":  req.body.autoRespond } }).catch(err => res.status(400).json(err)))
    }

}