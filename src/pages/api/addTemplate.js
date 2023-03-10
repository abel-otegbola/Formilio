// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import connectMongo from "@/database/connection";
import { Templates } from "@/model/Schema";

export default async function handler(req, res) {
    await connectMongo().catch(error => res.json({ error: "Connection Failed"}))

    const { key, user, type, tags, components} = req.body

    return res.json(await Templates.updateOne(
        { "key": key, "user": user, "type": type }, 
        { $set: { "key": key, "user": user, "type": type, "tags": tags, "components": components } }, 
        { upsert: true }
    ).catch(err => res.status(400).json(err)))

}