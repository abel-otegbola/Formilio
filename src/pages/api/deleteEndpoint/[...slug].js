import connectMongo from "@/database/connection";
import { Endpoints, Submissions } from "@/model/Schema"

export default async function handler(req, res) {
    await connectMongo().catch(error => res.json({ error: "Connection Failed"}))
    const { slug } = req.query

    try {
        await Submissions.deleteMany({ "key": slug[0] })
        deleteEndpoint()
    }
    catch(err) {
        res.json({error: "Endpoint could not be deleted"})
    }

    async function deleteEndpoint() {
        await Endpoints.deleteOne({  "key": slug[0] })
        res.status(200).json({ msg: "Endpoint Deleted successfully" })
    }
}