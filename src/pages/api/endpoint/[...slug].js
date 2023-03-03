// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import connectMongo from "@/database/connection";
import { Endpoints, Submissions } from "@/model/Schema";

export default async function handler(req, res) {
  await connectMongo().catch(error => {
    return res.redirect(303, `${process.env.NEXTAUTH_URL}/error`);
  })
  const { slug } = req.query

  try{
    const data = await Endpoints.findOne({ "key": slug[0] })
    submitAction(data.user)
  }
  catch(err){
    res.redirect(303, `${process.env.NEXTAUTH_URL}/error`);
  }

  async function submitAction(user) {
    try{
      await Submissions.create({ key: slug[0], user, data: JSON.stringify(req.body)})
      res.redirect(303, `${process.env.NEXTAUTH_URL}/thankyou`)
    }
    catch(err){
      res.redirect(303, `${process.env.NEXTAUTH_URL}/error`);
    }
  }

}
