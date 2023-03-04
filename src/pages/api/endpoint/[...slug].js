// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
const Email = require('email-templates')

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
      sendEmail(req.body.fullname, req.body.email, user, req.body.message)
      res.redirect(303, `${process.env.NEXTAUTH_URL}/thankyou`)
    }
    catch(err){
      console.log(err)
      res.json({error: err});
    }
  }

}


function sendEmail(name, user, useremail, message) {
  const email = new Email({
    message: {
        from: "abel.d.otegbola@gmail.com"
    },
    send: true,
    transport: {
        jsonTransport: true
    },
    subjectPrefix: process.env.NEXTAUTH_URL === 'http://localhost:3000' ? false : `[${process.env.NEXTAUTH_URL.toUpperCase()}]`
  });
  email.send({
      template: "templates",
      message: {
          to: user
      },
      locals: {
        name,
        email: useremail,
        user,
        message
      }
  })
  .then(console.log("Email sent"))
  .catch(console.error)
}