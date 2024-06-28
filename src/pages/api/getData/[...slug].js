import connectMongo from "@/database/connection";
import { Endpoints, Submissions, Messages } from "@/model/Schema"

export default async function handler(req, res) {
    await connectMongo().catch(err => {
        return res.status(404).json({error: "Connection Failed"})
    })

    const { slug } = req.query
    
    if(slug[0] === "endpoints") {
        res.json(
            await Endpoints
            .find({ 'user': slug[1] })
            .sort({ _id:- 1 })
            .catch(err => {
                res.status(404).json(err)
            })
        )
        return;
    }
    else if(slug[0] === "submissions") {
        if(slug[4])
        {
            res.json(await Submissions.find({ 'user': slug[1], 'key': slug[4] }).sort({ _id:- 1 }).skip(slug[2]).limit(slug[3]).catch(err => res.status(404).json(err)))
            return;
        }      
        else {
            res.json(await Submissions.find({ 'user': slug[1] }).sort({ _id:- 1 }).skip(slug[2]).limit(slug[3]).catch(err => res.status(404).json(err)))
            return;
        }
    }
    else if(slug[0] === "messages") {
        res.json(await Messages.find({ 'user': slug[1] }).sort({ _id:- 1 }).skip(slug[2]).limit(slug[3]).catch(err => res.status(404).json(err)))
        return;
    }
}