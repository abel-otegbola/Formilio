import connectMongo from "@/database/connection";
import { Endpoints, Submissions, Messages } from "@/model/Schema"

export default async function handler(req, res) {
    await connectMongo().catch(error => {
        return res.status(400).json({error: "Connection Failed"})
    })

    const { slug } = req.query
    
    if(slug[0] === "endpoints") {
        return res.json(await Endpoints.find({ 'user': slug[1] }).sort({ _id:- 1 }).skip(slug[2]).limit(slug[3]).catch(err => res.status(404).json(err)))
    }
    else if(slug[0] === "submissions") {
        return res.json(await Submissions.find({ 'user': slug[1] }).sort({ _id:- 1 }).skip(slug[2]).limit(slug[3]).catch(err => res.status(404).json(err)))
    }
    else if(slug[0] === "messages") {
        return res.json(await Messages.find({ 'user': slug[1] }).sort({ _id:- 1 }).skip(slug[2]).limit(slug[3]).catch(err => res.status(404).json(err)))
    }
}