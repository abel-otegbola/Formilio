import connectMongo from "@/database/connection"
import Users from "@/model/Schema";
import { hash } from "bcryptjs";

export default async function handler(req, res) {
    await connectMongo().catch(error => res.json({ error: "Connection Failed"}))

    if(req.method === "POST") {
        if(!req.body) return res.status(404).json({ error: "Don't have form data" })
        const { fullname, email, password } = req.body;

        //Check duplicate users
        const checkexisting = await Users.findOne({ email });
        if(checkexisting) return res.status(422).json({ error: "User already exists" })

        Users.create({ fullname, email, password: await hash(password, 12) }, function(err, data){
            if(err) return res.status(404).json({ error: err });
            res.status(200).json({ msg: "Signed up successfully", user: data })
        })

    }
    else {
        res.status(500).json({ error: "HTTPS Method not valid" })
    }
}