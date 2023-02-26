// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import connectMongo from "@/database/connection";
import { Endpoints, Submissions } from "@/model/Schema";

export default async function handler(req, res) {
  await connectMongo().catch(error => res.json({ error: "Connection Failed"}))
  const { slug } = req.query
  let user = ""

  Endpoints.findOne({ key: slug[0] }, function(err, data) {
    if(err) return res.status(404).json({ error: "User not found" })
    Submissions.create({ key: slug[0], user: data.user, data: JSON.stringify(req.body)}, function(err, data){
      if(err) return res.status(404).json({ error: err });
      res.status(200).redirect("https://mailme.vercel.app/thankyou")
    })
  })

  if(user !== "") {
  }
}
