// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import connectMongo from "@/database/connection";
import { Endpoints, Submissions } from "@/model/Schema";

export default async function handler(req, res) {
  await connectMongo().catch(error => {
    return res.redirect(307, "http://localhost:3000/error");
  })
  const { slug } = req.query

  try{
    const data = await Endpoints.findOne({ "key": slug[0] })
    submitAction(data.user)
  }
  catch(err){
    res.redirect(307, "http://localhost:3000/error");
  }

  async function submitAction(user) {
    try{
      await Submissions.create({ key: slug[0], user, data: JSON.stringify(req.body)})
      res.status(200).redirect("http://localhost:3000/thankyou")
    }
    catch(err){
      res.redirect(307, "http://localhost:3000/error");
    }
  }

}
