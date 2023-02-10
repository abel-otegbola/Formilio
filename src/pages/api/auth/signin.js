import connectMongo from "@/database/connection"
import Users from "@/model/Schema";
import { compare } from "bcryptjs";

export default async function handler(req, res) {
    await connectMongo().catch(error => res.json({ error: "Connection Failed"}))

    if(!req.body) return res.status(404).json({ error: "Don't have form data" })
    const { email, password } = req.body;

    //Check user
    const checkexisting = await Users.findOne({ email });
    if(checkexisting) {
        //Check hased password with DB password
        const checkPassword = await compare(password, checkexisting.password);

        //Incorrect password - send response
        if (!checkPassword) {
            res.status(400).json({error: 'Password doesnt match'});
        }

        //Else send success response
        return res.status(200).json({ msg: "Login successful", data: checkexisting });
    }
    else {
        res.status(400).json({ error: "User does not exist" })
    }
}