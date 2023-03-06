// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
const Email = require('email-templates')

import { render } from '@react-email/render';
import nodemailer from 'nodemailer';
import { EmailTemplate } from '@/components/emailTemplate';
import connectMongo from "@/database/connection";
import { Endpoints, Submissions } from "@/model/Schema";

export default async function handler(req, res) {
  await connectMongo().catch(error => {
    return res.redirect(303, `${process.env.NEXTAUTH_URL}/error`);
  })
  const { slug } = req.query

  try{
    const data = await Endpoints.findOne({ "key": slug[0] })
    submitAction(data)
  }
  catch(err){
    res.redirect(303, `${process.env.NEXTAUTH_URL}/error`);
  }

  async function submitAction(data) {
    try{
      await Submissions.create({ key: slug[0], user: data.user, data: JSON.stringify(req.body)})
      sendEmail(req.body.fullname, req.body.email, data, req.body.message)
      res.redirect(303, `${process.env.NEXTAUTH_URL}/thankyou`)
    }
    catch(err){
      console.log(err)
      res.json({error: err});
    }
  }

}



function sendEmail(name, useremail, data, message) {

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        type: 'OAuth2',
        user: 'abel.d.otegbola@gmail.com',
        pass: 'Gbengaotes1',
        clientId: process.env.CLIENT_ID,
        clientSecret: process.env.CLIENT_SECRET,
        refreshToken: process.env.OAUTH_REFRESH_TOKEN
      },
    });

    const emailHtml = render(EmailTemplate({ url: `http://localhost:3000/dashboard/endpoints/view?title=${data.title}&endpoint=${data.key}`, name, data, useremail, message }));

    const options = {
      from: 'no-reply@formilio.com',
      to: data.user,
      subject: 'New Submission',
      html: emailHtml,
    };

    transporter.sendMail(options);
}