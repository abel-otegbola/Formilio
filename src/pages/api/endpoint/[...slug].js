// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
const Email = require('email-templates')

import { render } from '@react-email/render';
import nodemailer from 'nodemailer';
import { EmailTemplate } from '@/components/templates/emailTemplate';
import connectMongo from "@/database/connection";
import { Endpoints, Messages, Submissions } from "@/model/Schema";

export default async function handler(req, res) {

  //Connect to mongodb database
  await connectMongo().catch(error => {
    return res.redirect(303, `${process.env.NEXTAUTH_URL}/error`);
  })

  //Get the query from the api
  const { slug } = req.query

  //Check the data in req.body and save it
  let formdata = {}
  if(typeof req.body === "string") {
    formdata = JSON.parse(req.body)
  }
  else {
    formdata = req.body
  }

  //Find the endpoint in the database using the query
  try{
    const data = await Endpoints.findOne({ "key": slug[0] })
    submitAction(data)
  }
  catch(err){
    //Return error page if endpoint is not found
    res.redirect(303, `${process.env.NEXTAUTH_URL}/error`);
  }

  async function submitAction(data) {
    try{
      //Submit the information to database
      await Submissions.create({ key: slug[0], user: data.user, data: JSON.stringify(formdata)})

      //Send the information to the user email
      sendEmail(data, formdata, false)

      //send notification to user account
      await Messages.create({ user: data.user, message: `You received a new submission from ${formdata.email || formdata.name || formdata.fullname}`, sender: "Formilio", opened: false })

      //Check if autoRespond is enabled and includes a message
      if(data.autoRespond && data.autoRespond !== "") {

        //Send the message to the email of the recipient
        sendEmail(data, formdata, true)
      }

      //Redirect to thank you page or return success message
      if(typeof req.body === "string") {
        return res.status(200).json({ msg: "Submitted successfully" })
      }
      else {
        if(data.thankYou !== "") {
            return res.redirect(303, data.thankYou)
        }
        else {
          return res.redirect(303, `${process.env.NEXTAUTH_URL}/thankyou?id=${slug[0]}`)
        }
      }
    }
    catch(err){
      return res.json({error: err});
    }
  }

}


//Email sending implementation
function sendEmail(data, formdata, respond) {

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

    const emailHtml = render(EmailTemplate({ url: `https://formilio.vercel.app/dashboard/endpoints/view?title=${data.title}&endpoint=${data.key}`, formdata, data, respond })); //Change the template to html to send

    const options = {
      from: 'no-reply@formilio.com',
      to: respond ? formdata.email : data.user, //Send to the user or the recipient
      subject: 'New Submission',
      html: emailHtml,
    };

    transporter.sendMail(options);
}