// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import connectMongo from "@/database/connection";
import { Endpoints } from "@/model/Schema";

export default async function handler(req, res) {
    await connectMongo().catch(error => res.json({ error: "Connection Failed"}))
    const { user, title, key, address } = req.body

    return res.json(await Endpoints.create({ user, title, key, address }).catch(err => res.status(400).json(err)))
}